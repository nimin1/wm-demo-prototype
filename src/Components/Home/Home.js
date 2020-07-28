import React, { useEffect, useState, useCallback } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AddCommentOutlinedIcon from "@material-ui/icons/AddCommentOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import { Typography, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

import "./Home.scss";
import FrequencyComp from "../FrequencyComp/FrequencyComp";
import assistantImage from "./assets/assistant2.png";

const useStyles = makeStyles({
  taskAssistantTextStyle: {
    fontSize: "25px",
    color: "#fff",
    fontWeight: 600,
    margin: "0px 20px 0px 25px",
    textAlign: "left",
    fontFamily: "monospace",
  },
  taskAssistantTextStyle1: {
    fontSize: "25px",
    color: "#fff",
    fontWeight: 600,
    margin: "0px 20px 0px 25px",
    textAlign: "left",
    fontFamily: "monospace",
  },
  assistantTextStyle: {
    fontSize: "14px",
    color: "#000",
    padding: 15,
    textAlign: "left",
    fontFamily: "monospace",
  },
  userTextStyle: {
    fontSize: "14px",
    color: "#fff",
    padding: 15,
    textAlign: "left",
    fontFamily: "monospace",
  },
});

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const micIconStyle = {
    color: "#fff",
    height: 22,
    width: 22,
    position: "relative",
    top: 7,
  };
  const topContainerIconsStyle = {
    color: "#fff",
    height: 30,
    width: 30,
  };
  const bottomContainerIconsStyle = {
    height: 26,
    width: 26,
    color: "rgb(219, 217, 217)",
    position: "relative",
    top: 10,
  };
  const selectedBottomContainerIconsStyle = {
    height: 26,
    width: 26,
    color: "#041f41",
    position: "relative",
    top: 10,
  };

  const [secondMessage, setSecondMessage] = useState(false);
  const [thirdMessage, setThirdMessage] = useState(false);

  const navigateToList = useCallback(() => {
    history.push("/mytask");
  }, [history]);

  useEffect(() => {
    setTimeout(() => {
      setSecondMessage(true);
    }, 1000);
    setTimeout(() => {
      setThirdMessage(true);
    }, 3500);
  }, []);

  useEffect(() => {
    if (thirdMessage) {
      setTimeout(() => {
        navigateToList();
      }, 1000);
    }
  }, [thirdMessage, navigateToList]);

  return (
    <div className="homeContainerStyle">
      <div className="topContainerStyle">
        <div className="topIconContainerStyle">
          <AppsIcon style={topContainerIconsStyle} />
          <SearchIcon style={topContainerIconsStyle} />
        </div>
        <Typography className={classes.taskAssistantTextStyle}>
          Your WM Virtual Task
        </Typography>
        <Typography className={classes.taskAssistantTextStyle1}>
          Assistant is Here!
        </Typography>
        <img src={assistantImage} className="assistantImageStyle" alt="" />
      </div>
      <div className="chatStyle1">
        <Typography className={classes.assistantTextStyle}>
          Hey Rob! How can I help you?
        </Typography>
      </div>
      <div className="chatStyle2">
        {secondMessage && (
          <Typography className={classes.userTextStyle}>
            Take me to my Today's Task List.
          </Typography>
        )}
      </div>
      <div className="chatStyle1">
        {thirdMessage && (
          <Typography className={classes.assistantTextStyle}>
            Okay! Here you go.....
          </Typography>
        )}
      </div>
      <FrequencyComp />
      <div className="micIconContainerOuterStyle">
        <div className="micIconContainerInnerStyle">
          <MicIcon style={micIconStyle} />
        </div>
      </div>
      <div className="bottomIconContainerStyle">
        <HomeOutlinedIcon style={bottomContainerIconsStyle} />
        <NotificationsNoneOutlinedIcon style={bottomContainerIconsStyle} />
        <AddCommentOutlinedIcon style={selectedBottomContainerIconsStyle} />
        <ListOutlinedIcon
          style={bottomContainerIconsStyle}
          onClick={navigateToList}
        />
        <PersonOutlineOutlinedIcon style={bottomContainerIconsStyle} />
      </div>
    </div>
  );
};

export default Home;
