
import * as angular from 'angular';

export class HoverDirective implements angular.IDirective {
  restrict = 'A';
  link: angular.IDirectiveLinkFn = (scope: angular.IScope, element: angular.IAugmentedJQuery) => {
    element.on('mouseenter', () => {
      element.css('color', 'red');
    });
    element.on('mouseleave', () => {
      element.css('color', '#333');
    });
  };

  static factory(): angular.IDirectiveFactory {
    return () => new HoverDirective();
  }
}