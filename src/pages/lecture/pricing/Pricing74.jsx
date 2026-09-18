const Pricing74 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-pink">
        <h1>
          🧮 Lecture 74 — Rounding Rule, Structure Condition &amp; Group
          Condition
        </h1>
        <p>
          SAP SD | More condition type controls + threshold-based discounts
          across multiple line items
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 1: Rounding Rule --> */}
        <div className="card orange">
          <h2>
            <span className="badge">1</span> Rounding Rule
          </h2>
          <div className="callout">
            💡 Controls whether the system performs
            <strong>commercial rounding</strong>, always rounds
            <strong>up</strong>, or always rounds <strong>down</strong> when
            converting decimals.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Setting</th>
                <th>Behavior</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-blank">Blank</span>
                </td>
                <td>
                  Commercial rounding: 0.50 and above rounds up, below 0.50
                  rounds down
                </td>
                <td>100.49 → 100, 100.50 → 101</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-a">A</span>
                </td>
                <td>Always round up, regardless of decimal size</td>
                <td>100.01 → 101</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-b">B</span>
                </td>
                <td>Always round down, regardless of decimal size</td>
                <td>100.99 → 100</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            This is a distinct field from the Calculation Type "17 – Rounding as
            per T001R" seen in Lecture 71; that one triggers currency-level
            rounding rules, while this Rounding Rule field directly sets the
            up/down/commercial behavior on the condition type itself.
          </p>
        </div>
        {/* <!-- Section 2: Structure Condition --> */}
        <div className="card teal">
          <h2>
            <span className="badge">2</span> Structure Condition (KUMU
            Revisited)
          </h2>
          <div className="callout">
            💡 <strong>Structure Condition</strong> is maintained
            <strong>only for the KUMU condition type</strong>, set to value
            <strong>B</strong>.
          </div>
          <p>
            This is the exact control field responsible for KUMU's behavior
            (introduced conceptually in Lecture 72): it accumulates the values
            of all BOM components and displays the total on the
            <strong>main/header item</strong>.
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Structure Condition</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>KUMU</td>
                <td>B</td>
                <td>
                  Accumulates component values and displays the total in the
                  main item (e.g. Computer = ₹15,000, sum of
                  CPU+Monitor+Keyboard+Mouse)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🔗 <strong>Connecting the dots:</strong> Lecture 72 showed
            <em>what</em> KUMU does; this lecture reveals <em>how</em> it does
            it — the Structure Condition field set to B is the actual switch
            that enables the roll-up behavior.
          </div>
        </div>
        {/* <!-- Section 3: Group Condition concept --> */}
        <div className="card purple">
          <h2>
            <span className="badge">3</span> Group Condition — The Business Need
          </h2>
          <div className="callout purple">
            💡 <strong>Group Condition</strong> is used when a discount should
            be based on the <strong>total document value</strong> or the
            <strong>combined value of a specific group of materials</strong> —
            not on a single line item.
          </div>
          <h3>Example 1: Total Document Value Threshold</h3>
          <div className="callout">
            🎯 <strong>Requirement:</strong> If the total document value reaches
            ₹10,00,000, offer a ₹50,000 discount.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Line Item</th>
                <th>Material</th>
                <th>Value</th>
                <th>Discount Distributed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Material A</td>
                <td>₹3,00,000</td>
                <td className="amount">₹15,000</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Material B</td>
                <td>₹2,00,000</td>
                <td className="amount">₹10,000</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Material C</td>
                <td>₹1,00,000</td>
                <td className="amount">₹5,000</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Material D</td>
                <td>₹4,00,000</td>
                <td className="amount">₹20,000</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong>Total</strong>
                </td>
                <td>
                  <strong>₹10,00,000</strong>
                </td>
                <td className="price-final">₹50,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ <strong>Distribution logic:</strong> The ₹50,000 discount is
            spread across all line items
            <strong>proportional to each line's value</strong> — exactly like
            the Header Discount distribution seen in Lecture 69.
          </div>
          <h3>Example 2: Group of Materials Value Threshold</h3>
          <div className="callout">
            🎯 <strong>Requirement:</strong> If the combined value of a
            <em>specific group</em> of materials (not the whole order) reaches
            ₹10,00,000, offer a ₹75,000 discount.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Material</th>
                <th>In Group?</th>
                <th>Value</th>
                <th>Discount Distributed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PMAT1</td>
                <td>✅ Yes</td>
                <td>₹3,00,000</td>
                <td className="amount">₹22,500</td>
              </tr>
              <tr>
                <td>PMAT2</td>
                <td>✅ Yes</td>
                <td>₹2,00,000</td>
                <td className="amount">₹15,000</td>
              </tr>
              <tr>
                <td>PMAT3</td>
                <td>✅ Yes</td>
                <td>₹5,00,000</td>
                <td className="amount">₹37,500</td>
              </tr>
              <tr>
                <td>Material C, D, etc.</td>
                <td>❌ No</td>
                <td>(any value)</td>
                <td>Not considered — excluded from group total</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong>Group Total (PMAT1+2+3)</strong>
                </td>
                <td>
                  <strong>₹10,00,000</strong>
                </td>
                <td className="price-final">₹75,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            ⚠️ <strong>Key difference from Example 1:</strong> Only materials
            <em>belonging to the defined group</em> count toward the threshold —
            other materials in the same order are completely ignored for this
            calculation, even if they'd push the overall order value higher.
          </div>
        </div>
        {/* <!-- Section 4: Group Condition fields --> */}
        <div className="card gold">
          <h2>
            <span className="badge">4</span> The 3 Group Condition Control
            Fields
          </h2>
          <h3>Field 1: Group Condition Routine</h3>
          <div className="callout">
            💡 Controls <strong>whether</strong> to consider the total document
            value or a specific group of materials' value.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Value</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Consider <strong>Total Document Value</strong>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Consider <strong>Group of Materials Value</strong> (based on
                  Material Pricing Group)
                </td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            📌 "Group of Materials" is defined via the
            <strong>Material Pricing Group</strong> field (Material Master →
            Sales Org 2 view). Materials sharing the same Material Pricing Group
            value (e.g. "M01010") are treated as one group for this calculation.
          </p>
          <h3>Field 2: Group Condition (checkbox)</h3>
          <p>
            Simply enables the group condition behavior on this condition type —
            must be checked for Group Condition Routine to take effect.
          </p>
          <h3>Field 3: Rounding Difference Comparison</h3>
          <div className="callout">
            💡 When distributing the group discount amount across line items,
            decimals sometimes don't divide evenly. If checked, any
            <strong>leftover/balance amount</strong> from rounding is added to
            the
            <strong>highest-value line item</strong>.
          </div>
        </div>
        {/* <!-- Section 5: Configuration --> */}
        <div className="card pink">
          <h2>
            <span className="badge">5</span> Configuration — Group Condition
            (Total Document Value)
          </h2>
          <h3>Step 1: Create Condition Table</h3>
          <p>
            T-code: <span className="tcode">V/03</span>
          </p>
          <div className="callout blue">
            🔑 <strong>Combination: Sales Organization only</strong> — no
            material, no customer, since this discount is based purely on the
            document's total value.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Table #</th>
                <th>Combination</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-new">684 (new)</span>
                </td>
                <td>Sales Organization only</td>
              </tr>
            </tbody>
          </table>
          <h3>Step 2: Create Access Sequence</h3>
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
                <td>PGR1</td>
                <td>10</td>
                <td>684</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
          <h3>Step 3: Create Condition Type</h3>
          <p>
            T-code: <span className="tcode">V/06</span> → Copy from
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
                <td>PGR1 — "Group Condition, Total Document Value"</td>
              </tr>
              <tr>
                <td>Access Sequence</td>
                <td>PGR1</td>
              </tr>
              <tr>
                <td>Calculation Type</td>
                <td>
                  B (Fixed Amount — the discount is a fixed ₹ figure, not %)
                </td>
              </tr>
              <tr>
                <td>Scale Basis</td>
                <td>B (Value Scale)</td>
              </tr>
              <tr>
                <td>Group Condition</td>
                <td>✅ Checked</td>
              </tr>
              <tr>
                <td>Group Condition Routine</td>
                <td>1 (Total Document Value)</td>
              </tr>
              <tr>
                <td>Rounding Difference Comparison</td>
                <td>✅ Checked</td>
              </tr>
            </tbody>
          </table>
          <h3>Step 4: Place in Pricing Procedure</h3>
          <p>
            T-code: <span className="tcode">V/08</span> → Pricing Procedure
            PVAA01
          </p>
          <div className="callout purple">
            📐 Placed <strong>between Base Value and Gross Value</strong> — same
            zone as regular discounts.
          </div>
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
                <td>64</td>
                <td>PGR1</td>
                <td>20</td>
                <td>2</td>
                <td>ERS</td>
              </tr>
            </tbody>
          </table>
          <h3>Step 5: Maintain Condition Records (with Scales!)</h3>
          <p>
            T-code: <span className="tcode">VK11</span> → Condition Type
            <code>PGR1</code>
          </p>
          <div className="stepper">
            <div className="step">
              Enter Sales Organization <code>P100</code>, amount =
              <strong>₹50,000</strong>
            </div>
            <div className="step">
              Select the row → click the <strong>Scales</strong> icon
            </div>
            <div className="step">
              Inside Scales, enter the threshold: <strong>₹10,00,000</strong>
            </div>
            <div className="step">Enter → Save</div>
          </div>
          <div className="callout red">
            ⚠️ <strong>Scales are essential here</strong> — without setting the
            ₹10,00,000 threshold in the Scales screen, the ₹50,000 would apply
            unconditionally rather than only once the document crosses that
            value.
          </div>
        </div>
        {/* <!-- Section 6: Result verification --> */}
        <div className="card green">
          <h2>
            <span className="badge">🎉</span> Verifying the Result
          </h2>
          <h3>Test 1: Order Below Threshold</h3>
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
                <td>VAXINE1500</td>
                <td>50</td>
                <td>₹5,00,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            ❌ Total = ₹5,00,000 (below ₹10,00,000 threshold) →
            <strong>No PGR1 discount applied</strong>.
          </div>
          <h3>Test 2: Order Reaching Threshold (Multiple Line Items)</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Line Item</th>
                <th>Material</th>
                <th>Quantity</th>
                <th>Value</th>
                <th>PGR1 Discount Distributed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>VAXINE1500</td>
                <td>50</td>
                <td>₹5,00,000</td>
                <td className="amount">₹24,509.81</td>
              </tr>
              <tr>
                <td>2</td>
                <td>VAXINE1500 (2nd line)</td>
                <td>50</td>
                <td>₹5,00,000</td>
                <td className="amount">₹14,705.88</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Vaccine 1020</td>
                <td>20</td>
                <td>₹2,00,000</td>
                <td className="amount">₹10,784.31</td>
              </tr>
              <tr>
                <td colSpan="3">
                  <strong>Total Document Value</strong>
                </td>
                <td>
                  <strong>₹12,00,000</strong>
                </td>
                <td className="price-final">₹50,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ Once total document value crosses ₹10,00,000, the ₹50,000
            discount is triggered and distributed proportionally across all line
            items based on their individual values.
          </div>
          <p className="note-text">
            📅 <strong>Next class:</strong> Group Condition for a specific group
            of materials (Routine = 3), configured live in the system.
          </p>
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
                <td>What does the Rounding Rule field control?</td>
                <td>
                  Whether the system does commercial rounding, always rounds up,
                  or always rounds down — Blank=commercial, A=round up, B=round
                  down
                </td>
              </tr>
              <tr>
                <td>
                  What is Structure Condition, and which condition type uses it?
                </td>
                <td>
                  A field maintained only for KUMU, set to B, which enables it
                  to accumulate component values and display the total on the
                  main/header item
                </td>
              </tr>
              <tr>
                <td>What is the purpose of Group Condition?</td>
                <td>
                  To base a discount on the total document value or a specific
                  group of materials' combined value, rather than a single line
                  item
                </td>
              </tr>
              <tr>
                <td>What does Group Condition Routine = 1 vs 3 mean?</td>
                <td>
                  1 = consider Total Document Value; 3 = consider a Group of
                  Materials value (based on Material Pricing Group)
                </td>
              </tr>
              <tr>
                <td>
                  What field defines which materials belong to a "group" for
                  Group Condition Routine = 3?
                </td>
                <td>
                  Material Pricing Group (Material Master → Sales Org 2 view)
                </td>
              </tr>
              <tr>
                <td>What does "Rounding Difference Comparison" do?</td>
                <td>
                  Adds any leftover/balance amount from uneven distribution to
                  the highest-value line item
                </td>
              </tr>
              <tr>
                <td>
                  Why is the condition table for PGR1 just "Sales Organization"
                  with no material or customer?
                </td>
                <td>
                  Because the discount is based on the whole document's total
                  value, not tied to any specific material or customer
                </td>
              </tr>
              <tr>
                <td>Why must Scales be maintained in VK11 for PGR1?</td>
                <td>
                  Without the scale (₹10,00,000 threshold), the discount would
                  apply unconditionally instead of only once the document value
                  crosses that point
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
                  <span className="tcode">V/03</span>
                </td>
                <td>Create Condition Table 684 (Sales Organization only)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/07</span>
                </td>
                <td>Create Access Sequence PGR1</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/06</span>
                </td>
                <td>
                  Define Condition Type PGR1 (copied from K007) — set
                  Calculation Type, Scale Basis, Group Condition, Group
                  Condition Routine, Rounding Difference Comparison
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  Place PGR1 in Pricing Procedure (step 64, between Base Value
                  and Gross Value)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VK11</span>
                </td>
                <td>
                  Maintain PGR1 condition record with Scales (₹50,000 discount
                  at ₹10,00,000 threshold)
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
                <td>Rounding Rule options</td>
                <td>Blank=Commercial, A=Round Up, B=Round Down</td>
              </tr>
              <tr>
                <td>Structure Condition (KUMU)</td>
                <td>B</td>
              </tr>
              <tr>
                <td>Group Condition Routine options</td>
                <td>1=Total Document Value, 3=Group of Materials Value</td>
              </tr>
              <tr>
                <td>PGR1 condition table</td>
                <td>684 (Sales Organization only)</td>
              </tr>
              <tr>
                <td>PGR1 access sequence</td>
                <td>PGR1, table 684, Exclusive checked</td>
              </tr>
              <tr>
                <td>PGR1 condition type settings</td>
                <td>
                  Copied from K007; Calc Type B; Scale Basis B; Group Condition
                  ✅; Routine=1; Rounding Diff. Comparison ✅
                </td>
              </tr>
              <tr>
                <td>PGR1 pricing procedure step</td>
                <td>64, From 20, Account Key ERS</td>
              </tr>
              <tr>
                <td>Sample threshold/discount</td>
                <td>₹10,00,000 → ₹50,000 (via Scales in VK11)</td>
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
            This lecture covered two more condition type control fields —
            <strong>Rounding Rule</strong> (commercial/up/down) and
            <strong>Structure Condition</strong> (the actual switch, set to B,
            behind KUMU's BOM roll-up behavior from Lecture 72) — then
            introduced
            <strong>Group Condition</strong>, used when a discount should
            trigger based on total document value or a defined group of
            materials' combined value rather than a single line item.
            Configuration followed the familiar pattern: a minimal condition
            table (Sales Org only), a new access sequence and condition type
            (PGR1, copied from K007), placed between Base Value and Gross Value.
            The key twist was using
            <strong>Scales</strong> in VK11 to set a threshold (₹10,00,000 →
            ₹50,000 discount), with the Group Condition Routine field (1 vs 3)
            determining whether the whole order or just a
            Material-Pricing-Group-defined subset counts toward that threshold.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 74 Notes — SAP SD Pricing: Rounding Rule, Structure Condition
        &amp; Group Condition 🎓
      </p>
    </div>
  );
};

export default Pricing74;
