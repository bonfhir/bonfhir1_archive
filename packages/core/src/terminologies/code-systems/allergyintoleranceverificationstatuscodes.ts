export const AllergyIntoleranceVerificationStatusCodes = {
  resourceType: "CodeSystem",
  id: "allergyintolerance-verification",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/allergyintolerance-verification defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">unconfirmed<a name="allergyintolerance-verification-unconfirmed"> </a></td><td>Unconfirmed</td><td>A low level of certainty about the propensity for a reaction to the identified substance.</td></tr><tr><td style="white-space:nowrap">confirmed<a name="allergyintolerance-verification-confirmed"> </a></td><td>Confirmed</td><td>A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.</td></tr><tr><td style="white-space:nowrap">refuted<a name="allergyintolerance-verification-refuted"> </a></td><td>Refuted</td><td>A propensity for a reaction to the identified substance has been disputed or disproven with a sufficient level of clinical certainty to justify invalidating the assertion. This might or might not include testing or rechallenge.</td></tr><tr><td style="white-space:nowrap">entered-in-error<a name="allergyintolerance-verification-entered-in-error"> </a></td><td>Entered in Error</td><td>The statement was entered in error and is not valid.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pc",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/allergyintolerance-verification",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1371",
    },
  ],
  version: "4.3.0",
  name: "AllergyIntoleranceVerificationStatusCodes",
  title: "AllergyIntolerance Verification Status Codes",
  status: "draft",
  experimental: false,
  description:
    "Preferred value set for AllergyIntolerance Verification Status.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/allergyintolerance-verification",
  content: "complete",
  concept: [
    {
      code: "unconfirmed",
      display: "Unconfirmed",
      definition:
        "A low level of certainty about the propensity for a reaction to the identified substance.",
    },
    {
      code: "confirmed",
      display: "Confirmed",
      definition:
        "A high level of certainty about the propensity for a reaction to the identified substance, which may include clinical evidence by testing or rechallenge.",
    },
    {
      code: "refuted",
      display: "Refuted",
      definition:
        "A propensity for a reaction to the identified substance has been disputed or disproven with a sufficient level of clinical certainty to justify invalidating the assertion. This might or might not include testing or rechallenge.",
    },
    {
      code: "entered-in-error",
      display: "Entered in Error",
      definition: "The statement was entered in error and is not valid.",
    },
  ],
};
