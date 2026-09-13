const Pricing69 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-cyan">
        <h1>🧾 Lecture 69 — Common Discount &amp; Header Discount</h1>
        <p>
          SAP SD | Consolidating discounts into one condition type, plus
          document-level discounts
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: The Problem --> */}
        <div className="card red">
          <h2>
            <span className="badge">⚠️</span> The Business Problem
          </h2>
          <div className="callout red">
            💸 In Lecture 68, customer <strong>100551</strong> got
            <em>4 separate discounts</em> stacked on one order (material +
            customer/material + customer + price group) — that's a
            <strong>loss to the company</strong> if unintended. Real businesses
            usually want only <strong>ONE</strong> discount to apply, not all of
            them added together.
          </div>
          <p>
            <strong>Solution:</strong> Instead of multiple independent discount
            condition types, use a single
            <strong>Common Discount</strong> condition type with its own access
            sequence — so only the most relevant one wins.
          </p>
          <div className="callout blue">
            🏢 <strong>Real-world note:</strong> In practice, a company
            configures
            <em>either</em> individual discounts <em>or</em> a common discount —
            never both together (since that reintroduces the stacking problem).
            The unused option's condition type is marked
            <strong>"Manual"</strong> so it doesn't auto-apply.
          </div>
        </div>
        {/* <!-- Section 1: Specificity logic reversal --> */}
        <div className="card purple">
          <h2>
            <span className="badge">1</span> Important Twist: Specificity Logic
            Reverses for Discounts!
          </h2>
          <div className="callout purple">
            🔄 <strong>Base Price rule:</strong> Lower price = more specific.
            <br />
            🔄 <strong>Discount rule (reversed):</strong>
            <strong>Higher discount = more specific</strong>. Lower discount =
            more general.
          </div>
          <p>
            Applying this logic to our 4 discount types (from Lecture 68's
            sample data), ranked from most specific → most general:
          </p>
          <div className="specificity">
            <div className="spec-step">
              <span className="tag tag-cust">Customer Discount</span>
              <br />
              10%
            </div>
            <div className="spec-arrow">➜</div>
            <div className="spec-step">
              <span className="tag tag-pricegroup">Price Group Discount</span>
              <br />
              5–7%
            </div>
            <div className="spec-arrow">➜</div>
            <div className="spec-step">
              <span className="tag tag-custmat">
                Customer/Material Discount
              </span>
              <br />
              3%
            </div>
            <div className="spec-arrow">➜</div>
            <div className="spec-step">
              <span className="tag tag-material">Material Discount</span>
              <br />
              2%
            </div>
          </div>
          <p className="note-text-center">
            Most specific (highest %) → Most general (lowest %) — this becomes
            the access sequence order for the common discount.
          </p>
        </div>
        {/* <!-- Section 2: Config for Common Discount --> */}
        <div className="card cyan">
          <h2>
            <span className="badge">2</span> Configuring Common Discount
          </h2>
          <h3>Condition Tables — All Reused! ✅</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Access #</th>
                <th>Combination</th>
                <th>Table #</th>
                <th>Reused From</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>Customer</td>
                <td>679</td>
                <td>Lecture 68 (Customer Discount)</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Price Group</td>
                <td>680</td>
                <td>Lecture 68 (Price Group Discount)</td>
              </tr>
              <tr>
                <td>30</td>
                <td>Customer + Material</td>
                <td>676</td>
                <td>Lecture 65/67 (Base Price / Cust-Material Discount)</td>
              </tr>
              <tr>
                <td>40</td>
                <td>Material</td>
                <td>678</td>
                <td>Lecture 65/67 (Base Price / Material Discount)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ No new condition tables needed — every combination already exists
            from prior configuration. This is the payoff of the "don't waste
            tables" discipline from Lecture 68.
          </div>
          <h3>
            Step 1: Create Access Sequence <code>PCOM</code>
          </h3>
          <p>
            T-code: <span className="tcode">V/07</span>
          </p>
          <div className="stepper">
            <div className="step">
              New Entries → Access Sequence <code>PCOM</code>, description
              "Common Discount"
            </div>
            <div className="step">
              Double-click <strong>Accesses</strong> → New Entries: Access 10 →
              Table 679 (Customer) → check <strong>Exclusive</strong> ✅ →
              double-click Fields
            </div>
            <div className="step">
              Access 20 → Table 680 (Price Group) → check Exclusive →
              double-click Fields
            </div>
            <div className="step">
              Access 30 → Table 676 (Customer + Material) → check Exclusive →
              double-click Fields
            </div>
            <div className="step">
              Access 40 → Table 678 (Material) → check Exclusive → double-click
              Fields → Save
            </div>
          </div>
          <h3>
            Step 2: Define Condition Type <code>PCOM</code>
          </h3>
          <p>
            T-code: <span className="tcode">V/06</span>
          </p>
          <div className="stepper">
            <div className="step">
              Copy standard condition type <code>K007</code> (chosen because
              it's percentage-based)
            </div>
            <div className="step">
              Rename to <code>PCOM</code>, description "Common Discount"
            </div>
            <div className="step">
              Assign Access Sequence <code>PCOM</code>
            </div>
            <div className="step">
              Set <strong>Calculation Type = A</strong> (percentage) → Enter →
              Save
            </div>
          </div>
          <div className="callout blue">
            🧮 <strong>Calculation Type</strong> is a key field on the condition
            type that decides how the system computes the value: <code>A</code>{" "}
            = Percentage, <code>B</code> = Fixed Amount (used later for header
            discounts), <code>C</code> = Quantity-based, etc.
          </div>
          <div className="callout">
            💡
            <strong>Since a common discount is only ONE condition type</strong>,
            you must decide upfront: will it be percentage-based or
            quantity-based? You can't mix both in a single condition type — pick
            one calculation type.
          </div>
          <h3>Step 3: Place in Pricing Procedure</h3>
          <p>
            T-code: <span className="tcode">V/08</span>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>From</th>
                <th>Requirement</th>
                <th>Account Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>61</td>
                <td>PCOM</td>
                <td>20</td>
                <td>2</td>
                <td>ERS</td>
              </tr>
            </tbody>
          </table>
          <div className="callout purple">
            📐 <strong>Placement rule:</strong> Any discount must sit
            <strong>
              between Base Value (step 20) and Gross Value (step 70)
            </strong>
            . The exact step number doesn't matter — 61, 25, 31, anything works
            — as long as it's numerically between 20 and 70.
          </div>
          <h3>Step 4: Disable Individual Discounts</h3>
          <div className="callout red">
            🔒 Since real businesses use <em>either</em> individual
            <em>or</em> common discounts (never both), go back to the 4
            individual discount condition types (P004, P005, P007, P020) in the
            pricing procedure and check <strong>"Manual"</strong> — this stops
            them from auto-applying, so only the Common Discount (PCOM) takes
            effect.
          </div>
        </div>
        {/* <!-- Section 3: Master Data --> */}
        <div className="card gold">
          <h2>
            <span className="badge">3</span> Maintain Condition Records — PCOM
          </h2>
          <p>
            T-code: <span className="tcode">VK11</span> → Condition Type
            <code>PCOM</code>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Key Combination</th>
                <th>Records</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customer</td>
                <td>100551 = 10%, 100552 = 10%, 100560 = 10%</td>
              </tr>
              <tr>
                <td>Price Group</td>
                <td>P1 = 5%, P2 = 6%, P3 = 7%</td>
              </tr>
              <tr>
                <td>Customer + Material</td>
                <td>100551, 100552, 100560 + Vaccine 1500 = 3% each</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>Vaccine 1500 = 2%</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 4: Results --> */}
        <div className="card green">
          <h2>
            <span className="badge">🎉</span> Verifying the Result — Exclusive
            Checked
          </h2>
          <div className="callout green">
            ✅ Since <strong>Exclusive is checked</strong> on the PCOM access
            sequence, the system stops at the <em>first</em> valid record found
            and does not add up multiple discounts anymore.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Discount Applied</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100551</td>
                <td className="discount-amt">10%</td>
                <td>
                  Customer record found first (most specific) → stops
                  immediately, ignores price group 7%, cust/material 3%,
                  material 2%
                </td>
              </tr>
              <tr>
                <td>100553</td>
                <td className="discount-amt">5%</td>
                <td>
                  No customer-level record → falls to Price Group (P1 = 5%) →
                  stops there
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            💡 <strong>Contrast with unchecked exclusive:</strong> if exclusive
            were unchecked, 100551 would get all 4 discounts (10%, 7%, 3%, 2%) —
            same stacking problem as before. Checking exclusive is what actually
            solves the business problem.
          </div>
        </div>
        {/* <!-- Section 5: Header Discount --> */}
        <div className="card orange">
          <h2>
            <span className="badge">4</span> Header Discount
          </h2>
          <div className="callout">
            💡 <strong>Header Discount</strong> = a discount applied at the
            <strong>document header level</strong>, which then gets distributed
            across <strong>all line items</strong> in the sales order.
          </div>
          <h3>Key Characteristics</h3>
          <ul>
            <li>
              Applicable to <strong>all line items</strong> in the sales
              document (not just one material/customer)
            </li>
            <li>
              <strong>Has no access sequence</strong> — so it cannot be looked
              up automatically via condition records
            </li>
            <li>
              Must always be <strong>entered manually</strong> by the user in
              the order
            </li>
          </ul>
          <h3>Standard Condition Types</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Type</th>
                <th>Condition Type</th>
                <th>Calculation Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Header Fixed Discount</td>
                <td>
                  <code>HB00</code>
                </td>
                <td>B (Fixed Amount)</td>
              </tr>
              <tr>
                <td>Header Percentage Discount</td>
                <td>
                  <code>HA00</code>
                </td>
                <td>A (Percentage)</td>
              </tr>
            </tbody>
          </table>
          <h3>Configuration Steps</h3>
          <p>
            T-code: <span className="tcode">V/08</span> → Pricing Procedure →
            Control
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>From</th>
                <th>Manual?</th>
                <th>Account Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>62</td>
                <td>HB00</td>
                <td>20</td>
                <td>✅ Checked</td>
                <td>ERS</td>
              </tr>
              <tr>
                <td>63</td>
                <td>HA00</td>
                <td>20</td>
                <td>✅ Checked</td>
                <td>ERS</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            ⚠️ <strong>Manual must be checked</strong> for header conditions —
            since there's no access sequence, the system has no way to
            auto-determine a value; the user must type it in directly on the
            order.
          </div>
        </div>
        {/* <!-- Section 6: Header Discount Result --> */}
        <div className="card">
          <h2>
            <span className="badge">🎉</span> Seeing Header Discount in Action
          </h2>
          <p>
            To see a header discount properly distributed, you need
            <strong>multiple line items</strong> in one order (a single-material
            order won't show the distribution effect clearly).
          </p>
          <h3>Sample Order — 3 Materials</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Material</th>
                <th>Quantity</th>
                <th>Line Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vaccine 1500</td>
                <td>100</td>
                <td>₹9,80,000</td>
              </tr>
              <tr>
                <td>Vaccine 1020500</td>
                <td>100</td>
                <td>₹10,00,000</td>
              </tr>
              <tr>
                <td>Vaccine 1020600</td>
                <td>100</td>
                <td>₹11,00,000</td>
              </tr>
            </tbody>
          </table>
          <h3>Entering Header Discount</h3>
          <div className="stepper">
            <div className="step">
              Go to order → <strong>Header</strong> →<strong>Conditions</strong>{" "}
              tab (not the line item conditions)
            </div>
            <div className="step">
              Enter <code>HB00</code> = ₹50,000 (fixed discount) → select the
              row → click <strong>Activate</strong>
            </div>
            <div className="step">
              Enter <code>HA00</code> = 10% (percentage discount) → select the
              row → click <strong>Activate</strong>
            </div>
          </div>
          <h3>How ₹50,000 Gets Distributed (Proportional to Line Value)</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Line Item</th>
                <th>Line Value</th>
                <th>Share of ₹50,000</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vaccine 1500</td>
                <td>₹9,80,000</td>
                <td className="discount-amt">₹15,909.09</td>
              </tr>
              <tr>
                <td>Vaccine 1020500</td>
                <td>₹10,00,000</td>
                <td className="discount-amt">₹16,233.77</td>
              </tr>
              <tr>
                <td>Vaccine 1020600</td>
                <td>₹11,00,000</td>
                <td className="discount-amt">₹17,857.14</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong>Total</strong>
                </td>
                <td className="price-final">₹50,000.00</td>
              </tr>
            </tbody>
          </table>
          <div className="distribution-bar">
            <div className="db-blue">15909</div>
            <div className="db-teal">16234</div>
            <div className="db-purple">17857</div>
          </div>
          <div className="callout blue">
            🧮 <strong>Distribution logic:</strong> The header discount is
            spread across line items
            <strong>proportional to each line's value</strong> relative to the
            total order value — not split equally. Higher-value lines absorb a
            larger share of the discount.
          </div>
        </div>
        {/* <!-- Section 7: Comparison table --> */}
        <div className="card">
          <h2>
            <span className="badge">📊</span> Discount Approaches — Side by Side
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Approach</th>
                <th>Access Sequence?</th>
                <th>Auto-determined?</th>
                <th>Multiple discounts stack?</th>
                <th>Scope</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Individual Discounts (Lect 68)</td>
                <td>✅ Yes (one each)</td>
                <td>✅ Yes</td>
                <td>⚠️ Yes — can stack, risk of loss</td>
                <td>Per line item</td>
              </tr>
              <tr>
                <td>Common Discount (PCOM)</td>
                <td>✅ Yes (one, multi-table)</td>
                <td>✅ Yes</td>
                <td>❌ No (exclusive checked)</td>
                <td>Per line item</td>
              </tr>
              <tr>
                <td>Header Discount (HB00/HA00)</td>
                <td>❌ No</td>
                <td>❌ No — manual entry</td>
                <td>N/A</td>
                <td>Whole document, distributed across lines</td>
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
                <td>
                  Why would a company use Common Discount instead of individual
                  discounts?
                </td>
                <td>
                  To prevent multiple discounts stacking on the same line, which
                  causes revenue loss
                </td>
              </tr>
              <tr>
                <td>
                  How does specificity ranking differ for discounts vs. base
                  price?
                </td>
                <td>
                  For base price, lower price = more specific. For discounts,
                  higher discount % = more specific
                </td>
              </tr>
              <tr>
                <td>What is Calculation Type on a condition type?</td>
                <td>
                  A field controlling how the value is computed — A =
                  Percentage, B = Fixed Amount, etc.
                </td>
              </tr>
              <tr>
                <td>
                  What is a Header Discount, and how is it different from a
                  line-item discount?
                </td>
                <td>
                  It applies to the whole document, has no access sequence, must
                  be entered manually, and gets distributed proportionally
                  across all line items — unlike line-item discounts which apply
                  per material/customer via condition records
                </td>
              </tr>
              <tr>
                <td>
                  How is a header discount amount distributed across line items?
                </td>
                <td>
                  Proportional to each line's value relative to the total order
                  value, not split equally
                </td>
              </tr>
              <tr>
                <td>
                  Can a company use both individual and common discounts
                  together?
                </td>
                <td>
                  No — real businesses use either one or the other; the unused
                  type is marked "Manual" to disable auto-determination
                </td>
              </tr>
              <tr>
                <td>
                  Where must a discount step sit in the pricing procedure?
                </td>
                <td>
                  Between Base Value (step 20) and Gross Value (step 70) — exact
                  step number doesn't matter
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
                  <span className="tcode">V/07</span>
                </td>
                <td>Create Access Sequence PCOM</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/06</span>
                </td>
                <td>Define Condition Type PCOM (copied from K007)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>Place PCOM / HB00 / HA00 in Pricing Procedure</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VK11</span>
                </td>
                <td>Maintain condition records for PCOM</td>
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
                <td>PCOM access sequence order</td>
                <td>
                  Customer (679) → Price Group (680) → Customer+Material (676) →
                  Material (678), all Exclusive checked
                </td>
              </tr>
              <tr>
                <td>PCOM condition type</td>
                <td>Copied from K007; Calculation Type A (percentage)</td>
              </tr>
              <tr>
                <td>PCOM pricing procedure step</td>
                <td>61, From 20, Requirement 2, Account Key ERS</td>
              </tr>
              <tr>
                <td>Header Fixed Discount</td>
                <td>HB00, Calculation Type B</td>
              </tr>
              <tr>
                <td>Header Percentage Discount</td>
                <td>HA00, Calculation Type A</td>
              </tr>
              <tr>
                <td>Header discount steps</td>
                <td>
                  62 (HB00), 63 (HA00), both From 20, Manual checked, Account
                  Key ERS
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card cyan">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            To solve the discount-stacking problem from Lecture 68, a single
            <strong>Common Discount</strong> condition type (PCOM) was built
            with a multi-table access sequence (Customer → Price Group →
            Customer/Material → Material, all reused tables) and Exclusive
            checked — ensuring only one discount ever wins. Individual discounts
            were then disabled via "Manual." Separately,
            <strong>Header Discounts</strong> (HB00 fixed, HA00 percentage) were
            introduced as document-level, manually-entered discounts with no
            access sequence, which get distributed proportionally across all
            line items based on their value share of the total order.
          </p>
        </div>
        {/* <!-- Section 8: Key Takeaways --> */}
        <div className="card cyan">
          <h2>
            <span className="badge">⭐</span> Key Takeaways &amp; Next Class
          </h2>
          <ul>
            <li>
              <strong>
                Discount specificity is the reverse of base price:
              </strong>
              higher discount % = more specific, lower % = more general
            </li>
            <li>
              <strong>Common Discount</strong> solves the "multiple discounts
              stacking" problem by using one condition type with a multi-table
              access sequence + Exclusive checked
            </li>
            <li>
              In real projects, choose
              <strong>either individual or common discounts</strong> — never
              configure both active at once (mark the unused ones as Manual)
            </li>
            <li>
              <strong>Calculation Type</strong> on the condition type controls
              percentage (A) vs. fixed amount (B) vs. others
            </li>
            <li>
              <strong>Header Discounts</strong> have no access sequence, must be
              entered manually at the document header, and get
              <strong>proportionally distributed</strong> across all line items
              based on line value
            </li>
            <li>
              Any discount step in the pricing procedure must sit
              <strong>
                between step 20 (Base Value) and step 70 (Gross Value)
              </strong>
              — exact number doesn't matter
            </li>
          </ul>
          <p>
            📅 <strong>Next lecture:</strong> Surcharges configuration.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 69 Notes — SAP SD Pricing: Common Discount &amp; Header Discount
        🎓
      </p>
    </div>
  );
};

export default Pricing69;
