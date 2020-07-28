import React from "react";

import "./FrequencyComp.scss";

const FrequencyComp = () => {
  const freqArray = [0, 1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <div className="freqContainerStyle">
      {freqArray.map((ele, index) => (
        <div className="freqContainerInnerStyle" key={index}>
          <div className="freqStick1"></div>
          <div className="freqStick2"></div>
          <div className="freqStick3"></div>
          <div className="freqStick4"></div>
          <div className="freqStick5"></div>
          <div className="freqStick6"></div>
          <div className="freqStick7"></div>
          <div className="freqStick8"></div>
          <div className="freqStick7"></div>
          <div className="freqStick6"></div>
          <div className="freqStick5"></div>
          <div className="freqStick4"></div>
          <div className="freqStick3"></div>
          <div className="freqStick2"></div>
        </div>
      ))}
    </div>
  );
};

export default FrequencyComp;
