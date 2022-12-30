/**
 * Codes to represent subscription error details
 * http://terminology.hl7.org/ValueSet/subscription-channel-type
 */
export const SubscriptionChannelTypeCodesCode = {
  /**
   * Rest Hook
   */
  "rest-hook": "rest-hook",

  /**
   * Websocket
   */
  websocket: "websocket",

  /**
   * Email
   */
  email: "email",

  /**
   * Message
   */
  message: "message",
} as const;

/**
 * https://hl7.org/fhir/valueset-address-type.html
 */
export type SubscriptionChannelTypeCodesCode =
  typeof SubscriptionChannelTypeCodesCode[keyof typeof SubscriptionChannelTypeCodesCode];
