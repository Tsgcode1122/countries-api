// CountryList.js
import React, { useState, useEffect } from "react";
import CountryDetails from "./CountryDetails";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [displayedCountries, setDisplayedCountries] = useState(9);

  useEffect(() => {
    // Fetch data from the API
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle search logic
  useEffect(() => {
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().startsWith(searchTerm.toLowerCase()),
    );
    setFilteredCountries(filtered);
  }, [searchTerm, countries]);

  // Handle continent filter logic
  useEffect(() => {
    const filteredByContinent = countries.filter(
      (country) =>
        selectedContinent === null || country.region === selectedContinent,
    );
    setFilteredCountries(filteredByContinent);
  }, [selectedContinent, countries]);

  return (
    <div className="countryfilter">
      <div className="countryfilter1">
        <div>
          <input
            type="text"
            placeholder="Search by country name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="countryregion">
          <button onClick={() => setSelectedContinent(null)}>
            All Countries
          </button>
          <button onClick={() => setSelectedContinent("Africa")}>Africa</button>
          <button onClick={() => setSelectedContinent("Americas")}>
            America
          </button>
          <button onClick={() => setSelectedContinent("Asia")}>Asia</button>
          <button onClick={() => setSelectedContinent("Europe")}>Europe</button>
          <button onClick={() => setSelectedContinent("Oceania")}>
            Oceania
          </button>
        </div>
      </div>
      <div className="Country-list">
        {filteredCountries.length === 0 ? (
          <p>No country found.</p>
        ) : (
          filteredCountries
            .slice(0, displayedCountries)
            .map((country) => (
              <CountryDetails key={country.code} country={country} />
            ))
        )}
      </div>
      {/* Button to view all countries */}
      {filteredCountries.length > displayedCountries && (
        <button onClick={() => setDisplayedCountries(filteredCountries.length)}>
          View All Countries
        </button>
      )}
    </div>
  );
};

export default CountryList;
