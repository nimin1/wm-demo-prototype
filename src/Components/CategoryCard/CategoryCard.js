import React from "react";
import GroupIcon from "@material-ui/icons/Group";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import RateReviewIcon from "@material-ui/icons/RateReview";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { Typography, makeStyles } from "@material-ui/core";

import "./CategoryCard.scss";

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
      return <GroupIcon style={iconStyle} />;
    } else if (cardId === "1002") {
      return <MailOutlineIcon style={iconStyle} />;
    } else if (cardId === "1003") {
      return <RateReviewIcon style={iconStyle} />;
    } else if (cardId === "1004") {
      return <AssignmentIndIcon style={iconStyle} />;
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
