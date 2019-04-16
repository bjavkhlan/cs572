import { Component, Input } from '@angular/core';

@Component({
  selector: 'dumb',
  template: `
    {{data.name}}
  `,
  styles: []
})
export class DumbComponent {
  @Input() data;
  constructor() { }


}
