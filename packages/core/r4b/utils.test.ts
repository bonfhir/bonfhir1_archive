import { cloneDeep, toMap, uniqBy } from "./utils";

describe("utils", () => {
  describe("toMap", () => {
    it("returns empty map on empty array", () => {
      expect(toMap([], (x) => x).size).toBe(0);
    });

    it("index by key", () => {
      const values = [{ id: "a" }, { id: "b" }];
      expect(Object.fromEntries(toMap(values, (x) => x.id))).toMatchObject({
        a: { id: "a" },
        b: { id: "b" },
      });
    });

    it("index by key and transform values", () => {
      const values = [{ id: "a" }, { id: "b" }];
      expect(
        Object.fromEntries(
          toMap(
            values,
            (x) => x.id,
            (x) => x.id
          )
        )
      ).toMatchObject({
        a: "a",
        b: "b",
      });
    });
  });

  describe("cloneDeep", () => {
    it.each([undefined, null, "aha", 3, [], [1, 2], { a: "foo" }])(
      "deep clone %p",
      (value) => {
        expect(cloneDeep(value)).toEqual(value);
      }
    );
  });

  describe("uniqBy", () => {
    it("should filter arrays", () => {
      expect(uniqBy([{ id: "a" }], (x) => x.id)).toEqual([{ id: "a" }]);
      expect(uniqBy([{ id: "a" }, { id: "b" }], (x) => x.id)).toEqual([
        { id: "a" },
        { id: "b" },
      ]);
      expect(
        uniqBy([{ id: "a" }, { id: "b" }, { id: "a" }], (x) => x.id)
      ).toEqual([{ id: "a" }, { id: "b" }]);
    });
  });
});
