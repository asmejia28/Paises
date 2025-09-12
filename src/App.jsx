import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { useState } from "react";
import "./App.css";
import { CountryCard } from "./components/CountryCard";
import { getCountriesByName } from "../actions/getCountriesByName";

export const CountryApp = () => {
  const [countries, setCountries] = useState([]);

  const handleSearch = async (search = "") => {
    const newSearch = search.trim().toLowerCase();
    if (newSearch === "") return;

    const result = await getCountriesByName(newSearch);
    setCountries(result);
  };

  return (
    <>
      {/* Componente Header */}
      <Header title="PaísesApp" description="Buscador de países" />
      {/* Componente Search */}
      <Search
        placeholder="Busca el país de tu interés"
        onSearch={handleSearch}
      />
      {/* Renderiza los países encontrados */}
      <div className="countries-list">
        {countries.length > 0 ? (
          countries.map((country) => (
            <CountryCard key={country.name} country={country} />
          ))
        ) : (
          <p>No se encontraron países.</p>
        )}
      </div>
    </>
  );
};

export default CountryApp;
