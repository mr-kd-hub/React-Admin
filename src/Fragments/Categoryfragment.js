import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Homefragment() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Show Category" {...a11yProps(0)} />
          <Tab label="Add Category" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box>
          {/* Display */}
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Special title treatment</h5>
              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
              </p>
              <a href="#" className="btn btn-info mr-2">
                Edit
              </a>
              <a href="#" className="btn btn-primary mr-2">
                Deactive
              </a>
              <a href="#" className="btn btn-danger">
                Delete
              </a>
            </div>
          </div>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Add Category */}
        <div className="container">
          <form method="post">
            <div class="form-group">
              <label for="exampleFormControlInput1">Title</label>
              <input
                name="title"
                type="text"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Shirt"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlFile1">Image</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                name="image"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlTextarea1">Product Category Link</label>
              <textarea
                name="productcategorylink"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
            <div className="form-group">
              <label class="form-check-label mr-4" for="inlineRadio1">
                Status
              </label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Status"
                  id="inlineRadio1"
                  value="true"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Active
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="Status"
                  id="inlineRadio2"
                  value="false"
                />
                <label class="form-check-label" for="inlineRadio2">
                  Deactive
                </label>
              </div>
            </div>
            <div className="form-group">
              <label class="form-check-label mr-2" for="inlineRadio1">
                Feature To Home
              </label>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="feature_to_home"
                  id="inlineRadio1"
                  value="true"
                />
                <label class="form-check-label" for="inlineRadio1">
                  Yes
                </label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="feature_to_home"
                  id="inlineRadio2"
                  value="false"
                />
                <label class="form-check-label" for="inlineRadio2">
                  No
                </label>
              </div>
            </div>
            <button class="btn btn-primary">Add Category</button>
          </form>
        </div>
      </TabPanel>
    </div>
  );
}
