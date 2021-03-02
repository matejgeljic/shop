import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap';
import Message from '../../components/message/Message';
import {
  addProductToCart,
  removeProductFromCart,
} from '../../actions/cartActions';
import { getSubtotal } from '../../utils';

const CartPage = ({ history }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  const removeFromCartHandler = (item) => {
    dispatch(removeProductFromCart(item.id));
  };
  const checkoutHandler = () => {
    history.push('/login?redirect=shipping');
  };

  return (
    <>
      <Row>
        {cartItems.length === 0 ? (
          <Message>Your cart is empty</Message>
        ) : (
          <>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col md={3}>Product</Col>
                  <Col md={3}>Name</Col>
                  <Col md={2}>Price</Col>
                  <Col md={2}>Quantity</Col>
                  <Col md={2}>Total</Col>
                </Row>
              </ListGroup.Item>
              {cartItems.map((item) => (
                <ListGroup.Item key={item.id}>
                  <Row>
                    <Col md={3}>
                      <Image src={item.image} alt={item.name} fluid />
                    </Col>
                    <Col md={3} className="my-auto">
                      <Link to={`/product/${item.id}`}>{item.name}</Link>
                    </Col>
                    <Col md={2} className="my-auto">
                      ${item.price}
                    </Col>
                    <Col md={2} className="my-auto">
                      {item.quantity}
                    </Col>
                    <Col md={2} className="my-auto">
                      ${item.price * item.quantity}
                      <Button
                        type="button"
                        variant="light"
                        onClick={() => removeFromCartHandler(item)}
                      >
                        <i
                          className="fas fa-times"
                          style={{ fontSize: 22 }}
                        ></i>
                      </Button>
                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
              {/*Checkout */}
            </ListGroup>
            <Row>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h4>Total price: ${getSubtotal(cartItems, true)}</h4>
                  <h4>For: {getSubtotal(cartItems)} items</h4>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Button
                    type="button"
                    className="btn-block"
                    onClick={checkoutHandler}
                  >
                    Checkout
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Row>
          </>
        )}
      </Row>
    </>
  );
};

export default CartPage;
