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
    alignmentEvidence: 'The written number shows whether the student can round a five-digit whole number to the thousands place.',
    type: 'Short response',
    points: 1,
    title: 'Round to the nearest thousand',
    stem: <p>Write 64,782 rounded to the nearest thousand.</p>,
    blocks: [{ kind: 'response', label: 'Grade 4 DOK 1: 64,782 rounded to the nearest thousand' }],
    key: <p><strong>65,000.</strong></p>,
    sample: <p>65,000</p>,
    rubric: [
      {
        title: 'Scoring rubric',
        rows: [
          { score: '1', text: 'Writes 65,000; an explanation is not required.' },
          { score: '0', text: 'Gives a different answer or no answer.' },
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
    title: 'Same amount, smaller pieces',
    stem: (
      <>
        <p>The strip shows <Frac n={3} d={4} /> shaded. The entire strip is one whole.</p>
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
          Imagine splitting <strong>each fourth into three equal smaller parts</strong>, without changing the strip
          or the shaded amount. What fraction names the shaded amount now? Write an equation showing the equivalent
          fractions. Explain how the number and size of the parts change, and why the fractions are equal.
        </p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Grade 4 DOK 2: equivalent fraction, equation, and explanation of the strip model' }],
    key: <p><Frac n={3} d={4} /> = <Frac n={9} d={12} />. There are 12 equal parts in all, with 9 shaded.</p>,
    sample: (
      <p>
        Each fourth becomes 3 twelfths. There are 4 × 3 = 12 equal parts in the whole strip and 3 × 3 = 9 shaded
        parts. So 3/4 = (3 × 3)/(4 × 3) = 9/12. The pieces are smaller and there are more of them, but the same
        part of the same strip is shaded.
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
    title: 'Can the numerator settle it?',
    stem: (
      <>
        <p>Leo makes this claim about fractions of the same whole:</p>
        <blockquote className="quote">“If two fractions have different numerators and different denominators, the fraction with the greater numerator is always greater.”</blockquote>
        <p>
          Decide whether Leo is correct. Create your own pair of fractions to test his claim. Use denominators
          from 2, 3, 4, 6, 8, or 12. Write a comparison with &lt;, &gt;, or = and justify it with equivalent
          fractions, a benchmark, or a fraction model described in words.
        </p>
        <p>
          Explain what your example proves about the word <strong>always</strong>. Then write a corrected rule
          for when comparing numerators does work. Explain why your corrected rule works for every pair it describes.
        </p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Grade 4 DOK 3: original fraction counterexample, justification, and corrected rule' }],
    key: <p>The claim is false. A valid counterexample must have different numerators and denominators, with the greater numerator belonging to the smaller or equal fraction. A corrected rule must specify equal-sized fractional parts of the same whole.</p>,
    sample: (
      <>
        <p>
          Leo is incorrect. Compare 4/6 and 3/4 of the same whole: 4/6 = 8/12 and 3/4 = 9/12, so 4/6 &lt; 3/4
          even though 4 &gt; 3. One counterexample is enough to disprove an “always” claim.
        </p>
        <p>
          A corrected rule is: when fractions of the same whole have the same denominator, the one with the greater
          numerator is greater. The denominator fixes the size of each part. Counting more of those equal-sized
          parts gives more of the whole. Fractions with different denominators can first be renamed using a common denominator.
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
