const SalesDocument51 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-teal">
    <h1>📑 Lecture 51 — Document Type Controls, Part 3</h1>
    <p>
     SAP SD | Closing out Incompletion Procedure, then working through
     Transaction Group, Document Pricing Procedure, Status Profile, Alternate
     Sales Document Types, Variant, Display Range, F Code for Overview
     Screen, Quotation/Outline Agreement/Incomplete Messages, Delivery Type,
     and Immediate Delivery
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class was cut short by a network issue right at
      <strong>Credit Group</strong>, so today re-confirms Credit Group and
      Screen Sequence Group before moving on, then completes
      <strong>Incompletion Procedure</strong> in full and works through
      twelve further Document Type Controls, taking the series through
      Delivery Type and Immediate Delivery. A handful of controls remain and
      will be covered next class.
     </div>
    </div>

    {/* <!-- Section 1: Credit Group & Screen Sequence Group recap --> */}
    <div className="card teal">
     <h2>
      <span className="badge">16–17</span> Credit Group &amp; Screen
      Sequence Group — Confirmed Recap
     </h2>
     <div className="callout teal">
      💡 <strong>Credit Group</strong> (applicable only under Automatic
      Credit Check) controls
      <strong>which transaction should be blocked</strong> when a customer's
      credit limit is exceeded — Order, Delivery, or PGI.
     </div>
     <div className="callout blue">
      💡 <strong>Screen Sequence Group</strong> controls
      <strong>which screen should be displayed</strong> while creating a
      sales document.
     </div>
    </div>

    {/* <!-- Section 2: Incompletion Procedure - full --> */}
    <div className="card orange">
     <h2>
      <span className="badge">18</span> Incompletion Procedure — Completed
     </h2>
     <div className="callout orange">
      💡 <strong>Incompletion Procedure</strong> is a procedure consisting
      of a <strong>list of mandatory fields</strong> that the user has to
      enter while creating a sales order.
     </div>
     <div className="callout red">
      ⚠️ <strong>If a mandatory field is missing:</strong> either the system
      <strong>will not allow the document to be saved at all</strong>, or —
      depending on configuration — the system
      <strong>does allow the save</strong>, but the document's status is
      then set to <strong>Incomplete</strong>. Either way, an
      <strong>incomplete document cannot be processed</strong> further (no
      delivery, no billing) until the missing fields are filled in.
     </div>
     <p className="note-text">
      📌 This is the general mechanism behind the PO Number example covered
      in the previous lecture — PO Number is simply one of the fields that
      can be listed in a document type's Incompletion Procedure.
     </p>
    </div>

    {/* <!-- Section 3: Transaction Group --> */}
    <div className="card purple">
     <h2><span className="badge">19</span> Transaction Group</h2>
     <div className="callout purple">
      💡 <strong>Transaction Group</strong> controls the
      <strong>T-code family</strong> associated with a sales document type —
      i.e., which transaction (VA11, VA21, VA01, etc.) is used to process
      that category of document.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Transaction Group</th>
        <th>Document Category</th>
        <th>T-Code</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>0</code></td>
        <td>Sales Order</td>
        <td><span className="tcode">VA01</span></td>
       </tr>
       <tr>
        <td><code>1</code></td>
        <td>Inquiry</td>
        <td><span className="tcode">VA11</span></td>
       </tr>
       <tr>
        <td><code>2</code></td>
        <td>Quotation</td>
        <td><span className="tcode">VA21</span></td>
       </tr>
       <tr>
        <td><code>3</code></td>
        <td>Scheduling Agreement</td>
        <td><span className="tcode">VA31</span></td>
       </tr>
       <tr>
        <td><code>4</code></td>
        <td>Contracts</td>
        <td><span className="tcode">VA41</span></td>
       </tr>
       <tr>
        <td><code>5</code></td>
        <td>Item Proposal</td>
        <td><span className="tcode">VA51</span></td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 4: Document Pricing Procedure --> */}
    <div className="card red">
     <h2><span className="badge">20</span> Document Pricing Procedure</h2>
     <div className="callout red">
      💡 <strong>Document Pricing Procedure</strong> is
      <strong
      >one of the parameters used to determine the Pricing
       Procedure</strong
      >
      for a sales document (alongside Customer Pricing Procedure and Sales
      Area).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document Pricing Procedure</th>
        <th>Used By</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>A</code></td>
        <td>Standard sales documents</td>
       </tr>
       <tr>
        <td><code>C</code></td>
        <td>
         Free of Charge (<code>FD</code>) and Subsequent Delivery Free of
         Charge (<code>SDF</code>)
        </td>
       </tr>
       <tr>
        <td><code>Y</code></td>
        <td>Value Contracts (<code>WK1</code>, <code>WK2</code>)</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 T-code for Pricing Procedure Determination:
      <span className="tcode">OVKK</span> — the same T-code used earlier in
      the course to assign Document Pricing Procedure <code>C</code> for the
      Free of Charge process's sales area.
     </p>
    </div>

    {/* <!-- Section 5: Status Profile --> */}
    <div className="card gold">
     <h2><span className="badge">21</span> Status Profile</h2>
     <div className="callout gold">
      💡 <strong>Status Profile</strong> drives an
      <strong>order release process</strong>: after an end user creates a
      sales order, the order is routed to an
      <strong>authorized person</strong> to cross-check and release it. Only
      once the order is <strong>released</strong> does the system allow a
      Delivery or Invoice to be created against it.
     </div>
    </div>

    {/* <!-- Section 6: Alternate Sales Document Type 1 & 2 --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">22–23</span> Alternate Sales Document Type 1
      &amp; 2
     </h2>
     <div className="callout indigo">
      💡 <strong>Alternate Sales Document Type 1</strong> and
      <strong>Alternate Sales Document Type 2</strong> help
      <strong
      >switch a sales document from one document type to another</strong
      >
      during processing — offering the system a fallback/alternate type it
      can use instead of the one originally entered.
     </div>
    </div>

    {/* <!-- Section 7: Variant --> */}
    <div className="card brown">
     <h2><span className="badge">24</span> Variant</h2>
     <div className="callout brown">
      💡 <strong>Variant</strong> helps control
      <strong>individual fields</strong> on the sales document — deciding
      whether a given field is
      <strong>Mandatory, Optional, Display-only, or Suppressed</strong>.
     </div>
     <p className="note-text">
      📌 T-code to create a Variant: <span className="tcode">SHD0</span>.
     </p>
    </div>

    {/* <!-- Section 8: Display Range --> */}
    <div className="card cyan">
     <h2><span className="badge">25</span> Display Range</h2>
     <div className="callout cyan">
      💡 <strong>Display Range</strong> controls whether the Item Overview
      screen shows <strong>all items</strong> or only
      <strong>main items</strong> — relevant whenever a document contains
      sub-items (e.g. from a BOM), since a sub-item's parent "main item
      place" was already covered in the Sub-Item Increment field.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Display Range Value</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>ALL</code></td>
        <td>Display all items, including sub-items</td>
       </tr>
       <tr>
        <td><code>HAUP</code></td>
        <td>
         Display only main items — sub-items are hidden from the overview
         screen
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 9: F Code for Overview Screen --> */}
    <div className="card pink">
     <h2><span className="badge">26</span> F Code for Overview Screen</h2>
     <div className="callout pink">
      💡 <strong>F Code for Overview Screen</strong> controls
      <strong>which screen is displayed by default</strong> when creating a
      sales document.
     </div>
    </div>

    {/* <!-- Section 10: Quotation Messages --> */}
    <div className="card teal">
     <h2><span className="badge">27</span> Quotation Messages</h2>
     <div className="callout teal">
      💡 If <strong>Quotation Messages</strong> is maintained, then while
      creating a sales order the system checks whether the customer has any
      <strong>open Quotations</strong>. If open Quotations exist, the system
      <strong>proposes the list</strong> so the user can pull the order in
      with reference to one of them.
     </div>
    </div>

    {/* <!-- Section 11: Outline Agreement Messages --> */}
    <div className="card orange">
     <h2><span className="badge">28</span> Outline Agreement Messages</h2>
     <div className="callout orange">
      💡 If <strong>Outline Agreement Messages</strong> is maintained, then
      while creating a sales order the system checks whether the customer
      has any <strong>open Contracts</strong>. If open Contracts exist, the
      system <strong>proposes the list</strong>, exactly parallel to how
      Quotation Messages works for Quotations.
     </div>
    </div>

    {/* <!-- Section 12: Incomplete Messages --> */}
    <div className="card purple">
     <h2><span className="badge">29</span> Incomplete Messages</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Incomplete Messages Setting</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Checked</td>
        <td>
         System will <strong>not allow saving</strong> the sales document
         if it is incomplete
        </td>
       </tr>
       <tr>
        <td>Unchecked</td>
        <td>
         System <strong>allows saving</strong> even if incomplete — but
         the document's status remains Incomplete
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 This field is what decides whether Incompletion Procedure's
      mandatory-field check is enforced as a hard save-block or merely as a
      status flag on a document that does save.
     </p>
    </div>

    {/* <!-- Section 13: Delivery Type & Immediate Delivery --> */}
    <div className="card red">
     <h2>
      <span className="badge">30–31</span> Delivery Type &amp; Immediate
      Delivery
     </h2>
     <div className="callout red">
      💡 <strong>Delivery Type:</strong> if a Delivery Type is maintained on
      the sales document type, the system
      <strong>automatically determines that delivery type</strong> when the
      delivery is created — the user doesn't need to select it manually.
     </div>
     <div className="callout gold">
      📖 <strong>Immediate Delivery:</strong> if set to <code>X</code> or
      <code>A</code>, the system
      <strong
      >automatically creates the Delivery the moment the sales order is
       saved</strong
      >, without a separate manual Delivery-creation step.
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
         What are the two possible outcomes if a mandatory field from
         Incompletion Procedure is missing?
        </td>
        <td>
         Either the system refuses to save the document entirely, or it
         allows the save but marks the document's status as Incomplete —
         in both cases the document cannot be processed further until
         completed
        </td>
       </tr>
       <tr>
        <td>
         What does Transaction Group control, and what T-code corresponds
         to group 0?
        </td>
        <td>
         It controls the T-code family used for that document category;
         group 0 = Sales Order = VA01 (1=Inquiry/VA11, 2=Quotation/VA21,
         3=Scheduling Agreement/VA31, 4=Contracts/VA41, 5=Item
         Proposal/VA51)
        </td>
       </tr>
       <tr>
        <td>
         What does Document Pricing Procedure control, and what are the
         standard values for normal orders, Free of Charge, and Value
         Contracts?
        </td>
        <td>
         It's one of the parameters used to determine a document's
         Pricing Procedure; A = standard sales documents, C = Free of
         Charge (FD) and Subsequent Delivery Free of Charge (SDF), Y =
         Value Contracts (WK1/WK2)
        </td>
       </tr>
       <tr>
        <td>What T-code is used for Pricing Procedure Determination?</td>
        <td>OVKK</td>
       </tr>
       <tr>
        <td>What does Status Profile enable?</td>
        <td>
         An order release process — after an end user creates a sales
         order, an authorized person must cross-check and release it
         before Delivery or Invoice can be created
        </td>
       </tr>
       <tr>
        <td>What do Alternate Sales Document Type 1 and 2 do?</td>
        <td>
         They allow a sales document to be switched from one document
         type to another during processing, offering a fallback/alternate
         type
        </td>
       </tr>
       <tr>
        <td>What does Variant control, and what T-code creates one?</td>
        <td>
         It controls whether individual fields on the sales document are
         Mandatory, Optional, Display, or Suppressed; created via T-code
         SHD0
        </td>
       </tr>
       <tr>
        <td>
         What does Display Range control, and what do ALL and HAUP mean?
        </td>
        <td>
         Whether the Item Overview screen shows all items or only main
         items; ALL = display all items (including sub-items), HAUP =
         display only main items
        </td>
       </tr>
       <tr>
        <td>What does F Code for Overview Screen control?</td>
        <td>
         Which screen is displayed by default when creating a sales
         document
        </td>
       </tr>
       <tr>
        <td>
         What do Quotation Messages and Outline Agreement Messages each
         check for?
        </td>
        <td>
         Quotation Messages checks whether the customer has any open
         Quotations and proposes the list if found; Outline Agreement
         Messages does the same for open Contracts
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between Incomplete Messages checked vs.
         unchecked?
        </td>
        <td>
         Checked blocks saving an incomplete document outright; unchecked
         allows the save but leaves the document's status as Incomplete
        </td>
       </tr>
       <tr>
        <td>
         What does maintaining a Delivery Type on the document type do?
        </td>
        <td>
         The system automatically determines that delivery type when a
         delivery is created, without the user having to select it
         manually
        </td>
       </tr>
       <tr>
        <td>What does setting Immediate Delivery to X or A do?</td>
        <td>
         The system automatically creates the delivery the instant the
         sales order is saved, skipping a separate manual
         delivery-creation step
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
         Define Sales Document Types — Details screen houses all controls
         covered today
        </td>
       </tr>
       <tr>
        <td>
         <span className="tcode"
         >VA01 / VA11 / VA21 / VA31 / VA41 / VA51</span
         >
        </td>
        <td>
         Create Order / Inquiry / Quotation / Scheduling Agreement /
         Contract / Item Proposal respectively — mapped via Transaction
         Group values 0/1/2/3/4/5
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OVKK</span></td>
        <td>
         Pricing Procedure Determination — assigns Document Pricing
         Procedure (A/C/Y etc.) per sales area
        </td>
       </tr>
       <tr>
        <td><span className="tcode">SHD0</span></td>
        <td>
         Create Transaction Variant — used to set individual sales
         document fields as Mandatory/Optional/Display/Suppressed
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
        <td>Transaction Group mapping</td>
        <td>
         0=Order/VA01, 1=Inquiry/VA11, 2=Quotation/VA21, 3=Scheduling
         Agreement/VA31, 4=Contracts/VA41, 5=Item Proposal/VA51
        </td>
       </tr>
       <tr>
        <td>Document Pricing Procedure values</td>
        <td>
         A = standard; C = Free of Charge (FD) / Subsequent Delivery Free
         of Charge (SDF); Y = Value Contracts (WK1/WK2)
        </td>
       </tr>
       <tr>
        <td>Status Profile</td>
        <td>
         Drives order release: end user creates order → authorized person
         cross-checks and releases → only then Delivery/Invoice allowed
        </td>
       </tr>
       <tr>
        <td>Alternate Sales Document Type 1 / 2</td>
        <td>
         Enables switching a document from one type to another during
         processing
        </td>
       </tr>
       <tr>
        <td>Variant</td>
        <td>
         Field-level control (Mandatory/Optional/Display/Suppress),
         created via SHD0
        </td>
       </tr>
       <tr>
        <td>Display Range values</td>
        <td>
         ALL = all items shown; HAUP = only main items shown (sub-items
         hidden)
        </td>
       </tr>
       <tr>
        <td>Incomplete Messages</td>
        <td>
         Checked = incomplete document blocked from saving; Unchecked =
         saves anyway with Incomplete status
        </td>
       </tr>
       <tr>
        <td>Immediate Delivery values</td>
        <td>
         X or A = delivery auto-created immediately on sales order save
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture reopened with a quick confirmed recap of
      <strong>Credit Group</strong> and
      <strong>Screen Sequence Group</strong> (interrupted last class by a
      network issue), then fully completed
      <strong>Incompletion Procedure</strong> — a list of mandatory fields
      whose absence either blocks saving outright or leaves the document
      Incomplete and unprocessable. It then moved through a long run of
      further Document Type Controls:
      <strong>Transaction Group</strong> (mapping document categories to
      their T-codes, 0–5 → VA01/VA11/VA21/VA31/VA41/VA51),
      <strong>Document Pricing Procedure</strong> (A standard, C for Free of
      Charge/SDF, Y for Value Contracts, determined via T-code OVKK),
      <strong>Status Profile</strong> (the order release/approval workflow
      gating Delivery and Invoice creation),
      <strong>Alternate Sales Document Type 1 &amp; 2</strong>
      (switching between document types),
      <strong>Variant</strong> (field-level
      Mandatory/Optional/Display/Suppress control via SHD0),
      <strong>Display Range</strong> (ALL vs. HAUP for showing all items or
      only main items), <strong>F Code for Overview Screen</strong> (default
      screen on document creation), <strong>Quotation Messages</strong> and
      <strong>Outline Agreement Messages</strong> (proposing open
      Quotations/Contracts for a customer during order creation),
      <strong>Incomplete Messages</strong> (whether an incomplete document
      can be saved at all), and finally <strong>Delivery Type</strong> and
      <strong>Immediate Delivery</strong> (auto-determining the delivery
      type and, with value X/A, auto-creating the delivery itself on order
      save). A handful of remaining controls were deferred to the next
      class.
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
       >Incomplete Messages decides how strict Incompletion Procedure
        actually is</strong
       >
       — the field list is meaningless without this switch deciding whether
       missing fields hard-block the save
      </li>
      <li>
       <strong
       >Transaction Group is the bridge between document category and
        T-code</strong
       >
       — memorize the 0–5 mapping, it comes up constantly when
       troubleshooting "wrong transaction" issues
      </li>
      <li>
       <strong
       >Document Pricing Procedure quietly drives which pricing procedure
        gets determined</strong
       >
       — a mismatch here is a very common root cause of "no pricing
       procedure could be determined" errors, as seen earlier with the Free
       of Charge process
      </li>
      <li>
       <strong>Status Profile is SAP's built-in approval gate</strong>
       — useful whenever a client wants a manager sign-off before an order
       can move to delivery/billing
      </li>
      <li>
       <strong
       >Immediate Delivery = X/A removes a manual step entirely</strong
       >
       — worth flagging to clients who want faster order-to-delivery
       turnaround for specific document types
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> the remaining Document Type Controls,
      continuing from where today left off.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 51 Notes — Document Type Controls, Part 3 🎓
   </p>
  </div>
 );
};

export default SalesDocument51;
