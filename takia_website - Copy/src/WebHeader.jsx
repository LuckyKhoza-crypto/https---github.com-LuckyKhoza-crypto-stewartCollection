import logoImage from './Images/image3.jpeg';
import {Button, Container, Navbar, Modal} from 'react-bootstrap';
import {useState, useContext} from 'react';
import { CartContext } from './CartContext';
import {CartProvider} from "./CartContext";
import { CartProduct } from './productList/CartProduct';

export function WebHeader() {

    const cart = useContext(CartContext);
    
    

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

 

    const checkout = async () => {
        await fetch('http://localhost:4000/checkout', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if (response.url){
                 window.location.assign(response.url);
            }
        })
    }

    const productsCount = cart.getTotalItems();

    return (
        <>
        <CartProvider>
            <Navbar expand="sm" className='header'>
                <Navbar.Brand href="/">Sterward Collection</Navbar.Brand>
                <Navbar.Brand href="/productList/products/1">Products</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse className='justify-content-end'>
                    <Button onClick={handleShow}>Cart {productsCount} Items</Button>
                </Navbar.Collapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                    <>
                        <p>Items in your cart:</p>
                        {cart.items.map((currentProduct, idx) => (
                            <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}></CartProduct>
                        ))}
                        
                        <h1>Total: ${cart.getTotalCost().toFixed(2)}</h1>
                        <Button variant='success' onClick={checkout} >
                            Check Out Cart
                        </Button>
                    </>
                    :
                    <h1>Cart is empty</h1>}
                    
                </Modal.Body>
            </Modal>
            <h2 className="discountDeal">FREE SHIPPING FOR ORDERS OVER $30</h2>
        </CartProvider>
        </>
        
    )
}