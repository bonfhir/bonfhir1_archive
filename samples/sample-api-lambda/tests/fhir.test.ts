import {
  APIGatewayEvent,
  APIGatewayProxyResult,
  Callback,
  Context,
} from "aws-lambda";
import dotenv from "dotenv";
import { removePolyfill, setPolyfill } from "./fetch-polyfill";
import { captureHttp } from "./nock";

dotenv.config({ path: "../../.env.development.local" });

describe("subscription", () => {
  const context = {} as Context;
  const callback = {} as Callback;
  beforeAll(() => {
    setPolyfill();
    const now = new Date("2023-05-31T03:36:07.344Z");
    jest.useFakeTimers({ now, advanceTimers: true });
    jest.setSystemTime(now);
  });

  afterAll(() => {
    removePolyfill();
    jest.useRealTimers();
  });

  async function invokingLambda(event: APIGatewayEvent) {
    return await captureHttp(() => {
      /* eslint-disable-next-line  @typescript-eslint/no-var-requires */
      const handler = require("../src/fhir").handler;
      return handler(
        event,
        context,
        callback
      ) as Promise<APIGatewayProxyResult>;
    }, {});
  }

  it("registers subscription it started with", async () => {
    const event = {
      body: "",
      path: "/fhir/register-subscriptions",
      headers: {
        "X-Subscription-Auth": "thewebhooksecret",
      },
      httpMethod: "POST",
    } as unknown as APIGatewayEvent;

    const response = await invokingLambda(event);
    expect(response?.statusCode).toEqual(204);
    expect(response?.body).toBe("");
  });

  it("rejects a subscription registration with invalid secret", async () => {
    const event = {
      body: "",
      path: "/fhir/register-subscriptions",
      headers: {
        "X-Subscription-Auth": "invalid",
      },
      httpMethod: "POST",
    } as unknown as APIGatewayEvent;

    const response = await invokingLambda(event);
    expect(response?.statusCode).toEqual(401);
    expect(response?.body).toBe("Unauthorized");
  });

  it("accepts a communication event", async () => {
    const event = {
      body: null,
      path: "/fhir/communication-requests",
      headers: {
        "X-Subscription-Auth": "thewebhooksecret",
      },
      httpMethod: "POST",
    } as unknown as APIGatewayEvent;

    const response = await invokingLambda(event);
    expect(response?.statusCode).toEqual(204);
    expect(response?.body).toBe("");
  });

  it("rejects an event for which it has no subscription", async () => {
    const event = {
      body: null,
      path: "/fhir/no-subscription-here",
      headers: {
        "X-Subscription-Auth": "thewebhooksecret",
      },
      httpMethod: "POST",
    } as unknown as APIGatewayEvent;

    const response = await invokingLambda(event);
    expect(response?.statusCode).toEqual(404);
    expect(response?.body).toBe("Not found");
  });

  it("accepts an event with an existing subscription and a resource", async () => {
    const resource = {
      resourceType: "CommunicationRequest",
      id: "123",
      payload: [
        {
          contentString: "Hello World",
        },
      ],
    };

    const event = {
      body: JSON.stringify(resource),
      path: "/fhir/communication-requests",
      headers: {
        "X-Subscription-Auth": "thewebhooksecret",
      },
      httpMethod: "POST",
    } as unknown as APIGatewayEvent;

    const response = await invokingLambda(event);
    expect(response?.statusCode).toEqual(204);
    expect(response?.body).toBe("");
  });
});
