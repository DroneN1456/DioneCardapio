import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderDTO } from './dtos/order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}
  @Post()
  async CreateOrder(@Body() newOrder: OrderDTO) {
    return this.orderService.CreateOrder(newOrder);
  }
}
