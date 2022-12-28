/**
 * This is an example codesystem defined by the FHIR project, it represents global concepts for no content, or any unrestricted content.
 * http://terminology.hl7.org/CodeSystem/endpoint-payload-type
 */
export const EndpointPayloadTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "endpoint-payload-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/endpoint-payload-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">any<a name="endpoint-payload-type-any"> </a></td><td>Any</td><td>Any payload type can be used with this endpoint, it is either a payload agnostic infrastructure (such as a storage repository), or some other type of endpoint where payload considerations are internally handled, and not available</td></tr><tr><td style="white-space:nowrap">none<a name="endpoint-payload-type-none"> </a></td><td>None</td><td>This endpoint does not require any content to be sent; simply connecting to the endpoint is enough notification. This can be used as a \'ping\' to wakeup a service to retrieve content, which could be to ensure security considerations are correctly handled</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/endpoint-payload-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1139",
    },
  ],
  version: "4.3.0",
  name: "EndpointPayloadType",
  status: "draft",
  experimental: false,
  description:
    "This is an example codesystem defined by the FHIR project, it represents global concepts for no content, or any unrestricted content.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "any",
      display: "Any",
      definition:
        "Any payload type can be used with this endpoint, it is either a payload agnostic infrastructure (such as a storage repository), or some other type of endpoint where payload considerations are internally handled, and not available",
    },
    {
      code: "none",
      display: "None",
      definition:
        "This endpoint does not require any content to be sent; simply connecting to the endpoint is enough notification. This can be used as a 'ping' to wakeup a service to retrieve content, which could be to ensure security considerations are correctly handled",
    },
  ],
};
