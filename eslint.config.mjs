// This is the configuration file for ESLint, the TypeScript linter:
// https://eslint.org/docs/latest/use/configure/

// @ts-check

import { completeConfigBase } from "eslint-config-complete";
import { defineConfig } from "eslint/config";

export default defineConfig(
  // https://github.com/complete-ts/complete/blob/main/packages/eslint-config-complete/src/base.js
  ...completeConfigBase,

  // @template-customization-start

  // https://github.com/facebook/docusaurus/blob/main/packages/eslint-plugin/src/index.ts
  // Disabled due to: https://github.com/facebook/docusaurus/issues/10490
  /// ...compat.extends("plugin:@docusaurus/all"),

  // @template-customization-end

  {
    rules: {
      // Insert changed or disabled rules here, if necessary.

      // @template-customization-start

      // React uses default exports.
      "import-x/no-default-export": "off",

      // Docusaurus is stuck on ESM. Remove this when "package.json" can be converted:
      // https://github.com/facebook/docusaurus/issues/6520
      "n/file-extension-in-import": "off",

      // @template-customization-end
    },
  },

  // @template-customization-start

  // Do not lint the compiled output.
  {
    ignores: ["**/.docusaurus/", "**/build/"],
  },

  // @template-customization-end
);
