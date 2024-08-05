const db = require("./connect");
const retrive = (mail) => {
    return db.collection("user").where("mail","==",mail).get()
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

module.exports = retrive;
