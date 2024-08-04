import { context } from "./context"
import { useContext, useEffect, useState } from "react"
export default function Products(){
    let cont = useContext(context);
    const products = [
        {
            name:"Hackathon",
            price:"Free",
            product_id:"Prod#1"
        },
        {
            name:"Live Project",
            price:"Free",
            product_id:"Prod#2"
        },
        {
            name:"Gaming Parlor(On the spot)",
            price:100,
            product_id:"Prod#3"
        },
        {
            name:"Gaming Tournament:Solo",
            price:100,
            product_id:"Prod#4"
        },
        {
            name:"Gaming Tournament:Upto 4 Players(Squad)",
            price:100,
            product_id:"Prod#5"
        },
    ]
    const addtocart = (prod)=>{
        cont = cont.concat([prod])
        setNum(cont.length)
        localStorage.setItem("cart",JSON.stringify(cont));
        console.log(cont)
    }
    useEffect(()=>{
        const items = JSON.parse(localStorage.getItem("cart"));
        if(items){
            cont = cont.concat(items);
            setNum(cont.length)
        }
        console.log(cont)
    },[])
    const [num,setNum] = useState(cont.length);
    
    return(<>
    <div className="text-white w-[100%] fixed top-5 left-5">cart ({num})</div>
    <div className="flex flex-col px-10 text-white items-center gap-5 mt-20">
        {products.map((items,index)=>{
            return(
                <div className="flex flex-col border h-[250px] w-[280px] gap-2 px-5" key={index}>
            <h1 className="mb-20">Image</h1>
            <h1>{items.name}</h1>
            <h1>{items.price}</h1>
            <button className={`border flex-grow-0 px-3 py-2 bg-white text-black ${cont.includes(items.product_id)&&"opacity-50"}`} onClick={()=>{addtocart(items.product_id)}} disabled={cont.includes(items.product_id)}>{cont.includes(items.product_id)?"Product in cart":"Add to cart"}</button>
            </div>
            )
        })}
    </div>
    </>)
}