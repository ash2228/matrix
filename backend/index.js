const express = require("express");
const app = express();
const cors = require("cors");
const retrive = require("./retrive");
const setdata = require("./setdata");
const update = require("./update");
const sendmail = require("./mailverification")

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
            products:[]
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
app.post("/update",(req,res)=>{
    let products = ["prod1","prod2"];
    update("117315074430459986118",products);
})
const otpStore = {}
app.post("/verifymail",async(req,res)=>{
    const otp = Math.floor(1000 + Math.random() * 9000);
    mail = req.body.mail
    console.log(`otp generated:${otp}`)
    try {
        await sendmail(mail, otp);
        otpStore[mail] = otp;
    
        res.status(200).json({ message: 'OTP sent to your email' });
      } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending OTP' });
      }
})
app.post("/verifyotp",(req,res)=>{
    const { mail, otp } = req.body;
    console.log(`otp got:${otp}`)
    console.log(`otp from data:${otpStore[mail]}`)
    if (otpStore[mail] == otp) {
        delete otpStore[mail];
        res.status(200).json({ message: 'OTP verified successfully' });
      } else {
        res.status(400).json({ message: 'Invalid OTP' });
      }
})