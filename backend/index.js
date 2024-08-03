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
app.post("/storetoken", async (req, res) => {
    const token = req.body.token;
    console.log(token)
        const data = {
            profile:"https://example2.com",
            name:"Ash",
            token:token
        }
        setdata(data);
        retrive(token).then(res=>console.log(res));
    res.sendStatus(200);
});

