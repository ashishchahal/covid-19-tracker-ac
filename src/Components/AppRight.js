import React from "react";
import "../Styles/AppRight.css";
import { Card, CardContent, Typography } from "@material-ui/core";
import Table from "./Table";
import LineGraph from "./LineGraph";

function AppRight({ tableData, casesType }) {
  return (
    <>
      <Card className="appRight">
        <CardContent>
          <h3>Live Cases by country</h3>
          <Table tableData={tableData} />
          <h3 className="appRight__graphTitle">Worldwide New {casesType}</h3>
          <LineGraph className="appRight__graph" casesType={casesType} />
        </CardContent>
      </Card>
      {/* Graph */}
    </>
  );
}

export default AppRight;
