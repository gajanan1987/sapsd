const Pricing77 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-cyan">
        <h1>📐 Lecture 77 — Condition Update, Scales &amp; Exclusion</h1>
        <p>
          SAP SD | Quantity/value-restricted discounts, slab-based pricing, and
          eliminating competing discounts
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 1: Condition Update config --> */}
        <div className="card cyan">
          <h2>
            <span className="badge">1</span> Configuring Condition Update
          </h2>
          <div className="callout">
            Recap from last class: <strong>Condition Update</strong> restricts a
            condition record to a particular quantity, value, or number of
            orders. Business need: offer ₹4,000 discount per bottle, valid only
            for the first 10,000 quantity ordered.
          </div>
          <h3>Step 1: Access Sequence</h3>
          <p>
            T-code: <span className="tcode">V/07</span>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Access Sequence</th>
                <th>Access</th>
                <th>Table</th>
                <th>Exclusive?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PUPP</td>
                <td>10</td>
                <td>678 (Sales Org + Material)</td>
                <td>Checked</td>
              </tr>
            </tbody>
          </table>
          <h3>Step 2: Condition Type</h3>
          <p>
            T-code: <span className="tcode">V/06</span> — copy from
            <code>K007</code>
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
                <td>New Condition Type</td>
                <td>PUPP</td>
              </tr>
              <tr>
                <td>Access Sequence</td>
                <td>PUPP</td>
              </tr>
              <tr>
                <td>Calculation Type</td>
                <td>C (Quantity-based)</td>
              </tr>
              <tr>
                <td>Condition Update</td>
                <td>Checked</td>
              </tr>
            </tbody>
          </table>
          <h3>Step 3: Pricing Procedure</h3>
          <p>
            T-code: <span className="tcode">V/08</span> — placed between Base
            Value and Gross Value
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
                <td>67</td>
                <td>PUPP</td>
                <td>20</td>
                <td>2</td>
                <td>ERS</td>
              </tr>
            </tbody>
          </table>
          <h3>Step 4: Condition Records with Limits</h3>
          <p>
            T-code: <span className="tcode">VK11</span> — Condition Type PUPP,
            Sales Org P100, Material Vaccine 1500, Amount ₹4,000
          </p>
          <div className="callout blue">
            Select the record → go to <strong>Additional Data</strong> → 3
            restriction fields appear under "Limits for Pricing":
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Field</th>
                <th>Purpose</th>
                <th>Value Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Value</td>
                <td>Restrict total discount by a rupee cap</td>
                <td>Not used in this example</td>
              </tr>
              <tr>
                <td>Number of Orders</td>
                <td>
                  Restrict how many orders can use this discount (e.g. max 3 — a
                  4th or 5th order throws an error)
                </td>
                <td>Not used in this example</td>
              </tr>
              <tr>
                <td>Quantity</td>
                <td>Restrict discount to a total quantity across all orders</td>
                <td>10,000</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 2: Testing Condition Update --> */}
        <div className="card green">
          <h2>
            <span className="badge">🎉</span> Verifying Condition Update — Order
            by Order
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Order / Customer</th>
                <th>Quantity Ordered</th>
                <th>Quantity Remaining Before</th>
                <th>Discount Applied</th>
                <th>Running Total Used</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100553</td>
                <td>3,000</td>
                <td>10,000</td>
                <td className="amount">₹4,000 × 3,000 = ₹1,20,00,000</td>
                <td>3,000 / 10,000</td>
              </tr>
              <tr>
                <td>100554</td>
                <td>5,000</td>
                <td>7,000</td>
                <td className="amount">₹4,000 × 5,000 = ₹2,00,00,000</td>
                <td>8,000 / 10,000</td>
              </tr>
              <tr>
                <td>Next customer</td>
                <td>3,000</td>
                <td>2,000</td>
                <td className="amount">
                  Only ₹4,000 × 2,000 = ₹80,00,000 (partial!)
                </td>
                <td>10,000 / 10,000</td>
              </tr>
              <tr>
                <td>Next customer</td>
                <td>1,000</td>
                <td>0</td>
                <td className="tag tag-no">No discount — quantity exhausted</td>
                <td>10,000 / 10,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            Key behavior: once cumulative quantity hits the 10,000 limit, the
            discount either applies <strong>partially</strong> (for the order
            that crosses the threshold) or <strong>not at all</strong> (for
            orders placed after the limit is fully used) — regardless of which
            customer places the order.
          </div>
        </div>
        {/* <!-- Section 3: Scales --> */}
        <div className="card orange">
          <h2>
            <span className="badge">2</span> Scales — Slab-Based Pricing
          </h2>
          <div className="callout">
            <strong>Scales</strong> = maintaining price in a slab system, where
            the rate changes based on quantity, value, or weight brackets.
          </div>
          <h3>Sample Scale Table</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>From Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0</td>
                <td>10,000</td>
              </tr>
              <tr>
                <td>100</td>
                <td>9,950</td>
              </tr>
              <tr>
                <td>200</td>
                <td>9,900</td>
              </tr>
              <tr>
                <td>300</td>
                <td>9,850</td>
              </tr>
              <tr>
                <td>400</td>
                <td>9,800</td>
              </tr>
              <tr>
                <td>500</td>
                <td>9,750</td>
              </tr>
              <tr>
                <td>1,000</td>
                <td>9,700</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            Worked example: ordering <strong>350 units</strong> → falls in the
            "From 300" bracket → the entire quantity is priced at
            <strong>9,850</strong> (not a blended rate).
          </div>
        </div>
        {/* <!-- Section 4: Scale Basis, Check Value --> */}
        <div className="card purple">
          <h2>
            <span className="badge">3</span> Scale Fields — Scale Basis &amp;
            Check Value
          </h2>
          <h3>Scale Basis</h3>
          <div className="callout">
            Controls <strong>what</strong> the slab is measured on.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Code</th>
                <th>Basis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>B</td>
                <td>Value Scale</td>
              </tr>
              <tr>
                <td>C</td>
                <td>Quantity Scale</td>
              </tr>
              <tr>
                <td>D</td>
                <td>Gross Weight Scale</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            In the class example, Scale Basis = C (Quantity Scale).
          </p>
          <h3>Check Value (Ascending / Descending)</h3>
          <div className="callout">
            Controls whether the slab price should <strong>increase</strong> or
            <strong>decrease</strong> as the quantity/value grows.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Code</th>
                <th>Direction</th>
                <th>Typical Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>Descending (decreasing)</td>
                <td>Base Price — price per unit drops as quantity grows</td>
              </tr>
              <tr>
                <td>B</td>
                <td>Ascending (increasing)</td>
                <td>Discount — discount amount grows as quantity grows</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            Since the example scale is on Base Price, it's set to
            <strong>A (Descending)</strong> — larger orders get a cheaper
            per-unit price. If this were applied to a discount instead, it must
            be set to
            <strong>B (Ascending)</strong>, since discounts should grow, not
            shrink, with quantity.
          </div>
        </div>
        {/* <!-- Section 5: Scale Type --> */}
        <div className="card teal">
          <h2>
            <span className="badge">4</span> Scale Type — From Scale, To Scale,
            Graduated Scale
          </h2>
          <div className="callout">
            Controls <strong>how</strong> the slab price is calculated and
            applied to the order quantity.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Code</th>
                <th>Type</th>
                <th>Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Blank / A</td>
                <td>From Scale</td>
                <td>
                  Entire order quantity is priced at the single rate matching
                  its bracket
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td>To Scale</td>
                <td>
                  Maintained as "up to" ranges instead of "from" — but produces
                  the same single-rate result as From Scale
                </td>
              </tr>
              <tr>
                <td>D</td>
                <td>Graduated Scale</td>
                <td>
                  Order quantity is split across every bracket it passes
                  through, each portion priced at its own bracket's rate — like
                  a tax bracket system
                </td>
              </tr>
            </tbody>
          </table>
          <h3>From Scale / To Scale Example (350 quantity)</h3>
          <div className="callout blue">
            Result: entire 350 units priced at <strong>9,850</strong> (the "From
            300" bracket) → total = 350 × 9,850 = ₹34,47,500.
          </div>
          <h3>Graduated Scale Example (350 quantity)</h3>
          <p>
            Instead of one flat rate, the quantity is split across the brackets
            it crosses, generating <strong>multiple PR00 lines</strong> in the
            order:
          </p>
          <div className="scale-bar">
            <div className="sb1">100 @ 10,000</div>
            <div className="sb2">100 @ 9,950</div>
            <div className="sb3">100 @ 9,900</div>
            <div className="sb4">50 @ 9,850</div>
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Bracket</th>
                <th>Quantity in Bracket</th>
                <th>Rate</th>
                <th>Line Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0–99</td>
                <td>100</td>
                <td>10,000</td>
                <td className="amount">₹10,00,000</td>
              </tr>
              <tr>
                <td>100–199</td>
                <td>100</td>
                <td>9,950</td>
                <td className="amount">₹9,95,000</td>
              </tr>
              <tr>
                <td>200–299</td>
                <td>100</td>
                <td>9,900</td>
                <td className="amount">₹9,90,000</td>
              </tr>
              <tr>
                <td>300–349</td>
                <td>50</td>
                <td>9,850</td>
                <td className="amount">₹4,92,500</td>
              </tr>
              <tr>
                <td colspan="3">
                  <strong>Total</strong>
                </td>
                <td className="price-final">₹35,77,500</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            This is the key difference: From/To Scale gives
            <strong>one blended rate</strong> for the whole quantity; Graduated
            Scale gives a<strong>cumulative, bracket-by-bracket</strong>{" "}
            calculation — similar to how income tax slabs work.
          </div>
        </div>
        {/* <!-- Section 6: Exclusion --> */}
        <div className="card red">
          <h2>
            <span className="badge">5</span> Exclusion — Eliminating Competing
            Discounts
          </h2>
          <div className="callout red">
            If a condition type is marked with <strong>Exclusion</strong>, and
            it successfully determines into the sales document, it
            <strong>
              eliminates all condition types below it in the pricing procedure
              that share the same Requirement
            </strong>
            .
          </div>
          <h3>Worked Example</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Requirement</th>
                <th>Exclusion Set?</th>
                <th>Eliminated if P004 determines?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P004 (Material Discount)</td>
                <td>2</td>
                <td>X (checked)</td>
                <td>— (this is the trigger)</td>
              </tr>
              <tr>
                <td>P005, P007, P020 (other discounts)</td>
                <td>2</td>
                <td>—</td>
                <td>Yes — eliminated (same requirement)</td>
              </tr>
              <tr>
                <td>Tax (MWST/PWST)</td>
                <td>10</td>
                <td>—</td>
                <td>No — different requirement</td>
              </tr>
              <tr>
                <td>VPRS</td>
                <td>4</td>
                <td>—</td>
                <td>No — different requirement</td>
              </tr>
              <tr>
                <td>SKTO / SKTV</td>
                <td>9 / 14</td>
                <td>—</td>
                <td>No — different requirement</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            Result verified in order for customer 100551 (Price Group P3): once
            P004 determines, it wipes out every other requirement-2
            discount/surcharge below it — but taxes, VPRS, and cash discounts
            (which all have different requirement numbers) remain unaffected.
          </div>
          <div className="callout blue">
            Practical use: Exclusion lets you enforce "only one discount type
            wins" without needing a separate Common Discount condition type
            (PCOM from Lecture 69) — as long as the competing discounts share
            the same Requirement number in the pricing procedure.
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
                <td>
                  What three limits can Condition Update restrict a condition
                  record to?
                </td>
                <td>
                  Value, Number of Orders, and Quantity — configured under
                  "Additional Data" in VK11
                </td>
              </tr>
              <tr>
                <td>
                  What happens to an order that crosses the quantity limit set
                  by Condition Update?
                </td>
                <td>
                  It gets the discount only for the remaining quantity up to the
                  limit; the balance quantity in that order gets no discount at
                  all
                </td>
              </tr>
              <tr>
                <td>What does Scale Basis control?</td>
                <td>
                  Whether the slab is measured on Value (B), Quantity (C), or
                  Gross Weight (D)
                </td>
              </tr>
              <tr>
                <td>
                  What does the ascending/descending (Check Value) field
                  control, and why is it usually A for base price but B for
                  discounts?
                </td>
                <td>
                  Whether the slab price increases (B) or decreases (A) as
                  quantity grows; base price per unit typically drops with
                  volume (A), while discount amounts typically grow with volume
                  (B)
                </td>
              </tr>
              <tr>
                <td>
                  What is the difference between From/To Scale and Graduated
                  Scale?
                </td>
                <td>
                  From/To Scale applies one single blended rate to the entire
                  order quantity based on its bracket; Graduated Scale splits
                  the quantity across every bracket it passes through, pricing
                  each portion at its own bracket rate
                </td>
              </tr>
              <tr>
                <td>What does Exclusion do on a condition type?</td>
                <td>
                  If that condition type determines in the order, it eliminates
                  every other condition type below it in the pricing procedure
                  that shares the same Requirement number
                </td>
              </tr>
              <tr>
                <td>Why doesn't Exclusion on P004 eliminate Tax or VPRS?</td>
                <td>
                  Because Tax and VPRS have different Requirement numbers (10
                  and 4) than P004's Requirement (2) — Exclusion only affects
                  conditions sharing the exact same requirement
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
                <td>
                  Create Access Sequence PUPP (table 678, Exclusive checked)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/06</span>
                </td>
                <td>
                  Define Condition Type PUPP (copied from K007, Calculation Type
                  C, Condition Update checked); also used to view/set Scale
                  Basis, Check Value, Scale Type, and Exclusion on other
                  condition types
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  Place PUPP in Pricing Procedure (step 67, between Base Value
                  and Gross Value)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VK11</span>
                </td>
                <td>
                  Maintain condition records for PUPP (with Additional Data
                  limits) and PPR0 (with Scales for slab pricing)
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
                <td>PUPP access sequence</td>
                <td>PUPP, table 678, Exclusive checked</td>
              </tr>
              <tr>
                <td>PUPP condition type settings</td>
                <td>Copied from K007; Calc Type C; Condition Update checked</td>
              </tr>
              <tr>
                <td>PUPP pricing procedure step</td>
                <td>67, From 20, Requirement 2, Account Key ERS</td>
              </tr>
              <tr>
                <td>Sample Condition Update limit</td>
                <td>Quantity = 10,000 (discount ₹4,000/unit)</td>
              </tr>
              <tr>
                <td>Scale Basis options</td>
                <td>B=Value, C=Quantity, D=Gross Weight</td>
              </tr>
              <tr>
                <td>Check Value options</td>
                <td>A=Descending, B=Ascending</td>
              </tr>
              <tr>
                <td>Scale Type options</td>
                <td>Blank/A=From Scale, B=To Scale, D=Graduated Scale</td>
              </tr>
              <tr>
                <td>Exclusion mechanism</td>
                <td>
                  Eliminates all lower condition types sharing the same
                  Requirement number when the flagged condition type determines
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
            This lecture completed the
            <strong>Condition Update</strong> configuration previewed last class
            — a discount (PUPP, ₹4,000/bottle) restricted to the first 10,000
            units via the "Additional Data" limits screen in VK11, demonstrated
            across multiple orders showing partial and exhausted discount
            scenarios.
            <strong>Scales</strong> introduced slab-based pricing with three key
            control fields: Scale Basis (quantity/value/weight), Check Value
            (ascending for discounts, descending for base price), and Scale Type
            — where From/To Scale applies one blended rate while Graduated Scale
            prices each quantity portion at its own bracket rate, similar to tax
            slabs. The lecture closed with <strong>Exclusion</strong>, a field
            that lets one condition type automatically eliminate all competing
            condition types sharing the same Requirement number once it
            determines — an alternative way to enforce "only one discount wins"
            without building a separate Common Discount condition type.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 77 Notes — SAP SD Pricing: Condition Update, Scales &amp;
        Exclusion 🎓
      </p>
    </div>
  );
};

export default Pricing77;
