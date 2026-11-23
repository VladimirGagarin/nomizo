import { useState } from 'react'
import './App.css'
import Link from './Link.jsx'
import { useRoute, useSeo } from './navigation.js'
import { useTheme } from './theme.js'
import {
  getQuestion,
  questionBank,
  questionByPath,
  questionsByCategory,
  questionsIndexSeo,
} from './questions.js'
import {
  navItems,
  destinations,
  thinkLabSections,
  courses,
  scenarios,
  schools,
  principles,
  questions,
  seo,
  pageContent,
} from './site.js'

function Header({ path, theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          to="/"
          aria-label="NOMIZO home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="brand-name">NOMIZO</span>
          <span className="brand-greek" lang="el">Νομίζω</span>
        </Link>

        <nav className={`site-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              aria-current={path === item.to ? 'page' : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-tools">
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            aria-pressed={theme === 'light'}
            onClick={toggleTheme}
          >
            <span className="theme-toggle-mark" aria-hidden="true" />
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
          </button>

          <button
            type="button"
            className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Link className="brand-name" to="/">NOMIZO</Link>
          <span>Try to Think Better.</span>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          {navItems.slice(1).map((item) => (
            <Link key={item.to} to={item.to}>{item.label}</Link>
          ))}
          <Link to="/questions/">Questions</Link>
        </nav>
        <p className="footer-note">Question. Reason. Understand.</p>
      </div>
      <div className="container footer-base">
        <span>© {new Date().getFullYear()} NOMIZO</span>
        <span lang="el">Νομίζω</span>
        <span>Made for curious minds.</span>
      </div>
    </footer>
  )
}

function ChallengeCard() {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selected, setSelected] = useState(null)

  const question = questions[questionIndex]
  const answer = selected === null ? null : question.options[selected]

  const nextQuestion = () => {
    setQuestionIndex((current) => (current + 1) % questions.length)
    setSelected(null)
  }

  return (
    <div className="challenge-card">
      <div className="challenge-meta">
        <span>{question.eyebrow}</span>
        <span>{String(questionIndex + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}</span>
      </div>
      <p className="challenge-title">{question.title}</p>
      <h3>{question.prompt}</h3>

      <div className="challenge-options">
        {question.options.map((option, index) => (
          <button
            type="button"
            key={option.text}
            className={`challenge-option ${
              selected === index ? (option.correct ? 'is-correct' : 'is-wrong') : ''
            } ${selected !== null && option.correct && selected !== index ? 'is-answer' : ''}`}
            onClick={() => setSelected(index)}
            disabled={selected !== null}
            aria-pressed={selected === index}
          >
            <span className="option-letter">{String.fromCharCode(65 + index)}</span>
            <span>{option.text}</span>
          </button>
        ))}
      </div>

      {answer && (
        <div
          className={`challenge-feedback ${answer.correct ? 'is-correct' : 'is-wrong'}`}
          role="status"
        >
          <strong>{answer.correct ? 'Well reasoned.' : 'Think again.'}</strong>
          <p>{answer.reason}</p>
          <p className="feedback-reveal">{question.reveal}</p>
          {!answer.correct && <p className="feedback-nudge">{question.nudge}</p>}
        </div>
      )}

      <button type="button" className="next-question" onClick={nextQuestion}>
        Another question <span aria-hidden="true">↗</span>
      </button>
    </div>
  )
}

function SectionHead({ eyebrow, title, note, to, linkLabel }) {
  return (
    <div className="section-head">
      <div>
        <p className="eyebrow"><span className="rule" /> {eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {(note || to) && (
        <div className="section-head-side">
          {note && <p className="section-head-note">{note}</p>}
          {to && (
            <Link className="text-link" to={to}>
              {linkLabel} <span aria-hidden="true">↗</span>
            </Link>
          )}
        </div>
      )}
    </div>
  )
}

function InfoCard({ item, featured = false }) {
  const content = (
    <>
      <div className="card-topline">
        <span className="card-tag">{item.tag ?? item.number}</span>
        {item.difficulty && (
          <span className="difficulty-badge" data-level={item.difficulty}>
            {item.difficulty}
          </span>
        )}
      </div>
      {item.greek && <span className="card-greek" lang="el">{item.greek}</span>}
      <h3>{item.title}</h3>
      <p>{item.text}</p>
      <span className="card-arrow" aria-hidden="true">↗</span>
    </>
  )

  if (item.to) {
    return (
      <Link className={`info-card ${featured ? 'is-featured' : ''}`} to={item.to}>
        {content}
      </Link>
    )
  }

  return <article className={`info-card ${featured ? 'is-featured' : ''}`}>{content}</article>
}

function ThinkLabExplorer({ items, title }) {
  const [level, setLevel] = useState('All')
  const [openNumber, setOpenNumber] = useState(null)
  const [problemIndex, setProblemIndex] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

  const countFor = (value) =>
    items.reduce(
      (total, item) =>
        total +
        (value === 'All'
          ? item.problems.length
          : item.problems.filter((problem) => problem.difficulty === value).length),
      0
    )

  const visibleItems = items
    .map((item) => ({
      ...item,
      visibleProblems:
        level === 'All'
          ? item.problems
          : item.problems.filter((problem) => problem.difficulty === level),
    }))
    .filter((item) => item.visibleProblems.length > 0)

  const chooseLevel = (value) => {
    setLevel(value)
    setOpenNumber(null)
    setProblemIndex(0)
    setRevealed(false)
  }

  const toggleCard = (number) => {
    setOpenNumber((current) => (current === number ? null : number))
    setProblemIndex(0)
    setRevealed(false)
  }

  const moveProblem = (direction, length) => {
    setProblemIndex((current) => Math.min(Math.max(current + direction, 0), length - 1))
    setRevealed(false)
  }

  return (
    <section className="page-cards section-paper">
      <div className="container">
        <div className="section-head compact">
          <div>
            <p className="eyebrow"><span className="rule" /> Think Lab</p>
            <h2>{title}</h2>
          </div>
          <div className="section-head-side">
            <p className="section-head-note">
              Six modes, three difficulty levels. Filter the problems, then open a mode.
            </p>
            <Link className="text-link" to="/questions/">
              Browse all question pages <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <div className="difficulty-filter" role="group" aria-label="Filter by difficulty">
          {levels.map((item) => (
            <button
              key={item}
              type="button"
              className={`difficulty-chip ${level === item ? 'is-active' : ''}`}
              aria-pressed={level === item}
              onClick={() => chooseLevel(item)}
            >
              {item}
              <span>{countFor(item)}</span>
            </button>
          ))}
        </div>

        <div className="lab-grid">
          {visibleItems.map((item) => {
            const isOpen = openNumber === item.number
            const problem = item.visibleProblems[problemIndex]
            const page = problem ? getQuestion(item.number, problem.prompt) : null

            return (
              <article className={`lab-card ${isOpen ? 'is-open' : ''}`} key={item.number}>
                <div className="lab-card-top">
                  <span className="lab-icon" aria-hidden="true">{item.icon}</span>
                  <span className="lab-count">
                    {item.visibleProblems.length} problem{item.visibleProblems.length === 1 ? '' : 's'}
                  </span>
                </div>
                <span className="lab-number">{item.number}</span>
                <span className="lab-greek" lang="el">{item.greek}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <button
                  type="button"
                  className="lab-card-button"
                  aria-expanded={isOpen}
                  onClick={() => toggleCard(item.number)}
                >
                  {isOpen ? 'Hide problems' : 'Open problems'}
                  <span aria-hidden="true">{isOpen ? '−' : '↗'}</span>
                </button>
                {isOpen && problem && (
                  <div className="lab-sample">
                    <div className="lab-sample-head">
                      <span>
                        Problem {problemIndex + 1} / {item.visibleProblems.length}
                      </span>
                      <span className="difficulty-badge" data-level={problem.difficulty}>
                        {problem.difficulty}
                      </span>
                    </div>
                    <p>{problem.prompt}</p>
                    {revealed && (
                      <div className="lab-solution">
                        <p className="lab-answer">{problem.answer}</p>
                        <p className="lab-hint">{problem.hint}</p>
                      </div>
                    )}
                    <div className="lab-sample-actions">
                      <button
                        type="button"
                        className="lab-reveal"
                        onClick={() => setRevealed((value) => !value)}
                      >
                        {revealed ? 'Hide answer' : 'Reveal answer'}
                      </button>
                      <div className="lab-pager">
                        <button
                          type="button"
                          aria-label="Previous problem"
                          disabled={problemIndex === 0}
                          onClick={() => moveProblem(-1, item.visibleProblems.length)}
                        >
                          ←
                        </button>
                        <button
                          type="button"
                          aria-label="Next problem"
                          disabled={problemIndex === item.visibleProblems.length - 1}
                          onClick={() => moveProblem(1, item.visibleProblems.length)}
                        >
                          →
                        </button>
                      </div>
                    </div>
                    {page && (
                      <Link className="lab-page-link" to={page.path}>
                        Open question page <span aria-hidden="true">↗</span>
                      </Link>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function HomePage() {
  return (
    <main id="main">
      <section className="hero" id="home">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span className="rule" /> Practical thinking for everyday life</p>
            <p className="hero-greek" lang="el">Νομίζω · I think</p>
            <h1>Think<br /><em>again.</em></h1>
            <p className="hero-lead">
              This is not a place to find answers. It is a place to ask better
              questions, test what you believe and learn to see more clearly.
            </p>
            <p className="hero-tagline">Try to Think Better.</p>
            <div className="hero-actions">
              <Link className="button button-gold" to="/daily-question/">
                Take the daily question <span aria-hidden="true">↗</span>
              </Link>
              <Link className="button button-ghost" to="/explore/">
                Explore ideas <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className="hero-steps" aria-label="Our method">
              <span>Question</span>
              <i aria-hidden="true" />
              <span>Reason</span>
              <i aria-hidden="true" />
              <span>Understand</span>
            </div>
          </div>

          <div className="hero-art">
            <div className="arch" aria-hidden="true">
              <div className="arch-inner" />
              <span className="arch-question">?</span>
              <span className="arch-text" lang="el">Τί νομίζεις;</span>
              <span className="arch-base" />
            </div>
            <div className="question-card">
              <div className="card-meta">
                <span>Today’s question</span>
                <span>01 / 07</span>
              </div>
              <p>If everyone believes it, does that make it true?</p>
              <div className="card-foot">
                <span>Choose a side. Then examine it.</span>
                <span aria-hidden="true">↗</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container hero-bottom">
          <span>Scroll to think</span>
          <div className="meander" aria-hidden="true" />
          <span lang="el">Μη βιάζου να συμπεράνεις</span>
        </div>
      </section>

      <section className="daily-question section-ivory" id="daily-question">
        <div className="container question-home-grid">
          <div className="challenge-intro">
            <p className="eyebrow"><span className="rule" /> Daily question</p>
            <h2>Think before<br /><em>you answer.</em></h2>
            <p>
              A small situation, a decision to make and a reason to look again.
              No score to protect here — only a habit to practise.
            </p>
            <div className="challenge-facts">
              <span>2 minutes</span>
              <span>No grades</span>
              <span>Reason first</span>
            </div>
            <Link className="text-link" to="/daily-question/">
              Open the daily question <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <ChallengeCard />
        </div>
      </section>

      <section className="paths section-paper" id="explore">
        <div className="container">
          <SectionHead
            eyebrow="Explore"
            title={<>Five destinations.<br /><em>One habit of mind.</em></>}
            note="Every path begins with the same move: pause, question, then decide what you have reason to believe."
            to="/explore/"
            linkLabel="Explore all ideas"
          />
          <div className="path-grid">
            {destinations.map((item, index) => (
              <Link
                className={`path-card ${index === 1 ? 'is-featured' : ''}`}
                to={item.to}
                key={item.number}
              >
                <span className="path-number">{item.number}</span>
                <span className="path-greek" lang="el">{item.greek}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="path-arrow" aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured section-dark" id="featured">
        <div className="container">
          <SectionHead
            eyebrow="Think Lab"
            title={<>Playful problems.<br /><em>Serious thinking.</em></>}
            note="Our most playful destination: six modes, three difficulty levels and plenty of good reasons to think again."
            to="/think-lab/"
            linkLabel="Enter Think Lab"
          />
          <div className="card-grid three">
            {thinkLabSections.slice(0, 3).map((item) => (
              <InfoCard item={item} key={item.number} />
            ))}
          </div>
        </div>
      </section>

      <section className="learn section-ivory" id="learn">
        <div className="container editorial-grid">
          <div className="editorial-copy">
            <p className="eyebrow"><span className="rule" /> Learn</p>
            <h2>Learn to think,<br /><em>not to recite.</em></h2>
            <p>
              Courses build one thinking move at a time: asking a useful
              question, separating evidence from assumption and deciding well
              when information is incomplete.
            </p>
            <Link className="text-link" to="/learn/">
              See the courses <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <div className="card-grid stack">
            {courses.map((item) => <InfoCard item={item} key={item.title} />)}
          </div>
        </div>
      </section>

      <section className="real-life section-paper" id="real-life">
        <div className="container">
          <SectionHead
            eyebrow="Real Life"
            title={<>Practise where<br /><em>it counts.</em></>}
            note="Ordinary moments are where assumptions usually slip in unnoticed. Rehearse clearer judgement before the moment arrives."
            to="/real-life/"
            linkLabel="Open Real Life"
          />
          <div className="card-grid three">
            {scenarios.map((item) => <InfoCard item={item} key={item.title} />)}
          </div>
        </div>
      </section>

      <section className="philosophy section-dark" id="philosophy">
        <div className="container">
          <SectionHead
            eyebrow="Philosophy"
            title={<>Wisdom, made<br /><em>useful.</em></>}
            note="Different schools ask different questions. Borrow the method that helps in the situation in front of you."
            to="/philosophy/"
            linkLabel="Open Philosophy"
          />
          <div className="card-grid four">
            {schools.map((item) => <InfoCard item={item} key={item.title} />)}
          </div>
          <div className="principle-strip" aria-label="Brand philosophy">
            {principles.map((item) => <span key={item}>{item}</span>)}
          </div>
        </div>
      </section>

      <section className="invitation section-ivory" id="invitation">
        <div className="container invitation-inner">
          <p className="eyebrow"><span className="rule" /> Your move</p>
          <h2>Try to<br /><em>Think Better.</em></h2>
          <p>
            Begin with one question. Keep it long enough to examine it. Leave
            with a clearer way of approaching the next one.
          </p>
          <div className="invitation-actions">
            <Link className="button button-dark" to="/daily-question/">
              Start with today’s question <span aria-hidden="true">↗</span>
            </Link>
            <Link className="button button-outline-dark" to="/my-nomizo/">
              Discover My NOMIZO <span aria-hidden="true">→</span>
            </Link>
          </div>
          <span className="invitation-greek" lang="el">Τί νομίζεις τώρα;</span>
        </div>
      </section>
    </main>
  )
}

function DetailPage({ path }) {
  const content = pageContent[path]

  return (
    <main id="main">
      <section className={`page-hero section-dark ${path === '/think-lab/' ? 'page-hero-logic' : ''}`}>
        <div className="container page-hero-inner">
          <div>
            <p className="eyebrow"><span className="rule" /> {content.eyebrow}</p>
            <p className="hero-greek" lang="el">{content.greek}</p>
            <h1>{content.title}</h1>
          </div>
          <p className="page-lead">{content.lead}</p>
        </div>
      </section>

      <section className="page-body section-ivory">
        <div className="container page-body-grid">
          <div className="section-index">
            <span>01</span>
            <span>The idea</span>
          </div>
          <div>
            {content.body.map((paragraph) => (
              <p className="page-paragraph" key={paragraph}>{paragraph}</p>
            ))}
            <div className="page-steps">
              {content.steps.map((step) => (
                <div className="page-step" key={step.number}>
                  <span>{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {content.variant === 'challenge' && (
        <section className="page-feature section-paper">
          <div className="container question-home-grid">
            <div className="challenge-intro">
              <p className="eyebrow"><span className="rule" /> Try it now</p>
              <h2>{content.featureTitle}</h2>
              <p>{content.featureText}</p>
            </div>
            <ChallengeCard />
          </div>
        </section>
      )}

      {content.variant === 'lab' ? (
        <ThinkLabExplorer items={content.cards} title={content.cardsTitle} />
      ) : (
        <section className={`page-cards ${content.variant === 'challenge' ? 'section-ivory' : 'section-paper'}`}>
          <div className="container">
            <div className="section-head compact">
              <div>
                <p className="eyebrow"><span className="rule" /> {content.eyebrow}</p>
                <h2>{content.cardsTitle}</h2>
              </div>
            </div>
            <div className="card-grid three">
              {content.cards.map((item) => <InfoCard item={item} key={item.title} />)}
            </div>
          </div>
        </section>
      )}

      <section className="page-quote section-dark">
        <div className="container">
          <p className="eyebrow"><span className="rule" /> NOMIZO principle</p>
          <blockquote>{content.quote}</blockquote>
          <span lang="el">Νομίζω · Think again.</span>
        </div>
      </section>

      <section className="page-cta section-ivory">
        <div className="container page-cta-inner">
          <div>
            <h2>{content.cta.title}</h2>
            <p>{content.cta.text}</p>
          </div>
          <Link className="button button-dark" to={content.cta.to}>
            {content.cta.label} <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </main>
  )
}

function QuestionPage({ question }) {
  const [revealed, setRevealed] = useState(false)
  const categoryQuestions = questionBank.filter(
    (item) => item.categoryNumber === question.categoryNumber
  )
  const index = categoryQuestions.findIndex((item) => item.id === question.id)
  const previous = categoryQuestions[index - 1]
  const next = categoryQuestions[index + 1]
  const related = categoryQuestions.filter((item) => item.id !== question.id).slice(0, 4)

  return (
    <main id="main">
      <section className="page-hero section-dark question-hero">
        <div className="container">
          <p className="eyebrow">
            <span className="rule" />
            <Link to="/think-lab/">Think Lab</Link> · {question.category}
          </p>
          <div className="question-hero-meta">
            <span className="difficulty-badge" data-level={question.difficulty}>
              {question.difficulty}
            </span>
            <span className="question-id">{question.id}</span>
          </div>
          <h1>{question.prompt}</h1>
        </div>
      </section>

      <section className="page-body section-ivory">
        <div className="container question-body">
          <p className="question-nudge">
            Take a moment. Form your own answer before you reveal the reasoning.
          </p>
          <button
            type="button"
            className="button button-dark"
            aria-expanded={revealed}
            onClick={() => setRevealed((value) => !value)}
          >
            {revealed ? 'Hide answer' : 'Reveal answer'}
          </button>
          {revealed && (
            <div className="question-answer" role="status">
              <p>{question.answer}</p>
              <p className="question-hint">{question.hint}</p>
            </div>
          )}
          <div className="question-links">
            <Link className="text-link" to="/think-lab/">
              Back to Think Lab <span aria-hidden="true">↗</span>
            </Link>
            <Link className="text-link" to="/questions/">
              All questions <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      {(previous || next) && (
        <section className="page-cards section-paper">
          <div className="container question-pager">
            {previous ? (
              <Link className="question-pager-link" to={previous.path}>
                <span>Previous</span>
                {previous.prompt}
              </Link>
            ) : <span />}
            {next ? (
              <Link className="question-pager-link is-next" to={next.path}>
                <span>Next</span>
                {next.prompt}
              </Link>
            ) : <span />}
          </div>
        </section>
      )}

      <section className="page-cards section-ivory">
        <div className="container">
          <div className="section-head compact">
            <div>
              <p className="eyebrow"><span className="rule" /> More in {question.category}</p>
              <h2>Keep thinking.</h2>
            </div>
          </div>
          <ol className="question-list">
            {related.map((item) => (
              <li key={item.id}>
                <Link to={item.path}>
                  <span className="difficulty-badge" data-level={item.difficulty}>
                    {item.difficulty}
                  </span>
                  <span>{item.prompt}</span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  )
}

function QuestionsIndex() {
  return (
    <main id="main">
      <section className="page-hero section-dark">
        <div className="container page-hero-inner">
          <div>
            <p className="eyebrow"><span className="rule" /> Questions</p>
            <h1>Every question, one page.</h1>
          </div>
          <p className="page-lead">
            {questionBank.length} questions across six modes. Each has its own URL, difficulty
            level and a reasoned answer — think first, then reveal.
          </p>
        </div>
      </section>

      {questionsByCategory.map(({ section, questions: items }, index) => (
        <section
          className={`page-cards ${index % 2 === 0 ? 'section-paper' : 'section-ivory'}`}
          key={section.number}
        >
          <div className="container">
            <div className="section-head compact">
              <div>
                <p className="eyebrow"><span className="rule" /> {section.number} · {section.title}</p>
                <h2>{section.text}</h2>
              </div>
            </div>
            <ol className="question-list">
              {items.map((item) => (
                <li key={item.id}>
                  <Link to={item.path}>
                    <span className="difficulty-badge" data-level={item.difficulty}>
                      {item.difficulty}
                    </span>
                    <span>{item.prompt}</span>
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        </section>
      ))}
    </main>
  )
}

function App() {
  const path = useRoute()
  const isDetailPage = Boolean(pageContent[path])
  const question = questionByPath[path]
  const isQuestionsRoute = path.startsWith('/questions/')
  const { theme, toggleTheme } = useTheme()

  useSeo(
    question
      ? question.seo
      : isQuestionsRoute
        ? questionsIndexSeo
        : seo[path] ?? seo['/']
  )

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <Header path={path} theme={theme} toggleTheme={toggleTheme} />
      {question ? (
        <QuestionPage question={question} />
      ) : isQuestionsRoute ? (
        <QuestionsIndex />
      ) : path === '/' ? (
        <HomePage />
      ) : isDetailPage ? (
        <DetailPage path={path} />
      ) : (
        <HomePage />
      )}
      <Footer />
    </>
  )
}

export default App
