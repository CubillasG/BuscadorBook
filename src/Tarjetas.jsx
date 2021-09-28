import React from 'react'
import colores from './PeliTarjeta.module.css'

export const Tarjetas = ({  pelicula }) => {
        const imagenURL = "http://image.tmdb.org/t/p/w300" + pelicula.poster_path;
  
  return  <li className={colores.peliTarjeta}>
               <div> <img className={colores.peliImagen} src={imagenURL} alt={pelicula.title}/></div>
               <div className={colores.PeliText}>{pelicula.title}</div> 
          </li>
        
        
    
}
