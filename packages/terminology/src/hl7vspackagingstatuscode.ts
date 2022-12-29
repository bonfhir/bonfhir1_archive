/**
 * Value Set of codes that specify the packaging status of the service.
 * http://terminology.hl7.org/ValueSet/v2-0469
 */
export const Hl7VSPackagingStatusCodeCode = {
  /**
   * Not packaged
   */
  Notpackaged: "0",

  /**
   * Packaged service (status indicator N, or no HCPCS code and certain revenue codes)
   */
  PackagedservicestatusindicatorNornoHCPCScodeandcertainrevenuecodes: "1",

  /**
   * Packaged as part of partial hospitalization per diem or daily mental health service per diem
   */
  Packagedaspartofpartialhospitalizationperdiemordailymentalhealthserviceperdiem:
    "2",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSPackagingStatusCodeCode =
  typeof Hl7VSPackagingStatusCodeCode[keyof typeof Hl7VSPackagingStatusCodeCode];
