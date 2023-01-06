const RandomMappings = {
  "": {
    "": {
      Address: "fakeAddress()",
      boolean: "randBoolean()",
      code: "randText()",
      ContactPoint: "fakeContactPoint()",
      date: "randRecentDate().toISOString().slice(0, 10)",
      dateTime: "randRecentDate().toISOString()",
      HumanName: "fakeHumanName()",
      id: "randText()",
      instant: "randRecentDate().toISOString()",
      integer: "randNumber()",
      markdown: "randParagraph()",
      string: "randText()",
      uri: "randUrl()",
      url: "randUrl()",
    },
    id: {
      "http://hl7.org/fhirpath/System.String": "randUuid()",
    },
    identifier: {
      Identifier: "fakeIdentifier(randAlpha())",
    },
    url: {
      string: "randUrl()",
    },
  },
  AuditEvent: {
    source: {
      BackboneElement: "{ observer: {} }",
    },
  },
  Ingredient: {
    substance: {
      BackboneElement: "{ code: buildCodeableConcept({}) }",
    },
  },
  MessageHeader: {
    source: {
      BackboneElement: "{ endpoint: randUrl() }",
    },
  },
  Organization: {
    identifier: {
      Identifier: `fakeIdentifier("http://hl7.org/fhir/sid/us-npi")`,
    },
    name: {
      string: "randCompanyName()",
    },
  },
  Patient: {
    identifier: {
      Identifier: `fakeIdentifier("http://hl7.org/fhir/sid/us-ssn")`,
    },
  },
  Practitioner: {
    identifier: {
      Identifier: `fakeIdentifier("http://hl7.org/fhir/sid/us-npi")`,
    },
  },
  Subscription: {
    channel: {
      BackboneElement: `{ type: rand(["rest-hook", "websocket", "email", "sms", "message"]) }`,
    },
  },
};

/**
 * Return the most appropriate random function to use.
 */
/** @type {(element: import('fhir/r4').ElementDefinition, expansions: import('fhir/r4').Bundle<import('fhir/r4').ValueSet | import('fhir/r4').CodeSystem>) => string} */
export function randomFunction(element, valuesets) {
  const splittedPath = element.path.split(".");

  const resourceType = splittedPath[0];
  const attributeName = splittedPath[1];
  const typeCode = element.type?.[0]?.code;

  const valuesetUrl = element.binding?.valueSet?.split("|")[0];
  if (valuesetUrl) {
    const valueSet = valuesets.entry?.find(
      (x) =>
        x?.resource?.url === valuesetUrl &&
        !!x.resource?.compose?.include?.[0].system
    );
    if (valueSet) {
      let codes = valueSet?.resource?.compose?.include?.[0].concept?.map(
        (x) => x.code
      );
      if (!codes?.length) {
        if (valueSet?.resource?.compose?.include?.[0]?.system) {
          const codeSystem = valuesets.entry?.find(
            (x) =>
              x?.resource?.url === valueSet.resource.compose.include[0].system
          );
          if (codeSystem) {
            codes = codeSystem.resource?.concept?.map((x) => x.code);
          }
        }
      }

      if (codes?.length) {
        if (typeCode === "code") {
          return element.max === "*"
            ? `[rand([${codes.map((x) => `"${x}"`).join(", ")}])]`
            : `rand([${codes.map((x) => `"${x}"`).join(", ")}])`;
        }
        if (typeCode === "Coding") {
          if (element.max === "*") {
            return `[{
              system: "${valueSet?.resource?.compose?.include?.[0]?.system}",
              code: rand([${codes.map((x) => `"${x}"`).join(", ")}])
            }]`;
          } else {
            return `{
              system: "${valueSet?.resource?.compose?.include?.[0]?.system}",
              code: rand([${codes.map((x) => `"${x}"`).join(", ")}])
            }`;
          }
        }
        if (typeCode === "CodeableConcept") {
          if (element.max === "*") {
            return `[{
              coding: [{
                system: "${valueSet?.resource?.compose?.include?.[0]?.system}",
                code: rand([${codes.map((x) => `"${x}"`).join(", ")}])
              }],
            }]`;
          } else {
            return `{
              coding: [{
                system: "${valueSet?.resource?.compose?.include?.[0]?.system}",
                code: rand([${codes.map((x) => `"${x}"`).join(", ")}])
              }],
            }`;
          }
        }
      }
    }
  }

  if (typeCode === "Reference" && element.min === 1) {
    const possibleResource = element.type?.[0]?.targetProfile?.[0];
    if (possibleResource) {
      return element.max === "*"
        ? `[{
        reference: \`${possibleResource.split("/").pop()}/\${randUuid()}\`,
      }]`
        : `{
        reference: \`${possibleResource.split("/").pop()}/\${randUuid()}\`,
      }`;
    }
  }

  if (typeCode === "canonical" && element.min === 1) {
    const possibleResource = element.type?.[0]?.targetProfile?.[0];
    if (possibleResource) {
      return element.max === "*"
        ? `[\`${possibleResource.split("/").pop()}/\${randUuid()}\`]`
        : `\`${possibleResource.split("/").pop()}/\${randUuid()}\``;
    }
  }

  if (RandomMappings[resourceType]?.[attributeName]?.[typeCode]) {
    return element.max === "*"
      ? `[${RandomMappings[resourceType][attributeName][typeCode]}]`
      : RandomMappings[resourceType][attributeName][typeCode];
  }

  if (RandomMappings[""]?.[attributeName]?.[typeCode]) {
    return element.max === "*"
      ? `[${RandomMappings[""][attributeName][typeCode]}]`
      : RandomMappings[""][attributeName][typeCode];
  }

  if (RandomMappings[""]?.[""]?.[typeCode]) {
    return element.max === "*"
      ? `[${RandomMappings[""][""][typeCode]}]`
      : RandomMappings[""][""][typeCode];
  }

  if (element.min === 1) {
    // This is our last chance to make something wth meaningful type.
    return element.max === "*" ? "[]" : "{}";
  }

  return "undefined";
}
