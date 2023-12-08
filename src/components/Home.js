import React from 'react'
import Navbar from '../components/Navbar'
import Product from '../components/Product';
import Banner from '../components/Banner';
import Inquiry from '../components/Inquiry';
import Reco_item from '../components/Reco_item';
import Extra_service from '../components/Extra_service';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <Product />
            <Reco_item />
            <Extra_service />
            <Inquiry />
            <Footer />
        </>
    )
}

export default Home
