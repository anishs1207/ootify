import { NextResponse } from "next/server";

interface Preference {
  id: string;
  gender?: string;
  occasions?: string[];
}

// In-memory array for demo purposes
const arr: Preference[] = [];

export async function GET(req: Request) {
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (id) {
    const user = arr.find((item) => item.id === id);
    if (user) {
      console.log("User found:", user);
      return NextResponse.json(user, { status: 200 });
    } else {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
  }

  // GET all
  if (arr.length === 0) {
    return NextResponse.json({ message: "No preferences found" }, { status: 200 });
  } else {
    console.log("Response mil gaya bhai");
    return NextResponse.json(arr, { status: 200 });
  }
}

export async function POST(req: Request) {
  try {
    const body: Preference = await req.json();
    console.log("Adding:", body);
    arr.push(body);
    return NextResponse.json(arr, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const body: Partial<Preference> = await req.json();
    const user = arr.find((item) => item.id === id);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (body.gender) user.gender = body.gender;
    if (body.occasions) user.occasions = body.occasions;

    console.log("User updated:", user);
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
  }
}

