import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.schema';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async CreateProduct(@Body() newProduct: Product): Promise<Product> {
    return this.productService.CreateProduct(newProduct);
  }

  @Get()
  async GetProducts(): Promise<Product[]> {
    return this.productService.GetProducts();
  }
}
