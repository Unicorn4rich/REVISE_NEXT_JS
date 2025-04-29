"use client"
import { sanity_get_names } from "@/services/Get-names";
import { useEffect, useState } from "react";

export default function Home() {


  //  console.log("😈", "Hello World");  // for migration script work ke liye print kiyya.
  interface Name {
    _name: string;
  }

  const [names, setNames] = useState<Name[]>([])

  async function runData(){
    const return_data = await sanity_get_names();
    //  console.log("😎", return_data);
    setNames(return_data)
   }
  
   useEffect(()=>{
    runData()
   })


  return (
    <>

    {names.map((items, index) => {
      return(
        <h1 key={index}>{index}. I am Migration script from Sanity: {items._name}</h1>
      )
    })}

    </>
     
    )
   
   

}

// By SHoaib
