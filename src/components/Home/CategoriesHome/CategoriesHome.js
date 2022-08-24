import data from "../../../mocks/en-us/product-categories.json";
import Card from "./Card/card"

const CategoriesHome = () => {
    return (
        <div className="session2-home">
            <h1>Categories</h1>
            <Card information={data.results} />
        </div>
    )
}

export default CategoriesHome
