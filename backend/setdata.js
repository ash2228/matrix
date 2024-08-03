const db = require("./connect")
const setData = (data)=>{
    db.collection("user").add(data)
    .then(res=>{
        console.log(res);
    })
    .catch(err=>{
        console.log(err)
    })
}
module.exports = setData;