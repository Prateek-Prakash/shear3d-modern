import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;
  if (!name || !email || !message) {
    return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 });
  }
  console.log("Contact form submission:", { name, email, message });
  return NextResponse.json({ success: true });
}
