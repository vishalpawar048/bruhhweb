let config = require("../config.json");

let getWishList = (email) => {
  return new Promise((resolve, reject) => {
    fetch(`${config.production.api}/wishlist/getWishlist/${email}`, {
      method: "get",
      headers: { "Content-Type": "application/json" },
    })
      .then((results) => results.json())
      .then((data) => {
        resolve(data.wishlist);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

let addToWishlist = (emailId, productId) => {
  return new Promise((resolve, reject) => {
    fetch(`${config.production.api}/wishlist/addToWishlist`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailId: emailId,
        productId: productId,
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        resolve(true);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

let removefromWishlist = (emailId, productId) => {
  return new Promise((resolve, reject) => {
    //   fetch("https://bruhh.in:3001/products/getWebsites", {
    fetch(`${config.production.api}/wishlist/removefromWishlist`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailId: emailId,
        productId: productId,
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        resolve(true);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

module.exports = { addToWishlist, getWishList, removefromWishlist };
