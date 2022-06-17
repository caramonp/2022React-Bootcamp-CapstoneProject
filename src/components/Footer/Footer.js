import ReactLogo from "../../assest/images/React.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer>
      <h5 className="footer-text">
        Ecommerce created during <strong className="wizeline-title">Wizeline’s Academy</strong>
        <br /> <strong className="react-bootcamp">React Bootcamp</strong> 
      </h5>
      <img src={ReactLogo} alt="react-logo" className="react-logo" />
    </footer>
  );
};

export default Footer;
