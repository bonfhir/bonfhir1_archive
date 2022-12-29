/**
 * **Description:**An act that is intended to result in new information about a subject. The main difference between Observations and other Acts is that Observations have a value attribute. The **code** attribute of Observation and the **value** attribute of Observation must be considered in combination to determine the semantics of the observation.

**Discussion:**

Structurally, many observations are name-value-pairs, where the Observation.code (inherited from Act) is the name and the Observation.value is the value of the property. Such a construct is also known as a variable (a named feature that can assume a value) hence, the Observation class is always used to hold generic name-value-pairs or variables, even though the variable valuation may not be the result of an elaborate observation method. It may be a simple answer to a question or it may be an assertion or setting of a parameter.

As with all Act statements, Observation statements describe what was done, and in the case of Observations, this includes a description of what was actually observed (results or answers); and those results or answers are part of the observation and not split off into other objects.

The method of action is asserted by the Observation classCode or its subclasses at the least granular level, by the Observation.code attribute value at the medium level of granularity, and by the attribute value of observation.methodCode when a finer level of granularity is required. The method in whole or in part may also appear in the attribute value of Observation.value when using coded data types to express the value of the attribute. Relevant aspects of methodology may also be restated in value when the results themselves imply or state a methodology.

An observation may consist of component observations each having their own Observation.code and Observation.value. In this case, the composite observation may not have an Observation.value for itself. For instance, a white blood cell count consists of the sub-observations for the counts of the various granulocytes, lymphocytes and other normal or abnormal blood cells (e.g., blasts). The overall white blood cell count Observation itself may therefore not have a value by itself (even though it could have one, e.g., the sum total of white blood cells). Thus, as long as an Act is essentially an Act of recognizing and noting information about a subject, it is an Observation, regardless of whether it has a simple value by itself or whether it has sub-observations.

Even though observations are professional acts (see Act) and as such are intentional actions, this does not require that every possible outcome of an observation be pondered in advance of it being actually made. For instance, differential white blood cell counts (WBC) rarely show blasts, but if they do, this is part of the WBC observation even though blasts might not be predefined in the structure of a normal WBC.

Clinical documents commonly have Subjective and Objective findings, both of which are kinds of Observations. In addition, clinical documents commonly contain Assessments, which are also kinds of Observations. Thus, the establishment of a diagnosis is an Observation.

**Examples:**

 *  Recording the results of a Family History Assessment
 *  Laboratory test and associated result
 *  Physical exam test and associated result
 *  Device temperature
 *  Soil lead level
 * http://terminology.hl7.org/ValueSet/v3-ActClassObservation
 */
export const ActClassObservationCode = {
  /**
   * observation
   */
  observation: "OBS",

  /**
   * ActClassROI
   */
  ActClassROI: "_ActClassROI",

  /**
   * bounded ROI
   */
  boundedROI: "ROIBND",

  /**
   * overlay ROI
   */
  overlayROI: "ROIOVL",

  /**
   * subject physical position
   */
  subjectphysicalposition: "_SubjectPhysicalPosition",

  /**
   * subject body position
   */
  subjectbodyposition: "_SubjectBodyPosition",

  /**
   * left lateral decubitus
   */
  leftlateraldecubitus: "LLD",

  /**
   * prone
   */
  prone: "PRN",

  /**
   * right lateral decubitus
   */
  rightlateraldecubitus: "RLD",

  /**
   * Semi-Fowler's
   */
  SemiFowlers: "SFWL",

  /**
   * sitting
   */
  sitting: "SIT",

  /**
   * standing
   */
  standing: "STN",

  /**
   * supine
   */
  supine: "SUP",

  /**
   * reverse trendelenburg
   */
  reversetrendelenburg: "RTRD",

  /**
   * trendelenburg
   */
  trendelenburg: "TRD",

  /**
   * imaging subject orientation
   */
  imagingsubjectorientation: "_ImagingSubjectOrientation",

  /**
   * detected issue
   */
  detectedissue: "ALRT",

  /**
   * battery
   */
  battery: "BATTERY",

  /**
   * clinical trial
   */
  clinicaltrial: "CLNTRL",

  /**
   * Condition Node
   */
  ConditionNode: "CNOD",

  /**
   * Condition
   */
  Condition: "COND",

  /**
   * public health case
   */
  publichealthcase: "CASE",

  /**
   * outbreak
   */
  outbreak: "OUTB",

  /**
   * diagnostic image
   */
  diagnosticimage: "DGIMG",

  /**
   * genomic observation
   */
  genomicobservation: "GEN",

  /**
   * determinant peptide
   */
  determinantpeptide: "DETPOL",

  /**
   * expression level
   */
  expressionlevel: "EXP",

  /**
   * locus
   */
  locus: "LOC",

  /**
   * phenotype
   */
  phenotype: "PHN",

  /**
   * polypeptide
   */
  polypeptide: "POL",

  /**
   * bio sequence
   */
  biosequence: "SEQ",

  /**
   * bio sequence variation
   */
  biosequencevariation: "SEQVAR",

  /**
   * investigation
   */
  investigation: "INVSTG",

  /**
   * observation series
   */
  observationseries: "OBSSER",

  /**
   * correlated observation sequences
   */
  correlatedobservationsequences: "OBSCOR",

  /**
   * position
   */
  position: "POS",

  /**
   * position accuracy
   */
  positionaccuracy: "POSACC",

  /**
   * position coordinate
   */
  positioncoordinate: "POSCOORD",

  /**
   * specimen observation
   */
  specimenobservation: "SPCOBS",

  /**
   * Verification
   */
  Verification: "VERIF",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassObservationCode =
  typeof ActClassObservationCode[keyof typeof ActClassObservationCode];
