"use client";
import { Button, Card, Col } from "react-bootstrap";
import { ProductDTO } from "../dtos/product.dto";
import { ItemDTO } from "../dtos/item.dto";

export default function OrderItem({
  product,
  addItemToCart,
}: {
  product: ProductDTO;
  addItemToCart: any;
}) {
  return (
    <Col lg={6} className="mt-3">
      <Card className="p-4 shadow">
        <Card.Img
          variant="top"
          src={`/orderImages/${product.image}`}
          className="shadow"
          style={{ width: "100%", height: "20rem" }}
        />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <h3 style={{ color: "var(--price-color)" }}>
            {product.price.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </h3>
          <Button
            variant="primary"
            onClick={() => {
              addItemToCart(new ItemDTO(product, 1));
            }}
          >
            <i className="bi bi-cart fs-5" />
            Adicionar Ao Carrinho
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
