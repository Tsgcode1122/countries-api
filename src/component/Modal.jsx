// Modal.js
import React from "react";
import "../styles.scss";
const Modal = ({ isOpen, onClose, country }) => {
  if (!isOpen) return null;

  const {
    name,
    flags,
    population,
    region,
    capital,
    Code,

    currencies,
    demonym,
    languages,
    borders,
    subregion,
  } = country;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal">
        <button className="close-button" onClick={onClose}>
          Close
        </button>
        <p>{name.common}</p>
        <img src={flags.svg} alt={`Flag of ${name.common}`} />
        <p>
          Region: <span> {region} </span>
        </p>
        <p>
          Capital: <span>{capital}</span>{" "}
        </p>
        <p>
          Population: <span> {population}</span>
        </p>

        <p>
          Subregion: <span>{subregion || "N/A"}</span>
        </p>

        {languages && Object.keys(languages).length > 0 && (
          <p>
            Language Code:{" "}
            {Object.keys(languages).map((languageCode, index) => (
              <span key={languageCode}>
                {languageCode}
                {index < Object.keys(languages).length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
        )}
        <p>
          Border Countries:{" "}
          <span>
            {" "}
            {borders && borders.length > 0 ? borders.join(", ") : "N/A"}
          </span>{" "}
        </p>
        <p>
          Languages:{" "}
          <span>
            {" "}
            {languages ? Object.values(languages).join(", ") : "N/A"}
          </span>
        </p>
        {Object.keys(currencies).map((currencyCode) => (
          <p key={currencyCode}>
            Currencies :<span> {currencies[currencyCode].name} </span>
          </p>
        ))}
        {Object.keys(currencies).map((currencyCode) => (
          <p key={currencyCode}>
            Currency Code: <span>{currencyCode}</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Modal;
