import React, { useState, useEffect } from 'react';
import './Row.css';

const baseUrl = 'https://image.tmdb.org/t/p/original';

function Row({ title, data, first }){
    const [movies, setMovies] = useState('');
    

    useEffect(() => {
    console.log(data, title)
    let img;
 
    
     
    if(data){
        let posterClass = 'poster ';
        if(first){
            posterClass += 'first-row'
        }
        
        setMovies(data.results.map((val) => {
            (first) ? img = val.poster_path : img = val.backdrop_path;
            
            return (<div className={posterClass}>
                       <img alt={val.original_name} src={`${baseUrl}${img}`}/>
                   </div>)
              }))
    }
    
    }, [data])
    

    return(
        <div>
            <h2 className="title">{title}</h2>
            <div className="posters-container">
                {movies}
            </div>
        </div>
    )
}

export default Row;