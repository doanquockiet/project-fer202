import React from 'react'
import Header from '../../components/Layout/Header'
import Footer from '../../components/Layout/Footer'
import Banner from '../../components/Banner'

const HomePage = () => {
    return (
        <div>
            <div className="header">
                <Header />
            </div>
            <div className="banner">
                <Banner />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    )
}

export default HomePage
