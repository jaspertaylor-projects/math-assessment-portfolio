import { useState } from 'react'
import { Shape } from './Shapes.jsx'

function ChoiceBlock({ block, itemId, revealed }) {
  const [selected, setSelected] = useState([])
  const toggle = (id) =>
    setSelected((cur) =>
      block.multiple ? (cur.includes(id) ? cur.filter((x) => x !== id) : [...cur, id]) : [id],
    )

  return (
    <div className="choices" role={block.multiple ? 'group' : 'radiogroup'} aria-label="Answer choices">
      {block.options.map((o) => {
        const isSel = selected.includes(o.id)
        const state = revealed ? (o.correct ? 'is-correct' : isSel ? 'is-wrong' : 'is-muted') : ''
        return (
          <div key={o.id} className={`choice ${isSel ? 'is-selected' : ''} ${state}`}>
            <label className="choice-row">
              <input
                type={block.multiple ? 'checkbox' : 'radio'}
                name={`item-${itemId}`}
                checked={isSel}
                onChange={() => toggle(o.id)}
              />
              <span className={`choice-letter ${block.multiple ? 'square' : ''}`} aria-hidden="true">
                {o.id}
              </span>
              <span className="choice-content">{o.content}</span>
              {revealed && o.correct && <span className="tag tag-correct">Key</span>}
              {revealed && isSel && !o.correct && <span className="tag tag-wrong">Your choice</span>}
            </label>
            {revealed && <p className="choice-note">{o.note}</p>}
          </div>
        )
      })}
    </div>
  )
}

function ClassifyBlock({ block, revealed }) {
  const [placed, setPlaced] = useState({})
  return (
    <div className="classify">
      {block.shapes.map((s) => {
        const choice = placed[s.id]
        const state = revealed ? (choice === s.bin ? 'is-correct' : choice ? 'is-wrong' : '') : ''
        return (
          <div key={s.id} className={`classify-card ${state}`}>
            <div className="classify-label">{s.id}</div>
            {revealed && choice && (
              <span className={`tag classify-tag ${choice === s.bin ? 'tag-correct' : 'tag-wrong'}`}>
                {choice === s.bin ? 'Correct' : 'Incorrect'}
              </span>
            )}
            <Shape type={s.type} label={`Shape ${s.id}`} />
            <div className="segmented small" role="radiogroup" aria-label={`Sort shape ${s.id}`}>
              {block.bins.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  role="radio"
                  aria-checked={choice === b.id}
                  className={`${choice === b.id ? 'on' : ''} ${revealed && s.bin === b.id ? 'answer' : ''}`}
                  onClick={() => setPlaced((p) => ({ ...p, [s.id]: b.id }))}
                >
                  {b.label}
                </button>
              ))}
            </div>
            {revealed && (
              <p className="classify-note">
                <strong>{s.name[0].toUpperCase() + s.name.slice(1)}.</strong> {s.note}
              </p>
            )}
          </div>
        )
      })}
    </div>
  )
}

function MatrixBlock({ block, itemId, revealed }) {
  const [picks, setPicks] = useState({})
  return (
    <div className="table-wrap">
      <table className="matrix">
        <thead>
          <tr>
            <th scope="col">
              <span className="sr-only">Expression</span>
            </th>
            {block.columns.map((c) => (
              <th key={c} scope="col">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {block.rows.map((r) => (
            <tr key={r.id}>
              <th scope="row" className="matrix-expr">
                {r.content}
                {revealed && <span className="matrix-note">{r.note}</span>}
              </th>
              {block.columns.map((c, i) => {
                const picked = picks[r.id] === i
                const cls = revealed ? (r.answer === i ? 'is-correct' : picked ? 'is-wrong' : '') : ''
                return (
                  <td key={c} className={cls}>
                    <label className="matrix-cell">
                      <input
                        type="radio"
                        name={`m-${itemId}-${r.id}`}
                        checked={picked}
                        onChange={() => setPicks((p) => ({ ...p, [r.id]: i }))}
                      />
                      <span className="sr-only">{c}</span>
                      <span className="matrix-dot" aria-hidden="true" />
                    </label>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const GRID_COLS = 16
const GRID_ROWS = 8

function GridPaper() {
  const [cells, setCells] = useState(() => new Set())
  const flip = (i) =>
    setCells((cur) => {
      const next = new Set(cur)
      next.has(i) ? next.delete(i) : next.add(i)
      return next
    })

  return (
    <div className="grid-paper-wrap">
      <div className="grid-paper" style={{ '--cols': GRID_COLS }} aria-hidden="true">
        {Array.from({ length: GRID_COLS * GRID_ROWS }, (_, i) => (
          <span key={i} className={cells.has(i) ? 'filled' : ''} onClick={() => flip(i)} />
        ))}
      </div>
      <div className="grid-paper-bar">
        <span>Click squares to shade rectangles.</span>
        <button type="button" className="link-btn" onClick={() => setCells(new Set())} disabled={!cells.size}>
          Clear
        </button>
      </div>
    </div>
  )
}

function ResponseBlock({ block, response = '', onResponseChange }) {
  return (
    <div className="response">
      {block.prompt}
      {block.variant === 'grid' && <GridPaper />}
      <textarea
        className="response-box"
        rows={block.rows ?? (block.variant === 'grid' ? 3 : 4)}
        aria-label={block.label}
        value={response}
        onChange={(event) => onResponseChange?.(event.target.value)}
        placeholder={block.variant === 'grid' ? 'Write the perimeter and area of each rectangle…' : 'Type your response…'}
      />
    </div>
  )
}

function SourcesBlock({ block }) {
  return (
    <div className="sources">
      {block.sources.map((s) => (
        <section key={s.title} className="source">
          <h5>{s.title}</h5>
          {s.body}
        </section>
      ))}
    </div>
  )
}

const RENDERERS = {
  choice: ChoiceBlock,
  classify: ClassifyBlock,
  matrix: MatrixBlock,
  response: ResponseBlock,
  sources: SourcesBlock,
}

export function Block(props) {
  const Render = RENDERERS[props.block.kind]
  const { label, prompt, kind } = props.block
  // Response blocks without a prompt use their label only as the textarea's accessible name.
  const showLabel = label && (kind !== 'response' || prompt)
  return (
    <div className={`block block-${kind}`}>
      {showLabel && <h4 className="part-label">{label}</h4>}
      {kind !== 'response' && prompt}
      <Render {...props} />
    </div>
  )
}
