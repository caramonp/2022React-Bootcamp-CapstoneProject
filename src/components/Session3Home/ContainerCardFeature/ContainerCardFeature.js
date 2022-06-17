import "./ContainerCardFeature.css";

const ContainerCardFeature = ({ descriptionElement }) => {
  return (
    <div className="content-card-feature">
      <img
        src={descriptionElement.data.mainimage.url}
        alt={descriptionElement.data.mainimage.alt}
        className="imagen-feature"
      />
      <div className="content-information-feature">
        <h3 className="name-feature">{descriptionElement.data.name}</h3>
        <h3 className="price-feature">{`$${descriptionElement.data.price}`}</h3>
        <h3 className="slug-feature">
          {`Category ${descriptionElement.data.category.slug}`}
        </h3>
      </div>
    </div>
  );
};
export default ContainerCardFeature;
