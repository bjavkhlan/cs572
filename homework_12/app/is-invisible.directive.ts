import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[isInvisible]'
})
export class IsInvisibleDirective {
  @Input() isInvisible = true;
  @HostBinding('style.display') display;
  constructor() { }

  ngOnInit() {
    if (this.isInvisible) this.display = "block";
    else this.display = "none";
  } 

}
