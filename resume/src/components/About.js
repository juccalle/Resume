import React from 'react';
import '../style/About.css'


class About extends React.Component{
    render(){
        return(
            <div className='about'>

                <div className='title'>
                    <h1>ABOUT ME</h1>
                </div>

                <div className='aboutPicture'>

                </div>
                
                <div className='aboutText'>
                        <p>I am currently a senior at UCF majoring in Computer Science. 
                           I’m excited to get to work creating powerful and useful 
                           applications that have an impact on its users.g</p>
                </div>
            </div>
        )
    }
}

export default About;