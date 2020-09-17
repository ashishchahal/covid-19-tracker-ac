import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import "../Styles/AppLeft.css";

function AppLeft() {
  // all STATE is a way to store values in a variable in ReactJS
  const [countries, setCountries] = useState(["USA", "INDIA", "CHINA"]);
  const [country, setCountry] = useState("worldwide");

  // API call from disease.sh --> https://disease.sh/v3/covid-19/countries

  // UseEffect runs a piece of code based on a given condition
  useEffect(() => {
    //code here will run once when the component loads
    // async --> send a request , wait for it, do something with it

    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country, // NAME of country
            value: country.countryInfo.iso2, // code of country i.e. USA, UK, IND
          }));
          setCountries(countries);
        });
    };

    getCountriesData();
  }, []);

  const handleCountryChange = (e) => {
    const countryCode = e.target.value;
    setCountry(countryCode);
  };
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
        <InfoBox title="Coronavirus Cases" cases={123} total={200000} />

        {/* InfoBoxs title="Coronavirus recovery" */}
        <InfoBox title="Recovered" cases={22} total={200} />

        {/* InfoBoxs */}
        <InfoBox title="Deaths" cases={4} total={100} />
      </div>

      {/* Map */}
      <Map />
    </div>
  );
}

export default AppLeft;
