import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/cardapio'),
    OrderModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
