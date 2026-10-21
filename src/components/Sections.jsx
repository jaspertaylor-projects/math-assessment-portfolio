import { useMemo, useState } from 'react'
import { site } from '../site.config.js'
import { items } from '../data/items.jsx'
import { DOK } from '../data/dok.js'
import { ItemCard } from './ItemCard.jsx'

const LEVELS = [1, 2, 3]
const GRADES = [3, 4, 5]

function initials(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export function Nav() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <span className="brand-mark">{initials(site.name)}</span>
          <span className="brand-name">{site.name}</span>
        </a>
        <nav aria-label="Sections">
          <a href="#questions">Questions</a>
          <a href="#about">About</a>
          <a href={`mailto:${site.email}`}>Contact</a>
        </nav>
      </div>
    </header>
  )
}

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">
            Mathematics Assessment Portfolio · {site.focus}
          </p>
          <h1>Math assessment questions for grades <span className="grade-range">3–5.</span></h1>
          <p className="lede">
            Nine standards-aligned math questions. Each grade includes one question at each
            Depth of Knowledge (DOK) level, from 1 to 3, with sample responses and scoring rubrics.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#questions">View sample questions</a>
          </div>
          <dl className="stats">
            <div><dt>Sample questions</dt><dd>{items.length}</dd></div>
            <div><dt>Grades</dt><dd>3–5</dd></div>
            <div><dt>DOK levels</dt><dd>1–3</dd></div>
          </dl>
        </div>
        <div className="ladder" aria-label="Questions by Depth of Knowledge level">
          {LEVELS.map((l) => {
            const count = items.filter((it) => it.dok === l).length
            return (
              <a key={l} href="#questions" className={`ladder-step dok-${l}`} style={{ '--step': l }}>
                <span className="ladder-level">DOK {l}</span>
                <span className="ladder-name">{DOK[l].short}</span>
                <span className="ladder-items">
                  {count} {count === 1 ? 'question' : 'questions'}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Segmented({ label, value, onChange, options }) {
  return (
    <div className="filter">
      <span className="filter-label" id={`f-${label}`}>{label}</span>
      <div className="segmented" role="radiogroup" aria-labelledby={`f-${label}`}>
        {options.map((o) => (
          <button
            key={o.value}
            type="button"
            role="radio"
            aria-checked={value === o.value}
            className={value === o.value ? 'on' : ''}
            onClick={() => onChange(o.value)}
          >
            {o.label}
          </button>
        ))}
      </div>
    </div>
  )
}

export function QuestionsSection() {
  const [grade, setGrade] = useState('all')
  const [dok, setDok] = useState('all')
  const [openIds, setOpenIds] = useState(() => new Set())
  const [responses, setResponses] = useState({})

  const visible = useMemo(
    () => items.filter((it) => (grade === 'all' || it.grade === grade) && (dok === 'all' || it.dok === dok)),
    [grade, dok],
  )
  const allOpen = visible.length > 0 && visible.every((it) => openIds.has(it.id))

  const toggle = (id) =>
    setOpenIds((cur) => {
      const next = new Set(cur)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })
  const toggleAll = () => setOpenIds(allOpen ? new Set() : new Set(items.map((it) => it.id)))

  return (
    <section className="section" id="questions" aria-labelledby="questions-heading">
      <div className="container narrow">
        <div className="section-head">
          <p className="eyebrow">Grades 3–5 · DOK 1–3</p>
          <h2 id="questions-heading">Sample assessment questions</h2>
          <p className="section-lede">
            Three questions per grade: one multiple-choice question and two constructed responses. Each includes
            a specific Common Core standard and scoring guidance.
          </p>
        </div>

        <div className="toolbar">
          <Segmented
            label="Grade"
            value={grade}
            onChange={setGrade}
            options={[{ value: 'all', label: 'All' }, ...GRADES.map((g) => ({ value: g, label: String(g) }))]}
          />
          <Segmented
            label="DOK"
            value={dok}
            onChange={setDok}
            options={[{ value: 'all', label: 'All' }, ...LEVELS.map((l) => ({ value: l, label: String(l) }))]}
          />
          <label className="switch">
            <input type="checkbox" checked={allOpen} onChange={toggleAll} />
            <span className="switch-track" aria-hidden="true" />
            <span>Show all answer keys</span>
          </label>
        </div>
        <p className="result-count" aria-live="polite">
          Showing {visible.length} of {items.length} questions
        </p>

        <div className="item-list">
          {visible.map((it) => (
            <ItemCard
              key={it.id}
              item={it}
              open={openIds.has(it.id)}
              onToggle={() => toggle(it.id)}
              responses={responses[it.id]}
              onResponseChange={(index, value) => setResponses((current) => ({
                ...current,
                [it.id]: { ...current[it.id], [index]: value },
              }))}
            />
          ))}
          {visible.length === 0 && (
            <p className="empty">
              No sample questions match this grade and DOK level.
            </p>
          )}
        </div>
        <p className="footnote">
          Standards: Common Core State Standards for Mathematics.
        </p>
      </div>
    </section>
  )
}

export function About() {
  return (
    <section className="section section-dark" id="about" aria-labelledby="about-heading">
      <div className="container about">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-heading">{site.name}</h2>
          <p className="about-role">
            {site.role} · {site.focus}
          </p>
          {site.bio.map((p) => <p key={p}>{p}</p>)}
          <div className="hero-cta">
            <a className="btn btn-light" href={`mailto:${site.email}`}>Get in touch</a>
            {site.linkedin && (
              <a className="btn btn-outline-light" href={site.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            )}
          </div>
        </div>
        <div className="about-card">
          <h3>Areas of focus</h3>
          <ul>
            {site.strengths.map((s) => <li key={s}>{s}</li>)}
          </ul>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} {site.name}</span>
        <span>Original sample questions by {site.name}.</span>
      </div>
    </footer>
  )
}
