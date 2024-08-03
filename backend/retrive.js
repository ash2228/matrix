const db = require("./connect");

const retrive = (token) => {
    return db.collection("user").where("id","==",token).get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];
                return doc.data();
            } else {
                console.log("document doesn't exist");
                return null;
            }
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

module.exports = retrive;
