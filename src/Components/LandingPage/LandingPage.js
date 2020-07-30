import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import SignalCellular3BarIcon from "@material-ui/icons/SignalCellular3Bar";
import BluetoothIcon from "@material-ui/icons/Bluetooth";
import Battery80Icon from "@material-ui/icons/Battery80";

import "./LandingPage.scss";
import googleIcon from "../../assets/google_icon.jpg";
import callIcon from "../../assets/call_icon.png";
import messageIcon from "../../assets/message_icon.png";
import googleVoiceIcon from "../../assets/google_voice.png";
import googleChrome from "../../assets/google_chrome.png";
import cameraIcon from "../../assets/camera_icon.jpg";
import menuIcon from "../../assets/menu_icon.jpg";
import assistantImage from "../../assets/assistant2.png";
import { useHistory } from "react-router-dom";

const cellularIconStyle = {
  height: 20,
  width: 20,
  color: "#fff",
};

const useStyles = makeStyles({
  serviceProviderStyle: {
    fontSize: 12.5,
    color: "#fff",
    position: "relative",
    top: 3,
    left: 6,
    fontFamily: "sans-serif",
  },
  wmOneTextStyle: {
    fontSize: 9,
    color: "#fff",
    fontFamily: "sans-serif",
    marginTop: -12,
    fontWeight: 600,
  },
});

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className="landingPageContainer">
      <div className="topBarIconSetStyle">
        <BluetoothIcon style={cellularIconStyle} />
        <SignalCellular3BarIcon style={cellularIconStyle} />
        <Battery80Icon style={cellularIconStyle} />
        <Typography className={classes.serviceProviderStyle}>10:45</Typography>
      </div>
      <div className="googleAssistantContainerStyle">
        <img src={googleIcon} alt="" className="googleIconStyle" />
        <img src={googleVoiceIcon} alt="" className="googleVoiceStyle" />
      </div>
      <div className="middleContainerStyle">
        <div
          className="wmAppContainerStyle"
          onClick={() => history.push("/home")}
        >
          <img src={assistantImage} className="assistantImageStyle" alt="" />
          <Typography className={classes.wmOneTextStyle}>WM ONE</Typography>
        </div>
      </div>
      <div className="bottomContainerStyle">
        <img src={callIcon} alt="" className="callIconStyle" />
        <img src={messageIcon} alt="" className="callIconStyle" />
        <img src={menuIcon} alt="" className="callIconStyle" />
        <img src={googleChrome} alt="" className="callIconStyle" />
        <img src={cameraIcon} alt="" className="callIconStyle" />
      </div>
    </div>
  );
};

export default LandingPage;
