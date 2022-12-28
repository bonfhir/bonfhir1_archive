export const ConceptMapEquivalence = {
  resourceType: "CodeSystem",
  id: "concept-map-equivalence",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/concept-map-equivalence defines the following codes:</p><table class="codes"><tr><td><b>Lvl</b></td><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td>1</td><td style="white-space:nowrap">relatedto<a name="concept-map-equivalence-relatedto"> </a></td><td>Related To</td><td>The concepts are related to each other, and have at least some overlap in meaning, but the exact relationship is not known.</td></tr><tr><td>2</td><td style="white-space:nowrap">  equivalent<a name="concept-map-equivalence-equivalent"> </a></td><td>Equivalent</td><td>The definitions of the concepts mean the same thing (including when structural implications of meaning are considered) (i.e. extensionally identical).</td></tr><tr><td>3</td><td style="white-space:nowrap">    equal<a name="concept-map-equivalence-equal"> </a></td><td>Equal</td><td>The definitions of the concepts are exactly the same (i.e. only grammatical differences) and structural implications of meaning are identical or irrelevant (i.e. intentionally identical).</td></tr><tr><td>2</td><td style="white-space:nowrap">  wider<a name="concept-map-equivalence-wider"> </a></td><td>Wider</td><td>The target mapping is wider in meaning than the source concept.</td></tr><tr><td>2</td><td style="white-space:nowrap">  subsumes<a name="concept-map-equivalence-subsumes"> </a></td><td>Subsumes</td><td>The target mapping subsumes the meaning of the source concept (e.g. the source is-a target).</td></tr><tr><td>2</td><td style="white-space:nowrap">  narrower<a name="concept-map-equivalence-narrower"> </a></td><td>Narrower</td><td>The target mapping is narrower in meaning than the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.</td></tr><tr><td>2</td><td style="white-space:nowrap">  specializes<a name="concept-map-equivalence-specializes"> </a></td><td>Specializes</td><td>The target mapping specializes the meaning of the source concept (e.g. the target is-a source).</td></tr><tr><td>2</td><td style="white-space:nowrap">  inexact<a name="concept-map-equivalence-inexact"> </a></td><td>Inexact</td><td>The target mapping overlaps with the source concept, but both source and target cover additional meaning, or the definitions are imprecise and it is uncertain whether they have the same boundaries to their meaning. The sense in which the mapping is inexact SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.</td></tr><tr><td>1</td><td style="white-space:nowrap">unmatched<a name="concept-map-equivalence-unmatched"> </a></td><td>Unmatched</td><td>There is no match for this concept in the target code system.</td></tr><tr><td>2</td><td style="white-space:nowrap">  disjoint<a name="concept-map-equivalence-disjoint"> </a></td><td>Disjoint</td><td>This is an explicit assertion that there is no mapping between the source and target concept.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 3,
    },
  ],
  url: "http://hl7.org/fhir/concept-map-equivalence",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.18",
    },
  ],
  version: "4.3.0",
  name: "ConceptMapEquivalence",
  title: "ConceptMapEquivalence",
  status: "draft",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  description: "The degree of equivalence between concepts.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/concept-map-equivalence",
  content: "complete",
  concept: [
    {
      code: "relatedto",
      display: "Related To",
      definition:
        "The concepts are related to each other, and have at least some overlap in meaning, but the exact relationship is not known.",
      concept: [
        {
          code: "equivalent",
          display: "Equivalent",
          definition:
            "The definitions of the concepts mean the same thing (including when structural implications of meaning are considered) (i.e. extensionally identical).",
          concept: [
            {
              code: "equal",
              display: "Equal",
              definition:
                "The definitions of the concepts are exactly the same (i.e. only grammatical differences) and structural implications of meaning are identical or irrelevant (i.e. intentionally identical).",
            },
          ],
        },
        {
          code: "wider",
          display: "Wider",
          definition:
            "The target mapping is wider in meaning than the source concept.",
        },
        {
          code: "subsumes",
          display: "Subsumes",
          definition:
            "The target mapping subsumes the meaning of the source concept (e.g. the source is-a target).",
        },
        {
          code: "narrower",
          display: "Narrower",
          definition:
            "The target mapping is narrower in meaning than the source concept. The sense in which the mapping is narrower SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.",
        },
        {
          code: "specializes",
          display: "Specializes",
          definition:
            "The target mapping specializes the meaning of the source concept (e.g. the target is-a source).",
        },
        {
          code: "inexact",
          display: "Inexact",
          definition:
            "The target mapping overlaps with the source concept, but both source and target cover additional meaning, or the definitions are imprecise and it is uncertain whether they have the same boundaries to their meaning. The sense in which the mapping is inexact SHALL be described in the comments in this case, and applications should be careful when attempting to use these mappings operationally.",
        },
      ],
    },
    {
      code: "unmatched",
      display: "Unmatched",
      definition:
        "There is no match for this concept in the target code system.",
      concept: [
        {
          code: "disjoint",
          display: "Disjoint",
          definition:
            "This is an explicit assertion that there is no mapping between the source and target concept.",
        },
      ],
    },
  ],
};
