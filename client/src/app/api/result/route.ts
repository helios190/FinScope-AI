import dbConnect from "@/lib/connectDB";
import Result from "@/models/results";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  await dbConnect();
  const url = new URL(req.url);
  const id = url.searchParams.get("id");

  if (!id)
    return new Response(JSON.stringify({ error: "Bad Request" }), {
      headers: { "content-type": "application/json" },
      status: 400,
    });

  const result = await Result.findOne({ id: id }).exec();

  if (result)
    return new Response(JSON.stringify({ result: result }), {
      headers: { "content-type": "application/json" },
      status: 200,
    });
  return new Response(JSON.stringify({ result: "Not Found" }), {
    headers: { "content-type": "application/json" },
    status: 404,
  });
}
