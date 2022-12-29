export interface Config {
  dataJson: string;
  templates: string;
  postProcessing: string[];
}

export interface Context {
  config: Config;
  data: Record<string, unknown>;
  templates: string[];
  writtenFiles: string[];
}
