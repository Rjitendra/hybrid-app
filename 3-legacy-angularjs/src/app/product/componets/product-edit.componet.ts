import * as angular from "angular";
import { IProduct } from "../interfaces/iproduct";
import { ProductService } from "../services/product.service";
import template from "../views/product.edit.html";
import './../css/product-edit.css';

class ProductEditController {
  static $inject = ["ProductService"];

  product!: IProduct;
  isSaving = false;
  
  // Define all bindings as class properties
  productToEdit!: IProduct; // Input binding
  onAdded!: (event: { $event: IProduct }) => void; // Correct type for AngularJS & binding
  onCancel!: () => void; // Output binding

  constructor(private productService: ProductService) {}

  $onInit() {
    // Clone the product to avoid direct reference to service data
   this.product = { ...this.productToEdit };
  }

  save(): void {
    if (this.product.name && this.product.price) {
      this.isSaving = true;
      
      this.isSaving = false;
      this.onAdded({ $event: this.product });
    }
  }

  cancel(): void {
    this.onCancel(); // Notify parent
  }
}

export const ProductEditComponent: angular.IComponentOptions = {
  bindings: {
    productToEdit: "<", // Input product to edit
    onAdded: "&",
    onCancel: "&",
  },
  template:template,
  controller: ProductEditController,
  controllerAs: "$ctrl",
};
