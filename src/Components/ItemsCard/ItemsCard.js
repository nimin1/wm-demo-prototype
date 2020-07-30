import React from "react";
import MailIcon from "@material-ui/icons/Mail";
import CircularProgress from "@material-ui/core/CircularProgress";
import DraftsIcon from "@material-ui/icons/Drafts";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import OpenInNewIcon from "@material-ui/icons/OpenInNew";
import { Typography, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import outlookIcon from "../../assets/outlook_icon.png";
import calendarIcon from "../../assets/calendar_icon.png";
import serviceNowIcon from "../../assets/service_now.png";
import concurIcon from "../../assets/concur_icon.png";
import gitIcon from "../../assets/git_icon.png";
import jiraIcon from "../../assets/jira_icon.png";

import "./ItemsCard.scss";

const useStyles = makeStyles({
  cardTitleStyle: {
    fontSize: "13.5px",
    fontWeight: 600,
    margin: "7px 0px 0px 15px",
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontFamily: "monospace",
  },
  cardTaskTitleStyle: {
    fontSize: "10px",
    textAlign: "left",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap",
    fontFamily: "monospace",
    margin: "0px 20px 0px 15px",
    color: "rgba(0, 0, 0, 0.7)",
    letterSpacing: 0,
  },
  circularProgressStyle: {
    position: "absolute",
    top: 7,
    right: 11,
    color: "#041f41",
    height: "35px !important",
    width: "35px !important",
  },
  metricCompletionStyle: {
    position: "absolute",
    right: 17,
    fontSize: 10,
    fontWeight: 700,
    top: 18,
    color: "#041f41",
  },
});

const ItemsCard = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const { item } = props;
  const {
    cardTitle,
    cardTaskTitle,
    cardColor,
    cardCategory,
    cardType,
    metricCompletion,
  } = item;

  const mailUnreadIconStyle = {
    color: "#041f41",
    position: "absolute",
    right: 14,
    top: 14,
    height: 30,
    width: 30,
  };

  const mailReadIconStyle = {
    //color: "rgb(3, 167, 111)",
    color: "#041f41",
    position: "absolute",
    right: 14,
    top: 14,
    height: 30,
    width: 30,
  };

  const approvedCircleIconStyle = {
    color: "#041f41",
    position: "absolute",
    right: 14,
    top: 14,
    height: 30,
    width: 30,
  };

  const nonApprovedCircleIconStyle = {
    color: "rgba(4, 31, 65, 0.3)",
    position: "absolute",
    right: 14,
    top: 14,
    height: 30,
    width: 30,
  };

  const linkStyle = {
    marginLeft: 5,
    height: 15,
    marginTop: 8,
    width: 15,
  };

  const findIconForCard = (cardCategory) => {
    if (cardCategory === "Meetings") {
      //return <GroupIcon style={iconStyle} />;
      return <img src={calendarIcon} alt="" className="meetingIconStyle" />;
    } else if (cardCategory === "Mail") {
      //return <MailOutlineIcon style={iconStyle} />;
      return <img src={outlookIcon} alt="" className="outlookIconStyle" />;
    } else if (cardCategory === "Approval") {
      //return <RateReviewIcon style={iconStyle} />;
      return <img src={serviceNowIcon} alt="" className="meetingIconStyle" />;
    } else if (cardCategory === "Concur") {
      //return <AssignmentIndIcon style={iconStyle} />;
      return <img src={concurIcon} alt="" className="meetingIconStyle" />;
    } else if (cardCategory === "Git") {
      //return <AssignmentIndIcon style={iconStyle} />;
      return <img src={gitIcon} alt="" className="meetingIconStyle" />;
    } else if (cardCategory === "Jira") {
      //return <AssignmentIndIcon style={iconStyle} />;
      return <img src={jiraIcon} alt="" className="meetingIconStyle" />;
    }
  };

  const getProgressComponent = (cardCategory) => {
    if (cardCategory === "Meetings") {
      return (
        <>
          <CircularProgress
            className={classes.circularProgressStyle}
            variant="static"
            value={parseInt(metricCompletion.split("%"))}
          />
          <Typography className={classes.metricCompletionStyle}>
            {metricCompletion}
          </Typography>
        </>
      );
    } else if (cardCategory === "Mail") {
      return (
        <>
          {metricCompletion === "Read" ? (
            <DraftsIcon style={mailReadIconStyle} />
          ) : (
            <MailIcon style={mailUnreadIconStyle} />
          )}
        </>
      );
    } else if (cardCategory === "Approval") {
      return (
        <>
          {metricCompletion === "Approved" ? (
            <CheckCircleOutlineIcon style={approvedCircleIconStyle} />
          ) : (
            <CheckCircleOutlineIcon style={nonApprovedCircleIconStyle} />
          )}
        </>
      );
    } else if (cardCategory === "Concur") {
      return (
        <>
          {metricCompletion === "Approved" ? (
            <CheckCircleOutlineIcon style={approvedCircleIconStyle} />
          ) : (
            <CheckCircleOutlineIcon style={nonApprovedCircleIconStyle} />
          )}
        </>
      );
    }
  };

  const navigateToTaskDetails = () => {
    history.push("/mytaskdetails");
  };

  return (
    <div className="itemsCardContainerStyle" onClick={navigateToTaskDetails}>
      <div
        className="cardIconContainerStyle"
        style={{ backgroundColor: cardColor }}
      >
        {findIconForCard(cardCategory)}
      </div>
      <div>
        <div className="cardTitleDivStyle">
          <Typography className={classes.cardTitleStyle}>
            {cardTitle}
          </Typography>
          {cardType.includes("Approval") && (
            <OpenInNewIcon style={linkStyle} />
          )}
        </div>
        <Typography
          className={classes.cardTaskTitleStyle}
          style={
            cardTaskTitle.includes("Approved")
              ? { color: "green" }
              : cardTaskTitle.includes("High") ||
                cardTaskTitle.includes("Delay")
              ? { color: "red" }
              : null
          }
        >
          {cardTaskTitle}
        </Typography>
      </div>
      {getProgressComponent(cardCategory)}
    </div>
  );
};

export default ItemsCard;
