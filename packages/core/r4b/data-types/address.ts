import { Address } from "fhir/r4";
import { formatAddress } from "localized-address-format";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";
import { comparePeriods, removeDoubleSpaces } from "./helpers";
import { fhirPeriodTypeAdapter } from "./period";

/**
 * An address expressed using postal conventions
 *
 * @see https://hl7.org/fhir/datatypes.html#address
 */

export type FhirAddressFormatOptions = {
  /**
   * The default country to apply if missing from the address.
   */
  defaultCountry?: string | null | undefined;

  /**
   * Whether the country should be happened at the end of the address or not.
   * Defaults to false.
   */
  includeCountry?: boolean | null | undefined;

  /**
   * - standard: display the address without the use, type or period.
   * - full: display the address with the period
   * - extended: display the address with the use, type and period
   */
  style?: "standard" | "full" | "extended" | null | undefined;

  /**
   * True to use text if present, false to never use text - defaults to true
   */
  preferText?: boolean | null | undefined;

  /**
   * The separator to use to join formatted line addresses. Defaults to ", "
   */
  lineSeparator?: string | null | undefined;

  /**
   * When using a list of addresses, format only the first n (after sorting).
   * Default to Infinity to show or all addresses in a list.
   */
  max?: number | null | undefined;

  /**
   * When using a list of addresses:
   * - the sort order for the `use` attribute.
   * - the filter to select only specific values
   *
   * Defaults to [home, work, billing, temp, old, undefined]
   */
  useFilterOrder?: Array<Address["use"]> | null | undefined;

  /**
   * When using a list of addresses, the options to pass to the Intl listFormat method.
   */
  listFormatOptions?: Intl.ListFormatOptions | undefined;

  useValueSetExpansions?: FhirCodeFormatOptions["valueSetExpansions"];
  typeValueSetExpansions?: FhirCodeFormatOptions["valueSetExpansions"];
};

export interface FhirAddressTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];

  /**
   * Format a FHIR address
   *
   * @see https://hl7.org/fhir/datatypes.html#address
   */
  format(
    value: Address[] | Address | null | undefined,
    options?: FhirAddressFormatOptions | null | undefined
  ): string;
}

export interface FhirAddressTypeAdapter {
  locale: FhirDataTypeAdapter["locale"];

  /**
   * Format a FHIR address
   *
   * @see https://hl7.org/fhir/datatypes.html#address
   */
  format(
    value: Address[] | Address | null | undefined,
    options?: FhirAddressFormatOptions | null | undefined
  ): string;
}

/**
 * Return a {@link FhirAddressTypeAdapter}
 * @param locale - see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#locales_argument
 */
export function fhirAddressTypeAdapter(
  locale?: string | undefined
): FhirAddressTypeAdapter {
  // JIT locale check
  Intl.NumberFormat(locale);

  return {
    locale,
    format(fhirAddress, options) {
      if (!fhirAddress) return "";

      if (Array.isArray(fhirAddress)) {
        const formattedAddressList = filterAndSortAddresses(
          fhirAddress,
          options
        ).map((address) => this.format(address, options));

        return new Intl.ListFormat(locale, options?.listFormatOptions).format(
          formattedAddressList
        );
      }

      const country =
        fhirAddress.country || options?.defaultCountry || undefined;
      const use = fhirCodeTypeAdapter(locale).format(fhirAddress.use, {
        valueSetExpansions: options?.useValueSetExpansions,
      });
      const type = fhirCodeTypeAdapter(locale).format(fhirAddress.type, {
        valueSetExpansions: options?.typeValueSetExpansions,
      });

      const fullAddress = formatAddress({
        postalCountry: country,
        administrativeArea: fhirAddress.state,
        locality: fhirAddress.city,
        dependentLocality: fhirAddress.district,
        postalCode: fhirAddress.postalCode,
        addressLines: fhirAddress.line,
      });

      if (options?.preferText !== false && fhirAddress.text)
        return fhirAddress.text;

      const addressComponents = fullAddress;

      // add use and type
      if (options?.style === "extended")
        addressComponents.unshift(`${type} - ${use}`);

      // add period
      if (["full", "extended"].includes(options?.style || ""))
        addressComponents.unshift(
          `(${fhirPeriodTypeAdapter(locale).format(fhirAddress.period)})`
        );

      // add country
      if (options?.includeCountry && country) addressComponents.push(country);

      return addressComponents
        .map(removeDoubleSpaces)
        .filter(Boolean)
        .join(options?.lineSeparator || ", ");
    },
  };
}

const filterAndSortAddresses = (
  addresses: Address[],
  options: FhirAddressFormatOptions | null | undefined
): Address[] => {
  const useFilterOrder = options?.useFilterOrder || addressUseOrderFilter;
  const indexedOrder: { [k: string]: number } = useFilterOrder.reduce(
    (indexedValues, currentValue, index) => ({
      ...indexedValues,
      [currentValue || "undefined"]: index,
    }),
    {}
  );

  // filter out by use
  if (options?.useFilterOrder)
    addresses = addresses.filter((address) =>
      useFilterOrder.includes(address.use)
    );

  // sort out by period, then use
  addresses = addresses.sort((address1, address2) => {
    const periodComparisonResult = comparePeriods(address1, address2);

    if (periodComparisonResult) return periodComparisonResult;

    // then sort by use
    return (
      (indexedOrder[address1.use || "undefined"] || 0) -
      (indexedOrder[address2.use || "undefined"] || 0)
    );
  });

  if (options?.max) {
    addresses = addresses.slice(0, options.max);
  }

  return addresses;
};

const addressUseOrderFilter: Address["use"][] = [
  "home",
  "work",
  "temp",
  "old",
  "billing",
  undefined,
];
