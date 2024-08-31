import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(request: Request) {
  try {
    const { skills } = await request.json();
    const skillsString = Object.entries(skills)
      .map(([skill, rating]) => `${skill}: ${rating}`)
      .join(", ");

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "user",
          content: `Given the following skills and ratings: ${skillsString}, suggest some career options. Include prerequisites, top indian colleges(can also include abroad), and additional resources. When you display indian colleges try to give idea like placements, and minimum marks required to get into it, entrance exams  etc.`,
        },
      ],
      model: "mixtral-8x7b-32768",
    });

    const recommendation =
      completion.choices[0]?.message?.content || "No recommendations found.";
    return NextResponse.json({ recommendation });
  } catch (error) {
    console.error("Error generating recommendation:", error);
    return NextResponse.json(
      { error: "Failed to generate career recommendations" },
      { status: 500 }
    );
  }
}
