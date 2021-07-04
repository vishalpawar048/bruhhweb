import React, { useRef, useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  RaningWrapper,
  RatingTitle,
  RatingWrapper,
} from "../ProductDescription/ProductDescriptionElement";
import HoverRating from "../CustomerRating/CustomerRating";
import { postProductComments } from "../../services/getComments";
import { CommentsContext } from "../CustomerComments/CustomerComments"


export default function CxProductRatingModal(props) {
  const [open, setOpen] = useState(true);
  const [productRating, setProductRating] = useState("0");
  const valueRef = useRef("");
  let emailId = localStorage.getItem("email");
  let userId = localStorage.getItem("name");
  const context = useContext(CommentsContext);

  const sendValue = () => {
    setOpen(false);
    props.setOpenCxProductRatingModal(false);

    let commentObj = {
      productId: props.productDetails._id,
      userId: userId,
      emailId: emailId,
      name: props.productDetails.name,
      website: props.productDetails.website,
      comment: valueRef.current.value,
      productRating: productRating,
    };

    context.productComments.unshift(commentObj)


    postProductComments(commentObj);
  };


  const handleClose = () => {
    setOpen(false);
    props.setOpenCxProductRatingModal(false);
  };

  const getValue = (name, value) => {
    setProductRating(value);
  };

  return (
    <div>
   
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {props.productDetails.name}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Ratings:</DialogContentText>

          <RatingWrapper>
            <RaningWrapper>
              <RatingTitle>Product Rating</RatingTitle>
              <HoverRating name="productRating" getValue={getValue} />
            </RaningWrapper>
          </RatingWrapper>
          <TextField
            autoFocus
            margin="dense"
            id="Comment"
            label="Comment"
            type="Comment"
            rows={5}
            inputRef={valueRef}
            multiline
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={sendValue} color="primary">
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
