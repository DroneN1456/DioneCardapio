import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private ProductModel: Model<Product>,
  ) {}

  async CreateProduct(newProduct: Product): Promise<Product> {
    const createdProduct = new this.ProductModel(newProduct);
    return createdProduct.save();
  }

  async GetProducts(): Promise<Product[]> {
    return this.ProductModel.find();
  }
}
