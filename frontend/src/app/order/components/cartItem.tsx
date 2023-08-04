import { Card, Col, Row } from "react-bootstrap";
import { ProductDTO } from "../dtos/product.dto";
import { ItemDTO } from "../dtos/item.dto";

export default function CartItem({ item }: { item: ItemDTO }) {
  return (
    <Row className="mt-3 shadow-sm">
      <Card>
        <Row className="no-gutters">
          <Col
            sm={4}
            xs={4}
            className="d-flex flex-wrap justify-content-center align-content-center"
          >
            <Card.Img
              src={`/orderImages/${item.product.image}`}
              style={{ width: "100%", height: "4rem" }}
            />
          </Col>
          <Col sm={8} xs={8}>
            <Card.Body>
              <Card.Title>
                {item.quantity}x {item.product.name}
              </Card.Title>
              <Card.Text>
                {item.product.description}
                <h4 style={{ color: "var(--price-color)" }}>
                  {(item.product.price * item.quantity).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </h4>
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Row>
  );
}
