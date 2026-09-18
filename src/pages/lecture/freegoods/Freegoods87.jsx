const Freegoods87 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-green">
        <h1>
          🎁 Lecture 87 — Free Goods: Concepts &amp; Foundational
          Configuration
        </h1>
        <p>
          SAP SD | GST wrapped up — now Free Goods: Inclusive vs.
          Exclusive, With vs. Without Item Generation, the TANN item
          category (Pricing = B), the missing Item Category Determination
          entry, and placing R100 &amp; NRAB into the pricing procedure
          ahead of next class's full Free Goods condition technique build
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Recap --> */}
        <div className="card">
          <h2><span className="badge">↩️</span> Where We Left Off</h2>
          <div className="callout blue">
            💡 <strong>GST configuration is now complete</strong> (closed
            out in Lecture 86). A student's follow-up question reconfirmed
            the core rule live: if the plant's region and the customer's
            region are the <strong>same</strong>, the system determines
            <strong>CGST + SGST</strong>; if they're
            <strong>different</strong>, it determines <strong>IGST</strong>
            only — for example, a Mumbai plant and a Mumbai customer would
            both pick CGST and SGST together.
          </div>
          <div className="callout gold">
            💡 Today opens a brand-new topic: <strong>Free Goods</strong>.
          </div>
        </div>

        {/* <!-- Section 1: What Is Free Goods --> */}
        <div className="card teal">
          <h2>
            <span className="badge">1</span> What Is Free Goods?
          </h2>
          <div className="callout teal">
            💡 <strong>Free Goods:</strong> offering goods free of cost in
            relation to a main item — e.g. "buy this, get some quantity of
            it free."
          </div>
          <div className="callout blue">
            📖 <strong>Free Goods is also based on Condition
              Technique</strong> — the same process used for pricing and
            GST: condition records are stored in condition tables,
            condition tables sit inside an access sequence (ordered most
            specific to most general), the access sequence is assigned to
            a condition type, and the condition type is placed in a
            pricing procedure.
          </div>
          <div className="callout purple">
            📖 <strong>Worked example used throughout this
              lecture:</strong> if a customer purchases Material X in a
            quantity of <strong>100</strong>, they receive
            <strong>20</strong> units of Material X free — a 100:20
            ratio. Scaling this up: if the customer orders
            <strong>200</strong> quantity instead, the free goods quantity
            scales proportionally to <strong>40</strong>.
          </div>
        </div>

        {/* <!-- Section 2: Inclusive vs Exclusive --> */}
        <div className="card orange">
          <h2>
            <span className="badge">2</span> Free Goods — Two Types:
            Inclusive vs. Exclusive
          </h2>
          <div className="callout orange">
            💡 Free Goods comes in two flavors:
            <strong>Inclusive Free Goods</strong> and
            <strong>Exclusive Free Goods</strong> — they differ in two
            important ways.
          </div>

          <h3>Difference 1 — Where the Free Quantity Comes From</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Type</th>
                <th>Behavior</th>
                <th>Example (Order 200, ₹1,000/unit)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Inclusive</strong></td>
                <td>Free goods quantity is <strong>included in</strong> (carved out of) the order quantity</td>
                <td>Main item drops to 160 (₹1,60,000); free goods item = 40 (₹40,000, reduced to ₹0 by a condition type). Customer receives 200 total, pays for 160.</td>
              </tr>
              <tr>
                <td><strong>Exclusive</strong></td>
                <td>Free goods quantity is <strong>excluded from</strong> (added on top of) the order quantity</td>
                <td>Main item stays at 200 (₹2,00,000, full price); free goods = 40 <strong>extra</strong> (₹40,000, reduced to ₹0). Customer receives 240 total, pays for 200.</td>
              </tr>
            </tbody>
          </table>

          <h3>Difference 2 — Which Material Can Be Given Free</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Type</th>
                <th>Free Material Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Inclusive</strong></td>
                <td>Only the <strong>same</strong> material can be given free (Material X → free Material X)</td>
              </tr>
              <tr>
                <td><strong>Exclusive</strong></td>
                <td>The <strong>same or a different</strong> material can be given free (Material X → free Material X, or free Material Y)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Section 3: Inclusive - With vs Without Item Generation --> */}
        <div className="card purple">
          <h2>
            <span className="badge">3</span> Inclusive Free Goods — With vs.
            Without Item Generation
          </h2>
          <div className="callout purple">
            💡 Inclusive Free Goods itself splits into two further
            sub-types: <strong>Inclusive With Item Generation</strong> and
            <strong>Inclusive Without Item Generation</strong>.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Sub-Type</th>
                <th>Behavior</th>
                <th>Condition Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>With Item Generation</td>
                <td>The free goods are determined as a <strong>separate line item</strong> (e.g. item 20)</td>
                <td><code>R100</code> determines on that separate line and reduces its value to zero</td>
              </tr>
              <tr>
                <td>Without Item Generation</td>
                <td>The free goods are <strong>not</strong> a separate line item — they stay folded into the main item's own line</td>
                <td><code>NRAB</code> determines on the main item line and deducts the free goods value directly from the main item's value</td>
              </tr>
            </tbody>
          </table>

          <h3>Worked Example — Order 200 Quantity, Ratio 100:20</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th></th>
                <th>With Item Generation</th>
                <th>Without Item Generation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Main item line</td>
                <td>Item 10: 160 qty, ₹1,60,000</td>
                <td>Item 10: 200 qty, ₹2,00,000, then <code>NRAB</code> deducts ₹40,000 → net ₹1,60,000</td>
              </tr>
              <tr>
                <td>Free goods line</td>
                <td>Item 20 (separate): 40 qty, ₹40,000, then <code>R100</code> reduces it to ₹0</td>
                <td>None — folded into the main item</td>
              </tr>
              <tr>
                <td>Total quantity</td>
                <td>200</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Total value</td>
                <td>₹1,60,000</td>
                <td>₹1,60,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ <strong>Quantity and value come out identical either
              way</strong> — the only real-world difference is on the
            <strong>printout</strong>. With Item Generation, the customer
            sees "40 units free" as its own visible line. Without Item
            Generation, the customer instead sees something like "₹40,000
            discount/free value" folded into the main item's line — no
            separate free-goods line appears at all.
          </div>
        </div>

        {/* <!-- Section 4: Item Category for Free Goods --> */}
        <div className="card red">
          <h2>
            <span className="badge">4</span> Configuration Step 1 — Item
            Category for Free Goods (<code>TANN</code>)
          </h2>
          <div className="callout red">
            💡 The item category used for the free goods line is
            <strong><code>TANN</code></strong>. Its key control:
            <strong>Pricing = <code>B</code></strong>.
          </div>
          <div className="callout blue">
            📖 <strong>What Pricing = <code>B</code> does:</strong> it's a
            special value (distinct from the usual <code>X</code> "priced
            normally") that tells the system to determine the free-goods
            zeroing condition type (<code>R100</code>) specifically for
            this item, and reduce that item's value to zero.
          </div>

          <h3>Worked Demonstration</h3>
          <div className="stepper">
            <div className="step">
              Create an order: Item 10, Material X, quantity 160, item
              category <code>P10</code> (the course's custom standard
              item category) — value ₹1,60,000.
            </div>
            <div className="step">
              The free goods party line determines with item category
              <code>TANN</code>, quantity 40. Because <code>TANN</code>'s
              Pricing field is <code>B</code>, condition type
              <code>R100</code> determines on this line at
              <strong>−₹40,000</strong>, netting the free goods item's
              value to <strong>zero</strong>.
            </div>
            <div className="step">
              Contrast: the main item's category (<code>P10</code>) has
              Pricing = <code>X</code>, not <code>B</code> — so
              <code>R100</code> never determines there. Only an item
              category with Pricing = <code>B</code> ever triggers
              <code>R100</code>.
            </div>
          </div>
          <p className="note-text">
            📌 <strong>Correction:</strong> the free-goods-zeroing
            condition type is rendered inconsistently throughout this
            recording as "R and D" or "R under" — corrected uniformly to
            <code>R100</code>, matching how it's explicitly spelled out
            later in the lecture during the pricing procedure placement
            step.
          </p>
        </div>

        {/* <!-- Section 5: Item Category Determination --> */}
        <div className="card gold">
          <h2>
            <span className="badge">5</span> Configuration Step 2 — Item
            Category Determination for Free Goods (<span className="tcode">VOV4</span>)
          </h2>
          <div className="callout gold">
            💡 T-code <span className="tcode">VOV4</span>. The Item Usage code
            for free goods, <strong><code>FRE</code></strong>, was already
            introduced back in Lecture 57's Item Usage list — today's work
            is simply filling in the entry for this course's
            <strong>custom</strong> order type, which hadn't been
            maintained yet.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Sales Doc. Type</th>
                <th>Item Category Group</th>
                <th>Item Usage</th>
                <th>Higher-Level Item Category</th>
                <th>Item Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>OR</code> (Standard)</td>
                <td><code>NORM</code></td>
                <td><code>FRE</code></td>
                <td><code>10</code> (Standard)</td>
                <td><code>TANN</code></td>
              </tr>
              <tr>
                <td><code>PPOR</code> (Custom)</td>
                <td><code>NORM</code></td>
                <td><code>FRE</code></td>
                <td><code>P10</code> (Custom)</td>
                <td><code>TANN</code></td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            📖 <strong>Why a new entry was needed:</strong> the standard
            combination (<code>OR</code>/<code>NORM</code>/<code>FRE</code>/
            <code>10</code> → <code>TANN</code>) already exists, but this
            course's custom order type <code>PPOR</code> with custom item
            category <code>P10</code> as the higher-level item had no
            matching entry — so free goods would never determine for a
            <code>PPOR</code> order without adding it. Go to
            <span className="tcode">VOV4</span> → New Entries → maintain
            <code>PPOR</code>/<code>NORM</code>/<code>FRE</code>/
            <code>P10</code> → <code>TANN</code>. Save.
          </div>
        </div>

        {/* <!-- Section 6: Placing R100 --> */}
        <div className="card indigo">
          <h2>
            <span className="badge">6</span> Configuration Step 3 — Placing
            <code>R100</code> in the Pricing Procedure
          </h2>
          <div className="callout indigo">
            💡 T-code <span className="tcode">V/08</span> → select the
            pricing procedure → double-click <strong>Control</strong>.
            <code>R100</code> can be placed anywhere after Net Value, or
            right at the end of the procedure.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>From (Base)</th>
                <th>Requirement</th>
                <th>Base Type</th>
                <th>Account Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>280</td>
                <td><code>R100</code></td>
                <td>120 (Net Value)</td>
                <td>55</td>
                <td>28</td>
                <td><code>ERS</code></td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            📖 <strong>Requirement 55</strong> checks that the item
            category's <strong>Pricing field = <code>B</code></strong> —
            this is exactly what restricts <code>R100</code> to
            determining only on items like <code>TANN</code>, and never on
            normally-priced items.
          </div>
          <div className="callout purple">
            📖 <strong>Base Type Formula 28</strong> deducts the value of
            the free goods and makes that free goods item's value
            <strong>zero</strong> — this is the calculation behind the
            "Inclusive With Item Generation" scenario, where the free
            goods sit on their own separate line.
          </div>
        </div>

        {/* <!-- Section 7: Placing NRAB --> */}
        <div className="card brown">
          <h2>
            <span className="badge">7</span> Configuration Step 4 — Placing
            <code>NRAB</code> in the Pricing Procedure
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>From (Base)</th>
                <th>Requirement</th>
                <th>Base Type</th>
                <th>Account Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>290</td>
                <td><code>NRAB</code></td>
                <td>120 (Net Value)</td>
                <td>59</td>
                <td>29</td>
                <td><code>ERS</code></td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            📖 <strong>Requirement 59</strong> checks that the
            <strong>Free Goods Category</strong> field, maintained on the
            free goods condition record itself, is set to
            <strong><code>3</code></strong> — the exact meaning of Free
            Goods Category will be covered when the condition records
            themselves are built next class.
          </div>
          <div className="callout purple">
            📖 <strong>Base Type Formula 29</strong> calculates the value
            of the free goods and deducts it <strong>directly from the
              main item's own value</strong> — this is the calculation
            behind "Inclusive Without Item Generation," where there's no
            separate free-goods line to zero out; the deduction happens
            in place, on the main item.
          </div>
        </div>

        {/* <!-- Section 8: Preview of Next Class --> */}
        <div className="card cyan">
          <h2>
            <span className="badge">🔜</span> Preview — Free Goods Condition
            Technique (Next Class)
          </h2>
          <div className="callout cyan">
            💡 Today only laid the groundwork — Item Category
            (<code>TANN</code>, Pricing <code>B</code>), the missing Item
            Category Determination entry, and the two pricing procedure
            placements (<code>R100</code>, <code>NRAB</code>). The actual
            <strong>Free Goods condition technique</strong> — condition
            tables, access sequence, condition types, and the separate
            Free Goods procedure with its own assignment — is deferred to
            next class.
          </div>
          <div className="callout gold">
            📖 <strong>As a shape-of-the-work reminder,</strong> the
            instructor recapped the GST condition technique build as a
            parallel example of what to expect: (1) condition tables →
            access sequence → condition types → placed in pricing
            procedure; (2) Define Tax Relevancy of Master Records; (3)
            maintain condition records (interstate region-different logic
            for IGST, same-region logic for CGST/SGST); (4) assign GL
            accounts (<span className="tcode">SM30</span> then
            <span className="tcode">OB40</span>); (5) maintain Tax
            Classification = <code>1</code> on the Customer Master. Free
            Goods condition technique will follow a similar overall shape
            — minus the GL account and tax-specific steps, since it isn't
            a tax.
          </div>
        </div>

        {/* <!-- Extra: Interview Questions --> */}
        <div className="card purple">
          <h2>
            <span className="badge">❓</span> Important Interview Questions &amp;
            Answers
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>What is Free Goods, and what technique is it based on?</td>
                <td>Offering goods free of cost in relation to a main item; it's based on the same Condition Technique used for pricing and taxes (condition records → condition tables → access sequence → condition type → pricing procedure)</td>
              </tr>
              <tr>
                <td>What are the two types of Free Goods, and what's the core difference between them?</td>
                <td>Inclusive (free quantity is carved out of/included in the order quantity; only the same material can be given free) and Exclusive (free quantity is added on top of/excluded from the order quantity; the same or a different material can be given free)</td>
              </tr>
              <tr>
                <td>What are the two sub-types of Inclusive Free Goods, and how do they differ?</td>
                <td>With Item Generation (free goods appear as a separate line item, zeroed via R100) and Without Item Generation (free goods stay folded into the main item's line, deducted via NRAB); total quantity and value are identical either way — only the printout differs</td>
              </tr>
              <tr>
                <td>What item category is used for free goods, and what is its key control?</td>
                <td>TANN, with Pricing field set to B — a special value that triggers determination of condition type R100 and zeroes out that item's value</td>
              </tr>
              <tr>
                <td>What Item Usage code identifies a free goods scenario in Item Category Determination (VOV4)?</td>
                <td>FRE — already introduced back in Lecture 57; this lecture simply added the missing PPOR/NORM/FRE/P10 → TANN entry for the course's custom order type</td>
              </tr>
              <tr>
                <td>Where is R100 placed in the pricing procedure, and what do its Requirement and Base Type control?</td>
                <td>Step 280, From = Net Value (120), Requirement 55 (checks item category Pricing = B), Base Type 28 (deducts the free goods value and zeroes that line), Account Key ERS</td>
              </tr>
              <tr>
                <td>Where is NRAB placed, and what do its Requirement and Base Type control?</td>
                <td>Step 290, From = Net Value (120), Requirement 59 (checks the condition record's Free Goods Category = 3), Base Type 29 (calculates and deducts the free goods value directly from the main item), Account Key ERS</td>
              </tr>
              <tr>
                <td>Why does R100 only ever determine on TANN and never on the main paid item?</td>
                <td>Requirement 55 specifically restricts determination to item categories whose Pricing field equals B; the main item's category (e.g. P10) has Pricing = X, so R100 never fires there</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Extra: T-codes --> */}
        <div className="card teal">
          <h2>
            <span className="badge">🔢</span> Important Transaction Codes &amp;
            Purpose
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>T-Code</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><span className="tcode">VOV7</span></td>
                <td>Item Category Controls — where TANN's Pricing = B control lives</td>
              </tr>
              <tr>
                <td><span className="tcode">VOV4</span></td>
                <td>Item Category Determination — used to add the missing PPOR/NORM/FRE/P10 → TANN entry</td>
              </tr>
              <tr>
                <td><span className="tcode">V/08</span></td>
                <td>Maintain Pricing Procedure — used to place R100 (step 280) and NRAB (step 290) after Net Value</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Extra: Config Topics --> */}
        <div className="card gold">
          <h2>
            <span className="badge">⚙️</span> Important Configuration Topics &amp;
            Values
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Value / Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Free Goods types</td>
                <td>Inclusive (free qty included in order qty, same material only) vs. Exclusive (free qty excluded/additional, same or different material)</td>
              </tr>
              <tr>
                <td>Inclusive sub-types</td>
                <td>With Item Generation (separate line, R100 zeroes it); Without Item Generation (folded into main item, NRAB deducts from it)</td>
              </tr>
              <tr>
                <td>Item Category for Free Goods</td>
                <td>TANN; Pricing field = B (special value triggering R100 determination and zeroing)</td>
              </tr>
              <tr>
                <td>Item Category Determination (VOV4) for Free Goods</td>
                <td>OR/NORM/FRE/10 → TANN (standard, pre-existing); PPOR/NORM/FRE/P10 → TANN (custom, added this lecture)</td>
              </tr>
              <tr>
                <td>R100 in pricing procedure</td>
                <td>Step 280, From 120 (Net Value), Requirement 55 (Pricing field = B check), Base Type 28 (zero out the free goods line), Account Key ERS</td>
              </tr>
              <tr>
                <td>NRAB in pricing procedure</td>
                <td>Step 290, From 120 (Net Value), Requirement 59 (Free Goods Category = 3 check), Base Type 29 (deduct free goods value from main item), Account Key ERS</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Extra: Summary --> */}
        <div className="card">
          <h2><span className="badge">📝</span> Summary</h2>
          <p>
            With GST configuration complete, this lecture opened
            <strong>Free Goods</strong> — offering goods free of cost in
            relation to a main item, built on the same Condition
            Technique as pricing and GST. Free Goods splits into
            <strong>Inclusive</strong> (free quantity carved out of the
            order quantity, only the same material eligible) and
            <strong>Exclusive</strong> (free quantity added on top,
            same or different material eligible), and Inclusive further
            splits into <strong>With Item Generation</strong> (a separate
            free-goods line, zeroed via <code>R100</code>) and
            <strong>Without Item Generation</strong> (folded into the main
            item's own line, deducted via <code>NRAB</code>) — both
            producing identical quantity and value outcomes, differing
            only in how they print. The lecture then laid the
            foundational configuration: the <code>TANN</code> item
            category with its Pricing = <code>B</code> control, a missing
            Item Category Determination entry added for the course's
            custom order type (<code>PPOR</code>/<code>NORM</code>/
            <code>FRE</code>/<code>P10</code> → <code>TANN</code>), and
            both <code>R100</code> (step 280, Requirement 55, Base Type
            28) and <code>NRAB</code> (step 290, Requirement 59, Base
            Type 29) placed in the pricing procedure. The actual Free
            Goods condition technique — condition tables, access
            sequence, condition types, and the dedicated Free Goods
            procedure — is deferred to next class, previewed via a
            recap of the parallel GST condition technique build.
          </p>
        </div>

        {/* <!-- Best Practice / Next Class --> */}
        <div className="card">
          <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
          <ul>
            <li>
              <strong>Free Goods is condition technique doing arithmetic,
                not a new mechanism</strong> — the same pattern of
              condition records → tables → access sequence → condition
              type → pricing procedure applies here exactly as it did for
              pricing and GST.
            </li>
            <li>
              <strong>Inclusive vs. Exclusive is fundamentally a
                "who pays for the total quantity" question</strong> —
              Inclusive splits the order itself into a paid part and a
              free part; Exclusive keeps the order fully paid and adds
              free units on top.
            </li>
            <li>
              <strong>With vs. Without Item Generation is a display
                choice, not a value/quantity difference</strong> — worth
              remembering precisely because it's counterintuitive: two
              configurations that look structurally different produce
              identical totals, differing only in what the customer sees
              printed.
            </li>
            <li>
              <strong>Pricing field = B is the single switch that makes
                an item category "free-goods-shaped"</strong> — everything
              downstream (R100's Requirement 55) hinges on checking this
              one field.
            </li>
            <li>
              <strong>A familiar gap reappears</strong> — just like
              Schedule Line Category, Delivery Type, and Billing Type
              before it, a custom order type again needed its own new
              Item Category Determination entry; the standard entry alone
              was never going to cover it.
            </li>
          </ul>
          <div className="callout green">
            📅 <strong>Next class:</strong> the full Free Goods condition
            technique — condition tables, access sequence, condition
            types, and the dedicated Free Goods procedure and its
            assignment.
          </div>
        </div>
      </div>
      <p className="footer-note">
        Lecture 87 Notes — Free Goods: Concepts &amp; Foundational
        Configuration 🎓
      </p>
    </div>
  );
};

export default Freegoods87;
