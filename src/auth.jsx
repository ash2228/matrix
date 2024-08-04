import { useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import "./App.css"
export default function Auth(){
    const url = "http://localhost:3001"
    const [signup,setSignup] = useState(false)
    const [mail,setMail] = useState("");
    const [otp,setOtp] = useState("");
    const [otpstatus,setOtpstatus] = useState(false);
    const autHandler = async(token)=>{
      const res = await fetch(`${url}/storetoken`,{
        method:"post",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify({ token: token.access_token })
      })
      
    }
    const login = useGoogleLogin({
      onSuccess: tokenResponse => autHandler(tokenResponse),
    })
    const createAccount = async()=>{
      const res = await fetch(`${url}/verifymail`,{
        method:"post",
        body:JSON.stringify({mail:mail}),
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await res.json();
      if(res.status==200){
        setOtpstatus(true);
      }
    }
    const verifyOtp = async()=>{
      const res = await fetch(`${url}/verifyotp`,{
        method:"post",
        body:JSON.stringify({mail:mail,otp:otp}),
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await res.json();
      console.log(data);
    }
    return !signup?(<div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="border-[0.5px] border-gray-500 rounded-lg gap-5 flex flex-col px-5 py-5 text-white">
      <h1 className="text-center font-bold text-3xl">Login</h1>
      <span className="text-sm text-center">Enter your email below to login to your account</span>
      <div className="flex flex-col">
      <h1 className="font-semibold ml-1">Email</h1>
      <input type="text" className="rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-2" placeholder="a@example.com" name="mail" />
      </div>
      <div className="flex flex-col">
      <h1 className="font-semibold ml-1">Password</h1>
      <input type="password" className="outline-none rounded-lg bg-transparent border-[0.5px] border-gray-500 px-2 py-2" placeholder="********" name="password"/>
      </div>
      <button className="bg-white text-black font-semibold py-2 rounded-lg">Login</button>
      <button className="border-[0.5px] font-semibold py-2 rounded-lg" onClick={() => login()}>Login with Google</button>
      <div className="flex mt-5 items-center justify-center gap-1">
      <span className="text-sm text-center">Don&apos;t have an account?</span>
      <span className="select-none text-sm text-center underline cursor-pointer" onClick={()=>{
        setSignup(true)
      }}>Sign up</span>
      </div>
     </div>
    </div>):(
      <div className="h-[100vh] w-[100vw] flex items-center justify-center">
      <div className="border-[0.5px] border-gray-500 rounded-lg gap-3 flex flex-col px-5 py-5 text-white">
      <h1 className="font-bold text-3xl">Sign up</h1>
      <span className="text-sm text-center">Enter your information to create an account</span>
      <div className="flex gap-4">
      <div className="flex flex-col">
      <h1 className="font-semibold">First Name</h1>
      <input type="text" className="w-[125px] rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-1" placeholder="John" />
        </div>
      <div className="flex flex-col">
      <h1 className="font-semibold">Last Name</h1>
      <input type="text" className="w-[125px] rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-1" placeholder="Doe" />
        </div>
      </div>
      <div className="flex flex-col">
      <h1 className="font-semibold ml-1">Email</h1>
      <input type="text" value={mail} onChange={(e)=>{setMail(e.target.value)}} className="rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-2" placeholder="a@example.com" name="mail" />
      </div>
      <div className="flex flex-col">
      <h1 className="font-semibold ml-1">Password</h1>
      <input type="text" className="rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-2" name="mail" placeholder="********" />
      </div>
      {otpstatus&&(<div className="flex flex-col">
      <h1 className="text-sm text-green-400">Otp Sent Successfully</h1>
      <h1 className="font-semibold ml-1">Otp</h1>
      <input type="text" className="rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-2" name="mail" placeholder="1234" onChange={(e)=>{setOtp(e.target.value)}} value={otp} />
      <button className="font-semibold py-2 rounded-lg bg-white text-black" onClick={() => verifyOtp()}>Submit Otp</button>
      </div>)}
      <button className="bg-white text-black font-semibold py-2 rounded-lg" onClick={()=>{createAccount()}}>Sign up</button>
      <div className="flex mt-5 items-center justify-center gap-1">
      <span className="text-sm text-center">Already have an account?</span>
      <span className="text-sm text-center underline cursor-pointer" onClick={()=>{
        setSignup(false)
      }}>Sign in</span>
      </div>
     </div>
    </div>
    )
  }
