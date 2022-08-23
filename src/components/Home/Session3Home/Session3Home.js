import data from '../../../mocks/en-us/featured-products.json'
import CardFeatured from './CardFeature/CardFeatured'
import Button from './Button/Button'
import './Session3Home.css'
const Session3Home = () => {
    return(
        <div className="session3-home">
            <h1>Featured Products </h1>
            <CardFeatured description={data.results} />
            <Button />
        </div>
    )
}

export default Session3Home