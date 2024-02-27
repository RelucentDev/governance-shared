/**
 * Relucent Generators.
 *
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */
import type { NodePlopAPI } from "plop";

/**
 * Generate a README.md file.
 *
 * @since 0.2.0
 * @author Dom Webber <dom.webber@hotmail.com>
 */
export default function readme(plop: NodePlopAPI) {
  plop.setGenerator("readme", {
    description: "Generate an README.md file",
    prompts: [
      {
        type: "input",
        name: "projectName",
      },
      {
        type: "input",
        name: "projectIntroduction",
      },
      {
        type: "input",
        name: "projectAuthor",
        default: "Relucent Ltd",
      },
      {
        type: "input",
        name: "projectEmail",
        default: "hello@relucent.dev",
      },
      {
        type: "list",
        name: "projectLicense",
        default: "Proprietary",
        choices: [
          "Proprietary",
          "GNU LGPLv3",
          "MIT",
          "GNU GPLv3",
          "Apache-2.0",
          "BSD-3-Clause",
        ],
      },
      {
        type: "checkbox",
        name: "includeSections",
        choices: ["Installation", "Usage"],
      },
    ],
    actions: [
      {
        type: "add",
        path: "README.md",
        templateFile: "../templates/README.md.hbs",
        data: {
          year: new Date().getFullYear(),
        },
      },
    ],
  });
}
