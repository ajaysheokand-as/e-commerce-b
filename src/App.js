import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Fig2 from './components/Fig2';
import { Container } from 'react-bootstrap';

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
                    <Router>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/contact' element={<div><Navbar/><Container><Fig2 /></Container><Footer/></div>} />
                        </Routes>
                    </Router>
                </>
            )}
        </div>
    );
}

export default App;
