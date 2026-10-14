import d from "domtify";

import Constants from "../constants";
import utils from "../utils";
import modal from "./modal";
import "domtify/methods/val";

const DEFAULT = {
  //输入框类型
  formType: Constants.Map.formType.TEXT,
  // 输入框初始值
  value: "",
  // 可输入的最大字符长度
  maxlength: 500,
  // 输入框内容为空时的占位符
  placeholder: "",
};

function prompt(options, yes) {
  if (d.isFunction(options)) yes = options;

  options = d.extend(true, DEFAULT, d.isPlainObject(options) ? options : {});

  const id = `prompt-${utils.uuid()}`;

  let content = "";
  const placeholder = options.placeholder ? options.placeholder : "";
  if (options.formType === Constants.Map.formType.TEXTAREA) {
    content = utils.sprintf(Constants.HTML.textarea, id, placeholder, options.value);
  } else {
    content = utils.sprintf(
      Constants.HTML.input,
      id,
      options.formType == Constants.Map.formType.PASSWORD ? "password" : "text",
      placeholder,
      options.value,
    );
  }

  // 先删除这个btn1
  delete options.btn1;

  const opts = d.extend(
    {
      title: "信息",
      modalDialogClass: "modal-dialog-centered modal-sm",
      btn: [{ text: "确定", type: "primary" }, "取消"],
      body: content,
      btn1: (obj) => {
        const formElment = document.getElementById(id);
        const value = d(formElment).val();

        if (value.length > options.maxlength) {
          popup.tips(`最多输入${options.maxlength}个字符`, formElment);
        } else {
          yes?.(value, obj, formElment);
        }
        return false;
      },
    },
    options,
  );

  return modal(opts);
}

export default prompt;
