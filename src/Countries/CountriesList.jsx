import PropTypes from "prop-types";
import { CountryCard } from "../components/CountryCard";

export const CountriesList = ({ countries }) => {
  if (!countries.length) {
    return <p>No se encontraron resultados.</p>;
  }

  return (
    <div className="countries-list">
      {countries.map((c) => (
        <CountryCard key={c.cca3 || c.name.common} country={c} />
      ))}
    </div>
  );
};

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object).isRequired,
};
