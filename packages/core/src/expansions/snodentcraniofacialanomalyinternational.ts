/**
 * The SNODENT identifiers for the most common craniofacial anomalies that may influence the course of orthodontic treatment to be performed.

This value set contains content from SNODENT® Copyright American Dental Association (ADA). All rights reserved. SNODENT is a registered trademark of the ADA.

http://www.ada.org/en/member-center/member-benefits/practice-resources/dental-informatics/snodent/licensing-snodent

*Steward:* Attachments WG
 * http://terminology.hl7.org/ValueSet/v3-SnodentCraniofacialAnomalyInternational
 */
export const SnodentCraniofacialAnomalyInternationalCode = {
  /**
   * Cleft palate with cleft lip
   */
  "115902D": "115902D",

  /**
   * Juvenile rheumatoid arthritis
   */
  "117349D": "117349D",

  /**
   * Hemifacial microsomia
   */
  "122924D": "122924D",

  /**
   * Cleft palate
   */
  "132578D": "132578D",

  /**
   * Cleidocranial dysostosis
   */
  "133572D": "133572D",

  /**
   * Treacher Collins syndrome
   */
  "146718D": "146718D",

  /**
   * Cleft lip
   */
  "149694D": "149694D",

  /**
   * Complete trisomy 21 syndrome
   */
  "198545D": "198545D",

  /**
   * Marfan syndrome
   */
  "199380D": "199380D",

  /**
   * Cleft lip & alveolus
   */
  "210958D": "210958D",

  /**
   * Craniosynostosis syndrome
   */
  "210959D": "210959D",

  /**
   * Arthrogryposis
   */
  "210960D": "210960D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentCraniofacialAnomalyInternationalCode =
  typeof SnodentCraniofacialAnomalyInternationalCode[keyof typeof SnodentCraniofacialAnomalyInternationalCode];
