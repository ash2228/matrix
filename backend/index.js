const express = require("express");
const app = express();
const cors = require("cors");
const retrive = require("./retrive");
const setdata = require("./setdata");
const update = require("./update");
const sendmail = require("./mailverification");
const uuid = require("uuid4");

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
        id:parseddata.id,
        products:[],
        cart:[],
        mail:parseddata.email,
        method:"Google"
    }
    let result = await retrive(parseddata.email);
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
app.post("/update",(req,res)=>{
    let products = req.body.products;
    let id = req.body.id
    update(id,products);
})
app.post("/register",async(req,res)=>{
    mail = req.body.mail;
    const first_name = req.body.first_name;
    const last_name = req.body.last_name;
    const password = req.body.password;
    const college = req.body.college;
    const id = uuid();
    const data = {
            first_name:first_name,
            last_name:last_name,
            password:password,
            college:college,
            mail:mail,
            products:[],
            cart:[],
            id:id,
            method:"Form"
    }
    let result = await retrive(mail);
    console.log(result);
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
})
app.post("/loginwithgoogle",async(req,res)=>{
    const token = req.body.token;
    const googledata = await fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${token}`);
    const data = await googledata.json();
    const mail = data.email;
    const result = await retrive(mail);
    if(!result){
        res.status(404).json({error:"Email not found in the db"})
    }
    else{
        res.status(200).json({mail:mail});
    }
})