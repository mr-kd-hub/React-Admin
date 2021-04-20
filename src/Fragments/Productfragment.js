import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Addproduct from "./Addproduct";
import axios from "axios";

const cssStyle = {
  width: "130px",
  height: "265px",
};

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

export default function Productfragment() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [state, setState] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:9000/api/showProduct")
      .then((res) => {
        // console.log(res.data)
        if (res.data.msg === "Success") {
          setState(res.data.product);
        }
      })
      .catch((err) => {
        console.log("problem in login : " + err);
      });
  }, []);
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
          <Tab label="Show Products" {...a11yProps(0)} />
          <Tab label="Add Product" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Box>
          {/* Display */}
          <div className="container">
            <section className="lattest-product-area pb-40 category-list">
              <div className="row">
                {state && state.map((cardInfo, index) => {
                    return (
                      <>
                      <div className="col-sm-4 single-product mb-4">
                        <div className="card" style={{ width: "18rem" }}>
                          <div className="card-body">
                            <iframe
                              className="img-fluid d-block mx-auto"
                              style={cssStyle}
                              marginwidth="0"
                              marginheight="0"
                              scrolling="no"
                              frameborder="0"
                              src={cardInfo.flipkart_link}
                            ></iframe>
                            <div className="card-text">
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
                        </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </section>
          </div>
        </Box>
      </TabPanel>
      <TabPanel value={value} index={1}>
        {/* Add product */}
        <Box>
          <Addproduct />
        </Box>
      </TabPanel>
    </div>
  );
}
