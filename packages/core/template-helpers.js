/**
 * Renders partial search arguments to re-expose to resource searches.
 *
 * @see `search-builder.ts`
 */
export function searchArgs(searchParameterType) {
  switch (searchParameterType) {
    case "date":
      return `value: Parameters<FhirSearchBuilder["date"]>[1], prefix?: Prefix | null | undefined`;
    case "number":
      return `value: Parameters<FhirSearchBuilder["number"]>[1], prefix?: Prefix | null | undefined`;
    case "quantity":
      return `number: Parameters<FhirSearchBuilder["quantity"]>[1], prefix?: Prefix | null | undefined`;
    case "reference":
      return `id: Parameters<FhirSearchBuilder["reference"]>[1], modifier?: ":identifier" | ResourceType | null | undefined`;
    case "string":
      return `value: Parameters<FhirSearchBuilder["string"]>[1], modifier?: StringModifier | null | undefined`;
    case "token":
      return `value: Parameters<FhirSearchBuilder["token"]>[1], modifier?: TokenModifier | null | undefined`;
    case "uri":
      return `value: Parameters<FhirSearchBuilder["uri"]>[1], modifier?: UriModifier | null | undefined`;
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

/**
 * If type is an object and has a targetProfile attribute, removes it.
 * This is done to cut down on the narrative file size significantly.
 */
export function stripTargetProfile(type) {
  if (typeof type !== "object") {
    return type;
  }

  delete type.targetProfile;

  return type;
}

export function jsType(type, attributePath, parentType) {
  if (!type?.[0]?.code) {
    return "any";
  }

  switch (type[0].code) {
    case "code":
      if (typeof attributePath !== "string") {
        return "string";
      }

      if (attributePath.split(".").length > 2) {
        return "string";
      }

      if (!attributePath.split(".").at(-1) || !parentType) {
        return "string";
      }

      return `${parentType}["${attributePath.split(".").at(-1)}"]`;
    case "base64Binary":
    case "canonical":
    case "http://hl7.org/fhirpath/System.String":
    case "dateTime":
    case "date":
    case "id":
    case "instant":
    case "markdown":
    case "time":
    case "uri":
    case "url":
      return "string";
    case "decimal":
    case "integer":
    case "positiveInt":
    case "unsignedInt":
      return "number";
    default:
      return type[0].code;
  }
}
