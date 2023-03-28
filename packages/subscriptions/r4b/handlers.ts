import { FhirResource } from "fhir/r4";
import { FhirSubscriptionHandler } from "./fhir-subscription";

export type ComposeExecutionMode = "sequential" | "sequential-all" | "parallel";

/**
 * Create a high-level handler that can execute multiple handlers as part of the same FhirSubscription.
 * @param handlers The handlers to execute.
 * @param executionMode How to execute the handlers:
 *  - sequential: execute handlers in order, stop at the first error
 *  - sequential-all: execute handlers in order, all of them, and throw the errors at the end
 *  - parallel: execute handlers in parallel, all of them, and throw the errors at the end
 * @returns An array of handlers results if all of them are successful.
 */
export const composeHandlers = <TResource extends FhirResource = FhirResource>(
  handlers: Array<FhirSubscriptionHandler<TResource>>,
  executionMode?: ComposeExecutionMode | null | undefined
): FhirSubscriptionHandler<TResource> => {
  executionMode ||= "sequential";

  switch (executionMode) {
    case "sequential":
      return async (args) => {
        const result = [];
        try {
          for (const handler of handlers) {
            result.push(await handler(args));
          }
        } catch (error) {
          args.logger?.error(error);
          throw error instanceof Error
            ? error
            : new Error(`${error}`, { cause: error });
        }

        return result;
      };

    case "sequential-all":
      return async (args) => {
        const result = [];
        for (const handler of handlers) {
          try {
            result.push(await handler(args));
          } catch (error) {
            args.logger?.error(error);
            result.push(
              error instanceof Error
                ? error
                : new Error(`${error}`, { cause: error })
            );
          }
        }

        const processingErrors = result.filter(
          (x) => x instanceof Error
        ) as Error[];
        if (processingErrors.length) {
          args.logger?.warn(result);
          throw new Error(processingErrors.map((x) => x.message).join("|"), {
            cause: result,
          });
        }

        return result;
      };

    case "parallel":
      return async (args) => {
        const result = await Promise.all(
          handlers.map(async (handler) => {
            try {
              return await handler(args);
            } catch (error) {
              args.logger?.error(error);
              return error instanceof Error
                ? error
                : new Error(`${error}`, { cause: error });
            }
          })
        );

        const processingErrors = result.filter(
          (x) => x instanceof Error
        ) as Error[];
        if (processingErrors.length) {
          args.logger?.warn(result);
          throw new Error(processingErrors.map((x) => x.message).join("|"), {
            cause: result,
          });
        }

        return result;
      };

    default:
      throw new Error(`Unknown executionMode ${executionMode}`);
  }
};
