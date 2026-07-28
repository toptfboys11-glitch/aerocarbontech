import { createHash } from 'node:crypto';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, normalize, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const homepageBaseline = '2cd3949437ec7e0aeb6728ef6ebd17520c134035d34961b55d89f5b31db2f666';
const pages = ['index.html', 'resources/index.html', 'applications/index.html', 'capabilities/index.html'];
const phasePages = pages.slice(1);
const requiredFiles = [...pages, 'phase1-pages.css', 'robots.txt', 'sitemap.xml', 'public/robots.txt', 'public/sitemap.xml'];
const errors = [];
const notices = [];
const warnings = [];

function fail(message) { errors.push(message); }
function pass(message) { notices.push(`PASS  ${message}`); }
function warn(message) { warnings.push(`WARN  ${message}`); }
function matches(html, pattern) { return [...html.matchAll(pattern)].map((match) => match[1]?.trim() ?? match[0]); }
function text(html) { return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, ' ').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim(); }
function routeToFile(pathname) {
  const decoded = decodeURIComponent(pathname);
  if (decoded === '/') return 'index.html';
  const clean = decoded.replace(/^\//, '');
  return clean.endsWith('/') ? `${clean}index.html` : clean;
}

for (const file of requiredFiles) {
  const absolute = join(root, file);
  if (!existsSync(absolute) || !statSync(absolute).isFile()) fail(`Missing required file: ${file}`);
}

const home = readFileSync(join(root, 'index.html'), 'utf8');
const homeHash = createHash('sha256').update(home).digest('hex');
if (homeHash === homepageBaseline) pass('Homepage SHA-256 matches the protected production baseline.');
else fail(`Homepage changed: expected ${homepageBaseline}, received ${homeHash}.`);

const metadata = new Map();
for (const file of pages) {
  const html = readFileSync(join(root, file), 'utf8');
  const titles = matches(html, /<title>([\s\S]*?)<\/title>/gi);
  const descriptions = matches(html, /<meta\s+name=["']description["']\s+content=["']([^"']*)["'][^>]*>/gi);
  const h1s = matches(html, /<h1\b[^>]*>([\s\S]*?)<\/h1>/gi).map(text);
  const canonicals = matches(html, /<link\s+rel=["']canonical["']\s+href=["']([^"']+)["'][^>]*>/gi);
  const viewports = matches(html, /<meta\s+name=["']viewport["']\s+content=["']([^"']+)["'][^>]*>/gi);
  const ids = matches(html, /\sid=["']([^"']+)["']/gi);
  if (titles.length !== 1) fail(`${file}: expected one title, found ${titles.length}.`);
  if (descriptions.length !== 1) fail(`${file}: expected one meta description, found ${descriptions.length}.`);
  if (h1s.length !== 1) fail(`${file}: expected one H1, found ${h1s.length}.`);
  if (viewports.length !== 1 || !/width=device-width/.test(viewports[0] ?? '')) fail(`${file}: expected one device-width viewport declaration.`);
  if (file !== 'index.html' && canonicals.length !== 1) fail(`${file}: expected one canonical, found ${canonicals.length}.`);
  if (!/^<!doctype html>/i.test(html.trim())) fail(`${file}: missing HTML5 doctype.`);
  if (!/<html\s+lang=["']en["']/i.test(html)) fail(`${file}: missing English lang attribute.`);
  const duplicateIds = [...new Set(ids.filter((id, index) => ids.indexOf(id) !== index))];
  if (duplicateIds.length) fail(`${file}: duplicate IDs: ${duplicateIds.join(', ')}.`);
  const combinedMeta = [...titles, ...descriptions, ...canonicals].join(' ');
  if (/localhost|vercel\.app|127\.0\.0\.1/i.test(combinedMeta)) fail(`${file}: preview or local host found in metadata.`);
  if (file !== 'index.html' && !/<meta\s+name=["']robots["']\s+content=["']noindex,\s*follow["'][^>]*>/i.test(html)) fail(`${file}: Phase 1 page must use noindex, follow.`);
  if (file !== 'index.html') {
    const expectedCanonical = `https://www.aerocarbontech.com/${dirname(file)}/`;
    if (canonicals[0] !== expectedCanonical) fail(`${file}: canonical must be ${expectedCanonical}.`);
  }
  metadata.set(file, { title: titles[0], description: descriptions[0], h1: h1s[0] });

  if (file !== 'index.html') {
    for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
      const label = text(match[2]);
      if (/^(?:Request a quote|Send an RFQ|Request factory quote|Discuss (?:your )?requirements)$/i.test(label) && match[1] !== '../#contact') {
        fail(`${file}: CTA "${label}" must link to ../#contact.`);
      }
    }
  }

  for (const match of html.matchAll(/<(?:a|link)\b[^>]*(?:href)=["']([^"']+)["'][^>]*>/gi)) {
    const href = match[1];
    if (/^(?:https?:|mailto:|tel:|javascript:|data:)/i.test(href)) continue;
    const pageUrl = new URL(file === 'index.html' ? '/' : `/${dirname(file)}/`, 'https://www.aerocarbontech.com');
    const targetUrl = new URL(href, pageUrl);
    const targetFile = routeToFile(targetUrl.pathname);
    if (!existsSync(join(root, normalize(targetFile)))) fail(`${file}: broken local link ${href} -> ${targetFile}.`);
    if (targetUrl.hash && targetFile === 'index.html') {
      const id = targetUrl.hash.slice(1);
      if (!new RegExp(`\\bid=["']${id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`).test(home)) fail(`${file}: missing homepage anchor ${targetUrl.hash}.`);
    }
  }
}

for (const key of ['title', 'description', 'h1']) {
  const seen = new Map();
  for (const [file, values] of metadata) {
    const value = values[key];
    if (!value) continue;
    if (seen.has(value)) fail(`Duplicate ${key}: ${file} and ${seen.get(value)}.`);
    seen.set(value, file);
  }
}

const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');
for (const path of ['/resources/', '/applications/', '/capabilities/']) {
  if (sitemap.includes(path)) fail(`Sitemap must exclude unfinished noindex route ${path}.`);
}
if (!sitemap.includes('https://www.aerocarbontech.com/')) fail('Sitemap does not contain the production homepage URL.');
const robots = readFileSync(join(root, 'robots.txt'), 'utf8');
if (!/User-agent:\s*\*/i.test(robots) || !/Allow:\s*\//i.test(robots)) fail('robots.txt does not explicitly allow crawling.');
if (!/Sitemap:\s*https:\/\/www\.aerocarbontech\.com\/sitemap\.xml/i.test(robots)) fail('robots.txt sitemap declaration is missing or incorrect.');

const publicRobots = readFileSync(join(root, 'public/robots.txt'), 'utf8');
const publicSitemap = readFileSync(join(root, 'public/sitemap.xml'), 'utf8');
if (publicRobots !== robots) warn('public/robots.txt differs from production root robots.txt; root file remains authoritative.');
else pass('public/robots.txt matches the production root robots.txt.');
if (publicSitemap !== sitemap) warn('public/sitemap.xml differs from production root sitemap.xml; root file remains authoritative.');
else pass('public/sitemap.xml matches the production root sitemap.xml.');

for (const marker of ['https://api.web3forms.com/submit', 'name="access_key"', 'name="replyto"', 'name="botcheck"', 'fetch(rfqForm.action']) {
  if (!home.includes(marker)) fail(`Homepage RFQ behavior marker missing: ${marker}`);
}

if (errors.length === 0) {
  for (const message of notices) console.log(message);
  for (const message of warnings) console.warn(message);
  console.log(`PASS  ${pages.length} HTML routes checked; required files, metadata, links, indexation rules, robots, sitemap and RFQ markers are valid.`);
  process.exit(0);
}

for (const message of notices) console.log(message);
for (const message of warnings) console.warn(message);
for (const message of errors) console.error(`FAIL  ${message}`);
console.error(`Validation failed with ${errors.length} error(s).`);
process.exit(1);
