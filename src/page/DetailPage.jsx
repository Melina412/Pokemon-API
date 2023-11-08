import SearchBox from "../components/SearchBox";

export default function DetailPage() {
  const { pokemon, setPokemon } = useContext(FetchContext);
  console.log(pokemon);

  return (
    <section>
      <img src="../../pokemon-img.png" alt="Logo" />
      <SearchBox />
      <article>
        {pokemon?.map((item, index) => (
          <div key={index}>
            <img
              // oder item.sprites.other.home.front_default
              src={item.sprites.other.official - artwork.front_default}
              alt="Pokemon"
            />
            <h1>
              {item.pokedex_numbers}
              {item.names[5].name}
            </h1>
            <p>{item.habitat}</p>
          </div>
        ))}
      </article>
    </section>
  );
}
