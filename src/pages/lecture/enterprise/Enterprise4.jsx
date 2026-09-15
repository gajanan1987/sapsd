const Enterprise4 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-gold">
    <h1>🎫 Lecture 4 — Support Ticket Lifecycle, KT Process &amp; Enterprise Structure Introduction</h1>
    <p>
     SAP SD | The full support-ticket cycle end to end, ticket status stages,
     the KT (Knowledge Transfer) handover process, and the first concept of
     the course proper — Enterprise Structure
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Quick Recap — Support &amp; SLA</h2>
     <div className="flow">
      <div className="flow-step done">Support = Solving Tickets ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">SLA ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">KT Process 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">Ticket Cycle 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-teal">Enterprise Structure 🆕</div>
     </div>
     <div className="callout blue">
      💡 <strong>Recap:</strong> Support = solving the tickets raised by a
      client who has already implemented SAP. Both parties (support
      partner and client) sign an <strong>SLA (Service Level
       Agreement)</strong>. As a consultant, the two things you should know
      from the SLA are: <strong>priority of tickets</strong> and
      <strong>change request</strong> handling.
     </div>
    </div>

    {/* <!-- Section 1: KT Process --> */}
    <div className="card orange">
     <h2><span className="badge">1</span> KT (Knowledge Transfer) Process</h2>
     <p>
      Continuing the running example: <strong>TCS</strong> = implementation
      partner, <strong>Alchem Laboratories Limited</strong> = client (with
      <strong>core users</strong> on the client side), <strong>Infosys</strong> =
      the new support partner in this example.
     </p>
     <div className="callout">
      🕒 <strong>Duration:</strong> the KT process takes
      <strong>3 weeks</strong>.
     </div>
     <div className="stepper">
      <div className="step">
       After the Kickoff Meeting, all support partner (Infosys)
       consultants travel to the <strong>core users' place</strong> for
       KT.
      </div>
      <div className="step">
       <strong>Core users hand over the Configuration document</strong>
       to the incoming consultants.
      </div>
      <div className="step">
       Consultants go through the Configuration document and
       <strong>simultaneously do a system study</strong> — they are
       given access to the <strong>Development server</strong> to
       cross-check every configuration mentioned in the document
       directly in the system.
      </div>
      <div className="step">
       If any doubts come up during this study, consultants can contact
       the original implementation (TCS) consultants for clarification.
      </div>
      <div className="step">
       After the system study, consultants prepare their own
       <strong>Understanding document</strong> — capturing what they've
       understood about the client's configuration and process.
      </div>
      <div className="step">
       Consultants then give a <strong>reverse KT</strong> back to the
       core users, using the Understanding document to confirm their
       grasp of the process is correct.
      </div>
     </div>
     <div className="callout green">
      🔑 <strong>Only after this full KT process is complete</strong> do
      the support partner's consultants go back and actually start
      supporting the client — tickets cannot be picked up before KT
      finishes.
     </div>
    </div>

    {/* <!-- Section 2: Support ticket cycle overview --> */}
    <div className="card purple">
     <h2><span className="badge">2</span> The Support Ticket Cycle — Who Gets the Error First?</h2>
     <div className="callout purple">
      🎯 In real-time, day-to-day business, the
      <strong>end user</strong> gets the error <strong>first</strong> —
      not the core user, and not the consultant.
     </div>
     <div className="flow">
      <div className="flow-step">End User (error occurs)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-teal">Core User</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">Ticketing Tool</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">Support Consultant</div>
     </div>
     <div className="stepper">
      <div className="step">
       End user encounters the error and <strong>sends it to the core
        user</strong> — end users never contact consultants directly.
      </div>
      <div className="step">
       Core user <strong>analyzes the ticket</strong> first.
      </div>
      <div className="step">
       If it's a <strong>user mistake</strong> (a manual/operational
       error), the core user solves it directly — it never becomes a
       formal ticket for the consultant.
      </div>
      <div className="step">
       If it's a <strong>configuration issue</strong>, the core user
       <strong>places the ticket in the ticketing tool</strong>, which
       routes it to the support partner's consultants.
      </div>
     </div>
    </div>

    {/* <!-- Section 3: Ticketing tools --> */}
    <div className="card teal">
     <h2><span className="badge">3</span> Ticketing Tools</h2>
     <div className="callout">
      💡 <strong>Purpose of a ticketing tool:</strong> it helps
      <strong>track tickets</strong>, along with the
      <strong>time</strong> spent on each and their current
      <strong>status</strong>. The client has to purchase a ticketing
      tool separately.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Ticketing Tools Available in the Market</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>ServiceNow</td></tr>
       <tr><td>Jira</td></tr>
       <tr><td>Remedy</td></tr>
       <tr><td>Peregrine</td></tr>
       <tr><td>HPQC (HP Quality Center)</td></tr>
      </tbody>
     </table>
     <p className="note-text">
      Both <strong>core users</strong> and <strong>support
       consultants</strong> have access to the ticketing tool.
     </p>
     <h3>What the System Captures Per Ticket</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Ticket Number &amp; Date</td>
        <td>Auto-generated by the system</td>
       </tr>
       <tr>
        <td>Module</td>
        <td>e.g. SD, MM, FICO, PP</td>
       </tr>
       <tr>
        <td>Priority</td>
        <td>High / Medium / Low</td>
       </tr>
       <tr>
        <td>Ticket Details</td>
        <td>Description of the issue</td>
       </tr>
       <tr>
        <td>Screenshot / Attachments</td>
        <td>Error screenshots from the user</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 4: Consultant side of the cycle --> */}
    <div className="card gold">
     <h2><span className="badge">4</span> What the Support Consultant Does on Receiving a Ticket</h2>
     <div className="stepper">
      <div className="step">
       <strong>Check the module</strong> — confirm the ticket actually
       belongs to your module (e.g. SD) and not another one (MM, FICO,
       etc.).
      </div>
      <div className="step">
       <strong>Check the priority</strong> against what's defined in the
       SLA. Users sometimes mark a ticket High priority by mistake or
       deliberately — not every issue can be treated as High. If the
       priority doesn't match the SLA definition, the consultant asks
       the core user to correct it.
      </div>
      <div className="step">
       <strong>Send acknowledgement</strong> to both the core user and
       the end user — typically within <strong>15 minutes</strong> (this
       exact timeframe varies client to client, as defined in the SLA).
      </div>
      <div className="step">
       <strong>Analyze the ticket</strong> — this is where the real
       investigation begins (detailed below).
      </div>
     </div>
    </div>

    {/* <!-- Section 5: Analysis flow across servers --> */}
    <div className="card red">
     <h2><span className="badge">5</span> How the Ticket Is Analyzed — Server by Server</h2>
     <div className="callout red">
      ⚠️ Support consultants <strong>do not have access to the
       Production server</strong>. Since the end user's error occurred in
      Production, the consultant instead reproduces it on the
      <strong>Pre-Production server</strong> — which mirrors Production's
      configuration and data.
     </div>
     <div className="flow">
      <div className="flow-step">Error in Production (End User)</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-teal">Reproduce in Pre-Production</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-orange">Fix in Development</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">Move to Quality + Pre-Production</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">User Tests → UAT Sign-Off</div>
      <div className="arrow">➜</div>
      <div className="flow-step">Move to Production</div>
     </div>
     <div className="stepper">
      <div className="step">
       Consultant goes to the <strong>Pre-Production server</strong> and
       tries to reproduce exactly what the end user was doing in
       Production. If the end user got an error in Production, the
       consultant should also get the same error in Pre-Production —
       since Pre-Production is a mirror image of Production (same
       configuration and data).
      </div>
      <div className="step">
       After confirming/reproducing the error, the consultant
       <strong>analyzes</strong> it and goes to the
       <strong>Development server</strong> to do the necessary
       configuration changes.
      </div>
      <div className="step">
       The configuration is then moved to the
       <strong>Quality server and Pre-Production server</strong>.
      </div>
      <div className="step">
       Core users and end users are asked to <strong>test it in
        Pre-Production and confirm</strong>. If everything is fine, they
       give <strong>UAT sign-off</strong>.
      </div>
      <div className="step">
       After UAT sign-off, the configuration is finally moved to the
       <strong>Production server</strong>.
      </div>
      <div className="step">
       The user tests it in Production. If it's okay, the
       <strong>core user closes the ticket</strong>.
      </div>
     </div>
     <p className="note-text">
      📌 If the issue is a simple <strong>data-related</strong> problem
      that needs no configuration change at all, core users handle it
      directly — it doesn't even get placed in the ticketing tool.
     </p>
    </div>

    {/* <!-- Section 6: Ticket status --> */}
    <div className="card indigo">
     <h2><span className="badge">6</span> The 5 Status Stages of a Ticket</h2>
     <div className="stepper">
      <div className="step">
       <strong>Open</strong> — the initial status the moment a ticket is
       received.
      </div>
      <div className="step">
       <strong>Work in Process</strong> — set right after sending
       acknowledgement to the core user and end user.
      </div>
      <div className="step">
       <strong>Waiting for Information</strong> — if the information
       provided by the user isn't sufficient to analyze the ticket, the
       consultant sends a mail to the core user requesting more details,
       and the status changes to this. Once the information is received,
       the status reverts to Work in Process.
      </div>
      <div className="step">
       <strong>Waiting for Confirmation</strong> — after the ticket is
       solved, a mail is sent to the core user and end user asking them
       to test and confirm; the status changes to this while awaiting
       their response.
      </div>
      <div className="step">
       <strong>Closed</strong> — set only after the user has tested and
       confirmed the fix in Production.
      </div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Status</th>
        <th>When It's Set</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Open</td>
        <td>The moment the ticket is first received</td>
       </tr>
       <tr>
        <td>Work in Process</td>
        <td>After acknowledgement is sent (also re-entered after receiving requested info)</td>
       </tr>
       <tr>
        <td>Waiting for Information</td>
        <td>User-provided information is insufficient to analyze the ticket</td>
       </tr>
       <tr>
        <td>Waiting for Confirmation</td>
        <td>Fix is done; core user/end user asked to test and confirm</td>
       </tr>
       <tr>
        <td>Closed</td>
        <td>After the user confirms the fix works in Production</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      🔒 <strong>Only the core user can close a ticket.</strong>
      Consultants can change any of the other statuses, but closure is
      reserved for the core user.
     </div>
     <div className="callout blue">
      ⏱️ <strong>Timer rule:</strong> the SLA resolution-time clock only
      runs while the status is <strong>Work in Process</strong>. For any
      other status (Waiting for Information, Waiting for Confirmation,
      etc.), the timer is paused.
     </div>
    </div>

    {/* <!-- Section 7: Enterprise Structure intro --> */}
    <div className="card teal">
     <h2><span className="badge">📘</span> First Core Concept: Enterprise Structure</h2>
     <div className="callout teal">
      💡 <strong>Enterprise Structure</strong> specifies the
      <strong>structure of the organization</strong> (or the structure of
      the company) — e.g. head office, branch offices, manufacturing
      plants, etc.
     </div>
     <p>
      Before configuring anything else, the client's real-world
      organizational structure must first be <strong>mapped into
       SAP</strong>. Continuing the running example, the client is
      <strong>Alchem Laboratories Limited</strong> — its enterprise
      structure is what gets mapped in the sections below.
     </p>
     <div className="callout blue">
      🔤 <strong>Coding convention:</strong> every organizational unit in
      SAP is defined as a <strong>code</strong>, with a
      <strong>maximum length of 4 digits</strong> (shorter for some
      units, as shown below). A code can be fully numeric, fully
      alphanumeric, or fully characters.
     </div>
    </div>

    {/* <!-- Section 8: The 9 organizational units --> */}
    <div className="card gold">
     <h2><span className="badge">🧭</span> The 9 Organizational Units (Overview)</h2>
     <p>
      These are the nine organizational units covered today, in order.
      Full theory + hands-on configuration for each begins next class,
      starting from Company Code.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Organizational Unit</th>
        <th>Responsible Consultant</th>
        <th>Code Length</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>1</td><td>Company Code</td><td><span className="tag tag-blue">FI</span></td><td>4 digits</td></tr>
       <tr><td>2</td><td>Sales Organization</td><td><span className="tag tag-teal">SD</span></td><td>4 digits</td></tr>
       <tr><td>3</td><td>Distribution Channel</td><td><span className="tag tag-teal">SD</span></td><td>2 digits</td></tr>
       <tr><td>4</td><td>Division</td><td><span className="tag tag-teal">SD</span></td><td>2 digits</td></tr>
       <tr><td>5</td><td>Sales Office</td><td><span className="tag tag-teal">SD</span></td><td>4 digits</td></tr>
       <tr><td>6</td><td>Sales Group</td><td><span className="tag tag-teal">SD</span></td><td>3 digits</td></tr>
       <tr><td>7</td><td>Plant</td><td><span className="tag tag-orange">MM</span></td><td>4 digits</td></tr>
       <tr><td>8</td><td>Storage Location</td><td><span className="tag tag-orange">MM</span></td><td>4 digits</td></tr>
       <tr><td>9</td><td>Shipping Point</td><td><span className="tag tag-teal">SD</span></td><td>4 digits</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 9: Worked example - Alchem's units --> */}
    <div className="card purple">
     <h2><span className="badge">🏢</span> Worked Example — Alchem Laboratories' Enterprise Structure</h2>
     <h3>1. Company Code (FI, 4 digits)</h3>
     <table className="table-reponsive">
      <thead><tr><th>Count</th><th>Code</th><th>Name</th></tr></thead>
      <tbody>
       <tr><td>1</td><td>P100</td><td>Alchem Laboratories Limited</td></tr>
      </tbody>
     </table>

     <h3>2. Sales Organization (SD, 4 digits)</h3>
     <table className="table-reponsive">
      <thead><tr><th>Count</th><th>Code</th><th>Name</th></tr></thead>
      <tbody>
       <tr><td rowspan="2">2</td><td>P100</td><td>Alchem Domestic Sales Organization</td></tr>
       <tr><td>P200</td><td>Alchem Export Sales Organization</td></tr>
      </tbody>
     </table>

     <h3>3. Distribution Channel (SD, 2 digits)</h3>
     <table className="table-reponsive">
      <thead><tr><th>Count</th><th>Code</th><th>Name</th></tr></thead>
      <tbody>
       <tr><td rowspan="4">4</td><td>P1</td><td><span className="tag tag-dealer">Dealers</span></td></tr>
       <tr><td>P2</td><td><span className="tag tag-distributor">Distributors</span></td></tr>
       <tr><td>P3</td><td><span className="tag tag-institution">Institutions</span></td></tr>
       <tr><td>P4</td><td><span className="tag tag-direct">Direct</span></td></tr>
      </tbody>
     </table>

     <h3>4. Division (SD, 2 digits)</h3>
     <table className="table-reponsive">
      <thead><tr><th>Count</th><th>Code</th><th>Name</th></tr></thead>
      <tbody>
       <tr><td rowspan="6">6</td><td>P1</td><td>Gynecology</td></tr>
       <tr><td>P2</td><td>Pediatric</td></tr>
       <tr><td>P3</td><td>Insulin</td></tr>
       <tr><td>P4</td><td>Antibiotic</td></tr>
       <tr><td>P5</td><td>Cardiology</td></tr>
       <tr><td>P6</td><td>Orthopedic</td></tr>
      </tbody>
     </table>

     <h3>5. Sales Office (SD, 4 digits)</h3>
     <table className="table-reponsive">
      <thead><tr><th>Count</th><th>Code</th><th>Name</th></tr></thead>
      <tbody>
       <tr><td>1 (for practice)</td><td>P100</td><td>Telangana Sales Office</td></tr>
      </tbody>
     </table>

     <h3>6. Sales Group (SD, 3 digits)</h3>
     <table className="table-reponsive">
      <thead><tr><th>Count</th><th>Code</th><th>Name</th></tr></thead>
      <tbody>
       <tr><td rowspan="2">2</td><td>P10</td><td>Insulin &amp; Antibiotic Group</td></tr>
       <tr><td>P20</td><td>Other Group</td></tr>
      </tbody>
     </table>

     <h3>7. Plant (MM, 4 digits)</h3>
     <table className="table-reponsive">
      <thead><tr><th>Count</th><th>Code</th><th>Name</th></tr></thead>
      <tbody>
       <tr><td rowspan="2">2</td><td>P100</td><td>Mumbai Manufacturing Plant</td></tr>
       <tr><td>P200</td><td>Guwahati Manufacturing Plant</td></tr>
      </tbody>
     </table>

     <h3>8. Storage Location (MM, 4 digits)</h3>
     <p className="note-text">Each plant has 5 storage locations, following the same pattern.</p>
     <table className="table-reponsive">
      <thead><tr><th>Plant</th><th>Code</th><th>Storage Location</th></tr></thead>
      <tbody>
       <tr><td rowspan="5">P100 — Mumbai</td><td>P101</td><td>Raw Material</td></tr>
       <tr><td>P102</td><td>Semi-Finished</td></tr>
       <tr><td>P103</td><td>Finished Goods 1 (room temperature)</td></tr>
       <tr><td>P104</td><td>Finished Goods 2 (cool temperature)</td></tr>
       <tr><td>P105</td><td>Returns</td></tr>
       <tr><td rowspan="5">P200 — Guwahati</td><td>P201</td><td>Raw Material</td></tr>
       <tr><td>P202</td><td>Semi-Finished</td></tr>
       <tr><td>P203</td><td>Finished Goods 1 (room temperature)</td></tr>
       <tr><td>P204</td><td>Finished Goods 2 (cool temperature)</td></tr>
       <tr><td>P205</td><td>Returns</td></tr>
      </tbody>
     </table>

     <h3>9. Shipping Point (SD, 4 digits)</h3>
     <p className="note-text">Each plant has 3 shipping points.</p>
     <table className="table-reponsive">
      <thead><tr><th>Plant</th><th>Code</th><th>Shipping Point Type</th></tr></thead>
      <tbody>
       <tr><td rowspan="3">P100 — Mumbai</td><td>P101</td><td>Manual Shipping Point</td></tr>
       <tr><td>P102</td><td>Automatic Shipping Point</td></tr>
       <tr><td>P103</td><td>Immediate Shipping Point</td></tr>
       <tr><td rowspan="3">P200 — Guwahati</td><td>P201</td><td>Manual Shipping Point</td></tr>
       <tr><td>P202</td><td>Manual Shipping Point</td></tr>
       <tr><td>P203</td><td>Manual Shipping Point</td></tr>
      </tbody>
     </table>
     <div className="callout">
      📌 Coverage today stopped after <strong>Sales Group</strong> in the
      detailed walkthrough, then the last three units — Plant, Storage
      Location, and Shipping Point — were listed to complete the full set
      of 9. Full theory (what each unit means, why it exists) and
      hands-on configuration for all nine begins next class, starting
      from Company Code.
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
        <td>Who gets a production error first, in real time?</td>
        <td>The end user — not the core user or the consultant</td>
       </tr>
       <tr>
        <td>Do end users contact consultants directly for issues?</td>
        <td>No — end users always go through the core user first</td>
       </tr>
       <tr>
        <td>What does the core user do when they receive an error from the end user?</td>
        <td>Analyze it — if it's a user mistake, solve it directly; if it's a configuration issue, place a ticket in the ticketing tool</td>
       </tr>
       <tr>
        <td>What is the purpose of a ticketing tool?</td>
        <td>It helps track tickets, the time spent on each, and their current status</td>
       </tr>
       <tr>
        <td>Name some ticketing tools available in the market.</td>
        <td>ServiceNow, Jira, Remedy, Peregrine, HPQC</td>
       </tr>
       <tr>
        <td>What three checks does a support consultant do first on receiving a ticket?</td>
        <td>Confirm the correct module, verify the priority against the SLA, then send acknowledgement to core user and end user</td>
       </tr>
       <tr>
        <td>Why does the consultant analyze the error on Pre-Production instead of Production?</td>
        <td>Support consultants have no access to the Production server; Pre-Production mirrors Production's configuration and data, so the same error can be reproduced there safely</td>
       </tr>
       <tr>
        <td>What is the full server flow for resolving a ticket?</td>
        <td>Reproduce/analyze in Pre-Production → configure in Development → move to Quality and Pre-Production for testing → UAT sign-off → move to Production</td>
       </tr>
       <tr>
        <td>What are the five status stages of a ticket?</td>
        <td>Open, Work in Process, Waiting for Information, Waiting for Confirmation, Closed</td>
       </tr>
       <tr>
        <td>Who is allowed to close a ticket?</td>
        <td>Only the core user — consultants can change other statuses but cannot close a ticket</td>
       </tr>
       <tr>
        <td>During which status does the SLA resolution timer actually run?</td>
        <td>Only during "Work in Process" — it pauses for every other status</td>
       </tr>
       <tr>
        <td>What does the KT process consist of, and how long does it take?</td>
        <td>Consultants travel to core users' place, receive the Configuration document, do a system study on the Development server, prepare an Understanding document, and give reverse KT to core users — takes about 3 weeks</td>
       </tr>
       <tr>
        <td>What is Enterprise Structure?</td>
        <td>It specifies the structure of the organization — e.g. head office, branch offices, manufacturing plants</td>
       </tr>
       <tr>
        <td>What is the maximum code length for an organizational unit in SAP?</td>
        <td>4 digits (though some units like Distribution Channel, Division, and Sales Group use shorter lengths)</td>
       </tr>
       <tr>
        <td>Which consultant is responsible for Company Code, and which for Plant/Storage Location?</td>
        <td>Company Code → FI consultant; Plant and Storage Location → MM consultant (all other SD-related units are SD's responsibility)</td>
       </tr>
       <tr>
        <td>How many sales organizations, distribution channels, and divisions does Alchem have in this example?</td>
        <td>2 sales organizations (Domestic, Export), 4 distribution channels (Dealers, Distributors, Institutions, Direct), 6 divisions (Gynecology, Pediatric, Insulin, Antibiotic, Cardiology, Orthopedic)</td>
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
         No transaction codes were introduced in this session — it
         covered the support ticket lifecycle, the KT process, and a
         conceptual introduction to Enterprise Structure. Hands-on
         configuration T-codes for Enterprise Structure (company code,
         sales organization, etc.) begin next class.
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
        <td>KT process duration</td>
        <td>3 weeks</td>
       </tr>
       <tr>
        <td>Acknowledgement SLA (example)</td>
        <td>Within 15 minutes of receiving the ticket (varies by client)</td>
       </tr>
       <tr>
        <td>Ticket status stages</td>
        <td>Open → Work in Process → Waiting for Information → Waiting for Confirmation → Closed</td>
       </tr>
       <tr>
        <td>Who can close a ticket</td>
        <td>Only the core user</td>
       </tr>
       <tr>
        <td>Server used to reproduce a Production error</td>
        <td>Pre-Production (mirror of Production)</td>
       </tr>
       <tr>
        <td>Company Code — length / responsible</td>
        <td>4 digits / FI consultant</td>
       </tr>
       <tr>
        <td>Sales Organization — length / responsible</td>
        <td>4 digits / SD consultant</td>
       </tr>
       <tr>
        <td>Distribution Channel — length / responsible</td>
        <td>2 digits / SD consultant</td>
       </tr>
       <tr>
        <td>Division — length / responsible</td>
        <td>2 digits / SD consultant</td>
       </tr>
       <tr>
        <td>Sales Office — length / responsible</td>
        <td>4 digits / SD consultant</td>
       </tr>
       <tr>
        <td>Sales Group — length / responsible</td>
        <td>3 digits / SD consultant</td>
       </tr>
       <tr>
        <td>Plant — length / responsible</td>
        <td>4 digits / MM consultant</td>
       </tr>
       <tr>
        <td>Storage Location — length / responsible</td>
        <td>4 digits / MM consultant</td>
       </tr>
       <tr>
        <td>Shipping Point — length / responsible</td>
        <td>4 digits / SD consultant</td>
       </tr>
       <tr>
        <td>Alchem's org unit counts</td>
        <td>1 company code, 2 sales orgs, 4 distribution channels, 6 divisions, 1 sales office (practice), 2 sales groups, 2 plants, 5 storage locations/plant, 3 shipping points/plant</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture closed out the support-project topic with two
      practical mechanics: the <strong>KT (Knowledge Transfer)
       process</strong> — a 3-week handover where incoming support
      consultants receive the Configuration document from core users, do
      their own system study on the Development server, prepare an
      Understanding document, and deliver a reverse KT — and the complete
      <strong>support ticket lifecycle</strong>, from an end user's
      Production error through the core user, the ticketing tool, and
      the support consultant's acknowledgement, analysis
      (Pre-Production → Development → Quality/Pre-Production → UAT
      sign-off → Production), and the five ticket status stages (Open,
      Work in Process, Waiting for Information, Waiting for Confirmation,
      Closed — with only the core user able to close a ticket, and the
      SLA timer running only during Work in Process). The lecture then
      pivoted into the course's first core technical concept:
      <strong>Enterprise Structure</strong> — the mapping of a client's
      real-world organization into SAP. Nine organizational units were
      introduced (Company Code, Sales Organization, Distribution
      Channel, Division, Sales Office, Sales Group, Plant, Storage
      Location, Shipping Point), each with its responsible consultant
      (FI, SD, or MM), its code length, and a worked example built
      entirely around Alchem Laboratories' own structure — setting up
      detailed theory and hands-on configuration for each unit starting
      next class.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>End users never contact consultants directly</strong> —
       the core user is always the intermediary, both for reporting
       errors and for closing tickets
      </li>
      <li>
       KT process = <strong>Configuration document handover → system
        study on Development server → Understanding document → reverse
        KT</strong>, taking about 3 weeks
      </li>
      <li>
       Ticket analysis always starts on
       <strong>Pre-Production</strong> (never Production directly),
       since support consultants have no Production access
      </li>
      <li>
       Five ticket statuses: <strong>Open → Work in Process → Waiting
        for Information → Waiting for Confirmation → Closed</strong>;
       only the core user can close a ticket, and the SLA timer runs
       only during Work in Process
      </li>
      <li>
       <strong>Enterprise Structure</strong> = mapping the client's
       real-world organization into SAP, using coded organizational
       units (max 4 digits) owned by FI, SD, or MM consultants
      </li>
      <li>
       Nine organizational units to master, in order: <strong>Company
        Code → Sales Organization → Distribution Channel → Division →
        Sales Office → Sales Group → Plant → Storage Location → Shipping
        Point</strong>
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Full theory and hands-on
      configuration of Enterprise Structure, starting from Company Code
      and working through all nine organizational units one by one.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 4 Notes — Support Ticket Lifecycle, KT Process &amp; Enterprise
    Structure Introduction 🎓
   </p>
  </div>
 );
};

export default Enterprise4;
