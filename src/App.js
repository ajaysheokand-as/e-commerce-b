import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Product from './components/Product';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
// import Fig2 from './components/fig2';
// import Section1 from './components/Section1';
// import { Container } from 'react-bootstrap';
import Inquiry from './components/Inquiry';
import Reco_item from './components/Reco_item';
import Extra_service from './components/Extra_service';
import Footer from './components/Footer';

function App() {
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const spiner = document.getElementById('loader');
        if (spiner) {
            setTimeout(() => {
                spiner.style.display = 'none';
                setloading(false);
                // document.body.style.backgroundColor = 'black';
            }, 2000);
        }
    }, []);

    return (
        <div style={{ backgroundColor: '#F7FAFC' }}>
            {!loading && (
                <>
                    <Navbar />
                    <Banner />
                    <Product />
                    <Reco_item />
                    <Extra_service />
                    <Inquiry />
                    {/* <Container>
                        <Fig2 />
                    </Container>
                    <Container>
                        <Section1 />
                    </Container> */}
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;
