const express = require("express");
const app = express();
const cors = require("cors");
const retrive = require("./retrive");
const setdata = require("./setdata");

const documentId = "ejs4tK3sIAaQycaJvUOe";

app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("listening on 3001");
});
let token = "xyz"
app.post("/storetoken", async (req, res) => {
    const token = req.body.token;
    res.sendStatus(200);
});

retrive(token)
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error("Error retrieving data:", err);
    });

const data = {
    profile:"https://example2.com",
    name:"Ash",
    id:token
}
// setdata(data)