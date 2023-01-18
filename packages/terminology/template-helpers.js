import _ from "lodash";

export function getCodeSystems(data) {
  return _.uniqBy(
    Object.values(data).filter((x) => x.resourceType === "CodeSystem"),
    "name"
  );
}
