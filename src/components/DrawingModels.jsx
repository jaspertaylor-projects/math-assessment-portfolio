import { useRef, useState } from 'react'

function strokePath(points) {
  const path = points.map(([x, y], index) => `${index ? 'L' : 'M'}${x},${y}`).join(' ')
  return points.length === 1 ? `${path} L${points[0].join(',')}` : path
}

function DrawingPad({ label, strokes, onChange, bars }) {
  const height = bars ? 160 : 240
  const active = useRef(null)
  const [draft, setDraft] = useState([])
  const point = (event) => {
    const box = event.currentTarget.getBoundingClientRect()
    return [
      Math.max(0, Math.min(360, (event.clientX - box.left) / box.width * 360)),
      Math.max(0, Math.min(height, (event.clientY - box.top) / box.height * height)),
    ]
  }
  const start = (event) => {
    if (event.button !== 0 || active.current) return
    event.preventDefault()
    event.currentTarget.setPointerCapture(event.pointerId)
    active.current = { pointerId: event.pointerId, points: [point(event)] }
    setDraft(active.current.points)
  }
  const move = (event) => {
    if (active.current?.pointerId !== event.pointerId) return
    active.current.points = [...active.current.points, point(event)]
    setDraft(active.current.points)
  }
  const finish = (event) => {
    if (active.current?.pointerId !== event.pointerId) return
    const completed = active.current.points
    active.current = null
    setDraft([])
    onChange([...strokes, completed])
  }

  return (
    <figure className="drawing-pad">
      <figcaption>{label}</figcaption>
      <svg
        className="drawing-surface"
        style={{ aspectRatio: `360 / ${height}` }}
        viewBox={`0 0 360 ${height}`}
        role="img"
        aria-label={`Drawing space for ${label.toLowerCase()}`}
        onPointerDown={start}
        onPointerMove={move}
        onPointerUp={finish}
        onPointerCancel={finish}
        onLostPointerCapture={finish}
      >
        {bars && <rect x="10" y="20" width="340" height="120" fill="none" stroke="var(--ink)" strokeWidth="2" />}
        {!bars && !strokes.length && !draft.length && (
          <text x="180" y="120" textAnchor="middle" dominantBaseline="middle" fill="var(--ink-3)" fontSize="16">Draw here</text>
        )}
        {[...strokes, ...(draft.length ? [draft] : [])].map((points, index) => (
          <path key={index} d={strokePath(points)} fill="none" stroke="var(--ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" vectorEffect="non-scaling-stroke" />
        ))}
      </svg>
      <div className="drawing-controls">
        <button type="button" className="link-btn" disabled={!strokes.length} aria-label={`Undo last stroke in ${label.toLowerCase()}`} onClick={() => onChange(strokes.slice(0, -1))}>Undo</button>
        <button type="button" className="link-btn" disabled={!strokes.length} aria-label={`Clear ${label.toLowerCase()}`} onClick={() => onChange([])}>Clear</button>
      </div>
    </figure>
  )
}

export function DrawingModelsBlock({ block, response, onResponseChange }) {
  const labels = block.labels ?? ['Fraction 1', 'Fraction 2']
  const models = response?.models ?? labels.map(() => [])
  return (
    <div className="drawing-models">
      {models.map((strokes, index) => (
        <DrawingPad
          key={index}
          label={labels[index]}
          bars={block.bars}
          strokes={strokes}
          onChange={(next) => onResponseChange?.({ models: models.map((current, model) => model === index ? next : current) })}
        />
      ))}
    </div>
  )
}
