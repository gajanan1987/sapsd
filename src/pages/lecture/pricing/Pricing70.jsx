const Pricing70 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-brown">
        <h1>
          🚚 Lecture 70 — Surcharges: Freight, Insurance, Packing, Loading
        </h1>
        <p>
          SAP SD | Configuring add-on charges + Header Freight + Order Value
          adjustment
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Definition --> */}
        <div className="card">
          <h2>
            <span className="badge">1</span> What Is a Surcharge?
          </h2>
          <div className="callout">
            💰 <strong>Surcharge</strong> = an additional charge billed to the
            customer, on top of the base price (minus discounts).
          </div>
          <p>The 4 surcharge types covered today:</p>
          <div className="four-grid">
            <div className="mini-card mc-blue">
              <h4>1️⃣ Freight 🚛</h4>
              <p>Transportation charges</p>
            </div>
            <div className="mini-card mc-teal">
              <h4>2️⃣ Insurance 🛡️</h4>
              <p>Coverage against damage/loss</p>
            </div>
            <div className="mini-card mc-orange">
              <h4>3️⃣ Packing 📦</h4>
              <p>Packing/packaging cost</p>
            </div>
            <div className="mini-card mc-purple">
              <h4>4️⃣ Loading 🏗️</h4>
              <p>Loading/handling cost</p>
            </div>
          </div>
        </div>
        {/* <!-- Section 1: Overview table --> */}
        <div className="card orange">
          <h2>
            <span className="badge">2</span> Overview: Condition Types, Tables
            &amp; Calculation Types
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Surcharge</th>
                <th>Std Cond. Type</th>
                <th>New Cond. Type</th>
                <th>Access Seq.</th>
                <th>Table Combination</th>
                <th>Calc. Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-freight">Freight</span>
                </td>
                <td>
                  <span className="tag tag-std">KF00</span>
                </td>
                <td>PF00</td>
                <td>PF00</td>
                <td>Sales Org + Incoterms1 + Incoterms2</td>
                <td>D (Gross Weight)</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-insurance">Insurance</span>
                </td>
                <td>No standard — custom only</td>
                <td>PINS</td>
                <td>PINS</td>
                <td>Sales Org + Incoterms1 + Incoterms2 (reused)</td>
                <td>A (Percentage)</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-packing">Packing</span>
                </td>
                <td>
                  <span className="tag tag-std">KF00</span> (copied from)
                </td>
                <td>PPAC</td>
                <td>PPAC</td>
                <td>Sales Org + Material</td>
                <td>C (Quantity-based)</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-loading">Loading</span>
                </td>
                <td>
                  <span className="tag tag-std">KF00</span> (copied from)
                </td>
                <td>PLOD</td>
                <td>PLOD</td>
                <td>Sales Org + Material</td>
                <td>C (Quantity-based)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🧮
            <strong>
              Calculation Type cheat sheet (new codes seen today):
            </strong>
            <code>A</code> = Percentage, <code>C</code> = Quantity-based,
            <code>D</code> = Gross Weight-based. (Recall <code>B</code> = Fixed
            Amount from Lecture 69.)
          </div>
        </div>
        {/* <!-- Section 2: Condition Tables --> */}
        <div className="card teal">
          <h2>
            <span className="badge">3</span> Step 1 — Condition Tables (2 New, 2
            Reused)
          </h2>
          <p>
            T-code: <span className="tcode">V/03</span>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Table #</th>
                <th>Field Combination</th>
                <th>Status</th>
                <th>Used By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-new">681 (NEW)</span>
                </td>
                <td>Sales Org + Incoterms1 + Incoterms2</td>
                <td>New</td>
                <td>Freight (PF00)</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-new">682 (NEW)</span>
                </td>
                <td>Sales Org + Incoterms1</td>
                <td>New</td>
                <td>Insurance (PINS) — as secondary access</td>
              </tr>
              <tr>
                <td>678</td>
                <td>Sales Org + Material</td>
                <td>Reused</td>
                <td>Packing (PPAC) &amp; Loading (PLOD)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ Consistent with the "don't waste tables" rule from Lecture 68 —
            Packing and Loading both reuse table 678 since they share the same
            Sales Org + Material combination.
          </div>
        </div>
        {/* <!-- Section 3: Access Sequences --> */}
        <div className="card purple">
          <h2>
            <span className="badge">4</span> Step 2 — Access Sequences
          </h2>
          <p>
            T-code: <span className="tcode">V/07</span>
          </p>
          <h3>PF00 (Freight)</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Access</th>
                <th>Table</th>
                <th>Exclusive?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>681 (Sales Org + Incoterms1 + Incoterms2)</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>20</td>
                <td>682 (Sales Org + Incoterms1)</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
          <h3>PINS (Insurance)</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Access</th>
                <th>Table</th>
                <th>Exclusive?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>681</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>20</td>
                <td>682</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            Insurance reuses the same two tables as Freight, since both are
            based on Incoterms.
          </p>
          <h3>PPAC (Packing)</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Access</th>
                <th>Table</th>
                <th>Exclusive?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>678 (Sales Org + Material)</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
          <h3>PLOD (Loading)</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Access</th>
                <th>Table</th>
                <th>Exclusive?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>678 (Sales Org + Material)</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
          <div className="stepper">
            <div className="step">
              New Entries → create access sequence (e.g. <code>PF00</code>)
            </div>
            <div className="step">
              Double-click <strong>Accesses</strong> → New Entries → assign
              table(s) in order → check <strong>Exclusive</strong> for each
            </div>
            <div className="step">
              Select each table row → double-click <strong>Fields</strong> to
              confirm mapping → Save
            </div>
            <div className="step">Repeat for PINS, PPAC, PLOD</div>
          </div>
        </div>
        {/* <!-- Section 4: Condition Types --> */}
        <div className="card gold">
          <h2>
            <span className="badge">5</span> Step 3 — Define Condition Types
          </h2>
          <p>
            T-code: <span className="tcode">V/06</span> — all 4 copied from
            standard
            <code>KF00</code>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>New Type</th>
                <th>Copied From</th>
                <th>Access Seq.</th>
                <th>Calculation Type</th>
                <th>Condition Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-freight">PF00</span>
                </td>
                <td>KF00</td>
                <td>PF00</td>
                <td>D (already default — no change needed)</td>
                <td>Keep as-is (F)</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-insurance">PINS</span>
                </td>
                <td>KF00</td>
                <td>PINS</td>
                <td>Change to A (Percentage)</td>
                <td>❌ Remove (clear the "F")</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-packing">PPAC</span>
                </td>
                <td>KF00</td>
                <td>PPAC</td>
                <td>Change to C (Quantity-based)</td>
                <td>❌ Remove (clear the "F")</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-loading">PLOD</span>
                </td>
                <td>KF00</td>
                <td>PLOD</td>
                <td>Change to C (Quantity-based)</td>
                <td>❌ Remove (clear the "F")</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            ⚠️ <strong>Condition Category field:</strong> When you copy from
            KF00, it carries a "Condition Category = F" (freight-specific
            control) by default. For Insurance, Packing, and Loading, this must
            be
            <strong>cleared/blanked out</strong> since they aren't truly freight
            — only the actual Freight condition type (PF00) keeps it.
          </div>
          <div className="stepper">
            <div className="step">
              V/06 → Copy KF00 → rename <code>PF00</code> → Access Sequence
              <code>PF00</code> → Calculation Type stays <code>D</code> → Save
            </div>
            <div className="step">
              Copy KF00 → rename <code>PINS</code> → Access Sequence
              <code>PINS</code> → Calculation Type <code>A</code> → clear
              Condition Category → Save
            </div>
            <div className="step">
              Copy KF00 → rename <code>PPAC</code> → Access Sequence
              <code>PPAC</code> → Calculation Type <code>C</code> → clear
              Condition Category → Save
            </div>
            <div className="step">
              Copy KF00 → rename <code>PLOD</code> → Access Sequence
              <code>PLOD</code> → Calculation Type <code>C</code> → clear
              Condition Category → Save
            </div>
          </div>
        </div>
        {/* <!-- Section 5: Account Keys --> */}
        <div className="card brown">
          <h2>
            <span className="badge">6</span> Step 4 — Define Account Keys (New
            Requirement!)
          </h2>
          <div className="callout brown">
            🔑 Unlike Freight (which reuses the standard account key
            <code>ERF</code>),
            <strong>
              Insurance, Packing, and Loading have no standard account keys
            </strong>
            — these must be defined from scratch.
          </div>
          <div className="path">
            <span className="node">SPRO</span>
            <span className="sep">→</span>
            <span className="node">Sales and Distribution</span>
            <span className="sep">→</span>
            <span className="node">Basic Functions</span>
            <span className="sep">→</span>
            <span className="node">Account Assignment/Costing</span>
            <span className="sep">→</span>
            <span className="node">Revenue Account Determination</span>
            <span className="sep">→</span>
            <span className="node">Define and Assign Account Keys</span>
            <span className="sep">→</span>
            <span className="node">Define Account Key</span>
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Surcharge</th>
                <th>New Account Key Created</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Insurance</td>
                <td>
                  <code>PIN</code>
                </td>
              </tr>
              <tr>
                <td>Packing</td>
                <td>
                  <code>PAC</code>
                </td>
              </tr>
              <tr>
                <td>Loading</td>
                <td>
                  <code>PLO</code>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            Freight continues using the standard <code>ERF</code> account key.
          </p>
        </div>
        {/* <!-- Section 6: Pricing Procedure placement --> */}
        <div className="card">
          <h2>
            <span className="badge">7</span> Step 5 — Place in Pricing Procedure
            (After Gross Value)
          </h2>
          <p>
            T-code: <span className="tcode">V/08</span> → Pricing Procedure
            <code>PVAA01</code> → Control
          </p>
          <div className="callout purple">
            📐 <strong>Placement rule:</strong> Surcharges go
            <strong>after Gross Value</strong> (unlike discounts, which sit
            between Base Value and Gross Value).
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>Description</th>
                <th>From</th>
                <th>Requirement</th>
                <th>Account Key</th>
                <th>Statistics?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>70</td>
                <td>—</td>
                <td>
                  <strong>Gross Value</strong>
                </td>
                <td>20 to 69</td>
                <td>—</td>
                <td>—</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>80</td>
                <td>PF00</td>
                <td>Freight</td>
                <td>70</td>
                <td>2</td>
                <td>ERF</td>
                <td>—</td>
              </tr>
              <tr>
                <td>90</td>
                <td>PINS</td>
                <td>Insurance</td>
                <td>70</td>
                <td>2</td>
                <td>PIN</td>
                <td>—</td>
              </tr>
              <tr>
                <td>100</td>
                <td>PPAC</td>
                <td>Packing</td>
                <td>70</td>
                <td>2</td>
                <td>PAC</td>
                <td>—</td>
              </tr>
              <tr>
                <td>110</td>
                <td>PLOD</td>
                <td>Loading</td>
                <td>70</td>
                <td>2</td>
                <td>PLO</td>
                <td>—</td>
              </tr>
              <tr>
                <td>120</td>
                <td>—</td>
                <td>
                  <strong>Net Value</strong>
                </td>
                <td>70 to 119</td>
                <td>—</td>
                <td>—</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🧮 <strong>Net Value formula:</strong> Net Value (step 120) = Gross
            Value + Freight + Insurance + Packing + Loading (all steps 70–119
            summed).
          </div>
          <div className="callout green">
            💡 <strong>Reminder:</strong> Since this lecture uses individual
            discounts (not the common discount from Lecture 69), the "Manual"
            checkbox on Common Discount (PCOM) stays checked/disabled, and
            individual discounts (P004, P005, P007, P020) remain active.
          </div>
        </div>
        {/* <!-- Section 7: Master data --> */}
        <div className="card teal">
          <h2>
            <span className="badge">8</span> Step 6 — Maintain Condition Records
            (VK11)
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Key Combination</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PF00 (Freight)</td>
                <td>Sales Org + Incoterms1 (CIF)</td>
                <td className="amount">₹50 per kg</td>
              </tr>
              <tr>
                <td>PINS (Insurance)</td>
                <td>Sales Org + Incoterms1 (CIF)</td>
                <td className="amount">3%</td>
              </tr>
              <tr>
                <td>PPAC (Packing)</td>
                <td>Sales Org + Material (Vaccine 1500)</td>
                <td className="amount">₹100 per unit</td>
              </tr>
              <tr>
                <td>PLOD (Loading)</td>
                <td>Sales Org + Material (Vaccine 1500)</td>
                <td className="amount">₹40 per unit</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            ⚠️ <strong>Critical dependency:</strong> Freight and Insurance only
            trigger if the
            <strong>
              customer master's Incoterms field (Sales → Billing tab) = CIF
            </strong>
            . If Incoterms is blank or anything else, Freight and Insurance will
            <strong>not appear</strong> in the order at all — check this first
            if surcharges seem missing.
          </div>
        </div>
        {/* <!-- Section 8: Result verification --> */}
        <div className="card green">
          <h2>
            <span className="badge">🎉</span> Verifying in a Sales Order
          </h2>
          <p>Order: 100 units, weight = 100 kg, Incoterms = CIF</p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Component</th>
                <th>Calculation</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Freight (PF00)</td>
                <td>100 kg × ₹50/kg</td>
                <td className="amount">₹5,000</td>
              </tr>
              <tr>
                <td>Insurance (PINS)</td>
                <td>3% of gross value (₹9,11,027.30 base)</td>
                <td className="amount">~₹27,330</td>
              </tr>
              <tr>
                <td>Packing (PPAC)</td>
                <td>100 units × ₹100</td>
                <td className="amount">₹10,000</td>
              </tr>
              <tr>
                <td>Loading (PLOD)</td>
                <td>100 units × ₹40</td>
                <td className="amount">₹4,000</td>
              </tr>
              <tr>
                <td>
                  <strong>Net Value</strong>
                </td>
                <td>Gross Value + all surcharges</td>
                <td className="price-final">₹9,57,330</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 9: Header Freight --> */}
        <div className="card orange">
          <h2>
            <span className="badge">9</span> Header Freight (HD00)
          </h2>
          <div className="callout">
            💡 Just like Header Discount, <strong>Header Freight</strong>{" "}
            applies to the whole document, has{" "}
            <strong>no access sequence</strong>, and must be entered{" "}
            <strong>manually</strong>.
          </div>
          <div className="callout purple">
            📐 <strong>Placement:</strong> Header Freight goes
            <strong>between Gross Value (70) and Net Value (120)</strong> — same
            zone as the regular surcharges, unlike Header Discount which sits
            between Base Value and Gross Value.
          </div>
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
                <td>111</td>
                <td>HD00</td>
                <td>70</td>
                <td>✅ Checked</td>
                <td>ERF</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            To see it in action, create an order with multiple line items → go
            to Header → Conditions → insert <code>HD00</code> → enter an amount
            (e.g. ₹100 per line) → Activate. It applies across all line items
            just like Header Discount.
          </p>
        </div>
        {/* <!-- Section 10: Order Value HM00 --> */}
        <div className="card red">
          <h2>
            <span className="badge">10</span> Order Value (HM00) — Manual Total
            Override
          </h2>
          <div className="callout red">
            🎯 <strong>HM00</strong> lets you manually set the
            <strong>total document value</strong> directly — the system then
            <strong>proportionally adjusts every line item</strong> to match
            your entered total, deactivating the previously calculated
            conditions.
          </div>
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
                <td>130</td>
                <td>HM00</td>
                <td>120 (Net Value)</td>
                <td>✅ Checked</td>
                <td>ERL</td>
              </tr>
            </tbody>
          </table>
          <h3>Example from Class</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Line Item</th>
                <th>Before HM00</th>
                <th>After HM00 (total forced to ₹30,00,000)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Line 1</td>
                <td>₹9,57,313</td>
                <td className="amount">₹9,50,304</td>
              </tr>
              <tr>
                <td>Line 2</td>
                <td>₹9,83,500</td>
                <td className="amount">₹9,76,282</td>
              </tr>
              <tr>
                <td>Line 3</td>
                <td>₹10,81,350</td>
                <td className="amount">₹10,73,413.89</td>
              </tr>
              <tr>
                <td>
                  <strong>Total</strong>
                </td>
                <td>₹30,32,163 (approx)</td>
                <td className="price-final">₹30,00,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            💡 <strong>Real-world usage:</strong> This is rarely used in
            production, but it's available for scenarios where a negotiated
            lump-sum total needs to override system-calculated pricing.
          </div>
        </div>
        {/* <!-- Section 11: Header conditions summary --> */}
        <div className="card">
          <h2>
            <span className="badge">📋</span> All Header Conditions So Far
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Purpose</th>
                <th>Placement (Pricing Procedure)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HB00</td>
                <td>Header Fixed Discount</td>
                <td>Between Base Value &amp; Gross Value</td>
              </tr>
              <tr>
                <td>HA00</td>
                <td>Header Percentage Discount</td>
                <td>Between Base Value &amp; Gross Value</td>
              </tr>
              <tr>
                <td>HD00</td>
                <td>Header Freight</td>
                <td>Between Gross Value &amp; Net Value</td>
              </tr>
              <tr>
                <td>HM00</td>
                <td>Order/Document Value (manual total override)</td>
                <td>After Net Value</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🔤 <strong>Naming pattern:</strong> Any condition type starting with
            <strong>"H"</strong> is a header-level condition — applies to the
            whole document, has no access sequence, and must be processed
            manually.
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
                <td>What is a surcharge?</td>
                <td>
                  An additional charge billed to the customer on top of
                  price/discounts — e.g. freight, insurance, packing, loading
                </td>
              </tr>
              <tr>
                <td>
                  Where do surcharges sit in the pricing procedure relative to
                  discounts?
                </td>
                <td>
                  Surcharges come after Gross Value; discounts sit before it
                  (between Base Value and Gross Value)
                </td>
              </tr>
              <tr>
                <td>
                  Why must Condition Category "F" be cleared for
                  Insurance/Packing/Loading?
                </td>
                <td>
                  It's a freight-specific control inherited when copying from
                  KF00; only the actual Freight condition type should keep it
                </td>
              </tr>
              <tr>
                <td>Why were new account keys (PIN, PAC, PLO) needed?</td>
                <td>
                  SAP has no standard account keys for Insurance, Packing, or
                  Loading — Freight alone reuses standard ERF
                </td>
              </tr>
              <tr>
                <td>
                  What master data field must be set correctly for
                  Freight/Insurance to calculate?
                </td>
                <td>
                  Incoterms (e.g. CIF) in the customer master's Billing tab — if
                  blank or different, Freight and Insurance won't appear
                </td>
              </tr>
              <tr>
                <td>
                  What is the difference between Header Freight (HD00) and
                  Header Discount (HB00/HA00) placement?
                </td>
                <td>
                  Header Freight sits between Gross Value and Net Value; Header
                  Discounts sit between Base Value and Gross Value
                </td>
              </tr>
              <tr>
                <td>What does HM00 (Order Value) do?</td>
                <td>
                  Manually overrides the total document value, proportionally
                  redistributing it across all line items and deactivating prior
                  calculated conditions
                </td>
              </tr>
              <tr>
                <td>
                  What's the naming convention for header-level conditions?
                </td>
                <td>
                  Any condition type starting with "H" is a header condition —
                  no access sequence, applies to whole document, always manual
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
                <td>Create Condition Tables (681, 682 new)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/07</span>
                </td>
                <td>Create Access Sequences (PF00, PINS, PPAC, PLOD)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/06</span>
                </td>
                <td>Define Condition Types (all copied from KF00)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  Place condition types in Pricing Procedure (after Gross
                  Value); also used for Header Freight HD00 and Order Value HM00
                </td>
              </tr>
              <tr>
                <td>SPRO (no single T-code)</td>
                <td>
                  Define Account Keys — SD → Basic Functions → Account
                  Assignment/Costing → Revenue Account Determination → Define
                  and Assign Account Keys
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VK11</span>
                </td>
                <td>
                  Maintain condition records for surcharges (Freight, Insurance,
                  Packing, Loading)
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
                <th>Surcharge</th>
                <th>Table</th>
                <th>Calc. Type</th>
                <th>Account Key</th>
                <th>Step</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Freight (PF00)</td>
                <td>681, 682</td>
                <td>D (Gross Weight)</td>
                <td>ERF</td>
                <td>80</td>
              </tr>
              <tr>
                <td>Insurance (PINS)</td>
                <td>681, 682 (reused)</td>
                <td>A (Percentage)</td>
                <td>PIN (new)</td>
                <td>90</td>
              </tr>
              <tr>
                <td>Packing (PPAC)</td>
                <td>678 (reused)</td>
                <td>C (Quantity)</td>
                <td>PAC (new)</td>
                <td>100</td>
              </tr>
              <tr>
                <td>Loading (PLOD)</td>
                <td>678 (reused)</td>
                <td>C (Quantity)</td>
                <td>PLO (new)</td>
                <td>110</td>
              </tr>
              <tr>
                <td>Header Freight (HD00)</td>
                <td>—</td>
                <td>Manual</td>
                <td>ERF</td>
                <td>111</td>
              </tr>
              <tr>
                <td>Order Value (HM00)</td>
                <td>—</td>
                <td>Manual</td>
                <td>ERL</td>
                <td>130</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            Four surcharge condition types were built — Freight (PF00,
            weight-based), Insurance (PINS, percentage-based), Packing (PPAC),
            and Loading (PLOD, both quantity-based) — all placed after Gross
            Value in the pricing procedure. New account keys (PIN, PAC, PLO) had
            to be defined since SAP has no standards for these. A critical
            dependency: Freight and Insurance only trigger when the customer's
            Incoterms field is correctly set (e.g. CIF). The lecture closed with
            Header Freight (HD00, between Gross and Net Value) and Order Value
            (HM00, after Net Value) — a manual override that proportionally
            redistributes a forced total across all line items.
          </p>
        </div>
        {/* <!-- Section 12: Key Takeaways --> */}
        <div className="card gold">
          <h2>
            <span className="badge">⭐</span> Key Takeaways &amp; Next Class
          </h2>
          <ul>
            <li>
              Surcharges sit <strong>after Gross Value</strong> in the pricing
              procedure (discounts sit before it)
            </li>
            <li>
              Calculation Types expand: <code>A</code>=Percentage,
              <code>B</code>=Fixed Amount, <code>C</code>=Quantity,
              <code>D</code>=Gross Weight
            </li>
            <li>
              <strong>Condition Category = F</strong> must be cleared for
              non-freight surcharges copied from KF00
            </li>
            <li>
              New <strong>account keys</strong> (PIN, PAC, PLO) had to be
              defined since no SAP standard existed for
              Insurance/Packing/Loading
            </li>
            <li>
              Freight &amp; Insurance depend on <strong>Incoterms</strong> being
              correctly set (e.g. CIF) in the customer master — otherwise they
              won't calculate
            </li>
            <li>
              <strong>Header Freight (HD00)</strong> sits between Gross Value
              and Net Value; <strong>Order Value (HM00)</strong> sits after Net
              Value
            </li>
            <li>
              <strong>HM00</strong> proportionally redistributes a manually
              forced total document value across all line items
            </li>
          </ul>
          <p>
            📅 <strong>Next lecture:</strong> Taxes configuration — after that,
            the pricing procedure "design" phase is complete, and focus shifts
            to the actual controls (Condition Type fields in V/06, and the 16
            fields of the Pricing Procedure).
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 70 Notes — SAP SD Pricing: Surcharges (Freight, Insurance,
        Packing, Loading) 🎓
      </p>
    </div>
  );
};

export default Pricing70;
