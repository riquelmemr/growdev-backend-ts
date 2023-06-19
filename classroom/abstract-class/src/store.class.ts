import Manager from "./manager.class";
import Product from "./product.class";

class Store {
  public corporateName: string;
  public commercialManager: Manager;
  public financeManager: Manager;
  public createdAt: Date;
  public products: Product[] = [];
  
  constructor(corporateName: string, commercialManager: Manager, financeManager: Manager, createdAt: Date) {
    this.corporateName = corporateName;
    this.commercialManager = commercialManager;
    this.financeManager = financeManager;
    this.createdAt = createdAt;
  }

  addProduct(product: Product) {
    this.products.push(product);
  }
}

export default Store;