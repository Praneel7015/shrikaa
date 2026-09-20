# Local SEO & Metrics Checklist (Phase 4)

Off-repo / ops tasks for **Shrikaa Intellect Innovations**. Complete after deploying the static site.

## Canonical NAP (use exactly)

| Field | Value |
|---|---|
| Name | Shrikaa Intellect Innovations |
| Address | 276/D, Jayanagar 8th Block, Bengaluru |
| Phone | 7026386563 (+91 7026386563) |
| Email | askshrikaa@gmail.com |
| Website | https://www.shrikaa.co.in |
| Hours | Mon–Sat 9:00 AM – 6:00 PM; Sunday Closed |

## Google Business Profile

- [ ] Claim / verify GBP for the Jayanagar address
- [ ] Primary category: Tutoring service or Educational institution
- [ ] Add services: PUC, CET/KCET, NEET, JEE
- [ ] Upload classroom / result / facade photos
- [ ] Link website to `/admissions` and WhatsApp
- [ ] Enable messaging; keep hours accurate
- [ ] Post weekly updates (admissions open, results, tips)

## Search Console & Analytics

- [ ] Add property `https://www.shrikaa.co.in` in Google Search Console
- [ ] Submit `https://www.shrikaa.co.in/sitemap.xml`
- [ ] Create GA4 property; paste Measurement ID into `assets/js/form-config.js` → `SHRIKAA_ANALYTICS.ga4`
- [ ] Verify events in GA4 DebugView: `generate_lead`, `whatsapp_click`, `call_click`, `askshrikaa_click`
- [ ] Optional: Bing Webmaster Tools

## Citations (exact NAP)

Priority order:

1. Google Business Profile  
2. Apple Maps / Bing Places  
3. Justdial, Sulekha, IndiaMART (education)  
4. Facebook Page (confirm `facebook.com/shrikaa.shrika`)  
5. Instagram / YouTube (confirm handles; update footer if wrong)

## Reviews

- [ ] Ask every counselled family for a GBP review within 7 days
- [ ] Reply to all reviews within 48 hours
- [ ] Never incentivize fake reviews

## Monthly metrics (log here or a sheet)

| Month | GSC clicks | Top query | Form leads | WA clicks | Calls | PSI mobile LCP (home) |
|---|---|---|---|---|---|---|
| YYYY-MM |  |  |  |  |  |  |

## Post-deploy smoke test

- [ ] Extensionless URLs work (`/about`, `/admissions`, program landings)
- [ ] `/sitemap.xml` and `/robots.txt` return 200
- [ ] WhatsApp / Facebook share preview shows `og-default.jpg`
- [ ] Mobile sticky CTA: Call | WhatsApp | Apply
- [ ] Forms still email via FormSubmit
