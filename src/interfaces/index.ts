export interface Category {
  id: number
  count: number
  description: string
  title: string
  slug: string
  taxonomy: string
  parent: number
  meta: any[]
  image: string
  url: string
}

export interface CategoryImage {
  url: string
  alt: string
  title: string
}

export interface Event {
  id: number
  image: string
  organizer?: Organizer[]
  author: string
  artista: string
  title: string
  description: string
  slug: string
  startDate: string
  costo?: Price
}

export interface Organizer {
  id: string
  name: string
  phone: string
  email: string
  website: string
}

export interface Price {
  interi: string
  ridotti: string
  ridotti_over_65: string
}

export interface FullEvent {
  id: number
  global_id: string
  global_id_lineage: string[]
  author: string
  status: string
  date: string
  date_utc: string
  modified: string
  modified_utc: string
  url: string
  rest_url: string
  title: string
  description: string
  excerpt: string
  slug: string
  image: EventImage
  all_day: boolean
  start_date: string
  start_date_details: StartDateDetails
  end_date: string
  end_date_details: EndDateDetails
  utc_start_date: string
  utc_start_date_details: UtcStartDateDetails
  utc_end_date: string
  utc_end_date_details: UtcEndDateDetails
  timezone: string
  timezone_abbr: string
  cost: string
  cost_details: CostDetails
  website: string
  show_map: boolean
  show_map_link: boolean
  hide_from_listings: boolean
  sticky: boolean
  featured: boolean
  categories: Category[]
  tags: any[]
  venue: Venue
  organizer: Organizer[]
  json_ld: JsonLd2
  artista?: string
  costo?: Price
}

export interface EventImage {
  url: string
  id: number
  extension: string
  width: number
  height: number
  filesize: number
  sizes: Sizes
}

export interface Sizes {
  medium: Medium
  thumbnail: Thumbnail
  medium_large: MediumLarge
}

export interface Medium {
  width: number
  height: number
  "mime-type": string
  filesize: number
  url: string
}

export interface Thumbnail {
  width: number
  height: number
  "mime-type": string
  filesize: number
  url: string
}

export interface MediumLarge {
  width: number
  height: number
  "mime-type": string
  filesize: number
  url: string
}

export interface StartDateDetails {
  year: string
  month: string
  day: string
  hour: string
  minutes: string
  seconds: string
}

export interface EndDateDetails {
  year: string
  month: string
  day: string
  hour: string
  minutes: string
  seconds: string
}

export interface UtcStartDateDetails {
  year: string
  month: string
  day: string
  hour: string
  minutes: string
  seconds: string
}

export interface UtcEndDateDetails {
  year: string
  month: string
  day: string
  hour: string
  minutes: string
  seconds: string
}

export interface CostDetails {
  currency_symbol: string
  currency_code: string
  currency_position: string
  values: any[]
}

export interface Category {
  name: string
  slug: string
  term_group: number
  term_taxonomy_id: number
  taxonomy: string
  description: string
  parent: number
  count: number
  filter: string
  id: number
  urls: Urls
}

export interface Urls {
  self: string
  collection: string
}

export interface Venue {
  id: number
  author: string
  status: string
  date: string
  date_utc: string
  modified: string
  modified_utc: string
  url: string
  venue: string
  slug: string
  address: string
  city: string
  country: string
  zip: string
  phone: string
  website: string
  json_ld: JsonLd
  show_map: boolean
  show_map_link: boolean
  global_id: string
  global_id_lineage: string[]
}

export interface JsonLd {
  "@type": string
  name: string
  description: string
  url: string
  address: Address
  telephone: string
  sameAs: string
}

export interface Address {
  "@type": string
  streetAddress: string
  addressLocality: string
  postalCode: string
  addressCountry: string
}

export interface JsonLd2 {
  "@context": string
  "@type": string
  name: string
  description: string
  image: string
  url: string
  eventAttendanceMode: string
  eventStatus: string
  startDate: string
  endDate: string
  location: Location
  performer: string
}

export interface Location {
  "@type": string
  name: string
  description: string
  url: string
  address: Address2
  telephone: string
  sameAs: string
}

export interface Address2 {
  "@type": string
  streetAddress: string
  addressLocality: string
  postalCode: string
  addressCountry: string
}
