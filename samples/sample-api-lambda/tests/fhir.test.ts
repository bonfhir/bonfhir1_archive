import { APIGatewayEvent, Callback, Context } from "aws-lambda";
import { handler } from "../src/fhir";
test("hello", async () => {
  const event = { body: "Test Body", path: "" } as APIGatewayEvent;
  const context = {} as Context;
  const callback = {} as Callback;

  const response = await handler(event, context, callback);
  expect(response).toBe("object");
  expect(response?.statusCode).toEqual(204);
});
