import React from 'react';
import '../style/Intro.css'

class Intro extends React.Component{

    render(){
        return(

            <div className="middleText">
                <div className="headName">
                    <h1>Juan Calle</h1>
                </div>

                <div className="headText">
                    <h3>Computer Scientist passionate about design and practicality. </h3>
                </div>
            </div>
        )
    }
}

export default Intro;