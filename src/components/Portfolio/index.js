import React from 'react';

import './style.css'

import Footer from '../Footer'

export default function Portfolio() {
    
    return (
        <div class="row portfolio d-flex justify-content-center">
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
        
    )
}