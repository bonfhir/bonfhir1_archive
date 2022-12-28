/**
 * IANA Timezone Codes
 * http://hl7.org/fhir/ValueSet/timezones
 */
export const IANATimezonesCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type IANATimezonesCode =
  typeof IANATimezonesCode[keyof typeof IANATimezonesCode];
