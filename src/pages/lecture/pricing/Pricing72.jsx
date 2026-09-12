const Pricing72 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-indigo">
        <h1>🧩 Lecture 72 — Other Special Condition Types</h1>
        <p>
          SAP SD | Statistical, Cost (VPRS), Cash Discount (SKTO/SKTV), BOM
          (KUMU), Intercompany, Rebates, Min Order Value
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Overview --> */}
        <div className="card">
          <h2>
            <span className="badge">ℹ️</span> Where We Are
          </h2>
          <div className="callout blue">
            📌 Core pricing components covered so far:
            <strong>Base Price → Discount → Surcharge → Tax</strong>. GST is a
            separate dedicated topic (not covered here). Today: several
            <strong>special-purpose condition types</strong> that serve specific
            business needs beyond the core four.
          </div>
          <div className="four-grid">
            <div className="mini-card mc-blue">
              <h4>VPRS</h4>
              <p>Cost from material master</p>
            </div>
            <div className="mini-card mc-teal">
              <h4>SKTO / SKTV</h4>
              <p>Cash discount</p>
            </div>
            <div className="mini-card mc-orange">
              <h4>KUMU</h4>
              <p>BOM component roll-up</p>
            </div>
            <div className="mini-card mc-purple">
              <h4>IV01 / PI01</h4>
              <p>Intercompany pricing</p>
            </div>
            <div className="mini-card mc-gold">
              <h4>BO01/02/03</h4>
              <p>Rebates</p>
            </div>
            <div className="mini-card mc-red">
              <h4>AMIW / AMIZ</h4>
              <p>Minimum order value</p>
            </div>
          </div>
        </div>
        {/* <!-- Section 1: Statistical --> */}
        <div className="card indigo">
          <h2>
            <span className="badge">1</span> Statistical Condition Types — The
            Common Thread
          </h2>
          <div className="callout indigo">
            🔑 <strong>Statistical</strong> = the "Statistics" checkbox is
            checked for that condition type in the pricing procedure.
          </div>
          <p>When checked, two things happen:</p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  The condition value has
                  <strong>no effect on Net Value</strong> — it's for
                  display/reference only
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  The value is <strong>never posted to accounting</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🎨 <strong>Visual tip in the order screen:</strong> Statistical
            amounts appear in <strong>black</strong> text; amounts that actually
            affect Net Value (like base price, discounts, surcharges, tax)
            appear in <strong>colored</strong> text (e.g. red for base price,
            blue for discounts). This is a quick visual way to identify which
            lines are "just for show."
          </div>
          <p className="note-text">
            Every special condition type in this lecture (VPRS, KUMU, AMIW, and
            cash discounts by default) uses this statistical mechanism.
          </p>
        </div>
        {/* <!-- Section 2: VPRS --> */}
        <div className="card">
          <h2>
            <span className="badge">2</span> VPRS — Cost Condition Type
          </h2>
          <div className="callout">
            💡 <strong>VPRS</strong> pulls the <strong>cost</strong> maintained
            in the <strong>Material Master (Accounting view)</strong> and
            displays it in the sales document — purely for internal reference
            (e.g. margin visibility), never posted or added to Net Value.
          </div>
          <h3>Configuration</h3>
          <p>
            T-code: <span className="tcode">V/08</span> → place in the last step
            of the pricing procedure
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>Statistics?</th>
                <th>Subtotal</th>
                <th>Requirement</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>200</td>
                <td>
                  <span className="tag tag-vprs">VPRS</span>
                </td>
                <td>✅ Checked</td>
                <td>B</td>
                <td>4</td>
              </tr>
            </tbody>
          </table>
          <h3>Result Example</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Field</th>
                <th>Source</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Material Master Cost</td>
                <td>MM02 → Accounting view</td>
                <td>₹5,000/unit</td>
              </tr>
              <tr>
                <td>VPRS in Order (100 units)</td>
                <td>Auto-calculated: 5000 × 100</td>
                <td className="stat-color">₹5,00,000 (black/statistical)</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            VPRS lets a sales rep see cost vs. price side-by-side in the order
            without it affecting the customer-facing net value or accounting
            postings.
          </p>
        </div>
        {/* <!-- Section 3: SKTO/SKTV --> */}
        <div className="card teal">
          <h2>
            <span className="badge">3</span> SKTO vs SKTV — Cash Discount
          </h2>
          <div className="callout">
            💡 Both represent <strong>cash discount</strong> (early payment
            incentive), maintained as a percentage in
            <strong>Terms of Payment</strong> (not VK11) — the key difference is
            the calculation base.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Calculated On</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-skto">SKTO</span>
                </td>
                <td>
                  Net Value <strong>+ Tax</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-skto">SKTV</span>
                </td>
                <td>
                  Net Value <strong>only</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Configuration</h3>
          <p>
            T-code: <span className="tcode">V/08</span>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>From</th>
                <th>Statistics?</th>
                <th>Requirement</th>
                <th>Base Type / Calc Type</th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>210</td>
                <td>SKTO</td>
                <td>120 (Net Value)</td>
                <td>✅</td>
                <td>9</td>
                <td>Base Type 11</td>
                <td>—</td>
              </tr>
              <tr>
                <td>220</td>
                <td>SKTV</td>
                <td>120 (Net Value)</td>
                <td>✅</td>
                <td>14</td>
                <td>Calc Type Formula 2</td>
                <td>D</td>
              </tr>
            </tbody>
          </table>
          <h3>Maintaining the Rate — Terms of Payment</h3>
          <div className="path">
            <span className="node">SPRO</span>
            <span className="sep">→</span>
            <span className="node">Sales and Distribution</span>
            <span className="sep">→</span>
            <span className="node">Master Data</span>
            <span className="sep">→</span>
            <span className="node">Business Partners</span>
            <span className="sep">→</span>{" "}
            <span className="node">Customers</span>
            <span className="sep">→</span>
            <span className="node">Billing Document</span>
            <span className="sep">→</span>
            <span className="node">Define Terms of Payment</span>
          </div>
          <p>
            Terms of payment <code>P030</code> (assigned in customer master) →
            "Within 5 days: 4%" cash discount.
          </p>
          <h3>Worked Example (P030 = 4%)</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition</th>
                <th>Base</th>
                <th>Calculation</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>SKTO</td>
                <td>Net Value + Tax = ₹9,57,330 + ₹1,91,466 = ₹11,48,796</td>
                <td>× 4%</td>
                <td className="amount">₹45,951.84</td>
              </tr>
              <tr>
                <td>SKTV</td>
                <td>Net Value only = ₹9,57,330</td>
                <td>× 4%</td>
                <td className="amount">₹38,293.20</td>
              </tr>
            </tbody>
          </table>
          <h3>Switching from SKTO to SKTV</h3>
          <p>
            T-code: <span className="tcode">OBY6</span> → select your company
            code → Details
          </p>
          <div className="callout red">
            🔧 <strong>Toggle:</strong> Check the field
            <strong>"Tax base is net value"</strong> → system determines
            <strong>SKTV</strong> instead of SKTO. Uncheck it → back to SKTO.
          </div>
        </div>
        {/* <!-- Section 4: KUMU --> */}
        <div className="card orange">
          <h2>
            <span className="badge">4</span> KUMU — BOM (Bill of Materials) Item
            Pricing
          </h2>
          <div className="callout">
            💡 In a <strong>BOM scenario</strong> (e.g., "Computer" = header
            item with components CPU, Monitor, Keyboard, Mouse), the header item
            itself has no price — only its components do.
            <strong>
              KUMU accumulates the prices of all components and displays the
              total on the main/header item.
            </strong>
          </div>
          <h3>Setting Up BOM Pricing</h3>
          <div className="stepper">
            <div className="step">
              Go to the header material (e.g. "Computer") → Material Master →
              set
              <strong>Item Category Group = LUMF</strong> (enables header
              pricing + item pricing split)
            </div>
            <div className="step">
              Maintain condition records (PPR0/VK11) for
              <strong>each component</strong>, not the header: CPU = ₹8,000,
              Monitor = ₹6,500, Keyboard/Mouse = ₹500 each
            </div>
            <div className="step">
              Create a sales order for the header material (Computer, qty 1) —
              components auto-explode as sub-items with their own prices
            </div>
            <div className="step">
              Double-click the <strong>main item</strong> → Conditions → see
              <strong>KUMU</strong> showing the accumulated total
            </div>
          </div>
          <h3>Configuration</h3>
          <p>
            T-code: <span className="tcode">V/08</span> → place in the last step
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>From</th>
                <th>Statistics?</th>
                <th>Calculation Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>230</td>
                <td>
                  <span className="tag tag-kumu">KUMU</span>
                </td>
                <td>120</td>
                <td>✅</td>
                <td>36</td>
              </tr>
            </tbody>
          </table>
          <h3>Worked Example</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Component</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>CPU</td>
                <td>₹8,000</td>
              </tr>
              <tr>
                <td>Monitor</td>
                <td>₹6,500</td>
              </tr>
              <tr>
                <td>Keyboard</td>
                <td>₹500</td>
              </tr>
              <tr>
                <td>Mouse</td>
                <td>₹500 (approx, per class example totals)</td>
              </tr>
              <tr>
                <td>
                  <strong>Main Item "Computer" → KUMU</strong>
                </td>
                <td className="price-final">₹15,000 (sum of all components)</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            KUMU is statistical — it's a display roll-up only; actual billing
            still happens at the component level.
          </p>
        </div>
        {/* <!-- Section 5: Intercompany --> */}
        <div className="card purple">
          <h2>
            <span className="badge">5</span> Intercompany Condition Types
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-ic">IV01</span>
                </td>
                <td>Intercompany billing/pricing</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-ic">PI01</span>
                </td>
                <td>Intercompany pricing</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            Used when one company code (plant) sells/delivers on behalf of
            another company code within the same corporate group — these
            condition types handle the internal transfer pricing between the
            two.
          </p>
        </div>
        {/* <!-- Section 6: Rebates --> */}
        <div className="card gold">
          <h2>
            <span className="badge">6</span> Rebate Condition Types
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Name</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-rebate">BO01</span>
                </td>
                <td>Group Rebate</td>
                <td>
                  Rebate announced on a <strong>group of materials</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-rebate">BO02</span>
                </td>
                <td>Material Rebate</td>
                <td>
                  Rebate announced on a <strong>specific material</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-rebate">BO03</span>
                </td>
                <td>Customer Rebate</td>
                <td>
                  Rebate announced
                  <strong>irrespective of material</strong> (based purely on
                  customer's total purchases)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            💡 Rebates differ from discounts: rebates are typically
            <strong>retroactive/period-end</strong> incentives (e.g., "buy ₹10
            lakh worth this quarter, get 2% back"), settled later — not deducted
            immediately at order time like a normal discount.
          </div>
        </div>
        {/* <!-- Section 7: AMIW/AMIZ --> */}
        <div className="card red">
          <h2>
            <span className="badge">7</span> AMIW / AMIZ — Minimum Order Value
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-amiw">AMIW</span>
                </td>
                <td>
                  Minimum Order Value — the threshold you define per material
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-amiw">AMIZ</span>
                </td>
                <td>
                  Minimum Value Surcharge — the "top-up" amount automatically
                  added when an order falls short of AMIW
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Configuration</h3>
          <p>
            T-code: <span className="tcode">V/08</span> → place in the last
            steps
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>Statistics?</th>
                <th>Calculation Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>240</td>
                <td>AMIW</td>
                <td>✅ Checked</td>
                <td>13</td>
              </tr>
              <tr>
                <td>250</td>
                <td>AMIZ</td>
                <td>❌ Not checked</td>
                <td>15</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            ⚠️ <strong>Important distinction:</strong> AMIW
            <em>is</em> statistical (just shows the threshold for reference),
            but AMIZ is <strong>NOT statistical</strong> — because the top-up
            surcharge actually needs to increase the real Net Value paid.
          </div>
          <h3>Master Data</h3>
          <p>
            T-code: <span className="tcode">VK11</span> → Condition Type
            <code>AMIW</code>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Material</th>
                <th>Minimum Order Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vaccine 1500</td>
                <td className="amount">₹5,00,000</td>
              </tr>
            </tbody>
          </table>
          <h3>Worked Examples</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Order Value (Actual)</th>
                <th>AMIW Threshold</th>
                <th>AMIZ Top-Up</th>
                <th>Final Net Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>₹4,97,000</td>
                <td>₹5,00,000</td>
                <td className="amount">+ ₹3,000</td>
                <td className="price-final">₹5,00,000</td>
              </tr>
              <tr>
                <td>₹4,77,120 (48 qty)</td>
                <td>₹5,00,000</td>
                <td className="amount">+ ₹22,880</td>
                <td className="price-final">₹5,00,000</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ <strong>Logic:</strong> If actual order value is below the AMIW
            threshold, the system automatically calculates the shortfall as AMIZ
            and adds it — guaranteeing the order never bills below the
            configured minimum per material.
          </div>
        </div>
        {/* <!-- Section 8: Consolidated reference --> */}
        <div className="card">
          <h2>
            <span className="badge">📋</span> Consolidated Reference — All
            "Other" Condition Types
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Purpose</th>
                <th>Statistical?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VPRS</td>
                <td>Cost from material master</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>SKTO</td>
                <td>Cash discount on Net Value + Tax</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>SKTV</td>
                <td>Cash discount on Net Value only</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>KUMU</td>
                <td>BOM component value roll-up on header item</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>IV01 / PI01</td>
                <td>Intercompany pricing</td>
                <td>—</td>
              </tr>
              <tr>
                <td>BO01 / BO02 / BO03</td>
                <td>Group / Material / Customer rebate</td>
                <td>—</td>
              </tr>
              <tr>
                <td>AMIW</td>
                <td>Minimum order value threshold</td>
                <td>✅ Yes</td>
              </tr>
              <tr>
                <td>AMIZ</td>
                <td>Minimum value shortfall surcharge</td>
                <td>❌ No (affects Net Value)</td>
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
                  What does checking "Statistics" do for a condition type?
                </td>
                <td>
                  The value has no effect on Net Value, and is never posted to
                  accounting
                </td>
              </tr>
              <tr>
                <td>
                  How can you visually spot statistical amounts in a sales
                  order?
                </td>
                <td>
                  They display in black text; real (non-statistical) amounts
                  display in color (e.g. red for base price, blue for discounts)
                </td>
              </tr>
              <tr>
                <td>What does VPRS do?</td>
                <td>
                  Pulls the cost maintained in the Material Master (Accounting
                  view) into the sales document for internal reference —
                  statistical only
                </td>
              </tr>
              <tr>
                <td>What is the difference between SKTO and SKTV?</td>
                <td>
                  SKTO calculates cash discount on Net Value + Tax; SKTV
                  calculates it on Net Value only
                </td>
              </tr>
              <tr>
                <td>
                  How do you switch a system from determining SKTO to SKTV?
                </td>
                <td>
                  Go to OBY6, select the company code, and check "Tax base is
                  net value"
                </td>
              </tr>
              <tr>
                <td>What is the role of KUMU?</td>
                <td>
                  Accumulates the prices of BOM components and displays the
                  total on the main/header item
                </td>
              </tr>
              <tr>
                <td>
                  What Item Category Group enables BOM header + item pricing?
                </td>
                <td>LUMF</td>
              </tr>
              <tr>
                <td>What are the three types of rebate condition types?</td>
                <td>
                  BO01 (Group Rebate), BO02 (Material Rebate), BO03 (Customer
                  Rebate)
                </td>
              </tr>
              <tr>
                <td>
                  What is the difference between AMIW and AMIZ, and why does
                  only one stay statistical?
                </td>
                <td>
                  AMIW is the minimum order value threshold (statistical); AMIZ
                  is the automatic top-up surcharge when the order falls short —
                  AMIZ is NOT statistical because it must actually increase Net
                  Value
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
                  Place VPRS, SKTO, SKTV, KUMU, AMIW, AMIZ in Pricing Procedure
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">MM02</span>
                </td>
                <td>
                  Maintain material cost (Accounting view, for VPRS) / Item
                  Category Group = LUMF (for KUMU/BOM)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VK11</span>
                </td>
                <td>
                  Maintain condition records — component prices for KUMU/BOM,
                  and AMIW (minimum order value)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">OBY6</span>
                </td>
                <td>
                  Toggle "Tax base is net value" to switch cash discount
                  determination between SKTO and SKTV
                </td>
              </tr>
              <tr>
                <td>SPRO (no single T-code)</td>
                <td>
                  Define Terms of Payment — SD → Master Data → Business Partners
                  → Customers → Billing Document (maintain cash discount %)
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
                <th>Condition Type</th>
                <th>Step</th>
                <th>Statistics?</th>
                <th>Key Setting</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>VPRS</td>
                <td>200</td>
                <td>✅</td>
                <td>Subtotal B, Requirement 4</td>
              </tr>
              <tr>
                <td>SKTO</td>
                <td>210</td>
                <td>✅</td>
                <td>From 120, Requirement 9, Base Type 11</td>
              </tr>
              <tr>
                <td>SKTV</td>
                <td>220</td>
                <td>✅</td>
                <td>From 120, Requirement 14, Formula 2, Subtotal D</td>
              </tr>
              <tr>
                <td>KUMU</td>
                <td>230</td>
                <td>✅</td>
                <td>From 120, Calculation Type 36</td>
              </tr>
              <tr>
                <td>AMIW</td>
                <td>240</td>
                <td>✅</td>
                <td>Calculation Type 13</td>
              </tr>
              <tr>
                <td>AMIZ</td>
                <td>250</td>
                <td>❌</td>
                <td>Calculation Type 15</td>
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
            This lecture rounded out the pricing procedure with special-purpose
            condition types beyond the core base price/discount/surcharge/tax
            flow. Most rely on the <strong>Statistics</strong> checkbox to
            display reference values without touching Net Value or accounting:
            VPRS (material cost), SKTO/SKTV (cash discount, differing only in
            tax inclusion), and KUMU (BOM component roll-up). Intercompany
            (IV01/PI01) and rebate types (BO01/02/03) were introduced
            conceptually. The lecture closed with AMIW/AMIZ — a minimum order
            value mechanism where AMIZ is the sole exception that actually
            affects Net Value, automatically topping up any shortfall below the
            configured minimum. With this, the pricing procedure design is
            complete; next comes the deep-dive into condition type and pricing
            procedure control fields.
          </p>
        </div>
        {/* <!-- Section 9: Key Takeaways --> */}
        <div className="card indigo">
          <h2>
            <span className="badge">⭐</span> Key Takeaways &amp; Next Class
          </h2>
          <ul>
            <li>
              <strong>Statistical checkbox</strong> is the unifying mechanism
              across most special condition types — no effect on Net Value, no
              accounting posting
            </li>
            <li>
              <strong>Black text = statistical, colored text = real</strong> — a
              fast visual cue in the order's Conditions tab
            </li>
            <li>
              SKTO/SKTV differ only in calculation base (Net+Tax vs. Net only) —
              controlled via <code>OBY6</code> "Tax base is net value" flag
            </li>
            <li>
              KUMU is essential for <strong>BOM/kit pricing</strong> where the
              header item itself carries no price
            </li>
            <li>
              Rebates (BO01/02/03) are typically
              <strong>period-end retroactive</strong> incentives, distinct from
              immediate discounts
            </li>
            <li>
              <strong>AMIW is statistical, AMIZ is not</strong> — this is the
              one exception where the "shortfall" condition type must actually
              hit Net Value
            </li>
          </ul>
          <p>
            📅 <strong>Next lecture:</strong> The pricing procedure is now
            functionally complete — from tomorrow, focus shifts to
            <strong>Condition Type Controls</strong> (deep-dive into every field
            in V/06) and the underlying mechanics of how each behaves.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 72 Notes — SAP SD Pricing: Other Special Condition Types 🎓
      </p>
    </div>
  );
};

export default Pricing72;
