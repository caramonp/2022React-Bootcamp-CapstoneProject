import "./containerCard.css";
const ContainerCard = ({ image, size }) => {
  return (
    <div className="content-card" key={image.data.main_image.alt}>
      <div
        className={`${size} card-image`}
        style={{ backgroundImage: `url(${image.data.main_image.url})` }}
       />
       <div className = 'content-title'>
          <h3 className = 'title-card'>{image.data.name}</h3>
       </div>
    </div>
  );
};
export default ContainerCard;
