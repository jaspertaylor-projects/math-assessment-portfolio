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
    alignmentEvidence: 'The response rounds a number with thousandths to the nearest hundredth.',
    type: 'Short response',
    points: 1,
    title: 'Round a decimal',
    stem: <p>Round <strong>6.478</strong> to the nearest hundredth. Write the rounded number.</p>,
    blocks: [{ kind: 'response', label: 'Grade 5 DOK 1: write 6.478 rounded to the nearest hundredth.' }],
    key: <p><strong>6.48.</strong> The thousandths digit is 8, so the hundredths digit increases by 1.</p>,
    sample: <p>6.48</p>,
    rubric: [{
      title: 'Scoring rubric · 1 point',
      rows: [
        { score: '1', text: 'Writes 6.48. An equivalent form such as 6.480 is accepted.' },
        { score: '0', text: 'Gives another value or no response.' },
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
    alignmentEvidence: 'The equation and equal-parts explanation interpret three fourths of two thirds of one original pan.',
    type: 'Constructed response',
    points: 3,
    title: 'A fraction of the cornbread',
    stem: (
      <>
        <p>There is <Frac n={2} d={3} /> of a pan of cornbread left. Sam eats <Frac n={3} d={4} /> of the cornbread that is left.</p>
        <p>What fraction of the <strong>original full pan</strong> does Sam eat? Write an equation and explain how equal-size parts of the original pan show your answer. You may describe the parts in words.</p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Grade 5 DOK 2: give the fraction of the original pan, an equation, and an equal-parts explanation.' }],
    key: <p>Sam eats <strong>one half of the original pan</strong>: <Frac n={3} d={4} /> × <Frac n={2} d={3} /> = <Frac n={6} d={12} /> = <Frac n={1} d={2} />.</p>,
    sample: (
      <p>Imagine dividing the full pan into 12 equal pieces. The two thirds left is 8 pieces. Divide those 8 pieces into 4 equal groups of 2 pieces each. Sam eats 3 groups, or 6 pieces. That is 6 out of the original 12 pieces, so he eats one half of the full pan.</p>
    ),
    rubric: [{
      title: 'Scoring rubric · 3 points; add the three criteria',
      rows: [
        { score: 'Equation · 1', text: 'Represents the situation with 3/4 × 2/3, or an equivalent equation that takes three of four equal parts of 2/3.' },
        { score: 'Answer · 1', text: 'Identifies 1/2 of the original pan; an equivalent fraction is accepted.' },
        { score: 'Explanation · 1', text: 'Describes equal-size parts and connects the portion eaten to the original whole, rather than stating only a multiplication rule.' },
        { score: '0 per criterion', text: 'Award 0 for each criterion that is absent or incorrect. No response earns 0 total.' },
      ],
    }],
    dokWhy: 'Represent a fraction of a fraction and connect the calculation to an equal-parts explanation.',
  },
  {
    id: 9,
    grade: 5,
    dok: 3,
    domain: 'Number & Operations — Fractions',
    standard: '5.NF.B.5',
    standardUrl: 'https://www.thecorestandards.org/Math/Content/5/NF/',
    standardText: 'Reason about multiplication as scaling: compare products using a factor’s size relative to 1, and explain why a positive quantity grows, shrinks, or stays the same.',
    alignmentEvidence: 'Students compare products without calculating them, construct a counterexample, and explain the effect of fraction factors below, equal to, and above 1.',
    type: 'Constructed response',
    points: 4,
    title: 'Does a bigger numerator mean a bigger product?',
    stem: (
      <>
        <p>Amira says:</p>
        <blockquote className="quote">“24 × <Frac n={7} d={8} /> is greater than 24 × <Frac n={5} d={4} />, because 7 is greater than 5.”</blockquote>
        <p>Decide whether Amira is correct. <strong>Do not calculate the exact products.</strong> Use 24 as a benchmark to justify your comparison.</p>
        <p>Then choose two different positive fraction factors of your own that show why comparing numerators alone can lead to the wrong conclusion. Explain your example without finding the exact products.</p>
        <p>Write a corrected rule that describes what happens when a positive number is multiplied by a positive fraction less than 1, equal to 1, or greater than 1.</p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Grade 5 DOK 3: critique Amira, create and explain a counterexample, and write a corrected scaling rule.' }],
    key: (
      <p>Amira is incorrect. Since <Frac n={7} d={8} /> is less than 1, its product with 24 is less than 24. Since <Frac n={5} d={4} /> is greater than 1, its product with 24 is greater than 24. Therefore 24 × <Frac n={7} d={8} /> &lt; 24 × <Frac n={5} d={4} />.</p>
    ),
    sample: (
      <p>My example is 24 × 9/10 and 24 × 3/2. Although 9 is greater than 3, nine tenths gives less than one whole group of 24, and three halves gives more than one group of 24. The first product is smaller. For a positive starting number, a positive factor less than 1 makes the product smaller, a factor equal to 1 keeps it the same, and a factor greater than 1 makes it larger. The size of the fraction, including its denominator, matters.</p>
    ),
    rubric: [{
      title: 'Scoring rubric · 4 points; add the four criteria',
      rows: [
        { score: 'Comparison · 1', text: 'Rejects Amira’s claim and correctly orders the two given products.' },
        { score: 'Justification · 1', text: 'Explains why the first product is below 24 and the second is above 24 using the fraction factors relative to 1, without relying on exact products.' },
        { score: 'Counterexample · 1', text: 'Creates a different valid pair with a larger numerator but a smaller product, and justifies the comparison through scaling without exact multiplication.' },
        { score: 'Rule · 1', text: 'States all three cases correctly for a positive starting number and positive fraction factors: less than 1, equal to 1, and greater than 1.' },
        { score: '0 per criterion', text: 'Award 0 for each criterion that is absent or incorrect. Exact products alone do not earn the justification or counterexample points. No response earns 0 total.' },
      ],
    }],
    dokWhy: 'Critique a claim, create a counterexample, and defend a general rule using the structure of multiplication.',
  },
]
