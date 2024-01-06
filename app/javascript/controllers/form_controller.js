import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  resetComponent() {
    const form = this.element;

    const timer = setInterval(() => {
      form.reset();
      clearInterval(timer);
    }, 100);
  }
}
