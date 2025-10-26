import { NextResponse } from "next/server";
import { appendFile, mkdir } from "node:fs/promises";
import { dirname, join } from "node:path";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }
    const file = join(process.cwd(), "data", "waitlist.csv");
    await mkdir(dirname(file), { recursive: true });
    await appendFile(file, `${new Date().toISOString()},${email}\n`, "utf8");
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
