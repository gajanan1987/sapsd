const Pricing80 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-indigo">
        <h1>🧮 Lecture 80 — Calculation Type vs Base Type Formulas</h1>
        <p>
          SAP SD | The two places a formula can live, how to decide which one,
          and the technical reality behind percentages
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Recap --> */}
        <div className="card">
          <h2>
            <span className="badge">↩️</span> Recap — Subtotal Purposes
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Subtotal</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>Updates sales document values into Credit Management</td>
              </tr>
              <tr>
                <td>7</td>
                <td>Updates billing document values into Rebate Agreement</td>
              </tr>
              <tr>
                <td>B</td>
                <td>Cost</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            Reminder: any other subtotal number/letter not reserved for a
            specific purpose can be freely used for general formula scenarios
            like the reverse pricing example from last class.
          </div>
        </div>
        {/* <!-- Section 1: Calculation Type as formula --> */}
        <div className="card orange">
          <h2>
            <span className="badge">14</span> Calculation Type — As a Formula
          </h2>
          <div className="callout">
            If you maintain a <strong>formula in Calculation Type</strong>, the
            system calculates and proposes the
            <strong>Condition Value</strong> directly — the final value for that
            line.
          </div>
          <h3>Worked Example (from the Reverse Base Value step)</h3>
          <div className="formula-box">
            Formula: ZR00 − MWST → KOMP-KZWI1 − KOMP-KZWI2
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Component</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ZR00 (Subtotal 1)</td>
                <td className="amount">₹23,60,000</td>
              </tr>
              <tr>
                <td>MWST (Subtotal 2)</td>
                <td className="amount">₹3,60,000</td>
              </tr>
              <tr>
                <td>Formula Result</td>
                <td className="price-final">₹20,00,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            Since this formula sits in <strong>Calculation Type</strong>, the
            ₹20,00,000 result is proposed directly as the
            <strong>Condition Value</strong> — no further calculation or
            condition record needed for this step.
          </div>
          <div className="callout blue">
            Key implication: if you maintain a formula in Calculation Type, you
            <strong>do not need to maintain condition records</strong> for that
            step at all — the system computes and shows the final figure
            entirely from the formula.
          </div>
        </div>
        {/* <!-- Section 2: Base Type as formula --> */}
        <div className="card purple">
          <h2>
            <span className="badge">15</span> Base Type — As a Formula
          </h2>
          <div className="callout">
            If you maintain a <strong>formula in Base Type</strong>, the system
            calculates and proposes only the <strong>Base Value</strong> — not
            the final condition value.
          </div>
          <h3>Worked Example (MWST Tax Step)</h3>
          <div className="formula-box">
            Formula: ZR00 × 100 / 118 → KOMP-KZWI1 × 100 / 118
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Component</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>ZR00 (Subtotal 1)</td>
                <td className="amount">₹23,60,000</td>
              </tr>
              <tr>
                <td>Formula Result (Base Value only)</td>
                <td className="price-final">₹20,00,000</td>
              </tr>
              <tr>
                <td>Condition Record Rate (18%)</td>
                <td>Applied on top of the ₹20,00,000 base</td>
              </tr>
              <tr>
                <td>Final Condition Value (Tax Amount)</td>
                <td className="price-final">₹3,60,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            Since this formula sits in <strong>Base Type</strong>, the
            ₹20,00,000 is only the base — you still
            <strong>must maintain a condition record</strong> (the 18% rate via
            VK11) to actually convert that base value into the final condition
            value.
          </div>
        </div>
        {/* <!-- Section 3: Side by side comparison --> */}
        <div className="card indigo">
          <h2>
            <span className="badge">⚖️</span> Calculation Type vs Base Type —
            Direct Comparison
          </h2>
          <div className="compare-grid">
            <div className="compare-col cc-calc">
              <h4>Calculation Type Formula</h4>
              <ul>
                <li>
                  Proposes the <strong>Condition Value</strong> (final figure)
                </li>
                <li>
                  <strong>No condition records</strong> needed — system computes
                  everything from the formula
                </li>
                <li>
                  Use when the step has <strong>no condition records</strong> to
                  begin with (e.g. a pure subtotal/description step)
                </li>
              </ul>
            </div>
            <div className="compare-col cc-base">
              <h4>Base Type Formula</h4>
              <ul>
                <li>
                  Proposes only the <strong>Base Value</strong>
                </li>
                <li>
                  <strong>Condition records still required</strong> — to convert
                  base value into the actual condition value
                </li>
                <li>
                  Use when the step
                  <strong>already has condition records</strong> (e.g. an
                  existing tax rate maintained in VK11)
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* <!-- Section 4: Decision rule --> */}
        <div className="card red">
          <h2>
            <span className="badge">🎯</span> The Decision Rule — Where to Put a
            Formula
          </h2>
          <div className="callout red">
            Whenever a step requires a formula, first decide: Calculation Type
            or Base Type? The answer depends entirely on whether that step
            <strong>already has condition records</strong>.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Does the step have condition records?</th>
                <th>Where to maintain the formula</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-base">Yes</span>
                </td>
                <td>
                  Base Type (formula computes the base; existing rate/record
                  applies on top)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-calc">No</span>
                </td>
                <td>
                  Calculation Type (formula computes and shows the final value
                  directly, since there's nothing to apply a rate to)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 5: Second worked example with new numbers --> */}
        <div className="card green">
          <h2>
            <span className="badge">🎉</span> Full Worked Example — Reverse
            Pricing (₹50 Lakh Scenario)
          </h2>
          <p>
            Same reverse pricing structure as Lecture 79, with new numbers to
            reinforce the decision rule.
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>Description</th>
                <th>Has Condition Records?</th>
                <th>Formula Location</th>
                <th>Formula</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>ZR00</td>
                <td>Total (inclusive)</td>
                <td>No (Manual entry)</td>
                <td>—</td>
                <td>User enters directly</td>
                <td className="amount">₹59,00,000</td>
              </tr>
              <tr>
                <td>20</td>
                <td>MWST</td>
                <td>Tax (18%)</td>
                <td className="tag tag-base">Yes — 18% rate exists</td>
                <td className="tag tag-base">Base Type</td>
                <td>ZR00 × 100 / 118</td>
                <td>
                  Base Value = <span className="price-final">₹50,00,000</span>;
                  Condition Value (18% applied) =
                  <span className="amount">₹9,00,000</span>
                </td>
              </tr>
              <tr>
                <td>30</td>
                <td>—</td>
                <td>Reverse Base Value</td>
                <td className="tag tag-calc">No — pure description step</td>
                <td className="tag tag-calc">Calculation Type</td>
                <td>ZR00 − MWST</td>
                <td>
                  Condition Value =
                  <span className="price-final">₹50,00,000</span>
                </td>
              </tr>
              <tr>
                <td>40</td>
                <td>PPR0</td>
                <td>Base Price (display)</td>
                <td>100% of step 30</td>
                <td>From = 30</td>
                <td>Takes 100% of step 30's value</td>
                <td className="price-final">₹50,00,000 (statistical)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            Notice the pattern exactly matches the decision rule: Step 20 (MWST)
            has an existing 18% condition record → formula goes in
            <strong>Base Type</strong>, giving only the base (₹50,00,000), with
            the actual 18% then applied to get the real tax value (₹9,00,000).
            Step 30 has no condition records at all → formula goes in
            <strong>Calculation Type</strong>, directly producing the final
            ₹50,00,000 condition value.
          </div>
        </div>
        {/* <!-- Section 6: Technical reality of percentages --> */}
        <div className="card gold">
          <h2>
            <span className="badge">🔧</span> The Technical Reality — How
            Percentages Are Actually Stored
          </h2>
          <div className="callout">
            When inspecting the live pricing table in the system, percentages
            are
            <strong>not stored as their face value</strong> — they're stored
            multiplied by 10.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Actual Percentage</th>
                <th>Value Stored in Table (field KBETR)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PCOM</td>
                <td>10%</td>
                <td>100</td>
              </tr>
              <tr>
                <td>PWST (Tax)</td>
                <td>20%</td>
                <td>200</td>
              </tr>
              <tr>
                <td>Insurance (PINS)</td>
                <td>3%</td>
                <td>30</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            This is why formulas can never hardcode a plain percentage like
            "118" — since rates change per condition record, the formula must
            dynamically pull the current rate from the system's internal storage
            field and divide by 10 to get the true percentage:
            <code>KOMV-KBETR / 10</code>.
          </div>
          <div className="formula-box">
            Correct formula pattern: 100 + (KOMV-KBETR / 10) — instead of
            hardcoding "118"
          </div>
          <div className="callout blue">
            Practical example: if you create an order and the tax percentage
            updates as 180 in the table, you must divide by 10 to get the
            correct 18%.
          </div>
        </div>
        {/* <!-- Section 7: Who builds these formulas --> */}
        <div className="card">
          <h2>
            <span className="badge">👨‍💻</span> Who Actually Builds These
            Formulas?
          </h2>
          <div className="callout purple">
            Calculation Type and Base Type formulas are
            <strong>technical routines</strong> — they cannot be created
            directly through simple configuration in the system.
          </div>
          <p>
            The SD functional consultant's role is to
            <strong>define the formula logic</strong> (e.g. "Base Value = ZR00 ×
            100 / (100 + tax rate)"), and hand this specification to an
            <strong>ABAP developer (ABAPer)</strong>, who writes the actual
            technical routine that implements it in the system.
          </p>
        </div>
        {/* <!-- Section 8: Progress tracker --> */}
        <div className="card">
          <h2>
            <span className="badge">📋</span> 16 Fields — Final Progress Tracker
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr className="done">
                <td>1–13</td>
                <td>
                  Step, Counter, Condition Type, Description, From, To, Manual,
                  Required, Statistics, Print, Account Key, Accruals, Subtotal
                </td>
                <td>
                  <span className="tag tag-done">Covered (Lectures 78–79)</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="done">
                <td>14</td>
                <td>Calculation Type</td>
                <td>
                  <span className="tag tag-done">Covered today</span>
                </td>
              </tr>
              <tr className="done">
                <td>15</td>
                <td>Base Type</td>
                <td>
                  <span className="tag tag-done">Covered today</span>
                </td>
              </tr>
              <tr className="pending">
                <td>16</td>
                <td>Requirement</td>
                <td>
                  <span className="tag tag-pending">
                    Next class (last field!)
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            After Requirement, the 16-field deep dive concludes — next class
            then moves into general "Questions in Pricing" (likely a
            recap/Q&amp;A session on the whole pricing module).
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
                <td>What does a formula in Calculation Type propose?</td>
                <td>
                  The Condition Value — the final, complete value for that step,
                  computed directly by the formula
                </td>
              </tr>
              <tr>
                <td>What does a formula in Base Type propose?</td>
                <td>
                  Only the Base Value — a condition record must still be applied
                  on top to get the actual condition value
                </td>
              </tr>
              <tr>
                <td>
                  If a formula is placed in Calculation Type, do you still need
                  condition records for that step?
                </td>
                <td>
                  No — the system computes and displays the final value entirely
                  from the formula
                </td>
              </tr>
              <tr>
                <td>
                  If a formula is placed in Base Type, do you still need
                  condition records?
                </td>
                <td>
                  Yes — to convert the formula-derived base value into the
                  actual condition value
                </td>
              </tr>
              <tr>
                <td>
                  How do you decide whether to place a formula in Calculation
                  Type or Base Type?
                </td>
                <td>
                  If the step already has condition records (like an existing
                  tax rate), use Base Type; if it has no condition records, use
                  Calculation Type
                </td>
              </tr>
              <tr>
                <td>
                  Why can't formulas hardcode a percentage like 118 directly?
                </td>
                <td>
                  Because rates change per condition record; the formula must
                  dynamically reference the stored rate field (KOMV-KBETR,
                  divided by 10) instead of a fixed number
                </td>
              </tr>
              <tr>
                <td>
                  Why are percentages stored as ×10 in the system's pricing
                  table?
                </td>
                <td>
                  Internal SAP storage convention — 10% is stored as 100, 20% as
                  200, 3% as 30 — requiring division by 10 to retrieve the true
                  percentage in formulas
                </td>
              </tr>
              <tr>
                <td>
                  Who actually develops Calculation Type / Base Type formulas in
                  a real project?
                </td>
                <td>
                  An ABAP developer (ABAPer) — the SD functional consultant
                  defines the required formula logic, and the ABAPer implements
                  it as a technical routine
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
                <th>T-Code</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  Maintain Calculation Type and Base Type formula fields for
                  each condition type step in the pricing procedure
                </td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            No new T-codes were introduced this lecture — the focus was entirely
            on the Calculation Type and Base Type fields within the existing
            V/08 pricing procedure screen, plus reviewing the live pricing table
            (percentage storage) inside a sales order.
          </p>
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
                <td>Calculation Type formula result</td>
                <td>Condition Value (final); no condition records needed</td>
              </tr>
              <tr>
                <td>Base Type formula result</td>
                <td>Base Value only; condition records still required</td>
              </tr>
              <tr>
                <td>Reverse pricing tax formula (Base Type)</td>
                <td>ZR00 × 100 / 118 (or dynamically: 100 + KOMV-KBETR/10)</td>
              </tr>
              <tr>
                <td>Reverse pricing base value formula (Calculation Type)</td>
                <td>ZR00 − MWST</td>
              </tr>
              <tr>
                <td>Percentage storage convention</td>
                <td>
                  Stored as actual % × 10 (e.g. 10% → 100) in field KOMV-KBETR
                </td>
              </tr>
              <tr>
                <td>Formula development responsibility</td>
                <td>
                  SD consultant defines logic; ABAP developer implements the
                  technical routine
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card indigo">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            This lecture resolved the exact distinction between the two
            formula-capable fields in the pricing procedure:
            <strong>Calculation Type</strong> (formula proposes the final
            Condition Value, no condition records needed) versus
            <strong>Base Type</strong> (formula proposes only the Base Value,
            condition records still required to reach the final figure). The
            decision rule is simple — if a step already has condition records,
            put the formula in Base Type; if it has none, put it in Calculation
            Type. This was reinforced with a full ₹50-lakh reverse pricing
            walkthrough. The lecture closed with an important technical reality:
            percentages are internally stored ×10 (field KOMV-KBETR), so
            formulas can never hardcode values like "118" and must instead
            dynamically reference the stored rate — work that falls to an ABAP
            developer, not the functional consultant directly. Only one field
            remains in the 16-field series:
            <strong>Requirement</strong>, covered next class, after which the
            course moves to general pricing Q&amp;A.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 80 Notes — SAP SD Pricing: Calculation Type vs Base Type
        Formulas 🎓
      </p>
    </div>
  );
};

export default Pricing80;
