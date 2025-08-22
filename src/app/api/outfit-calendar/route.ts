import { NextResponse } from "next/server";
import prisma from "@/lib/db";

export async function GET(req: Request) {
  try {
    const userId = req.headers.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Missing userId" }, { status: 400 });
    }

    // Fetch all fits for the user, including all linked clothes
    const fits = await prisma.fit.findMany({
      where: { userId },
      include: {
        top: true,
        lower: true,
        footWear: true,
        accessories: true,
      },
      orderBy: { createdAt: "desc" }, // optional: newest first
    });

    // Map into clean JSON
    const result = fits.map((fit) => ({
      fitId: fit.id,
      createdAt: fit.createdAt,
      top: fit.top || null,
      lower: fit.lower || null,
      footWear: fit.footWear || null,
      accessories: fit.accessories || null,
    }));

    console.log(result);

    return NextResponse.json(result);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

/*
Request:
curl -X GET http://localhost:3000/api/outfit-calendar \
  -H "Content-Type: application/json" \
  -H "userId: test123"

Response:
[
  {
    "fitId": "cmemont1u0003uoqglt650zbi",
    "createdAt": "2025-08-22T10:24:00.210Z",
    "top": {
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
    "lower": {
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
    "footWear": {
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
    },
    "accessories": null
  }
]  

  */
