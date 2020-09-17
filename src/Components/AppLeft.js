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
  casesType,
  setCasesType,
}) {
  //const [casesType, setCasesType] = useState("cases");

  return (
    <div className="appLeft">
      {/* Header */}
      <div className="appLeft__header">
        {/* Title + Select input dropdown field */}
        <h1>Covid tracker</h1>
        <FormControl className="appLeft__dropdown">
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
          isRed
          active={casesType === "cases"}
          onClick={(e) => setCasesType("cases")}
          title="Coronavirus Cases"
          cases={prettyPrintStat(countryInfo.todayCases)}
          total={prettyPrintStat(countryInfo.cases)}
        />

        {/* InfoBoxs title="Coronavirus recovery" */}
        <InfoBox
          active={casesType === "recovered"}
          onClick={(e) => setCasesType("recovered")}
          title="Recovered"
          cases={prettyPrintStat(countryInfo.todayRecovered)}
          total={prettyPrintStat(countryInfo.recovered)}
        />

        {/* InfoBoxs */}
        <InfoBox
          isRed
          active={casesType === "deaths"}
          onClick={(e) => setCasesType("deaths")}
          title="Deaths"
          cases={prettyPrintStat(countryInfo.todayDeaths)}
          total={prettyPrintStat(countryInfo.deaths)}
        />
      </div>

      {/* Map */}
      <Map
        casesType={casesType}
        center={mapCenter}
        zoom={mapZoom}
        countries={mapCountries}
      />
    </div>
  );
}

export default AppLeft;
