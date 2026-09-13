const Enterprise1 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-teal">
    <h1>🖥️ Lecture 1 — SAP Landscape &amp; Implementation (ASAP Methodology)</h1>
    <p>
     SAP SD | Servers, roles &amp; Transport Requests &middot; Client vs
     Implementation Partner &middot; ASAP Methodology &middot; Project
     Preparation Phase (License &amp; Landscape)
    </p>
   </div>
   <div className="container">

    {/* <!-- Section 1: SAP Landscape overview --> */}
    <div className="card">
     <h2><span className="badge">1</span> What is SAP Landscape?</h2>
     <div className="callout blue">
      💡 <strong>Landscape</strong> = the arrangement of servers a client
      sets up to run SAP. Any client implementing SAP must purchase
      servers — SAP recommends a <strong>minimum of three</strong>.
     </div>
     <p>
      Server hardware/infrastructure is supplied by companies such as
      <code>IBM</code>, <code>HP</code>, <code>HCL</code>, and
      <code>Dell</code>. The client takes quotations from these vendors
      and finalizes one to supply the servers — this is a payment
      <strong>separate</strong> from what's paid to the implementation
      partner or to SAP for licenses.
     </p>
     <h3>On-Premise vs. Cloud</h3>
     <div className="compare-grid">
      <div className="compare-col cc-calc">
       <h4>On-Premise</h4>
       <ul>
        <li>Client purchases the physical servers</li>
        <li>Client also maintains the servers</li>
        <li>Supplied by vendors like <code>IBM</code>, <code>HP</code>, <code>HCL</code>, <code>Dell</code></li>
       </ul>
      </div>
      <div className="compare-col cc-base">
       <h4>Cloud</h4>
       <ul>
        <li>Client uses a cloud vendor, e.g. <code>Amazon Web Services (AWS)</code></li>
        <li>Servers are hosted and maintained by the vendor, not the client</li>
        <li>No separate hardware purchase needed</li>
       </ul>
      </div>
     </div>
     <h3>Additional (Optional) Servers</h3>
     <p>The minimum requirement is the three servers covered below, but some clients opt for extra servers depending on their needs:</p>
     <table className="table-reponsive">
      <thead>
       <tr><th>Extra Server</th><th>Purpose</th></tr>
      </thead>
      <tbody>
       <tr>
        <td><span className="tag tag-slate">Sandbox</span></td>
        <td>Rough use / R&amp;D — consultants can freely experiment here without any risk to real configurations</td>
       </tr>
       <tr>
        <td><span className="tag tag-slate">Pre-Production</span></td>
        <td>A staging server that mirrors the production server — used in support scenarios, since consultants don't have direct access to Production; errors are analyzed here instead</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Pre-Production is not the same as the ordinary Quality/testing
      server — Quality doesn't hold live data, whereas Pre-Production
      mirrors Production's actual configuration and data, which is
      essential for accurately reproducing and analyzing live errors.
     </p>
    </div>

    {/* <!-- Section 2: Development Server --> */}
    <div className="card teal">
     <h2><span className="badge">2</span> Development Server</h2>
     <p>
      The <strong>Development server</strong> is used to
      <strong>configure the client's business process into SAP</strong>
      — this is where consultants do their actual configuration work.
     </p>
     <ul>
      <li><strong>Used by:</strong> Consultants</li>
      <li><strong>Purpose:</strong> Configuration</li>
     </ul>
     <div className="callout">
      🔁 <strong>Transport Requests (TR):</strong> whenever a consultant
      saves a configuration in the Development server, the system saves
      it under a particular <strong>Transport Request</strong> number.
      The TR is what's used to move (transport) the configuration from
      one server to another — for example, from Development to Quality,
      and later from Quality to Production.
     </div>
     <div className="callout red">
      ⚠️ <strong>Correction:</strong> the transcript refers to this
      mechanism at one point as "PR" — the correct SAP term is
      <strong>Transport Request (TR)</strong>, not "PR."
     </div>
    </div>

    {/* <!-- Section 3: Quality Server --> */}
    <div className="card gold">
     <h2><span className="badge">3</span> Quality Server</h2>
     <p>
      After configurations are done in Development, they're moved to the
      <strong>Quality server</strong> using the Transport Request. The
      Quality server is used to <strong>test the scenarios</strong> — to
      check whether what was configured in Development is actually
      correct.
     </p>
     <ul>
      <li><strong>Used by:</strong> Consultants <strong>and</strong> Core Users</li>
      <li><strong>Purpose:</strong> Testing</li>
     </ul>
     <div className="callout gold">
      🧑‍💼 <strong>Who is a Core User?</strong> An employee of the client
      with good experience and exposure in the client's business process
      — for example, a senior manager. Every module/department appoints
      core users, and their responsibility is to test the configured
      process in the Quality server, confirming it matches real business
      needs.
     </div>
    </div>

    {/* <!-- Section 4: Production Server --> */}
    <div className="card red">
     <h2><span className="badge">4</span> Production Server</h2>
     <p>
      The <strong>Production server</strong> is the <strong>live
       server</strong> — where users enter day-to-day live transactions in
      SAP. For example, in Sales (<code>SD</code>), the live day-to-day
      transactions are: Inquiry ➜ Quotation ➜ Sales Order ➜ Delivery ➜
      Invoice/Billing.
     </p>
     <ul>
      <li><strong>Used by:</strong> Core Users <strong>and</strong> End Users</li>
      <li><strong>Purpose:</strong> Live, day-to-day business transactions</li>
     </ul>
     <div className="callout red">
      🧑‍💻 <strong>Who is an End User?</strong> Also an employee of the
      client — the person who actually performs the day-to-day
      transactions in SAP (as opposed to the Core User, who is the more
      experienced person overseeing/testing the process).
     </div>
     <h3>The Three Servers at a Glance</h3>
     <table className="table-reponsive">
      <thead>
       <tr><th>Server</th><th>Used By</th><th>Purpose</th></tr>
      </thead>
      <tbody>
       <tr>
        <td><span className="tag tag-blue">Development</span></td>
        <td>Consultants</td>
        <td>Configuration</td>
       </tr>
       <tr>
        <td><span className="tag tag-gold">Quality</span></td>
        <td>Consultants + <span className="tag tag-teal">Core Users</span></td>
        <td>Testing</td>
       </tr>
       <tr>
        <td><span className="tag tag-red">Production</span></td>
        <td><span className="tag tag-teal">Core Users</span> + <span className="tag tag-purple">End Users</span></td>
        <td>Live transactions</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 5: Client & Implementation Partner recap --> */}
    <div className="card purple">
     <h2><span className="badge">5</span> Client &amp; Implementation Partner (Recap)</h2>
     <p>
      <strong>Client</strong> = the company which will use / wants to
      implement SAP. In our running example, that's <strong>Alchem
       Laboratories Limited</strong> — a pharma company, assumed to
      currently be on <code>JD Edwards</code> (a non-SAP / legacy
      system), now wanting to move to SAP.
     </p>
     <p>
      <strong>Implementation Partner</strong> = the software company that
      will actually implement SAP for the client. In our example, that's
      <strong>TCS</strong>. Other examples named in class:
      <code>Wipro</code>, <code>IBM</code>, <code>Accenture</code>,
      <code>Dell</code>, <code>Infosys</code>, <code>Capgemini</code> —
      any of these would have their own SAP consultants who implement
      SAP for clients.
     </p>
     <p>
      As consultants, <strong>we are employees of the implementation
       partner</strong> (TCS here) — not the client. Through TCS, we go to
      the client's place (Alchem) to implement SAP.
     </p>
     <div className="flow">
      <span className="flow-step">Client: Alchem Labs</span>
      <span className="arrow">➜</span>
      <span className="flow-step">Finalizes Partner: TCS</span>
      <span className="arrow">➜</span>
      <span className="flow-step">TCS sends consultant team</span>
      <span className="arrow">➜</span>
      <span className="flow-step">Study process + configure into SAP</span>
     </div>
    </div>

    {/* <!-- Section 6: Implementation Project & ASAP Methodology --> */}
    <div className="card orange">
     <h2><span className="badge">6</span> Implementation Project &amp; ASAP Methodology</h2>
     <p>
      <strong>Implementation project</strong> = configuring the client's
      business process <strong>newly</strong> into SAP, for a client who
      might currently be using a <strong>legacy system</strong> (legacy =
      non-SAP system).
     </p>
     <div className="callout">
      🚀 <strong>ASAP</strong> = <strong>Accelerated SAP</strong>. Any
      client implementing SAP on <code>ECC</code> follows the ASAP
      methodology — a step-by-step set of guidelines for implementing
      SAP. <code>S/4HANA</code> projects instead follow the
      <strong>SAP Activate</strong> methodology.
     </div>
     <p>ASAP methodology is classified into <strong>five phases</strong>:</p>
     <div className="flow">
      <span className="flow-step done">1️⃣ Project Preparation ✅ (today)</span>
      <span className="arrow">➜</span>
      <span className="flow-step">2️⃣ Business Blueprint</span>
      <span className="arrow">➜</span>
      <span className="flow-step">3️⃣ Realization</span>
      <span className="arrow">➜</span>
      <span className="flow-step">4️⃣ Final Preparation</span>
      <span className="arrow">➜</span>
      <span className="flow-step">5️⃣ Go-Live &amp; Support</span>
     </div>
     <div className="callout red">
      ⚠️ <strong>Important:</strong> Consultants are <strong>not
       involved</strong> in Phase 1 (Project Preparation). Consultant
      involvement begins from Phase 2 (Business Blueprint) onward.
     </div>
    </div>

    {/* <!-- Section 7: Phase 1 - Project Preparation --> */}
    <div className="card green">
     <h2><span className="badge">7</span> Phase 1: Project Preparation</h2>
     <p>
      This is the very first phase of ASAP methodology — and as noted
      above, <strong>consultants have no role here</strong>. Only
      <strong>management</strong> from both sides is involved:
     </p>
     <table className="table-reponsive">
      <thead>
       <tr><th>Side</th><th>Who's Involved</th></tr>
      </thead>
      <tbody>
       <tr>
        <td>Implementation Partner (e.g., TCS)</td>
        <td>BDMs (Business Development Managers), Delivery Head, Project Manager, Technical Head</td>
       </tr>
       <tr>
        <td>Client (e.g., Alchem)</td>
        <td>Vice President — IT, Vice President — Finance, Project Manager, Technical Experts</td>
       </tr>
      </tbody>
     </table>
     <p>There are two main activities carried out in this phase: <strong>License</strong> and <strong>Landscape</strong>.</p>

     <h3>Activity 1: License</h3>
     <p>
      Any client implementing SAP must purchase a license <strong>from
       SAP</strong>. The number of licenses is decided based on the
      number of <strong>users</strong>. Two types of users were
      discussed:
     </p>
     <ul>
      <li><strong>Core User</strong> — experienced employee (e.g., senior manager)</li>
      <li><strong>End User</strong> — employee who performs day-to-day transactions</li>
     </ul>
     <p>
      Continuing the running example: Alchem has 1,500 users, so they
      purchase 1,500 licenses. Each license costs approximately
      <strong>₹80,000</strong>, so total license cost = 1,500 &times;
      ₹80,000 = <strong>₹12 crores</strong>. This ₹12 crore payment goes
      <strong>to SAP</strong> (not to the implementation partner), to
      obtain the licenses.
     </p>
     <div className="formula-box">
      1,500 users &times; ₹80,000 = ₹12 crores<br />
      ₹12 crores &times; 22% AMC = ≈ ₹2.64 crores / year
     </div>
     <div className="callout">
      🔁 <strong>AMC (Annual Maintenance Cost):</strong> the license
      purchase is <strong>not</strong> a one-time income for SAP. Every
      year, the client also pays <strong>22% of the total license
       cost</strong> to SAP as AMC — in our example, ≈₹2.64 crores/year
      (rounded to ₹2.6 crores in class). As long as AMC is paid, the
      license doesn't expire and SAP support continues; stop paying, and
      support stops.
     </div>
     <div className="callout red">
      🛠️ <strong>Developer IDs:</strong> ABAP consultants (who do coding)
      need a separate license type called a <strong>Developer ID</strong>
      — only Developer IDs have access to perform coding. Beyond the
      1,500 user licenses, the client typically purchases some extra
      licenses (e.g., ~100 more) to cover TCS's consultants and ABAPers
      working in Development and Quality.
     </div>
     <div className="callout red">
      ⚠️ <strong>Correction:</strong> the transcript renders "AMC" as
      "AMS" and "EMC" in a couple of places — the correct term throughout
      is <strong>AMC (Annual Maintenance Cost)</strong>.
     </div>

     <h3>Activity 2: Landscape</h3>
     <p>
      The second activity is deciding the <strong>landscape</strong> —
      i.e., the servers. The <strong>technical head from the
       implementation partner</strong> and the <strong>technical expert
        from the client</strong> jointly decide the <strong>sizing</strong>
      of the servers — RAM, hard disk, processor, etc. — based on the
      client's expected volume of business.
     </p>

     <h3>Payment Breakdown (Worked Example)</h3>
     <p>
      Three separate payments are involved — and they are
      <strong>not</strong> paid all at once; the implementation partner
      is typically paid in <strong>phase-wise / milestone-based
       billing</strong> as work progresses, rather than a lump sum
      upfront.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr><th>#</th><th>Payment To</th><th>For</th><th>Approx. Amount</th></tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Implementation Partner (TCS)</td>
        <td>Implementing SAP (studying &amp; configuring the client's process) — paid phase-wise/milestone-based, not upfront</td>
        <td className="price-final">₹50 crores</td>
       </tr>
       <tr>
        <td>2</td>
        <td>SAP</td>
        <td>User licenses (1,500 &times; ₹80,000)</td>
        <td className="price-final">₹12 crores</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Server vendor (e.g., IBM)</td>
        <td>Servers (Development, Quality, Production)</td>
        <td className="price-final">≈ ₹5 crores</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 These three payments are all separate and independent:
      implementation cost to the partner, license cost to SAP, and
      server cost to the hardware vendor. On top of the ₹12 crore
      license payment, the client additionally pays ≈₹2.64 crores every
      year to SAP as AMC. Figures here are illustrative class examples,
      not fixed/standard pricing.
     </p>
    </div>

    {/* <!-- Extra: Key Terms Glossary --> */}
    <div className="card teal">
     <h2><span className="badge">🔑</span> Key Terms Glossary</h2>
     <table className="table-reponsive">
      <thead>
       <tr><th>Term</th><th>Meaning</th></tr>
      </thead>
      <tbody>
       <tr><td>Landscape</td><td>Arrangement of servers</td></tr>
       <tr><td>Sandbox server</td><td>Extra server for rough use / R&amp;D by consultants</td></tr>
       <tr><td>Pre-Production server</td><td>Mirror image of the production server, used to analyze support errors safely</td></tr>
       <tr><td>Transport Request (TR)</td><td>Reference number used to move saved configurations between servers</td></tr>
       <tr><td>Core User</td><td>Experienced client employee (e.g., senior manager) who tests configurations</td></tr>
       <tr><td>End User</td><td>Client employee who performs daily live transactions in SAP</td></tr>
       <tr><td>Developer ID</td><td>Special license granting ABAP consultants access to coding</td></tr>
       <tr><td>ASAP</td><td>Accelerated SAP — implementation methodology used for ECC projects</td></tr>
       <tr><td>SAP Activate</td><td>Implementation methodology used for S/4HANA projects</td></tr>
       <tr><td>AMC</td><td>Annual Maintenance Cost — ~22% of license cost, paid yearly to SAP</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Interview Questions --> */}
    <div className="card purple">
     <h2><span className="badge">❓</span> Important Interview Questions &amp; Answers</h2>
     <table className="table-reponsive">
      <thead>
       <tr><th>Question</th><th>Answer</th></tr>
      </thead>
      <tbody>
       <tr><td>What is SAP Landscape?</td><td>The arrangement of servers a client sets up to run SAP</td></tr>
       <tr><td>What is the minimum number of servers SAP recommends?</td><td>Three — Development, Quality, and Production</td></tr>
       <tr><td>Who supplies the servers?</td><td>Companies like IBM, HP, HCL, Dell</td></tr>
       <tr><td>What is the purpose of the Development server?</td><td>Used by consultants to configure the client's business process into SAP</td></tr>
       <tr><td>What is the purpose of the Quality server?</td><td>Used by consultants and core users to test the configured scenarios</td></tr>
       <tr><td>What is the purpose of the Production server?</td><td>The live server where core users and end users perform day-to-day live transactions</td></tr>
       <tr><td>What is a Transport Request (TR)?</td><td>A reference number used to move configurations from one server to another (e.g., Development to Quality)</td></tr>
       <tr><td>Who is a Core User?</td><td>An employee of the client with good experience/exposure in the client's business process (e.g., senior manager)</td></tr>
       <tr><td>Who is an End User?</td><td>An employee of the client who performs day-to-day transactions in SAP</td></tr>
       <tr><td>What are the two optional additional servers?</td><td>Sandbox (R&amp;D/rough use) and Pre-Production (mirror of production, used for error analysis in support)</td></tr>
       <tr><td>What does ASAP stand for?</td><td>Accelerated SAP</td></tr>
       <tr><td>What are the five phases of ASAP methodology?</td><td>Project Preparation, Business Blueprint, Realization, Final Preparation, Go-Live &amp; Support</td></tr>
       <tr><td>Which methodology is used for S/4HANA projects?</td><td>SAP Activate (ASAP is used for ECC projects)</td></tr>
       <tr><td>Are consultants involved in Project Preparation?</td><td>No — only management from the implementation partner and the client are involved</td></tr>
       <tr><td>What are the two main activities in Project Preparation?</td><td>License and Landscape</td></tr>
       <tr><td>What is a Developer ID?</td><td>A special license type required for ABAP consultants to access coding</td></tr>
       <tr><td>How is server sizing decided?</td><td>By the technical head (partner) and technical expert (client), based on expected business volume</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: T-codes --> */}
    <div className="card teal">
     <h2><span className="badge">🔢</span> Important Transaction Codes &amp; Purpose</h2>
     <div className="callout blue">
      ℹ️ This session covered landscape, servers, users, and the ASAP
      methodology's Project Preparation phase — all conceptual/pre-
      configuration topics. No SD transaction codes were introduced yet.
      This section will be populated once hands-on SD transactions begin.
     </div>
    </div>

    {/* <!-- Extra: Config Topics --> */}
    <div className="card gold">
     <h2><span className="badge">⚙️</span> Important Configuration Topics &amp; Values</h2>
     <div className="callout gold">
      ℹ️ No IMG/SPRO configuration was covered in this session. Key
      reference figures from today's discussion are captured below.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>Topic</th><th>Value / Detail</th></tr>
      </thead>
      <tbody>
       <tr><td>Minimum recommended servers</td><td>3 (Development, Quality, Production)</td></tr>
       <tr><td>Optional additional servers</td><td>Sandbox, Pre-Production</td></tr>
       <tr><td>Common server vendors (on-premise)</td><td><code>IBM</code>, <code>HP</code>, <code>HCL</code>, <code>Dell</code></td></tr>
       <tr><td>Common cloud vendor</td><td><code>AWS</code> (Amazon Web Services)</td></tr>
       <tr><td>ASAP methodology phases</td><td>Project Preparation ➜ Business Blueprint ➜ Realization ➜ Final Preparation ➜ Go-Live &amp; Support</td></tr>
       <tr><td>Methodology for ECC vs. S/4HANA</td><td>ASAP (ECC) vs. SAP Activate (S/4HANA)</td></tr>
       <tr><td>License cost per user (example)</td><td>₹80,000</td></tr>
       <tr><td>AMC rate</td><td>~22% of license cost, annually</td></tr>
       <tr><td>ECC license end date (per instructor)</td><td>End of 2027</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      SAP <strong>landscape</strong> refers to the arrangement of
      servers a client purchases to implement SAP — minimum three
      (Development, Quality, Production), with optional Sandbox and
      Pre-Production servers for extra R&amp;D and support needs. Each
      server has a distinct purpose and user group: Development is for
      consultants configuring the system, Quality is for consultants and
      core users testing it, and Production is the live server used by
      core users and end users for daily transactions. Configuration
      moves between servers via a <strong>Transport Request (TR)</strong>.
     </p>
     <p>
      Every implementation follows the <strong>ASAP methodology</strong>
      (Accelerated SAP, used for <code>ECC</code> projects —
      <code>S/4HANA</code> instead uses <strong>SAP Activate</strong>),
      broken into five phases starting with <strong>Project
       Preparation</strong>, where only management (not consultants)
      decides on <strong>License</strong> purchases (based on number of
      users, plus AMC, plus separate Developer IDs for ABAP consultants)
      and <strong>Landscape</strong> (server sizing) — with three
      separate payment streams: to the implementation partner, to SAP
      for licenses, and to the hardware vendor for servers.
     </p>
    </div>

    {/* <!-- Extra: Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Next Class</h2>
     <div className="callout green">
      📅 <strong>Tomorrow:</strong> Continuation of Project Preparation
      phase (remaining activities), moving toward Phase 2 —
      <strong>Business Blueprint</strong>.
     </div>
    </div>

   </div>
   <p className="footer-note">
    Lecture 1 Notes — SAP Landscape &amp; Implementation (ASAP Methodology) 🎓
   </p>
  </div>
 );
};

export default Enterprise1;
