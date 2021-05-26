import React, { Component } from 'react'

class Project extends Component{
    render(){
        return(
            <div style={{marginLeft:'200px'}}>
          
                <ul  className='Project Name' >
                <h1>Projects:</h1>
                <div >
                    <a href>
                        <li>Smart Fire Alarm System</li></a>
                        </div>

                    <div><a href>
                        <li>Covid-19 Bangladesh Prediction</li></a>
                        </div>
                    <div><a href>
                        <li>Othello Game</li></a>
                        </div>
                    <div><a href>
                        <li>Happiness Tracker</li></a>
                        </div>
                    <div><a href>
                        <li>Teapot Project</li></a>
                        </div>
                      
                    <div><a href>
                        <li>Basket Ball Game</li></a>
                        </div>
                    <div><a href>
                        <li>Parser in C</li></a>
                        </div>
                    <div><a href>
                        <li>Lexical Analyzer in C</li></a>
                        </div>

                    
                    
                </ul>
            </div>
        )
    }
}

export default Project;