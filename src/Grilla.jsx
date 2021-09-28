import Pelis from './Peliculas.json'
import { Tarjetas } from './Tarjetas'
import colores from './PeliTarjeta.module.css'

export const Grilla = () => {
   
    return (
        
        <div className='container'>
            <div className='row'>
                <div className='col-12'>
            <ul className={colores.PeliContenedor}>
            {
                Pelis.map( (movie)=>(
                  <Tarjetas key={movie.id} pelicula={movie}/>
                            
                ))
            }
            </ul>
            </div>
            </div>
        </div>
    )
}
