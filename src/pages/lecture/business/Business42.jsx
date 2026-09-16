const Business42 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-green">
    <h1>
     📦 Lecture 42 — Delivery, Invoice Background Activities &amp; Rush Order
     / Cash Sale Processes
    </h1>
    <p>
     SAP SD | The physical Picking-Packing-PGI flow, everything that happens
     behind PGI and Invoice, split criteria for combining documents,
     delivery/billing tables, and two special processes: Rush Order and Cash
     Sale
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered the Sales Order stage of the Standard Sales
      Process and previewed Delivery's three activities. Today completes
      that picture — the physical Picking/Packing/PGI flow, everything the
      system does behind PGI and Invoice, the split criteria that decide
      whether two orders can share one delivery (or two deliveries one
      invoice), the delivery/billing tables, and two special order types:
      <strong>Rush Order</strong> and <strong>Cash Sale</strong>.
     </div>
    </div>

    {/* <!-- Section 1: Delivery — Picking, Packing, PGI (Physical Flow) --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Delivery — Picking, Packing &amp; PGI
      (The Physical Flow)
     </h2>
     <div className="callout teal">
      💡 Delivery consists of three activities:
      <strong>Picking, Packing, and PGI</strong> (Post Goods Issue).
     </div>
     <div className="stepper">
      <div className="step">
       Creating the Delivery generates a
       <strong>Picking List printout</strong>, handed to the employees
       responsible for picking.
      </div>
      <div className="step">
       Employees
       <strong>pick the goods from the storage location</strong> and send
       them to the <strong>Packing department</strong>.
      </div>
      <div className="step">
       The Packing department <strong>packs the goods</strong> and sends
       them to the <strong>Shipping Point</strong>.
      </div>
      <div className="step">
       At the Shipping Point, the goods are
       <strong>loaded</strong> onto the vehicle.
      </div>
      <div className="step">
       After loading, <strong>PGI (Post Goods Issue)</strong> is done.
      </div>
      <div className="step">
       After PGI, the <strong>delivery challan copy</strong> is handed to
       the truck driver.
      </div>
      <div className="step">
       The <strong>Invoice is created</strong>, and the invoice copy
       printout is also handed to the truck driver.
      </div>
      <div className="step">
       The truck then <strong>leaves the plant premises</strong>.
      </div>
     </div>
    </div>

    {/* <!-- Section 2: PGI Background Activities --> */}
    <div className="card orange">
     <h2><span className="badge">2</span> PGI — Background Activities</h2>
     <div className="callout orange">
      💡 When PGI is posted, the system performs several activities in the
      background.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Activity</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Stock Updates</td>
       </tr>
       <tr>
        <td>2</td>
        <td>
         Inventory Accounting Document generated — entry: Cost of Goods
         Sold Account Debit → Inventory Account Credit
        </td>
       </tr>
       <tr>
        <td>3</td>
        <td>Updates Document Flow</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Updates Credit Management</td>
       </tr>
       <tr>
        <td>5</td>
        <td>Updates LIS (Logistics Information System)</td>
       </tr>
       <tr>
        <td>6</td>
        <td>Updates Billing Due List</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 3: Invoice Background Activities --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Invoice Creation — Background
      Activities
     </h2>
     <div className="callout purple">
      💡 Creating an Invoice similarly triggers several background
      activities.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Activity</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>
         Revenue Accounting Document generated — entry: Customer Account
         Debit → Revenue Account Credit
        </td>
       </tr>
       <tr>
        <td>2</td>
        <td>Controlling Document generated</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Profitability Analysis Document generated</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Updates Document Flow</td>
       </tr>
       <tr>
        <td>5</td>
        <td>Updates LIS</td>
       </tr>
       <tr>
        <td>6</td>
        <td>Updates Credit Management</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 4: Split Criteria for Delivery --> */}
    <div className="card red">
     <h2><span className="badge">4</span> Split Criteria — Delivery</h2>
     <div className="callout red">
      💡 <strong>Split Criteria</strong> = the set of fields that, if they
      differ between two orders (even for the same customer), the system
      <strong>cannot combine those orders into a single delivery</strong> —
      it splits them into separate deliveries instead.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Split Criteria Field (Delivery)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Shipping Point</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Ship-to Party</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Incoterms</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Delivery Date</td>
       </tr>
       <tr>
        <td>5</td>
        <td>Route</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> two orders for the same customer
      (100551) — Order 1 has Incoterms <code>CIF</code>, Order 2 has
      Incoterms <code>FOB</code>. Even though the customer matches, the
      system will <strong>not combine</strong> these into one delivery — it
      splits them into two separate deliveries because Incoterms differ.
     </div>
    </div>

    {/* <!-- Section 5: Split Criteria for Invoice --> */}
    <div className="card gold">
     <h2><span className="badge">5</span> Split Criteria — Invoice</h2>
     <div className="callout gold">
      💡 Similarly, two deliveries for the same customer can only be
      combined into a <strong>single invoice</strong> if certain fields
      match.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Split Criteria Field (Invoice)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Terms of Payment</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Billing Date</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 6: Delivery & Billing Tables --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">6</span> Delivery &amp; Billing Document
      Tables
     </h2>
     <div className="callout indigo">
      💡 Like the sales document tables covered earlier (VBAK header, VBAP
      item, VBEP schedule line), Delivery and Billing documents each have
      their own header and item tables.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document</th>
        <th>Header Table</th>
        <th>Item Table</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Delivery</td>
        <td>LIKP</td>
        <td>LIPS</td>
       </tr>
       <tr>
        <td>Billing (Invoice)</td>
        <td>VBRK</td>
        <td>VBRP</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📌 <strong>Transcription correction:</strong> the audio named "LIPS"
      for both the delivery header and item table — the standard SAP table
      names are <strong>LIKP</strong> (delivery header) and
      <strong>LIPS</strong> (delivery item); the table above reflects the
      corrected pairing.
     </div>
    </div>

    {/* <!-- Section 7: Rush Order Process --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">7</span> Rush Order Process (Immediate
      Delivery Order)
     </h2>
     <div className="callout cyan">
      💡 <strong>Rush Order</strong> = used when the customer needs
      <strong>immediate delivery</strong>. Document type
      <span className="tcode">RO</span>.
     </div>
     <div className="callout blue">
      🔗
      <strong>Two automatic determinations on a Rush Order:</strong>
      Shipping Condition is automatically set to <code>10</code>
      (Immediate) — instead of the customer's normal default (usually 01) —
      and the system determines the
      <strong>Immediate Shipping Point</strong> (e.g., P103).
     </div>
     <h3>Process Steps</h3>
     <div className="stepper">
      <div className="step">
       Create Rush Order (<span className="tcode">VA01</span>, order type
       <code>RO</code>) → customer, PO number, material, quantity → Save.
       Header → Shipping shows Shipping Condition <code>10</code>; Item →
       Shipping shows the Immediate Shipping Point (e.g.,
       <code>P103</code>).
      </div>
      <div className="step">
       On save, the system
       <strong>automatically creates the Delivery</strong> — confirmed by
       the message "Rush order has been saved, delivery created."
      </div>
      <div className="step">
       Go to <span className="tcode">VL02N</span> (Change Delivery) →
       perform <strong>Picking</strong> and <strong>PGI</strong> manually.
      </div>
      <div className="step">
       Create the <strong>Invoice</strong> as usual.
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Recurring monthly error during PGI:</strong>
      <em>"Posting only possible in periods..."</em> — fixed via T-code
      <span className="tcode">MMPV</span> (mention Company Code and today's
      date → Execute). This has to be repeated
      <strong>every month</strong> to open the new posting period for stock
      movements — it is an <strong>MM-team responsibility</strong>.
     </div>
     <p className="note-text">
      📌 Reminder: to post PGI across multiple deliveries at once, use the
      collective PGI T-code <span className="tcode">VL06G</span>
      (covered earlier).
     </p>
    </div>

    {/* <!-- Section 8: Cash Sale Process --> */}
    <div className="card green">
     <h2><span className="badge">8</span> Cash Sale Process</h2>
     <div className="callout green">
      💡 <strong>Cash Sale</strong> is a
      <strong>counter-sale process</strong>: the customer walks into an
      outlet, picks the goods, goes to the counter, pays cash, takes the
      bill, and leaves the counter with the goods immediately.
     </div>
     <div className="callout blue">
      🔗 <strong>Applicability:</strong> only relevant if the client has its
      own retail <strong>outlets</strong> — Cash Sale only exists as a
      process where physical over-the-counter sales happen.
     </div>
     <h3>Process Steps</h3>
     <div className="stepper">
      <div className="step">
       Create the <strong>Cash Sale Order</strong> — typically with a
       one-time customer. Same as Rush Order: Shipping Condition
       <code>10</code>, Immediate Shipping Point (e.g., <code>P103</code>).
      </div>
      <div className="step">
       On save, the system generates
       <strong>Automatic Delivery</strong> and immediately prints the
       <strong>bill/invoice copy</strong> — the customer takes this
       printout with them right away.
      </div>
      <div className="step">
       Go to Change Mode of Delivery (<span className="tcode">VL02N</span>)
       → perform <strong>PGI</strong>.
      </div>
      <div className="step">
       Create the <strong>Cash Sale Invoice</strong> in the system
       afterward — this is when the values actually update in G/L
       Accounting.
      </div>
     </div>
     <div className="callout gold">
      📖 <strong>Cash Sale Invoice accounting entry:</strong> Cash/
      Settlement Account Debit → Revenue Account Credit.
     </div>
     <p className="note-text">
      📌 The customer physically receives the bill copy right after the Cash
      Sale Order is saved — the formal Cash Sale Invoice (which updates
      accounting) is created afterward, separately, in the system.
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
        <td>What are the three activities within Delivery?</td>
        <td>Picking, Packing, and PGI (Post Goods Issue)</td>
       </tr>
       <tr>
        <td>What happens in the background when PGI is posted?</td>
        <td>
         Stock updates, inventory accounting document generation (COGS
         debit/Inventory credit), document flow update, credit management
         update, LIS update, and billing due list update
        </td>
       </tr>
       <tr>
        <td>
         What happens in the background when an Invoice is created?
        </td>
        <td>
         Revenue accounting document generation (Customer debit/Revenue
         credit), controlling document generation, profitability analysis
         document generation, document flow update, LIS update, and
         credit management update
        </td>
       </tr>
       <tr>
        <td>
         What is "split criteria," and what fields drive it for Delivery?
        </td>
        <td>
         Fields that, if they differ between two orders (even for the
         same customer), force the system to create separate deliveries
         instead of combining them: Shipping Point, Ship-to Party,
         Incoterms, Delivery Date, and Route
        </td>
       </tr>
       <tr>
        <td>What fields drive split criteria for Invoice?</td>
        <td>Terms of Payment and Billing Date</td>
       </tr>
       <tr>
        <td>
         What are the header and item tables for Delivery and Billing
         documents?
        </td>
        <td>
         Delivery: LIKP (header), LIPS (item); Billing: VBRK (header),
         VBRP (item)
        </td>
       </tr>
       <tr>
        <td>What is a Rush Order, and what document type is it?</td>
        <td>
         An order used when the customer needs immediate delivery;
         document type RO
        </td>
       </tr>
       <tr>
        <td>
         What two things does the system automatically determine on a
         Rush Order?
        </td>
        <td>
         Shipping Condition = 10 (Immediate) and the Immediate Shipping
         Point (e.g., P103)
        </td>
       </tr>
       <tr>
        <td>What happens automatically when a Rush Order is saved?</td>
        <td>
         The Delivery is automatically created — confirmed by an
         on-screen message
        </td>
       </tr>
       <tr>
        <td>
         What causes the recurring "Posting only possible in periods..."
         error, and how is it fixed?
        </td>
        <td>
         The current posting period hasn't been opened for the month;
         fixed via T-code MMPV (mention Company Code and today's date,
         Execute) — an MM-team responsibility repeated monthly
        </td>
       </tr>
       <tr>
        <td>
         What is the T-code for collective PGI across multiple
         deliveries?
        </td>
        <td>VL06G</td>
       </tr>
       <tr>
        <td>What is Cash Sale, and when is it relevant?</td>
        <td>
         A counter-sale process where a walk-in customer picks goods,
         pays at the counter, and leaves with the goods immediately; only
         relevant if the client operates its own retail outlets
        </td>
       </tr>
       <tr>
        <td>
         What is the accounting entry generated at Cash Sale Invoice
         creation?
        </td>
        <td>Cash/Settlement Account Debit to Revenue Account Credit</td>
       </tr>
       <tr>
        <td>
         When does the customer receive their bill in a Cash Sale, versus
         when accounting is actually updated?
        </td>
        <td>
         The bill/invoice copy prints and is handed to the customer
         immediately after the Cash Sale Order is saved; accounting only
         updates later when the Cash Sale Invoice is separately created
         in the system
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
         Create Sales Order — used here for Rush Order (RO) and Cash Sale
         orders
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VL02N</span></td>
        <td>
         Change Delivery — used to perform Picking and PGI manually for
         Rush Order / Cash Sale
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VL06G</span></td>
        <td>
         Collective PGI — post PGI across multiple deliveries at once
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MMPV</span></td>
        <td>
         Open/close posting periods (Materials Management) — fixes the
         recurring "Posting only possible in periods..." error
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
        <td>Split criteria — Delivery</td>
        <td>
         Shipping Point, Ship-to Party, Incoterms, Delivery Date, Route
        </td>
       </tr>
       <tr>
        <td>Split criteria — Invoice</td>
        <td>Terms of Payment, Billing Date</td>
       </tr>
       <tr>
        <td>Split criteria worked example</td>
        <td>
         Customer 100551 — Order 1 CIF, Order 2 FOB → deliveries split
         due to differing Incoterms
        </td>
       </tr>
       <tr>
        <td>Delivery/Billing table pairs</td>
        <td>LIKP/LIPS (Delivery), VBRK/VBRP (Billing)</td>
       </tr>
       <tr>
        <td>Rush Order example</td>
        <td>
         Document type RO, Customer 640, Plant P100, Shipping Condition
         10, Immediate Shipping Point P103
        </td>
       </tr>
       <tr>
        <td>MMPV fix</td>
        <td>
         Mention Company Code (e.g., P100) and today's date → Execute —
         repeat every month
        </td>
       </tr>
       <tr>
        <td>Cash Sale accounting entry</td>
        <td>Cash/Settlement Account Debit to Revenue Account Credit</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed the Delivery stage of the Standard Sales
      Process, walking through the physical
      <strong>Picking → Packing → PGI</strong> flow end-to-end (picking
      list, storage location, packing, shipping point loading, PGI, delivery
      challan, invoice, and truck departure), then detailed everything the
      system does in the background at <strong>PGI</strong> (stock update,
      inventory accounting document, document flow, credit management, LIS,
      billing due list) and at <strong>Invoice creation</strong> (revenue
      accounting document, controlling document, profitability analysis
      document, document flow, LIS, credit management). It covered
      <strong>split criteria</strong> — the fields (Shipping Point, Ship-to
      Party, Incoterms, Delivery Date, Route for Delivery; Terms of Payment
      and Billing Date for Invoice) that prevent two documents from being
      combined if they differ — and the
      <strong>Delivery/Billing tables</strong> (LIKP/LIPS, VBRK/VBRP). The
      lecture then covered two special order processes:
      <strong>Rush Order</strong> (immediate delivery, document type RO,
      auto-determined Shipping Condition 10 and Immediate Shipping Point,
      automatic delivery creation, manual PGI via VL02N — plus the recurring
      MMPV posting-period fix) and <strong>Cash Sale</strong> (counter-sale
      process for clients with retail outlets, one-time customer, automatic
      delivery with an immediate bill printout, manual PGI, and a separate
      Cash Sale Invoice step that finally updates G/L accounting).
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
       >PGI and Invoice each trigger roughly six background
        activities</strong
       >
       — useful to know as parallel checklists alongside the Sales Order's
       11 activities from Lecture 41
      </li>
      <li>
       <strong
       >Split criteria decide combinability, not eligibility</strong
       >
       — two orders for the same customer can still end up as separate
       deliveries if Shipping Point, Ship-to Party, Incoterms, Delivery
       Date, or Route differ
      </li>
      <li>
       <strong
       >Rush Order and Cash Sale share the same shipping
        signature</strong
       >
       — Shipping Condition 10 and an Immediate Shipping Point — but differ
       in who the customer is (regular vs. one-time) and what happens with
       the bill/invoice
      </li>
      <li>
       <strong>MMPV is a recurring, monthly MM-team task</strong> — expect
       the "posting only possible in periods" error every month until the
       new period is opened
      </li>
      <li>
       In Cash Sale,
       <strong
       >the bill the customer takes home isn't the same as the
        accounting-relevant Cash Sale Invoice</strong
       >
       — the latter is created separately, later, in the system
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> practicing the Rush Order and Cash
      Sale processes live in the system.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 42 Notes — Delivery, Invoice Background Activities &amp; Rush
    Order / Cash Sale Processes 🎓
   </p>
  </div>
 );
};

export default Business42;
