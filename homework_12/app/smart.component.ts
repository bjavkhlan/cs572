import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'smart',
  template: `
    <ul>
      <li *ngFor="let dumbObj of dumbs">
        <dumb [data]="dumbObj"></dumb>
      </li>
    </ul>
  `,
  styles: []
})
export class SmartComponent {
  constructor() { }
  dumbs = [{name: "dumb1"}, {name: "dumb2"}];
}
