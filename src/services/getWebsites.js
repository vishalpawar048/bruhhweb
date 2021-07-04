let getWebsites = (category, type) => {
  return new Promise((resolve, reject) => {
    fetch("https://bruhh.in:3001/products/getWebsites", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        category: category,
        subCategory: type,
      }),
    })
      .then((results) => results.json())
      .then((data) => {
        resolve(data.website);
      })
      .catch((e) => {
        reject(e);
      });
  });
};

export default getWebsites;
