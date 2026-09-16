const Material28 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-teal">
    <h1>
     🧾 Lecture 28 — Fields in Customer Master: Address, Control Data,
     Payment Transactions &amp; Marketing
    </h1>
    <p>
     SAP SD | Region, Transportation Zone, GST (Tax Number 3), Nielsen ID,
     Customer Classification — and the universal F1 shortcut to any config
     path
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered Collective Processing (deliveries, picking, PGI,
      invoicing). Today begins a detailed walkthrough of
      <strong>Fields in Customer Master</strong>, starting with the General
      Data screen's Address tab.
     </div>
    </div>

    {/* <!-- Section 1: Address tab fields --> */}
    <div className="card orange">
     <h2><span className="badge">1</span> General Data — Address Tab</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Search Term</td>
        <td>
         A shortcut key used to search/find customer information quickly
        </td>
       </tr>
       <tr>
        <td>Region</td>
        <td>In SAP, "Region" = State</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🗺️ <strong>Defining a new Region (state):</strong> if a required state
      isn't available in the system yet, it has to be defined.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">SAP NetWeaver</span>
      <span className="sep">→</span>
      <span className="node">General Settings</span>
      <span className="sep">→</span>
      <span className="node">Set Countries</span>
      <span className="sep">→</span>
      <span className="node">Insert Regions</span>
     </div>
     <p className="note-text">
      New Entries → Country <code>IN</code>, Region code (e.g.,
      <code>36</code> for Telangana) → Enter → Save.
     </p>
    </div>

    {/* <!-- Section 2: Transportation Zone --> */}
    <div className="card gold">
     <h2><span className="badge">2</span> Transportation Zone</h2>
     <div className="callout gold">
      💡 <strong>Transportation Zone</strong> is one of the parameters used
      to <strong>determine the Route</strong> in a sales document.
     </div>
     <p>
      <strong>Route</strong> = the way goods are delivered to the customer.
      "Sales document" here refers broadly to Enquiry, Quotation, Sales
      Order, etc. The standard value used in practice is <code>901</code>;
      custom transportation zones are defined later in the course.
     </p>
    </div>

    {/* <!-- Section 3: Communication tab --> */}
    <div className="card teal">
     <h2><span className="badge">3</span> Communication Tab</h2>
     <div className="callout teal">
      💡 The Communication tab maintains the customer's
      <strong>telephone number, mobile number, and email ID</strong>.
     </div>
    </div>

    {/* <!-- Section 4: Control Data - Tax Number 3 --> */}
    <div className="card purple">
     <h2>
      <span className="badge">4</span> Control Data Tab — Tax Number 3 (GST)
     </h2>
     <div className="callout purple">
      💡 The <strong>Control Data</strong> tab maintains the customer's
      <strong>tax-related information</strong>. In India, the key field here
      is <strong>Tax Number 3</strong>, which holds the customer's
      <strong>GST registration number</strong>.
     </div>
     <h3>GST Registration Number Structure</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Segment</th>
        <th>Length</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>2 digits</td>
        <td>
         State code (e.g., <code>36</code> for Telangana — same for every
         Telangana customer)
        </td>
       </tr>
       <tr>
        <td>2</td>
        <td>10 digits</td>
        <td>Customer's PAN number (unique per customer)</td>
       </tr>
       <tr>
        <td>3</td>
        <td>3 digits</td>
        <td>
         Nature of business (same across customers with the same business
         type)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🌍 <strong>Country-specific:</strong> Tax Number 3 is specifically
      used for GST (India). Other countries use different tax fields — e.g.,
      a VAT registration number would go in a different Tax Number field (1
      or 2, depending on the country's tax scheme).
     </div>
     <h3>If Tax Number 3 Isn't Showing</h3>
     <div className="callout red">
      ⚠️ If this field doesn't appear on your system, it's simply suppressed
      at the account group level — make it Optional to see it.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">OVT0</span> → select your account
       group (e.g., <code>0001</code> or your own <code>P001</code>) →
       Details.
      </div>
      <div className="step">
       Double-click <strong>General Data</strong> → double-click
       <strong>Control</strong>.
      </div>
      <div className="step">
       Scroll down to find <strong>Tax Number 3</strong> → change its
       status from Suppressed to <strong>Optional</strong> → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 5: Payment transactions --> */}
    <div className="card indigo">
     <h2><span className="badge">5</span> Payment Transactions Tab</h2>
     <div className="callout indigo">
      💡 This tab maintains the customer's
      <strong>bank information</strong> and
      <strong>card information</strong> (debit/credit card).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Section</th>
        <th>Fields</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Bank details</td>
        <td>
         Country (<code>IN</code>), Bank Key (press F4 for standard
         system bank keys), Bank Account Number, Account Holder Name
        </td>
       </tr>
       <tr>
        <td>Payment cards</td>
        <td>Card Type, Card Number, Valid To, Card Holder Name</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 6: Marketing - Nielsen ID --> */}
    <div className="card red">
     <h2><span className="badge">6</span> Marketing Tab — Nielsen ID</h2>
     <div className="callout red">
      💡 <strong>Nielsen ID</strong> specifies market survey regions.
     </div>
     <p>
      When a company launches a new product, it typically runs a
      <strong>market survey</strong> in specific regions/locations first.
      Those specific survey locations are defined in SAP as
      <strong>Nielsen ID</strong> codes.
     </p>
     <h3>Worked Example</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Nielsen ID</th>
        <th>Locations</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P1</td>
        <td>Noida, Gurgaon</td>
       </tr>
       <tr>
        <td>P2</td>
        <td>Chennai, Bangalore</td>
       </tr>
       <tr>
        <td>P3</td>
        <td>Bhubaneswar, Kolkata</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📍 <strong>Assignment rule:</strong> if a customer is located in Noida
      or Gurgaon, their Customer Master gets Nielsen ID <code>P1</code>;
      Chennai/Bangalore gets <code>P2</code>; Bhubaneswar/Kolkata gets
      <code>P3</code>. Customers in any <strong>other</strong> city (e.g.,
      Hyderabad) are left <strong>blank</strong> for this field, since they
      aren't in a market survey region.
     </div>
     <div className="callout green">
      ✅ <strong>Purpose:</strong> Nielsen ID helps
      <strong>track customers located in market survey regions</strong>
      — when the company launches a new product, it uses Nielsen ID to
      identify and send product samples specifically to customers in those
      survey regions.
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
      <span className="node">Define Nielsen ID</span>
     </div>
     <p className="note-text">
      New Entries → P1 (Noida, Gurgaon), P2 (Chennai, Bangalore), P3
      (Bhubaneswar, Kolkata) → Save. This information (which regions, how
      they're grouped) always comes from the
      <strong>client's requirement</strong> — the consultant's job is just
      to configure it.
     </p>
    </div>

    {/* <!-- Section 7: F1 shortcut --> */}
    <div className="card gold">
     <h2>
      <span className="badge">💡</span> Universal Shortcut — Jumping
      Straight to Any Field's Config Path
     </h2>
     <div className="callout gold">
      🔑
      <strong>This works for any field, not just Nielsen ID:</strong> place
      the cursor in the field on the Customer Master screen, press
      <strong>F1</strong>, click the
      <strong>customizing (key) symbol</strong>, then
      <strong>"Continue without specifying project."</strong> The system
      takes you directly to that field's SPRO configuration path — already
      open, ready to add new entries.
     </div>
     <p className="note-text">
      📌 This is a genuinely useful day-to-day trick: instead of memorizing
      every SPRO path, place the cursor in the relevant field on the actual
      transaction screen and let SAP navigate you there.
     </p>
    </div>

    {/* <!-- Section 8: Customer Classification --> */}
    <div className="card purple">
     <h2>
      <span className="badge">7</span> Marketing Tab — Customer
      Classification
     </h2>
     <div className="callout purple">
      💡 <strong>Customer Classification</strong> = classifying customers
      based on their <strong>sales turnover</strong>.
     </div>
     <p>
      Not every customer gives the company the same amount of business —
      some generate ₹10 crores a year, others ₹7 crores, ₹5 crores, and so
      on. Customer Classification groups customers into bands based on this
      turnover.
     </p>
     <h3>Worked Example</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Classification</th>
        <th>Turnover Band</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P1</td>
        <td>10 crores and above</td>
       </tr>
       <tr>
        <td>P2</td>
        <td>7 – 10 crores</td>
       </tr>
       <tr>
        <td>P3</td>
        <td>5 – 7 crores</td>
       </tr>
       <tr>
        <td>P4</td>
        <td>3 – 5 crores</td>
       </tr>
       <tr>
        <td>P5</td>
        <td>0 – 3 crores</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 This turnover is normally checked <strong>yearly</strong>, though
      it can be checked quarterly if that's the client's requirement.
     </p>
     <h3>Purpose of Customer Classification</h3>
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
        <td>
         Reporting/Analysis — e.g., sales management can compare a P1
         (₹10cr+) customer's actual sale (say, ₹8.5cr this year) against
         their classification to spot a decline
        </td>
       </tr>
       <tr>
        <td>2</td>
        <td>Discounts</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Not the same as rebates:</strong> Customer Classification
      is purely a grouping/reporting field based on sales turnover — it is
      <strong>not</strong> the same mechanism as rebate processing (covered
      earlier via Rebate Process Active).
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
      <span className="node">Define Customer Classification</span>
     </div>
     <p className="note-text">
      📌 In this course, codes use the batch's "P" prefix (P1, P2...) for
      practice — but in real projects, custom codes typically start with
      <strong>Z or Y</strong> (SAP's reserved customer-namespace
      convention), not client-specific letters.
     </p>
    </div>

    {/* <!-- Section 9: Practical Q&A --> */}
    <div className="card">
     <h2><span className="badge">💬</span> Practical Q&amp;A</h2>
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
         XDN1 shows "user has locked the entries" and even standard
         number ranges can't be opened — what now?
        </td>
        <td>
         Check T-code <span className="tcode">SM12</span> for lock
         entries. But more importantly: if you're simply copying an
         existing account group (e.g., 0001 → your own P001) via OVT0,
         there is
         <strong>no need to touch number ranges at all</strong> — just
         keep the number range that came with the standard account group
         as-is
        </td>
       </tr>
       <tr>
        <td>
         Does Customer Classification automatically prioritize customers?
        </td>
        <td>
         No — prioritization uses a separate field (<strong>ABC classification</strong>,
         covered in an upcoming lecture). Customer Classification is
         only for turnover-based grouping/reporting
        </td>
       </tr>
       <tr>
        <td>
         If a field is missing on a screen like the Sales Order (not
         Customer Master), can it be added the same way?
        </td>
        <td>
         What was covered today (account group field status) only applies
         to Customer Master. Adding/adjusting fields on transaction
         screens like the Sales Order uses a different mechanism —
         <strong>variant transactions</strong> — covered later in the
         course
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
        <td>What does "Region" mean in SAP?</td>
        <td>State</td>
       </tr>
       <tr>
        <td>What is the purpose of the Search Term field?</td>
        <td>
         A shortcut key used to quickly search/find customer information
        </td>
       </tr>
       <tr>
        <td>
         What does Transportation Zone determine, and what is a "Route"?
        </td>
        <td>
         It's one of the parameters used to determine the Route in a
         sales document; Route is the way goods are delivered to the
         customer
        </td>
       </tr>
       <tr>
        <td>What does the Communication tab in Customer Master hold?</td>
        <td>Telephone number, mobile number, and email ID</td>
       </tr>
       <tr>
        <td>
         What does Tax Number 3 hold for Indian customers, and what is
         its structure?
        </td>
        <td>
         The customer's GST registration number — 2-digit state code +
         10-digit PAN number + 3-digit nature-of-business code
        </td>
       </tr>
       <tr>
        <td>
         How do you make a suppressed field like Tax Number 3 visible?
        </td>
        <td>
         OVT0 → select the account group → Details → General Data →
         Control → change its status from Suppressed to Optional → Save
        </td>
       </tr>
       <tr>
        <td>What does the Payment Transactions tab hold?</td>
        <td>
         The customer's bank information and payment card (debit/credit)
         information
        </td>
       </tr>
       <tr>
        <td>What is Nielsen ID, and what does it specify?</td>
        <td>
         A field that specifies market survey regions — locations where a
         company runs a market survey before/when launching a new product
        </td>
       </tr>
       <tr>
        <td>What is the purpose of Nielsen ID?</td>
        <td>
         It helps track customers located in market survey regions, so
         the company can send product samples specifically to them when
         launching a new product
        </td>
       </tr>
       <tr>
        <td>
         What value does Nielsen ID hold for a customer outside all
         defined survey regions?
        </td>
        <td>It's left blank</td>
       </tr>
       <tr>
        <td>
         What is the universal shortcut to jump directly to any field's
         SPRO configuration path?
        </td>
        <td>
         Place the cursor in that field, press F1, click the customizing
         (key) symbol, then "Continue without specifying project"
        </td>
       </tr>
       <tr>
        <td>What is Customer Classification?</td>
        <td>
         Classifying customers into bands based on their sales turnover
         (e.g., P1 = ₹10cr+, down to P5 = ₹0–3cr)
        </td>
       </tr>
       <tr>
        <td>What are the two purposes of Customer Classification?</td>
        <td>Reporting/Analysis and Discounts</td>
       </tr>
       <tr>
        <td>Is Customer Classification the same as rebate processing?</td>
        <td>
         No — it's purely a turnover-based grouping/reporting field,
         unrelated to the Rebate Process Active mechanism
        </td>
       </tr>
       <tr>
        <td>
         In real projects, what prefix do custom codes (like customer
         classification or Nielsen ID codes) typically start with?
        </td>
        <td>Z or Y — SAP's reserved customer-namespace convention</td>
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
        <td><span className="tcode">OVT0</span></td>
        <td>
         Adjust account group field status (e.g., make Tax Number 3
         Optional instead of Suppressed)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">SM12</span></td>
        <td>
         Display/delete lock entries — checked when a number-range screen
         reports being locked by another user
        </td>
       </tr>
       <tr>
        <td><span className="tcode">XDN1</span></td>
        <td>
         Referenced in troubleshooting — copying an account group from
         standard means you can leave its number range untouched
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
        <td>Standard Transportation Zone example</td>
        <td>901</td>
       </tr>
       <tr>
        <td>GST registration number structure</td>
        <td>
         2-digit state code + 10-digit PAN + 3-digit nature of business
        </td>
       </tr>
       <tr>
        <td>Sample state code</td>
        <td>36 (Telangana)</td>
       </tr>
       <tr>
        <td>Nielsen ID example mapping</td>
        <td>
         P1 (Noida, Gurgaon), P2 (Chennai, Bangalore), P3 (Bhubaneswar,
         Kolkata)
        </td>
       </tr>
       <tr>
        <td>Customer Classification example bands</td>
        <td>
         P1 (10cr+), P2 (7–10cr), P3 (5–7cr), P4 (3–5cr), P5 (0–3cr)
        </td>
       </tr>
       <tr>
        <td>Real-time custom code prefix convention</td>
        <td>Z or Y (vs. this batch's practice prefix, P)</td>
       </tr>
       <tr>
        <td>
         SPRO path family (Nielsen ID &amp; Customer Classification)
        </td>
        <td>
         Sales and Distribution → Master Data → Business Partners →
         Customers → Marketing
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture walked through several Customer Master fields in depth.
      On the <strong>Address</strong> tab: Search Term (a lookup shortcut)
      and Region (= State, with its own SPRO path to add new states).
      <strong>Transportation Zone</strong> feeds into Route determination
      for sales documents. The <strong>Communication</strong> tab holds
      contact details, while <strong>Control Data</strong> holds tax
      information — most notably <strong>Tax Number 3</strong>, India's GST
      registration number (state code + PAN + business-nature code), with a
      fix for when the field is suppressed by default (via the account
      group's field status). <strong>Payment Transactions</strong> covers
      bank and card details. On the <strong>Marketing</strong> tab,
      <strong>Nielsen ID</strong> tags customers located in market-survey
      regions (useful for sample distribution during new product launches),
      and <strong>Customer Classification</strong>
      groups customers by sales turnover for reporting/analysis and discount
      purposes — explicitly distinct from rebate processing. A genuinely
      useful universal trick was also covered: pressing F1 on any field and
      using the customizing-key shortcut jumps directly to that field's SPRO
      configuration path, without needing to memorize the menu path.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Region = State</strong> in SAP terminology; new regions are
       defined via SAP NetWeaver → General Settings → Set Countries →
       Insert Regions
      </li>
      <li>
       <strong>Tax Number 3</strong> holds the GST number (state + PAN +
       business nature) — make it Optional at the account group level if
       it's suppressed
      </li>
      <li>
       <strong>Nielsen ID</strong> tags market-survey-region customers;
       blank for everyone else
      </li>
      <li>
       <strong>Customer Classification</strong> groups by turnover for
       reporting and discounts — not the same as rebates
      </li>
      <li>
       The
       <strong>F1 → customizing key → Continue without specifying
        project</strong>
       shortcut works on any field to jump straight to its SPRO path
      </li>
      <li>
       If just copying a standard account group,
       <strong>leave its number range as-is</strong> — no need to define a
       new one
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Remaining fields in Customer Master.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 28 Notes — Fields in Customer Master: Address, Control Data,
    Payment Transactions &amp; Marketing 🎓
   </p>
  </div>
 );
};

export default Material28;
