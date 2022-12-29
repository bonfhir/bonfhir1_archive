/**
 * Value Set of codes that describe acceptable start and end times, as well as days of the week, for appointment or resource scheduling.
 * http://terminology.hl7.org/ValueSet/v2-0294
 */
export const Hl7VSTimeSelectionCriteriaParameterClassCodesCode = {
  /**
   * The preferred start time for the appointment request, service or resource.   Any legal time specification in the format HHMM, using 24-hour clock notation
   */
  ThepreferredstarttimefortheappointmentrequestserviceorresourceAnylegaltimespecificationintheformatHHMMusing24hourclocknotation:
    "PREFSTART",

  /**
   * An indicator that there is a preferred start time for the appointment request, service or resource.
   */
  Anindicatorthatthereisapreferredstarttimefortheappointmentrequestserviceorresource:
    "Prefstart",

  /**
   * The preferred end time for the appointment request, service or resource.  Any legal time specification in the format HHMM, using 24-hour clock notation
   */
  ThepreferredendtimefortheappointmentrequestserviceorresourceAnylegaltimespecificationintheformatHHMMusing24hourclocknotation:
    "PREFEND",

  /**
   * An indicator that there is a preferred end time for the appointment request, service or resource.
   */
  Anindicatorthatthereisapreferredendtimefortheappointmentrequestserviceorresource:
    "Prefend",

  /**
   * An indicator that Monday is or is not preferred for the day on which the appointment will occur.  OK = Preferred appointment day NO = Day is not preferred
   */
  AnindicatorthatMondayisorisnotpreferredforthedayonwhichtheappointmentwilloccurOKPreferredappointmentdayNODayisnotpreferred:
    "MON",

  /**
   * An indicator that Monday is or is not preferred for the day on which the appointment will occur.
   */
  AnindicatorthatMondayisorisnotpreferredforthedayonwhichtheappointmentwilloccur:
    "Mon",

  /**
   * An indicator that Tuesday is or is not preferred for the day on which the appointment will occur.  OK = Preferred appointment day NO = Day is not preferred
   */
  AnindicatorthatTuesdayisorisnotpreferredforthedayonwhichtheappointmentwilloccurOKPreferredappointmentdayNODayisnotpreferred:
    "TUE",

  /**
   * An indicator that Tuesday is or is not preferred for the day on which the appointment will occur.
   */
  AnindicatorthatTuesdayisorisnotpreferredforthedayonwhichtheappointmentwilloccur:
    "Tue",

  /**
   * An indicator that Wednesday is or is not preferred for the day on which the appointment will occur. OK = Preferred appointment day NO = Day is not preferred
   */
  AnindicatorthatWednesdayisorisnotpreferredforthedayonwhichtheappointmentwilloccurOKPreferredappointmentdayNODayisnotpreferred:
    "WED",

  /**
   * An indicator that Wednesday is or is not preferred for the day on which the appointment will occur.
   */
  AnindicatorthatWednesdayisorisnotpreferredforthedayonwhichtheappointmentwilloccur:
    "Wed",

  /**
   * An indicator that Thursday is or is not preferred for the day on which the appointment will occur.  OK = Preferred appointment day NO = Day is not preferred
   */
  AnindicatorthatThursdayisorisnotpreferredforthedayonwhichtheappointmentwilloccurOKPreferredappointmentdayNODayisnotpreferred:
    "THU",

  /**
   * An indicator that Thursday is or is not preferred for the day on which the appointment will occur.
   */
  AnindicatorthatThursdayisorisnotpreferredforthedayonwhichtheappointmentwilloccur:
    "Thu",

  /**
   * An indicator that Friday is or is not preferred for the day on which the appointment will occur.  OK =  Preferred appointment day NO = Day is not preferred
   */
  AnindicatorthatFridayisorisnotpreferredforthedayonwhichtheappointmentwilloccurOKPreferredappointmentdayNODayisnotpreferred:
    "FRI",

  /**
   * An indicator that Friday is or is not preferred for the day on which the appointment will occur.
   */
  AnindicatorthatFridayisorisnotpreferredforthedayonwhichtheappointmentwilloccur:
    "Fri",

  /**
   * An indicator that Saturday is or is not preferred for the day on which the appointment will occur.  OK =  Preferred appointment day NO = Day is not preferred
   */
  AnindicatorthatSaturdayisorisnotpreferredforthedayonwhichtheappointmentwilloccurOKPreferredappointmentdayNODayisnotpreferred:
    "SAT",

  /**
   * An indicator that Saturday is or is not preferred for the day on which the appointment will occur.
   */
  AnindicatorthatSaturdayisorisnotpreferredforthedayonwhichtheappointmentwilloccur:
    "Sat",

  /**
   * An indicator that Sunday is or is not preferred for the day on which the appointment will occur.  OK = Preferred appointment day NO = Day is not preferred
   */
  AnindicatorthatSundayisorisnotpreferredforthedayonwhichtheappointmentwilloccurOKPreferredappointmentdayNODayisnotpreferred:
    "SUN",

  /**
   * An indicator that Sunday is or is not preferred for the day on which the appointment will occur.
   */
  AnindicatorthatSundayisorisnotpreferredforthedayonwhichtheappointmentwilloccur:
    "Sun",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type Hl7VSTimeSelectionCriteriaParameterClassCodesCode =
  typeof Hl7VSTimeSelectionCriteriaParameterClassCodesCode[keyof typeof Hl7VSTimeSelectionCriteriaParameterClassCodesCode];
