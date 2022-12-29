/**
 * Codes identifying groupings of parameters; e.g. Cardiovascular.
 * http://terminology.hl7.org/ValueSet/parameter-group
 */
export const DeviceDefinitionParameterGroupCode = {
  /**
   * Haemodynamic Parameter Group
   */
  HaemodynamicParameterGroup: "haemodynamic",

  /**
   * ECG Parameter Group
   */
  ECGParameterGroup: "ecg",

  /**
   * Respiratory Parameter Group
   */
  RespiratoryParameterGroup: "respiratory",

  /**
   * Ventilation Parameter Group
   */
  VentilationParameterGroup: "ventilation",

  /**
   * Neurological Parameter Group
   */
  NeurologicalParameterGroup: "neurological",

  /**
   * Drug Delivery Parameter Group
   */
  DrugDeliveryParameterGroup: "drug-delivery",

  /**
   * Fluid Chemistry Parameter Group
   */
  FluidChemistryParameterGroup: "fluid-chemistry",

  /**
   * Blood Chemistry Parameter Group
   */
  BloodChemistryParameterGroup: "blood-chemistry",

  /**
   * Miscellaneous Parameter Group
   */
  MiscellaneousParameterGroup: "miscellaneous",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type DeviceDefinitionParameterGroupCode =
  typeof DeviceDefinitionParameterGroupCode[keyof typeof DeviceDefinitionParameterGroupCode];
