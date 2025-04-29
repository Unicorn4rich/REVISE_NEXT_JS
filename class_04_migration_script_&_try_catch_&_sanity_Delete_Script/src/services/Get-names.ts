"use server"
import { client } from "@/scripts/migration.mjs";

export async function sanity_get_names(){
    const res = await client.fetch('*[_type == "name"]{_id, _name}')
    return res
    // console.log("😈", res)
}