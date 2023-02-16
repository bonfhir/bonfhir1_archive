/**
 * Renders partial search arguments to re-expose to resource searches.
 *
 * @see `search-builder.ts`
 */
export function searchArgs(searchParameterType) {
  switch (searchParameterType) {
    case "date":
      return "value: Date | string | Array<Date | string> | null | undefined, prefix?: Prefix | null | undefined";
    case "number":
      return "value: number | string | Array<number | string> | null | undefined, prefix?: Prefix | null | undefined";
    case "quantity":
      return `number:
      | number
      | string
      | {
          number: number | string | null | undefined;
          system?: string | null | undefined;
          code?: string | null | undefined;
        }
      | Array<
          | number
          | string
          | {
              number: number | string | null | undefined;
              system?: string | null | undefined;
              code?: string | null | undefined;
            }
        >
      | null
      | undefined,
    prefix?: Prefix | null | undefined`;
    case "reference":
      return `id:
      | { id: string; type: string }
      | {
          system?: string | null | undefined;
          code?: string | null | undefined;
          value?: string | null | undefined;
        }
      | string
      | Array<
          | { id: string; type: string }
          | {
              system?: string | null | undefined;
              code?: string | null | undefined;
              value?: string | null | undefined;
            }
          | string
        >
      | null
      | undefined,
    modifier?: ":identifier" | ResourceType | null | undefined`;
    case "string":
      return "value: string | string[] | null | undefined, modifier?: StringModifier | null | undefined";
    case "token":
      return `value:
      | {
          system?: string | null | undefined;
          code?: string | null | undefined;
          value?: string | null | undefined;
        }
      | string
      | Array<
          | {
              system?: string | null | undefined;
              code?: string | null | undefined;
              value?: string | null | undefined;
            }
          | string
        >
      | null
      | undefined,
    modifier?: TokenModifier | null | undefined`;
    case "uri":
      return "value: string | URL | Array<string | URL> | null | undefined, modifier?: UriModifier | null | undefined";
    default:
      throw new Error(`Unknown search parameter type ${searchParameterType}.`);
  }
}

/**
 * Renders partial search arguments to invoke the underlying search builder instance..
 *
 * @see `search-builder.ts`
 */
export function searchArgsInvoke(searchParameterType) {
  switch (searchParameterType) {
    case "date":
      return "value, prefix";
    case "number":
      return "value, prefix";
    case "quantity":
      return "number, prefix";
    case "reference":
      return "id, modifier";
    case "string":
      return "value, modifier";
    case "token":
      return "value, modifier";
    case "uri":
      return "value, modifier";
    default:
      throw new Error(`Unknown search parameter type ${searchParameterType}.`);
  }
}

/** @type (parameter: import("fhir/r4").OperationDefinitionParameter) => string */
export function operationParameter(parameter) {
  let value = `"${parameter.name}"`;

  if (parameter.min === 0) {
    value += "?";
  }

  value += ": ";

  switch (parameter.type) {
    case "canonical":
    case "code":
    case "date":
    case "dateTime":
    case "id":
    case "instant":
    case "uri":
    case "url":
      value += "string";
      break;
    case "decimal":
    case "integer":
    case "positiveInt":
      value += "number";
      break;
    default:
      value += parameter.type;
  }

  if (parameter.max === "*") {
    value += "[]";
  }

  if (parameter.min === 0) {
    value += " | null | undefined";
  }

  value += ";";

  return value;
}

export function hasParameters(definition, use) {
  return definition.parameter.some((x) => x.use === use);
}

export function onlyHasOutReturn(definition) {
  const allOutParameters = definition.parameter.filter((x) => x.use === "out");
  return allOutParameters.length === 1 && allOutParameters[0].name === "return";
}
