export function Frac({ n, d }) {
  return (
    <span className="frac" role="math" aria-label={`${n}/${d}`}>
      <span className="frac-n" aria-hidden="true">{n}</span>
      <span className="frac-d" aria-hidden="true">{d}</span>
    </span>
  )
}

export function Mixed({ w, n, d }) {
  return (
    <span className="mixed" role="math" aria-label={`${w} and ${n}/${d}`}>
      <span aria-hidden="true">{w}</span>
      <Frac n={n} d={d} />
    </span>
  )
}

export function Blank() {
  return <span className="blank" role="img" aria-label="unknown number" />
}

export function Eq({ children }) {
  return <div className="equation">{children}</div>
}
