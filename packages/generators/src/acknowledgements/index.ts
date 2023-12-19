/**
 * Relucent Generators.
 *
 * @since     1.0.0
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */
import { NodePlopAPI } from "plop";

export default function acknowledgements(plop: NodePlopAPI) {
  plop.setGenerator("acknowledgements", {
    description: "Generate an ACKNOWLEDGEMENTS.md file",
    prompts: [],
    actions: [
      {
        type: "add",
        path: "ACKNOWLEDGEMENTS.md",
        templateFile: "../templates/ACKNOWLEDGEMENTS.md.hbs",
      },
    ],
  });
}
