import React from "react";
import "../Styles/InfoBox.css";
import { Card, CardContent, Typography } from "@material-ui/core";

function InfoBox({ title, cases, total, active, isRed, ...props }) {
  return (
    <Card
      className={`infoBox ${active && "infoBox--selected"} ${
        isRed && "infoBox--red"
      }`}
      onClick={props.onClick}
    >
      <CardContent>
        {/* Title i.e. corono cases */}
        <Typography color="textSecondary">{title}</Typography>

        {/* new cases */}
        <h2 className={`infoBox__cases ${!isRed && "infoBox__cases--green"}`}>
          {cases}
        </h2>

        {/* Total cases */}
        <Typography color="textPrimary">Total: {total}</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
