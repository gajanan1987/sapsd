const Customer16 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-brown">
    <h1>
     🏥 Lecture 16 — Extending Customers to Divisions &amp; Partner Functions
    </h1>
    <p>
     SAP SD | More hands-on customer creation, extending a customer across
     all 6 divisions, and the Sold-to/Ship-to/Bill-to/Payer model
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class created the first customer via
      <span className="tcode">XD01</span>. Today: creating more customers across
      every distribution channel, extending each one to
      <strong>all 6 divisions</strong>, and the
      <strong>Partner Functions</strong> concept (Sold-to Party, Ship-to
      Party, Bill-to Party, Payer).
     </div>
    </div>

    {/* <!-- Section 1: Listing customers --> */}
    <div className="card">
     <h2>
      <span className="badge">📋</span> Viewing All Customers for a Sales
      Organization
     </h2>
     <div className="callout">
      💡 To see the full list of customers already created, use the report
      the instructor referred to (heard on the recording as sounding like
      <strong>"V-Cast"</strong> — the exact T-code spelling is unclear from
      the audio): mention your <strong>Sales Organization</strong> and click
      <strong>Execute</strong> to get the full customer list.
     </div>
    </div>

    {/* <!-- Section 2: Creating more customers --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Creating Customers Across Every
      Distribution Channel
     </h2>
     <p>
      Same T-code (<span className="tcode">XD01</span>), same account group
      (<code>0001</code>) — only the
      <strong>Distribution Channel</strong> changes depending on which type
      of customer is being created:
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Customer Type</th>
        <th>Distribution Channel</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><span className="tag tag-dealer">Dealer</span></td>
        <td>P1</td>
       </tr>
       <tr>
        <td><span className="tag tag-distributor">Distributor</span></td>
        <td>P2</td>
       </tr>
       <tr>
        <td>
         <span className="tag tag-institution">Institution</span> (e.g.
         Apollo Hospitals)
        </td>
        <td>P3</td>
       </tr>
       <tr>
        <td><span className="tag tag-direct">Direct</span></td>
        <td>P4</td>
       </tr>
      </tbody>
     </table>
     <p>
      A new customer is always created first with a single division
      (typically <code>P1</code>), following the same field sequence from
      Lecture 15: Name/Address → Transportation Zone → Company Code Data
      (Reconciliation Account) → Sales Area Data (Shipping Condition,
      Delivering Plant, Incoterms, Terms of Payment, Account Assignment
      Group, Tax Classification) → Save.
     </p>
    </div>

    {/* <!-- Section 3: Extending to other divisions --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Extending a Customer to Other Divisions
     </h2>
     <div className="callout orange">
      💡 A customer is only ever created with
      <strong>one division</strong> to start. To let that same customer buy
      products from the <strong>other 5 divisions</strong> too, the customer
      record must be <strong>extended</strong> to each additional division,
      one at a time.
     </div>
     <h3>How Extension Works — Same T-code, XD01</h3>
     <div className="stepper">
      <div className="step">
       Select account group <code>0001</code> → enter the
       <strong>existing customer number</strong> (the one you're extending,
       not a new one).
      </div>
      <div className="step">
       In the top fields, mention the <strong>new</strong> division you
       want to extend into (e.g. <code>P2</code>).
      </div>
      <div className="step">
       Below, in the <strong>Reference</strong> section, mention the
       <strong>same customer number</strong> again, with the
       <strong>division it was already created in</strong> (e.g.
       <code>P1</code>) as the Reference Division.
      </div>
      <div className="step">
       Press Enter — since it's the same customer, the system skips
       straight to <strong>Sales Area Data</strong> (no need to re-enter
       General Data or Company Code Data).
      </div>
      <div className="step">
       Review the Sales tabs, adjust if needed, and Save.
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Repeat for every division:</strong> if a customer needs to
      be active across all 6 divisions, this extension step must be repeated
      5 more times (once per remaining division) — each time referencing the
      customer's original (or any already-extended) division.
     </div>
     <div className="callout blue">
      🔍 <strong>Checking how many divisions a customer is in:</strong> on
      the initial <span className="tcode">XD01</span>/<span className="tcode">XD02</span>
      screen, enter the customer number and click
      <strong>Customer Sales Areas</strong> — it shows every Sales Area
      (Sales Org + Distribution Channel + Division) the customer has already
      been extended into.
     </div>
    </div>

    {/* <!-- Section 4: Partner Functions intro --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Partner Functions — The 4 Customer Roles
     </h2>
     <div className="callout purple">
      💡 <strong>Worked scenario:</strong> Apollo Hospitals has multiple
      branches. The main branch (e.g. Apollo Jubilee Hills) places the
      order, but other branches (e.g. Apollo Vijayawada, Apollo Vizag) may
      actually receive the goods or receive the bill. SAP models this with
      <strong>Partner Functions</strong> — every customer is classified into
      one of four roles.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Partner Function</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>SP</td>
        <td>Sold-to Party</td>
        <td>
         The customer who <strong>places the order</strong> — typically
         the main branch
        </td>
       </tr>
       <tr>
        <td>SH</td>
        <td>Ship-to Party</td>
        <td>
         The customer who <strong>receives the goods</strong> — often a
         sub-branch
        </td>
       </tr>
       <tr>
        <td>BP</td>
        <td>Bill-to Party</td>
        <td>
         The customer who <strong>receives the bill/invoice</strong>
        </td>
       </tr>
       <tr>
        <td>PY</td>
        <td>Payer</td>
        <td>The customer who <strong>makes the payment</strong></td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔑 <strong>Default behavior:</strong> when you create a customer as a
      <strong>Sold-to Party</strong>, its Partner Functions tab
      automatically shows all four roles (SP, SH, BP, PY) — because by
      default the same customer is assumed to place the order, receive the
      goods, receive the bill, and pay for it, unless other parties are
      explicitly added.
     </div>
    </div>

    {/* <!-- Section 5: Account groups for each role --> */}
    <div className="card gold">
     <h2><span className="badge">4</span> Account Group per Partner Function</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Role Being Created</th>
        <th>Account Group</th>
        <th>Partner Function(s) Shown</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Sold-to Party</td>
        <td>0001</td>
        <td>All four: SP, SH, BP, PY</td>
       </tr>
       <tr>
        <td>Ship-to Party</td>
        <td>0002</td>
        <td>SH only</td>
       </tr>
       <tr>
        <td>Payer</td>
        <td>0003</td>
        <td>PY only</td>
       </tr>
       <tr>
        <td>Bill-to Party</td>
        <td>0004</td>
        <td>BP only</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📌 These are all <strong>standard</strong> SAP account groups used for
      practice — custom account groups are created by the course in an
      upcoming lecture.
     </div>
    </div>

    {/* <!-- Section 6: Creating Ship-to and Bill-to customers --> */}
    <div className="card red">
     <h2>
      <span className="badge">5</span> Creating Ship-to Party &amp; Bill-to
      Party Customers
     </h2>
     <div className="callout red">
      ⚠️ A Ship-to Party or Bill-to Party customer shows a
      <strong>reduced set of fields</strong> compared to a Sold-to Party,
      since it doesn't need the full sales/billing setup of a party that
      actually places orders.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Role</th>
        <th>Sales Area Data Fields Available</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Ship-to Party (0002)</td>
        <td>
         Full Shipping tab (Shipping Condition, Delivering Plant);
         Billing tab limited to Tax Classification only
        </td>
       </tr>
       <tr>
        <td>Bill-to Party (0004)</td>
        <td>No Sales Area Data fields at all</td>
       </tr>
      </tbody>
     </table>
     <h3>Worked Example — Apollo Hospitals Group</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Branch</th>
        <th>Role</th>
        <th>Account Group</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Apollo Jubilee Hills</td>
        <td>Sold-to Party (main branch)</td>
        <td>0001</td>
       </tr>
       <tr>
        <td>Apollo Vijayawada</td>
        <td>Ship-to Party</td>
        <td>0002</td>
       </tr>
       <tr>
        <td>Apollo Vizag</td>
        <td>Ship-to Party</td>
        <td>0002</td>
       </tr>
       <tr>
        <td>Apollo Vijayawada</td>
        <td>Bill-to Party (created separately)</td>
        <td>0004</td>
       </tr>
       <tr>
        <td>Apollo Vizag</td>
        <td>Bill-to Party (created separately)</td>
        <td>0004</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Both account groups 0002 and 0004 are configured with
      <strong>external numbering</strong> in the practice system — the user
      must manually enter a number within the account group's lower/upper
      limit range.
     </p>
    </div>

    {/* <!-- Section 7: Adding partner functions to sold-to party --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">6</span> Linking Ship-to/Bill-to Parties Back to
      the Sold-to Party
     </h2>
     <div className="callout indigo">
      💡 After the Ship-to and Bill-to Party customers exist as their own
      master records, they must be
      <strong>attached to the Sold-to Party's Partner Functions tab</strong>
      — that's what actually links them together for order processing.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">XD02</span> (Change) for the Sold-to Party
       customer (e.g. Apollo Jubilee Hills) → select the relevant division
       (e.g. <code>P1</code>).
      </div>
      <div className="step">
       Go to the <strong>Partner Functions</strong> tab → add the Ship-to
       Party customer number(s) against the SH row(s), and the Bill-to
       Party customer number(s) against the BP row(s) → Save.
      </div>
      <div className="step">
       <strong>Repeat this for every division</strong> the Sold-to Party
       has been extended into (P1 through P6 in this project) — partner
       function assignments are maintained <strong>per sales area</strong>,
       so they don't automatically carry over from one division to another.
      </div>
     </div>
     <div className="callout green">
      ✅ <strong>Result:</strong> once linked, an order placed by the
      Sold-to Party (Apollo Jubilee Hills) can automatically route
      deliveries to the correct Ship-to Party branch and invoices to the
      correct Bill-to Party branch.
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
         How many divisions does a new customer belong to when first
         created?
        </td>
        <td>
         Only one — the division entered during creation; it must be
         separately extended to reach any additional divisions
        </td>
       </tr>
       <tr>
        <td>How do you extend an existing customer to a new division?</td>
        <td>
         Run XD01 with the same customer number, enter the new division
         in the top fields, and enter the same customer number with its
         already-existing division as the Reference — the system then
         jumps straight to Sales Area Data
        </td>
       </tr>
       <tr>
        <td>
         How do you check which divisions/sales areas a customer has
         already been extended into?
        </td>
        <td>
         Enter the customer number on the XD01/XD02 screen and click
         "Customer Sales Areas"
        </td>
       </tr>
       <tr>
        <td>What are the four Partner Functions in SAP SD?</td>
        <td>
         Sold-to Party (SP) — places the order; Ship-to Party (SH) —
         receives the goods; Bill-to Party (BP) — receives the bill;
         Payer (PY) — makes the payment
        </td>
       </tr>
       <tr>
        <td>
         Which partner functions appear by default when you create a
         Sold-to Party customer?
        </td>
        <td>
         All four — SP, SH, BP, and PY — since by default the same
         customer is assumed to fill all four roles
        </td>
       </tr>
       <tr>
        <td>
         Which account group is used for each partner function role?
        </td>
        <td>
         Sold-to Party → 0001; Ship-to Party → 0002; Payer → 0003;
         Bill-to Party → 0004
        </td>
       </tr>
       <tr>
        <td>
         What fields are available when creating a Ship-to Party vs. a
         Bill-to Party?
        </td>
        <td>
         Ship-to Party gets a full Shipping tab plus only Tax
         Classification in Billing; Bill-to Party gets no Sales Area Data
         fields at all
        </td>
       </tr>
       <tr>
        <td>
         How do you actually link a Ship-to/Bill-to Party to its Sold-to
         Party?
        </td>
        <td>
         Go to the Sold-to Party in change mode (XD02), open the Partner
         Functions tab, and add the Ship-to/Bill-to customer numbers
         against the SH/BP rows
        </td>
       </tr>
       <tr>
        <td>
         If a Sold-to Party exists in 6 divisions, how many times must
         partner functions be linked?
        </td>
        <td>
         Once per division — partner function assignments are maintained
         per sales area and don't automatically carry across divisions
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
        <td><span className="tcode">XD01</span></td>
        <td>
         Create a new customer, or extend an existing customer to a new
         division/sales area
        </td>
       </tr>
       <tr>
        <td><span className="tcode">XD02</span></td>
        <td>
         Change an existing customer — used here to add Ship-to/Bill-to
         partner functions to a Sold-to Party, per division
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
        <td>Distribution Channel by customer type</td>
        <td>P1 Dealer, P2 Distributor, P3 Institution, P4 Direct</td>
       </tr>
       <tr>
        <td>Extension method</td>
        <td>
         XD01 with existing customer number + new division on top, same
         customer + existing division as Reference
        </td>
       </tr>
       <tr>
        <td>Check sales areas for a customer</td>
        <td>"Customer Sales Areas" button on XD01/XD02</td>
       </tr>
       <tr>
        <td>Partner Function codes</td>
        <td>SP = Sold-to, SH = Ship-to, BP = Bill-to, PY = Payer</td>
       </tr>
       <tr>
        <td>Account groups by role</td>
        <td>0001 Sold-to, 0002 Ship-to, 0003 Payer, 0004 Bill-to</td>
       </tr>
       <tr>
        <td>Apollo example — Sold-to</td>
        <td>Apollo Jubilee Hills, account group 0001</td>
       </tr>
       <tr>
        <td>Apollo example — Ship-to</td>
        <td>
         Apollo Vijayawada, Apollo Vizag; account group 0002 (external
         numbering)
        </td>
       </tr>
       <tr>
        <td>Apollo example — Bill-to</td>
        <td>
         Apollo Vijayawada, Apollo Vizag; account group 0004 (external
         numbering)
        </td>
       </tr>
       <tr>
        <td>Linking step</td>
        <td>
         XD02 on Sold-to Party → Partner Functions tab → add SH/BP
         customer numbers, repeated per division
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture continued hands-on customer creation across all
      distribution channels (dealers, distributors, institutions, direct),
      and introduced the crucial concept of
      <strong>extending</strong> a customer to every division it needs —
      since a customer is only created in one division at a time and must be
      separately extended into the remaining five, referencing the
      customer's already-created division each time. The main topic was
      <strong>Partner Functions</strong>: every customer plays one of four
      roles — Sold-to Party (places the order), Ship-to Party (receives
      goods), Bill-to Party (receives the bill), and Payer (pays) — each
      tied to its own standard account group (0001/0002/0003/0004
      respectively). Using the Apollo Hospitals group as a worked example,
      the lecture showed how to create Ship-to and Bill-to Party customers
      (which expose fewer fields than a Sold-to Party) and then link them
      back to the Sold-to Party's Partner Functions tab via XD02 — a step
      that must be repeated separately for every division the Sold-to Party
      exists in.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       A customer is created in <strong>one division only</strong> — it
       must be explicitly <strong>extended</strong> to reach the other
       divisions
      </li>
      <li>
       When extending, reference the
       <strong>same customer number</strong> with a
       <strong>division it already exists in</strong> — the system then
       skips straight to Sales Area Data
      </li>
      <li>
       <strong>Partner Functions</strong> = SP (Sold-to), SH (Ship-to), BP
       (Bill-to), PY (Payer) — a Sold-to Party gets all four by default
      </li>
      <li>
       Each partner function role has its
       <strong>own standard account group</strong>: 0001/0002/0003/0004
      </li>
      <li>
       Ship-to and Bill-to Party customers expose
       <strong>fewer fields</strong> than a Sold-to Party — they don't need
       a full sales/billing setup
      </li>
      <li>
       Linking a Ship-to/Bill-to Party to a Sold-to Party's Partner
       Functions must be repeated <strong>per division</strong>
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Creating custom Customer Number Ranges
      and Account Groups.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 16 Notes — Extending Customers to Divisions &amp; Partner
    Functions 🎓
   </p>
  </div>
 );
};

export default Customer16;
