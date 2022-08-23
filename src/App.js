import "./App.css";
import Header from "./components/header/header";
import Home from "./Screems/Home/Home";
import Footer from "./components/Footer/Footer";
import ProductList from './Screems/ProductList/ProductList'

function App() {
  return (
    <>
      <Header />
      {window.location.pathname === '/' ?  <Home /> : <ProductList/>}
      <Footer />
    </>
  );
}

export default App;
