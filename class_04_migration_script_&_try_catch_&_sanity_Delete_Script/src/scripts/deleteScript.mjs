import { createClient } from 'next-sanity' // 2. copy from => src/sanity/lib/client.ts.


export const client = createClient({
  projectId: "opikis4c", // 3. get project id from .env.local file.
  dataset: "production", // 4. get dataset from .env.local file.
  useCdn: false, // 5. set it to false.
  token:         "skQiJXBtpLs7DHJALiFYfd5F00mqKaszj8Amae8fqTPrj4Ja5fVH2pwaHIOhr95TPFIOEhm9zeBX9DpGq0nHnZoOCOlDyyw1YN6cMEfVLBrzUwD8hzVUoTFC8CPN8njJN8CYbKmRwlhtRCsmnNTZln0LGer0zl3jJGCm17LnfgrFWGYBdasQ" // 6. get token from .env.local file.
})



async function getData(){
    const res = await client.fetch(`*[_type == "name"]{_id, _name}`)
    return res
}


async function sanity_deleteData(){
    const data = await getData()
    // console.log("😈", data)

    for (const item of data){
       const res = await client.delete(item._id)
       console.log("😁", res)
    }

    console.log("All data deleted succesfully 🎉")
}

sanity_deleteData()
