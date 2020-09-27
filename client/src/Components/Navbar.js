import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar(){
    const [bgForNavbar, setbgForNavbar] = useState({backgroundColor: 'transperant'});
    useEffect(() => {
        window.addEventListener('scroll', e => {
            if(window.scrollY > 300){
                setbgForNavbar({backgroundColor: 'black'})
            }else{
                setbgForNavbar({backgroundColor: 'transparent'})
                console.log('kata')
            }
        })
        return() => (
            window.removeEventListener('scroll')
        )
    }, [])

    return(
        <div style={bgForNavbar} className="navbar">
            <img className="logo_netflix" src={process.env.PUBLIC_URL + '/580b57fcd9996e24bc43c529.png'} alt="NETFLIX"/>
            <img className="avatar" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" alt="Avatar"/>
        </div>
    )
}

export default Navbar;