import React from "react";
import PricingHeader from "../PricingPage/PricingHeader";
import IncentivesHome from "./IncentivesHome";
import Reports from "./Reports/Reports";
import Tasks from "./Tasks/Tasks";

const Incentives = () => {
  return (
    <>
      <PricingHeader />
      <IncentivesHome />
      <Reports />
      <Tasks />
    </>
  );
};

export default Incentives;
