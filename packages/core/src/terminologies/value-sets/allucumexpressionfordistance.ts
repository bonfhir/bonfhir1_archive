/**
 * Unified Code for Units of Measure (UCUM). This value set includes all UCUM codes for units of length
 * http://hl7.org/fhir/ValueSet/all-distance-units
 */
export const AllUCUMExpressionForDistanceCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllUCUMExpressionForDistanceCode =
  typeof AllUCUMExpressionForDistanceCode[keyof typeof AllUCUMExpressionForDistanceCode];
