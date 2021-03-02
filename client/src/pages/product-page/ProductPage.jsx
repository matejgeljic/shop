import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button } from 'react-bootstrap';
import Rating from '../../components/rating/Rating';
import Loader from '../../components/loader/Loader';
import Message from '../../components/message/Message';
import {
  listProductDetails,
  clearProductDetails,
} from '../../actions/productActions';

import { addProductToCart } from '../../actions/cartActions';

const ProductPage = ({ match }) => {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));

    return () => {
      dispatch(clearProductDetails());
    };
  }, [dispatch, match]);

  const productToCart = {
    id: product._id,
    name: product.name,
    price: product.price,
    image: product.image,
  };

  const addToCart = (product) => {
    dispatch(addProductToCart(product));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
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
                  onClick={() => addToCart(productToCart)}
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
      )}
    </>
  );
};

export default ProductPage;
