import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <smart></smart>
    <div isInvisible [visibility]="false">Inside isInvisible</div>
    <div makeBigger>Double click ME!</div>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-app';
}
