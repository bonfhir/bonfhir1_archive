import { ValueRenderer } from "./renderers/value";

/**
 * Renderer interface for FHIR UI Components.
 *
 * The actual rendering on-screen is delegated to implementations of this interface.
 */
export interface FhirUIComponentsRenderer {
  /**
   * Renderer used to render <FhirValue />.
   * This one is optional - <FhirValue /> will renderer to a string if not provided.
   */
  value?: ValueRenderer | null | undefined;
}
