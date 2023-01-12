/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { setSystemTime } from "@bonfhir/core/r4b";
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { MedplumClient } from "@medplum/core";
import fetch from "fetch-vcr";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { NPIRegistrySyncSession } from "./npiregistry-sync";

describe("npiregistry-sync", () => {
  beforeAll(() => {
    setSystemTime(new Date(2023, 1, 1));
  });

  afterAll(() => {
    setSystemTime(undefined);
  });

  it("returns undefined if not found", async () => {
    fetch.configure({
      fixturePath: join(
        dirname(fileURLToPath(import.meta.url)),
        "__fixtures__",
        "npiregistry-sync",
        "not-found"
      ),
    });

    global.fetch = fetch as any;
    const medplum = new MedplumClient({
      baseUrl: process.env.MEDPLUM_SERVER_URL,
      fetch: fetch,
    });
    // await medplum.startClientLogin(
    //   process.env.MEDPLUM_CLIENT_ID!,
    //   process.env.MEDPLUM_CLIENT_SECRET!
    // );

    const client = buildFhirRestfulClientAdapter(medplum);
    const syncSession = new NPIRegistrySyncSession({
      client,
    });

    const result = await syncSession.sync({ number: "1234" });

    expect(result).toBeUndefined();
  });

  it("syncs an Organization from scratch", async () => {
    fetch.configure({
      fixturePath: join(
        dirname(fileURLToPath(import.meta.url)),
        "__fixtures__",
        "npiregistry-sync",
        "organization"
      ),
    });

    global.fetch = fetch as any;
    const medplum = new MedplumClient({
      baseUrl: process.env.MEDPLUM_SERVER_URL,
      fetch: fetch,
    });
    // await medplum.startClientLogin(
    //   process.env.MEDPLUM_CLIENT_ID!,
    //   process.env.MEDPLUM_CLIENT_SECRET!
    // );

    const client = buildFhirRestfulClientAdapter(medplum);
    const syncSession = new NPIRegistrySyncSession({
      client,
    });

    const result = await syncSession.sync({ number: "1861446270" });

    expect(result?.result.resourceType).toEqual("Organization");
  });

  it("syncs a Practitioner from scratch", async () => {
    fetch.configure({
      fixturePath: join(
        dirname(fileURLToPath(import.meta.url)),
        "__fixtures__",
        "npiregistry-sync",
        "practitioner"
      ),
    });

    global.fetch = fetch as any;
    const medplum = new MedplumClient({
      baseUrl: process.env.MEDPLUM_SERVER_URL,
      fetch: fetch,
    });
    // await medplum.startClientLogin(
    //   process.env.MEDPLUM_CLIENT_ID!,
    //   process.env.MEDPLUM_CLIENT_SECRET!
    // );

    const client = buildFhirRestfulClientAdapter(medplum);
    const syncSession = new NPIRegistrySyncSession({
      client,
    });

    const result = await syncSession.sync({ number: "1952319329" });

    expect(result?.result.resourceType).toEqual("Practitioner");
  });
});
