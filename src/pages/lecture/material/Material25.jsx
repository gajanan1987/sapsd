const Material25 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-blue">
    <h1>🔄 Lecture 25 — Completing the Sales Cycle: Quotation, Order, Delivery &amp; Invoice</h1>
    <p>
     SAP SD | Shipping Point Determination, creating documents with
     reference, Post Goods Issue accounting, and Invoice account
     determination — the full Enquiry-to-Invoice flow, start to finish
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 An Enquiry was successfully created last class after fixing
      the pricing procedure. Today completes the full cycle:
      <strong>Quotation → Sales Order → Delivery → Invoice</strong>.
     </div>
    </div>

    {/* <!-- Section 1: Quotation with reference --> */}
    <div className="card teal">
     <h2><span className="badge">1</span> Creating a Quotation with Reference to an Enquiry</h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA21</span> → Quotation Type
       <code>QT</code> → mention Sales Area → click
       <strong>Create with Reference</strong>.
      </div>
      <div className="step">
       Enter the Enquiry number directly if known, or search by
       Customer number → select the enquiry → click
       <strong>Copy</strong>.
      </div>
      <div className="step">
       Mention <strong>Valid From / Valid To</strong> (validity
       period) → Enter.
      </div>
     </div>
     <div className="callout orange">
      💡 <strong>Why Quotations need a validity period:</strong> the
      quoted price is only guaranteed for that window (e.g. 1 month).
      Without a validity period, if a customer placed an order a year
      later after prices had increased, the company would be legally
      obligated to honor the old quoted price. A defined validity
      period protects against that.
     </div>
     <p className="note-text">
      📌 A validity period was not maintained on the Enquiry itself —
      giving a past date there only produces a warning message, not an
      error, and has no real consequence at that stage.
     </p>
     <div className="callout">
      🔁 <strong>Re-saving a condition record with the same price</strong>
      on the same day (via VK11/PR00) shows an informational message
      — this is harmless; the system simply overwrites with the newer
      entry.
     </div>
    </div>

    {/* <!-- Section 2: Shipping point determination --> */}
    <div className="card red">
     <h2><span className="badge">2</span> Shipping Point Determination (OVL2)</h2>
     <div className="callout red">
      ⚠️ The first time a Quotation is created, the
      <strong>Shipping Point</strong> field on the Shipping tab is
      <strong>not determined automatically</strong> — going to
      <strong>Edit → Incompletion Log</strong> shows it as incomplete.
      This must be configured once.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Logistics Execution</span><span className="sep">→</span>
      <span className="node">Shipping</span><span className="sep">→</span>
      <span className="node">Basic Shipping Functions</span><span className="sep">→</span>
      <span className="node">Shipping Point and Goods Receiving Point Determination</span><span className="sep">→</span>
      <span className="node">Assign Shipping Points</span>
     </div>
     <div className="callout blue">
      💡 <strong>How shipping point is determined:</strong> based on
      the combination of <strong>Shipping Condition</strong> (from
      Customer Master) + <strong>Loading Group</strong> (from Material
      Master) + <strong>Plant</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>Shipping Condition</th><th>Loading Group</th><th>Plant</th><th>Shipping Point Determined</th></tr>
      </thead>
      <tbody>
       <tr><td>01</td><td>0001</td><td>P100</td><td>P102 (Automatic)</td></tr>
       <tr><td>01</td><td>0003</td><td>P100</td><td>P101 (Manual)</td></tr>
       <tr><td>10</td><td>0001</td><td>P100</td><td>P103 (Immediate)</td></tr>
       <tr><td>10</td><td>0003</td><td>P100</td><td>P103 (Immediate)</td></tr>
       <tr><td>01</td><td>0001</td><td>P200</td><td>P202 (Automatic)</td></tr>
       <tr><td>01</td><td>0003</td><td>P200</td><td>P201 (Manual)</td></tr>
       <tr><td>10</td><td>0001</td><td>P200</td><td>P203 (Immediate)</td></tr>
       <tr><td>10</td><td>0003</td><td>P200</td><td>P203 (Immediate)</td></tr>
      </tbody>
     </table>
     <div className="callout">
      🔑 <strong>Why does Shipping Condition <code>10</code> always win?</strong>
      If Customer Master's Shipping Condition is set to <code>10</code>
      (Immediate), it forces the <strong>Immediate</strong> shipping
      point regardless of what Loading Group is set in Material
      Master — Shipping Condition <code>10</code> overrides the normal
      Automatic (0001) vs. Manual (0003) logic.
     </div>
     <div className="callout green">
      ✅ After maintaining this table (New Entries for all 8
      combinations across both plants → Save), re-create the Quotation
      via Create with Reference — the shipping point (e.g.
      <code>P102</code>) now determines automatically, and the
      Incompletion Log shows the document as complete.
     </div>
    </div>

    {/* <!-- Section 3: Saving quotation --> */}
    <div className="card gold">
     <h2><span className="badge">3</span> Saving the Quotation</h2>
     <div className="stepper">
      <div className="step">
       After shipping point determination is fixed, re-create the
       Quotation, mention Valid From / Valid To.
      </div>
      <div className="step">
       Go to <strong>Edit → Incompletion Log</strong> — confirm
       "document is complete" → Save.
      </div>
     </div>
     <p className="note-text">📌 Example quotation number generated: 240260.</p>
    </div>

    {/* <!-- Section 4: Sales order with reference --> */}
    <div className="card purple">
     <h2><span className="badge">4</span> Creating a Sales Order with Reference to a Quotation (VA01)</h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA01</span> → Order Type <code>OR</code>
       → mention Sales Area → <strong>Create with Reference</strong>.
      </div>
      <div className="step">
       Enter the Quotation number directly, or search by customer →
       double-click → <strong>Copy</strong>.
      </div>
      <div className="step">
       Mention <strong>PO Number</strong> — this is the
       <strong>customer's own Purchase Order number</strong>. After
       receiving the quotation, if the customer is satisfied, they
       raise their own PO and send it to the company; that PO number
       gets recorded here on the Sales Order.
      </div>
      <div className="step">
       Go to <strong>Edit → Incompletion Log</strong> → confirm
       complete → Save.
      </div>
     </div>
     <p className="note-text">📌 Example order number generated: 20698.</p>
     <div className="callout">
      💡 <strong>If you need to redo an order for practice:</strong>
      go to the existing sales document and delete it (or mark a
      Reason for Rejection) before creating a fresh one with the same
      reference.
     </div>
    </div>

    {/* <!-- Section 5: Checking confirmation before delivery --> */}
    <div className="card indigo">
     <h2><span className="badge">5</span> Before Creating Delivery — Check Shipping Point &amp; Confirmed Quantity</h2>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VA02</span> (change mode of the
       sales order) → double-click the line item → Shipping tab →
       confirm the <strong>Shipping Point</strong> (e.g.
       <code>P102</code>).
      </div>
      <div className="step">
       Go to <strong>Schedule Lines</strong> → check the
       <strong>Confirmed Quantity</strong> and confirmation date.
      </div>
     </div>
     <div className="callout red">
      ⚠️ If Confirmed Quantity shows <strong>0</strong>, delivery
      cannot proceed — this means there isn't enough available stock.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>T-Code</th><th>Purpose</th></tr>
      </thead>
      <tbody>
       <tr><td><span className="tcode">MMBE</span></td><td>Check whether stock exists at all for the material/plant/storage location</td></tr>
       <tr><td><span className="tcode">MD04</span></td><td>Check <strong>available</strong> quantity after accounting for existing orders (e.g. 1000 posted, minus 100 for one order, minus another 100 = 800 still available)</td></tr>
      </tbody>
     </table>
     <div className="callout blue">
      💡 <strong>Practical tip:</strong> post a generously large stock
      quantity (not just exactly 100) so multiple practice orders don't
      run out and fail to confirm. Stock can be posted via
      <span className="tcode">MB1C</span> as many times as needed — the
      earlier configuration errors only appear the very first time.
     </div>
    </div>

    {/* <!-- Section 6: Delivery --> */}
    <div className="card teal">
     <h2><span className="badge">6</span> Creating Delivery (VL01N)</h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VL01N</span> → mention Shipping Point
       (matching what was determined on the order, e.g.
       <code>P102</code>) and the confirmed delivery date → Enter.
      </div>
      <div className="step">
       Go to the <strong>Picking</strong> tab → mention the Storage
       Location where stock was actually posted (e.g.
       <code>P103</code>) → enter <strong>Pick Quantity</strong>,
       matching the delivery quantity exactly (e.g. both 100) →
       Enter.
      </div>
      <div className="step">
       Click <strong>Post Goods Issue (PGI)</strong>.
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Effects of Post Goods Issue (PGI):</strong>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>#</th><th>Effect</th></tr>
      </thead>
      <tbody>
       <tr><td>1</td><td>Stock is reduced from Unrestricted Stock</td></tr>
       <tr><td>2</td><td>An <strong>Inventory Accounting Document</strong> is generated: Cost of Goods Sold account <strong>Debit</strong>, to Inventory account <strong>Credit</strong></td></tr>
      </tbody>
     </table>
     <h3>Viewing the Inventory Accounting Document</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VL02N</span> (change mode of delivery) →
       click <strong>Document Flow</strong>.
      </div>
      <div className="step">
       Select <strong>Goods Issue: Delivery</strong> → click
       <strong>Display Document</strong> → click
       <strong>Accounting Documents</strong>.
      </div>
      <div className="step">
       The posting keys confirm the entry: <strong>81 = Debit</strong>
       (Cost of Goods Sold), <strong>99 = Credit</strong> (Inventory
       Account).
      </div>
     </div>
     <p className="note-text">
      📌 Cross-check reduced stock via <span className="tcode">MMBE</span>
      after PGI — the quantity should now be lower.
     </p>
    </div>

    {/* <!-- Section 7: Invoice --> */}
    <div className="card orange">
     <h2><span className="badge">7</span> Creating Invoice (VF01)</h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VF01</span> → the Delivery number appears
       automatically → Enter → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 8: Account determination error --> */}
    <div className="card red">
     <h2><span className="badge">⚠️</span> Error: "Error in Account Determination" (First Invoice Only)</h2>
     <div className="stepper">
      <div className="step">
       Go to T-code <span className="tcode">VKOA</span> → double-click
       table <code>004</code> ("General").
      </div>
      <div className="step">
       New Entries → Application <code>V</code>, Condition Type
       <code>KOFI</code>, Chart of Accounts <code>IND</code>, Sales
       Organization <code>P100</code>, G/L Account
       <code>800000</code> → Enter → Save.
      </div>
      <div className="step">
       New Entries again → Application <code>V</code>, Condition Type
       <code>KOFK</code> (the course audio referenced this as
       sounding like "KYF" — <code>KOFK</code> is the standard SAP
       condition type for CO account assignment and is the more
       likely intended value), Chart of Accounts <code>IND</code>,
       Sales Organization <code>P100</code>, G/L Account
       <code>800000</code> → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 9: Release to accounting error --> */}
    <div className="card gold">
     <h2><span className="badge">⚠️</span> Releasing the Invoice to Accounting — Another Number Range Fix</h2>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VF02</span> (change mode of the
       invoice) → click the <strong>Flag</strong> icon (release to
       accounting).
      </div>
      <div className="step">
       If you see <em>"Interval 14 does not exist for object
        RF_BELEG,"</em> go to <span className="tcode">FBN1</span> →
       mention Company Code (<code>P100</code>) → Change Intervals.
      </div>
      <div className="step">
       Add a new interval — number <code>14</code>, Year
       <code>2026</code>, using a number range that doesn't overlap
       the earlier interval <code>49</code> (1–9999) defined in
       Lecture 24 (the exact range spoken in class was unclear from
       the audio; pick any free, non-overlapping block) → Save.
      </div>
      <div className="step">
       Go back to <span className="tcode">VF02</span> and click Flag
       again — the invoice now releases successfully.
      </div>
     </div>
    </div>

    {/* <!-- Section 10: Revenue accounting document --> */}
    <div className="card teal">
     <h2><span className="badge">8</span> Revenue Accounting Document</h2>
     <div className="callout teal">
      💡 When an Invoice is created, the system generates a
      <strong>Revenue Accounting Document</strong>: Customer Account
      <strong>Debit</strong>, to Revenue Account <strong>Credit</strong>.
     </div>
     <div className="stepper">
      <div className="step">
       On the invoice's Accounting tab, check the posting keys:
       <strong>01 = Debit</strong> (Customer Account),
       <strong>50 = Credit</strong> (Revenue Account).
      </div>
     </div>
    </div>

    {/* <!-- Section 11: Consolidated flow --> */}
    <div className="card">
     <h2><span className="badge">📋</span> Full Sales Cycle — Consolidated Flow</h2>
     <div className="flow">
      <div className="flow-step flow-teal">Enquiry (VA11)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">Quotation (VA21)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">Sales Order (VA01)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-orange">Delivery + PGI (VL01N)</div>
      <div className="arrow">➜</div>
      <div className="flow-step">Invoice (VF01)</div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>Document</th><th>Key Accounting/Config Event</th></tr>
      </thead>
      <tbody>
       <tr><td>Delivery → PGI</td><td>Cost of Goods Sold Dr. / Inventory Cr. (posting keys 81/99)</td></tr>
       <tr><td>Invoice</td><td>Customer Account Dr. / Revenue Account Cr. (posting keys 01/50)</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Interview Questions --> */}
    <div className="card purple">
     <h2>
      <span className="badge">❓</span> Important Interview Questions &amp;
      Answers
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Question</th>
        <th>Answer</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>Why must a Quotation have a validity period, but an Enquiry doesn't strictly need one?</td><td>A Quotation's quoted price is legally binding only within its validity window; without one, the company could be forced to honor an outdated price. An Enquiry carries no such pricing commitment</td></tr>
       <tr><td>What determines a Shipping Point?</td><td>The combination of Shipping Condition (Customer Master) + Loading Group (Material Master) + Plant</td></tr>
       <tr><td>What T-code configures Shipping Point Determination?</td><td>OVL2</td></tr>
       <tr><td>What happens if Shipping Condition is set to 10 on the customer?</td><td>It forces the Immediate shipping point regardless of the material's Loading Group setting</td></tr>
       <tr><td>What is the PO Number field on a Sales Order for?</td><td>It records the customer's own Purchase Order number, raised after they accept the quotation</td></tr>
       <tr><td>What does Confirmed Quantity = 0 on a schedule line mean?</td><td>There isn't enough available stock to fulfill that quantity, so delivery cannot proceed until stock is available</td></tr>
       <tr><td>What's the difference between checking stock via MMBE vs. MD04?</td><td>MMBE shows total posted stock; MD04 shows available quantity after accounting for stock already committed to existing orders</td></tr>
       <tr><td>What are the two effects of Post Goods Issue (PGI)?</td><td>Stock is reduced from Unrestricted Stock, and an Inventory Accounting Document is generated (Cost of Goods Sold Dr. / Inventory Cr.)</td></tr>
       <tr><td>How do you view the accounting document generated by PGI?</td><td>VL02N → Document Flow → select Goods Issue: Delivery → Display Document → Accounting Documents</td></tr>
       <tr><td>What causes "Error in account determination" when saving an invoice, and how is it fixed?</td><td>Missing G/L account assignment for the billing condition types; fixed via VKOA → table 004 → New Entries for condition types KOFI and KOFK, mapping Application V + Chart of Accounts + Sales Organization to a G/L account</td></tr>
       <tr><td>What causes "Interval [X] does not exist for object RF_BELEG," and how is it fixed?</td><td>A missing billing document number range interval; fixed via FBN1, adding a new, non-overlapping interval for the company code</td></tr>
       <tr><td>What accounting entry does creating an Invoice generate?</td><td>A Revenue Accounting Document: Customer Account Debit (posting key 01), to Revenue Account Credit (posting key 50)</td></tr>
       <tr><td>If a sales order is blocked for credit, will its schedule lines confirm?</td><td>No — a credit-blocked order will not get confirmed quantities (covered in depth under Credit Management)</td></tr>
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
       <tr><td><span className="tcode">VA21</span></td><td>Create Quotation (with reference to an Enquiry)</td></tr>
       <tr><td><span className="tcode">OVL2</span></td><td>Configure Shipping Point Determination</td></tr>
       <tr><td><span className="tcode">VA01</span></td><td>Create Sales Order (with reference to a Quotation)</td></tr>
       <tr><td><span className="tcode">VA02</span></td><td>Change Sales Order — used here to verify shipping point and schedule line confirmation</td></tr>
       <tr><td><span className="tcode">MMBE</span></td><td>Stock Overview — total posted stock</td></tr>
       <tr><td><span className="tcode">MD04</span></td><td>Stock/Requirements List — available quantity after existing order commitments</td></tr>
       <tr><td><span className="tcode">VL01N</span></td><td>Create Delivery, including Picking and Post Goods Issue</td></tr>
       <tr><td><span className="tcode">VL02N</span></td><td>Change Delivery — used here to view the Document Flow and Accounting Documents</td></tr>
       <tr><td><span className="tcode">VF01</span></td><td>Create Invoice</td></tr>
       <tr><td><span className="tcode">VF02</span></td><td>Change Invoice — used here to release the invoice to accounting (Flag)</td></tr>
       <tr><td><span className="tcode">VKOA</span></td><td>Assign G/L accounts for billing account determination (fix for "Error in account determination")</td></tr>
       <tr><td><span className="tcode">FBN1</span></td><td>Maintain number range intervals (fix for missing RF_BELEG interval)</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Config Topics --> */}
    <div className="card gold">
     <h2>
      <span className="badge">⚙️</span> Important Configuration Topics &amp;
      Values
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Topic</th>
        <th>Value / Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>Shipping point determination basis</td><td>Shipping Condition + Loading Group + Plant</td></tr>
       <tr><td>Automatic shipping point (P100)</td><td>Condition 01, Loading Group 0001 → P102</td></tr>
       <tr><td>Manual shipping point (P100)</td><td>Condition 01, Loading Group 0003 → P101</td></tr>
       <tr><td>Immediate shipping point (P100)</td><td>Condition 10 (either loading group) → P103</td></tr>
       <tr><td>Example document numbers</td><td>Enquiry 140131, Quotation 240260, Sales Order 20698</td></tr>
       <tr><td>PGI accounting entry</td><td>Cost of Goods Sold Dr. (posting key 81) / Inventory Cr. (posting key 99)</td></tr>
       <tr><td>VKOA account determination</td><td>Table 004, Application V, Condition Types KOFI &amp; KOFK, Chart of Accounts IND, Sales Org P100, G/L 800000</td></tr>
       <tr><td>Invoice accounting entry</td><td>Customer Account Dr. (posting key 01) / Revenue Account Cr. (posting key 50)</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed the entire SAP SD sales cycle end to end.
      A <strong>Quotation</strong> (VA21) was created with reference to
      the earlier Enquiry, introducing the concept of validity periods
      (protecting the company from honoring outdated prices) and
      surfacing a first-time gap in
      <strong>Shipping Point Determination</strong> — fixed via
      <strong>OVL2</strong>, based on the Shipping Condition + Loading
      Group + Plant combination. A <strong>Sales Order</strong> (VA01)
      followed with reference to the Quotation, capturing the
      customer's own PO number, and was verified for shipping point and
      schedule-line confirmation (via VA02, cross-checked against
      MMBE/MD04 for available stock) before <strong>Delivery</strong>
      (VL01N) — picking against the correct storage location and
      triggering <strong>Post Goods Issue</strong>, which reduces stock
      and posts a Cost of Goods Sold / Inventory accounting entry. The
      cycle closed with <strong>Invoice</strong> (VF01), resolving two
      first-time errors — missing G/L account determination (fixed via
      <strong>VKOA</strong>) and a missing billing number range
      interval (fixed via <strong>FBN1</strong>) — before confirming
      the resulting Revenue Accounting Document (Customer Account
      debit, Revenue Account credit).
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>Quotations need validity periods</strong> — Enquiries
       do not
      </li>
      <li>
       <strong>Shipping Point</strong> is determined by Shipping
       Condition + Loading Group + Plant, configured once via
       <strong>OVL2</strong>
      </li>
      <li>
       Always verify <strong>Shipping Point</strong> and
       <strong>Schedule Line confirmation</strong> before attempting
       Delivery
      </li>
      <li>
       <strong>Post Goods Issue</strong> reduces stock and posts
       Cost of Goods Sold Dr. / Inventory Cr.
      </li>
      <li>
       <strong>Invoice</strong> posts Customer Account Dr. / Revenue
       Account Cr., after fixing account determination
       (<strong>VKOA</strong>) and number ranges
       (<strong>FBN1</strong>) the first time
      </li>
      <li>
       A <strong>credit-blocked order</strong> will not get confirmed
       schedule line quantities
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Back to Customer Master and
      Material Master — now discussing the detailed fields, since
      their effects can finally be observed across a completed sales
      cycle.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 25 Notes — Completing the Sales Cycle: Quotation, Order,
    Delivery &amp; Invoice 🎓
   </p>
  </div>
 );
};

export default Material25;
