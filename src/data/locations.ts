export interface Location {
  slug: string;
  name: string;
  countyOrRegion?: string;
  latitude: number;
  longitude: number;
  noindex?: boolean;
  description?: string;
  responseTime?: string;
}

export const PRIMARY_LOCATION: Location = {
  slug: "exeter",
  name: "Exeter",
  countyOrRegion: "Devon",
  latitude: 50.7184,
  longitude: -3.5339,
};

export const LOCATIONS: Location[] = [
  PRIMARY_LOCATION,
  {
    slug: "topsham",
    name: "Topsham",
    countyOrRegion: "Devon",
    latitude: 50.6863,
    longitude: -3.4646,
  },
  {
    slug: "exmouth",
    name: "Exmouth",
    countyOrRegion: "Devon",
    latitude: 50.6194,
    longitude: -3.4133,
  },
  {
    slug: "crediton",
    name: "Crediton",
    countyOrRegion: "Devon",
    latitude: 50.7870,
    longitude: -3.6570,
  },
  {
    slug: "tiverton",
    name: "Tiverton",
    countyOrRegion: "Devon",
    latitude: 50.9012,
    longitude: -3.4914,
  },
  {
    slug: "honiton",
    name: "Honiton",
    countyOrRegion: "Devon",
    latitude: 50.7978,
    longitude: -3.1920,
  },
  {
    slug: "sidmouth",
    name: "Sidmouth",
    countyOrRegion: "Devon",
    latitude: 50.6806,
    longitude: -3.2384,
  },
  {
    slug: "dawlish",
    name: "Dawlish",
    countyOrRegion: "Devon",
    latitude: 50.5817,
    longitude: -3.4640,
  },
  {
    slug: "newton-abbot",
    name: "Newton Abbot",
    countyOrRegion: "Devon",
    latitude: 50.5300,
    longitude: -3.6100,
  },
];

export const INDEXED_LOCATIONS = LOCATIONS.filter((l) => !l.noindex);

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((location) => location.slug === slug);
}
