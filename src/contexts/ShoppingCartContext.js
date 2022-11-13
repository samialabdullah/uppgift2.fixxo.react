import ShoppingCart from "../components/ShoppingCart";

const { createContext, useContext, useState } = require("react");

const ShoppingCartContext = createContext()

export const useShoppingCart = () => {
    return useContext(ShoppingCartContext)
}

export const ShoppingCartProvider = ({children}) => {
    const [cartproduct, setCartproduct] = useState([])

    const cartQuantity = cartproduct.reduce(
        (quantity, product) => product.quantity + quantity, 0
    )

    const getproductQuantity = (articleNumber) => {
        return cartproduct.find(product => product.articleNumber === articleNumber)?.quantity || 0 
    }

    const incrementQuantity = (cartproduct) => {
        const {articleNumber, product} = cartproduct 

        setCartproduct(items => {
            if (items.find(item => item.articleNumber  === articleNumber)  == null) {
                return [...items, { articleNumber, product, quantity: 1 }]
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }
    const decrementQuantity = (cartproduct) => {
        const {articleNumber} = cartproduct 

        setCartproduct(items => {
            if (items.find(item => item.articleNumber  === articleNumber).quantity  === 1) {
                return items.filter(item => item.articleNumber !== articleNumber) 
            } else {
                return items.map(item => {
                    if (item.articleNumber === articleNumber) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item
                    }
                })
            }
        })
    }

    const removeproduct = (articleNumber) => {
        setCartproduct(product => {
            return product.filter(product => product.articleNumber !== articleNumber)
        })
    }

    return <ShoppingCartContext.Provider value={{cartproduct, cartQuantity, getproductQuantity, incrementQuantity, decrementQuantity, removeproduct}}>
        {children}
        <ShoppingCart />
    </ShoppingCartContext.Provider>
}
