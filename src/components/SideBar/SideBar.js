import DataCategory from "../../mocks/en-us/product-categories.json";
import "./SideBar.styles.scss";

const SideBar = ({checked, setChecked, filter}) => {
  const dataCategories = DataCategory.results 

  const handleOnChange = (e) => {    
    let updateList = [...checked]
    if(e.target.checked){
      updateList = [...checked, e.target.value]
    }else {
      updateList.splice(checked.indexOf(e.target.value), 1)
    }
    setChecked(updateList)
  };

  return (
    <div className="container-side-bar">
      <h4 style={{ textAlign: "center" }}>Filter your products</h4>
      <div className="container-checkbox">
        {dataCategories.map((product, index) => {
          return (
            <label
              className="content-side-bar"
              key={index}
              htmlFor={product.data.name}
            >
              <input
                className="checkbox"
                type="checkbox"
                value={product.data.name}
                id={product.id}
                onChange={handleOnChange}
              />
              {product.data.name}
            </label>
            
          );
        })}
      </div>
      <div className="container-button-side-bar">
      <button className="button-side-bar" onClick={filter}>Filter</button>
      </div>
    </div>
  );
};

export default SideBar;
