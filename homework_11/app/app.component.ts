import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1> Angular app </h1>
    <app-counter [counterValue]="componentCounterValue" (counterChange)="counterChange($event)"></app-counter>
    <br/>
    Component Counter Value = {{componentCounterValue}}
  `,
  styles: [`h1 { text-align: center; }
    app-counter {
        display: inline-block;
        padding: 30px;
        border: solid red 1px;
        font-size: 18pt;
      }`],
})
export class AppComponent {
  title = 'angular-app';
  componentCounterValue = 5;
  counterChange(val) { this.componentCounterValue = val;}
}
