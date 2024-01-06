import {Controller} from "@hotwired/stimulus"

// Connects to data-controller="room"
export default class extends Controller {
  connect() {
    console.log('Stimulus controller connected');

    // Listen for before-render event
    this.element.addEventListener('turbo:load', () => {
      console.log('Loaded');
    });

    // Replace 'new_room_frame' with the actual ID or target of your Turbo Frame
    const newRoomFrame = document.getElementById(`room_${this.element.dataset.id}`);
    console.log(newRoomFrame);
    if (newRoomFrame) {
      this.handleNewRoomCreation(newRoomFrame);
    }

    // Listen for turbo:load event (for existing rooms)
    document.addEventListener('turbo:load', (event) => {
      console.log('turbo:load event triggered', event);

      // Check if the content of the frame has changed
      const frame = document.getElementById(`room_${this.element.dataset.id}`);
      if (frame && frame.innerHTML !== this.lastContent) {
        this.lastContent = frame.innerHTML;

        console.log('Content changed. Triggering load function.');

        // Call the load function when the content changes
        this.load();
      }
    });

    // Listen for turbo:load event (for existing rooms)
    document.addEventListener('turbo:submit-end', (event) => {
      console.log('turbo:submit-end event triggered', event);

      // Check if the content of the frame has changed
      const frame = document.getElementById(`room_${this.element.dataset.id}`);
      if (frame && frame.innerHTML !== this.lastContent) {
        this.lastContent = frame.innerHTML;

        console.log('Content changed. Triggering load function.');

        // Call the load function when the content changes
        this.load();
      }
    });
  }

  load() {
    console.log('Load function loaded');
    const viewType = this.element.closest('[data-view-type]').getAttribute('data-view-type');

    console.log(`Loading ${viewType} view for room ${this.element.dataset.id}...`);
    // Set the appropriate location-based target
    this.element.setAttribute('id', `room_${this.element.dataset.id}_${viewType}`);
    console.log(this.element.getAttribute('id'));
    console.log(this.element.getAttribute('data-turbo-frame'));
  }

  handleNewRoomCreation(newRoomFrame) {
    console.log('Handling the creation of a new room');

    const viewType = this.element.closest('[data-view-type]').getAttribute('data-view-type');

    console.log(`Loading ${viewType} view for room ${this.element.dataset.id}...`);
    // Set the appropriate location-based target
    this.element.setAttribute('id', `room_${newRoomFrame.dataset.id}_${viewType}`);
    console.log(this.element.getAttribute('id'));
    console.log(this.element.getAttribute('data-turbo-frame'));
  }

// findRoomFrame() {
//   const frameId = `room_${this.element.dataset.id}`;
//   const roomFrame = document.getElementById(frameId);
//   console.log(roomFrame);
//   return roomFrame;
// }
}
