import { Header } from "./components/Header";
import { Search } from "./components/Search";
import { useState } from "react";
import "./App.css";
import { CountriesList } from "./Countries/CountriesList";
import { getCountriesByName } from "../actions/getCountriesByName";

export const CountryApp = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (search = "") => {
    const newSearch = search.trim().toLowerCase();
    if (newSearch === "") return;

    setLoading(true); // empieza la carga
    try {
      const result = await getCountriesByName(newSearch);
      setCountries(result);
    } catch (error) {
      console.error("Error fetching countries:", error);
      setCountries([]); // si falla, limpiar resultados
    } finally {
      setLoading(false); // termina la carga
    }
  };

  return (
    <>
      {/* Componente Header */}
      <Header title="🌐PaísesApp" description="Buscador de países" />

      {/* Componente Search */}
      <Search
        placeholder="Busca el país de tu interés"
        onSearch={handleSearch}
      />

      {/* Estado de carga */}
      {loading ? (
        <p className="loading">Cargando...</p>
      ) : (
        <CountriesList countries={countries} />
      )}
    </>
  );
};

export default CountryApp;
