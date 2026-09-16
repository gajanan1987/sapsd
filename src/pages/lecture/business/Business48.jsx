const Business48 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-pink">
    <h1>
     🔄 Lecture 48 — Consignment Pickup Live, Custom Document Types &amp;
     Document Type Controls Preview
    </h1>
    <p>
     SAP SD | Completing the Consignment cycle (Fill-Up → Issue → Returns →
     Pickup) end-to-end in the system with full stock tracking, then creating
     custom Enquiry/Quotation/Order document types via VOV8 and previewing
     the 44 controls behind every sales document type
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered Consignment Returns conceptually but left one
      point pending — the accounting entry. Today closes that out, adds the
      fourth and final Consignment sub-process (<strong
      >Consignment Pickup</strong
      >), practices the
      <strong>entire Consignment cycle live in the system</strong> from
      material creation through to stock returning to Unrestricted Stock,
      and then opens a new topic: creating
      <strong>custom Sales Document Types</strong> via VOV8, with a preview
      of the 44 <strong>Document Type Controls</strong> to be covered
      starting next class.
     </div>
    </div>

    {/* <!-- Section 1: Consignment Returns Recap --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Consignment Returns — Closing the
      Pending Point
     </h2>
     <div className="callout teal">
      💡 <strong>Confirmed recap:</strong> at Return Delivery in Consignment
      Returns, an <strong>inventory accounting document generates</strong>,
      because the company is <strong>taking back ownership</strong> from the
      customer. Accounting entry:
      <strong
      >Inventory Account Debit → Cost of Goods Sold Account Credit</strong
      >.
     </div>
    </div>

    {/* <!-- Section 2: Consignment Pickup - Concept --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Consignment Process — Step 4:
      Consignment Pickup
     </h2>
     <div className="callout orange">
      💡 <strong>Consignment Pickup</strong> is used when the
      <strong>customer requests the company to take back</strong> the
      consignment goods still sitting unsold at their premises — this is
      different from Consignment Returns, which handles goods coming back
      from the customer's own end customer after a sale already happened.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Property</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
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
     <div className="callout gold">
      📖 <strong>Effect at Return Delivery:</strong> (1) stock is
      <strong>reduced from Consignment Stock</strong> (to <code>0</code> for
      that customer); (2) that same stock is
      <strong>added back to Unrestricted Stock</strong>. Since it's not
      relevant for pricing or billing, and ownership was never transferred
      to the customer in the first place,
      <strong>no inventory accounting document is generated</strong>.
     </div>
    </div>

    {/* <!-- Section 3: Full Cycle System Setup --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Full Consignment Cycle — System Setup
     </h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">MM01</span> → create a new material (copied
       from an existing pharmaceuticals material), e.g.
       <code>VACCINE9999</code>, for Sales Org/Distribution Channel
       <code>P100/P1</code>.
      </div>
      <div className="step">
       <span className="tcode">VK11</span> → condition type
       <code>PR00</code> → maintain the price for material
       <code>VACCINE9999</code>, e.g. <code>₹1,000</code>/unit.
      </div>
      <div className="step">
       Extend the material to the return storage location
       (<code>P105</code>), in addition to its main storage location.
      </div>
      <div className="step">
       Upload opening stock: <code>50,000</code> units at plant
       <code>P100</code>, storage location <code>P103</code>, with the date
       of production → verify via
       <span className="tcode">MMBE</span> (Stock Overview) → confirms
       <code>50,000</code> units.
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Gotcha encountered live:</strong> the Delivery initially
      showed <code>0</code> available quantity even though stock showed
      <code>50,000</code>, because a <strong>Safety Stock</strong> of
      <code>50,000</code> had also been maintained on the material master —
      safety stock is excluded from what's available for delivery. Removing
      the safety stock setting resolved it.
     </div>
    </div>

    {/* <!-- Section 4: Fill-Up System --> */}
    <div className="card red">
     <h2>
      <span className="badge">4</span> Consignment Fill-Up — System Steps
     </h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA01</span> → Order Type <code>CF</code> →
       mention Customer <code>100640</code>, PO number, Material, Quantity
       <code>10,000</code>. No pricing condition (PR00) appears here,
       confirming Fill-Up is not relevant for pricing → Save.
      </div>
      <div className="step">
       Create Delivery (storage location <code>P103</code>) → Picking →
       PGI.
      </div>
      <div className="step">
       <span className="tcode">MMBE</span> → confirms stock moved: Free/
       Unrestricted Stock <code>50,000 → 40,000</code>, Consignment Stock
       <code>0 → 10,000</code> (viewable <strong>per customer</strong> —
       with multiple consignment customers, each one's stock is tracked
       separately).
      </div>
      <div className="step">
       Document Flow → Goods Issue → Display Document → Accounting
       Documents confirms:
       <em>"Material document does not include an accounting document"</em>
       — exactly as expected for Fill-Up.
      </div>
     </div>
    </div>

    {/* <!-- Section 5: Issue System --> */}
    <div className="card gold">
     <h2>
      <span className="badge">5</span> Consignment Issue — System Steps
     </h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA01</span> → Order Type <code>CI</code> →
       mention Customer, PO number, Material, Quantity
       <code>4,000</code> (the amount the customer reported selling
       onward). This time
       <strong>Conditions tab shows real pricing</strong>, confirming
       Consignment Issue is relevant for pricing → Save.
      </div>
      <div className="step">
       Create Delivery: <strong>Pick Quantity shows 0</strong>, because the
       physical goods were already delivered to the customer's premises
       during Fill-Up — this delivery is a
       <strong>paper transaction</strong>, not a new physical shipment.
      </div>
     </div>
     <div className="callout red">
      ⚠️
      <strong
      >Class Q&amp;A — why create a Delivery at all if nothing is
       physically shipped?</strong
      >
      Two reasons: (1) to formally
      <strong>reduce the stock from Consignment Stock</strong>; (2) to
      <strong>transfer ownership to the customer</strong> for that quantity.
      Both effects require a Delivery + PGI in the system, even though no
      truck actually leaves the plant this time.
     </div>
     <div className="stepper">
      <div className="step">
       Post <strong>PGI</strong> → <span className="tcode">MMBE</span>
       confirms Consignment Stock reduces:
       <code>10,000 → 6,000</code>.
      </div>
      <div className="step">
       Document Flow → Accounting Document confirms an
       <strong>inventory accounting document is generated</strong> this
       time, since ownership has genuinely transferred.
      </div>
      <div className="step">
       Create <strong>Invoice</strong> — relevant for billing → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 6: Returns System --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">6</span> Consignment Returns — System Steps
     </h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA01</span> → Order Type <code>CR</code> →
       mention Customer, Material, Quantity <code>500</code>, and an Order
       Reason (e.g., Damage) → Save (Billing Block auto-applied, exactly
       like a standard Return).
      </div>
      <div className="step">
       <span className="tcode">VL01N</span> → Return Delivery, storage
       location <code>P105</code> — a
       <strong
       >separate storage location from the main consignment stock's
        P103</strong
       >, used specifically to keep
       <strong>damaged returned goods</strong> distinguishable from good
       stock.
      </div>
      <div className="step">
       Post <strong>PGR</strong> → <span className="tcode">MMBE</span>
       confirms Consignment Stock is added back:
       <code>6,000 → 6,500</code>.
      </div>
     </div>
     <div className="callout red">
      ⚠️ Attempting to create the Return Invoice directly fails with an
      "incorrect document" message. Checking
      <strong>Edit → Log</strong> reveals:
      <em>"The document is blocked for billing."</em> Fix: go to
      <span className="tcode">VA02</span> → remove the Billing Block → Save
      → then create the <strong>Return Invoice</strong> (<span
       className="tcode"
      >VF01</span
      >) → Save.
     </div>
    </div>

    {/* <!-- Section 7: Pickup System --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">7</span> Consignment Pickup — System Steps
     </h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA01</span> → Order Type <code>CP</code> →
       mention Customer, Material. Because the <code>6,500</code> units are
       split across two storage locations, the order needs
       <strong>two line items</strong>: Line 1 — <code>6,000</code> units,
       Shipping tab storage location <code>P103</code>; Line 2 —
       <code>500</code> units (the previously damaged/returned quantity),
       Shipping tab storage location <code>P105</code> → Save.
      </div>
      <div className="step">
       <span className="tcode">VL01N</span> → the storage locations copy in
       automatically from the order → Post <strong>PGR</strong>.
      </div>
      <div className="step">
       <span className="tcode">MMBE</span> → confirms Consignment Stock for
       this customer is now <code>0</code>, and Unrestricted Stock has
       increased to <code>46,500</code> (<code>40,000 + 6,500</code>
       picked back up).
      </div>
     </div>
    </div>

    {/* <!-- Section 8: Full Stock Ledger --> */}
    <div className="card brown">
     <h2>
      <span className="badge">📌</span> Full Consignment Cycle — Stock
      Ledger
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Stage</th>
        <th>Unrestricted Stock</th>
        <th>Consignment Stock (Customer)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Starting point</td>
        <td>50,000</td>
        <td>0</td>
       </tr>
       <tr>
        <td>After Consignment Fill-Up (10,000 units)</td>
        <td>40,000</td>
        <td>10,000</td>
       </tr>
       <tr>
        <td>After Consignment Issue (4,000 units sold onward)</td>
        <td>40,000</td>
        <td>6,000</td>
       </tr>
       <tr>
        <td>After Consignment Returns (500 units returned)</td>
        <td>40,000</td>
        <td>6,500</td>
       </tr>
       <tr>
        <td>After Consignment Pickup (remaining 6,500 taken back)</td>
        <td>46,500</td>
        <td>0</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 9: Custom Document Types --> */}
    <div className="card green">
     <h2>
      <span className="badge">8</span> Creating Custom Sales Document Types
      — VOV8
     </h2>
     <div className="callout green">
      💡 <strong>Sales Document Type Controls</strong> — the configuration
      that governs every standard sales document type (Enquiry, Quotation,
      Order, etc.) — live at T-code <span className="tcode">VOV8</span>.
      Path:
      <code
      >SPRO → Sales and Distribution → Sales → Sales Documents → Sales
       Document Header → Define Sales Document Types</code
      >.
     </div>
     <div className="stepper">
      <div className="step">
       To create a custom document type, select the standard type to copy
       from (e.g., Enquiry <code>IN</code>) → click
       <strong>Copy As</strong> → change the ID to a custom code (e.g.,
       <code>PPIN</code>) → give it a description → press Enter.
      </div>
      <div className="step">
       The system prompts:
       <em>"Is this entry also relevant for copy control?"</em> — click
       <strong>Yes</strong>. This step is required every time a new
       document type is copied, or its copy-control relationships to other
       document types won't carry over correctly.
      </div>
      <div className="step">
       Repeat the same Copy As + "Yes" sequence for Quotation (<code
       >QT → PPQT</code
       >) and Order (<code>OR → PPOR</code>) → Save.
      </div>
     </div>
     <p className="note-text">
      📌 Creating custom document types this way is how a client's own
      naming convention (here, a "PP" prefix) gets layered onto SAP's
      standard document type behavior without altering the standard types
      themselves.
     </p>
    </div>

    {/* <!-- Section 10: Custom Document Type Cycle --> */}
    <div className="card pink">
     <h2>
      <span className="badge">9</span> Running the Full Cycle on Custom
      Document Types
     </h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA11</span> → Enquiry type
       <code>PPIN</code> → mention Customer, Material, Quantity
       (<code>100</code>) → Save.
      </div>
      <div className="step">
       <span className="tcode">VA21</span> → Quotation type
       <code>PPQT</code> → Create with Reference to the
       <code>PPIN</code> enquiry → Copy → mention Valid From/To → Save.
      </div>
      <div className="step">
       <span className="tcode">VA01</span> → Order type <code>PPOR</code> →
       Create with Reference to the <code>PPQT</code> quotation → Copy →
       mention PO number → Save.
      </div>
      <div className="step">
       Create Delivery → PGI → create Invoice → Save — the full standard
       sales cycle, running end-to-end entirely on the newly created custom
       document types.
      </div>
     </div>
    </div>

    {/* <!-- Section 11: Document Type Controls Preview --> */}
    <div className="card slate">
     <h2>
      <span className="badge">🔜</span> Coming Up — Document Type Controls
      &amp; Header Data
     </h2>
     <div className="callout slate">
      💡 Opening <span className="tcode">VOV8</span> and drilling into a
      document type's <strong>Details</strong> reveals
      <strong>44 individual controls</strong> that govern how that document
      type behaves — these are called
      <strong>Document Type Controls</strong>, and full coverage begins next
      class.
     </div>
     <div className="callout blue">
      🔗 <strong>Reconnecting to the Sales Document structure:</strong>
      <strong>Header Data</strong> (the topmost level of a sales document)
      is <strong>controlled by the Sales Document Type</strong>, drawing its
      data from the Customer Master plus parts of configuration and control
      data, and is stored in table <strong>VBAK</strong>. In an order,
      clicking the header icon opens Header Data; double-clicking a line
      item opens Item Data; and the <strong>Schedule Lines</strong> tab
      within Item Data opens Schedule Line Data.
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
         What is Consignment Pickup, and how is it different from
         Consignment Returns?
        </td>
        <td>
         Used when the customer asks the company to take back unsold
         consignment goods still at their premises; Consignment Returns
         instead handles goods coming back after the customer already
         sold and their own end customer returned them
        </td>
       </tr>
       <tr>
        <td>
         What happens to stock and accounting at Consignment Pickup?
        </td>
        <td>
         Stock is reduced from Consignment Stock and added back to
         Unrestricted Stock; no inventory accounting document is
         generated, since Pickup is not relevant for pricing/billing and
         ownership was never transferred
        </td>
       </tr>
       <tr>
        <td>
         Why does a Delivery still need to be created for Consignment
         Issue if the goods were already physically shipped during
         Fill-Up?
        </td>
        <td>
         Two reasons: to formally reduce the quantity from Consignment
         Stock, and to transfer ownership of that quantity to the
         customer — both require a system Delivery/PGI even without any
         new physical shipment
        </td>
       </tr>
       <tr>
        <td>
         What caused the Delivery to show zero available quantity during
         the Fill-Up demo, and how was it fixed?
        </td>
        <td>
         A Safety Stock quantity equal to the entire stock had also been
         maintained on the material master, which is excluded from what's
         available for delivery; removing the safety stock setting
         resolved it
        </td>
       </tr>
       <tr>
        <td>
         Why does Consignment Returns use a different storage location
         (P105) than the main consignment stock (P103)?
        </td>
        <td>
         To keep damaged/returned goods distinguishable from good,
         sellable consignment stock
        </td>
       </tr>
       <tr>
        <td>
         What error appears if you try to create a Return Invoice before
         removing the billing block, and how do you diagnose it?
        </td>
        <td>
         An "incorrect document" message appears; checking Edit → Log
         reveals "The document is blocked for billing" — the fix is to
         remove the billing block via VA02 before creating the invoice
        </td>
       </tr>
       <tr>
        <td>
         Why did the Consignment Pickup order need two line items in the
         worked example?
        </td>
        <td>
         Because the 6,500 units to be picked up were split across two
         storage locations (6,000 at P103, 500 at P105 from the earlier
         damaged return) — each storage location needs its own line item
        </td>
       </tr>
       <tr>
        <td>
         What T-code is used to define and configure Sales Document
         Types, and what is the SPRO path?
        </td>
        <td>
         VOV8; path SPRO → Sales and Distribution → Sales → Sales
         Documents → Sales Document Header → Define Sales Document Types
        </td>
       </tr>
       <tr>
        <td>
         What must you click when copying a document type to create a
         custom one, and why does it matter?
        </td>
        <td>
         Click "Yes" when prompted "Is this entry also relevant for copy
         control?" — skipping this means the new document type's
         copy-control relationships to other document types won't be set
         up correctly
        </td>
       </tr>
       <tr>
        <td>
         What table stores Sales Document Header data, and what controls
         it?
        </td>
        <td>
         Table VBAK; header data is controlled by the Sales Document Type
         and sourced from the Customer Master plus parts of configuration
         and control data
        </td>
       </tr>
       <tr>
        <td>
         How many individual controls exist within a sales document
         type's configuration?
        </td>
        <td>
         44 — collectively referred to as Document Type Controls, to be
         covered starting next class
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
        <td><span className="tcode">MM01</span></td>
        <td>
         Create Material — used to create the consignment demo material
         by copying an existing one
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VK11</span></td>
        <td>
         Maintain Condition Records (PR00) — sets the price for the
         consignment material
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MMBE</span></td>
        <td>
         Stock Overview — used throughout to verify Unrestricted Stock
         and Consignment Stock at every stage
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used for Consignment Fill-Up (CF), Issue
         (CI), Returns (CR), Pickup (CP), and for the custom Order type
         (PPOR)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VL01N</span></td>
        <td>
         Create Delivery — used for all Consignment deliveries and return
         deliveries
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA02</span></td>
        <td>
         Change Sales Order — used to remove the Billing Block before
         creating the Consignment Return Invoice
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VF01</span></td>
        <td>
         Create Billing Document — used for the Consignment Issue Invoice
         and Consignment Return Invoice
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV8</span></td>
        <td>
         Define Sales Document Types — used to create custom document
         types (PPIN, PPQT, PPOR) and houses the 44 Document Type
         Controls
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA11 / VA21</span></td>
        <td>
         Create Enquiry / Create Quotation — used with the custom PPIN
         and PPQT document types
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
        <td>Consignment document types (as demonstrated)</td>
        <td>Fill-Up = CF, Issue = CI, Returns = CR, Pickup = CP</td>
       </tr>
       <tr>
        <td>Consignment material demo</td>
        <td>
         VACCINE9999, price ₹1,000/unit (PR00 via VK11), storage
         locations P103 (main) and P105 (returns/damaged)
        </td>
       </tr>
       <tr>
        <td>Full stock ledger</td>
        <td>
         50,000 → Fill-Up 10,000 → Issue 4,000 → Returns +500 → Pickup
         6,500 → final Unrestricted Stock 46,500
        </td>
       </tr>
       <tr>
        <td>Custom document types created</td>
        <td>
         Enquiry PPIN (from IN), Quotation PPQT (from QT), Order PPOR
         (from OR) — all via VOV8 Copy As, each confirmed "relevant for
         copy control"
        </td>
       </tr>
       <tr>
        <td>Header Data table</td>
        <td>
         VBAK — controlled by Sales Document Type, sourced from Customer
         Master plus configuration/control data
        </td>
       </tr>
       <tr>
        <td>Document Type Controls count</td>
        <td>
         44 controls, accessible via VOV8 → document type → Details
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture closed out the pending accounting-entry point on
      Consignment Returns, then introduced
      <strong>Consignment Pickup</strong> (not relevant for pricing or
      billing; stock moves from Consignment Stock back to Unrestricted Stock
      with no accounting document, since ownership was never transferred).
      The class then ran the
      <strong>entire Consignment cycle live in the system</strong> —
      material setup (MM01, VK11 pricing, storage location extension,
      opening stock, and a safety-stock troubleshooting gotcha), Consignment
      Fill-Up (10,000 units, no pricing/billing, no accounting document),
      Consignment Issue (4,000 units, with pricing and billing, an inventory
      accounting document, and a key Q&amp;A on why a "paper" delivery is
      still required to transfer ownership), Consignment Returns (500 units,
      using a separate P105 storage location for damaged stock, and the
      billing-block error when trying to invoice before removing it), and
      Consignment Pickup (splitting the pickup order across two storage
      locations to reflect the earlier partial return), ending with a
      complete stock ledger from 50,000 down through the cycle and back up
      to 46,500. The lecture then opened a new topic: creating
      <strong>custom Sales Document Types</strong> via VOV8 (Copy As, always
      confirming "relevant for copy control"), demonstrated end to end with
      custom Enquiry/Quotation/Order types (PPIN/PPQT/PPOR), and closed with
      a preview of the <strong>44 Document Type Controls</strong> and a
      reminder that Header Data — controlled by the sales document type and
      sourced from the Customer Master and configuration data — lives in
      table VBAK.
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
       >Consignment Issue's delivery is about ownership, not
        logistics</strong
       >
       — Pick Quantity showing zero is expected and correct, since the
       physical movement already happened at Fill-Up
      </li>
      <li>
       <strong>Safety stock quietly blocks deliveries</strong> — always
       check it first if available quantity looks wrong despite correct
       stock figures
      </li>
      <li>
       <strong
       >Separate storage locations track condition, not just
        location</strong
       >
       — P105 in this example exists purely to keep damaged consignment
       stock distinguishable from good stock
      </li>
      <li>
       <strong>"Relevant for copy control" is a required checkbox</strong>
       every time a custom document type is created by copying an existing
       one — skipping it breaks the reference chain between document types
      </li>
      <li>
       <strong>Header Data → VBAK is worth memorizing cold</strong> — it's
       the anchor point for understanding the 44 Document Type Controls
       starting next class
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> starting the 44 Document Type Controls
      in VOV8, one by one.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 48 Notes — Consignment Pickup Live, Custom Document Types &amp;
    Document Type Controls Preview 🎓
   </p>
  </div>
 );
};

export default Business48;
