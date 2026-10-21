import { Blank, Eq, Frac } from '../components/Math.jsx'

const grade3Standards = 'https://www.cde.ca.gov/be/st/ss/documents/ccssmathstandardaug2013.pdf'

export const grade3Items = [
  {
    id: 1,
    grade: 3,
    dok: 1,
    domain: 'Operations & Algebraic Thinking',
    standard: '3.OA.A.4',
    standardText: 'Find the missing whole number in a multiplication or division equation.',
    standardUrl: `${grade3Standards}#page=32`,
    alignmentEvidence: 'The response selects the unknown factor in a three-number multiplication equation.',
    type: 'Multiple choice',
    points: 1,
    stem: (
      <>
        <p>Which number goes in the box? Choose one answer.</p>
        <Eq>6 × <Blank /> = 42</Eq>
      </>
    ),
    blocks: [{
      kind: 'choice',
      options: [
        { id: 'A', content: '6', note: '6 × 6 = 36, so 6 does not make 42.' },
        { id: 'B', content: '7', correct: true, note: '6 × 7 = 42.' },
        { id: 'C', content: '8', note: '6 × 8 = 48, so 8 does not make 42.' },
        { id: 'D', content: '36', note: '6 + 36 = 42, but this question asks about multiplication.' },
      ],
    }],
    key: <p><strong>B. 7.</strong> 6 × 7 = 42.</p>,
    rubric: [{
      title: 'Scoring rubric · 1 point',
      rows: [
        { score: '1', text: 'Selects B (7). No explanation is required.' },
        { score: '0', text: 'Selects another answer or gives no response.' },
      ],
    }],
    dokWhy: 'A familiar multiplication fact determines one missing number.',
  },
  {
    id: 2,
    grade: 3,
    dok: 2,
    domain: 'Number & Operations — Fractions',
    standard: '3.NF.A.3b',
    standardText: 'Find simple equivalent fractions and explain why they are equal using a fraction model.',
    standardUrl: 'https://www.thecorestandards.org/Math/Content/3/NF/A/3/b/',
    alignmentEvidence: 'Students generate two fractions equivalent to 2/4 and use a provided or student-drawn model to show the equivalence.',
    type: 'Constructed response',
    points: 4,
    stem: (
      <>
        <p>The model shows <Frac n={2} d={4} />.</p>
        <figure>
          <svg viewBox="9 9 162 162" role="img" aria-labelledby="grade3-equivalent-square" style={{ width: '100%', maxWidth: '12rem', height: 'auto' }}>
            <title id="grade3-equivalent-square">A square split into four equal parts. The two top parts are shaded. The two bottom parts are not shaded.</title>
            <rect x="10" y="10" width="160" height="160" fill="var(--surface)" />
            <rect x="10" y="10" width="160" height="80" fill="var(--dok2)" fillOpacity="0.35" />
            <rect x="10" y="10" width="160" height="160" fill="none" stroke="var(--ink)" strokeWidth="2" />
            <path d="M90 10V170 M10 90H170" fill="none" stroke="var(--ink)" strokeWidth="2" />
          </svg>
        </figure>
      </>
    ),
    blocks: [
      {
        kind: 'response',
        label: 'Part 1',
        inputLabel: 'Part 1: Write 2 fractions equivalent to 2/4.',
        prompt: <p>Write 2 different fractions that are equivalent to <Frac n={2} d={4} />.</p>,
      },
      {
        kind: 'fraction-model',
        label: 'Part 2',
        inputLabel: 'Part 2: Use the provided model or draw your own to show equivalent fractions.',
        prompt: <p>Use the model below or draw your own model on paper to show why your fractions are equivalent to <Frac n={2} d={4} />. Select a part of the model below to shade or unshade it.</p>,
        rows: 2,
        columns: 4,
        answerShaded: 4,
      },
    ],
    key: (
      <>
        <p><strong>Part 1:</strong> Possible answers are <Frac n={1} d={2} /> and <Frac n={3} d={6} />. Accept any two different fractions equivalent to 2/4.</p>
        <p><strong>Part 2:</strong> Accept either the provided model with any 4 of its 8 parts shaded, or a correctly drawn model showing the equivalence. For example, a student could draw equal-sized wholes showing 1/2 and 3/6 covering the same amount as 2/4. Leaving the provided model blank does not lose credit when a valid drawing is supplied.</p>
      </>
    ),
    sample: (
      <p>
        My fractions are 1/2 and 3/6. In Part 2, I used the provided model and shaded 4 of the 8 parts.
        The shaded area matches the 2/4 model. Each of these fractions shows half the square.
      </p>
    ),
    rubric: [{
      title: 'Scoring rubric · 4 points total; add fractions and model scores',
      rows: [
        { score: 'Fractions · 2', text: 'Writes two different fractions equivalent to 2/4, such as 1/2 and 3/6.' },
        { score: 'Fractions · 1', text: 'Writes only one correct fraction, or repeats the same correct fraction twice.' },
        { score: 'Fractions · 0', text: 'Gives no correct fraction or no answer.' },
        { score: 'Model · 2', text: 'Uses the provided model with exactly 4 of 8 parts shaded, or supplies a correct drawing with equal partitions and shading or labels that demonstrate equivalence to 2/4. Either approach earns full credit.' },
        { score: 'Model · 1', text: 'Shows a relevant model, but a minor partitioning, shading, or labeling error makes the equivalence incomplete or unclear.' },
        { score: 'Model · 0', text: 'Provides no usable model through either the interactive model or a drawing.' },
      ],
    }],
    dokWhy: 'Students generate equivalent fractions and demonstrate equal value by completing or drawing a fraction model.',
  },
  {
    id: 3,
    grade: 3,
    dok: 3,
    domain: 'Measurement & Data',
    standard: '3.MD.D.8',
    secondary: ['3.MD.C.7b'],
    standardText: 'Solve perimeter problems, including rectangles with equal areas and different perimeters.',
    standardUrl: `${grade3Standards}#page=34`,
    alignmentEvidence: 'Students choose their own rectangle examples and use the relationship between area and perimeter to evaluate a claim.',
    type: 'Constructed response',
    points: 4,
    stem: (
      <>
        <p>Nora says, “If two rectangles have the same area, their perimeters are always the same.”</p>
        <p>Is Nora right or wrong? Use examples to explain your answer.</p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Explain whether Nora is right or wrong using examples.' }],
    key: (
      <p>
        <strong>Nora is wrong.</strong> For example, a 2-by-6 rectangle and a 3-by-4 rectangle both have
        area 12 square units, but their perimeters are 16 units and 14 units. Accept other valid examples.
      </p>
    ),
    sample: (
      <p>
        Nora is wrong. A 2-by-6 rectangle has an area of 12 square units and a perimeter of 16 units.
        A 3-by-4 rectangle also has an area of 12 square units, but its perimeter is 14 units.
        These rectangles have the same area and different perimeters, so Nora’s claim is not always true.
      </p>
    ),
    rubric: [{
      title: 'Scoring rubric · 4 points total; add examples and argument scores',
      rows: [
        { score: 'Examples · 2', text: 'Provides valid rectangle examples with equal areas and different perimeters, supported by accurate dimensions, calculations, or labeled drawings. No particular area or side lengths are required.' },
        { score: 'Examples · 1', text: 'Offers relevant rectangle examples with a minor error or missing evidence, or supports only one valid rectangle.' },
        { score: 'Examples · 0', text: 'Provides no mathematically usable rectangle examples or no response.' },
        { score: 'Argument · 2', text: 'Rejects the claim and explicitly explains that matching areas with different perimeters form a counterexample to “always.”' },
        { score: 'Argument · 1', text: 'Rejects the claim with relevant area/perimeter evidence, but the connection between the examples and the general claim is incomplete.' },
        { score: 'Argument · 0', text: 'Accepts the claim or gives no mathematically relevant argument.' },
      ],
    }],
    dokWhy: 'Students select a counterexample and explain why it disproves a universal claim.',
  },
]
