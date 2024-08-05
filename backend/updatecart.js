const db = require("./connect");
const updateCart = async(id,productid)=>{
    const products = await db.collection("user").where("id","==",id).get()
    const snapshot = products.docs[0];
    let arr = snapshot.data().cart.concat(productid);
    return db.collection("user").where("id","==",id).get()
    .then(res=>res.forEach((doc)=>{db.collection('user').doc(doc.id).update({
        products:arr
    })}))
}
module.exports = updateCart;