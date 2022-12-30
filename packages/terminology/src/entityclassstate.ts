/**
 * A politically organized body of people bonded by territory, culture, or ethnicity, having sovereignty (to a certain extent) granted by other states (enclosing or neighboring states). This includes countries (nations), provinces (e.g., one of the United States of America or a French departement), counties or municipalities. Refine using, e.g., ISO country codes, FIPS-PUB state codes, etc.
 * http://terminology.hl7.org/ValueSet/v3-EntityClassState
 */
export const EntityClassStateCode = {
  /**
   * state
   */
  STATE: "STATE",

  /**
   * Nation
   */
  NAT: "NAT",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type EntityClassStateCode =
  typeof EntityClassStateCode[keyof typeof EntityClassStateCode];
