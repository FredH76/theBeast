import { Directive, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the FullHeightDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[full-height]' // Attribute selector
})
export class FullHeightDirective {

  el: any;

  constructor(public element: ElementRef, public renderer: Renderer) {
    this.el = this.element.nativeElement;
  }

  /**
   * function called after view is checked (several times after ngAfterViewInit())
   */
  ngAfterViewChecked() {
    //get the image container
    let imageContainer = this.findContainer(this.el);

    //get height of the image container
    let num = imageContainer.clientHeight.toString();

    //set height of the image
    this.renderer.setElementStyle(this.el, 'height', num + "px");
    console.log(this.el.parentNode.parentNode.clientHeight);
  }

  /** 
    * search for the closest element with the class "imageContainer"
    */
  findContainer(el) {
    let orignialEl = el;
    while ((el = el.parentElement) && (el != null) && !el.classList.contains("imageContainer"));
    if (el == null) {
      console.warn("you need to use an element with a 'imageContainer' class when using 'full-height' directive");
      return orignialEl;
    }
    else
      return el;
  }

}
