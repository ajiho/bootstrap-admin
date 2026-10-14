import d from "domtify";

import modal from "./modal";

function alert(content, options, yes) {
  if (d.isFunction(options)) yes = options;

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
      ],
      btn1: yes,
    },
    options,
  );

  return modal(opts);
}

export default alert;
