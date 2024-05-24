import dbConnect from "@/lib/connectDB";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import Queue from "@/models/queue";
import DBUtil from "@/lib/DBUtil";

export async function GET(req: NextRequest) {
  await dbConnect();
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  const result = id ? ((await DBUtil.isIdAvailable(id)) ? "Available" : "Not Available") : "None";

  return new Response(JSON.stringify({ message: result }), {
    headers: { "content-type": "application/json" },
    status: 200,
  });
}

export async function POST(req: NextRequest) {
  await dbConnect();

  const buffer = await req.arrayBuffer();
  let id = crypto.randomBytes(36).toString("hex");
  while (!DBUtil.isIdAvailable(id)) id = crypto.randomBytes(36).toString("hex");

  const queue = new Queue({
    id,
    data: Buffer.from(buffer),
  });

  await queue.save();

  return new Response(
    JSON.stringify({
      message: "Success",
      id: id,
    }),
    {
      headers: { "content-type": "application/json" },
      status: 200,
    }
  );
}

export async function PATCH(req: NextRequest) {
  await dbConnect();
  const data = await req.json();

  return new Response(JSON.stringify({ message: "Internal Server Error" }), {
    headers: { "content-type": "application/json" },
    status: 500,
  });
}
