import { html, render } from "lit-html";
import { unsafeHTML } from "lit-html/directives/unsafe-html.js";

import utils from "../utils";
import modal from "./modal";

const DEFAULT = {
  tabs: [],
  pills: false,
};

function tab(options = {}) {
  const state = {
    id: utils.uuid(),

    tabs: options.tabs.map((item) => ({
      title: item.title,
      content: item.content,
      disabled: item.disabled ?? false,
    })),

    activeIndex: 0,

    pills: options.pills ?? false,
  };

  function template() {
    return html`
      <div class="tab-wrapper">
        <ul
          class="
          nav
          ${state.pills ? "nav-pills" : "nav-tabs"}
        "
        >
          ${state.tabs.map(
            (tab, index) => html`
              <li class="nav-item">
                <button
                  class="
                    nav-link
                    ${state.activeIndex === index ? "active" : ""}
                  "
                  ?disabled=${tab.disabled}
                  @click=${() => {
                    state.activeIndex = index;
                    update();
                  }}
                >
                  ${tab.title}
                </button>
              </li>
            `,
          )}
        </ul>

        <div class="tab-content">
          ${state.tabs.map(
            (tab, index) => html`
              <div
                class="
                  tab-pane
                  fade
                  ${state.activeIndex === index ? "show active" : ""}
                "
              >
                ${unsafeHTML(tab.content)}
              </div>
            `,
          )}
        </div>

        <button class="btn-close" @click=${close}></button>
      </div>
    `;
  }

  let container;

  function update() {
    if (container) {
      render(template(), container);
    }
  }

  function mount(el) {
    container = el;

    render(template(), container);
  }

  function close() {
    instance.hide();
  }

  const instance = modal({
    headerClass: "pb-0 border-bottom-0",
    modalDialogClass: "modal-dialog-centered",

    header: "",

    body: "",

    onMounted(event) {
      const modalEl = event.target;

      const body = modalEl.querySelector(".modal-body");

      mount(body);
    },
  });

  return instance;
}

export default tab;
