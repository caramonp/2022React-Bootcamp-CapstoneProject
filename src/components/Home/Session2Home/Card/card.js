import ContainerCard from "../ContainerCard/containerCard";
import './card.css'
const Card = ({ information }) => {
    
  return (
    <div className="main-container">
      {information.map((image, index) => (
        <ContainerCard image={image} key={image.id} size={index > 2 ? 'large': ''}/>
      ))}
    </div>
  );
};

export default Card
