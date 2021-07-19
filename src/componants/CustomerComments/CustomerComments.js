import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Zoom from "@material-ui/core/Zoom";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import { green } from "@material-ui/core/colors";
import Box from "@material-ui/core/Box";

import CxWebsiteRatingModal from "../CustomerReview/CustomerWebsiteRatingModal";
import CxProductRatingModal from "../CustomerReview/CustomerProductRatingModal";
import WebsiteCommentList from "./WebsiteCommentList";
import ProductCommentList from "./ProductCommentList";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `action-tab-${index}`,
    "aria-controls": `action-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
    position: "relative",
    minHeight: 200,
  },
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    "&:hover": {
      backgroundColor: green[600],
    },
  },
}));

const CommentsContext = React.createContext({});

export { CommentsContext };

export default function CustomerComments(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [websiteComments, setWebsiteComments] = useState([]);
  const [productComments, setProductComments] = useState([]);
  const [openCxWebsiteRatingModal, setOpenCxWebsiteRatingModal] =
    useState(false);
  const [openCxProductRatingModal, setOpenCxProductRatingModal] =
    useState(false);
  let emailId = localStorage.getItem("email");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const transitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen,
  };


  const fabs = [
    {
      color: "primary",
      className: classes.fab,
      icon: <EditIcon />,
      label: "Add Website Review",
    },

    {
      color: "primary",
      className: classes.fab,
      icon: <EditIcon />,
      label: "Add Product Review",
    },
  ];

  let handleClick = (label) => {
    if (emailId) {
      if (label === fabs[0].label) {
        setOpenCxWebsiteRatingModal(true);
      } else {
        setOpenCxProductRatingModal(true);
      }
    } else {
      props.setLoginModal(true);
    }
  };

  return (
    <div className={classes.root}>
      <CommentsContext.Provider value={{ websiteComments, setWebsiteComments, productComments, setProductComments }}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
            aria-label="action tabs example"
          >
            <Tab label="Website Rating" {...a11yProps(0)} />
            <Tab label="Product Rating" {...a11yProps(1)} />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <WebsiteCommentList website={props.productDetails.website}></WebsiteCommentList>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <ProductCommentList productId={props.productDetails._id}></ProductCommentList>
          </TabPanel>
        </SwipeableViews>
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.label}
            in={value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${value === index ? transitionDuration.exit : 0
                }ms`,
            }}
            unmountOnExit
          >
            <Fab

              aria-label={fab.label}
              className={fab.className}
              color={fab.color}
              onClick={() => handleClick(fab.label)}
            >
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
        {openCxWebsiteRatingModal ? (
          <CxWebsiteRatingModal
            productDetails={props.productDetails}
            websiteDetails={props.websiteDetails}
            setOpenCxWebsiteRatingModal={setOpenCxWebsiteRatingModal}
          ></CxWebsiteRatingModal>
        ) : null}

        {openCxProductRatingModal ? (
          <CxProductRatingModal
            productDetails={props.productDetails}
            setOpenCxProductRatingModal={setOpenCxProductRatingModal}
          ></CxProductRatingModal>
        ) : null}
      </CommentsContext.Provider>
    </div>
  );
}
