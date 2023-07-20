import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getProductData } from './ProductStore';

export function CartProduct (props) {

    const cart = useContext(CartContext);
    const id = props.id;
    const quantity = props.quantity;
    const productData = getProductData(id);

    return (
        <div>
            <h3>{productData.title}</h3>
            <p>{quantity} total</p>
            <p>$ { (quantity * productData.price).toFixed(2) }</p>
            <hr></hr>
        </div>
    )
}

export default CartProduct;