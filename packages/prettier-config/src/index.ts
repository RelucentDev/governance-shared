/**
 * Relucent Prettier Config.
 *
 * @since     1.0.0
 * @module    Relucent\Prettier
 * @copyright 2023 Relucent Ltd
 * @author    Relucent Ltd <hello@relucent.dev>
 * @see       https://relucent.dev
 */
import { Config } from "prettier";

/**
 * Relucent Prettier Config.
 *
 * @since 1.0.0
 */
const config: Config & { [key: string]: unknown } = {
  importOrder: [
    "",
    "<THIRD_PARTY_MODULES>",
    "^[./]",
    "^@/src/(.*)$",
    "^@/__tests__/(.*)$",
    "<THIRD_PARTY_TS_TYPES>",
    "<TS_TYPES>^[./]",
  ],
  plugins: [
    "@trivago/prettier-plugin-sort-imports",
    "prettier-plugin-sh",
    "prettier-plugin-pkg",
  ],
};

export default config;
