
import * as angular from 'angular';
import './app/styles.css';
import './app/app.module';

angular.element(document).ready(() => {
  angular.bootstrap(document, ['myApp']);
});