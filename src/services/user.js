let saveUserDetail = (emailId, name) => {
  return new Promise((resolve, reject) => {
    fetch(`https://bruhh.in:3001/user/saveUserDetail`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        emailId: emailId,
        name: name,
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

module.exports = { saveUserDetail };
