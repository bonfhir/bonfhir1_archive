export interface Config {
  definitions: string;
  templates: string;
}

export interface Context {
  config: Config;
  definitions: Record<string, unknown>;
  templates: string[];
  writtenFiles: string[];
}
