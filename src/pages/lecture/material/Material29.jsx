const Material29 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-orange">
    <h1>
     🚚 Lecture 29 — Fields in Customer Master: Industry, Unloading Points,
     Contact Person &amp; Reconciliation Account
    </h1>
    <p>
     SAP SD | Delivery planning via unloading points and customer calendars,
     plus the GL link that tracks customer outstanding
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered the Marketing tab up through Customer
      Classification. Today continues Customer Master fields — Industry, Key
      Figures, Regional Market, Unloading Points, Export Data, Contact
      Person, and Reconciliation Account.
     </div>
    </div>

    {/* <!-- Section 1: Industry --> */}
    <div className="card teal">
     <h2><span className="badge">8</span> Marketing Tab — Industry</h2>
     <div className="callout teal">
      💡 <strong>Industry</strong> classifies customers based on the
      industry they belong to.
     </div>
     <div className="callout blue">
      🏭 <strong>Worked example:</strong> a client that manufactures a
      lubrication system (grease, oil) for heavy machinery sells to
      essentially <em>every</em> manufacturing company, since every
      manufacturing company needs machinery lubrication. In that case,
      customers are grouped by industry — Cement, Pharma, Textile, Chemical,
      Automobile, and so on.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Reporting or Analysis</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Discounts</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📌 <strong>Not used in this project:</strong> Alchem's customers are
      dealers, distributors, and hospitals — not industrial customers — so
      this field isn't relevant here. It's still demonstrated for
      completeness.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Master Data</span>
      <span className="sep">→</span>
      <span className="node">Business Partners</span>
      <span className="sep">→</span> <span className="node">Customers</span>
      <span className="sep">→</span> <span className="node">Marketing</span>
      <span className="sep">→</span>
      <span className="node">Define Industry Sector for Customers</span>
     </div>
     <p className="note-text">
      New Entries → P001 (Cement Industry), P002 (Pharma Industry), P003
      (Automobile Industry) → Save. The same F1 → customizing key →
      "Continue without specifying project" shortcut from last class works
      here too.
     </p>
    </div>

    {/* <!-- Section 2: Key Figures - Annual Sales --> */}
    <div className="card gold">
     <h2><span className="badge">9</span> Key Figures — Annual Sales</h2>
     <div className="callout gold">
      💡 <strong>Annual Sales</strong> records the customer's
      <strong>last year's sales</strong>, for comparison purposes.
     </div>
     <p>
      Fields: Currency, Fiscal Year, Amount. Example: currency
      <code>INR</code>, Fiscal Year Variant <code>V3</code>
      (April–March), and last year's (Apr–Mar) sales value of
      <strong>₹10.5 crores</strong>.
     </p>
     <div className="callout blue">
      📊 <strong>Why it matters:</strong> management regularly compares
      "last year's sales" against "sales achieved so far this year" when
      reviewing performance — this field just needs updating once a year,
      since only the prior year's figure is stored.
     </div>
    </div>

    {/* <!-- Section 3: Regional Market --> */}
    <div className="card purple">
     <h2><span className="badge">10</span> Regional Market</h2>
     <div className="callout purple">
      💡 <strong>Regional Market</strong> classifies a customer's
      <strong>location</strong> into A-class, B-class, or C-class market.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Class</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>A-class</td>
        <td>Locations where sales are high</td>
       </tr>
       <tr>
        <td>B-class</td>
        <td>Locations where sales are normal</td>
       </tr>
       <tr>
        <td>C-class</td>
        <td>Locations where sales are low</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      ✍️ <strong>Manual field:</strong> management classifies each city's
      locations into A/B/C, and the user manually selects the matching class
      on the Customer Master based on the customer's address. Purpose:
      reporting/analysis only.
     </div>
    </div>

    {/* <!-- Section 4: Unloading Points --> */}
    <div className="card indigo">
     <h2><span className="badge">11</span> Unloading Points</h2>
     <div className="callout indigo">
      💡 <strong>Unloading Point</strong> = the physical location where
      goods are unloaded at the customer's place.
     </div>
     <h3>Worked Example — Balaji Enterprises (Customer 100640)</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Unloading Point</th>
        <th>Location</th>
        <th>Goods Receiving Hours</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Ameerpet (inside city limits)</td>
        <td>10 PM – 6 AM only</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Patancheru (outside city limits)</td>
        <td>24 × 7 (no restriction)</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>Purpose: Unloading Points help plan deliveries.</strong>
      Example: if it takes ~12 hours to transport goods from the Mumbai
      plant to Hyderabad, and the Ameerpet unloading point only receives
      goods between 10 PM and 6 AM, the delivery must be dispatched around
      10 AM so it arrives by roughly 10 PM (with some buffer for delay). For
      Patancheru, no such timing plan is needed since it accepts goods any
      time.
     </div>

     <h3>Customer Calendar (Maintained per Unloading Point)</h3>
     <p>
      Each unloading point needs a <strong>customer calendar</strong>
      assigned, since holidays differ by location/state (in real projects,
      HR builds these state-wise calendars). A calendar is built the same
      way covered earlier for Enterprise Structure:
     </p>
     <div className="stepper">
      <div className="step">
       <span className="tcode">SCAL</span> → select
       <strong>Factory Calendar</strong> → Change → Create.
      </div>
      <div className="step">
       ID <code>P3</code> (adjusted since <code>P2</code> was already
       used), description "Telangana Calendar," Holiday Calendar ID
       <code>P0</code>, Working Days Monday–Saturday → Save.
      </div>
      <div className="step">
       Assign this calendar (<code>P3</code>) to the Ameerpet unloading
       point in Customer Master.
      </div>
     </div>
     <div className="callout red">
      ⚠️
      <strong>If it's a holiday at the customer's location, no delivery is
       planned for that date</strong>
      — this is exactly why the customer calendar has to be maintained per
      unloading point.
     </div>

     <h3>Goods Receiving Hours</h3>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Master Data</span>
      <span className="sep">→</span>
      <span className="node">Business Partners</span>
      <span className="sep">→</span> <span className="node">Customers</span>
      <span className="sep">→</span> <span className="node">Shipping</span>
      <span className="sep">→</span>
      <span className="node">Define Goods Receiving Hours</span>
     </div>
     <p className="note-text">
      New Entries → <code>P01</code>, "City Limits," 10:00 PM – 6:00 AM →
      Save. In Customer Master, this (P01) is assigned only to the
      <strong>Ameerpet</strong> unloading point — Patancheru doesn't need
      it, since it accepts goods 24×7.
     </p>

     <h3>Special Case — Delivering Only on a Specific Weekday</h3>
     <div className="callout gold">
      🎯 <strong>Client requirement:</strong> some customers want deliveries
      created <strong>only on Tuesdays</strong>. Where is this controlled?
      In the <strong>customer calendar</strong> — by checking
      <strong>only Tuesday</strong> as a working day.
     </div>
     <div className="stepper">
      <div className="step">
       <span className="tcode">SCAL</span> → Factory Calendar → select the
       customer's calendar (e.g., <code>P3</code>) → Change.
      </div>
      <div className="step">
       Uncheck every working day except <strong>Tuesday</strong> → Save.
      </div>
      <div className="step">
       Verify: create a Sales Order (<span className="tcode">VA01</span>,
       order type OR) → double-click the item → go to
       <strong>Schedule Lines</strong> → check the confirmed date — it will
       only ever confirm on a Tuesday.
      </div>
     </div>
    </div>

    {/* <!-- Section 5: Export Data --> */}
    <div className="card red">
     <h2><span className="badge">12</span> Export Data</h2>
     <div className="callout red">
      💡 <strong>Export Data</strong> is maintained only if the customer is
      located <strong>outside the country</strong> (a foreign customer).
     </div>
    </div>

    {/* <!-- Section 6: Contact Person --> */}
    <div className="card teal">
     <h2><span className="badge">13</span> Contact Person</h2>
     <div className="callout teal">
      💡 <strong>Contact Person</strong> = an employee of the customer who
      is responsible for various activities (e.g., purchasing, approvals).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Example</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Department</td>
        <td>Purchasing, Sales, or Finance</td>
       </tr>
       <tr>
        <td>Function (Position)</td>
        <td>Head of Purchasing, Head of Sales, Account Manager</td>
       </tr>
       <tr>
        <td>Other details</td>
        <td>Name, home address, business address, visiting hours</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔧 T-code to maintain Contact Person directly:
      <span className="tcode">VAP1</span> — mention the Customer Number →
      Enter → fill in Department, Function, Name, addresses, and visiting
      hours → Save. Contact Person details can also be maintained inline
      from within the Customer Master itself, on its own tab.
     </div>
    </div>

    {/* <!-- Section 7: Reconciliation Account --> */}
    <div className="card gold">
     <h2>
      <span className="badge">14</span> Company Code Data — Reconciliation
      Account
     </h2>
     <p>
      Screen: <strong>Company Code Data</strong> → tab
      <strong>Account Management</strong> → field
      <strong>Reconciliation Account</strong>.
     </p>
     <div className="callout gold">
      💡 <strong>Reconciliation Account</strong> is a G/L account that
      accumulates the <strong>total outstanding</strong> of the customer —
      i.e., the amount the customer still owes (the "due amount").
     </div>
     <div className="callout blue">
      🔗 <strong>How it links to Invoice posting:</strong> when an Invoice
      is created, the system generates an accounting document:
      <strong>Customer Account Debit</strong> to
      <strong>Revenue Account Credit</strong>. For the customer side of that
      entry, the system determines <em>which</em> G/L account to use by
      pulling the value from this
      <strong>Reconciliation Account</strong> field on the Customer Master.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Step</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Order → Delivery → Invoice</td>
        <td>Standard flow; invoice generates the accounting document</td>
       </tr>
       <tr>
        <td>Accounting entry</td>
        <td>Customer Account Dr. / Revenue Account Cr.</td>
       </tr>
       <tr>
        <td>Customer Account's actual G/L number</td>
        <td>
         Pulled from Reconciliation Account (standard example:
         <code>140000</code>)
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Verified in class by creating an order, delivery, and invoice, then
      opening the invoice's Accounting view — double-clicking the customer
      line showed G/L account <code>140000</code>, matching exactly what was
      maintained as the Reconciliation Account on that customer's Company
      Code Data.
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
         What does the Industry field do, and what are its two purposes?
        </td>
        <td>
         Classifies customers by the industry they belong to (e.g.,
         Cement, Pharma, Automobile); purposes are Reporting/Analysis and
         Discounts
        </td>
       </tr>
       <tr>
        <td>What does the Annual Sales (Key Figures) field record?</td>
        <td>
         The customer's last year's sales, maintained for comparison
         purposes and updated yearly
        </td>
       </tr>
       <tr>
        <td>What is Regional Market, and how is it populated?</td>
        <td>
         A manual field classifying the customer's location into A-class,
         B-class, or C-class market, based on expected sales volume in
         that area; used for reporting
        </td>
       </tr>
       <tr>
        <td>What is an Unloading Point?</td>
        <td>
         The physical location where goods are unloaded at the customer's
         place
        </td>
       </tr>
       <tr>
        <td>What is the purpose of Unloading Points?</td>
        <td>
         They help plan deliveries — e.g., factoring in transit time so
         goods arrive within a customer's specific goods-receiving window
        </td>
       </tr>
       <tr>
        <td>
         Why does each unloading point need its own customer calendar?
        </td>
        <td>
         Holidays differ by location; if it's a holiday at that
         customer's location, no delivery is planned for that date
        </td>
       </tr>
       <tr>
        <td>
         What controls "only deliver on Tuesdays" for a specific
         customer?
        </td>
        <td>
         The customer calendar — uncheck all working days except Tuesday
        </td>
       </tr>
       <tr>
        <td>
         Where do you verify that a Tuesday-only delivery restriction is
         working?
        </td>
        <td>
         Create a sales order (VA01), open the item's Schedule Lines, and
         confirm the confirmed date always falls on a Tuesday
        </td>
       </tr>
       <tr>
        <td>When is Export Data maintained on a Customer Master?</td>
        <td>Only when the customer is located outside the country</td>
       </tr>
       <tr>
        <td>What is a Contact Person?</td>
        <td>
         An employee of the customer responsible for various activities
         (e.g., purchasing, approvals)
        </td>
       </tr>
       <tr>
        <td>What T-code maintains Contact Person directly?</td>
        <td>VAP1</td>
       </tr>
       <tr>
        <td>What is a Reconciliation Account?</td>
        <td>
         A G/L account that accumulates the total outstanding (due
         amount) of the customer
        </td>
       </tr>
       <tr>
        <td>
         How does the Reconciliation Account get used during invoice
         posting?
        </td>
        <td>
         When an invoice is created, the system posts Customer Account
         Debit to Revenue Account Credit; the G/L account used for the
         customer side of that entry is pulled from the customer's
         Reconciliation Account field
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
        <td><span className="tcode">SCAL</span></td>
        <td>
         Create/maintain the customer (factory) calendar used at
         unloading points
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VAP1</span></td>
        <td>Create/maintain a Contact Person for a customer</td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used to verify the Tuesday-only delivery
         confirmation via Schedule Lines
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VF01</span></td>
        <td>
         Create Invoice — used to verify the Reconciliation Account's G/L
         number in the resulting accounting document
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
        <td>Industry codes (example)</td>
        <td>P001 Cement, P002 Pharma, P003 Automobile</td>
       </tr>
       <tr>
        <td>Annual Sales example</td>
        <td>₹10.5 crores, FY V3 (April–March), currency INR</td>
       </tr>
       <tr>
        <td>Unloading points (Customer 100640)</td>
        <td>Ameerpet (10 PM–6 AM), Patancheru (24×7)</td>
       </tr>
       <tr>
        <td>Customer calendar for Ameerpet</td>
        <td>
         P3, "Telangana Calendar," Holiday Calendar P0, Mon–Sat working
         days
        </td>
       </tr>
       <tr>
        <td>Goods Receiving Hours code</td>
        <td>
         P01, "City Limits," 10 PM–6 AM (assigned only to Ameerpet)
        </td>
       </tr>
       <tr>
        <td>Tuesday-only delivery control</td>
        <td>Customer calendar with only Tuesday checked as working</td>
       </tr>
       <tr>
        <td>Standard Reconciliation Account example</td>
        <td>140000</td>
       </tr>
       <tr>
        <td>Invoice accounting entry</td>
        <td>Customer Account Dr. / Revenue Account Cr.</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture continued the Customer Master field walkthrough:
      <strong>Industry</strong> groups customers by the industry they belong
      to (not used in this project, since Alchem sells to
      dealers/distributors/hospitals rather than industrial buyers),
      <strong>Annual Sales</strong> (Key Figures) stores last year's sales
      for comparison, and <strong>Regional Market</strong>
      manually classifies a customer's location into A/B/C-class markets for
      reporting. The bulk of the lecture focused on
      <strong>Unloading Points</strong> — the physical drop-off location at
      a customer's site — and how they drive delivery planning, using a
      worked example of two unloading points with different goods-receiving
      windows (10 PM–6 AM inside city limits vs. 24×7 outside). This led
      into building a <strong>customer calendar</strong> per unloading point
      (holidays are location-specific) and configuring
      <strong>Goods Receiving Hours</strong>, plus a special technique for
      restricting deliveries to a single weekday (checking only Tuesday as
      working in the customer calendar), verified via Schedule Lines on a
      sales order. The lecture closed with <strong>Export Data</strong> (for
      foreign customers), <strong>Contact Person</strong> (an employee of
      the customer, maintained via T-code VAP1), and the
      <strong>Reconciliation Account</strong> field — the G/L account that
      tracks a customer's total outstanding and is pulled automatically into
      the Customer Account line of every invoice's accounting entry.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Unloading Points drive delivery planning</strong> —
       different goods-receiving windows per location directly affect
       dispatch timing
      </li>
      <li>
       <strong>Customer calendars are location-specific</strong>; the same
       "check only one weekday as working" trick can restrict deliveries to
       any single day a client requires
      </li>
      <li>
       <strong>Goods Receiving Hours</strong> is a separate config object
       from the customer calendar, assigned only where time restrictions
       actually apply
      </li>
      <li>
       <strong>Reconciliation Account</strong> is the critical link between
       Customer Master and Finance — it determines which G/L account
       accumulates that customer's outstanding balance
      </li>
      <li>
       <strong>VAP1</strong> maintains Contact Person data directly,
       separate from the full Customer Master transaction
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Remaining fields in Customer Master.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 29 Notes — Fields in Customer Master: Industry, Unloading Points,
    Contact Person &amp; Reconciliation Account 🎓
   </p>
  </div>
 );
};

export default Material29;
