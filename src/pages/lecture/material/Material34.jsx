const Material34 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-indigo">
    <h1>
     📐 Lecture 34 — Fields in Customer Master: Delivery Tolerances, Rebate,
     Invoicing Dates &amp; Invoicing List Dates
    </h1>
    <p>
     SAP SD | Under/over-delivery quantity controls with the CMIR override,
     rebate prerequisites, fixed-date invoicing, and consolidating invoices
     for a payer via Invoicing List
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class finished the Partial Delivery controls on the Shipping
      tab. Today continues with quantity-tolerance fields (Unlimited
      Tolerance, Under/Over Delivery Tolerance), moves into the Billing
      Documents tab for Rebate, and covers two related date-control fields:
      Invoicing Dates and Invoicing List Dates — demonstrated throughout on
      Customer 100640 (Balaji Enterprises) and Customer 100645.
     </div>
    </div>

    {/* <!-- Section 1: Unlimited Tolerance --> */}
    <div className="card teal">
     <h2>
      <span className="badge">40</span> Shipping Tab — Unlimited Tolerance
     </h2>
     <div className="callout teal">
      💡 If checked, <strong>Unlimited Tolerance</strong> allows the system
      to
      <strong
      >increase or decrease quantities in the delivery document without
       any limitations</strong
      >
      — no percentage cap applies at all.
     </div>
    </div>

    {/* <!-- Section 2: Under Delivery Tolerance --> */}
    <div className="card orange">
     <h2>
      <span className="badge">41</span> Shipping Tab — Under-Delivery
      Tolerance
     </h2>
     <div className="callout orange">
      💡 If a <strong>percentage</strong> is maintained here, the system
      allows the delivery quantity to be
      <strong>decreased up to that percentage</strong>. If the shortfall
      exceeds that percentage, the system gives a
      <strong>warning message</strong>.
     </div>
     <h3>Worked Example — Customer 100645 (No CMIR)</h3>
     <div className="callout blue">
      📊 Order quantity: 100. Under-Delivery Tolerance maintained on
      Customer Master: <code>30%</code>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Delivery Quantity</th>
        <th>Shortfall</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>70</td>
        <td>30% (exactly at the limit)</td>
        <td>No message</td>
       </tr>
       <tr>
        <td>69</td>
        <td>31% (exceeds the 30% limit)</td>
        <td>Warning message ("under delivery tolerance exceeded")</td>
       </tr>
      </tbody>
     </table>

     <h3>The CMIR Override — First Preference</h3>
     <div className="callout red">
      ⚠️ <strong>The same field exists on CMIR</strong> (Customer Material
      Info Record, T-code <span className="tcode">VD52</span>), and
      <strong>CMIR is always given first preference</strong> over the value
      maintained on Customer Master.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Customer</th>
        <th>CMIR Exists?</th>
        <th>Customer Master Value</th>
        <th>Effective Behavior</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>100645</td>
        <td>No</td>
        <td>30%</td>
        <td>Takes 30% from Customer Master (no CMIR to override it)</td>
       </tr>
       <tr>
        <td>100640</td>
        <td>Yes, but blank</td>
        <td>30%</td>
        <td>
         Takes <strong>blank from CMIR</strong> — no warning at all, even
         at 70 or 69, because CMIR (blank) overrides the Customer
         Master's 30%
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📌 <strong>Key lesson:</strong> maintaining a tolerance percentage on
      Customer Master alone does not guarantee it will be applied — always
      check whether a CMIR exists for that customer/material combination
      first, since a blank CMIR value silently overrides a non-blank
      Customer Master value. If the percentage is instead also maintained on
      CMIR, the CMIR percentage takes effect for that customer.
     </div>
    </div>

    {/* <!-- Section 3: Over Delivery Tolerance --> */}
    <div className="card purple">
     <h2>
      <span className="badge">42</span> Shipping Tab — Over-Delivery
      Tolerance
     </h2>
     <div className="callout purple">
      💡 If a <strong>percentage</strong> is maintained here, the system
      allows the delivery quantity to be
      <strong>increased up to that percentage</strong>. If the excess
      exceeds that percentage, the system gives either a
      <strong>warning</strong> or an <strong>error</strong> message — both
      options are available here, unlike Under-Delivery Tolerance.
     </div>
     <h3>
      Worked Example — Order Quantity 100, Over-Delivery Tolerance 30%
     </h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Delivery Quantity</th>
        <th>Excess</th>
        <th>Result (Default — Warning)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>130</td>
        <td>30% (exactly at the limit)</td>
        <td>Allowed, no message</td>
       </tr>
       <tr>
        <td>131</td>
        <td>31% (exceeds the 30% limit)</td>
        <td>
         Warning message: "Over-delivery tolerance of 30% has been
         exceeded"
        </td>
       </tr>
      </tbody>
     </table>

     <h3>Switching to an Error Message — Item Category Configuration</h3>
     <div className="path">
      <span className="node">VOV7</span><span className="sep">→</span>
      <span className="node">Item Category</span
      ><span className="sep">→</span>
      <span className="node">e.g. TAN (Item Category 10 in the demo)</span
      ><span className="sep">→</span>
      <span className="node">Check Overdelivery field</span
      ><span className="sep">→</span> <span className="node">B</span>
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VOV7</span> → select the relevant Item
       Category → go inside → set the
       <strong>Check Overdelivery</strong> field to <code>B</code> (error
       message).
      </div>
      <div className="step">
       Recreate the delivery and increase the quantity beyond the tolerance
       (e.g., 131) — the system now throws a
       <strong>hard error</strong> and does not allow the delivery to
       proceed, instead of just warning.
      </div>
     </div>
     <div className="callout">
      📌 <strong>Transcription correction:</strong> the transaction used to
      switch Over-Delivery Tolerance from a warning to an error is
      <span className="tcode">VOV7</span> (Maintain Item Categories) — not
      "0VLP," which does not exist as a standard SAP transaction and is a
      mishearing of VOV7.
     </div>
    </div>

    {/* <!-- Section 4: Under vs Over comparison --> */}
    <div className="card">
     <h2>
      <span className="badge">📊</span> Under-Delivery vs. Over-Delivery
      Tolerance — At a Glance
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Aspect</th>
        <th>Under-Delivery Tolerance</th>
        <th>Over-Delivery Tolerance</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Controls</td>
        <td>Decreasing delivery quantity below order quantity</td>
        <td>Increasing delivery quantity above order quantity</td>
       </tr>
       <tr>
        <td>Message options if exceeded</td>
        <td>Warning message only</td>
        <td>Warning <em>or</em> error message (configurable via VOV7)</td>
       </tr>
       <tr>
        <td>Can the two percentages differ?</td>
        <td colspan="2">
         Yes — Under-Delivery and Over-Delivery percentages are entirely
         independent and set purely per client requirement (e.g.,
         Under-Delivery 50% while Over-Delivery is 25% or 30%, or vice
         versa)
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 5: Rebate --> */}
    <div className="card gold">
     <h2>
      <span className="badge">43</span> Billing Documents Tab — Rebate
     </h2>
     <div className="callout gold">
      💡 <strong>Rebate</strong> (checkbox on the Billing Documents tab) is
      one of the <strong>prerequisites to process rebates</strong>
      for a customer. If unchecked, rebates cannot be processed for that
      customer at all.
     </div>
     <div className="callout blue">
      🔗 <strong>Two-level prerequisite:</strong> processing rebates
      requires <em>both</em> of the following to be checked —
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Level</th>
        <th>Setting</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Enterprise Structure (Sales Organization)</td>
        <td>Rebate Process Active — checked</td>
       </tr>
       <tr>
        <td>Customer Master (Billing Documents tab)</td>
        <td>Rebate — checked</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ If <strong>either one</strong> of these two checkboxes is left
      unchecked, rebate processing cannot happen for that customer.
     </div>
     <p className="note-text">
      📌 Where rebate is actually configured and triggered within pricing
      will be covered in an upcoming lecture, after the pricing topics.
     </p>
    </div>

    {/* <!-- Section 6: Invoicing Dates --> */}
    <div className="card red">
     <h2>
      <span className="badge">44</span> Billing Documents Tab — Invoicing
      Dates
     </h2>
     <div className="callout red">
      💡 <strong>Invoicing Dates</strong> is used when a client requires
      that
      <strong
      >invoices for a customer be created only on a specific date (or
       dates) of every month</strong
      >
      — regardless of when orders are placed or deliveries happen throughout
      the month.
     </div>
     <div className="callout blue">
      📅 <strong>Worked example:</strong> a customer places orders and
      receives deliveries throughout the month (e.g., 10th, 20th, 28th May),
      but the client wants
      <strong>invoices raised only on month-end</strong> (31st May) —
      regardless of how many deliveries happened before that. This same
      field can equally be configured for a
      <strong>fortnightly</strong> requirement (twice a month, every 15
      days) or any other specific date the client requires.
     </div>

     <h3>Configuration for Invoicing Dates</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">SCAL</span> → Factory Calendar → Change →
       Create.
      </div>
      <div className="step">
       ID <code>P4</code>, description "Month-End Invoicing Date," Holiday
       Calendar ID <code>P0</code> (already created) →
       <strong>uncheck all working days</strong> → Save.
      </div>
      <div className="step">
       Go to <strong>Special Rules</strong> → Create → mention the specific
       date(s) that should count as a working day for this calendar — e.g.,
       <code>31.05.2026</code> (Invoicing Date) and
       <code>30.06.2026</code> (Invoicing Date). Multiple months can be
       added this way.
      </div>
      <div className="step">
       Go to the Customer Master's Billing Documents tab → maintain this
       calendar (<code>P4</code>) in the
       <strong>Invoicing Dates</strong> field → Save.
      </div>
     </div>
     <div className="callout green">
      ✅ <strong>Result:</strong> whenever a Sales Order is created for this
      customer during the month, the <strong>Billing tab</strong> of the
      order automatically shows the Billing Date as <code>31.05</code> — no
      matter what day the order itself was placed. Once June begins, new
      orders default to <code>30.06</code>, and so on for whichever dates
      are defined in the calendar's Special Rules.
     </div>
     <p className="note-text">
      📌 When the invoice is eventually created, it also defaults to this
      same date (e.g., <code>31.05</code>) rather than today's actual system
      date. In the worked demo, invoicing was also blocked briefly by the
      unrelated <strong>Relevant for POD</strong> setting (Lecture 32) —
      resolved the same way, via T-code
      <span className="tcode">VLPOD</span>.
     </p>
    </div>

    {/* <!-- Section 7: Invoicing List Dates --> */}
    <div className="card green">
     <h2>
      <span className="badge">45</span> Billing Documents Tab — Invoicing
      List Dates &amp; the Invoicing List Concept
     </h2>
     <div className="callout green">
      💡 <strong>Invoicing List</strong> = consolidating
      <strong>multiple invoices into one document</strong> and sending that
      single consolidated document to the <strong>Payer</strong>.
     </div>

     <h3>Worked Example — Apollo Group Partner Structure</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Entity</th>
        <th>Partner Function(s)</th>
        <th>Role</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Apollo Jubilees (Main Branch)</td>
        <td>SP, SH, PY, BP (all four)</td>
        <td>Sold-to Party — places all orders; also the Payer</td>
       </tr>
       <tr>
        <td>Apollo Vijayawada</td>
        <td>SH, BP</td>
        <td>
         Ship-to Party (also created as Bill-to Party, since goods are
         delivered — and hence invoiced — directly here)
        </td>
       </tr>
       <tr>
        <td>Apollo Vizag</td>
        <td>SH, BP</td>
        <td>
         Ship-to Party (also created as Bill-to Party, for the same
         reason)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊
      <strong
      >Order/delivery split — 20 total orders, all received from the
       sold-to party (Main Branch):</strong
      >
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Delivered / Invoiced To</th>
        <th>Number of Invoices</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Main Branch (Jubilees)</td>
        <td>9</td>
       </tr>
       <tr>
        <td>Vijayawada</td>
        <td>5</td>
       </tr>
       <tr>
        <td>Vizag</td>
        <td>6</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>The problem:</strong> the Payer is always the Main Branch
      (Jubilees) — but Jubilees only has 9 invoices addressed directly to
      it. It still has to make payment for all 20 orders' worth of billing,
      even though 11 of those invoices were addressed to Vijayawada and
      Vizag as their respective bill-to parties. The Payer therefore asks
      the company to
      <strong>consolidate all the invoices and send them together</strong> —
      this consolidation process is the <strong>Invoicing List</strong>.
     </div>

     <h3>Configuration for Invoicing List Dates</h3>
     <p>
      The same approach as Invoicing Dates: a calendar with all working days
      unchecked and specific dates marked in
      <strong>Special Rules</strong> (e.g., month-end or fortnightly). The
      same calendar created earlier (<code>P4</code>) can be reused if the
      consolidation frequency matches.
     </p>
     <div className="stepper">
      <div className="step">
       <span className="tcode">SCAL</span> → Factory Calendar → create (or
       reuse) a calendar with all working days unchecked, and month-end (or
       fortnightly) dates marked under Special Rules.
      </div>
      <div className="step">
       Maintain this calendar in the Customer Master's
       <strong>Invoicing List Dates</strong> field → Save.
      </div>
     </div>

     <h3>Creating an Invoice List — T-code VF24</h3>
     <div className="stepper">
      <div className="step">
       Create two (or more) separate orders and invoices for the same
       customer/payer as usual — for this demo, Relevant for POD was
       unchecked to avoid repeating the POD confirmation step for every
       invoice.
      </div>
      <div className="step">
       Go to <span className="tcode">VF24</span> → mention the month-end
       date (e.g., <code>31.05.2026</code>), Billing Type
       <code>LR</code> (Invoice List), and the Sales Organization (e.g.,
       P100) → Execute.
      </div>
      <div className="step">
       The list of eligible invoices appears —
       <strong>Select All</strong> → click
       <strong>Collective Billing Document Online</strong>.
      </div>
      <div className="step">
       The selected invoices are combined into a single Invoicing List
       document, which is the output sent to the Payer as the basis for
       their consolidated payment.
      </div>
     </div>
     <p className="note-text">
      📌 In the practice system, saving this step may throw an ABAP dump —
      this is a known practice-system limitation; the goal of the demo was
      simply to see VF24 execute and combine the invoices, not necessarily
      to persist the save.
     </p>
     <div className="callout">
      📌 <strong>Transcription correction:</strong> this field is
      <strong>Invoicing List Dates</strong>, not "Invoice English Dates" — a
      mishearing of "Invoicing List." It works exactly like the Invoicing
      Dates field above, but drives the date on which invoices get
      consolidated into an Invoicing List (VF24), rather than the date on
      which an individual invoice itself is created.
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
        <td>What does "Unlimited Tolerance" checked allow?</td>
        <td>
         The delivery quantity can be increased or decreased without any
         percentage limitation at all
        </td>
       </tr>
       <tr>
        <td>
         What does Under-Delivery Tolerance control, and what happens if
         it's exceeded?
        </td>
        <td>
         How much the delivery quantity can be decreased below the order
         quantity, expressed as a percentage; exceeding it triggers a
         warning message only (never an error)
        </td>
       </tr>
       <tr>
        <td>
         Which takes precedence between Customer Master and CMIR for
         delivery tolerance fields?
        </td>
        <td>
         CMIR always takes first preference; if CMIR exists for that
         customer/material and holds a blank value, that blank overrides
         a non-blank Customer Master value
        </td>
       </tr>
       <tr>
        <td>
         What does Over-Delivery Tolerance control, and what happens if
         it's exceeded?
        </td>
        <td>
         How much the delivery quantity can exceed the order quantity, as
         a percentage; exceeding it can trigger either a warning or an
         error message, depending on configuration
        </td>
       </tr>
       <tr>
        <td>
         How do you make Over-Delivery Tolerance throw an error instead
         of a warning?
        </td>
        <td>
         VOV7 (Maintain Item Categories) → select the item category → set
         the Check Overdelivery field to B
        </td>
       </tr>
       <tr>
        <td>
         Must Under-Delivery and Over-Delivery Tolerance use the same
         percentage?
        </td>
        <td>
         No — they're independent and set purely per client requirement;
         they can be equal or different
        </td>
       </tr>
       <tr>
        <td>
         What are the two prerequisites to process rebates for a
         customer?
        </td>
        <td>
         Rebate Process Active checked at the Sales Organization
         (Enterprise Structure) level, and Rebate checked on the Customer
         Master's Billing Documents tab — both are required
        </td>
       </tr>
       <tr>
        <td>What is Invoicing Dates used for?</td>
        <td>
         Forcing invoice creation for a customer only on a specific date
         (or dates) of every month — e.g., month-end or fortnightly —
         regardless of when orders/deliveries actually happen
        </td>
       </tr>
       <tr>
        <td>How is Invoicing Dates configured?</td>
        <td>
         Create a factory calendar (SCAL) with all working days
         unchecked, mark the desired invoicing date(s) under Special
         Rules, then maintain that calendar in the customer's Invoicing
         Dates field
        </td>
       </tr>
       <tr>
        <td>What is an Invoicing List?</td>
        <td>
         Consolidating multiple invoices into one document and sending it
         to the Payer
        </td>
       </tr>
       <tr>
        <td>
         Why would a Payer need an Invoicing List, using the Apollo group
         example?
        </td>
        <td>
         The Payer (Main Branch) only receives invoices addressed
         directly to it, but must pay for all orders across every
         ship-to/bill-to location (Vijayawada, Vizag, etc.); an Invoicing
         List consolidates all those invoices into one document sent to
         the Payer
        </td>
       </tr>
       <tr>
        <td>
         What is the T-code to create an Invoicing List, and what Billing
         Type is used?
        </td>
        <td>VF24, Billing Type LR</td>
       </tr>
       <tr>
        <td>
         How is Invoicing List Dates different from Invoicing Dates?
        </td>
        <td>
         Invoicing Dates controls when an individual invoice is created;
         Invoicing List Dates controls when invoices get consolidated
         into an Invoicing List via VF24 — both are configured the same
         way, using a calendar with Special Rules
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
        <td><span className="tcode">VD52</span></td>
        <td>
         Change CMIR (Customer Material Info Record) — holds a
         delivery-tolerance override that takes first preference over
         Customer Master
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV7</span></td>
        <td>
         Maintain Item Categories — the Check Overdelivery field here
         controls whether exceeding Over-Delivery Tolerance is a warning
         or an error
        </td>
       </tr>
       <tr>
        <td><span className="tcode">SCAL</span></td>
        <td>
         Create/maintain factory calendars — used for both Invoicing
         Dates and Invoicing List Dates calendars
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VLPOD</span></td>
        <td>
         Record receipt of Proof of Delivery — needed to unblock
         invoicing when Relevant for POD is checked
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VF24</span></td>
        <td>
         Create Invoicing List (Billing Type LR) — consolidates multiple
         invoices into one document for the Payer
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
        <td>Under-Delivery Tolerance worked example</td>
        <td>Order 100, tolerance 30% → 70 OK, 69 triggers a warning</td>
       </tr>
       <tr>
        <td>Over-Delivery Tolerance worked example</td>
        <td>
         Order 100, tolerance 30% → 130 OK, 131 triggers warning (or
         error if VOV7 Check Overdelivery = B)
        </td>
       </tr>
       <tr>
        <td>CMIR precedence rule</td>
        <td>
         CMIR (VD52) always overrides Customer Master for the same
         tolerance field, including when CMIR holds a blank value
        </td>
       </tr>
       <tr>
        <td>Rebate prerequisites</td>
        <td>
         Rebate Process Active (Sales Organization) + Rebate checkbox
         (Customer Master, Billing Documents tab) — both required
        </td>
       </tr>
       <tr>
        <td>Invoicing Dates calendar example</td>
        <td>
         P4, Holiday Calendar P0, all working days unchecked, Special
         Rules dates 31.05.2026 and 30.06.2026
        </td>
       </tr>
       <tr>
        <td>Apollo group partner example</td>
        <td>
         Jubilees (Main Branch) = SP/SH/PY/BP + Payer; Vijayawada &amp;
         Vizag = SH + BP (Ship-to and Bill-to only)
        </td>
       </tr>
       <tr>
        <td>Apollo group invoice split example</td>
        <td>
         20 total orders → 9 invoices to Main Branch, 5 to Vijayawada, 6
         to Vizag
        </td>
       </tr>
       <tr>
        <td>Invoicing List Billing Type</td>
        <td>LR</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed the delivery-tolerance controls on the Shipping
      tab and moved into the Billing Documents tab.
      <strong>Unlimited Tolerance</strong> removes all quantity limits;
      <strong>Under-Delivery Tolerance</strong> caps how much a delivery can
      fall short (warning only if exceeded), while
      <strong>Over-Delivery Tolerance</strong> caps how much it can exceed
      the order (warning or, via VOV7's Check Overdelivery field, a hard
      error) — with both percentages fully independent per client
      requirement. A key operational detail: the same tolerance fields exist
      on <strong>CMIR</strong>, which always takes precedence over the
      Customer Master value, including when CMIR is left blank. On the
      Billing Documents tab, <strong>Rebate</strong> is one of two required
      checkboxes (alongside Rebate Process Active at the Sales Organization
      level) to enable rebate processing for a customer.
      <strong>Invoicing Dates</strong> forces invoice creation onto a
      specific recurring date (e.g., month-end), configured via a Factory
      Calendar with Special Rules. Finally,
      <strong>Invoicing List Dates</strong> supports the
      <strong>Invoicing List</strong> concept — consolidating multiple
      invoices addressed to different ship-to/bill-to parties into a single
      document sent to the Payer, illustrated with the Apollo group's Main
      Branch/Vijayawada/Vizag structure and created via T-code VF24 with
      Billing Type LR.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>CMIR always overrides Customer Master</strong> for shared
       fields like delivery tolerance — check CMIR first when
       troubleshooting unexpected tolerance behavior
      </li>
      <li>
       <strong
       >Under-Delivery = warning only; Over-Delivery = warning or error
        (VOV7)</strong
       >
       — an easy point of confusion to keep straight
      </li>
      <li>
       Rebate needs <strong>two checkboxes</strong> switched on together —
       Sales Organization level and Customer Master level
      </li>
      <li>
       <strong>Invoicing Dates</strong> fixes when an invoice is created;
       <strong>Invoicing List Dates</strong> fixes when multiple invoices
       get consolidated (VF24) — both use the same calendar/Special-Rules
       mechanism
      </li>
      <li>
       An <strong>Invoicing List</strong> exists specifically to solve the
       Payer's problem of needing to pay for invoices addressed to other
       ship-to/bill-to parties in the group
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Monday — remaining fields in Customer
      Master.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 34 Notes — Fields in Customer Master: Delivery Tolerances, Rebate,
    Invoicing Dates &amp; Invoicing List Dates 🎓
   </p>
  </div>
 );
};

export default Material34;
