import {
  FhirSubscriptionHandler,
  FhirSubscriptionHandlerArgs,
} from "./fhir-subscription";
import { composeHandlers } from "./handlers";

describe("handlers", () => {
  describe("composeHandlers", () => {
    describe("sequential", () => {
      it("execute handlers in order", async () => {
        const handlers: FhirSubscriptionHandler[] = [
          async () => {
            return 1;
          },
          async () => {
            return 2;
          },
        ];

        const result = await composeHandlers(
          handlers,
          "sequential"
        )({} as FhirSubscriptionHandlerArgs);

        expect(result).toMatchObject([1, 2]);
      });

      it("handles errors", async () => {
        let secondHandlerExecuted = false;
        const handlers: FhirSubscriptionHandler[] = [
          async () => {
            throw "ERROR!";
          },
          async () => {
            secondHandlerExecuted = true;
          },
        ];

        await expect(
          async () =>
            await composeHandlers(
              handlers,
              "sequential"
            )({} as FhirSubscriptionHandlerArgs)
        ).rejects.toThrowError();
        expect(secondHandlerExecuted).toBeFalsy();
      });
    });

    describe("sequential-all", () => {
      it("execute handlers in order", async () => {
        const handlers: FhirSubscriptionHandler[] = [
          async () => {
            return 1;
          },
          async () => {
            return 2;
          },
        ];

        const result = await composeHandlers(
          handlers,
          "sequential-all"
        )({} as FhirSubscriptionHandlerArgs);

        expect(result).toMatchObject([1, 2]);
      });

      it("handles errors", async () => {
        let secondHandlerExecuted = false;
        const handlers: FhirSubscriptionHandler[] = [
          async () => {
            throw "ERROR!";
          },
          async () => {
            secondHandlerExecuted = true;
          },
        ];

        await expect(
          async () =>
            await composeHandlers(
              handlers,
              "sequential-all"
            )({} as FhirSubscriptionHandlerArgs)
        ).rejects.toThrowError();
        expect(secondHandlerExecuted).toBeTruthy();
      });
    });

    describe("parallel", () => {
      it("execute handlers", async () => {
        const handlers: FhirSubscriptionHandler[] = [
          async () => {
            return 1;
          },
          async () => {
            return 2;
          },
        ];

        const result = await composeHandlers(
          handlers,
          "parallel"
        )({} as FhirSubscriptionHandlerArgs);

        expect(result).toMatchObject(expect.arrayContaining([1, 2]));
      });

      it("handles errors", async () => {
        let secondHandlerExecuted = false;
        const handlers: FhirSubscriptionHandler[] = [
          async () => {
            throw "ERROR!";
          },
          async () => {
            secondHandlerExecuted = true;
          },
        ];

        await expect(
          async () =>
            await composeHandlers(
              handlers,
              "parallel"
            )({} as FhirSubscriptionHandlerArgs)
        ).rejects.toThrowError();
        expect(secondHandlerExecuted).toBeTruthy();
      });
    });
  });
});
