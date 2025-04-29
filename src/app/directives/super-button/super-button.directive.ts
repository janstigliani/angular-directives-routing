import { Directive, ElementRef, inject, input, Input } from '@angular/core';

@Directive({
  selector: '[appSuperButton]'
})
export class SuperButtonDirective {

  el = inject(ElementRef);

  // @Input({alias: "appSuperButton"}) backgroundColor:string = "crimson";

  @Input({alias: "appSuperButton"}) set backgroundColor(value:String){
    if(value) {
      this.el.nativeElement.style.backgroundColor = value;
    }
  }

  @Input({alias: "font-color"}) set fontColor(value:String){
    if(value) {
      this.el.nativeElement.style.color = value;
    }
  }
  
  constructor() { 
    this.el.nativeElement.style.backgroundColor = "crimson";
    console.log("direttiva", this.el)
  }

  // ngOnInit() {
  //   this.el.nativeElement.style.backgroundColor = this.backgroundColor1;
  //   console.log("direttiva", this.el)
  // }

}
