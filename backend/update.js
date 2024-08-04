const db = require("./connect");
const updateDoc = async(id,productid)=>{
    const products = await db.collection("user").where("id","==",id).get()
    const snapshot = products.docs[0];
    let arr = snapshot.data().products.concat(productid);
    return db.collection("user").where("id","==",id).get()
    .then(res=>res.forEach((doc)=>{db.collection('user').doc(doc.id).update({
        products:arr
    })}))
}
module.exports = updateDoc;