import React from 'react'

import './style.css'

const Projects = () => {
    return (
    <div className="container projects">
            
        <div className="row justify-content-md-center">
            <div className="col">
                <h2 className="mt-5 my-work">My Work </h2><a href="https://github.com/mgonza63">Click to see all my github repos</a>
                <div class="row d-flex justify-content-center">
        <div class="col-sm-4 d-flex justify-content-center">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">React Employee Directory</h5>
                <p class="card-text">Filter and sort through a table of your employees.</p>
                <a href="https://practical-beaver-94a69d.netlify.app/" target="_blank"><i class="fas fa-link"></i></a>
                <a href="https://github.com/mgonza63/employee-directory" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            </div>
        </div>
        <div class="col-sm-4 d-flex justify-content-center">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Workout Tracker</h5>
                <p class="card-text">Track your workouts, and measure the level of your intensity.</p>
                <a href="https://wrk-tracker.herokuapp.com/" target="_blank"><i class="fas fa-link"></i></a>
                <a href="https://github.com/mgonza63/workoutTracker" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            </div>
        </div>
        <div class="col-sm-4 d-flex justify-content-center">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Simple Snipcart</h5>
                <p class="card-text">Simple e-commerce with Snipcars. Add to your cart, purchase products, and receive an email with details of your purchase.</p>
                <a href="https://simple-snipcart-2.netlify.app/" target="_blank"><i class="fas fa-link"></i></a>
                <a href="https://github.com/mgonza63/simple-snipcart" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            </div>
        </div>
        </div>
            </div>
        </div>
        <div className="row justify-content-md-center">
            <div className="col">
                <div class="row d-flex justify-content-center">
        <div class="col-sm-4 d-flex justify-content-center">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Note Taker with Express</h5>
                <p class="card-text">Create, Read, Update and Delete notes filled with your ideas.</p>
                <a href="https://note-tkr.herokuapp.com/" target="_blank"><i class="fas fa-link"></i></a>
                <a href="https://github.com/mgonza63/noteTaker" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            </div>
        </div>
        <div class="col-sm-4 d-flex justify-content-center">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Budget BackPacker</h5>
                <p class="card-text">An easy way to create a Day Planner anywhere you go. </p>
                <a href="https://backpackertraveler.herokuapp.com/" target="_blank"><i class="fas fa-link"></i></a>
                <a href="https://github.com/tabby-lab/Project2" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            </div>
        </div>
        <div class="col-sm-4 d-flex justify-content-center">
            <div class="card">
            <div class="card-body">
                <h5 class="card-title">Smorgas Chords</h5>
                <p class="card-text">Get lyrics and chords from your favorite songs.</p>
                <a href="https://github.com/verypaleale/Smorgas-Chord" target="_blank"><i class="fas fa-link"></i></a>
                <a href="https://github.com/verypaleale/Smorgas-Chord" target="_blank"><i class="fab fa-github"></i></a>
            </div>
            </div>
        </div>
        </div>
            </div>
        </div>
    </div>
    )
}

export default Projects;