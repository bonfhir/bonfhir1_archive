/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { build, buildCodeableConcept, setSystemTime } from "@bonfhir/core/r4b";
import { CodeSystemURIs } from "@bonfhir/terminology/r4b";
import fetch from "fetch-vcr";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { findDrugInteractionsIssues } from "./drug-interactions-finder";

describe("drug-interactions-finder", () => {
  global.fetch = fetch as typeof global.fetch;

  beforeEach(async () => {
    setSystemTime("2023-01-25T18:34:01.863Z");

    const fixturePath = join(
      dirname(fileURLToPath(import.meta.url)),
      "__fixtures__",
      "drug-interactions-finder",
      expect.getState().currentTestName!.replace(/[^a-z0-9]/gi, "_")
    );
    if (!existsSync(fixturePath)) {
      await mkdir(fixturePath, { recursive: true });
    }
    fetch.configure({
      fixturePath,
      // mode: "record",
    });
  });

  afterAll(() => {
    setSystemTime(undefined);
  });

  it("throws when there is not enough drugs", async () => {
    await expect(
      findDrugInteractionsIssues({
        rxcuis: [],
      })
    ).rejects.toThrowError();

    await expect(
      findDrugInteractionsIssues({
        medications: [],
      })
    ).rejects.toThrowError();
  });

  it("returns empty when there is no drug interaction", async () => {
    const result = await findDrugInteractionsIssues({
      rxcuis: ["18600", "18601"],
    });

    expect(result.issues.length).toBeFalsy();
  });

  it("returns issues when there is drug interaction", async () => {
    const result = await findDrugInteractionsIssues({
      rxcuis: ["207106", "152923", "656659"],
    });

    expect(result.issues).toMatchSnapshot();
  });

  it("returns issues when there is drug interaction with medications", async () => {
    const result = await findDrugInteractionsIssues({
      medications: ["207106", "152923", "656659"].map((code) =>
        build("Medication", {
          id: `medid-${code}`,
          code: buildCodeableConcept({
            coding: [
              {
                system: CodeSystemURIs.RxNorm,
                code,
              },
            ],
          }),
        })
      ),
    });

    expect(result.issues).toMatchSnapshot();
  });
});
