import React, { useState, useEffect } from "react";
import "./App.css";
import AppLeft from "./Components/AppLeft";
import AppRight from "./Components/AppRight";
import { sortData } from "./utils";
import "leaflet/dist/leaflet.css";

function App() {
  // all STATE is a way to store values in a variable in ReactJS
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("worldwide");
  const [countryInfo, setCountryInfo] = useState({});
  const [tableData, setTableData] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((response) => response.json())
      .then((data) => {
        setCountryInfo(data);
      });
  }, []);

  useEffect(() => {
    // UseEffect runs a piece of code based on a given condition inside [..condition..]
    //code here will run once when the component loads becoz. [] is blank
    // async --> send a request , wait for it, do something with it

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // NAME of country
            value: country.countryInfo.iso2, // code of country i.e. USA, UK, IND
          }));

          const sortedData = sortData(data);
          setTableData(sortedData);
          setMapCountries(data);
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const handleCountryChange = async (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);

    const url =
      countryCode === "worldwide"
        ? "https://disease.sh/v3/covid-19/all"
        : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
    //console.log(url);
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCountry(countryCode);

        // all the data from country response
        setCountryInfo(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        setMapZoom(4);
      });
  };

  return (
    <div className="app">
      <AppLeft
        countries={countries}
        country={country}
        countryInfo={countryInfo}
        handleCountryChange={handleCountryChange}
        mapCenter={mapCenter}
        mapZoom={mapZoom}
        mapCountries={mapCountries}
      />
      <AppRight tableData={tableData} />
    </div>
  );
}

export default App;
