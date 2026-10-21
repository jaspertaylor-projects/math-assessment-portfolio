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
    alignmentEvidence: 'The response supplies the unknown factor in a three-number multiplication equation.',
    type: 'Short response',
    points: 1,
    title: 'The missing factor',
    stem: (
      <>
        <p>What whole number makes this equation true? Write the number.</p>
        <Eq>6 × <Blank /> = 42</Eq>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Grade 3, DOK 1: Write the missing factor.' }],
    key: <p><strong>7.</strong> 6 × 7 = 42.</p>,
    sample: <p>7</p>,
    rubric: [{
      title: 'Scoring rubric · 1 point',
      rows: [
        { score: '1', text: 'Writes 7. No explanation is required.' },
        { score: '0', text: 'Gives another number, an unrelated response, or no response.' },
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
    title: 'Two equal ribbons',
    stem: (
      <>
        <p>
          Ada and Ben each have a ribbon. The ribbons are the <strong>same length</strong>.
          Ada colors <Frac n={3} d={8} /> of her ribbon. Ben colors <Frac n={3} d={4} /> of his ribbon.
        </p>
        <p>
          Who colors more ribbon? Write a comparison using &lt;, &gt;, or =.
          Describe a model with two equal-length strips to explain your answer. Tell how many equal parts
          each strip has, how many parts are colored, and why the colored lengths differ.
        </p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Grade 3, DOK 2: Compare the fractions and describe an equal-strip model.' }],
    key: <p><strong>Ben colors more.</strong> <Frac n={3} d={8} /> &lt; <Frac n={3} d={4} />.</p>,
    sample: (
      <p>
        I would use two strips of the same length. I would divide Ada’s strip into 8 equal parts and color 3.
        I would divide Ben’s strip into 4 equal parts and color 3. Fourths are bigger than eighths when the
        whole strips are the same length. Three fourths covers more ribbon than three eighths, so 3/8 &lt; 3/4.
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
    title: 'Does equal area mean equal border?',
    stem: (
      <>
        <p>Nora says, “Rectangles with the same area always need the same length of border.”</p>
        <p>
          Is Nora’s claim true? Choose two different rectangles, each with an area of <strong>24 square units</strong>.
          Use whole-number side lengths from 1 through 8 units. Write the side lengths, area calculation,
          and perimeter calculation for each rectangle. Use your examples to explain whether Nora’s claim is true.
          Turning a rectangle does not make a different rectangle.
        </p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Grade 3, DOK 3: Describe two rectangles and defend your conclusion about Nora’s claim.' }],
    key: (
      <p>
        <strong>The claim is false.</strong> A 3-by-8 rectangle and a 4-by-6 rectangle both have area 24 square
        units, but their perimeters are 22 units and 20 units.
      </p>
    ),
    sample: (
      <p>
        My first rectangle has sides 3 and 8 units: 3 × 8 = 24 square units, and 3 + 8 + 3 + 8 = 22 units
        around. My second has sides 4 and 6 units: 4 × 6 = 24 square units, and 4 + 6 + 4 + 6 = 20 units
        around. Their areas match, but their borders do not. These two rectangles show that Nora’s word
        “always” is wrong.
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
