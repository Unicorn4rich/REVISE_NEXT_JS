"use server"
//1. Create (utils folder) in src => create (sanityApi.mjs)


// import { client } from "@/sanity/lib/client"  // yahn par ye direct module se import ho kar nahi chalega kiyun ke ye file ham indivisual chala rhy hain.

// 2. Now use chatgpt => i have created a next.js project of e-commerce, i am using sanity, this is my testing file to get product and i have successfully by running this file.
//    now i want to make my backend seperate from next.js,
//    my backend will be in python and fastApi, i want to fetch data from sanity in pythonbut the thing is how i will write this createClient which is comming from node module.

//    mjs file code:
//    ""
//    shop route code:
//    ""

// 3. i have created a next.js project of e-commerce, i am using sanity, this is my testing file to get product and i have successfully by running this file.




//---------------------------------------------------------------------------------------------------------
// This code get from => src> sanity> lib> client

import { createClient } from 'next-sanity'

// import { apiVersion, dataset, projectId } from '../env'  => env ke andar se jo cheezen export kar ke laa rhy hoty hain nhy ab direct yahn is file mein likhenge

export const client = createClient({
  projectId: "vrsxz4oo",
  dataset: "production",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})


//---------------------------------------------------------------------------------------------------------

async function fetchSanityApi(){
    const res = await client.fetch(`*[_type == 'product']`)
    console.log("🤑", res)

    client.get()
}

fetchSanityApi() // Now go to package.json => scripts => create => "ProjectDataRun": "node src/utils/sanityApi.mjs" => then run => npm run ProjectDataRun