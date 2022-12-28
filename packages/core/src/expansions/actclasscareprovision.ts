/**
 * An **Act** that of taking on whole or partial responsibility for, or attention to, safety and well-being of a subject of care.

*Discussion:* A **care provision** event may exist without any other care actions taking place. For example, when a patient is assigned to the care of a particular health professional.

In **request** (RQO) mood **care provision** communicates a referral, which is a request:

 *  from one party (linked as a **participant** of type **author** (AUT)),
 *  to another party (linked as a **participant** of type **performer** (PRF),
 *  to take responsibility for a scope specified by the code attribute,
 *  for an entity (linked as a **participant** of type **subject** (SBJ)).

The scope of the care for which responsibility is taken is identified by *code* attribute.

In **event** (EVN) mood **care provision** indicates the effective time interval of a specified scope of responsibility by a **performer** (PRF) or set of **performers** (PRF) for a **subject** (SBJ).

*Examples:*

1.  Referral from GP to a specialist.
2.  Assignment of a patient or group of patients to the case list of a health professional.
3.  Assignment of inpatients to the care of particular nurses for a working shift.
 * http://terminology.hl7.org/ValueSet/v3-ActClassCareProvision
 */
export const ActClassCareProvisionCode = {
  /**
   * care provision
   */
  PCPR: "PCPR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassCareProvisionCode =
  typeof ActClassCareProvisionCode[keyof typeof ActClassCareProvisionCode];
