import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request) {
    try {
        const userId = req.headers.get("userId");

        if (!userId) {
            return NextResponse.json({ error: "Missing userId" }, { status: 400 });
        }

        const clothes = await prisma.clothe.findMany({
            where: { userId },
        });

        // grouping these into the categories here
        const result = {
            top: clothes.filter((c) => c.type === "Top"),
            lower: clothes.filter((c) => c.type === "Lower"),
            footWear: clothes.filter((c) => c.type === "FootWear"),
        };

        return NextResponse.json(result, { status: 200 });

    } catch(error: any) {
         console.error("Error fetching clothes:", error);
         return NextResponse.json({ error: error.message }, { status: 500 });   
    }
}

/*

Test:
curl -X GET http://localhost:3000/api/view-clothes   -H "userId: test123"

Ouput format:

{
  "top": [
    {
      "id": "cmelklkmm0003uoz8dsownrqs",
      "type": "Top",
      "name": "Navy and White Striped Crew-Neck Tee",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755790943/clothes_uploads/lwlvlb6x1yydfejxh54a.png",
      "description": "Navy blue crew-neck t-shirt with short sleeves, featuring evenly spaced horizontal white stripes. The shirt is made from a lightweight fabric, providing a casual and comfortable fit.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:42:31.338Z",
      "updatedAt": "2025-08-21T15:42:31.338Z",
      "userId": "test123"
    },
    {
      "id": "cmelko7ao0005uoz889i4zzm1",
      "type": "Top",
      "name": "Maroon Long Sleeve Button-Down Shirt",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791069/clothes_uploads/kpipsklq0jrwnjldk7ju.png",
      "description": "Maroon colored long-sleeve button-down shirt with a classic collar and buttoned cuffs. Features a standard fit and a smooth, solid fabric.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:44:33.648Z",
      "updatedAt": "2025-08-21T15:44:33.648Z",
      "userId": "test123"
    },
    {
      "id": "cmelkodwr0007uoz8t0iwlnp1",
      "type": "Top",
      "name": "Navy Blue Graphic T-Shirt",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791079/clothes_uploads/kgld1klitxaia7irh2ov.png",
      "description": "Navy blue short-sleeve t-shirt with an orange graphic print in a foreign language on the front. The shirt has a crew neck and a casual fit.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:44:42.601Z",
      "updatedAt": "2025-08-21T15:44:42.601Z",
      "userId": "test123"
    },
    {
      "id": "cmelkoltv0009uoz8m09h990d",
      "type": "Top",
      "name": "Dark Blue Denim Short-Sleeve Shirt",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791088/clothes_uploads/xzv17z3qnqhugxdgyegj.png",
      "description": "Dark blue denim shirt with short sleeves, a collared neckline, and a button-up front. It features a chest pocket and a relaxed fit.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:44:52.500Z",
      "updatedAt": "2025-08-21T15:44:52.500Z",
      "userId": "test123"
    },
    {
      "id": "cmelkp259000buoz8l4m5trhw",
      "type": "Top",
      "name": "U.S. Polo Assn. Plaid Shirt",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791100/clothes_uploads/b5nfcjoyeaqeulpl0psh.png",
      "description": "A tailored fit, long-sleeved button-down shirt featuring a blue, gold, and gray plaid pattern. It has a classic collar, buttoned cuffs, and a front button closure. The fabric appears to be a lightweight cotton.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:45:13.686Z",
      "updatedAt": "2025-08-21T15:45:13.686Z",
      "userId": "test123"
    }
  ],
  "lower": [
    {
      "id": "cmelkp5yl000duoz8rbqw6lmj",
      "type": "Lower",
      "name": "Light Wash Straight Leg Jeans",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791116/clothes_uploads/otfoiggeytzto3wdqyv2.png",
      "description": "Light wash denim jeans with a straight leg fit, featuring a classic five-pocket design and a button fly. The denim has subtle fading and distressing for a vintage look.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:45:18.957Z",
      "updatedAt": "2025-08-21T15:45:18.957Z",
      "userId": "test123"
    },
    {
      "id": "cmelkpakp000fuoz80ys8742l",
      "type": "Lower",
      "name": "Blue Denim Cargo Pants",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791121/clothes_uploads/xrxabk1abfwjbb05e6ai.png",
      "description": "Blue denim cargo pants with a relaxed fit, featuring large cargo pockets on the sides. The pants have a classic denim wash and a standard waistband with belt loops.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:45:24.937Z",
      "updatedAt": "2025-08-21T15:45:24.937Z",
      "userId": "test123"
    },
    {
      "id": "cmelkpefk000huoz8hpbfcua5",
      "type": "Lower",
      "name": "Beige Cargo Pants",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791127/clothes_uploads/pzd6xptntc97q0ac9xqk.png",
      "description": "Light beige cargo pants featuring a relaxed fit, elastic waistband, and multiple utility pockets on the sides. The pants are made from a lightweight, durable fabric.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:45:29.583Z",
      "updatedAt": "2025-08-21T15:45:29.583Z",
      "userId": "test123"
    },
    {
      "id": "cmelkphzf000juoz8nw2y9n2x",
      "type": "Lower",
      "name": "Black Drawstring Casual Pants",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791132/clothes_uploads/k3lks5zxbb5ho414xdfv.png",
      "description": "Slim-fit black casual pants with an elastic waistband and drawstring closure. The pants have a smooth, lightweight fabric and a simple, clean design.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:45:34.540Z",
      "updatedAt": "2025-08-21T15:45:34.540Z",
      "userId": "test123"
    },
    {
      "id": "cmelktxa5000tuoz8l8mn8y4f",
      "type": "Lower",
      "name": "Khaki Pleated Drawstring Trousers",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791334/clothes_uploads/zdigdjkquo2etszyhccv.png",
      "description": "Light brown khaki trousers featuring a drawstring waist, pleated front, and a straight leg fit. The fabric appears to be a lightweight cotton or linen blend.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:48:58.268Z",
      "updatedAt": "2025-08-21T15:48:58.268Z",
      "userId": "test123"
    },
    {
      "id": "cmellixzr000vuoz8skua38p0",
      "type": "Lower",
      "name": "Khaki Pleated Drawstring Trousers",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755792499/clothes_uploads/wdouvp1jjtqpxfvuyv6b.png",
      "description": "Light brown khaki trousers featuring a drawstring waist, pleated front, and a straight leg fit. The fabric appears to be a lightweight cotton or linen blend.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T16:08:28.306Z",
      "updatedAt": "2025-08-21T16:08:28.306Z",
      "userId": "test123"
    }
  ],
  "footWear": [
    {
      "id": "cmelkppwm000luoz89dnmwe0t",
      "type": "FootWear",
      "name": "Converse Run Star Hike High Top",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791141/clothes_uploads/nkarvaobktxr5lebblt7.png",
      "description": "Black high-top Converse sneakers featuring a white platform sole and the iconic Converse All Star logo on the side. The shoes have white laces and a classic canvas upper.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:45:44.806Z",
      "updatedAt": "2025-08-21T15:45:44.806Z",
      "userId": "test123"
    },
    {
      "id": "cmelkpuyq000nuoz87usgrmjm",
      "type": "FootWear",
      "name": "Blue and White Jordan High-Top Sneakers",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791147/clothes_uploads/vqorgkb178lkpl1yojsd.png",
      "description": "High-top sneakers featuring a blue suede and white leather upper, white laces, and a white sole. The shoes have a black interior lining and the Air Jordan logo on the side.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:45:50.993Z",
      "updatedAt": "2025-08-21T15:45:50.993Z",
      "userId": "test123"
    },
    {
      "id": "cmelkq305000puoz8q5v1kmtf",
      "type": "FootWear",
      "name": "Air Jordan 1 Retro High OG Hyper Royal",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791157/clothes_uploads/dqyvkmqjuvc9r3exbuhn.png",
      "description": "High-top sneakers featuring a white and hyper royal blue color scheme, with a white midsole and a hyper royal outsole. The shoes have a leather upper with a perforated toe box and a padded collar for comfort. The iconic Nike swoosh is displayed on the sides, and the Air Jordan wings logo is on the ankle.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:46:01.781Z",
      "updatedAt": "2025-08-21T15:46:01.781Z",
      "userId": "test123"
    },
    {
      "id": "cmelkq9sj000ruoz8kmkbqyyo",
      "type": "FootWear",
      "name": "Nike Black and White Running Shoes",
      "link": "https://res.cloudinary.com/dlgpdlcta/image/upload/v1755791166/clothes_uploads/cmt9jowlpfwwhuenlrui.png",
      "description": "Black running shoes with a white Nike swoosh on the side, featuring a black mesh upper, black laces, and a thick white sole. The tongue has a white label with black text.",
      "color": null,
      "price": null,
      "imageUrl": null,
      "createdAt": "2025-08-21T15:46:10.198Z",
      "updatedAt": "2025-08-21T15:46:10.198Z",
      "userId": "test123"
    }
  ]
}
  */