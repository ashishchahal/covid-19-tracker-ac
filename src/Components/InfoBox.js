import React from "react";
import "../Styles/InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total }) {
  return (
    <div className="infoBox">
      <Card>
        <CardContent>
          {/* Title i.e. corono cases */}
          <Typography color="textSecondary">{title}</Typography>

          {/* new cases */}
          <h2 className="infoBox__cases">{cases}</h2>

          {/* Total cases */}
          <Typography color="textPrimary">{total}</Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default InfoBox;
