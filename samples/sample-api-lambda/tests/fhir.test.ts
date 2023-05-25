import { APIGatewayEvent, Callback, Context } from "aws-lambda";
import { handler } from "../src/fhir";
test("registers a subscription", async () => {
  const event = {
    body: "",
    path: "/fhir/register-subscriptions",
    headers: {
      "X-Subscription-Auth": "thewebhooksecret",
    },
    httpMethod: "POST",
  } as unknown as APIGatewayEvent;
  const context = {} as Context;
  const callback = {} as Callback;

  const response = await handler(event, context, callback);
  expect(response?.statusCode).toEqual(204);
  expect(response?.body).toBe("");
});
