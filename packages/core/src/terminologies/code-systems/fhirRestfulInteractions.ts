export const FHIRRestfulInteractions = {
  resourceType: "CodeSystem",
  id: "restful-interaction",
  meta: { lastUpdated: "2022-05-28T13:47:40.239+11:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml">\n      <h2>FHIR Restful Interactions</h2>\n      <div>\n        <p>The set of interactions defined by the RESTful part of the FHIR specification.</p>\n\n      </div>\n      <p>This code system http://hl7.org/fhir/restful-interaction defines the following codes:</p>\n      <table class="codes">\n        <tr>\n          <td>\n            <b>Lvl</b>\n          </td>\n          <td style="white-space:nowrap">\n            <b>Code</b>\n          </td>\n          <td>\n            <b>Display</b>\n          </td>\n          <td>\n            <b>Definition</b>\n          </td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">read\n            <a name="restful-interaction-read"> </a>\n          </td>\n          <td>read</td>\n          <td>Read the current state of the resource.</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">vread\n            <a name="restful-interaction-vread"> </a>\n          </td>\n          <td>vread</td>\n          <td>Read the state of a specific version of the resource.</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">update\n            <a name="restful-interaction-update"> </a>\n          </td>\n          <td>update</td>\n          <td>Update an existing resource by its id (or create it if it is new).</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">patch\n            <a name="restful-interaction-patch"> </a>\n          </td>\n          <td>patch</td>\n          <td>Update an existing resource by posting a set of changes to it.</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">delete\n            <a name="restful-interaction-delete"> </a>\n          </td>\n          <td>delete</td>\n          <td>Delete a resource.</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">history\n            <a name="restful-interaction-history"> </a>\n          </td>\n          <td>history</td>\n          <td>Retrieve the change history for a particular resource, type of resource, or the entire system.</td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td style="white-space:nowrap">  history-instance\n            <a name="restful-interaction-history-instance"> </a>\n          </td>\n          <td>history-instance</td>\n          <td>Retrieve the change history for a particular resource.</td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td style="white-space:nowrap">  history-type\n            <a name="restful-interaction-history-type"> </a>\n          </td>\n          <td>history-type</td>\n          <td>Retrieve the change history for all resources of a particular type.</td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td style="white-space:nowrap">  history-system\n            <a name="restful-interaction-history-system"> </a>\n          </td>\n          <td>history-system</td>\n          <td>Retrieve the change history for all resources on a system.</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">create\n            <a name="restful-interaction-create"> </a>\n          </td>\n          <td>create</td>\n          <td>Create a new resource with a server assigned id.</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">search\n            <a name="restful-interaction-search"> </a>\n          </td>\n          <td>search</td>\n          <td>Search a resource type or all resources based on some filter criteria.</td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td style="white-space:nowrap">  search-type\n            <a name="restful-interaction-search-type"> </a>\n          </td>\n          <td>search-type</td>\n          <td>Search all resources of the specified type based on some filter criteria.</td>\n        </tr>\n        <tr>\n          <td>2</td>\n          <td style="white-space:nowrap">  search-system\n            <a name="restful-interaction-search-system"> </a>\n          </td>\n          <td>search-system</td>\n          <td>Search all resources based on some filter criteria.</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">capabilities\n            <a name="restful-interaction-capabilities"> </a>\n          </td>\n          <td>capabilities</td>\n          <td>Get a Capability Statement for the system.</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">transaction\n            <a name="restful-interaction-transaction"> </a>\n          </td>\n          <td>transaction</td>\n          <td>Update, create or delete a set of resources as a single transaction.</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">batch\n            <a name="restful-interaction-batch"> </a>\n          </td>\n          <td>batch</td>\n          <td>perform a set of a separate interactions in a single http operation</td>\n        </tr>\n        <tr>\n          <td>1</td>\n          <td style="white-space:nowrap">operation\n            <a name="restful-interaction-operation"> </a>\n          </td>\n          <td>operation</td>\n          <td>Perform an operation as defined by an OperationDefinition.</td>\n        </tr>\n      </table>\n    </div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
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
  ],
  url: "http://hl7.org/fhir/restful-interaction",
  version: "4.3.0",
  name: "FHIR Restful Interactions",
  status: "active",
  experimental: false,
  publisher: "FHIR Project",
  description:
    "The set of interactions defined by the RESTful part of the FHIR specification.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/restful-interaction",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "read",
      display: "read",
      definition: "Read the current state of the resource.",
    },
    {
      code: "vread",
      display: "vread",
      definition: "Read the state of a specific version of the resource.",
    },
    {
      code: "update",
      display: "update",
      definition:
        "Update an existing resource by its id (or create it if it is new).",
    },
    {
      code: "patch",
      display: "patch",
      definition:
        "Update an existing resource by posting a set of changes to it.",
    },
    { code: "delete", display: "delete", definition: "Delete a resource." },
    {
      code: "history",
      display: "history",
      definition:
        "Retrieve the change history for a particular resource, type of resource, or the entire system.",
      concept: [
        {
          code: "history-instance",
          display: "history-instance",
          definition: "Retrieve the change history for a particular resource.",
        },
        {
          code: "history-type",
          display: "history-type",
          definition:
            "Retrieve the change history for all resources of a particular type.",
        },
        {
          code: "history-system",
          display: "history-system",
          definition:
            "Retrieve the change history for all resources on a system.",
        },
      ],
    },
    {
      code: "create",
      display: "create",
      definition: "Create a new resource with a server assigned id.",
    },
    {
      code: "search",
      display: "search",
      definition:
        "Search a resource type or all resources based on some filter criteria.",
      concept: [
        {
          code: "search-type",
          display: "search-type",
          definition:
            "Search all resources of the specified type based on some filter criteria.",
        },
        {
          code: "search-system",
          display: "search-system",
          definition: "Search all resources based on some filter criteria.",
        },
      ],
    },
    {
      code: "capabilities",
      display: "capabilities",
      definition: "Get a Capability Statement for the system.",
    },
    {
      code: "transaction",
      display: "transaction",
      definition:
        "Update, create or delete a set of resources as a single transaction.",
    },
    {
      code: "batch",
      display: "batch",
      definition:
        "perform a set of a separate interactions in a single http operation",
    },
    {
      code: "operation",
      display: "operation",
      definition: "Perform an operation as defined by an OperationDefinition.",
    },
  ],
};
