import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CurrentPageLogger from "../../components/current-page-logger/CurrentPageLogger";
import styles from "./Gallery.module.css"

const Gallery = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let json = await response.json();
      setPokemons(json.results);
    };

    getPokemons();
  }, []);

  return (
    <>
      <div className="breadcrums">
        <code>
          <Link to="/">Home</Link> /<span> </span>
          <CurrentPageLogger />
        </code>
      </div>
      <div className={styles["gallery-div"]}>
        <h1>Browse all 151 original Pokémon:</h1>
        <ul>
          {pokemons.map((pokemon, index) => (
            <li key={pokemon.name} className="pokemons-list">
              <Link to={`/pokemons/${index + 1}`}><img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/showdown/${index + 1}.gif`}/><p>{pokemon.name}</p></Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Gallery;
