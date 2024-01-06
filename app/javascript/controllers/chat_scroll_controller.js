// app/javascript/controllers/chat_scroll_controller.js
import {Controller} from "@hotwired/stimulus";

export default class extends Controller {

  connect() {
    console.log("Hello, Stimulus!", this.element);

    document.addEventListener('turbo:submit-end', this.scrollToBottomDelayed.bind(this));
    document.addEventListener('turbo:load', this.scrollToBottomDelayed.bind(this));
    document.addEventListener('turbo:render', this.scrollToBottomDelayed.bind(this));
    document.addEventListener('turbo:before-render', this.scrollToBottomDelayed.bind(this));
    document.addEventListener('turbo:submit-start', this.scrollToBottomDelayed.bind(this));
    document.addEventListener('turbo:submit-end', this.scrollToBottomDelayed.bind(this));

    this.scrollToBottom();
  }

  scrollToBottom() {
    this.scrollContainer = this.element;
    this.scrollContainer.scrollTop = this.scrollContainer.scrollHeight;
  }

  scrollToBottomDelayed() {
    const timer = setInterval(() => {
      this.scrollToBottom();
      clearInterval(timer);
    }, 100);
  }
}