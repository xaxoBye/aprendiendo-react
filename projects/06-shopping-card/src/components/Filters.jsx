import { useState, useId } from 'react'
import './Filters.css'

export function Filters ({ onChange }) {
    const [minPrice, setMinPrice] = useState(0)
    const minPriceFilterId = useId()
    const categoryFilteredId = useId()

    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value)
        onChange(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        onChange(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    return (
        <section className="filters">
            <div>
                <label htmlFor={ minPriceFilterId }>Precio a partir de:</label>
                <input
                    type='range'
                    id={ minPriceFilterId }
                    min='0'
                    max='1000'
                    value={minPrice} 
                    onChange={handleChangeMinPrice}
                />
                <span>{minPrice} € </span>
            </div>

            <div>
                <label htmlFor={ categoryFilteredId }>Categoría</label>
                <select id={ categoryFilteredId } onChange={handleChangeCategory}>
                    <option value='all'>Todas</option>
                    <option value='beauty'>Belleza</option>
                    <option value='fragrances'>Fragancias</option>  
                    <option value='furniture'>Muebles</option>   
                    <option value='groceries'>Alimentación</option>                                   
                </select>
            </div>
        </section>
    )
}