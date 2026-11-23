import { thinkLabSections } from './site.js'

function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[’']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function questionSlug(prompt) {
  return slugify(prompt).split('-').filter(Boolean).slice(0, 10).join('-').slice(0, 70).replace(/-+$/g, '')
}

function truncate(value, length) {
  return value.length <= length ? value : `${value.slice(0, length - 1).trimEnd()}…`
}

const usedIds = new Map()

export const questionBank = thinkLabSections.flatMap((section) =>
  section.problems.map((problem, order) => {
    const base = `${slugify(section.title)}-${problem.difficulty.toLowerCase()}-${questionSlug(problem.prompt)}`
    const count = (usedIds.get(base) ?? 0) + 1
    usedIds.set(base, count)
    const id = count === 1 ? base : `${base}-${count}`
    const title = truncate(`${problem.prompt} | NOMIZO`, 120)
    const description = truncate(
      `${problem.prompt} A ${problem.difficulty.toLowerCase()} ${section.title} question from NOMIZO. Think first, then reveal the reasoning.`,
      160
    )

    return {
      id,
      path: `/questions/${id}/`,
      category: section.title,
      categoryNumber: section.number,
      categoryGreek: section.greek,
      icon: section.icon,
      difficulty: problem.difficulty,
      prompt: problem.prompt,
      answer: problem.answer,
      hint: problem.hint,
      order,
      seo: { title, description },
    }
  })
)

export const questionByPath = Object.fromEntries(questionBank.map((question) => [question.path, question]))

const lookup = new Map(
  questionBank.map((question) => [`${question.categoryNumber}|${question.prompt}`, question])
)

export function getQuestion(categoryNumber, prompt) {
  return lookup.get(`${categoryNumber}|${prompt}`)
}

export const questionsByCategory = thinkLabSections.map((section) => ({
  section,
  questions: questionBank.filter((question) => question.categoryNumber === section.number),
}))

export const questionsIndexSeo = {
  title: 'Questions — Critical Thinking, Logic and Philosophy | NOMIZO',
  description:
    'Browse 78 thinking questions across logic, critical thinking, decision making, psychology, problem solving and philosophy. Each question has its own page with a reasoned answer.',
}
