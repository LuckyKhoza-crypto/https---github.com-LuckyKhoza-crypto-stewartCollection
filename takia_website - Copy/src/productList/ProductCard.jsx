import {Card, Button, Form, Row, Col} from 'react-bootstrap';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { Container } from "react-bootstrap";

// import candle1 from '../images/candle1.jpg';

export function ProductCard (props) {//props.product is the product we are selling
    const product = props.product;
    const cart = useContext(CartContext);
    const productQuantity = cart.getProductQuantity(product.id);
    
    return (
        <>
        <Container>
            <Card style={{ backgroundColor: 'pink', padding: '2%', margin:'10%' }} >
                <Card.Body>
                    <Card.Img variant="top" src={product.image} alt={product.title} 
                        style={{height: '200px', width:'100%', objectFit: 'scale-down'}}
                    /> 
                    <Card.Title> {product.title} </Card.Title>
                    <Card.Text>$ {product.price} </Card.Text>
                    {productQuantity > 0 ? 
                        <>
                            <Form as={Row}>
                                <Form.Label column="true" sm="6">In Cart: {productQuantity}</Form.Label>
                                <Col sm="6">
                                    <Button sm="6" onClick={() => cart.removeOneFromCart(product.id)} className='mx-2'>-</Button>
                                    <Button sm="6" onClick={() => cart.addOneToCart(product.id)} className='mx-2'>+</Button>
                                    
                                </Col>
                            </Form>
                            <Button variant='danger' onClick={() => cart.removeAllFromCart(product.id)} className='my-2' >Remove All</Button>

                        </>
                        :
                        <Button variant="primary" onClick={() => cart.addOneToCart(product.id)} >
                        Add to Cart
                        </Button> 
                    
                    }
                    
                </Card.Body>
                
            </Card>
            </Container>
        </>
    )
}

export default ProductCard;