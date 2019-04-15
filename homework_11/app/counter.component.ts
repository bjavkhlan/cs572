import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
      <button (click)="onchange(-1)">-</button> {{value}} <button (click)="onchange(1)">+</button>
  `,
  styles: []
})
export class CounterComponent {
  constructor() { }
  @Input("counterValue") value;
  @Output() counterChange = new EventEmitter();
  onchange(val) {
    this.value += val;
    this.counterChange.emit(this.value);
  }
}
