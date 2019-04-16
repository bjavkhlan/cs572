import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[makeBigger]'
})
export class MakeBiggerDirective {
  @HostBinding("style.fontSize") fontSize = "18px";
  @HostListener("dblclick")  bigger() { 
    console.log("here");
    this.fontSize = parseInt(this.fontSize) + 2  + "px";
  }
  constructor() { }

 
}
