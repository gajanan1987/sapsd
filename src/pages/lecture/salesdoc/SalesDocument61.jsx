const SalesDocument61 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-indigo">
    <h1>
     📋 Lecture 61 — Schedule Line Category Controls: Item Relevant for
     Delivery, Order Type &amp; Account Assignment Category
    </h1>
    <p>
     SAP SD | Item Relevant for Delivery (contrasted with the same field in
     Item Category Controls) with a full BOM header-pricing worked example,
     then Order Type for Third Party &amp; IPO schedule line categories —
     Dummy MIGO vs. Actual MIGO — and closing with Account Assignment
     Category
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class completed <strong>Movement Type</strong> for the Stock
      Transport Order family — the recap opens by re-confirming the STO
      movement type table from Lecture 60: STO (<code>NN</code>) Two-Step
      <code>641</code> / One-Step <code>647</code>; STO Returns
      (<code>NR</code>) <code>671</code>/<code>677</code>; Intercompany STO
      (<code>NC</code>) <code>643</code>/<code>645</code>; Intercompany STO
      Returns (<code>NS</code>) <code>673</code>/<code>675</code>. Today
      continues the Schedule Line Category controls in
      <span className="tcode">VOV6</span> with
      <strong>Item Relevant for Delivery</strong>,
      <strong>Order Type</strong>, and
      <strong>Account Assignment Category</strong>.
     </div>
    </div>

    {/* <!-- Section 1: Item Relevant for Delivery --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Item Relevant for Delivery — Concept
     </h2>
     <div className="callout teal">
      💡 <strong>Item Relevant for Delivery</strong> exists as a field in
      <strong>two</strong> places:
      <strong>Item Category Controls</strong> (<span className="tcode"
      >VOV7</span
      >) and <strong>Schedule Line Category</strong> (<span
       className="tcode"
      >VOV6</span
      >). The two are not interchangeable — each applies to a different kind
      of item.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Where Maintained</th>
        <th>Applies To</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         Item Category Controls (<span className="tcode">VOV7</span>)
        </td>
        <td>
         Only <strong>Text Item</strong> and <strong>Value Item</strong>
        </td>
       </tr>
       <tr>
        <td>
         Schedule Line Category (<span className="tcode">VOV6</span>)
        </td>
        <td>Normal, <strong>standard</strong> items</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖
      <strong>What the Schedule Line Category version controls:</strong>
      whether the standard item is relevant for delivery at all. If checked,
      the system determines that line item into the delivery. If unchecked,
      the system will <strong>not</strong>
      determine that line item into the delivery — the item simply never
      shows up when the delivery is created.
     </div>

     <h3>Basic Demonstration</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA01</span>, order type <code>PPOR</code>,
       Plant <code>P100</code>. Mention the customer and material. Save the
       order, then create the delivery — the item appears in the delivery
       as expected (Item Relevant for Delivery is checked on the schedule
       line category).
      </div>
      <div className="step">
       Uncheck <strong>Item Relevant for Delivery</strong> on the custom
       schedule line category assigned to the item (the custom
       <code>PO</code> schedule line category built in Lecture 58). Create
       the order and delivery again.
      </div>
      <div className="step">
       Go to the schedule line on the order and confirm the schedule line
       category is the one just changed. Save the order, then try to create
       the delivery.
      </div>
      <div className="step">
       <strong>Result:</strong> the system throws the message
       <em>"No delivery-relevant items in order."</em> Because Item
       Relevant for Delivery is unchecked, the system correctly identifies
       that this item is not relevant for delivery and refuses to determine
       it.
      </div>
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the schedule line category named in
      this demo is rendered in the recording as "<code>PVO</code>" — this is
      almost certainly the custom <code>PO</code> schedule line category
      already built and assigned to item category <code>P10</code> in
      Lecture 58, not a separate value. Confirm against the system if in
      doubt.
     </p>
    </div>

    {/* <!-- Section 2: BOM Worked Example --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Item Relevant for Delivery in
      Practice — BOM Header Pricing Worked Example
     </h2>
     <div className="callout orange">
      💡 The clearest place this field matters in real client configurations
      is <strong>BOM (Bill of Material)</strong>
      scenarios. Recap from earlier lectures: in BOM Header Pricing, the
      header material (e.g. Computer) carries item category
      <code>TAQ</code> / schedule line category <code>CP</code>, and its
      components (CPU, Monitor, Keyboard, Mouse) carry item category
      <code>TAE</code> / schedule line category <code>CT</code>. Price
      appears only on the header item (e.g. ₹15,000 on Computer); components
      carry no price.
     </div>
     <div className="callout blue">
      📖
      <strong
      >Why the header item's stock reduces but the components'
       doesn't:</strong
      >
      the header item's schedule line category (<code>CP</code>) carries
      Movement Type <code>601</code>. The components' schedule line category
      (<code>CT</code>) carries <strong>no movement type at all</strong> —
      so at PGI, only the header item's stock is reduced; component stock is
      untouched.
     </div>
     <div className="callout purple">
      📖 <strong>Why components don't appear on the invoice:</strong> the
      components' item category (<code>TAE</code>) has both Pricing and
      Billing Relevance left <strong>blank</strong>. With Billing Relevance
      blank, the components are excluded from billing entirely — standard
      order and delivery show them, but the invoice shows only the header
      item (Computer).
     </div>
     <div className="callout gold">
      📖
      <strong
      >So why do components still show up in the delivery, if their
       movement type is blank?</strong
      >
      Because Item Relevant for Delivery is <strong>checked</strong> on
      <code>CT</code>. The components carry no stock effect, but the system
      still determines them into the delivery as dummy/ informational lines
      — purely for the delivery document to show what physically makes up
      the shipped Computer.
     </div>

     <h3>Worked Demonstration</h3>
     <div className="stepper">
      <div className="step">
       Material master (<span className="tcode">MM02</span>) — set
       <code>P Computer</code>'s Item Category Group to
       <code>ERLA</code> for BOM Header Pricing. Structure Scope is set to
       <code>A</code> (single-level BOM) for this test.
      </div>
      <div className="step">
       Maintain opening stock for <code>P Computer</code> at Plant
       <code>P100</code> using <span className="tcode">MB1C</span>,
       Movement Type <code>561</code> (Initial Stock Posting) — quantity
       7,000. (The material period must first be open; use
       <span className="tcode">MMPV</span> to close/open posting periods if
       the system blocks posting with "posting only possible in [open]
       periods.")
      </div>
      <div className="step">
       <span className="tcode">VA01</span> — create the order for
       <code>P Computer</code>. The order shows the header item (<code
       >TAQ</code
       >
       / <code>CP</code>) with price, and the components (<code>TAE</code>
       / <code>CT</code>) with no price. Save.
      </div>
      <div className="step">
       Create the delivery. <strong>Both</strong> the header item and all
       components appear in the delivery. Perform PGI — only the header
       item's stock reduces; component stock is untouched, because
       <code>CT</code> carries no movement type.
      </div>
      <div className="step">
       To stop components from appearing in the delivery altogether (a
       common client requirement — "some clients don't want components
       showing in the delivery"), go to schedule line category
       <code>CT</code> in <span className="tcode">VOV6</span> and uncheck
       <strong>Item Relevant for Delivery</strong>.
      </div>
      <div className="step">
       Create the order and delivery again: the order still shows
       components (that behavior is unaffected), but the delivery now
       copies <strong>only the header item</strong> — the components no
       longer appear, because <code>CT</code>'s Item Relevant for Delivery
       is now unchecked.
      </div>
     </div>
     <div className="callout green">
      📖
      <strong
      >If a client wants components priced on the invoice instead:</strong
      >
      that requires a configuration change on <code>TAE</code> — set Pricing
      to <code>X</code> and Statistical Value to <code>X</code>. This gives
      components a <strong>statistical</strong> price (visible for
      reporting) that does not affect the order's total value; the total is
      still driven from the header item. Even then, components remain
      excluded from the delivery/invoice unless <code>TAE</code>'s Billing
      Relevance is separately set to <code>A</code>.
     </div>
     <p className="note-text">
      📌
      <strong>Everything shown here is the standard SAP behavior</strong> —
      checked Item Relevant for Delivery on <code>CT</code>, components
      appear in delivery as dummy lines with no stock or price effect. As
      per client requirement, this is one of the most commonly toggled
      fields in real BOM configurations.
     </p>
     <p className="note-text">
      📌 <strong>Correction:</strong> the plant code in this demo is
      rendered inconsistently in the recording (once as "<code>P103</code>")
      — standardized here to <code>P100</code>, consistent with every other
      plant reference across this course. Likewise, "<code>I61</code>" used
      with <span className="tcode">MB1C</span> is corrected to Movement Type
      <code>561</code> (Initial Stock Posting, established in Lecture 60),
      and "Structure Scope... EAP" is treated as an unclear rendering of
      Structure Scope value <code>A</code>
      (single-level), consistent with the values table from Lecture 56.
      Confirm all of these against the system if in doubt.
     </p>
    </div>

    {/* <!-- Section 3: Order Type --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Order Type (Schedule Line Category
      Level) — Third Party &amp; IPO
     </h2>
     <div className="callout purple">
      💡 <strong>Order Type</strong>, at the schedule line category level,
      is maintained <strong>only</strong> for the
      <strong>Third Party</strong> (<code>CS</code>) and
      <strong>IPO</strong> (<code>CB</code>) schedule line categories — both
      are set to Order Type <code>NB</code>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Schedule Line Category</th>
        <th>Scenario</th>
        <th>Order Type</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>CS</code></td>
        <td>Third Party</td>
        <td><code>NB</code></td>
       </tr>
       <tr>
        <td><code>CB</code></td>
        <td>Individual Purchase Order (IPO)</td>
        <td><code>NB</code></td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖 <strong>What Order Type <code>NB</code> does:</strong> it causes
      the system to
      <strong>automatically generate a Purchase Requisition (PR)</strong> in
      the background while the sales order itself is being created/saved,
      for both the Third Party and IPO processes.
     </div>

     <h3>Demonstration</h3>
     <div className="stepper">
      <div className="step">
       Create a Third Party sales order (item category
       <code>TAS</code>, schedule line category <code>CS</code>) for a
       material configured for third-party processing. Save.
      </div>
      <div className="step">
       Go into change mode, double-click the line item, and go to
       <strong>Schedule Lines</strong>. A Purchase Requisition (PR) number
       is already visible — generated automatically on save, with no
       separate manual step.
      </div>
      <div className="step">
       This is what Order Type <code>NB</code> controls: it drives
       automatic PR generation for both Third Party and IPO sales orders.
      </div>
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the item category for Third Party is
      rendered in the recording as "<code>PAS</code>" — corrected to
      <code>TAS</code>, the value already established in Lecture 53 and
      reused throughout this course.
     </p>
     <p className="note-text">
      📌 Note that automatic PR generation via Order Type
      <code>NB</code> is a separate mechanism from the
      <strong>Create PO Automatic</strong> field covered in Lecture 56 —
      that field (on <code>TAS</code>/<code>TAB</code> item categories)
      additionally auto-generates the <em>Purchase Order</em>, not just the
      PR. Without it checked, the PR generated here via
      <code>NB</code> still needs to be manually converted into a PO.
     </p>
    </div>

    {/* <!-- Section 4: Third Party Process - Dummy MIGO --> */}
    <div className="card red">
     <h2>
      <span className="badge">4</span> Third Party Process — Dummy MIGO
     </h2>
     <div className="callout red">
      💡 Once the PR/PO exist, the full Third Party process runs as follows
      — the key twist is that the goods receipt at the
      <strong>company's</strong> end never involves real stock.
     </div>
     <div className="flow">
      <div className="flow-step">Customer places order</div>
      <span className="arrow">→</span>
      <div className="flow-step">System generates PR</div>
      <span className="arrow">→</span>
      <div className="flow-step">PR converted to PO</div>
      <span className="arrow">→</span>
      <div className="flow-step">PO sent to vendor</div>
      <span className="arrow">→</span>
      <div className="flow-step">
       Vendor delivers goods directly to customer
      </div>
     </div>
     <div className="callout gold">
      📖 <strong>The invoice timing problem:</strong> per the business
      agreement, the vendor cannot raise an invoice to the company
      immediately after delivering goods to the customer — the vendor is
      only permitted to invoice at <strong>month-end</strong>. But the
      company still needs to invoice the customer sooner. Meanwhile, when
      the vendor delivers the goods, the vendor sends a
      <strong>shipping notification</strong> (since an invoice cannot yet
      follow).
     </div>
     <div className="callout blue">
      📖
      <strong>What happens on receiving the shipping notification:</strong>
      the company performs <span className="tcode">MIGO</span> based on that
      shipping notification/delivery information — entering the quantity the
      vendor reports as delivered. Only once this
      <span className="tcode">MIGO</span> is posted does the system allow
      the company to raise the invoice to the customer; an invoice normally
      cannot be created without a preceding
      <span className="tcode">MIGO</span>, since that MIGO is how the
      company confirms how much quantity the vendor actually delivered.
     </div>
     <div className="callout purple">
      ❓ <strong>But doesn't MIGO normally update stock?</strong> In the
      Third Party process, this <span className="tcode">MIGO</span> is
      treated by the system as a <strong>Dummy MIGO</strong> — stock is
      <strong>not</strong> updated, even though the MIGO is posted and
      enables invoicing. The goods physically go straight from the vendor to
      the customer; the company never holds the stock, so there is nothing
      real for the system to update.
     </div>
     <p className="note-text">
      📌 The field controlling this behavior lives on the
      <strong>CS</strong> schedule line category's own controls in
      <span className="tcode">VOV6</span> — its exact field name is unclear
      in this recording ("item category 5" was spoken, which does not match
      any established field name from this course); the effect it produces,
      however, is unambiguous: <span className="tcode">MIGO</span> in the
      Third Party process is always treated as a Dummy MIGO, and stock is
      never updated. Confirm the precise field name against the system if
      needed.
     </p>
     <div className="callout green">
      ✅ <strong>Student clarification, addressed live:</strong> the vendor
      can send a delivery challan and the company can raise the customer
      invoice right away — the company is not forced to wait for the
      vendor's own month-end invoice. What the company <em>is</em> forced to
      wait for is its own <span className="tcode">MIGO</span>, since without
      it the system will not allow customer invoicing at all; the shipping
      notification from the vendor is exactly what lets the company post
      that MIGO before the vendor's formal invoice arrives.
     </div>
    </div>

    {/* <!-- Section 5: IPO Process - Actual MIGO --> */}
    <div className="card gold">
     <h2><span className="badge">5</span> IPO Process — Actual MIGO</h2>
     <div className="callout gold">
      💡 The <strong>IPO (Individual Purchase Order)</strong> process — item
      category <code>TAB</code>, schedule line category <code>CB</code> —
      looks similar to Third Party at the order/PR/PO stage, but differs
      sharply at goods receipt: the vendor delivers to the
      <strong>company</strong>, not directly to the customer.
     </div>
     <div className="flow">
      <div className="flow-step">Customer places order</div>
      <span className="arrow">→</span>
      <div className="flow-step">System generates PR</div>
      <span className="arrow">→</span>
      <div className="flow-step">PR converted to PO</div>
      <span className="arrow">→</span>
      <div className="flow-step">PO sent to vendor</div>
      <span className="arrow">→</span>
      <div className="flow-step">Vendor delivers goods to company</div>
      <span className="arrow">→</span>
      <div className="flow-step done">Company does MIGO (Actual)</div>
      <span className="arrow">→</span>
      <div className="flow-step">Company delivers to customer</div>
      <span className="arrow">→</span>
      <div className="flow-step">Company invoices customer</div>
     </div>
     <div className="callout blue">
      📖 <strong>Two MIGOs, not one:</strong> the company performs
      <span className="tcode">MIGO</span> when goods are received from the
      vendor (stock updated — this is a real, physical goods receipt into
      company stock), and again when the vendor's invoice is received. The
      company then delivers the goods to the customer and raises its own
      invoice, exactly like a standard sales flow from that point on.
     </div>
     <div className="callout purple">
      📖 <strong>Why this MIGO is "actual":</strong> in IPO, the vendor
      physically delivers goods into the company's own custody before the
      company ships to the customer — so the MIGO reflects a real receipt
      and <strong>stock is updated</strong>, unlike Third Party's Dummy
      MIGO.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Process</th>
        <th>Schedule Line Category</th>
        <th>Goods Flow</th>
        <th>MIGO Behavior</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Third Party</td>
        <td><code>CS</code></td>
        <td>Vendor delivers directly to customer</td>
        <td>Dummy MIGO — stock <strong>not</strong> updated</td>
       </tr>
       <tr>
        <td>IPO</td>
        <td><code>CB</code></td>
        <td>Vendor delivers to company; company delivers to customer</td>
        <td>Actual MIGO — stock <strong>is</strong> updated</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 As with the Third Party field above, the exact field name
      controlling this on <code>CB</code> is unclear in the audio (spoken as
      "item category 0"); the effect — MIGO in the IPO process is treated as
      an actual goods receipt, updating stock — is clearly and repeatedly
      stated and is used here as the authoritative content. Confirm the
      precise field name against the system if needed.
     </p>
    </div>

    {/* <!-- Section 6: Account Assignment Category --> */}
    <div className="card cyan">
     <h2><span className="badge">6</span> Account Assignment Category</h2>
     <div className="callout cyan">
      💡 <strong>Account Assignment Category</strong>, like Order Type, is
      maintained <strong>only</strong> for the Third Party (<code>CS</code>)
      and IPO (<code>CB</code>) schedule line categories — both set to value
      <strong><code>1</code></strong
      >.
     </div>
     <div className="callout blue">
      📖
      <strong
      >What Account Assignment Category <code>1</code> controls:</strong
      >
      it passes the <strong>customer's information</strong> forward through
      the document chain — from the Sales Order to the Purchase Requisition,
      and from the Purchase Requisition to the Purchase Order.
     </div>
     <div className="callout gold">
      📖
      <strong>Why this matters, specifically for Third Party:</strong> since
      the vendor delivers directly to the customer, the PO itself must carry
      and print the customer's address so the vendor knows exactly where to
      ship. Account Assignment Category <code>1</code> is what makes that
      customer information flow all the way through from the order to the
      PO.
     </div>
     <p className="note-text">
      📌 This is the last field of today's session — the recording ends
      mid-topic, with the remaining Schedule Line Category controls deferred
      to the next class.
     </p>
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
         Item Relevant for Delivery exists in two places — where, and
         what does each apply to?
        </td>
        <td>
         In Item Category Controls (VOV7), applicable only to Text Item
         and Value Item; in Schedule Line Category (VOV6), applicable to
         normal standard items
        </td>
       </tr>
       <tr>
        <td>
         What does Item Relevant for Delivery control at the Schedule
         Line Category level, and what happens if it's unchecked?
        </td>
        <td>
         Whether the standard item is determined into the delivery; if
         unchecked, attempting to create the delivery produces the error
         "No delivery-relevant items in order"
        </td>
       </tr>
       <tr>
        <td>
         In BOM Header Pricing, why does the header item's stock reduce
         at PGI but the components' stock does not?
        </td>
        <td>
         The header item's schedule line category (CP) carries Movement
         Type 601; the components' schedule line category (CT) carries no
         movement type at all, so nothing is posted for them
        </td>
       </tr>
       <tr>
        <td>
         If CT has no movement type and no price, why do components still
         show up in the delivery by default?
        </td>
        <td>
         Because Item Relevant for Delivery is checked on CT — components
         are determined as dummy, informational lines showing what makes
         up the shipped assembly, with no stock or price effect
        </td>
       </tr>
       <tr>
        <td>
         How would you stop BOM components from appearing in the delivery
         at all, per a client's requirement?
        </td>
        <td>
         Uncheck Item Relevant for Delivery on the component's schedule
         line category (CT); the order will still show components, but
         the delivery will copy only the main/header item
        </td>
       </tr>
       <tr>
        <td>
         How would you make BOM components appear with a (statistical)
         price on the order, without affecting the order total?
        </td>
        <td>
         Set Pricing = X and Statistical Value = X on the component item
         category (TAE); this shows a price for reporting purposes only,
         with no effect on the total order value
        </td>
       </tr>
       <tr>
        <td>
         Which schedule line categories carry the Order Type field, what
         value do they carry, and what does it do?
        </td>
        <td>
         CS (Third Party) and CB (IPO), both set to NB; NB causes the
         system to automatically generate a Purchase Requisition in the
         background while the sales order is created
        </td>
       </tr>
       <tr>
        <td>
         In the Third Party process, why is the company's MIGO called a
         "Dummy MIGO"?
        </td>
        <td>
         Because the vendor delivers the goods directly to the customer —
         the company never physically holds the stock, so even though
         MIGO is posted (based on the vendor's shipping notification) to
         enable customer invoicing, stock is not updated
        </td>
       </tr>
       <tr>
        <td>
         In the Third Party process, why can't the company invoice the
         customer without first doing a MIGO?
        </td>
        <td>
         The system requires MIGO as confirmation of how much quantity
         the vendor actually delivered before it will allow the customer
         invoice to be created
        </td>
       </tr>
       <tr>
        <td>
         Why does the vendor send a shipping notification instead of an
         invoice immediately, in Third Party?
        </td>
        <td>
         Per the business agreement, the vendor is only permitted to
         raise its invoice to the company at month-end; the shipping
         notification lets the company post its MIGO — and therefore
         invoice the customer — well before that
        </td>
       </tr>
       <tr>
        <td>
         How does the IPO process differ from Third Party in terms of
         goods flow and MIGO?
        </td>
        <td>
         In IPO, the vendor delivers goods to the company (not directly
         to the customer); the company's MIGO on receipt is an Actual
         MIGO that does update stock, and the company subsequently
         delivers to and invoices the customer itself
        </td>
       </tr>
       <tr>
        <td>
         Which schedule line categories carry Account Assignment
         Category, what value, and what does it control?
        </td>
        <td>
         CS and CB, both set to 1; it passes the customer's information
         forward from the Sales Order to the PR, and from the PR to the
         PO — critical in Third Party so the PO can print the customer's
         delivery address for the vendor
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
        <td><span className="tcode">VOV6</span></td>
        <td>
         Define Schedule Line Categories — where Item Relevant for
         Delivery, Order Type, and Account Assignment Category are all
         maintained
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV7</span></td>
        <td>
         Define Item Categories — carries its own Item Relevant for
         Delivery field, applicable only to Text Item and Value Item
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MM02</span></td>
        <td>
         Change Material — used to set P Computer's Item Category Group
         to ERLA for the BOM header-pricing demo
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MB1C</span></td>
        <td>
         Enter Other Goods Receipt — used with Movement Type 561 to post
         opening/initial stock for the BOM demo material
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MMPV</span></td>
        <td>
         Close/Open Posting Period (Material Master) — used to open the
         posting period before MB1C would allow the stock posting
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used throughout for the delivery-relevance
         demo, the BOM demo, and the Third Party order/PR demo
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MIGO</span></td>
        <td>
         Goods Receipt/Movement — Dummy MIGO in Third Party (no stock
         update, enables customer invoicing) vs. Actual MIGO in IPO (real
         stock update on vendor receipt)
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
        <td>Item Relevant for Delivery — two locations</td>
        <td>
         VOV7 (Item Category Controls): Text Item &amp; Value Item only;
         VOV6 (Schedule Line Category): standard items — checked =
         determined into delivery, unchecked = "No delivery-relevant
         items in order"
        </td>
       </tr>
       <tr>
        <td>BOM Header Pricing — delivery/billing behavior</td>
        <td>
         Header (TAQ/CP): priced, stock reduces (Movement Type 601).
         Components (TAE/CT): unpriced, no movement type (stock
         untouched), Billing Relevance blank (excluded from invoice),
         Item Relevant for Delivery checked by default (shown as dummy
         lines in delivery)
        </td>
       </tr>
       <tr>
        <td>Suppressing BOM components from delivery</td>
        <td>
         Uncheck Item Relevant for Delivery on CT — order still shows
         components, delivery copies only the header item
        </td>
       </tr>
       <tr>
        <td>Statistical pricing for BOM components</td>
        <td>
         Set Pricing = X and Statistical Value = X on TAE — components
         get a reporting-only price with no effect on order total
        </td>
       </tr>
       <tr>
        <td>Order Type (Schedule Line Category level)</td>
        <td>
         CS (Third Party) and CB (IPO) both = NB; auto-generates PR in
         the background on sales order save
        </td>
       </tr>
       <tr>
        <td>Third Party MIGO behavior</td>
        <td>
         Dummy MIGO — posted based on vendor's shipping notification
         (since vendor can only invoice at month-end); enables customer
         invoicing but does not update stock, since goods never reach
         company stock
        </td>
       </tr>
       <tr>
        <td>IPO MIGO behavior</td>
        <td>
         Actual MIGO — vendor delivers to company first; stock is
         genuinely updated on receipt, then company delivers to and
         invoices the customer separately
        </td>
       </tr>
       <tr>
        <td>
         Account Assignment Category (Schedule Line Category level)
        </td>
        <td>
         CS and CB both = 1; passes customer information from Order → PR
         → PO, so the PO can carry the customer's delivery address for
         the vendor
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture continued the Schedule Line Category controls (<span
       className="tcode"
      >VOV6</span
      >) with <strong>Item Relevant for Delivery</strong> — distinguished
      from the same-named field in Item Category Controls (<span
       className="tcode"
      >VOV7</span
      >, Text/Value Items only) — which governs whether a standard item is
      determined into the delivery at all, demonstrated first with a simple
      check/uncheck test and then with a full
      <strong>BOM Header Pricing</strong> worked example: components
      (<code>TAE</code>/<code>CT</code>) appear in delivery as unpriced,
      stock-neutral dummy lines by default (no movement type, Billing
      Relevance blank) purely because Item Relevant for Delivery is checked,
      and unchecking it on <code>CT</code>
      removes components from the delivery entirely, a common
      client-specific tweak. The lecture then moved to
      <strong>Order Type</strong>, maintained only on the Third Party
      (<code>CS</code>) and IPO (<code>CB</code>) schedule line categories
      as <code>NB</code>, driving automatic background PR generation on
      order save — explained alongside the full Third Party process, where
      the vendor's inability to invoice mid-month leads to a
      shipping-notification-driven <strong>Dummy MIGO</strong> that enables
      customer invoicing without updating stock, contrasted against the IPO
      process's <strong>Actual MIGO</strong>, where the vendor delivers to
      the company first and stock genuinely updates. The lecture closed with
      <strong>Account Assignment Category</strong> (also CS/CB only, value
      <code>1</code>), which passes customer information from Order to PR to
      PO so the vendor's PO carries the correct delivery address in Third
      Party processing. The remaining Schedule Line Category controls
      continue next class.
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
       >The same field name can mean two different things depending on
        where it's maintained</strong
       >
       — Item Relevant for Delivery on VOV7 governs Text/Value items; the
       same-named field on VOV6 governs standard items. Always check which
       screen a control lives on before assuming its scope.
      </li>
      <li>
       <strong
       >BOM components in delivery are a config choice, not a fixed
        rule</strong
       >
       — checked Item Relevant for Delivery on CT is the SAP standard, but
       real clients frequently uncheck it; know both behaviors and how to
       switch between them.
      </li>
      <li>
       <strong
       >Order Type NB and Create PO Automatic solve different halves of
        the same problem</strong
       >
       — NB auto-generates the PR; Create PO Automatic (Lecture 56)
       additionally auto-generates the PO. A configuration can have one
       without the other.
      </li>
      <li>
       <strong
       >Dummy MIGO vs. Actual MIGO is entirely about where the goods
        physically land</strong
       >
       — Third Party never brings goods into company custody (Dummy, no
       stock update); IPO does (Actual, real stock update) — memorize the
       goods flow, not just the MIGO label.
      </li>
      <li>
       <strong
       >Account Assignment Category is the reason a third-party vendor's
        PO knows the customer's address</strong
       >
       — without it, customer information would never propagate past the
       sales order into the purchasing documents.
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> continuing the remaining Schedule Line
      Category controls from where today left off.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 61 Notes — Schedule Line Category Controls: Item Relevant for
    Delivery, Order Type &amp; Account Assignment Category 🎓
   </p>
  </div>
 );
};

export default SalesDocument61;
