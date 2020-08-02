import React, { useState, useEffect } from "react";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useHistory } from "react-router-dom";
import { Typography, makeStyles } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";

import "./SettingsComp.scss";
import { settingsData } from "../../constants";

const topContainerIconsStyle = {
  height: 22,
  width: 22,
  color: "#fff",
  position: "relative",
  bottom: 0,
};
const topContainerIconsMenuStyle = {
  height: 28,
  width: 28,
  color: "#fff",
  position: "relative",
  bottom: 0,
};
const tickCircleStyleSelected = {
  position: "absolute",
  right: 58,
  top: 23,
  color: "green",
};
const tickCircleStyleNotSelected = {
  position: "absolute",
  right: 58,
  top: 23,
  color: "#000",
};
const addCircleStyle = {
  position: "absolute",
  right: 25,
  top: 23,
  color: "#000",
};
const removeCircleStyle = {
  position: "absolute",
  right: 25,
  top: 23,
  color: "#000",
};

const useStyles = makeStyles({
  settingsItemNameStyle: {
    fontSize: "13px",
    color: "#000",
    fontWeight: 600,
    fontFamily: "Helvetica, Arial, sans-serif",
  },
  settingsAppListStyle: {
    color: "#fff",
    fontSize: 24,
    fontFamily: "monospace",
    fontWeight: 600,
    position: "relative",
    textAlign: "left",
    marginLeft: 28,
    marginTop: -7,
    paddingBottom: 15,
  },
});

const SettingsComp = () => {
  const classes = useStyles();
  const history = useHistory();
  const [dataSettings, setDataSettings] = useState(null);

  const navigateToMyTask = () => {
    history.goBack();
  };

  const listChange = (selType, id) => {
    const tempDataSettings = [...dataSettings];

    tempDataSettings.forEach((data) => {
      if (data.itemId === id) {
        selType === "add" ? (data.itemAdded = true) : (data.itemAdded = false);
      }
    });

    setDataSettings(tempDataSettings);
  };

  useEffect(() => {
    setDataSettings(settingsData);
  }, []);

  return (
    <div className="settingsContainerStyle">
      <div className="settingsTopContainerStyle">
        <div className="settingsTopIconContainerStyle">
          <ArrowBackIcon
            style={topContainerIconsStyle}
            onClick={navigateToMyTask}
          />
          <MoreHorizIcon style={topContainerIconsMenuStyle} />
        </div>
        <Typography className={classes.settingsAppListStyle}>
          App List
        </Typography>
      </div>
      <SimpleBar style={{ backgroundColor: "#f5f5f5", maxHeight: 560 }}>
        {dataSettings &&
          dataSettings.length > 0 &&
          dataSettings.map((data) => (
            <div className="settingsDataContainerStyle" key={data.itemId}>
              <div className="iconContainerStyle">
                <img src={data.itemImage} alt="" style={data.itemStyle} />
              </div>
              <div className="settingNameAndRatingStyle">
                <Typography className={classes.settingsItemNameStyle}>
                  {data.itemName}
                </Typography>
                <Rating
                  name="size-small"
                  defaultValue={data.itemRating}
                  size="small"
                />
              </div>
              {data.itemAdded ? (
                <RemoveCircleOutlineIcon
                  style={addCircleStyle}
                  onClick={() => listChange("remove", data.itemId)}
                />
              ) : (
                <AddCircleOutlineIcon
                  style={removeCircleStyle}
                  onClick={() => listChange("add", data.itemId)}
                />
              )}
              {data.itemAdded ? (
                <CheckCircleOutlineIcon style={tickCircleStyleSelected} />
              ) : (
                <CheckCircleOutlineIcon style={tickCircleStyleNotSelected} />
              )}
            </div>
          ))}
      </SimpleBar>
    </div>
  );
};

export default SettingsComp;
