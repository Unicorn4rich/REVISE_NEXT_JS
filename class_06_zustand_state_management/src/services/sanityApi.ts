"use server";

import { client } from "@/sanity/lib/client";

export async function sanityLoginUploader(username: string, password: string){ // jahn se ye function chalega wahn se data ega or ham us data ko get kar ke create karty hain.

    const res = await client.create( // isme jo types denge wo sanity se sample lenge matlab aik manully data create ka rke fetch karne ke bas uska object strucre lenge us hisab se data sanity pe create karenge is se types match hongi.
        {
            _type: 'login',
            username: username,
            password: password,
        }
    )

    return res; // ye data ko return kar dega jo hamne create kiya hai.
}