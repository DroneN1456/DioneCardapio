import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order } from './order.schema';
import { Model } from 'mongoose';
import { OrderDTO } from './dtos/order.dto';

@Injectable()
export class OrderService {
  constructor(@InjectModel(Order.name) private OrderModel: Model<Order>) {}

  async CreateOrder(newOrder: OrderDTO) {
    const createdOrder = new this.OrderModel();
    createdOrder.items = newOrder.items;
    createdOrder.createdAt = new Date();
    return createdOrder.save();
  }
}
