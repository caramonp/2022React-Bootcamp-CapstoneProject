import data from "../../mocks/en-us/featured-banners.json";
import Slider from "../slider/slider";
import "./Session1Home.css"

const Session1Home = () => {
    return (
        <div className="session1-home">
            <h1>Simple and Beautiful <br /> Furniture</h1>
            <Slider slides={data.results} autoPlay={2} />
        </div>
    )
}

export default Session1Home
