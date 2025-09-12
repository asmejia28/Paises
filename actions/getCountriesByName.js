import axios from "axios";

export const getCountriesByName = async (name) => {
  try {
    const url = `https://restcountries.com/v3.1/name/${name}`;
    const { data } = await axios.get(url);

    return data.map((country) => ({
      name: country.name.common,
      flag: country.flags.svg,
      capital: country.capital ? country.capital[0] : "No disponible",
      population: country.population,
      region: country.region,
      code: country.cca3,
    }));
  } catch (error) {
    console.error("Error al obtener países:", error);
    return [];
  }
};
