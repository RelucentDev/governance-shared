/**
 * Relucent Generators.
 *
 * @since     1.0.0
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */
import acknowledgements from "./acknowledgements/index.js";
import { NodePlopAPI } from "plop";
import pluralize from "pluralize";

export default function (plop: NodePlopAPI) {
  // Plop Config
  plop.setWelcomeMessage("@relucent.dev/generators");
  plop.setHelper("pluralize", (text: string) => pluralize(text));

  // Generators
  acknowledgements(plop);
}
