import "./Button.css";
const Button = () => {
  return (
    <button
      type="button"
      onClick={() => {
        window.location.href = "/ProductList";
      }}
    >
      View all products
    </button>
  );
};

export default Button;
