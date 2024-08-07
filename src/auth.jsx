import { useEffect, useRef, useState } from "react";
import { useGoogleLogin } from '@react-oauth/google';
import { Toastify } from "toastify";
import "./App.css"
export default function Auth(){
    const url = "http://localhost:3001"
    const [signup,setSignup] = useState(false)
    const [mail,setMail] = useState("");
    const [first,setFirst] = useState("");
    const [last,setLast] = useState("");
    const [pass,setPass] = useState("");
    const [err,setErr] = useState("");
    const college = useRef("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const autHandler = async(token)=>{
      const res = await fetch(`${url}/storetoken`,{
        method:"post",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify({ token: token.access_token})
      })
      
    }
    const suwg = async(token)=>{
      const res = await fetch(`${url}/loginwithgoogle`,{
        method:"post",
        headers: {
          "Content-Type": "application/json"
      },
        body: JSON.stringify({ token: token.access_token})
      })
      const data = await res.json();
      console.log(data)
      
    }
    const login = useGoogleLogin({
      onSuccess: tokenResponse => autHandler(tokenResponse),
    })
    const signupwithgoogle = useGoogleLogin({
      onSuccess: tokenResponse => suwg(tokenResponse)
    })
    const createAccount = async()=>{
      if(!emailRegex.test(mail)){
        setErr("Invalid Email!");
        return;
      }
      const res = await fetch(`${url}/register`,{
        method:"post",
        body:JSON.stringify({mail:mail, first_name:first, last_name:last, password:pass,college:college.current.value }),
        headers:{
          "Content-Type":"application/json"
        }
      })
      const data = await res.json();
      console.log(data)
    }
    console.log(Toastify)
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
      <button className="border-[0.5px] font-semibold py-2 rounded-lg" onClick={() => signupwithgoogle()}>Login with Google</button>
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
      <input type="text" className="w-[125px] rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-1" placeholder="John" value={first} onChange={(e)=>{setFirst(e.target.value)}} />
        </div>
      <div className="flex flex-col">
      <h1 className="font-semibold">Last Name</h1>
      <input type="text" className="w-[125px] rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-1" placeholder="Doe" value={last} onChange={(e)=>{setLast(e.target.value)}}  />
        </div>
      </div>
      <div className="flex flex-col">
      <h1 className="font-semibold ml-1">Email</h1>
      <input type="text" value={mail} onChange={(e)=>{setMail(e.target.value)}} className="rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-2" placeholder="a@example.com" name="mail" />
      </div>
      <div className="flex flex-col">
      <h1 className="font-semibold ml-1">Password</h1>
      <input type="text" className="rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-2" name="mail" placeholder="********" value={pass} onChange={(e)=>{setPass(e.target.value)}}  />
      </div>
      <div className="flex flex-col">
      <h1 className="font-semibold ml-1">College</h1>
      <select name="" id="" className="rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-2 text-white" ref={college}>
        <option value="IITM" className="bg-black">IITM</option>
        <option value="IINTM" className="bg-black">IINTM</option>
      </select>
      </div>
      <button className={`bg-white text-black font-semibold py-2 rounded-lg ${!(pass&&mail&&first&&last)&&"brightness-50"}`} onClick={()=>{createAccount()}} disabled={!(pass&&mail&&first&&last)}>Sign up</button>
      <button className="border-[0.5px] font-semibold py-2 rounded-lg" onClick={() => login()}>Signup with Google</button>
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
