import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="form"
export default class extends Controller {
  connect() {
    console.log('Form controller connected');

    this.element.addEventListener('turbo:before-stream-render', (event) => {
      console.log('turbo:before-stream-render event triggered', event);
      // Add your logic here for handling the event
    });

    // Listen for turbo:load event (for existing rooms)
    document.addEventListener('turbo:before-render', (event) => {
      console.log('turbo:before-render event triggered', event);

      const viewType = this.element.closest('[data-view-type]').getAttribute('data-view-type');

      console.log(`Loading ${viewType} view for room ${this.element.dataset.id}...`);
      // Set the appropriate location-based target
      this.element.setAttribute('id', `room_${this.element.dataset.id}_${viewType}`);
      console.log(this.element.getAttribute('id'));
      console.log(this.element.getAttribute('data-turbo-frame'));
    });
  }
  // load() {
  //   console.log('Load function loaded');
  //   const viewType = this.element.closest('[data-view-type]').getAttribute('data-view-type');
  //
  //   console.log(`Loading ${viewType} view for room ${this.element.dataset.id}...`);
  //   // Set the appropriate location-based target
  //   this.element.setAttribute('id', `room_${this.element.dataset.id}_${viewType}`);
  //   console.log(this.element.getAttribute('id'));
  //   console.log(this.element.getAttribute('data-turbo-frame'));
  // }

  // handleNewRoomCreation(newRoomFrame) {
  //   console.log('Handling the creation of a new room');
  //
  //   const viewType = this.element.closest('[data-view-type]').getAttribute('data-view-type');
  //
  //   console.log(`Loading ${viewType} view for room ${this.element.dataset.id}...`);
  //   // Set the appropriate location-based target
  //   this.element.setAttribute('id', `room_${newRoomFrame.dataset.id}_${viewType}`);
  //   console.log(this.element.getAttribute('id'));
  //   console.log(this.element.getAttribute('data-turbo-frame'));
  // }

  // findRoomFrame() {
  //   const frameId = `room_${this.element.dataset.id}`;
  //   const roomFrame = document.getElementById(frameId);
  //   console.log(roomFrame);
  //   return roomFrame;
  // }
}
