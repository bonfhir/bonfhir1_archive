/**
 * This is the domain of HL7 version codes for the Version 3 standards. Values are to be determined by HL7 and added with each new version of the HL7 Standard.
 * http://terminology.hl7.org/ValueSet/v3-HL7StandardVersionCode
 */
export const HL7StandardVersionCodeCode = {
  /**
   * Ballot 2008 January
   */
  Ballot2008Jan: "Ballot2008Jan",

  /**
   * Ballot 2008 May
   */
  Ballot2008May: "Ballot2008May",

  /**
   * Ballot 2008 September
   */
  Ballot2008Sep: "Ballot2008Sep",

  /**
   * Ballot 2009 January
   */
  Ballot2009Jan: "Ballot2009Jan",

  /**
   * Ballot 2009 May
   */
  Ballot2009May: "Ballot2009May",

  /**
   * Ballot 2009 September
   */
  Ballot2009Sep: "Ballot2009Sep",

  /**
   * Ballot 2010 Jan
   */
  Ballot2010Jan: "Ballot2010Jan",

  /**
   * Ballot 2010 May
   */
  Ballot2010May: "Ballot2010May",

  /**
   * Ballot 2010 Sep
   */
  Ballot2010Sep: "Ballot2010Sep",

  /**
   * Ballot 2011 Jan
   */
  Ballot2011Jan: "Ballot2011Jan",

  /**
   * Ballot 2011 May
   */
  Ballot2011May: "Ballot2011May",

  /**
   * Ballot 2011 Sep
   */
  Ballot2011Sep: "Ballot2011Sep",

  /**
   * Ballot 2012 Jan
   */
  Ballot2012Jan: "Ballot2012Jan",

  /**
   * Ballot 2012 May
   */
  Ballot2012May: "Ballot2012May",

  /**
   * Ballot 2012 Sep
   */
  Ballot2012Sep: "Ballot2012Sep",

  /**
   * HL7 Version V3-2003-12
   */
  "V3-2003-12": "V3-2003-12",

  /**
   * 2005 Normative Edition
   */
  "V3-2005N": "V3-2005N",

  /**
   * 2006 Normative Edition
   */
  "V3-2006N": "V3-2006N",

  /**
   * 2008 Normative Edition
   */
  "V3-2008N": "V3-2008N",

  /**
   * 2009 Normative Edition
   */
  "V3-2009N": "V3-2009N",

  /**
   * 2010 Normative Edition
   */
  "V3-2010N": "V3-2010N",

  /**
   * 2011 Normative Edition
   */
  "V3-2011N": "V3-2011N",

  /**
   * 2012 Normative Edition
   */
  "V3-2012N": "V3-2012N",

  /**
   * Version3 Pre-release #1
   */
  V3PR1: "V3PR1",

  /**
   * 2007 Normative Edition
   */
  "V3-2007N": "V3-2007N",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type HL7StandardVersionCodeCode =
  typeof HL7StandardVersionCodeCode[keyof typeof HL7StandardVersionCodeCode];
