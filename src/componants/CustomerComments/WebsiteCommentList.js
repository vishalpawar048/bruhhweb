import React, { useEffect, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { getWebsiteComments } from "../../services/getComments";
import { CommentsContext } from "./CustomerComments"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "36ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function WebsiteCommentList(props) {
  const classes = useStyles();

  const context = useContext(CommentsContext);


  const comments = context.websiteComments;
  const setComments = context.setWebsiteComments;


  useEffect(() => {
    async function getComments() {
      let res = await getWebsiteComments(props.website);

      if (res && res.length > 0) {
        setComments([...res]);
      }
    }
    getComments();
  }, [props.website]);

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
                  <React.Fragment>
                 
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
