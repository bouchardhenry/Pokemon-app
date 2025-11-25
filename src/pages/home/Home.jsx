import { Link } from "react-router-dom";
import pokeBackground from "../../assets/pokemon-background.jpg";
import pokeMap from "../../assets/rby_kanto.webp";
import Banner from "../../components/banner/Banner";
import MasterballImg from "../../assets/masterball2.png";
import styles from "./Home.module.css" 
import { useState } from "react";

const Home = () => {

    const [warningMsg, setWarningMsg] = useState(null);
    
    const handleClick = () => {
        alert("Click the Masterball to start the app");
    };

    return (
        <>
            <div className={styles["banner-section"]}>
                <Banner/>
            </div>
            
            <div className={styles["launch-app-section"]}>
                    <Link to="/pokemons">
                    <img src={MasterballImg} alt="" />
                    </Link>
                    <button className={styles["start-button"]} onClick={handleClick}>Click on the <span>Masterball</span> to get started!</button>

            </div>
            <div className={styles["img-section"]}>
                <h3>Kanto - Cities</h3>
                    <img src={pokeMap} alt="Pokémon first gen map" className={styles["poke-background"]}/>
            </div>

        </>
    )
}

export default Home