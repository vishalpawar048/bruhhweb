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
import { postWebsiteComments } from "../../services/getComments";
import { CommentsContext } from "../CustomerComments/CustomerComments"

export default function CxWebsiteRatingModal(props) {
  const [open, setOpen] = useState(true);
  const [websiteRating, setWebsiteRating] = useState("0");
  const [productsQualityRating, setProductsQualityRating] = useState("0");
  const [deliveryRating, setDeliveryRating] = useState("0");
  const [returnPolicyRating, setReturnPolicyRating] = useState("0");
  const context = useContext(CommentsContext);

  const valueRef = useRef("");

  const sendValue = async () => {
    setOpen(false);
    let emailId = localStorage.getItem("email");
    let userId = localStorage.getItem("name");

    props.setOpenCxWebsiteRatingModal(false);

    let commentObj = {
      website: props.productDetails.website,
      userId: userId,
      emailId: emailId,
      comment: valueRef.current.value,
      websiteRating: websiteRating,
      productsQualityRating: productsQualityRating,
      deliveryRating: deliveryRating,
      returnPolicyRating: returnPolicyRating,
    };

    context.websiteComments.unshift(commentObj);
    postWebsiteComments(commentObj);

  };


  const handleClose = () => {
    setOpen(false);
    props.setOpenCxWebsiteRatingModal(false);
  };

  const getValue = (name, value) => {
    if (name === "websiteRating") {
      setWebsiteRating(value);
    } else if (name === "delivery") {
      setDeliveryRating(value);
    } else if (name === "returnPolicy") {
      setReturnPolicyRating(value);
    } else {
      setProductsQualityRating(value);
    }
  };

  return (
    <div>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">
          {props.productDetails.website}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>Ratings:</DialogContentText>

          <RatingWrapper>
            <RaningWrapper>
              <RatingTitle>Website Rating</RatingTitle>
              <HoverRating name="websiteRating" getValue={getValue} />
            </RaningWrapper>

            <RaningWrapper>
              <RatingTitle>Delivery</RatingTitle>
              <HoverRating name="delivery" getValue={getValue} />
            </RaningWrapper>
            <RaningWrapper>
              <RatingTitle>Return Policy</RatingTitle>
              <HoverRating name="returnPolicy" getValue={getValue} />
            </RaningWrapper>
            <RaningWrapper>
              <RatingTitle>Product Quality</RatingTitle>
              <HoverRating name="productQuality" getValue={getValue} />
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
