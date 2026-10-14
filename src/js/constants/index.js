// import pkg from "../../package.json" with { type: "json" }

const PREFIX = "lts";
const SYMBOL_DEFAULT = Symbol("default");
const VERSION = "5.3.8";
const Map = {
  btnType: {
    primary: "btn-primary",
    secondary: "btn-secondary",
    success: "btn-success",
    danger: "btn-danger",
    warning: "btn-warning",
    info: "btn-info",
    light: "btn-light",
    dark: "btn-dark",
    link: "btn-link",
  },
  btnSize: {
    sm: "btn-sm",
    lg: "btn-lg",
  },

  formType: {
    TEXT: 0,
    PASSWORD: 1,
    TEXTAREA: 2,
  },
};

const HTML = {
  // 对话框 https://v6-dev--twbs-bootstrap.netlify.app/docs/6.0/components/dialog
  dialog: [
    `<dialog id="myDialogdd" class="dialog %s" data-id="%s" style="z-index: %s;">`,
    `</dialog>`,
  ],
  dialogHeader: [`<div class="dialog-header %s">`, `</div>`],
  dialogTitle: `<h1 class="dialog-title">%s</h1>`,
  dialogBtnClose: `<button type="button" class="btn-close" data-bs-dismiss="dialog" aria-label="Close"></button>`,

  dialogBody: `<div class="dialog-body %s">%s</div>`,
  dialogFooter: [`<div class="dialog-footer %s">`, `</div>`],
  dialogFooterBtn: `<button type="button" data-index="%s" class="btn %s %s">%s</button>`,

  // nav
  nav: [`<ul class="nav %s" role="tablist">`, `</ul>`],
  navItem: [`<li class="nav-item" role="presentation">`, `</li>`],
  navBtn: `<button class="nav-link %s" data-bs-target="%s" type="button" role="tab" %s>%s</button>`,
  tabContent: [`<div class="tab-content">`, `</div>`],
  tabPane: `<div class="tab-pane fade %s" data-id="%s" role="tabpanel" tabindex="0">%s</div>`,

  // prompt
  textarea: `<textarea id="%s" class="form-control" rows="3" placeholder="%s">%s</textarea>`,
  input: `<input id="%s" type="%s" class="form-control" placeholder="%s" value="%s">`,

  // offcanvas
  offcanvas: [`<div class="%s %s" tabindex="-1" data-id="%s" style="z-index: %s;">`, `</div>`],
  offcanvasHeader: [`<div class="offcanvas-header">`, `</div>`],
  offcanvasTitle: `<h5 class="offcanvas-title">%s</h5>`,
  offcanvasBtnClose: `<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>`,
  offcanvasBody: [`<div class="offcanvas-body">`, `</div>`],

  // loading
  loadding: [
    `<div class="%s %s position-absolute top-0 start-0 h-100 w-100 d-flex justify-content-center align-items-center" style="z-index: %s;">`,
    `</div>`,
  ],
  // 旋转器的容器
  spinnerBox: [`<div class="spinner-box %s">`, `</div>`],
  // 旋转器 参数1:旋转器类型,参数2:主题色 参数3:尺寸
  spinner: `<div class="%s %s %s" role="status"><span class="visually-hidden">Loading...</span></div>`,
  // 旋转器后面的提示信息
  spinnerMessage: `<span class="spinner-message %s ms-2">%s</span>`,
};

export default {
  SYMBOL_DEFAULT,
  PREFIX,
  HTML,
  Map,
  VERSION,
};
