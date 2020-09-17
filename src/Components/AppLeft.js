import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import "../Styles/AppLeft.css";

function AppLeft({ countries, country, countryInfo, handleCountryChange }) {
  //   // all STATE is a way to store values in a variable in ReactJS
  //   const [countries, setCountries] = useState([]);
  //   const [country, setCountry] = useState("worldwide");
  //   const [countryInfo, setCountryInfo] = useState({});

  //   // API call from disease.sh --> https://disease.sh/v3/covid-19/countries

  //   useEffect(() => {
  //     fetch("https://disease.sh/v3/covid-19/all")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setCountryInfo(data);
  //       });
  //   }, []);

  //   useEffect(() => {
  //     // UseEffect runs a piece of code based on a given condition inside [..condition..]
  //     //code here will run once when the component loads becoz. [] is blank
  //     // async --> send a request , wait for it, do something with it

  //     const getCountriesData = async () => {
  //       await fetch("https://disease.sh/v3/covid-19/countries")
  //         .then((response) => response.json())
  //         .then((data) => {
  //           const countries = data.map((country) => ({
  //             name: country.country, // NAME of country
  //             value: country.countryInfo.iso2, // code of country i.e. USA, UK, IND
  //           }));
  //           setCountries(countries);
  //         });
  //     };

  //     getCountriesData();
  //   }, []);

  //   const handleCountryChange = async (e) => {
  //     const countryCode = e.target.value;
  //     setCountry(countryCode);

  //     const url =
  //       countryCode === "worldwide"
  //         ? "https://disease.sh/v3/covid-19/all"
  //         : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
  //     //console.log(url);
  //     await fetch(url)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setCountry(countryCode);

  //         // all the data from country response
  //         setCountryInfo(data);
  //       });
  //   };

  return (
    <div className="appLeft">
      {/* Header */}
      <div className="appLeft__header">
        {/* Title + Select input dropdown field */}
        <h1>Covid tracker app 🚀</h1>
        <FormControl className="app_dropdown">
          <Select
            variant="outlined"
            value={country}
            onChange={handleCountryChange}
          >
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>

      <div className="appLeft__stats">
        {/* InfoBoxs title="Coronavirus cases" */}
        <InfoBox
          title="Coronavirus Cases"
          cases={countryInfo.todayCases}
          total={countryInfo.cases}
        />

        {/* InfoBoxs title="Coronavirus recovery" */}
        <InfoBox
          title="Recovered"
          cases={countryInfo.todayRecovered}
          total={countryInfo.recovered}
        />

        {/* InfoBoxs */}
        <InfoBox
          title="Deaths"
          cases={countryInfo.todayDeaths}
          total={countryInfo.deaths}
        />
      </div>

      {/* Map */}
      <Map />
    </div>
  );
}

export default AppLeft;
