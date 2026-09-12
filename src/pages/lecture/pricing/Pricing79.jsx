const Pricing79 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-brown">
        <h1>
          🧾 Lecture 79 — Required, Print, Account Key, Accruals &amp; Subtotal
        </h1>
        <p>
          SAP SD | More of the 16 fields + forward/reverse pricing formula
          example
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Practice tip --> */}
        <div className="card">
          <h2>
            <span className="badge">📌</span> Practice Tip (Recap)
          </h2>
          <div className="callout blue">
            When testing Exclusion Groups for discounts, always create the order
            for a <strong>special customer</strong> (one eligible for multiple
            discounts, per the sample data). A<strong>direct customer</strong>{" "}
            only qualifies for one discount (Material Discount) to begin with,
            so the exclusion effect won't be visible in the order — this isn't a
            configuration error, just the wrong test customer.
          </div>
        </div>
        {/* <!-- Section 1: Manual recap --> */}
        <div className="card orange">
          <h2>
            <span className="badge">7</span> Manual (Recap with Example)
          </h2>
          <div className="callout">
            If checked, the condition type is
            <strong>not determined automatically</strong> — the user must enter
            it manually.
          </div>
          <p>
            Example verified in class: P004 marked Manual → order for customer
            100551 does NOT show P004 automatically. To add it, click the
            <strong>+</strong> symbol in Conditions → select P004 → it then
            appears and can be entered.
          </p>
        </div>
        {/* <!-- Section 2: Required --> */}
        <div className="card teal">
          <h2>
            <span className="badge">8</span> Required
          </h2>
          <div className="callout">
            If checked, and that condition type is
            <strong>not determined</strong> into the sales document, the system
            <strong>will not allow saving</strong> the order.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P004 marked Required, but not determined in the order</td>
                <td>
                  Error: "Mandatory condition P004 is missing" — document shows
                  as Incomplete, cannot be saved
                </td>
              </tr>
              <tr>
                <td>P004 manually entered afterward</td>
                <td>Error clears, order saves successfully</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            Practical use: forces a mandatory pricing element (e.g. a
            compliance-required surcharge or tax) to always be present before an
            order can be saved.
          </div>
        </div>
        {/* <!-- Section 3: Statistics recap --> */}
        <div className="card purple">
          <h2>
            <span className="badge">9</span> Statistics (Recap with Worked
            Example)
          </h2>
          <div className="callout">
            If checked: (1) the condition value has
            <strong>no effect on Net Value</strong>, and (2) it's
            <strong>never posted to accounting</strong>.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Scenario</th>
                <th>Net Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PCOM (10% discount, ₹95,000) — Statistics unchecked</td>
                <td>
                  Gross Value ₹8,55,000 + surcharges → Net Value =
                  <strong>₹8,99,650</strong>
                </td>
              </tr>
              <tr>
                <td>PCOM — Statistics checked</td>
                <td>
                  Discount ignored in calculation → Net Value =
                  <strong>₹9,94,650</strong> (full ₹95,000 restored)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            Additional confirmed effect: when the invoice is saved, the
            accounting document generated will
            <strong>not include this discount's value</strong> at all, since
            Statistics blocks the posting.
          </div>
        </div>
        {/* <!-- Section 4: Print --> */}
        <div className="card gold">
          <h2>
            <span className="badge">10</span> Print
          </h2>
          <div className="callout">
            Controls whether the condition type's amount and value get printed
            in
            <strong>output</strong> (printout, email, fax, etc.).
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Setting</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>X</td>
                <td>Prints the amount/value in output</td>
              </tr>
              <tr>
                <td>Blank</td>
                <td>Does not print</td>
              </tr>
              <tr>
                <td>Yes (special value)</td>
                <td>
                  Prints at <strong>header level</strong> — used for all header
                  conditions
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            Business logic: costs (e.g. VPRS) are generally
            <strong>not printed</strong> since companies don't want to disclose
            internal cost to customers. Statistical conditions are typically
            left unprinted too.
          </div>
        </div>
        {/* <!-- Section 5: Account Key --> */}
        <div className="card">
          <h2>
            <span className="badge">11</span> Account Key
          </h2>
          <div className="callout">
            One of the parameters used to determine the
            <strong>revenue G/L account</strong> when posting invoice values
            into accounting.
          </div>
          <div className="callout red">
            If Account Key is left blank, the system throws an error at invoice
            creation and <strong>won't generate the accounting document</strong>
            .
          </div>
          <h3>Worked Troubleshooting Example</h3>
          <div className="stepper">
            <div className="step">
              Order → Delivery (<span className="tcode">VL01N</span>) → Picking
              &amp; PGI
            </div>
            <div className="step">
              Create Invoice → Save → accounting document generation fails
            </div>
            <div className="step">
              Error message:
              <strong>
                "Error in account determination, Table T030K, Key IND MWS P1"
              </strong>
              — meaning no G/L account is assigned for account key MWS (tax)
              with tax code P1
            </div>
            <div className="step">
              Fix via <span className="tcode">OB40</span> → double-click account
              key <strong>MWS</strong> → Chart of Accounts <strong>IND</strong>{" "}
              → Continue → New Entries
            </div>
            <div className="step">
              Enter Tax Code <strong>P1</strong>, G/L Account
              <strong>175000</strong> → Save
            </div>
            <div className="step">
              Return to the invoice → change mode → click the flag → accounting
              document now generates successfully
            </div>
          </div>
          <div className="callout blue">
            Bigger picture noted in class: with proper
            <strong>Revenue Account Determination</strong> configured, each
            account key posts to a <em>different</em> G/L account — base value,
            discounts, freight, and tax each land in their own account rather
            than all lumping into a single G/L (as happens if account keys
            aren't fully configured).
          </div>
        </div>
        {/* <!-- Section 6: Accruals --> */}
        <div className="card red">
          <h2>
            <span className="badge">12</span> Accruals
          </h2>
          <div className="callout red">
            A <strong>provisional account</strong> that sets aside a portion of
            money from each transaction to meet future
            <strong>rebate settlement</strong> requirements.
          </div>
          <p>
            Once a rebate is announced, every time a customer makes a payment, a
            percentage of that amount is automatically transferred to a separate
            provisional bank account — building up the fund used later to
            actually pay out (settle) the rebate to the customer.
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Field</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard Accruals Key</td>
                <td>ERU</td>
              </tr>
              <tr>
                <td>Where maintained</td>
                <td>Only for Rebate condition types (BO01, BO02, BO03)</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 7: Subtotal --> */}
        <div className="card brown">
          <h2>
            <span className="badge">13</span> Subtotal
          </h2>
          <div className="callout brown">
            Stores a condition type's value into a
            <strong>temporary table/field</strong> so it can be reused in
            further calculations — specifically inside
            <strong>Calculation Type</strong> and
            <strong>Base Type</strong> formulas.
          </div>
          <div className="callout red">
            Golden rule: if you want to use any condition type's value inside a
            formula, you must <strong>first store it in a Subtotal</strong>.
            There's no other way to reference a condition's value from a
            formula.
          </div>
          <h3>Other Uses of Subtotal</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Subtotal Value</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>
                  Updates sales document values into
                  <strong>Credit Management</strong>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>
                  Updates billing document values into
                  <strong>Rebate Agreements</strong>
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td>
                  Used for <strong>Cost</strong> (e.g. VPRS)
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Subtotal Table/Field Reference</h3>
          <p className="note-text">
            Standard SAP technical mapping — each Subtotal number/letter stores
            the condition value in a specific field of table KOMP, for use later
            in formulas:
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Subtotal</th>
                <th>Table-Field</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>KOMP-KZWI1</td>
              </tr>
              <tr>
                <td>2</td>
                <td>KOMP-KZWI2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>KOMP-KZWI3</td>
              </tr>
              <tr>
                <td>4</td>
                <td>KOMP-KZWI4</td>
              </tr>
              <tr>
                <td>5</td>
                <td>KOMP-KZWI5</td>
              </tr>
              <tr>
                <td>6</td>
                <td>KOMP-KZWI6</td>
              </tr>
              <tr>
                <td>7 (Rebate)</td>
                <td>KOMP-BONBA</td>
              </tr>
              <tr>
                <td>A (Credit Mgmt)</td>
                <td>KOMP-CMPRE</td>
              </tr>
              <tr>
                <td>B (Cost)</td>
                <td>KOMP-WAVWR</td>
              </tr>
              <tr>
                <td>...up to M</td>
                <td>
                  Further reserved KOMP fields (view full list via F4 help on
                  the Subtotal field)
                </td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            The exact field codes beyond 1–9, A, B are best confirmed via F4
            help in the system — this table shows the pattern and the entries
            explicitly confirmed in class.
          </p>
        </div>
        {/* <!-- Section 8: Forward vs Reverse Pricing --> */}
        <div className="card green">
          <h2>
            <span className="badge">🎯</span> Worked Example — Forward Pricing
            vs Reverse Pricing
          </h2>
          <h3>Forward Pricing (Normal)</h3>
          <p>
            Customer's base price is entered first, tax is calculated on top of
            it.
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>Description</th>
                <th>Calculation</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>PPR0</td>
                <td>Base Price</td>
                <td>Entered directly</td>
                <td className="amount">₹20,00,000</td>
              </tr>
              <tr>
                <td>20</td>
                <td>—</td>
                <td>Base Value (statistics)</td>
                <td>= Step 10</td>
                <td className="amount">₹20,00,000</td>
              </tr>
              <tr>
                <td>30</td>
                <td>MWST</td>
                <td>Tax (18%)</td>
                <td>18% of Step 20</td>
                <td className="amount">₹3,60,000</td>
              </tr>
              <tr>
                <td>40</td>
                <td>—</td>
                <td>Total Value (statistics)</td>
                <td>Step 20 to 30</td>
                <td className="price-final">₹23,60,000</td>
              </tr>
            </tbody>
          </table>
          <h3>Reverse Pricing — Customer Orders "All-Inclusive" of Tax</h3>
          <div className="callout purple">
            Business need: the customer places an order specifying only the
            <strong>final total</strong> (tax-inclusive) — the system must work
            <strong>backward</strong> to figure out the base price and tax
            component.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>Description</th>
                <th>Details</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>ZR00</td>
                <td>Total (inclusive) value</td>
                <td>
                  Manual + Statistical; user enters total directly; stored in
                  <strong>Subtotal 1</strong> (KOMP-KZWI1)
                </td>
                <td className="amount">₹23,60,000</td>
              </tr>
              <tr>
                <td>20</td>
                <td>MWST</td>
                <td>Tax (18%)</td>
                <td>
                  Formula: <code>ZR00 × 100 / 118</code>, then 18% applied on
                  the result; MWST value stored in <strong>Subtotal 2</strong>
                </td>
                <td className="amount">₹3,60,000</td>
              </tr>
              <tr>
                <td>30</td>
                <td>—</td>
                <td>Base Value</td>
                <td>
                  Formula: <code>ZR00 − MWST</code>
                </td>
                <td className="price-final">₹20,00,000</td>
              </tr>
            </tbody>
          </table>
          <h3>The Core Formula Logic</h3>
          <div className="formula-box">
            Base Value = ZR00 (Subtotal 1) × 100 / 118
          </div>
          <p className="note-text">
            Why divide by 118? Because ZR00's ₹23,60,000 already represents 118%
            (100% base + 18% tax). To isolate the 100% base portion: (23,60,000
            ÷ 118) × 100 = ₹20,00,000.
          </p>
          <div className="formula-box">
            Base Value (Step 30) = ZR00 (Subtotal 1) − MWST (Subtotal 2)
          </div>
          <p className="note-text">
            Cross-check: ₹23,60,000 − ₹3,60,000 = ₹20,00,000 — matches the
            formula above, confirming the reverse calculation is consistent.
          </p>
          <div className="callout green">
            This entire mechanism only works because ZR00's value was first
            captured into a Subtotal — proving the golden rule:
            <strong>no Subtotal, no formula access</strong> to a condition
            type's value.
          </div>
        </div>
        {/* <!-- Section 9: Remaining fields tracker --> */}
        <div className="card">
          <h2>
            <span className="badge">📋</span> 16 Fields — Progress Tracker
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr className="done">
                <td>1–7</td>
                <td>
                  Step, Counter, Condition Type, Description, From, To, Manual
                </td>
                <td>
                  <span className="tag tag-done">Covered (Lecture 78)</span>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr className="done">
                <td>8</td>
                <td>Required</td>
                <td>
                  <span className="tag tag-done">Covered today</span>
                </td>
              </tr>
              <tr className="done">
                <td>9</td>
                <td>Statistics</td>
                <td>
                  <span className="tag tag-done">Covered today</span>
                </td>
              </tr>
              <tr className="done">
                <td>10</td>
                <td>Print</td>
                <td>
                  <span className="tag tag-done">Covered today</span>
                </td>
              </tr>
              <tr className="done">
                <td>11</td>
                <td>Account Key</td>
                <td>
                  <span className="tag tag-done">Covered today</span>
                </td>
              </tr>
              <tr className="done">
                <td>12</td>
                <td>Accruals</td>
                <td>
                  <span className="tag tag-done">Covered today</span>
                </td>
              </tr>
              <tr className="done">
                <td>13</td>
                <td>Subtotal</td>
                <td>
                  <span className="tag tag-done">Covered today</span>
                </td>
              </tr>
              <tr className="pending">
                <td>14</td>
                <td>Requirement</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
              <tr className="pending">
                <td>15</td>
                <td>Calculation Type</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
              <tr className="pending">
                <td>16</td>
                <td>Base Type</td>
                <td>
                  <span className="tag tag-pending">Next class</span>
                </td>
              </tr>
            </tbody>
          </table>
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
                <td>What does checking "Required" on a condition type do?</td>
                <td>
                  If that condition type isn't determined into the sales
                  document, the system won't allow the document to be saved —
                  showing a "Mandatory condition missing" error
                </td>
              </tr>
              <tr>
                <td>What two effects does checking "Statistics" have?</td>
                <td>
                  The condition value has no effect on Net Value, and it's never
                  posted into accounting
                </td>
              </tr>
              <tr>
                <td>
                  What does the Print field control, and what value is used for
                  header conditions?
                </td>
                <td>
                  Whether the condition amount/value appears in output
                  (printout/email/fax); X for normal printing, "Yes"
                  specifically for header-level conditions
                </td>
              </tr>
              <tr>
                <td>
                  Why are cost-related conditions like VPRS usually not printed?
                </td>
                <td>
                  Companies typically don't want to disclose internal product
                  cost to customers in output documents
                </td>
              </tr>
              <tr>
                <td>
                  What does Account Key determine, and what happens if it's
                  missing?
                </td>
                <td>
                  It's a parameter used to determine the revenue G/L account
                  when posting invoice values to accounting; if missing, the
                  accounting document fails to generate with an "Error in
                  account determination" message
                </td>
              </tr>
              <tr>
                <td>
                  What is Accruals used for, and which condition types need it?
                </td>
                <td>
                  A provisional account setting aside money from each
                  transaction for future rebate settlement; maintained only for
                  rebate condition types (BO01/BO02/BO03), standard key ERU
                </td>
              </tr>
              <tr>
                <td>What is the purpose of Subtotal?</td>
                <td>
                  Stores a condition type's value in a temporary table/field so
                  it can be referenced inside Calculation Type and Base Type
                  formulas
                </td>
              </tr>
              <tr>
                <td>
                  Why must a condition type's value be stored in a Subtotal
                  before use in a formula?
                </td>
                <td>
                  Formulas can only reference condition values through Subtotal
                  fields (e.g. KOMP-KZWI1) — there's no direct way to pull a
                  condition's value into a formula otherwise
                </td>
              </tr>
              <tr>
                <td>
                  In reverse pricing, why is the base value formula ZR00 ×
                  100/118?
                </td>
                <td>
                  Because the customer's entered total (ZR00) already represents
                  118% (100% base + 18% tax); dividing by 118 and multiplying by
                  100 isolates the 100% base portion
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
                  <span className="tcode">VL01N</span>
                </td>
                <td>
                  Create Delivery (Picking &amp; PGI) — step toward
                  invoice/accounting posting
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">OB40</span>
                </td>
                <td>
                  Assign G/L Account for a tax account key (e.g. MWS) per Tax
                  Code and Chart of Accounts
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  Maintain the 16 fields (Required, Statistics, Print, Account
                  Key, Accruals, Subtotal) for each condition type in the
                  pricing procedure
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
                <td>Error resolved via OB40</td>
                <td>
                  Table T030K, Key IND MWS P1 — G/L account 175000 assigned
                </td>
              </tr>
              <tr>
                <td>Standard Accruals Key</td>
                <td>ERU (rebate condition types only)</td>
              </tr>
              <tr>
                <td>Subtotal for Credit Management</td>
                <td>A (KOMP-CMPRE)</td>
              </tr>
              <tr>
                <td>Subtotal for Rebate</td>
                <td>7 (KOMP-BONBA)</td>
              </tr>
              <tr>
                <td>Subtotal for Cost</td>
                <td>B (KOMP-WAVWR)</td>
              </tr>
              <tr>
                <td>Reverse pricing example condition type</td>
                <td>
                  ZR00 — Manual + Statistical, holds tax-inclusive total, stored
                  in Subtotal 1
                </td>
              </tr>
              <tr>
                <td>Reverse pricing tax formula</td>
                <td>ZR00 × 100 / 118 (for an 18% tax scenario)</td>
              </tr>
              <tr>
                <td>Reverse pricing base value formula</td>
                <td>ZR00 − MWST</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card brown">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            Continuing the 16-field walkthrough, this lecture covered:
            <strong>Required</strong> (blocks saving if the condition isn't
            determined), <strong>Statistics</strong> (revisited with a live
            before/after Net Value comparison), <strong>Print</strong> (output
            visibility, with header conditions always set to "Yes"),
            <strong>Account Key</strong> (demonstrated end-to-end with a real
            accounting error and its OB40 fix), <strong>Accruals</strong> (the
            provisional rebate-settlement account, key ERU), and
            <strong>Subtotal</strong> (the mechanism that makes a condition's
            value available to formulas). The lecture closed with a powerful
            worked example contrasting <strong>Forward Pricing</strong> (base
            price → tax calculated on top) with
            <strong>Reverse Pricing</strong> (customer enters a tax-inclusive
            total via ZR00, and the system works backward using Subtotal-fed
            formulas to isolate the base value and tax component) — directly
            illustrating why Subtotal exists and how it powers Calculation
            Type/Base Type formulas, which are covered in full next class.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 79 Notes — SAP SD Pricing: Required, Print, Account Key,
        Accruals &amp; Subtotal 🎓
      </p>
    </div>
  );
};

export default Pricing79;
