import SearchBox from "../components/SearchBox";

export default function DetailPage() {

const { pokemon, setPokemon } = useContext(FetchContext);
console.log(pokemon);

  return (
    <section>
      <img src="../../pokemon-img.png" alt="Logo" />
      <SearchBox />
      <article className="coutries">
        {pokemon?.map((item, index) => (
          <div key={index}>
            <img src={item.} alt="Pokemon" />
            <h1>{item.name}</h1>
            <hr />
            <button>{item.}</button>

          </div>))}
        </article>
    </section>);
}
