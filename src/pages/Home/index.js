import React from 'react'
import SectionOne from '../../components/SectionOne'

import './style.css'
import Footer from '../../components/Footer'
import Portfolio from '../../components/Portfolio'


const Home = () => {
    return (
        <main className="flex-shrink-0">

            <SectionOne />
            <Portfolio />

        </main>
    )
}
export default Home
