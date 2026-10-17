import { render } from "lit-html";

export class Component {
  constructor(container) {
    this.container = container;
    this.state = {};
  }

  template() {
    throw new Error("template() must be implemented");
  }

  mount() {
    this.render();
    return this;
  }

  render() {
    render(this.template(), this.container);
  }

  setState(patch) {
    Object.assign(this.state, patch);
    this.render();
  }

  destroy() {
    render(null, this.container);
  }
}
