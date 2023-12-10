import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import styles from "./search.module.css";

export default function Search({ onSearchChange }) {
  const [search, setSerch] = useState(null);
  const GEO_API_URL = fetch(
    "https://api.netlify.com/api/v1 /accounts/0RxMZlFHeX8lD6ZbpidTrpefGuI8pTQHCIOcqcqtpsU/env/GEO_API_URL"
  ).then((response) => response.json());

  const geoApiOptions = fetch(
    "https://api.netlify.com/api/v1 /accounts/0RxMZlFHeX8lD6ZbpidTrpefGuI8pTQHCIOcqcqtpsU/env/geoApiOptions"
  ).then((response) => response.json());

  async function loadOptions(inputValue) {
    return fetch(
      `${JSON.stringify(
        GEO_API_URL
      )}/cities?minPopulation=1000&namePrefix=${inputValue}`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
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
