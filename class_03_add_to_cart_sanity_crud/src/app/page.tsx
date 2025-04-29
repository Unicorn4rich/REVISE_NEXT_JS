"use client"
import { SanityCreateData, SanityDelete_Data, sanityFetchData, SanityUpdateData } from "@/services/sanityApi";
import { useEffect, useState } from "react";


interface Inames{
  name: string,
  _id: string
}


export default function Home() {

  // input value ka naam direct yahn save hoga
  const [InputValue, setInputValue] = useState("");
  // console.log(InputValue);

  // button click karne pe function chala kar input mein likhy sary naams yahn save hoty rhenge.
  const [Names_Array, setNames_Array] = useState<Inames[]>([]); // is array pe .map() chal rha hai isliye ham directly isy manuplate nahi karenege kiyun ke phir .map jahn use ho rha hai wahn masla bhi ho sakta hai.

  // updated function ko edit function mein any wala index pass krwana hai.
  const [editIndex, setEditIndex] = useState<number>(0)



  useEffect(()=>{  // services folder ke andar sanity se fetch kiyya data walay function koham yahn call kar ke chala rhy hain.
    const getData = async ()=>{
      const sanity_data = await sanityFetchData()
      setNames_Array(sanity_data)
    }

    getData()
  },[])


  async function SubmitFunction(){ // is function se input ki values ko jama kar ke aik array mein store krwa rhy hain
    await SanityCreateData(InputValue) // Sanity pe data bheja
    // Sanity se data laya
    const sanity_data = await sanityFetchData() // ye function yahn hamne isliye dubara chlaya kiyun ke sanity pe bheja data refresh kiyye bagher hamen show ho page performance.
      setNames_Array(sanity_data)

      setInputValue(" ")
  }


  // delete function
  async function delFunction(_id: string){ //is function mein values ko delete krwa rhy hain unke index number se unko get kar ke.
    await SanityDelete_Data(_id)
     // Sanity se data laya or component refresh kiyye taky modifications apply ho saken.
     const sanity_data = await sanityFetchData() // ye function yahn hamne isliye dubara chlaya kiyun ke sanity pe bheja data refresh kiyye bagher hamen show ho page performance.
     setNames_Array(sanity_data)
  }


  // edit function
  function editFunction(index: number){
    setInputValue(Names_Array[index].name) // index number jo aya uske object mein jo naam hai usko input mein set kar diyya.
    setEditIndex(index) // editIndex ke useState mein index number save kar diyya.
 }
    


  // update function
 async  function UpdateFunction(){
  const _id = Names_Array[editIndex]._id // editIndex se jo index number aya usko Names_Array object mein se us _id ko nikal kar _id variable mein save kar diyya.
  const updatedName = InputValue // updatedName mein input value save kar di.
  await SanityUpdateData(_id, updatedName) // Sanity pe data update kiyya

  const sanity_data = await sanityFetchData() // ye function yahn hamne isliye dubara chlaya kiyun ke sanity pe bheja data refresh kiyye bagher hamen show ho page performance.
  setNames_Array(sanity_data)
  setInputValue(" ") // for input clear after update.
  }




  return (
   <div className="flex flex-col items-center justify-center h-screen bg-[#05050531]">

      <input type="text" placeholder="Enter your name" value={InputValue} onChange={(e)=>{setInputValue(e.target.value)}}  className="h-[40px] w-[600px] text-[25px] p-[10px]"/>

      <div className="flex items-center gap-[20px]">
       <button onClick={()=>{SubmitFunction()}} className="p-[10px] text-[25px] bg-[#6848c0] rounded-full text-[white] mt-[20px] mb-[10px]">Submit</button>

       <button onClick={()=>{UpdateFunction()}} className="p-[10px] text-[25px] bg-[#45f735] rounded-full text-[white] mt-[20px] mb-[10px]">Update</button>
      </div>


     {/* Name values with edit delte buttons */}
      {Names_Array.map((item:Inames, index: number)=>{
        return(
          <div className="flex gap-[10px]" key={index}>
            <p className="text-[green] text-[25px]">{item.name}</p>
            <button onClick={()=>{delFunction(item._id)}} className="text-[red] text-[20px]">del</button>
            <button onClick={()=>{editFunction(index)}}>edit</button>
          </div>
        )
      })}

   </div>
  );
}
