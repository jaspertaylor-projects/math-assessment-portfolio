function regularPolygon(sides, r, cx, cy, startDeg) {
  return Array.from({ length: sides }, (_, i) => {
    const a = ((startDeg + (360 / sides) * i) * Math.PI) / 180
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}

const SHAPES = {
  rectangle: { points: '16,30 84,30 84,70 16,70' },
  rightTriangle: {
    points: '22,80 80,80 22,22',
    extra: <polyline points="22,71 31,71 31,80" fill="none" strokeWidth="1.5" />,
  },
  // One pair of parallel sides, rotated so they aren't horizontal.
  trapezoid: { points: '8,64 92,64 70,32 28,32', transform: 'rotate(-20 50 50)' },
  kite: { points: '50,12 76,38 50,88 24,38' },
  hexagon: { points: regularPolygon(6, 38, 50, 50, 0) },
  pentagon: { points: regularPolygon(5, 38, 50, 53, -90) },
}

export function Shape({ type, label }) {
  const s = SHAPES[type]
  return (
    <svg className="shape-svg" viewBox="0 0 100 100" role="img" aria-label={label}>
      <g transform={s.transform} stroke="currentColor" strokeLinejoin="round">
        <polygon points={s.points} className="shape-fill" strokeWidth="2.5" />
        {s.extra}
      </g>
    </svg>
  )
}

export function Pizzas() {
  return (
    <figure className="pizzas" aria-label="A large pizza and a small pizza. Neither is cut.">
      <div className="pizza">
        <svg viewBox="0 0 160 160" width="150" height="150" aria-hidden="true">
          <circle cx="80" cy="80" r="74" className="pizza-crust" />
          <circle cx="80" cy="80" r="64" className="pizza-cheese" />
        </svg>
        <figcaption>Ava’s pizza <span>(large)</span></figcaption>
      </div>
      <div className="pizza">
        <svg viewBox="0 0 160 160" width="92" height="92" aria-hidden="true">
          <circle cx="80" cy="80" r="74" className="pizza-crust" />
          <circle cx="80" cy="80" r="62" className="pizza-cheese" />
        </svg>
        <figcaption>Jayden’s pizza <span>(small)</span></figcaption>
      </div>
    </figure>
  )
}
