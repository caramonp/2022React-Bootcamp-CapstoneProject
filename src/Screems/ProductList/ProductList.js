import { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import data from "../../mocks/en-us/products.json";
import CardFeatured from "../../components/CardFeature/CardFeatured";
import "./ProductList.styles.scss";

const ProductList = () => {
  const [products, setProducts] = useState(data.results);
  const [checked, setChecked] = useState([]);

  const filter = () => {
    const filterProducts = data.results.filter((product) => {
      return checked.some((category) => {
        return (
          category.toLowerCase() === product.data.category.slug.toLowerCase()
        );
      });
    });
    return checked.length
      ? setProducts(filterProducts)
      : setProducts(data.results);
  };

  return (
    <div className="product-list-container">
      <h1 className="product-list-title">Product List</h1>
      <div className="body-products">
        <SideBar checked={checked} setChecked={setChecked} filter={filter} />
        <div>
          {products.length ? (
            <CardFeatured description={products} />
          ) : (
            <h1>We do not have these products at the moment</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
