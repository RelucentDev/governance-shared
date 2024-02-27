/**
 * Relucent Generators.
 *
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */
import type { NodePlopAPI } from "plop";

/**
 * Generate an ACKNOWLEDGEMENTS.md file.
 *
 * @since 0.0.1
 * @author Dom Webber <dom.webber@hotmail.com>
 */
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
