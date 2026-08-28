(() => {
  const whatsappUrl = "https://wa.me/8619556679532?text=Hi%20AeroCarbon%20Tech%2C%20I%E2%80%99m%20looking%20for%20custom%20carbon%20fiber%20parts.%20I%20can%20share%20the%20application%2C%20quantity%20and%20drawings%20for%20quotation.";

  window.dataLayer = window.dataLayer || [];

  const track = (event, details = {}) => {
    window.dataLayer.push({ event, ...details });
  };

  window.AeroCarbonTracking = { track };

  const style = document.createElement("style");
  style.textContent = `
    .floating-whatsapp {
      position: fixed;
      right: max(18px, env(safe-area-inset-right));
      bottom: calc(18px + env(safe-area-inset-bottom));
      z-index: 40;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      min-height: 48px;
      padding: 0 18px 0 14px;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 999px;
      background: #1f9d55;
      color: #fff;
      box-shadow: 0 10px 28px rgba(0, 0, 0, 0.3);
      font-family: inherit;
      font-size: 14px;
      font-weight: 700;
      line-height: 1;
      text-decoration: none;
      transition: background-color 160ms ease, box-shadow 160ms ease, transform 160ms ease, opacity 160ms ease;
    }
    .floating-whatsapp:hover {
      background: #168347;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.36);
      transform: translateY(-1px);
    }
    .floating-whatsapp:focus-visible {
      outline: 2px solid #d3aa58;
      outline-offset: 3px;
    }
    .floating-whatsapp.is-suppressed {
      opacity: 0;
      pointer-events: none;
      transform: translateY(8px);
    }
    .floating-whatsapp__icon {
      width: 22px;
      height: 22px;
      flex: 0 0 22px;
      fill: currentColor;
    }
    @media (max-width: 640px) {
      .floating-whatsapp {
        right: max(12px, env(safe-area-inset-right));
        bottom: calc(12px + env(safe-area-inset-bottom));
        width: 52px;
        min-width: 52px;
        height: 52px;
        min-height: 52px;
        padding: 0;
      }
      .floating-whatsapp__label {
        position: absolute;
        width: 1px;
        height: 1px;
        padding: 0;
        margin: -1px;
        overflow: hidden;
        clip: rect(0, 0, 0, 0);
        white-space: nowrap;
        border: 0;
      }
      .floating-whatsapp__icon {
        width: 24px;
        height: 24px;
        flex-basis: 24px;
      }
    }
    @media (prefers-reduced-motion: reduce) {
      .floating-whatsapp { transition: none; }
    }
  `;
  document.head.appendChild(style);

  const button = document.createElement("a");
  button.className = "floating-whatsapp";
  button.href = whatsappUrl;
  button.target = "_blank";
  button.rel = "noopener noreferrer";
  button.setAttribute("aria-label", "Chat with Aero Carbon Tech on WhatsApp");
  button.dataset.trackingSource = "floating_button";
  button.innerHTML = `
    <svg class="floating-whatsapp__icon" viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16.04 3C9.42 3 4.05 8.28 4.05 14.79c0 2.3.68 4.55 1.96 6.46L4 29l7.98-1.98a12.13 12.13 0 0 0 4.05.7h.01C22.66 27.72 28 22.45 28 15.94 28 9.43 22.66 3 16.04 3Zm0 22.73h-.01a10.1 10.1 0 0 1-3.85-.75l-.55-.24-4.74 1.18 1.27-4.54-.3-.57a9.66 9.66 0 0 1-1.52-5.18c0-5.39 4.42-9.77 9.85-9.77 2.63 0 5.1 1.01 6.96 2.85A9.63 9.63 0 0 1 26.04 15.6c0 5.4-4.42 10.13-10 10.13Zm5.4-7.32c-.3-.15-1.75-.85-2.02-.95-.27-.1-.47-.15-.67.15-.2.3-.77.95-.94 1.14-.17.2-.35.22-.65.07-.3-.14-1.25-.45-2.38-1.45a8.78 8.78 0 0 1-1.65-2.02c-.17-.3-.02-.45.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.59-.92-2.18-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.01-1.04 2.47s1.07 2.87 1.22 3.07c.15.2 2.1 3.17 5.08 4.45.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.08 1.75-.71 2-1.39.25-.68.25-1.26.17-1.38-.07-.12-.27-.2-.57-.34Z"/>
    </svg>
    <span class="floating-whatsapp__label">Chat on WhatsApp</span>
  `;
  document.body.appendChild(button);

  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link) return;
    if (/^https?:\/\/wa\.me\//.test(link.href)) {
      track("whatsapp_click", { source: link.dataset.trackingSource || "contact_section" });
      return;
    }
    if (link.href.startsWith("mailto:")) track("email_click");
  });

  const trackedForms = new WeakSet();
  const trackSuccessfulRfq = (status) => {
    if (!status.classList.contains("success")) return;
    const form = status.closest("form");
    if (!form || trackedForms.has(form)) return;
    trackedForms.add(form);
    track("generate_lead");
  };
  document.querySelectorAll("[data-rfq-status], #form-status").forEach((status) => {
    const observer = new MutationObserver(() => trackSuccessfulRfq(status));
    observer.observe(status, { attributes: true, childList: true, characterData: true, subtree: true });
  });

  const blockingControls = document.querySelectorAll('[data-phase1-rfq], #rfq-form, [class*="cookie" i]');
  if ("IntersectionObserver" in window && blockingControls.length) {
    const visibleControls = new Set();
    const overlapObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) visibleControls.add(entry.target);
        else visibleControls.delete(entry.target);
      });
      button.classList.toggle("is-suppressed", visibleControls.size > 0);
    }, { threshold: 0.15 });
    blockingControls.forEach((control) => overlapObserver.observe(control));
  }
})();
