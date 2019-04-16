import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[isInvisible]'
})
export class IsInvisibleDirective {
  @Input() visibility = true;
  @HostBinding('style.display') display;
  constructor() { }

  ngOnInit() {
    if (this.visibility) this.display = "block";
    else this.display = "none";
  } 

}
