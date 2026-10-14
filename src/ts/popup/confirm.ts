import d from "domtify";

import modal from "./modal";

function confirm(content, options, yes, cancel) {
  if (d.isFunction(options)) [yes, cancel] = [options, yes];

  const opts = d.extend(
    {
      title: "信息",
      modalDialogClass: "modal-dialog-centered modal-sm",
      body: content,
      btn: [
        {
          text: "确定",
          type: "primary",
        },
        "取消",
      ],
      btn1: yes,
      btn2: cancel,
    },
    options,
  );

  return modal(opts);
}

export default confirm;
