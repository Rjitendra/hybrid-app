import { Directive, ElementRef, Injector, Input } from '@angular/core';
import { UpgradeComponent } from '@angular/upgrade/static';

@Directive({
  standalone: false,
  selector: 'angularjs-wrapper',
})
export class AngularJsWrapperComponent extends UpgradeComponent {
  @Input() title: string = '';
  constructor(elementRef: ElementRef, injector: Injector) {
    super('productList', elementRef, injector);
  }
}
