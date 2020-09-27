import React, { useState, useEffect } from 'react';
import './App.css';
import Row from './Components/Row';
import requests from './requests';
import Header from './Components/Header';
import Navbar from './Components/Navbar';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log(requests)
    let req = requests.map((val) => {
      return fetch(val);
    })
    Promise.all(req)
      .then(data => {
        let jsonData = data.map(val => {
        return val.json();
      })
      Promise.all(jsonData).then(dat => {
        console.log(dat);
        setData(dat)
      });
      })
  }, [])

  return (
    <div className="App">
      {/* NAVBAR */}
      <Navbar />
      {/* MAIN IMAGE */}
      <Header data={data[0]}/>

      {/* ROWS */}
      <div className="row-container">
        <Row title="Trending" data={data[0]} first={true}/>
        <Row title="Netflix originals" data={data[1]}/>
        <Row title="Top rated" data={data[2]}/>
        <Row title="Action" data={data[3]}/>
        <Row title="Comedy" data={data[4]}/>
        <Row title="Horror" data={data[5]}/>
        <Row title="Romance" data={data[6]}/>
        <Row title="Documentar" data={data[7]}/>
      </div>
    </div>
  );
}

export default App;
