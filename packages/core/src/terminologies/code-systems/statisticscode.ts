/**
 *
 * http://hl7.org/fhir/observation-statistics
 */
export const StatisticsCodeCodeSystem = {
  resourceType: "CodeSystem",
  id: "observation-statistics",
  meta: {
    lastUpdated: "2022-05-28T12:47:40.239+10:00",
    profile: ["http://hl7.org/fhir/StructureDefinition/shareablecodesystem"],
  },
  text: {
    status: "generated",
    div: '<div xmlns="http://www.w3.org/1999/xhtml"><p>This code system http://hl7.org/fhir/observation-statistics defines the following codes:</p><table class="codes"><tr><td style="white-space:nowrap"><b>Code</b></td><td><b>Display</b></td><td><b>Definition</b></td></tr><tr><td style="white-space:nowrap">average<a name="observation-statistics-average"> </a></td><td>Average</td><td>The [mean](https://en.wikipedia.org/wiki/Arithmetic_mean) of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">maximum<a name="observation-statistics-maximum"> </a></td><td>Maximum</td><td>The [maximum](https://en.wikipedia.org/wiki/Maximal_element) value of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">minimum<a name="observation-statistics-minimum"> </a></td><td>Minimum</td><td>The [minimum](https://en.wikipedia.org/wiki/Minimal_element) value of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">count<a name="observation-statistics-count"> </a></td><td>Count</td><td>The [number] of valid measurements over the stated period that contributed to the other statistical outputs.</td></tr><tr><td style="white-space:nowrap">total-count<a name="observation-statistics-total-count"> </a></td><td>Total Count</td><td>The total [number] of valid measurements over the stated period, including observations that were ignored because they did not contain valid result values.</td></tr><tr><td style="white-space:nowrap">median<a name="observation-statistics-median"> </a></td><td>Median</td><td>The [median](https://en.wikipedia.org/wiki/Median) of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">std-dev<a name="observation-statistics-std-dev"> </a></td><td>Standard Deviation</td><td>The [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">sum<a name="observation-statistics-sum"> </a></td><td>Sum</td><td>The [sum](https://en.wikipedia.org/wiki/Summation) of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">variance<a name="observation-statistics-variance"> </a></td><td>Variance</td><td>The [variance](https://en.wikipedia.org/wiki/Variance) of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">20-percent<a name="observation-statistics-20-percent"> </a></td><td>20th Percentile</td><td>The 20th [Percentile](https://en.wikipedia.org/wiki/Percentile) of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">80-percent<a name="observation-statistics-80-percent"> </a></td><td>80th Percentile</td><td>The 80th [Percentile](https://en.wikipedia.org/wiki/Percentile) of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">4-lower<a name="observation-statistics-4-lower"> </a></td><td>Lower Quartile</td><td>The lower [Quartile](https://en.wikipedia.org/wiki/Quartile) Boundary of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">4-upper<a name="observation-statistics-4-upper"> </a></td><td>Upper Quartile</td><td>The upper [Quartile](https://en.wikipedia.org/wiki/Quartile) Boundary of N measurements over the stated period.</td></tr><tr><td style="white-space:nowrap">4-dev<a name="observation-statistics-4-dev"> </a></td><td>Quartile Deviation</td><td>The difference between the upper and lower [Quartiles](https://en.wikipedia.org/wiki/Quartile) is called the Interquartile range. (IQR = Q3-Q1) Quartile deviation or Semi-interquartile range is one-half the difference between the first and the third quartiles.</td></tr><tr><td style="white-space:nowrap">5-1<a name="observation-statistics-5-1"> </a></td><td>1st Quintile</td><td>The lowest of four values that divide the N measurements into a frequency distribution of five classes with each containing one fifth of the total population.</td></tr><tr><td style="white-space:nowrap">5-2<a name="observation-statistics-5-2"> </a></td><td>2nd Quintile</td><td>The second of four values that divide the N measurements into a frequency distribution of five classes with each containing one fifth of the total population.</td></tr><tr><td style="white-space:nowrap">5-3<a name="observation-statistics-5-3"> </a></td><td>3rd Quintile</td><td>The third of four values that divide the N measurements into a frequency distribution of five classes with each containing one fifth of the total population.</td></tr><tr><td style="white-space:nowrap">5-4<a name="observation-statistics-5-4"> </a></td><td>4th Quintile</td><td>The fourth of four values that divide the N measurements into a frequency distribution of five classes with each containing one fifth of the total population.</td></tr><tr><td style="white-space:nowrap">skew<a name="observation-statistics-skew"> </a></td><td>Skew</td><td>Skewness is a measure of the asymmetry of the probability distribution of a real-valued random variable about its mean. The skewness value can be positive or negative, or even undefined.  Source: [Wikipedia](https://en.wikipedia.org/wiki/Skewness).</td></tr><tr><td style="white-space:nowrap">kurtosis<a name="observation-statistics-kurtosis"> </a></td><td>Kurtosis</td><td>Kurtosis  is a measure of the &quot;tailedness&quot; of the probability distribution of a real-valued random variable.   Source: [Wikipedia](https://en.wikipedia.org/wiki/Kurtosis).</td></tr><tr><td style="white-space:nowrap">regression<a name="observation-statistics-regression"> </a></td><td>Regression</td><td>Linear regression is an approach for modeling two-dimensional sample points with one independent variable and one dependent variable (conventionally, the x and y coordinates in a Cartesian coordinate system) and finds a linear function (a non-vertical straight line) that, as accurately as possible, predicts the dependent variable values as a function of the independent variables. Source: [Wikipedia](https://en.wikipedia.org/wiki/Simple_linear_regression)  This Statistic code will return both a gradient and an intercept value.</td></tr></table></div>',
  },
  extension: [
    {
      url: "http://hl7.org/fhir/StructureDefinition/structuredefinition-wg",
      valueCode: "oo",
    },
  ],
  url: "http://hl7.org/fhir/observation-statistics",
  identifier: [
    {
      system: "urn:ietf:rfc:3986",
      value: "urn:oid:2.16.840.1.113883.4.642.1.406",
    },
  ],
  version: "4.3.0",
  name: "StatisticsCode",
  status: "active",
  experimental: false,
  caseSensitive: true,
  content: "complete",
  concept: [
    {
      code: "average",
      display: "Average",
      definition:
        "The [mean](https://en.wikipedia.org/wiki/Arithmetic_mean) of N measurements over the stated period.",
    },
    {
      code: "maximum",
      display: "Maximum",
      definition:
        "The [maximum](https://en.wikipedia.org/wiki/Maximal_element) value of N measurements over the stated period.",
    },
    {
      code: "minimum",
      display: "Minimum",
      definition:
        "The [minimum](https://en.wikipedia.org/wiki/Minimal_element) value of N measurements over the stated period.",
    },
    {
      code: "count",
      display: "Count",
      definition:
        "The [number] of valid measurements over the stated period that contributed to the other statistical outputs.",
    },
    {
      code: "total-count",
      display: "Total Count",
      definition:
        "The total [number] of valid measurements over the stated period, including observations that were ignored because they did not contain valid result values.",
    },
    {
      code: "median",
      display: "Median",
      definition:
        "The [median](https://en.wikipedia.org/wiki/Median) of N measurements over the stated period.",
    },
    {
      code: "std-dev",
      display: "Standard Deviation",
      definition:
        "The [standard deviation](https://en.wikipedia.org/wiki/Standard_deviation) of N measurements over the stated period.",
    },
    {
      code: "sum",
      display: "Sum",
      definition:
        "The [sum](https://en.wikipedia.org/wiki/Summation) of N measurements over the stated period.",
    },
    {
      code: "variance",
      display: "Variance",
      definition:
        "The [variance](https://en.wikipedia.org/wiki/Variance) of N measurements over the stated period.",
    },
    {
      code: "20-percent",
      display: "20th Percentile",
      definition:
        "The 20th [Percentile](https://en.wikipedia.org/wiki/Percentile) of N measurements over the stated period.",
    },
    {
      code: "80-percent",
      display: "80th Percentile",
      definition:
        "The 80th [Percentile](https://en.wikipedia.org/wiki/Percentile) of N measurements over the stated period.",
    },
    {
      code: "4-lower",
      display: "Lower Quartile",
      definition:
        "The lower [Quartile](https://en.wikipedia.org/wiki/Quartile) Boundary of N measurements over the stated period.",
    },
    {
      code: "4-upper",
      display: "Upper Quartile",
      definition:
        "The upper [Quartile](https://en.wikipedia.org/wiki/Quartile) Boundary of N measurements over the stated period.",
    },
    {
      code: "4-dev",
      display: "Quartile Deviation",
      definition:
        "The difference between the upper and lower [Quartiles](https://en.wikipedia.org/wiki/Quartile) is called the Interquartile range. (IQR = Q3-Q1) Quartile deviation or Semi-interquartile range is one-half the difference between the first and the third quartiles.",
    },
    {
      code: "5-1",
      display: "1st Quintile",
      definition:
        "The lowest of four values that divide the N measurements into a frequency distribution of five classes with each containing one fifth of the total population.",
    },
    {
      code: "5-2",
      display: "2nd Quintile",
      definition:
        "The second of four values that divide the N measurements into a frequency distribution of five classes with each containing one fifth of the total population.",
    },
    {
      code: "5-3",
      display: "3rd Quintile",
      definition:
        "The third of four values that divide the N measurements into a frequency distribution of five classes with each containing one fifth of the total population.",
    },
    {
      code: "5-4",
      display: "4th Quintile",
      definition:
        "The fourth of four values that divide the N measurements into a frequency distribution of five classes with each containing one fifth of the total population.",
    },
    {
      code: "skew",
      display: "Skew",
      definition:
        "Skewness is a measure of the asymmetry of the probability distribution of a real-valued random variable about its mean. The skewness value can be positive or negative, or even undefined.  Source: [Wikipedia](https://en.wikipedia.org/wiki/Skewness).",
    },
    {
      code: "kurtosis",
      display: "Kurtosis",
      definition:
        'Kurtosis  is a measure of the "tailedness" of the probability distribution of a real-valued random variable.   Source: [Wikipedia](https://en.wikipedia.org/wiki/Kurtosis).',
    },
    {
      code: "regression",
      display: "Regression",
      definition:
        "Linear regression is an approach for modeling two-dimensional sample points with one independent variable and one dependent variable (conventionally, the x and y coordinates in a Cartesian coordinate system) and finds a linear function (a non-vertical straight line) that, as accurately as possible, predicts the dependent variable values as a function of the independent variables. Source: [Wikipedia](https://en.wikipedia.org/wiki/Simple_linear_regression)  This Statistic code will return both a gradient and an intercept value.",
    },
  ],
};
