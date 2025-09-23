import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import { useCart } from './../hooks/useCart';
import './cart.css'

function CartItem({ thumbnail, price, title, quantity, addToCart }){
    return (
        <li>
            <img 
                src={thumbnail}
                alt={title} 
            />
            <div>
                <strong>{title}</strong> - ${price}
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button style={{color:'white'}} onClick={addToCart}>➕</button>
            </footer>
        </li>
    )
}

export function Cart () {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart } = useCart()

//     fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log())

    return (
        <>    
            <label className='cart-button' htmlFor={ cartCheckboxId }>
                <CartIcon />
            </label>
            <input id={ cartCheckboxId } type='checkbox' hidden />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem 
                            key={product.id} 
                            addToCart={() => addToCart(product)}
                            {...product} />
                    ))}
                </ul>
                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
        </aside>
    </>
    )
}