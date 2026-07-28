# Homepage Production Baseline

Baseline commit: `15105475156ed3cac707260da1bbe35dc4b3f149`  
Homepage path: `/index.html`  
SHA-256 at task start: `2cd3949437ec7e0aeb6728ef6ebd17520c134035d34961b55d89f5b31db2f666`

## Protected SEO

- Title: `Aero Carbon Tech | FRT Carbon Fiber Manufacturer for UAV, Automotive & Industrial OEMs`
- Meta description: `Aero Carbon Tech is the export-facing carbon fiber product site backed by FRTCARBON, supplying carbon fiber sheets, tubes, UAV frames, CNC parts and custom composite components for Middle East OEM buyers.`
- H1: `Carbon Fiber Products for OEM Buyers`
- Structured data types: none.
- Canonical: none.

## Visible Section Order

1. Hero — Carbon Fiber Products for OEM Buyers
2. B2B purchasing proof — Clear specs, real factory, fast quoting.
3. Products — Factory product lines
4. Visual proof — Material texture, precision parts, real applications.
5. Signature products — Made to look precise before it is even measured.
6. Production process — Real factory process frames, not catalog decoration.
7. Factory information — Shenzhen sales, Huizhou production base
8. Applications — Where buyers use these parts
9. GCC market — Built for GCC procurement teams
10. Cooperation process — From photo or drawing to shipment
11. RFQ — Get a Factory Quote
12. Footer

## Existing Navigation Labels

- Products
- Factory
- Applications
- Middle East
- Request Quote

## Existing CTA Labels

- Request Quote
- Send RFQ
- View Factory Capability
- Request Datasheet
- Chat on WhatsApp →
- Send an Email →
- Request Factory Quote
- Request quotation
- Factory capability

## Protected Behavior

- Hash-anchor navigation with smooth scrolling and active-section state.
- Web3Forms asynchronous submission.
- Email copied into hidden `replyto` before submission.
- Success and error feedback through `#form-status`.
- Required fields: Email, Product Type, Quantity, Project Requirements.
- Optional fields: Company, Country.

## Regression Rule

At the end of this task, `git diff -- index.html` must be empty and its SHA-256 must remain the value above. Any future change to this file requires an explicit, separately reviewed homepage request.
