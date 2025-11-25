import { Link } from "react-router-dom"
import indexPikachu from "../../assets/Pikachu-SVG-File-Free.png"
import "./Navigation.css"

const Navigation = () => {
    const pikaImg = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png";
    
    return (
        <ul className="nav-ul">
            <Link to="/"><img src={pikaImg} alt="Silouhette of a Pikachu pokémon" className="poke-icon"/></Link>
            <div>
                <li><Link to="/pokemons">Pokedex</Link></li>
                <li><Link to="/about">About</Link></li>
            </div>
        </ul>
    )
}

export default Navigation