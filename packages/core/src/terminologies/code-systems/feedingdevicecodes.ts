/**
 * Materials used or needed to feed the patient. These values are provided as a suggestive example.
 * http://hl7.org/fhir/feeding-device
 */
export const FeedingDeviceCodesCodeSystem = {
  resourceType: "CodeSystem",
  id: "feeding-device",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/feeding-device defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">standard-nipple<a name="feeding-device-standard-nipple"> </a></td><td>Standard nipple</td><td>Standard nipple definition:</td></tr><tr><td style="white-space:nowrap">preemie-nipple<a name="feeding-device-preemie-nipple"> </a></td><td>Preemie nipple</td><td>Preemie nipple definition:</td></tr><tr><td style="white-space:nowrap">ortho-nipple<a name="feeding-device-ortho-nipple"> </a></td><td>Orthodontic nipple</td><td>Orthodontic nipple definition:</td></tr><tr><td style="white-space:nowrap">sloflo-nipple<a name="feeding-device-sloflo-nipple"> </a></td><td>Slow flow nipple</td><td>Slow flow nipple definition:</td></tr><tr><td style="white-space:nowrap">midflo-nipple<a name="feeding-device-midflo-nipple"> </a></td><td>Middle flow nipple</td><td>Middle flow nipple definition:</td></tr><tr><td style="white-space:nowrap">bigcut-nipple<a name="feeding-device-bigcut-nipple"> </a></td><td>Enlarged, cross-cut nipple</td><td>Enlarged, cross-cut nipple definition:</td></tr><tr><td style="white-space:nowrap">haberman-bottle<a name="feeding-device-haberman-bottle"> </a></td><td>Haberman bottle</td><td>Haberman bottle definition:</td></tr><tr><td style="white-space:nowrap">sippy-valve<a name="feeding-device-sippy-valve"> </a></td><td>Sippy cup with valve</td><td>Sippy cup with valve definition:</td></tr><tr><td style="white-space:nowrap">sippy-no-valve<a name="feeding-device-sippy-no-valve"> </a></td><td>Sippy cup without valve</td><td>Sippy cup without valve definition:</td></tr><tr><td style="white-space:nowrap">provale-cup<a name="feeding-device-provale-cup"> </a></td><td>Provale Cup</td><td>Provale Cup definition:</td></tr><tr><td style="white-space:nowrap">glass-lid<a name="feeding-device-glass-lid"> </a></td><td>Glass with lid/sippy cup</td><td>Glass with lid/sippy cup definition:</td></tr><tr><td style="white-space:nowrap">handhold-cup<a name="feeding-device-handhold-cup"> </a></td><td>Double handhold on glass/cup</td><td>Double handhold on glass/cup definition:</td></tr><tr><td style="white-space:nowrap">rubber-mat<a name="feeding-device-rubber-mat"> </a></td><td>Rubber matting under tray</td><td>Rubber matting under tray definition:</td></tr><tr><td style="white-space:nowrap">straw<a name="feeding-device-straw"> </a></td><td>Straw</td><td>Straw definition:</td></tr><tr><td style="white-space:nowrap">nose-cup<a name="feeding-device-nose-cup"> </a></td><td>Nose cup</td><td>Nose cup definition:</td></tr><tr><td style="white-space:nowrap">scoop-plate<a name="feeding-device-scoop-plate"> </a></td><td>Scoop plate</td><td>Scoop plate definition:</td></tr><tr><td style="white-space:nowrap">utensil-holder<a name="feeding-device-utensil-holder"> </a></td><td>Hand wrap utensil holder</td><td>Hand wrap utensil holder definition:</td></tr><tr><td style="white-space:nowrap">foam-handle<a name="feeding-device-foam-handle"> </a></td><td>Foam handle utensils</td><td>Foam handle utensils definition:</td></tr><tr><td style="white-space:nowrap">angled-utensil<a name="feeding-device-angled-utensil"> </a></td><td>Angled utensils</td><td>Angled utensils definition:</td></tr><tr><td style="white-space:nowrap">spout-cup<a name="feeding-device-spout-cup"> </a></td><td>Spout cup</td><td>Spout cup definition:</td></tr><tr><td style="white-space:nowrap">autofeeding-device<a name="feeding-device-autofeeding-device"> </a></td><td>Automated feeding devices</td><td>Automated feeding devices definition:</td></tr><tr><td style="white-space:nowrap">rocker-knife<a name="feeding-device-rocker-knife"> </a></td><td>Rocker knife</td><td>Rocker knife definition:</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
  ],
  url: "http://hl7.org/fhir/feeding-device",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.962",
    },
  ],
  version: "4.3.0",
  name: "FeedingDeviceCodes",
  title: "Feeding Device Codes",
  status: "draft",
  experimental: false,
  description:
    "Materials used or needed to feed the patient. These values are provided as a suggestive example.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "standard-nipple",
      display: "Standard nipple",
      definition: "Standard nipple definition:",
    },
    {
      code: "preemie-nipple",
      display: "Preemie nipple",
      definition: "Preemie nipple definition:",
    },
    {
      code: "ortho-nipple",
      display: "Orthodontic nipple",
      definition: "Orthodontic nipple definition:",
    },
    {
      code: "sloflo-nipple",
      display: "Slow flow nipple",
      definition: "Slow flow nipple definition:",
    },
    {
      code: "midflo-nipple",
      display: "Middle flow nipple",
      definition: "Middle flow nipple definition:",
    },
    {
      code: "bigcut-nipple",
      display: "Enlarged, cross-cut nipple",
      definition: "Enlarged, cross-cut nipple definition:",
    },
    {
      code: "haberman-bottle",
      display: "Haberman bottle",
      definition: "Haberman bottle definition:",
    },
    {
      code: "sippy-valve",
      display: "Sippy cup with valve",
      definition: "Sippy cup with valve definition:",
    },
    {
      code: "sippy-no-valve",
      display: "Sippy cup without valve",
      definition: "Sippy cup without valve definition:",
    },
    {
      code: "provale-cup",
      display: "Provale Cup",
      definition: "Provale Cup definition:",
    },
    {
      code: "glass-lid",
      display: "Glass with lid/sippy cup",
      definition: "Glass with lid/sippy cup definition:",
    },
    {
      code: "handhold-cup",
      display: "Double handhold on glass/cup",
      definition: "Double handhold on glass/cup definition:",
    },
    {
      code: "rubber-mat",
      display: "Rubber matting under tray",
      definition: "Rubber matting under tray definition:",
    },
    { code: "straw", display: "Straw", definition: "Straw definition:" },
    {
      code: "nose-cup",
      display: "Nose cup",
      definition: "Nose cup definition:",
    },
    {
      code: "scoop-plate",
      display: "Scoop plate",
      definition: "Scoop plate definition:",
    },
    {
      code: "utensil-holder",
      display: "Hand wrap utensil holder",
      definition: "Hand wrap utensil holder definition:",
    },
    {
      code: "foam-handle",
      display: "Foam handle utensils",
      definition: "Foam handle utensils definition:",
    },
    {
      code: "angled-utensil",
      display: "Angled utensils",
      definition: "Angled utensils definition:",
    },
    {
      code: "spout-cup",
      display: "Spout cup",
      definition: "Spout cup definition:",
    },
    {
      code: "autofeeding-device",
      display: "Automated feeding devices",
      definition: "Automated feeding devices definition:",
    },
    {
      code: "rocker-knife",
      display: "Rocker knife",
      definition: "Rocker knife definition:",
    },
  ],
};
