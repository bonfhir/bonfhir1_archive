export const ContractStatus = {
  resourceType: "CodeSystem",
  id: "contract-status",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/contract-status defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">amended<a name="contract-status-amended"> </a></td><td>Amended</td><td>Contract is augmented with additional information to correct errors in a predecessor or to updated values in a predecessor. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: revised; replaced.</td></tr><tr><td style="white-space:nowrap">appended<a name="contract-status-appended"> </a></td><td>Appended</td><td>Contract is augmented with additional information that was missing from a predecessor Contract. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: updated, replaced.</td></tr><tr><td style="white-space:nowrap">cancelled<a name="contract-status-cancelled"> </a></td><td>Cancelled</td><td>Contract is terminated due to failure of the Grantor and/or the Grantee to fulfil one or more contract provisions. Usage: Abnormal contract termination. Precedence Order = 10. Comparable FHIR and v.3 status codes: stopped; failed; aborted.</td></tr><tr><td style="white-space:nowrap">disputed<a name="contract-status-disputed"> </a></td><td>Disputed</td><td>Contract is pended to rectify failure of the Grantor or the Grantee to fulfil contract provision(s). E.g., Grantee complaint about Grantor\'s failure to comply with contract provisions. Usage: Contract pended. Precedence Order = 7. Comparable FHIR and v.3 status codes: on hold; pended; suspended.</td></tr><tr><td style="white-space:nowrap">entered-in-error<a name="contract-status-entered-in-error"> </a></td><td>Entered in Error</td><td>Contract was created in error. No Precedence Order.  Status may be applied to a Contract with any status.</td></tr><tr><td style="white-space:nowrap">executable<a name="contract-status-executable"> </a></td><td>Executable</td><td>Contract execution pending; may be executed when either the Grantor or the Grantee accepts the contract provisions by signing. I.e., where either the Grantor or the Grantee has signed, but not both. E.g., when an insurance applicant signs the insurers application, which references the policy. Usage: Optional first step of contract execution activity.  May be skipped and contracting activity moves directly to executed state. Precedence Order = 3. Comparable FHIR and v.3 status codes: draft; preliminary; planned; intended; active.</td></tr><tr><td style="white-space:nowrap">executed<a name="contract-status-executed"> </a></td><td>Executed</td><td>Contract is activated for period stipulated when both the Grantor and Grantee have signed it. Usage: Required state for normal completion of contracting activity.  Precedence Order = 6. Comparable FHIR and v.3 status codes: accepted; completed.</td></tr><tr><td style="white-space:nowrap">negotiable<a name="contract-status-negotiable"> </a></td><td>Negotiable</td><td>Contract execution is suspended while either or both the Grantor and Grantee propose and consider new or revised contract provisions. I.e., where the party which has not signed proposes changes to the terms.  E .g., a life insurer declines to agree to the signed application because the life insurer has evidence that the applicant, who asserted to being younger or a non-smoker to get a lower premium rate - but offers instead to agree to a higher premium based on the applicants actual age or smoking status. Usage: Optional contract activity between executable and executed state. Precedence Order = 4. Comparable FHIR and v.3 status codes: in progress; review; held.</td></tr><tr><td style="white-space:nowrap">offered<a name="contract-status-offered"> </a></td><td>Offered</td><td>Contract is a proposal by either the Grantor or the Grantee. Aka - A Contract hard copy or electronic \'template\', \'form\' or \'application\'. E.g., health insurance application; consent directive form. Usage: Beginning of contract negotiation, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 2. Comparable FHIR and v.3 status codes: requested; new.</td></tr><tr><td style="white-space:nowrap">policy<a name="contract-status-policy"> </a></td><td>Policy</td><td>Contract template is available as the basis for an application or offer by the Grantor or Grantee. E.g., health insurance policy; consent directive policy.  Usage: Required initial contract activity, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 1. Comparable FHIR and v.3 status codes: proposed; intended.</td></tr><tr><td style="white-space:nowrap">rejected<a name="contract-status-rejected"> </a></td><td>Rejected</td><td> Execution of the Contract is not completed because either or both the Grantor and Grantee decline to accept some or all of the contract provisions. Usage: Optional contract activity between executable and abnormal termination. Precedence Order = 5. Comparable FHIR and v.3 status codes:  stopped; cancelled.</td></tr><tr><td style="white-space:nowrap">renewed<a name="contract-status-renewed"> </a></td><td>Renewed</td><td>Beginning of a successor Contract at the termination of predecessor Contract lifecycle. Usage: Follows termination of a preceding Contract that has reached its expiry date. Precedence Order = 13. Comparable FHIR and v.3 status codes: superseded.</td></tr><tr><td style="white-space:nowrap">revoked<a name="contract-status-revoked"> </a></td><td>Revoked</td><td>A Contract that is rescinded.  May be required prior to replacing with an updated Contract. Comparable FHIR and v.3 status codes: nullified.</td></tr><tr><td style="white-space:nowrap">resolved<a name="contract-status-resolved"> </a></td><td>Resolved</td><td>Contract is reactivated after being pended because of faulty execution. *E.g., competency of the signer(s), or where the policy is substantially different from and did not accompany the application/form so that the applicant could not compare them. Aka - \'\'reactivated\'\'. Usage: Optional stage where a pended contract is reactivated. Precedence Order = 8. Comparable FHIR and v.3 status codes: reactivated.</td></tr><tr><td style="white-space:nowrap">terminated<a name="contract-status-terminated"> </a></td><td>Terminated</td><td>Contract reaches its expiry date. It might or might not be renewed or renegotiated. Usage: Normal end of contract period. Precedence Order = 12. Comparable FHIR and v.3 status codes: Obsoleted.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://hl7.org/fhir/contract-status",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.744",
    },
  ],
  version: "4.3.0",
  name: "ContractStatus",
  status: "draft",
  experimental: true,
  date: "2017-02-13",
  publisher: "HL7 International",
  contact: [
    {
      name: "FHIR project team",
      telecom: [{ system: "url", value: "http://hl7.org/fhir" }],
    },
  ],
  description:
    "This CodeSystem contains FHIR-defined contract status types. Each definition includes usage notes explaining the precedence order in contract lifecycle - i.e., while only some stages are required, the order in which they may occur is deterministic; and a map to comparable FHIR and v.3 status codes. It follows guidance about use of status codes in FHIR at http://build.fhir.org/sc.html.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "amended",
      display: "Amended",
      definition:
        "Contract is augmented with additional information to correct errors in a predecessor or to updated values in a predecessor. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: revised; replaced.",
    },
    {
      code: "appended",
      display: "Appended",
      definition:
        "Contract is augmented with additional information that was missing from a predecessor Contract. Usage: Contract altered within effective time. Precedence Order = 9. Comparable FHIR and v.3 status codes: updated, replaced.",
    },
    {
      code: "cancelled",
      display: "Cancelled",
      definition:
        "Contract is terminated due to failure of the Grantor and/or the Grantee to fulfil one or more contract provisions. Usage: Abnormal contract termination. Precedence Order = 10. Comparable FHIR and v.3 status codes: stopped; failed; aborted.",
    },
    {
      code: "disputed",
      display: "Disputed",
      definition:
        "Contract is pended to rectify failure of the Grantor or the Grantee to fulfil contract provision(s). E.g., Grantee complaint about Grantor's failure to comply with contract provisions. Usage: Contract pended. Precedence Order = 7. Comparable FHIR and v.3 status codes: on hold; pended; suspended.",
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition:
        "Contract was created in error. No Precedence Order.  Status may be applied to a Contract with any status.",
    },
    {
      code: "executable",
      display: "Executable",
      definition:
        "Contract execution pending; may be executed when either the Grantor or the Grantee accepts the contract provisions by signing. I.e., where either the Grantor or the Grantee has signed, but not both. E.g., when an insurance applicant signs the insurers application, which references the policy. Usage: Optional first step of contract execution activity.  May be skipped and contracting activity moves directly to executed state. Precedence Order = 3. Comparable FHIR and v.3 status codes: draft; preliminary; planned; intended; active.",
    },
    {
      code: "executed",
      display: "Executed",
      definition:
        "Contract is activated for period stipulated when both the Grantor and Grantee have signed it. Usage: Required state for normal completion of contracting activity.  Precedence Order = 6. Comparable FHIR and v.3 status codes: accepted; completed.",
    },
    {
      code: "negotiable",
      display: "Negotiable",
      definition:
        "Contract execution is suspended while either or both the Grantor and Grantee propose and consider new or revised contract provisions. I.e., where the party which has not signed proposes changes to the terms.  E .g., a life insurer declines to agree to the signed application because the life insurer has evidence that the applicant, who asserted to being younger or a non-smoker to get a lower premium rate - but offers instead to agree to a higher premium based on the applicants actual age or smoking status. Usage: Optional contract activity between executable and executed state. Precedence Order = 4. Comparable FHIR and v.3 status codes: in progress; review; held.",
    },
    {
      code: "offered",
      display: "Offered",
      definition:
        "Contract is a proposal by either the Grantor or the Grantee. Aka - A Contract hard copy or electronic 'template', 'form' or 'application'. E.g., health insurance application; consent directive form. Usage: Beginning of contract negotiation, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 2. Comparable FHIR and v.3 status codes: requested; new.",
    },
    {
      code: "policy",
      display: "Policy",
      definition:
        "Contract template is available as the basis for an application or offer by the Grantor or Grantee. E.g., health insurance policy; consent directive policy.  Usage: Required initial contract activity, which may have been completed as a precondition because used for 0..* contracts. Precedence Order = 1. Comparable FHIR and v.3 status codes: proposed; intended.",
    },
    {
      code: "rejected",
      display: "Rejected",
      definition:
        " Execution of the Contract is not completed because either or both the Grantor and Grantee decline to accept some or all of the contract provisions. Usage: Optional contract activity between executable and abnormal termination. Precedence Order = 5. Comparable FHIR and v.3 status codes:  stopped; cancelled.",
    },
    {
      code: "renewed",
      display: "Renewed",
      definition:
        "Beginning of a successor Contract at the termination of predecessor Contract lifecycle. Usage: Follows termination of a preceding Contract that has reached its expiry date. Precedence Order = 13. Comparable FHIR and v.3 status codes: superseded.",
    },
    {
      code: "revoked",
      display: "Revoked",
      definition:
        "A Contract that is rescinded.  May be required prior to replacing with an updated Contract. Comparable FHIR and v.3 status codes: nullified.",
    },
    {
      code: "resolved",
      display: "Resolved",
      definition:
        "Contract is reactivated after being pended because of faulty execution. *E.g., competency of the signer(s), or where the policy is substantially different from and did not accompany the application/form so that the applicant could not compare them. Aka - ''reactivated''. Usage: Optional stage where a pended contract is reactivated. Precedence Order = 8. Comparable FHIR and v.3 status codes: reactivated.",
    },
    {
      code: "terminated",
      display: "Terminated",
      definition:
        "Contract reaches its expiry date. It might or might not be renewed or renegotiated. Usage: Normal end of contract period. Precedence Order = 12. Comparable FHIR and v.3 status codes: Obsoleted.",
    },
  ],
};
