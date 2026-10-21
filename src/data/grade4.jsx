import { Frac } from '../components/Math.jsx'

export const grade4Items = [
  {
    id: 4,
    grade: 4,
    dok: 1,
    domain: 'Number & Operations in Base Ten',
    standard: '4.NBT.A.3',
    standardText: 'Round multi-digit whole numbers to a specified place using place value.',
    standardUrl: 'https://www.thecorestandards.org/Math/Content/4/NBT/A/3/',
    alignmentEvidence: 'The student selects the result of rounding a five-digit whole number to the thousands place.',
    type: 'Multiple choice',
    points: 1,
    stem: <p>Round 64,782 to the nearest thousand. Choose one answer.</p>,
    blocks: [
      {
        kind: 'choice',
        options: [
          { id: 'A', content: '64,000', note: '64,782 is closer to 65,000 than to 64,000.' },
          { id: 'B', content: '64,800', note: 'This is 64,782 rounded to the nearest hundred.' },
          { id: 'C', content: '65,000', correct: true, note: '64,782 is closer to 65,000 than to 64,000.' },
          { id: 'D', content: '60,000', note: 'This is 64,782 rounded to the nearest ten thousand.' },
        ],
      },
    ],
    key: <p><strong>C. 65,000.</strong></p>,
    rubric: [
      {
        title: 'Scoring rubric',
        rows: [
          { score: '1', text: 'Selects C (65,000); an explanation is not required.' },
          { score: '0', text: 'Selects a different answer or no answer.' },
        ],
      },
    ],
    dokWhy: 'One routine place-value rounding procedure.',
  },
  {
    id: 5,
    grade: 4,
    dok: 2,
    domain: 'Number & Operations — Fractions',
    standard: '4.NF.A.1',
    standardText: 'Explain equivalent fractions with a fraction model, including how the number and size of equal parts change.',
    standardUrl: 'https://www.thecorestandards.org/Math/Content/4/NF/A/1/',
    alignmentEvidence: 'The student repartitions a fraction-strip model and explains why multiplying both counts by three preserves the shaded amount.',
    type: 'Constructed response',
    points: 3,
    stem: (
      <>
        <p>The strip is one whole. <Frac n={3} d={4} /> of it is shaded.</p>
        <figure>
          <svg viewBox="0 0 324 76" role="img" aria-labelledby="grade4-fraction-strip-title" style={{ width: '100%', maxWidth: '24rem', height: 'auto' }}>
            <title id="grade4-fraction-strip-title">One rectangular strip divided into four equal parts. Three parts are shaded.</title>
            <rect x="12" y="12" width="300" height="48" fill="#fff" />
            <rect x="12" y="12" width="225" height="48" fill="#acc4ac" />
            <rect x="12" y="12" width="300" height="48" fill="none" stroke="#284d3b" strokeWidth="2" />
            <path d="M87 12V60 M162 12V60 M237 12V60" stroke="#284d3b" strokeWidth="2" />
          </svg>
          <figcaption>Three of four equal parts are shaded.</figcaption>
        </figure>
        <p>
          Imagine splitting <strong>each fourth into 3 equal smaller parts</strong>. Keep the whole strip and
          the shaded amount the same.
        </p>
        <p>What fraction of the strip is shaded now? Write an equation to show that the two fractions are equal.</p>
        <p>Tell how the number of parts and the size of each part change. Explain why both fractions show the same amount.</p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Write your fraction, equation, and explanation about the strip.' }],
    key: <p><Frac n={3} d={4} /> = <Frac n={9} d={12} />. There are 12 equal parts in all, with 9 shaded.</p>,
    sample: (
      <p>
        Each fourth is split into 3 smaller equal parts. There are 4 × 3 = 12 equal parts in the whole strip
        and 3 × 3 = 9 shaded parts. So 3/4 = 9/12. There are more pieces, and each piece is smaller. The same
        amount of the same strip is still shaded, so the fractions are equal.
      </p>
    ),
    rubric: [
      {
        title: 'Scoring rubric — 3 points total',
        rows: [
          { score: '1 — Equation', text: 'Writes the correct equivalent fraction 9/12 and an equality relating it to 3/4.' },
          { score: '1 — Model', text: 'Explains that each fourth becomes three smaller equal parts, giving 12 equal parts in all and 9 shaded parts.' },
          { score: '1 — Reasoning', text: 'Explains that the smaller parts cover the same shaded region of the same whole, so the value stays equal.' },
          { score: '0', text: 'Award 0 for each criterion without correct supporting evidence; a blank or unrelated response earns 0 total.' },
        ],
      },
    ],
    dokWhy: 'Connects a repartitioned visual model, an equation, and an explanation of fraction equivalence.',
  },
  {
    id: 6,
    grade: 4,
    dok: 3,
    domain: 'Number & Operations — Fractions',
    standard: '4.NF.A.2',
    standardText: 'Compare fractions with different numerators and denominators, justify the comparison, and use comparison symbols for fractions of the same whole.',
    standardUrl: 'https://www.thecorestandards.org/Math/Content/4/NF/A/2/',
    alignmentEvidence: 'The student creates and justifies an unlike-fraction comparison, then explains how a common unit makes numerator comparison valid.',
    type: 'Constructed response',
    points: 4,
    stem: (
      <>
        <p>Leo says this about fractions of the same whole:</p>
        <blockquote className="quote">“When two fractions have different numerators and different denominators, the one with the larger numerator is always greater.”</blockquote>
        <p>
          Is Leo right? Make up your own pair of fractions that proves your answer. Use fractions of the same
          whole, with different numerators and different denominators. Choose denominators from 2, 3, 4,
          6, 8, or 12.
        </p>
        <p>
          Compare your fractions using &lt;, &gt;, or =. Show why your comparison is correct. You can use equal
          fractions, a familiar fraction such as 1/2, or a fraction drawing that you describe in words.
        </p>
        <p>
          Explain what your example tells you about the word <strong>always</strong>. Then write a rule that
          tells when looking only at the numerators works. Explain why your rule works every time it applies.
        </p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Write your fractions, comparison, explanation, and new rule.' }],
    key: <p>The claim is false. A valid counterexample must have different numerators and denominators, with the greater numerator belonging to the smaller or equal fraction. A corrected rule must specify equal-sized fractional parts of the same whole.</p>,
    sample: (
      <>
        <p>
          Leo is wrong. I used 4/6 and 3/4 of the same whole. Since 4/6 = 8/12 and 3/4 = 9/12, I know
          4/6 &lt; 3/4 even though 4 &gt; 3. My example shows that Leo's rule does not work every time, so
          the word “always” is wrong.
        </p>
        <p>
          My rule is: for fractions of the same whole with the same denominator, the fraction with the larger
          numerator is greater. With a common denominator, the parts are the same size. More parts of that
          size always give more of the whole. If the denominators are different, I can first write equal
          fractions with the same denominator.
        </p>
      </>
    ),
    rubric: [
      {
        title: 'Scoring rubric — 4 points total',
        rows: [
          { score: '1 — Counterexample', text: 'Creates two fractions with different numerators and denominators for which the greater numerator does not give a greater fraction, and records the correct comparison symbol.' },
          { score: '1 — Evidence', text: 'Justifies the comparison using correct equivalent fractions, a benchmark, or a valid fraction model referring to the same whole.' },
          { score: '1 — Claim', text: 'Rejects the always claim and explains that one counterexample is sufficient to disprove it.' },
          { score: '1 — General rule', text: 'States the same-denominator, same-whole condition and explains that counting more equal-sized parts gives a greater fraction.' },
          { score: '0', text: 'Award 0 for each criterion without correct supporting evidence; a blank or unrelated response earns 0 total.' },
        ],
      },
    ],
    dokWhy: 'Builds an original counterexample, evaluates a universal claim, and defends a corrected general rule.',
  },
]
