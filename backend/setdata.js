const db = require("./connect")
const setData = (data)=>{
    return db.collection("user").add(data)
    .catch(err=>{
        console.log(err)
    })
}
module.exports = setData;