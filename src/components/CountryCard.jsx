import PropTypes from "prop-types";

export const CountryCard = ({ country }) => {
  
  return (
      <div className="country-card">
      <h2>{country.name}</h2>
      <img src={country.flag} alt={`Bandera de ${country.name}`} width="120" />
      <p><strong>Capital:</strong> {country.capital}</p>
      <p><strong>Población:</strong> {country.population ? country.population.toLocaleString() : "No disponible"}</p>
      <p><strong>Región:</strong> {country.region}</p>
    </div>
  );
};

CountryCard.propTypes = {
  country: PropTypes.shape({
    name: PropTypes.string.isRequired,
    flag: PropTypes.string.isRequired,
    capital: PropTypes.string,
    population: PropTypes.number,
    region: PropTypes.string,
  }).isRequired,
};
