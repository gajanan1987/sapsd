const Enterprise12 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-pink">
    <h1>
     📅 Lecture 12 — Factory Calendar Creation &amp; Key Sales Organization
     Fields
    </h1>
    <p>
     SAP SD | Building a custom calendar from scratch (T-code SCAL) and the
     first deep-dive into Sales Organization's technical fields
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Enterprise Structure
      <strong>definition and assignment are now fully complete</strong>. So
      far, everywhere a calendar was needed, we used the standard calendar
      <code>01</code>. Today: build a <strong>custom calendar</strong> and
      assign it in place of the standard one.
     </div>
     <p>
      Calendar is maintained in exactly
      <strong>3 organizational units</strong>:
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Organizational Unit</th>
        <th>Count in This Project</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Sales Organization</td>
        <td>2 (P100 Domestic, P200 Export)</td>
       </tr>
       <tr>
        <td>Plant</td>
        <td>2 (P100 Mumbai, P200 Vapi)</td>
       </tr>
       <tr>
        <td>Shipping Point</td>
        <td>6 (P101–P103 Mumbai, P201–P203 Vapi)</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 1: Who creates calendar --> */}
    <div className="card indigo">
     <h2><span className="badge">1</span> Creating a Calendar — T-code SCAL</h2>
     <div className="callout indigo">
      💡 In real projects, calendar creation is the responsibility of the
      <strong>HR consultant</strong> — not SD. Here we practice it ourselves
      purely to understand the mechanics and to have our own calendar to
      assign.
     </div>
     <p>T-code: <span className="tcode">SCAL</span></p>
     <p>Calendar creation happens in two layers, built in order:</p>
     <div className="stepper">
      <div className="step">
       <strong>Public Holidays</strong> — the individual holiday entries
       (e.g., Christmas, Diwali)
      </div>
      <div className="step">
       <strong>Holiday Calendar</strong> — a named list that groups a set
       of public holidays together (e.g., one state's holiday calendar)
      </div>
      <div className="step">
       <strong>Factory Calendar</strong> — combines a Holiday Calendar with
       the working-day pattern (e.g., Monday–Saturday) into the final
       calendar that gets assigned to organizational units
      </div>
     </div>
    </div>

    {/* <!-- Section 2: Public Holidays --> */}
    <div className="card teal">
     <h2><span className="badge">2</span> Step 1 — Create Public Holidays</h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">SCAL</span> → select
       <strong>Public Holidays</strong> → click the pencil (Change) symbol
       → click <strong>Create</strong>.
      </div>
      <div className="step">
       Choose the holiday type: <strong>Fixed Date</strong> (same calendar
       date every year) or <strong>Floating</strong> (date changes every
       year).
      </div>
     </div>
     <h3>Example A — Fixed-Date Holiday (Christmas)</h3>
     <div className="stepper">
      <div className="step">Select <strong>Fixed Date</strong> → Create.</div>
      <div className="step">Mention the date: <code>25th December</code>.</div>
      <div className="step">
       Mention a <strong>Sort Criteria</strong> — this is a short code
       (e.g., <code>PIN</code>, using "P" for our batch and "IN" for India)
       used purely to group and later search/find all of this project's
       holidays together in one place.
      </div>
      <div className="step">
       Mention the religious category, then Short Name and Long Name (e.g.,
       "Christmas") → Enter → Enter again to confirm.
      </div>
     </div>
     <h3>Example B — Floating Holiday (Diwali)</h3>
     <div className="stepper">
      <div className="step">
       Create → select <strong>Floating Public Holiday</strong> → Enter.
      </div>
      <div className="step">
       Since the date changes every year, enter the date
       <em>per year</em>: e.g., 2026 → November 1, 2027 → November 5, 2028
       → November 9, 2029 → November 11 — as many years as you have
       information for (there's no fixed limit; more years can always be
       added later via <strong>Insert Date</strong>).
      </div>
      <div className="step">
       Mention the same Sort Criteria (<code>PIN</code>) so it groups with
       the rest of this batch's holidays.
      </div>
      <div className="step">Mention Short Name / Long Name → Enter.</div>
     </div>
     <div className="callout blue">
      🔍 <strong>Sort Criteria's real purpose:</strong> it lets you quickly
      find your own holidays later using
      <strong>Find (Ctrl+F)</strong> instead of manually scrolling through
      thousands of holidays already in the system alphabetically.
     </div>
     <p className="note-text">
      📌 Any number of additional floating holidays (e.g., Dussehra) can be
      created the same way, and existing floating holidays can have more
      future years added at any time via
      <strong>Insert Date</strong> in change mode.
     </p>
    </div>

    {/* <!-- Section 3: Holiday Calendar --> */}
    <div className="card orange">
     <h2><span className="badge">3</span> Step 2 — Create Holiday Calendar</h2>
     <div className="stepper">
      <div className="step">
       Go back → select <strong>Holiday Calendar</strong> → Change →
       Create.
      </div>
      <div className="step">
       Give it a 2-character <strong>Calendar ID</strong> (e.g.,
       <code>P0</code>) and a description (e.g., "Indian Holiday
       Calendar").
      </div>
      <div className="step">
       Click <strong>Assign Holiday</strong> → use
       <strong>Find (Ctrl+F)</strong>, search by your Sort Criteria
       (<code>PIN</code>) → double-click each matching holiday to select it
       → click <strong>Assign Public Holiday</strong>.
      </div>
      <div className="step">
       Save → confirm "Do you want to save?" → Continue.
      </div>
     </div>
     <div className="callout">
      📖 <strong>Holiday Calendar consists of a list of holidays.</strong>
      In real projects, every state typically gets its own holiday calendar,
      since public holidays differ state to state — this is why HR maintains
      a separate calendar per state.
     </div>
    </div>

    {/* <!-- Section 4: Factory Calendar --> */}
    <div className="card gold">
     <h2><span className="badge">4</span> Step 3 — Create Factory Calendar</h2>
     <div className="stepper">
      <div className="step">
       Go back → select <strong>Factory Calendar</strong> → Change →
       Create.
      </div>
      <div className="step">
       Give it an ID (e.g., <code>P1</code>) and description (e.g., "Indian
       Calendar"). If that ID is already taken by another student on a
       shared server, choose the next one available (e.g.,
       <code>P2</code>).
      </div>
      <div className="step">
       Mention the <strong>Holiday Calendar ID</strong> created in Step 2
       (<code>P0</code>).
      </div>
      <div className="step">
       Check the actual <strong>working days</strong> — e.g., check Monday
       through Saturday if the client works 6 days a week.
      </div>
      <div className="step">Save.</div>
     </div>
     <div className="callout blue">
      🔧 <strong>Advanced option — alternate Saturdays off:</strong> if the
      client's actual working pattern is more specific (e.g., every
      <em>other</em> Saturday is a working day), don't just leave Saturday
      unchecked entirely. Instead, uncheck Saturday as a regular working
      day, then go to <strong>Special Rules</strong> and explicitly list out
      the specific Saturday dates that <em>are</em> working days.
     </div>
    </div>

    {/* <!-- Section 5: Assigning the calendar --> */}
    <div className="card purple">
     <h2>
      <span className="badge">5</span> Assigning the Custom Calendar to
      Organizational Units
     </h2>
     <p>
      With the Factory Calendar built (final ID <code>P2</code> in this
      example), it now needs to be assigned in place of the standard
      calendar <code>01</code> at all three levels.
     </p>
     <h3>Sales Organization</h3>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Define, Copy, Delete, Check Sales Organization</span>
      <span className="sep">→</span>
      <span className="node">Define Sales Organization</span>
     </div>
     <p className="note-text">
      Use <strong>Position</strong> to jump to P100 → select it → change
      Calendar field from <code>01</code> to <code>P2</code> → repeat for
      P200 → Save.
     </p>
     <h3>Plant</h3>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Logistics – General</span>
      <span className="sep">→</span>
      <span className="node">Define, Copy, Delete, Check Plant</span>
      <span className="sep">→</span>
      <span className="node">Define Plant</span>
     </div>
     <p className="note-text">
      Double-click (or use the magnifying-glass
      <strong>Details</strong> icon) on P100 → change Calendar to
      <code>P2</code> → repeat for P200 → Save.
     </p>
     <h3>Shipping Point</h3>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Logistics Execution</span>
      <span className="sep">→</span>
      <span className="node">Define, Copy, Delete, Check Shipping Point</span>
      <span className="sep">→</span>
      <span className="node">Define Shipping Point</span>
     </div>
     <p className="note-text">
      Double-click P101 → change Calendar to <code>P2</code> → since the
      shipping points are in sequence, you can move to the next entry
      directly (P102, P103, P201, P202, P203) and repeat → Save.
     </p>
     <div className="callout green">
      ✅ <strong>Tip — finding the right calendar via F4:</strong> when
      assigning a calendar field, pressing F4 shows all calendars already
      created in the system, including state-wise ones (e.g., a Maharashtra
      calendar) that HR may have already built. In a real project, you'd
      typically pick from HR's existing calendars rather than creating your
      own — check with the HR consultant if unsure.
     </div>
    </div>

    {/* <!-- Section 6: Fields in Sales Organization --> */}
    <div className="card teal">
     <h2>
      <span className="badge">📖</span> Fields in Sales Organization — Deep Dive
     </h2>
     <p>
      T-code path: same Sales Organization definition screen → select your
      Sales Organization → <strong>Details</strong>.
     </p>
    </div>

    {/* <!-- Section 7: Statistics Currency --> */}
    <div className="card orange">
     <h2><span className="badge">1</span> Field: Statistics Currency</h2>
     <div className="callout">
      💡 <strong>Statistics Currency</strong> = the currency in which
      <strong>sales reports</strong> should be displayed.
     </div>
     <p>
      This project has only one Company Code (P100), based in India. But
      some clients operate multiple company codes across multiple countries
      and still want all sales reports consolidated and shown in a single
      currency — e.g., USD — regardless of which local currency each company
      code actually transacts in.
     </p>
     <div className="callout blue">
      💱 <strong>Worked example:</strong> even though our company code is
      Indian (transactions happen in INR), if the client wants sales reports
      in USD, the <strong>Statistics Currency</strong> field on the Indian
      Sales Organization is set to <code>USD</code>. The system then
      converts the underlying values and displays reports in US Dollars.
     </div>
     <div className="callout red">
      ⚠️
      <strong>Currency master data is not SD's responsibility.</strong> All
      standard currencies are already pre-delivered by SAP; new currencies
      can technically be created via New Entries, but this falls under
      <strong>FI (currency exchange rate)</strong>
      responsibility, not SD. As an SD consultant, you simply
      <em>select</em> the currency needed here — you don't maintain currency
      master data yourself.
     </div>
    </div>

    {/* <!-- Section 8: Text Information --> */}
    <div className="card gold">
     <h2>
      <span className="badge">2</span> Field: Text Information in Sales
      Organization
     </h2>
     <div className="callout gold">
      💡 <strong>Text Information</strong> helps pull the
      <strong>address of the Sales Organization</strong> so it can be
      printed on <strong>output</strong> documents.
     </div>
     <p>
      When a Sales Order, Delivery, or Invoice is created, the system can
      generate an <strong>output</strong> for it — a printout, an email, or
      other formats (EDI, ALE, fax) — which gets sent to the customer. That
      output typically needs the sales organization's address printed on it,
      in the <strong>header</strong> and/or <strong>footer</strong> of the
      document.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Output Placement</th>
        <th>Typical Content</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Header</td>
        <td>Main sales organization address</td>
       </tr>
       <tr>
        <td>Footer</td>
        <td>Additional details like phone number, email ID</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📤 <strong>Output formats:</strong> printout (handed to customer),
      email (with the document as an attachment), EDI, ALE, fax — there are
      multiple ways the same output can reach the customer, depending on
      client requirement.
     </div>
     <div className="callout red">
      🔧 <strong>Who builds the actual output layout?</strong> Deciding
      <em>which</em> data appears in header vs. footer, and the overall
      visual layout of the output, is developed by
      <strong>ABAP</strong> (through SmartForms/Adobe Forms) — SD
      configuration here only makes the address text
      <strong>available</strong> for that output design to use.
     </div>
    </div>

    {/* <!-- Section 9: Rebate Process Active --> */}
    <div className="card red">
     <h2><span className="badge">3</span> Field: Rebate Process Active</h2>
     <div className="callout red">
      💡 This field is a <strong>prerequisite to process rebates</strong> in
      a Sales Organization — if you want to process rebates at all, this
      checkbox must be checked.
     </div>
     <p>
      <strong>Rebate</strong> = a special kind of discount. Unlike a normal
      discount, a rebate is <strong>conditional</strong> and valid over a
      <strong>specific period of time</strong>.
     </p>
     <div className="callout blue">
      🎯 <strong>Worked example:</strong> if a customer purchases material X
      in a quantity of <strong>50,000 units</strong> between
      <strong>1st January and 31st December</strong>, they become eligible
      for a <strong>10% rebate</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Element</th>
        <th>In the Example</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Condition</td>
        <td>Purchase 50,000 quantity of material X</td>
       </tr>
       <tr>
        <td>Time period</td>
        <td>
         1 year (Jan 1 – Dec 31); the period can be shorter too, e.g. a
         month
        </td>
       </tr>
       <tr>
        <td>Reward if condition met</td>
        <td>10% rebate</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>Settlement:</strong> rebates aren't deducted immediately at
      order time — they accumulate and are
      <strong>settled at the end of the eligibility period</strong>
      (e.g., end of year), typically issued to the customer as a
      <strong>Credit Note (CN)</strong>.
     </div>
     <p className="note-text">
      📌 A festival sale/discount (e.g., a Christmas electronics discount)
      is <em>not</em> a rebate — that's a straightforward promotional
      discount, not a conditional, period-based reward tied to cumulative
      purchase volume.
     </p>
    </div>

    {/* <!-- Section 10: ALE Data for Purchase Order --> */}
    <div className="card indigo">
     <h2><span className="badge">4</span> Field: ALE Data for Purchase Order</h2>
     <div className="callout indigo">
      💡 <strong>ALE</strong> stands for
      <strong>Application Linking and Enabling</strong>.
     </div>
     <p>
      Beyond the standard Enquiry → Quotation → Sales Order → Delivery →
      Invoice flow, SAP SD supports several special processes, including
      <strong>Third-Party Process</strong> and
      <strong>IPO (Individual Purchase Order)</strong> — used when the
      client sells a product it does
      <strong>not manufacture itself</strong>.
     </p>
     <div className="callout">
      🏭 <strong>Why these processes exist:</strong> some manufacturers
      (vendors) hold a patent/right to manufacture a specific product but
      lack the infrastructure to market and sell it themselves. A company
      like Alchem can market and sell that product under its own
      brand/network, even though a different vendor actually manufactures
      it.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Process</th>
        <th>Who Delivers to the Customer?</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Third-Party Process</td>
        <td>
         The vendor delivers the goods <strong>directly</strong> to the
         customer
        </td>
       </tr>
       <tr>
        <td>IPO (Individual Purchase Order)</td>
        <td>
         The vendor delivers to the <strong>company</strong> first, and
         the company delivers to the customer
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Full configuration detail for Third-Party and IPO processes is
      covered later in the course — today's focus is only on what happens
      when the ALE Data for Purchase Order field is maintained.
     </p>
     <h3>The Standard Flow (Without This Field)</h3>
     <div className="stepper">
      <div className="step">Customer places an order (Sales Order).</div>
      <div className="step">
       System automatically generates a
       <strong>PR (Purchase Requisition)</strong>.
      </div>
      <div className="step">
       The PR is then <strong>manually</strong> converted into a
       <strong>PO (Purchase Order)</strong>, which is sent to the vendor.
      </div>
     </div>
     <div className="callout green">
      ✅
      <strong>What changes if "ALE Data for Purchase Order" is
       maintained:</strong>
      when a Sales Order is created in a Third-Party or IPO process, the
      system <strong>automatically generates the PO directly</strong> — both
      PR and PO get created automatically, removing the manual PR→PO
      conversion step.
     </div>
    </div>

    {/* <!-- Section 11: Editing rules --> */}
    <div className="card">
     <h2>
      <span className="badge">✏️</span> Editing Organizational Units — What Can
      Change?
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Can It Be Edited After Save?</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Code</td>
        <td>❌ No — once saved, the code is locked permanently</td>
       </tr>
       <tr>
        <td>Name</td>
        <td>✅ Yes — can be changed anytime</td>
       </tr>
       <tr>
        <td>Address (inside Details)</td>
        <td>✅ Yes — fully editable, including all address fields</td>
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
        <td>
         In which three organizational units is calendar maintained?
        </td>
        <td>Sales Organization, Plant, and Shipping Point</td>
       </tr>
       <tr>
        <td>
         Who is responsible for creating a calendar in a real project?
        </td>
        <td>The HR consultant</td>
       </tr>
       <tr>
        <td>What T-code is used to create a calendar?</td>
        <td>SCAL</td>
       </tr>
       <tr>
        <td>What are the three layers built when creating a calendar?</td>
        <td>
         Public Holidays → Holiday Calendar (a list of holidays) →
         Factory Calendar (holiday calendar + working days pattern)
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between a Fixed Date and a Floating
         public holiday?
        </td>
        <td>
         Fixed Date holidays fall on the same calendar date every year
         (e.g., Christmas); Floating holidays change date every year
         (e.g., Diwali) and must have each year's date entered
         individually
        </td>
       </tr>
       <tr>
        <td>
         What is Sort Criteria used for when creating public holidays?
        </td>
        <td>
         A short grouping code that lets you quickly find and select your
         own set of holidays later using Find (Ctrl+F), instead of
         scrolling through the entire holiday list
        </td>
       </tr>
       <tr>
        <td>
         Why do real projects typically maintain a separate Holiday
         Calendar per state?
        </td>
        <td>Because public holidays differ from state to state</td>
       </tr>
       <tr>
        <td>What does the Factory Calendar combine?</td>
        <td>
         A Holiday Calendar ID plus the actual working-day pattern (e.g.,
         which days of the week are working days)
        </td>
       </tr>
       <tr>
        <td>
         How do you handle an "every alternate Saturday is a working day"
         requirement?
        </td>
        <td>
         Uncheck Saturday as a regular working day, then use Special
         Rules to explicitly list which Saturday dates are working days
        </td>
       </tr>
       <tr>
        <td>What is Statistics Currency?</td>
        <td>
         The currency in which sales reports for that Sales Organization
         are displayed — useful when a client wants consolidated
         reporting in one currency (e.g., USD) even if local transactions
         happen in a different currency
        </td>
       </tr>
       <tr>
        <td>
         Is creating new currencies part of the SD consultant's job?
        </td>
        <td>
         No — currency/exchange rate maintenance is an FI responsibility;
         SD only selects from existing currencies
        </td>
       </tr>
       <tr>
        <td>
         What does the Text Information field in Sales Organization do?
        </td>
        <td>
         Makes the sales organization's address available to be printed
         on outputs (sales order, delivery, invoice) — in the header
         and/or footer
        </td>
       </tr>
       <tr>
        <td>
         Who designs the actual visual layout of an output document?
        </td>
        <td>
         ABAP (via SmartForms/Adobe Forms) — SD configuration only
         supplies the data (like the address) that the output can use
        </td>
       </tr>
       <tr>
        <td>
         What must be checked before rebates can be processed in a Sales
         Organization?
        </td>
        <td>The "Rebate Process Active" field</td>
       </tr>
       <tr>
        <td>
         What is a rebate, and how is it different from a normal
         discount?
        </td>
        <td>
         A special, conditional discount valid over a specific period of
         time (e.g., 10% back if a customer buys 50,000 units of a
         material within a year) — unlike a normal discount, it's tied to
         cumulative purchase volume over a defined window and settled
         later, typically via a Credit Note
        </td>
       </tr>
       <tr>
        <td>What does ALE stand for?</td>
        <td>Application Linking and Enabling</td>
       </tr>
       <tr>
        <td>
         What is the difference between Third-Party Process and IPO?
        </td>
        <td>
         In Third-Party Process, the vendor delivers goods directly to
         the customer; in IPO, the vendor delivers to the company first,
         and the company delivers to the customer
        </td>
       </tr>
       <tr>
        <td>
         What happens if "ALE Data for Purchase Order" is maintained on
         the Sales Organization?
        </td>
        <td>
         When a sales order is created under Third-Party or IPO process,
         the system automatically generates the PO directly (instead of
         only generating a PR that must be manually converted to a PO)
        </td>
       </tr>
       <tr>
        <td>
         What can and cannot be edited on an organizational unit after
         it's saved?
        </td>
        <td>
         The Code cannot be edited once saved; the Name and Address can
         be changed at any time
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
         Create/maintain Public Holidays, Holiday Calendar, and Factory
         Calendar
        </td>
       </tr>
       <tr>
        <td><span className="tcode">SPRO</span></td>
        <td>
         Assign the custom Factory Calendar to Sales Organization, Plant,
         and Shipping Point (via their respective Define paths)
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
        <td>Holiday Calendar ID created</td>
        <td>P0 (Indian Holiday Calendar)</td>
       </tr>
       <tr>
        <td>Factory Calendar ID created</td>
        <td>P2 (P1 was already taken) — Indian Calendar</td>
       </tr>
       <tr>
        <td>Working days configured</td>
        <td>Monday to Saturday</td>
       </tr>
       <tr>
        <td>Sample fixed-date holiday</td>
        <td>Christmas — 25th December</td>
       </tr>
       <tr>
        <td>Sample floating holiday</td>
        <td>
         Diwali — different date entered per year (2026–2029 in example)
        </td>
       </tr>
       <tr>
        <td>Sort Criteria used</td>
        <td>PIN (P = batch, IN = India)</td>
       </tr>
       <tr>
        <td>Calendar assigned at</td>
        <td>
         Sales Organization (P100, P200), Plant (P100, P200), Shipping
         Point (P101–P103, P201–P203) — all set to P2
        </td>
       </tr>
       <tr>
        <td>Statistics Currency example</td>
        <td>USD (even though the company code is Indian / INR)</td>
       </tr>
       <tr>
        <td>Rebate example</td>
        <td>
         50,000 qty of Material X between Jan 1–Dec 31 → 10% rebate,
         settled via Credit Note
        </td>
       </tr>
       <tr>
        <td>ALE Data for Purchase Order — effect</td>
        <td>
         Auto-generates PO (not just PR) for Third-Party/IPO sales orders
        </td>
       </tr>
       <tr>
        <td>Editable after save</td>
        <td>Name, Address — not Code</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture moved from the standard calendar (01) to a fully
      custom-built one, using T-code <strong>SCAL</strong> in three layers:
      Public Holidays (fixed-date like Christmas and floating like Diwali,
      grouped by a Sort Criteria), a Holiday Calendar (P0) bundling those
      holidays, and a Factory Calendar (P2) combining that holiday calendar
      with a Monday–Saturday working pattern. This custom calendar was then
      assigned in place of "01" across Sales Organization, Plant, and
      Shipping Point. The lecture then began a deep-dive into Sales
      Organization's technical fields:
      <strong>Statistics Currency</strong> (the currency sales reports are
      displayed in, independent of the transacting currency),
      <strong>Text Information</strong> (supplies the sales org's address
      for printing on order/ delivery/invoice outputs),
      <strong>Rebate Process Active</strong> (a prerequisite checkbox for
      processing conditional, period-based rebate discounts), and
      <strong>ALE Data for Purchase Order</strong> (Application Linking and
      Enabling — when maintained, it makes the system auto-generate a PO,
      not just a PR, for Third-Party and IPO sales orders). The lecture
      closed with a quick editing rule: Code is permanent once saved, but
      Name and Address remain editable.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       Calendar has exactly <strong>3 homes</strong>: Sales Organization,
       Plant, Shipping Point — built via <strong>SCAL</strong> (Public
       Holidays → Holiday Calendar → Factory Calendar)
      </li>
      <li>
       <strong>Sort Criteria</strong> is the key to finding your own
       holidays quickly among thousands of system entries
      </li>
      <li>
       <strong>F4 on the Calendar field</strong> shows all already-built
       calendars (including state-wise ones from HR) — worth checking
       before creating a brand-new one in a real project
      </li>
      <li>
       <strong>Statistics Currency</strong> lets sales reports display in a
       currency different from the transacting one
      </li>
      <li>
       <strong>Text Information</strong> feeds the sales org address into
       printed/emailed outputs; the actual layout design is ABAP's job
      </li>
      <li>
       <strong>Rebate Process Active</strong> must be checked before any
       rebate condition types can be processed
      </li>
      <li>
       <strong>ALE Data for Purchase Order</strong> automates PO creation
       (not just PR) for Third-Party/IPO sales orders
      </li>
      <li>
       <strong>Code is permanent</strong> after save; Name and Address can
       always be edited
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Continuing the remaining fields inside
      Sales Organization and the other organizational units.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 12 Notes — Factory Calendar Creation &amp; Key Sales Organization
    Fields 🎓
   </p>
  </div>
 );
};

export default Enterprise12;
