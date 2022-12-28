/**
 * This value set includes a smattering of FDI tooth surface codes.
 * http://terminology.hl7.org/CodeSystem/FDI-surface
 */
export const SurfaceCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "surface",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/FDI-surface defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">M<a name="surface-M"> </a></td><td>Mesial</td><td>The surface of a tooth that is closest to the midline (middle) of the face.</td></tr><tr><td style="white-space:nowrap">O<a name="surface-O"> </a></td><td>Occlusal</td><td>The chewing surface of posterior teeth.</td></tr><tr><td style="white-space:nowrap">I<a name="surface-I"> </a></td><td>Incisal</td><td>The biting edge of anterior teeth.</td></tr><tr><td style="white-space:nowrap">D<a name="surface-D"> </a></td><td>Distal</td><td>The surface of a tooth that faces away from the midline of the face.</td></tr><tr><td style="white-space:nowrap">B<a name="surface-B"> </a></td><td>Buccal</td><td>The surface of a posterior tooth facing the cheeks.</td></tr><tr><td style="white-space:nowrap">V<a name="surface-V"> </a></td><td>Ventral</td><td>The surface of a tooth facing the lips.</td></tr><tr><td style="white-space:nowrap">L<a name="surface-L"> </a></td><td>Lingual</td><td>The surface of a tooth facing the tongue.</td></tr><tr><td style="white-space:nowrap">MO<a name="surface-MO"> </a></td><td>Mesioclusal</td><td>The Mesioclusal surfaces of a tooth.</td></tr><tr><td style="white-space:nowrap">DO<a name="surface-DO"> </a></td><td>Distoclusal</td><td>The Distoclusal surfaces of a tooth.</td></tr><tr><td style="white-space:nowrap">DI<a name="surface-DI"> </a></td><td>Distoincisal</td><td>The Distoincisal surfaces of a tooth.</td></tr><tr><td style="white-space:nowrap">MOD<a name="surface-MOD"> </a></td><td>Mesioclusodistal</td><td>The Mesioclusodistal surfaces of a tooth.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/FDI-surface",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1154",
    },
  ],
  version: "4.3.0",
  name: "SurfaceCodes",
  title: "Surface Codes",
  status: "draft",
  experimental: false,
  description:
    "This value set includes a smattering of FDI tooth surface codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "M",
      display: "Mesial",
      definition:
        "The surface of a tooth that is closest to the midline (middle) of the face.",
    },
    {
      code: "O",
      display: "Occlusal",
      definition: "The chewing surface of posterior teeth.",
    },
    {
      code: "I",
      display: "Incisal",
      definition: "The biting edge of anterior teeth.",
    },
    {
      code: "D",
      display: "Distal",
      definition:
        "The surface of a tooth that faces away from the midline of the face.",
    },
    {
      code: "B",
      display: "Buccal",
      definition: "The surface of a posterior tooth facing the cheeks.",
    },
    {
      code: "V",
      display: "Ventral",
      definition: "The surface of a tooth facing the lips.",
    },
    {
      code: "L",
      display: "Lingual",
      definition: "The surface of a tooth facing the tongue.",
    },
    {
      code: "MO",
      display: "Mesioclusal",
      definition: "The Mesioclusal surfaces of a tooth.",
    },
    {
      code: "DO",
      display: "Distoclusal",
      definition: "The Distoclusal surfaces of a tooth.",
    },
    {
      code: "DI",
      display: "Distoincisal",
      definition: "The Distoincisal surfaces of a tooth.",
    },
    {
      code: "MOD",
      display: "Mesioclusodistal",
      definition: "The Mesioclusodistal surfaces of a tooth.",
    },
  ],
};
