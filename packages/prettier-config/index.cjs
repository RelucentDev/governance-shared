/**
 * Relucent Prettier Config.
 *
 * @since     1.0.0
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */

/** @type {import("prettier").Config & import("@trivago/prettier-plugin-sort-imports").PluginConfig} */
module.exports = {
  proseWrap: "always",
  importOrder: [
    "",
    "^react(-dom)?$",
    "^next(/.*|$)",
    "<THIRD_PARTY_MODULES>",
    "^[./]",
    "^(@|\\d|_)",
    "<THIRD_PARTY_TS_TYPES>",
    "<TS_TYPES>^[./]",
  ],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "@prettier/plugin-xml",
    "prettier-plugin-sh",
    "prettier-plugin-pkg",
  ],
};
