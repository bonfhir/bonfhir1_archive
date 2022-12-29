/**
 * The SNODENT identifiers for the teeth in the maxilla assessed for tooth-specific inter-arch deviations as part of calculating the Salzmann Malocclusion Severity Index.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentSalzmannInterarchDeviationMaxillaryToothInternational
 */
export const SnodentSalzmannInterarchDeviationMaxillaryToothInternationalCode =
  {
    /**
     * Permanent upper right canine tooth
     */
    Permanentupperrightcaninetooth: "160840D",

    /**
     * Permanent upper left canine tooth
     */
    Permanentupperleftcaninetooth: "160957D",

    /**
     * Permanent upper right first molar tooth
     */
    Permanentupperrightfirstmolartooth: "161010D",

    /**
     * Permanent upper left first molar tooth
     */
    Permanentupperleftfirstmolartooth: "161132D",

    /**
     * Permanent upper left second premolar tooth
     */
    Permanentupperleftsecondpremolartooth: "161178D",

    /**
     * Permanent upper left first premolar tooth
     */
    Permanentupperleftfirstpremolartooth: "161329D",

    /**
     * Permanent upper right second premolar tooth
     */
    Permanentupperrightsecondpremolartooth: "161546D",

    /**
     * Permanent upper right first premolar tooth
     */
    Permanentupperrightfirstpremolartooth: "161607D",
  } as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentSalzmannInterarchDeviationMaxillaryToothInternationalCode =
  typeof SnodentSalzmannInterarchDeviationMaxillaryToothInternationalCode[keyof typeof SnodentSalzmannInterarchDeviationMaxillaryToothInternationalCode];
