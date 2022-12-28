export const EndpointConnectionType = {
  resourceType: "CodeSystem",
  id: "endpoint-connection-type",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/endpoint-connection-type defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">ihe-xcpd<a name="endpoint-connection-type-ihe-xcpd"> </a></td><td>IHE XCPD</td><td>IHE Cross Community Patient Discovery Profile (XCPD) - http://wiki.ihe.net/index.php/Cross-Community_Patient_Discovery</td></tr><tr><td style="white-space:nowrap">ihe-xca<a name="endpoint-connection-type-ihe-xca"> </a></td><td>IHE XCA</td><td>IHE Cross Community Access Profile (XCA) - http://wiki.ihe.net/index.php/Cross-Community_Access</td></tr><tr><td style="white-space:nowrap">ihe-xdr<a name="endpoint-connection-type-ihe-xdr"> </a></td><td>IHE XDR</td><td>IHE Cross-Enterprise Document Reliable Exchange (XDR) - http://wiki.ihe.net/index.php/Cross-enterprise_Document_Reliable_Interchange</td></tr><tr><td style="white-space:nowrap">ihe-xds<a name="endpoint-connection-type-ihe-xds"> </a></td><td>IHE XDS</td><td>IHE Cross-Enterprise Document Sharing (XDS) - http://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing</td></tr><tr><td style="white-space:nowrap">ihe-iid<a name="endpoint-connection-type-ihe-iid"> </a></td><td>IHE IID</td><td>IHE Invoke Image Display (IID) - http://wiki.ihe.net/index.php/Invoke_Image_Display</td></tr><tr><td style="white-space:nowrap">dicom-wado-rs<a name="endpoint-connection-type-dicom-wado-rs"> </a></td><td>DICOM WADO-RS</td><td>DICOMweb RESTful Image Retrieve - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.5.html</td></tr><tr><td style="white-space:nowrap">dicom-qido-rs<a name="endpoint-connection-type-dicom-qido-rs"> </a></td><td>DICOM QIDO-RS</td><td>DICOMweb RESTful Image query - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.7.html</td></tr><tr><td style="white-space:nowrap">dicom-stow-rs<a name="endpoint-connection-type-dicom-stow-rs"> </a></td><td>DICOM STOW-RS</td><td>DICOMweb RESTful image sending and storage - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.6.html</td></tr><tr><td style="white-space:nowrap">dicom-wado-uri<a name="endpoint-connection-type-dicom-wado-uri"> </a></td><td>DICOM WADO-URI</td><td>DICOMweb Image Retrieve - http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html</td></tr><tr><td style="white-space:nowrap">hl7-fhir-rest<a name="endpoint-connection-type-hl7-fhir-rest"> </a></td><td>HL7 FHIR</td><td>Interact with the server interface using FHIR\'s RESTful interface. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement.</td></tr><tr><td style="white-space:nowrap">hl7-fhir-msg<a name="endpoint-connection-type-hl7-fhir-msg"> </a></td><td>HL7 FHIR Messaging</td><td>Use the servers FHIR Messaging interface. Details can be found on the messaging.html page in the FHIR Specification. The FHIR server\'s base address is specified in the Endpoint.address property.</td></tr><tr><td style="white-space:nowrap">hl7v2-mllp<a name="endpoint-connection-type-hl7v2-mllp"> </a></td><td>HL7 v2 MLLP</td><td>HL7v2 messages over an LLP TCP connection</td></tr><tr><td style="white-space:nowrap">secure-email<a name="endpoint-connection-type-secure-email"> </a></td><td>Secure email</td><td>Email delivery using a digital certificate to encrypt the content using the public key, receiver must have the private key to decrypt the content</td></tr><tr><td style="white-space:nowrap">direct-project<a name="endpoint-connection-type-direct-project"> </a></td><td>Direct Project</td><td>Direct Project information - http://wiki.directproject.org/</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/endpoint-connection-type",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1140",
    },
  ],
  version: "4.3.0",
  name: "EndpointConnectionType",
  status: "draft",
  experimental: false,
  description:
    "This is an example codesystem defined by the FHIR project, that could be used to represent possible connection type profile values.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "ihe-xcpd",
      display: "IHE XCPD",
      definition:
        "IHE Cross Community Patient Discovery Profile (XCPD) - http://wiki.ihe.net/index.php/Cross-Community_Patient_Discovery",
    },
    {
      code: "ihe-xca",
      display: "IHE XCA",
      definition:
        "IHE Cross Community Access Profile (XCA) - http://wiki.ihe.net/index.php/Cross-Community_Access",
    },
    {
      code: "ihe-xdr",
      display: "IHE XDR",
      definition:
        "IHE Cross-Enterprise Document Reliable Exchange (XDR) - http://wiki.ihe.net/index.php/Cross-enterprise_Document_Reliable_Interchange",
    },
    {
      code: "ihe-xds",
      display: "IHE XDS",
      definition:
        "IHE Cross-Enterprise Document Sharing (XDS) - http://wiki.ihe.net/index.php/Cross-Enterprise_Document_Sharing",
    },
    {
      code: "ihe-iid",
      display: "IHE IID",
      definition:
        "IHE Invoke Image Display (IID) - http://wiki.ihe.net/index.php/Invoke_Image_Display",
    },
    {
      code: "dicom-wado-rs",
      display: "DICOM WADO-RS",
      definition:
        "DICOMweb RESTful Image Retrieve - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.5.html",
    },
    {
      code: "dicom-qido-rs",
      display: "DICOM QIDO-RS",
      definition:
        "DICOMweb RESTful Image query - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.7.html",
    },
    {
      code: "dicom-stow-rs",
      display: "DICOM STOW-RS",
      definition:
        "DICOMweb RESTful image sending and storage - http://dicom.nema.org/medical/dicom/current/output/chtml/part18/sect_6.6.html",
    },
    {
      code: "dicom-wado-uri",
      display: "DICOM WADO-URI",
      definition:
        "DICOMweb Image Retrieve - http://dicom.nema.org/dicom/2013/output/chtml/part18/sect_6.3.html",
    },
    {
      code: "hl7-fhir-rest",
      display: "HL7 FHIR",
      definition:
        "Interact with the server interface using FHIR's RESTful interface. For details on its version/capabilities you should connect the value in Endpoint.address and retrieve the FHIR CapabilityStatement.",
    },
    {
      code: "hl7-fhir-msg",
      display: "HL7 FHIR Messaging",
      definition:
        "Use the servers FHIR Messaging interface. Details can be found on the messaging.html page in the FHIR Specification. The FHIR server's base address is specified in the Endpoint.address property.",
    },
    {
      code: "hl7v2-mllp",
      display: "HL7 v2 MLLP",
      definition: "HL7v2 messages over an LLP TCP connection",
    },
    {
      code: "secure-email",
      display: "Secure email",
      definition:
        "Email delivery using a digital certificate to encrypt the content using the public key, receiver must have the private key to decrypt the content",
    },
    {
      code: "direct-project",
      display: "Direct Project",
      definition: "Direct Project information - http://wiki.directproject.org/",
    },
  ],
};
