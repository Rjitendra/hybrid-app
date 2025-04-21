import * as angular from "angular";
import { IProduct } from "../interfaces/iproduct";
import { ProductService } from "../services/product.service";
import template from "../views/product.add.html";
import "./../css/product-add.css";

class ProductAddController {
  static $inject = ["ProductService"];

  newProduct: Partial<IProduct> = {};
  // Define callback functions as class properties
  onAdded!: (event: { $event: IProduct }) => void; // Correct type for AngularJS & binding
  onCancel!: () => void;

  constructor(private productService: ProductService) {}

  addProduct(): void {
    if (this.newProduct.name && this.newProduct.price) {
     const product = {
        name: this.newProduct.name,
        price: this.newProduct.price,
        description: this.newProduct.description || "",
      };
      this.newProduct = {}; // Reset form
      this.onAdded({ $event: product }); // Correct way to emit with $event
    }
  }

  cancel(): void {
    this.newProduct = {}; // Reset form
    this.onCancel(); // Call parent callback
  }
}

export const ProductAddComponent: angular.IComponentOptions = {
  bindings: {
    onAdded: "&", // Callback when product is added
    onCancel: "&", // Callback when cancelled
  },
  template: template,
  controller: ProductAddController,
  controllerAs: "$ctrl",
};
