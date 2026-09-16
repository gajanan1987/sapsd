const Material39 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-purple">
    <h1>
     🏭 Lecture 39 — Fields in Material Master: MRP Views, Storage Location
     Determination &amp; Accounting View
    </h1>
    <p>
     SAP SD | MRP1–MRP3 (Requirement Type determination, Procurement Type,
     Strategy Group), Storage Location Determination (OVL3), Shelf Life
     fields, and closing with Valuation Class &amp; Price Control — the final
     Material Master fields
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class ended the Purchasing view with GR Processing Time. Today
      continues with the <strong>MRP1, MRP2, and MRP3</strong> views (which
      together determine Requirement Type in the sales document), then
      covers <strong>Storage Location Determination</strong>, the
      <strong>Shelf Life</strong> fields, and finally the
      <strong>Accounting view</strong> — Valuation Class and Price Control —
      closing out Material Master fields entirely.
     </div>
    </div>

    {/* <!-- Section 1: MRP Group --> */}
    <div className="card teal">
     <h2><span className="badge">35</span> MRP1 View — MRP Group</h2>
     <div className="callout teal">
      💡 <strong>MRP Group</strong> is one of the parameters used to
      determine <strong>Requirement Type</strong> in the sales document.
      (Requirement Type itself ties into the Availability Check / Transfer
      of Requirements concept, covered separately.)
     </div>
    </div>

    {/* <!-- Section 2: MRP Type --> */}
    <div className="card orange">
     <h2><span className="badge">36</span> MRP1 View — MRP Type</h2>
     <div className="callout orange">
      💡 <strong>MRP Type</strong> controls whether the material is
      <strong>relevant for planning</strong> (MRP = Materials Requirement
      Planning) or not.
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
        <td>** (e.g., PD)</td>
        <td>Material is relevant for planning</td>
       </tr>
       <tr>
        <td>ND</td>
        <td>No planning — material is not relevant for planning</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Example: scrap materials typically don't require planning, so
      they're maintained as <code>ND</code>; regular materials are
      maintained with a planning-relevant MRP type. MRP Type is also one of
      the parameters used to determine the
      <strong>Schedule Line Category</strong> and, along with MRP Group,
      feeds into <strong>Requirement Type</strong> determination in the
      sales document.
     </p>
    </div>

    {/* <!-- Section 3: MRP Controller --> */}
    <div className="card purple">
     <h2><span className="badge">37</span> MRP1 View — MRP Controller</h2>
     <div className="callout purple">
      💡 <strong>MRP Controller</strong> is the person
      <strong>responsible for running MRP</strong> for this material.
     </div>
    </div>

    {/* <!-- Section 4: Procurement Type --> */}
    <div className="card red">
     <h2><span className="badge">38</span> MRP2 View — Procurement Type</h2>
     <div className="callout red">
      💡 <strong>Procurement Type</strong> controls whether the material is
      <strong>manufactured in-house, procured externally, or both</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Value</th>
        <th>Meaning</th>
        <th>Typical Use</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>E</td>
        <td>In-house production</td>
        <td>Finished goods</td>
       </tr>
       <tr>
        <td>F</td>
        <td>External procurement</td>
        <td>Trading goods</td>
       </tr>
       <tr>
        <td>X</td>
        <td>Both procurement types</td>
        <td>Materials that can be either manufactured or purchased</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 5: In-House Production Time --> */}
    <div className="card gold">
     <h2>
      <span className="badge">39</span> MRP2 View — In-House Production
     </h2>
     <div className="callout gold">
      💡 <strong>In-House Production</strong> is the
      <strong>time taken to manufacture the goods</strong>.
     </div>
    </div>

    {/* <!-- Section 6: Planned Delivery Time --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">40</span> MRP2 View — Planned Delivery Time
     </h2>
     <div className="callout indigo">
      💡 <strong>Planned Delivery Time</strong> is the
      <strong
      >time taken to deliver the goods from the vendor's location to the
       plant</strong
      >.
     </div>
    </div>

    {/* <!-- Section 7: Safety Stock --> */}
    <div className="card cyan">
     <h2><span className="badge">41</span> MRP2 View — Safety Stock</h2>
     <div className="callout cyan">
      💡 <strong>Safety Stock</strong> is the
      <strong>minimum stock</strong> a company has to maintain to meet
      <strong>future emergency requirements</strong>.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example (T-code MD04):</strong> maintaining a Safety
      Stock of <code>50,000</code> immediately deducts that quantity from
      the available stock figure — available stock dropped from
      <code>1,99,98,400</code> to <code>1,99,48,400</code> the moment Safety
      Stock was saved.
     </div>
    </div>

    {/* <!-- Section 8: Strategy Group --> */}
    <div className="card green">
     <h2><span className="badge">42</span> MRP3 View — Strategy Group</h2>
     <div className="callout green">
      💡 <strong>Strategy Group</strong> controls whether the material is
      <strong>Make-to-Order</strong> or <strong>Make-to-Stock</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Strategy Group Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Make-to-Order</td>
        <td>20</td>
       </tr>
       <tr>
        <td>Make-to-Stock</td>
        <td>Blank, or 10</td>
       </tr>
      </tbody>
     </table>

     <h3>Make-to-Order</h3>
     <div className="callout blue">
      🔗 Manufacturing of the finished goods only
      <strong>starts after receiving the order from the customer</strong> —
      because product specifications aren't standard, and each customer
      orders with their own specification. Examples:
      <strong>defense products, heavy machinery, heavy electricals</strong>.
     </div>

     <h3>Make-to-Stock</h3>
     <div className="callout blue">
      🔗 Goods are manufactured
      <strong>irrespective of customer orders</strong> and kept as stock;
      when an order arrives, it is
      <strong>delivered directly from that stock</strong>.
     </div>

     <div className="callout">
      📖
      <strong>Requirement Type determination — order of criteria:</strong>
     </div>
     <div className="stepper">
      <div className="step">
       <strong>Strategy Group</strong> (first priority)
      </div>
      <div className="step">
       <strong>MRP Group</strong> (second priority)
      </div>
      <div className="step">
       <strong>Item Category + MRP Type</strong> (third priority)
      </div>
     </div>
     <p className="note-text">
      📌 These three fields (Strategy Group, MRP Group, and Item
      Category/MRP Type) together form the criteria the system checks, in
      that order, to determine the Requirement Type in the sales document.
     </p>
    </div>

    {/* <!-- Section 9: Total Replenishment Lead Time --> */}
    <div className="card pink">
     <h2>
      <span className="badge">43</span> MRP3 View — Total Replenishment Lead
      Time (RLT)
     </h2>
     <div className="callout pink">
      💡 <strong>Total Replenishment Lead Time (RLT)</strong> is the
      <strong
      >total time taken to manufacture the goods and make them
       ready</strong
      >.
     </div>
    </div>

    {/* <!-- Section 10: Storage Conditions / Storage Location Determination --> */}
    <div className="card brown">
     <h2>
      <span className="badge">44</span> Plant Data/Storage 1 View — Storage
      Conditions &amp; Storage Location Determination
     </h2>
     <div className="callout brown">
      💡 <strong>Storage Conditions</strong> is one of the parameters used
      to determine <strong>Storage Location</strong> in the delivery
      document.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Storage Condition</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>01</td>
        <td>Normal products</td>
       </tr>
       <tr>
        <td>03</td>
        <td>Products requiring cool temperature</td>
       </tr>
      </tbody>
     </table>

     <h3>Configuration Path — Storage Location Determination (OVL3)</h3>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Logistics Execution</span
      ><span className="sep">→</span> <span className="node">Shipping</span
      ><span className="sep">→</span> <span className="node">Picking</span
      ><span className="sep">→</span>
      <span className="node">Determine Picking Location</span
      ><span className="sep">→</span>
      <span className="node">Assign Picking Locations</span>
     </div>
     <div className="callout blue">
      🔗 <strong>Determination logic:</strong> Storage Location is
      determined from the combination of <strong>Shipping Point</strong> +
      <strong>Plant</strong> + <strong>Storage Condition</strong>.
     </div>

     <h3>Worked Combinations (T-code OVL3)</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Shipping Point</th>
        <th>Plant</th>
        <th>Storage Condition</th>
        <th>Storage Location</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P101</td>
        <td>P100</td>
        <td>01</td>
        <td>P103</td>
       </tr>
       <tr>
        <td>P101</td>
        <td>P100</td>
        <td>03</td>
        <td>P104</td>
       </tr>
       <tr>
        <td>P102</td>
        <td>P100</td>
        <td>01</td>
        <td>P103</td>
       </tr>
       <tr>
        <td>P102</td>
        <td>P100</td>
        <td>03</td>
        <td>P104</td>
       </tr>
       <tr>
        <td>P201</td>
        <td>P200</td>
        <td>01</td>
        <td>P203</td>
       </tr>
       <tr>
        <td>P201</td>
        <td>P200</td>
        <td>03</td>
        <td>P204</td>
       </tr>
       <tr>
        <td>P202</td>
        <td>P200</td>
        <td>01</td>
        <td>P203</td>
       </tr>
       <tr>
        <td>P202</td>
        <td>P200</td>
        <td>03</td>
        <td>P204</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📌 <strong>Transcription note:</strong> the live OVL3 entry sequence
      was heavily garbled in the audio; the table above is the clearest
      consistent reconstruction (two shipping points per plant, storage
      condition 01/03 mapping to a dedicated storage location each) — worth
      verifying directly against the practice system.
     </div>
     <div className="stepper">
      <div className="step">
       Create a Sales Order for the customer as usual.
      </div>
      <div className="step">
       Create the Delivery → mention Storage Condition (01 or 03) →
       <strong>Storage Location is determined automatically</strong>
       (e.g., P102) based on the OVL3 combination.
      </div>
      <div className="step">
       Go to Picking on the delivery — the storage location shows up
       automatically there as well.
      </div>
     </div>
    </div>

    {/* <!-- Section 11: Total Shelf Life --> */}
    <div className="card slate">
     <h2>
      <span className="badge">45</span> Plant Data/Storage 1 View — Total
      Shelf Life
     </h2>
     <div className="callout slate">
      💡 <strong>Total Shelf Life</strong> is used to
      <strong>calculate the expiry date</strong> of the product.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Total Shelf Life =
      <code>60 days</code>. When stock is posted on the 29th of a month, the
      system automatically calculates the expiry date as
      <code>29/8/2026</code> (60 days ≈ 2 months forward).
     </div>
    </div>

    {/* <!-- Section 12: Minimum Remaining Shelf Life --> */}
    <div className="card teal">
     <h2>
      <span className="badge">46</span> Plant Data/Storage 1 View — Minimum
      Remaining Shelf Life
     </h2>
     <div className="callout teal">
      💡 <strong>Minimum Remaining Shelf Life</strong> works alongside Total
      Shelf Life — if the number of days maintained here is greater than the
      stock's remaining time to expiry, the system
      <strong>will not propose that stock during delivery</strong>.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Total Shelf Life = 60 days,
      Minimum Remaining Shelf Life = <code>10 days</code>. If a batch of
      stock is going to expire within the next 10 days, the system excludes
      it from being proposed at delivery time.
     </div>
    </div>

    {/* <!-- Section 13: Valuation Class --> */}
    <div className="card orange">
     <h2>
      <span className="badge">47</span> Accounting View — Valuation Class
     </h2>
     <div className="callout orange">
      💡 <strong>Valuation Class</strong> is one of the parameters used to
      determine the
      <strong>G/L accounts for the inventory accounting document</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Material Type</th>
        <th>Valuation Class</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Finished Goods</td>
        <td>7920</td>
       </tr>
       <tr>
        <td>Trading Goods</td>
        <td>3100</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔗 <strong>Where it fires:</strong> when Post Goods Issue (PGI) is
      done on a delivery, the system automatically generates the
      <strong>inventory accounting document</strong> — visible via Document
      Flow → Display Document → Accounting Document on the delivery.
     </div>
     <div className="callout gold">
      📖 <strong>Accounting entry at PGI:</strong> Cost of Goods Sold
      Account <strong>Debit</strong> → Inventory Account
      <strong>Credit</strong>.
     </div>
    </div>

    {/* <!-- Section 14: Price Control --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">48</span> Accounting View — Price Control
     </h2>
     <div className="callout indigo">
      💡 <strong>Price Control</strong> controls whether the cost of the
      product is a <strong>Standard Cost</strong> or a
      <strong>Moving (Average) Cost</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Value</th>
        <th>Meaning</th>
        <th>Cost Maintained In</th>
        <th>Typical Use</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>S</td>
        <td>Standard Cost (fixed — doesn't fluctuate)</td>
        <td>Standard Price field</td>
        <td>Finished Goods</td>
       </tr>
       <tr>
        <td>V</td>
        <td>Moving (Average) Cost — changes frequently</td>
        <td>Moving Price field</td>
        <td>Trading Goods</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ This closes out every field covered in Material Master — business
      processes are picked up starting next class.
     </div>
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
       <tr>
        <td>What does MRP Group determine?</td>
        <td>
         It is one of the parameters used to determine Requirement Type
         in the sales document
        </td>
       </tr>
       <tr>
        <td>What does MRP Type control, and what do ** and ND mean?</td>
        <td>
         Whether the material is relevant for planning; ** = relevant for
         planning (MRP), ND = no planning (e.g., scrap materials)
        </td>
       </tr>
       <tr>
        <td>What is MRP Controller?</td>
        <td>The person responsible for running MRP for that material</td>
       </tr>
       <tr>
        <td>
         What does Procurement Type control, and what do E/F/X mean?
        </td>
        <td>
         Whether the material is manufactured in-house, procured
         externally, or both; E = in-house production, F = external
         procurement, X = both
        </td>
       </tr>
       <tr>
        <td>What is In-House Production (field)?</td>
        <td>The time taken to manufacture the goods</td>
       </tr>
       <tr>
        <td>What is Planned Delivery Time?</td>
        <td>
         The time taken to deliver the goods from the vendor's location
         to the plant
        </td>
       </tr>
       <tr>
        <td>What is Safety Stock, and how does it affect MD04?</td>
        <td>
         The minimum stock a company must maintain to meet future
         emergency requirements; it is deducted from available stock
         immediately once maintained
        </td>
       </tr>
       <tr>
        <td>
         What does Strategy Group control, and what values represent
         Make-to-Order vs. Make-to-Stock?
        </td>
        <td>
         Whether the material is Make-to-Order or Make-to-Stock;
         Make-to-Order = 20, Make-to-Stock = blank or 10
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between Make-to-Order and Make-to-Stock?
        </td>
        <td>
         Make-to-Order starts manufacturing only after the customer order
         is received (non-standard specs, e.g., defense/heavy machinery);
         Make-to-Stock manufactures irrespective of orders and delivers
         from existing stock when orders arrive
        </td>
       </tr>
       <tr>
        <td>
         What is the order of criteria the system checks to determine
         Requirement Type?
        </td>
        <td>
         First Strategy Group, second MRP Group, third Item Category +
         MRP Type
        </td>
       </tr>
       <tr>
        <td>What is Total Replenishment Lead Time (RLT)?</td>
        <td>
         The total time taken to manufacture the goods and make them
         ready
        </td>
       </tr>
       <tr>
        <td>
         What determines Storage Location in the delivery document?
        </td>
        <td>
         The combination of Shipping Point + Plant + Storage Condition,
         configured via T-code OVL3
        </td>
       </tr>
       <tr>
        <td>What do Storage Condition values 01 and 03 represent?</td>
        <td>
         01 = normal products, 03 = products requiring cool temperature
        </td>
       </tr>
       <tr>
        <td>What is Total Shelf Life used for?</td>
        <td>
         Calculating the product's expiry date once stock is posted
         (e.g., 60 days from posting date)
        </td>
       </tr>
       <tr>
        <td>What is Minimum Remaining Shelf Life?</td>
        <td>
         The threshold below which the system will not propose stock for
         delivery — if stock is due to expire within this many days, it's
         excluded from delivery proposals
        </td>
       </tr>
       <tr>
        <td>
         What does Valuation Class determine, and what are the example
         values?
        </td>
        <td>
         The G/L accounts used for the inventory accounting document;
         Finished Goods = 7920, Trading Goods = 3100
        </td>
       </tr>
       <tr>
        <td>What is the accounting entry generated at PGI?</td>
        <td>
         Cost of Goods Sold Account Debit to Inventory Account Credit
        </td>
       </tr>
       <tr>
        <td>
         What does Price Control control, and what do S and V mean?
        </td>
        <td>
         Whether the product's cost is standard or moving; S = Standard
         Cost (fixed, maintained in Standard Price — typically Finished
         Goods), V = Moving Cost (fluctuates, maintained in Moving Price
         — typically Trading Goods)
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
        <td><span className="tcode">MD04</span></td>
        <td>
         Stock/Requirements List — used to see Safety Stock's effect on
         available quantity
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OVL3</span></td>
        <td>
         Storage Location Determination — combination of Shipping Point,
         Plant and Storage Condition
        </td>
       </tr>
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
       <tr>
        <td>MRP Type values</td>
        <td>
         ** = relevant for planning, ND = not relevant (no planning)
        </td>
       </tr>
       <tr>
        <td>Procurement Type values</td>
        <td>E in-house, F external, X both</td>
       </tr>
       <tr>
        <td>Safety Stock worked example</td>
        <td>
         50,000 deducted — available stock 1,99,98,400 → 1,99,48,400
        </td>
       </tr>
       <tr>
        <td>Strategy Group values</td>
        <td>20 = Make-to-Order, blank/10 = Make-to-Stock</td>
       </tr>
       <tr>
        <td>Requirement Type determination order</td>
        <td>
         1. Strategy Group, 2. MRP Group, 3. Item Category + MRP Type
        </td>
       </tr>
       <tr>
        <td>Storage Condition values</td>
        <td>01 normal, 03 cool temperature</td>
       </tr>
       <tr>
        <td>Total Shelf Life worked example</td>
        <td>60 days posted on the 29th → expiry 29/8/2026</td>
       </tr>
       <tr>
        <td>Minimum Remaining Shelf Life worked example</td>
        <td>
         10 days — stock expiring within 10 days is excluded from
         delivery proposals
        </td>
       </tr>
       <tr>
        <td>Valuation Class examples</td>
        <td>Finished Goods 7920, Trading Goods 3100</td>
       </tr>
       <tr>
        <td>Price Control values</td>
        <td>
         S = Standard Cost (Finished Goods), V = Moving Cost (Trading
         Goods)
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture worked through the remaining Material Master fields.
      <strong>MRP1</strong> covered MRP Group and MRP Type (planning
      relevance, ** vs. ND) and MRP Controller (who runs MRP).
      <strong>MRP2</strong> covered Procurement Type
      (in-house/external/both), In-House Production time, Planned Delivery
      Time, and Safety Stock (with a live MD04 demonstration of stock
      deduction). <strong>MRP3</strong> covered Strategy Group
      (Make-to-Order vs. Make-to-Stock, with the defense/heavy machinery vs.
      stock-and-deliver examples) and Total Replenishment Lead Time — along
      with the three-field priority order (Strategy Group → MRP Group → Item
      Category/MRP Type) that determines Requirement Type. The lecture then
      covered <strong>Storage Location Determination</strong> (Storage
      Conditions 01/03, combined with Shipping Point and Plant via OVL3),
      <strong>Total Shelf Life</strong> and
      <strong>Minimum Remaining Shelf Life</strong> (expiry-date calculation
      and stock-proposal exclusion), and closed with the
      <strong>Accounting view</strong>:
      <strong>Valuation Class</strong> (G/L account determination for the
      inventory accounting document generated at PGI — COGS debit /
      Inventory credit) and <strong>Price Control</strong> (Standard vs.
      Moving cost). This completes all Material Master fields covered in the
      course.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong
       >Requirement Type determination is a three-field priority
        chain</strong
       >
       — Strategy Group first, then MRP Group, then Item Category/MRP Type
       — worth memorizing as a sequence, not just as three unrelated fields
      </li>
      <li>
       <strong
       >Storage Location Determination mirrors Shipping Point
        Determination</strong
       >
       in structure — both combine a shipping point/condition-type field
       with Plant, just for different downstream documents (delivery header
       vs. picking/storage)
      </li>
      <li>
       <strong
       >Safety Stock has an immediate, visible effect on MD04</strong
       >
       — it's deducted from available stock the moment it's saved, not just
       a planning parameter on paper
      </li>
      <li>
       <strong
       >Total Shelf Life and Minimum Remaining Shelf Life work as a
        pair</strong
       >
       — one calculates expiry, the other decides whether near-expiry stock
       gets proposed at delivery
      </li>
      <li>
       <strong
       >Valuation Class and Price Control together drive inventory
        accounting</strong
       >
       — Valuation Class picks the G/L accounts, Price Control decides
       whether the value posted is a fixed Standard Price or a fluctuating
       Moving Price
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Material Master fields are now
      complete — the course moves on to Business Processes.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 39 Notes — Fields in Material Master: MRP Views, Storage Location
    Determination &amp; Accounting View 🎓
   </p>
  </div>
 );
};

export default Material39;
