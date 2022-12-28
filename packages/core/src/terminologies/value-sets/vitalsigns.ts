/**
 * This value set indicates the allowed vital sign result types.   The LOINC code for Vitals Signs panel (85353-1) is a grouping structure for a set of vital signs and includes related links (with type=has-member) to the Observations in this set (e.g. respiratory rate, heart rate, BP).  The Blood pressure panel (85354-9) is used to group the component observations Systolic blood pressure (8480-6) and Diastolic blood pressure (8462-4).
 * http://hl7.org/fhir/ValueSet/observation-vitalsignresult
 */
export const VitalSignsCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type VitalSignsCode = typeof VitalSignsCode[keyof typeof VitalSignsCode];
