const Pricing75 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-indigo">
        <h1>
          🎛️ Lecture 75 — Group of Materials Discount, Manual Entries &amp;
          Validity Controls
        </h1>
        <p>
          SAP SD | PGR2 configuration + the fields controlling manual price
          edits, header vs. item conditions, and default validity
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 1: Recap --> */}
        <div className="card">
          <h2>
            <span className="badge">↩️</span> Recap
          </h2>
          <div className="callout blue">
            💡 Last class: <strong>Group Condition</strong> for Total Document
            Value (PGR1) — a discount that triggers once the whole order crosses
            a value threshold. Today:
            <strong>Group Condition for a specific Group of Materials</strong>
            (PGR2) — where only certain materials' combined value counts toward
            the threshold.
          </div>
          <p>
            <strong>Business requirement:</strong> If a defined group of
            materials reaches ₹10,00,000 combined value, offer a ₹75,000
            discount.
          </p>
        </div>
        {/* <!-- Section 2: Master data --> */}
        <div className="card orange">
          <h2>
            <span className="badge">1</span> Master Data Setup — 3 Group
            Materials
          </h2>
          <p>
            T-code: <span className="tcode">MM01</span> (create) → extend to all
            distribution channels (P2, P3, P4)
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Material</th>
                <th>Price (PPR0)</th>
                <th>Stock</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PMAT1</td>
                <td>₹1,000</td>
                <td>Maintained</td>
              </tr>
              <tr>
                <td>PMAT2</td>
                <td>₹1,000</td>
                <td>Maintained</td>
              </tr>
              <tr>
                <td>PMAT3</td>
                <td>₹1,000</td>
                <td>Maintained</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            🔑 <strong>Critical field: Material Pricing Group</strong> (Material
            Master → Sales Org 2 view) must be set to the same value —
            <code>01</code> — for all three materials, across every distribution
            channel (P2, P3, P4) they were extended to. This is what makes them
            "belong to the same group" for pricing purposes.
          </div>
        </div>
        {/* <!-- Section 3: Configuration --> */}
        <div className="card teal">
          <h2>
            <span className="badge">2</span> Configuring PGR2 (Group of
            Materials)
          </h2>
          <h3>Step 1: Create Condition Table</h3>
          <p>
            T-code: <span className="tcode">V/03</span>
          </p>
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
                  <span className="tag tag-new">685 (new)</span>
                </td>
                <td>Sales Organization + Material Pricing Group</td>
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
                <td>PGR2</td>
                <td>10</td>
                <td>685</td>
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
                <td>PGR2 — "Group Condition, Group of Materials"</td>
              </tr>
              <tr>
                <td>Access Sequence</td>
                <td>PGR2</td>
              </tr>
              <tr>
                <td>Calculation Type</td>
                <td>
                  B (Fixed Amount — the ₹75,000 discount is a flat figure)
                </td>
              </tr>
              <tr>
                <td>Group Condition</td>
                <td>✅ Checked</td>
              </tr>
              <tr>
                <td>Group Condition Routine</td>
                <td>
                  <strong>3</strong> (Material Pricing Group)
                </td>
              </tr>
              <tr>
                <td>Rounding Difference Comparison</td>
                <td>✅ Checked</td>
              </tr>
              <tr>
                <td>Scale Basis</td>
                <td>B (Value Scale)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            💡 <strong>Only difference from PGR1's config:</strong> Group
            Condition Routine = <strong>3</strong> (Material Pricing Group)
            instead of <strong>1</strong> (Total Document Value) — everything
            else follows the identical pattern.
          </div>
          <h3>Step 4: Place in Pricing Procedure</h3>
          <p>
            T-code: <span className="tcode">V/08</span> → Pricing Procedure
            PVAA01, between Base Value and Gross Value
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
                <td>65</td>
                <td>PGR2</td>
                <td>20</td>
                <td>2</td>
                <td>ERS</td>
              </tr>
            </tbody>
          </table>
          <h3>Step 5: Maintain Condition Records (with Scales)</h3>
          <p>
            T-code: <span className="tcode">VK11</span> → Condition Type
            <code>PGR2</code>
          </p>
          <div className="stepper">
            <div className="step">
              Enter Sales Organization + Material Pricing Group
              <code>01</code> (same group value used in master data) → amount =
              <strong>₹75,000</strong>
            </div>
            <div className="step">
              Select the row → go to <strong>Scales</strong>
            </div>
            <div className="step">
              Enter threshold value: <strong>₹10,00,000</strong> → Save
            </div>
          </div>
        </div>
        {/* <!-- Section 4: Results --> */}
        <div className="card green">
          <h2>
            <span className="badge">🎉</span> Verifying the Result
          </h2>
          <h3>
            Test 1: Non-Group Material + PMAT1 + PMAT2 (Below Group Threshold)
          </h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Material</th>
                <th>In Group?</th>
                <th>Qty</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Other Material</td>
                <td>❌ Not in group</td>
                <td>60</td>
                <td>₹6,00,000+</td>
              </tr>
              <tr>
                <td>PMAT1</td>
                <td>✅</td>
                <td>300</td>
                <td>₹3,00,000</td>
              </tr>
              <tr>
                <td>PMAT2</td>
                <td>✅</td>
                <td>400</td>
                <td>₹4,00,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            ❌ <strong>Result:</strong> Total document value is ~₹13,00,000
            (crosses PGR1's threshold, so <strong>PGR1 applies</strong>) — but
            PGR2 does NOT apply, because the group materials (PMAT1 + PMAT2)
            only total <strong>₹7,00,000</strong>, below the ₹10,00,000 group
            threshold. PGR2 only counts the group materials, ignoring the
            non-group material entirely.
          </div>
          <h3>Test 2: PMAT1 + PMAT2 + PMAT3 (Reaches Group Threshold)</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Material</th>
                <th>Qty</th>
                <th>Value</th>
                <th>PGR2 Distributed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PMAT1</td>
                <td>300</td>
                <td>₹3,00,000</td>
                <td className="amount">₹22,500</td>
              </tr>
              <tr>
                <td>PMAT2</td>
                <td>400</td>
                <td>₹4,00,000</td>
                <td className="amount">₹30,000</td>
              </tr>
              <tr>
                <td>PMAT3</td>
                <td>300</td>
                <td>₹3,00,000</td>
                <td className="amount">₹22,500</td>
              </tr>
              <tr>
                <td colSpan="2">
                  <strong>Group Total</strong>
                </td>
                <td>
                  <strong>₹10,00,000</strong>
                </td>
                <td className="price-final">₹75,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ <strong>Result:</strong> Once the three group materials together
            reach ₹10,00,000, PGR2 triggers and distributes ₹75,000
            proportionally across the group's line items.
          </div>
          <div className="callout blue">
            💡 <strong>Important nuance:</strong> It's not required that all
            three group materials be present — even just PMAT1 alone exceeding
            ₹10,00,000 would trigger PGR2. The trigger is the group's
            <em>combined</em> value, regardless of how many/which group
            materials contribute to it.
          </div>
        </div>
        {/* <!-- Section 5: PGR1 vs PGR2 comparison --> */}
        <div className="card">
          <h2>
            <span className="badge">📊</span> PGR1 vs PGR2 — Side by Side
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Aspect</th>
                <th>PGR1 (Total Document Value)</th>
                <th>PGR2 (Group of Materials)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Condition Table</td>
                <td>Sales Organization only</td>
                <td>Sales Organization + Material Pricing Group</td>
              </tr>
              <tr>
                <td>Group Condition Routine</td>
                <td>1</td>
                <td>3</td>
              </tr>
              <tr>
                <td>What counts toward threshold?</td>
                <td>Every material in the order</td>
                <td>Only materials sharing the same Material Pricing Group</td>
              </tr>
              <tr>
                <td>Master data dependency</td>
                <td>None</td>
                <td>
                  Material Pricing Group must be set on each qualifying material
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 6: Manual Entries --> */}
        <div className="card purple">
          <h2>
            <span className="badge">3</span> Manual Entries — Can the Price Be
            Edited?
          </h2>
          <p>
            T-code: <span className="tcode">V/06</span> → condition type (e.g.
            PPR0) → Details
          </p>
          <div className="callout purple">
            💡 <strong>Manual Entries</strong> controls whether the condition
            type's <strong>amount and value</strong> can be manually changed in
            the sales document.
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
                <td>
                  <span className="tag tag-c">Blank or C</span>
                </td>
                <td>
                  Amount/value <strong>can</strong> be changed manually
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-d">D</span>
                </td>
                <td>
                  Amount/value <strong>cannot</strong> be changed — fields are
                  disabled in the order
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🏢 <strong>Real-world guidance from class:</strong>
            <strong>Tax</strong> and <strong>Base Price</strong> are almost
            always set to <code>D</code> (non-editable) — clients rarely want
            these manually overridden. <strong>Discounts</strong> depend
            entirely on client requirement — some discounts should be
            user-editable (blank/C), others locked (D). This is a client-driven
            configuration decision, not a fixed rule.
          </div>
        </div>
        {/* <!-- Section 7: The 4 sub-fields --> */}
        <div className="card gold">
          <h2>
            <span className="badge">4</span> Amount / Value / Calculation Type /
            Delete — Fine-Grained Control
          </h2>
          <div className="callout">
            💡 These 4 checkboxes give <strong>granular control</strong> over
            exactly what can be edited — but they only matter if
            <strong>Manual Entries = Blank or C</strong>. If Manual Entries = D,
            these checkboxes have no effect at all since nothing can be changed
            regardless.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Checkbox</th>
                <th>If Checked</th>
                <th>If Unchecked</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Amount</td>
                <td>User can manually edit the condition's amount</td>
                <td>Amount field disabled</td>
              </tr>
              <tr>
                <td>Value</td>
                <td>User can manually edit the condition's value</td>
                <td>Value field disabled</td>
              </tr>
              <tr>
                <td>Calculation Type</td>
                <td>
                  User can change the calculation type on the fly in the order
                </td>
                <td>Calculation type field disabled</td>
              </tr>
              <tr>
                <td>Delete</td>
                <td>
                  User can delete/remove this condition line from the order
                </td>
                <td>
                  Deletion blocked — attempting to delete the row has no effect
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ Each of these 4 fields can be independently toggled — e.g. allow
            editing the Value but lock the Amount, or allow Delete but disable
            Calculation Type changes — giving fine control per condition type.
          </div>
        </div>
        {/* <!-- Section 8: Header Condition / Item Condition --> */}
        <div className="card">
          <h2>
            <span className="badge">5</span> Header Condition vs. Item Condition
            (Checkboxes)
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Field</th>
                <th>Meaning</th>
                <th>Access Sequence?</th>
                <th>Processing</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>Header Condition</strong>
                </td>
                <td>
                  Applicable to <strong>all line items</strong> in the sales
                  document (e.g. HB00, HA00)
                </td>
                <td>❌ None</td>
                <td>Always manual</td>
              </tr>
              <tr>
                <td>
                  <strong>Item Condition</strong>
                </td>
                <td>
                  Applicable to a <strong>particular/single line item</strong>
                </td>
                <td>✅ Can have one</td>
                <td>Can be automatic</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🔗 <strong>Connecting the dots:</strong> This is the actual checkbox
            field (inside V/06) that formally implements the "Header Condition"
            behavior first introduced conceptually in Lecture 69 (HB00/HA00) and
            Lecture 70 (HD00) — every header-level condition type has this box
            checked.
          </div>
        </div>
        {/* <!-- Section 9: Valid From / Valid To --> */}
        <div className="card teal">
          <h2>
            <span className="badge">6</span> Valid From / Valid To — Default
            Validity Period
          </h2>
          <div className="callout">
            💡 These fields propose the
            <strong>default validity period</strong> when a new condition record
            is created in VK11 — saving the user from typing dates manually
            every time.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Setting</th>
                <th>Default Behavior</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Valid From (default)</td>
                <td>Today's date</td>
              </tr>
              <tr>
                <td>Valid To (default)</td>
                <td>31.12.9999</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🔧 <strong>Customizable example from class:</strong> Change Valid
            From = "First day of the month" and Valid To = "End of current
            month" on condition type PPR0 → the next time you maintain a record
            in VK11 for PPR0, it auto-proposes Valid From = 1st of the current
            month and Valid To = last day of the same month.
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
                <td>What is Group Condition Routine 3 used for?</td>
                <td>
                  To base the discount on a specific Group of Materials'
                  combined value (identified via Material Pricing Group), rather
                  than the total document value
                </td>
              </tr>
              <tr>
                <td>
                  What master data field links materials into a "group" for
                  PGR2?
                </td>
                <td>
                  Material Pricing Group (Material Master → Sales Org 2 view) —
                  must match across all qualifying materials
                </td>
              </tr>
              <tr>
                <td>
                  If total document value crosses the PGR1 threshold but the
                  group materials alone don't cross the PGR2 threshold, what
                  happens?
                </td>
                <td>
                  PGR1 applies (whole-order based), but PGR2 does not — PGR2
                  only counts materials sharing the same Material Pricing Group
                </td>
              </tr>
              <tr>
                <td>What does Manual Entries = D mean?</td>
                <td>
                  The condition type's amount and value cannot be changed
                  manually in the sales document
                </td>
              </tr>
              <tr>
                <td>
                  What real-world condition types are typically set to Manual
                  Entries = D?
                </td>
                <td>
                  Tax and Base Price — clients generally don't want these
                  manually overridden
                </td>
              </tr>
              <tr>
                <td>
                  Do the Amount/Value/Calculation Type/Delete checkboxes matter
                  if Manual Entries = D?
                </td>
                <td>
                  No — they have no effect at all, since Manual Entries = D
                  already blocks any changes regardless of these settings
                </td>
              </tr>
              <tr>
                <td>
                  What is the difference between a Header Condition and an Item
                  Condition?
                </td>
                <td>
                  Header Condition applies to all line items, has no access
                  sequence, and is always manual; Item Condition applies to a
                  specific line item and can have an access sequence with
                  automatic processing
                </td>
              </tr>
              <tr>
                <td>
                  What do Valid From / Valid To control on a condition type?
                </td>
                <td>
                  The default validity period proposed when creating a new
                  condition record in VK11
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
                  <span className="tcode">MM01</span>
                </td>
                <td>
                  Create Materials PMAT1, PMAT2, PMAT3; extend to distribution
                  channels; maintain Material Pricing Group in Sales Org 2 view
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/03</span>
                </td>
                <td>
                  Create Condition Table 685 (Sales Org + Material Pricing
                  Group)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/07</span>
                </td>
                <td>Create Access Sequence PGR2</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/06</span>
                </td>
                <td>
                  Define Condition Type PGR2 (copied from K007); also used to
                  view/set Manual Entries, Amount/Value/Calc.Type/Delete
                  checkboxes, Header Condition, Item Condition, Valid From/To on
                  PPR0
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  Place PGR2 in Pricing Procedure (step 65, between Base Value
                  and Gross Value)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VK11</span>
                </td>
                <td>
                  Maintain PGR2 condition record with Scales (₹75,000 at
                  ₹10,00,000 threshold)
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
                <td>PGR2 condition table</td>
                <td>685 (Sales Org + Material Pricing Group)</td>
              </tr>
              <tr>
                <td>PGR2 access sequence</td>
                <td>PGR2, table 685, Exclusive checked</td>
              </tr>
              <tr>
                <td>PGR2 condition type settings</td>
                <td>
                  Copied from K007; Calc Type B; Group Condition ✅; Routine=3;
                  Rounding Diff. Comparison ✅; Scale Basis B
                </td>
              </tr>
              <tr>
                <td>PGR2 pricing procedure step</td>
                <td>65, From 20, Account Key ERS</td>
              </tr>
              <tr>
                <td>Sample group threshold/discount</td>
                <td>₹10,00,000 → ₹75,000 (via Scales)</td>
              </tr>
              <tr>
                <td>Material Pricing Group used</td>
                <td>
                  01 (assigned to PMAT1, PMAT2, PMAT3 across all channels)
                </td>
              </tr>
              <tr>
                <td>Manual Entries options</td>
                <td>Blank/C = editable, D = locked</td>
              </tr>
              <tr>
                <td>Sub-controls (only active if Manual Entries ≠ D)</td>
                <td>
                  Amount, Value, Calculation Type, Delete — each independently
                  toggleable
                </td>
              </tr>
              <tr>
                <td>Header Condition default validity</td>
                <td>
                  Valid From = today, Valid To = 31.12.9999 (customizable)
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
            Building on last class's PGR1 (total document value), this lecture
            configured <strong>PGR2</strong> — a Group Condition scoped to a
            specific set of materials via
            <strong>Material Pricing Group</strong> and
            <strong>Group Condition Routine = 3</strong>. The key lesson: PGR2
            only counts materials sharing the same pricing group value, ignoring
            everything else in the order, even if the total document value would
            otherwise qualify for PGR1. The lecture then moved into finer
            condition type controls: <strong>Manual Entries</strong> (blank/C =
            editable, D = locked, typically D for tax/base price), the four
            dependent sub-checkboxes (Amount, Value, Calculation Type, Delete)
            that only matter when editing is allowed, the formal
            <strong>Header Condition / Item Condition</strong> checkboxes
            distinguishing document-wide vs. line-item-specific conditions, and
            <strong>Valid From/Valid To</strong> which sets the default validity
            period proposed when creating new condition records.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 75 Notes — SAP SD Pricing: Group of Materials Discount &amp;
        Editing Controls 🎓
      </p>
    </div>
  );
};

export default Pricing75;
