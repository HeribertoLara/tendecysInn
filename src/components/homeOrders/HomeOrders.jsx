import React from "react";
import { Menu } from "../MenuOrders/Menu";
import { PanelOrder } from "../PanelOrders/PanelOrder";

const HomeOrders = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Tendencys innovation</h1>
      <Menu />
      <PanelOrder />
    </>
  );
};

export { HomeOrders };
