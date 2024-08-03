import { useState } from "react";
import "./App.css"
import { useGoogleLogin } from '@react-oauth/google';

export default function App(){
  const url = "http://localhost:3001"
  const [signup,setSignup] = useState(false)
  const autHandler = async(token)=>{
    // const form = new FormData();
    // form.append("token",token);
    const res = await fetch(`${url}/storetoken`,{
      method:"post",
      headers: {
        "Content-Type": "application/json"
    },
      body: JSON.stringify({ token: token.access_token })
    })
    // console.log(res);
  }
  const login = useGoogleLogin({
    onSuccess: tokenResponse => autHandler(tokenResponse),
  })
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
    <input type="password" className="outline-none rounded-lg bg-transparent border-[0.5px] border-gray-500 px-2 py-2" name="password"/>
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
    <input type="text" className="w-[125px] rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-1" />
      </div>
    <div className="flex flex-col">
    <h1 className="font-semibold">Last Name</h1>
    <input type="text" className="w-[125px] rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-1" />
      </div>
    </div>
    <div className="flex flex-col">
    <h1 className="font-semibold ml-1">Email</h1>
    <input type="text" className="rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-2" placeholder="a@example.com" name="mail" />
    </div>
    <div className="flex flex-col">
    <h1 className="font-semibold ml-1">Password</h1>
    <input type="text" className="rounded-lg bg-transparent outline-none border-[0.5px] border-gray-500 px-2 py-2" placeholder="a@example.com" name="mail" />
    </div>
    <button className="bg-white text-black font-semibold py-2 rounded-lg">Sign up</button>
    <button className="border-[0.5px] font-semibold py-2 rounded-lg" onClick={() => login()}>Sign up with Google</button>
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