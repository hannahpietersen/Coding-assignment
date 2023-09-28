import React from 'react';
import { useNavigate } from 'react-router-dom';
import { DEFAULT_REGION } from '../../App';
import './styles.css';

function List(props) {
  const {
    countries,
    regions,
    minNumber,
    maxNumber,
    selectedRegion,
    searchStr,
    onSearchChange,
    onMinNumberChange,
    onMaxNumberChange,
    onRegionChange,
    onSortChange,
  } = props;

  const navigate = useNavigate();

  const handleCountryClick = (country) => {
    navigate(`/${country.cca2}`);
  };

  const handleRegionChange = (e) => {
    onRegionChange(e.target.value.trim());
  };

  const handleSort = (field, type) => {
    onSortChange({ field, type });
  };

  const handleMinNumber = (e) => {
    const value = e.target.value.trim();

    if (!value) {
      onMinNumberChange(0);
    } else {
      onMinNumberChange(Number(e.target.value.trim()));
    }
  };

  const handleMaxNumber = (e) => {
    const value = e.target.value.trim();

    if (!value) {
      onMaxNumberChange(Number.MAX_SAFE_INTEGER);
    } else {
      onMaxNumberChange(Number(e.target.value.trim()));
    }
  };

  const handleSearchChange = (e) => {
    onSearchChange(e.target.value.trim());
  };

  return (
    <div className="main">
      <div className="container">
        <div className="region">
          <label>Region</label>
          <select onChange={handleRegionChange} style={{ height: '100%', width: '100%' }} defaultValue={DEFAULT_REGION}>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}{' '}
              </option>
            ))}
          </select>
        </div>

        <div className="input-container">
          <input
            className="search-input"
            type="text"
            placeholder="Search on Name or Capital"
            value={searchStr}
            onChange={handleSearchChange}
          />
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 26 26" className="search-icon">
            <path d="M 10 0.1875 C 4.578125 0.1875 0.1875 4.578125 0.1875 10 C 0.1875 15.421875 4.578125 19.8125 10 19.8125 C 12.289063 19.8125 14.394531 19.003906 16.0625 17.6875 L 16.9375 18.5625 C 16.570313 19.253906 16.699219 20.136719 17.28125 20.71875 L 21.875 25.34375 C 22.589844 26.058594 23.753906 26.058594 24.46875 25.34375 L 25.34375 24.46875 C 26.058594 23.753906 26.058594 22.589844 25.34375 21.875 L 20.71875 17.28125 C 20.132813 16.695313 19.253906 16.59375 18.5625 16.96875 L 17.6875 16.09375 C 19.011719 14.421875 19.8125 12.300781 19.8125 10 C 19.8125 4.578125 15.421875 0.1875 10 0.1875 Z M 10 2 C 14.417969 2 18 5.582031 18 10 C 18 14.417969 14.417969 18 10 18 C 5.582031 18 2 14.417969 2 10 C 2 5.582031 5.582031 2 10 2 Z M 4.9375 7.46875 C 4.421875 8.304688 4.125 9.289063 4.125 10.34375 C 4.125 13.371094 6.566406 15.8125 9.59375 15.8125 C 10.761719 15.8125 11.859375 15.433594 12.75 14.8125 C 12.511719 14.839844 12.246094 14.84375 12 14.84375 C 8.085938 14.84375 4.9375 11.695313 4.9375 7.78125 C 4.9375 7.675781 4.933594 7.574219 4.9375 7.46875 Z"></path>
          </svg>
        </div>
      </div>

      <div className="range">
        <p>
          Population Range
          <input type="number" className="box" placeholder="Min" onChange={handleMinNumber} />
          to
          <input type="number" className="box" placeholder="Max" onChange={handleMaxNumber} />
        </p>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>
                <div className="table-header">
                  Name
                  <div className="icon-container">
                    <img
                      className="icon"
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-rounded/24/sort-up.png"
                      alt="sort-up"
                      onClick={() => {
                        handleSort('name.common', 'asc');
                      }}
                    />
                    <img
                      className="icon"
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-rounded/24/sort-down.png"
                      alt="sort-down"
                      onClick={() => {
                        handleSort('name.common', 'desc');
                      }}
                    />
                  </div>
                </div>
              </th>
              <th>
                <div className="table-header">
                  Region
                  <div className="icon-container">
                    <img
                      className="icon"
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-rounded/24/sort-up.png"
                      alt="sort-up"
                      onClick={() => {
                        handleSort('region', 'asc');
                      }}
                    />
                    <img
                      className="icon"
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-rounded/24/sort-down.png"
                      alt="sort-down"
                      onClick={() => {
                        handleSort('region', 'desc');
                      }}
                    />
                  </div>
                </div>
              </th>
              <th>ISO Code</th>
              <th>Currency</th>
              <th>
                <div className="table-header">
                  Population
                  <div className="icon-container">
                    <img
                      className="icon"
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-rounded/24/sort-up.png"
                      alt="sort-up"
                      onClick={() => {
                        handleSort('population', 'asc');
                      }}
                    />
                    <img
                      className="icon"
                      width="24"
                      height="24"
                      src="https://img.icons8.com/material-rounded/24/sort-down.png"
                      alt="sort-down"
                      onClick={() => {
                        handleSort('population', 'desc');
                      }}
                    />
                  </div>
                </div>
              </th>
              <th>Capital</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country) => (
              <tr key={country.cca2}>
                <td
                  className="country"
                  onClick={() => {
                    handleCountryClick(country);
                  }}
                >
                  <img src={country.flags.png} alt="flag" />
                  {country.name.common}
                </td>
                <td>{country.region}</td>
                <td>{country.cca2}</td>
                <td>{country.currencies && Object.keys(country.currencies).join(', ')}</td>
                <td>{country.population}</td>
                <td>{country.capital}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default List;
