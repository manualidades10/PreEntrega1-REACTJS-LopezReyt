// import {createContext, useContext, useState } from 'react'

// export const CartContext = createContext();


// //eslint-disable-next-line no-unused-vars
// export const CartProvider = ({children}) =>{
//     const [cart, setCart] = useState([]);
    
//     const addToCart = (product) =>{
//         setCart([...cart, product]);
//     };
//     const removeFromCart = (productId) =>{
//         setCart(cart.filter(item => item.id !== productId));
//     };
//     const emptyCart = () =>{
//         setCart([]);
//     }

//     const value = {
//         cart,
//         addToCart,
//         removeFromCart,
//         emptyCart
//     }

//     return(
//         <>
            
//             <CartContext.Provider value={value}>
//                 {children}
//             </CartContext.Provider>
            
    
            {/* <div>
                <h2>CARRITO DE COMPRAS</h2>
                {cart.map(product => (
                    <div key={product.id}>
                      <img src={product.image} alt=''/>
                      <h3>{product.title}</h3>
                      <p>{product.price}</p>
                      <button onClick={ () => removeFromCart(product.id)}>Quitar del carrito</button>  
                    </div>
                ))}
                <button onClick={ () => emptyCart()}>VACIAR CARRITO</button>
            </div> */}
        // </>
    // )
// }

// export const useCart = () => useContext(CartContext);