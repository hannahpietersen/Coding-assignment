import React from 'react';
import './styles.css';
import { useParams } from 'react-router-dom';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';

function Details(props) {
  const params = useParams();
  const { list } = props;

  const country = list.find((item) => item.cca2 === params.id);

  if (!country) {
    return null;
  } else {
    return (
      <div className="details-container">
        <div className="image">
          <div style={{ overflow: 'hidden', width: 'calc(50% - 10px)', height: '100%' }}>
            <MapContainer center={country.latlng} zoom={4} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
            </MapContainer>
          </div>

          <img style={{ height: '100%' }} src={country.flags.png} alt="flag" />
        </div>

        <div className="text">
          <div className="text-left">
            <p>
              <strong>Name:</strong>
              {country.name.common}
              <br />
              <strong>Code: </strong>
              {country.cca2}
              <br />
              <strong>Capital: </strong>
              {country.capital}
              <br />
              <strong>Currency: </strong>
              {country.currencies && Object.keys(country.currencies).join(', ')}
              <br />
              <strong>Population: </strong>
              {country.population}
              <br />
              <strong>Region: </strong>
              {country.region}
              <br />
              <strong>Continents: </strong>
              {country.continents}
            </p>
          </div>

          <div className="text-right">
            <p>
              <strong>Borders:</strong>
              {country.borders && country.borders.join(', ')}
              <br />
              <strong>Timezones: </strong>
              {country.timezones && country.timezones.join(', ')}
              <br />
              <strong>Dialing Code:</strong> +91
              <br />
              <strong>Native name: </strong>
              {country.name.nativeName &&
                Object.keys(country.name.nativeName)
                  .map((key) => country.name.nativeName[key].common)
                  .join(', ')}
              <br />
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
