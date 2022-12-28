/**
 * The allowed codes for identifying the ISO 11179 ObjectClass Property for a particular data element if intended for registration/use within the U.S. Structured Data Capture (SDC) project.
 * http://hl7.org/fhir/ValueSet/dataelement-sdcobjectclassproperty
 */
export const DataElementSDCObjectClassCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DataElementSDCObjectClassCode =
  typeof DataElementSDCObjectClassCode[keyof typeof DataElementSDCObjectClassCode];
