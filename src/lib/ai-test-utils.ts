// lib/ai-test-utils.ts
// Utility functions for testing AI feature output

// import { OpenAIStreamPayload } from './types'
import { testLessonTopics } from '../data/test-lessons'

type QuizQuestion = {
  question: string
  choices: string[]
  correct: string
  explanation: string
}

export async function testReviewQuizGenerator(fetchQuiz: (topics: string[]) => Promise<QuizQuestion[]>) {
  console.log('🔍 Testing Review Quiz Generator...')

  try {
    const quiz = await fetchQuiz(testLessonTopics)

    if (!Array.isArray(quiz)) {
      throw new Error('Quiz is not an array')
    }

    quiz.forEach((q, index) => {
      if (!q.question || !q.choices || !q.correct || !q.explanation) {
        throw new Error(`Missing fields in question ${index + 1}`)
      }
      if (q.choices.length < 2) {
        throw new Error(`Not enough choices in question ${index + 1}`)
      }
    })

    console.log('✅ Quiz Generator test passed!')
  } catch (err) {
    console.error('❌ Quiz Generator test failed:', err)
  }
}

export async function testTutorChat(fetchAnswer: (question: string) => Promise<string>) {
  console.log('🧠 Testing Tutor Chat Response...')

  const testQuestion = "Can you explain how a for loop works in JavaScript?"

  try {
    const answer = await fetchAnswer(testQuestion)

    if (!answer || answer.length < 10) {
      throw new Error('Response too short or empty')
    }

    if (!answer.includes("for") || !answer.includes("loop")) {
      console.warn('⚠️ Response may be off-topic')
    }

    console.log('✅ Tutor Chat test passed!')
  } catch (err) {
    console.error('❌ Tutor Chat test failed:', err)
  }
}
