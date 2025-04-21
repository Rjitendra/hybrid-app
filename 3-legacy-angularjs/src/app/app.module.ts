import * as angular from "angular";
import { productModule } from "./product/product.module"; // Import the product module

export const appModule: angular.IModule = angular.module("legacyApp", [
  productModule.name,
]);


// angular.module("legacyApp", []).component("productList", {
//   bindings: {
//     title: "@",
//   },
//   template: `<div class="legacy-product-list">
//                  <h3>{{$ctrl.title}}</h3>
//                  <ul>
//                    <li ng-repeat="item in [1,2,3]">Product {{item}}</li>
//                  </ul>
//                </div>`,
// });
