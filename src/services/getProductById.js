let getProductById = (id) => {
  return new Promise((resolve, reject) => {
    fetch("https://bruhh.in:3001/products/getProductById", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

let getWebsiteDetails = (website) => {
  return new Promise((resolve, reject) => {
    fetch("https://bruhh.in:3001/products/getWebsiteDetails", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        website: website,
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

let deleteProductById = (id) => {
  return new Promise((resolve, reject) => {
    fetch("https://bruhh.in:3001/products/deleteProduct", {
      method: "post",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        id: id,
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        resolve(data);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

module.exports = {
  getProductById,
  deleteProductById,
  getWebsiteDetails,
};
