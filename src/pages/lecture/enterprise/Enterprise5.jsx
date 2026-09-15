const Enterprise5 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-red">
    <h1>🏗️ Lecture 5 — Enterprise Structure Theory: Company Code Through Sales Office</h1>
    <p>
     SAP SD | Deep-dive definitions for the first five organizational units,
     code conventions, and the full distribution-channel hierarchy
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Quick Recap — The 9 Organizational Units</h2>
     <div className="flow">
      <div className="flow-step done">Company Code ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">Sales Organization ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">Distribution Channel ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">Division ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">Sales Office 🆕</div>
     </div>
     <p className="note-text-center">
      Last class we only listed the 9 organizational units with their
      responsible consultant and code length. Today we go deep into
      <strong>what each unit actually means</strong>, one by one, starting
      from Company Code.
     </p>
    </div>

    {/* <!-- Section 1: Coding convention --> */}
    <div className="card orange">
     <h2><span className="badge">🔤</span> Coding Convention — General Rules</h2>
     <div className="callout">
      💡 Every organizational unit in SAP is defined as a
      <strong>code</strong>, maximum length <strong>4 digits</strong>
      (some units use shorter lengths, as covered per unit below). A code
      can be fully numeric, fully alphanumeric, or fully characters.
     </div>
     <div className="callout red">
      🔒 <strong>Uniqueness rule:</strong> within the <em>same</em>
      organizational unit, a code must be unique — if <code>P100</code>
      already exists as a Company Code, you cannot create another
      Company Code with the same code (system throws "entry already
      exists"). But the <em>same</em> code value can be reused
      <strong>across different organizational units</strong> — e.g.
      <code>P100</code> as a Company Code and <code>P100</code> as a
      Sales Organization can coexist, because they are different
      organizational units.
     </div>
     <h3>Batch-Wise Practice Codes (For Reference Only)</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Batch</th>
        <th>Timing</th>
        <th>Starting Letter Used</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>Online batch (this course)</td><td>7:30 AM</td><td>P</td></tr>
       <tr><td>Classroom batch</td><td>9:30 AM</td><td>K</td></tr>
       <tr><td>Classroom batch</td><td>11:30 AM</td><td>G</td></tr>
       <tr><td>Batch</td><td>1:30 PM</td><td>J</td></tr>
       <tr><td>Online batch</td><td>8:00 PM</td><td>L</td></tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 This letter-per-batch scheme is purely for the instructor's own
      convenience in identifying which batch a code belongs to — it has
      no significance in real SAP projects.
     </p>
     <div className="callout blue">
      🌍 <strong>In real time, who decides the codes?</strong> The
      <strong>client</strong> decides the codes — not the consultant.
      And in real-time projects, almost everything that gets configured
      (not just Enterprise Structure) typically starts with the letter
      <strong>Z or Y</strong> — this is the common industry convention
      for custom/client-specific objects.
     </div>
    </div>

    {/* <!-- Section 2: Company Code --> */}
    <div className="card">
     <h2><span className="badge">1</span> Company Code</h2>
     <div className="callout">
      💡 <strong>Company Code</strong> is the organizational unit which
      is responsible for <strong>all external financial transactions</strong>
      that happen in the company. The external financial transactions
      are the <strong>Balance Sheet</strong> and the
      <strong>Profit &amp; Loss Statement</strong> — every company must
      prepare these on the name of its company code.
     </div>
     <div className="callout purple">
      ⚖️ <strong>Legal angle:</strong> Company Code is also a
      <strong>legal entity registered under the Companies Act</strong>
      (in India, the current one is the <strong>Companies Act,
       2013</strong>, which replaced the earlier Companies Act, 1956).
      Whatever name a business registers the company under is exactly
      the name that gets defined as the Company Code in SAP.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>FI</td></tr>
       <tr><td>Code Length</td><td>4 digits</td></tr>
       <tr><td>Count in Our Project</td><td>1</td></tr>
       <tr><td>Code</td><td>P100</td></tr>
       <tr><td>Name</td><td>Alchem Laboratories Limited</td></tr>
       <tr><td>Address (example)</td><td>Balki House, Lower Parel West, Mumbai</td></tr>
      </tbody>
     </table>
     <h3>When Does a Client Need Multiple Company Codes?</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Explanation</th>
        <th>Example</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Group of Companies</td>
        <td>Each company under the group is a legally separate entity, so each gets its own Company Code</td>
        <td>Tata Group → Tata Motors, Tata Steel, TCS — each is a separate Company Code</td>
       </tr>
       <tr>
        <td>Multinational Companies (MNCs)</td>
        <td>Operations (mainly manufacturing, not just sales) in another country require registering under that country's own Companies Act</td>
        <td>Alchem India (Company Code 1) and Alchem Germany (Company Code 2) if Alchem starts manufacturing in Germany; Sony and Kia both had to register locally to manufacture/operate in India</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      💡 <strong>Client Note:</strong> Above Company Code sits the
      <strong>Client</strong> — the true highest organizational unit in
      FI (not Company Code). A corporate group like Tata Group is
      represented as one client, with each subsidiary (Tata Motors, Tata
      Steel, TCS) as a separate Company Code underneath it. In this
      course's project, Alchem has only one Company Code, so client and
      company code effectively line up as one.
     </div>
    </div>

    {/* <!-- Section 3: Sales Organization --> */}
    <div className="card teal">
     <h2><span className="badge">2</span> Sales Organization</h2>
     <div className="callout teal">
      💡 <strong>Sales Organization</strong> is the organizational unit
      responsible for <strong>all sales and services</strong> that
      happen in the company. It is also the organizational unit where
      <strong>strategic decisions related to sales are taken</strong>,
      and where the <strong>higher management of sales</strong> is
      located (e.g. Director – Sales, Vice President – Sales).
     </div>
     <h3>Worked Example — Why Head Office = Sales Organization</h3>
     <p>
      Alchem has its <strong>head office in Mumbai</strong>, where the
      higher management of sales (VP Sales, Director Sales) sits, and a
      <strong>branch office in Hyderabad</strong> with a branch manager
      and sales managers. If the Hyderabad branch team wants to
      announce a discount in the Telangana market, can they decide this
      on their own? <strong>No</strong> — they must go through head
      office, where the strategic sales decisions are actually made.
      This head office — the place responsible for strategic sales
      decisions — is exactly what SAP defines as the
      <strong>Sales Organization</strong>.
     </p>
     <div className="callout">
      📌 <strong>Clarification:</strong> the branch office itself is
      <em>not</em> a separate Sales Organization — in SAP terms, a
      branch office corresponds to a <strong>Sales Office</strong>
      (covered later in this lecture). For most companies, the head
      office doubles as both the Company Code and the Sales
      Organization.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>SD</td></tr>
       <tr><td>Code Length</td><td>4 digits</td></tr>
       <tr><td>Count in Our Project</td><td>2</td></tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Name</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>P100</td><td>Alchem Domestic Sales Organization</td></tr>
       <tr><td>P200</td><td>Alchem Export Sales Organization</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 4: Distribution Channel --> */}
    <div className="card purple">
     <h2><span className="badge">3</span> Distribution Channel</h2>
     <div className="callout purple">
      💡 <strong>Distribution Channel</strong> = the way (or route) of
      selling / distributing goods to the end customer.
     </div>
     <h3>The Full Sales Chain (Worked Example)</h3>
     <div className="flow">
      <div className="flow-step flow-teal">Alchem (Company)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">Dealers / Distributors</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">Medical Stores</div>
      <div className="arrow">➜</div>
      <div className="flow-step">End Customer</div>
     </div>
     <p>
      Dealers and distributors purchase goods from the company and sell
      them onward to medical stores; medical stores sell to the actual
      end customer/consumer.
     </p>
     <h3>Dealer vs. Distributor — Internal Differentiation Only</h3>
     <div className="callout blue">
      🔍 Dealers and distributors perform the <strong>exact same
       activity</strong> — purchasing goods from the company and
      reselling to medical stores. The only difference is
      <strong>coverage area</strong>: a customer with a normal/limited
      coverage area (e.g. just Ameerpet, Sarnagar, Ragada) is internally
      called a <strong>dealer</strong>; a customer with a
      <strong>larger</strong> coverage area (e.g. the entire old city)
      is internally called a <strong>distributor</strong>.
     </div>
     <h3>What About Institutions and Direct?</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Channel</th>
        <th>Meaning</th>
        <th>Example</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><span className="tag tag-dealer">Dealers</span></td>
        <td>Normal coverage area customers who resell to medical stores</td>
        <td>Local pharmacy-area dealers</td>
       </tr>
       <tr>
        <td><span className="tag tag-distributor">Distributors</span></td>
        <td>Larger coverage area customers, otherwise same activity as dealers</td>
        <td>City-wide coverage distributors</td>
       </tr>
       <tr>
        <td><span className="tag tag-institution">Institutions</span></td>
        <td>Corporate customers — hospitals (private or government)</td>
        <td>Apollo Hospitals, Aster, government hospitals</td>
       </tr>
       <tr>
        <td><span className="tag tag-direct">Direct</span></td>
        <td>Either a one-off bulk sale to someone outside the normal customer base (e.g. for distribution to old-age homes), or a company's own retail outlet selling straight to consumers</td>
        <td>Sony's own outlets sell direct; a one-time bulk buyer for charity distribution</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      🏢 <strong>Real-world note:</strong> most clients have dealers,
      distributors, institutions, and direct. Some clients — e.g.
      Eureka Forbes — sell straight to end customers and only have a
      <strong>Direct</strong> channel.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>SD</td></tr>
       <tr><td>Code Length</td><td>2 digits (fixed by SAP, same across all projects)</td></tr>
       <tr><td>Count in Our Project</td><td>4</td></tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr><th>Code</th><th>Name</th></tr>
      </thead>
      <tbody>
       <tr><td>P1</td><td>Dealers</td></tr>
       <tr><td>P2</td><td>Distributors</td></tr>
       <tr><td>P3</td><td>Institutions</td></tr>
       <tr><td>P4</td><td>Direct</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 5: Division --> */}
    <div className="card gold">
     <h2><span className="badge">4</span> Division</h2>
     <div className="callout">
      💡 <strong>Division</strong> = a range of products, or a product
      line.
     </div>
     <h3>Real-World Examples</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Company</th>
        <th>Example Divisions</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>LG</td><td>TVs, Refrigerators, Washing Machines, Air Conditioners</td></tr>
       <tr><td>Sony</td><td>TVs, Laptops, Mobiles, Music Systems, Cameras</td></tr>
       <tr><td>Maruti</td><td>Sedan, SUV, Hatchback, MPV/MUV, Electric</td></tr>
       <tr><td>Cement industry</td><td>Different grades of cement</td></tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Within a single division you'll typically find a further range
      of specific products — e.g. under LG's "TV" division you'd find
      45-inch LED, 55-inch LED, 55-inch QLED, and so on.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field</th><th>Value</th></tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>SD</td></tr>
       <tr><td>Code Length</td><td>2 digits</td></tr>
       <tr><td>Count in Our Project</td><td>6</td></tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr><th>Code</th><th>Name</th></tr>
      </thead>
      <tbody>
       <tr><td>P1</td><td>Gynecology</td></tr>
       <tr><td>P2</td><td>Pediatric</td></tr>
       <tr><td>P3</td><td>Insulin</td></tr>
       <tr><td>P4</td><td>Antibiotic</td></tr>
       <tr><td>P5</td><td>Cardiology</td></tr>
       <tr><td>P6</td><td>Orthopedic</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 6: Sales Office --> */}
    <div className="card indigo">
     <h2><span className="badge">5</span> Sales Office (Branch Office)</h2>
     <div className="callout indigo">
      💡 <strong>Sales Office</strong> (i.e. a branch office) is a
      <strong>physical location where a group of people work together
       to perform sales</strong>.
     </div>
     <h3>What Happens at a Sales Office, Day to Day</h3>
     <div className="stepper">
      <div className="step">
       The sales team (branch managers, sales managers, medical
       representatives) comes into the office daily for meetings and
       target reviews, and plans which doctors and customers to visit
       that day.
      </div>
      <div className="step">
       Medical representatives, along with managers, visit doctors and
       give presentations about the company's products — this is a
       continuous relationship-building process, since consistent
       contact is what eventually leads doctors to prescribe the
       company's products.
      </div>
      <div className="step">
       After doctor visits, medical representatives go to dealers to
       check stock levels; if stock is low, they take orders and submit
       them back to the office.
      </div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field</th><th>Value</th></tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>SD</td></tr>
       <tr><td>Code Length</td><td>4 digits</td></tr>
       <tr><td>Actual Count (Real Project)</td><td>25 sales offices</td></tr>
       <tr><td>Count Defined for Practice</td><td>1 (sufficient for practice; all 25 would be defined in a real project)</td></tr>
       <tr><td>Code</td><td>P100</td></tr>
       <tr><td>Name</td><td>Telangana Sales Office</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 7: Consolidated reference --> */}
    <div className="card">
     <h2><span className="badge">📋</span> Consolidated Reference — Units Covered So Far</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Unit</th>
        <th>One-Line Definition</th>
        <th>Responsible</th>
        <th>Length</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Company Code</td>
        <td>Responsible for external financial transactions (Balance Sheet, P&amp;L); legal entity registered under the Companies Act</td>
        <td><span className="tag tag-blue">FI</span></td>
        <td>4 digits</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Sales Organization</td>
        <td>Responsible for all sales and services; where strategic sales decisions and higher sales management sit</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>4 digits</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Distribution Channel</td>
        <td>The way/route of selling goods to the end customer</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>2 digits</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Division</td>
        <td>A range of products / product line</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>2 digits</td>
       </tr>
       <tr>
        <td>5</td>
        <td>Sales Office</td>
        <td>A physical location where a group of people work together to perform sales</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>4 digits</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      📅 <strong>Remaining units</strong> — Sales Group, Plant, Storage
      Location, Shipping Point — continue in theory tomorrow. Hands-on
      configuration of all nine units in the actual SAP system begins
      the day after.
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
        <td>What is Company Code?</td>
        <td>The organizational unit responsible for all external financial transactions (Balance Sheet, Profit &amp; Loss Statement) of the company; it is also the legal entity registered under the Companies Act</td>
       </tr>
       <tr>
        <td>Who defines Company Code in SAP, and what is its code length?</td>
        <td>FI consultant; 4 digits</td>
       </tr>
       <tr>
        <td>In what two scenarios would a client need multiple Company Codes?</td>
        <td>Group of companies (each subsidiary is a separate legal entity, e.g. Tata Motors, Tata Steel, TCS under Tata Group), and multinational companies with operations (mainly manufacturing) registered in multiple countries</td>
       </tr>
       <tr>
        <td>Is Company Code the highest organizational unit in FI?</td>
        <td>No — Client sits above Company Code; a corporate group is one client, with each subsidiary as a separate Company Code beneath it</td>
       </tr>
       <tr>
        <td>What is Sales Organization?</td>
        <td>The organizational unit responsible for all sales and services in the company; where strategic sales decisions are taken and where higher sales management is located</td>
       </tr>
       <tr>
        <td>Is a branch office the same as a Sales Organization?</td>
        <td>No — a branch office maps to a Sales Office in SAP; the head office (where strategic decisions and top sales management sit) is the Sales Organization</td>
       </tr>
       <tr>
        <td>What is Distribution Channel?</td>
        <td>The way/route of selling or distributing goods to the end customer</td>
       </tr>
       <tr>
        <td>What is the actual difference between a dealer and a distributor?</td>
        <td>Purely coverage area — dealers cover a smaller area, distributors cover a larger one; their activity (buying from the company, reselling to medical stores) is otherwise identical</td>
       </tr>
       <tr>
        <td>What does "Institution" mean as a distribution channel?</td>
        <td>Corporate customers — private and government hospitals</td>
       </tr>
       <tr>
        <td>What does "Direct" mean as a distribution channel?</td>
        <td>Either a one-off bulk sale outside the normal customer base, or a company's own retail outlet selling straight to consumers</td>
       </tr>
       <tr>
        <td>What is Division?</td>
        <td>A range of products, or a product line (e.g. TVs, refrigerators, washing machines for LG)</td>
       </tr>
       <tr>
        <td>What is a Sales Office?</td>
        <td>A physical location where a group of people work together to perform sales — essentially the branch office</td>
       </tr>
       <tr>
        <td>Can the same code value be reused across different organizational units?</td>
        <td>Yes — e.g. P100 can exist as both a Company Code and a Sales Organization, since uniqueness only applies within the same organizational unit</td>
       </tr>
       <tr>
        <td>Who decides the actual codes in a real project — the consultant or the client?</td>
        <td>The client decides the codes; in real projects, most configured objects (not just Enterprise Structure) conventionally start with Z or Y</td>
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
        <td>—</td>
        <td>
         No transaction codes were introduced in this session — it was
         a pure theory deep-dive into the definitions of Company Code,
         Sales Organization, Distribution Channel, Division, and
         Sales Office. Hands-on configuration T-codes for all
         Enterprise Structure units begin the day after tomorrow.
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
        <td>Code uniqueness rule</td>
        <td>Unique within the same organizational unit; can be reused across different organizational units</td>
       </tr>
       <tr>
        <td>Real-time code convention</td>
        <td>Codes decided by the client; most configured objects conventionally start with Z or Y</td>
       </tr>
       <tr>
        <td>Company Code (Alchem)</td>
        <td>P100, Alchem Laboratories Limited, Balki House, Lower Parel West, Mumbai</td>
       </tr>
       <tr>
        <td>Company Code — governing law (India)</td>
        <td>Companies Act, 2013 (replaced the earlier Companies Act, 1956)</td>
       </tr>
       <tr>
        <td>Sales Organizations (Alchem)</td>
        <td>P100 = Alchem Domestic Sales Organization; P200 = Alchem Export Sales Organization</td>
       </tr>
       <tr>
        <td>Distribution Channels (Alchem)</td>
        <td>P1 = Dealers, P2 = Distributors, P3 = Institutions, P4 = Direct</td>
       </tr>
       <tr>
        <td>Divisions (Alchem)</td>
        <td>P1 Gynecology, P2 Pediatric, P3 Insulin, P4 Antibiotic, P5 Cardiology, P6 Orthopedic</td>
       </tr>
       <tr>
        <td>Sales Office (Alchem)</td>
        <td>P100, Telangana Sales Office (1 of 25 real offices defined for practice)</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture moved from simply listing Enterprise Structure's nine
      organizational units to actually defining the first five in
      depth. <strong>Company Code</strong> is the legal entity
      responsible for external financial transactions (Balance Sheet,
      P&amp;L), registered under the Companies Act — with multiple
      company codes needed for groups of companies or MNCs operating in
      several countries. <strong>Sales Organization</strong> is where
      strategic sales decisions and higher sales management live —
      typically the head office, not a branch. <strong>Distribution
       Channel</strong> is the route goods take to the end customer,
      illustrated through Alchem's full chain (company → dealers/
      distributors → medical stores → end customer), with dealers and
      distributors differing only by coverage area, institutions
      meaning corporate/hospital customers, and direct covering
      one-off bulk sales or a company's own retail outlets.
      <strong>Division</strong> is a product line or range of products,
      shown through LG, Sony, and Maruti examples. <strong>Sales
       Office</strong> is the physical branch location where day-to-day
      sales activity (doctor visits, dealer stock checks, order-taking)
      actually happens. Alongside the definitions, the lecture covered
      coding conventions: max 4-digit codes, uniqueness only within the
      same organizational unit, and the real-world practice of clients
      deciding codes (commonly starting with Z or Y).
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>Company Code</strong> = external financial transactions
       + legal registration under the Companies Act; multiple company
       codes arise from group structures or multinational operations
      </li>
      <li>
       <strong>Sales Organization</strong> = where strategic sales
       decisions and top sales management sit — usually head office,
       never a branch office
      </li>
      <li>
       <strong>Distribution Channel</strong> = the route to the end
       customer; dealer vs. distributor is purely a coverage-area
       distinction, not a different activity
      </li>
      <li>
       <strong>Division</strong> = product line/range; <strong>Sales
        Office</strong> = the physical branch where daily sales
       activity happens
      </li>
      <li>
       A code is unique <strong>within</strong> its own organizational
       unit only — the same code can be reused across different units
      </li>
      <li>
       In real projects, <strong>the client decides all codes</strong>,
       typically starting with Z or Y
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Theory continues with the
      remaining organizational units — Sales Group, Plant, Storage
      Location, and Shipping Point. Hands-on system configuration of
      all nine units begins the class after that.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 5 Notes — Enterprise Structure Theory: Company Code Through
    Sales Office 🎓
   </p>
  </div>
 );
};

export default Enterprise5;
