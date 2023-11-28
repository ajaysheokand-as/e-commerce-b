import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Product from './components/Product';
import Navbar from './components/Navbar';
import Banner from './components/Banner'
import Fig2 from './components/fig2';
import Section1 from './components/Section1';
import { Container } from 'react-bootstrap';
import Inquiry from './components/Inquiry';
function App() {
    return (
        <>
            <Navbar />
            <Banner />
            <Product />
            <Inquiry />
            <Container>
                <Fig2 />
            </Container>
            <Container>
                <Section1 />
            </Container>
        </>
    );
}


export default App;

