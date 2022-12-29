/**
 * ***No description***
 * http://terminology.hl7.org/ValueSet/v3-ActRelationshipEndsDuring
 */
export const ActRelationshipEndsDuringCode = {
  /**
   * ends during
   */
  endsduring: "EDU",

  /**
   * contains start of, ends before end of
   */
  containsstartofendsbeforeendof: "SBSEASEBE",

  /**
   * starts with. ends before end of
   */
  startswithendsbeforeendof: "SCWSEBE",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActRelationshipEndsDuringCode =
  typeof ActRelationshipEndsDuringCode[keyof typeof ActRelationshipEndsDuringCode];
