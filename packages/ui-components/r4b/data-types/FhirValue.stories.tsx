import { FhirValue } from "./FhirValue";

export const Date = () => <FhirValue type="date" value="2023-01-01" />;

export const DateFull = () => (
  <FhirValue type="date" value="2023-01-01" options={{ dateStyle: "full" }} />
);

export const Integer = () => <FhirValue type="integer" value={123456789} />;

export const IntegerScientific = () => (
  <FhirValue
    type="integer"
    value={123456789}
    options={{ notation: "scientific" }}
  />
);

export const IntegerCompactLong = () => (
  <FhirValue
    type="integer"
    value={123456789}
    options={{ notation: "compact-long" }}
  />
);

export const Decimal = () => <FhirValue type="decimal" value={"12.00"} />;
