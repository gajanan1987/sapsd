const Material40 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-red">
    <h1>
     📄 Lecture 40 — VPRS, Structure of Sales Document &amp; Document Types
    </h1>
    <p>
     SAP SD | How Material Master cost flows into pricing via VPRS, changing
     that cost via MR21, the header/item/schedule-line structure of a sales
     document, all standard document types (VOV8), and building your own
     copied document types
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Material Master fields are now fully complete. Today opens with the
      last loose end — how the material's <strong>cost</strong> flows into
      the sales document via <strong>VPRS</strong> and how to change it via
      <strong>MR21</strong> — then pivots into Business Process territory:
      the <strong>structure of a sales document</strong>, the full list of
      <strong>standard sales document types</strong> (T-code VOV8), and how
      to <strong>create your own copied document types</strong>, setting up
      for the OTC (Order-to-Cash) process starting next class.
     </div>
    </div>

    {/* <!-- Section 1: VPRS Condition Type --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> VPRS Condition Type — Cost in the
      Sales Document
     </h2>
     <div className="callout teal">
      💡 The <strong>cost</strong> maintained in Material Master gets copied
      into the sales document through the <strong>VPRS</strong> condition
      type.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">V/08</span> → select your Pricing
       Procedure → double-click <strong>Control</strong>.
      </div>
      <div className="step">
       Go to New Entries → Step <code>30</code> → Condition Type
       <code>VPRS</code>.
      </div>
      <div className="step">
       Check <strong>Statistics</strong> → Subtotal <code>B</code> →
       Requirement <code>4</code> → Save.
      </div>
     </div>
     <div className="callout blue">
      📊 <strong>Result:</strong> creating an order and checking Conditions
      shows <strong>VPRS</strong> automatically copied from Material Master
      — e.g., cost <code>₹1,000</code> per unit × <code>100</code> quantity
      = <code>₹1,00,000</code>; at <code>200</code> quantity,
      <code>₹2,00,000</code>.
     </div>
    </div>

    {/* <!-- Section 2: Changing Cost via MR21 --> */}
    <div className="card red">
     <h2><span className="badge">2</span> Changing Cost — T-code MR21</h2>
     <div className="callout red">
      💡 The cost field is
      <strong>disabled directly on Material Master</strong> — it cannot be
      changed there. The T-code to change it is
      <span className="tcode">MR21</span>.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">MR21</span> → mention Company Code and
       Plant → Enter.
      </div>
      <div className="step">
       Mention the Material → enter the new price (e.g., changing from
       ₹1000 to <code>₹200</code>) → Save.
      </div>
     </div>
     <h3>Troubleshooting — "Interval 48 Does Not Exist for Object"</h3>
     <div className="callout gold">
      🎯 A common error when running MR21 for the first time in a new
      company code.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">FBN1</span> → mention Company Code
       (e.g., <code>P100</code>) → click <strong>Change Intervals</strong>.
      </div>
      <div className="step">
       Click the <strong>+</strong> symbol → insert interval number
       <code>48</code> → mention a From/To range not already used (e.g.,
       <code>24 zeros</code> to <code>24 nines</code>, picking up after any
       ranges already used, such as up to 14 nines) → Save → Continue.
      </div>
      <div className="step">
       Re-run <span className="tcode">MR21</span> → mention the material
       and the new price (₹200) → Save — now goes through cleanly.
      </div>
     </div>
     <div className="callout green">
      ✅ <strong>Verification:</strong> go to
      <span className="tcode">MM02</span>
      → Accounting 1 view — the cost now shows the updated value (₹200).
     </div>
     <p className="note-text">
      📌 This reinforces the Price Control field from Lecture 39 — if Price
      Control is <code>S</code> (Standard Price), the cost
      maintained/changed this way is the Standard Price.
     </p>
    </div>

    {/* <!-- Section 3: Structure of Sales Document --> */}
    <div className="card purple">
     <h2><span className="badge">3</span> Structure of a Sales Document</h2>
     <div className="callout purple">
      💡 Every sales document is structured into
      <strong>three parts</strong>: <strong>Header Data</strong>,
      <strong>Item Data</strong>, and <strong>Schedule Line Data</strong>.
     </div>
    </div>

    {/* <!-- Section 4: Header Data --> */}
    <div className="card orange">
     <h2><span className="badge">4</span> Structure — Header Data</h2>
     <div className="callout orange">
      💡 <strong>Header Data</strong> is the data
      <strong>applicable to all line items</strong> in the sales document.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Aspect</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Source</td>
        <td>
         Customer Master, plus some configuration data and some control
         data
        </td>
       </tr>
       <tr>
        <td>Controlled by</td>
        <td>Sales Document Type</td>
       </tr>
       <tr>
        <td>Table</td>
        <td>VBAK</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 In the actual order screen (VA01), clicking into the header shows
      most fields sourced from Customer Master (price list, price group,
      customer group, sales district, etc.), some from configuration (e.g.,
      how the pricing procedure gets determined via OVKK), and some from
      control data (e.g., the document type controls seen in VOV8).
     </p>
    </div>

    {/* <!-- Section 5: Item Data --> */}
    <div className="card gold">
     <h2><span className="badge">5</span> Structure — Item Data</h2>
     <div className="callout gold">
      💡 <strong>Item Data</strong> is the data applicable to a
      <strong>particular line item</strong> in the sales document.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Aspect</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Source</td>
        <td>
         Material Master, CMIR, plus some configuration data and some
         control data
        </td>
       </tr>
       <tr>
        <td>Controlled by</td>
        <td>Item Category</td>
       </tr>
       <tr>
        <td>Table</td>
        <td>VBAP</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Double-clicking a line item in VA01 shows most fields sourced from
      Material Master, with the rest from configuration and from Item
      Category controls (e.g., Item Category 10's own settings).
     </p>
    </div>

    {/* <!-- Section 6: Schedule Line Data --> */}
    <div className="card indigo">
     <h2><span className="badge">6</span> Structure — Schedule Line Data</h2>
     <div className="callout indigo">
      💡 <strong>Schedule Line Data</strong> consists of
      <strong>delivery dates and confirmed quantities</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Aspect</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Source</td>
        <td>Some configuration data, some control data</td>
       </tr>
       <tr>
        <td>Controlled by</td>
        <td>Schedule Line Category</td>
       </tr>
       <tr>
        <td>Table</td>
        <td>VBEP</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 In VA01, Schedule Line Data is reached by first opening Item Data,
      then navigating into the Schedule Lines tab from there.
     </p>
    </div>

    {/* <!-- Section 7: Sales / Delivery / Billing Document Classification --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">7</span> Document Classification — Sales,
      Delivery &amp; Billing Documents
     </h2>
     <div className="callout cyan">
      💡 Across the Enquiry → Quotation → Sales Order → Delivery → Invoice
      flow, each stage falls under a different document classification.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Stage</th>
        <th>Document Classification</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Enquiry, Quotation, Sales Order</td>
        <td>Sales Document</td>
       </tr>
       <tr>
        <td>Delivery</td>
        <td>Delivery Document</td>
       </tr>
       <tr>
        <td>Invoice</td>
        <td>Billing Document</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 8: Sales Document Types --> */}
    <div className="card green">
     <h2>
      <span className="badge">8</span> Sales Document Types — T-code VOV8
     </h2>
     <div className="callout green">
      💡 <strong>Sales Document Types</strong> define the standard document
      categories available in SAP SD.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span> <span className="node">Sales</span>
      <span className="sep">→</span>
      <span className="node">Sales Documents</span>
      <span className="sep">→</span>
      <span className="node">Sales Document Header</span>
      <span className="sep">→</span>
      <span className="node">Define Sales Document Types</span>
     </div>
     <div className="callout blue">
      🔧 <strong>Direct T-code:</strong> <span className="tcode">VOV8</span>
     </div>
     <h3>The 20 Standard Document Types</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document Type</th>
        <th>Code</th>
        <th>Creation T-code</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Enquiry</td>
        <td>IN</td>
        <td>VA11</td>
       </tr>
       <tr>
        <td>Quotation</td>
        <td>QT</td>
        <td>VA21</td>
       </tr>
       <tr>
        <td>Sales Order</td>
        <td>OR</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Rush Order</td>
        <td>RO</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Cash Sale</td>
        <td>CS</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Returns</td>
        <td>RE</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Credit Memo Request</td>
        <td>CR</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Debit Memo Request</td>
        <td>DR</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Invoice Correction Request</td>
        <td>RK</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Free of Charge</td>
        <td>FD</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Subsequent Delivery Free of Charge</td>
        <td>SDF</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Consignment Fill-up</td>
        <td>CF</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Consignment Issue</td>
        <td>CI</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Consignment Returns</td>
        <td>CONR</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Consignment Pick-up</td>
        <td>CP</td>
        <td>VA01</td>
       </tr>
       <tr>
        <td>Quantity Contract</td>
        <td>QC</td>
        <td>VA41</td>
       </tr>
       <tr>
        <td>Value Contract (General)</td>
        <td>WK1</td>
        <td>VA41</td>
       </tr>
       <tr>
        <td>Value Contract (Material-Specific)</td>
        <td>WK2</td>
        <td>VA41</td>
       </tr>
       <tr>
        <td>Scheduling Agreement</td>
        <td>DS</td>
        <td>VA31</td>
       </tr>
       <tr>
        <td>Item Proposal</td>
        <td>PV</td>
        <td>VA51</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📌 <strong>Transcription correction:</strong> Value Contract (General)
      was heard as created via "VF" — this is almost certainly a mishearing;
      contracts (Quantity Contract, both Value Contract variants) are
      created via <span className="tcode">VA41</span>, consistent with how
      the material-specific Value Contract (WK2) was stated moments later in
      the same breath.
     </div>
     <p className="note-text">
      📌 These processes — Rush Order, Cash Sale, Returns, Credit/Debit
      Memo, Consignment, Contracts, Scheduling Agreement, Item Proposal,
      etc. — will each be covered one by one, starting with the OTC process
      next class.
     </p>
    </div>

    {/* <!-- Section 9: Creating Custom Document Types --> */}
    <div className="card pink">
     <h2>
      <span className="badge">9</span> Creating Your Own Document Types
      (Copy Standard)
     </h2>
     <div className="callout pink">
      💡 In real-time projects, custom document types are created by
      <strong>copying the standard ones</strong> — never used directly
      as-is.
     </div>
     <div className="stepper">
      <div className="step">
       In <span className="tcode">VOV8</span>, select the standard document
       type (e.g., <code>IN</code>) → Copy As → rename to your own (e.g.,
       <code>PIN</code>) → change the description → Enter.
      </div>
      <div className="step">
       System asks:
       <em>"Is this entry also relevant for copy control?"</em> → click
       <strong>Yes</strong>.
      </div>
      <div className="step">
       Repeat the same copy for Quotation (<code>QT</code> →
       <code>PQT</code>) and Sales Order (<code>OR</code> →
       <code>POR</code>), confirming Yes to copy control each time → Save →
       Continue through the resulting table prompts.
      </div>
     </div>
     <h3>Using the New Document Types</h3>
     <div className="stepper">
      <div className="step">
       Create Enquiry with type <code>PIN</code> — material, quantity →
       Save.
      </div>
      <div className="step">
       Create Quotation type <code>PQT</code> with reference to the enquiry
       — mention the enquiry number → Copy → maintain Valid From / Valid To
       → Save.
      </div>
      <div className="step">
       Create Sales Order type <code>POR</code> with reference to the
       quotation number → Save.
      </div>
      <div className="step">
       Continue with Delivery, PGI, and Invoice as usual — the normal
       process is unaffected by using custom document types.
      </div>
     </div>
     <div className="callout">
      📌 Answering the copy-control prompt with <strong>Yes</strong>
      each time ensures the new custom document type inherits the same
      copy-control relationships (Enquiry→Quotation, Quotation→Order, etc.)
      as the standard type it was copied from.
     </div>
    </div>

    {/* <!-- Section 10: OTC Preview --> */}
    <div className="card brown">
     <h2><span className="badge">🔜</span> Coming Up — OTC Process</h2>
     <div className="callout brown">
      💡 <strong>OTC</strong> stands for <strong>Order to Cash</strong>
      — the next process to be covered in detail, followed by working back
      through the other standard processes (Rush Order, etc.) one by one in
      the system.
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
         How does the cost maintained in Material Master appear in the
         sales document?
        </td>
        <td>
         Via the VPRS condition type, which has to be added to the
         Pricing Procedure (V/08) as a statistical condition
        </td>
       </tr>
       <tr>
        <td>
         Can the material's cost be changed directly on Material Master?
        </td>
        <td>
         No — the cost field is disabled there; it's changed via T-code
         MR21
        </td>
       </tr>
       <tr>
        <td>
         What causes "Interval 48 does not exist for object" during MR21,
         and how is it fixed?
        </td>
        <td>
         The number range interval 48 hasn't been created; fix via FBN1 →
         Change Intervals → add interval 48 with an unused number range →
         Save
        </td>
       </tr>
       <tr>
        <td>What are the three parts of a sales document's structure?</td>
        <td>Header Data, Item Data, and Schedule Line Data</td>
       </tr>
       <tr>
        <td>
         What is Header Data, what controls it, and what table stores it?
        </td>
        <td>
         Data applicable to all line items; controlled by Sales Document
         Type; stored in table VBAK
        </td>
       </tr>
       <tr>
        <td>
         What is Item Data, what controls it, and what table stores it?
        </td>
        <td>
         Data applicable to a specific line item; controlled by Item
         Category; stored in table VBAP
        </td>
       </tr>
       <tr>
        <td>
         What is Schedule Line Data, what controls it, and what table
         stores it?
        </td>
        <td>
         Delivery dates and confirmed quantities; controlled by Schedule
         Line Category; stored in table VBEP
        </td>
       </tr>
       <tr>
        <td>
         How are Enquiry, Quotation, and Sales Order classified versus
         Delivery and Invoice?
        </td>
        <td>
         Enquiry/Quotation/Sales Order are Sales Documents; Delivery is a
         Delivery Document; Invoice is a Billing Document
        </td>
       </tr>
       <tr>
        <td>What is the T-code to define/view Sales Document Types?</td>
        <td>VOV8</td>
       </tr>
       <tr>
        <td>
         How many standard sales document types were covered, and name a
         few?
        </td>
        <td>
         20 — including Enquiry (IN), Quotation (QT), Sales Order (OR),
         Rush Order (RO), Cash Sale (CS), Returns (RE), Credit/Debit Memo
         Request (CR/DR), Consignment Fill-up/Issue/Returns/Pick-up,
         Contracts (QC/WK1/WK2), Scheduling Agreement (DS), Item Proposal
         (PV)
        </td>
       </tr>
       <tr>
        <td>How is a custom document type created in real projects?</td>
        <td>
         Copy the standard document type in VOV8, rename it, change the
         description, and answer "Yes" when asked if the entry should
         also be relevant for copy control
        </td>
       </tr>
       <tr>
        <td>What does OTC stand for?</td>
        <td>Order to Cash — the next process to be covered</td>
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
        <td><span className="tcode">V/08</span></td>
        <td>
         Maintain Pricing Procedure — used here to add the VPRS condition
         type
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MR21</span></td>
        <td>
         Change the material's cost (Price Control S/Standard Price) —
         cannot be done directly on Material Master
        </td>
       </tr>
       <tr>
        <td><span className="tcode">FBN1</span></td>
        <td>
         Maintain number range intervals — used to fix "Interval 48 does
         not exist" during MR21
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MM02</span></td>
        <td>
         Change Material Master — used to verify the updated cost under
         Accounting 1
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV8</span></td>
        <td>
         Define Sales Document Types — view/copy all standard document
         types
        </td>
       </tr>
       <tr>
        <td>
         <span className="tcode">VA11 / VA21 / VA01 / VA41 / VA31 / VA51</span>
        </td>
        <td>
         Creation transactions for Enquiry / Quotation / Order-family
         documents / Contracts / Scheduling Agreement / Item Proposal
         respectively
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
        <td>VPRS condition type setup (V/08)</td>
        <td>Step 30, Statistics checked, Subtotal B, Requirement 4</td>
       </tr>
       <tr>
        <td>MR21 worked example</td>
        <td>Cost changed from ₹1000 to ₹200</td>
       </tr>
       <tr>
        <td>FBN1 fix for MR21 error</td>
        <td>
         Company Code P100 → Change Intervals → insert interval 48 (e.g.,
         24 zeros to 24 nines, after any already-used ranges)
        </td>
       </tr>
       <tr>
        <td>Header Data table</td>
        <td>VBAK</td>
       </tr>
       <tr>
        <td>Item Data table</td>
        <td>VBAP</td>
       </tr>
       <tr>
        <td>Schedule Line Data table</td>
        <td>VBEP</td>
       </tr>
       <tr>
        <td>Custom document type examples</td>
        <td>
         IN → PIN, QT → PQT, OR → POR (all copy-control relevant = Yes)
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture closed the loop on Material Master by showing how its
      cost flows into the sales document via the
      <strong>VPRS</strong> condition type (added to the Pricing Procedure
      as a statistical condition) and how that cost is actually changed —
      via <strong>MR21</strong>, including the FBN1 number-range fix for a
      common first-time error. The lecture then introduced Business Process
      fundamentals: the <strong>structure of a sales document</strong> —
      Header Data (VBAK, controlled by Sales Document Type), Item Data
      (VBAP, controlled by Item Category), and Schedule Line Data (VBEP,
      controlled by Schedule Line Category) — and the classification of
      Enquiry/Quotation/Order as Sales Documents versus Delivery Document
      and Billing Document. It then walked through all
      <strong>20 standard sales document types</strong> via
      <strong>VOV8</strong> (Enquiry through Item Proposal, each with its
      code and creation T-code), and demonstrated
      <strong>creating custom document types</strong> by copying the
      standards (IN→PIN, QT→PQT, OR→POR) with copy control carried forward,
      then running a full Enquiry-to-Invoice cycle using those new types.
      The lecture closed by naming the
      <strong>OTC (Order to Cash) process</strong> as the starting point for
      the next class.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>VPRS must be explicitly added to the Pricing Procedure</strong>
       — just like SKTO earlier — before the material's cost becomes
       visible on the order at all
      </li>
      <li>
       <strong>Cost changes always go through MR21</strong>, never directly
       on Material Master — remember the FBN1 number-range fix if "Interval
       48 does not exist" appears the first time
      </li>
      <li>
       The <strong>Header/Item/Schedule Line</strong> structure, each with
       its own source, controlling object, and table (VBAK / VBAP / VBEP),
       is a foundational mental model worth knowing cold for interviews
      </li>
      <li>
       <strong>Never use standard document types directly in real
        projects</strong>
       — always copy them and confirm "Yes" to copy control so the new type
       inherits the correct document flow
      </li>
      <li>
       The course now shifts from
       <strong>Master Data into Business Processes</strong>, starting with
       the OTC (Order to Cash) process
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> the OTC (Order to Cash) process,
      followed by the other standard processes one by one.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 40 Notes — VPRS, Structure of Sales Document &amp; Document Types
    🎓
   </p>
  </div>
 );
};

export default Material40;
