import BannerImg from "../../assets/pokedex-explorer-banner.png"
import "./Banner.css"

const Banner = () => {
    return(
        <img src={BannerImg} alt="Pokedex Explorer Logo" className="pokemon-explorer-logo"/>
    )
}
export default Banner