import data from "../../../mocks/en-us/featured-banners.json";
import Slider from "./slider/slider";
import "./CarouselHome.styles.scss"

const CarouselHome = () => {
    return (
        <div className="CarouselHome">
            <h1>Simple and Beautiful <br /> Furniture</h1>
            <Slider slides={data.results} autoPlay={5} />
        </div>
    )
}

export default CarouselHome
