export const ExampleServicePlaceCodes = {
  resourceType: "CodeSystem",
  id: "service-place",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/ex-serviceplace defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">01<a name="service-place-01"> </a></td><td>Pharmacy</td><td>A facility or location where drugs and other medically related items and services are sold, dispensed, or otherwise provided directly to patients.</td></tr><tr><td style="white-space:nowrap">03<a name="service-place-03"> </a></td><td>School</td><td>A facility whose primary purpose is education.</td></tr><tr><td style="white-space:nowrap">04<a name="service-place-04"> </a></td><td>Homeless Shelter</td><td>A facility or location whose primary purpose is to provide temporary housing to homeless individuals (e.g., emergency shelters, individual or family shelters).</td></tr><tr><td style="white-space:nowrap">05<a name="service-place-05"> </a></td><td>Indian Health Service Free-standing Facility</td><td>A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to American Indians and Alaska Natives who do not require hospitalization.</td></tr><tr><td style="white-space:nowrap">06<a name="service-place-06"> </a></td><td>Indian Health Service Provider-based Facility</td><td>A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services rendered by, or under the supervision of, physicians to American Indians and Alaska Natives admitted as inpatients or outpatients.</td></tr><tr><td style="white-space:nowrap">07<a name="service-place-07"> </a></td><td>Tribal 638 Free-Standing Facility</td><td>A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to tribal members who do not require hospitalization.</td></tr><tr><td style="white-space:nowrap">08<a name="service-place-08"> </a></td><td>Tribal 638 Provider-Based Facility</td><td>A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to tribal members admitted as inpatients or outpatients.</td></tr><tr><td style="white-space:nowrap">09<a name="service-place-09"> </a></td><td>Prison/Correctional Facility</td><td>A prison, jail, reformatory, work farm, detention center, or any other similar facility maintained by either Federal, State or local authorities for the purpose of confinement or rehabilitation of adult or juvenile criminal offenders.</td></tr><tr><td style="white-space:nowrap">11<a name="service-place-11"> </a></td><td>Office</td><td>Location, other than a hospital, skilled nursing facility (SNF), military treatment facility, community health center, State or local public health clinic, or intermediate care facility (ICF), where the health professional routinely provides health examinations, diagnosis, and treatment of illness or injury on an ambulatory basis.</td></tr><tr><td style="white-space:nowrap">12<a name="service-place-12"> </a></td><td>Home</td><td>Location, other than a hospital or other facility, where the patient receives care in a private residence.</td></tr><tr><td style="white-space:nowrap">13<a name="service-place-13"> </a></td><td>Assisted Living Fa</td><td>Congregate residential facility with self-contained living units providing assessment of each resident\'s needs and on-site support 24 hours a day, 7 days a week, with the capacity to deliver or arrange for services including some health care and other services.</td></tr><tr><td style="white-space:nowrap">14<a name="service-place-14"> </a></td><td>Group Home</td><td>A residence, with shared living areas, where clients receive supervision and other services such as social and/or behavioral services, custodial service, and minimal services (e.g., medication administration).</td></tr><tr><td style="white-space:nowrap">15<a name="service-place-15"> </a></td><td>Mobile Unit</td><td>A facility/unit that moves from place-to-place equipped to provide preventive, screening, diagnostic, and/or treatment services.</td></tr><tr><td style="white-space:nowrap">19<a name="service-place-19"> </a></td><td>Off Campus-Outpatient Hospital</td><td>portion of an off-campus hospital provider-based department which provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services to sick or injured persons who do not require hospitalization or institutionalization.</td></tr><tr><td style="white-space:nowrap">20<a name="service-place-20"> </a></td><td>Urgent Care Facility</td><td>Location, distinct from a hospital emergency room, an office, or a clinic, whose purpose is to diagnose and treat illness or injury for unscheduled, ambulatory patients seeking immediate medical attention.</td></tr><tr><td style="white-space:nowrap">21<a name="service-place-21"> </a></td><td>Inpatient Hospital</td><td>A facility, other than psychiatric, which primarily provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services by, or under, the supervision of physicians to patients admitted for a variety of medical conditions.</td></tr><tr><td style="white-space:nowrap">41<a name="service-place-41"> </a></td><td>Ambulance—Land</td><td>A land vehicle specifically designed, equipped and staffed for lifesaving and transporting the sick or injured.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "fm",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/ex-serviceplace",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1157",
    },
  ],
  version: "4.3.0",
  name: "ExampleServicePlaceCodes",
  title: "Example Service Place Codes",
  status: "draft",
  experimental: false,
  description: "This value set includes a smattering of Service Place codes.",
  copyright: "This is an example set.",
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "01",
      display: "Pharmacy",
      definition:
        "A facility or location where drugs and other medically related items and services are sold, dispensed, or otherwise provided directly to patients.",
    },
    {
      code: "03",
      display: "School",
      definition: "A facility whose primary purpose is education.",
    },
    {
      code: "04",
      display: "Homeless Shelter",
      definition:
        "A facility or location whose primary purpose is to provide temporary housing to homeless individuals (e.g., emergency shelters, individual or family shelters).",
    },
    {
      code: "05",
      display: "Indian Health Service Free-standing Facility",
      definition:
        "A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to American Indians and Alaska Natives who do not require hospitalization.",
    },
    {
      code: "06",
      display: "Indian Health Service Provider-based Facility",
      definition:
        "A facility or location, owned and operated by the Indian Health Service, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services rendered by, or under the supervision of, physicians to American Indians and Alaska Natives admitted as inpatients or outpatients.",
    },
    {
      code: "07",
      display: "Tribal 638 Free-Standing Facility",
      definition:
        "A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to tribal members who do not require hospitalization.",
    },
    {
      code: "08",
      display: "Tribal 638 Provider-Based Facility",
      definition:
        "A facility or location owned and operated by a federally recognized American Indian or Alaska Native tribe or tribal organization under a 638 agreement, which provides diagnostic, therapeutic (surgical and nonsurgical), and rehabilitation services to tribal members admitted as inpatients or outpatients.",
    },
    {
      code: "09",
      display: "Prison/Correctional Facility",
      definition:
        "A prison, jail, reformatory, work farm, detention center, or any other similar facility maintained by either Federal, State or local authorities for the purpose of confinement or rehabilitation of adult or juvenile criminal offenders.",
    },
    {
      code: "11",
      display: "Office",
      definition:
        "Location, other than a hospital, skilled nursing facility (SNF), military treatment facility, community health center, State or local public health clinic, or intermediate care facility (ICF), where the health professional routinely provides health examinations, diagnosis, and treatment of illness or injury on an ambulatory basis.",
    },
    {
      code: "12",
      display: "Home",
      definition:
        "Location, other than a hospital or other facility, where the patient receives care in a private residence.",
    },
    {
      code: "13",
      display: "Assisted Living Fa",
      definition:
        "Congregate residential facility with self-contained living units providing assessment of each resident's needs and on-site support 24 hours a day, 7 days a week, with the capacity to deliver or arrange for services including some health care and other services.",
    },
    {
      code: "14",
      display: "Group Home",
      definition:
        "A residence, with shared living areas, where clients receive supervision and other services such as social and/or behavioral services, custodial service, and minimal services (e.g., medication administration).",
    },
    {
      code: "15",
      display: "Mobile Unit",
      definition:
        "A facility/unit that moves from place-to-place equipped to provide preventive, screening, diagnostic, and/or treatment services.",
    },
    {
      code: "19",
      display: "Off Campus-Outpatient Hospital",
      definition:
        "portion of an off-campus hospital provider-based department which provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services to sick or injured persons who do not require hospitalization or institutionalization.",
    },
    {
      code: "20",
      display: "Urgent Care Facility",
      definition:
        "Location, distinct from a hospital emergency room, an office, or a clinic, whose purpose is to diagnose and treat illness or injury for unscheduled, ambulatory patients seeking immediate medical attention.",
    },
    {
      code: "21",
      display: "Inpatient Hospital",
      definition:
        "A facility, other than psychiatric, which primarily provides diagnostic, therapeutic (both surgical and nonsurgical), and rehabilitation services by, or under, the supervision of physicians to patients admitted for a variety of medical conditions.",
    },
    {
      code: "41",
      display: "Ambulance—Land",
      definition:
        "A land vehicle specifically designed, equipped and staffed for lifesaving and transporting the sick or injured.",
    },
  ],
};
