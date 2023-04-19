/**
 * This module exists as an alternative entry-point to be able to directly reference the core library
 * in a global import context, such as a browser.
 * This enables usage in third-party tools such as no-code tools.
 */

import * as builders from "./builders";
import * as bundleNavigator from "./bundle-navigator";
import * as dataTypeAdapter from "./data-type-adapter";
import * as date from "./date";
import * as fhirRestfulClient from "./fhir-restful-client";
import * as merge from "./merge";
import * as narratives from "./narratives";
import * as operationsParameters from "./operations-parameters";
import * as periodCalculator from "./period-calculator";
import * as resourcePatch from "./resource-patch";
import * as resourceSearch from "./resource-search";
import * as searchBuilder from "./search-builder";
import * as types from "./types";
import * as utils from "./utils";

const bonfhirGlobals = {
  ...builders,
  ...bundleNavigator,
  ...dataTypeAdapter,
  ...date,
  ...fhirRestfulClient,
  ...merge,
  ...narratives,
  ...operationsParameters,
  ...periodCalculator,
  ...resourcePatch,
  ...resourceSearch,
  ...searchBuilder,
  ...types,
  ...utils,
} as const;

declare global {
  // eslint-disable-next-line no-var
  var bonfhir: typeof bonfhirGlobals;
}

globalThis.bonfhir = bonfhirGlobals;
