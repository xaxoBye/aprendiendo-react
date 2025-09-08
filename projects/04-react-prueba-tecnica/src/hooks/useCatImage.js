import { useState, useEffect } from "react"

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState() 

    // para recuperar la imagen cada vez que tenemos una cita nueva
    useEffect(()=>{

        if(!fact) return

        const firstWord = fact.split(' ', 1).join()

        fetch(`https://cataas.com/cat/says/${firstWord}`)
            .then(respuesta => {
                const { url } = respuesta
                setImageUrl(url)
            })
    },[fact])

    console.log('IMAGEN ', imageUrl)
    return { imageUrl }
    
}
