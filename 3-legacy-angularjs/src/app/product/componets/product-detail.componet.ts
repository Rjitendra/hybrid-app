import * as angular from "angular";
import { IProduct } from "../interfaces/iproduct";
import { ProductService } from "../services/product.service";
import template from "../views/product.detail.html";
import "./../css/product-edit.css";

class ProductEditController {
  static $inject = ["ProductService"];

  product!: IProduct;
  isDisable = true;

  // Define all bindings as class properties
  productDetail!: IProduct; // Input binding
  onCancel!: () => void; // Output binding

  constructor(private productService: ProductService) {}

  $onInit() {
    // Clone the product to avoid direct reference to service data
    this.product = { ...this.productDetail };
  }

  cancel(): void {
    this.onCancel(); // Notify parent
  }
}

export const ProductDetailComponent: angular.IComponentOptions = {
  bindings: {
    productDetail: "<", // Input product to edit
    onSaved: "&",
    onCancel: "&",
  },
  template: template,
  controller: ProductEditController,
  controllerAs: "$ctrl",
};
