import { Bundle } from "fhir/r4";

export interface Config {
  definitions: string;
}

export interface Context {
  config: Config;
  definitions: FHIRDefinitions;
}

export type FHIRDefinitions = Map<string, Bundle>;
