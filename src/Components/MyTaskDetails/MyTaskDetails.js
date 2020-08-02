import React from "react";
import {
  Typography,
  Divider,
  CircularProgress,
  Menu,
  MenuItem,
  withStyles,
  makeStyles,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ScheduleIcon from "@material-ui/icons/Schedule";
import AddIcon from "@material-ui/icons/Add";
import PresentToAllIcon from "@material-ui/icons/PresentToAll";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import FolderOpenIcon from "@material-ui/icons/FolderOpen";
import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import TimelineIcon from "@material-ui/icons/Timeline";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { useHistory } from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import WatchLaterIcon from "@material-ui/icons/WatchLater";
import SnoozeIcon from "@material-ui/icons/Snooze";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

import "./MyTaskDetails.scss";
import { taskDetailsDesc, documentList } from "../../constants";

const useStyles = makeStyles({
  taskDetailsHeading: {
    fontSize: "22px",
    color: "#000",
    fontWeight: 600,
    margin: "5px 20px 0px 25px",
    textAlign: "left",
    fontFamily: "Helvetica, Arial, sans-serif",
  },
  taskDetailDividerStyle: {
    backgroundColor: "#0747a6",
    width: 30,
    height: 4,
    marginTop: 2,
    marginLeft: 27,
  },
  circularProgressStyle: {
    position: "relative",
    top: 29,
    right: 35,
    color: "#041f41",
    height: 35,
    width: 35,
  },
  metricCompletionStyle: {
    position: "absolute",
    right: 44,
    fontSize: 10,
    fontWeight: 700,
    top: 42,
    color: "#041f41",
  },
  deadlineTextStyle: {
    fontSize: "13px",
    color: "rgba(0, 0, 0, 0.4)",
    fontWeight: 600,
    textAlign: "left",
    fontFamily: "Helvetica, Arial, sans-serif",
    margin: "13px 0px 0px 8px",
  },
  deadlineTimeStyle: {
    fontSize: "14px",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: 600,
    textAlign: "left",
    fontFamily: "Helvetica, Arial, sans-serif",
    margin: "11px 0px 0px 35px",
  },
  taskDetailsDescStyle: {
    fontSize: "13px",
    color: "rgba(0, 0, 0, 0.5)",
    fontWeight: 600,
    textAlign: "left",
    fontFamily: "Helvetica, Arial, sans-serif",
    margin: "11px 5px 0px 30px",
    padding: "10px 10px 20px 0px",
  },
  documentsHeadingStyle: {
    fontSize: "17px",
    color: "#fff",
    textAlign: "left",
    fontFamily: "Helvetica, Arial, sans-serif",
    margin: "-2px 5px 0px 15px",
  },
  documentAttachmentTextStyle: {
    color: "rgba(255, 255, 255, 0.8)",
    //color: "#fff",
    margin: "0px 0px 0px 5px",
    fontSize: 12,
    textAlign: "left",
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: 600,
    marginBottom: 7,
  },
  documentDividerStyle: {
    backgroundColor: "#fff",
    width: 30,
    height: 3,
    marginTop: 2,
    marginLeft: 27,
    position: "absolute",
    top: 48,
    left: 9,
  },
  listItemTextStyle: {
    fontSize: 12,
    fontFamily: "Helvetica, Arial, sans-serif",
    fontWeight: 600,
    marginLeft: -25,
  },
});

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

const MyTaskDetails = () => {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const topContainerIconsStyle = {
    height: 22,
    width: 22,
  };
  const topContainerIconsMenuStyle = {
    height: 28,
    width: 28,
  };
  const scheduleIconStyle = {
    height: 22,
    width: 22,
    color: "rgba(0, 0, 0, 0.4)",
    position: "relative",
    top: 12,
    marginLeft: 18,
  };
  const questionaireIconStyle = {
    height: 36,
    width: 35,
    //color: "#00ab68",
    color: "#fdbb30",
    position: "relative",
    top: 15,
  };
  const presentationIconStyle = {
    height: 36,
    width: 35,
    //color: "#4aaafc",
    color: "#fdbb30",
    position: "relative",
    top: 13,
  };
  const assetsIconStyle = {
    height: 36,
    width: 35,
    //color: "#4aaafc",
    color: "#fdbb30",
    position: "relative",
    top: 13,
  };
  const brandingIconStyle = {
    height: 36,
    width: 35,
    //color: "#ab43ff",
    color: "#fdbb30",
    position: "relative",
    top: 13,
  };
  const timelineIconStyle = {
    height: 36,
    width: 35,
    //color: "#fe6466",
    color: "#fdbb30",
    position: "relative",
    top: 13,
  };
  const planIconStyle = {
    height: 36,
    width: 35,
    //color: "#488ac9",
    color: "#fdbb30",
    position: "relative",
    top: 13,
  };
  const addIconsMenuStyle = {
    height: 24,
    width: 24,
    color: "#fff",
    position: "relative",
    right: 25,
  };

  const navigateToMyTask = () => {
    history.push("/mytask");
  };

  const findDocumentIcon = (documentId) => {
    if (documentId === "3001") {
      return <QuestionAnswerIcon style={questionaireIconStyle} />;
    } else if (documentId === "3002") {
      return <PresentToAllIcon style={presentationIconStyle} />;
    } else if (documentId === "3003") {
      return <FolderOpenIcon style={assetsIconStyle} />;
    } else if (documentId === "3004") {
      return <FormatPaintIcon style={brandingIconStyle} />;
    } else if (documentId === "3005") {
      return <TimelineIcon style={timelineIconStyle} />;
    } else if (documentId === "3006") {
      return <CalendarTodayIcon style={planIconStyle} />;
    }
  };

  return (
    <div className="myTaskDetailsContainer">
      <div className="taskDetailsTopContainerStyle">
        <div className="taskDetailsTopIconContainerStyle">
          <ArrowBackIcon
            style={topContainerIconsStyle}
            onClick={navigateToMyTask}
          />
          <MoreHorizIcon
            style={topContainerIconsMenuStyle}
            onClick={handleClick}
          />
        </div>
        <Typography className={classes.taskDetailsHeading}>
          Monthly Innovation Discussion Meeting
        </Typography>
        <Divider className={classes.taskDetailDividerStyle} />
      </div>
      <div className="subTitleStyle">
        <div className="deadlineDetails">
          <ScheduleIcon style={scheduleIconStyle} />
          <Typography className={classes.deadlineTextStyle}>
            Deadline
          </Typography>
          <Typography className={classes.deadlineTimeStyle}>
            Today 9am
          </Typography>
        </div>
        <CircularProgress
          className={classes.circularProgressStyle}
          variant="static"
          value={90}
        />
        <Typography className={classes.metricCompletionStyle}>90%</Typography>
      </div>
      <Typography className={classes.taskDetailsDescStyle}>
        {taskDetailsDesc}
      </Typography>
      <div className="bottomIconContainerStyle">
        <div className="bottomIconTopContainerStyle">
          <div className="bottomIconTopIconContainerStyle">
            <Typography className={classes.documentsHeadingStyle}>
              Documents
            </Typography>
            <Divider className={classes.documentDividerStyle} />
            <AddIcon style={addIconsMenuStyle} />
          </div>
        </div>
        <div className="documentIconContainerStyle">
          {documentList.map((document) => (
            <div key={document.itemId}>
              <div className="documentContainerStyle">
                {findDocumentIcon(document.itemId)}
              </div>
              <Typography className={classes.documentAttachmentTextStyle}>
                {document.itemTitle}
              </Typography>
            </div>
          ))}
        </div>
      </div>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <WatchLaterIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemTextStyle }}
            primary="Running Late From Previous Meeting"
          />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <SnoozeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemTextStyle }}
            primary="Will join in 5 mins"
          />
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <ListItemIcon>
            <RemoveCircleOutlineIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemTextStyle }}
            primary="Sorry can't make it for Today's meeting"
          />
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default MyTaskDetails;
