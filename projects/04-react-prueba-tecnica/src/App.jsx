import { useCatImage} from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
import './App.css'

// const CAT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}`


export function App (){
    const { fact, refreshFact } = useCatFact()
    const { imageUrl } = useCatImage({ fact })

 
    const handleClick = async () => {
        refreshFact()
    }

    return (
        <main>
            <h1>Apps de gatitos</h1>

            <button onClick={handleClick}>Get new fact</button>
            {fact && <p>{fact}</p>}
            {imageUrl && <img src={imageUrl} alt={`Imagen de un gato con la primera palabra del fact:${fact} `} ></img>}
        </main>
        
    )
}