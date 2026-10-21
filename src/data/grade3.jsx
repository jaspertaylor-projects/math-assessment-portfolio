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
  {
    id: 4,
    grade: 3,
    dok: 4,
    domain: 'Measurement & Data',
    standard: '3.MD.D.8',
    secondary: ['3.MD.C.7b'],
    standardText: 'Investigate perimeter constraints and compare rectangular designs with equal fencing and different growing areas.',
    standardUrl: `${grade3Standards}#page=34`,
    alignmentEvidence: 'Students calculate and compare perimeter and area, then use those relationships to revise a constrained garden design.',
    type: 'Extended performance task',
    duration: 'Three 35–45 minute sessions on separate days',
    points: 10,
    title: 'A garden plan that can change',
    stem: (
      <>
        <p>
          The class has <strong>24 meters of fence</strong>. Investigate whether to build one rectangular garden
          bed or two separate rectangular beds. Start by trying to get the most growing space. Later, the class
          will receive new planting needs and review the plan.
        </p>
        <p>
          Every side must be a whole number from <strong>2 through 8 meters</strong>.
          Fence goes around all four sides of every bed. Separate beds cannot share a fence.
          A square counts as a rectangle. There is enough land for any permitted design.
          Describe your beds with side lengths and equations; drawings are optional.
        </p>
        <p>
          <strong>Work across three separate days.</strong> Keep the plan, investigation records, review notes,
          and final revision together. On paper, you may use square tiles or grid paper to test your ideas.
        </p>
      </>
    ),
    blocks: [
      {
        kind: 'response',
        label: 'Day 1 · Plan the investigation',
        prompt: (
          <p>
            Predict whether one bed or two beds can give more growing space with 24 meters of fence.
            Plan a way to test side lengths without counting a turned rectangle as a new design.
            Explain what you will record and how you will look for a better plan instead of stopping at the first one.
          </p>
        ),
      },
      {
        kind: 'response',
        label: 'Day 2 · Investigate and review',
        prompt: (
          <>
            <p>
              Carry out your plan. Keep records for at least five different designs: at least two with one bed
              and at least two with two beds. For each design, write the dimensions of every bed, the total
              fence needed, and the total growing area. All five designs must use at most 24 meters of fence.
            </p>
            <p>
              Recommend a design. Use your records to explain why it is your best choice and whether using
              the same fence always gives the same area. Ask a partner or teacher to check your recommendation.
              Record one question or challenge and your response. Working alone? Check the side lengths and
              calculations a second way and write the challenge you used to test your plan.
            </p>
          </>
        ),
      },
      {
        kind: 'response',
        label: 'Day 3 · Use new information and revise',
        prompt: (
          <>
            <p>
              The class now needs <strong>two separate beds</strong>: a bean bed with at least
              <strong> 12 square meters</strong> of growing space and a flower bed with at least
              <strong> 8 square meters</strong>. All side-length rules stay the same. The school can give up to
              <strong> 4 extra meters</strong> of fence if the class shows why it needs them.
            </p>
            <p>
              Revisit your records and test new designs as needed. Can 24 meters meet both planting needs?
              Recommend a revised design and the <strong>smallest amount of extra fence</strong> needed.
              Support your request with side lengths, fence calculations, growing areas, and evidence that
              a smaller request will not work. Explain what changed from your first recommendation and what
              your investigation taught you about fence length and growing space.
            </p>
          </>
        ),
      },
    ],
    key: (
      <>
        <p>
          <strong>Initial design:</strong> one 6-by-6-meter bed uses 24 meters of fence and gives 36 square
          meters of growing space. Accept other initial recommendations supported by an accurate investigation.
        </p>
        <p>
          <strong>Revised design:</strong> a 3-by-4-meter bean bed and a 2-by-4-meter flower bed need
          14 + 12 = 26 meters of fence and give 12 + 8 = 20 square meters of growing space.
          The smallest extra request is <strong>2 meters</strong>. A 3-by-3-meter flower bed also works with
          the same total fence, giving 9 square meters for flowers.
        </p>
      </>
    ),
    sample: (
      <>
        <p>
          <strong>Plan and records.</strong> I predicted one large bed would give more space. I listed the
          shorter side first so I would not count turned rectangles twice. I recorded each bed’s four sides
          and multiplied its side lengths for growing area. Then I added the fence and area amounts when
          there were two beds.
        </p>
        <div className="table-wrap">
          <table className="data-table">
            <caption>One possible investigation record; dimensions are in meters.</caption>
            <thead>
              <tr><th scope="col">Beds</th><th scope="col">Total fence</th><th scope="col">Total growing area</th></tr>
            </thead>
            <tbody>
              <tr><td>One: 4 × 8</td><td>4 + 8 + 4 + 8 = 24 m</td><td>4 × 8 = 32 m²</td></tr>
              <tr><td>One: 5 × 7</td><td>5 + 7 + 5 + 7 = 24 m</td><td>5 × 7 = 35 m²</td></tr>
              <tr><td>One: 6 × 6</td><td>6 + 6 + 6 + 6 = 24 m</td><td>6 × 6 = 36 m²</td></tr>
              <tr><td>Two: 2 × 2 and 4 × 4</td><td>8 + 16 = 24 m</td><td>4 + 16 = 20 m²</td></tr>
              <tr><td>Two: 3 × 3 and 3 × 3</td><td>12 + 12 = 24 m</td><td>9 + 9 = 18 m²</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          <strong>Recommendation and review.</strong> I chose 6 × 6 because it gave the most space in my
          records. My partner asked whether I had tried all one-bed designs using all 24 meters. Opposite
          sides match, so two neighboring sides must add to 12. With sides from 2 through 8, the different
          pairs are 4 and 8, 5 and 7, and 6 and 6. I checked each. The 4 × 8 and 6 × 6 beds also show that
          equal fence lengths can give different areas.
        </p>
        <p>
          <strong>Revision.</strong> My 6 × 6 bed no longer works because we need separate beds for beans
          and flowers. A 3 × 4 bean bed has area 12 and needs 3 + 4 + 3 + 4 = 14 meters of fence.
          A 2 × 4 flower bed has area 8 and needs 2 + 4 + 2 + 4 = 12 meters. Together they need 26 meters,
          so I request 26 − 24 = 2 extra meters.
        </p>
        <p>
          <strong>Why less will not work.</strong> With only 12 meters around a bed, the largest allowed
          rectangle is 3 × 3, with area 9; 2 × 4 has area 8. Fewer meters give still smaller beds. Beans
          therefore need at least 14 meters, achieved by 3 × 4. Flowers need at least 12 meters: with 10
          meters the only allowed side pair is 2 × 3, with area 6. Thus the two beds need at least
          14 + 12 = 26 meters. A whole-number rectangle’s fence length is even, so 13 or 11 meters cannot
          be the exact fence length of a bed. I changed my goal from the largest single growing space to
          meeting both planting needs with the least extra fence.
        </p>
      </>
    ),
    rubric: [{
      title: 'Scoring rubric · 10 points total; add the four criterion scores',
      rows: [
        { score: 'Plan · 2', text: 'States a prediction and a workable, organized search plan that compares one and two beds and avoids counting rotations twice.' },
        { score: 'Plan · 1', text: 'Gives a relevant prediction or a partly developed investigation plan.' },
        { score: 'Plan · 0', text: 'Provides no relevant prediction or plan.' },
        { score: 'Investigation · 3', text: 'Records five permitted designs, including the required one-bed and two-bed cases, with accurate dimensions, total fence lengths, and total areas.' },
        { score: 'Investigation · 2', text: 'Uses correct area and perimeter methods, but has one or two calculation errors or one missing required design.' },
        { score: 'Investigation · 1', text: 'Correctly calculates both area and perimeter for at least one permitted design, but the comparison set is substantially incomplete.' },
        { score: 'Investigation · 0', text: 'Provides no usable design with correct area and perimeter methods.' },
        { score: 'Review · 2', text: 'Supports an initial recommendation with comparisons, explains equal fence can give different areas, and records a mathematical check or challenge and a response.' },
        { score: 'Review · 1', text: 'Supports a recommendation with some evidence but omits or incompletely explains either the area/perimeter finding or the review.' },
        { score: 'Review · 0', text: 'Provides no recommendation supported by relevant mathematical evidence.' },
        { score: 'Revision · 3', text: 'Gives two beds meeting both area needs, shows 26 meters total and a 2-meter request, justifies that smaller requests cannot work, and explains the change from the initial recommendation.' },
        { score: 'Revision · 2', text: 'Gives a correct 26-meter design and 2-meter request, but the minimal-fence argument or connection to the original investigation is incomplete.' },
        { score: 'Revision · 1', text: 'Gives a feasible revised design within 28 meters with relevant calculations, but does not establish the smallest extra request.' },
        { score: 'Revision · 0', text: 'Provides no feasible revised design or no relevant mathematical evidence.' },
      ],
    }],
    dokWhy: 'Students plan and carry out a multi-day investigation, compare models, review evidence, and develop a revised design with a defensible minimum-fence argument.',
  },
]
