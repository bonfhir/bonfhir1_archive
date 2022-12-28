import { Bundle } from "fhir/r4";

export interface Config {
  definitions: string;
  templates: string;
}

export interface Context {
  config: Config;
  definitions: Map<string, Bundle>;
  templates: string[];
  writtenFiles: string[];
}
