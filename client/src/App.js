import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getCountries } from './api/index.js';
import get from 'lodash.get';

import List from './components/List/List';
import Details from './components/Details/Details';

export const DEFAULT_REGION = 'ALL';

function App() {
  const [countries, setCountries] = useState([]);

  const [regions, setRegions] = useState([DEFAULT_REGION]);

  const [searchStr, setSearchStr] = useState('');

  const [minNumber, setMinNumber] = useState(0);

  const [maxNumber, setMaxNumber] = useState(Number.MAX_SAFE_INTEGER);

  const [selectedRegion, setSelectedRegion] = useState(DEFAULT_REGION);

  const [sort, setSort] = useState({ field: 'name.common', type: 'asc' });

  const [filterList, setFilterList] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCountries();
        setCountries(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const regionsSet = {};
    countries
      .map((item) => item.region)
      .forEach((item) => {
        regionsSet[item] = 1;
      });
    const regions = [DEFAULT_REGION, ...Object.keys(regionsSet)];
    setRegions(regions);
  }, [countries]);

  useEffect(() => {
    let filteredCounties = countries;

    if (selectedRegion !== DEFAULT_REGION) {
      filteredCounties = filteredCounties.filter((item) => item.region === selectedRegion);
    }

    if (searchStr) {
      const regex = new RegExp(searchStr, 'gi');
      filteredCounties = filteredCounties.filter(
        (item) => regex.test(item.name.common) || (item.capital && regex.test(item.capital[0]))
      );
    }

    filteredCounties = filteredCounties.filter((item) => item.population <= maxNumber && item.population >= minNumber);

    filteredCounties = filteredCounties.sort((itema, itemb) => {
      const fieldA = get(itema, sort.field);
      const fieldB = get(itemb, sort.field);
      const type = typeof get(itema, sort.field);
      if (type === 'string') {
        return sort.type === 'asc' ? fieldA.localeCompare(fieldB) : fieldA.localeCompare(fieldB) * -1;
      } else if (type === 'number') {
        return sort.type === 'asc' ? fieldA - fieldB : fieldB - fieldA;
      }
      return 0;
    });
    console.log(filteredCounties);

    setFilterList(filteredCounties);
  }, [countries, searchStr, minNumber, maxNumber, selectedRegion, sort]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <List
              countries={filterList}
              regions={regions}
              minNumber={minNumber}
              maxNumber={maxNumber}
              selectedRegion={selectedRegion}
              sort={sort}
              onSearchChange={setSearchStr}
              onMinNumberChange={setMinNumber}
              onMaxNumberChange={setMaxNumber}
              onRegionChange={setSelectedRegion}
              onSortChange={setSort}
            />
          }
        ></Route>

        <Route path="/:id" element={<Details list={countries} />}></Route>
      </Routes>
    </>
  );
}

export default App;
