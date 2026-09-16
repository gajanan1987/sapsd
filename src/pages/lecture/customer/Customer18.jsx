const Customer18 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-purple">
    <h1>
     🗂️ Lecture 18 — Account Groups: Field Status, One-Time Customers &amp;
     Partner Determination Procedure
    </h1>
    <p>
     SAP SD | Creating custom account groups (OVT0), the 3 things they
     control, one-time accounts (CPD/CPDA), and the AG/WE/RG/RE mapping
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class defined 4 number ranges
      (<code>P1</code>–<code>P4</code>) via
      <span className="tcode">XDN1</span> — internal vs. external numbering,
      and how "buffering" (fixed via T-code
      <span className="tcode">SNUM</span>, object <code>DEBITOR</code>) can
      make the current number appear to jump ahead. Today: creating the
      <strong>custom Account Groups</strong> that will actually use those
      number ranges.
     </div>
    </div>

    {/* <!-- Section 1: Standard account groups recap --> */}
    <div className="card teal">
     <h2>
      <span className="badge">📋</span> Standard Account Groups — Quick
      Recap
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Standard Account Group</th>
        <th>Partner Role</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>0001</td>
        <td>Sold-to Party</td>
       </tr>
       <tr>
        <td>0002</td>
        <td>Ship-to Party</td>
       </tr>
       <tr>
        <td>0003</td>
        <td>Payer</td>
       </tr>
       <tr>
        <td>0004</td>
        <td>Bill-to Party</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 2: Creating custom account groups --> */}
    <div className="card orange">
     <h2><span className="badge">1</span> Creating Custom Account Groups</h2>
     <div className="callout orange">
      💡 T-code to define account groups:
      <span className="tcode">OVT0</span>.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Logistics General</span>
      <span className="sep">→</span>
      <span className="node">Business Partner</span>
      <span className="sep">→</span> <span className="node">Customers</span>
      <span className="sep">→</span> <span className="node">Control</span>
      <span className="sep">→</span>
      <span className="node">Define Account Groups and Field Selection for Customers</span>
     </div>
     <div className="callout red">
      ⚠️
      <strong>You cannot create an account group from scratch</strong> (no
      "New Entries" option here) — every custom account group must be
      <strong>copied from a standard one</strong>.
     </div>
     <h3>Worked Example — 4 Custom Account Groups</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Copy From (Standard)</th>
        <th>New Account Group</th>
        <th>Description</th>
        <th>Number Range Assigned</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>0001</td>
        <td>P001</td>
        <td>Sold-to Party</td>
        <td>P1 (617600–617699)</td>
       </tr>
       <tr>
        <td>0002</td>
        <td>P002</td>
        <td>Ship-to Party</td>
        <td>P2</td>
       </tr>
       <tr>
        <td>0003</td>
        <td>P003</td>
        <td>Payer</td>
        <td>P3</td>
       </tr>
       <tr>
        <td>0004</td>
        <td>P004</td>
        <td>Bill-to Party</td>
        <td>P4</td>
       </tr>
      </tbody>
     </table>
     <div className="stepper">
      <div className="step">
       Select the standard account group (e.g., <code>0001</code>) →
       <strong>Copy As</strong>.
      </div>
      <div className="step">
       Rename to the new code (e.g., <code>P001</code>) and description
       ("Sold-to Party").
      </div>
      <div className="step">
       Mention the matching <strong>Number Range</strong> defined last
       class (e.g., <code>P1</code>) → Enter → Save.
      </div>
      <div className="step">Repeat for P002/P2, P003/P3, and P004/P4.</div>
     </div>
    </div>

    {/* <!-- Section 3: Purpose of account groups --> */}
    <div className="card gold">
     <h2>
      <span className="badge">2</span> The Three Purposes of an Account
      Group
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Purpose</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Controls fields in Customer Master</td>
        <td>
         Whether each field is Mandatory, Optional, Display (disabled),
         or Suppressed (hidden)
        </td>
       </tr>
       <tr>
        <td>2</td>
        <td>Controls Partner Functions</td>
        <td>
         Which partner roles (SP/SH/PY/BP) appear when a customer is
         created with that account group
        </td>
       </tr>
       <tr>
        <td>3</td>
        <td>Controls Number Ranges</td>
        <td>
         Which number series is used to number customers created under
         that account group
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 4: Field Status --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Field Status — Controlling Customer
      Master Fields
     </h2>
     <div className="callout purple">
      💡 <strong>Field Status</strong> is where an account group actually
      controls whether each Customer Master field is mandatory, optional,
      display, or suppressed.
     </div>
     <p>
      Field Status is organized across the same
      <strong>3 screens</strong> as Customer Master itself, and inside each
      screen, controls are further split by tab:
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Screen</th>
        <th>Example Tab</th>
        <th>Example Field Settings</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>General Data</td>
        <td>Address</td>
        <td>
         Mandatory: Name, Search Term, Postal Code, City, Transportation
         Zone. Suppressed: Date of Birth, Marital Status, and most
         personal fields
        </td>
       </tr>
       <tr>
        <td>Company Code Data</td>
        <td>Account Management</td>
        <td>Reconciliation Account — Required entry</td>
       </tr>
       <tr>
        <td>Sales Area Data</td>
        <td>Shipping</td>
        <td>Shipping Condition — Mandatory</td>
       </tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field Status Option</th>
        <th>Effect</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Suppress</td>
        <td>Field is hidden — it won't appear on the screen at all</td>
       </tr>
       <tr>
        <td>Required</td>
        <td>Field is mandatory — marked with a required-entry symbol</td>
       </tr>
       <tr>
        <td>Optional</td>
        <td>Field can be filled in or left blank</td>
       </tr>
       <tr>
        <td>Display</td>
        <td>Field is disabled — visible but cannot be entered/changed</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Field Status can be adjusted per client requirement — e.g., a
      client that never needs the "Date of Birth" field for its customers
      would simply keep it Suppressed.
     </p>
    </div>

    {/* <!-- Section 5: One-time account --> */}
    <div className="card red">
     <h2><span className="badge">4</span> One-Time Account</h2>
     <div className="callout red">
      💡 <strong>One-Time Account</strong> is a checkbox used only for
      <strong>one-time customers</strong> — customers who don't place orders
      frequently (or ever again).
     </div>
     <div className="callout">
      🛍️ <strong>Business example:</strong> if a client's brand (e.g., a
      Sony retail outlet) is walked into by a random shopper who buys a TV
      once and never returns, that shopper is a
      <strong>one-time customer</strong> — creating a full, permanent
      Customer Master record for them would be wasteful.
     </div>
     <h3>How It Works in Practice</h3>
     <p>
      Clients don't create a separate Customer Master for every one-time
      customer. Instead, they maintain
      <strong>one common "one-time customer" master record</strong>.
      Whenever a one-time customer places an order, the user enters this
      shared customer number, and the system then
      <strong>automatically prompts for that customer's name and address</strong>
      right there on the sales order.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Account Group</th>
        <th>Number Type</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>CPD</td>
        <td>Numeric</td>
       </tr>
       <tr>
        <td>CPDA</td>
        <td>Character</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔑 <strong>Only CPD and CPDA support "One-Time Account."</strong>
      These are the two standard SAP account groups reserved specifically
      for one-time customers — the checkbox is only available/relevant on
      these two.
     </div>
     <h3>Creating a One-Time Customer</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">XD01</span> → select account group
       <code>CPD</code> or <code>CPDA</code>.
      </div>
      <div className="step">
       Mention Sales Area (e.g., Distribution Channel <code>P4</code>
       — Direct, since one-time customers fall under Direct sales).
      </div>
      <div className="step">
       Give a generic name like "One Time Customer," Country
       <code>IN</code>, and fill in the remaining minimal required fields
       (Reconciliation Account, Shipping Condition, Terms of Payment, Tax
       Classification) → Save.
      </div>
     </div>
     <div className="callout green">
      ✅ <strong>Result:</strong> when this shared one-time customer number
      is entered on a new sales order, the system automatically asks for the
      actual customer's name and address at that moment — that's the direct
      effect of checking One-Time Account.
     </div>
    </div>

    {/* <!-- Section 6: Customer Pricing Procedure field --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">5</span> Field: Customer Pricing Procedure
     </h2>
     <div className="callout indigo">
      💡 Whatever value is set for
      <strong>Customer Pricing Procedure</strong> at the account group level
      is <strong>automatically determined/defaulted</strong> into the
      Customer Master's Sales Area Data → Sales tab when a new customer is
      created under that account group.
     </div>
     <p className="note-text">
      📌 This is a preview of a concept explored in more depth in the
      upcoming Pricing topic — for now, just note that the account group is
      where this default originates.
     </p>
    </div>

    {/* <!-- Section 7: Partner Determination Procedure --> */}
    <div className="card gold">
     <h2>
      <span className="badge">6</span> Field: Partner Determination
      Procedure (PDP)
     </h2>
     <div className="callout gold">
      💡 <strong>Partner Determination Procedure</strong> is what actually
      controls <strong>which partner functions</strong> show up when a
      customer is created under a given account group.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Standard Account Group</th>
        <th>Partner Determination Procedure</th>
        <th>Partner Function(s) Included</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>0001 (Sold-to Party)</td>
        <td>AG</td>
        <td>SP, SH, PY, BP (all four)</td>
       </tr>
       <tr>
        <td>0002 (Ship-to Party)</td>
        <td>WE</td>
        <td>SH only</td>
       </tr>
       <tr>
        <td>0003 (Payer)</td>
        <td>RG</td>
        <td>PY only</td>
       </tr>
       <tr>
        <td>0004 (Bill-to Party)</td>
        <td>RE</td>
        <td>BP only</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🇩🇪 <strong>Why AG, WE, RG, RE?</strong> These procedure codes aren't
      acronyms of the English partner-role names — they come from the
      original German SAP terminology (e.g., "AG" is the German-language
      shorthand tied to Sold-to Party). They are standard, SAP-delivered
      procedure names; custom ones can be created later in the course.
     </div>
     <p>
      Since custom account groups <code>P001</code>–<code>P004</code> were
      copied directly from <code>0001</code>–<code>0004</code>, they inherit
      the same Partner Determination Procedures:
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Custom Account Group</th>
        <th>Partner Determination Procedure</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P001</td>
        <td>AG</td>
       </tr>
       <tr>
        <td>P002</td>
        <td>WE</td>
       </tr>
       <tr>
        <td>P003</td>
        <td>RG</td>
       </tr>
       <tr>
        <td>P004</td>
        <td>RE</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 8: Important caveat --> */}
    <div className="card red">
     <h2>
      <span className="badge">⚠️</span> Important — Custom Account Groups
      Aren't Usable Yet
     </h2>
     <div className="callout red">
      🚧 Even though P001–P004 are now defined (with fields, partner
      functions, and number ranges configured), trying to create a customer
      with one of these <strong>new</strong> account groups right now will
      throw an <strong>error on save</strong>.
     </div>
     <p>
      This is because <strong>Partner Determination</strong> for these new
      account groups hasn't been fully configured yet — that's the exact
      topic for the next class. Only after Partner Determination is
      completed for P001–P004 can customers actually be created using these
      custom account groups.
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
        <td>What T-code is used to define/create account groups?</td>
        <td>OVT0</td>
       </tr>
       <tr>
        <td>Can you create a new account group from scratch?</td>
        <td>
         No — every custom account group must be copied from an existing
         standard one; there is no "New Entries" option
        </td>
       </tr>
       <tr>
        <td>What are the three things an account group controls?</td>
        <td>
         Fields in Customer Master (mandatory/optional/display/suppress),
         Partner Functions, and Number Ranges
        </td>
       </tr>
       <tr>
        <td>What is Field Status, and how is it organized?</td>
        <td>
         The set of controls (Suppress/Required/Optional/Display) for
         every Customer Master field, organized across the same 3 screens
         (General Data, Company Code Data, Sales Area Data) and their
         tabs
        </td>
       </tr>
       <tr>
        <td>What is a one-time customer?</td>
        <td>
         A customer who doesn't place orders frequently (or ever again) —
         e.g., a random walk-in shopper at a retail outlet
        </td>
       </tr>
       <tr>
        <td>
         What are the standard account groups for one-time customers?
        </td>
        <td>CPD (numeric) and CPDA (character)</td>
       </tr>
       <tr>
        <td>
         What happens if "One-Time Account" is checked on an account
         group?
        </td>
        <td>
         The system automatically prompts for the customer's name and
         address while creating the sales order, since one shared
         customer master is reused for all one-time customers
        </td>
       </tr>
       <tr>
        <td>
         What does the Customer Pricing Procedure field on an account
         group do?
        </td>
        <td>
         Its value is automatically defaulted into the Customer Master's
         Sales tab whenever a customer is created under that account
         group
        </td>
       </tr>
       <tr>
        <td>What does Partner Determination Procedure control?</td>
        <td>
         Which partner functions (SP/SH/PY/BP) are available on a
         customer created under that account group
        </td>
       </tr>
       <tr>
        <td>
         What are the standard Partner Determination Procedures for
         0001–0004?
        </td>
        <td>
         0001 → AG (all 4: SP, SH, PY, BP), 0002 → WE (SH only), 0003 →
         RG (PY only), 0004 → RE (BP only)
        </td>
       </tr>
       <tr>
        <td>
         Why can't the new custom account groups (P001–P004) be used to
         create customers yet?
        </td>
        <td>
         Their Partner Determination hasn't been fully configured —
         attempting to save a customer with them right now throws an
         error; this is completed in the next class
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
        <td><span className="tcode">OVT0</span></td>
        <td>
         Define account groups (copy from standard, assign number range
         and description)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">XD01</span></td>
        <td>
         Create a customer (used here to demonstrate creating a one-time
         customer with CPD/CPDA)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">XDN1</span></td>
        <td>
         Referenced from last class — where P1–P4 number ranges were
         defined and are now assigned to P001–P004
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
        <td>Custom account groups created</td>
        <td>
         P001 (from 0001, Sold-to), P002 (from 0002, Ship-to), P003 (from
         0003, Payer), P004 (from 0004, Bill-to)
        </td>
       </tr>
       <tr>
        <td>Number ranges assigned</td>
        <td>P001→P1, P002→P2, P003→P3, P004→P4</td>
       </tr>
       <tr>
        <td>One-time customer account groups</td>
        <td>CPD (numeric), CPDA (character)</td>
       </tr>
       <tr>
        <td>Field Status screens</td>
        <td>
         General Data, Company Code Data, Sales Area Data (same as
         Customer Master itself)
        </td>
       </tr>
       <tr>
        <td>Field Status options</td>
        <td>Suppress, Required, Optional, Display</td>
       </tr>
       <tr>
        <td>Sample mandatory fields (General Data → Address)</td>
        <td>Name, Search Term, Postal Code, City, Transportation Zone</td>
       </tr>
       <tr>
        <td>Sample mandatory field (Company Code Data)</td>
        <td>Reconciliation Account</td>
       </tr>
       <tr>
        <td>Sample mandatory field (Sales Area Data)</td>
        <td>Shipping Condition</td>
       </tr>
       <tr>
        <td>Partner Determination Procedures (standard)</td>
        <td>0001→AG, 0002→WE, 0003→RG, 0004→RE</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture created four custom Customer Account Groups (P001–P004)
      via T-code <strong>OVT0</strong>, each copied from its matching
      standard account group (0001–0004) and assigned the number ranges
      (P1–P4) defined in the previous class. Account groups were shown to
      control three things: Customer Master
      <strong>field status</strong> (mandatory/optional/display/ suppress,
      organized by the same 3 screens as Customer Master itself),
      <strong>partner functions</strong>, and
      <strong>number ranges</strong>. A dedicated concept —
      <strong>One-Time Account</strong> (via the standard CPD/CPDA account
      groups) — was covered for customers who purchase rarely or only once,
      where a single shared master record prompts for name and address at
      order-entry time instead of maintaining a full record per customer.
      The lecture closed with
      <strong>Partner Determination Procedure</strong>, the field that
      actually controls which partner functions (SP, SH, PY, BP) a given
      account group produces (0001→AG for all four, 0002→WE for SH only,
      0003→RG for PY only, 0004→RE for BP only) — and a key caveat that the
      newly created P001–P004 account groups can't yet be used to create
      real customers until their Partner Determination is completed in the
      next class.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       Account groups must be <strong>copied from standard</strong>, never
       created fresh — OVT0 has no "New Entries" option
      </li>
      <li>
       Three purposes of an account group:
       <strong>Field Status control, Partner Functions, Number Ranges</strong>
      </li>
      <li>
       <strong>CPD / CPDA</strong> are the standard one-time-customer
       account groups (numeric vs. character); checking "One-Time Account"
       makes the system ask for name/address at order time
      </li>
      <li>
       <strong>Partner Determination Procedure</strong> (AG, WE, RG, RE for
       the standard groups) is what actually determines which partner
       functions appear on a customer
      </li>
      <li>
       Custom account groups <strong>cannot create customers yet</strong> —
       Partner Determination must be completed for them first
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Partner Determination — completing the
      configuration so P001–P004 can actually be used to create customers.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 18 Notes — Account Groups: Field Status, One-Time Customers &amp;
    Partner Determination Procedure 🎓
   </p>
  </div>
 );
};

export default Customer18;
