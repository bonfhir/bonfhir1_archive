export const ListOrderCodes = {
  resourceType: "CodeSystem",
  id: "list-order",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/list-order defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">user<a name="list-order-user"> </a></td><td>Sorted by User</td><td>The list was sorted by a user. The criteria the user used are not specified.</td></tr><tr><td style="white-space:nowrap">system<a name="list-order-system"> </a></td><td>Sorted by System</td><td>The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).</td></tr><tr><td style="white-space:nowrap">event-date<a name="list-order-event-date"> </a></td><td>Sorted by Event Date</td><td>The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.</td></tr><tr><td style="white-space:nowrap">entry-date<a name="list-order-entry-date"> </a></td><td>Sorted by Item Date</td><td>The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.</td></tr><tr><td style="white-space:nowrap">priority<a name="list-order-priority"> </a></td><td>Sorted by Priority</td><td>The list is sorted by priority. The exact method in which priority has been determined is not specified.</td></tr><tr><td style="white-space:nowrap">alphabetic<a name="list-order-alphabetic"> </a></td><td>Sorted Alphabetically</td><td>The list is sorted alphabetically by an unspecified property of the items in the list.</td></tr><tr><td style="white-space:nowrap">category<a name="list-order-category"> </a></td><td>Sorted by Category</td><td>The list is sorted categorically by an unspecified property of the items in the list.</td></tr><tr><td style="white-space:nowrap">patient<a name="list-order-patient"> </a></td><td>Sorted by Patient</td><td>The list is sorted by patient, with items for each patient grouped together.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fhir",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/list-order",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1107",
    },
  ],
  version: "4.3.0",
  name: "ListOrderCodes",
  title: "List Order Codes",
  status: "draft",
  experimental: false,
  description: "Base values for the order of the items in a list resource.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "user",
      display: "Sorted by User",
      definition:
        "The list was sorted by a user. The criteria the user used are not specified.",
    },
    {
      code: "system",
      display: "Sorted by System",
      definition:
        "The list was sorted by the system. The criteria the user used are not specified; define additional codes to specify a particular order (or use other defined codes).",
    },
    {
      code: "event-date",
      display: "Sorted by Event Date",
      definition:
        "The list is sorted by the data of the event. This can be used when the list has items which are dates with past or future events.",
    },
    {
      code: "entry-date",
      display: "Sorted by Item Date",
      definition:
        "The list is sorted by the date the item was added to the list. Note that the date added to the list is not explicit in the list itself.",
    },
    {
      code: "priority",
      display: "Sorted by Priority",
      definition:
        "The list is sorted by priority. The exact method in which priority has been determined is not specified.",
    },
    {
      code: "alphabetic",
      display: "Sorted Alphabetically",
      definition:
        "The list is sorted alphabetically by an unspecified property of the items in the list.",
    },
    {
      code: "category",
      display: "Sorted by Category",
      definition:
        "The list is sorted categorically by an unspecified property of the items in the list.",
    },
    {
      code: "patient",
      display: "Sorted by Patient",
      definition:
        "The list is sorted by patient, with items for each patient grouped together.",
    },
  ],
};
