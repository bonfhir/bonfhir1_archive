export function getCodeSystems(data) {
  const allCodeSystems = Object.values(data).filter(
    (x) => x.resourceType === "CodeSystem"
  );

  // uniqBy name
  return allCodeSystems.filter(
    (x, i, self) => i === self.findIndex((y) => x.name === y.name)
  );
}
