/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { setSystemTime } from "@bonfhir/core/r4b";
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { MedplumClient } from "@medplum/core";
import fetch from "fetch-vcr";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { NPIRegistrySyncSession } from "./npiregistry-sync";

describe("npiregistry-sync", () => {
  const medplum = new MedplumClient({
    baseUrl: process.env.MEDPLUM_SERVER_URL || "http://medplum:8103",
    fetch: fetch,
  });
  const client = buildFhirRestfulClientAdapter(medplum);
  global.fetch = fetch as any;

  beforeEach(async () => {
    setSystemTime(new Date(2023, 1, 1));

    const fixturePath = join(
      dirname(fileURLToPath(import.meta.url)),
      "__fixtures__",
      "npiregistry-sync",
      expect.getState().currentTestName!.replace(/[^a-z0-9]/gi, "_")
    );
    if (!existsSync(fixturePath)) {
      await mkdir(fixturePath, { recursive: true });
    }
    fetch.configure({
      fixturePath,
      // mode: "record",
    });

    // Uncomment the following lines when re-recording fetches.
    // await medplum.startClientLogin(
    //   process.env.MEDPLUM_CLIENT_ID!,
    //   process.env.MEDPLUM_CLIENT_SECRET!
    // );
  });

  afterAll(() => {
    setSystemTime(undefined);
  });

  it("returns undefined if not found", async () => {
    const syncSession = new NPIRegistrySyncSession({
      client,
    });

    const result = await syncSession.sync({ number: "1234" });

    expect(result).toBeUndefined();
  });

  it("syncs an Organization from scratch", async () => {
    const syncSession = new NPIRegistrySyncSession({
      client,
    });

    const result = await syncSession.sync({ number: "1861446270" });

    expect(result?.result.resourceType).toEqual("Organization");
  });

  it("syncs a Practitioner from scratch", async () => {
    const syncSession = new NPIRegistrySyncSession({
      client,
    });

    const result = await syncSession.sync({ number: "1952319329" });

    expect(result?.result.resourceType).toEqual("Practitioner");
  });
});
