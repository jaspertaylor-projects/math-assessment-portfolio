import { Frac, Mixed } from '../components/Math.jsx'

export const grade4Items = [
  {
    id: 5,
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
    id: 6,
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
    id: 7,
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
  {
    id: 8,
    grade: 4,
    dok: 4,
    domain: 'Number & Operations — Fractions',
    standard: '4.NF.B.4c',
    secondary: ['4.NF.B.3d'],
    standardText: 'Solve word problems by multiplying a fraction by a whole number and represent the quantities with equations or models.',
    standardUrl: 'https://www.thecorestandards.org/Math/Content/4/NF/B/4/c/',
    alignmentEvidence: 'Batch counts multiply quarter-cup ingredients by whole numbers; the investigation combines those amounts and subtracts them from available stock.',
    type: 'Extended performance task',
    duration: 'Three 35–45 minute sessions on separate days',
    points: 10,
    title: 'A paint plan that can adapt',
    stem: (
      <>
        <p>
          Plan the paint for a school art day. Work over <strong>three sessions on separate days</strong>.
          Keep your first plan, your review notes, and your revision. No paint is mixed until your final plan is approved.
        </p>
        <div className="table-wrap">
          <table className="data-table">
            <caption>Recipe card — each batch makes 1 cup, enough for 4 paint pots</caption>
            <thead><tr><th scope="col">Shade</th><th scope="col">Red paint per batch</th><th scope="col">Blue paint per batch</th></tr></thead>
            <tbody>
              <tr><th scope="row">A</th><td><Frac n={3} d={4} /> cup</td><td><Frac n={1} d={4} /> cup</td></tr>
              <tr><th scope="row">B</th><td><Frac n={1} d={4} /> cup</td><td><Frac n={3} d={4} /> cup</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Each student gets one pot. Make only <strong>whole batches</strong>, use the recipes exactly, and make
          exactly enough pots for the students. Make at least 8 pots of each shade. Students may use either shade,
          but your goal is to have the fewest students change their preferred shade.
        </p>
        <p>
          <strong>Starting information:</strong> 32 students will attend. Their choices are 18 for A and 14 for B.
          There are 5 cups of red paint and 5 cups of blue paint.
        </p>
      </>
    ),
    blocks: [
      {
        kind: 'response',
        label: 'Day 1 · Plan and investigate',
        prompt: (
          <>
            <p>
              Decide how to organize and compare all possible
              whole-batch plans. Explain how you will check the pots, each paint color, and students’ choices.
              Use equations to connect batches to fractional cups of each color.
            </p>
            <p>
              Record your comparisons in words or a table. Explain how you know you have considered every plan
              that could work. Choose a first plan that changes the fewest choices. If plans tie, use the paint
              left over to explain your choice. Ask a classmate or teacher to check one assumption or calculation;
              record their feedback and your response.
            </p>
          </>
        ),
      },
      {
        kind: 'response',
        label: 'Day 2 · Review and revise',
        prompt: (
          <>
            <p>
              No paint has been mixed. Now 36 students will
              attend: 22 prefer A and 14 prefer B. A spill leaves <strong>5 cups of red and 3 cups of blue</strong>.
            </p>
            <p>
              You may spend up to $6 on more paint. Either color is sold in a 1-cup jar for $4 or a 2-cup jar for
              $6. Decide what to buy and revise your batch plan. Compare the purchase options, show the amount of
              each color used and left over, and explain how your plan meets the rules and changes the fewest choices.
              Explain why having enough total cups alone does not guarantee a workable plan.
            </p>
          </>
        ),
      },
      {
        kind: 'response',
        label: 'Day 3 · Test and defend',
        prompt: (
          <>
            <p>
              Have a classmate or teacher review your revised plan.
              Record a useful check or question and explain any changes you make. Then write a final recommendation
              that connects the recipe card, attendance choices, paint stock, and purchase budget.
            </p>
            <p>
              Use the full stock after your purchase, before any paint is mixed. How many students could that stock
              serve at most? Prove both that your number is possible and that a greater number is impossible.
              Write a rule for checking another attendance number that is a multiple of 4. Test the rule for
              <strong> 40 and 44 students</strong>, keeping the same recipes and the requirement of at least 8 pots of each shade.
            </p>
          </>
        ),
      },
    ],
    key: (
      <>
        <p>
          Initially, either 4 batches of A and 4 of B, or 5 of A and 3 of B, changes only 2 students’ choices.
          After the update, buy a 2-cup jar of blue paint for $6 and make <strong>5 batches of A and 4 of B</strong>.
          This makes 20 A pots and 16 B pots, so 2 students change choices.
        </p>
        <p>
          The revised plan uses <Mixed w={4} n={3} d={4} /> cups of red and <Mixed w={4} n={1} d={4} /> cups
          of blue, leaving <Frac n={1} d={4} /> cup red and <Frac n={3} d={4} /> cup blue. The purchased stock can
          serve at most <strong>40 students</strong>; 5 batches of each shade use exactly 5 cups of each color.
        </p>
      </>
    ),
    sample: (
      <>
        <p>
          <strong>First plan.</strong> I will find the number of batches, list every way to split those batches
          between the shades, and calculate cups of each color and changes of choice. For 32 students, 32 ÷ 4 = 8
          batches. Each shade needs at least 2 batches. So A can have 2, 3, 4, 5, or 6 batches; B gets the remaining
          batches. This list includes all possibilities.
        </p>
        <div className="table-wrap">
          <table className="data-table">
            <caption>Session 1 comparison — cups are written in fourths</caption>
            <thead><tr><th scope="col">A / B batches</th><th scope="col">Red cups</th><th scope="col">Blue cups</th><th scope="col">Students changing choices</th></tr></thead>
            <tbody>
              <tr><th scope="row">2 / 6</th><td>12/4 = 3</td><td>20/4 = 5</td><td>10</td></tr>
              <tr><th scope="row">3 / 5</th><td>14/4</td><td>18/4</td><td>6</td></tr>
              <tr><th scope="row">4 / 4</th><td>16/4 = 4</td><td>16/4 = 4</td><td>2</td></tr>
              <tr><th scope="row">5 / 3</th><td>18/4</td><td>14/4</td><td>2</td></tr>
              <tr><th scope="row">6 / 2</th><td>20/4 = 5</td><td>12/4 = 3</td><td>6</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          I choose 4 of each: 16 pots of each shade means 2 students who chose A use B. The 5-and-3 plan also changes
          2 choices. I choose 4-and-4 because it leaves 1 cup of each color, which seems more useful for later mixing.
          My reviewer asks whether I forgot an A-and-B split. I check that fewer than 2 batches of either shade
          would break the 8-pot rule.
        </p>
        <p>
          <strong>Revised plan.</strong> Now 36 ÷ 4 = 9 batches are needed. Buying either size of red jar leaves
          only 3 cups of blue. Even the least-blue allowed plan, 7 A batches and 2 B batches, needs
          7 × 1/4 + 2 × 3/4 = 13/4 cups of blue, more than 3 cups. Those purchases cannot work.
        </p>
        <p>
          A 1-cup blue jar leaves 5 cups red and 4 cups blue. With 5 A and 4 B batches, red use is
          5 × 3/4 + 4 × 1/4 = 19/4 and blue use is 5 × 1/4 + 4 × 3/4 = 17/4, which is more than 4 cups blue.
          Shifting to 6 A and 3 B brings blue use down to 15/4 but raises red use to 21/4, more than 5 cups.
          Fewer A batches need still more blue, and more A batches need still more red. So this jar cannot work,
          even though 9 total cups sounds sufficient. Two 1-cup jars would cost $8, over budget.
        </p>
        <p>
          I buy the 2-cup blue jar for $6. Now there are 5 cups of each color. Only 4 A / 5 B and 5 A / 4 B fit:
          they use 17/4 red and 19/4 blue, or 19/4 red and 17/4 blue. At 3 A / 6 B, blue use is 21/4;
          at 6 A / 3 B, red use is 21/4. Moving farther in either direction needs even more of that color.
          The 4-and-5 plan changes 6 students’ choices; 5-and-4 changes 2. I choose 5 A and 4 B.
          Leftovers are 20/4 − 19/4 = 1/4 cup red and 20/4 − 17/4 = 3/4 cup blue.
        </p>
        <p>
          <strong>Final check and rule.</strong> My reviewer asks if I am counting the leftover paint twice. I clarify
          that this capacity test starts with all 5 cups of each color, before mixing. There are 10 cups total,
          enough for at most 10 batches or 40 pots. Five batches of each shade use 5 × 3/4 + 5 × 1/4 = 5 cups
          of each color, so 40 really is possible. Every additional pot needs paint, and 44 students would need
          11 batches, or 11 cups; that is more than the 10 cups available.
        </p>
        <p>
          For another attendance number divisible by 4, divide by 4 to get the needed batches. List whole-number
          splits with at least 2 batches of each shade. For every split, calculate red cups as A batches × 3/4
          plus B batches × 1/4, and blue cups as A batches × 1/4 plus B batches × 3/4. A split works only when
          neither color needs more than its stock. For 40 students, 5-and-5 passes both checks. For 44 students,
          no split can pass because every split needs 11 cups altogether.
        </p>
      </>
    ),
    rubric: [
      {
        title: 'Scoring rubric — Investigation plan (2 points)',
        rows: [
          { score: '2', text: 'Plans a systematic comparison that connects batches, fractional ingredient amounts, student preferences, and all constraints; explains how to find all possible batch splits and records initial review feedback.' },
          { score: '1', text: 'Provides a useful comparison plan but omits a constraint, a completeness explanation, or initial review feedback.' },
          { score: '0', text: 'Provides no usable investigation plan.' },
        ],
      },
      {
        title: 'Scoring rubric — Initial evidence (2 points)',
        rows: [
          { score: '2', text: 'Compares all five feasible initial splits using correct fraction equations or a correct calculation table; identifies the two plans with 2 changes of choice and justifies a first choice using leftovers.' },
          { score: '1', text: 'Gives one valid initial plan with mostly correct ingredient calculations, but the comparison or choice justification is incomplete.' },
          { score: '0', text: 'Gives no mathematically supported initial plan.' },
        ],
      },
      {
        title: 'Scoring rubric — Revised decision (3 points)',
        rows: [
          { score: '3', text: 'Justifies buying the 2-cup blue jar by ruling out the other affordable purchases; chooses 5 A / 4 B, correctly finds 19/4 red and 17/4 blue used and 1/4 red and 3/4 blue left, and compares preference changes for the feasible plans.' },
          { score: '2', text: 'Gives the correct purchase and batch plan with correct ingredient amounts, but the alternative-purchase comparison, leftovers, or preference justification is incomplete.' },
          { score: '1', text: 'Shows a valid part of the revised reasoning, such as a correct ingredient calculation or one correctly rejected purchase, but does not establish a complete workable plan.' },
          { score: '0', text: 'Shows no correct revised reasoning.' },
        ],
      },
      {
        title: 'Scoring rubric — Review and transfer (3 points)',
        rows: [
          { score: '3', text: 'Responds to review feedback; synthesizes the final recommendation; proves a maximum of 40 using both a feasible 5-and-5 plan and the 10-cup upper limit; states a valid ingredient-check rule and applies it correctly to 40 and 44 students.' },
          { score: '2', text: 'Correctly establishes the 40-student capacity and tests 44, but the general rule, feedback response, or final synthesis is incomplete.' },
          { score: '1', text: 'Gives a supported correct capacity test or useful ingredient-check rule, but does not establish the maximum or complete the review.' },
          { score: '0', text: 'Provides no supported capacity reasoning or review.' },
        ],
      },
    ],
    dokWhy: 'An extended investigation combines recipe, preference, inventory, and cost data; requires a planned search and review; revises the model after new constraints; and transfers the reasoning to a capacity rule.',
  },
]
