import { createContext, useState } from "react";
import {productsArray, getProductData   } from "./productList/ProductStore";

export const CartContext = createContext ({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    removeAllFromCart: () => {},
    getTotalCost: () => {},
    getTotalItems: () => {},
});

export function CartProvider({children}) {

    const [cartItems, setCartItems] = useState(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        return storedCartItems ? JSON.parse(storedCartItems) : [];
      });
      
    function getProductQuantity (id) {
        const quantity = cartItems.find(product => product.id === id)?.quantity;

        if ( quantity === undefined ) {
            return 0;
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return quantity;
        
    }

    function addOneToCart (id) {
        const quantity = getProductQuantity(id);
        if ( quantity === 0 ) {
            setCartItems ([
                ...cartItems, {
                    id: id,
                    quantity: 1,
                }
            ])
        }
        else { //prodcut is already in cart
            setCartItems (
                cartItems.map(product => product.id === id ? {...product, quantity: product.quantity + 1} : product))
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function removeOneFromCart (id) {
        const quantity = getProductQuantity(id);
        if (quantity ==1){
            removeAllFromCart(id);
        }
        else {
            setCartItems (
                cartItems.map(
                    product => product.id === id ? {...product, quantity: product.quantity - 1} : product
                )
            )
        }
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function removeAllFromCart (id) {
        //if product meets the condition, add it to the array
        setCartItems (
            cartItems =>
            cartItems.filter(currentProduct =>{
                return currentProduct.id != id;
            })
        )
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }

    function getTotalCost () {
        let totalCost = 0;
        cartItems.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += productData.price * cartItem.quantity;
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        return totalCost;
        
    }

    function getTotalItems () {
        let totalItems = 0;
        cartItems.map((cartItem) => {
            totalItems += cartItem.quantity;
        });
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        return totalItems;
    }

    const contextValue = {
        items: cartItems,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        removeAllFromCart,
        getTotalCost,
        getTotalItems,
    }
    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;