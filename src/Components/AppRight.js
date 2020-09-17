import React from "react";
import "../Styles/AppRight.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function AppRight() {
  return (
    <>
      <Card className="appRight">
        <CardContent>
          <h3>Live Cases by country</h3>
          <h3>Worldwide New Cases</h3>
        </CardContent>
      </Card>
      {/* Graph */}
    </>
  );
}

export default AppRight;
