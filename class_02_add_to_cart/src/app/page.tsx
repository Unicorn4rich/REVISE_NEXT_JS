"use client"
import { useState } from "react";



export default function Home() {

  // input value ka naam direct yahn save hoga
  const [InputValue, setInputValue] = useState("");
  // console.log(InputValue);

  // button click karne pe function chala kar input mein likhy sary naams yahn save hoty rhenge.
  const [Names_Array, setNames_Array] = useState<string[]>([]); // is array pe .map() chal rha hai isliye ham directly isy manuplate nahi karenege kiyun ke phir .map jahn use ho rha hai wahn masla bhi ho sakta hai.

  const [EditIndex, setEditIndex] = useState<number>(0) // edit button le index ko bahar nikaal kar yahn set kar diyye update function ko deny ke liye.


  function myFunction(){ // is function se input ki values ko jama kar ke aik array mein store krwa rhy hain
    // purani or new valu dono ko aik sath bula kar ke Set kar dega.
    setNames_Array([...Names_Array, InputValue]) // spread oprater aik array ki tamam values ko nikal kar dosry array mein rakh deta hai.

    // console.log("InputValue", InputValue)
    // console.log("Names_Array", InputValue)
    setInputValue("") // jese hi value likh kar submit katen uske bad input khali kar dega ye.
  }


  // delete function
  function delFunction(index: number){ //is function mein values ko delete krwa rhy hain unke index number se unko get kar ke.
//    console.log("🖐", index) // button click par us value ka index number nikal kar dikhaega.

      // spread opraiter se purany array ki values copy karne ke bad sari nikal kar aik new array mein rakh do.
      const newArray = [...Names_Array];

      // console.log("delete se pehly", newArray)
      newArray.splice(index, 1); // is method se ham index number ke hisab se value ko nikal kar delete kar rhy hain.
      // console.log("delete ke bad", newArray)
      setNames_Array(newArray) // copy waly array mein modification kar ke usko hi set kar diyya .map() chlany waly origenal array pe purany waly ko hata kar. 
  }


  // edit function
  function editFunction(index: number){
    const editArray = [...Names_Array];
    // console.log("✔", editArray[index] ) // jis index pe bhi edit button click hoga uski value print krwa dega.

    setInputValue(editArray[index]) // jis value ke edit button pe click karenge wo value jaa kar input box mein set ho jaegi taky usko ham dekh karedit kar saken.
    setEditIndex(index);  // jis value ko edit kiyyan uski index number nikal kar set kar useState mein set kar diyya Update waly function ko deny ke liye.
  }


  // update function

  function UpdateFunction(){
    const updateArray = [...Names_Array,]; // Origenal array ki copy nikali.

    updateArray[EditIndex] = InputValue   // Copy array ke andar se edit waly index ki value ko nikala or usme input mein likhi gai new value ko set kar diyya.
    setNames_Array(updateArray)       // phir us copy array mein new value edit karne ke bad usko origenal array ki jagah ley jaa kar set kar diyya.
    setInputValue("")    // input mein submit ya update button click karne ke bad wo value input se mit jaye.

  }



  return (
   <div className="flex flex-col items-center justify-center h-screen bg-[#05050531]">

      <input type="text" placeholder="Enter your name" value={InputValue} onChange={(e)=>{setInputValue(e.target.value)}}  className="h-[40px] w-[600px] text-[25px] p-[10px]"/>

      <div className="flex items-center gap-[20px]">
       <button onClick={()=>{myFunction()}} className="p-[10px] text-[25px] bg-[#6848c0] rounded-full text-[white] mt-[20px] mb-[10px]">Submit</button>

       <button onClick={()=>{UpdateFunction()}} className="p-[10px] text-[25px] bg-[#45f735] rounded-full text-[white] mt-[20px] mb-[10px]">Update</button>
      </div>


     {/* Name values with edit delte buttons */}
      {Names_Array.map((item, index)=>{
        return(
          <div className="flex gap-[10px]" key={index}>
            <p className="text-[green] text-[25px]">{item}</p>
            <button onClick={()=>{delFunction(index)}} className="text-[red] text-[20px]">del</button>
            <button onClick={()=>{editFunction(index)}}>edit</button>
          </div>
        )
      })}

   </div>
  );
}
