import React, {  useState,  useEffect } from 'react';

import './style.css'

export default function Project(props) {
    const projects = [
        {
        "title": "Note Taker",
        "icon":"fas fa-sticky-note",
        "description": "Create, Read, Update and Delete notes filled with your ideas.",
        "url":"https://note-tkr.herokuapp.com/",
        "github": "https://github.com/mgonza63/noteTaker"
        },
        {
            "title": "Smorgas Chords",
            "icon":"fas fa-guitar",
            "description": "",
            "url":"",
            "github": ""
        },
        {
            "title": "Budget BackPacker",
            "icon":"fas fa-map-marked-alt",
            "description": "An easy way to create a Day Planner anywhere you go.",
            "url":"https://backpackertraveler.herokuapp.com/",
            "github": "https://github.com/tabby-lab/Project2"
        }
    ]

    const [card, setCard] = useState(null)
    
    useEffect(() => {
        setCard(projects)
    })
    return (
        <div class="card" style="width: 18rem;">
            {card && card.map }
            <img class="card-img-top" src="..." alt="Card image cap" />
            <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         </div>
        </div>
    )
}