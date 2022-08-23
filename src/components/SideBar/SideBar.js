import DataCategory from "../../mocks/en-us/product-categories.json";
import "./SideBar.css";

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
    <div>
      <h4 style={{ textAlign: "center" }}>Filter your products</h4>
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
      <button onClick={filter}>Filter</button>
    </div>
  );
};

export default SideBar;
