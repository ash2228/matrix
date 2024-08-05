const db = require("./connect");
const duplicatemail = (mail) => {
    return db.collection("user").where("mail","==",id).get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                const doc = querySnapshot.docs[0];
                return doc.data();

            } else {
                return undefined;
            }
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
};

module.exports = duplicatemail;
