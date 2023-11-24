import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Product from './components/Product';
import Navbar from './components/Navbar';
import Fig2 from './components/fig2';
import Section1 from './Component/Section1/section1';

function App() {
  return (
    <>
      <Navbar />
       <Product />
      <Fig2/>
     <Section1/>
    </>
  );
}


export default App;

