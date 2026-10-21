import { Block } from './Blocks.jsx'
import { DOK } from '../data/dok.js'

export function DokBadge({ level, long }) {
  return (
    <span className={`dok-badge dok-${level}`}>
      DOK {level}
      {long && <span className="dok-badge-name"> · {DOK[level].name}</span>}
    </span>
  )
}

function Rubric({ table }) {
  return (
    <div className="rubric">
      {table.title && <h6>{table.title}</h6>}
      <dl>
        {table.rows.map((r) => (
          <div key={r.score} className="rubric-row">
            <dt>{r.score}</dt>
            <dd>{r.text}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export function ItemCard({ item, open, onToggle, responses = {}, onResponseChange }) {
  const panelId = `item-${item.id}-key`
  const headingId = `item-${item.id}-heading`
  return (
    <article className={`item-card dok-accent-${item.dok}`} id={`item-${item.id}`} aria-labelledby={headingId}>
      <header className="item-head">
        <div className="item-number" aria-hidden="true">
          {String(item.id).padStart(2, '0')}
        </div>
        <div className="item-head-text">
          <div className="item-meta">
            <span>Grade {item.grade}</span>
            <span className="dot" aria-hidden="true">·</span>
            <a className="mono" href={item.standardUrl} target="_blank" rel="noreferrer" aria-label={`Read standard ${item.standard}`}>
              {item.standard}
            </a>
            <span className="dot" aria-hidden="true">·</span>
            <span>{item.type}</span>
            <span className="dot" aria-hidden="true">·</span>
            <span>
              {item.points} {item.points === 1 ? 'point' : 'points'}
            </span>
          </div>
          <h3 className="sr-only" id={headingId}>Question {item.id}</h3>
        </div>
        <DokBadge level={item.dok} long />
      </header>

      <div className="item-body">
        {item.stem}
        {item.blocks.map((b, i) => (
          <Block
            key={i}
            block={b}
            itemId={item.id}
            revealed={open}
            response={responses[i]}
            onResponseChange={(value) => onResponseChange?.(i, value)}
          />
        ))}
      </div>

      <button type="button" className="reveal-toggle" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
        <span>{open ? 'Hide answer key' : 'Show answer key'}</span>
        <svg viewBox="0 0 20 20" width="18" height="18" aria-hidden="true">
          <path d="M5 8l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="reveal" id={panelId}>
          <section>
            <h5>Answer key</h5>
            {item.key}
            {item.sample && (
              <div className="exemplar">
                <span className="exemplar-label">Exemplar response</span>
                {item.sample}
              </div>
            )}
            {item.rubric?.map((t, i) => <Rubric key={i} table={t} />)}
          </section>
          <section className="dok-why">
            <h5>
              Depth of Knowledge <DokBadge level={item.dok} />
            </h5>
            <p>{item.dokWhy}</p>
          </section>
          <section className="alignment">
            <h5>Standard alignment</h5>
            <p>
              <a className="mono strong" href={item.standardUrl} target="_blank" rel="noreferrer">{item.standard}</a>{' '}
              {item.standardText}
            </p>
            {item.alignmentEvidence && <p>{item.alignmentEvidence}</p>}
            {item.secondary && (
              <p className="muted">
                Also assesses <span className="mono">{item.secondary.join(', ')}</span>
              </p>
            )}
          </section>
        </div>
      )}
    </article>
  )
}
