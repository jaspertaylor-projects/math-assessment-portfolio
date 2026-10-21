import { Frac } from '../components/Math.jsx'

export const grade5Items = [
  {
    id: 9,
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
    id: 10,
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
    id: 11,
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
  {
    id: 12,
    grade: 5,
    dok: 4,
    domain: 'Measurement & Data',
    standard: '5.MD.C.5b',
    secondary: ['5.NBT.B.7'],
    standardUrl: 'https://www.thecorestandards.org/Math/Content/5/MD/C/5/b/',
    standardText: 'Use rectangular-prism volume formulas with whole-number edge lengths to solve real-world problems.',
    alignmentEvidence: 'Students use whole-inch prism dimensions to calculate carton and puzzle-box volumes, test packing arrangements, and use decimal costs to compare and revise shipping plans.',
    type: 'Extended performance task',
    duration: 'Three 35–45 minute sessions across three days; keep the plan, comparison table, review notes, and final revision.',
    points: 8,
    title: 'Design a shipment that really fits',
    stem: (
      <>
        <p>A class will send <strong>24 small puzzle boxes</strong> to another school. Each puzzle box is 2 inches long, 2 inches wide, and 1 inch high. It must stay upright, with its 2-by-2-inch face on the bottom. Boxes may stack, but they cannot bend or overlap. Pack in straight rows and layers, with box edges lined up with the carton edges.</p>
        <p>Investigate how to ship all 24 puzzle boxes using <strong>one or two cartons</strong>. Recommend an inexpensive plan and prove that the boxes will fit. All carton measurements below are inside measurements. Prices are classroom data and include the carton and shipping.</p>
        <div className="table-wrap">
          <table className="data-table">
            <caption>Source 1 · Stock cartons, available in any quantity</caption>
            <thead><tr><th scope="col">Carton</th><th scope="col">Length</th><th scope="col">Width</th><th scope="col">Height</th><th scope="col">Price each</th></tr></thead>
            <tbody>
              <tr><th scope="row">A</th><td>3 in.</td><td>4 in.</td><td>4 in.</td><td>$4.60</td></tr>
              <tr><th scope="row">B</th><td>4 in.</td><td>4 in.</td><td>3 in.</td><td>$5.10</td></tr>
              <tr><th scope="row">C</th><td>6 in.</td><td>4 in.</td><td>4 in.</td><td>$11.20</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Source 2 · Custom cartons.</strong> Choose whole-inch inside lengths and widths from 2 through 8 inches, and a whole-inch height from 1 through 4 inches. Each custom carton costs <strong>$1.00 plus $0.10 for every cubic inch of its volume</strong>. You may use stock cartons, custom cartons, or both, within the two-carton limit.</p>
        <p><strong>Source 3 · Packing advice.</strong> A student says, “A puzzle box has a volume of 4 cubic inches. A carton with 48 cubic inches will always hold 12 of them.” Your investigation must test this claim. Compare whole layers and the space left along the edges; volume alone may not show whether the boxes fit.</p>
      </>
    ),
    blocks: [
      {
        kind: 'response',
        label: 'Day 1 · Plan and test',
        prompt: (
          <>
            <p>Write a plan for comparing packing choices fairly. Predict which carton or design will work best and explain what you need to check.</p>
            <p>Find the volume of a puzzle box and each stock carton. Describe how many upright puzzle boxes fit in a layer and how many layers fit. Test the packing-advice claim with evidence. You may use small models, a written layer plan, or a table.</p>
          </>
        ),
      },
      {
        kind: 'response',
        label: 'Day 2 · Compare and review',
        prompt: (
          <>
            <p>Compare at least three plans that fit all 24 boxes, including one custom design. Organize dimensions, carton volumes, packing arrangements, unused space, and total prices in a table. Include one rejected plan and explain why it fails.</p>
            <p>Recommend a plan using both packing and cost evidence. Show equations for your costs and explain one decimal calculation using cents or place value. Have a classmate check your layers, total capacity, and price. Record one question they raised and how you checked it. If working alone, test your own plan by trying to find an error or a cheaper alternative.</p>
          </>
        ),
      },
      {
        kind: 'response',
        label: 'Day 3 · Revise the shipment',
        prompt: (
          <>
            <p>Before shipping, the class changes <strong>8 of the puzzle boxes</strong> to a taller version: 2 inches long, 2 inches wide, and 2 inches high. The other 16 stay 2 by 2 by 1 inch. All boxes still stay upright. Carton choices and prices stay the same.</p>
            <p>Find the total volume of this new shipment. Recheck your original plan, then revise it or defend keeping it. Compare at least two plans that fit the new shipment, including a custom design. Describe the placement of both sizes, calculate the cost and unused volume, and explain how the new information and review changed your reasoning.</p>
          </>
        ),
      },
    ],
    key: (
      <>
        <p><strong>Initial shipment:</strong> 24 × (2 × 2 × 1) = <strong>96 cubic inches</strong>. Cartons A and B each have a volume of 48 cubic inches, and C has 96 cubic inches. A fits only 2 boxes per layer × 4 layers = <strong>8 boxes</strong>; its 1-inch-wide strip cannot hold another 2-inch-wide box. B fits 4 per layer × 3 layers = <strong>12</strong>. C fits 6 per layer × 4 layers = <strong>24</strong>. The packing-advice claim is false: equal volume does not guarantee a fit.</p>
        <div className="table-wrap">
          <table className="data-table">
            <caption>Example initial plans</caption>
            <thead><tr><th scope="col">Plan</th><th scope="col">Packing</th><th scope="col">Total volume</th><th scope="col">Unused volume</th><th scope="col">Price</th></tr></thead>
            <tbody>
              <tr><th scope="row">Two B cartons</th><td>12 boxes in each</td><td>96 in.³</td><td>0 in.³</td><td>$10.20</td></tr>
              <tr><th scope="row">One C carton</th><td>24 boxes</td><td>96 in.³</td><td>0 in.³</td><td>$11.20</td></tr>
              <tr><th scope="row">One custom, 6 × 4 × 4 in.</th><td>6 per layer, 4 layers</td><td>96 in.³</td><td>0 in.³</td><td>$10.60</td></tr>
            </tbody>
          </table>
        </div>
        <p>Two B cartons are an inexpensive initial recommendation. In cents, 510 + 510 = 1,020 cents, or $10.20. Two A cartons cost $9.20 but hold only 16 boxes, so they fail.</p>
        <p><strong>Revised shipment:</strong> 16 × 4 + 8 × 8 = <strong>128 cubic inches</strong>. Two B cartons provide only 96 cubic inches and cannot work. A custom 8-by-4-by-4-inch carton has volume 128 cubic inches and costs $1.00 + $12.80 = <strong>$13.80</strong>. Its base holds eight 2-by-2-inch positions. Put one tall box and two short boxes in each position: the stack is 2 + 1 + 1 = 4 inches high. This packs all 8 tall and 16 short boxes with <strong>0 unused cubic inches</strong>.</p>
        <p>A second valid revised plan uses B and C. In C, put 6 tall boxes in a bottom layer and 2 tall boxes directly above two of them; the remaining four positions above the bottom layer fit 8 short boxes. Put the other 8 short boxes in B, in two layers of four. The carton volumes total 144 cubic inches, leaving 16 cubic inches unused; the price is <strong>$16.30</strong>. The $13.80 custom plan costs $2.50 less. Other supported plans can earn full credit.</p>
      </>
    ),
    sample: (
      <p>I first planned to compare volumes. A reviewer asked whether I had counted carton A’s 1-inch-wide strip as space for a 2-inch-wide box. I checked the rows and found that A fits only 8 boxes. I changed my method to check whole layers as well as volume, and recommended two B cartons for $10.20. After the height change, their total volume was too small. I chose an 8-by-4-by-4 custom carton. I checked every base position: one 2-inch-high box plus two 1-inch-high boxes reaches exactly 4 inches. Eight positions hold all 24 boxes. Its 128 cubic inches match the shipment’s volume, and the layer plan proves the fit. It costs $13.80, compared with $16.30 for my B-and-C alternative.</p>
    ),
    rubric: [{
      title: 'Scoring rubric · 8 points; add four criteria scored 0–2',
      rows: [
        { score: 'Investigation · 2', text: 'Records a purposeful initial plan and prediction, correctly calculates the initial prism volumes, and disproves the packing claim using A’s dimensions and layers.' },
        { score: 'Investigation · 1', text: 'Records a plan and some correct volume or packing evidence, but the prediction, claim test, or explanation is incomplete.' },
        { score: 'Investigation · 0', text: 'No workable investigation plan or relevant volume/packing evidence.' },
        { score: 'Comparison · 2', text: 'Compares at least three valid initial plans, including a custom design, with correct dimensions, capacities, unused volume, and costs; explains a rejected plan and one decimal cost method.' },
        { score: 'Comparison · 1', text: 'Compares at least two plans with a sound method, but omits required evidence or makes a limited calculation or packing error.' },
        { score: 'Comparison · 0', text: 'No meaningful comparison of feasible plans.' },
        { score: 'Review · 2', text: 'Uses calculations and a layer description to defend the initial choice; records a specific review question and a mathematical check that answers it.' },
        { score: 'Review · 1', text: 'Gives a plausible initial recommendation with limited supporting evidence, or records a review without fully checking it.' },
        { score: 'Review · 0', text: 'No supported recommendation or evidence of review.' },
        { score: 'Revision · 2', text: 'Finds the new 128-cubic-inch total, checks the original plan, compares two valid revised plans including a custom design, and supports a final choice with placement, cost, unused volume, and an explanation of what changed.' },
        { score: 'Revision · 1', text: 'Makes a meaningful revision using the taller boxes and some correct evidence, but the comparison, packing check, calculations, or explanation is incomplete.' },
        { score: 'Revision · 0', text: 'Does not account for the taller boxes, or gives no feasible revised plan or defense.' },
      ],
    }],
    dokWhy: 'Develop and test a packing model across several days, combine geometric and cost evidence, investigate a false assumption, use critical review, and revise the model for a changed shipment.',
  },
]
