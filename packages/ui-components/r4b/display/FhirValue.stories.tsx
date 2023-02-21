import { FhirValue } from "./FhirValue";

export const CodeSimple = () => <FhirValue type="code" value="C" />;

export const CodeWithExpand = () => (
  <FhirValue
    type="code"
    value="C"
    options={{
      valueSetExpand: { url: "http://hl7.org/fhir/ValueSet/marital-status" },
    }}
  />
);

export const Coding = () => (
  <FhirValue
    type="coding"
    value={{
      code: "ADMIN",
      display: "Administrative",
      system: "http://hl7.org/fhir/ValueSet/contactentity-type",
    }}
  />
);

export const CodeableConcept = () => (
  <FhirValue
    type="codeableConcept"
    value={{
      coding: [
        {
          code: "ADMIN",
          display: "Administrative",
          system: "http://hl7.org/fhir/ValueSet/contactentity-type",
        },
      ],
      text: "Administrative",
    }}
  />
);

export const Boolean = () => <FhirValue type="boolean" value={false} />;

export const BooleanWithLabel = () => (
  <FhirValue
    type="boolean"
    value={true}
    options={{ labels: { true: "Yes", false: "No" } }}
  />
);

export const Date = () => <FhirValue type="date" value="2023-01-01" />;

export const DateFull = () => (
  <FhirValue type="date" value="2023-01-01" options={{ dateStyle: "full" }} />
);

export const Datetime = () => (
  <FhirValue type="dateTime" value="2023-02-01T01:57:25.336Z" />
);

export const DatetimeFull = () => (
  <FhirValue
    type="dateTime"
    value="2023-02-01T01:57:25.336Z"
    options={{ dateStyle: "full", timeStyle: "full" }}
  />
);

export const Instant = () => (
  <FhirValue type="instant" value="2023-02-01T01:57:25.336Z" />
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

export const Uri = () => <FhirValue type="uri" value="https://bonfhir.dev" />;

export const Url = () => <FhirValue type="url" value="https://bonfhir.dev" />;

export const Canonical = () => (
  <FhirValue type="canonical" value="https://bonfhir.dev" />
);

export const Markdown = () => (
  <FhirValue
    type="markdown"
    value={markdownSample}
    options={{ style: "html" }}
  />
);

export const Money = () => (
  <FhirValue type="money" value={{ value: 50, currency: "USD" }} />
);

export const Period = () => (
  <FhirValue type="period" value={{ start: "2023-01-01", end: "2023-03-20" }} />
);

export const Quantity = () => (
  <FhirValue
    type="quantity"
    value={{ comparator: ">", value: 12, unit: "mg" }}
  />
);

export const Range = () => (
  <FhirValue
    type="range"
    value={{ low: { value: 12, unit: "mg" }, high: { value: 50, unit: "mg" } }}
  />
);

export const Ratio = () => (
  <FhirValue
    type="ratio"
    value={{ numerator: { value: 5 }, denominator: { value: 12 } }}
  />
);

export const RatioRange = () => (
  <FhirValue
    type="ratioRange"
    value={{
      lowNumerator: { value: 5 },
      highNumerator: { value: 8 },
      denominator: { value: 12 },
    }}
  />
);

export const SimpleQuantity = () => (
  <FhirValue
    type="simpleQuantity"
    value={{ value: 15, unit: "l", operator: null }}
  />
);

export const Age = () => (
  <FhirValue type="age" value={{ value: 25, code: "y" }} />
);

export const Count = () => (
  <FhirValue type="count" value={{ value: 25, code: "cats" }} />
);

export const Distance = () => (
  <FhirValue type="count" value={{ value: 25, code: "km" }} />
);

export const Duration = () => (
  <FhirValue type="count" value={{ value: 25, code: "min." }} />
);

const markdownSample = `
An h1 header
============

Paragraphs are separated by a blank line.

2nd paragraph. *Italic*, **bold**, and \`monospace\`. Itemized lists
look like:

  * this one
  * that one
  * the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
Unicode is supported. ☺
`;
