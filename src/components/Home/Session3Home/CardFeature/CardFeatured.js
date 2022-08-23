import ContainerCardFeature from "../ContainerCardFeature/ContainerCardFeature";
import "./CardFeature.css";

const CardFeatured = ({ description }) => {
  return (
    <div className="main-container-feature">
      {description.map((element, index) => (
        <ContainerCardFeature descriptionElement={element} key={index} />
      ))}
    </div>
  );
};

export default CardFeatured;
