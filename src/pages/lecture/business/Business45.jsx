const Business45 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-purple">
    <h1>
     🧾 Lecture 45 — Invoice Correction Request, Free of Charge &amp;
     Replacement Processes
    </h1>
    <p>
     SAP SD | Correcting an over/undercharged invoice through a single
     two-line-item document, sending samples via the Free of Charge process,
     and replacing (rather than refunding) returned goods via the Subsequent
     Delivery Free of Charge process
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered the Credit Memo Request and Debit Memo Request
      processes. Today introduces a third way to correct a pricing mistake —
      the <strong>Invoice Correction Request</strong> — then moves into two
      goods-movement processes that are
      <strong>not relevant for billing in the normal sense</strong>: the
      <strong>Free of Charge (Sample) Process</strong> and the
      <strong
      >Subsequent Delivery Free of Charge (Replacement/Exchange)
       Process</strong
      >.
     </div>
    </div>

    {/* <!-- Section 1: Invoice Correction Request - Purpose --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Invoice Correction Request — Purpose
     </h2>
     <div className="callout teal">
      💡 <strong>Invoice Correction Request</strong> is used, like Credit
      Memo Request / Debit Memo Request, when
      <strong
      >user mistakenly overcharged or undercharged a previous
       invoice</strong
      >
      — but it handles
      <strong>both directions in a single process and document type</strong
      >, instead of needing two separate processes.
     </div>
     <div className="callout blue">
      🔗 <strong>It's a client choice, not a system requirement:</strong>
      a client can choose to always use Credit Memo Request for overcharges
      and Debit Memo Request for undercharges, or standardize on Invoice
      Correction Request for both scenarios. Either approach is valid — this
      is a business-process decision made during configuration, not
      something SAP forces.
     </div>
     <p className="note-text">
      📌 Order Type <code>RK</code> is used for Invoice Correction Request,
      and unlike Credit/Debit Memo Request, the
      <strong>reference to the original invoice is mandatory</strong> — it
      cannot be created without one.
     </p>
    </div>

    {/* <!-- Section 2: Overcharge Scenario --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Invoice Correction Request —
      Overcharge Scenario
     </h2>
     <div className="callout orange">
      📊 <strong>Worked example:</strong> Original invoice — Quantity
      <code>100</code>, charged rate <code>₹3,000</code>/unit → invoice
      value <code>₹3,00,000</code>. Correct rate should have been
      <code>₹2,750</code>/unit → correct value <code>₹2,75,000</code>.
      Overcharge = <code>₹25,000</code>.
     </div>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA01</span> → Order Type <code>RK</code> →
       mention the Sales Area → Enter → mention the invoice number as
       reference (mandatory) → Copy. The system copies the original line
       item as <strong>two line items</strong>: Item 10 =
       <code>₹3,00,000</code>
       (the original value, unchanged) and Item 20 =
       <code>−₹3,00,000</code> (the same value with the opposite sign) →
       net value starts at exactly <code>0</code>.
      </div>
      <div className="step">
       Double-click the <strong>second line item</strong> → go to the
       <strong>Conditions</strong> tab → change its value to the
       <strong>actual/correct value</strong>, here
       <code>−₹2,75,000</code> → go back. Net value updates to
       <code>3,00,000 − 2,75,000 = ₹25,000</code>.
      </div>
      <div className="step">
       Go to the Sales tab → mention an
       <strong>Order Reason</strong> → Save. The document is automatically
       set to <strong>Billing Block</strong>.
      </div>
      <div className="step">
       <span className="tcode">VA02</span> → authorized person removes the
       Billing Block (auto-cleared in the practice system; a manual,
       authorized step in real production).
      </div>
      <div className="step">
       <span className="tcode">VF01</span> → create the
       <strong>Credit Memo Invoice</strong> with reference to the Invoice
       Correction Request → Enter → Save.
      </div>
     </div>
     <div className="callout gold">
      📖
      <strong>Accounting entry (overcharge → positive net value):</strong>
      Revenue Account Debit → Customer Account Credit — the
      <code>₹25,000</code> is deducted from the customer's outstanding,
      exactly as with a normal Credit Memo.
     </div>
    </div>

    {/* <!-- Section 3: Undercharge Scenario --> */}
    <div className="card red">
     <h2>
      <span className="badge">3</span> Invoice Correction Request —
      Undercharge Scenario
     </h2>
     <div className="callout red">
      📊 <strong>Worked example:</strong> Original invoice — Quantity
      <code>100</code>, charged rate <code>₹3,000</code>/unit → invoice
      value <code>₹3,00,000</code>. Correct rate should have been
      <code>₹3,300</code>/unit → correct value <code>₹3,30,000</code>.
      Undercharge = <code>₹30,000</code>.
     </div>
     <div className="stepper">
      <div className="step">
       Same setup: <span className="tcode">VA01</span> → order type
       <code>RK</code> → reference to the original invoice → Copy → Item 10
       = <code>₹3,00,000</code>, Item 20 = <code>−₹3,00,000</code>, net =
       <code>0</code>.
      </div>
      <div className="step">
       Double-click the second line item → Conditions tab → change its
       value to <code>−₹3,30,000</code> (the correct, higher value) → go
       back. Net value becomes
       <code>3,00,000 − 3,30,000 = −₹30,000</code> — a
       <strong>negative</strong> net value, because the correction is
       larger than what was originally charged.
      </div>
      <div className="step">
       Sales tab → Order Reason → Save (Billing Block auto-applied).
      </div>
      <div className="step">
       <span className="tcode">VA02</span> → remove Billing Block → Save.
      </div>
      <div className="step">
       <span className="tcode">VF01</span> → create the billing document
       (still generated the same way, as a "Credit Memo Invoice") with
       reference to the Invoice Correction Request → Save.
      </div>
     </div>
     <div className="callout gold">
      📖
      <strong>Accounting entry (undercharge → negative net value):</strong>
      the system <strong>automatically reverses</strong> the normal entry —
      instead of Revenue debit/Customer credit, it posts
      <strong>Customer Account Debit → Revenue Account Credit</strong>. The
      <code>₹30,000</code> is added to the customer's outstanding, exactly
      as a Debit Memo would do.
     </div>
     <p className="note-text">
      📌 <strong>Key rule:</strong> the sign of the net value on the Invoice
      Correction Request — not the document name — decides which way the
      accounting entry runs. A positive net value behaves like a Credit
      Memo; a negative net value automatically behaves like a Debit Memo.
     </p>
    </div>

    {/* <!-- Section 4: Structural Nuance --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">📌</span> Key Nuance — Why Two Line Items?
     </h2>
     <div className="callout indigo">
      💡 Every original invoice line item is copied into the Invoice
      Correction Request as <strong>two line items</strong>: the first
      preserves what was <strong>actually charged</strong>, and the second
      is initially its exact negative — so the net value starts at zero.
      Editing only the second line item's condition value to the
      <strong>correct/actual value</strong> makes the net value equal
      exactly the correction amount (charged minus actual), with its sign
      telling the system which direction to adjust customer outstanding.
     </div>
    </div>

    {/* <!-- Section 5: Q&A --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">❓</span> Class Q&amp;A — Exchange Instead of
      Refund, and Partial Delivery Invoicing
     </h2>
     <div className="callout blue">
      🔗
      <strong
      >Q: What if, instead of a refund, an overcharged customer wants
       extra material and is willing to pay any remaining balance?</strong
      >
      A: The Invoice Correction Request process still runs to correct/adjust
      the original amount; the customer then places a fresh, separate order
      for any additional material they want to pay for. An
      overcharge/undercharge correction is purely a financial adjustment —
      it does not itself trigger an exchange of goods. Exchanging goods for
      a refund only applies to <strong>damaged/defective</strong> returns,
      handled by the Subsequent Delivery Free of Charge process (Section 8
      below), not to a billing mistake.
     </div>
     <div className="callout purple">
      🔗
      <strong
      >Q: Order for 100 units, but only 50 are delivered (stock shortage)
       — does the invoice ever get created for the full 100?</strong
      >
      A: No — this scenario cannot arise, because the Invoice is created
      <strong>with reference to the Delivery</strong>, not the Order. If
      only 50 units were delivered, the invoice automatically copies only
      those 50 units, regardless of what was originally ordered.
     </div>
    </div>

    {/* <!-- Section 6: Free of Charge Process - Concept --> */}
    <div className="card green">
     <h2>
      <span className="badge">6</span> Free of Charge Process (Sample
      Process) — Concept
     </h2>
     <div className="callout green">
      💡 <strong>Free of Charge Process</strong> (also called the
      <strong>Sample Process</strong>) is used to
      <strong>send free samples to customers</strong> — typically when the
      company is launching a new product.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Property</th>
        <th>Setting</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Document Type</td>
        <td><code>FD</code></td>
       </tr>
       <tr>
        <td>Relevant for Pricing?</td>
        <td>No</td>
       </tr>
       <tr>
        <td>Relevant for Billing?</td>
        <td>No</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ Because it's not relevant for billing, an
      <strong>actual Invoice can never be created</strong> against a Free of
      Charge order — only a <strong>Proforma Invoice</strong> is possible.
     </div>
     <p className="note-text">
      📌 A <strong>Proforma Invoice</strong> is a dummy invoice that
      <strong>does not generate any accounting document</strong> — it exists
      purely as a printed/reference document (e.g., for customs or the
      customer's own records), never posting to Finance.
     </p>
    </div>

    {/* <!-- Section 7: Free of Charge Process - System Steps --> */}
    <div className="card gold">
     <h2>
      <span className="badge">7</span> Free of Charge Process — System Steps
      &amp; Configuration Fix
     </h2>
     <div className="callout red">
      ⚠️ <strong>Common error:</strong> creating a Free of Charge order the
      first time typically throws
      <em>"No pricing procedure could be determined."</em> This is fixed via
      configuration, not by changing anything on the order itself.
     </div>
     <div className="stepper">
      <div className="step step-red">
       <strong>Config fix:</strong> go to T-code
       <span className="tcode">OVKK</span> (Pricing Procedure
       Determination) → New Entries → mention the Sales Area (e.g.,
       <code>P100/P1/P1</code>) → set
       <strong>Document Pricing Procedure = <code>C</code></strong>
       (Free of Charge) — note this is different from the standard
       <code>A</code> already maintained for normal sales documents → set
       <strong>Customer Pricing Procedure = <code>1</code></strong> →
       mention <strong>Condition Type <code>PR00</code></strong> → Save.
      </div>
      <div className="step">
       <span className="tcode">VA01</span> → Order Type <code>FD</code> →
       mention the Sales Area → Enter → mention Customer, PO number,
       Material, Quantity → mention an <strong>Order Reason</strong> (e.g.,
       "free of charge sample") → Save.
      </div>
      <div className="step">
       Create the <strong>Delivery</strong> and post <strong>PGI</strong>,
       exactly as for a normal order.
      </div>
      <div className="step">
       To create the <strong>Proforma Invoice</strong>: note the Delivery
       number (it does <strong>not</strong> copy in automatically) →
       <span className="tcode">VF01</span> → manually enter the
       <strong>Delivery number</strong> and the
       <strong>Billing Type</strong> for a delivery-related proforma
       invoice → Enter → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 8: Subsequent Delivery Free of Charge - Concept --> */}
    <div className="card pink">
     <h2>
      <span className="badge">8</span> Subsequent Delivery Free of Charge
      (Replacement / Exchange Process) — Concept
     </h2>
     <div className="callout pink">
      💡 <strong>Subsequent Delivery Free of Charge</strong> is nothing but
      the <strong>Replacement / Exchange Process</strong> — used when a
      customer returns damaged or defective goods and wants
      <strong>replacement goods</strong> instead of a refund.
     </div>
     <div className="callout red">
      ⚠️ <strong>Critical rule:</strong> if the goods are being replaced, a
      <strong>Return Invoice must never be created</strong>. Creating a
      Return Invoice deducts the value from customer outstanding — if
      replacement goods are then also sent free of charge, the company loses
      twice (money deducted <em>and</em> new goods given away). Only one of
      the two — refund <em>or</em> replacement — should happen for the same
      returned quantity.
     </div>
    </div>

    {/* <!-- Section 9: Subsequent Delivery Free of Charge - Steps --> */}
    <div className="card brown">
     <h2>
      <span className="badge">9</span> Subsequent Delivery Free of Charge —
      Process Flow &amp; System Steps
     </h2>
     <div className="stepper">
      <div className="step step-brown">
       <strong>Step 1 — Return Order</strong> (order type <code>RE</code>):
       create with reference to the original invoice, mention the returned
       quantity (worked example: <code>60</code> units, reason: Damaged) →
       Save (Billing Block auto-applied, as with a normal return).
      </div>
      <div className="step step-brown">
       <strong>Step 2 — Return Delivery + PGR:</strong>
       <span className="tcode">VL01N</span>, storage location (e.g.,
       <code>P105</code>) → Post Goods Receipt, exactly as in the standard
       Return Process.
      </div>
      <div className="step step-brown">
       <strong
       >Step 3 — Reason for Rejection (not Billing Block
        removal):</strong
       >
       an authorized person goes to
       <span className="tcode">VA02</span> (Change Mode of the Return
       Order) → the <strong>Reason for Rejection</strong> tab → enters a
       reason (e.g., "Rejected — customer to receive replacement") → Save.
       This step replaces removing the Billing Block, because
       <strong>no Return Invoice will ever be created</strong> for this
       return.
      </div>
      <div className="step step-brown">
       <strong>Step 4 — Subsequent Delivery Free of Charge order</strong>
       (document type <code>SDF</code>):
       <span className="tcode">VA01</span> → Order Type <code>SDF</code> →
       create with reference to the <strong>Return Order number</strong> →
       Copy — the returned quantity (60) carries over automatically → Save.
      </div>
      <div className="step step-brown">
       <strong>Step 5 — Delivery:</strong> create a normal Delivery for the
       replacement quantity → Picking → PGI. No invoice of any kind follows
       this delivery — the replacement goods are, by definition, free of
       charge.
      </div>
     </div>
     <p className="note-text">
      📌 The Subsequent Delivery Free of Charge order can only be created
      <strong>with reference to a Return Order</strong> that has already
      gone through Return Delivery/PGR — there is no standalone entry point
      into this process.
     </p>
    </div>

    {/* <!-- Section 10: Missing Quantity During Delivery --> */}
    <div className="card slate">
     <h2>
      <span className="badge">📌</span> Related Scenario — Quantity Missed
      During Delivery
     </h2>
     <div className="callout slate">
      💡 <strong>Q&amp;A raised in class:</strong> ordered quantity,
      delivered quantity, and invoiced quantity all match on paper, but in
      reality some units were physically
      <strong>missed/lost during delivery</strong> (not damaged, not
      returned by the customer — a shortfall in the delivery process
      itself).
     </div>
     <div className="callout blue">
      🔗 <strong>Resolution:</strong> create a
      <strong>Credit Memo Request with reference to the invoice</strong>
      for the missed quantity, entering "missed quantity" (or a similar
      reason) as the Order Reason. This is handled the same way as any other
      Credit Memo Request — no physical goods movement is involved, since
      there's nothing to physically return.
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
         What is an Invoice Correction Request, and when is it used?
        </td>
        <td>
         A document (order type RK) used when a previous invoice was
         mistakenly overcharged or undercharged; it can handle both
         directions in one process, as an alternative to running separate
         Credit Memo Request / Debit Memo Request processes — the choice
         between the two approaches is a client decision
        </td>
       </tr>
       <tr>
        <td>
         Is the reference document mandatory when creating an Invoice
         Correction Request?
        </td>
        <td>
         Yes — unlike a plain order, the Invoice Correction Request
         cannot be created without a reference to the original invoice
        </td>
       </tr>
       <tr>
        <td>
         How is each invoice line item represented in an Invoice
         Correction Request?
        </td>
        <td>
         As two line items — the first equal to the original charged
         value, the second initially its exact negative (net value = 0);
         editing only the second line item's value to the correct/actual
         amount produces the correction amount as the net value
        </td>
       </tr>
       <tr>
        <td>
         What determines whether an Invoice Correction Request behaves
         like a credit memo or a debit memo?
        </td>
        <td>
         The sign of the resulting net value: a positive net value
         (overcharge) posts Revenue debit/Customer credit like a credit
         memo; a negative net value (undercharge) automatically reverses
         to Customer debit/Revenue credit like a debit memo
        </td>
       </tr>
       <tr>
        <td>
         Why can't an Invoice Correction Request be used to directly send
         replacement goods to a customer?
        </td>
        <td>
         Because it is purely a financial/pricing correction with no
         goods movement built in; replacing damaged/defective goods
         instead of refunding is handled by the separate Subsequent
         Delivery Free of Charge (Replacement/Exchange) process
        </td>
       </tr>
       <tr>
        <td>
         If an order for 100 units only has 50 delivered due to stock
         shortage, what quantity does the invoice show?
        </td>
        <td>
         50 — because the invoice is created with reference to the
         Delivery, not the Order, so it can never invoice more than what
         was actually delivered
        </td>
       </tr>
       <tr>
        <td>
         What makes the Free of Charge process different from a normal
         sales order?
        </td>
        <td>
         It uses document type FD and is not relevant for Pricing and not
         relevant for Billing — an actual Invoice can never be created
         against it, only a Proforma Invoice
        </td>
       </tr>
       <tr>
        <td>What is a Proforma Invoice?</td>
        <td>
         A dummy invoice that does not generate any accounting document —
         used for reference/printing purposes only
        </td>
       </tr>
       <tr>
        <td>
         What causes the "No pricing procedure could be determined" error
         on a Free of Charge order, and how is it fixed?
        </td>
        <td>
         The Free of Charge document pricing procedure (C) hasn't been
         assigned for the sales area yet; fixed via T-code OVKK by
         creating a new entry for the sales area with Document Pricing
         Procedure C, Customer Pricing Procedure, and condition type PR00
        </td>
       </tr>
       <tr>
        <td>
         What is the Subsequent Delivery Free of Charge process, in plain
         terms?
        </td>
        <td>
         The Replacement/Exchange process — used when a customer returns
         damaged or defective goods and receives replacement goods
         instead of a refund
        </td>
       </tr>
       <tr>
        <td>
         Why must a Return Invoice never be created when using Subsequent
         Delivery Free of Charge?
        </td>
        <td>
         Because a Return Invoice deducts the value from customer
         outstanding; if replacement goods are also sent for free, the
         company loses value twice — the refund and the free replacement
        </td>
       </tr>
       <tr>
        <td>
         What replaces "removing the billing block" on the Return Order
         in the Subsequent Delivery Free of Charge flow?
        </td>
        <td>
         Entering a Reason for Rejection on the Return Order — since no
         Return Invoice will ever be created for that return, there is no
         billing block to release
        </td>
       </tr>
       <tr>
        <td>
         What document type is used for Subsequent Delivery Free of
         Charge, and what must it reference?
        </td>
        <td>
         Document type SDF, created with reference to the Return Order
         (after Return Delivery and PGR have already been completed)
        </td>
       </tr>
       <tr>
        <td>
         How is a quantity that was physically missed during delivery
         (though order/delivery/invoice quantities match on paper)
         corrected?
        </td>
        <td>
         Via a Credit Memo Request with reference to the original
         invoice, for the missed quantity — no physical return is
         involved since nothing was ever received back
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
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used here for Invoice Correction Request
         (RK), Free of Charge order (FD), Return Order (RE), and
         Subsequent Delivery Free of Charge order (SDF)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA02</span></td>
        <td>
         Change Sales Order — used to remove the Billing Block on an
         Invoice Correction Request, or to enter Reason for Rejection on
         a Return Order in the replacement flow
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VF01</span></td>
        <td>
         Create Billing Document — used for the Credit Memo Invoice
         (Invoice Correction Request) and for a delivery-related Proforma
         Invoice (Free of Charge process)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VL01N / VL02N</span></td>
        <td>
         Create/Change Delivery — used for standard deliveries, Return
         Deliveries (with PGR), and the replacement delivery in
         Subsequent Delivery Free of Charge
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OVKK</span></td>
        <td>
         Pricing Procedure Determination — used to assign Document
         Pricing Procedure C (Free of Charge) to a sales area so
         free-of-charge orders can be priced/processed without error
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
        <td>Invoice Correction Request document type</td>
        <td>RK</td>
       </tr>
       <tr>
        <td>Invoice Correction Request — overcharge example</td>
        <td>
         Charged ₹3,000/unit vs. actual ₹2,750/unit → net value ₹25,000
         (positive → Revenue debit/Customer credit)
        </td>
       </tr>
       <tr>
        <td>Invoice Correction Request — undercharge example</td>
        <td>
         Charged ₹3,000/unit vs. actual ₹3,300/unit → net value −₹30,000
         (negative → Customer debit/Revenue credit)
        </td>
       </tr>
       <tr>
        <td>Free of Charge order document type</td>
        <td>FD</td>
       </tr>
       <tr>
        <td>Free of Charge — pricing/billing relevance</td>
        <td>
         Not relevant for Pricing; Not relevant for Billing; only a
         Proforma Invoice can be created
        </td>
       </tr>
       <tr>
        <td>Free of Charge — Document Pricing Procedure</td>
        <td>
         C (vs. standard A), Customer Pricing Procedure 1, condition type
         PR00 — maintained via OVKK per sales area
        </td>
       </tr>
       <tr>
        <td>Subsequent Delivery Free of Charge document type</td>
        <td>SDF — created with reference to a Return Order</td>
       </tr>
       <tr>
        <td>Subsequent Delivery Free of Charge worked example</td>
        <td>
         60 units returned as Damaged → Return Order → Return
         Delivery/PGR → Reason for Rejection set on Return Order → SDF
         order (60 units) → replacement Delivery/PGI, no invoice
        </td>
       </tr>
       <tr>
        <td>Missing-quantity-during-delivery correction</td>
        <td>
         Credit Memo Request with reference to invoice, reason "missed
         quantity"
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture introduced the
      <strong>Invoice Correction Request</strong> (order type RK) as a
      unified alternative to running separate Credit Memo / Debit Memo
      Request processes for a mistakenly over- or undercharged invoice: each
      invoice line item is copied as two line items (original value, and its
      negative), and editing only the second line item to the correct value
      produces the correction amount as the net value — positive for an
      overcharge (Revenue debit/Customer credit, worked example ₹25,000) and
      negative for an undercharge (automatically reversed to Customer
      debit/Revenue credit, worked example −₹30,000). Class discussion
      clarified that this process is a pure financial correction — replacing
      goods instead of refunding requires a separate process — and that an
      invoice can never exceed what was actually delivered, since it always
      references the Delivery, not the Order. The lecture then covered the
      <strong>Free of Charge (Sample) process</strong>
      (document type FD — not relevant for pricing or billing, so only a
      Proforma Invoice is possible), including the OVKK configuration fix
      for the "No pricing procedure could be determined" error using
      Document Pricing Procedure C. Finally, it covered
      <strong>Subsequent Delivery Free of Charge</strong> — the
      Replacement/Exchange process (document type SDF) used when replacing
      rather than refunding a return: Return Order → Return Delivery/PGR →
      Reason for Rejection (never a Return Invoice) → SDF order referencing
      the Return Order → replacement Delivery, with no billing at any point.
      A closing note covered handling quantity physically missed during
      delivery via a Credit Memo Request against the invoice.
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
       >Invoice Correction Request's sign decides its behavior</strong
       >
       — a positive net value acts as a credit memo, a negative net value
       automatically acts as a debit memo, from the exact same document
       type and process
      </li>
      <li>
       <strong
       >A financial correction and a goods exchange are different
        problems</strong
       >
       — Invoice Correction Request adjusts money only; replacing goods for
       a return goes through Subsequent Delivery Free of Charge instead
      </li>
      <li>
       <strong>Free of Charge means no pricing and no real billing</strong>
       — a Proforma Invoice is the only invoice type possible, and it never
       touches accounting
      </li>
      <li>
       <strong>Never combine refund and replacement</strong> for the same
       returned quantity — creating a Return Invoice while also sending
       free replacement goods costs the company twice
      </li>
      <li>
       <strong>Reason for Rejection replaces Billing Block removal</strong>
       on a Return Order that will never be invoiced — a subtle but
       important branch point in the return-handling decision tree
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Contracts and Consignment processes —
      the last two processes in this section.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 45 Notes — Invoice Correction Request, Free of Charge &amp;
    Replacement Processes 🎓
   </p>
  </div>
 );
};

export default Business45;
