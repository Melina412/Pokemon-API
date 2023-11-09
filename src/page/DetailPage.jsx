// Styling
import style from "./Detailpage.modules.css";

// import SearchBox from "../components/SearchBox";
import { useContext } from "react";
import { FetchContext } from "../Context/context";

export default function DetailPage() {
  const { pokemon, setPokemon } = useContext(FetchContext);
  console.log(pokemon);

  return (
    <section className="detail-page">
      <img src="../../pokemon-img.png" alt="Logo" />
      {/* <SearchBox /> */}
      <div className="card-bg">
        <img
          className="pokemon-img"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt="Pokemon"
          //   {item.sprites.other.official-artwork.front_default}
        />
      </div>
      <h1>#007 Shiggy</h1>
      {/* //* {item.name} */}
      {/* <TypeButtons /> */}
      <button>WATER</button>
      <p>Attake xyz</p>
      <p>Description lalelu</p>
    </section>
  );
}
