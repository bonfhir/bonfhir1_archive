/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { build } from "@bonfhir/core/r4b";
import { MedplumClient } from "@medplum/core";
import fetch from "fetch-vcr";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { buildFhirRestfulClientAdapter } from "./medplum-fhir-restful-client-adapter";

describe("medplum-fhir-restful-client-adapter", () => {
  const medplum = new MedplumClient({
    baseUrl: process.env.MEDPLUM_SERVER_URL || "http://medplum:8103",
    fetch: fetch,
  });
  const client = buildFhirRestfulClientAdapter(medplum);
  global.fetch = fetch as typeof global.fetch;

  beforeEach(async () => {
    const fixturePath = join(
      dirname(fileURLToPath(import.meta.url)),
      "__fixtures__",
      "medplum-fhir-restful-client-adapter",
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

  describe("read", () => {
    it("return undefined when not found", async () => {
      const result = await client.read("Patient", "12345");
      expect(result).toBeUndefined();
      const patient = await client.create(build("Patient", {}));
      await client.delete("Patient", patient.id!);
      const result2 = await client.read("Patient", patient.id!);
      expect(result2).toBeUndefined();
    });
  });

  describe("vread", () => {
    it("return undefined when not found", async () => {
      const result = await client.vread("Patient", "12345", "1");
      expect(result).toBeUndefined();
      const patient = await client.create(build("Patient", {}));
      await client.delete("Patient", patient.id!);
      const result2 = await client.vread(
        "Patient",
        patient.id!,
        patient.meta!.versionId!
      );
      expect(result2).toBeUndefined();
    });
  });

  describe("delete", () => {
    it("doest not throw when when not found", async () => {
      await expect(client.delete("Patient", "54321")).resolves.toBeUndefined();
      const patient = await client.create(build("Patient", {}));
      await client.delete("Patient", patient.id!);
      await expect(
        client.delete("Patient", patient.id!)
      ).resolves.toBeUndefined();
    });
  });

  describe("get", () => {
    it("query when url is relative", async () => {
      await expect(
        client.get(medplum.fhirUrl("Patient"))
      ).resolves.not.toThrow();
    });

    it("query when url is absolute, with the same baseUrl", async () => {
      await expect(
        client.get(new URL(medplum.fhirUrl("Patient"), medplum.getBaseUrl()))
      ).resolves.not.toThrow();
    });

    it("throw when URL is absolute, with another domain", async () => {
      await expect(
        async () => await client.get("https://www.google.com")
      ).rejects.toThrowError("Invalid");
    });
  });
});
