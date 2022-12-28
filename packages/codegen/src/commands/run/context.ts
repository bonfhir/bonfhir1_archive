export interface Config {
  definitions: string;
  templates: string;
  postProcessing: string[];
}

export interface Context {
  config: Config;
  definitions: Record<string, unknown>;
  templates: string[];
  writtenFiles: string[];
}
