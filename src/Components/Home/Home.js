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
import { chatMessages } from "../../constants";
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
  const [messageItem, setMessageItem] = useState(false);
  const [chatMessage, setChatMessage] = useState(null);
  const [navigateToRoute, setNavigateToRoute] = useState(true);

  const navigateToList = useCallback(
    (route) => {
      if (route) {
        history.push(route);
      } else {
        history.push("/mytask");
      }
    },
    [history]
  );

  const micIconClicked = () => {
    if (messageItem < chatMessages.length) {
      setChatMessage(null);
      setMessageItem(messageItem + 1);
    }
  };

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setSecondMessage(true);
    }, 1000);
    const timer2 = setTimeout(() => {
      setThirdMessage(true);
    }, 3500);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [secondMessage, thirdMessage]);

  useEffect(() => {
    if (thirdMessage && navigateToRoute) {
      setTimeout(() => {
        navigateToList(chatMessage ? chatMessage.routeTo : null);
      }, 500);
    }
  }, [thirdMessage, chatMessage, navigateToList, navigateToRoute]);

  useEffect(() => {
    if (messageItem < chatMessages.length) {
      setChatMessage(chatMessages[messageItem]);
      setSecondMessage(false);
      setThirdMessage(false);
    }
  }, [messageItem]);

  useEffect(() => {
    setChatMessage(chatMessages[0]);
  }, []);

  return (
    <div className="homeContainerStyle">
      <div className="topContainerStyle">
        <div className="topIconContainerStyle">
          <AppsIcon
            style={topContainerIconsStyle}
            onClick={() => setNavigateToRoute(!navigateToRoute)}
          />
          <SearchIcon style={topContainerIconsStyle} />
        </div>
        <Typography className={classes.taskAssistantTextStyle}>
          Your WM ONE Assistant
        </Typography>
        <Typography className={classes.taskAssistantTextStyle1}>
          is Here!!
        </Typography>
        <img src={assistantImage} className="assistantImageStyle" alt="" />
      </div>
      {chatMessage && (
        <div className="chatContainerStyle">
          <div className="chatStyle1">
            <Typography className={classes.assistantTextStyle}>
              {chatMessage.assistantMsg1}
            </Typography>
          </div>
          <div className="chatStyle2">
            {secondMessage && (
              <Typography className={classes.userTextStyle}>
                {chatMessage.userMsg}
              </Typography>
            )}
          </div>
          <div className="chatStyle1">
            {thirdMessage && (
              <Typography className={classes.assistantTextStyle}>
                {chatMessage.assistantMsg2}
              </Typography>
            )}
          </div>
        </div>
      )}
      <FrequencyComp />
      <div className="micIconContainerOuterStyle">
        <div className="micIconContainerInnerStyle">
          <MicIcon style={micIconStyle} onClick={micIconClicked} />
        </div>
      </div>
      <div className="bottomIconContainerStyle">
        <HomeOutlinedIcon style={bottomContainerIconsStyle} />
        <NotificationsNoneOutlinedIcon style={bottomContainerIconsStyle} />
        <AddCommentOutlinedIcon style={selectedBottomContainerIconsStyle} />
        <ListOutlinedIcon
          style={bottomContainerIconsStyle}
          onClick={() => navigateToList(null)}
        />
        <PersonOutlineOutlinedIcon style={bottomContainerIconsStyle} />
      </div>
    </div>
  );
};

export default Home;
