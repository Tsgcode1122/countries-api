// CountryDetails.js
import React, { useState } from "react";
import Modal from "./Modal";

const CountryDetails = ({ country }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const { name, flags, population, region, capital } = country;

  return (
    <section className="Country">
      <div className="Country-content">
        <img src={flags.svg} alt={`Flag of ${name.common}`} />
        <div className="Country-content-2">
          <h2>{name.common}</h2>
          <p>Population: {population}</p>
          <p>Region: {region}</p>
          <p>Capital: {capital}</p>
          <button onClick={openModal}> view more details</button>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal} country={country} />
      </div>
    </section>
  );
};

export default CountryDetails;
