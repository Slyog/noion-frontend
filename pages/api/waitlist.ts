import fs from "fs";
import path from "path";
import type { NextApiRequest, NextApiResponse } from "next";

type ResponseData = { success: boolean } | { error: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body as { email?: string };

  if (!email || !email.includes("@")) {
    return res.status(400).json({ error: "Invalid email" });
  }

  const filePath = path.join(process.cwd(), "data", "waitlist.csv");
  const line = `${new Date().toISOString()},${email}\n`;

  try {
    fs.mkdirSync(path.dirname(filePath), { recursive: true });
    fs.appendFileSync(filePath, line, "utf8");
    return res.status(200).json({ success: true });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error("Error saving email:", error);
    return res.status(500).json({ error: "Failed to save email" });
  }
}
