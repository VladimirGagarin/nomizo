import { existsSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { questionBank, questionsIndexSeo } from '../src/questions.js'

const rootDir = fileURLToPath(new URL('..', import.meta.url))
const questionsDir = resolve(rootDir, 'questions')

const themeScript = `    <script>
      try {
        var storedTheme = localStorage.getItem('nomizo-theme')
        document.documentElement.dataset.theme = storedTheme === 'light' || storedTheme === 'dark'
          ? storedTheme
          : (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
      } catch (error) {
        document.documentElement.dataset.theme = 'dark'
      }
    </script>`

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function pageHtml({ title, description, path, type, jsonLd }) {
  const structuredData = jsonLd
    ? `\n    <script type="application/ld+json">${JSON.stringify(jsonLd).replace(/</g, '\\u003c')}</script>`
    : ''

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
${themeScript}
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" content="#0b0c09" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="${type}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:url" content="${path}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />${structuredData}
    <title>${escapeHtml(title)}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
`
}

if (existsSync(questionsDir)) {
  rmSync(questionsDir, { recursive: true, force: true })
}

mkdirSync(questionsDir, { recursive: true })

writeFileSync(
  resolve(questionsDir, 'index.html'),
  pageHtml({
    title: questionsIndexSeo.title,
    description: questionsIndexSeo.description,
    path: '/questions/',
    type: 'website',
  })
)

for (const question of questionBank) {
  const dir = resolve(questionsDir, question.id)
  mkdirSync(dir, { recursive: true })
  writeFileSync(
    resolve(dir, 'index.html'),
    pageHtml({
      title: question.seo.title,
      description: question.seo.description,
      path: question.path,
      type: 'article',
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Question',
        name: question.prompt,
        text: question.prompt,
        keywords: [question.category, question.difficulty, 'critical thinking'],
        acceptedAnswer: {
          '@type': 'Answer',
          text: question.answer,
        },
      },
    })
  )
}

console.log(`Generated ${questionBank.length} question pages and /questions/ index.`)
