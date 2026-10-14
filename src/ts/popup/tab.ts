import d from "domtify";

import Constants from "../constants";
import utils from "../utils";
import modal from "./modal";

const DEFAULT = {
  tabs: [],
  // 药丸样式
  pills: false,
};

const CLASS_NAME_TAB_ACTIVE = "active";
const CLASS_NAME_TAB_PANE_SHOW = "show";
const CLASS_NAME_MODAL_HEADER = "modal-header";

const TAB_DEFAULT = {
  title: "",
  content: "",
  disabled: false,
};

function tab(options) {
  const id = utils.uuid();
  options = d.extend(DEFAULT, options);

  // 头部的html
  const headHtml = [utils.sprintf(Constants.HTML.nav[0], options.pills ? "nav-pills" : "nav-tabs")];

  for (let [index, tab] of options.tabs.entries()) {
    tab = d.extend({}, TAB_DEFAULT, tab);
    headHtml.push(Constants.HTML.navItem[0]);
    headHtml.push(
      utils.sprintf(
        Constants.HTML.navBtn,
        index === 0 ? CLASS_NAME_TAB_ACTIVE : "",
        `[data-id='${id}-${index}']`,
        tab.disabled ? "disabled" : "",
        tab.title,
      ),
    );
    headHtml.push(Constants.HTML.navItem[1]);
  }
  headHtml.push(Constants.HTML.nav[1]);

  // 关闭按钮
  headHtml.push(Constants.HTML.modalBtnClose);

  // body的html
  const contentHtml = [Constants.HTML.tabContent[0]];
  for (const [index, tab] of options.tabs.entries()) {
    contentHtml.push(
      utils.sprintf(
        Constants.HTML.tabPane,
        index === 0 ? `${CLASS_NAME_TAB_ACTIVE} ${CLASS_NAME_TAB_PANE_SHOW}` : "",
        `${id}-${index}`,
        tab.content,
      ),
    );
  }
  contentHtml.push(Constants.HTML.tabContent[1]);

  utils.registerInternalEvent(options, "shown.bs.modal", (event) => {
    // 事件监听
    const modalEl = event.target;

    const tabs = modalEl.querySelectorAll(`.${CLASS_NAME_MODAL_HEADER} .nav .nav-link`);

    for (const tabEl of tabs) {
      const tabTrigger = new bootstrap.Tab(tabEl);
      tabEl.addEventListener("click", (event) => {
        event.preventDefault();
        tabTrigger.show();
      });
    }
  });

  options = d.extend(
    {
      header: headHtml.join(" "),
      headerClass: "pb-0 border-bottom-0",
      modalDialogClass: "modal-dialog-centered",
      body: contentHtml.join(" "),
    },
    options,
  );

  return modal(options);
}

export default tab;
