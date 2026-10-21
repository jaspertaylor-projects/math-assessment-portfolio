import { Frac, Mixed, Blank, Eq } from '../components/Math.jsx'
import { Pizzas } from '../components/Shapes.jsx'

export const items = [
  {
    id: 1,
    grade: 3,
    dok: 1,
    domain: 'Operations & Algebraic Thinking',
    standard: '3.OA.A.4',
    standardText:
      'Determine the unknown whole number in a multiplication or division equation relating three whole numbers.',
    type: 'Multiple choice',
    points: 1,
    title: 'Find the unknown number',
    stem: (
      <>
        <p>What number makes this equation true?</p>
        <Eq>
          <Blank /> ÷ 6 = 7
        </Eq>
      </>
    ),
    blocks: [
      {
        kind: 'choice',
        options: [
          { id: 'A', content: '1', note: 'Subtracted the two numbers (7 − 6) instead of using the relationship between multiplication and division.' },
          { id: 'B', content: '13', note: 'Added the two numbers (6 + 7). The student picked an operation without reasoning about the equation.' },
          { id: 'C', content: '35', note: 'Multiplication fact error. The student likely skip-counted by sevens and stopped one group short (5 × 7).' },
          { id: 'D', content: '42', correct: true, note: 'Correct. 42 ÷ 6 = 7, because 6 × 7 = 42.' },
        ],
      },
    ],
    key: <p><strong>D — 42.</strong> Division is the inverse of multiplication: if 6 × 7 = 42, then 42 ÷ 6 = 7.</p>,
    dokWhy:
      'Students recall a basic fact and apply the inverse relationship between multiplication and division in a single, routine step. The unknown is placed in the dividend, which is less familiar than “42 ÷ 6 = ?”, so the item checks that students understand the relationship rather than recognizing a format. It adds no decision-making, so it stays DOK 1.',
  },

  {
    id: 2,
    grade: 3,
    dok: 2,
    domain: 'Number & Operations — Fractions',
    standard: '3.NF.A.3d',
    standardText:
      'Compare two fractions with the same numerator or the same denominator by reasoning about their size. Record the results of comparisons with the symbols >, =, or <, and justify the conclusions.',
    type: 'Multiple select',
    points: 1,
    title: 'Comparing fractions',
    stem: (
      <p>
        Which <strong>two</strong> comparisons are true? Select the <strong>two</strong> correct answers.
      </p>
    ),
    blocks: [
      {
        kind: 'choice',
        multiple: true,
        options: [
          {
            id: 'A',
            content: <><Frac n={1} d={6} /> &gt; <Frac n={1} d={4} /></>,
            note: 'Whole-number bias. The student reasons that 6 > 4, so sixths must be greater than fourths. Sixths are smaller pieces of the same whole.',
          },
          {
            id: 'B',
            content: <><Frac n={3} d={8} /> &lt; <Frac n={3} d={6} /></>,
            correct: true,
            note: 'Correct. Same numerator: 3 eighths is less than 3 sixths because eighths are smaller pieces.',
          },
          {
            id: 'C',
            content: <><Frac n={2} d={3} /> = <Frac n={2} d={6} /></>,
            note: 'Attends only to the number of pieces (2 and 2) and ignores the size of the pieces.',
          },
          {
            id: 'D',
            content: <><Frac n={7} d={8} /> &gt; <Frac n={5} d={8} /></>,
            correct: true,
            note: 'Correct. Same denominator: 7 pieces is more than 5 pieces of the same size.',
          },
        ],
      },
    ],
    key: <p><strong>B and D.</strong> 1 point for selecting both correct answers and no incorrect answers.</p>,
    dokWhy:
      'Students must reason about fraction size using two different structures (same numerator and same denominator) and decide whether each of four claims is true. That is conceptual comparison, not a recalled procedure, so the item is DOK 2. The multiple-select format means students can’t find one true statement and stop. Each false option targets a different misconception.',
  },

  {
    id: 3,
    grade: 3,
    dok: 3,
    domain: 'Measurement & Data',
    standard: '3.MD.D.8',
    standardText:
      'Solve real world and mathematical problems involving perimeters of polygons, including … exhibiting rectangles with the same perimeter and different areas or with the same area and different perimeters.',
    type: 'Constructed response',
    points: 2,
    title: 'Same perimeter, same area?',
    stem: (
      <>
        <p>Maya says,</p>
        <blockquote className="quote">“If two rectangles have the same perimeter, they must have the same area.”</blockquote>
        <p>
          Is Maya correct? Draw or describe two rectangles to support your answer. Show the perimeter and the area of
          each rectangle.
        </p>
      </>
    ),
    blocks: [{ kind: 'response', variant: 'grid', label: 'Draw or write your answer.' }],
    sample: (
      <p>
        Maya is <strong>not</strong> correct. A rectangle that is 1 unit by 7 units has a perimeter of 16 units and an
        area of 7 square units. A rectangle that is 3 units by 5 units also has a perimeter of 16 units, but its area
        is 15 square units. They have the same perimeter but different areas.
      </p>
    ),
    rubric: [
      {
        rows: [
          { score: '2', text: 'States that Maya is incorrect AND gives two rectangles with the same perimeter and different areas, with a correct perimeter and area for each.' },
          { score: '1', text: 'Gives a valid pair of rectangles but makes one calculation error, OR gives a correct counterexample without clearly stating a conclusion.' },
          { score: '0', text: 'Agrees with Maya, or the response does not include a valid example.' },
        ],
      },
    ],
    dokWhy:
      'Students must evaluate a mathematical claim, construct their own counterexample, and justify a conclusion (SMP 3). There is no single path or answer, because students choose the dimensions, and they must keep track of perimeter and area at the same time. Critiquing a claim and building evidence against it is DOK 3 thinking.',
  },

  {
    id: 4,
    grade: 4,
    dok: 1,
    domain: 'Number & Operations in Base Ten',
    standard: '4.NBT.A.3',
    standardText: 'Use place value understanding to round multi-digit whole numbers to any place.',
    type: 'Multiple choice',
    points: 1,
    title: 'Rounding to the nearest thousand',
    stem: <p>What is 46,728 rounded to the nearest thousand?</p>,
    blocks: [
      {
        kind: 'choice',
        options: [
          { id: 'A', content: '46,000', note: 'Truncated: dropped the digits after the thousands place without rounding. The hundreds digit is 7, so the number rounds up.' },
          { id: 'B', content: '47,000', correct: true, note: 'Correct. 46,728 is between 46,000 and 47,000 and is closer to 47,000.' },
          { id: 'C', content: '47,700', note: 'Rounded the thousands digit up but did not change the hundreds digit to zero. This is a place-value procedure error.' },
          { id: 'D', content: '50,000', note: 'Rounded to the nearest ten thousand. The student found the wrong place.' },
        ],
      },
    ],
    key: <p><strong>B — 47,000.</strong> The hundreds digit (7) is 5 or greater, so 46,728 rounds up to 47,000.</p>,
    dokWhy:
      'This is a one-step use of a routine place-value procedure, so it is DOK 1. The item is still worth including: the three distractors separate students who truncate, who round only part of the number, and who round to the wrong place. Those are three different errors that call for three different fixes.',
  },

  {
    id: 5,
    grade: 4,
    dok: 2,
    domain: 'Operations & Algebraic Thinking',
    standard: '4.OA.A.3',
    standardText:
      'Solve multistep word problems posed with whole numbers and having whole-number answers using the four operations, including problems in which remainders must be interpreted.',
    type: 'Multiple choice',
    points: 1,
    title: 'Field trip vans',
    stem: (
      <p>
        A school is taking 117 students and 9 teachers on a field trip. Each van can carry 8 people. What is the{' '}
        <strong>fewest</strong> number of vans the school needs so that everyone has a seat?
      </p>
    ),
    blocks: [
      {
        kind: 'choice',
        options: [
          { id: 'A', content: '6', note: 'Reported the remainder (126 ÷ 8 = 15 R6) as the answer.' },
          { id: 'B', content: '15', note: 'Divided correctly but ignored the remainder, which leaves 6 people without a seat. This also catches students who left out the teachers (117 ÷ 8 → 15 vans).' },
          { id: 'C', content: '16', correct: true, note: 'Correct. The leftover 6 people need one more van.' },
          { id: 'D', content: '126', note: 'Found the total number of people and stopped after the first step.' },
        ],
      },
    ],
    key: (
      <p>
        <strong>C — 16.</strong> 117 + 9 = 126 people. 126 ÷ 8 = 15 R6. Fifteen vans carry 120 people, so the
        remaining 6 people need a 16th van.
      </p>
    ),
    dokWhy:
      'Students have to plan a two-step solution (combine, then divide) and decide what the remainder means in this context. Interpreting the remainder is a decision, not a procedure, which makes the item DOK 2. Each distractor shows a different place where the reasoning breaks down, so a wrong answer tells the teacher what to reteach.',
  },

  {
    id: 6,
    grade: 4,
    dok: 2,
    domain: 'Geometry',
    standard: '4.G.A.2',
    standardText:
      'Classify two-dimensional figures based on the presence or absence of parallel or perpendicular lines, or the presence or absence of angles of a specified size.',
    type: 'Technology-enhanced sort',
    points: 2,
    title: 'Sorting shapes by parallel sides',
    stem: (
      <p>
        Sort each shape. Does the shape have <strong>at least one pair of parallel sides</strong>?
      </p>
    ),
    blocks: [
      {
        kind: 'classify',
        bins: [
          { id: 'yes', label: 'Parallel sides' },
          { id: 'no', label: 'No parallel sides' },
        ],
        shapes: [
          { id: 'A', type: 'rectangle', name: 'rectangle', bin: 'yes', note: 'Two pairs of parallel sides.' },
          { id: 'B', type: 'rightTriangle', name: 'right triangle', bin: 'no', note: 'Has perpendicular sides but no parallel sides. This checks whether students confuse perpendicular with parallel.' },
          { id: 'C', type: 'trapezoid', name: 'trapezoid', bin: 'yes', note: 'One pair of parallel sides. It is rotated so the parallel sides aren’t horizontal, which tests the concept rather than a memorized picture.' },
          { id: 'D', type: 'kite', name: 'kite', bin: 'no', note: 'No parallel sides, although its symmetry makes it look “balanced.” Students often sort it into the wrong group.' },
          { id: 'E', type: 'hexagon', name: 'hexagon', bin: 'yes', note: 'A regular hexagon has three pairs of parallel sides.' },
          { id: 'F', type: 'pentagon', name: 'pentagon', bin: 'no', note: 'A regular pentagon has no parallel sides: with an odd number of sides, no side has a side directly opposite it.' },
        ],
      },
    ],
    key: (
      <p>
        <strong>Parallel sides:</strong> A, C, E. <strong>No parallel sides:</strong> B, D, F. 2 points for all six
        correct; 1 point for five correct.
      </p>
    ),
    dokWhy:
      'Students apply a definition to each figure and decide which group it belongs in. Classifying by a property is a typical DOK 2 task. The rotated trapezoid and the look-alike kite make students reason from the property instead of recognizing familiar pictures. Students sort with buttons rather than drag-only controls, so the item works with a keyboard and a screen reader and the format never becomes a barrier.',
  },

  {
    id: 7,
    grade: 4,
    dok: 3,
    domain: 'Number & Operations — Fractions',
    standard: '4.NF.A.2',
    standardText:
      'Compare two fractions with different numerators and different denominators … Recognize that comparisons are valid only when the two fractions refer to the same whole.',
    type: 'Constructed response',
    points: 2,
    title: 'Who ate more pizza?',
    stem: (
      <>
        <p>
          Ava ate <Frac n={1} d={3} /> of a large pizza. Jayden ate <Frac n={1} d={2} /> of a small pizza.
        </p>
        <Pizzas />
        <p>Jayden says,</p>
        <blockquote className="quote">
          “I ate more pizza than Ava, because <Frac n={1} d={2} /> is greater than <Frac n={1} d={3} />.”
        </blockquote>
        <p>Is Jayden’s reasoning correct? Explain your thinking using words, numbers, or drawings.</p>
      </>
    ),
    blocks: [{ kind: 'response', variant: 'lines', label: 'Explain your thinking.' }],
    sample: (
      <p>
        Jayden’s reasoning is <strong>not</strong> correct. You can only compare <Frac n={1} d={2} /> and{' '}
        <Frac n={1} d={3} /> that way when they are parts of the <em>same</em> whole. Ava’s pizza is bigger, so{' '}
        <Frac n={1} d={3} /> of her pizza could be more than <Frac n={1} d={2} /> of Jayden’s small pizza. Jayden
        can’t say he ate more just because <Frac n={1} d={2} /> &gt; <Frac n={1} d={3} />.
      </p>
    ),
    rubric: [
      {
        rows: [
          { score: '2', text: 'States that Jayden’s reasoning is incorrect (or that you can’t tell who ate more) AND explains that the fractions are parts of different-sized wholes, so they can’t be compared directly.' },
          { score: '1', text: 'Notices that the pizzas are different sizes but doesn’t explain why that makes the comparison invalid, OR says Jayden is incorrect with an incomplete explanation.' },
          { score: '0', text: 'Agrees with Jayden, or the explanation relies only on 1/2 > 1/3.' },
        ],
      },
    ],
    dokWhy:
      'The fraction comparison itself is easy, and that is intentional. The demand is in recognizing that the comparison isn’t valid because the wholes are different, then arguing why. Students evaluate someone else’s reasoning and defend a conclusion that goes against the “obvious” answer, which is DOK 3. The item targets the same-whole clause of 4.NF.A.2, which is often skipped. The pizzas are drawn unsliced so the picture supports the context without doing the math.',
  },

  {
    id: 8,
    grade: 5,
    dok: 2,
    domain: 'Number & Operations in Base Ten',
    standard: '5.NBT.B.7',
    standardText:
      'Add, subtract, multiply, and divide decimals to hundredths, using concrete models or drawings and strategies based on place value, properties of operations, and/or the relationship between addition and subtraction.',
    type: 'Multiple choice',
    points: 1,
    title: 'Making change',
    stem: (
      <p>
        Ms. Rivera buys 3 notebooks that cost $2.45 each and 1 pack of pencils that costs $1.89. She pays with a $10
        bill. How much change should she get back?
      </p>
    ),
    blocks: [
      {
        kind: 'choice',
        options: [
          { id: 'A', content: '$0.76', correct: true, note: 'Correct. All three steps were completed accurately.' },
          { id: 'B', content: '$2.65', note: 'Found the change for the notebooks only ($10.00 − $7.35) and left out the pencils.' },
          { id: 'C', content: '$5.66', note: 'Did not multiply. Used the price of one notebook ($10.00 − $4.34).' },
          { id: 'D', content: '$9.24', note: 'Found the total cost but did not subtract to find the change.' },
        ],
      },
    ],
    key: (
      <p>
        <strong>A — $0.76.</strong> 3 × $2.45 = $7.35. $7.35 + $1.89 = $9.24. $10.00 − $9.24 = $0.76.
      </p>
    ),
    dokWhy:
      'The item requires three decimal operations that the student must choose and put in order. Each step is routine, but deciding which operations to use and when makes it DOK 2. The distractors are the answers students get by skipping or stopping at a step, so the item shows whether students can plan a multistep problem as well as compute with decimals.',
  },

  {
    id: 9,
    grade: 5,
    dok: 3,
    domain: 'Number & Operations — Fractions',
    standard: '5.NF.B.5',
    standardText:
      'Interpret multiplication as scaling (resizing), by comparing the size of a product to the size of one factor on the basis of the size of the other factor, without performing the indicated multiplication.',
    type: 'Two-part: matrix + explanation',
    points: 3,
    title: 'Multiplication as scaling',
    stem: null,
    blocks: [
      {
        kind: 'matrix',
        label: 'Part A',
        prompt: (
          <p>
            <strong>Without multiplying</strong>, decide whether each product is less than 18, equal to 18, or greater
            than 18. Select one box in each row.
          </p>
        ),
        columns: ['Less than 18', 'Equal to 18', 'Greater than 18'],
        rows: [
          { id: 'r1', content: <><Frac n={3} d={4} /> × 18</>, answer: 0, note: '3/4 is less than 1, so the product is only part of 18.' },
          { id: 'r2', content: <>18 × <Frac n={7} d={7} /></>, answer: 1, note: '7/7 is another name for 1. This connects to fraction equivalence (5.NF.B.5b).' },
          { id: 'r3', content: <><Mixed w={1} n={1} d={3} /> × 18</>, answer: 2, note: 'The factor is greater than 1, so the product is greater than 18.' },
          { id: 'r4', content: <>18 × <Frac n={99} d={100} /></>, answer: 0, note: 'The large numbers tempt students to say “greater,” but 99/100 is still less than 1.' },
        ],
      },
      {
        kind: 'response',
        variant: 'lines',
        label: 'Part B',
        prompt: (
          <>
            <p>Liam says,</p>
            <blockquote className="quote">“Multiplying always makes a number bigger.”</blockquote>
            <p>Use what you noticed in Part A to explain why Liam is not always correct.</p>
          </>
        ),
      },
    ],
    key: (
      <p>
        <strong>Part A:</strong> less than, equal to, greater than, less than (1 point for all four rows).
      </p>
    ),
    sample: (
      <p>
        <strong>Part B:</strong> Liam is only right when you multiply by a number greater than 1. When you multiply 18
        by a fraction less than 1, like <Frac n={3} d={4} />, you only get part of 18, so the product is smaller.
        Multiplying by a fraction equal to 1, like <Frac n={7} d={7} />, keeps it at 18.
      </p>
    ),
    rubric: [
      {
        title: 'Part B',
        rows: [
          { score: '2', text: 'Explains that the size of the product depends on the other factor: less than 1 gives a smaller product, equal to 1 keeps it the same, and greater than 1 gives a larger product. Uses at least one example.' },
          { score: '1', text: 'Gives a valid counterexample (e.g., 3/4 × 18 < 18) without a general explanation, OR gives a general explanation that is partly unclear.' },
          { score: '0', text: 'Agrees with Liam, or the explanation is incorrect.' },
        ],
      },
    ],
    dokWhy:
      'Part A alone, applying a known rule to each row, would be DOK 2. Part B raises it to DOK 3: students must generalize from specific cases and disprove a common overgeneralization. The instruction “without multiplying” removes the computation route, so the item measures reasoning about structure (SMP 7) rather than arithmetic.',
  },

  {
    id: 10,
    grade: 5,
    dok: 4,
    domain: 'Measurement & Data',
    standard: '5.MD.C.5b',
    secondary: ['5.NBT.B.7', '4.MD.A.3'],
    standardText:
      'Apply the formulas V = l × w × h and V = b × h for rectangular prisms to find volumes of right rectangular prisms with whole-number edge lengths in the context of solving real world and mathematical problems.',
    type: 'Performance task',
    points: 6,
    title: 'The Garden Club',
    stem: (
      <p>
        The Garden Club has <strong>$200</strong> to build one raised garden bed. The money must pay for the frame, the
        soil, and the plants. Use the three sources below to help the club decide what to buy.
      </p>
    ),
    blocks: [
      {
        kind: 'sources',
        sources: [
          {
            title: 'Source 1 · Frame kits',
            body: (
              <div className="table-wrap">
                <table className="data-table">
                  <thead>
                    <tr><th>Kit</th><th>Length</th><th>Width</th><th>Height</th><th>Price</th></tr>
                  </thead>
                  <tbody>
                    <tr><td>A</td><td>4 ft</td><td>4 ft</td><td>1 ft</td><td>$45.00</td></tr>
                    <tr><td>B</td><td>6 ft</td><td>3 ft</td><td>1 ft</td><td>$52.50</td></tr>
                    <tr><td>C</td><td>8 ft</td><td>2 ft</td><td>2 ft</td><td>$68.75</td></tr>
                    <tr><td>D</td><td>6 ft</td><td>4 ft</td><td>1 ft</td><td>$74.25</td></tr>
                  </tbody>
                </table>
              </div>
            ),
          },
          {
            title: 'Source 2 · Soil',
            body: <p>Soil is sold in bags. Each bag holds <strong>2 cubic feet</strong> and costs <strong>$6.75</strong>. The bed must be filled completely.</p>,
          },
          {
            title: 'Source 3 · Planting guide',
            body: <p>Each plant needs <strong>2 square feet</strong> of space on top of the soil. Each plant costs <strong>$3.50</strong>.</p>,
          },
        ],
      },
      {
        kind: 'response',
        variant: 'lines',
        label: 'Part A',
        prompt: <p>For each kit, find the volume of soil needed, the number of bags of soil, the cost of the frame and soil, and the greatest number of plants that will fit. Organize your work in a table.</p>,
      },
      {
        kind: 'response',
        variant: 'lines',
        label: 'Part B',
        prompt: <p>Priya wants the kit that holds the most soil. Marcus wants the kit that can grow the most plants. The total cost of the frame, soil, and plants cannot be more than $200. Which kit do you recommend? Write a recommendation to the club that uses your calculations to respond to both Priya’s and Marcus’s ideas.</p>,
      },
      {
        kind: 'response',
        variant: 'lines',
        label: 'Part C',
        prompt: <p>The club receives a $25 donation, so it now has $225. Does this change your recommendation? Explain why or why not.</p>,
      },
    ],
    key: (
      <>
        <p><strong>Part A</strong></p>
        <div className="table-wrap">
          <table className="data-table">
            <thead>
              <tr><th>Kit</th><th>Volume</th><th>Bags</th><th>Frame + soil</th><th>Plants that fit</th><th>Total with plants</th></tr>
            </thead>
            <tbody>
              <tr><td>A</td><td>16 ft³</td><td>8</td><td>$99.00</td><td>8</td><td>$127.00</td></tr>
              <tr><td>B</td><td>18 ft³</td><td>9</td><td>$113.25</td><td>9</td><td>$144.75</td></tr>
              <tr><td>C</td><td>32 ft³</td><td>16</td><td>$176.75</td><td>8</td><td>$204.75</td></tr>
              <tr><td>D</td><td>24 ft³</td><td>12</td><td>$155.25</td><td>12</td><td>$197.25</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Part B</strong> (more than one defensible answer). Priya’s choice, Kit C, holds the most soil, but
          after the frame and soil only $23.25 is left, enough for 6 plants (6 × $3.50 = $21.00), not the 8 that fit.
          Marcus’s choice, Kit D, grows 12 plants for $197.25. Most students will recommend Kit D, but a recommendation
          for Kit C can earn full credit if it accurately weighs the deeper soil against getting half as many plants.
        </p>
        <p>
          <strong>Part C.</strong> With $225, Kit C can now hold all 8 plants ($204.75). Kit D still grows the most
          plants, because its limit is <em>space</em>, not money: 24 ft² fits only 12 plants. The donation changes what
          Kit C can do, but not which kit grows the most plants.
        </p>
      </>
    ),
    rubric: [
      {
        title: 'Analytic rubric · 6 points',
        rows: [
          { score: 'A · 2', text: 'Volumes, bag counts, costs, and plant counts are correct for all four kits and clearly organized.' },
          { score: 'A · 1', text: 'Method is correct for every kit, with one or two computation errors.' },
          { score: 'B · 2', text: 'Makes a clear recommendation, responds to both Priya’s and Marcus’s ideas, and supports it with accurate total costs that include plants.' },
          { score: 'B · 1', text: 'Makes a reasonable recommendation with limited or partly inaccurate evidence, or responds to only one student’s idea.' },
          { score: 'C · 2', text: 'Rechecks the costs with $225 and explains accurately whether and why the recommendation changes (for example, noting that Kit D is limited by planting area, not money).' },
          { score: 'C · 1', text: 'Rechecks the costs, but the reasoning is incomplete or partly inaccurate.' },
        ],
      },
    ],
    dokWhy:
      'Students combine three sources; choose their own strategies across volume, area, and decimal computation; weigh competing goals that have no single correct answer; and revise their thinking when the conditions change. Multiple sources, more than one valid solution, and sustained reasoning together make this DOK 4. Kit C is a deliberate trap: it has the greatest volume but not the most planting area, which rewards students who keep volume and area separate. DOK 4 doesn’t fit an on-demand item, so this is built as a classroom performance task for one 45–60 minute session.',
  },
]
