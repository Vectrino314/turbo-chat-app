import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="header"
export default class extends Controller {
  static targets = [ "toggleable" ]
  connect() {
  }

  toggle() {
    console.log('toggleMenu')
    this.toggleableTarget.classList.toggle('hidden')
  }
}
