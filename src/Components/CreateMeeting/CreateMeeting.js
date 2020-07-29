import React from "react";
import { Typography, Checkbox, makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import DateRangeIcon from "@material-ui/icons/DateRange";
import ScheduleIcon from "@material-ui/icons/Schedule";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import FaceIcon from "@material-ui/icons/Face";

import "./CreateMeeting.scss";
import slackIcon from "../../assets/slackIcon.png";

const useStyles = makeStyles({
  categoryTitleStyle: {
    fontSize: "14px",
    color: "#fff",
    margin: "6px 0px 0px 13px",
    textAlign: "left",
    fontFamily: "monospace",
  },
  categoryTaskTitleStyle: {
    fontSize: "11px",
    color: "#fff",
    margin: "0px 0px 0px 5px",
    textAlign: "left",
    fontFamily: "monospace",
  },
  createMeetingHeading: {
    fontSize: "25px",
    color: "#fff",
    fontWeight: 600,
    margin: "0px 20px 0px 25px",
    textAlign: "left",
    fontFamily: "monospace",
  },
  meetingDetailsStyle: {
    fontSize: "16px",
    color: "rgb(4, 31, 65)",
    textAlign: "left",
    fontFamily: "monospace",
    margin: "18px 15px 0px 25px",
    fontWeight: 600,
  },
  meetingAvatarStyle: {
    fontSize: "11px",
    color: "rgb(4, 31, 65)",
    textAlign: "left",
    fontFamily: "monospace",
    marginTop: 5,
    fontWeight: 600,
    minWidth: 49,
  },
  meetingNotificationStyle: {
    fontSize: "12px",
    color: "rgb(4, 31, 65)",
    textAlign: "left",
    fontFamily: "monospace",
    marginTop: 5,
    fontWeight: 600,
    position: "relative",
    top: 7,
  },
  createMeetingTextStyle: {
    fontSize: "13.5px",
    color: "#fff",
    fontFamily: "monospace",
    marginTop: 5,
    fontWeight: 600,
    position: "relative",
    top: 8,
  },
});

const CreateMeeting = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const topContainerIconsStyle = {
    color: "#fff",
    height: 30,
    width: 30,
  };

  const calendarIconStyle = {
    color: "#feaf57",
    height: 30,
    width: 30,
    position: "relative",
    top: 14,
  };

  const faceIconStyle = {
    color: "rgb(4, 31, 65)",
    height: 35,
    width: 35,
    position: "relative",
    top: 7,
    marginRight: 15,
  };

  return (
    <div className="createMeetingContainer">
      <div className="topContainerStyle">
        <div className="topIconContainerStyle">
          <ArrowBackIcon
            style={topContainerIconsStyle}
            onClick={() => history.push("/")}
          />
          <MenuIcon style={topContainerIconsStyle} />
        </div>
        <Typography className={classes.createMeetingHeading}>
          Create New Meeting
        </Typography>
      </div>
      <input
        type="text"
        id="mtitle"
        name="mtitle"
        placeholder="Meeting Title"
        className="meetingTitleStyle"
      />
      <div className="meetingDetailsStyle">
        <div className="meetingDetailsIconStyle">
          <DateRangeIcon style={calendarIconStyle} />
        </div>
        <Typography className={classes.meetingDetailsStyle}>
          Thursday, June 27
        </Typography>
      </div>
      <div className="meetingDetailsTimeStyle">
        <div className="meetingDetailsIconStyle">
          <ScheduleIcon style={calendarIconStyle} />
        </div>
        <Typography className={classes.meetingDetailsStyle}>
          11:00 AM - 1:00 PM
        </Typography>
      </div>
      <input
        type="text"
        id="mtitle"
        name="mtitle"
        placeholder="Description"
        className="meetingTitleDescStyle"
      />
      <div className="faceIconContainerStyle">
        <FaceIcon style={faceIconStyle} />
        <FaceIcon style={faceIconStyle} />
        <FaceIcon style={faceIconStyle} />
      </div>
      <div className="faceIconContainerStyle1">
        <Typography className={classes.meetingAvatarStyle}>Rob</Typography>
        <Typography className={classes.meetingAvatarStyle}>Alex</Typography>
        <Typography className={classes.meetingAvatarStyle}>Debbie</Typography>
      </div>
      <div className="notifyOnSlackStyle">
        <Checkbox
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Typography className={classes.meetingNotificationStyle}>
          Notify people on Slack also?
        </Typography>
        <img src={slackIcon} alt="" className="slackIconStyle" />
      </div>
      <div
        className="createMeetingButtonStyle"
        onClick={() => history.push("/")}
      >
        <Typography className={classes.createMeetingTextStyle}>
          Create Meeting
        </Typography>
      </div>
    </div>
  );
};

export default CreateMeeting;
