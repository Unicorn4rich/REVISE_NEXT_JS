"use client"
import React from 'react'

// Server side Component

// export default async  function Home() {

//   const api = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//   const data = await api.json()

//   console.log("😂", data);

//   return (
//     <>
    
//        <h1>{JSON.stringify(data)}</h1>

//     </>
//   );
// }


// <----------------------------------------------------------------------------------------------->
// Client Side component



//     export default function page() {

//       // let userName: string = "Shoaib"
//       let [name, setName] = React.useState("Shoaib")

//       function myFunc1(){
//         setName("Azlaan")
//       }


//       function myFunc2(){
//         setName("Mithoo")
//       }

// // condition ? ye chlana : warna ye chlana      
// // name == "Shoaib" ? myFunc1 : myFunc2     
      

//       return (
//           <div className='h-screen w-full flex flex-col items-center justify-center'>

//           <h1 className={name == "Shoaib" ? "bg-red-600" : "bg-green-600" }>{name == "Shoaib" ? "Good Morning" : "Good night"} {name}</h1>
          
//           <button onClick={name == "Shoaib" ? myFunc1 : myFunc2 }>Click me</button>

//           </div>
//     )
//     }

 
// <----------------------------------------------------------------------------------------------->



//   export default function page() {

//     let [name, setName] = React.useState("Shoaib")

//     const myfunc = () => {
//       name= "Azlaan"
//     }

//   return (
//     <div className='h-screen w-full flex flex-col items-center justify-center'>
     
//      <h1>Welcoms shoaib</h1>
//      <input type='text' value={name} onChange={(event)=>{setName(event.target.value)}} className='border-[2px]'/>
     
    
//     </div>
//   )
// }



// <----------------------------------------------------------------------------------------------->



export default function page() {

return (
  <div className='h-screen w-full flex flex-col items-center justify-center'>

    <input type="text" placeholder='Enter your name' className='border-[2px]'/>
   
   <h1>Welcoms shoaib</h1>
   
  
  </div>
)
}












/* NEXT.JS NOTES 


HTML+Javascript DOM => React => Next.js

Simple html webpage mein ham jo cheez bar bar repeat hoti thi usy aik dafa bana kar usy har jagah copy past kar dety thy
jis se hmaray code ki length kafi bari ho jati thi aur usy maintain karna bhi mushkil ho jata tha is cheez ka solution nikalny
ke liye React aya jo k aik component banata hai aur usy bar bar use kar sakty hain jahan chahain or is react component ka 
idea Typscript ke function se liya gaya jisme ham aik dafa code likh kar bar bar us code ko jahn chahy use kar sakty the


function = component
function mein sirf typescript likh sakty hain lekin component mein HTML or Typescript dono likh sakty hain.


simple html se bani website mein jab ham kuch chnges karte thy to wo brwoser apne pore ke pore code ko mitaa kar dubara genrate
karta tha us changes ko apne andar exicute karne ke liye jiski wajah se time delay hota tha or user experince khrab bhi
khrab hota tha. lekin react nse bani website mein jab koi changes hoty to react sirf us component ko rerender karta hai pore webpage ko nahi.


React = Library
react sirf aik fronend library hai jo ke user interface banane ke liye use hoti hai isme ham backend ka kaam nahi kar sakty.


MERN Stack

M = MongoDB (Database) ExpressJs (Backend) React (Frontend) Node.js (Runtime Environment) 
ye sari technology mil kar full stack development ke liye use hoti thi.

NEXT.js = React + Node.js 
ye aik full stack frame work hai jisme ham frontend or backend dono ka kaam kar sakty hain frontend ke liye react use hota hai isme.


MEAN Stack
M = MongoDB (Database) ExpressJs (Backend) Angular (Frontend) Node.js (Runtime Environment)


ESLint = Code Quality Tool
likhne ke tariqe ko maintain karta hai develpers ke.

node_modules folder
iske andar sare packages save hoty hain andar bahar ke sary.




<-------------------------------------------------------------------------------------------->
Component

ye wahi component hai jisme ham kuch code likh kar page.tsx mein usy chlaty hain or ye component 2 tarhn se kaam karta hai
server component or client component in dono components se hi hmara html ka code genrate hota hai or browser par dikhta hai
chahy server ho ya client lekin html code ko genrate karne ka tariqa alag hai in dono component ka.


Server Component + Client Component 

server component mein pehly code server par html mein ready hota hai phir browser ko diyya jata hai leki client component ko
sirf initial boiler plate di jati hai html ki or baqi ka jo us component ka code hota hai usy Javasrcipt mein convert kar ke
broqser ko dey diyya jata hai phir brwoser usy DOM manipulation ke zariye screen par dsiplay karwta hai


Server component or client component ko ham bnaty hi kiyun hain ?

Server component ham usy bnaty hain jsika code static hota hai aik dafa likh diyya jaye to dubara change nahi hoga hmesha 
wahi same code dikhta rhega lekin client component ham us component ko bnaty hain jiske User-interface pe koi attraction
ho rhi ho matlab ke user us component ke code mein aa kar kisi button pe click kar rha ho ya kuch bhi to usy client component
hi bnaty hain.


Server Component => (SSG) Static site genration + (SSR) Server site rendering

SSG => (Static Site Generation) => One time => ye aik aisa code hota hai jo aik dafa ban jaye to dubara isy bnany ki zrorat nahi 
parti or jab ab ham isko request karty hain to ye sara code server par ready hota hai .next ke folder mein or browser ko diya jata hai.
aik aisa code jo aik dafa genrate ho jaye to usy bar bar hamen use karna hai genrate krwany ki zrorat nahi parti.

SSR => (Server Side Rendering) => On request => jab jab ham koi request karty hain to ye code server par tab tab ready hota hai new data ke sath or sara code browser ko dey deta hai.
jese ke ham koi (API) ko use karte hain component mein to jab jab ham is component ko request karenge to ye component apny purane code ko refresh kar ke dubara se khud ko re-render 
karega or (Api) ko fetch kar ke updated data hamen laa kar dikhaega browser pe.


cache => browser ki memory ( Re-rendering Time set)

Server side component mein ham jo data on request fetch kar ke laa rhy the us component ko ham bar bar fetch karne se rok bhi
sakty hain for example (SSR) se hamne koi data fetchto kiyya usy hamne cache mein save krwa diyya apne set kiyye huy time pe
matlab hamne kaha ke 1 hour tak ye data rakhna uske baad ye data expire kar dena or 1 hour ke baad jab ham is component ko dubara request karenge to ye 
server side rendring kar ke new data hamen fetch kar ke laa kar dey.   


Client Component => (CSR) Client side rendering

<-------------------------------------------------------------------------------------------->
DOM tree

Jese hi ham koi component bana kar browser pe chlaty hain to wo DOM tree par jaa kar mount ho jata hai or ye cheez inital rendering
kehlati hai pehli pehli dafa code browser par jaa kar show hua. phir jese hi initial rendering hoti hai to usi redering ke time hi
react us code ki copy bana kar apne pass rakh leta hai or jab bhi ham us code mein koi changes karte hain to react (re-concilation) ka
method use karta hai yani comparisson karwta hai dono component mein origenal or copy waly mein or jo changes hoti hain wo sab se pehly
us copy kiyye huy component mein hoti hain phir react dekhta us code mein konsi jagah par changes huy hain uske bad wo jaa kar origenal 
waly code mein wo changes karwa deta hai.
lekin webpage refresh karne se DOM tree par jo bhi code hota hai wo mitt jata hai uske bad aik new code genrate hota hai jise ham initial 
rendering bhi keh sakty hain wo hamen screen par dikhta hai. pore code ko refresh kiyye bagher uske changes ko apne code mein exicute krwany 
ke liye ham hooks ka use karte hain kiyun ke ye sirf us specific component rerender karte hain jinhy ham karna chahty hain pore code ko nahi.
React hmare code ki picture ley kar copy sirf tab karta hai jab koi component render hota hai.   


condition ? ye chlana : warna ye chlana      
pr browser boolean ya number data type waghera nahi dikhata sirf string dikhata hai.


Re-concilation

hamne aik component ki intitial redering ki brwoser pe to react ne hmare code ki picture khench kar aik copy bana kar rakh li
phir jese hi ham us component mein koi new code likhte jaenge to wo changes react ki picture wali copy mein honge or phir
react compare karega is copy waly code ko or us origenal waly code ko jo ke DOM tree yani ke browser pe dikha rha hai agr reacr
ko changes milenge ke copy mein new code of lines add hui hain to wo origenal code mein bhi un lines ko add kar dega.

// By Shoaib




















































*/