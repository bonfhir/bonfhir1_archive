/**
 * Value Set of codes specifying the priority for a shipment.
 * http://terminology.hl7.org/ValueSet/v2-0906
 */
export const Hl7VSActpriorityCode = {
  /**
   * ASAP - As soon as possible, next highest priority after stat
   */
  ASAPAssoonaspossiblenexthighestpriorityafterstat: "A",

  /**
   * Callback results - filler should contact the placer as soon as results are available, even for preliminary results
   */
  Callbackresultsfillershouldcontacttheplacerassoonasresultsareavailableevenforpreliminaryresults:
    "CR",

  /**
   * Callback for scheduling - Filler should contact the placer (or target) to schedule the service.
   */
  CallbackforschedulingFillershouldcontacttheplacerortargettoscheduletheservice:
    "CS",

  /**
   * Callback placer for scheduling - filler should contact the placer to schedule the service
   */
  Callbackplacerforschedulingfillershouldcontacttheplacertoscheduletheservice:
    "CSP",

  /**
   * Contact recipient for scheduling - Filler should contact the service recipient (target) to schedule the service
   */
  ContactrecipientforschedulingFillershouldcontacttheservicerecipienttargettoscheduletheservice:
    "CSR",

  /**
   * Elective - Beneficial to the patient but not essential for survival.
   */
  ElectiveBeneficialtothepatientbutnotessentialforsurvival: "EL",

  /**
   * Emergency - An unforeseen combination of circumstances or the resulting state that calls for immediate action
   */
  EmergencyAnunforeseencombinationofcircumstancesortheresultingstatethatcallsforimmediateaction:
    "EM",

  /**
   * Preop - Used to indicate that a service is to be performed prior to a scheduled surgery.  When ordering a service and using the pre-op priority, a check is done to see the amount of time that must be allowed for performance of the service.  When the order
   */
  PreopUsedtoindicatethataserviceistobeperformedpriortoascheduledsurgeryWhenorderingaserviceandusingthepreoppriorityacheckisdonetoseetheamountoftimethatmustbeallowedforperformanceoftheserviceWhentheorder:
    "P",

  /**
   * As needed - An "as needed" order should be accompanied by a description of what constitutes a need.  This description is represented by an observation service predicate as a precondition.
   */
  AsneededAnasneededordershouldbeaccompaniedbyadescriptionofwhatconstitutesaneedThisdescriptionisrepresentedbyanobservationservicepredicateasaprecondition:
    "PRN",

  /**
   * Routine - Routine service, do at usual work hours
   */
  RoutineRoutineservicedoatusualworkhours: "R",

  /**
   * Rush reporting - A report should be prepared and sent as quickly as possible
   */
  RushreportingAreportshouldbepreparedandsentasquicklyaspossible: "RR",

  /**
   * Stat - With highest priority (e.g. emergency).
   */
  StatWithhighestpriorityegemergency: "S",

  /**
   * Timing critical - It is critical to come as close as possible to the requested time (e.g. for a through antimicrobial level).
   */
  TimingcriticalItiscriticaltocomeascloseaspossibletotherequestedtimeegforathroughantimicrobiallevel:
    "T",

  /**
   * Use as directed - Drug is to be used as directed by the prescriber.
   */
  UseasdirectedDrugistobeusedasdirectedbytheprescriber: "UD",

  /**
   * Urgent - Calls for prompt action
   */
  UrgentCallsforpromptaction: "UR",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSActpriorityCode =
  typeof Hl7VSActpriorityCode[keyof typeof Hl7VSActpriorityCode];
