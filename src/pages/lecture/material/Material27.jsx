const Material27 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-blue">
    <h1>
     📦 Lecture 27 — Collective Processing: Deliveries, Picking, PGI &amp;
     Invoice
    </h1>
    <p>
     SAP SD | Real-world depot workflow where different users own each step —
     VL10A/C, VL06P, VL06G, VF04 — plus a cancellation process recap and
     stock troubleshooting
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Housekeeping --> */}
    <div className="card">
     <h2><span className="badge">📌</span> Housekeeping Note</h2>
     <div className="callout red">
      ⚠️ <strong>Today is the last day</strong> stock-posting or
      Enquiry-to-Invoice errors can be raised <em>in class</em> — from
      tomorrow, the course moves on to Fields in Customer Master and
      Material Master. Any remaining errors can still be posted in the batch
      group for guidance, just not discussed live in session going forward.
     </div>
    </div>

    {/* <!-- Section 1: Cancellation recap --> */}
    <div className="card teal">
     <h2>
      <span className="badge">↩️</span> Cancellation Process — Quick Recap
     </h2>
     <p className="note-text">
      📌 Full detail on this process was covered in Lecture 26; this is a
      condensed re-walkthrough for reinforcement.
     </p>
     <div className="flow">
      <div className="flow-step flow-red">1. Cancel Invoice (VF11)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-orange">2. Reverse PGI (VL09)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">3. Delete Delivery (VL02N)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">4. Cancel Order (VA02)</div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Step</th>
        <th>T-Code</th>
        <th>Key Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Cancel Invoice</td>
        <td>VF11</td>
        <td>
         Reverses the accounting entry: Revenue Account Debit (posting
         key 40) to Customer Account Credit (posting key 11)
        </td>
       </tr>
       <tr>
        <td>Reverse PGI</td>
        <td>VL09</td>
        <td>
         Mention Shipping Point + Delivery number → Execute → Define Date
         (today's date) → Reverse → Reverse Goods Movement → Continue.
         Stock is added back to Unrestricted; Inventory Account 89 Debit
         to COGS Account 91 Credit
        </td>
       </tr>
       <tr>
        <td>Delete Delivery</td>
        <td>VL02N</td>
        <td>
         Go to change mode → Outbound Delivery → Delete → confirm Yes.
         Once deleted, the delivery no longer appears in document flow —
         deletion removes it from the database entirely
        </td>
       </tr>
       <tr>
        <td>Cancel Order</td>
        <td>VA02</td>
        <td>
         Go inside → Reason for Rejection → mention a reason (e.g.,
         "Cancellation required by customer") → Save
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Strict sequence required:</strong> you cannot skip steps.
      Reverse PGI is not allowed until the invoice is cancelled; the
      delivery cannot be deleted until Reverse PGI is done.
     </div>
     <div className="callout blue">
      💡 <strong>When NOT to cancel:</strong> if the issue is simply a user
      mistake (wrong price, wrong terms) rather than an actual customer
      cancellation, it's often better to correct the Sales Order directly
      and re-create Delivery/Invoice, rather than running the full
      cancellation sequence.
     </div>
    </div>

    {/* <!-- Section 2: Storage location stock troubleshooting --> */}
    <div className="card orange">
     <h2>
      <span className="badge">⚠️</span> Troubleshooting — "Material Not
      Available" at a Specific Storage Location
     </h2>
     <div className="callout red">
      ⚠️
      <strong>Extending a material to a storage location does NOT automatically
       give it stock there.</strong>
      Extension only makes the material master record exist at that storage
      location — stock still has to be separately posted (via MB1C) into
      <strong>each specific storage location</strong> you intend to deliver
      from.
     </div>
     <p>
      If stock was only posted into one storage location (e.g.,
      <code>P103</code>) but a delivery is created against a different one
      (e.g., <code>P104</code>), the system will not allow it — each storage
      location needs its own stock posting.
     </p>
    </div>

    {/* <!-- Section 3: Trading goods tolerance error --> */}
    <div className="card gold">
     <h2>
      <span className="badge">⚠️</span> Troubleshooting — Trading Goods
      Stock Posting Error
     </h2>
     <div className="callout gold">
      💡 When posting stock (MB1C) for a
      <strong>Trading Goods (HAWA)</strong> material specifically, you may
      hit:
      <em>"Maintain tolerance limits for tolerance group QVP."</em>
     </div>
     <div className="stepper">
      <div className="step">
       Double-click the error → it links directly to
       <strong>Define Tolerance Limits</strong>.
      </div>
      <div className="step">
       Click <strong>Set Tolerance Limits</strong>.
      </div>
      <div className="step">
       Select the standard <code>1000</code> + <code>QVP</code> combination
       → <strong>Copy As</strong> → change Company Code to your own (e.g.,
       <code>P100</code>) → Enter → Save.
      </div>
      <div className="step">
       Re-run the stock posting (MB1C) — it now succeeds.
      </div>
     </div>
     <p className="note-text">
      📌 This is the same tolerance-group pattern seen earlier for plain
      stock posting, just under a different tolerance group (QVP) specific
      to trading goods valuation.
     </p>
    </div>

    {/* <!-- Section 4: Collective Deliveries --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">1</span> Collective Processing of Deliveries —
      VL10A / VL10C
     </h2>
     <div className="callout indigo">
      💡 <strong>Real-world context:</strong> at a depot, the person who
      creates Sales Orders is often a <strong>different user</strong> from
      the person who creates Deliveries. Rather than creating deliveries one
      order at a time via VL01N, the delivery-responsible user works from a
      <strong>collective list</strong> instead.
     </div>
     <p>
      T-code: <span className="tcode">VL10A</span> or
      <span className="tcode">VL10C</span> (either works).
     </p>
     <div className="callout">
      📖 <strong>What it shows:</strong> when executed, the system displays
      the list of <strong>all orders due for delivery today</strong>. Orders
      due on a future date won't appear.
     </div>
     <h3>Worked Example — Same Customer Combines into One Delivery</h3>
     <p>
      6 sales orders were created: 3 for the same customer
      (<code>100640</code>) and 3 for different customers
      (<code>100645</code>, <code>100646</code>, <code>100647</code>).
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Orders</th>
        <th>Customer</th>
        <th>Deliveries Created</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Order 1, 2, 3</td>
        <td>100640 (same customer)</td>
        <td>1 combined delivery (3 line items)</td>
       </tr>
       <tr>
        <td>Order 4</td>
        <td>100645</td>
        <td>1 delivery</td>
       </tr>
       <tr>
        <td>Order 5</td>
        <td>100646</td>
        <td>1 delivery</td>
       </tr>
       <tr>
        <td>Order 6</td>
        <td>100647</td>
        <td>1 delivery</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>Result: 6 orders → 4 deliveries.</strong> When multiple due
      orders share the same customer, the system combines them into a
      <strong>single delivery</strong> with multiple line items, rather than
      creating one delivery per order.
     </div>
     <div className="stepper">
      <div className="step">
       Mention Shipping Point and today's date → Execute.
      </div>
      <div className="step">
       <strong>Select All</strong> → click <strong>Background</strong>.
      </div>
      <div className="step">
       A message appears: "See log for information about creating
       deliveries" → click the <strong>Log</strong> symbol.
      </div>
      <div className="step">
       Select the log line → click <strong>Documents</strong> to see the
       resulting delivery documents (4 in this example).
      </div>
     </div>
    </div>

    {/* <!-- Section 5: Collective Picking --> */}
    <div className="card purple">
     <h2>
      <span className="badge">2</span> Collective Processing of Picking —
      VL06P
     </h2>
     <div className="callout purple">
      💡 In real time, the person responsible for
      <strong>picking</strong> is yet another different user.
     </div>
     <p>T-code: <span className="tcode">VL06P</span></p>
     <div className="callout">
      📖 <strong>What it shows:</strong> the list of deliveries
      <strong>due for picking</strong> — i.e., picking not yet done.
     </div>
     <div className="stepper">
      <div className="step">
       Mention Shipping Point and today's date → Execute.
      </div>
      <div className="step">
       <strong>Select All</strong> → click the pencil (Edit) symbol.
      </div>
      <div className="step">
       For each delivery's line item: mention the Storage Location, enter
       the Pick Quantity.
      </div>
      <div className="step">
       <strong>Save</strong> — do <em>not</em> click Post Goods Issue here;
       PGI is a separate collective step.
      </div>
      <div className="step">
       The system prompts "Process next document?" → Yes → repeat Storage
       Location + Pick Quantity + Save for each remaining delivery.
      </div>
     </div>
    </div>

    {/* <!-- Section 6: Collective PGI --> */}
    <div className="card red">
     <h2>
      <span className="badge">3</span> Collective Processing of PGI — VL06G
     </h2>
     <div className="callout red">
      💡 The person responsible for <strong>Post Goods Issue</strong>
      is, again, typically a different user.
     </div>
     <p>T-code: <span className="tcode">VL06G</span></p>
     <div className="callout">
      📖 <strong>What it shows:</strong> deliveries for which
      <strong>picking is completed</strong> and which are
      <strong>due for PGI</strong>. A delivery with incomplete picking won't
      appear here; a delivery whose PGI is already done also won't appear.
     </div>
     <div className="stepper">
      <div className="step">
       Mention Shipping Point and today's date → Execute.
      </div>
      <div className="step">
       <strong>Select All</strong> → click
       <strong>Post Goods Issue</strong>.
      </div>
      <div className="step">Confirm the posting date → Continue.</div>
     </div>
     <h3>Troubleshooting — Account Determination Error</h3>
     <div className="callout gold">
      ⚠️
      <em>"Account determination for [Chart of Accounts] GBB VAX 3100 not
       possible."</em>
     </div>
     <div className="stepper">
      <div className="step">
       Go to T-code <span className="tcode">OMWD</span>.
      </div>
      <div className="step">
       Go to your Plant (Valuation Area) → mention
       <strong>Valuation Grouping Code = 0001</strong>.
      </div>
      <div className="step">
       Save → re-run the remaining deliveries in
       <span className="tcode">VL06G</span> — they now post successfully.
      </div>
     </div>
     <p className="note-text">
      📌 In the worked example, 2 of 4 deliveries succeeded initially, and
      the remaining 2 completed after this fix — this is a common first-time
      error, similar in nature to the other account- determination gaps seen
      during initial stock/billing setup.
     </p>
    </div>

    {/* <!-- Section 7: Collective Invoice --> */}
    <div className="card green">
     <h2>
      <span className="badge">4</span> Collective Processing of Invoice —
      VF04
     </h2>
     <div className="callout green">
      💡 The person responsible for <strong>invoicing</strong> is typically
      yet another different user.
     </div>
     <p>T-code: <span className="tcode">VF04</span></p>
     <div className="callout">
      📖 <strong>What it shows:</strong> deliveries for which
      <strong>PGI is completed</strong> and which are
      <strong>due for billing</strong>.
     </div>
     <div className="stepper">
      <div className="step">
       Mention the date range, Billing Type, and your Sales Organization →
       Execute.
      </div>
      <div className="step">
       <strong>Select All</strong> → click
       <strong>Collective Billing Document Online</strong>.
      </div>
      <div className="step">
       Save — all invoices are generated in one go.
      </div>
     </div>
     <div className="callout blue">
      🆚
      <strong>"Collective Billing Document" vs. "Collective Billing Document
       Online":</strong>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Option</th>
        <th>Behavior</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Collective Billing Document (Background)</td>
        <td>
         Runs as a background job — results aren't immediately visible on
         screen; they update in the database/tables and can be checked
         later via reports
        </td>
       </tr>
       <tr>
        <td>Collective Billing Document Online</td>
        <td>
         Runs live — results are visible immediately, right on the screen
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 8: Consolidated overview --> */}
    <div className="card">
     <h2>
      <span className="badge">📋</span> Collective Processing — Consolidated
      Reference
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Step</th>
        <th>T-Code</th>
        <th>Responsible User (Real-Time)</th>
        <th>Shows</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1. Deliveries</td>
        <td>VL10A / VL10C</td>
        <td>Delivery-creation team</td>
        <td>Orders due for delivery today</td>
       </tr>
       <tr>
        <td>2. Picking</td>
        <td>VL06P</td>
        <td>Picking team</td>
        <td>Deliveries due for picking</td>
       </tr>
       <tr>
        <td>3. PGI</td>
        <td>VL06G</td>
        <td>Warehouse/dispatch team</td>
        <td>Deliveries with picking complete, due for PGI</td>
       </tr>
       <tr>
        <td>4. Invoice</td>
        <td>VF04</td>
        <td>Billing team</td>
        <td>Deliveries with PGI complete, due for billing</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🏢 <strong>Why this matters:</strong> in a real depot/warehouse,
      different people own each stage of the order-to-cash cycle. Collective
      processing T-codes let each role work from their own queue of "what's
      due today" rather than chasing individual documents one at a time — a
      very different workflow from the single-document VA01/VL01N/VF01
      practice used earlier in the course.
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
         Why does a delivery fail even though a material was extended to
         a storage location?
        </td>
        <td>
         Extension only creates the material record there — stock must be
         separately posted (MB1C) into each specific storage location
         intended for delivery
        </td>
       </tr>
       <tr>
        <td>
         What T-code is used for collective processing of deliveries?
        </td>
        <td>VL10A or VL10C</td>
       </tr>
       <tr>
        <td>
         What does the collective delivery processing screen display?
        </td>
        <td>All sales orders due for delivery today</td>
       </tr>
       <tr>
        <td>
         If 3 orders for the same customer and 3 orders for different
         customers are all due today, how many deliveries get created?
        </td>
        <td>
         4 — the 3 same-customer orders combine into a single delivery
         (multiple line items), and each of the other 3 customers gets
         its own delivery
        </td>
       </tr>
       <tr>
        <td>
         What T-code is used for collective processing of picking, and
         what does it show?
        </td>
        <td>
         VL06P — it shows deliveries that are due for picking (picking
         not yet done)
        </td>
       </tr>
       <tr>
        <td>
         In collective picking, should you do Post Goods Issue on the
         same screen?
        </td>
        <td>
         No — enter storage location and pick quantity, then Save only;
         PGI is a separate collective process
        </td>
       </tr>
       <tr>
        <td>
         What T-code is used for collective processing of PGI, and what
         does it show?
        </td>
        <td>
         VL06G — it shows deliveries where picking is completed and PGI
         is still due (deliveries with incomplete picking, or
         already-posted PGI, don't appear)
        </td>
       </tr>
       <tr>
        <td>
         How is the "Account determination... GBB VAX... not possible"
         error during collective PGI fixed?
        </td>
        <td>
         T-code OMWD → go to the plant (valuation area) → set Valuation
         Grouping Code to 0001 → Save
        </td>
       </tr>
       <tr>
        <td>
         What T-code is used for collective processing of invoices, and
         what does it show?
        </td>
        <td>
         VF04 — it shows deliveries where PGI is completed and billing is
         due
        </td>
       </tr>
       <tr>
        <td>
         What's the difference between "Collective Billing Document" and
         "Collective Billing Document Online"?
        </td>
        <td>
         The background version processes later and updates tables
         (checked via reports), while the Online version processes
         immediately and shows results live on screen
        </td>
       </tr>
       <tr>
        <td>
         What is the correct sequence and T-code order for the
         cancellation process?
        </td>
        <td>
         Cancel Invoice (VF11) → Reverse PGI (VL09) → Delete Delivery
         (VL02N) → Cancel Order (VA02, Reason for Rejection) — strictly
         in that order
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
        <td><span className="tcode">VF11</span></td>
        <td>Cancel an Invoice</td>
       </tr>
       <tr>
        <td><span className="tcode">VL09</span></td>
        <td>Reverse Post Goods Issue</td>
       </tr>
       <tr>
        <td><span className="tcode">VL02N</span></td>
        <td>Change Delivery — delete an outbound delivery</td>
       </tr>
       <tr>
        <td><span className="tcode">VA02</span></td>
        <td>Change Sales Order — cancel via Reason for Rejection</td>
       </tr>
       <tr>
        <td>
         <span className="tcode">VL10A</span> /
         <span className="tcode">VL10C</span>
        </td>
        <td>
         Collective processing of deliveries — list orders due for
         delivery
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VL06P</span></td>
        <td>Collective processing of picking</td>
       </tr>
       <tr>
        <td><span className="tcode">VL06G</span></td>
        <td>Collective processing of Post Goods Issue</td>
       </tr>
       <tr>
        <td><span className="tcode">VF04</span></td>
        <td>Collective processing of billing/invoicing</td>
       </tr>
       <tr>
        <td><span className="tcode">OMWD</span></td>
        <td>
         Maintain Valuation Grouping Code per plant (fixes account
         determination errors during PGI)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MB1C</span></td>
        <td>
         Stock posting — referenced for the storage-location and
         trading-goods troubleshooting notes
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
        <td>Invoice cancellation accounting entry</td>
        <td>Revenue Account Dr. (40) / Customer Account Cr. (11)</td>
       </tr>
       <tr>
        <td>Reverse PGI accounting entry</td>
        <td>Inventory Account Dr. (89) / COGS Account Cr. (91)</td>
       </tr>
       <tr>
        <td>Trading goods tolerance group</td>
        <td>
         QVP — fixed via Set Tolerance Limits, copying 1000/QVP to own
         company code
        </td>
       </tr>
       <tr>
        <td>Worked collective delivery example</td>
        <td>6 orders (3 same customer + 3 different) → 4 deliveries</td>
       </tr>
       <tr>
        <td>Valuation Grouping Code fix (OMWD)</td>
        <td>0001, set per plant (valuation area)</td>
       </tr>
       <tr>
        <td>Collective processing chain</td>
        <td>
         VL10A/C (deliveries) → VL06P (picking) → VL06G (PGI) → VF04
         (invoice)
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture opened with a condensed recap of the
      <strong>Cancellation Process</strong> (VF11 → VL09 → VL02N → VA02) and
      two practical stock-posting troubleshooting notes: extending a
      material to a storage location doesn't post stock there automatically,
      and trading-goods stock posting can hit a separate tolerance-group
      error (QVP) fixed the same way as earlier tolerance errors. The core
      new topic was <strong>Collective Processing</strong> — the real-world
      workflow where different users own each stage of order fulfillment at
      a depot: <strong>VL10A/VL10C</strong> lists orders due for delivery
      today and automatically combines same-customer orders into one
      delivery (a worked example showed 6 orders becoming 4 deliveries);
      <strong>VL06P</strong> lists deliveries due for picking, where storage
      location and pick quantity are entered and saved (without doing PGI);
      <strong>VL06G</strong> lists deliveries with picking complete and due
      for PGI, including a fix for a common account-determination error via
      <strong>OMWD</strong> (Valuation Grouping Code); and
      <strong>VF04</strong> lists deliveries with PGI complete and due for
      billing, offering both a background and an "Online" (immediate)
      collective billing option.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       Stock must be posted <strong>per storage location</strong> —
       extending a material doesn't create stock there automatically
      </li>
      <li>
       Cancellation always runs in strict order:
       <strong>Invoice → Reverse PGI → Delete Delivery → Cancel Order</strong>
      </li>
      <li>
       Collective processing mirrors real depot roles: different T-codes
       for
       <strong>deliveries (VL10A/C), picking (VL06P), PGI (VL06G), and invoicing
        (VF04)</strong>
       — each user works only from their own "due today" queue
      </li>
      <li>
       Same-customer orders due on the same day automatically
       <strong>combine into a single delivery</strong>
      </li>
      <li>
       <strong>"Collective Billing Document Online"</strong> gives
       immediate results; the plain background version updates tables for
       later review
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Fields in Customer Master and Material
      Master — this marks the end of open Q&amp;A on stock posting and the
      Enquiry-to-Invoice cycle in live sessions.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 27 Notes — Collective Processing: Deliveries, Picking, PGI &amp;
    Invoice 🎓
   </p>
  </div>
 );
};

export default Material27;
