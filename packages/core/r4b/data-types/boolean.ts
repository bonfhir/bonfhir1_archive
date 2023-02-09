/**
 * A boolean
 *
 * @see https://hl7.org/fhir/datatypes.html#boolean
 */

export interface FhirBooleanTypeAdapter {
  locale: string | undefined;
  /**
   * Parse a FHIR boolean
   *
   * @see https://hl7.org/fhir/datatypes.html#boolean
   */
  parse(value: string | boolean | null | undefined): boolean | undefined;

  /**
   * Format a FHIR boolean
   *
   * @see https://hl7.org/fhir/datatypes.html#boolean
   */
  format(value: string | boolean | null | undefined): string;
}

const fhirBooleanRegexp = new RegExp("^(true)|(false)$");

/**
 * Return a {@link FhirBooleanTypeAdapter}
 */
export function fhirBooleanTypeAdapter(
  locale: string | undefined
): FhirBooleanTypeAdapter {
  return {
    locale,
    parse(value) {
      if (typeof value === "boolean") return value;

      const sanitizedValue = value?.trim()?.toLowerCase();
      if (!sanitizedValue) {
        return undefined;
      }

      // value is a string
      if (!sanitizedValue.match(fhirBooleanRegexp))
        throw new Error(
          "Value does not match the fhir boolean format as described in `https://hl7.org/fhir/datatypes.html#boolean'"
        );

      return sanitizedValue === "true";
    },

    format(value) {
      const fhirBoolean =
        typeof value === "boolean" ? value : this.parse(value);

      return fhirBoolean?.toString() || "";
    },
  };
}
