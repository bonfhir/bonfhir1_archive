/**
 * Codes identifying groupings of parameters; e.g. Cardiovascular.
 * http://terminology.hl7.org/ValueSet/parameter-group
 */
export const DeviceDefinitionParameterGroupCode = {
  /**
   * Haemodynamic Parameter Group
   */
  haemodynamic: "haemodynamic",

  /**
   * ECG Parameter Group
   */
  ecg: "ecg",

  /**
   * Respiratory Parameter Group
   */
  respiratory: "respiratory",

  /**
   * Ventilation Parameter Group
   */
  ventilation: "ventilation",

  /**
   * Neurological Parameter Group
   */
  neurological: "neurological",

  /**
   * Drug Delivery Parameter Group
   */
  "drug-delivery": "drug-delivery",

  /**
   * Fluid Chemistry Parameter Group
   */
  "fluid-chemistry": "fluid-chemistry",

  /**
   * Blood Chemistry Parameter Group
   */
  "blood-chemistry": "blood-chemistry",

  /**
   * Miscellaneous Parameter Group
   */
  miscellaneous: "miscellaneous",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceDefinitionParameterGroupCode =
  typeof DeviceDefinitionParameterGroupCode[keyof typeof DeviceDefinitionParameterGroupCode];
