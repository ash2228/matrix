const db = require("./connect");
const retrive = (id) => {
    return db.collection("user").where("id","==",id).get()
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
