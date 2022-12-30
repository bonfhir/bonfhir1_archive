/**
 * **Description:**The type and scope of legal and/or professional responsibility taken-on by the performer of the Act for a specific subject of care as described by an agency for credentialing individuals.
 * http://terminology.hl7.org/ValueSet/v3-ActCredentialedCareProvisionPersonCode
 */
export const ActCredentialedCareProvisionPersonCodeCode = {
  /**
   * act credentialed care provision peron
   */
  _ActCredentialedCareProvisionPersonCode:
    "_ActCredentialedCareProvisionPersonCode",

  /**
   * certified anatomic pathology and clinical pathology care
   */
  CACC: "CACC",

  /**
   * certified allergy and immunology care
   */
  CAIC: "CAIC",

  /**
   * certified aerospace medicine care
   */
  CAMC: "CAMC",

  /**
   * certified anesthesiology care
   */
  CANC: "CANC",

  /**
   * certified anatomic pathology care
   */
  CAPC: "CAPC",

  /**
   * certified clinical biochemical genetics care
   */
  CBGC: "CBGC",

  /**
   * certified clinical cytogenetics care
   */
  CCCC: "CCCC",

  /**
   * certified clinical genetics (M.D.) care
   */
  CCGC: "CCGC",

  /**
   * certified clinical pathology care
   */
  CCPC: "CCPC",

  /**
   * certified colon and rectal surgery care
   */
  CCSC: "CCSC",

  /**
   * certified dermatology care
   */
  CDEC: "CDEC",

  /**
   * certified diagnostic radiology care
   */
  CDRC: "CDRC",

  /**
   * certified emergency medicine care
   */
  CEMC: "CEMC",

  /**
   * certified family practice care
   */
  CFPC: "CFPC",

  /**
   * certified internal medicine care
   */
  CIMC: "CIMC",

  /**
   * certified clinical molecular genetics care
   */
  CMGC: "CMGC",

  /**
   * certified neurology care
   */
  CNEC: "CNEC",

  /**
   * certified nuclear medicine care
   */
  CNMC: "CNMC",

  /**
   * certified neurology with special qualifications in child neurology care
   */
  CNQC: "CNQC",

  /**
   * certified neurological surgery care
   */
  CNSC: "CNSC",

  /**
   * certified obstetrics and gynecology care
   */
  COGC: "COGC",

  /**
   * certified occupational medicine care
   */
  COMC: "COMC",

  /**
   * certified ophthalmology care
   */
  COPC: "COPC",

  /**
   * certified orthopaedic surgery care
   */
  COSC: "COSC",

  /**
   * certified otolaryngology care
   */
  COTC: "COTC",

  /**
   * certified pediatrics care
   */
  CPEC: "CPEC",

  /**
   * certified Ph.D. medical genetics care
   */
  CPGC: "CPGC",

  /**
   * certified public health and general preventive medicine care
   */
  CPHC: "CPHC",

  /**
   * certified physical medicine and rehabilitation care
   */
  CPRC: "CPRC",

  /**
   * certified plastic surgery care
   */
  CPSC: "CPSC",

  /**
   * certified psychiatry care
   */
  CPYC: "CPYC",

  /**
   * certified radiation oncology care
   */
  CROC: "CROC",

  /**
   * certified radiological physics care
   */
  CRPC: "CRPC",

  /**
   * certified surgery care
   */
  CSUC: "CSUC",

  /**
   * certified thoracic surgery care
   */
  CTSC: "CTSC",

  /**
   * certified urology care
   */
  CURC: "CURC",

  /**
   * certified vascular surgery care
   */
  CVSC: "CVSC",

  /**
   * licensed general physician care
   */
  LGPC: "LGPC",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActCredentialedCareProvisionPersonCodeCode =
  typeof ActCredentialedCareProvisionPersonCodeCode[keyof typeof ActCredentialedCareProvisionPersonCodeCode];
