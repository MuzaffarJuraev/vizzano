import React from "react";
import { useParams } from "react-router-dom";
import Attendance from "./Attendance";
import CountWork from "./CountWork";
import OTK from "./OTK";

const FlowSection = () => {
  const { typeFlow } = useParams();
  return (
    <>
      {typeFlow === "attendance" ? (
        <Attendance />
      ) : typeFlow === "count-work" ? (
        <CountWork />
      ) : (
        <OTK />
      )}
    </>
  );
};

export default FlowSection;
