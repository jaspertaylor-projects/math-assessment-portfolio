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
    standard: '3.NF.A.3d',
    standardText: 'Compare fractions with matching numerators or denominators, using the same whole; record and justify the comparison.',
    standardUrl: `${grade3Standards}#page=33`,
    alignmentEvidence: 'Students compare 3/8 and 3/4 of equal-length wholes and explain the unequal unit-fraction sizes.',
    type: 'Constructed response',
    points: 3,
    stem: (
      <>
        <p>
          Ada and Ben each have a ribbon. The ribbons are the <strong>same length</strong>.
          Ada colors <Frac n={3} d={8} /> of her ribbon. Ben colors <Frac n={3} d={4} /> of his ribbon.
        </p>
        <p>
          Who colors more ribbon? Write <Frac n={3} d={8} /> and <Frac n={3} d={4} /> with
          &lt;, &gt;, or = between them.
        </p>
        <p>
          Describe two strips that are the same length, one for each ribbon. Tell how many equal parts
          each strip has and how many parts you would color. Explain why one person colors more,
          even though both color 3 parts.
        </p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Grade 3, DOK 2: Tell who colors more. Use a math sign and describe two ribbon strips to explain.' }],
    key: <p><strong>Ben colors more.</strong> <Frac n={3} d={8} /> &lt; <Frac n={3} d={4} />.</p>,
    sample: (
      <p>
        Ben colors more. I would use two strips that are the same length. I would split Ada’s strip into
        8 equal parts and color 3. I would split Ben’s strip into 4 equal parts and color 3. Each fourth is
        bigger than each eighth. Ben’s 3 parts cover more ribbon, so 3/8 &lt; 3/4.
      </p>
    ),
    rubric: [{
      title: 'Scoring rubric · 3 points total; add comparison and model scores',
      rows: [
        { score: 'Comparison · 1', text: 'Writes 3/8 < 3/4 or 3/4 > 3/8 and identifies Ben as coloring more.' },
        { score: 'Comparison · 0', text: 'The symbolic comparison or identification is incorrect, or the comparison is missing.' },
        { score: 'Model · 2', text: 'Describes equal-length wholes split into 8 and 4 equal parts, with 3 parts colored in each, and explains that fourths are larger pieces.' },
        { score: 'Model · 1', text: 'Gives a correct equal-strip description or a correct piece-size explanation, but does not connect both.' },
        { score: 'Model · 0', text: 'Provides no correct model or size reasoning; compares only the whole-number denominators, or gives no response.' },
      ],
    }],
    dokWhy: 'The comparison requires connecting equal wholes, partition size, and the same number of selected parts.',
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
        <p>Nora says, “If two rectangles have the same area, the distance around them is always the same.”</p>
        <p>The distance around a shape is called its <strong>perimeter</strong>.</p>
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
