import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

export default function HoverRating(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name={props.name}
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          props.getValue(props.name, newValue)
          setValue(newValue);
        }}
      
      />
    </div>
  );
}
