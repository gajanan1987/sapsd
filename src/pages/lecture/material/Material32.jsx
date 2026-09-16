const Material32 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-purple">
    <h1>
     🚛 Lecture 32 — Fields in Customer Master: Shipping Tab — Delivery
     Priority, Backorder Processing, Shipping Point Determination, POD &amp;
     Partial Deliveries
    </h1>
    <p>
     SAP SD | Priority-based order fulfilment, the CMIR → Customer Master →
     Material Master plant-determination chain, proof of delivery control,
     and the partial-vs-complete delivery rules
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 The Sales tab is now complete (Customer 100640, Balaji Enterprises,
      Sales Area P100/P1/P1). Today moves into the
      <strong>Shipping tab</strong> of Customer Master, covering Delivery
      Priority, Backorder Processing, Rescheduling, Shipping Conditions,
      Delivering Plant, Order Combination, POD, and the partial/complete
      delivery controls.
     </div>
    </div>

    {/* <!-- Section 1: Delivery Priority --> */}
    <div className="card teal">
     <h2>
      <span className="badge">30</span> Shipping Tab — Delivery Priority
     </h2>
     <div className="callout teal">
      💡 <strong>Delivery Priority</strong> classifies customers into
      <strong>High</strong>, <strong>Medium</strong>, or
      <strong>Low</strong> delivery priority.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Priority</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>01</td>
        <td>High Delivery Priority</td>
       </tr>
       <tr>
        <td>02</td>
        <td>Medium Delivery Priority</td>
       </tr>
       <tr>
        <td>03</td>
        <td>Low Delivery Priority</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>Purpose: Backorder Processing and Rescheduling.</strong>
      Delivery Priority is what the system uses to decide who gets scarce
      stock first when demand exceeds availability.
     </div>
    </div>

    {/* <!-- Section 2: Backorder Processing --> */}
    <div className="card orange">
     <h2><span className="badge">31</span> Backorder Processing</h2>
     <div className="callout orange">
      💡 <strong>Backorder Processing</strong>: whenever a
      <strong>high delivery priority</strong> customer places an order and
      stock is <strong>not available</strong>, the system goes back to the
      open orders of <strong>low delivery priority customers</strong>,
      cancels their confirmations, and reassigns that stock to the
      high-priority customer's order.
     </div>
     <h3>Worked Example — Material X, Available Stock: 100</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Customer</th>
        <th>Delivery Priority</th>
        <th>Order Qty (Material X)</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>100553</td>
        <td>03 (Low)</td>
        <td>60</td>
        <td>Confirmed (stock remaining: 100 − 60 = 40)</td>
       </tr>
       <tr>
        <td>100554</td>
        <td>03 (Low)</td>
        <td>40</td>
        <td>Confirmed (stock remaining: 40 − 40 = 0)</td>
       </tr>
       <tr>
        <td>100551</td>
        <td>01 (High)</td>
        <td>—</td>
        <td>
         <strong>Not confirmed</strong> — no stock left (available
         quantity = 0)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Backorder processing kicks in here:</strong> since Customer
      100551 is high priority but the stock has already been given to two
      low-priority customers, the system goes back to those
      <strong>low delivery priority customers' open orders</strong>,
      <strong>cancels their confirmations</strong>, and
      <strong>assigns the freed-up stock to the high-priority customer's
       order</strong>
      instead.
     </div>
     <div className="callout blue">
      🔢 <strong>How much gets cancelled depends on the shortfall:</strong>
      if the high-priority order needs 50 or 60 units, only the first
      low-priority order is cancelled and reassigned; if it needs as much as
      80, both low-priority orders' confirmations may need to be cancelled.
      This decision is made manually by the user running backorder
      processing.
     </div>
     <p className="note-text">
      📌 Backorder Processing is part of the broader
      <strong>Availability Check</strong> concept, and it is a
      <strong>manual</strong> process — the user has to review open orders
      and decide what to cancel and reassign.
     </p>
    </div>

    {/* <!-- Section 3: Rescheduling --> */}
    <div className="card gold">
     <h2><span className="badge">32</span> Rescheduling</h2>
     <div className="callout gold">
      💡 <strong>Rescheduling</strong> is the
      <strong>automatic</strong> version of Backorder Processing.
     </div>
     <p>
      Backorder Processing (above) is done manually by a user reviewing open
      orders. If the system is configured to do this reassignment on its own
      instead, that automated equivalent is called Rescheduling — it belongs
      to the same Availability Check concept.
     </p>
    </div>

    {/* <!-- Section 4: Shipping Conditions --> */}
    <div className="card purple">
     <h2><span className="badge">33</span> Shipping Conditions</h2>
     <div className="callout purple">
      💡 <strong>Shipping Conditions</strong> is one of the parameters used
      to <strong>determine the Shipping Point</strong> in a sales document.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>01</td>
        <td>Standard — As Soon As Possible</td>
       </tr>
       <tr>
        <td>10</td>
        <td>Immediate</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🚨 <strong>When to use 10:</strong> for customers who need delivery on
      an urgent or emergency basis, Shipping Conditions
      <code>10</code> determines an immediate shipping point so goods can be
      dispatched right away.
     </div>

     <h3>Shipping Point Determination — T-code OVL2</h3>
     <div className="callout">
      🔧 Shipping Point Determination was already used during the
      Enquiry/Quotation practice earlier in the course — if a shipping point
      isn't determined, a Quotation cannot even be saved.
     </div>
     <p>
      The combination of <strong>Shipping Conditions</strong> (from Customer
      Master) + <strong>Loading Group</strong> (from Material Master) +
      <strong>Plant</strong> determines the Shipping Point:
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Shipping Condition</th>
        <th>Loading Group</th>
        <th>Plant</th>
        <th>Shipping Point</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>01</td>
        <td>0001</td>
        <td>P100</td>
        <td>P102 (Automatic)</td>
       </tr>
       <tr>
        <td>01</td>
        <td>0003</td>
        <td>P100</td>
        <td>P101 (Manual)</td>
       </tr>
       <tr>
        <td>10</td>
        <td>0001</td>
        <td>P100</td>
        <td>P103 (Immediate)</td>
       </tr>
       <tr>
        <td>10</td>
        <td>0003</td>
        <td>P100</td>
        <td>P103 (Immediate)</td>
       </tr>
       <tr>
        <td>01</td>
        <td>0001</td>
        <td>P200</td>
        <td>P202</td>
       </tr>
       <tr>
        <td>01</td>
        <td>0003</td>
        <td>P200</td>
        <td>P201</td>
       </tr>
       <tr>
        <td>10</td>
        <td>0001</td>
        <td>P200</td>
        <td>P203</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Note that Loading Group <code>0001</code> = automatic, and
      <code>0003</code> = manual — but whenever Shipping Condition is
      <code>10</code> (immediate), the Loading Group is overridden and the
      immediate shipping point is determined regardless.
     </p>
     <div className="callout">
      📌 <strong>Transcription correction:</strong> the T-code for Shipping
      Point Determination is <span className="tcode">OVL2</span>
      throughout — a later mishearing in the audio as "OBL2" refers to the
      same transaction.
     </div>
    </div>

    {/* <!-- Section 5: Delivering Plant --> */}
    <div className="card indigo">
     <h2><span className="badge">34</span> Delivering Plant</h2>
     <div className="callout indigo">
      💡 If a <strong>Plant</strong> is maintained on the Customer Master's
      Shipping tab, the system
      <strong>automatically determines that plant</strong> into the sales
      document.
     </div>
     <h3>Criteria to Determine Plant in a Sales Document</h3>
     <div className="callout blue">
      🔗 <strong>Priority order:</strong> the system checks these sources in
      sequence, using the first one that has a plant maintained:
     </div>
     <div className="stepper">
      <div className="step">
       <strong>CMIR</strong> (Customer Material Info Record) — first
       preference. Example: Plant <code>P200</code> maintained here.
      </div>
      <div className="step">
       <strong>Customer Master</strong> — checked only if CMIR has no plant
       maintained. Example: Plant <code>P100</code>.
      </div>
      <div className="step">
       <strong>Material Master</strong> — checked only if neither CMIR nor
       Customer Master has a plant maintained.
      </div>
     </div>
     <p className="note-text">
      📌 Summary: the plant-determination priority is
      <strong>CMIR → Customer Master → Material Master</strong>.
     </p>
    </div>

    {/* <!-- Section 6: Order Combination --> */}
    <div className="card red">
     <h2><span className="badge">35</span> Order Combination</h2>
     <div className="callout red">
      💡 <strong>Order Combination</strong> controls whether multiple sales
      orders of the <strong>same customer</strong> get combined into a
      <strong>single delivery</strong> — the same behavior seen earlier in
      Collective Processing (Lecture 27).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Setting</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Checked</td>
        <td>
         Multiple orders of the same customer combine into one delivery
        </td>
       </tr>
       <tr>
        <td>Unchecked</td>
        <td>
         Each order gets its own separate delivery, even for the same
         customer
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 7: Relevant for POD --> */}
    <div className="card green">
     <h2><span className="badge">36</span> Relevant for POD</h2>
     <div className="callout green">
      💡 <strong>POD</strong> = Proof of Delivery (acknowledgement). If
      <strong>Relevant for POD</strong> is checked, the system
      <strong>will not allow an invoice to be created until acknowledgement is
       received from the customer</strong>.
     </div>
     <h3>Worked Example</h3>
     <div className="stepper">
      <div className="step">
       Create Order (<span className="tcode">VA01</span>, type OR, Customer
       100640) → create Delivery → PGI → attempt to create Invoice.
      </div>
      <div className="step">
       Invoice creation fails with a message like "cannot be processed." Go
       to <strong>Edit → Log</strong> to see the exact reason.
      </div>
      <div className="step">
       The log shows: <em>"POD report back not yet carried out"</em> —
       meaning proof of delivery hasn't been received yet.
      </div>
     </div>
     <div className="callout blue">
      🔧 <strong>T-code to receive POD:</strong>
      <span className="tcode">VLPOD</span>.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VLPOD</span> → mention the Delivery
       number → Enter.
      </div>
      <div className="step">
       Mention the POD Date (e.g., today's date) → click the
       <strong>Confirm</strong> symbol → Save.
      </div>
      <div className="step">
       The invoice can now be created successfully.
      </div>
     </div>
    </div>

    {/* <!-- Section 8: POD Time Frame --> */}
    <div className="card gold">
     <h2><span className="badge">37</span> POD Time Frame</h2>
     <div className="callout gold">
      💡 <strong>POD Time Frame</strong> is only enabled when
      <strong>Relevant for POD</strong> is checked. It specifies a
      <strong>number of days</strong> — if the customer fails to send
      acknowledgement within that many days, the system will
      <strong>allow the invoice to be created anyway</strong>, without
      waiting for POD.
     </div>
     <p className="note-text">
      📌 Example: if POD Time Frame is set to 5 days and the customer hasn't
      sent acknowledgement within those 5 days, invoicing is no longer
      blocked.
     </p>
    </div>

    {/* <!-- Section 9: Complete Delivery Required --> */}
    <div className="card cyan">
     <h2><span className="badge">38</span> Complete Delivery Required</h2>
     <div className="callout cyan">
      💡 If checked, the system will
      <strong>not confirm partial quantities</strong> and will
      <strong>not allow partial deliveries</strong> — the full order
      quantity must be confirmed and delivered together.
     </div>
     <h3>
      Worked Example — Material X, Stock 100, RLT (Manufacturing) Time 15
      Days
     </h3>
     <div className="callout blue">
      📅 <strong>Normal scenario (unchecked):</strong> an order for 160
      units of Material X, placed on the 26th, gets split — 100 units
      confirm <strong>immediately</strong> (26th), and the remaining 60
      confirm on a <strong>future date</strong> based on RLT (Replenishment
      Lead Time) of 15 days — i.e., around the 10th of the following month.
     </div>
     <div className="callout red">
      ⚠️ <strong>With Complete Delivery Required checked:</strong> the same
      order for 160 units will <strong>not</strong> split. Even though 100
      units are available immediately, the system waits and confirms the
      <strong>entire 160 quantity together</strong>
      on the later date (10th), once the full quantity can be met.
     </div>
    </div>

    {/* <!-- Section 10: Partial Delivery per Item --> */}
    <div className="card brown">
     <h2><span className="badge">39</span> Partial Delivery per Item</h2>
     <div className="callout brown">
      💡 <strong>Partial Delivery per Item</strong> controls whether partial
      deliveries are allowed at all, and if so, the
      <strong>maximum number of partial deliveries</strong> permitted for
      that line item.
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
        <td>Blank</td>
        <td>Partial deliveries allowed, maximum 9 partial deliveries</td>
       </tr>
       <tr>
        <td>D</td>
        <td>Unlimited partial deliveries allowed</td>
       </tr>
       <tr>
        <td>C</td>
        <td>Complete delivery only — no partial deliveries</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Dependency with Complete Delivery Required:</strong> if
      Partial Delivery per Item is set to <code>C</code>, the
      <strong>Complete Delivery Required</strong> field (above)
      <strong>must also be checked</strong> — otherwise the system throws an
      error. The two settings have to agree with each other.
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
        <td>
         What does Delivery Priority classify customers into, and what is
         it used for?
        </td>
        <td>
         High (01), Medium (02), or Low (03) delivery priority; its
         purpose is Backorder Processing and Rescheduling
        </td>
       </tr>
       <tr>
        <td>What is Backorder Processing?</td>
        <td>
         When a high delivery priority customer places an order and stock
         is unavailable, the system goes back to open orders of low
         delivery priority customers, cancels their confirmations, and
         reassigns that stock to the high-priority customer's order
        </td>
       </tr>
       <tr>
        <td>Is Backorder Processing manual or automatic?</td>
        <td>
         Manual — the user reviews open orders and decides what to cancel
         and reassign
        </td>
       </tr>
       <tr>
        <td>What is Rescheduling?</td>
        <td>The automatic version of Backorder Processing</td>
       </tr>
       <tr>
        <td>
         What does Shipping Conditions determine, and what do codes 01
         and 10 mean?
        </td>
        <td>
         It's a parameter for determining the Shipping Point; 01 =
         Standard/As Soon As Possible, 10 = Immediate (for
         urgent/emergency deliveries)
        </td>
       </tr>
       <tr>
        <td>What is the T-code for Shipping Point Determination?</td>
        <td>OVL2</td>
       </tr>
       <tr>
        <td>
         What three factors combine to determine the Shipping Point?
        </td>
        <td>
         Shipping Condition (Customer Master) + Loading Group (Material
         Master) + Plant
        </td>
       </tr>
       <tr>
        <td>
         What is the priority order for determining Plant in a sales
         document?
        </td>
        <td>
         CMIR (Customer Material Info Record) first, then Customer
         Master, then Material Master
        </td>
       </tr>
       <tr>
        <td>What does the Order Combination field control?</td>
        <td>
         Whether multiple sales orders of the same customer combine into
         a single delivery (checked) or each gets a separate delivery
         (unchecked)
        </td>
       </tr>
       <tr>
        <td>What does "Relevant for POD" checked do?</td>
        <td>
         Blocks invoice creation until the customer's Proof of Delivery
         (POD) acknowledgement is received
        </td>
       </tr>
       <tr>
        <td>
         What T-code is used to record receipt of POD, and what does the
         log show if it's missing?
        </td>
        <td>
         VLPOD; the log under Edit → Log shows "POD report back not yet
         carried out" if invoicing is blocked for missing POD
        </td>
       </tr>
       <tr>
        <td>What does POD Time Frame control?</td>
        <td>
         The number of days the system waits for customer
         acknowledgement; if the customer doesn't respond within that
         window, the system allows invoicing anyway
        </td>
       </tr>
       <tr>
        <td>What does "Complete Delivery Required" checked do?</td>
        <td>
         Prevents the system from confirming partial quantities or
         creating partial deliveries — the full order quantity is
         confirmed and delivered together, even if less is immediately
         available
        </td>
       </tr>
       <tr>
        <td>
         What do the values Blank, D, and C mean for Partial Delivery per
         Item?
        </td>
        <td>
         Blank = partial deliveries allowed, max 9; D = unlimited partial
         deliveries; C = complete delivery only, no partials
        </td>
       </tr>
       <tr>
        <td>
         What happens if Partial Delivery per Item is C but Complete
         Delivery Required is unchecked?
        </td>
        <td>
         The system throws an error — when Partial Delivery per Item is
         C, Complete Delivery Required must also be checked
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
        <td><span className="tcode">OVL2</span></td>
        <td>
         Shipping Point Determination — combination of Shipping
         Condition, Loading Group, and Plant
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VLPOD</span></td>
        <td>
         Record receipt of Proof of Delivery (POD) acknowledgement from
         the customer — required before invoicing if Relevant for POD is
         checked
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used in the worked example demonstrating
         POD-blocked invoicing
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
        <td>Delivery Priority codes</td>
        <td>01 High, 02 Medium, 03 Low</td>
       </tr>
       <tr>
        <td>Backorder Processing worked example</td>
        <td>
         Material X, stock 100 → Customer 100553 (low, 60, confirmed) →
         100554 (low, 40, confirmed, stock now 0) → 100551 (high, not
         confirmed until low-priority confirmations are cancelled and
         reassigned)
        </td>
       </tr>
       <tr>
        <td>Shipping Conditions codes</td>
        <td>01 Standard/ASAP, 10 Immediate</td>
       </tr>
       <tr>
        <td>Shipping Point Determination example combinations</td>
        <td>
         01/0001/P100 → P102; 01/0003/P100 → P101; 10/any/P100 → P103;
         01/0001/P200 → P202; 01/0003/P200 → P201; 10/0001/P200 → P203
        </td>
       </tr>
       <tr>
        <td>Plant determination priority</td>
        <td>CMIR → Customer Master → Material Master</td>
       </tr>
       <tr>
        <td>Complete Delivery Required worked example</td>
        <td>
         Material X, stock 100, RLT 15 days; order of 160 — unchecked
         splits into 100 (immediate) + 60 (future date); checked confirms
         all 160 on the future date
        </td>
       </tr>
       <tr>
        <td>Partial Delivery per Item values</td>
        <td>
         Blank = allowed, max 9; D = unlimited; C = complete delivery
         only (requires Complete Delivery Required checked)
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture moved into the Customer Master's
      <strong>Shipping tab</strong>. <strong>Delivery Priority</strong>
      (High/Medium/Low) exists specifically to support
      <strong>Backorder Processing</strong> — the manual process of
      reclaiming stock from low-priority customers' open orders to fulfil a
      high-priority customer's order when stock runs out — and its automated
      counterpart, <strong>Rescheduling</strong>.
      <strong>Shipping Conditions</strong> (01 Standard, 10 Immediate)
      combine with Loading Group and Plant to determine the Shipping Point
      via T-code <strong>OVL2</strong>. <strong>Delivering Plant</strong> is
      auto-determined into the sales document following a strict priority:
      <strong>CMIR → Customer Master → Material Master</strong>.
      <strong>Order Combination</strong>
      controls whether same-customer orders merge into one delivery.
      <strong>Relevant for POD</strong> blocks invoicing until proof of
      delivery is received (recorded via <strong>VLPOD</strong>), while
      <strong>POD Time Frame</strong> sets a grace period after which
      invoicing proceeds anyway. Finally,
      <strong>Complete Delivery Required</strong> and
      <strong>Partial Delivery per Item</strong> together govern whether an
      order can be split into partial confirmations and deliveries, with a
      hard dependency: Partial Delivery per Item = C requires Complete
      Delivery Required to be checked.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Backorder Processing (manual) vs. Rescheduling
        (automatic)</strong>
       — the same reassignment logic, one user-driven, one system-driven
      </li>
      <li>
       <strong>Shipping Point = Shipping Condition + Loading Group +
        Plant</strong>, configured via OVL2
      </li>
      <li>
       <strong>Plant determination priority: CMIR → Customer Master → Material
        Master</strong>
       — always checked in that order
      </li>
      <li>
       <strong>Relevant for POD</strong> is a hard invoicing block until
       acknowledgement (VLPOD) is received, softened only by a configured
       <strong>POD Time Frame</strong>
      </li>
      <li>
       <strong>Complete Delivery Required</strong> and
       <strong>Partial Delivery per Item</strong> must be kept consistent —
       setting C on one requires the other to match
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> remaining Shipping tab fields and the
      Billing tab. A half-hour window will also be given for any outstanding
      stock-posting or Enquiry-to-Invoice issues, after which those topics
      will no longer be revisited in live sessions.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 32 Notes — Fields in Customer Master: Shipping Tab — Delivery
    Priority, Backorder Processing, Shipping Point Determination, POD &amp;
    Partial Deliveries 🎓
   </p>
  </div>
 );
};

export default Material32;
