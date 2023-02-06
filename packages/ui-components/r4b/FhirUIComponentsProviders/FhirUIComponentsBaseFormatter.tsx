import { FhirUIComponentsFormatter } from "@bonfhir/ui-components/r4b";
import { compact } from "lodash";

/**
 *
 * @returns a basic formatter that defaults to en-US formatted data
 */
export const FhirUIComponentsBaseFormatter =
  (
    // fhirLanguageCode: FhirLanguageCode,
  ):
  FhirUIComponentsFormatter => {
    return {
      formatDate: (date) => {
        // TODO: separator and order dependent of the language code
        const separator = "/";
        const orderedParts = compact([date.month, date.day, date.year]);

        const formattedDate = orderedParts.join(separator);

        return formattedDate;
      },
    };
  };
