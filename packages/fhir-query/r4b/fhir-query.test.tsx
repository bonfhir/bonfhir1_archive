/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { build } from "@bonfhir/core/r4b";
import { buildFhirRestfulClientAdapter } from "@bonfhir/medplum/r4b";
import { MedplumClient } from "@medplum/core";
import { renderHook, waitFor } from "@testing-library/react";
import fetch from "fetch-vcr";
import { ValueSet } from "fhir/r4";
import noop from "lodash/noop";
import { existsSync } from "node:fs";
import { mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import React, { PropsWithChildren } from "react";
import {
  useFhirCreateMutation,
  useFhirDeleteMutation,
  useFhirExecute,
  useFhirHistory,
  useFhirRead,
  useFhirSearch,
  useFhirUpdateMutation,
  useFhirVRead,
} from "./fhir-query-hooks";
import { FhirQueryProvider } from "./fhir-query-provider";

describe("fhir-query", () => {
  const medplum = new MedplumClient({
    baseUrl: process.env.MEDPLUM_SERVER_URL || "http://medplum:8103",
    fetch: fetch,
  });
  const fhirClient = buildFhirRestfulClientAdapter(medplum);
  global.fetch = fetch as any;
  global.React = React;

  beforeEach(async () => {
    const fixturePath = join(
      dirname(fileURLToPath(import.meta.url)),
      "__fixtures__",
      "fhir-query",
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

  it("reads a resource", async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider fhirClient={fhirClient}>{children}</FhirQueryProvider>
    );

    const { result } = renderHook(
      () => useFhirRead("Patient", "a942b3d5-19bc-4959-8b5d-f9aedd790a94"),
      { wrapper }
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
      expect(result.current.data).toMatchObject({
        resourceType: "Patient",
        id: "a942b3d5-19bc-4959-8b5d-f9aedd790a94",
      });
    });
  });

  it("reads a resource and error if not found", async () => {
    jest.spyOn(console, "error").mockImplementation(noop);
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider
        fhirClient={fhirClient}
        queryClientConfig={{ defaultOptions: { queries: { retry: false } } }}
      >
        {children}
      </FhirQueryProvider>
    );

    const { result } = renderHook(
      () => useFhirRead("Patient", "b71f99b0-0e01-4659-a26d-d0de00ece8f0"),
      { wrapper }
    );

    await waitFor(() => {
      expect(result.current.isError).toBeTruthy();
      expect((result.current.error as Error).message).toContain("found");
    });
  });

  it("vread a resource", async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider fhirClient={fhirClient}>{children}</FhirQueryProvider>
    );

    const { result } = renderHook(
      () =>
        useFhirVRead(
          "Patient",
          "a942b3d5-19bc-4959-8b5d-f9aedd790a94",
          "9e75a8da-79cf-4ade-a095-6fd7419d8c96"
        ),
      { wrapper }
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
      expect(result.current.data).toMatchObject({
        resourceType: "Patient",
        id: "a942b3d5-19bc-4959-8b5d-f9aedd790a94",
      });
    });
  });

  it("vreads a resource and error if not found", async () => {
    jest.spyOn(console, "error").mockImplementation(noop);
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider
        fhirClient={fhirClient}
        queryClientConfig={{ defaultOptions: { queries: { retry: false } } }}
      >
        {children}
      </FhirQueryProvider>
    );

    const { result } = renderHook(
      () =>
        useFhirVRead(
          "Patient",
          "b71f99b0-0e01-4659-a26d-d0de00ece8f0",
          "ffdded8c-94f0-42a6-b8d5-2b4ad377a716"
        ),
      { wrapper }
    );

    await waitFor(() => {
      expect(result.current.isError).toBeTruthy();
    });
  });

  it("return history", async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider fhirClient={fhirClient}>{children}</FhirQueryProvider>
    );

    const { result } = renderHook(
      () => useFhirHistory("Patient", "a942b3d5-19bc-4959-8b5d-f9aedd790a94"),
      { wrapper }
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
      expect(result.current.data?.bundle.entry?.length).toBeTruthy();
      expect(result.current.data?.nav.type("Patient").length).toBeTruthy();
    });
  });

  it("search - basic", async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider fhirClient={fhirClient}>{children}</FhirQueryProvider>
    );

    const { result } = renderHook(() => useFhirSearch("Patient"), { wrapper });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
      expect(result.current.data?.bundle.entry?.length).toBeTruthy();
      expect(result.current.data?.nav.type("Patient").length).toBeTruthy();
    });
  });

  it("search - with parameters", async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider fhirClient={fhirClient}>{children}</FhirQueryProvider>
    );

    const { result } = renderHook(
      () => useFhirSearch("Patient", (search) => search.name("John Doe")),
      { wrapper }
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
      expect(result.current.data?.bundle.entry?.length).toBeTruthy();
      expect(result.current.data?.nav.type("Patient").length).toBeTruthy();
    });
  });

  it("search - with pagination", async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider fhirClient={fhirClient}>{children}</FhirQueryProvider>
    );

    const { result } = renderHook(
      () =>
        useFhirSearch(
          "Patient",
          (search) => search._count(2),
          `${
            process.env.MEDPLUM_SERVER_URL || "http://medplum:8103"
          }/fhir/R4/Patient?_count=2&_offset=2`
        ),
      { wrapper }
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
      expect(result.current.data?.bundle.entry?.length).toBeTruthy();
      expect(result.current.data?.nav.type("Patient").length).toBeTruthy();
    });
  });

  it("create a resource and manage cache", async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider fhirClient={fhirClient}>{children}</FhirQueryProvider>
    );

    const { result } = renderHook(() => useFhirCreateMutation("Patient"), {
      wrapper,
    });

    result.current.mutate({
      body: build("Patient", { name: [{ given: ["Miles"], family: "Davis" }] }),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
      expect(result.current.data).toMatchObject({
        resourceType: "Patient",
        name: expect.arrayContaining([
          {
            given: ["Miles"],
            family: "Davis",
          },
        ]),
      });
    });
  });

  it("update a resource and manage cache", async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider fhirClient={fhirClient}>{children}</FhirQueryProvider>
    );

    const { result } = renderHook(() => useFhirUpdateMutation("Patient"), {
      wrapper,
    });

    result.current.mutate({
      body: build("Patient", {
        id: "4e83b029-4a2c-4966-b5e3-f6c5ce2e8754",
        name: [{ given: ["Miles"], family: "Davis" }],
      }),
    });

    result.current.mutate({
      body: build("Patient", {
        id: "4e83b029-4a2c-4966-b5e3-f6c5ce2e8754",
        name: [{ given: ["Stan"], family: "Getz" }],
      }),
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
      expect(result.current.data).toMatchObject({
        resourceType: "Patient",
        name: expect.arrayContaining([
          {
            given: ["Stan"],
            family: "Getz",
          },
        ]),
      });
    });
  });

  it("delete a resource", async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider fhirClient={fhirClient}>{children}</FhirQueryProvider>
    );

    const { result } = renderHook(() => useFhirDeleteMutation(), {
      wrapper,
    });

    result.current.mutate({
      type: "Patient",
      id: "4ff32f51-1ece-4d81-8a9c-c655e3ef78f9",
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
    });
  });

  it("execute a query", async () => {
    const wrapper = ({ children }: PropsWithChildren) => (
      <FhirQueryProvider fhirClient={fhirClient}>{children}</FhirQueryProvider>
    );

    const { result } = renderHook(
      () =>
        useFhirExecute<ValueSet>(
          "$expand",
          {
            type: "ValueSet",
            parameters: { url: "http://hl7.org/fhir/ValueSet/address-use" },
          },
          {
            cacheTime: Infinity,
          }
        ),
      {
        wrapper,
      }
    );

    await waitFor(() => {
      expect(result.current.isSuccess).toBeTruthy();
      expect(result.current.data?.expansion?.contains?.length).toBeTruthy();
    });
  });
});
