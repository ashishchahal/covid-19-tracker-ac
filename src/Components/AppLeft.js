import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import "../Styles/AppLeft.css";
import { prettyPrintStat } from "../utils";

function AppLeft({
  countries,
  country,
  countryInfo,
  handleCountryChange,
  mapZoom,
  mapCenter,
  mapCountries,
}) {
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
          cases={prettyPrintStat(countryInfo.todayCases)}
          total={prettyPrintStat(countryInfo.cases)}
        />

        {/* InfoBoxs title="Coronavirus recovery" */}
        <InfoBox
          title="Recovered"
          cases={prettyPrintStat(countryInfo.todayRecovered)}
          total={prettyPrintStat(countryInfo.recovered)}
        />

        {/* InfoBoxs */}
        <InfoBox
          title="Deaths"
          cases={prettyPrintStat(countryInfo.todayDeaths)}
          total={prettyPrintStat(countryInfo.deaths)}
        />
      </div>

      {console.log(mapCenter, mapZoom, "map🏃‍♂️")}
      {/* Map */}
      <Map center={mapCenter} zoom={mapZoom} countries={mapCountries} />
    </div>
  );
}

export default AppLeft;
