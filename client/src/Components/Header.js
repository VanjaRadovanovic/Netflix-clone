import React, { useState, useEffect } from 'react';
import './Header.css'

function Header({ data }){

    const [header, setHeader] = useState('');
    const [headerDes, setHeaderDes] = useState({})

    useEffect(() => {
        if(data){
            let randomMovie = Math.floor(Math.random() * data.results.length)
            let title = data.results[randomMovie].original_name;
            (!data.results[randomMovie].original_name) ? title = data.results[randomMovie].original_title : title = data.results[randomMovie].original_name;
            setHeaderDes({title: title, des: data.results[randomMovie].overview});
            setHeader(`https://image.tmdb.org/t/p/original${data.results[randomMovie].backdrop_path}`);
        }
    }, [data])

    return(
        <div className="header">
            <div className="header-container">
                <div className="header-description">
                    <h1>{headerDes.title}</h1>
                    <div>
                        <button>Play</button>
                        <button>My List</button>
                    </div>
                    <p>{headerDes.des}</p>
                </div>
            </div>
            <img alt="poster" src={header}/>
        </div>
    )
}

export default Header;