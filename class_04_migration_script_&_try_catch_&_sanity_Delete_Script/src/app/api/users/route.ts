import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest ){ // khud ki api create
    return NextResponse.json([ 
     {
        "name": "azlaan",
        "id": "1"
      },
      {
        "name": "Taha",
        "id": "2"
      },
      {
        "name": "Alex",
        "id": "3"
      }

    ])
}



   
 