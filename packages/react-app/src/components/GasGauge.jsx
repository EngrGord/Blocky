import React from "react";
import { Button } from "@chakra-ui/react";

// added display of 0 instead of NaN if gas price is not provided

/**
  ~ What it does? ~

  Displays gas gauge

  ~ How can I use? ~

  <GasGauge
    gasPrice={gasPrice}
  />

  ~ Features ~

  - Provide gasPrice={gasPrice} and get current gas gauge
**/

export default function GasGauge(props) {
  return (
    <Button
      variant={""}
      onClick={() => {
        window.open("https://ethgasstation.info/");
      }}
      size="lg"
    >
      <span style={{ marginRight: 8 }}>
        <span role="img" aria-label="fuelpump">
          ⛽️
        </span>
      </span>
      {typeof props.gasPrice === "undefined" ? 0 : parseInt(props.gasPrice, 10) / 10 ** 9}g
    </Button>
  );
}
