import * as angular from 'angular';
import 'angular-route';
import { ProductController } from './product/product.controller';
import { ProductService } from './product/product.service';
import { routes } from './app.routes';

angular
  .module('myApp', ['ngRoute'])
  .config(routes)
  .controller('ProductController', ProductController)
  .service('ProductService', ProductService);
