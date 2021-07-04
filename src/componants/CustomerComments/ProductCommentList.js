import React, { useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { getProductComments } from "../../services/getComments";
import { CommentsContext } from "./CustomerComments"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
    "word-wrap": "break-word"
  },
}));

export default function ProductCommentList(props) {
  const classes = useStyles();

  const context = useContext(CommentsContext);

  const comments = context.productComments;
  const setComments = context.setProductComments;

  useEffect(() => {
    async function getComments() {
      let res = await getProductComments(props.productId);
      console.log("res",res)
      if (res && res.length > 0) {
        setComments([...res]);
        console.log("comments",comments)
      }
    }
    getComments();
  }, [props.productId]);

  return (
    <List className={classes.root}>
      {comments.map((el) => {
        return (
          <>
            <ListItem key={el._id} alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={el.userId} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={el.userId}
                secondary={
                  <React.Fragment className={classes.inline}>

                    {el.comment}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}{" "}
    </List>
  );
}
