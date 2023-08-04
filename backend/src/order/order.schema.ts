import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Item } from './dtos/item.dto';
import { HydratedDocument } from 'mongoose';

export type OrderDocument = HydratedDocument<Order>;

@Schema()
export class Order {
  @Prop()
  createdAt: Date;
  @Prop([Item])
  items: Item[];
}

export const OrderSchema = SchemaFactory.createForClass(Order);
