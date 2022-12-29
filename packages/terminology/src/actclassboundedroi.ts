/**
 * A Region of Interest (ROI) specified for a multidimensional observation, such as an Observation Series (OBSSER). The ROI is specified using a set of observation criteria, each delineating the boundary of the region in one of the dimensions in the multidimensional observation. The relationship between a ROI and its referenced Act is specified through an ActRelationship of type subject (SUBJ), which must always be present. Each of the boundary criteria observations is connected with the ROI using ActRelationships of type "has component" (COMP). In each boundary criterion, the Act.code names the dimension and the Observation.value specifies the range of values inside the region. Typically the bounded dimension is continuous, and so the Observation.value will be an interval (IVL) data type. The Observation.value need not be specified if the respective dimension is only named but not constrained. For example, an ROI for the QT interval of a certain beat in ECG Lead II would contain 2 boundary criteria, one naming the interval in time (constrained), and the other naming the interval in ECG Lead II (only named, but not constrained).
 * http://terminology.hl7.org/ValueSet/v3-ActClassBoundedRoi
 */
export const ActClassBoundedRoiCode = {
  /**
   * bounded ROI
   */
  boundedROI: "ROIBND",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type ActClassBoundedRoiCode =
  typeof ActClassBoundedRoiCode[keyof typeof ActClassBoundedRoiCode];
