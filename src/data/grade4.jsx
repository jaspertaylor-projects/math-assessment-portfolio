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
    domain: 'Number & Operations in Base Ten',
    standard: '4.NBT.B.5',
    standardText: 'Multiply multi-digit whole numbers using place value and properties of operations; show and explain the calculation.',
    standardUrl: 'https://www.thecorestandards.org/Math/Content/4/NBT/B/5/',
    alignmentEvidence: 'Students multiply two two-digit numbers and explain how their calculation uses place value.',
    type: 'Constructed response',
    points: 3,
    stem: (
      <>
        <p>A school orders 24 boxes of pencils. Each box has 36 pencils.</p>
        <p>How many pencils does the school order? Show your work and explain how place value helps you multiply.</p>
      </>
    ),
    blocks: [{ kind: 'response', label: 'Find the total number of pencils. Show your work and explain your place-value thinking.' }],
    key: <p><strong>864 pencils.</strong> 24 × 36 = 864. Accept any valid place-value method with an explanation.</p>,
    sample: (
      <p>
        I split 36 into 30 and 6. I found 24 × 30 = 720 and 24 × 6 = 144.
        Then I added 720 + 144 = 864 pencils. Since 30 is 3 tens, 24 × 30 is
        72 tens, or 720. That is why I used 720 instead of 72.
      </p>
    ),
    rubric: [{
      title: 'Scoring rubric · 3 points total; add the three criteria',
      rows: [
        { score: 'Answer · 1', text: 'Finds 864 pencils.' },
        { score: 'Method · 1', text: 'Shows a valid place-value method for 24 × 36, using equations, an area model, or a correctly organized algorithm. A minor arithmetic error does not lose this point if the place-value structure is correct.' },
        { score: 'Explanation · 1', text: 'Explains a place-value relationship used in the calculation, such as why 24 × 30 gives 72 tens rather than 72 ones. Accept equivalent reasoning for another valid method.' },
        { score: '0 per criterion', text: 'Award 0 for each criterion that is missing or incorrect. A blank or unrelated response earns 0 total.' },
      ],
    }],
    dokWhy: 'Students connect a multi-digit multiplication method to the value of its digits and explain why their calculation works.',
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
        <p>Leo says, “A larger numerator always means a larger fraction.”</p>
        <p>
          Is Leo right? Choose two fractions of the same whole with different numerators and denominators.
          Use denominators from 2, 3, 4, 6, 8, or 12.
        </p>
        <p>
          Compare them using &lt;, &gt;, or =. Explain your comparison and what it shows about Leo’s claim.
        </p>
        <p>
          When does comparing numerators work? Write a rule and explain why.
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
