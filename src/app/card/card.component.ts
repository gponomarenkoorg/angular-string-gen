import {Component} from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div class="card">
    <h2>Card component</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, totam.</p>
  </div>
  `,
  styles: [
    `
      .card {
        padding: 0.5rem 1rem;
        border: 1px dashed #ccc;
        margin-bottom: 1rem;
      }

      h2 {
        margin-bottom: 1rem;
      }
    `
  ]
  // templateUrl: './card.component.html',
  // styleUrls: ['./card.component.css'],

})
export class CardComponent {}
