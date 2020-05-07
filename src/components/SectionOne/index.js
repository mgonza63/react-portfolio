import React from 'react'

import './style.css'

const SectionOne = () => {
    return (
        <div className="container">
            
            <div className="row justify-content-md-center">
                <div className="col">
                    <h2 className="mt-5">Mauricio Gonzalez</h2>
                    <p className="lead text-justify"> A Front-End Developer and a St. Edwards University student currently based in Austin, Texas. 
                        Working to improve my Full Stack abilities, I found joy in building my own ideas from the ground up. 
                    </p>
                    <img id="me" className="img-fluid mx-auto d-block" src="./assets/img/me.jpg" alt="Me"></img>
                </div>
            </div>
        </div>
    )
}
export default SectionOne