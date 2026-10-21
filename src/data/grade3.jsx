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
    alignmentEvidence: 'Students generate two fractions equivalent to 2/4 and explain why they represent the same part of the whole.',
    type: 'Constructed response',
    points: 3,
    stem: (
      <>
        <figure>
          <svg viewBox="0 0 180 180" role="img" aria-labelledby="grade3-equivalent-square" style={{ width: '100%', maxWidth: '12rem', height: 'auto' }}>
            <title id="grade3-equivalent-square">A square split into four equal small squares. The two top squares are shaded. The two bottom squares are not shaded.</title>
            <rect x="10" y="10" width="160" height="160" fill="var(--surface)" />
            <rect x="10" y="10" width="160" height="80" fill="var(--dok2)" fillOpacity="0.35" />
            <rect x="10" y="10" width="160" height="160" fill="none" stroke="var(--ink)" strokeWidth="2" />
            <path d="M90 10V170 M10 90H170" fill="none" stroke="var(--ink)" strokeWidth="2" />
          </svg>
        </figure>
        <p>Write 2 different fractions that are equivalent to <Frac n={2} d={4} />. Explain why your fractions show the same amount.</p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Write 2 different fractions equivalent to 2/4 and explain why they are equal.' }],
    key: (
      <p>
        Possible answers: <Frac n={1} d={2} /> and <Frac n={3} d={6} />.
        Accept any two different fractions equivalent to 2/4, with a correct explanation.
      </p>
    ),
    sample: (
      <p>
        My fractions are 1/2 and 3/6. The shaded part is half the square.
        If I split each half into 3 equal parts, 3 of the 6 parts are shaded.
        Both fractions show the same amount as 2/4.
      </p>
    ),
    rubric: [{
      title: 'Scoring rubric · 3 points total; add fractions and explanation scores',
      rows: [
        { score: 'Fractions · 2', text: 'Writes two different fractions equivalent to 2/4, such as 1/2 and 3/6.' },
        { score: 'Fractions · 1', text: 'Writes only one correct fraction, or repeats the same correct fraction twice.' },
        { score: 'Fractions · 0', text: 'Gives no correct fraction or no answer.' },
        { score: 'Explanation · 1', text: 'Uses the picture or describes equal parts to explain why the fractions represent the same shaded amount of the same whole.' },
        { score: 'Explanation · 0', text: 'Gives no correct picture-based explanation, or gives no response.' },
      ],
    }],
    dokWhy: 'Students connect different ways of partitioning the same shaded area and explain why the fractions have equal value.',
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
    alignmentEvidence: 'Students construct equal-area rectangles, calculate different perimeter lengths, and use them to refute a claim.',
    type: 'Constructed response',
    points: 4,
    stem: (
      <>
        <p>Nora says, “If two rectangles have the same area, their perimeters are always the same.”</p>
        <p>
          Is Nora right? Choose two different rectangles. Each must have an area of
          <strong> 24 square units</strong>. Each side length must be a whole number from 1 to 8 units.
          Turning a rectangle does not make a new rectangle.
        </p>
        <p>
          For each rectangle, write its side lengths. Show how you find its area and perimeter.
          Use your numbers to explain whether Nora is right.
        </p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Grade 3, DOK 3: Give two rectangles, show your math, and explain whether Nora is right.' }],
    key: (
      <p>
        <strong>Nora is wrong.</strong> A 3-by-8 rectangle and a 4-by-6 rectangle both have area 24 square
        units, but their perimeters are 22 units and 20 units.
      </p>
    ),
    sample: (
      <p>
        My first rectangle has sides 3 and 8 units: 3 × 8 = 24 square units, and 3 + 8 + 3 + 8 = 22 units
        around. My second has sides 4 and 6 units: 4 × 6 = 24 square units, and 4 + 6 + 4 + 6 = 20 units
        around. Both areas are 24 square units, but 22 units around is different from 20 units around.
        Nora is wrong because rectangles with the same area can have different perimeters.
      </p>
    ),
    rubric: [{
      title: 'Scoring rubric · 4 points total; add examples and argument scores',
      rows: [
        { score: 'Examples · 2', text: 'Gives two permitted, noncongruent rectangles with area 24 and correctly calculates both areas and perimeters.' },
        { score: 'Examples · 1', text: 'Chooses a valid pair but has one calculation error or omission, or completely calculates only one valid rectangle.' },
        { score: 'Examples · 0', text: 'Gives no valid rectangle with sufficient calculations, or gives no response.' },
        { score: 'Argument · 2', text: 'Rejects the claim and explicitly explains that matching areas with different perimeters form a counterexample to “always.”' },
        { score: 'Argument · 1', text: 'Rejects the claim with relevant area/perimeter evidence, but the connection between the examples and the general claim is incomplete.' },
        { score: 'Argument · 0', text: 'Accepts the claim or gives no mathematically relevant argument.' },
      ],
    }],
    dokWhy: 'Students select a counterexample and explain why it disproves a universal claim.',
  },
]
