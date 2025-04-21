import * as angular from "angular";
import { IProduct } from "../interfaces/iproduct";
import { ProductService } from "../services/product.service";
import template from "../views/product.list.html";
import "./../css/product-list.css";

// Controller
class ProductListController {
  static $inject = ["ProductService"]; // Inject the service

  productList: IProduct[] = [];

  showDeleteModal = false;
  showAddProduct = false;
  showEditProduct = false;
  showProductDetails = false;
  showProductList = true;

  productToDelete: IProduct | null = null;
  productToEdit = {};

  constructor(private productService: ProductService) {
    this.loadProducts();
  }

  loadProducts() {
    this.productList = this.productService.getAll();
  }

  viewDetails(product: IProduct): void {
    this.productToEdit = { ...product };
    this.setViewType("details");
  }

  editProduct(product: IProduct) {
    this.productToEdit = { ...product };
    this.setViewType("edit");
  }

  addProduct(): void {
    this.setViewType("add");
  }

  cancel(): void {
    this.setViewType("list");
  }

  showList() {
    this.loadProducts();
    this.setViewType("list");
  }

  deleteProduct(productId: number): void {
    this.productToDelete =
      this.productList.find((p) => p.id === productId) || null;
    this.showDeleteModal = true;
  }

  deleteConfirmed(): void {
    if (this.productToDelete) {
      const index = this.productList.findIndex(
        (p) => p.id === this.productToDelete!.id
      );
      if (index !== -1) {
        this.productList.splice(index, 1);
      }
    }
    this.closeDeleteModal();
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.productToDelete = null;
  }

  handleSave(product: IProduct) {
    if (product.id) {
      this.productService.update(product);
    } else {
      this.productService.add(product);
    }
    this.showList();
  }

  private setViewType(view: "list" | "add" | "edit" | "details" | "delete") {
    this.showDeleteModal = view === "delete";
    this.showAddProduct = view === "add";
    this.showEditProduct = view === "edit";
    this.showProductDetails = view === "details";
    this.showProductList = view === "list";
  }
}

// Component
export const ProductListComponent: angular.IComponentOptions = {
  template: template,
  controller: ProductListController,
};
