import { useId } from "react"
import { CartIcon, ClearCartIcon, RemoveFromCartIcon } from "./Icons"

export function Cart () {
    const cartCheckboxId = useId

    return (
        <>
            <label className='cart-button' htmlFor={ cartCheckboxId }>
                <CartIcon />
            </label>
            <input id={ cartCheckboxId } type='checkbox' hidden />
                <ul>
                    <li>
                        <img
                            src=''
                            alt=''
                        />
                    </li>
                </ul>
            <aside className='cart'>

            </aside>
        </>
    )
}