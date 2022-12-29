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
  Cleftpalatewithcleftlip: "115902D",

  /**
   * Juvenile rheumatoid arthritis
   */
  Juvenilerheumatoidarthritis: "117349D",

  /**
   * Hemifacial microsomia
   */
  Hemifacialmicrosomia: "122924D",

  /**
   * Cleft palate
   */
  Cleftpalate: "132578D",

  /**
   * Cleidocranial dysostosis
   */
  Cleidocranialdysostosis: "133572D",

  /**
   * Treacher Collins syndrome
   */
  TreacherCollinssyndrome: "146718D",

  /**
   * Cleft lip
   */
  Cleftlip: "149694D",

  /**
   * Complete trisomy 21 syndrome
   */
  Completetrisomy21syndrome: "198545D",

  /**
   * Marfan syndrome
   */
  Marfansyndrome: "199380D",

  /**
   * Cleft lip & alveolus
   */
  Cleftlipalveolus: "210958D",

  /**
   * Craniosynostosis syndrome
   */
  Craniosynostosissyndrome: "210959D",

  /**
   * Arthrogryposis
   */
  Arthrogryposis: "210960D",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SnodentCraniofacialAnomalyInternationalCode =
  typeof SnodentCraniofacialAnomalyInternationalCode[keyof typeof SnodentCraniofacialAnomalyInternationalCode];
