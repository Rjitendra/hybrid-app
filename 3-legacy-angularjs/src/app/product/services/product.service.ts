import { IProduct } from "../interfaces/iproduct";

export class ProductService {
    private products: IProduct[] = [
        {
          id: 1,
          name: "Product A",
          price: 100,
          description: "High quality product",
        },
        { id: 2, name: "Product B", price: 200, description: "Premium product" },
        { id: 3, name: "Product C", price: 300, description: "Luxury product" },
      ];
  
    getAll() {
      return this.products;
    }
  
    getById(id: number) {
      return this.products.find(p => p.id == id);
    }
  
    add(product: any) {
      product.id = Date.now();
      this.products.push(product);
    }
  
    update(updated: any) {
      const index = this.products.findIndex(p => p.id === updated.id);
      if (index !== -1) this.products[index] = updated;
    }
  
    delete(id: number) {
      this.products = this.products.filter(p => p.id !== id);
    }
  }
  