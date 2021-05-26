import React, { Component } from 'react'

class About extends Component{
    justclick() {

        alert('the button has been clicked!')
    }
    render(){
        return(
            <div >
            <div style={{marginLeft:`200px`, display:`inline-block`}}>
            <ul >
                <h1>Education</h1>
                <li>
                    <h2>BSc,Computer Science and Engineering
                    </h2>
                    <p>-University of Asia Pacific
                    </p>
                    <p>2017-2021</p>
                    </li>
                    <li>
                    <h2>HSC
                        </h2>
                        <p>-Dupchanchia Women’s College,Dupchanchia, Bogra.
                    </p>
                    <p>2016</p>
                    </li>
                    <li>
                    <h2>SSC
                        </h2>
                        <p>-Talora Girls’ High School, Bogra.
                    </p>
                    <p>2014</p>
                    </li>
            </ul>
            </div>
    
            <div style={{marginLeft:`120px`, display:`inline-block`,marginRight:'100px'}}>
            <ul>
                <h1>ACHIVEMENTS</h1>
                <li>
                    <p>Inter University CSE Carnival, UAP, 2019(Software Showcase).
                    </p>
                    <p>1st Runner-up
                    </p>
                    <p>2018,2019</p>
                    </li>
                    <li>
                    
                    <p>Academic : </p>
                       
                       
                           <p> Achieved “Dean Award” for excellent result on 4th year and 1st semester.</p>
                          <p> Achieved “Merit Award” for excellent result on 2nd year and 1st semester.
                           </p>
                       
                    </li>
            </ul>
            </div>
    
    
          
           
            
            </div>
        )
    }
}

export default About;