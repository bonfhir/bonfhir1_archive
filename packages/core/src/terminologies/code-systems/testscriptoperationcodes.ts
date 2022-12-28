export const TestScriptOperationCodes = {
  resourceType: "CodeSystem",
  id: "testscript-operation-codes",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/testscript-operation-codes defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">read<a name="testscript-operation-codes-read"> </a></td><td>Read</td><td>Read the current state of the resource.</td></tr><tr><td style="white-space:nowrap">vread<a name="testscript-operation-codes-vread"> </a></td><td>Version Read</td><td>Read the state of a specific version of the resource.</td></tr><tr><td style="white-space:nowrap">update<a name="testscript-operation-codes-update"> </a></td><td>Update</td><td>Update an existing resource by its id.</td></tr><tr><td style="white-space:nowrap">updateCreate<a name="testscript-operation-codes-updateCreate"> </a></td><td>Create using Update</td><td>Update an existing resource by its id (or create it if it is new).</td></tr><tr><td style="white-space:nowrap">patch<a name="testscript-operation-codes-patch"> </a></td><td>Patch</td><td>Patch an existing resource by its id.</td></tr><tr><td style="white-space:nowrap">delete<a name="testscript-operation-codes-delete"> </a></td><td>Delete</td><td>Delete a resource.</td></tr><tr><td style="white-space:nowrap">deleteCondSingle<a name="testscript-operation-codes-deleteCondSingle"> </a></td><td>Conditional Delete Single</td><td>Conditionally delete a single resource based on search parameters.</td></tr><tr><td style="white-space:nowrap">deleteCondMultiple<a name="testscript-operation-codes-deleteCondMultiple"> </a></td><td>Conditional Delete Multiple</td><td>Conditionally delete one or more resources based on search parameters.</td></tr><tr><td style="white-space:nowrap">history<a name="testscript-operation-codes-history"> </a></td><td>History</td><td>Retrieve the change history for a particular resource or resource type.</td></tr><tr><td style="white-space:nowrap">create<a name="testscript-operation-codes-create"> </a></td><td>Create</td><td>Create a new resource with a server assigned id.</td></tr><tr><td style="white-space:nowrap">search<a name="testscript-operation-codes-search"> </a></td><td>Search</td><td>Search based on some filter criteria.</td></tr><tr><td style="white-space:nowrap">batch<a name="testscript-operation-codes-batch"> </a></td><td>Batch</td><td>Update, create or delete a set of resources as independent actions.</td></tr><tr><td style="white-space:nowrap">transaction<a name="testscript-operation-codes-transaction"> </a></td><td>Transaction</td><td>Update, create or delete a set of resources as a single transaction.</td></tr><tr><td style="white-space:nowrap">capabilities<a name="testscript-operation-codes-capabilities"> </a></td><td>Capabilities</td><td>Get a capability statement for the system.</td></tr><tr><td style="white-space:nowrap">apply<a name="testscript-operation-codes-apply"> </a></td><td>$apply</td><td>Realizes an ActivityDefinition in a specific context</td></tr><tr><td style="white-space:nowrap">closure<a name="testscript-operation-codes-closure"> </a></td><td>$closure</td><td>Closure Table Maintenance</td></tr><tr><td style="white-space:nowrap">find-matches<a name="testscript-operation-codes-find-matches"> </a></td><td>$find-matches</td><td>Finding Codes based on supplied properties</td></tr><tr><td style="white-space:nowrap">conforms<a name="testscript-operation-codes-conforms"> </a></td><td>$conforms</td><td>Compare two systems CapabilityStatements</td></tr><tr><td style="white-space:nowrap">data-requirements<a name="testscript-operation-codes-data-requirements"> </a></td><td>$data-requirements</td><td>Aggregates and returns the parameters and data requirements for a resource and all its dependencies as a single module definition</td></tr><tr><td style="white-space:nowrap">document<a name="testscript-operation-codes-document"> </a></td><td>$document</td><td>Generate a Document</td></tr><tr><td style="white-space:nowrap">evaluate<a name="testscript-operation-codes-evaluate"> </a></td><td>$evaluate</td><td>Request clinical decision support guidance based on a specific decision support module</td></tr><tr><td style="white-space:nowrap">evaluate-measure<a name="testscript-operation-codes-evaluate-measure"> </a></td><td>$evaluate-measure</td><td>Invoke an eMeasure and obtain the results</td></tr><tr><td style="white-space:nowrap">everything<a name="testscript-operation-codes-everything"> </a></td><td>$everything</td><td>Return all the related information as described in the Encounter or Patient</td></tr><tr><td style="white-space:nowrap">expand<a name="testscript-operation-codes-expand"> </a></td><td>$expand</td><td>Value Set Expansion</td></tr><tr><td style="white-space:nowrap">find<a name="testscript-operation-codes-find"> </a></td><td>$find</td><td>Find a functional list</td></tr><tr><td style="white-space:nowrap">graphql<a name="testscript-operation-codes-graphql"> </a></td><td>$graphql</td><td>Invoke a GraphQL query</td></tr><tr><td style="white-space:nowrap">implements<a name="testscript-operation-codes-implements"> </a></td><td>$implements</td><td>Test if a server implements a client\'s required operations</td></tr><tr><td style="white-space:nowrap">lastn<a name="testscript-operation-codes-lastn"> </a></td><td>$lastn</td><td>Last N Observations Query</td></tr><tr><td style="white-space:nowrap">lookup<a name="testscript-operation-codes-lookup"> </a></td><td>$lookup</td><td>Concept Look Up and Decomposition</td></tr><tr><td style="white-space:nowrap">match<a name="testscript-operation-codes-match"> </a></td><td>$match</td><td>Find patient matches using MPI based logic</td></tr><tr><td style="white-space:nowrap">meta<a name="testscript-operation-codes-meta"> </a></td><td>$meta</td><td>Access a list of profiles, tags, and security labels</td></tr><tr><td style="white-space:nowrap">meta-add<a name="testscript-operation-codes-meta-add"> </a></td><td>$meta-add</td><td>Add profiles, tags, and security labels to a resource</td></tr><tr><td style="white-space:nowrap">meta-delete<a name="testscript-operation-codes-meta-delete"> </a></td><td>$meta-delete</td><td>Delete profiles, tags, and security labels for a resource</td></tr><tr><td style="white-space:nowrap">populate<a name="testscript-operation-codes-populate"> </a></td><td>$populate</td><td>Populate Questionnaire</td></tr><tr><td style="white-space:nowrap">populatehtml<a name="testscript-operation-codes-populatehtml"> </a></td><td>$populatehtml</td><td>Generate HTML for Questionnaire</td></tr><tr><td style="white-space:nowrap">populatelink<a name="testscript-operation-codes-populatelink"> </a></td><td>$populatelink</td><td>Generate a link to a Questionnaire completion webpage</td></tr><tr><td style="white-space:nowrap">process-message<a name="testscript-operation-codes-process-message"> </a></td><td>$process-message</td><td>Process a message according to the defined event</td></tr><tr><td style="white-space:nowrap">questionnaire<a name="testscript-operation-codes-questionnaire"> </a></td><td>$questionnaire</td><td>Build Questionnaire</td></tr><tr><td style="white-space:nowrap">stats<a name="testscript-operation-codes-stats"> </a></td><td>$stats</td><td>Observation Statistics</td></tr><tr><td style="white-space:nowrap">subset<a name="testscript-operation-codes-subset"> </a></td><td>$subset</td><td>Fetch a subset of the CapabilityStatement resource</td></tr><tr><td style="white-space:nowrap">subsumes<a name="testscript-operation-codes-subsumes"> </a></td><td>$subsumes</td><td>CodeSystem Subsumption Testing</td></tr><tr><td style="white-space:nowrap">transform<a name="testscript-operation-codes-transform"> </a></td><td>$transform</td><td>Model Instance Transformation</td></tr><tr><td style="white-space:nowrap">translate<a name="testscript-operation-codes-translate"> </a></td><td>$translate</td><td>Concept Translation</td></tr><tr><td style="white-space:nowrap">validate<a name="testscript-operation-codes-validate"> </a></td><td>$validate</td><td>Validate a resource</td></tr><tr><td style="white-space:nowrap">validate-code<a name="testscript-operation-codes-validate-code"> </a></td><td>$validate-code</td><td>ValueSet based Validation</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/testscript-operation-codes",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1195",
    },
  ],
  version: "4.3.0",
  name: "TestScriptOperationCodes",
  status: "draft",
  experimental: false,
  description:
    "This value set defines a set of codes that are used to indicate the supported operations of a testing engine or tool.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "read",
      display: "Read",
      definition: "Read the current state of the resource.",
    },
    {
      code: "vread",
      display: "Version Read",
      definition: "Read the state of a specific version of the resource.",
    },
    {
      code: "update",
      display: "Update",
      definition: "Update an existing resource by its id.",
    },
    {
      code: "updateCreate",
      display: "Create using Update",
      definition:
        "Update an existing resource by its id (or create it if it is new).",
    },
    {
      code: "patch",
      display: "Patch",
      definition: "Patch an existing resource by its id.",
    },
    { code: "delete", display: "Delete", definition: "Delete a resource." },
    {
      code: "deleteCondSingle",
      display: "Conditional Delete Single",
      definition:
        "Conditionally delete a single resource based on search parameters.",
    },
    {
      code: "deleteCondMultiple",
      display: "Conditional Delete Multiple",
      definition:
        "Conditionally delete one or more resources based on search parameters.",
    },
    {
      code: "history",
      display: "History",
      definition:
        "Retrieve the change history for a particular resource or resource type.",
    },
    {
      code: "create",
      display: "Create",
      definition: "Create a new resource with a server assigned id.",
    },
    {
      code: "search",
      display: "Search",
      definition: "Search based on some filter criteria.",
    },
    {
      code: "batch",
      display: "Batch",
      definition:
        "Update, create or delete a set of resources as independent actions.",
    },
    {
      code: "transaction",
      display: "Transaction",
      definition:
        "Update, create or delete a set of resources as a single transaction.",
    },
    {
      code: "capabilities",
      display: "Capabilities",
      definition: "Get a capability statement for the system.",
    },
    {
      code: "apply",
      display: "$apply",
      definition: "Realizes an ActivityDefinition in a specific context",
    },
    {
      code: "closure",
      display: "$closure",
      definition: "Closure Table Maintenance",
    },
    {
      code: "find-matches",
      display: "$find-matches",
      definition: "Finding Codes based on supplied properties",
    },
    {
      code: "conforms",
      display: "$conforms",
      definition: "Compare two systems CapabilityStatements",
    },
    {
      code: "data-requirements",
      display: "$data-requirements",
      definition:
        "Aggregates and returns the parameters and data requirements for a resource and all its dependencies as a single module definition",
    },
    {
      code: "document",
      display: "$document",
      definition: "Generate a Document",
    },
    {
      code: "evaluate",
      display: "$evaluate",
      definition:
        "Request clinical decision support guidance based on a specific decision support module",
    },
    {
      code: "evaluate-measure",
      display: "$evaluate-measure",
      definition: "Invoke an eMeasure and obtain the results",
    },
    {
      code: "everything",
      display: "$everything",
      definition:
        "Return all the related information as described in the Encounter or Patient",
    },
    { code: "expand", display: "$expand", definition: "Value Set Expansion" },
    { code: "find", display: "$find", definition: "Find a functional list" },
    {
      code: "graphql",
      display: "$graphql",
      definition: "Invoke a GraphQL query",
    },
    {
      code: "implements",
      display: "$implements",
      definition: "Test if a server implements a client's required operations",
    },
    {
      code: "lastn",
      display: "$lastn",
      definition: "Last N Observations Query",
    },
    {
      code: "lookup",
      display: "$lookup",
      definition: "Concept Look Up and Decomposition",
    },
    {
      code: "match",
      display: "$match",
      definition: "Find patient matches using MPI based logic",
    },
    {
      code: "meta",
      display: "$meta",
      definition: "Access a list of profiles, tags, and security labels",
    },
    {
      code: "meta-add",
      display: "$meta-add",
      definition: "Add profiles, tags, and security labels to a resource",
    },
    {
      code: "meta-delete",
      display: "$meta-delete",
      definition: "Delete profiles, tags, and security labels for a resource",
    },
    {
      code: "populate",
      display: "$populate",
      definition: "Populate Questionnaire",
    },
    {
      code: "populatehtml",
      display: "$populatehtml",
      definition: "Generate HTML for Questionnaire",
    },
    {
      code: "populatelink",
      display: "$populatelink",
      definition: "Generate a link to a Questionnaire completion webpage",
    },
    {
      code: "process-message",
      display: "$process-message",
      definition: "Process a message according to the defined event",
    },
    {
      code: "questionnaire",
      display: "$questionnaire",
      definition: "Build Questionnaire",
    },
    { code: "stats", display: "$stats", definition: "Observation Statistics" },
    {
      code: "subset",
      display: "$subset",
      definition: "Fetch a subset of the CapabilityStatement resource",
    },
    {
      code: "subsumes",
      display: "$subsumes",
      definition: "CodeSystem Subsumption Testing",
    },
    {
      code: "transform",
      display: "$transform",
      definition: "Model Instance Transformation",
    },
    {
      code: "translate",
      display: "$translate",
      definition: "Concept Translation",
    },
    {
      code: "validate",
      display: "$validate",
      definition: "Validate a resource",
    },
    {
      code: "validate-code",
      display: "$validate-code",
      definition: "ValueSet based Validation",
    },
  ],
};
