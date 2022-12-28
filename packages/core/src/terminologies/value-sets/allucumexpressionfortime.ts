/**
 * Unified Code for Units of Measure (UCUM). This value set includes all UCUM codes for units of time
 * http://hl7.org/fhir/ValueSet/all-time-units
 */
export const AllUCUMExpressionForTimeCode = {} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type AllUCUMExpressionForTimeCode =
  typeof AllUCUMExpressionForTimeCode[keyof typeof AllUCUMExpressionForTimeCode];
