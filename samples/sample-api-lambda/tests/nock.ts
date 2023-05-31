import * as nock from "nock";
import { basename, dirname, join } from "path";

const DOMAINS_TO_EXCLUDE_FROM_RECORDINGS: string[] = ["test.com"];

/** Capture HTTP interactions and either record or replay them using nock. */
export const captureHttp = async <T>(
  fn: (context?: nock.BackContext) => Promise<T>,
  options?: nock.BackOptions
): Promise<T> => {
  nock.back.fixtures = join(
    dirname(expect.getState().testPath!),
    "__nock__",
    basename(expect.getState().testPath!, ".ts")
  );

  nock.back.setMode("record");

  const { nockDone, context } = await nock.back(
    expect
      .getState()
      .currentTestName!.replace(/[^a-z0-9]/gi, "_")
      .toLowerCase() + ".json",
    {
      ...(options || {}),
      ...{
        // What follows is an attempt to automatically obfuscate client_secret parameters in requests, which is commonly
        // used in oauth2 client credential flows. YMMV.

        after: (scope: nock.Scope) => {
          scope.filteringRequestBody(
            /"client_secret"\s*:\s*"[^"]+"/,
            '"client_secret": "XXX"'
          );
          nock.enableNetConnect(
            `(${DOMAINS_TO_EXCLUDE_FROM_RECORDINGS.join("|")})`
          );
          options?.after?.(scope);
        },
        afterRecord: (definitions: nock.Definition[]) => {
          for (const definition of definitions) {
            if (definition.body && typeof definition.body === "object") {
              if ((definition.body as any).client_secret) {
                (definition.body as any).client_secret = "XXX";
              }
            }
          }

          let finalDefinitions = definitions.filter(
            (x) =>
              !String(x.scope).match(
                new RegExp(`(${DOMAINS_TO_EXCLUDE_FROM_RECORDINGS.join("|")})`)
              )
          );

          if (options?.afterRecord) {
            finalDefinitions = options.afterRecord(finalDefinitions);
          }

          return finalDefinitions;
        },
      },
    }
  );

  const result = await fn(context);

  nockDone();

  return result;
};
