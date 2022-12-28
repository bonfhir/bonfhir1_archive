/**
 * A version specific list of the data types defined by the FHIR specification for use as an element  type (any of the FHIR defined data types).
 * http://hl7.org/fhir/data-types
 */
export const DataTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "data-types",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "extensions",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/data-types defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td><td><b>Comments</b></td></tr><tr><td style="white-space:nowrap">Address<a name="data-types-Address"> </a></td><td>Address</td><td>An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.</td><td/></tr><tr><td style="white-space:nowrap">Age<a name="data-types-Age"> </a></td><td>Age</td><td>A duration of time during which an organism (or a process) has existed.</td><td/></tr><tr><td style="white-space:nowrap">Annotation<a name="data-types-Annotation"> </a></td><td>Annotation</td><td>A  text note which also  contains information about who made the statement and when.</td><td/></tr><tr><td style="white-space:nowrap">Attachment<a name="data-types-Attachment"> </a></td><td>Attachment</td><td>For referring to data content defined in other formats.</td><td/></tr><tr><td style="white-space:nowrap">BackboneElement<a name="data-types-BackboneElement"> </a></td><td>BackboneElement</td><td>Base definition for all elements that are defined inside a resource - but not those in a data type.</td><td/></tr><tr><td style="white-space:nowrap">CodeableConcept<a name="data-types-CodeableConcept"> </a></td><td>CodeableConcept</td><td>A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.</td><td/></tr><tr><td style="white-space:nowrap">CodeableReference<a name="data-types-CodeableReference"> </a></td><td>CodeableReference</td><td>A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).</td><td/></tr><tr><td style="white-space:nowrap">Coding<a name="data-types-Coding"> </a></td><td>Coding</td><td>A reference to a code defined by a terminology system.</td><td/></tr><tr><td style="white-space:nowrap">ContactDetail<a name="data-types-ContactDetail"> </a></td><td>ContactDetail</td><td>Specifies contact information for a person or organization.</td><td/></tr><tr><td style="white-space:nowrap">ContactPoint<a name="data-types-ContactPoint"> </a></td><td>ContactPoint</td><td>Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.</td><td/></tr><tr><td style="white-space:nowrap">Contributor<a name="data-types-Contributor"> </a></td><td>Contributor</td><td>A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.</td><td/></tr><tr><td style="white-space:nowrap">Count<a name="data-types-Count"> </a></td><td>Count</td><td>A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.</td><td/></tr><tr><td style="white-space:nowrap">DataRequirement<a name="data-types-DataRequirement"> </a></td><td>DataRequirement</td><td>Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.</td><td/></tr><tr><td style="white-space:nowrap">Distance<a name="data-types-Distance"> </a></td><td>Distance</td><td>A length - a value with a unit that is a physical distance.</td><td/></tr><tr><td style="white-space:nowrap">Dosage<a name="data-types-Dosage"> </a></td><td>Dosage</td><td>Indicates how the medication is/was taken or should be taken by the patient.</td><td/></tr><tr><td style="white-space:nowrap">Duration<a name="data-types-Duration"> </a></td><td>Duration</td><td>A length of time.</td><td/></tr><tr><td style="white-space:nowrap">Element<a name="data-types-Element"> </a></td><td>Element</td><td>Base definition for all elements in a resource.</td><td/></tr><tr><td style="white-space:nowrap">ElementDefinition<a name="data-types-ElementDefinition"> </a></td><td>ElementDefinition</td><td>Captures constraints on each element within the resource, profile, or extension.</td><td/></tr><tr><td style="white-space:nowrap">Expression<a name="data-types-Expression"> </a></td><td>Expression</td><td>A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.</td><td/></tr><tr><td style="white-space:nowrap">Extension<a name="data-types-Extension"> </a></td><td>Extension</td><td>Optional Extension Element - found in all resources.</td><td/></tr><tr><td style="white-space:nowrap">HumanName<a name="data-types-HumanName"> </a></td><td>HumanName</td><td>A human\'s name with the ability to identify parts and usage.</td><td/></tr><tr><td style="white-space:nowrap">Identifier<a name="data-types-Identifier"> </a></td><td>Identifier</td><td>An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.</td><td/></tr><tr><td style="white-space:nowrap">MarketingStatus<a name="data-types-MarketingStatus"> </a></td><td>MarketingStatus</td><td>The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.</td><td/></tr><tr><td style="white-space:nowrap">Meta<a name="data-types-Meta"> </a></td><td>Meta</td><td>The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.</td><td/></tr><tr><td style="white-space:nowrap">Money<a name="data-types-Money"> </a></td><td>Money</td><td>An amount of economic utility in some recognized currency.</td><td/></tr><tr><td style="white-space:nowrap">MoneyQuantity<a name="data-types-MoneyQuantity"> </a></td><td>MoneyQuantity</td><td/><td/></tr><tr><td style="white-space:nowrap">Narrative<a name="data-types-Narrative"> </a></td><td>Narrative</td><td>A human-readable summary of the resource conveying the essential clinical and business information for the resource.</td><td/></tr><tr><td style="white-space:nowrap">ParameterDefinition<a name="data-types-ParameterDefinition"> </a></td><td>ParameterDefinition</td><td>The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.</td><td/></tr><tr><td style="white-space:nowrap">Period<a name="data-types-Period"> </a></td><td>Period</td><td>A time period defined by a start and end date and optionally time.</td><td/></tr><tr><td style="white-space:nowrap">Population<a name="data-types-Population"> </a></td><td>Population</td><td>A populatioof people with some set of grouping criteria.</td><td/></tr><tr><td style="white-space:nowrap">ProdCharacteristic<a name="data-types-ProdCharacteristic"> </a></td><td>ProdCharacteristic</td><td>The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.</td><td/></tr><tr><td style="white-space:nowrap">ProductShelfLife<a name="data-types-ProductShelfLife"> </a></td><td>ProductShelfLife</td><td>The shelf-life and storage information for a medicinal product item or container can be described using this class.</td><td/></tr><tr><td style="white-space:nowrap">Quantity<a name="data-types-Quantity"> </a></td><td>Quantity</td><td>A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.</td><td/></tr><tr><td style="white-space:nowrap">Range<a name="data-types-Range"> </a></td><td>Range</td><td>A set of ordered Quantities defined by a low and high limit.</td><td/></tr><tr><td style="white-space:nowrap">Ratio<a name="data-types-Ratio"> </a></td><td>Ratio</td><td>A relationship of two Quantity values - expressed as a numerator and a denominator.</td><td/></tr><tr><td style="white-space:nowrap">RatioRange<a name="data-types-RatioRange"> </a></td><td>RatioRange</td><td>A range of ratios expressed as a low and high numerator and a denominator.</td><td/></tr><tr><td style="white-space:nowrap">Reference<a name="data-types-Reference"> </a></td><td>Reference</td><td>A reference from one resource to another.</td><td/></tr><tr><td style="white-space:nowrap">RelatedArtifact<a name="data-types-RelatedArtifact"> </a></td><td>RelatedArtifact</td><td>Related artifacts such as additional documentation, justification, or bibliographic references.</td><td/></tr><tr><td style="white-space:nowrap">SampledData<a name="data-types-SampledData"> </a></td><td>SampledData</td><td>A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.</td><td/></tr><tr><td style="white-space:nowrap">Signature<a name="data-types-Signature"> </a></td><td>Signature</td><td>A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.</td><td/></tr><tr><td style="white-space:nowrap">SimpleQuantity<a name="data-types-SimpleQuantity"> </a></td><td>SimpleQuantity</td><td/><td/></tr><tr><td style="white-space:nowrap">Timing<a name="data-types-Timing"> </a></td><td>Timing</td><td>Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.</td><td/></tr><tr><td style="white-space:nowrap">TriggerDefinition<a name="data-types-TriggerDefinition"> </a></td><td>TriggerDefinition</td><td>A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.</td><td/></tr><tr><td style="white-space:nowrap">UsageContext<a name="data-types-UsageContext"> </a></td><td>UsageContext</td><td>Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).</td><td/></tr><tr><td style="white-space:nowrap">base64Binary<a name="data-types-base64Binary"> </a></td><td>base64Binary</td><td>A stream of bytes</td><td/></tr><tr><td style="white-space:nowrap">boolean<a name="data-types-boolean"> </a></td><td>boolean</td><td>Value of &quot;true&quot; or &quot;false&quot;</td><td/></tr><tr><td style="white-space:nowrap">canonical<a name="data-types-canonical"> </a></td><td>canonical</td><td>A URI that is a reference to a canonical URL on a FHIR resource</td><td/></tr><tr><td style="white-space:nowrap">code<a name="data-types-code"> </a></td><td>code</td><td>A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents</td><td/></tr><tr><td style="white-space:nowrap">date<a name="data-types-date"> </a></td><td>date</td><td>A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.</td><td/></tr><tr><td style="white-space:nowrap">dateTime<a name="data-types-dateTime"> </a></td><td>dateTime</td><td>A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.</td><td/></tr><tr><td style="white-space:nowrap">decimal<a name="data-types-decimal"> </a></td><td>decimal</td><td>A rational number with implicit precision</td><td/></tr><tr><td style="white-space:nowrap">id<a name="data-types-id"> </a></td><td>id</td><td>Any combination of letters, numerals, &quot;-&quot; and &quot;.&quot;, with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.</td><td/></tr><tr><td style="white-space:nowrap">instant<a name="data-types-instant"> </a></td><td>instant</td><td>An instant in time - known at least to the second</td><td/></tr><tr><td style="white-space:nowrap">integer<a name="data-types-integer"> </a></td><td>integer</td><td>A whole number</td><td/></tr><tr><td style="white-space:nowrap">markdown<a name="data-types-markdown"> </a></td><td>markdown</td><td>A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine</td><td/></tr><tr><td style="white-space:nowrap">oid<a name="data-types-oid"> </a></td><td>oid</td><td>An OID represented as a URI</td><td/></tr><tr><td style="white-space:nowrap">positiveInt<a name="data-types-positiveInt"> </a></td><td>positiveInt</td><td>An integer with a value that is positive (e.g. &gt;0)</td><td/></tr><tr><td style="white-space:nowrap">string<a name="data-types-string"> </a></td><td>string</td><td>A sequence of Unicode characters</td><td/></tr><tr><td style="white-space:nowrap">time<a name="data-types-time"> </a></td><td>time</td><td>A time during the day, with no date specified</td><td/></tr><tr><td style="white-space:nowrap">unsignedInt<a name="data-types-unsignedInt"> </a></td><td>unsignedInt</td><td>An integer with a value that is not negative (e.g. &gt;= 0)</td><td/></tr><tr><td style="white-space:nowrap">uri<a name="data-types-uri"> </a></td><td>uri</td><td>String of characters used to identify a name or a resource</td><td/></tr><tr><td style="white-space:nowrap">url<a name="data-types-url"> </a></td><td>url</td><td>A URI that is a literal reference</td><td/></tr><tr><td style="white-space:nowrap">uuid<a name="data-types-uuid"> </a></td><td>uuid</td><td>A UUID, represented as a URI</td><td/></tr><tr><td style="white-space:nowrap">xhtml<a name="data-types-xhtml"> </a></td><td>XHTML</td><td>XHTML format, as defined by W3C, but restricted usage (mainly, no active content)</td><td>Special case: xhtml can only be used in the narrative Data Type</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/valueset-special-status",
      valueString:
        "This Code System is normative - it is generated based on the information defined in this specification. The definition will remain fixed  across versions, but the actual contents will change from version to version",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "normative",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-normative-version",
      valueCode: "4.0.0",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 5,
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://hl7.org/fhir/data-types",
  version: "4.3.0",
  name: "DataType",
  title: "DataType",
  status: "active",
  experimental: false,
  date: "2022-05-28T12:47:40+10:00",
  publisher: "HL7 (FHIR Project)",
  contact: [
    {
      telecom: [
        { system: "url", value: "http://hl7.org/fhir" },
        { system: "email", value: "fhir@lists.hl7.org" },
      ],
    },
  ],
  description:
    "A version specific list of the data types defined by the FHIR specification for use as an element  type (any of the FHIR defined data types).",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "Address",
      display: "Address",
      definition:
        "An address expressed using postal conventions (as opposed to GPS or other location definition formats).  This data type may be used to convey addresses for use in delivering mail as well as for visiting locations which might not be valid for mail delivery.  There are a variety of postal address formats defined around the world.",
    },
    {
      code: "Age",
      display: "Age",
      definition:
        "A duration of time during which an organism (or a process) has existed.",
    },
    {
      code: "Annotation",
      display: "Annotation",
      definition:
        "A  text note which also  contains information about who made the statement and when.",
    },
    {
      code: "Attachment",
      display: "Attachment",
      definition: "For referring to data content defined in other formats.",
    },
    {
      code: "BackboneElement",
      display: "BackboneElement",
      definition:
        "Base definition for all elements that are defined inside a resource - but not those in a data type.",
    },
    {
      code: "CodeableConcept",
      display: "CodeableConcept",
      definition:
        "A concept that may be defined by a formal reference to a terminology or ontology or may be provided by text.",
    },
    {
      code: "CodeableReference",
      display: "CodeableReference",
      definition:
        "A reference to a resource (by instance), or instead, a reference to a concept defined in a terminology or ontology (by class).",
    },
    {
      code: "Coding",
      display: "Coding",
      definition: "A reference to a code defined by a terminology system.",
    },
    {
      code: "ContactDetail",
      display: "ContactDetail",
      definition: "Specifies contact information for a person or organization.",
    },
    {
      code: "ContactPoint",
      display: "ContactPoint",
      definition:
        "Details for all kinds of technology mediated contact points for a person or organization, including telephone, email, etc.",
    },
    {
      code: "Contributor",
      display: "Contributor",
      definition:
        "A contributor to the content of a knowledge asset, including authors, editors, reviewers, and endorsers.",
    },
    {
      code: "Count",
      display: "Count",
      definition:
        "A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.",
    },
    {
      code: "DataRequirement",
      display: "DataRequirement",
      definition:
        "Describes a required data item for evaluation in terms of the type of data, and optional code or date-based filters of the data.",
    },
    {
      code: "Distance",
      display: "Distance",
      definition: "A length - a value with a unit that is a physical distance.",
    },
    {
      code: "Dosage",
      display: "Dosage",
      definition:
        "Indicates how the medication is/was taken or should be taken by the patient.",
    },
    { code: "Duration", display: "Duration", definition: "A length of time." },
    {
      code: "Element",
      display: "Element",
      definition: "Base definition for all elements in a resource.",
    },
    {
      code: "ElementDefinition",
      display: "ElementDefinition",
      definition:
        "Captures constraints on each element within the resource, profile, or extension.",
    },
    {
      code: "Expression",
      display: "Expression",
      definition:
        "A expression that is evaluated in a specified context and returns a value. The context of use of the expression must specify the context in which the expression is evaluated, and how the result of the expression is used.",
    },
    {
      code: "Extension",
      display: "Extension",
      definition: "Optional Extension Element - found in all resources.",
    },
    {
      code: "HumanName",
      display: "HumanName",
      definition:
        "A human's name with the ability to identify parts and usage.",
    },
    {
      code: "Identifier",
      display: "Identifier",
      definition:
        "An identifier - identifies some entity uniquely and unambiguously. Typically this is used for business identifiers.",
    },
    {
      code: "MarketingStatus",
      display: "MarketingStatus",
      definition:
        "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.",
    },
    {
      code: "Meta",
      display: "Meta",
      definition:
        "The metadata about a resource. This is content in the resource that is maintained by the infrastructure. Changes to the content might not always be associated with version changes to the resource.",
    },
    {
      code: "Money",
      display: "Money",
      definition: "An amount of economic utility in some recognized currency.",
    },
    { code: "MoneyQuantity", display: "MoneyQuantity" },
    {
      code: "Narrative",
      display: "Narrative",
      definition:
        "A human-readable summary of the resource conveying the essential clinical and business information for the resource.",
    },
    {
      code: "ParameterDefinition",
      display: "ParameterDefinition",
      definition:
        "The parameters to the module. This collection specifies both the input and output parameters. Input parameters are provided by the caller as part of the $evaluate operation. Output parameters are included in the GuidanceResponse.",
    },
    {
      code: "Period",
      display: "Period",
      definition:
        "A time period defined by a start and end date and optionally time.",
    },
    {
      code: "Population",
      display: "Population",
      definition: "A populatioof people with some set of grouping criteria.",
    },
    {
      code: "ProdCharacteristic",
      display: "ProdCharacteristic",
      definition:
        "The marketing status describes the date when a medicinal product is actually put on the market or the date as of which it is no longer available.",
    },
    {
      code: "ProductShelfLife",
      display: "ProductShelfLife",
      definition:
        "The shelf-life and storage information for a medicinal product item or container can be described using this class.",
    },
    {
      code: "Quantity",
      display: "Quantity",
      definition:
        "A measured amount (or an amount that can potentially be measured). Note that measured amounts include amounts that are not precisely quantified, including amounts involving arbitrary units and floating currencies.",
    },
    {
      code: "Range",
      display: "Range",
      definition:
        "A set of ordered Quantities defined by a low and high limit.",
    },
    {
      code: "Ratio",
      display: "Ratio",
      definition:
        "A relationship of two Quantity values - expressed as a numerator and a denominator.",
    },
    {
      code: "RatioRange",
      display: "RatioRange",
      definition:
        "A range of ratios expressed as a low and high numerator and a denominator.",
    },
    {
      code: "Reference",
      display: "Reference",
      definition: "A reference from one resource to another.",
    },
    {
      code: "RelatedArtifact",
      display: "RelatedArtifact",
      definition:
        "Related artifacts such as additional documentation, justification, or bibliographic references.",
    },
    {
      code: "SampledData",
      display: "SampledData",
      definition:
        "A series of measurements taken by a device, with upper and lower limits. There may be more than one dimension in the data.",
    },
    {
      code: "Signature",
      display: "Signature",
      definition:
        "A signature along with supporting context. The signature may be a digital signature that is cryptographic in nature, or some other signature acceptable to the domain. This other signature may be as simple as a graphical image representing a hand-written signature, or a signature ceremony Different signature approaches have different utilities.",
    },
    { code: "SimpleQuantity", display: "SimpleQuantity" },
    {
      code: "Timing",
      display: "Timing",
      definition:
        "Specifies an event that may occur multiple times. Timing schedules are used to record when things are planned, expected or requested to occur. The most common usage is in dosage instructions for medications. They are also used when planning care of various kinds, and may be used for reporting the schedule to which past regular activities were carried out.",
    },
    {
      code: "TriggerDefinition",
      display: "TriggerDefinition",
      definition:
        "A description of a triggering event. Triggering events can be named events, data events, or periodic, as determined by the type element.",
    },
    {
      code: "UsageContext",
      display: "UsageContext",
      definition:
        "Specifies clinical/business/etc. metadata that can be used to retrieve, index and/or categorize an artifact. This metadata can either be specific to the applicable population (e.g., age category, DRG) or the specific context of care (e.g., venue, care setting, provider of care).",
    },
    {
      code: "base64Binary",
      display: "base64Binary",
      definition: "A stream of bytes",
    },
    {
      code: "boolean",
      display: "boolean",
      definition: 'Value of "true" or "false"',
    },
    {
      code: "canonical",
      display: "canonical",
      definition:
        "A URI that is a reference to a canonical URL on a FHIR resource",
    },
    {
      code: "code",
      display: "code",
      definition:
        "A string which has at least one character and no leading or trailing whitespace and where there is no whitespace other than single spaces in the contents",
    },
    {
      code: "date",
      display: "date",
      definition:
        "A date or partial date (e.g. just year or year + month). There is no time zone. The format is a union of the schema types gYear, gYearMonth and date.  Dates SHALL be valid dates.",
    },
    {
      code: "dateTime",
      display: "dateTime",
      definition:
        "A date, date-time or partial date (e.g. just year or year + month).  If hours and minutes are specified, a time zone SHALL be populated. The format is a union of the schema types gYear, gYearMonth, date and dateTime. Seconds must be provided due to schema type constraints but may be zero-filled and may be ignored.                 Dates SHALL be valid dates.",
    },
    {
      code: "decimal",
      display: "decimal",
      definition: "A rational number with implicit precision",
    },
    {
      code: "id",
      display: "id",
      definition:
        'Any combination of letters, numerals, "-" and ".", with a length limit of 64 characters.  (This might be an integer, an unprefixed OID, UUID or any other identifier pattern that meets these constraints.)  Ids are case-insensitive.',
    },
    {
      code: "instant",
      display: "instant",
      definition: "An instant in time - known at least to the second",
    },
    { code: "integer", display: "integer", definition: "A whole number" },
    {
      code: "markdown",
      display: "markdown",
      definition:
        "A string that may contain Github Flavored Markdown syntax for optional processing by a mark down presentation engine",
    },
    { code: "oid", display: "oid", definition: "An OID represented as a URI" },
    {
      code: "positiveInt",
      display: "positiveInt",
      definition: "An integer with a value that is positive (e.g. >0)",
    },
    {
      code: "string",
      display: "string",
      definition: "A sequence of Unicode characters",
    },
    {
      code: "time",
      display: "time",
      definition: "A time during the day, with no date specified",
    },
    {
      code: "unsignedInt",
      display: "unsignedInt",
      definition: "An integer with a value that is not negative (e.g. >= 0)",
    },
    {
      code: "uri",
      display: "uri",
      definition: "String of characters used to identify a name or a resource",
    },
    {
      code: "url",
      display: "url",
      definition: "A URI that is a literal reference",
    },
    {
      code: "uuid",
      display: "uuid",
      definition: "A UUID, represented as a URI",
    },
    {
      extension: [
        {
          url: "http://hl7.org/fhir/StructureDefinition/codesystem-concept-comments",
          valueString:
            "Special case: xhtml can only be used in the narrative Data Type",
        },
      ],
      code: "xhtml",
      display: "XHTML",
      definition:
        "XHTML format, as defined by W3C, but restricted usage (mainly, no active content)",
    },
  ],
};
