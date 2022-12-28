/**
 * This example code system defines a set of reasons for the cancellation of an appointment.
 * http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason
 */
export const LocationTypeCodeSystem = {
  resourceType: "CodeSystem",
  id: "appointment-cancellation-reason",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason defines some example codes:</p><table class="codes"><tr><td><b>Lvl</b></td><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td></tr><tr><td>1</td><td style="white-space:nowrap">pat<a name="appointment-cancellation-reason-pat"> </a></td><td>Patient</td></tr><tr><td>2</td><td style="white-space:nowrap">  pat-crs<a name="appointment-cancellation-reason-pat-crs"> </a></td><td>Patient: Canceled via automated reminder system</td></tr><tr><td>2</td><td style="white-space:nowrap">  pat-cpp<a name="appointment-cancellation-reason-pat-cpp"> </a></td><td>Patient: Canceled via Patient Portal</td></tr><tr><td>2</td><td style="white-space:nowrap">  pat-dec<a name="appointment-cancellation-reason-pat-dec"> </a></td><td>Patient: Deceased</td></tr><tr><td>2</td><td style="white-space:nowrap">  pat-fb<a name="appointment-cancellation-reason-pat-fb"> </a></td><td>Patient: Feeling Better</td></tr><tr><td>2</td><td style="white-space:nowrap">  pat-lt<a name="appointment-cancellation-reason-pat-lt"> </a></td><td>Patient: Lack of Transportation</td></tr><tr><td>2</td><td style="white-space:nowrap">  pat-mt<a name="appointment-cancellation-reason-pat-mt"> </a></td><td>Patient: Member Terminated</td></tr><tr><td>2</td><td style="white-space:nowrap">  pat-mv<a name="appointment-cancellation-reason-pat-mv"> </a></td><td>Patient: Moved</td></tr><tr><td>2</td><td style="white-space:nowrap">  pat-preg<a name="appointment-cancellation-reason-pat-preg"> </a></td><td>Patient: Pregnant</td></tr><tr><td>2</td><td style="white-space:nowrap">  pat-swl<a name="appointment-cancellation-reason-pat-swl"> </a></td><td>Patient: Scheduled from Wait List</td></tr><tr><td>2</td><td style="white-space:nowrap">  pat-ucp<a name="appointment-cancellation-reason-pat-ucp"> </a></td><td>Patient: Unhappy/Changed Provider</td></tr><tr><td>1</td><td style="white-space:nowrap">prov<a name="appointment-cancellation-reason-prov"> </a></td><td>Provider</td></tr><tr><td>2</td><td style="white-space:nowrap">  prov-pers<a name="appointment-cancellation-reason-prov-pers"> </a></td><td>Provider: Personal</td></tr><tr><td>2</td><td style="white-space:nowrap">  prov-dch<a name="appointment-cancellation-reason-prov-dch"> </a></td><td>Provider: Discharged</td></tr><tr><td>2</td><td style="white-space:nowrap">  prov-edu<a name="appointment-cancellation-reason-prov-edu"> </a></td><td>Provider: Edu/Meeting</td></tr><tr><td>2</td><td style="white-space:nowrap">  prov-hosp<a name="appointment-cancellation-reason-prov-hosp"> </a></td><td>Provider: Hospitalized</td></tr><tr><td>2</td><td style="white-space:nowrap">  prov-labs<a name="appointment-cancellation-reason-prov-labs"> </a></td><td>Provider: Labs Out of Acceptable Range</td></tr><tr><td>2</td><td style="white-space:nowrap">  prov-mri<a name="appointment-cancellation-reason-prov-mri"> </a></td><td>Provider: MRI Screening Form Marked Do Not Proceed</td></tr><tr><td>2</td><td style="white-space:nowrap">  prov-onc<a name="appointment-cancellation-reason-prov-onc"> </a></td><td>Provider: Oncology Treatment Plan Changes</td></tr><tr><td>1</td><td style="white-space:nowrap">maint<a name="appointment-cancellation-reason-maint"> </a></td><td>Equipment Maintenance/Repair</td></tr><tr><td>1</td><td style="white-space:nowrap">meds-inc<a name="appointment-cancellation-reason-meds-inc"> </a></td><td>Prep/Med Incomplete</td></tr><tr><td>1</td><td style="white-space:nowrap">other<a name="appointment-cancellation-reason-other"> </a></td><td>Other</td></tr><tr><td>2</td><td style="white-space:nowrap">  oth-cms<a name="appointment-cancellation-reason-oth-cms"> </a></td><td>Other: CMS Therapy Cap Service Not Authorized</td></tr><tr><td>2</td><td style="white-space:nowrap">  oth-err<a name="appointment-cancellation-reason-oth-err"> </a></td><td>Other: Error</td></tr><tr><td>2</td><td style="white-space:nowrap">  oth-fin<a name="appointment-cancellation-reason-oth-fin"> </a></td><td>Other: Financial</td></tr><tr><td>2</td><td style="white-space:nowrap">  oth-iv<a name="appointment-cancellation-reason-oth-iv"> </a></td><td>Other: Improper IV Access/Infiltrate IV</td></tr><tr><td>2</td><td style="white-space:nowrap">  oth-int<a name="appointment-cancellation-reason-oth-int"> </a></td><td>Other: No Interpreter Available</td></tr><tr><td>2</td><td style="white-space:nowrap">  oth-mu<a name="appointment-cancellation-reason-oth-mu"> </a></td><td>Other: Prep/Med/Results Unavailable</td></tr><tr><td>2</td><td style="white-space:nowrap">  oth-room<a name="appointment-cancellation-reason-oth-room"> </a></td><td>Other: Room/Resource Maintenance</td></tr><tr><td>2</td><td style="white-space:nowrap">  oth-oerr<a name="appointment-cancellation-reason-oth-oerr"> </a></td><td>Other: Schedule Order Error</td></tr><tr><td>2</td><td style="white-space:nowrap">  oth-swie<a name="appointment-cancellation-reason-oth-swie"> </a></td><td>Other: Silent Walk In Error</td></tr><tr><td>2</td><td style="white-space:nowrap">  oth-weath<a name="appointment-cancellation-reason-oth-weath"> </a></td><td>Other: Weather</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "pa",
    },
  ],
  url: "http://terminology.hl7.org/CodeSystem/appointment-cancellation-reason",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.1382",
    },
  ],
  version: "4.3.0",
  name: "LocationType",
  status: "draft",
  experimental: false,
  description:
    "This example code system defines a set of reasons for the cancellation of an appointment.",
  caseSensitive: true,
  hierarchyMeaning: "is-a",
  content: "example",
  concept: [
    {
      code: "pat",
      display: "Patient",
      concept: [
        {
          code: "pat-crs",
          display: "Patient: Canceled via automated reminder system",
        },
        { code: "pat-cpp", display: "Patient: Canceled via Patient Portal" },
        { code: "pat-dec", display: "Patient: Deceased" },
        { code: "pat-fb", display: "Patient: Feeling Better" },
        { code: "pat-lt", display: "Patient: Lack of Transportation" },
        { code: "pat-mt", display: "Patient: Member Terminated" },
        { code: "pat-mv", display: "Patient: Moved" },
        { code: "pat-preg", display: "Patient: Pregnant" },
        { code: "pat-swl", display: "Patient: Scheduled from Wait List" },
        { code: "pat-ucp", display: "Patient: Unhappy/Changed Provider" },
      ],
    },
    {
      code: "prov",
      display: "Provider",
      concept: [
        { code: "prov-pers", display: "Provider: Personal" },
        { code: "prov-dch", display: "Provider: Discharged" },
        { code: "prov-edu", display: "Provider: Edu/Meeting" },
        { code: "prov-hosp", display: "Provider: Hospitalized" },
        {
          code: "prov-labs",
          display: "Provider: Labs Out of Acceptable Range",
        },
        {
          code: "prov-mri",
          display: "Provider: MRI Screening Form Marked Do Not Proceed",
        },
        {
          code: "prov-onc",
          display: "Provider: Oncology Treatment Plan Changes",
        },
      ],
    },
    { code: "maint", display: "Equipment Maintenance/Repair" },
    { code: "meds-inc", display: "Prep/Med Incomplete" },
    {
      code: "other",
      display: "Other",
      concept: [
        {
          code: "oth-cms",
          display: "Other: CMS Therapy Cap Service Not Authorized",
        },
        { code: "oth-err", display: "Other: Error" },
        { code: "oth-fin", display: "Other: Financial" },
        { code: "oth-iv", display: "Other: Improper IV Access/Infiltrate IV" },
        { code: "oth-int", display: "Other: No Interpreter Available" },
        { code: "oth-mu", display: "Other: Prep/Med/Results Unavailable" },
        { code: "oth-room", display: "Other: Room/Resource Maintenance" },
        { code: "oth-oerr", display: "Other: Schedule Order Error" },
        { code: "oth-swie", display: "Other: Silent Walk In Error" },
        { code: "oth-weath", display: "Other: Weather" },
      ],
    },
  ],
};
