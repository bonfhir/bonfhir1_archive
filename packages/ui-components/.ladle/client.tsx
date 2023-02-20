import { FhirRestfulClient } from "@bonfhir/core/r4b";
import { ValueSet } from "fhir/r4";

export const staticFhirClient = {
  execute(operation, options) {
    if (
      operation === "$expand" &&
      options?.type === "ValueSet" &&
      options?.parameters?.url === "http://hl7.org/fhir/ValueSet/marital-status"
    ) {
      return {
        url: "http://hl7.org/fhir/ValueSet/marital-status",
        expansion: {
          contains: [
            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "A",
              display: "Annulled",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "D",
              display: "Divorced",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "I",
              display: "Interlocutory",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "L",
              display: "Legally Separated",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "M",
              display: "Married",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "C",
              display: "Common Law",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "P",
              display: "Polygamous",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "T",
              display: "Domestic partner",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "U",
              display: "unmarried",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "S",
              display: "Never Married",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-MaritalStatus",
              code: "W",
              display: "Widowed",
            },

            {
              system: "http://terminology.hl7.org/CodeSystem/v3-NullFlavor",
              code: "UNK",
              display: "unknown",
            },
          ],
        },
      } as ValueSet;
    }
  },
} as unknown as FhirRestfulClient;
