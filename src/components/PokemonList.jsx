import PropTypes from 'prop-types';

import { useContext, useEffect, useState } from 'react';
import { FetchContext } from '../Context/context';
import PokemonDetails from './PokemonDetails';
import styles from './PokemonList.module.css';

const pokemonPerRow = 20;

const PokemonList = ({ filteredPokemonList, setFilteredPokemon }) => {
  const { pokemonDataArray } = useContext(FetchContext);

  const [next, setNext] = useState(pokemonPerRow);

  const handleMorePokeMons = () => {
    setNext(next + pokemonPerRow);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validateLoadMore =
    filteredPokemonList.length > 0
      ? filteredPokemonList && next < filteredPokemonList?.length
      : pokemonDataArray && next < pokemonDataArray?.length;

  return (
    <>
      <p
        style={{
          marginTop: '20px',
          color: 'green',
          fontWeight: '800',
          paddingLeft: '20px',
        }}
      >
        Count:
        {filteredPokemonList.length > 0
          ? filteredPokemonList[0] === null
            ? filteredPokemonList.length - 1
            : filteredPokemonList.length
          : pokemonDataArray.length}
      </p>
      <section className={`${styles.section}`}>
        {filteredPokemonList && filteredPokemonList.length > 0 ? (
          filteredPokemonList[0] === null ? (
            <div
              style={{
                width: '375px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '20px',
              }}
            >
              <p style={{ textAlign: 'center', width: '100%', color: '#2c72b8' }}>
                No Pokemon found
              </p>
              <button
                onClick={() => setFilteredPokemon([])}
                style={{
                  padding: '10px',
                  cursor: 'pointer',
                  backgroundColor: '#ffcb05',
                  color: '#2c72b8',
                  fontWeight: '800',
                }}
              >
                GET ALL POKEMONS
              </button>
            </div>
          ) : (
            filteredPokemonList
              ?.slice(0, next)
              ?.map((item, index) => <PokemonDetails key={index} pokemon={item} />)
          )
        ) : (
          pokemonDataArray
            ?.slice(0, next)
            ?.map((item, index) => <PokemonDetails key={index} pokemon={item} />)
        )}
        <a
          style={{
            position: 'fixed',
            bottom: '8%',
            right: '38%',
            color: 'white',
            padding: '5px',
            backgroundColor: '#ffcd05',
            borderRadius: '50px',
            padding: '10px 20px',
            textDecoration: 'none',
          }}
          href="#top"
        >
          ↑
        </a>
      </section>

      {validateLoadMore && (
        <>
          <button
            className={`${styles.loadmore}`}
            onClick={handleMorePokeMons}
            style={{
              padding: '10px',
              cursor: 'pointer',
              backgroundColor: '#ffcb05',
              color: '#2c72b8',
              fontWeight: '800',
              width: '100%',
              marginBottom: '10px',
            }}
          >
            LOAD MORE
          </button>
        </>
      )}
    </>
  );
};

PokemonList.propTypes = {
  filteredPokemonList: PropTypes.array,
  setFilteredPokemon: PropTypes.func,
};

export default PokemonList;
