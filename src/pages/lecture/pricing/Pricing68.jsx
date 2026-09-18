const Pricing68 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-pink">
        <h1>💸 Lecture 68 — Pricing Configuration for Discounts</h1>
        <p>
          SAP SD | Configuring 4 discount condition types end-to-end + reusing
          existing condition tables
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Discount types overview --> */}
        <div className="card pink">
          <h2>
            <span className="badge">1</span> The 4 Discount Types We're
            Configuring
          </h2>
          <div className="four-grid">
            <div className="mini-card mc-blue">
              <h4>1️⃣ Material Discount</h4>
              <p>
                Std: <code>K004</code> → New: <code>P004</code>
              </p>
              <p>Table combo: Sales Org + Material</p>
            </div>
            <div className="mini-card mc-teal">
              <h4>2️⃣ Customer/Material Discount</h4>
              <p>
                Std: <code>K005</code> → New: <code>P005</code>
              </p>
              <p>Table combo: Sales Org + Customer + Material</p>
            </div>
            <div className="mini-card mc-orange">
              <h4>3️⃣ Customer Discount</h4>
              <p>
                Std: <code>K007</code> → New: <code>P007</code>
              </p>
              <p>Table combo: Sales Org + Customer</p>
            </div>
            <div className="mini-card mc-purple">
              <h4>4️⃣ Price Group Discount</h4>
              <p>
                Std: <code>K020</code> → New: <code>P020</code>
              </p>
              <p>Table combo: Sales Org + Price Group</p>
            </div>
          </div>
          <div className="callout blue">
            🔑 <strong>Naming pattern:</strong> Every custom object mirrors the
            standard SAP code, just with a "P" prefix instead of "K" — e.g.
            <code>K004 → P004</code>. Keeps configuration easy to trace back to
            the SAP standard.
          </div>
        </div>
        {/* <!-- Section 1: Condition Tables - the golden rule --> */}
        <div className="card orange">
          <h2>
            <span className="badge">2</span> Step 1 — Condition Tables (Reuse
            Before You Create!)
          </h2>
          <div className="callout red">
            ⚠️ <strong>Golden Rule:</strong> Condition table numbers are limited
            to the range <strong>501–999</strong>. Never create a duplicate
            table for a field combination that already exists —
            <strong>reuse it</strong> across base price, discounts, surcharges,
            or taxes if the combination matches.
          </div>
          <h3>Checking What We Already Have</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Table #</th>
                <th>Field Combination</th>
                <th>Originally Created For</th>
                <th>Reused For</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>676</td>
                <td>Sales Org + Customer + Material</td>
                <td>Base Price</td>
                <td>✅ Customer/Material Discount (P005)</td>
              </tr>
              <tr>
                <td>677</td>
                <td>Sales Org + Price List + Material</td>
                <td>Base Price</td>
                <td>— (not needed for discounts)</td>
              </tr>
              <tr>
                <td>678</td>
                <td>Sales Org + Material</td>
                <td>Base Price</td>
                <td>✅ Material Discount (P004)</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-new">679 (NEW)</span>
                </td>
                <td>Sales Org + Customer</td>
                <td>—</td>
                <td>Customer Discount (P007)</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-new">680 (NEW)</span>
                </td>
                <td>Sales Org + Price Group</td>
                <td>—</td>
                <td>Price Group Discount (P020)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ <strong>Result:</strong> Out of 4 discount types needed, only
            <strong>2 new condition tables</strong> had to be created (679, 680)
            — the other two combinations already existed from base price
            configuration.
          </div>
          <h3>Creating the 2 New Tables</h3>
          <p>
            T-code: <span className="tcode">V/03</span>
          </p>
          <div className="stepper">
            <div className="step">
              <strong>Table 679:</strong> Select fields Sales Organization →
              Customer (verify <code>KUNNR</code> via Field Attributes) →
              Generate → assign package → Save
            </div>
            <div className="step">
              <strong>Table 680:</strong> Select fields Sales Organization →
              Price Group → Generate → assign package → Save
            </div>
          </div>
        </div>
        {/* <!-- Section 2: Access Sequences --> */}
        <div className="card teal">
          <h2>
            <span className="badge">3</span> Step 2 — Access Sequences (No Reuse
            Rule Here!)
          </h2>
          <div className="callout blue">
            💡 <strong>Key difference from tables:</strong> There is
            <strong>no restriction/limit</strong> on the number of access
            sequences you can create — so unlike condition tables, we create a
            <strong>fresh access sequence for every discount type</strong>, even
            if it reuses an existing table.
          </div>
          <p>
            ➡️ We create <strong>4 new access sequences</strong>:
            <code>P004</code>, <code>P005</code>, <code>P007</code>,
            <code>P020</code> (T-code <span className="tcode">V/07</span>)
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Access Sequence</th>
                <th>Discount</th>
                <th>Table Used</th>
                <th>Exclusive?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-material">P004</span>
                </td>
                <td>Material Discount</td>
                <td>678</td>
                <td>✅ Checked</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-custmat">P005</span>
                </td>
                <td>Customer/Material Discount</td>
                <td>676</td>
                <td>✅ Checked</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-cust">P007</span>
                </td>
                <td>Customer Discount</td>
                <td>679</td>
                <td>✅ Checked</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-pricegroup">P020</span>
                </td>
                <td>Price Group Discount</td>
                <td>680</td>
                <td>✅ Checked</td>
              </tr>
            </tbody>
          </table>
          <div className="stepper">
            <div className="step">
              New Entries → create access sequence (e.g. <code>P004</code>) →
              description "Material Discount"
            </div>
            <div className="step">
              Select it → double-click <strong>Accesses</strong> → New Entries →
              Sequence 10 → assign the table (e.g. <code>678</code>)
            </div>
            <div className="step">
              Check <strong>Exclusive</strong> ✅ → Enter
            </div>
            <div className="step">
              Select the table row → double-click
              <strong>Fields</strong> (confirms field mapping) → Save
            </div>
            <div className="step">
              Repeat for P005 (table 676), P007 (table 679), P020 (table 680) —
              each has only <strong>one</strong> access line since each discount
              uses a single table combination
            </div>
          </div>
        </div>
        {/* <!-- Section 3: Condition Types --> */}
        <div className="card purple">
          <h2>
            <span className="badge">4</span> Step 3 — Define Condition Types
          </h2>
          <p>
            T-code: <span className="tcode">V/06</span>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Discount</th>
                <th>Copy From (Standard)</th>
                <th>New Condition Type</th>
                <th>Access Sequence Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Material Discount</td>
                <td>
                  <span className="tag tag-std">K004</span>
                </td>
                <td>
                  <span className="tag tag-new">P004</span>
                </td>
                <td>P004</td>
              </tr>
              <tr>
                <td>Customer/Material Discount</td>
                <td>
                  <span className="tag tag-std">K005</span>
                </td>
                <td>
                  <span className="tag tag-new">P005</span>
                </td>
                <td>P005</td>
              </tr>
              <tr>
                <td>Customer Discount</td>
                <td>
                  <span className="tag tag-std">K007</span>
                </td>
                <td>
                  <span className="tag tag-new">P007</span>
                </td>
                <td>P007</td>
              </tr>
              <tr>
                <td>Price Group Discount</td>
                <td>
                  <span className="tag tag-std">K020</span>
                </td>
                <td>
                  <span className="tag tag-new">P020</span>
                </td>
                <td>P020</td>
              </tr>
            </tbody>
          </table>
          <div className="stepper">
            <div className="step">
              Select standard condition type (e.g. <code>K004</code>) →
              <strong>Copy As</strong>
            </div>
            <div className="step">
              Rename to your own code (e.g. <code>P004</code>)
            </div>
            <div className="step">
              Change the <strong>Access Sequence</strong> field to your matching
              new access sequence (e.g. <code>P004</code>)
            </div>
            <div className="step">Enter → Save. Repeat for all 4.</div>
          </div>
          <div className="callout">
            📌 <strong>Same copy-and-rename pattern</strong> used for base price
            (PR00→PPR0) applies here too — always copy from the SAP standard,
            never build a condition type from a totally blank slate.
          </div>
        </div>
        {/* <!-- Section 4: Pricing Procedure --> */}
        <div className="card gold">
          <h2>
            <span className="badge">5</span> Step 4 — Place Condition Types in
            Pricing Procedure
          </h2>
          <p>
            T-code: <span className="tcode">V/08</span> → select pricing
            procedure
            <code>PVAA01</code> → double-click <strong>Control</strong>
          </p>
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
                <td>10</td>
                <td>PPR0</td>
                <td>Base Price</td>
                <td>—</td>
                <td>2</td>
                <td>ERL</td>
                <td>—</td>
              </tr>
              <tr>
                <td>20</td>
                <td>—</td>
                <td>
                  <strong>Base Value</strong>
                </td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>✅</td>
              </tr>
              <tr>
                <td>30</td>
                <td>
                  <span className="tag tag-material">P004</span>
                </td>
                <td>Material Discount</td>
                <td>20</td>
                <td>2</td>
                <td>ERS</td>
                <td>—</td>
              </tr>
              <tr>
                <td>40</td>
                <td>
                  <span className="tag tag-custmat">P005</span>
                </td>
                <td>Customer/Material Discount</td>
                <td>20</td>
                <td>2</td>
                <td>ERS</td>
                <td>—</td>
              </tr>
              <tr>
                <td>50</td>
                <td>
                  <span className="tag tag-cust">P007</span>
                </td>
                <td>Customer Discount</td>
                <td>20</td>
                <td>2</td>
                <td>ERS</td>
                <td>—</td>
              </tr>
              <tr>
                <td>60</td>
                <td>
                  <span className="tag tag-pricegroup">P020</span>
                </td>
                <td>Price Group Discount</td>
                <td>20</td>
                <td>2</td>
                <td>ERS</td>
                <td>—</td>
              </tr>
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
            </tbody>
          </table>
          <div className="callout blue">
            🧮 <strong>Why "From = 20" for every discount?</strong> All
            discounts are calculated as a percentage/amount
            <strong>off the Base Value (step 20)</strong>, not off each other —
            so each discount step references step 20 as its starting point.
          </div>
          <div className="callout">
            📐 <strong>Gross Value formula:</strong> Gross Value (step 70) =
            Base Value − (Material + Customer/Material + Customer + Price Group
            discounts), summed across steps 20 to 69.
          </div>
          <div className="callout red">
            ⚠️ <strong>Account Key changes!</strong> Base price used account key
            <code>ERL</code> (revenue). Discounts use <code>ERS</code> (sales
            deductions) — different account keys route to different G/L accounts
            in Finance.
          </div>
        </div>
        {/* <!-- Section 5: Price Group master data --> */}
        <div className="card teal">
          <h2>
            <span className="badge">6</span> Step 5 — Define &amp; Maintain
            Price Groups (Master Data)
          </h2>
          <div className="path">
            <span className="node">SPRO</span>
            <span className="sep">→</span>
            <span className="node">Sales and Distribution</span>
            <span className="sep">→</span>{" "}
            <span className="node">Basic Functions</span>
            <span className="sep">→</span> <span className="node">Pricing</span>
            <span className="sep">→</span>
            <span className="node">
              Maintain Price-Relevant Master Data Fields
            </span>
            <span className="sep">→</span>
            <span className="node">Define Price Groups for Customers</span>
          </div>
          <p className="note-text">
            (Same pattern/path style as Price List configuration from Lecture
            67.)
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Price Group</th>
                <th>Customer Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P1</td>
                <td>
                  <span className="tag tag-material">Dealers</span>
                </td>
              </tr>
              <tr>
                <td>P2</td>
                <td>
                  <span className="tag tag-custmat">Distributors</span>
                </td>
              </tr>
              <tr>
                <td>P3</td>
                <td>
                  <span className="tag tag-cust">Institutions</span>
                </td>
              </tr>
              <tr>
                <td>Blank</td>
                <td>Direct customers (no price group)</td>
              </tr>
            </tbody>
          </table>
          <h3>Assigning Price Group in Customer Master</h3>
          <p>
            T-code: <span className="tcode">XD02</span> → Sales Area Data →
            Sales tab → <strong>Price Group</strong> field
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Category</th>
                <th>Price Group Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100553, 100554</td>
                <td>Dealer</td>
                <td>P1</td>
              </tr>
              <tr>
                <td>100552, 100555, 100556</td>
                <td>Distributor</td>
                <td>P2</td>
              </tr>
              <tr>
                <td>100551, 100557</td>
                <td>Institution</td>
                <td>P3</td>
              </tr>
              <tr>
                <td>100558, 100559, 100560*</td>
                <td>Direct</td>
                <td>Blank</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            *100560 is a direct customer but still gets
            material/customer/customer-material discounts via its own special
            condition records where applicable.
          </p>
        </div>
        {/* <!-- Section 6: Condition Records --> */}
        <div className="card green">
          <h2>
            <span className="badge">7</span> Step 6 — Maintain Condition Records
            (VK11)
          </h2>
          <p>
            T-code: <span className="tcode">VK11</span>
          </p>
          <h3>Discount Data Maintained</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Discount Basis</th>
                <th>Combination</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-material">P004</span> Material
                  Discount
                </td>
                <td>Quantity-based (₹ per unit)</td>
                <td>Material only</td>
                <td>
                  VAXINE1500 → <span className="discount-amt">₹200</span>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-custmat">P005</span>{" "}
                  Customer/Material Discount
                </td>
                <td>Quantity-based (₹ per unit)</td>
                <td>Customer + Material</td>
                <td>
                  100551, 100552, 100560 + VAXINE1500 →
                  <span className="discount-amt">₹500</span> each
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-cust">P007</span> Customer Discount
                </td>
                <td>Percentage</td>
                <td>Customer only</td>
                <td>
                  100551, 100552, 100560 →
                  <span className="discount-amt">10%</span> each
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-pricegroup">P020</span> Price Group
                  Discount
                </td>
                <td>Percentage</td>
                <td>Price Group only</td>
                <td>
                  P1 → <span className="discount-amt">5%</span>, P2 →
                  <span className="discount-amt">6%</span>, P3 →
                  <span className="discount-amt">7%</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🗓️ <strong>Valid-To date behavior:</strong> If
            <strong>Valid From</strong> is left blank, it defaults to today's
            date. If <strong>Valid To</strong> is left blank, it defaults to
            <code>31.12.9999</code> (essentially "no expiry"). This default
            behavior is controlled at the
            <strong>condition type level</strong> and can be changed there, or
            overridden manually on each record (e.g., set to end of current
            year).
          </div>
          <div className="stepper">
            <div className="step">
              VK11 → Condition Type <code>P004</code> → Key Combination:
              Material → VAXINE1500 = ₹200 → Save
            </div>
            <div className="step">
              VK11 → Condition Type <code>P005</code> → Key Combination:
              Customer/Material → 100551 / 100552 / 100560 + VAXINE1500 = ₹500
              each → Save
            </div>
            <div className="step">
              VK11 → Condition Type <code>P007</code> → Key Combination:
              Customer → 100551 / 100552 / 100560 = 10% each → Save
            </div>
            <div className="step">
              VK11 → Condition Type <code>P020</code> → Key Combination: Price
              Group → P1=5%, P2=6%, P3=7% → Save
            </div>
          </div>
        </div>
        {/* <!-- Section 7: Results --> */}
        <div className="card">
          <h2>
            <span className="badge">🎉</span> Verifying Results in Sales Orders
          </h2>
          <p>
            Order → double-click line item → go to <strong>Conditions</strong>{" "}
            tab to see all pricing components.
          </p>
          <h3>
            Customer 100551 (Special customer + Institution, Price Group P3)
          </h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Discount Type</th>
                <th>Applies?</th>
                <th>Value</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Material Discount (P004)</td>
                <td>✅</td>
                <td className="discount-amt">₹200</td>
                <td>Material = VAXINE1500 (applies to everyone)</td>
              </tr>
              <tr>
                <td>Customer/Material Discount (P005)</td>
                <td>✅</td>
                <td className="discount-amt">₹500</td>
                <td>Customer 100551 + VAXINE1500 record exists</td>
              </tr>
              <tr>
                <td>Customer Discount (P007)</td>
                <td>✅</td>
                <td className="discount-amt">10%</td>
                <td>Customer 100551 record exists</td>
              </tr>
              <tr>
                <td>Price Group Discount (P020)</td>
                <td>✅</td>
                <td className="discount-amt">7%</td>
                <td>Price Group = P3 (Institution)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ Total: <strong>4 discount lines</strong> apply to this
            customer/material combination.
          </div>
          <h3>Customer 100553 (Dealer, Price Group P1, no special records)</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Discount Type</th>
                <th>Applies?</th>
                <th>Value</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Material Discount (P004)</td>
                <td>✅</td>
                <td className="discount-amt">₹200</td>
                <td>Material = VAXINE1500 (applies to everyone)</td>
              </tr>
              <tr>
                <td>Customer/Material Discount (P005)</td>
                <td>❌</td>
                <td>—</td>
                <td>No record for 100553</td>
              </tr>
              <tr>
                <td>Customer Discount (P007)</td>
                <td>❌</td>
                <td>—</td>
                <td>No record for 100553</td>
              </tr>
              <tr>
                <td>Price Group Discount (P020)</td>
                <td>✅</td>
                <td className="discount-amt">5%</td>
                <td>Price Group = P1 (Dealer)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ Total: <strong>2 discount lines</strong> apply — since only
            Material and Price Group discounts have relevant condition records
            for this customer.
          </div>
          <div className="callout purple">
            💡 <strong>Big insight:</strong> Unlike base price (where access
            sequence picks only <em>one</em> winning record), discounts are
            typically configured as
            <strong>independent condition types</strong> in the pricing
            procedure — so <em>multiple</em> discounts can apply simultaneously
            to the same order line, each contributing its own deduction.
          </div>
        </div>
        {/* <!-- Section 8: Quick reference --> */}
        <div className="card">
          <h2>
            <span className="badge">📋</span> Consolidated Config Table — All 4
            Discounts
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Discount</th>
                <th>Table</th>
                <th>Access Seq.</th>
                <th>Condition Type</th>
                <th>Pricing Proc. Step</th>
                <th>Account Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Material Discount</td>
                <td>678 (reused)</td>
                <td>P004</td>
                <td>P004</td>
                <td>30</td>
                <td>ERS</td>
              </tr>
              <tr>
                <td>Customer/Material Discount</td>
                <td>676 (reused)</td>
                <td>P005</td>
                <td>P005</td>
                <td>40</td>
                <td>ERS</td>
              </tr>
              <tr>
                <td>Customer Discount</td>
                <td>679 (new)</td>
                <td>P007</td>
                <td>P007</td>
                <td>50</td>
                <td>ERS</td>
              </tr>
              <tr>
                <td>Price Group Discount</td>
                <td>680 (new)</td>
                <td>P020</td>
                <td>P020</td>
                <td>60</td>
                <td>ERS</td>
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
                  Why reuse condition tables for discounts instead of creating
                  new ones?
                </td>
                <td>
                  Condition table numbers are limited to 501–999 — a scarce
                  resource that shouldn't be duplicated unnecessarily
                </td>
              </tr>
              <tr>
                <td>Is there a limit on access sequences?</td>
                <td>
                  No — unlike condition tables, access sequences can be created
                  freely, one per condition type even if reusing a table
                </td>
              </tr>
              <tr>
                <td>
                  What account key do discounts use, and how does it differ from
                  base price?
                </td>
                <td>
                  ERS (sales deductions), vs. ERL (revenue) used for base price
                  — they route to different G/L accounts
                </td>
              </tr>
              <tr>
                <td>Why is "From = 20" used for every discount step?</td>
                <td>
                  All discounts are calculated as a percentage/amount off the
                  Base Value (step 20), not off each other
                </td>
              </tr>
              <tr>
                <td>
                  Can multiple discounts apply to the same order line
                  simultaneously?
                </td>
                <td>
                  Yes — with individual discount condition types, all matching
                  discounts stack (unlike base price's single-winner logic)
                </td>
              </tr>
              <tr>
                <td>
                  What does the Price Group field represent and where is it
                  maintained?
                </td>
                <td>
                  A customer categorization (dealer/distributor/institution)
                  used for price group discounts; maintained in Customer Master
                  → Sales tab
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
                <td>Create Condition Tables (679, 680 new)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/07</span>
                </td>
                <td>Create Access Sequences (P004, P005, P007, P020)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/06</span>
                </td>
                <td>Define Condition Types (P004, P005, P007, P020)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>Place condition types in Pricing Procedure</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">XD02</span>
                </td>
                <td>Assign Price Group in Customer Master</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VK11</span>
                </td>
                <td>Maintain discount condition records</td>
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
                <th>Discount</th>
                <th>Table</th>
                <th>Access Seq.</th>
                <th>Condition Type</th>
                <th>Step</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Material</td>
                <td>678 (reused)</td>
                <td>P004</td>
                <td>P004</td>
                <td>30</td>
              </tr>
              <tr>
                <td>Customer/Material</td>
                <td>676 (reused)</td>
                <td>P005</td>
                <td>P005</td>
                <td>40</td>
              </tr>
              <tr>
                <td>Customer</td>
                <td>679 (new)</td>
                <td>P007</td>
                <td>P007</td>
                <td>50</td>
              </tr>
              <tr>
                <td>Price Group</td>
                <td>680 (new)</td>
                <td>P020</td>
                <td>P020</td>
                <td>60</td>
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
            Four discount condition types (Material, Customer/Material,
            Customer, Price Group) were configured end-to-end, each copied from
            its SAP standard counterpart (K004→P004, K005→P005, K007→P007,
            K020→P020). The lecture's biggest lesson was resource discipline:
            with only 2 new condition tables needed (out of 4 discount types)
            thanks to reusing existing base-price tables. Placed between Base
            Value and Gross Value in the pricing procedure with account key ERS,
            these discounts can stack — as shown when customer 100551 received
            all 4 discounts on one line, while dealer 100553 received only 2
            (Material + Price Group).
          </p>
        </div>
        {/* <!-- Section 9: Key Takeaways --> */}
        <div className="card pink">
          <h2>
            <span className="badge">⭐</span> Key Takeaways &amp; Next Class
          </h2>
          <ul>
            <li>
              <strong>Condition tables (501-999) are a limited resource</strong>{" "}
              — always check existing tables and reuse matching field
              combinations rather than creating duplicates
            </li>
            <li>
              <strong>Access sequences have no such limit</strong> — create a
              fresh one per condition type even when reusing a table
            </li>
            <li>
              Every new condition type is <strong>copied</strong> from its
              closest SAP standard (K004→P004, K005→P005, K007→P007, K020→P020)
            </li>
            <li>
              All discount steps in the pricing procedure use
              <strong>"From = 20"</strong> (Base Value) as their calculation
              base
            </li>
            <li>
              Discounts use account key <code>ERS</code> (vs. <code>ERL</code>{" "}
              for base price revenue)
            </li>
            <li>
              <strong>Valid To</strong> date defaults to 31.12.9999 if left
              blank — controllable at the condition type level or per record
            </li>
            <li>
              Multiple discount condition types can apply
              <strong>simultaneously</strong> on one line item (unlike base
              price's single-winner logic)
            </li>
          </ul>
          <p>
            📅 <strong>Next lecture:</strong> Surcharges and Taxes configuration
            — practice all discount scenarios in the meantime.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 68 Notes — SAP SD Pricing: Discount Configuration 🎓
      </p>
    </div>
  );
};

export default Pricing68;
