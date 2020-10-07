import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../../components/rating/Rating';
import products from '../../products';

const ProductPage = ({ match }) => {
  const product = products.find((p) => p._id === match.params.id);

  return (
    <>
      <Row>
        <Col md={8}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        <Col md={4}>
          <ListGroup horizontal>
            <ListGroup.Item style={{ borderWidth: 0 }}>
              <h5>{product.name}</h5>
            </ListGroup.Item>
            <ListGroup.Item style={{ borderWidth: 0 }}>
              <h5>${product.price}</h5>
            </ListGroup.Item>
          </ListGroup>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={` ${product.numReviews} reviews`}
              />
            </ListGroup.Item>
            <ListGroup.Item>{product.description}</ListGroup.Item>
            <ListGroup.Item>
              {product.countInStock === 0 && (
                <p className="text-center"> Out of stock</p>
              )}
              <Button
                className="btn-block"
                type="button"
                disabled={product.countInStock === 0}
              >
                Add To Cart
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </>
  );
};

export default ProductPage;
