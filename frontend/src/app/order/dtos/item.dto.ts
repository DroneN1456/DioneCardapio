import { ProductDTO } from "./product.dto";

export class ItemDTO {
  constructor(product: ProductDTO, quantity: number) {
    this.product = product;
    this.quantity = quantity;
  }
  product: ProductDTO;
  quantity: number;
}
