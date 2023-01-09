---
sidebar_position: 2
---

# Code generation

The [FHIR standard](https://hl7.org/fhir/index.html) is formally specified [in an implementation guide](https://hl7.org/fhir/downloads.html).

There is an opportunity to use these formal specifications to generate code for implementation.
This is the strategy chosen for a number of Bonfhir packages.

The FHIR Definition files (as JSON) are stored in the [`/fhir`](https://github.com/bonfhir/bonfhir/tree/main/fhir) folder, by their respective versions.

The `codegen` package provides a utility that can assist in generating code based on the FHIR definition files.

While the best to understand how code generation work is to inspect how some of the Bonfhir packages are built (e.g. the [`core package`](https://github.com/bonfhir/bonfhir/tree/main/packages/core), here is a quick guide to get started:

- each target package can contain one or more template files (usually using the `.hbs` extension)
- templates use the [handlebars](https://handlebarsjs.com/) templating language, with additional [helpers](#template-helpers) provided
- FHIR definition files can be loaded as the context to run the templates and generate source code

The codegen CLI orchestrate the process by roughly executing [the following steps](https://github.com/bonfhir/bonfhir/blob/8c927f5469dd570fe55f9cdb86dad230403d204d/packages/codegen/src/commands/run/index.ts#L38):

- load data files (usually FHIR definitions, but it can be any JSON file really) as the template evaluation context
- load custom javascript helpers (in the form of a Javascript file) that gets injected in the template context as well
- scan the target package for template files to execute
- render the template files one by one; template may render additional files by using the [`writeFiles`](#writefiles) helper
  - by default, the target file name for the generated file is the template name minus the extension (e.g. `index.ts.hbs` -> `index.ts`)
- execute any post-processing task on the generated files, such as running Prettier to format the code properly for example

And this is all that's needed to generate code using FHIR specifications. You can find many examples throughout the Bonfhir codebase - look for `.hbs` files.

## Using it in your own projects and packages

It is possible to independently use the `codegen` package in your own projects.

Here is how to get started:

1. Install the package as a development dependency

```bash npm2yarn
npm install --save-dev @bonfhir/codegen
```

2. Download FHIR definition files from https://hl7.org/fhir/downloads.html

   - We recommend using the [JSON FHIR Definitions](https://hl7.org/fhir/definitions.json.zip) as they are easier to work with generally.
   - If needed, you may also want to use [ValueSet expansions](https://hl7.org/fhir/expansions.json) as well
   - Any additional custom [FHIR Profile](https://hl7.org/fhir/profiling.html) may also be used

3. Author your templates using the [handlebars](https://handlebarsjs.com/guide/) syntax; you can leverage the [built-in codegen helpers](#template-helpers), and add you own helpers in a javascript file as well.

4. Run the code generation:

```bash npm2yarn
npm run bonfhir-codegen run --data-json "<path to FHIR specification files>/**/*.json" --templates "<path to your project files>/**/*.hbs" --helpers "./<path to your custom helpers file if any>.js" --post-processing "prettier --write %files%"
```

## Template helpers

The codegen package injects custom helpers to simplify authorship of templates:

- All the [Built-in Handlebar Helpers](https://handlebarsjs.com/guide/builtin-helpers.html)
- All the helpers provided by the [handlebars-helpers](https://github.com/helpers/handlebars-helpers) package
- The following [Lodash](https://lodash.com/) functions:
  - [startCase](https://lodash.com/docs/4.17.15#startCase)
  - [uniq](https://lodash.com/docs/4.17.15#uniq)
  - [uniqBy](https://lodash.com/docs/4.17.15#uniqBy)

The `codegen` package also provides some additional helpers - [the exhaustive list to be found in the source code](https://github.com/bonfhir/bonfhir/tree/main/packages/codegen/src/commands/run/helpers).

Some notable helpers:

### `elementImmediatePath`

Return the immediate path for a FHIR [Element Definition](https://hl7.org/fhir/elementdefinition.html#ElementDefinition) path property.

### `fhirPath`

Returns the result of evaluating a [FHIRPath](http://hl7.org/fhirpath/N1/) against a resource.

Example, to list all the Domain Resources listed in the FHIR Definition file named "profiles-resources.json":

```handlebars
{{#each
  (fhirPath
    data.profiles-resources
    "Bundle.entry.select(resource).ofType(StructureDefinition).where(baseDefinition='http://hl7.org/fhir/StructureDefinition/DomainResource' and abstract=false)"
  )
}}
  import type {
  {{type}}
  } from "fhir/r4";
{{/each}}
```

The helper contains also [a list of useful aliases](https://github.com/bonfhir/bonfhir/blob/main/packages/codegen/src/commands/run/helpers/fhirPath.ts#L3) to common FHIR Path requests.
Here is how the example can also be written:

```handlebars
{{#each (fhirPath data.profiles-resources "Bundle/DomainResources")}}
  import type {
  {{type}}
  } from "fhir/r4";
{{/each}}
```

### `in/notIn`

Filter if it is / it is not in a list of values.

```handlebars
{{#each (fhirPath data.profiles-resources "Bundle/DomainResources")}}
  {{#if (in name "Account,Patient")}}
    ...
  {{/if}}
{{/each}}
```

### `readLines`

Load text file and return an array with each line as a string. Ignores empty lines.
Load path is relative to the template file.

```handlebars
{{#if (in name (readLines "namesToKeep.txt"))}}
  ...
{{/if}}
```

### `recursiveFlatten`

Depth-first recursive exploration of an array using a single attribute.

### `safeNameAsVar`

Returns a string that can safely be used as a Typescript variable name

```handlebars
{{#safeNameAsVar "12 ab"}} -> "twelveab"
```

### `valueSetExpansions`

[Expand](https://hl7.org/fhir/valueset.html#expansion) a `ValueSet` using FHIR definition files.

_Implementation is currently limited and do not support advanced filtering capabilities.
It is only here to support codegen on the [Terminology package](/packages/foundation/terminology)_

### `writeFiles`

Allows rendering the content in a different file than the root of the template file.
The filename itself is also a template, which means it can be used in a loop.

Example to write one file per domain resource, each with a class with the name of the resource:

```handlebars
{{#each (fhirPath data.profiles-resources "Bundle/DomainResources")}}
  {{#writeFile "{{type}}.ts"}}
    class
    {{type}}
    {}
  {{/writeFile}}
{{/each}}
```
