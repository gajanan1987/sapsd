const Business43 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-gold">
    <h1>
     🔁 Lecture 43 — Cash Sale in System, One-Time Customers &amp; Return
     Process
    </h1>
    <p>
     SAP SD | Practicing Cash Sale end-to-end with a one-time customer, how
     it differs from Rush Order on credit/availability/partial delivery, and
     a full walkthrough of the Return Process — from return note to return
     stock movement and reversed accounting
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class introduced the Cash Sale process conceptually. Today
      practices it live in the system with a one-time customer, clarifies
      exactly how Cash Sale differs from Rush Order on credit management,
      availability check, and partial delivery, and then covers the
      <strong>Return Process</strong> in full — reasons for return, the
      Return Note, the order-delivery-invoice flow, and how returned stock
      and accounting actually move behind the scenes.
     </div>
    </div>

    {/* <!-- Section 1: Cash Sale — Live Walkthrough --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Cash Sale Process — Live System
      Walkthrough
     </h2>
     <div className="callout teal">
      💡 Continuing from Lecture 42: the counter person only performs Steps
      1–3 (Order, Automatic Delivery, Bill Printout) in real time; Steps 4–5
      (PGI and Cash Sale Invoice) are done
      <strong>later, when the counter is free or closed</strong> (e.g., end
      of day).
     </div>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA01</span> → Order Type <code>CS</code>
       → Sales Area (e.g., P100/P4/P1) → Enter → select the
       <strong>one-time customer</strong> → mention material and quantity.
      </div>
      <div className="step">
       System prompts for the customer's name and address (street, house
       number, postal code, city, region) and contact details (phone,
       mobile, email) — <strong>mandatory</strong> for a one-time customer.
      </div>
      <div className="step">
       If pricing doesn't appear (Analysis shows condition record missing
       for PR00), go to <span className="tcode">VK11</span> → maintain the
       PR00 price for the material/sales-area combination → return to the
       order.
      </div>
      <div className="step">
       Check Header → Shipping (Shipping Condition <code>10</code>) and
       Item → Shipping (Immediate Shipping Point) → Save. Delivery is
       created automatically.
      </div>
      <div className="step">
       To preview the bill/invoice copy: go to
       <span className="tcode">VA02</span> (Change Mode of Sales Order) →
       Sales Document → Issue Output To → select the Cash Sale Invoice
       output type (e.g., <code>RD03</code>) → click
       <strong>Print Preview</strong>. In real usage, the counter's
       connected printer issues this automatically on save.
      </div>
      <div className="step">
       <strong>(Later, when the counter is free):</strong> go to Change
       Mode of Delivery → do Picking and PGI.
      </div>
      <div className="step">
       <strong>(Later):</strong> create the Cash Sale Invoice via
       <span className="tcode">VF01</span> → Enter → Save.
      </div>
     </div>
     <p className="note-text">
      📌 Sending the output by email instead of print is possible too — that
      configuration falls under <strong>Output Determination</strong>,
      covered separately.
     </p>
    </div>

    {/* <!-- Section 2: Cash Sale vs Rush Order --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Cash Sale vs. Rush Order — Key
      Differences
     </h2>
     <div className="callout orange">
      💡 Both use Shipping Condition 10 and an Immediate Shipping Point, but
      they differ meaningfully in three areas.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Aspect</th>
        <th>Cash Sale (CS)</th>
        <th>Rush Order (RO)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Credit Management</td>
        <td>
         Not relevant — no credit involved (payment is immediate, in
         cash)
        </td>
        <td>Relevant — normal credit management applies</td>
       </tr>
       <tr>
        <td>Partial Delivery</td>
        <td>Not applicable — a counter sale is complete in one shot</td>
        <td>Applicable — normal partial delivery rules apply</td>
       </tr>
       <tr>
        <td>Item Category</td>
        <td>BVN</td>
        <td>Standard (as for a regular order)</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔗 <strong>Where these controls live:</strong> item category controls
      (e.g., BVN for Cash Sale) determine settings like "Relevant for
      Credit" — unchecked for Cash Sale, checked for Rush Order/standard
      orders. These detailed item-category controls will be covered later in
      the course.
     </div>
     <p className="note-text">
      📌 Analogy used in class: think of a physical retail counter — you
      never get credit there, and you never get a partial delivery either.
      Both facts about Cash Sale follow directly from it being a
      counter-sale process.
     </p>
    </div>

    {/* <!-- Section 3: One-Time Customer Creation --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Creating a One-Time Customer — T-code
      XD01
     </h2>
     <div className="callout purple">
      💡 Cash Sale (and similar counter-style scenarios) typically use a
      <strong>one-time customer</strong> rather than a regular, fully
      maintained Customer Master record.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Account Group</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>CPD</td>
        <td>One-time customer, numeric customer number</td>
       </tr>
       <tr>
        <td>CPDA</td>
        <td>
         One-time customer, alphanumeric (character-based) customer
         number
        </td>
       </tr>
      </tbody>
     </table>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">XD01</span> → select Account Group
       <code>CPD</code> or <code>CPDA</code> (instead of a normal account
       group like 0001).
      </div>
      <div className="step">
       Mention the sales area (e.g., Distribution Channel P4) → give a name
       (e.g., "One Time Customer") → keep the remaining fields at their
       normal defaults → Save.
      </div>
      <div className="step">
       When this one-time customer is selected on a Cash Sale order, the
       system additionally prompts for that specific customer's name,
       address, and contact details at order-entry time — this information
       is mandatory in real-time usage.
      </div>
     </div>
    </div>

    {/* <!-- Section 4: PO Number Field --> */}
    <div className="card red">
     <h2>
      <span className="badge">4</span> PO Number — Optional via
      Configuration
     </h2>
     <div className="callout red">
      💡 By default, a sales order without a customer PO number stays
      <strong>incomplete</strong>. In real projects,
      <strong
      >99% of the time a Purchase Order is received from the customer
       before a sales order is created</strong
      >.
     </div>
     <div className="callout blue">
      🔗 <strong>Exception handling:</strong> if a customer sometimes
      doesn't send a PO for genuine reasons, a separate document type is
      used with the PO-number requirement <strong>unchecked</strong> in
      configuration (a control inside <span className="tcode">VOV8</span>) —
      this specific configuration step will be covered later in the course.
     </div>
     <p className="note-text">
      📌 Clarification raised in class: the PO number belongs to the
      <strong>sales order</strong> (referencing the customer's own purchase
      order), not to the customer record itself.
     </p>
    </div>

    {/* <!-- Section 5: Return Process — Reasons --> */}
    <div className="card gold">
     <h2>
      <span className="badge">5</span> Return Process — Reasons for Return
     </h2>
     <div className="callout gold">
      💡 A <strong>Return Process</strong> is triggered whenever a customer
      returns goods.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Reason</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Damaged goods</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Defective goods</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Expired goods</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Over-delivery</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔗 <strong>How it starts:</strong> the customer informs the company
      (i.e., the relevant regional Sales Manager, based on territory — e.g.,
      a Telangana customer informs the Telangana Sales Manager) → the Sales
      Manager sends an employee to the customer's location to physically
      cross-check the goods.
     </div>
    </div>

    {/* <!-- Section 6: Return Note --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">6</span> Return Process — The Return Note
     </h2>
     <div className="callout indigo">
      💡 After cross-checking the goods at the customer's location, the
      employee prepares a <strong>Return Note</strong>, which is then
      submitted back to the company.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Return Note Consists Of</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Invoice Number (the original invoice being referenced)</td>
       </tr>
       <tr>
        <td>Invoice Date</td>
       </tr>
       <tr>
        <td>Customer Number</td>
       </tr>
       <tr>
        <td>Item, Material, Quantity</td>
       </tr>
       <tr>
        <td>Reason for Return</td>
       </tr>
       <tr>
        <td>Batch Number</td>
       </tr>
       <tr>
        <td>Customer Signature</td>
       </tr>
       <tr>
        <td>Employee Signature</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 7: Return Process Flow --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">7</span> Return Process — Step-by-Step Flow
     </h2>
     <div className="callout cyan">
      💡 Once the Return Note is submitted, the user creates a
      <strong>Return Order with reference to the original invoice</strong>.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Original invoice — Item 10,
      Material WAXY10205 (BT), Quantity 100, Value ₹3,00,000 (₹3,000/ unit).
      Customer returns <strong>60 units, damaged</strong> → Return Order
      value = <code>₹1,80,000</code>.
     </div>
     <div className="stepper">
      <div className="step">
       <strong>Step 1 — Create Return Order</strong> with reference to the
       original invoice → mention the returned quantity (60) and the
       <strong>Order Reason</strong> (e.g., Damaged) → the order
       automatically carries a <strong>Billing Block</strong>.
      </div>
      <div className="step">
       <strong>Step 2 — Return Delivery</strong>, followed by
       <strong>PGR (Post Goods Receipt)</strong> — receiving the returned
       goods back into the plant.
      </div>
      <div className="step">
       <strong>Step 3 — Remove the Billing Block</strong>: an authorized
       person (e.g., a manager) goes to Change Mode of the Return Order and
       removes the billing block once the return is validated.
      </div>
      <div className="step">
       <strong>Step 4 — Create the Return Invoice</strong> (with reference
       to the Return Order) — generates the reversed accounting entry.
      </div>
     </div>
     <div className="callout gold">
      📖
      <strong
      >Return Invoice accounting entry (reversed from a normal
       invoice):</strong
      >
      Revenue Account Debit → Customer Account Credit.
     </div>
    </div>

    {/* <!-- Section 8: Return Stock & Accounting Nuance --> */}
    <div className="card green">
     <h2>
      <span className="badge">8</span> Return Process — Stock Movement &amp;
      Accounting Nuance
     </h2>
     <div className="callout green">
      💡 <strong>At PGR</strong>, returned stock is added to
      <strong>Return Stock</strong> — a <strong>temporary</strong> stock
      category, not permanent stock.
     </div>
     <div className="callout red">
      ⚠️
      <strong>No inventory accounting document is generated at PGR</strong>
      — precisely because Return Stock is temporary; the system doesn't yet
      know what will ultimately happen to this stock.
     </div>
     <div className="stepper">
      <div className="step">
       After PGR, a quality/inspection team
       <strong>cross-checks the returned goods</strong>.
      </div>
      <div className="step">
       The team decides where the stock should move next:
       <strong>Block Stock</strong>,
       <strong>Quality Inspection Stock</strong>, or
       <strong>Unrestricted Stock</strong>
       (reusable if no problem is found).
      </div>
      <div className="step">
       Only when the stock is <strong>moved out of Return Stock</strong>
       into one of these categories does the
       <strong>Inventory Accounting Document actually generate</strong>.
      </div>
     </div>
     <p className="note-text">
      📌 So across the full Return cycle: Return Order → Return Delivery →
      PGR (stock enters temporary Return Stock, no accounting document yet)
      → Return Invoice (generates the reversed revenue accounting entry) —
      with the
      <strong>inventory-side accounting document</strong> only firing
      separately, whenever the return stock is later reclassified out of
      Return Stock.
     </p>
    </div>

    {/* <!-- Section 9: Third-Party Returns --> */}
    <div className="card pink">
     <h2>
      <span className="badge">9</span> Return Process — Third-Party Scenario
     </h2>
     <div className="callout pink">
      💡 <strong>Q&amp;A raised in class:</strong> in a Third-Party process
      (where the vendor ships directly to the customer), who physically
      takes the goods back on a return — the vendor, or the company?
     </div>
     <div className="callout blue">
      🔗 <strong>Answer:</strong> even though the vendor originally shipped
      the goods directly to the customer, the
      <strong>company's own employee takes responsibility</strong>
      for the return — physically moving the returned goods from the
      customer's location <strong>back to the vendor</strong>, rather than
      the vendor collecting it directly.
     </div>
    </div>

    {/* <!-- Section 10: Key Nuance --> */}
    <div className="card brown">
     <h2>
      <span className="badge">📌</span> Key Nuance — Invoice Reference Point
      Differs by Process
     </h2>
     <div className="callout brown">
      💡 In the <strong>Standard Process</strong>, Invoice is created with
      reference to <strong>Delivery</strong>. But in
      <strong>Cash Sale</strong> and <strong>Return</strong>
      processes, the Invoice is instead created with reference to the
      <strong>Order</strong> (Cash Sale Invoice ← Cash Sale Order; Return
      Invoice ← Return Order).
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
        <td>Why isn't Cash Sale relevant for Credit Management?</td>
        <td>
         Because it's a counter-sale process — payment is made
         immediately in cash, so there's no credit exposure to manage
        </td>
       </tr>
       <tr>
        <td>Does Cash Sale support Partial Delivery? Why or why not?</td>
        <td>
         No — a counter sale is completed in a single transaction, so
         partial delivery doesn't apply, unlike a normal Rush/Standard
         order
        </td>
       </tr>
       <tr>
        <td>What item category is used for Cash Sale?</td>
        <td>BVN</td>
       </tr>
       <tr>
        <td>
         What account groups are used to create a one-time customer, and
         what's the difference?
        </td>
        <td>
         CPD (numeric customer number) or CPDA (alphanumeric customer
         number)
        </td>
       </tr>
       <tr>
        <td>
         What happens if a sales order is created without a customer PO
         number?
        </td>
        <td>
         By default the document stays incomplete; if a customer
         genuinely doesn't provide a PO, a separate document type with
         the PO-number requirement unchecked (via VOV8 configuration) is
         used instead
        </td>
       </tr>
       <tr>
        <td>What are the four common reasons for a customer return?</td>
        <td>
         Damaged goods, defective goods, expired goods, and over-delivery
        </td>
       </tr>
       <tr>
        <td>What does a Return Note consist of?</td>
        <td>
         Invoice number, invoice date, customer number,
         item/material/quantity, reason for return, batch number,
         customer signature, and employee signature
        </td>
       </tr>
       <tr>
        <td>What are the four steps of the Return Process?</td>
        <td>
         1) Create Return Order with reference to the invoice (with a
         billing block); 2) Return Delivery + PGR; 3) Remove the billing
         block; 4) Create Return Invoice
        </td>
       </tr>
       <tr>
        <td>What is PGR?</td>
        <td>
         Post Goods Receipt — receiving the returned goods back into the
         plant during the Return Delivery step
        </td>
       </tr>
       <tr>
        <td>What is the accounting entry for a Return Invoice?</td>
        <td>
         Revenue Account Debit to Customer Account Credit — the reverse
         of a normal invoice's entry
        </td>
       </tr>
       <tr>
        <td>
         Why doesn't PGR generate an inventory accounting document
         immediately?
        </td>
        <td>
         Because the goods first go into Return Stock, which is temporary
         — the system doesn't yet know their final disposition; the
         accounting document only generates once stock moves out of
         Return Stock into Block Stock, Quality Inspection Stock, or
         Unrestricted Stock
        </td>
       </tr>
       <tr>
        <td>
         Who physically returns goods to the vendor in a Third-Party
         return scenario?
        </td>
        <td>The company's own employee — not the vendor directly</td>
       </tr>
       <tr>
        <td>
         How does the invoice reference point differ between Standard
         Process and Cash Sale/Return processes?
        </td>
        <td>
         Standard Process invoices reference the Delivery; Cash Sale and
         Return invoices instead reference the Order
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
        <td><span className="tcode">XD01</span></td>
        <td>
         Create Customer — used here with account group CPD/CPDA for a
         one-time customer
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used for Cash Sale (CS) order creation
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VK11</span></td>
        <td>
         Maintain condition records (PR00) — fixes a missing price during
         Cash Sale order creation
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA02</span></td>
        <td>
         Change Sales Order — used to preview/reissue output (bill copy)
         via Sales Document → Issue Output To
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VF01</span></td>
        <td>Create Billing Document — used for the Cash Sale Invoice</td>
       </tr>
       <tr>
        <td><span className="tcode">VOV8</span></td>
        <td>
         Define Sales Document Types — where the PO-number-required
         control lives
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
        <td>Cash Sale order type</td>
        <td>CS</td>
       </tr>
       <tr>
        <td>Cash Sale item category</td>
        <td>BVN</td>
       </tr>
       <tr>
        <td>One-time customer account groups</td>
        <td>CPD (numeric), CPDA (alphanumeric)</td>
       </tr>
       <tr>
        <td>Cash Sale output type example</td>
        <td>RD03 (Cash Sale Invoice output, previewed via VA02)</td>
       </tr>
       <tr>
        <td>Return worked example</td>
        <td>
         Original: Item 10, WAXY10205, Qty 100, ₹3,00,000; Return: 60
         units damaged, ₹1,80,000
        </td>
       </tr>
       <tr>
        <td>Return stock destinations (post cross-check)</td>
        <td>
         Block Stock, Quality Inspection Stock, or Unrestricted Stock
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture practiced the
      <strong>Cash Sale process</strong> end-to-end using a
      <strong>one-time customer</strong> (account group CPD/CPDA via XD01),
      including fixing a missing PR00 condition record via VK11 and
      previewing the bill output via VA02 → Sales Document → Issue Output
      To. A student Q&amp;A clarified the real differences between Cash Sale
      and Rush Order: Cash Sale is not relevant for Credit Management and
      doesn't support Partial Delivery (both because it's a counter-sale
      process), controlled via item category BVN. The lecture also clarified
      that a missing customer PO number leaves an order incomplete by
      default, though a separate document type can be configured to make PO
      number optional. The bulk of the lecture then covered the
      <strong>Return Process</strong>: the four common reasons for return
      (damaged, defective, expired, over-delivery), the contents of the
      physical <strong>Return Note</strong>, and the four-step flow — Return
      Order (with billing block) → Return Delivery + PGR → removing the
      billing block → Return Invoice (reversed accounting entry: Revenue
      debit, Customer credit). A key nuance was highlighted: PGR moves stock
      into temporary <strong>Return Stock</strong>
      without generating an inventory accounting document; that document
      only fires once a quality team decides to move the stock into Block
      Stock, Quality Inspection Stock, or Unrestricted Stock. The lecture
      closed with a Q&amp;A on third-party returns (the company's own
      employee handles the physical return to the vendor) and the broader
      nuance that Cash Sale and Return invoices reference the Order, not the
      Delivery, unlike the Standard Process.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Cash Sale ≠ Rush Order</strong> despite sharing Shipping
       Condition 10 — the real distinctions (no credit, no partial
       delivery) trace back to Cash Sale simply being a counter-sale
       process, and are enforced via item category BVN
      </li>
      <li>
       <strong>One-time customers use account group CPD/CPDA</strong>, not
       a standard account group — and require full name/address/ contact
       details to be entered at order time rather than upfront in Customer
       Master
      </li>
      <li>
       <strong>PO number is required by default</strong> — treat its
       absence as the 1% exception needing separate configuration, not the
       norm
      </li>
      <li>
       <strong>Return Stock is temporary and accounting-silent</strong>
       at PGR — the real inventory accounting event happens later, when the
       quality team's decision moves stock out of Return Stock
      </li>
      <li>
       <strong
       >Cash Sale and Return invoices both reference the Order, not the
        Delivery</strong
       >
       — a pattern worth contrasting directly against the Standard Process
       for interviews
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> continuing with the remaining
      Order-to-Cash sub-processes.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 43 Notes — Cash Sale in System, One-Time Customers &amp; Return
    Process 🎓
   </p>
  </div>
 );
};

export default Business43;
