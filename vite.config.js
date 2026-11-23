import { existsSync, readdirSync } from 'node:fs'
import { resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const rootDir = fileURLToPath(new URL('.', import.meta.url))
const questionsDir = resolve(rootDir, 'questions')

const questionInputs = existsSync(questionsDir)
  ? Object.fromEntries(
      readdirSync(questionsDir, { withFileTypes: true })
        .filter((entry) => entry.isDirectory() && existsSync(resolve(questionsDir, entry.name, 'index.html')))
        .map((entry) => [`question-${entry.name}`, resolve(questionsDir, entry.name, 'index.html')])
    )
  : {}

export default defineConfig({
  plugins: [react()],
  appType: 'mpa',
  build: {
    rollupOptions: {
      input: {
        home: resolve(rootDir, 'index.html'),
        'daily-question': resolve(rootDir, 'daily-question/index.html'),
        explore: resolve(rootDir, 'explore/index.html'),
        'think-lab': resolve(rootDir, 'think-lab/index.html'),
        learn: resolve(rootDir, 'learn/index.html'),
        'real-life': resolve(rootDir, 'real-life/index.html'),
        philosophy: resolve(rootDir, 'philosophy/index.html'),
        'my-nomizo': resolve(rootDir, 'my-nomizo/index.html'),
        questions: resolve(rootDir, 'questions/index.html'),
        ...questionInputs,
      },
    },
  },
})
