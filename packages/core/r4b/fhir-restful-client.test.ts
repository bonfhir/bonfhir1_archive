import { mock } from "jest-mock-extended";
import { build } from "./builders";
import {
  decorateFhirRestfulClient,
  FhirRestfulClient,
} from "./fhir-restful-client";

describe("fhir-restful-client", () => {
  it("delegates to client method on empty", async () => {
    const client = mock<FhirRestfulClient>();
    const readValue = build("Patient", {});
    client.read.calledWith("Patient", "12345").mockResolvedValueOnce(readValue);

    const decoratedClient = decorateFhirRestfulClient(client, {});
    const result = await decoratedClient.read("Patient", "12345");

    expect(result).toBe(readValue);
    expect(client.read).toHaveBeenCalled();
  });

  it("intercept client method on empty", async () => {
    const client = mock<FhirRestfulClient>();
    const readValue = build("Patient", {});
    const interceptedValue = build("Patient", {});
    client.read.calledWith("Patient", "12345").mockResolvedValueOnce(readValue);

    const decoratedClient = decorateFhirRestfulClient(client, {
      read: async (_, [type, id]) => {
        expect(type).toEqual("Patient");
        expect(id).toEqual("12345");
        return interceptedValue;
      },
    });
    const result = await decoratedClient.read("Patient", "12345");

    expect(result).toBe(interceptedValue);
    expect(client.read).not.toHaveBeenCalled();
  });
});
