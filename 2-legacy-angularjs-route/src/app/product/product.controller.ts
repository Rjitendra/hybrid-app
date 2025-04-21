export class ProductController {
  static $inject = ["$location", "$routeParams", "ProductService"];

  products: any[] = [];
  product: any = {};
  showDeleteModal = false;
  productIdToDelete!: number | null;
  constructor(
    private $location: ng.ILocationService,
    private $routeParams: ng.route.IRouteParamsService,
    private productService: any
  ) {
    const id = $routeParams["id"];

    if ($location.path().includes("edit")) {
      this.product = this.productService.getById(id);
    }

    if ($location.path() === "/products") {
      this.products = this.productService.getAll();
    }
  }

  saveProduct() {
    if (this.product.id) {
      this.productService.update(this.product);
    } else {
      this.productService.add(this.product);
    }
    this.$location.path("/products");
  }

  deleteProduct(id: number) {
    this.productIdToDelete = id;
    this.showDeleteModal = true;
  }
  goBack() {
    this.$location.path("/products");
  }
  confirmDelete(id: number): void {
    this.productService.delete(id);
    this.products = this.productService.getAll();
  }

  deleteConfirmed(): void {
    if (this.productIdToDelete !== null) {
      this.confirmDelete(this.productIdToDelete);
    }
    this.closeDeleteModal();
  }

  closeDeleteModal(): void {
    this.showDeleteModal = false;
    this.productIdToDelete = null;
  }
}
