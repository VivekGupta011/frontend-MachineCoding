import React from "react";
import withLogger from "./withLogger";
import Greeting from "./Greeting";

const HocFunc = () => {
  // Wrap Greeting component with the HOC
  const GreetingWithLogger = withLogger(Greeting);
  return (
    <div>
      <GreetingWithLogger name="john" />
    </div>
  );
};

export default HocFunc;
