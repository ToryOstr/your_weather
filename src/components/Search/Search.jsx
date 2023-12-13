import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import styles from "./search.module.css";

export default function Search({ onSearchChange }) {
  const [search, setSerch] = useState(null);

  const geo_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";
  const RapidAPI_Key = process.env.RapidAPI_Key;

  const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": RapidAPI_Key,
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
  async function loadOptions(inputValue = 'kyiv') {
    return fetch(
      `${geo_API_URL}/cities?minPopulation=1000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return ({
          options: response.data.map((city) => ({
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
          })),
        });
      })
      .catch((error) => console.error(error));
  }

  function handleOnChange(searchData) {
    setSerch(searchData);
    onSearchChange(searchData);
  }

  return (
    <div className={styles.searchContainer}>
      <AsyncPaginate
        className={styles.customSelect}
        placeholder="Search for city"
        debounceTimeout={1000}
        value={search}
        onChange={handleOnChange}
        loadOptions={loadOptions}
      />
    </div>
  );
}
