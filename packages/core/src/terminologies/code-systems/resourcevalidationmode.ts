export const ResourceValidationMode = {
  resourceType: "CodeSystem",
  id: "resource-validation-mode",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/resource-validation-mode defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">create<a name="resource-validation-mode-create"> </a></td><td>Validate for Create</td><td>The server checks the content, and then checks that the content would be acceptable as a create (e.g. that the content would not violate any uniqueness constraints).</td></tr><tr><td style="white-space:nowrap">update<a name="resource-validation-mode-update"> </a></td><td>Validate for Update</td><td>The server checks the content, and then checks that it would accept it as an update against the nominated specific resource (e.g. that there are no changes to immutable fields the server does not allow to change and checking version integrity if appropriate).</td></tr><tr><td style="white-space:nowrap">delete<a name="resource-validation-mode-delete"> </a></td><td>Validate for Delete</td><td>The server ignores the content and checks that the nominated resource is allowed to be deleted (e.g. checking referential integrity rules).</td></tr><tr><td style="white-space:nowrap">profile<a name="resource-validation-mode-profile"> </a></td><td>Validate Against a Profile</td><td>The server checks an existing resource (must be nominated by id, not provided as a parameter) as valid against the nominated profile.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://hl7.org/fhir/resource-validation-mode",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.119",
    },
  ],
  version: "4.3.0",
  name: "ResourceValidationMode",
  title: "Resource Validation Mode code system",
  status: "active",
  experimental: false,
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "create",
      display: "Validate for Create",
      definition:
        "The server checks the content, and then checks that the content would be acceptable as a create (e.g. that the content would not violate any uniqueness constraints).",
    },
    {
      code: "update",
      display: "Validate for Update",
      definition:
        "The server checks the content, and then checks that it would accept it as an update against the nominated specific resource (e.g. that there are no changes to immutable fields the server does not allow to change and checking version integrity if appropriate).",
    },
    {
      code: "delete",
      display: "Validate for Delete",
      definition:
        "The server ignores the content and checks that the nominated resource is allowed to be deleted (e.g. checking referential integrity rules).",
    },
    {
      code: "profile",
      display: "Validate Against a Profile",
      definition:
        "The server checks an existing resource (must be nominated by id, not provided as a parameter) as valid against the nominated profile.",
    },
  ],
};
