import styles from "./Footer.module.css"

const Footer = () => {
    const mewImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/shiny/151.gif";

    return (
        <div className={styles["footer"]}>
            <p>⭐ Fan-made Pokédex • Data from PokéAPI • © 2025</p>
            <img src={mewImg} alt="pikachu image" />
        </div>
    )
}

export default Footer