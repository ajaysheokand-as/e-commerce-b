import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Product from './components/Product';
import Navbar from './components/Navbar';
import Section1 from './Component/Section1/section1';
function App() {
  return (
    <>
      <Navbar />
      <Product />
      <Section1/>
    </>
  );
}

export default App;
