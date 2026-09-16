const SalesDocument49 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-gold">
    <h1>⚙️ Lecture 49 — Document Type Controls, Part 1</h1>
    <p>
     SAP SD | Starting the 44 Document Type Controls in VOV8 — SD Document
     Category, the RK-only Indicator, Sales Document Block, Internal/External
     Number Systems, Item &amp; Sub-Item Number Increment, Reference
     Mandatory, and Check Division
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class closed the Consignment cycle end-to-end and previewed
      that a sales document type's <strong>Details</strong> screen in
      <span className="tcode">VOV8</span> holds
      <strong>44 individual controls</strong>. Today starts going through
      those controls one by one, field by field, beginning with the field
      that decides what a document type actually <em>is</em> — SD Document
      Category — and working down through seven more controls on the same
      Details screen.
     </div>
    </div>

    {/* <!-- Section 1: SD Document Category --> */}
    <div className="card teal">
     <h2><span className="badge">1</span> SD Document Category</h2>
     <div className="callout teal">
      💡 <strong>SD Document Category</strong> controls the
      <strong>functioning of the sales document</strong> — that is, whether
      the system treats a document as an Inquiry, Quotation, Order, and so
      on. This field, <strong>not the Document Type itself</strong>, is what
      the system actually reads to identify a document's nature.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>SD Document Category</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>A</code></td>
        <td>Inquiry</td>
       </tr>
       <tr>
        <td><code>B</code></td>
        <td>Quotation</td>
       </tr>
       <tr>
        <td><code>C</code></td>
        <td>Order</td>
       </tr>
       <tr>
        <td><code>D</code></td>
        <td>Item Proposal</td>
       </tr>
       <tr>
        <td><code>E</code></td>
        <td>Scheduling Agreement</td>
       </tr>
       <tr>
        <td><code>G</code></td>
        <td>Contracts</td>
       </tr>
       <tr>
        <td><code>H</code></td>
        <td>Returns</td>
       </tr>
       <tr>
        <td><code>I</code></td>
        <td>Free of Charge</td>
       </tr>
       <tr>
        <td><code>K</code></td>
        <td>Credit Memo</td>
       </tr>
       <tr>
        <td><code>L</code></td>
        <td>Debit Memo</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️
      <strong
      >Worked demonstration — why this field, not the Document Type name,
       matters:</strong
      >
      custom Inquiry type <code>PPIN</code> shows SD Document Category
      <code>A</code>; custom Quotation type <code>PPQT</code> shows
      <code>B</code>; custom Order type <code>PPOR</code> shows
      <code>C</code>. If <code>PPOR</code>'s SD Document Category were
      manually changed from <code>C</code> to <code>A</code>, the system
      would start <strong>identifying it as an Inquiry</strong>, regardless
      of the fact that its document type ID still reads
      <code>PPOR</code> and its description still says "Order."
     </div>
     <p className="note-text">
      📌 To check table data behind a document type or order: use
      <span className="tcode">SE16</span> (or
      <span className="tcode">SE16N</span>) on table <strong>VBAK</strong> —
      mention an order number to see one order, or mention Sales
      Organization (e.g. <code>ORSP100</code>) to see all orders for that
      sales area. To see the table's technical structure (field names, data
      elements) instead of data rows, use
      <span className="tcode">SE11</span> → table <code>VBAK</code> →
      Display.
     </p>
    </div>

    {/* <!-- Section 2: Indicator --> */}
    <div className="card orange">
     <h2><span className="badge">2</span> Indicator (Field 2)</h2>
     <div className="callout orange">
      💡 <strong>Indicator</strong> is maintained on
      <strong>only one</strong> of all 20 standard document types —
      <strong>RK (Invoice Correction Request)</strong> — and for RK it is
      always set to <strong>D</strong>.
     </div>
     <div className="callout gold">
      📖 <strong>Effect of Indicator D:</strong> each line item copied in
      from the reference invoice is split into
      <strong>two line items</strong> inside the Invoice Correction Request
      document — the original value, and its exact negative. This is the
      mechanism behind the two-line-item structure covered in the earlier
      Invoice Correction Request lecture: Indicator <code>D</code> is what
      actually drives that split.
     </div>
     <p className="note-text">
      📌 Checking any other standard document type's Details screen (IN, QT,
      OR, RE, etc.) shows this field blank — RK is the sole exception among
      the 20 standard types.
     </p>
    </div>

    {/* <!-- Section 3: Sales Document Block --> */}
    <div className="card purple">
     <h2><span className="badge">3</span> Sales Document Block</h2>
     <div className="callout purple">
      💡 <strong>Sales Document Block</strong> lets a consultant
      <strong>disable a document type entirely</strong> — used when a client
      decides a particular document type should no longer be usable.
     </div>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VOV8</span> → select the document type to
       block (worked example: <code>RK</code>) → Details → set
       <strong>Sales Document Block = <code>X</code></strong> → Save.
      </div>
      <div className="step">
       <span className="tcode">VA01</span> → attempt to create a document
       with that type (<code>RK</code>) → system refuses with:
       <em>"Sales order type RK is blocked for processing."</em>
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Result:</strong> once Sales Document Block is set to
      <code>X</code> on a document type, the system
      <strong>will not allow any sales document to be created</strong>
      with that document type, for any user, until the block is removed.
     </div>
    </div>

    {/* <!-- Section 4: Number Systems --> */}
    <div className="card red">
     <h2>
      <span className="badge">4</span> Number Systems — Internal &amp;
      External Number Range
     </h2>
     <div className="callout red">
      💡 Every sales document type carries <strong>both</strong> an
      <strong>Internal Number Range</strong> and an
      <strong>External Number Range</strong> assignment. Internal means the
      <strong>system generates</strong> the document number automatically on
      save; External means the <strong>user manually enters</strong> the
      number.
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
        <td>T-Code (Define Number Ranges for Sales Documents)</td>
        <td><span className="tcode">VN01</span></td>
       </tr>
       <tr>
        <td>Where to assign</td>
        <td><span className="tcode">VN01</span> → Change Intervals</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example — internal:</strong> create order (custom
      type <code>PPUOR</code>), Sales Org <code>1200</code>, Customer
      <code>640</code>, Material <code>WAXY1020</code> → Save → system
      generates the number automatically (e.g. <code>20741...</code>) — no
      field for the user to fill in.
     </div>
     <div className="callout gold">
      📊 <strong>Worked example — external:</strong> on the same order
      screen, the <strong>Standard Order</strong> field itself can accept a
      number typed in manually (e.g. <code>500333...</code>) → the system
      takes this <strong>user-given number</strong> only at Save, instead of
      generating its own.
     </div>
     <p className="note-text">
      📌 In <span className="tcode">VN01</span>, interval <code>01</code> is
      typically Internal and <code>02</code> is typically External for
      standard order number ranges — a document type's Number Systems
      settings simply point to which interval(s) it draws from.
     </p>
    </div>

    {/* <!-- Section 5: Item Number Increment --> */}
    <div className="card gold">
     <h2><span className="badge">5</span> Item Number Increment</h2>
     <div className="callout gold">
      💡 <strong>Item Number Increment</strong> controls
      <strong>how the line item number is incremented</strong> as successive
      line items are entered on a sales document.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> with the standard increment,
      creating an order (custom type <code>PPOR</code>) gives the first line
      item number <code>10</code>, the second <code>20</code>, the third
      <code>30</code>, and so on. Changing the increment value to
      <code>1</code> instead produces <code>1</code>, <code>2</code>,
      <code>3</code>; changing it to <code>100</code> produces
      <code>100</code>, <code>200</code>, <code>300</code>.
     </div>
     <p className="note-text">
      📌 The increment value purely controls the step size between line item
      numbers — it has no effect on pricing, billing, or any other document
      behavior.
     </p>
    </div>

    {/* <!-- Section 6: Sub-Item Increment --> */}
    <div className="card pink">
     <h2><span className="badge">6</span> Sub-Item Increment</h2>
     <div className="callout pink">
      💡 <strong>Sub-Item Increment</strong> controls
      <strong>how sub-item numbers are incremented</strong> underneath a
      main item, for the scenarios where a single main item generates
      automatic sub-items.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Scenario That Produces Sub-Items</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Bill of Material (BOM)</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Free Goods</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Material Determination</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Cross Selling</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example (BOM):</strong> a Computer is set up as a
      Bill of Material with components CPU, Monitor, Keyboard, and Mouse. If
      the Computer is main item <code>10</code> and Sub-Item Increment is
      set to <code>1</code>, the components take sub-item numbers
      <code>11</code>, <code>12</code>, <code>13</code>, <code>14</code> —
      one main item "place," incremented by <code>1</code> for each
      sub-item.
     </div>
     <p className="note-text">
      📌 BOM itself (how a material is configured to explode into components
      on the order) will be built as a live example in an upcoming class,
      alongside the Display Range field.
     </p>
    </div>

    {/* <!-- Section 7: Reference Mandatory --> */}
    <div className="card indigo">
     <h2><span className="badge">7</span> Reference Mandatory</h2>
     <div className="callout indigo">
      💡 <strong>Reference Mandatory</strong> forces a document type to
      require a reference document before it can be created at all. In the
      standard system, only <strong>two</strong> document types carry this
      setting.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document Type</th>
        <th>Reference Mandatory Value</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>RK</code> (Invoice Correction Request)</td>
        <td><code>M</code></td>
        <td>Reference to a Billing Document (Invoice) is mandatory</td>
       </tr>
       <tr>
        <td><code>SDF</code> (Subsequent Delivery Free of Charge)</td>
        <td><code>C</code></td>
        <td>
         Reference to an Order (the prior Return Order) is mandatory
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️
      <strong
      >All other standard document types (e.g. RE) leave this
       blank</strong
      >
      — reference is <strong>optional</strong>: a user can create the
      document directly, or choose to bring in a reference manually via
      Create with Reference, but the system does not force it.
     </div>
    </div>

    {/* <!-- Section 8: Check Division --> */}
    <div className="card brown">
     <h2><span className="badge">8</span> Check Division</h2>
     <div className="callout brown">
      💡 A sales document carries a
      <strong>Header Division</strong> (entered on the initial creation
      screen, e.g. <code>P3</code>) and each line item carries its own
      <strong>Item Division</strong>
      (copied automatically from that material's Material Master, e.g.
      <code>P1</code>). When these two values differ,
      <strong>Check Division</strong> controls how the system responds.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Check Division Value</th>
        <th>System Response</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank</td>
        <td>No message</td>
       </tr>
       <tr>
        <td><code>1</code></td>
        <td>Warning message</td>
       </tr>
       <tr>
        <td><code>2</code></td>
        <td>Error message</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> order header set to Division
      <code>P3</code> (Insulin), but the material entered on the line item
      carries Division <code>P1</code> in its Material Master. With Check
      Division = <code>1</code>, saving produces:
      <em
      >"Division P3 in the header deviates from division P1 in the
       item"</em
      >
      as a warning — the order still saves. With Check Division changed to
      <code>2</code>, the identical scenario instead blocks the save with
      the same message as a hard error.
     </div>
     <p className="note-text">
      📌 Header Division vs. Item Division mismatches are easy to miss since
      the item division is auto-copied silently from the Material Master —
      Check Division is the safety net that surfaces the mismatch before it
      causes downstream reporting or profitability issues.
     </p>
    </div>

    {/* <!-- Section 9: Q&A - Consignment Movement Types --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">❓</span> Class Q&amp;A — Where to See
      Consignment Movement Types (631/633)
     </h2>
     <div className="callout cyan">
      🔗
      <strong
      >Q: Where can the movement types (e.g. 631, 633) behind a
       Consignment goods issue be seen in the material document?</strong
      >
      A: Open the Delivery in Change mode → <strong>Document Flow</strong>
      → select the relevant Goods Issue (Consignment) line →
      <strong>Display Document</strong>. The material document here shows
      the movement type used for that consignment posting.
     </div>
     <p className="note-text">
      📌 Movement types themselves live inside the
      <strong>Schedule Line Category</strong> configuration (which controls
      inventory posting behavior) — a topic not yet formally covered at this
      point in the course, so movement types were shown here only as a
      pointer, to be explained properly once Schedule Line Category is
      reached.
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
         What does SD Document Category control, and why does it matter
         more than the Document Type ID itself?
        </td>
        <td>
         It controls the functioning of the sales document — whether the
         system treats it as an Inquiry, Quotation, Order, etc. The
         system reads this field, not the document type's name/ID, to
         determine document behavior; changing it would make the system
         misidentify the document regardless of its type code
        </td>
       </tr>
       <tr>
        <td>
         List the SD Document Category values for Inquiry, Quotation,
         Order, Item Proposal, Scheduling Agreement, Contracts, Returns,
         Free of Charge, Credit Memo, and Debit Memo.
        </td>
        <td>A, B, C, D, E, G, H, I, K, L respectively</td>
       </tr>
       <tr>
        <td>
         Which document type carries the Indicator field, and what value
         does it take?
        </td>
        <td>Only RK (Invoice Correction Request), set to D</td>
       </tr>
       <tr>
        <td>What does Indicator D actually cause to happen?</td>
        <td>
         Each line item copied in from the reference invoice is split
         into two line items inside the Invoice Correction Request — the
         mechanism behind its signature two-line-item structure
        </td>
       </tr>
       <tr>
        <td>
         What does Sales Document Block do, and what message appears if
         you try to use a blocked type?
        </td>
        <td>
         Setting it to X on a document type prevents any sales document
         from being created with that type; attempting to do so gives
         "Sales order type &lt;type&gt; is blocked for processing"
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between Internal and External number
         assignment, and what T-code defines the ranges?
        </td>
        <td>
         Internal means the system auto-generates the document number on
         save; External means the user manually enters it. Ranges are
         defined via T-code VN01
        </td>
       </tr>
       <tr>
        <td>What does Item Number Increment control?</td>
        <td>
         The step size between successive line item numbers on a sales
         document (standard is 10, 20, 30...; can be changed to any
         increment such as 1 or 100)
        </td>
       </tr>
       <tr>
        <td>
         What does Sub-Item Increment control, and which four scenarios
         generate sub-items?
        </td>
        <td>
         How sub-item numbers increment beneath a main item; the four
         scenarios are Bill of Material (BOM), Free Goods, Material
         Determination, and Cross Selling
        </td>
       </tr>
       <tr>
        <td>
         Which two standard document types have Reference Mandatory set,
         and to what?
        </td>
        <td>
         RK (mandatory reference = M, Invoice/Billing Document) and SDF
         (mandatory reference = C, Order — specifically the prior Return
         Order)
        </td>
       </tr>
       <tr>
        <td>
         What does Check Division control, and what do blank/1/2 mean?
        </td>
        <td>
         How the system responds when Header Division deviates from an
         item's Division (copied from the Material Master): blank = no
         message, 1 = warning message, 2 = error message
        </td>
       </tr>
       <tr>
        <td>
         Where in the system can the movement types (e.g. 631, 633) for a
         Consignment goods issue be viewed?
        </td>
        <td>
         Delivery (Change mode) → Document Flow → select the Goods Issue
         (Consignment) line → Display Document, which shows the material
         document and its movement type
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
        <td><span className="tcode">VOV8</span></td>
        <td>
         Define Sales Document Types — the Details screen here houses all
         44 Document Type Controls, including every field covered today
        </td>
       </tr>
       <tr>
        <td><span className="tcode">SE16</span></td>
        <td>
         Display Table Contents — used to view VBAK data for a specific
         order number or an entire sales organization
        </td>
       </tr>
       <tr>
        <td><span className="tcode">SE11</span></td>
        <td>
         ABAP Dictionary — used to view the technical structure/fields of
         table VBAK
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VN01</span></td>
        <td>
         Define Number Ranges for Sales Documents — maintains the
         Internal and External number range intervals
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used throughout today's demos (Sales
         Document Block test, Number Systems, Item/Sub-Item Increment,
         Check Division)
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
        <td>SD Document Category values</td>
        <td>
         A=Inquiry, B=Quotation, C=Order, D=Item Proposal, E=Scheduling
         Agreement, G=Contracts, H=Returns, I=Free of Charge, K=Credit
         Memo, L=Debit Memo
        </td>
       </tr>
       <tr>
        <td>Indicator field</td>
        <td>
         Maintained only for RK, value D — causes each referenced invoice
         line item to split into two line items
        </td>
       </tr>
       <tr>
        <td>Sales Document Block worked example</td>
        <td>
         RK set to X in VOV8 → VA01 RK refused: "Sales order type RK is
         blocked for processing"
        </td>
       </tr>
       <tr>
        <td>Number range T-code and intervals</td>
        <td>
         VN01 → Change Intervals; standard interval 01 = internal, 02 =
         external (typical convention)
        </td>
       </tr>
       <tr>
        <td>Item Number Increment worked example</td>
        <td>
         Standard: 10, 20, 30...; Increment=1 gives 1, 2, 3...;
         Increment=100 gives 100, 200, 300...
        </td>
       </tr>
       <tr>
        <td>Sub-Item Increment worked example</td>
        <td>
         Computer (BOM main item 10) with Increment=1 → components
         CPU/Monitor/Keyboard/Mouse take 11, 12, 13, 14
        </td>
       </tr>
       <tr>
        <td>Reference Mandatory values</td>
        <td>
         RK = M (Invoice/Billing Document mandatory); SDF = C
         (Order/Return Order mandatory); all other standard types = blank
         (optional)
        </td>
       </tr>
       <tr>
        <td>Check Division values</td>
        <td>
         Blank = no message, 1 = warning message, 2 = error message
        </td>
       </tr>
       <tr>
        <td>Check Division worked example</td>
        <td>
         Header Division P3 (Insulin) vs. item Division P1 (from Material
         Master) → Check Division 1 gives a warning that still saves;
         Check Division 2 blocks the save with an error, same message
         text either way
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture began the systematic walkthrough of the
      <strong>44 Document Type Controls</strong> in
      <span className="tcode">VOV8</span> → Details, covering the first
      eight fields. <strong>SD Document Category</strong> was established as
      the true driver of a document's behavior (A through L mapping to
      Inquiry through Debit Memo), demonstrated by checking custom types
      PPIN/PPQT/PPOR against their categories A/B/C, with SE16 and SE11
      introduced as the tools for inspecting table VBAK's data and structure
      respectively. <strong>Indicator</strong> was shown to be maintained
      only for RK, value D, and to be the actual mechanism behind Invoice
      Correction Request's two-line-item split.
      <strong>Sales Document Block</strong> was demonstrated live, blocking
      RK and confirming the system's refusal message.
      <strong>Number Systems</strong> covered Internal (system-generated)
      versus External (user-entered) numbering, with VN01 as the
      configuration T-code. <strong>Item Number Increment</strong> and
      <strong>Sub-Item Increment</strong> were each demonstrated with worked
      numeric examples, the latter tied to the four sub-item-generating
      scenarios: BOM, Free Goods, Material Determination, and Cross Selling.
      <strong>Reference Mandatory</strong> was narrowed down to exactly two
      standard document types — RK (M, invoice reference) and SDF (C, order
      reference) — with all others left optional. Finally,
      <strong>Check Division</strong> was covered with a live demonstration
      of header-vs-item division mismatch producing a warning (value 1)
      versus a hard error (value 2). A closing Q&amp;A addressed where
      Consignment's underlying movement types (631/633) can be viewed via
      Delivery → Document Flow → Display Document, flagged for deeper
      coverage once Schedule Line Category is reached.
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
       >The system reads SD Document Category, not the document type
        ID</strong
       >
       — memorize the A–L mapping cold, since it's the actual switch that
       decides a document's identity
      </li>
      <li>
       <strong>Indicator D is RK's signature field</strong> — it's the
       single setting responsible for Invoice Correction Request's
       distinctive two-line-item behavior covered in an earlier lecture
      </li>
      <li>
       <strong>Sales Document Block is a hard stop</strong> — useful
       whenever a client wants a document type retired without deleting its
       configuration
      </li>
      <li>
       <strong>Reference Mandatory is the exception, not the rule</strong>
       — only RK and SDF force a reference in the standard system; every
       other document type leaves it as a user choice
      </li>
      <li>
       <strong>Check Division is a configurable safety net</strong> for a
       mismatch (header vs. item division) that would otherwise pass
       silently — decide warning vs. error based on how strict the client
       wants this control to be
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> continuing further into the 44
      Document Type Controls in VOV8, and building a live BOM example (tying
      back into today's Sub-Item Increment and the upcoming Display Range
      field).
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 49 Notes — Document Type Controls, Part 1 🎓
   </p>
  </div>
 );
};

export default SalesDocument49;
