import PropTypes from "prop-types";
import { useEffect, useState } from "react";

export const Search = ({ placeholder, onSearch }) => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (search.trim() === "") return;
      onSearch(search);
      setSearch("");
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [search, onSearch]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search.trim() === "") return;

    onSearch(search);
    setSearch("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(search);
      setSearch("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-container">
      <input
        type="text"
        placeholder={placeholder}
        value={search}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
