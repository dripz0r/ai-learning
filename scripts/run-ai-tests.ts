import * as dotenv from "dotenv"
dotenv.config({ path: ".env.local" })
console.log("🔐 API KEY:", process.env.OPENAI_API_KEY?.slice(0, 6), "...")

import { testReviewQuizGenerator, testTutorChat } from "@/lib/ai-test-utils"
import { testLessonTopics } from "@/data/test-lessons"
import OpenAI from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
})

async function fetchQuiz(topics: string[]) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are an educational AI that returns JSON-formatted review quizzes."
      },
      {
        role: "user",
        content: `Create a 3-question multiple choice quiz for these topics: ${topics.join(", ")}. 
Return the result as a JSON array with this shape:

[
  {
    "question": "...",
    "choices": ["...", "...", "..."],
    "correct": "...",
    "explanation": "..."
  }
]

Only output raw JSON. Do not add commentary or formatting.`
      }
    ]
  })

  const raw = response.choices[0].message.content || "[]"

  try {
    return JSON.parse(raw)
  } catch (err) {
    console.error("❌ Failed to parse JSON from OpenAI:", raw)
    throw err
  }
}

async function fetchAnswer(question: string) {
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content: "You are a beginner-friendly coding tutor."
      },
      {
        role: "user",
        content: question
      }
    ]
  })

  return response.choices[0].message.content || ""
}

async function run() {
  await testReviewQuizGenerator(fetchQuiz)
  await testTutorChat(fetchAnswer)
}

run()
