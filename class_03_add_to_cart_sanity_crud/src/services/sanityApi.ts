"use server";
import { client } from "@/sanity/lib/client";


// Get data from sanity
export async function sanityFetchData(){
    const res = await client.fetch(`*[_type == "name"]{name, _id}`)

    // console.log("❤", res)
    return res
}


// Create data on sanity
export async function SanityCreateData(name: string){
    const res = await client.create({
        _type: "name",
        name: name
    })

    // console.log("😈 Data created", res)
}


// Sanity delete data
export async function SanityDelete_Data(_id: string){
    const res = await client.delete(_id)

    // console.log("😈 Data deleted", res)
}


// Sanity update data
export async function SanityUpdateData(_id: string, upDatedName: string){
    const res = await client.patch(_id)
    .set({name: upDatedName})
    .commit()

    // console.log("😈 Data updated", res)
}