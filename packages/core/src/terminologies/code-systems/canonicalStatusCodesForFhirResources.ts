export const CanonicalStatusCodesforFHIRResources = {
  resourceType: "CodeSystem",
  id: "resource-status",
  meta: { lastUpdated: "2022-05-28T12:47:40.239+10:00" },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/resource-status defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">error<a name="resource-status-error"> </a></td><td>error</td><td>The resource was created in error, and should not be treated as valid (note: in many cases, for various data integrity related reasons, the information cannot be removed from the record)</td></tr><tr><td style="white-space:nowrap">proposed<a name="resource-status-proposed"> </a></td><td>proposed</td><td>The resource describes an action or plan that is proposed, and not yet approved by the participants</td></tr><tr><td style="white-space:nowrap">planned<a name="resource-status-planned"> </a></td><td>planned</td><td>The resource describes a course of action that is planned and agreed/approved, but at the time of recording was still future</td></tr><tr><td style="white-space:nowrap">draft<a name="resource-status-draft"> </a></td><td>draft</td><td>The information in the resource is still being prepared and edited</td></tr><tr><td style="white-space:nowrap">requested<a name="resource-status-requested"> </a></td><td>requested</td><td>A fulfiller has been asked to perform this action, but it has not yet occurred</td></tr><tr><td style="white-space:nowrap">received<a name="resource-status-received"> </a></td><td>received</td><td>The fulfiller has received the request, but not yet agreed to carry out the action</td></tr><tr><td style="white-space:nowrap">declined<a name="resource-status-declined"> </a></td><td>declined</td><td>The fulfiller chose not to perform the action</td></tr><tr><td style="white-space:nowrap">accepted<a name="resource-status-accepted"> </a></td><td>accepted</td><td>The fulfiller has decided to perform the action, and plans are in train to do this in the future</td></tr><tr><td style="white-space:nowrap">arrived<a name="resource-status-arrived"> </a></td><td>arrived</td><td>The pre-conditions for the action are all fulfilled, and it is imminent</td></tr><tr><td style="white-space:nowrap">active<a name="resource-status-active"> </a></td><td>active</td><td>The resource describes information that is currently valid or a process that is presently occuring</td></tr><tr><td style="white-space:nowrap">suspended<a name="resource-status-suspended"> </a></td><td>suspended</td><td>The process described/requested in this resource has been halted for some reason</td></tr><tr><td style="white-space:nowrap">failed<a name="resource-status-failed"> </a></td><td>failed</td><td>The process described/requested in the resource could not be completed, and no further action is planned</td></tr><tr><td style="white-space:nowrap">replaced<a name="resource-status-replaced"> </a></td><td>replaced</td><td>The information in this resource has been replaced by information in another resource</td></tr><tr><td style="white-space:nowrap">complete<a name="resource-status-complete"> </a></td><td>complete</td><td>The process described/requested in the resource has been completed, and no further action is planned</td></tr><tr><td style="white-space:nowrap">inactive<a name="resource-status-inactive"> </a></td><td>inactive</td><td>The resource describes information that is no longer valid or a process that is stopped occurring</td></tr><tr><td style="white-space:nowrap">abandoned<a name="resource-status-abandoned"> </a></td><td>abandoned</td><td>The process described/requested in the resource did not complete - usually due to some workflow error, and no further action is planned</td></tr><tr><td style="white-space:nowrap">unknown<a name="resource-status-unknown"> </a></td><td>unknown</td><td>Authoring system does not know the status</td></tr><tr><td style="white-space:nowrap">unconfirmed<a name="resource-status-unconfirmed"> </a></td><td>unconfirmed</td><td>The information in this resource is not yet approved</td></tr><tr><td style="white-space:nowrap">confirmed<a name="resource-status-confirmed"> </a></td><td>confirmed</td><td>The information in this resource is approved</td></tr><tr><td style="white-space:nowrap">resolved<a name="resource-status-resolved"> </a></td><td>resolved</td><td>The issue identified by this resource is no longer of concern</td></tr><tr><td style="white-space:nowrap">refuted<a name="resource-status-refuted"> </a></td><td>refuted</td><td>This information has been ruled out by testing and evaluation</td></tr><tr><td style="white-space:nowrap">differential<a name="resource-status-differential"> </a></td><td>differential</td><td>Potentially true?</td></tr><tr><td style="white-space:nowrap">partial<a name="resource-status-partial"> </a></td><td>partial</td><td>This information is still being assembled</td></tr><tr><td style="white-space:nowrap">busy-unavailable<a name="resource-status-busy-unavailable"> </a></td><td>busy-unavailable</td><td>not available at this time/location</td></tr><tr><td style="white-space:nowrap">free<a name="resource-status-free"> </a></td><td>free</td><td>Free for scheduling</td></tr><tr><td style="white-space:nowrap">on-target<a name="resource-status-on-target"> </a></td><td>on-target</td><td>Ready to act</td></tr><tr><td style="white-space:nowrap">ahead-of-target<a name="resource-status-ahead-of-target"> </a></td><td>ahead-of-target</td><td>Ahead of the planned timelines</td></tr><tr><td style="white-space:nowrap">behind-target<a name="resource-status-behind-target"> </a></td><td>behind-target</td><td/></tr><tr><td style="white-space:nowrap">not-ready<a name="resource-status-not-ready"> </a></td><td>not-ready</td><td>Behind the planned timelines</td></tr><tr><td style="white-space:nowrap">transduc-discon<a name="resource-status-transduc-discon"> </a></td><td>transduc-discon</td><td>The device transducer is disconnected</td></tr><tr><td style="white-space:nowrap">hw-discon<a name="resource-status-hw-discon"> </a></td><td>hw-discon</td><td>The hardware is disconnected</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-standards-status",
      valueCode: "trial-use",
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-fmm",
      valueInteger: 3,
    },
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "mnm",
    },
  ],
  url: "http://hl7.org/fhir/resource-status",
  version: "4.3.0",
  name: "Canonical Status Codes for FHIR Resources",
  status: "draft",
  experimental: false,
  publisher: "FHIR Project",
  description:
    "The master set of status codes used throughout FHIR. All status codes are mapped to one of these codes.",
  caseSensitive: true,
  valueSet: "http://hl7.org/fhir/ValueSet/resource-status",
  hierarchyMeaning: "is-a",
  content: "complete",
  concept: [
    {
      code: "error",
      display: "error",
      definition:
        "The resource was created in error, and should not be treated as valid (note: in many cases, for various data integrity related reasons, the information cannot be removed from the record)",
    },
    {
      code: "proposed",
      display: "proposed",
      definition:
        "The resource describes an action or plan that is proposed, and not yet approved by the participants",
    },
    {
      code: "planned",
      display: "planned",
      definition:
        "The resource describes a course of action that is planned and agreed/approved, but at the time of recording was still future",
    },
    {
      code: "draft",
      display: "draft",
      definition:
        "The information in the resource is still being prepared and edited",
    },
    {
      code: "requested",
      display: "requested",
      definition:
        "A fulfiller has been asked to perform this action, but it has not yet occurred",
    },
    {
      code: "received",
      display: "received",
      definition:
        "The fulfiller has received the request, but not yet agreed to carry out the action",
    },
    {
      code: "declined",
      display: "declined",
      definition: "The fulfiller chose not to perform the action",
    },
    {
      code: "accepted",
      display: "accepted",
      definition:
        "The fulfiller has decided to perform the action, and plans are in train to do this in the future",
    },
    {
      code: "arrived",
      display: "arrived",
      definition:
        "The pre-conditions for the action are all fulfilled, and it is imminent",
    },
    {
      code: "active",
      display: "active",
      definition:
        "The resource describes information that is currently valid or a process that is presently occuring",
    },
    {
      code: "suspended",
      display: "suspended",
      definition:
        "The process described/requested in this resource has been halted for some reason",
    },
    {
      code: "failed",
      display: "failed",
      definition:
        "The process described/requested in the resource could not be completed, and no further action is planned",
    },
    {
      code: "replaced",
      display: "replaced",
      definition:
        "The information in this resource has been replaced by information in another resource",
    },
    {
      code: "complete",
      display: "complete",
      definition:
        "The process described/requested in the resource has been completed, and no further action is planned",
    },
    {
      code: "inactive",
      display: "inactive",
      definition:
        "The resource describes information that is no longer valid or a process that is stopped occurring",
    },
    {
      code: "abandoned",
      display: "abandoned",
      definition:
        "The process described/requested in the resource did not complete - usually due to some workflow error, and no further action is planned",
    },
    {
      code: "unknown",
      display: "unknown",
      definition: "Authoring system does not know the status",
    },
    {
      code: "unconfirmed",
      display: "unconfirmed",
      definition: "The information in this resource is not yet approved",
    },
    {
      code: "confirmed",
      display: "confirmed",
      definition: "The information in this resource is approved",
    },
    {
      code: "resolved",
      display: "resolved",
      definition:
        "The issue identified by this resource is no longer of concern",
    },
    {
      code: "refuted",
      display: "refuted",
      definition:
        "This information has been ruled out by testing and evaluation",
    },
    {
      code: "differential",
      display: "differential",
      definition: "Potentially true?",
    },
    {
      code: "partial",
      display: "partial",
      definition: "This information is still being assembled",
    },
    {
      code: "busy-unavailable",
      display: "busy-unavailable",
      definition: "not available at this time/location",
    },
    { code: "free", display: "free", definition: "Free for scheduling" },
    { code: "on-target", display: "on-target", definition: "Ready to act" },
    {
      code: "ahead-of-target",
      display: "ahead-of-target",
      definition: "Ahead of the planned timelines",
    },
    { code: "behind-target", display: "behind-target" },
    {
      code: "not-ready",
      display: "not-ready",
      definition: "Behind the planned timelines",
    },
    {
      code: "transduc-discon",
      display: "transduc-discon",
      definition: "The device transducer is disconnected",
    },
    {
      code: "hw-discon",
      display: "hw-discon",
      definition: "The hardware is disconnected",
    },
  ],
};
