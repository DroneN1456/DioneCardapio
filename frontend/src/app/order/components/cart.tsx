"use client";

import { useState } from "react";
import { ItemDTO } from "../dtos/item.dto";
import { Button, Container, Offcanvas, Row } from "react-bootstrap";
import CartItem from "./cartItem";

export default function Cart({ cart }: { cart: ItemDTO[] }) {
  const [showCartBtn, setShowCartBtn] = useState(true);
  const [showCart, setShowCart] = useState(false);

  function handleOpen() {
    setShowCart(true);
    setShowCartBtn(false);
  }

  function handleClose() {
    setShowCart(false);
    setShowCartBtn(true);
  }
  return (
    <div>
      {cart.length > 0 && showCartBtn && (
        <div className="w-100 fixed-top m-4">
          <Button
            className="bi bi-cart fs-2 rounded-circle text-secondary"
            onClick={handleOpen}
          ></Button>
        </div>
      )}
      <Offcanvas show={showCart} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Carrinho</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            {cart.map((item) => {
              return <CartItem key={item.product._id} item={item} />;
            })}
            <Row className="fixed-bottom m-2">
              <h3>
                Total: <span style={{ color: "var(--price-color)" }}>
                  {cart
                    .reduce((acumlator, item) => {
                      return acumlator + item.quantity * item.product.price;
                    }, 0)
                    .toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                </span>
              </h3>
            </Row>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}
