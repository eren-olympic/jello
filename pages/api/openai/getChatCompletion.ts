import { NextRequest } from "next/server";

export const config = {
  runtime: "edge",
};

interface IChatCompletion {
  role: "user" | "system" | "assistant";
  content: string;
}

const handler = async (req: NextRequest) => {
  const payload = (await req.json()) as {
    messages: IChatCompletion[];
    model: string;
    temperature: number;
    max_tokens: number;
    top_p: number;
    frequency_penalty: number;
    presence_penalty: number;
    n: number;
    user: string;
  };

  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY ?? ""}`,
    },
    method: "POST",
    body: JSON.stringify({
      ...payload,
      stream: false,
    }),
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ msg: "OpenAI API error", data: [] }), {
      status: 500,
    });
  }
  const { choices } = await res.json();
  
  const { message } = choices[0];
  const rawData = message.content.trimStart().replace(/^Output: /, "");

  return new Response(JSON.stringify({ data: rawData }));
};

export default handler;