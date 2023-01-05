---
sidebar_position: 2
---

# Project orientations

## Scope

Although this is still work in progress and may evolve overtime, currently Bonfhir aim to cover the following aspects of FHIR contributions:

- helper libraries to manipulate FHIR resources, both in frontend and backend contexts
- re-usable UI components and libraries to assemble frontend web & mobile applications
- integrations with other actors in the health ecosystem, whether they are open-source, private or official institutions

**We want to accelerate the building of divers, custom solutions in the health care industry using the FHIR standard.**

**We do not aim to provide ready-made, turnkey solutions; you will need technical expertise to leverage these components.
As such, our target audience are developers and technical people, not clinicians.**

We also currently do not plan to provide any _FHIR Server_ implementation; there are already several actors in the market that provide
good solutions. We want to complement their offering, not compete with them.

## Technical orientations

We chose [Typescript](https://www.typescriptlang.org/) as our main implementation language.

The reasons for this are:

- a popular language, known by a large number of people - a [TIOBE top tier language](https://www.tiobe.com/products/tics-fact-sheet/);
- a universal runtime, that runs in browsers, mobile apps, command-line tools, backend servers, and can easily be embedded anywhere;
- a vibrant ecosystem around the language; code formatters, linters, testing and coverage tooling, quality/security checking tools, package managers, etc.
- a sound and elaborate type system, able to represent the complexity of the [FHIR specification](https://hl7.org/fhir/documentation.html), while preserving ease of use;
- relatively easy to generate code source, which [we make heavy usage of](/contributing/codegen).
