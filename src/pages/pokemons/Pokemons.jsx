import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./Pokemons.module.css";
import CurrentPageLogger from "../../components/current-page-logger/CurrentPageLogger";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getPokemons = async () => {
      let response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      let json = await response.json();
      setPokemons(json.results);
    };

    getPokemons();
  }, []);

  const handleSelectChange = (e) => {
    const pokemonId = e.target.value;
    if (pokemonId) {
      navigate(`/pokemons/${pokemonId}`);
    }
  };

  return (
    <>
      <div className="breadcrums">
        <code>
          <Link to="/">Home</Link> /<span> </span>
          <CurrentPageLogger/>
        </code>
      </div>
      <div className={styles["pokemon-list"]}>
        <h1>Pokédex</h1>

        <div className={styles["search-div"]}>
          <select onChange={handleSelectChange} defaultValue="Select a Pokémon">
            <option value="">Select Pokémon</option>
            {pokemons.map((pokemon, index) => (
              <option key={pokemon.name} value={index + 1}>
                {pokemon.name}
              </option>
            ))}
          </select>
        </div>

        <button className={styles["galleryBtn"]}>
          <Link to="/pokemon-gallery">See complete gallery</Link>
        </button>
      </div>
    </>
  );
};

export default Pokemons;
