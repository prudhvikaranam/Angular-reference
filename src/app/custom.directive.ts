import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el : ElementRef) { 
    this.el.nativeElement.click();
    this.el.nativeElement.style.background = 'red';
    this.el.nativeElement.addEventListener('click',() => {
      // alert('You clicked on custom attribute');
      this.el.nativeElement.classList.add('customStyle');
    });
  }
  @HostListener('mouseenter')
  onmouseenter(){
    console.log('Entered custom directive');
  }

  // @HostListener('mouseleave')
  // onmouseleave(){
  //   console.log('removed custom directive');
  // }

}
