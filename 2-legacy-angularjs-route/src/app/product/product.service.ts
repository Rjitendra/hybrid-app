export class ProductService {
    private products = [
      { id: 1, name: 'Phone', price: 1000 },
      { id: 2, name: 'Laptop', price: 1500 },
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
  