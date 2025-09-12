import PropTypes from "prop-types";
import { CountryCard } from "../components/CountryCard";

export const CountriesList = ({ countries }) => {
  if (!countries.length) {
    return <p>No se encontraron resultados.</p>;
  }

  return (
    <div className="countries-list">
      {countries.map((c) => (
        <CountryCard key={c.code} country={c} />
      ))}
    </div>
  );
};

CountriesList.propTypes = {
  countries: PropTypes.array.isRequired,
};
