import { CodeableConcept, Coding, ValueSetExpansionContains } from "fhir/r4";

/**
 * A ValueSet with typed values.
 */
export interface TypedValueSet<TDisplayCode extends Record<string, string>> {
  url: string;
  values: {
    [P in keyof TDisplayCode]: TypedValueSetValue<TDisplayCode[P]>;
  };
  expansion: ValueSetExpansionContains[];
}

export interface TypedValueSetValue<TCode extends string> {
  /**
   * Get the ValueSet code as a simple code.
   */
  code: TCode;

  /**
   * Get the ValueSet code as a {@link Coding}.
   */
  coding: Coding;

  /**
   * Get the ValueSet code as a {@link CodeableConcept}.
   */
  codeableConcept: CodeableConcept;
}
