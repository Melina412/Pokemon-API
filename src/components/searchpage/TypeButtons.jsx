import PropTypes from 'prop-types';

/* CSS */
import styles from './TypeButtons.module.css';

const TypeButtons = ({ type, onHandleSetTypes, clickedTypes }) => {
  const typeButtonStyles = {
    bug: '#3BB900',
    dark: '#1C1C1C',
    dragon: '#00458A',
    electric: '#FFE600',
    fairy: '#FFC2F9',
    fighting: '#E40000',
    fire: '#F90',
    flying: '#CCDADD',
    ghost: '#5A1E64',
    grass: '#57921C',
    ground: '#965A00',
    ice: '#6AD2FF',
    normal: '#B3B3B3',
    plant: '#70DF00',
    poison: '#AB00AE',
    psychic: '#FF81F2',
    rock: '#E1B237',
    steel: '#2A4950',
    water: '#00A0E4',
  };

  return (
    <button
      className={`${styles.button}`}
      style={{
        backgroundColor: typeButtonStyles[type],
        outline: clickedTypes && clickedTypes.includes(type) ? '8px solid red' : '',
        opacity: clickedTypes && clickedTypes.includes(type) ? '0.5' : '',
      }}
      onClick={() => {
        if (onHandleSetTypes) {
          onHandleSetTypes(type);
        }

        return;
      }}
    >
      {type.toUpperCase()}
    </button>
  );
};

TypeButtons.propTypes = {
  type: PropTypes.string,
  onHandleSetTypes: PropTypes.func,
  clickedTypes: PropTypes.array,
};

export default TypeButtons;
