"use client";
import { Container, Row } from "react-bootstrap";
import OrderItem from "./orderItem";
import Cart from "./cart";
import { useState } from "react";
import { ProductDTO } from "../dtos/product.dto";
import { ItemDTO } from "../dtos/item.dto";

export default function OrderContainer({ products }: { products: any[] }) {
  const [cart, setCart] = useState<ItemDTO[]>([]);

  async function addItemToCart(item: ItemDTO) {
    if (
      cart.filter((filterItem) => {
        return filterItem.product._id == item.product._id;
      }).length == 0
    ) {
      setCart([...cart, item]);
    } else {
      setCart(
        cart.map((mapItem) => {
          if (mapItem.product._id == item.product._id) {
            mapItem.quantity++;
          }
          return mapItem;
        })
      );
    }
  }
  return (
    <Container className="p-4">
      <Cart cart={cart} />
      <Row className="d-flex justify-content-center align-content-center mb-4">
        {products.map((product) => {
          return (
            <OrderItem
              product={product as ProductDTO}
              addItemToCart={addItemToCart}
              key={product._id}
            />
          );
        })}
      </Row>
    </Container>
  );
}
