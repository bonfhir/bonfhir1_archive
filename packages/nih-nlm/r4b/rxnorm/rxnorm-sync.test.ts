/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { setSystemTime } from "@bonfhir/core/r4b";
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { MedplumClient } from "@medplum/core";
import fetch from "fetch-vcr";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { join } from "node:path";
import { RxNormSyncSession } from "./rxnorm-sync";

describe("rxnorm-sync", () => {
  const medplum = new MedplumClient({
    baseUrl: process.env.MEDPLUM_SERVER_URL || "http://medplum:8103",
    fetch: fetch,
  });
  const client = buildFhirRestfulClientAdapter(medplum);
  global.fetch = fetch as any;

  beforeEach(async () => {
    setSystemTime(new Date(2023, 1, 1));

    const fixturePath = join(
      "r4b",
      "rxnorm",
      "__fixtures__",
      "rxnorm-sync",
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
    const syncSession = new RxNormSyncSession({
      client,
    });

    const result = await syncSession.syncAllProperties({
      rxcui: "12345678910",
    });

    expect(result).toBeUndefined();
  });

  it.each(["3089421", "472016630", "93505698", "61825030260"])(
    "sync by ndc (%s)",
    async (ndc) => {
      const syncSession = new RxNormSyncSession({
        client,
      });

      const result = await syncSession.syncAllProperties({
        ndc,
      });

      expect(result?.result.resourceType).toEqual("Medication");
    }
  );

  it.only("parse medication properly when multiple ingredients ", async () => {
    const ndc = "61825030260";
    const syncSession = new RxNormSyncSession({
      client,
    });

    const result = await syncSession.syncAllProperties({
      ndc,
    });

    const expected = [
      {
        id: "rx-norm",
        isActive: true,
        itemCodeableConcept: {
          coding: [
            {
              code: "1191",
              display: "aspirin",
              system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            },
          ],
          text: "aspirin",
        },
      },
      {
        id: "rx-norm",
        isActive: true,
        itemCodeableConcept: {
          coding: [
            {
              code: "1886",
              display: "caffeine",
              system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            },
          ],
          text: "caffeine",
        },
      },
      {
        id: "rx-norm",
        isActive: true,
        itemCodeableConcept: {
          coding: [
            {
              code: "7716",
              display: "orphenadrine citrate",
              system: "http://www.nlm.nih.gov/research/umls/rxnorm",
            },
          ],
          text: "orphenadrine citrate",
        },
      },
    ];

    expect(result?.result.ingredient?.length).toBe(3);
    expect(result?.result.ingredient).toEqual(expected);
    expect(result?.result.resourceType).toEqual("Medication");
  });
});
