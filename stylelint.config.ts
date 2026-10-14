import type { Config } from "stylelint";

export default {
  extends: ["stylelint-config-twbs-bootstrap", "stylelint-config-prettier-scss"],
  plugins: ["stylelint-order", "@namics/stylelint-bem"],
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  rules: {
    "order/order": [
      [
        { type: "at-rule", name: "use" },
        { type: "at-rule", name: "forward" },
        "dollar-variables",
        "custom-properties",
        "declarations",
        "rules",
      ],
    ],
    "plugin/stylelint-bem-namics": true,
  },
  overrides: [
    {
      files: "**/*.scss",
      rules: {
        "declaration-property-value-disallowed-list": {
          border: "none",
          outline: "none",
        },
        "function-disallowed-list": ["lighten", "darken"],
        "property-disallowed-list": [
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-right-radius",
          "border-bottom-left-radius",
          "transition",
        ],
        "scss/dollar-variable-default": [
          true,
          {
            ignore: "local",
          },
        ],
        "scss/selector-no-union-class-name": true,

        // 允许使用 !important
        "declaration-no-important": null,

        // 解决和prettier冲突问题--begin
        "@stylistic/string-quotes": null,
        "@stylistic/number-leading-zero": null,
        "@stylistic/declaration-colon-newline-after": null,
        "@stylistic/value-list-comma-space-after": null,
        "@stylistic/indentation": null,
        "@stylistic/value-list-comma-newline-after": null,
        // 解决和prettier冲突问题--end
      },
    },
  ],
} satisfies Config;
