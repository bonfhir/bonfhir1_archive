/**
 * **Description:**The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing individuals.
 * http://terminology.hl7.org/ValueSet/v3-ActCredentialedCareProvisionPersonCode
 */
export const ActCredentialedCareProvisionPersonCodeCode = {
  /**
   * act credentialed care provision peron
   */
  actcredentialedcareprovisionperon: "_ActCredentialedCareProvisionPersonCode",

  /**
   * certified anatomic pathology and clinical pathology care
   */
  certifiedanatomicpathologyandclinicalpathologycare: "CACC",

  /**
   * certified allergy and immunology care
   */
  certifiedallergyandimmunologycare: "CAIC",

  /**
   * certified aerospace medicine care
   */
  certifiedaerospacemedicinecare: "CAMC",

  /**
   * certified anesthesiology care
   */
  certifiedanesthesiologycare: "CANC",

  /**
   * certified anatomic pathology care
   */
  certifiedanatomicpathologycare: "CAPC",

  /**
   * certified clinical biochemical genetics care
   */
  certifiedclinicalbiochemicalgeneticscare: "CBGC",

  /**
   * certified clinical cytogenetics care
   */
  certifiedclinicalcytogeneticscare: "CCCC",

  /**
   * certified clinical genetics (M.D.) care
   */
  certifiedclinicalgeneticsMDcare: "CCGC",

  /**
   * certified clinical pathology care
   */
  certifiedclinicalpathologycare: "CCPC",

  /**
   * certified colon and rectal surgery care
   */
  certifiedcolonandrectalsurgerycare: "CCSC",

  /**
   * certified dermatology care
   */
  certifieddermatologycare: "CDEC",

  /**
   * certified diagnostic radiology care
   */
  certifieddiagnosticradiologycare: "CDRC",

  /**
   * certified emergency medicine care
   */
  certifiedemergencymedicinecare: "CEMC",

  /**
   * certified family practice care
   */
  certifiedfamilypracticecare: "CFPC",

  /**
   * certified internal medicine care
   */
  certifiedinternalmedicinecare: "CIMC",

  /**
   * certified clinical molecular genetics care
   */
  certifiedclinicalmoleculargeneticscare: "CMGC",

  /**
   * certified neurology care
   */
  certifiedneurologycare: "CNEC",

  /**
   * certified nuclear medicine care
   */
  certifiednuclearmedicinecare: "CNMC",

  /**
   * certified neurology with special qualifications in child neurology care
   */
  certifiedneurologywithspecialqualificationsinchildneurologycare: "CNQC",

  /**
   * certified neurological surgery care
   */
  certifiedneurologicalsurgerycare: "CNSC",

  /**
   * certified obstetrics and gynecology care
   */
  certifiedobstetricsandgynecologycare: "COGC",

  /**
   * certified occupational medicine care
   */
  certifiedoccupationalmedicinecare: "COMC",

  /**
   * certified ophthalmology care
   */
  certifiedophthalmologycare: "COPC",

  /**
   * certified orthopaedic surgery care
   */
  certifiedorthopaedicsurgerycare: "COSC",

  /**
   * certified otolaryngology care
   */
  certifiedotolaryngologycare: "COTC",

  /**
   * certified pediatrics care
   */
  certifiedpediatricscare: "CPEC",

  /**
   * certified Ph.D. medical genetics care
   */
  certifiedPhDmedicalgeneticscare: "CPGC",

  /**
   * certified public health and general preventive medicine care
   */
  certifiedpublichealthandgeneralpreventivemedicinecare: "CPHC",

  /**
   * certified physical medicine and rehabilitation care
   */
  certifiedphysicalmedicineandrehabilitationcare: "CPRC",

  /**
   * certified plastic surgery care
   */
  certifiedplasticsurgerycare: "CPSC",

  /**
   * certified psychiatry care
   */
  certifiedpsychiatrycare: "CPYC",

  /**
   * certified radiation oncology care
   */
  certifiedradiationoncologycare: "CROC",

  /**
   * certified radiological physics care
   */
  certifiedradiologicalphysicscare: "CRPC",

  /**
   * certified surgery care
   */
  certifiedsurgerycare: "CSUC",

  /**
   * certified thoracic surgery care
   */
  certifiedthoracicsurgerycare: "CTSC",

  /**
   * certified urology care
   */
  certifiedurologycare: "CURC",

  /**
   * certified vascular surgery care
   */
  certifiedvascularsurgerycare: "CVSC",

  /**
   * licensed general physician care
   */
  licensedgeneralphysiciancare: "LGPC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCredentialedCareProvisionPersonCodeCode =
  typeof ActCredentialedCareProvisionPersonCodeCode[keyof typeof ActCredentialedCareProvisionPersonCodeCode];
