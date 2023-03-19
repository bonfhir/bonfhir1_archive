import { buildCodeableConcept } from "@bonfhir/core/r4b";
import { CodeSystemURIs } from "@bonfhir/terminology/r4b";
import { parse } from "csv-parse";
import { CodeableConcept, Coding } from "fhir/r4";
import { createReadStream } from "node:fs";

export interface HCPCSCodesBuilderOptions {
  /**
   * The path to the source file containing the HCPCS codes and descriptions.
   * The file can be downloaded at https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets.
   *
   * These should be CSV files. If you download them as Excel file, you can use the
   * `ssconvert` utility to process them into CSV files.
   */
  sourceFilePath: string;

  /**
   * The version of the data file, most probably the year and month of publishing.
   * Will be included in the coding if provided.
   */
  version?: string | null | undefined;

  /**
   * The coding system to use. Defaults to https://www.cms.gov/Medicare/Coding/HCPCSReleaseCodeSets.
   */
  system?: string | null | undefined;
}

/**
 * Parses a file from CMS.gov that contains HCPCS codes and description,
 * and allows building `Coding` & `CodeableConcept` from these.
 */
export class HCPCSCodesBuilder {
  private _descriptionsByCode = new Map<string, string>();

  constructor(private options: HCPCSCodesBuilderOptions) {}

  /**
   * Return true if the code is listed in the source file.
   */
  public async isHCPCSCode(code: string): Promise<boolean> {
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
      system: this.options.system || CodeSystemURIs.HCPCSLevelII,
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

    for await (const line of createReadStream(this.options.sourceFilePath).pipe(
      parse({
        columns: true,
        skipEmptyLines: true,
        trim: true,
      })
    )) {
      this._descriptionsByCode.set(
        line["HCPC"].trim().toUpperCase(),
        line["LONG DESCRIPTION"]?.trim() || line["SHORT DESCRIPTION"]?.trim()
      );
    }
  }
}
