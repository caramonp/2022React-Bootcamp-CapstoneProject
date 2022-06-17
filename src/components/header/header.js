import "./header.css";
import Logo from "../../assest/images/Logo.png";
import Search from "../../assest/images/carbon_search.png"
import ShopinCar from "../../assest/images/Shopin-Car.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className='container-header'>
          <img src={Logo} alt="logo" className="logo" />
          <div className="search-bar">
            <input type="text" placeholder="¿Que estas buscando?" />
            <img src={Search} alt="search" className="search-logo"/>
          </div>
        </div>
        <img src={ShopinCar} alt="Shopin Car" className="shopin-car" />
      </header>
    </>
  );
};

export default Header;
