import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email } = body;
  if (!email) {
    return NextResponse.json({ success: false, error: "Email required" }, { status: 400 });
  }
  console.log("Newsletter subscription:", { name, email });
  return NextResponse.json({ success: true });
}
