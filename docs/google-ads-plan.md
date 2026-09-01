# Boutique Coffee at Work: Google Ads plan

Prepared 1 September 2026 for Chris Prokopiou. Working document for the first 90 days of paid search.

All search volumes, bid ranges and click forecasts below come from a live Google Ads Keyword Planner pull run on 1 September 2026 (G.Ads-Agent workflow `keyword_forecast.yml`, run 33454747404 and 33455428685). Raw CSVs sit beside this file in `docs/google-ads/data/`. Organic numbers come from Search Console for boutiquecoffee.com.au, 1 June to 30 August 2026. Conversion rate and close rate are stated assumptions, not data, and are labelled as such.

## 1. What the demand looks like

### Melbourne search volume, rental and hire intent (avg monthly searches, geo: Melbourne)

| Query | Melbourne | Australia | Top-of-page bid range (AUD) |
|---|---|---|---|
| coffee machine rental (incl. "rent coffee machine") | 210 | 720 | $2.75 to $7.36 |
| coffee machines for offices | 170 | 720 | $2.70 to $19.46 |
| coffee machine hire (incl. "hire coffee machine") | 90 | 390 | $2.00 to $5.85 |
| coffee machine rental melbourne | 40 | 70 | $3.34 to $13.18 |
| coffee machine hire melbourne | 40 | 70 | $2.56 to $9.29 |
| coffee machine rental for office / office coffee machine rental | 20 | 110 | $3.10 to $9.68 |
| office coffee machine hire | 20 | 70 | $3.19 to $9.42 |
| commercial coffee machine rental | 20 | 110 | $2.55 to $7.72 |
| workplace coffee machine | 20 | 110 | $2.20 to $19.32 |
| coffee machine rental near me | 20 | 30 | $1.69 to $12.91 |
| office coffee machine hire melbourne | 10 | 10 | $2.54 to $7.60 |
| commercial coffee machine hire melbourne | 10 | 10 | $1.73 to $5.01 |
| coffee machine lease / commercial coffee machine lease / coffee machine lease melbourne | 10 each | 70 / 10 / 10 | $1.65 to $6.73 |
| free coffee machine for office / free coffee machine for business | 10 each | 10 each | no bid data |
| corporate coffee machine rental | 10 | 20 | $12.62 to $25.60 (AU) |

Roughly 600 Melbourne searches a month carry clear rental, hire or lease intent. Another 200 or so ("coffee machines for offices", "workplace coffee machine", "office coffee machine melbourne") are research intent from the same buyer. Call it 800 addressable searches a month. Competition index sits between 75 and 100 on every commercial term, so the auction is busy.

### Seasonality

October is the peak. October 2025 ran at 390 searches for "coffee machine rental" in Melbourne against a 210 average (Australia-wide it spiked to 2,400 against 720). January is the trough (110). Launching in September puts the account live and settled before the October lift.

### Suburb-modified queries: zero

We tested 219 suburb variants ("coffee machine rental richmond", "office coffee machine clayton", "coffee machine hire footscray" and so on across 73 suburbs). Every one returned 0 average monthly searches. Even "coffee machine rental geelong" is 0. Nobody types the suburb. They type "coffee machine rental melbourne" or plain "coffee machine rental" from a Melbourne IP.

That single fact decides the account structure (section 3).

### Where the site sits organically right now

Search Console, last 90 days: 581 impressions and 0 clicks across all rental and machine queries. "coffee machine rental melbourne" averages position 66. "free coffee machine for business" is the top impression query at 62 impressions, position 42. The blog is doing the organic work (maintenance guide, 485 impressions); the commercial pages are nowhere. Paid is the only way to be on page one for these terms this quarter.

## 2. Forecast

Keyword Planner campaign forecast, 30 days from 3 September 2026, Melbourne geo, 26 core rental/hire/office keywords, Maximise Clicks with a CPC ceiling, $60/day budget available.

| Match type | CPC ceiling | Clicks / 30 days | Avg CPC | Spend / 30 days |
|---|---|---|---|---|
| Phrase | $4 | 37 | $2.85 | $105 |
| Phrase | $6 | 59 | $4.16 | $245 |
| Phrase | $8 | 79 | $5.25 | $413 |
| Phrase | $12 | 96 | $7.08 | $681 |
| Exact | $4 | 13 | $2.97 | $39 |
| Exact | $6 | 24 | $4.35 | $102 |
| Exact | $8 | 36 | $5.70 | $207 |
| Exact | $12 | 47 | $7.56 | $355 |

Read this carefully: the budget is never the limit. At an $8 ceiling on phrase match the campaign uses about $14 a day of a $60 budget. Demand is the ceiling. Pushing the CPC cap from $8 to $12 buys 17 more clicks for $268 more spend, which is a poor trade. The sweet spot is phrase match with a $6 to $8 ceiling.

(The current API version no longer returns impressions or CTR in the forecast, so those columns are absent rather than estimated.)

### What that turns into

Assumptions, to be replaced with real numbers after the first 60 days:

- Landing page conversion rate: 5% conservative, 8% target. B2B service pages with a free-trial offer and a phone number typically land in that band.
- Trial-to-keep rate: 30% to 40%. Chris to confirm from his own history.
- Account value: $35 to $85 a week plus beans, against a 5+ year average client relationship on the current book. Call it $9,000 to $22,000 rental revenue over a relationship, before beans.

| | Conservative | Target |
|---|---|---|
| Clicks a month (phrase, $8 cap) | 79 | 96 |
| Spend a month | $413 | $681 |
| Enquiries a month | 4 | 8 |
| Cost per enquiry | $103 | $85 |
| New accounts a month | 1 | 3 |
| Cost per new account | $413 | $227 |

One new account a month pays for the whole quarter's ad spend inside its first three months of rental. October should run at roughly double these click numbers.

Recommended budget: $30 a day ($900 a month). The forecast says $15 to $23 a day gets spent; $30 leaves headroom for the October spike and for adding the research-intent ad group once the core is stable. Ninety-day test: $2,700 ceiling, realistic spend $1,500 to $2,100.

## 3. Account structure: why not suburb SKAGs this time

The SKAG-per-suburb pattern worked for trades because people search "plumber richmond". They don't search "coffee machine rental richmond": every suburb keyword we tested is at zero. Build 200 suburb ad groups and Google marks each one "Low search volume", they never enter the auction, and the account has 200 empty rooms and no data density for bidding. On top of that, close-variant matching and responsive search ads have made the single-keyword ad group redundant since about 2020; Google folds the variants together whether you separate them or not.

The thing that made SKAG work, ad copy and landing page that name the searcher's suburb, still matters. We get it a different way: from where the searcher is, not from what they type.

### Campaign 1: Search, Melbourne metro (launch)

- Location: Melbourne (geo ID 1000567), presence only (not "presence or interest"). Add Geelong (1000537) as a second included location once Melbourne data settles.
- Language: English. Network: Search only, no partners, no Display expansion.
- Bidding: Maximise Clicks with an $8 CPC ceiling for the first 3 to 4 weeks, then Maximise Conversions once the account has 15 or more conversions, then a target CPA around $90 once it has 30.
- Ad schedule: Monday to Friday, 6am to 8pm. Weekends on at a minus 40% adjustment for the first month, then decide from data.
- Final URL: set per ad group (table below). Campaign default `https://boutiquecoffee.com.au/coffee-machine-rental`.
- Final URL suffix at campaign level: `loc={loc_physical_ms}&kw={keyword}&mt={matchtype}&campaignid={campaignid}&adgroupid={adgroupid}`

The `loc={loc_physical_ms}` parameter is what replaces suburb SKAGs. Google fills it with the searcher's physical location ID; the landing page maps that ID to a suburb name and rewrites its headline, docket, map and form to match. A Richmond searcher lands on "Office coffee machine rental in Richmond" without any Richmond keyword existing.

Ad groups (single theme, not single keyword), phrase match with the tightest exact variants alongside. Each ad group has its own landing page whose wording matches the ad group, set as the ad group final URL (overrides the campaign default):

| Ad group | Keywords | Landing page (ad group final URL) | H1 the searcher sees |
|---|---|---|---|
| Rental | "coffee machine rental", "office coffee machine rental", "coffee machine rental melbourne", "rent coffee machine", "commercial coffee machine rental", "corporate coffee machine rental", "coffee machine rental for office" | `/coffee-machine-rental` | Office coffee machine rental in {Suburb}. Free for the first 7 days. |
| Hire | "coffee machine hire", "office coffee machine hire", "coffee machine hire melbourne", "commercial coffee machine hire", "hire coffee machine" | `/coffee-machine-hire` | Coffee machine hire for {Suburb} offices. First 7 days free. |
| Lease | "coffee machine lease", "office coffee machine lease", "coffee machine lease melbourne", "commercial coffee machine lease" | `/coffee-machine-lease` | Commercial coffee machine lease in {Suburb}. No fixed term. From $35 a week. |
| Free trial and near me | "free coffee machine for office", "free coffee machine for business", "coffee machine rental near me", "coffee machine hire near me", "office coffee machine near me" | `/free-coffee-machine-trial` | Free 7-day coffee machine trial for {Suburb} offices. No card. No catch. |
| Office machines (research intent, lower bids, add in week 3) | "coffee machines for offices", "office coffee machine melbourne", "workplace coffee machine", "commercial coffee machine for office", "best office coffee machine melbourne" | `/free-coffee-machine-trial` (the trial is the right first ask for a researcher) | as above |

The four pages share the same skeleton (hero and form, receipts, docket, pricing, steps, testimonials, local, guarantee, FAQ, second form) but the headline, lead, bullets, form button, docket lines, pricing intro, step three and the FAQ set are written in the ad group's own vocabulary. The hire page says "no minimum hire period" and rules out event hire; the lease page talks operating expense, no fixed term and lease-versus-buy using the $5,000 to $15,000 purchase figure already published on the blog; the free trial page answers "is the machine free after the trial too" honestly. Every page keeps the suburb layer.

Negative keyword list, applied at campaign level from day one: home, domestic, kitchen, party, wedding, event, events, cart, mobile coffee, barista hire, van, nespresso, pod, pods, capsule, breville, delonghi, sunbeam, kmart, second hand, used, buy, purchase, repair, repairs, manual, review, reviews, jobs, job, salary, course, training course, sydney, brisbane, perth, adelaide, canberra, hobart, nsw, qld, wa, sa. Review search terms twice a week for the first month; the generic "coffee machine rental" term will pull in event hire and home rental and needs pruning fast.

### Ad copy: responsive search ad per ad group

Headlines (15, pin the first to position 1). Headline 1 uses the ad group's own noun so ad, keyword and landing page all say the same word: "Coffee Machine Rental {LOCATION(City):Melbourne}", "Coffee Machine Hire {LOCATION(City):Melbourne}", "Coffee Machine Lease {LOCATION(City):Melbourne}", "Free Coffee Machine Trial {LOCATION(City):Melbourne}". The rest of the set below is shared, with "rental" swapped for the group's noun in headlines 2 and 12.

1. Coffee Machine Rental {LOCATION(City):Melbourne} (pinned, position 1)
2. Office Coffee Machine Rental
3. Free 7-Day Trial, No Card
4. From $35 a Week, All Inclusive
5. Installed by the Owner, Chris
6. Beans, Service and Cups Included
7. No Lock-In, Month to Month
8. 200+ Melbourne Workplaces
9. WMF, Jura and Eversys Machines
10. Installed Within the Week
11. Loan Machine if Yours Breaks
12. {KeyWord:Coffee Machine Rental} Melbourne
13. Call Chris: 0411 876 625
14. Servicing {LOCATION(City):Melbourne} Offices
15. Try It Free for 7 Days

Descriptions (4):

1. Commercial coffee machine delivered, installed and serviced at your {LOCATION(City):Melbourne} office. Free for 7 days, then from $35 a week. No lock-in.
2. One weekly rate covers the machine, beans, cups, servicing and a loan machine. Chris installs it himself, usually within 5 to 7 business days.
3. 200+ Melbourne workplaces rent from Boutique Coffee. Founder-led, one phone number, service calls within 24 hours. Book a free trial today.
4. Not sure which machine? Chris matches it to your headcount on the first call. Keep it, swap it or hand it back after 7 days.

Assets:

- Sitelinks (set at ad group level so they stay on the group's own page): Pricing (`#pricing`), How it works, FAQ, Call Chris.
- Callouts: No lock-in, Free install and training, From $35 a week, Founder-led service, Loan machine included, Victorian roasted beans.
- Structured snippet, Brands: WMF, Jura, Eversys, Dr Coffee, Faemina.
- Call asset: 0411 876 625, with Google forwarding number on so calls count as conversions. Business hours only.
- Price asset: Small office from $35/week, Mid-size from $55/week, Large from $85/week.
- Image assets: the van photo (real), the install photo. No stock.
- Location asset: link the Google Business Profile if Chris has one.

### Conversion tracking (must be live before the first dollar)

1. Primary: page view of `/coffee-machine-rental/thank-you`. The form redirects there on success. GTM tag on GTM-M8PFQVB4, trigger on that path. Count: one per click.
2. Primary: calls from ads (call asset with forwarding number), 30-second minimum.
3. Secondary: click on any `tel:` link on the lander (GTM click trigger, link URL starts with `tel:`).
4. Secondary: GA4 `generate_lead` event (the lander pushes it to the dataLayer with `form_source: ads-lander`). Import to Google Ads via the GA4 link on property 538119704.
5. Turn on enhanced conversions for leads (email is on the form) once the primary is firing.

Every submission also lands in the Boutique Coffee Website Leads sheet with the gclid, keyword, match type and location ID in the comments column, so offline conversion import is possible later if Chris wants to feed "kept the machine" back into bidding.

### Phase 2 (after 60 days of data)

- If the search term report shows clusters (say the inner east and south-east corridor producing most leads), split into two or three region campaigns using the suburb geo IDs in `lib/ads-suburbs.ts`, so budget and bids can differ by area. Keep the same ad groups and the same lander.
- Add a Performance Max or Demand Gen retargeting layer only if the lander is drawing enough traffic to build an audience (500+ visitors a month). Not before.
- Consider a dedicated Geelong campaign if Geelong impressions show up in the Melbourne campaign's location report.
- Note on geo IDs: Google returned the nearest constant for eight suburbs (Hawthorn East for Hawthorn, Balwyn North for Balwyn, Malvern East for Malvern, Brighton East for Brighton, Laverton North for Laverton, Bayswater North for Bayswater, Doncaster East for Doncaster, Heidelberg West for Heidelberg). The lander maps those IDs to the plain suburb name, which is what a searcher in either would expect to read.

## 4. The landing page

Four pages, one per ad group, built in this repo (not pushed or deployed yet; all `noindex`, so they never compete with the organic site once live):

- `/coffee-machine-rental` (Rental ad group)
- `/coffee-machine-hire` (Hire ad group)
- `/coffee-machine-lease` (Lease ad group)
- `/free-coffee-machine-trial` (Free trial and near me ad group, and the research-intent group)

Each accepts the same suburb patterns:

- `/coffee-machine-hire` (Melbourne default)
- `/coffee-machine-hire?loc=9060887` (Google location ID, from `{loc_physical_ms}`; maps to Richmond)
- `/coffee-machine-hire?suburb=richmond`
- `/coffee-machine-hire/richmond` (static path, pre-rendered for 73 suburbs per intent; any new slug still renders)
- `/coffee-machine-rental/thank-you` (the one shared conversion page; every form redirects here with `intent=` in the query so GA4 can split by ad group)

Copy lives in one file, `lib/ads-intents.ts`, so wording changes after the search-term report are a one-file edit.

What the page does, top to bottom, and why:

1. Hero: H1 matches the ad ("Office coffee machine rental in Richmond"), the offer in the second line (free for 7 days), price anchor ($35 a week) in the first paragraph, four proof bullets, and Chris's number with "Speak to Chris, the owner". Form sits beside it above the fold on desktop. Six fields, suburb pre-filled from the ad, team size as a select. Mobile shows the form directly under the headline.
2. Receipts bar: the four real numbers from the site (200+ workplaces, 5+ year relationships, 24-hour service response, one phone number).
3. The install docket: the real van photo with a service-ticket card listing job, area, install window, trial terms and technician. The suburb and region rewrite here too. This is the one element built for this business specifically.
4. Pricing: the three tiers with "from" pricing and the seven inclusions. Price on the page is deliberate; it filters tyre-kickers and raises lead quality.
5. How it works: three steps on a timeline (today, within the week, days 1 to 7).
6. Three real client testimonials (Pepperl+Fuchs, AJM-JV, Michael Wood) reused from the trial page.
7. Local section: region copy, nearby suburb links, a map of the suburb.
8. Keep / swap / return guarantee (reused).
9. Six FAQs written for the objections an office manager has before filling in a form (cost, catch, install time, contract, breakdowns, machines).
10. Second form with the phone number, then a sticky mobile bar with call and book buttons.

Tracking built in: the form captures gclid, utm_*, kw, mt, loc, campaign and ad group IDs from the URL plus which of the four pages it sat on (`intent`), keeps them in session storage in case the visitor navigates around, sends them with the enquiry, and pushes `generate_lead` to the dataLayer on success before redirecting to the thank-you page. Admin email shows an "Ad attribution" row. Leads sheet gets it in the comments column.

Header and footer on the lander are the stripped landing versions (logo, phone, one CTA) so there is no navigation to leak clicks into.

Still to do on the page before launch:

- Real photos for the three "how it works" steps. The current ones are the AI images from the how-it-works page. A phone photo of Chris on an actual install beats all three.
- Chris to confirm the 5 to 7 business day install window and the "30 to 45 minutes on site" line.
- Confirm "200+ Melbourne workplaces" and "5+ years average relationship" are the numbers he wants on a paid page; they came from the existing site.

## 5. Launch checklist

1. Create the Google Ads account under the 3P MCC (`create_client_account.yml`), Chris adds billing.
2. Link GA4 property 538119704 and Search Console to the Ads account.
3. GTM: thank-you page-view tag, tel: click tag, publish container.
4. Conversion actions in Google Ads: thank-you page (primary), calls from ads (primary), tel click (secondary), GA4 generate_lead (secondary).
5. Build Campaign 1 as above with the four launch ad groups, negatives, assets, schedule, URL suffix. Campaign created paused, per house rule.
6. Test: click a test ad in preview, submit the form on the lander with "TEST" in the business name, confirm the thank-you page fires the conversion in GTM preview and the row lands in the leads sheet.
7. Chris confirms the copy points in section 4.
8. Enable. Budget $30/day. Search terms reviewed Tuesday and Friday for the first four weeks.
9. Week 3: add the "Office machines" research ad group at a $5 ceiling.
10. Week 4: switch to Maximise Conversions if 15+ conversions have been recorded; otherwise hold Maximise Clicks and revisit at week 6.
11. Day 60: read the report, decide on Phase 2 region split.
