import React from 'react'


const About = () => {
    return (
        <div className="container">
            
        <div className="row justify-content-md-center">
            <div className="col">
                <h2 className="mt-5">About me</h2>
                <p className="lead text-justify"> My name is Mauricio Gonnzalez, and I am Front-End Developer and a St. Edwards University student currently based in Austin, Texas. 
                    Working to improve my Full Stack abilities, I found joy in building my own ideas from the ground up.  
                </p>
                <img id="me" className="img-fluid mx-auto d-block" src="./assets/img/me.jpg" alt="Me"></img>
                <p className="lead text-justify">I am attending the UT coding bootcamp where I get the opportunity to learn from amazing teachers 
					and work in team projects to develop web applications. Currently, I am learning about e-commerce, and the optimization of SEO with frameworks like NextJS and GatsbyJS.</p>
            </div>
        </div>
    </div>
    )
}

export default About;