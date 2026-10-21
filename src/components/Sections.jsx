import { useMemo, useState } from 'react'
import { site } from '../site.config.js'
import { items } from '../data/items.jsx'
import { DOK } from '../data/dok.js'
import { ItemCard, DokBadge } from './ItemCard.jsx'

const LEVELS = [1, 2, 3, 4]
const GRADES = [3, 4, 5]
const totalPoints = items.reduce((sum, it) => sum + it.points, 0)
const DOMAINS = {
  OA: 'Operations & Algebraic Thinking',
  NBT: 'Number & Operations in Base Ten',
  NF: 'Number & Operations — Fractions',
  MD: 'Measurement & Data',
  G: 'Geometry',
}
const domainCode = (it) => it.standard.split('.')[1]

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
          <a href="#items">Items</a>
          <a href="#blueprint">Blueprint</a>
          <a href="#rationale">Rationale</a>
          <a href="#about">About</a>
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
          <h1>Items that measure how students think, not just what they recall.</h1>
          <p className="lede">
            Ten original sample items aligned to grade-level standards and written across all four levels of Webb’s
            Depth of Knowledge. Each one includes an answer key, distractor analysis, and the reasoning behind its
            design.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#items">View the items</a>
            <a className="btn btn-ghost" href="#rationale">Read the design rationale</a>
          </div>
          <dl className="stats">
            <div><dt>Items</dt><dd>10</dd></div>
            <div><dt>Grade levels</dt><dd>3</dd></div>
            <div><dt>DOK levels</dt><dd>4</dd></div>
            <div><dt>Domains</dt><dd>5</dd></div>
            <div><dt>Formats</dt><dd>6</dd></div>
          </dl>
        </div>
        <div className="ladder" aria-label="Items by Depth of Knowledge level">
          {LEVELS.map((l) => {
            const ids = items.filter((it) => it.dok === l).map((it) => it.id)
            return (
              <a key={l} href="#items" className={`ladder-step dok-${l}`} style={{ '--step': l }}>
                <span className="ladder-level">DOK {l}</span>
                <span className="ladder-name">{DOK[l].short}</span>
                <span className="ladder-items">
                  {ids.length} {ids.length === 1 ? 'item' : 'items'} · #{ids.join(', #')}
                </span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export function DokLevels() {
  return (
    <section className="section section-tint" aria-labelledby="dok-heading">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">The framework</p>
          <h2 id="dok-heading">Depth of Knowledge, in brief</h2>
          <p className="section-lede">
            DOK describes the <em>kind of thinking</em> an item requires, not how difficult it is. A fact item can be
            hard for a student who hasn’t mastered the fact, and a reasoning item can use friendly numbers. This set is
            built around that distinction.
          </p>
        </div>
        <div className="dok-grid">
          {LEVELS.map((l) => (
            <div key={l} className={`dok-card dok-accent-${l}`}>
              <DokBadge level={l} />
              <h3>{DOK[l].name}</h3>
              <p>{DOK[l].desc}</p>
              <ul className="verbs" aria-label="Typical verbs">
                {DOK[l].verbs.map((v) => <li key={v}>{v}</li>)}
              </ul>
            </div>
          ))}
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

export function ItemsSection() {
  const [grade, setGrade] = useState('all')
  const [dok, setDok] = useState('all')
  const [openIds, setOpenIds] = useState(() => new Set())

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
    <section className="section" id="items" aria-labelledby="items-heading">
      <div className="container narrow">
        <div className="section-head">
          <p className="eyebrow">The items</p>
          <h2 id="items-heading">Ten sample items, Grades 3–5</h2>
          <p className="section-lede">
            Each item is shown as a student would see it. Try it, then open the answer key to see the distractor
            analysis, the scoring rubric, and why the item sits at its DOK level.
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
          Showing {visible.length} of {items.length} items
        </p>

        <div className="item-list">
          {visible.map((it) => (
            <ItemCard key={it.id} item={it} open={openIds.has(it.id)} onToggle={() => toggle(it.id)} />
          ))}
          {visible.length === 0 && (
            <p className="empty">
              No items match that combination. In this set, each grade samples three of the four DOK levels.
            </p>
          )}
        </div>
        <p className="footnote">
          Standards codes reference the Common Core State Standards for Mathematics. Each item can be realigned to
          state-specific standards.
        </p>
      </div>
    </section>
  )
}

function keySummary(item) {
  const choice = item.blocks.find((b) => b.kind === 'choice')
  if (choice) return choice.options.filter((o) => o.correct).map((o) => o.id).join(', ')
  const sort = item.blocks.find((b) => b.kind === 'classify')
  if (sort) return 'Sort'
  return 'Rubric'
}

export function Blueprint() {
  return (
    <section className="section section-tint" id="blueprint" aria-labelledby="blueprint-heading">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Test blueprint</p>
          <h2 id="blueprint-heading">How the set is balanced</h2>
          <p className="section-lede">
            The same view a district uses to check a form before it ships: where every item and point sits by grade
            and cognitive demand.
          </p>
        </div>

        <div className="blueprint-grid">
          <div className="card">
            <h3 className="card-title">Grade × DOK matrix</h3>
            <div className="table-wrap">
              <table className="matrix-table">
                <thead>
                  <tr>
                    <th scope="col"><span className="sr-only">Grade</span></th>
                    {LEVELS.map((l) => (
                      <th key={l} scope="col"><DokBadge level={l} /></th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {GRADES.map((g) => (
                    <tr key={g}>
                      <th scope="row">Grade {g}</th>
                      {LEVELS.map((l) => {
                        const ids = items.filter((it) => it.grade === g && it.dok === l)
                        return (
                          <td key={l}>
                            {ids.length ? (
                              ids.map((it) => (
                                <a key={it.id} href={`#item-${it.id}`} className={`chip dok-${l}`}>
                                  #{it.id}
                                </a>
                              ))
                            ) : (
                              <span className="muted" aria-label="none">—</span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <th scope="row">Items</th>
                    {LEVELS.map((l) => <td key={l}>{items.filter((it) => it.dok === l).length}</td>)}
                  </tr>
                  <tr>
                    <th scope="row">Points</th>
                    {LEVELS.map((l) => (
                      <td key={l}>{items.filter((it) => it.dok === l).reduce((s, it) => s + it.points, 0)}</td>
                    ))}
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          <div className="card">
            <h3 className="card-title">Item specifications</h3>
            <div className="table-wrap">
              <table className="spec-table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Gr.</th>
                    <th scope="col">Standard</th>
                    <th scope="col">Domain</th>
                    <th scope="col">DOK</th>
                    <th scope="col">Format</th>
                    <th scope="col">Key</th>
                    <th scope="col">Pts</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((it) => (
                    <tr key={it.id}>
                      <td><a href={`#item-${it.id}`}>{it.id}</a></td>
                      <td>{it.grade}</td>
                      <td className="mono">{it.standard}</td>
                      <td><abbr title={it.domain}>{domainCode(it)}</abbr></td>
                      <td><DokBadge level={it.dok} /></td>
                      <td>{it.type}</td>
                      <td>{keySummary(it)}</td>
                      <td>{it.points}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={7}>Total</td>
                    <td>{totalPoints}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <ul className="legend">
              {Object.entries(DOMAINS).map(([code, name]) => (
                <li key={code}>
                  <strong>{code}</strong> {name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

const PRINCIPLES = [
  {
    title: 'A deliberate spread across Depth of Knowledge',
    body: (
      <>
        <p>
          The set has 2 items at DOK 1, 4 at DOK 2, 3 at DOK 3, and 1 at DOK 4. Most of the weight is at DOK 2 and 3,
          because that is where conceptual understanding and reasoning show up, and where a well-built district
          assessment should put most of its points. The DOK 1 items cover procedural fluency, which students
          genuinely need.
        </p>
        <p>
          The single DOK 4 item is a performance task. Extended thinking takes extended time and can’t be measured
          honestly in a two-minute item, so it would be administered in class and reported separately from the
          on-demand items.
        </p>
      </>
    ),
  },
  {
    title: 'Coverage that follows the major work of each grade',
    body: (
      <>
        <p>
          All five Grades 3–5 domains appear. Eight of the ten items target clusters identified as the major work of
          the grade, where the standards intend most instructional time to go. The other two sample additional
          clusters (perimeter and two-dimensional geometry), so the set reflects the full scope of the standards
          without overweighting them.
        </p>
        <p>
          Fractions appear at every grade and follow the learning progression: comparing fractions of the same whole
          (Item 2), recognizing when a comparison is invalid because the wholes differ (Item 7), and multiplication
          as scaling (Item 9).
        </p>
      </>
    ),
  },
  {
    title: 'Formats chosen to fit the thinking',
    body: (
      <p>
        Six formats appear: multiple choice, multiple select, a technology-enhanced sort, constructed response, a
        two-part matrix-and-explanation item, and a performance task. The cognitive demand decides the format.
        Selected-response items measure DOK 1 and 2 efficiently and score reliably. When an item asks students to
        justify, critique, or generalize (Items 3, 7, and 9 all call on SMP 3), the student has to produce the
        reasoning, so those items require a written or drawn response.
      </p>
    ),
  },
  {
    title: 'Every wrong answer tells a teacher something',
    body: (
      <p>
        Each distractor is the answer a student gets from a specific, well-documented error: whole-number bias with
        fractions, ignoring or misreporting a remainder, stopping a multistep problem early, truncating instead of
        rounding. Because each distractor maps to a misconception, the item analysis report doubles as a reteaching
        plan. Teachers can see not only how many students missed Item 5, but why.
      </p>
    ),
  },
  {
    title: 'Measuring math, not reading',
    body: (
      <p>
        Stems are short and use plain language, familiar contexts (a field trip, a school garden, school supplies),
        and a reading load below grade level, so the item measures mathematics rather than decoding. The names
        reflect a range of backgrounds. Illustrations support comprehension without doing the math: the pizzas in
        Item 7 are deliberately unsliced. Every interactive item can be answered with a keyboard, and right and wrong
        answers are never shown by color alone.
      </p>
    ),
  },
  {
    title: 'Built to score consistently',
    body: (
      <p>
        Constructed-response items come with point-by-point rubrics, clear distinctions between score points, and
        exemplar responses, so two scorers reading the same paper reach the same score. Partial credit is awarded only
        where a task has separable parts. Answer options are ordered numerically and the single-answer keys fall at A,
        B, C, and D, so the position of an option never hints at the answer.
      </p>
    ),
  },
]

const PROCESS = [
  ['Unpack the standard', 'Identify exactly what students must know and do, including clauses that are easy to skip.'],
  ['Set the DOK target', 'Decide the kind of thinking the item must draw out before writing a word.'],
  ['Draft the stem', 'Use the simplest context and language that can carry the math.'],
  ['Engineer distractors', 'Tie each wrong answer to one identifiable misconception.'],
  ['Review for fairness', 'Check reading load, context familiarity, bias, and accessibility.'],
  ['Validate key & rubric', 'Solve every item, test every distractor, and write exemplars at each score point.'],
]

export function Rationale() {
  return (
    <section className="section" id="rationale" aria-labelledby="rationale-heading">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Design rationale</p>
          <h2 id="rationale-heading">Why these ten items belong together</h2>
          <p className="section-lede">
            A sample set should work like a real benchmark form: each item earns its place by measuring something the
            others don’t. These ten were built as a balanced mini-form, and the choices below explain how.
          </p>
        </div>
        <div className="principles">
          {PRINCIPLES.map((p, i) => (
            <article key={p.title} className="principle">
              <span className="principle-num">{String(i + 1).padStart(2, '0')}</span>
              <h3>{p.title}</h3>
              {p.body}
            </article>
          ))}
        </div>

        <div className="process">
          <h3>The development process behind each item</h3>
          <ol>
            {PROCESS.map(([t, d]) => (
              <li key={t}>
                <strong>{t}</strong>
                <span>{d}</span>
              </li>
            ))}
          </ol>
        </div>
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
        <span>All sample items are original work created for this portfolio.</span>
      </div>
    </footer>
  )
}
