import React, { useState } from "react";
import styleSearch from './SearchBar.module.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
      setCity('');
    }}>
      <input className={styleSearch.inputS}
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input className={styleSearch.botonSearch} type="submit" value="Agregar" />
    </form>
  );
}
