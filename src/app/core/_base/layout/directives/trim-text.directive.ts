import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[ktTrimText]'
})
export class TrimTextDirective {

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef,
    private formControl: FormControl,

    // private formControl: FormControl
  ) { }

  @HostListener("change")
  onChange() {
    let value = this.formControl.value;

    if (value) {
      value = value.trim();
      this.renderer.setProperty(
        this.elementRef.nativeElement, "value", value);
      this.renderer.setAttribute(
        this.elementRef.nativeElement, "value", value);
      this.formControl.setValue(value)
      // this.ngModel.update.emit(value);
    } else {
      this.renderer.setProperty(
        this.elementRef.nativeElement, "value", null);
      this.renderer.setAttribute(
        this.elementRef.nativeElement, "value", null);
      // this.ngModel.update.emit("");
      this.formControl.setValue("")

    }
  }


}
