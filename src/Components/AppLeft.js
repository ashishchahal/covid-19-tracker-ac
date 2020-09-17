import React, { useState, useEffect } from "react";
import { FormControl, Select, MenuItem } from "@material-ui/core";
import InfoBox from "./InfoBox";
import Map from "./Map";
import "../Styles/AppLeft.css";

function AppLeft({
  countries,
  country,
  countryInfo,
  handleCountryChange,
  mapZoom,
  mapCenter,
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

      {console.log(mapCenter, mapZoom, "map🏃‍♂️")}
      {/* Map */}
      <Map center={mapCenter} zoom={mapZoom} />
    </div>
  );
}

export default AppLeft;
