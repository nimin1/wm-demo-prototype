import React, { useState, useEffect } from "react";
import AppsIcon from "@material-ui/icons/Apps";
import SearchIcon from "@material-ui/icons/Search";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import AddCommentOutlinedIcon from "@material-ui/icons/AddCommentOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import ListOutlinedIcon from "@material-ui/icons/ListOutlined";
import { Typography, Divider, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";

import CategoryCard from "../CategoryCard/CategoryCard";
import ItemsCard from "../ItemsCard/ItemsCard";
import "./MyTask.scss";
import { categoryCardDetails, itemDetails } from "../../constants";

const useStyles = makeStyles({
  categoryTextStyle: {
    fontSize: "20px",
    color: "#fff",
    fontWeight: 600,
    margin: "0px 20px 0px 25px",
    textAlign: "left",
    fontFamily: "monospace",
  },
  todayTextStyle: {
    fontSize: "18px",
    color: "#000",
    fontWeight: 700,
    margin: "20px 20px 0px 25px",
    textAlign: "left",
  },
  todayCountStyle: {
    fontSize: "15px",
    color: "#041f41",
    fontWeight: 600,
    margin: "20px 20px 0px 25px",
    textAlign: "left",
    fontFamily: "monospace",
    position: "relative",
    bottom: 16,
    right: 18,
  },
  todayDividerStyle: {
    backgroundColor: "#0747a6",
    width: 30,
    height: 4,
    marginTop: 2,
    marginLeft: 27,
  },
});

const MyTask = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const [filteredState, setFilteredState] = useState(itemDetails);
  const { selectedItem } = props;

  const topContainerIconsStyle = {
    color: "#fff",
    height: 24,
    width: 24,
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

  const navigateToHome = () => {
    history.push("/");
  };

  const categoryClicked = (category) => {
    const filteredItemDetails = itemDetails.filter(
      (cardEle) => cardEle.cardCategory === category.cardMatch
    );

    setFilteredState(filteredItemDetails);
  };

  useEffect(() => {
    if(selectedItem) {
      const filteredItemDetails = itemDetails.filter(
        (cardEle) => cardEle.cardType === selectedItem
      );

      setFilteredState(filteredItemDetails)
    } else {
      setFilteredState(itemDetails)
    }
  }, [selectedItem])

  return (
    <div className="myTaskContainerStyle">
      <div className="topContainerStyle">
        <div className="topIconContainerStyle">
          <AppsIcon style={topContainerIconsStyle} />
          <SearchIcon style={topContainerIconsStyle} />
        </div>
        <Typography className={classes.categoryTextStyle}>Category</Typography>
        <SimpleBar>
          <div className="categoryContainerStyle">
            {categoryCardDetails.map((category) => (
              <CategoryCard
                key={category.cardId}
                cardId={category.cardId}
                category={category}
                categoryClicked={() => categoryClicked(category)}
              />
            ))}
          </div>
        </SimpleBar>
      </div>
      <div className="notificationCountStyle">
        <Typography className={classes.todayTextStyle}>Today</Typography>
        <div className="todayCountContainerStyle">
          <Typography className={classes.todayCountStyle}>13</Typography>
        </div>
      </div>
      <Divider className={classes.todayDividerStyle} />
      <SimpleBar style={{ height: 320 }}>
        <div className="itemTasksContainerStyle">
          {filteredState.map((item) => (
            <ItemsCard key={item.cardId} item={item} />
          ))}
        </div>
      </SimpleBar>
      <div className="bottomIconContainerStyle">
        <HomeOutlinedIcon style={bottomContainerIconsStyle} />
        <NotificationsNoneOutlinedIcon style={bottomContainerIconsStyle} />
        <AddCommentOutlinedIcon
          style={bottomContainerIconsStyle}
          onClick={navigateToHome}
        />
        <ListOutlinedIcon style={selectedBottomContainerIconsStyle} />
        <PersonOutlineOutlinedIcon style={bottomContainerIconsStyle} />
      </div>
    </div>
  );
};

export default MyTask;
