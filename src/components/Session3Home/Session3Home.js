import data from '../../mocks/en-us/featured-products.json'
import CardFeatured from './CardFeature/CardFeatured'
const Session3Home = () => {
    return(
        <div className="session3-home">
            <h1>Featured Products </h1>
            <CardFeatured description={data.results} />
        </div>
    )
}

export default Session3Home