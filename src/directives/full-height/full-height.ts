import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[full-height]' // Attribute selector
})
export class FullHeightDirective {

  el: any;

  constructor(public element: ElementRef, public renderer: Renderer) {
    this.el = this.element.nativeElement;
  }

  /**
   * function to automatically adjust image height to vertical space available
   */
  ngAfterContentChecked() {
    let height: number;

    //get the image container
    let imageContainer = this.findImageContainerof(this.el);
    let contHeight = imageContainer.clientHeight;

    /*get height of navBar
    let navbarElt = document.getElementsByClassName("toolbar");
    let navHeight = navbarElt[0].clientHeight;
    

    //compute final heigth
    height = contHeight - navHeight;
    */

    //set height of the image
    this.renderer.setElementStyle(this.el, 'height', contHeight + "px");
  }


  /** 
    * search for the closest element with the class "imageContainer"
    */
  findImageContainerof(el) {
    let orignialElt = el;

    // loop to get to parent element automatically
    while ((el = el.parentElement) && (el != null) && !el.classList.contains("imageContainer"));

    // return container element or original element (if no cmatch found)
    if (el == null) {
      console.warn("you need to use an element with a 'imageContainer' class when using 'full-height' directive");
      return orignialElt;
    }
    else
      return el;
  }

}
