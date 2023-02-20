import { Address } from "fhir/r4";
import { formatAddress } from "localized-address-format";
import _ from "lodash";
import { FhirDataTypeAdapter } from "../data-type-adapter";
import { FhirCodeFormatOptions, fhirCodeTypeAdapter } from "./code";
import { fhirDateTimeTypeAdapter } from "./dateTime";
import { removeDoubleSpaces } from "./helpers";
import { fhirPeriodTypeAdapter } from "./period";

/**
 * An address expressed using postal conventions
 *
 * @see https://hl7.org/fhir/datatypes.html#address
 */

export type FhirAddressFormatOptions = {
  style?: "text" | "full" | "extended" | null | undefined;
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
  ): string[] | string;
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

      if (Array.isArray(fhirAddress))
        return sortAddresses(fhirAddress).map(
          (address) => this.format(address, options) as string
        );

      const use = fhirCodeTypeAdapter(locale).format(fhirAddress.use, {
        valueSetExpansions: options?.useValueSetExpansions,
      });
      const type = fhirCodeTypeAdapter(locale).format(fhirAddress.type, {
        valueSetExpansions: options?.typeValueSetExpansions,
      });

      const fullAddress = formatAddress({
        postalCountry: fhirAddress.country,
        administrativeArea: fhirAddress.state,
        locality: fhirAddress.city,
        dependentLocality: fhirAddress.district,
        postalCode: fhirAddress.postalCode,
        addressLines: fhirAddress.line,
      });

      switch (options?.style) {
        case null:
        case undefined:
        case "text":
          return fhirAddress.text || "";
        case "full":
          return fullAddress.join("\n");
        case "extended":
          return removeDoubleSpaces(
            _.compact([
              `(${fhirPeriodTypeAdapter(locale).format(fhirAddress.period)})`,
              `${type} - ${use}`,
              ...fullAddress,
              fhirAddress.country,
            ]).join("\n")
          );
        default:
          throw new Error(`Unknown style option ${options?.style}`);
      }
    },
  };
}

const sortAddresses = (addresses: Address[]): Address[] => {
  return addresses.sort((address1, address2) => {
    const address1EndDate = dateTimeAdapter.parse(address1?.period?.end);
    const address2EndDate = dateTimeAdapter.parse(address2?.period?.end);

    // sort by period
    if (!address1EndDate && address2EndDate) return -1;
    if (!address2EndDate && address1EndDate) return 1;
    if (address1EndDate && address2EndDate) {
      if (address1EndDate.date > address2EndDate.date) return -1;
      if (address2EndDate.date > address1EndDate.date) return 1;
    }

    // then sort by use
    if (address1.use && !address2.use) return -1;
    if (address2.use && !address1.use) return 1;
    if (address2.use && address1.use)
      return addressUseOrder[address1.use] - addressUseOrder[address2.use];

    return 0;
  });
};

const dateTimeAdapter = fhirDateTimeTypeAdapter();
const addressUseOrder = {
  home: 0,
  work: 1,
  temp: 2,
  old: 3,
  billing: 4,
};
