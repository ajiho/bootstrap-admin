import type { Config } from "stylelint";

export default {
  extends: ["stylelint-config-standard-scss"],

  plugins: ["stylelint-order", "@namics/stylelint-bem"],

  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,

  rules: {
    // 代码顺序
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

    // BEM 命名规范
    "plugin/stylelint-bem-namics": true,
  },

  overrides: [
    {
      files: "**/*.scss",

      rules: {
        // 禁止无边框样式的冗余声明
        "declaration-property-value-disallowed-list": {
          border: ["none"],
          outline: ["none"],
        },

        // 禁止使用已弃用的颜色调整函数
        "function-disallowed-list": ["lighten", "darken"],

        // 统一项目中的样式 API
        "property-disallowed-list": [
          "border-radius",
          "border-top-left-radius",
          "border-top-right-radius",
          "border-bottom-right-radius",
          "border-bottom-left-radius",
          "transition",
        ],

        // SCSS 变量：允许局部变量不使用 !default
        "scss/dollar-variable-default": [
          true,
          {
            ignore: "local",
          },
        ],

        // 避免选择器使用联合类名
        "scss/selector-no-union-class-name": true,

        // 允许使用 !important
        "declaration-no-important": null,
      },
    },
  ],
} satisfies Config;
