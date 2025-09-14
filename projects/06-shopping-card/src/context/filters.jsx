import { createContext } from "react";

// 1. Crear el Contexto
//    Este es el que tenemos que consumir
export const FiltersContext = createContext() 

// 2. Crear el Provider, para proveer el contexto a los componentes
//    Este es el que nos provee de acceso al contexto
export function FiltersProvider ({ children }) {
    return (
        <FiltersContext.Provider value={{
            category: 'all',
            minPrice: 0
        }}>
            {children}
        </FiltersContext.Provider>
    )
}

