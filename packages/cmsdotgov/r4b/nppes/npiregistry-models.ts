/**
 * NPI Registry API models
 * @see https://npiregistry.cms.hhs.gov/api-page
 */

export interface NPIRegistryResponse {
  result_count: number;
  results: NPIRegistryResult[];
}

export interface NPIRegistryResult {
  created_epoch: string;
  enumeration_type: string;
  last_updated_epoch: string;
  number: string;
  addresses: NPIRegistryAddress[];
  practiceLocations: NPIRegistryAddress[];
  basic: NPIRegistryBasic;
  taxonomies: NPIRegistryTaxonomy[];
  identifiers: NPIRegistryIdentifier[];
}

export interface NPIRegistryAddress {
  country_code: string;
  country_name: string;
  address_purpose: string;
  address_type: string;
  address_1: string;
  city: string;
  state: string;
  postal_code: string;
  telephone_number: string;
  fax_number: string;
  address_2?: string;
}

export type NPIRegistryBasic =
  | NPIRegistryBasicPractitioner
  | NPIRegistryBasicOrganization;

export interface NPIRegistryBasicPractitioner {
  first_name: string;
  last_name: string;
  middle_name: string;
  credential: string;
  sole_proprietor: string;
  gender: string;
  enumeration_date: Date;
  last_updated: Date;
  status: string;
}

export interface NPIRegistryBasicOrganization {
  organization_name: string;
  organizational_subpart: string;
  parent_organization_legal_business_name: string;
  enumeration_date: Date;
  last_updated: Date;
  status: string;
  authorized_official_first_name: string;
  authorized_official_last_name: string;
  authorized_official_telephone_number: string;
  authorized_official_title_or_position: string;
  authorized_official_name_prefix: string;
}

export function isPractitioner(
  basic: NPIRegistryBasic
): basic is NPIRegistryBasicPractitioner {
  return !!(basic as NPIRegistryBasicPractitioner)?.last_name;
}

export interface NPIRegistryIdentifier {
  code: string;
  desc: string;
  issuer: null | string;
  identifier: string;
  state: string;
}

export interface NPIRegistryTaxonomy {
  code: string;
  taxonomy_group: string;
  desc: string;
  state: string;
  license: string;
  primary: boolean;
}
