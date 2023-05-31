// This Polyfill is only needed as long as nock does not support fetch for
// NodeJS v18.0.0 and above
// see here: https://github.com/nock/nock/issues/2336
/* eslint-disable */
// @ts-nocheck
import fetch from "node-fetch";

const gFetch = globalThis.fetch;

function setPolyfill() {
  globalThis.fetch = fetch;
}

function removePolyfill() {
  globalThis.fetch = gFetch;
}

export { setPolyfill, removePolyfill };
