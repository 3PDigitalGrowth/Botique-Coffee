"""Campaign spec for Boutique Coffee at Work. Validates RSA/asset lengths, prints base64 JSON."""
import base64
import json
import re
import sys

SITE = "https://www.boutiquecoffee.com.au"

SHARED_HEADLINES = [
    "Free 7-Day Trial, No Card",
    "From $35 a Week, All Inclusive",
    "Installed by the Owner, Chris",
    "Beans, Service & Cups Included",
    "200+ Melbourne Workplaces",
    "WMF, Jura & Eversys Machines",
    "Installed Within the Week",
    "Loan Machine if Yours Breaks",
    "Call Chris: 0411 876 625",
    "Servicing {LOCATION(City):Melbourne} Offices",
    "Try It Free for 7 Days",
]

D_SHARED = [
    "One weekly rate: machine, beans, cups, servicing and loan machine. Installed by Chris.",
    "200+ Melbourne workplaces. Founder-led, one phone number, service calls within 24 hours.",
    "Chris matches the machine to your headcount. Keep it, swap it or hand it back at day 7.",
]

def sitelinks(slug):
    base = f"{SITE}/{slug}"
    return [
        {"text": "Pricing", "url": f"{base}#pricing", "desc1": "From $35 a week", "desc2": "Servicing and beans included"},
        {"text": "How It Works", "url": f"{base}#how-it-works", "desc1": "Installed within the week", "desc2": "Team trained on the day"},
        {"text": "FAQ", "url": f"{base}#faq", "desc1": "Lock-in, breakdowns, cost", "desc2": "Straight answers from Chris"},
        {"text": "Book a Free Trial", "url": f"{base}#claim-trial", "desc1": "7 days, no card, no catch", "desc2": "Chris calls back next day"},
    ]

AD_GROUPS = [
    {
        "name": "Rental",
        "final_url": f"{SITE}/coffee-machine-rental",
        "path1": "rental", "path2": "free-trial",
        "keywords": [
            {"text": "coffee machine rental", "match": "PHRASE"},
            {"text": "coffee machine rental", "match": "EXACT"},
            {"text": "office coffee machine rental", "match": "PHRASE"},
            {"text": "office coffee machine rental", "match": "EXACT"},
            {"text": "coffee machine rental melbourne", "match": "PHRASE"},
            {"text": "coffee machine rental melbourne", "match": "EXACT"},
            {"text": "rent coffee machine", "match": "PHRASE"},
            {"text": "commercial coffee machine rental", "match": "PHRASE"},
            {"text": "corporate coffee machine rental", "match": "PHRASE"},
            {"text": "coffee machine rental for office", "match": "PHRASE"},
        ],
        "headlines": ["Coffee Machine Rental {LOCATION(City):Near You}", "Office Coffee Machine Rental",
                      "No Lock-In, Month to Month", "Rent a Coffee Machine Today"] + SHARED_HEADLINES,
        "descriptions": ["Installed and serviced at your {LOCATION(City):Melbourne} office. 7 days free, then from $35 a week."] + D_SHARED,
        "sitelinks": sitelinks("coffee-machine-rental"),
    },
    {
        "name": "Hire",
        "final_url": f"{SITE}/coffee-machine-hire",
        "path1": "hire", "path2": "free-trial",
        "keywords": [
            {"text": "coffee machine hire", "match": "PHRASE"},
            {"text": "coffee machine hire", "match": "EXACT"},
            {"text": "office coffee machine hire", "match": "PHRASE"},
            {"text": "office coffee machine hire", "match": "EXACT"},
            {"text": "coffee machine hire melbourne", "match": "PHRASE"},
            {"text": "coffee machine hire melbourne", "match": "EXACT"},
            {"text": "commercial coffee machine hire", "match": "PHRASE"},
            {"text": "hire coffee machine", "match": "PHRASE"},
        ],
        "headlines": ["Coffee Machine Hire {LOCATION(City):Near You}", "Office Coffee Machine Hire",
                      "No Minimum Hire Period", "Hire a Coffee Machine Today"] + SHARED_HEADLINES,
        "descriptions": ["Installed and serviced at your {LOCATION(City):Melbourne} office. First 7 days free, then from $35 a week."] + D_SHARED,
        "sitelinks": sitelinks("coffee-machine-hire"),
    },
    {
        "name": "Lease",
        "final_url": f"{SITE}/coffee-machine-lease",
        "path1": "lease", "path2": "no-fixed-term",
        "keywords": [
            {"text": "coffee machine lease", "match": "PHRASE"},
            {"text": "coffee machine lease", "match": "EXACT"},
            {"text": "office coffee machine lease", "match": "PHRASE"},
            {"text": "coffee machine lease melbourne", "match": "PHRASE"},
            {"text": "commercial coffee machine lease", "match": "PHRASE"},
            {"text": "lease coffee machine", "match": "PHRASE"},
        ],
        "headlines": ["Coffee Machine Lease {LOCATION(City):Near You}", "Office Coffee Machine Lease",
                      "No Fixed Term, No Balloon", "No Capital Outlay", "Lease a Coffee Machine Today"] + SHARED_HEADLINES[:10],
        "descriptions": ["Fully maintained lease at your {LOCATION(City):Melbourne} office. No fixed term, 7 days free, from $35/wk."] + D_SHARED,
        "sitelinks": sitelinks("coffee-machine-lease"),
    },
    {
        "name": "Free trial and near me",
        "final_url": f"{SITE}/free-coffee-machine-trial",
        "path1": "free-trial", "path2": "7-days",
        "keywords": [
            {"text": "free coffee machine for office", "match": "PHRASE"},
            {"text": "free coffee machine for business", "match": "PHRASE"},
            {"text": "free office coffee machine", "match": "PHRASE"},
            {"text": "coffee machine rental near me", "match": "PHRASE"},
            {"text": "coffee machine hire near me", "match": "PHRASE"},
            {"text": "office coffee machine near me", "match": "PHRASE"},
        ],
        "headlines": ["Free Coffee Machine Trial", "Free 7-Day Trial for Offices",
                      "{LOCATION(City):Melbourne} Free 7-Day Trial", "Book Your Free Trial Today",
                      "No Card, No Catch, No Lock-In"] + [h for h in SHARED_HEADLINES if h not in ("Free 7-Day Trial, No Card", "Try It Free for 7 Days")],
        "descriptions": ["Try a commercial machine at your {LOCATION(City):Melbourne} office free for 7 days. No card, no catch."] + D_SHARED,
        "sitelinks": sitelinks("free-coffee-machine-trial"),
    },
]

NEGATIVES = ["home", "domestic", "kitchen", "party", "wedding", "event", "events", "cart", "mobile coffee",
             "barista hire", "van", "nespresso", "pod", "pods", "capsule", "breville", "delonghi", "sunbeam",
             "kmart", "second hand", "used", "buy", "purchase", "repair", "repairs", "manual", "review", "reviews",
             "jobs", "job", "salary", "course", "sydney", "brisbane", "perth", "adelaide", "canberra", "hobart",
             "nsw", "qld", "wa", "sa", "cafe", "restaurant", "free"]

SCHEDULE = [{"day": d, "start": 6, "end": 20} for d in ("MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY")] + \
           [{"day": d, "start": 6, "end": 20, "bid_modifier": 0.6} for d in ("SATURDAY", "SUNDAY")]

SPEC = {
    "conversions": [
        {"name": "Ads lander enquiry (thank-you page)", "type": "WEBPAGE", "category": "SUBMIT_LEAD_FORM", "primary": True, "count": "ONE_PER_CLICK"},
        {"name": "Ads lander phone click", "type": "WEBPAGE", "category": "PHONE_CALL_LEAD", "primary": False, "count": "ONE_PER_CLICK"},
        {"name": "Calls from ads (30s+)", "type": "AD_CALL", "category": "PHONE_CALL_LEAD", "primary": True, "count": "ONE_PER_CLICK", "min_call_seconds": 30},
    ],
    "campaign": {
        "name": "Search | Melbourne | Coffee machine rental, hire, lease",
        "daily_budget": 30,
        "cpc_ceiling": 8,
        "final_url_suffix": "loc={loc_physical_ms}&kw={keyword}&mt={matchtype}&campaignid={campaignid}&adgroupid={adgroupid}",
        "geo_ids": [1000567],
        "negatives": NEGATIVES,
        "schedule": SCHEDULE,
    },
    "ad_groups": AD_GROUPS,
    "callouts": ["No lock-in", "Free install & training", "From $35 a week", "Founder-led service", "Loan machine included", "Victorian roasted beans"],
    "snippet": {"header": "Brands", "values": ["WMF", "Jura", "Eversys", "Dr Coffee", "Faemina"]},
    "call": {"phone": "0411 876 625", "country": "AU", "conversion_name": "Calls from ads (30s+)"},
}

# The "free" negative would block the Free trial ad group's own keywords; it exists only to keep
# "free coffee machine" searchers out of the rental/hire/lease groups, which negatives at campaign
# level cannot do. Drop it: the free-trial group catches those searches by keyword instead.
SPEC["campaign"]["negatives"] = [n for n in NEGATIVES if n != "free"]


def default_len(text):
    return len(re.sub(r"\{[A-Za-z]+\([^)]*\):([^}]*)\}", r"\1", text))


def validate():
    problems = []
    for ag in AD_GROUPS:
        hs, ds = ag["headlines"], ag["descriptions"]
        if not 3 <= len(hs) <= 15: problems.append(f"{ag['name']}: {len(hs)} headlines")
        if not 2 <= len(ds) <= 4: problems.append(f"{ag['name']}: {len(ds)} descriptions")
        if len(set(hs)) != len(hs): problems.append(f"{ag['name']}: duplicate headline")
        for h in hs:
            if default_len(h) > 30: problems.append(f"{ag['name']} headline {default_len(h)}: {h}")
        for d in ds:
            if default_len(d) > 90: problems.append(f"{ag['name']} description {default_len(d)}: {d}")
        for p in ("path1", "path2"):
            if len(ag[p]) > 15: problems.append(f"{ag['name']} {p} too long")
        for sl in ag["sitelinks"]:
            if len(sl["text"]) > 25 or len(sl["desc1"]) > 35 or len(sl["desc2"]) > 35:
                problems.append(f"{ag['name']} sitelink too long: {sl}")
    for c in SPEC["callouts"]:
        if len(c) > 25: problems.append(f"callout too long: {c}")
    for v in SPEC["snippet"]["values"]:
        if len(v) > 25: problems.append(f"snippet value too long: {v}")
    return problems


if __name__ == "__main__":
    probs = validate()
    if probs:
        print("INVALID"); print("\n".join(probs)); sys.exit(1)
    if "--b64" in sys.argv:
        print(base64.b64encode(json.dumps(SPEC).encode()).decode())
    else:
        for ag in AD_GROUPS:
            print(ag["name"], "headlines", len(ag["headlines"]), "descriptions", len(ag["descriptions"]), "keywords", len(ag["keywords"]))
        print("negatives", len(SPEC["campaign"]["negatives"]), "VALID")
