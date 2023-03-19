import { buildCodeableConcept } from "@bonfhir/core/r4b";
import { CodeSystemURIs } from "@bonfhir/terminology/r4b";
import { CodeableConcept, Coding } from "fhir/r4";
import { createReadStream } from "node:fs";
import { createInterface } from "node:readline";

export interface ICD10CodesBuilderOptions {
  /**
   * The path to the source file containing the ICD10 codes and descriptions.
   * The file can be downloaded at https://www.cms.gov/Medicare/Coding/ICD10
   */
  sourceFilePath: string;

  /**
   * The version of the data file, most probably the year.
   * Will be included in the coding if provided.
   */
  version?: string | null | undefined;

  /**
   * The coding system to use. Defaults to http://hl7.org/fhir/sid/icd-10-cm.
   */
  system?: string | null | undefined;
}

/**
 * Parses a file from CMS.gov that contains ICD10 codes and description,
 * and allows building `Coding` & `CodeableConcept` from these.
 */
export class ICD10CodesBuilder {
  private _descriptionsByCode = new Map<string, string>();

  constructor(private options: ICD10CodesBuilderOptions) {}

  /**
   * Return true if the code is listed in the source file.
   */
  public async isICD10Code(code: string): Promise<boolean> {
    await this.ensureDataLoaded();

    return this._descriptionsByCode.has(code);
  }

  /**
   * Get a `Coding` from an ICD10 code. If the code is not in the initial file,
   * the display will be missing.
   */
  public async coding(code: string): Promise<Coding> {
    await this.ensureDataLoaded();

    return {
      system: this.options.system || CodeSystemURIs.Icd10CM,
      code,
      display: this._descriptionsByCode.get(code),
      version: this._descriptionsByCode.get(code)
        ? this.options.version || undefined
        : undefined,
    };
  }

  /**
   * Get a `CodeableConcept` from an ICD10 code. If the code is not in the initial file,
   * the display / text will be missing.
   */
  public async codeableConcept(code: string): Promise<CodeableConcept> {
    return buildCodeableConcept({ coding: [await this.coding(code)] });
  }

  private async ensureDataLoaded() {
    if (this._descriptionsByCode.size) {
      return;
    }

    for await (const line of createInterface({
      input: createReadStream(this.options.sourceFilePath),
      crlfDelay: Infinity,
    })) {
      const splittedLine = line.split(/\s+/);
      if (splittedLine[0]) {
        this._descriptionsByCode.set(
          splittedLine[0].toUpperCase(),
          splittedLine.slice(1).join(" ")
        );
      }
    }
  }
}
