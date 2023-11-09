// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* CSS */
import styles from './SearchPageHeader.module.css';
/* IMAGES */
import pokemonLogo from '../../assets/images/pokemon-logo.png';

const SearchPageHeader = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={pokemonLogo} alt="PokemonLogo" />
        <Link to="/">
          <svg
            width="50"
            height="50"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="close">
              <path
                id="Vector"
                d="M26 2.61857L23.3814 0L13 10.3814L2.61857 0L0 2.61857L10.3814 13L0 23.3814L2.61857 26L13 15.6186L23.3814 26L26 23.3814L15.6186 13L26 2.61857Z"
                fill="white"
              />
            </g>
          </svg>
        </Link>
      </div>
    </header>
  );
};

// SearchPageHeader.propTypes = {
//   isDarkMode: PropTypes.bool,
// };

export default SearchPageHeader;
