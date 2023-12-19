/**
 * Relucent Generators.
 *
 * @since     1.0.0
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */
import minimist from "minimist";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Plop, run } from "plop";

const argv = minimist(process.argv.slice(2));
const __dirname = path.dirname(fileURLToPath(import.meta.url));

Plop.prepare(
  {
    cwd: argv.cwd,
    preload: argv.preload || [],
    configPath: path.join(__dirname, "plopfile.js"),
    completion: argv.completion,
  },
  (env) => {
    Plop.execute(env, function (env) {
      const options = {
        ...env,
        dest: process.cwd(),
      };

      return run(options, undefined, true);
    });
  },
);
