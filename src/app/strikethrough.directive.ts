import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) {}

  //user actions 
  //click that creates a line-through on one click
  @HostListener("click") onClicks(){
    this.textDeco("line-through")
  }

  //click that removes the line-through on double-click
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("None")
  }

  //textDeco()function - takes in an action and then performs a text-decoration using the action  
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }

} 