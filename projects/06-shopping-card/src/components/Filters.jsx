import {  useId } from 'react'
import { useFilters } from '../hooks/useFilters.js'
import './Filters.css'

export function Filters () {
    const { filters, setFilters } = useFilters()

    const minPriceFilterId = useId()
    const categoryFilteredId = useId()

    const handleChangeMinPrice = (event) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))
    }

    const handleChangeCategory = (event) => {
        setFilters(prevState => ({
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
                    value={filters.minPrice} 
                    onChange={handleChangeMinPrice}
                />
                <span>{filters.minPrice} € </span>
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