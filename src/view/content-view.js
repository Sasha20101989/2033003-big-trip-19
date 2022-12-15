import {createElement} from '../render.js';

function createContentTemplate() {
  return `<ul class="trip-events__list">
  </ul>`;
}
export default class ContentView {
  getTemplate() {
    return createContentTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
