import "./ButtonToProducts.styles.scss";
const ButtonToProducts = () => {
  return (
    <div className="container-button">
    <button className='button-to-products'
      type="button"
      onClick={() => {
        window.location.href = "/ProductList";
      }}
    >
      View all products
    </button>
    </div>
  );
};

export default ButtonToProducts;
