import { Frac } from '../components/Math.jsx'

export const grade5Items = [
  {
    id: 7,
    grade: 5,
    dok: 1,
    domain: 'Number & Operations in Base Ten',
    standard: '5.NBT.A.4',
    standardUrl: 'https://www.thecorestandards.org/Math/Content/5/NBT/A/4/',
    standardText: 'Round decimals to a specified place using place value.',
    alignmentEvidence: 'The student selects a number with thousandths rounded to the nearest hundredth.',
    type: 'Multiple choice',
    points: 1,
    stem: <p>Round <strong>6.478</strong> to the nearest hundredth. Choose one answer.</p>,
    blocks: [{
      kind: 'choice',
      options: [
        { id: 'A', content: '6.47', note: 'Look at the 8 in the thousandths place. It tells you to round up.' },
        { id: 'B', content: '6.48', correct: true, note: 'The 8 in the thousandths place tells you to round the hundredths digit up from 7 to 8.' },
        { id: 'C', content: '6.5', note: 'This is 6.478 rounded to the nearest tenth. The question asks for the nearest hundredth.' },
        { id: 'D', content: '6.478', note: 'This is the number you started with. Round it to the nearest hundredth.' },
      ],
    }],
    key: <p><strong>B: 6.48.</strong> The 8 in the thousandths place tells you to round the hundredths digit up from 7 to 8.</p>,
    rubric: [{
      title: 'Scoring rubric · 1 point',
      rows: [
        { score: '1', text: 'Selects B (6.48).' },
        { score: '0', text: 'Selects another answer or gives no response.' },
      ],
    }],
    dokWhy: 'Recall and apply a familiar rounding procedure in one step.',
  },
  {
    id: 8,
    grade: 5,
    dok: 2,
    domain: 'Number & Operations — Fractions',
    standard: '5.NF.B.4a',
    standardUrl: 'https://www.thecorestandards.org/Math/Content/5/NF/B/4/a/',
    standardText: 'Interpret multiplication by a fraction as taking equal parts of a quantity, including a fractional quantity.',
    alignmentEvidence: 'The equation and model interpret three fourths of two thirds of one original pan.',
    type: 'Constructed response',
    points: 3,
    stem: (
      <>
        <p>There is <Frac n={2} d={3} /> of a pan of cornbread left. Sam eats <Frac n={3} d={4} /> of what is left.</p>
        <p>What fraction of the <strong>full pan</strong> does Sam eat?</p>
        <ol>
          <li>Write your answer and an equation that shows your thinking.</li>
          <li>Draw a model to show what fraction of the full pan Sam eats.</li>
        </ol>
      </>
    ),
    blocks: [
      { kind: 'response', inputLabel: 'Part 1: Write your answer and equation.', prompt: <p><strong>Part 1</strong></p> },
      { kind: 'drawing-models', label: 'Part 2', labels: ['Full pan'] },
    ],
    key: <p>Sam eats <strong>one half of the original pan</strong>: <Frac n={3} d={4} /> × <Frac n={2} d={3} /> = <Frac n={6} d={12} /> = <Frac n={1} d={2} />.</p>,
    sample: (
      <p>Imagine dividing the full pan into 12 equal pieces. The two thirds left is 8 pieces. Divide those 8 pieces into 4 equal groups of 2 pieces each. Sam eats 3 groups, or 6 pieces. That is 6 out of the original 12 pieces, so he eats one half of the full pan.</p>
    ),
    rubric: [{
      title: 'Scoring rubric · 3 points; add the three criteria',
      rows: [
        { score: 'Equation · 1', text: 'Represents the situation with 3/4 × 2/3, or an equivalent equation that takes three of four equal parts of 2/3.' },
        { score: 'Answer · 1', text: 'Identifies 1/2 of the original pan; an equivalent fraction is accepted.' },
        { score: 'Model · 1', text: 'Draws equal-size parts of the full pan and shows both the 2/3 left and the 3/4 of that amount eaten (6/12 or 1/2 of the full pan).' },
        { score: '0 per criterion', text: 'Award 0 for each criterion that is absent or incorrect. No response earns 0 total.' },
      ],
    }],
    dokWhy: 'Represent a fraction of a fraction and connect the calculation to a model of the original whole.',
  },
  {
    id: 9,
    grade: 5,
    dok: 3,
    domain: 'Number & Operations — Fractions',
    standard: '5.NF.B.5',
    standardUrl: 'https://www.thecorestandards.org/Math/Content/5/NF/',
    standardText: 'Reason about multiplication as scaling: compare products using a factor’s size relative to 1, and explain why a positive quantity grows, shrinks, or stays the same.',
    alignmentEvidence: 'Students compare products without calculating them and explain the effect of fraction factors below, equal to, and above 1.',
    type: 'Constructed response',
    points: 4,
    stem: (
      <>
        <p>Amira says:</p>
        <blockquote className="quote">“24 × <Frac n={7} d={8} /> is greater than 24 × <Frac n={5} d={4} />, because 7 is greater than 5.”</blockquote>
        <p><strong>Do not find the exact answers to the multiplication problems.</strong></p>
        <ol>
          <li>Is Amira right? Compare each answer with 24 to explain your thinking.</li>
          <li>Start with any number greater than 0. Write a rule for multiplying it by a fraction less than 1, equal to 1, or greater than 1. Use fractions greater than 0. Explain why your rule works in all three cases.</li>
        </ol>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Grade 5 DOK 3: explain whether Amira is right and explain your rule for all three cases.' }],
    key: (
      <p>Amira is incorrect. Since <Frac n={7} d={8} /> is less than 1, its product with 24 is less than 24. Since <Frac n={5} d={4} /> is greater than 1, its product with 24 is greater than 24. Therefore 24 × <Frac n={7} d={8} /> &lt; 24 × <Frac n={5} d={4} />.</p>
    ),
    sample: (
      <>
        <p>Start with a number greater than 0 and use a fraction greater than 0. A fraction less than 1 gives less than one full group, so the answer is smaller than the starting number. A fraction equal to 1 gives exactly one full group, so the answer stays the same. A fraction greater than 1 gives more than one full group, so the answer is larger.</p>
      </>
    ),
    rubric: [{
      title: 'Scoring rubric · 4 points; add the four criteria',
      rows: [
        { score: 'Comparison · 1', text: 'Rejects Amira’s claim and correctly orders the two given products.' },
        { score: 'Justification · 1', text: 'Explains why the first product is below 24 and the second is above 24 using the fraction factors relative to 1, without relying on exact products.' },
        { score: 'Rule · 1', text: 'States all three cases correctly for a positive starting number and positive fraction factors: less than 1, equal to 1, and greater than 1.' },
        { score: 'Reasoning · 1', text: 'Explains all three cases using less than one full group, exactly one full group, and more than one full group of the starting quantity.' },
        { score: '0 per criterion', text: 'Award 0 for each criterion that is absent or incorrect. Exact products alone do not earn the justification or reasoning points. No response earns 0 total.' },
      ],
    }],
    dokWhy: 'Critique a claim and defend a general rule using the structure of multiplication.',
  },
]
