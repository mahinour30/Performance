import React, { useState } from 'react';
import ListItem from '../components/ListItem';

export const arr = [
    { category: 'hat', id: 0 },
    { category: 't-shirt', id: 1 },
    { category: 'pants', id: 2 },
    { category: 'dress', id: 3 },
    { category: 'jacket', id: 4 },
];

const ReactMemoPage = () => {
    const [cart, setCart] = useState([]);

    const addToCart = (item) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(cartItem => cartItem.id === item.id);
            if (existingItem) {
                // If item already exists in the cart, increase its quantity
                return prevCart.map(cartItem =>
                    cartItem.id === item.id
                        ? { ...cartItem, quantity: cartItem.quantity + 1 }
                        : cartItem
                );
            } else {
                // If item is not in the cart, add it with quantity 1
                return [...prevCart, { ...item, quantity: 1 }];
            }
        });
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            <ul>
                {arr.map(item => (
                    <li key={item.id}>
                        {item.category}
                        <button onClick={() => addToCart(item)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
            <h2>Cart Items</h2>
            <ul style={{ height: 300 }}>
                {cart.map(cartItem => (
                    <ListItem cartItem={cartItem} />
                ))}
            </ul>
        </div>
    )
};

export default ReactMemoPage;



// it's being rerendered because the cart list is being updated, but it shouldn't as the items list is not changing