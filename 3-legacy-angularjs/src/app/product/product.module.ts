import * as angular from "angular";
import {
  HoverDirective,
  ProductAddComponent,
  ProductDetailComponent,
  ProductEditComponent,
  ProductListComponent,
  ProductService,
} from ".";

export const productModule: angular.IModule = angular
  .module("product", [])
  .component("productList", ProductListComponent)
  .component("productAdd", ProductAddComponent)
  .component("productEdit", ProductEditComponent)
  .component("productDetail", ProductDetailComponent)
  .directive("hoverRed", HoverDirective.factory())
  .service("ProductService", ProductService);
