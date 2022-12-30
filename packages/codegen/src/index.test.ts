import { exec } from "node:child_process";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { promisify } from "node:util";

const execAsync = promisify(exec);

describe("codegen", () => {
  describe("run", () => {
    it("process data and templates", async () => {
      const cli = "yarn dev";
      const data = join(__dirname, "__fixtures__", "data", "*.json");
      const templates = join(__dirname, "__fixtures__", "templates", "*.hbs");
      const helper = join(
        __dirname,
        "__fixtures__",
        "templates",
        "test-helper.js"
      );
      await execAsync(
        `${cli} run -d ${data} -t ${templates} --helpers "${helper}" -p "prettier --write %files%"`,
        {
          cwd: __dirname,
        }
      );

      const loadedResult = await readFile(
        join(__dirname, "__fixtures__", "templates", "result.ts"),
        "utf8"
      );
      expect(loadedResult).toMatchSnapshot();
    });
  });
});
