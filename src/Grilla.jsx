import Pelis from './Peliculas.json'
import { Tarjetas } from './Tarjetas'

export const Grilla = () => {
   
    return (
        
        <div>
            {
                Pelis.map( (movie)=>(
                  <Tarjetas key={movie.id} pelicula={movie}/>
                            
                ))
            }
        </div>
    )
}
