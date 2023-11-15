export default {
  // 继承自bootstrap官方的样式规则
  extends: ["stylelint-config-twbs-bootstrap"],
  rules: {
    // 取消不允许使用!important规则
    "declaration-no-important": null,
    // 取消对选择器数量的限制，官方设定的最大选择器层级是4
    "selector-max-class": null,
    // 取消限制选择器中组合器的数量
    "selector-max-combinators": null,
    // 取消限制选择器中复合选择器的数量
    "selector-max-compound-selectors": null,
    // 取消限制选择器中 ID 选择器的数量
    "selector-max-id": null,
    // 取消限制选择器的特殊性
    "selector-max-specificity": null,
    // 取消限制选择器中类型选择器的数量
    "selector-max-type": null,
    // 取消禁止按类型限定选择器
    "selector-no-qualifying-type": null
  }
}
