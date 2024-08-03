const express = require("express");
const app = express();
const cors = require("cors");
const retrive = require("./retrive");
const setdata = require("./setdata");


app.use(cors());
app.use(express.json());

app.listen(3001, () => {
    console.log("listening on 3001");
});
app.post("/storetoken", async (req, res) => {
    const token = req.body.token;
    const googledata = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`);
    const parseddata = await googledata.json();
        const data = {
            profile:parseddata.picture,
            name:parseddata.name,
            token:token,
            id:parseddata.id
        }
        let result = await retrive(parseddata.id);
        if(result){
            res.json({error:"user already exists"});
        }
        else{
            try{
                await setdata(data);
                res.json({success:"User successfully created"})
            }
            catch(err){
                res.send(404).json({error:"user cannot be created"})
            }
        }
});

