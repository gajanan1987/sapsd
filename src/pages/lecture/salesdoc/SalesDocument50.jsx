const SalesDocument50 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-blue">
    <h1>📋 Lecture 50 — Document Type Controls, Part 2</h1>
    <p>
     SAP SD | Continuing the 44 Document Type Controls in VOV8 — Item
     Division, Read Info Record, Check/Enter PO Number, Commitment Date,
     Probability, Simple vs. Automatic Credit Check with Risk Categories,
     Credit Group, Screen Sequence Group, and an introduction to Incompletion
     Procedure
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered the first eight Document Type Controls in
      <span className="tcode">VOV8</span> → Details: SD Document Category,
      Indicator, Sales Document Block, Number Systems, Item/Sub-Item
      Increment, Reference Mandatory, and Check Division. Today continues
      immediately from Check Division into
      <strong>Item Division</strong> and works through nine more controls,
      including the two credit-check fields that form the basis of Credit
      Management.
     </div>
    </div>

    {/* <!-- Section 1: Item Division --> */}
    <div className="card teal">
     <h2><span className="badge">9</span> Item Division</h2>
     <div className="callout teal">
      💡 <strong>Item Division</strong> controls
      <strong>where a line item's Division value comes from</strong>
      when a sales document is created — directly continuing the Header
      Division vs. Item Division scenario from Check Division in the
      previous lecture.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Division Setting</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Checked</td>
        <td>
         Line item Division is copied from the
         <strong>Material Master</strong> (worked example:
         <code>P1</code>)
        </td>
       </tr>
       <tr>
        <td>Unchecked</td>
        <td>
         Line item Division is copied from the
         <strong>Header Division</strong> instead
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 This field is what actually decides whether a Header/Item Division
      mismatch can even occur in the first place — with Item Division
      unchecked, the item simply inherits the header's value and Check
      Division's warning/error logic never has anything to flag.
     </p>
    </div>

    {/* <!-- Section 2: Read Info Record --> */}
    <div className="card orange">
     <h2><span className="badge">10</span> Read Info Record</h2>
     <div className="callout orange">
      💡 <strong>Read Info Record</strong> controls whether the system reads
      the <strong>Customer Material Info Record (CMIR)</strong>
      while processing a sales document.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Read Info Record Setting</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Checked</td>
        <td>
         System reads CMIR and determines its data (e.g. customer's own
         material number, description) into the sales document
        </td>
       </tr>
       <tr>
        <td>Unchecked</td>
        <td>System does not read CMIR at all</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 3: Check PO Number & Enter PO Number --> */}
    <div className="card purple">
     <h2>
      <span className="badge">11–12</span> Check Purchase Order Number &amp;
      Enter PO Number
     </h2>
     <div className="callout purple">
      💡 <strong>Check Purchase Order Number:</strong> when maintained, the
      system checks the
      <strong
      >combination of Customer + PO Number against previous orders</strong
      >
      while creating a new sales order. If the same combination already
      exists, the system throws a <strong>warning message</strong> — a
      safeguard against
      <strong>accidental duplicate order entry</strong> for the same
      customer PO.
     </div>
     <div className="callout red">
      ⚠️ <strong>Enter PO Number</strong> (checked): if the PO Number field
      is left <strong>blank</strong> while creating a sales order, the
      system automatically
      <strong
      >copies the sales order number itself into the PO Number
       field</strong
      >
      after Save — this prevents the field from staying empty.
     </div>
     <div className="callout gold">
      📖 <strong>Q&amp;A — effect if this checkbox is unchecked:</strong> if
      Enter PO Number is <em>not</em> checked and the user leaves PO Number
      blank, the field simply <strong>stays blank</strong> — the sales order
      number is not copied in as a fallback. Because PO Number is typically
      a mandatory field, the document then goes to
      <strong>Incomplete status</strong>, and incomplete documents cannot be
      processed further (no delivery, no billing) until completed.
     </div>
    </div>

    {/* <!-- Section 4: Commitment Date --> */}
    <div className="card red">
     <h2><span className="badge">13</span> Commitment Date</h2>
     <div className="callout red">
      💡 Setting <strong>Commitment Date = <code>C</code></strong>
      displays an extra field on the item's
      <strong>Schedule Lines</strong> tab — the Commitment Date field
      itself. An order carrying a Commitment Date is given
      <strong>first preference</strong> when the system determines
      quantities into the sales document (i.e., such orders are prioritized
      ahead of others without a commitment date during
      allocation/scheduling).
     </div>
    </div>

    {/* <!-- Section 5: Probability --> */}
    <div className="card gold">
     <h2><span className="badge">14</span> Probability</h2>
     <div className="callout gold">
      💡 <strong>Probability</strong> controls the
      <strong
      >chance of an Inquiry or Quotation converting into a sales
       order</strong
      >
      — used in sales forecasting/pipeline reporting to weight how likely a
      pre-sales document is to actually become revenue.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document Type</th>
        <th>Standard Probability</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Inquiry (<code>IN</code>)</td>
        <td>30%</td>
       </tr>
       <tr>
        <td>Quotation (<code>QT</code>)</td>
        <td>70%</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 A Quotation naturally carries a higher standard probability than an
      Inquiry, since it represents a more advanced, firmer-priced stage of
      the pre-sales cycle.
     </p>
    </div>

    {/* <!-- Section 6: Check Credit Limit --> */}
    <div className="card indigo">
     <h2><span className="badge">15</span> Check Credit Limit</h2>
     <div className="callout indigo">
      💡 <strong>Check Credit Limit</strong> controls whether a document
      type goes through <strong>Simple Credit Check</strong> or
      <strong>Automatic Credit Check</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Value</th>
        <th>Credit Check Type</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>A</code> / <code>B</code> / <code>C</code></td>
        <td>Simple Credit Check</td>
       </tr>
       <tr>
        <td><code>D</code></td>
        <td>Automatic Credit Check</td>
       </tr>
      </tbody>
     </table>
     <div className="compare-grid">
      <div className="compare-col cc-calc">
       <strong>Simple Credit Check</strong>
       <ul>
        <li>No concept of risk categories</li>
        <li>
         If credit limit exceeds, system blocks
         <strong>only at Order level</strong>
        </li>
       </ul>
      </div>
      <div className="compare-col cc-base">
       <strong>Automatic Credit Check</strong>
       <ul>
        <li>Uses Risk Categories: High, Medium, Low</li>
        <li>
         Block point depends on risk category — Order, Delivery, or PGI
         level
        </li>
       </ul>
      </div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Risk Category</th>
        <th>Block Point If Credit Limit Exceeds</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>High Risk</td>
        <td>Order level</td>
       </tr>
       <tr>
        <td>Medium Risk</td>
        <td>Delivery level</td>
       </tr>
       <tr>
        <td>Low Risk</td>
        <td>PGI level</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 The core distinction: Simple Credit Check has exactly
      <strong>one</strong> block point (Order), regardless of customer risk
      profile; Automatic Credit Check can block at
      <strong>different stages</strong> of the sales cycle depending on how
      risky that specific customer is classified.
     </p>
    </div>

    {/* <!-- Section 7: Credit Group --> */}
    <div className="card brown">
     <h2><span className="badge">16</span> Credit Group</h2>
     <div className="callout brown">
      💡 <strong>Credit Group</strong> is applicable
      <strong>only when Automatic Credit Check is active</strong>. It
      controls
      <strong
      >which transaction (Order, Delivery, or PGI) should actually be
       blocked</strong
      >
      when the customer's credit limit is exceeded — working together with
      Risk Category to pinpoint exactly where the block takes effect.
     </div>
    </div>

    {/* <!-- Section 8: Screen Sequence Group --> */}
    <div className="card cyan">
     <h2><span className="badge">17</span> Screen Sequence Group</h2>
     <div className="callout cyan">
      💡 <strong>Screen Sequence Group</strong> controls
      <strong>which screen layout is displayed</strong> while creating a
      sales document — different document types can be steered toward
      different header/item screen sequences through this field.
     </div>
    </div>

    {/* <!-- Section 9: Incompletion Procedure (intro) --> */}
    <div className="card pink">
     <h2>
      <span className="badge">18</span> Incompletion Procedure — Introduced
     </h2>
     <div className="callout pink">
      💡 <strong>Incompletion Procedure</strong> is a procedure consisting
      of a <strong>list of mandatory fields</strong> that a user has to
      enter while creating a sales document — if any of those fields are
      left blank, the document is flagged Incomplete (as already seen with
      the PO Number example earlier in this lecture).
     </div>
     <div className="callout red">
      ⚠️ Class ended here due to a network connectivity issue before
      Incompletion Procedure could be covered in full detail — full
      coverage, including how the field list is configured and how the
      Incompletion Log works, continues next class.
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
         What does Item Division control, and what happens when it is
         unchecked?
        </td>
        <td>
         It decides whether a line item's Division comes from the
         Material Master (checked) or from the Header Division
         (unchecked) — unchecking it means item and header division can
         never mismatch, since the item simply inherits the header's
         value
        </td>
       </tr>
       <tr>
        <td>What does Read Info Record control?</td>
        <td>
         Whether the system reads the Customer Material Info Record
         (CMIR) and pulls its data into the sales document; unchecked
         means CMIR is never read
        </td>
       </tr>
       <tr>
        <td>
         What does Check Purchase Order Number do, and why is it useful?
        </td>
        <td>
         It checks the Customer + PO Number combination against previous
         orders and gives a warning if the same combination already
         exists — this helps prevent accidental duplicate order entry
        </td>
       </tr>
       <tr>
        <td>
         What happens if Enter PO Number is checked and the user leaves
         PO Number blank?
        </td>
        <td>
         After Save, the system automatically copies the sales order
         number itself into the PO Number field
        </td>
       </tr>
       <tr>
        <td>
         What happens if Enter PO Number is left unchecked and the user
         leaves PO Number blank?
        </td>
        <td>
         The field stays blank; since PO Number is typically mandatory,
         the document goes to Incomplete status and cannot be processed
         further until completed
        </td>
       </tr>
       <tr>
        <td>What does setting Commitment Date to C do?</td>
        <td>
         It displays an extra Commitment Date field on the item's
         Schedule Lines tab, and any order carrying a commitment date is
         given first preference when the system determines quantities
         into the sales document
        </td>
       </tr>
       <tr>
        <td>
         What does Probability control, and what are the standard values
         for Inquiry and Quotation?
        </td>
        <td>
         It controls the chance of an Inquiry or Quotation converting
         into a sales order; standard Inquiry probability is 30%,
         standard Quotation probability is 70%
        </td>
       </tr>
       <tr>
        <td>
         What does Check Credit Limit control, and what values enable
         Simple vs. Automatic Credit Check?
        </td>
        <td>
         It controls which credit check type applies to the document type
         — A, B, or C enable Simple Credit Check; D enables Automatic
         Credit Check
        </td>
       </tr>
       <tr>
        <td>
         What is the key structural difference between Simple and
         Automatic Credit Check?
        </td>
        <td>
         Simple Credit Check has no risk categories and blocks only at
         Order level if the credit limit is exceeded; Automatic Credit
         Check uses risk categories (High/Medium/Low) and can block at
         Order, Delivery, or PGI level depending on the category
        </td>
       </tr>
       <tr>
        <td>
         In Automatic Credit Check, which risk category blocks at which
         level?
        </td>
        <td>
         High Risk blocks at Order level, Medium Risk blocks at Delivery
         level, Low Risk blocks at PGI level
        </td>
       </tr>
       <tr>
        <td>
         What does Credit Group control, and when is it applicable?
        </td>
        <td>
         It is applicable only for Automatic Credit Check, and it
         controls which transaction — Order, Delivery, or PGI — should
         actually be blocked when the credit limit is exceeded
        </td>
       </tr>
       <tr>
        <td>What does Screen Sequence Group control?</td>
        <td>
         Which screen layout is displayed while creating a sales document
        </td>
       </tr>
       <tr>
        <td>What is an Incompletion Procedure, in plain terms?</td>
        <td>
         A procedure consisting of a list of mandatory fields the user
         must enter while creating a sales document; missing any of them
         flags the document as Incomplete
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
         Define Sales Document Types — Details screen houses all fields
         covered today (Item Division through Incompletion Procedure)
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 No new T-codes were introduced this lecture beyond VOV8 itself —
      today's session stayed entirely within the Document Type Controls'
      Details screen, field by field.
     </p>
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
        <td>Item Division</td>
        <td>
         Checked = item division from Material Master (e.g. P1);
         Unchecked = item division from Header Division
        </td>
       </tr>
       <tr>
        <td>Read Info Record</td>
        <td>
         Checked = system reads CMIR (Customer Material Info Record) into
         the document; Unchecked = CMIR not read
        </td>
       </tr>
       <tr>
        <td>Check Purchase Order Number</td>
        <td>
         Checks Customer + PO Number combination against prior orders;
         warning message on duplicate
        </td>
       </tr>
       <tr>
        <td>Enter PO Number</td>
        <td>
         Checked: blank PO Number auto-fills with the sales order number
         after Save; Unchecked: stays blank → document goes Incomplete
        </td>
       </tr>
       <tr>
        <td>Commitment Date</td>
        <td>
         Value C shows a Commitment Date field on the Schedule Lines tab;
         such orders get first preference in quantity determination
        </td>
       </tr>
       <tr>
        <td>Probability (standard)</td>
        <td>Inquiry (IN) = 30%; Quotation (QT) = 70%</td>
       </tr>
       <tr>
        <td>Check Credit Limit values</td>
        <td>A/B/C = Simple Credit Check; D = Automatic Credit Check</td>
       </tr>
       <tr>
        <td>Automatic Credit Check — risk category block points</td>
        <td>
         High Risk → Order level; Medium Risk → Delivery level; Low Risk
         → PGI level
        </td>
       </tr>
       <tr>
        <td>Credit Group</td>
        <td>
         Applicable only for Automatic Credit Check; controls which
         transaction (Order/Delivery/PGI) is blocked
        </td>
       </tr>
       <tr>
        <td>Screen Sequence Group</td>
        <td>
         Controls which screen layout displays during sales document
         creation
        </td>
       </tr>
       <tr>
        <td>Incompletion Procedure</td>
        <td>
         List of mandatory fields for sales document creation — full
         configuration detail to continue next class
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture continued the Document Type Controls walkthrough from
      Check Division directly into <strong>Item Division</strong>
      (item division sourced from the Material Master when checked, or from
      Header Division when unchecked) and
      <strong>Read Info Record</strong> (controls whether CMIR is read into
      the document). It then covered the two PO Number controls:
      <strong>Check Purchase Order Number</strong> (warns on duplicate
      Customer+PO combinations to prevent accidental duplicate orders) and
      <strong>Enter PO Number</strong> (auto-fills a blank PO Number with
      the sales order number when checked; leaves the document Incomplete
      when unchecked and PO Number is blank).
      <strong>Commitment Date</strong> was covered next (value C exposes a
      Schedule Lines field and gives such orders first preference in
      quantity determination), followed by
      <strong>Probability</strong> (standard 30% for Inquiry, 70% for
      Quotation — the chance of converting into a sales order). The bulk of
      the lecture then focused on <strong>Check Credit Limit</strong>,
      contrasting <strong>Simple Credit Check</strong> (values A/B/C — no
      risk categories, blocks only at Order level) with
      <strong>Automatic Credit Check</strong> (value D — High/Medium/Low
      risk categories blocking at Order/Delivery/PGI level respectively),
      and <strong>Credit Group</strong> (applicable only to Automatic Credit
      Check, controlling which specific transaction gets blocked). The
      lecture closed with brief coverage of
      <strong>Screen Sequence Group</strong> (controls which screen layout
      displays) and an introduction to
      <strong>Incompletion Procedure</strong> (a list of mandatory fields),
      with full detail deferred to next class due to a network connectivity
      issue.
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
       >Item Division is the actual root cause behind Check Division
        scenarios</strong
       >
       — unchecking it removes the possibility of a header/item mismatch
       entirely
      </li>
      <li>
       <strong
       >Enter PO Number vs. Check Purchase Order Number solve different
        problems</strong
       >
       — one auto-fills a blank field, the other detects likely duplicate
       entries; don't confuse the two in a client discussion
      </li>
      <li>
       <strong
       >Simple Credit Check has one block point; Automatic Credit Check
        has three</strong
       >
       — risk category (High/Medium/ Low) is what unlocks the extra
       granularity in Automatic Credit Check
      </li>
      <li>
       <strong
       >Credit Group only matters once you're already in Automatic Credit
        Check</strong
       >
       — it has no role at all under Simple Credit Check
      </li>
      <li>
       <strong
       >Incompletion Procedure ties directly back to today's PO Number
        example</strong
       >
       — it's the general mechanism behind any field-level "document
       incomplete" status, not just PO Number
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> full coverage of Incompletion
      Procedure and continuing further into the remaining Document Type
      Controls.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 50 Notes — Document Type Controls, Part 2 🎓
   </p>
  </div>
 );
};

export default SalesDocument50;
