const Pricing78 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-pink">
        <h1>
          🏆 Lecture 78 — Exclusion Groups &amp; 16 Fields of Pricing Procedure
        </h1>
        <p>
          SAP SD | Proposing only the "best" or "least" discount, plus the first
          fields of the pricing procedure control table
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: The Problem --> */}
        <div className="card red">
          <h2>
            <span className="badge">⚠️</span> The Business Problem — Revisited
          </h2>
          <div className="callout red">
            Recap from Lecture 77's Exclusion field: institution customer 100551
            orders VAXINE1500, 100 units. Result:
            <strong>4 discounts</strong> apply simultaneously — Material,
            Customer/Material, Customer, and Price Group. This is
            <strong>lost revenue</strong> for the company.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Discount</th>
                <th>Condition Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customer Discount</td>
                <td>P007</td>
                <td>
                  10% = <strong>₹95,000 (highest)</strong>
                </td>
              </tr>
              <tr>
                <td>Material Discount</td>
                <td>P004</td>
                <td>Lower amount</td>
              </tr>
              <tr>
                <td>Customer/Material Discount</td>
                <td>P005</td>
                <td>Lower amount</td>
              </tr>
              <tr>
                <td>Price Group Discount</td>
                <td>P020</td>
                <td>Lower amount</td>
              </tr>
            </tbody>
          </table>
          <div className="callout purple">
            Client's actual requirement:
            <strong>propose only the best condition</strong> (the single highest
            discount) — not all four stacked together.
          </div>
        </div>
        {/* <!-- Section 1: Exclusion Groups concept --> */}
        <div className="card orange">
          <h2>
            <span className="badge">1</span> Exclusion Groups — The Concept
          </h2>
          <div className="callout">
            <strong>Exclusion Group</strong> = grouping multiple condition types
            into one bundle, then proposing only the
            <strong>best condition</strong> or the
            <strong>least condition</strong> among them.
          </div>
          <div className="callout blue">
            This solves the exact problem Lecture 77's plain "Exclusion" field
            couldn't fully address — instead of eliminating everything sharing
            the same Requirement number, Exclusion Groups let you explicitly
            pick which condition types compete against each other, and
            automatically keep only the winner.
          </div>
        </div>
        {/* <!-- Section 2: Config - Exclusion Group for Discounts --> */}
        <div className="card teal">
          <h2>
            <span className="badge">2</span> Configuring Exclusion Groups — Best
            Discount Among P004/P005/P007/P020
          </h2>
          <div className="path">
            <span className="node">SPRO</span>
            <span className="sep">→</span>
            <span className="node">Sales and Distribution</span>
            <span className="sep">→</span>
            <span className="node">Basic Functions</span>
            <span className="sep">→</span> <span className="node">Pricing</span>
            <span className="sep">→</span>
            <span className="node">
              Condition Exclusion for Group of Conditions
            </span>
          </div>
          <h3>Step 1: Define Condition Exclusion Groups</h3>
          <div className="stepper">
            <div className="step">
              Go to <strong>Define Condition Exclusion Groups</strong> → New
              Entries → create group <code>P111</code>, description "Discounts"
              → Save
            </div>
          </div>
          <h3>Step 2: Assign Condition Types to the Exclusion Group</h3>
          <div className="stepper">
            <div className="step">
              Go to
              <strong>Assign Condition Types to the Exclusion Groups</strong> →
              New Entries
            </div>
            <div className="step">
              Add: <code>P111</code> + P004, <code>P111</code> + P005,
              <code>P111</code> + P007, <code>P111</code> + P020 → Save
            </div>
          </div>
          <h3>Step 3: Maintain Condition Exclusion for Pricing Procedure</h3>
          <p>
            Select your pricing procedure → double-click
            <strong>Exclusion</strong> → New Entries
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Serial</th>
                <th>Condition Exclusion Procedure</th>
                <th>Exclusion Group</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>
                  <span className="tag tag-a">
                    A — Best condition between condition types
                  </span>
                </td>
                <td>P111</td>
              </tr>
            </tbody>
          </table>
          <h3>Result</h3>
          <div className="callout green">
            Order for 100551 now shows only
            <strong>P007 (10%, ₹95,000)</strong> active — the other three
            discounts (P004, P005, P020) are automatically deactivated, since
            P007 was the best (highest-value) discount in the group.
          </div>
        </div>
        {/* <!-- Section 3: A vs L --> */}
        <div className="card purple">
          <h2>
            <span className="badge">3</span> Best vs. Least — Condition
            Exclusion Procedure Options
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Code</th>
                <th>Meaning</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-a">A</span>
                </td>
                <td>Best condition between condition types</td>
                <td>Keeps the highest-value discount, deactivates the rest</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-l">L</span>
                </td>
                <td>Least favorable between condition types</td>
                <td>Keeps the lowest-value discount, deactivates the rest</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            Verified in class: switching the Serial 10 setting from A to L on
            the same P111 group changed the result — the order now activated
            <strong>P004</strong> (the smallest discount) instead of P007.
          </div>
        </div>
        {/* <!-- Section 4: Best condition within condition type (B) --> */}
        <div className="card gold">
          <h2>
            <span className="badge">4</span> Option B — Best Condition Within
            the Condition Type
          </h2>
          <div className="callout">
            Used when a <strong>single condition type</strong> has
            <strong>multiple tables</strong> in its access sequence (e.g. Base
            Price PPR0, or Common Discount PCOM), and you're
            <strong>
              not sure which table combination is more specific vs. more general
            </strong>
            .
          </div>
          <h3>The Problem Without Exclusion Groups</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Exclusive Unchecked → Default Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Base Price (Condition Class B)</td>
                <td>
                  Activates only the <strong>last</strong> matching record — but
                  this might not be the best/lowest price, just whichever came
                  last
                </td>
              </tr>
              <tr>
                <td>Discounts (Condition Class A)</td>
                <td>
                  Activates <strong>all</strong> matching records — stacking
                  problem again
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            In both cases, the system doesn't necessarily pick the actual best
            price for the customer — it just applies a mechanical rule
            (last-wins or stack-all). Option B fixes this by letting you
            explicitly say "pick the best one" within that single condition
            type's own table combinations.
          </div>
          <h3>Configuration</h3>
          <div className="stepper">
            <div className="step">
              Uncheck <strong>Exclusive</strong> on the access sequence for PPR0
              (base price) and PCOM (common discount) — since you're unsure of
              true specificity ordering
            </div>
            <div className="step">
              Define Condition Exclusion Groups: <code>P222</code> "Base Price",
              <code>P333</code> "Common Discount"
            </div>
            <div className="step">
              Assign: <code>P222</code> + PPR0, <code>P333</code> + PCOM
            </div>
            <div className="step">
              Maintain Condition Exclusion for Pricing Procedure: Serial 20 →
              <span className="tag tag-b">
                B — Best condition within the condition type
              </span>
              → Group <code>P222</code>; Serial 30 → B → Group <code>P333</code>
            </div>
          </div>
          <div className="callout blue">
            Key distinction from Option A: A compares
            <strong>across multiple condition types</strong> (P004 vs P005 vs
            P007 vs P020); B compares
            <strong>
              across multiple table matches within one single condition type
            </strong>
            (e.g. PPR0's Customer+Material record vs its Price List+Material
            record vs its Material-only record).
          </div>
        </div>
        {/* <!-- Section 5: Group Conditions exclusion --> */}
        <div className="card">
          <h2>
            <span className="badge">5</span> Applying Exclusion Groups to Group
            Conditions (PGR1 vs PGR2)
          </h2>
          <div className="callout purple">
            If a customer qualifies for <strong>both</strong> PGR1 (total
            document value) and PGR2 (group of materials) simultaneously, the
            client wants only the <strong>best</strong> one to apply.
          </div>
          <div className="stepper">
            <div className="step">
              Define Condition Exclusion Group: <code>P444</code> "Group
              Conditions"
            </div>
            <div className="step">
              Assign: <code>P444</code> + PGR1, <code>P444</code> + PGR2
            </div>
            <div className="step">
              Maintain Condition Exclusion for Pricing Procedure:
              <span className="tag tag-a">
                A — Best condition between condition types
              </span>
              → Group <code>P444</code>
            </div>
          </div>
          <h3>Worked Example</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Material</th>
                <th>Quantity</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PMAT1</td>
                <td>500</td>
                <td>₹5,14,000+</td>
              </tr>
              <tr>
                <td>PMAT2</td>
                <td>500</td>
                <td>₹8,99,000</td>
              </tr>
              <tr>
                <td>PMAT3</td>
                <td>300</td>
                <td>Total crosses ₹10,00,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            Both PGR1 (₹50,000) and PGR2 (₹75,000) qualify since total document
            value and group materials both cross their respective thresholds —
            with the exclusion group active, only
            <strong>PGR2 (₹75,000, the better discount)</strong> activates on
            the first line item; PGR1 is deactivated.
          </div>
        </div>
        {/* <!-- Section 6: 16 Fields intro --> */}
        <div className="card pink">
          <h2>
            <span className="badge">6</span> The 16 Fields of Pricing Procedure
            — Introduction
          </h2>
          <div className="callout pink">
            T-code: <span className="tcode">V/08</span> → the control table
            where every condition type is placed has exactly
            <strong>16 columns/fields</strong>. Today covers the first 7; the
            rest continue next class.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Field</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr className="done">
                <td>1</td>
                <td>Step</td>
                <td>
                  <span className="tag tag-done">Explained today</span>
                </td>
              </tr>
              <tr className="done">
                <td>2</td>
                <td>Counter</td>
                <td>
                  <span className="tag tag-done">Explained today</span>
                </td>
              </tr>
              <tr className="done">
                <td>3</td>
                <td>Condition Type</td>
                <td>
                  <span className="tag tag-done">Explained today</span>
                </td>
              </tr>
              <tr className="done">
                <td>4</td>
                <td>Description</td>
                <td>
                  <span className="tag tag-done">Explained today</span>
                </td>
              </tr>
              <tr className="done">
                <td>5</td>
                <td>From</td>
                <td>
                  <span className="tag tag-done">Explained today</span>
                </td>
              </tr>
              <tr className="done">
                <td>6</td>
                <td>To</td>
                <td>
                  <span className="tag tag-done">Explained today</span>
                </td>
              </tr>
              <tr className="done">
                <td>7</td>
                <td>Manual</td>
                <td>
                  <span className="tag tag-done">Explained today</span>
                </td>
              </tr>
              <tr className="pending">
                <td>8</td>
                <td>Requirement</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
              <tr className="pending">
                <td>9</td>
                <td>Statistics</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
              <tr className="pending">
                <td>10</td>
                <td>Print</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
              <tr className="pending">
                <td>11</td>
                <td>Subtotal</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
              <tr className="pending">
                <td>12</td>
                <td>Requirement (alternate/formula field)</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
              <tr className="pending">
                <td>13</td>
                <td>Calculation Type</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
              <tr className="pending">
                <td>14</td>
                <td>Base Type</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
              <tr className="pending">
                <td>15</td>
                <td>Account Key</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
              <tr className="pending">
                <td>16</td>
                <td>Accruals</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            Note: fields 8 and 12 were both named "Requirement" in class — this
            may refer to the standard Requirement (Reqt) field and a related
            formula/alternative field; exact distinction to be clarified when
            the remaining fields are covered next class.
          </p>
        </div>
        {/* <!-- Section 7: Field explanations --> */}
        <div className="card">
          <h2>
            <span className="badge">📖</span> Fields Explained Today
          </h2>
          <h3>Step</h3>
          <div className="callout">
            Specifies the <strong>sequence</strong> of the condition type in the
            pricing procedure. It's also used inside <strong>From</strong>/
            <strong>To</strong>
            fields on other steps to reference which step's value should be used
            as the base for calculation.
          </div>
          <h3>Counter</h3>
          <div className="callout">
            Used when there's <strong>no space between step numbers</strong> to
            insert an additional condition type. If steps go 1, 2, 3, 4... with
            no gaps, and you need to insert a new condition between step 3 and
            step 4, you keep Step = 3 and increment the Counter (3/1, 3/2, up to
            3/99) instead of renumbering everything.
          </div>
          <div className="callout blue">
            This is why experienced consultants leave gaps (10, 20, 30...
            instead of 1, 2, 3) when designing a pricing procedure — it avoids
            ever needing the Counter workaround.
          </div>
          <h3>Condition Type</h3>
          <div className="callout">
            Controls the type of price component/element — base price, discount,
            surcharge, or tax (same concept from Lecture 66).
          </div>
          <h3>Description</h3>
          <div className="callout">
            Used to <strong>bifurcate/label the pricing structure</strong> —
            e.g. the subtotal rows labeled "Base Value," "Gross Value," "Net
            Value" get their names from this field.
          </div>
          <h3>From</h3>
          <div className="callout">
            The <strong>standard base</strong> — determines which step's value
            is used as the base to calculate this condition type's value.
            Example: if P007 is 10% and its "From" points to step 20 (Base Value
            = ₹9,50,000), then 10% is calculated on ₹9,50,000.
          </div>
          <h3>To</h3>
          <div className="callout">
            Used to
            <strong>
              accumulate the values of multiple steps in a sequence
            </strong>
            . Example: Gross Value uses To = "20 to 69," which sums every step
            from 20 through 69 — adding positive (Plus/Minus blank or A) values
            and deducting negative (Plus/Minus X) values as per each condition
            type's sign.
          </div>
          <h3>Manual</h3>
          <div className="callout">
            If checked, the condition type will
            <strong>not be determined automatically</strong> into the sales
            document — the user must enter it manually. (Same field used
            throughout the course for header conditions, common discount vs.
            individual discount toggling, and condition supplements.)
          </div>
        </div>
        {/* <!-- Extra: Interview Questions --> */}
        <div className="card purple">
          <h2>
            <span className="badge">❓</span> Important Interview Questions
            &amp; Answers
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
                <td>What is an Exclusion Group?</td>
                <td>
                  A grouping of multiple condition types into one bundle, from
                  which the system proposes only the best or least condition
                </td>
              </tr>
              <tr>
                <td>
                  What's the difference between Condition Exclusion Procedure A
                  and L?
                </td>
                <td>
                  A = Best condition between condition types (keeps the highest
                  value); L = Least favorable between condition types (keeps the
                  lowest value)
                </td>
              </tr>
              <tr>
                <td>
                  What does Condition Exclusion Procedure B do, and when is it
                  used?
                </td>
                <td>
                  Best condition within the condition type — used when a single
                  condition type has multiple table combinations in its access
                  sequence and you're unsure which is more specific, so
                  Exclusive is unchecked and B picks the best match
                  automatically
                </td>
              </tr>
              <tr>
                <td>Why must Exclusive be unchecked before using Option B?</td>
                <td>
                  Because Exclusive already forces a single winner via the
                  access sequence order; Option B is an alternative mechanism
                  for picking the best match when that specificity order isn't
                  clear
                </td>
              </tr>
              <tr>
                <td>
                  Can Exclusion Groups be used across Group Conditions like PGR1
                  and PGR2?
                </td>
                <td>
                  Yes — grouping PGR1 and PGR2 into one exclusion group with
                  Option A ensures only the better of the two group-based
                  discounts applies
                </td>
              </tr>
              <tr>
                <td>
                  What does the Step field control, and where else is it used?
                </td>
                <td>
                  The sequence of condition types in the pricing procedure; also
                  referenced inside other steps' From/To fields to determine the
                  base value for calculation
                </td>
              </tr>
              <tr>
                <td>When would you use the Counter field?</td>
                <td>
                  When there's no numeric space between existing steps to insert
                  a new condition type — the Counter lets you add sub-entries
                  (up to 99) under the same Step number instead of renumbering
                  everything
                </td>
              </tr>
              <tr>
                <td>What does the To field do differently from From?</td>
                <td>
                  From points to a single base step for calculation; To
                  accumulates the values of a range of steps (e.g. "20 to 69"
                  for Gross Value), adding or deducting each based on its
                  Plus/Minus sign
                </td>
              </tr>
              <tr>
                <td>What does checking Manual on a condition type do?</td>
                <td>
                  Prevents it from being automatically determined into the sales
                  document — the user must enter it manually
                </td>
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
                <th>T-Code / Path</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SPRO (no single T-code)</td>
                <td>
                  Define Condition Exclusion Groups &amp; Assign Condition Types
                  to Exclusion Groups — SD → Basic Functions → Pricing →
                  Condition Exclusion for Group of Conditions
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  Maintain Condition Exclusion for Pricing Procedure (Exclusion
                  tab); also the home of the 16-field control table for every
                  condition type
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/07</span>
                </td>
                <td>
                  Uncheck Exclusive on access sequences (PPR0, PCOM) before
                  using Exclusion Group Option B
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Config Topics --> */}
        <div className="card gold">
          <h2>
            <span className="badge">⚙️</span> Important Configuration Topics
            &amp; Values
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
                <td>Exclusion Group — Discounts</td>
                <td>
                  P111 (P004, P005, P007, P020); Serial 10, Option A (best)
                </td>
              </tr>
              <tr>
                <td>Exclusion Group — Base Price</td>
                <td>
                  P222 (PPR0); Serial 20, Option B (best within condition type)
                </td>
              </tr>
              <tr>
                <td>Exclusion Group — Common Discount</td>
                <td>P333 (PCOM); Serial 30, Option B</td>
              </tr>
              <tr>
                <td>Exclusion Group — Group Conditions</td>
                <td>P444 (PGR1, PGR2); Option A (best)</td>
              </tr>
              <tr>
                <td>Condition Exclusion Procedure options</td>
                <td>
                  A = Best between condition types; L = Least favorable between
                  condition types; B = Best within a single condition type's
                  tables
                </td>
              </tr>
              <tr>
                <td>16 fields of Pricing Procedure (order)</td>
                <td>
                  Step, Counter, Condition Type, Description, From, To, Manual,
                  Requirement, Statistics, Print, Subtotal, Requirement,
                  Calculation Type, Base Type, Account Key, Accruals
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card pink">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            Building on Lecture 77's Exclusion field (which only eliminates
            conditions sharing the same Requirement number), this lecture
            introduced the more flexible
            <strong>Exclusion Groups</strong> mechanism — explicitly bundling
            condition types together and letting the system pick the
            <strong>best (A)</strong> or <strong>least (L)</strong> one
            automatically. A third option,
            <strong>Best within the condition type (B)</strong>, solves a
            different problem: when a single condition type (like base price
            PPR0 or common discount PCOM) has multiple table combinations in its
            access sequence and specificity ordering is unclear, unchecking
            Exclusive and using Option B lets the system pick the best match
            without needing to manually rank the tables. The same technique was
            applied to reconcile competing Group Conditions (PGR1 vs PGR2). The
            lecture then began the
            <strong>16 fields of the Pricing Procedure</strong> — covering Step,
            Counter, Condition Type, Description, From, To, and Manual in
            detail, with the remaining 9 fields to follow next class.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 78 Notes — SAP SD Pricing: Exclusion Groups &amp; 16 Fields of
        Pricing Procedure 🎓
      </p>
    </div>
  );
};

export default Pricing78;
