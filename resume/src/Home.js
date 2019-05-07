import React from 'react';
import Intro from './components/Intro';
import './style/Home.css'
import About from './components/About';
import ReactDOM from 'react-dom';

function Home(){

    return(

        <div>
            <Intro />
            <About />
        </div>
    ); 
}

export default Home;