const Customer15 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-gold">
    <h1>
     👤 Lecture 15 — Customer Master: Structure &amp; Hands-On Creation
     (XD01)
    </h1>
    <p>
     SAP SD | The 3-screen/15-tab structure of Customer Master, account
     groups, internal vs. external numbering, and creating a real customer
     end to end
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class introduced Master Data conceptually. Today: the full
      internal structure of <strong>Customer Master</strong>, and creating
      one live in the system.
     </div>
    </div>

    {/* <!-- Section 1: Customer Master structure --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Customer Master — The 3-Screen Structure
     </h2>
     <div className="callout teal">
      💡 Customer Master is classified into <strong>3 screens</strong>:
      General Data, Company Code Data, and Sales Area Data.
     </div>
     <div className="flow">
      <div className="flow-step flow-teal">General Data (7 tabs)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">Company Code Data (4 tabs)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">Sales Area Data (4 tabs)</div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Screen</th>
        <th>Tab Pages</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>General Data (7 tabs)</td>
        <td>
         Address, Control Data, Payment Transactions, Marketing,
         Unloading Points, Export Data, Contact Person
        </td>
       </tr>
       <tr>
        <td>Company Code Data (4 tabs)</td>
        <td>
         Account Management, Payment Transactions, Correspondence,
         Insurance
        </td>
       </tr>
       <tr>
        <td>Sales Area Data (4 tabs)</td>
        <td>Sales, Shipping, Billing Document, Partner Functions</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 2: Responsibility split --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Who Is Responsible for Each Screen?
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Screen</th>
        <th>Responsible User</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>General Data</td>
        <td>FI and SD user (shared/common data)</td>
       </tr>
       <tr>
        <td>Company Code Data</td>
        <td>FI user only</td>
       </tr>
       <tr>
        <td>Sales Area Data</td>
        <td>SD user only</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      💡 In real time, either <strong>one</strong> user or
      <strong>two</strong> users are responsible for creating a customer
      master, depending on how the client's team is organized.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>What Happens</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>One user responsible</td>
        <td>
         That single user creates the customer
         <strong>Complete</strong> — all three screens (General Data,
         Company Code Data, Sales Area Data) in one go
        </td>
       </tr>
       <tr>
        <td>Two users responsible</td>
        <td>
         The <strong>Sales department user</strong> creates the customer
         in <strong>Sales view</strong> first, then sends the generated
         customer number to the <strong>Finance department user</strong>,
         who then creates the customer in
         <strong>Company Code view</strong> using that same number
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 3: T-codes --> */}
    <div className="card purple">
     <h2><span className="badge">3</span> Customer Master T-Codes — By View</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>View</th>
        <th>Screens Included</th>
        <th>Create</th>
        <th>Change</th>
        <th>Display</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><strong>Complete</strong></td>
        <td>General Data + Company Code Data + Sales Area Data</td>
        <td><span className="tcode">XD01</span></td>
        <td><span className="tcode">XD02</span></td>
        <td><span className="tcode">XD03</span></td>
       </tr>
       <tr>
        <td><strong>Sales View</strong></td>
        <td>General Data + Sales Area Data</td>
        <td><span className="tcode">VD01</span></td>
        <td><span className="tcode">VD02</span></td>
        <td><span className="tcode">VD03</span></td>
       </tr>
       <tr>
        <td><strong>Company Code View</strong></td>
        <td>General Data + Company Code Data</td>
        <td><span className="tcode">FD01</span></td>
        <td><span className="tcode">FD02</span></td>
        <td><span className="tcode">FD03</span></td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 4: Path --> */}
    <div className="card gold">
     <h2><span className="badge">4</span> Path to Create Customer Master</h2>
     <div className="callout gold">
      💡 Since <strong>users</strong> (not consultants) create master data,
      the navigation path starts from <strong>SAP Easy Access</strong> — not
      SPRO/IMG.
     </div>
     <div className="path">
      <span className="node">SAP Easy Access</span><span className="sep">→</span>
      <span className="node">Logistics</span><span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span> <span className="node">Master Data</span>
      <span className="sep">→</span> <span className="node">Business Partner</span>
      <span className="sep">→</span> <span className="node">Customer</span>
      <span className="sep">→</span> <span className="node">Create</span>
      <span className="sep">→</span>
      <span className="node">Complete</span>
     </div>
    </div>

    {/* <!-- Section 5: Account group & numbering --> */}
    <div className="card red">
     <h2><span className="badge">5</span> Account Group &amp; Number Range</h2>
     <div className="stepper">
      <div className="step">
       On the initial screen, click
       <strong>Account Group Overview</strong>, then double-click the
       standard account group <code>0001</code>. (In real projects, custom
       account groups are created later — for now, practice with the
       standard one.)
      </div>
      <div className="step">
       Check the <strong>External</strong> checkbox for account group
       <code>0001</code>.
      </div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>"External" Setting</th>
        <th>Meaning</th>
        <th>Customer Number Field</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>❌ Unchecked</td>
        <td>
         <strong>Internal number</strong> — the system generates the
         customer number automatically on save
        </td>
        <td>Leave blank</td>
       </tr>
       <tr>
        <td>✅ Checked</td>
        <td>
         <strong>External number</strong> — the user must manually enter
         a number, chosen within a defined Lower Limit / Upper Limit
         range
        </td>
        <td>Enter manually (within range)</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      💡 The Lower Limit / Upper Limit for account group <code>0001</code>
      are shown on the same account-group configuration screen — whatever
      number you pick for an external-numbered customer must fall within
      that range.
     </div>
    </div>

    {/* <!-- Section 6: General Data creation --> */}
    <div className="card teal">
     <h2><span className="badge">6</span> Creating a Customer — General Data</h2>
     <div className="stepper">
      <div className="step">
       Double-click account group <code>0001</code> → mention Company Code
       (<code>P100</code>), Sales Organization (<code>P100</code>),
       Distribution Channel (<code>P1</code>), Division (<code>P1</code>).
      </div>
      <div className="step">
       If numbering is internal, leave the customer number field blank; if
       external, enter a manual number within the allowed range → press
       Enter.
      </div>
      <div className="step">
       Fill in Name, Search Term, Street, House Number, Postal Code, City,
       Country (<code>IN</code>), Region (the SAP field for state).
      </div>
      <div className="step">
       Mention <strong>Transportation Zone</strong> = <code>901</code>
       (standard) — this is a mandatory field, indicated by a required-
       field symbol, just like Country.
      </div>
     </div>
    </div>

    {/* <!-- Section 7: Reconciliation account issue --> */}
    <div className="card orange">
     <h2>
      <span className="badge">7</span> The Reconciliation Account Roadblock
      (Company Code Data)
     </h2>
     <div className="callout red">
      ⚠️ <strong>Reconciliation Account</strong> is a mandatory field on the
      Company Code Data screen — but when creating a customer for the very
      first time, its F4 dropdown shows <strong>no options</strong> at all,
      blocking further progress.
     </div>
     <div className="callout blue">
      🔧 <strong>Fix:</strong> the G/L (General Ledger) accounts must first
      be copied from the standard reference Company Code
      <code>1000</code> into your own Company Code. This is really an FI
      task, but is done here for practice.
     </div>
     <h3>Step 1: T-code OBY6</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">OBY6</span> → select your Company Code
       (<code>P100</code>) → Details.
      </div>
      <div className="step">
       Mention Chart of Accounts = <code>INT</code>, Fiscal Year Variant =
       <code>V3</code>.
      </div>
      <div className="step">
       Mention Field Status Variant = <code>1000</code>, Posting Period
       Variant = <code>1000</code> → Save.
      </div>
     </div>
     <div className="callout">
      🗓️ <strong>Fiscal Year Variant</strong> specifies the financial year
      of the company. <code>V3</code> = April to March (used for Indian
      companies); <code>K4</code> = January to December.
     </div>
     <h3>Step 2: T-code OBY2 — Copy the G/L Accounts</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">OBY2</span> → mention your Company Code
       (<code>P100</code>), and Copy from Company Code = <code>1000</code>.
      </div>
      <div className="step">
       <strong>Uncheck</strong> Test Run → Execute → confirm the
       "production run" warning → Continue (a request number is generated
       the first time).
      </div>
      <div className="step">
       The system confirms accounts have been copied from the reference
       company code.
      </div>
     </div>
     <div className="callout green">
      ✅ After this, re-creating (or continuing) the customer will show
      valid options in the Reconciliation Account field.
     </div>
    </div>

    {/* <!-- Section 8: Remaining fields --> */}
    <div className="card purple">
     <h2><span className="badge">8</span> Completing the Customer Master</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Screen / Tab</th>
        <th>Field</th>
        <th>Sample Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Company Code Data</td>
        <td>Reconciliation Account</td>
        <td>140000 (standard)</td>
       </tr>
       <tr>
        <td>Sales Area Data → Shipping</td>
        <td>Shipping Condition</td>
        <td>01</td>
       </tr>
       <tr>
        <td>Sales Area Data → Shipping</td>
        <td>Delivering Plant</td>
        <td>P100</td>
       </tr>
       <tr>
        <td>Sales Area Data → Billing</td>
        <td>Incoterms</td>
        <td>CIF, Hyderabad</td>
       </tr>
       <tr>
        <td>Sales Area Data → Billing</td>
        <td>Terms of Payment</td>
        <td>0001</td>
       </tr>
       <tr>
        <td>Sales Area Data → Billing</td>
        <td>Account Assignment Group</td>
        <td>01</td>
       </tr>
       <tr>
        <td>Sales Area Data → Billing</td>
        <td>Tax Classification</td>
        <td>1</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 The detailed meaning of each of these fields (Shipping Condition,
      Incoterms, Terms of Payment, Account Assignment Group, Tax
      Classification) is covered in later lectures — today's focus is simply
      getting the customer created end to end.
     </p>
     <div className="callout green">
      ✅ <strong>Save.</strong> With internal numbering, the system
      generates the customer number automatically on save (e.g.
      <code>100640</code> in the class example).
     </div>
    </div>

    {/* <!-- Section 9: External number demo --> */}
    <div className="card red">
     <h2>
      <span className="badge">9</span> Creating a Customer with External
      Numbering
     </h2>
     <div className="callout red">
      ⚠️ Once <strong>External</strong> is checked for account group
      <code>0001</code> (a backend change demonstrated by the instructor),
      the checkbox itself can no longer be toggled from inside
      <span className="tcode">XD01</span> — external vs. internal is set only in
      configuration, not on the creation screen.
     </div>
     <div className="stepper">
      <div className="step">
       Double-click account group <code>0001</code> (now external) → enter
       a manual customer number that falls within the Lower Limit / Upper
       Limit range shown (e.g. a 5-digit number if the range is
       00001–99999).
      </div>
      <div className="step">
       Mention Company Code and Sales Area → press Enter.
      </div>
      <div className="step">
       If a <strong>Reference</strong> field auto-populates with another
       customer's number, <strong>remove it</strong> unless you actually
       intend to copy data from that existing customer — otherwise leave it
       blank for a fresh record.
      </div>
      <div className="step">
       Fill in the same fields as before (Name, Address, Transportation
       Zone, Reconciliation Account, Shipping Condition, Delivering Plant,
       Incoterms, Terms of Payment, Account Assignment Group, Tax
       Classification) → Save.
      </div>
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
         Into how many screens is Customer Master classified, and what
         are they?
        </td>
        <td>Three — General Data, Company Code Data, Sales Area Data</td>
       </tr>
       <tr>
        <td>How many tab pages does each screen have?</td>
        <td>
         General Data: 7 (Address, Control Data, Payment Transactions,
         Marketing, Unloading Points, Export Data, Contact Person);
         Company Code Data: 4 (Account Management, Payment Transactions,
         Correspondence, Insurance); Sales Area Data: 4 (Sales, Shipping,
         Billing Document, Partner Functions)
        </td>
       </tr>
       <tr>
        <td>Who is responsible for each of the three screens?</td>
        <td>
         General Data → FI and SD user; Company Code Data → FI user;
         Sales Area Data → SD user
        </td>
       </tr>
       <tr>
        <td>
         What happens if two separate users create a customer master?
        </td>
        <td>
         The Sales department user creates the customer in Sales view
         first, sends the resulting customer number to the Finance user,
         who then creates it in Company Code view
        </td>
       </tr>
       <tr>
        <td>
         What are the T-codes for Customer Master — Complete, Sales view,
         and Company Code view?
        </td>
        <td>
         Complete: XD01/XD02/XD03; Sales view: VD01/VD02/VD03; Company
         Code view: FD01/FD02/FD03
        </td>
       </tr>
       <tr>
        <td>
         What is the navigation path to create a customer, and why does
         it start from SAP Easy Access rather than SPRO?
        </td>
        <td>
         SAP Easy Access → Logistics → Sales and Distribution → Master
         Data → Business Partner → Customer → Create → Complete; it
         starts there because master data is created by users, not
         consultants
        </td>
       </tr>
       <tr>
        <td>
         What does "External" unchecked vs. checked mean on an account
         group?
        </td>
        <td>
         Unchecked = internal numbering (system auto-generates the
         customer number on save); checked = external numbering (user
         manually enters a number within the account group's defined
         lower/upper limit range)
        </td>
       </tr>
       <tr>
        <td>
         Why does the Reconciliation Account field show no options when
         creating a customer for the first time?
        </td>
        <td>
         The G/L accounts haven't yet been copied from the standard
         reference Company Code (1000) into your own company code
        </td>
       </tr>
       <tr>
        <td>
         How do you fix the missing Reconciliation Account options?
        </td>
        <td>
         Run OBY6 (set Chart of Accounts, Fiscal Year Variant, Field
         Status Variant, Posting Period Variant for your company code),
         then OBY2 (copy G/L accounts from reference company code 1000,
         with Test Run unchecked)
        </td>
       </tr>
       <tr>
        <td>
         What does the Fiscal Year Variant control, and what are V3 and
         K4?
        </td>
        <td>
         It specifies the company's financial year; V3 = April to March
         (used for Indian companies), K4 = January to December
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
        <td>
         <span className="tcode">XD01</span> /
         <span className="tcode">XD02</span> /
         <span className="tcode">XD03</span>
        </td>
        <td>
         Create / Change / Display Customer Master — Complete (all 3
         screens)
        </td>
       </tr>
       <tr>
        <td>
         <span className="tcode">VD01</span> /
         <span className="tcode">VD02</span> /
         <span className="tcode">VD03</span>
        </td>
        <td>
         Create / Change / Display Customer Master — Sales view only
        </td>
       </tr>
       <tr>
        <td>
         <span className="tcode">FD01</span> /
         <span className="tcode">FD02</span> /
         <span className="tcode">FD03</span>
        </td>
        <td>
         Create / Change / Display Customer Master — Company Code view
         only
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OBY6</span></td>
        <td>
         Set Chart of Accounts, Fiscal Year Variant, Field Status
         Variant, Posting Period Variant for a company code (prerequisite
         for reconciliation accounts)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OBY2</span></td>
        <td>
         Copy G/L accounts from a reference company code (e.g. 1000) into
         your own company code
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
        <td>Customer Master screens</td>
        <td>
         General Data (7 tabs), Company Code Data (4 tabs), Sales Area
         Data (4 tabs)
        </td>
       </tr>
       <tr>
        <td>Standard account group used</td>
        <td>0001</td>
       </tr>
       <tr>
        <td>Transportation Zone (example)</td>
        <td>901 (standard)</td>
       </tr>
       <tr>
        <td>OBY6 settings (P100)</td>
        <td>
         Chart of Accounts INT, Fiscal Year Variant V3, Field Status
         Variant 1000, Posting Period Variant 1000
        </td>
       </tr>
       <tr>
        <td>OBY2 reference company code</td>
        <td>1000 (Test Run unchecked before Execute)</td>
       </tr>
       <tr>
        <td>Reconciliation Account (example)</td>
        <td>140000 (standard)</td>
       </tr>
       <tr>
        <td>Shipping Condition (example)</td>
        <td>01</td>
       </tr>
       <tr>
        <td>Delivering Plant (example)</td>
        <td>P100</td>
       </tr>
       <tr>
        <td>Incoterms (example)</td>
        <td>CIF, Hyderabad</td>
       </tr>
       <tr>
        <td>Terms of Payment (example)</td>
        <td>0001</td>
       </tr>
       <tr>
        <td>Account Assignment Group (example)</td>
        <td>01</td>
       </tr>
       <tr>
        <td>Tax Classification (example)</td>
        <td>1</td>
       </tr>
       <tr>
        <td>Sample generated customer number (internal)</td>
        <td>100640</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture unpacked the internal structure of
      <strong>Customer Master</strong> — three screens (General Data,
      Company Code Data, Sales Area Data) split across FI and SD
      responsibility, with 7 + 4 + 4 tab pages respectively — and the
      matching T-code families (XD, VD, FD for Complete/Sales/Company Code
      views). The hands-on portion created a customer via
      <span className="tcode">XD01</span>, starting from SAP Easy Access (since
      users, not consultants, create master data), working through account
      group <code>0001</code> and the internal-vs- external numbering
      distinction, general address data, and the Company Code Data
      reconciliation account roadblock — resolved by copying G/L accounts
      from reference company code 1000 via
      <span className="tcode">OBY6</span> and <span className="tcode">OBY2</span>.
      The lecture closed by completing Sales Area Data (shipping condition,
      delivering plant, incoterms, terms of payment, account assignment
      group, tax classification) and saving to generate the customer number,
      then repeating the process with external numbering to show the
      manual-entry alternative.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       Customer Master = <strong>3 screens</strong> (General, Company Code,
       Sales Area) totaling <strong>15 tab pages</strong> (7+4+4)
      </li>
      <li>
       <strong>1 or 2 users</strong> create a customer in real projects —
       if 2, Sales creates it first, then hands the customer number to
       Finance
      </li>
      <li>
       T-codes follow a pattern: <strong>XD</strong> = Complete,
       <strong>VD</strong> = Sales view, <strong>FD</strong> = Company Code
       view (01 = Create, 02 = Change, 03 = Display)
      </li>
      <li>
       Master data creation starts from <strong>SAP Easy Access</strong>,
       not SPRO
      </li>
      <li>
       Account group
       <strong>External unchecked = internal numbering</strong>
       (auto-generated);
       <strong>checked = external numbering</strong> (manual, within a
       defined range)
      </li>
      <li>
       A blank <strong>Reconciliation Account</strong> dropdown on first
       customer creation means G/L accounts haven't been copied yet — fix
       via <span className="tcode">OBY6</span> then
       <span className="tcode">OBY2</span>
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Continuing Customer Master — a
      detailed field-by-field walkthrough of each tab, then moving to
      Material Master.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 15 Notes — Customer Master: Structure &amp; Hands-On Creation
    (XD01) 🎓
   </p>
  </div>
 );
};

export default Customer15;
