import { createContext, useEffect, useState } from "react";
import axios from 'axios';
export const AppContext = createContext({})
export function AppProvider({children}){
    const [count, setCount]= useState(1)
    const [products,setProducts]= useState(null)
    const [cart,setCart]= useState([])
    const getData = ()=>{
        const url = "https://661b91e465444945d04fc6c2.mockapi.io/product"
        axios.get(url)
        .then(res =>{
            setProducts(res.data)
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    useEffect (()=>{
        getData()
    },[])

    const addCart = (id) =>{
        const pro= products.find(item => item.id === id)
        setCart([...cart,pro])
        console.log(cart)
    }
    return(
        <AppContext.Provider value={{count, setCount, addCart, cart}}>
            {children}
        </AppContext.Provider>
    )
}