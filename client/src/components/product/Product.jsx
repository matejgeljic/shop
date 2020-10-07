import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Row, Col } from 'react-bootstrap';
import Rating from '../rating/Rating';

const Product = ({ product }) => {
  return (
    <Card className="my-3 rounded">
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant="top" />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div">{product.name}</Card.Title>
        </Link>
        <Row>
          <Col sm={6}>
            <div className="my-3">
              <Card.Text as="h5">${product.price}</Card.Text>
            </div>
          </Col>
          <Col sm={6}>
            <Card.Text as="div">
              <div className="my-3">
                <Rating
                  value={product.rating}
                  text={`${product.numReviews} reviews`}
                />
              </div>
            </Card.Text>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
