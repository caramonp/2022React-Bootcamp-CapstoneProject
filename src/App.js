import Header from "./components/Header/Header";
import Home from "./Screems/Home/Home";
import ProductList from './Screems/ProductList/ProductList'

function App() {
  return (
    <>
      <Header />
      {window.location.pathname === '/' ?  <Home /> : <ProductList/>}
    </>
  );
}

export default App;
