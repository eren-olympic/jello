// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest } from "next";

export const config = {
  runtime: "edge",
};

export default async function handler(req: NextApiRequest) {
  if (req.method === "GET") {
    const res = await fetch("https://api.openai.com/v1/models", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
      },
      method: "GET",
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ msg: "OpenAI API error", data: [] }),
        {
          status: 500,
        }
      );
    }
    const resJson = await res.json();
    return new Response(JSON.stringify({ data: resJson }));
  }
}