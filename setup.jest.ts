import "@testing-library/jest-dom";
import { TextEncoder, TextDecoder } from "util";

// react-router v7 relies on TextEncoder/TextDecoder, which jsdom does not provide.
if (typeof global.TextEncoder === "undefined") {
  global.TextEncoder = TextEncoder as typeof global.TextEncoder;
}
if (typeof (global as { TextDecoder?: unknown }).TextDecoder === "undefined") {
  (global as { TextDecoder?: unknown }).TextDecoder = TextDecoder;
}
