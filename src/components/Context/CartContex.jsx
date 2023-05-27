import { createContext, useState } from "react";


export const CartContext = createContext ({
    cart: []
})

export const CartProvider =({ children}) => {
    const [cart, setcart] = useState([])

    console.log(cart)

    const addItem = (item, quantity) => {
        if (!isIncart(item.id)) {
            setcart (prev => [...prev, {...item, quantity}])
        } else{
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const CartUpdated = cart.filter(prod => prod.id !== itemId)
        setcart(CartUpdated)
    }
    const clearCart = () => {
        setcart([])
    }

    const isIncart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;