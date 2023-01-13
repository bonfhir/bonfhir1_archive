import { mergeFhirResources } from "./merge";

describe("merge", () => {
  describe("mergeFhirResources", () => {
    it("does not update the current value and returns it if no incoming value is given", () => {
      const current = { id: "1234" };
      const incoming = undefined;

      const [merged, isUpdated] = mergeFhirResources({
        current,
        incoming,
      });

      expect(isUpdated).toBeFalsy();
      expect(merged).toEqual(current);
    });

    it("updates and returns the cloned incoming value if no current value is given", () => {
      const current = undefined;
      const incoming = { id: "1234" };

      const [merged, isUpdated] = mergeFhirResources({
        current,
        incoming,
      });

      expect(isUpdated).toBeTruthy();
      expect(merged).toEqual(incoming);
    });

    it("returns a new resource with incoming properties superseding current properties", () => {
      const current = { id: "1234" };
      const incoming = { id: "5678" };

      const [merged, isUpdated] = mergeFhirResources({
        current,
        incoming,
      });

      expect(isUpdated).toBeTruthy();
      expect(merged).toEqual(incoming);
    });

    it("returns a new resource with properties of both current and incoming values", () => {
      const current = { id: "1234", active: true };
      const incoming: Record<string, unknown> = { id: "5678", number: 3 };

      const [merged, isUpdated] = mergeFhirResources({
        current,
        incoming,
      });

      expect(isUpdated).toBeTruthy();
      expect(merged).toEqual({ ...current, ...incoming });
    });

    it("combines the arrays if both contain value objects (no ids)", () => {
      const current = { id: "1234", elements: [1, 2, 3] };
      const incoming = { id: "5678", elements: [1, 3, 4] };

      const [merged, isUpdated] = mergeFhirResources({
        current,
        incoming,
      });

      expect(isUpdated).toBeTruthy();
      expect(merged).toEqual({
        id: "5678",
        elements: [1, 2, 3, 4],
      });
    });

    it("combines the arrays, merging elements deeply if they share the same ids", () => {
      const current = { id: "1234", elements: [{ id: "1", value: "one" }] };
      const incoming = {
        id: "5678",
        elements: [
          { id: "0", value: "zero" },
          { id: "1", value: "foo" },
        ],
      };

      const [merged, isUpdated] = mergeFhirResources({
        current,
        incoming,
      });

      expect(isUpdated).toBeTruthy();
      expect(merged).toEqual({
        id: "5678",
        elements: [
          { id: "1", value: "foo" },
          { id: "0", value: "zero" },
        ],
      });
    });
  });
});
