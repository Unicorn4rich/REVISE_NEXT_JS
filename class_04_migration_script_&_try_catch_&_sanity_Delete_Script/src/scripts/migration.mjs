// console.log("😍", "Ye sara data alag se sanity pe jaa rha hai without kisi component ki help liye");


// const response = await fetch("https://67c85fe60acf98d0708649b4.mockapi.io/users/user")
// const data = await response.json()

// if(data){
//     console.log("😈", data)
// }
// else{
//     console.log("🤢", "No data found")
// }

// Output: => Data fetch ho gaya npm run shoaib karne se.


//<-------------------------------------------------------------------------------->


import { createClient } from 'next-sanity' // 2. copy from => src/sanity/lib/client.ts.


export const client = createClient({
  projectId: "opikis4c", // 3. get project id from .env.local file.
  dataset: "production", // 4. get dataset from .env.local file.
  useCdn: false, // 5. set it to false.
  token:         "skQiJXBtpLs7DHJALiFYfd5F00mqKaszj8Amae8fqTPrj4Ja5fVH2pwaHIOhr95TPFIOEhm9zeBX9DpGq0nHnZoOCOlDyyw1YN6cMEfVLBrzUwD8hzVUoTFC8CPN8njJN8CYbKmRwlhtRCsmnNTZln0LGer0zl3jJGCm17LnfgrFWGYBdasQ" // 6. get token from .env.local file.
})



async function SanityUpload(){

  try{
     // mockapi ki api fetching
    // const response = await fetch("https://67c85fe60acf98d0708649b4.mockapi.io/users/user") // 1. Fetching data from API

    // khud ki bnai hui custom api ki fetching
    const response = await fetch("http://localhost:3000/api/users") // 1. Fetching data from API
    const data = await response.json()

    for (let obj = 0; obj < data.length; obj++ ){
      const result = await client.create({
        _type: "name",
        _name: data[obj].name
      })

      // console.log("🤢", result)
    }

    console.log("✔ Migration complete")

  }
  catch(error){
    console.log(error)
  }

}

SanityUpload()