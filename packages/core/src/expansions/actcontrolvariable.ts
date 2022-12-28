/**
 * An observation form that determines parameters or attributes of an Act. Examples are the settings of a ventilator machine as parameters of a ventilator treatment act; the controls on dillution factors of a chemical analyzer as a parameter of a laboratory observation act; the settings of a physiologic measurement assembly (e.g., time skew) or the position of the body while measuring blood pressure.

Control variables are forms of observations because just as with clinical observations, the Observation.code determines the parameter and the Observation.value assigns the value. While control variables sometimes can be observed (by noting the control settings or an actually measured feedback loop) they are not primary observations, in the sense that a control variable without a primary act is of no use (e.g., it makes no sense to record a blood pressure position without recording a blood pressure, whereas it does make sense to record a systolic blood pressure without a diastolic blood pressure).
 * http://terminology.hl7.org/ValueSet/v3-ActControlVariable
 */
export const ActControlVariableCode = {
  /**
   * auto-repeat permission
   */
  AUTO: "AUTO",

  /**
   * endogenous content
   */
  ENDC: "ENDC",

  /**
   * reflex permission
   */
  REFLEX: "REFLEX",

  /**
   * ECGControlVariable
   */
  _ECGControlVariable: "_ECGControlVariable",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActControlVariableCode =
  typeof ActControlVariableCode[keyof typeof ActControlVariableCode];
