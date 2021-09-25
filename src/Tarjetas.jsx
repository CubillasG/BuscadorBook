import React from 'react'

export const Tarjetas = ({  pelicula }) => {
    const imagenURL = "http://image.tmdb.org/t/p/w300" + pelicula.poster_path;
    return <li>
                <img src={imagenURL} alt={pelicula.title}/>
                {pelicula.title}
        </li>
        
    
}
