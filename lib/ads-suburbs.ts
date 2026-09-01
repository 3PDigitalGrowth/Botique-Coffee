/**
 * Suburb data for the Google Ads landing page (/coffee-machine-rental/[suburb]).
 *
 * The page personalises copy to whichever suburb the ad click carries. Known
 * suburbs get their region, nearby suburbs and a pre-rendered static page.
 * Unknown slugs still render (sanitised title-case) so a new suburb in the ads
 * account never needs a deploy.
 */

export type Region = {
  id: string
  label: string
  suburbs: string[]
}

export const REGIONS: Region[] = [
  {
    id: "cbd",
    label: "Melbourne CBD and inner city",
    suburbs: [
      "Melbourne",
      "Docklands",
      "Southbank",
      "Carlton",
      "Fitzroy",
      "Collingwood",
      "Richmond",
      "South Yarra",
      "Cremorne",
      "Abbotsford",
      "East Melbourne",
      "West Melbourne",
    ],
  },
  {
    id: "inner-east",
    label: "Inner east",
    suburbs: [
      "Hawthorn",
      "Kew",
      "Camberwell",
      "Balwyn",
      "Surrey Hills",
      "Glen Iris",
      "Malvern",
      "Box Hill",
      "Doncaster",
      "Nunawading",
      "Ringwood",
    ],
  },
  {
    id: "inner-south",
    label: "Inner south and bayside",
    suburbs: [
      "Prahran",
      "Windsor",
      "St Kilda",
      "South Melbourne",
      "Port Melbourne",
      "Elwood",
      "Brighton",
      "Cheltenham",
      "Moorabbin",
      "Braeside",
      "Frankston",
    ],
  },
  {
    id: "inner-west",
    label: "Inner west",
    suburbs: [
      "Footscray",
      "Yarraville",
      "Seddon",
      "Kensington",
      "Flemington",
      "Ascot Vale",
      "Essendon",
      "Sunshine",
      "Altona",
      "Laverton",
      "Derrimut",
      "Truganina",
      "Werribee",
      "Tullamarine",
    ],
  },
  {
    id: "inner-north",
    label: "Inner north",
    suburbs: [
      "North Melbourne",
      "Brunswick",
      "Coburg",
      "Northcote",
      "Thornbury",
      "Preston",
      "Heidelberg",
      "Bundoora",
      "Thomastown",
      "Epping",
      "Campbellfield",
      "Broadmeadows",
    ],
  },
  {
    id: "south-east",
    label: "South-east corridor",
    suburbs: [
      "Clayton",
      "Mount Waverley",
      "Glen Waverley",
      "Mulgrave",
      "Notting Hill",
      "Scoresby",
      "Bayswater",
      "Rowville",
      "Keysborough",
      "Dandenong",
      "Dandenong South",
    ],
  },
  {
    id: "regional",
    label: "Regional Victoria",
    suburbs: ["Geelong", "Mornington", "Ballarat", "Bendigo"],
  },
]

export const DEFAULT_SUBURB = "Melbourne"

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
}

const ALL: { name: string; slug: string; region: Region }[] = REGIONS.flatMap((region) =>
  region.suburbs.map((name) => ({ name, slug: slugify(name), region })),
)

export const ALL_SUBURBS = ALL

export type ResolvedSuburb = {
  name: string
  slug: string
  region: Region | null
  nearby: string[]
  known: boolean
  isMetroDefault: boolean
}

function titleCase(slug: string): string {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ")
}

/**
 * Resolve any incoming slug (URL segment, ?suburb= param, or a raw name) to
 * page data. Never throws; falls back to Melbourne metro.
 */
export function resolveSuburb(raw: string | undefined | null): ResolvedSuburb {
  const cleaned = (raw || "").trim().toLowerCase().replace(/\+/g, " ")
  const slug = slugify(cleaned).slice(0, 40)
  const hit = slug ? ALL.find((s) => s.slug === slug) : undefined

  if (hit) {
    const nearby = hit.region.suburbs.filter((s) => s !== hit.name).slice(0, 8)
    return {
      name: hit.name,
      slug: hit.slug,
      region: hit.region,
      nearby,
      known: true,
      isMetroDefault: hit.name === DEFAULT_SUBURB,
    }
  }

  // Unknown but plausible slug (letters, digits, hyphens only) still renders.
  if (slug && /^[a-z0-9-]{2,40}$/.test(slug)) {
    return {
      name: titleCase(slug),
      slug,
      region: null,
      nearby: [],
      known: false,
      isMetroDefault: false,
    }
  }

  return {
    name: DEFAULT_SUBURB,
    slug: slugify(DEFAULT_SUBURB),
    region: REGIONS[0],
    nearby: REGIONS[0].suburbs.filter((s) => s !== DEFAULT_SUBURB).slice(0, 8),
    known: true,
    isMetroDefault: true,
  }
}

/**
 * Google Ads geo target constant IDs -> suburb name. Lets the ad's final URL
 * suffix carry `loc={loc_physical_ms}` and still land on the right suburb page
 * when the campaign runs on location insertion rather than one campaign per
 * suburb. Populated from the Keyword Planner geo_targets pull.
 */
export const GEO_ID_TO_SUBURB: Record<string, string> = {
  "1000567": "Melbourne",
  "9060880": "Melbourne",
  "9060886": "Southbank",
  "9060885": "Carlton",
  "9060881": "Fitzroy",
  "9060883": "Collingwood",
  "9060887": "Richmond",
  "9060889": "South Yarra",
  "9060893": "Abbotsford",
  "9192810": "Hawthorn",
  "9192881": "Kew",
  "9192117": "Balwyn",
  "9193454": "Surrey Hills",
  "9189448": "Glen Iris",
  "9197677": "Malvern",
  "9060884": "Prahran",
  "9060890": "Windsor",
  "9060888": "St Kilda",
  "9060882": "South Melbourne",
  "9199088": "Port Melbourne",
  "9263374": "Brighton",
  "9195050": "Footscray",
  "9193860": "Yarraville",
  "9189586": "Ascot Vale",
  "9195276": "Essendon",
  "9060891": "North Melbourne",
  "9197875": "Brunswick",
  "9194718": "Coburg",
  "9194350": "Northcote",
  "9198194": "Thornbury",
  "9251401": "Preston",
  "9192555": "Moorabbin",
  "9198188": "Clayton",
  "9198248": "Mount Waverley",
  "9199103": "Glen Waverley",
  "9194040": "Box Hill",
  "9199156": "Dandenong",
  "9194559": "Dandenong South",
  "9192430": "Mulgrave",
  "9193788": "Tullamarine",
  "9194481": "Laverton",
  "9199013": "Truganina",
  "9191216": "Derrimut",
  "9193136": "Altona",
  "9195445": "Bayswater",
  "9252327": "Scoresby",
  "9192991": "Rowville",
  "9192941": "Keysborough",
  "9190827": "Braeside",
  "9193351": "Frankston",
  "9191060": "Ringwood",
  "9193722": "Nunawading",
  "9189895": "Doncaster",
  "9195568": "Heidelberg",
  "9194668": "Bundoora",
  "9197721": "Werribee",
  "9193075": "Sunshine",
  "9195195": "Campbellfield",
  "9193496": "Thomastown",
  "9197714": "Epping",
  "9195173": "Broadmeadows",
  "9047631": "Mornington",
  "1000537": "Geelong",
  "1000492": "Ballarat",
  "1000498": "Bendigo",
}

export function suburbFromGeoId(loc: string | undefined | null): string | undefined {
  if (!loc) return undefined
  return GEO_ID_TO_SUBURB[loc.trim()]
}
