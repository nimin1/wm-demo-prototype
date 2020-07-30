import React from "react";
import { Typography, makeStyles } from "@material-ui/core";

import "./CategoryCard.scss";
import outlookIcon from "../../assets/outlook_icon.png";
import calendarIcon from "../../assets/calendar_icon.png";
import serviceNowIcon from "../../assets/service_now.png";
import concurIcon from "../../assets/concur_icon.png";
import gitIcon from "../../assets/git_icon.png";
import jiraIcon from "../../assets/jira_icon.png";

const useStyles = makeStyles({
  categoryTitleStyle: {
    fontSize: "13.5px",
    color: "#041f41",
    margin: "0px 0px 0px 13px",
    textAlign: "left",
    fontFamily: "monospace",
    fontWeight: 600,
  },
  categoryTaskTitleStyle: {
    fontSize: "11px",
    color: "#041f41",
    margin: "0px 0px 0px 5px",
    textAlign: "left",
    fontFamily: "monospace",
  },
});

const CategoryCard = (props) => {
  const classes = useStyles();
  const { cardId, category, categoryClicked } = props;
  const { cardTitle, cardTaskTitle, cardColor } = category;

  const iconStyle = {
    color: "rgba(255, 255, 255, 1)",
    position: "relative",
    right: 25,
    top: 10,
  };

  const findIconForCard = (cardId) => {
    if (cardId === "1001") {
      //return <GroupIcon style={iconStyle} />;
      return <img src={calendarIcon} alt="" className="calendarIconStyle" />;
    } else if (cardId === "1002") {
      //return <MailOutlineIcon style={iconStyle} />;
      return <img src={outlookIcon} alt="" className="outlookIconStyle" />;
    } else if (cardId === "1003") {
      //return <RateReviewIcon style={iconStyle} />;
      return <img src={serviceNowIcon} alt="" className="calendarIconStyle" />;
    } else if (cardId === "1004") {
      //return <AssignmentIndIcon style={iconStyle} />;
      return <img src={concurIcon} alt="" className="calendarIconStyle" />;
    } else if (cardId === "1005") {
      //return <AssignmentIndIcon style={iconStyle} />;
      return <img src={gitIcon} alt="" className="calendarIconStyle" />;
    } else if (cardId === "1006") {
      //return <AssignmentIndIcon style={iconStyle} />;
      return <img src={jiraIcon} alt="" className="calendarIconStyle" />;
    }
  };

  return (
    <div className="categoryCardContainer" onClick={categoryClicked}>
      <div className="categoryCardStyle" style={{ backgroundColor: cardColor }}>
        {findIconForCard(cardId)}
        <Typography className={classes.categoryTitleStyle}>
          {cardTitle}
        </Typography>
        <div className="cardTaskTitleContainer">
          <div className="pointerTaskTitleStyle"></div>
          <Typography className={classes.categoryTaskTitleStyle}>
            {cardTaskTitle}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
