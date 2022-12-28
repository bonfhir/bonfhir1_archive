/**
 * The action of coming into sufficient physical proximity to allow physical or chemical interaction. Examples include: exposure to radiation, inhalation of peanut aerosol or viral particles. This includes intended exposure (e.g. administering a drug product) as well as accidental or environmental exposure. Actual vs. potential exposure can be differentiated using Act.uncertaintyCode.

The agent to which the subject was exposed is conveyed as a *Direct* participation or specialization there-of.

*Constraints:* The following Participations should be used with the following Roles and Entities to distinguish the specific entities:

 *  The ***exposed entity*** is the entity of interest that is the recipient of the exposure and potentially affected. This is conveyed through the subject (SBJ) Participation.
 *  An entity that has carried the agent transmitted in the exposure is the "***exposure source***" (EXSRC). For example:
    
     *  a person or animal who carried an infectious disease and interacts (EXSRC) with another person or animal (SBJ) transmitting the disease agent; or
     *  a place or other environment (EXSRC) and a person or animal (SBJ) who is exposed in the presence of this environment.
 *  When it is unknown whether a participating entity is the source of the agent (EXSRC) or the target of the transmission (SBJ), also known as "***exposure contact***", the "participant" (PART) is used.
 *  The substance to which the subject is exposed that carries the exposure agent or the chemical substance of interest itself, participates as a "consumable" (CSM). There are at least two configurations: (a) the player of the Role that participates as CSM is the chemical or biological substance mixed or carried by the scoper-entity of the Role (e.g., ingredient role); or (b) the player of the Role that participates as CSM is a mixture known to contain the chemical, radiological or biological substance of interest.
 *  The device specifically used to administer the substance is associated using the device (DEV) Participation. This may be a device intentionally used (such as applicator device) or it may be a thing that accidentally carried this substance; for instance, an infected needle or knife. The same entity may be related in the act as both EXSRC and DEV.
 * http://terminology.hl7.org/ValueSet/v3-ActClassExposure
 */
export const ActClassExposureCode = {
  /**
   * exposure
   */
  EXPOS: "EXPOS",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassExposureCode =
  typeof ActClassExposureCode[keyof typeof ActClassExposureCode];
