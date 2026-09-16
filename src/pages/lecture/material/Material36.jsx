const Material21 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-brown">
    <h1>
     🧪 Lecture 36 — Customer Master Wrap-Up &amp; Fields in Material Master:
     Basic Data 1
    </h1>
    <p>
     SAP SD | Closing out Customer Master with Payment Guarantee, Account
     Assignment Group &amp; Tax Classification — then starting Material
     Master's Basic Data 1 tab
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered Terms of Payment in depth — Baseline Date
      calculation and Cash Discount (SKTO). Today closes out the remaining
      Customer Master fields (Payment Guarantee Procedure, Account
      Assignment Group, Tax Classification), then begins a new object:
      <strong>Fields in Material Master</strong>, starting with the Basic
      Data 1 tab.
     </div>
    </div>

    {/* <!-- Section 1: Payment Guarantee Procedure --> */}
    <div className="card teal">
     <h2>
      <span className="badge">50</span> Billing Documents Tab — Payment
      Guarantee Procedure
     </h2>
     <div className="callout teal">
      💡 If <strong>Payment Guarantee Procedure</strong> is maintained, the
      system will
      <strong
      >not allow a delivery to be created until a payment guarantee is
       received from the customer</strong
      >.
     </div>
     <div className="callout blue">
      📊 <strong>Example value:</strong> Payment Guarantee Procedure
      <code>0001</code> (Letter of Credit) — a common real-world scenario
      where a bank guarantees payment on the customer's behalf before goods
      are shipped.
     </div>
     <div className="callout gold">
      🔧 <strong>T-code to receive the Payment Guarantee:</strong>
      <span className="tcode">VKM3</span>.
     </div>
     <p className="note-text">
      📌 The overall behavior mirrors what was seen earlier with
      <strong>Relevant for POD</strong> (Lecture 32) — a specific
      confirmation has to be recorded in the system (there via VLPOD, here
      via VKM3) before the process is allowed to move to the next document.
     </p>
    </div>

    {/* <!-- Section 2: Account Assignment Group --> */}
    <div className="card orange">
     <h2>
      <span className="badge">51</span> Billing Documents Tab — Account
      Assignment Group
     </h2>
     <div className="callout orange">
      💡 <strong>Account Assignment Group</strong> is one of the parameters
      used to <strong>determine the Revenue G/L account</strong> while
      posting invoice values into Accounting.
     </div>
     <div className="callout blue">
      🔗 <strong>How it fits into invoice posting:</strong> when an invoice
      is created, the system generates an accounting document with the entry
      <strong>Customer Account Debit</strong> to
      <strong>Revenue Account Credit</strong>. The specific G/L account used
      for the <em>Revenue</em> side of that entry is determined partly by
      this field.
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
        <td>Domestic Revenues (for domestic customers)</td>
       </tr>
       <tr>
        <td>02</td>
        <td>Foreign Revenues (for foreign customers)</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 3: Tax Classification --> */}
    <div className="card purple">
     <h2>
      <span className="badge">52</span> Billing Documents Tab — Tax
      Classification
     </h2>
     <div className="callout purple">
      💡 <strong>Tax Classification</strong> controls whether the customer
      is <strong>liable for tax or not</strong>.
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
        <td>1</td>
        <td>Customer is liable for tax</td>
       </tr>
       <tr>
        <td>0</td>
        <td>Customer is not liable for tax</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📖 <strong>GST-specific display:</strong> on some systems, this field
      may instead show country-specific tax categories directly (e.g., IGST,
      CGST, SGST) rather than a generic 0/1 — but the underlying logic is
      the same: <code>0</code> or <code>1</code>
      against each relevant tax category. The detailed GST/tax configuration
      behind this will be covered later, after the Pricing topics.
     </div>
    </div>

    {/* <!-- Section 4: Transition heading --> */}
    <div className="card">
     <h2>
      <span className="badge">🔄</span> Starting a New Object — Fields in
      Material Master
     </h2>
     <div className="callout green">
      ✅ With Customer Master fields complete, the course now moves to
      <strong>Material Master</strong>, beginning with the
      <strong>Basic Data 1</strong> tab — demonstrated on a material such as
      <code>WAXY10205</code>, packaged in 500 mg bottles.
     </div>
    </div>

    {/* <!-- Section 5: Base Unit of Measure --> */}
    <div className="card red">
     <h2>
      <span className="badge">1</span> Basic Data 1 — Base Unit of Measure
     </h2>
     <div className="callout red">
      💡 <strong>Base Unit of Measure</strong> is the unit in which the
      material is <strong>manufactured and stored</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Unit</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>BT</td>
        <td>Bottle</td>
       </tr>
       <tr>
        <td>CAR</td>
        <td>Carton</td>
       </tr>
       <tr>
        <td>BOX</td>
        <td>Box</td>
       </tr>
       <tr>
        <td>BAG</td>
        <td>Bag</td>
       </tr>
       <tr>
        <td>EA</td>
        <td>Each</td>
       </tr>
       <tr>
        <td>PC</td>
        <td>Piece</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 6: Material Group --> */}
    <div className="card gold">
     <h2><span className="badge">2</span> Basic Data 1 — Material Group</h2>
     <div className="callout gold">
      💡 <strong>Material Group</strong> = grouping of materials that share
      the <strong>same attributes</strong>.
     </div>
    </div>

    {/* <!-- Section 7: Old Material Number --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">3</span> Basic Data 1 — Old Material Number
     </h2>
     <div className="callout indigo">
      💡 If the <strong>legacy</strong> (non-SAP) material number is
      different from the new SAP material number, the legacy number is
      maintained here for <strong>reference purposes</strong>.
     </div>
     <p className="note-text">
      📌 "Legacy" simply means the material numbering scheme used in
      whatever <strong>non-SAP</strong> system the company was using before
      this implementation.
     </p>
    </div>

    {/* <!-- Section 8: Division --> */}
    <div className="card cyan">
     <h2><span className="badge">4</span> Basic Data 1 — Division</h2>
     <div className="callout cyan">
      💡 If a <strong>Division</strong> is maintained here, the system
      automatically determines that division into the
      <strong>sales document line item</strong> for this material.
     </div>
     <div className="callout red">
      ⚠️ <strong>Connects back to Lecture 35's troubleshooting:</strong>
      a mismatch between this Division and the Sales Area's division is
      exactly what caused the earlier "external division not completed"
      error — reinforcing why this field has to be set correctly and
      consistently.
     </div>
    </div>

    {/* <!-- Section 9: Product Allocation --> */}
    <div className="card green">
     <h2>
      <span className="badge">5</span> Basic Data 1 — Product Allocation
     </h2>
     <div className="callout green">
      💡 <strong>Product Allocation</strong> = reserving stock for specific
      <strong>customers, customer groups, or distribution channels</strong>
      to meet a future requirement.
     </div>
    </div>

    {/* <!-- Section 10: X-Plant Material Status --> */}
    <div className="card pink">
     <h2>
      <span className="badge">6</span> Basic Data 1 — X-Plant (Cross-Plant)
      Material Status
     </h2>
     <div className="callout pink">
      💡 <strong>X-Plant Material Status</strong> is used to
      <strong>block the material across all plants</strong> at once — as
      opposed to blocking it at just one specific plant.
     </div>
    </div>

    {/* <!-- Section 11: General Item Category Group --> */}
    <div className="card brown">
     <h2>
      <span className="badge">7</span> Basic Data 1 — General Item Category
      Group
     </h2>
     <div className="callout brown">
      💡 <strong>General Item Category Group</strong> is one of the
      parameters used to determine the
      <strong>Item Category</strong> specifically in the
      <strong>inbound delivery process</strong>.
     </div>
    </div>

    {/* <!-- Section 12: Gross/Net Weight --> */}
    <div className="card">
     <h2>
      <span className="badge">8</span> Basic Data 1 — Gross Weight &amp; Net
      Weight
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Definition</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Gross Weight</td>
        <td>
         The total weight of the product,
         <strong>including packing</strong>
        </td>
       </tr>
       <tr>
        <td>Net Weight</td>
        <td>
         The actual weight of the product,
         <strong>without packing</strong>
        </td>
       </tr>
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
       <tr>
        <td>What does maintaining Payment Guarantee Procedure do?</td>
        <td>
         Blocks delivery creation until a payment guarantee (e.g., a
         Letter of Credit) is received from the customer
        </td>
       </tr>
       <tr>
        <td>What is the T-code to receive a Payment Guarantee?</td>
        <td>VKM3</td>
       </tr>
       <tr>
        <td>What does Account Assignment Group determine?</td>
        <td>
         The Revenue G/L account used when posting invoice values into
         Accounting (Customer Account Debit / Revenue Account Credit)
        </td>
       </tr>
       <tr>
        <td>
         What do Account Assignment Group codes 01 and 02 typically
         represent?
        </td>
        <td>
         01 = Domestic Revenues (domestic customers), 02 = Foreign
         Revenues (foreign customers)
        </td>
       </tr>
       <tr>
        <td>
         What does Tax Classification control, and what do 0 and 1 mean?
        </td>
        <td>
         Whether the customer is liable for tax; 1 = liable, 0 = not
         liable (some systems show this via specific tax categories like
         IGST/CGST/SGST instead)
        </td>
       </tr>
       <tr>
        <td>What is Base Unit of Measure?</td>
        <td>
         The unit in which the material is manufactured and stored (e.g.,
         BT-Bottle, CAR-Carton, BOX-Box, BAG-Bag, EA-Each, PC-Piece)
        </td>
       </tr>
       <tr>
        <td>What is Material Group?</td>
        <td>A grouping of materials that share the same attributes</td>
       </tr>
       <tr>
        <td>What is Old Material Number used for?</td>
        <td>
         Storing the legacy (non-SAP) material number for reference, when
         it differs from the new SAP material number
        </td>
       </tr>
       <tr>
        <td>What does maintaining Division on the Material Master do?</td>
        <td>
         The system automatically determines that division into the sales
         document line item for this material
        </td>
       </tr>
       <tr>
        <td>What is Product Allocation?</td>
        <td>
         Reserving stock for specific customers, customer groups, or
         distribution channels to meet a future requirement
        </td>
       </tr>
       <tr>
        <td>What is X-Plant Material Status used for?</td>
        <td>
         Blocking the material across all plants at once, rather than at
         just one specific plant
        </td>
       </tr>
       <tr>
        <td>What does General Item Category Group determine?</td>
        <td>
         The Item Category specifically in the inbound delivery process
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between Gross Weight and Net Weight?
        </td>
        <td>
         Gross Weight includes packing; Net Weight is the actual product
         weight without packing
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
        <td><span className="tcode">VKM3</span></td>
        <td>
         Receive/record Payment Guarantee from a customer — required
         before delivery, if Payment Guarantee Procedure is maintained
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
        <td>Payment Guarantee Procedure example</td>
        <td>0001 — Letter of Credit</td>
       </tr>
       <tr>
        <td>Account Assignment Group codes</td>
        <td>01 Domestic Revenues, 02 Foreign Revenues</td>
       </tr>
       <tr>
        <td>Tax Classification values</td>
        <td>1 = liable for tax, 0 = not liable</td>
       </tr>
       <tr>
        <td>Base Unit of Measure codes</td>
        <td>
         BT Bottle, CAR Carton, BOX Box, BAG Bag, EA Each, PC Piece
        </td>
       </tr>
       <tr>
        <td>Worked material example</td>
        <td>WAXY10205 — packaged in 500 mg bottles</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture closed out the Customer Master field walkthrough with
      three Billing Documents tab fields:
      <strong>Payment Guarantee Procedure</strong> (blocks delivery until a
      guarantee like a Letter of Credit is received via VKM3),
      <strong>Account Assignment Group</strong> (determines the Revenue G/L
      account during invoice posting — domestic vs. foreign), and
      <strong>Tax Classification</strong> (whether the customer is liable
      for tax, with deeper GST-specific configuration deferred to after the
      Pricing topics). The lecture then pivoted to a new object —
      <strong>Material Master</strong> — starting with its
      <strong>Basic Data 1</strong> tab:
      <strong>Base Unit of Measure</strong> (the manufacturing/storage
      unit), <strong>Material Group</strong> (grouping by shared
      attributes), <strong>Old Material Number</strong> (legacy/non-SAP
      reference number), <strong>Division</strong> (auto-determined into the
      sales document line item — tying back to an earlier troubleshooting
      example), <strong>Product Allocation</strong> (reserving stock for
      future demand), <strong>X-Plant Material Status</strong>
      (blocking a material across every plant at once),
      <strong>General Item Category Group</strong> (drives item category in
      the inbound delivery process), and
      <strong>Gross Weight vs. Net Weight</strong> (with vs. without
      packing).
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Payment Guarantee Procedure</strong> and
       <strong>Relevant for POD</strong> follow the same pattern — both
       block the next document until a specific confirmation (VKM3 or VLPOD
       respectively) is recorded
      </li>
      <li>
       <strong>Account Assignment Group</strong> is the customer-side
       counterpart to material-side G/L determination — together they drive
       which Revenue account an invoice posts to
      </li>
      <li>
       Customer Master fields are now <strong>fully complete</strong> — the
       course moves on to <strong>Material Master</strong>
       starting today
      </li>
      <li>
       <strong>Division on Material Master</strong> must match the Sales
       Area's division — a mismatch here is a known, previously-seen cause
       of "external division not completed"
      </li>
      <li>
       <strong>Gross Weight vs. Net Weight</strong> is a simple but
       frequently-tested distinction: packing included vs. excluded
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> continuing with the remaining fields
      in Material Master.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 36 Notes — Customer Master Wrap-Up &amp; Fields in Material
    Master: Basic Data 1 🎓
   </p>
  </div>
 );
};

export default Material21;
