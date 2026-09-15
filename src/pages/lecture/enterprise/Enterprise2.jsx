const Enterprise2 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-blue">
    <h1>📘 Lecture 2 — Project Preparation (Continued) &amp; Business Blueprint Phase</h1>
    <p>
     SAP SD | Infrastructure, team composition, consultant facilities,
     go-live date, kickoff meeting, requirement gathering, and the BBP
     document
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Quick Recap — Project Preparation So Far</h2>
     <div className="flow">
      <div className="flow-step done">1. License ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">2. Landscape ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-orange">3. Infrastructure 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">4. Implementation Partner 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">5. Consultant Facilities 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-teal">6. Go-Live Date 🆕</div>
     </div>
     <p className="note-text-center">
      Last class covered Activities 1–2 (License and Landscape). Today
      completes the remaining four activities of Project Preparation,
      then moves into the Business Blueprint phase.
     </p>
    </div>

    {/* <!-- Section 1: Infrastructure --> */}
    <div className="card orange">
     <h2><span className="badge">3</span> Activity 3 — Infrastructure</h2>
     <p>
      "Infrastructure" in this phase covers three related decisions:
     </p>
     <div className="stepper">
      <div className="step">
       <strong>New computers</strong> — deciding how many new computers
       need to be purchased to match the number of licenses bought
       (e.g., if the client is purchasing 1,500 licenses, they must
       plan for enough computers/workstations to support that many
       users).
      </div>
      <div className="step">
       <strong>Server environment</strong> — deciding
       <em>where</em> the servers will physically be kept (e.g., a
       dedicated server room inside one of the manufacturing plants),
       along with the required <strong>temperature
        requirements</strong> for that room, and
       <strong>security</strong> — restricting server-room access to
       only one or two authorized people, with everyone else denied
       entry.
      </div>
      <div className="step">
       <strong>VPN connectivity</strong> — VPN stands for
       <strong>Virtual Private Network</strong>. Since the servers
       physically sit at one location (e.g., a specific manufacturing
       plant), VPN connectivity is what allows users
       <strong>all over India</strong> (or wherever the client
       operates) to securely access those servers kept at that one
       location.
      </div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sub-topic</th>
        <th>What's Decided</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>New Computers</td>
        <td>Quantity needed to match the number of licenses purchased</td>
       </tr>
       <tr>
        <td>Server Environment</td>
        <td>Physical location of servers, temperature requirements, and access security</td>
       </tr>
       <tr>
        <td>VPN Connectivity</td>
        <td>Virtual Private Network — connects users across locations to the servers kept at one site</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 2: Implementation Partner - list consultants/core users --> */}
    <div className="card purple">
     <h2>
      <span className="badge">4</span> Activity 4 — Implementation Partner:
      Listing Consultants &amp; Core Users
     </h2>
     <p>
      In this activity, both sides finalize <strong>who</strong> will
      actually be on the project:
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Party</th>
        <th>What They List Out</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Implementation Partner (TCS)</td>
        <td>
         All the <strong>consultants</strong> who are going to be
         involved in this project (we, as consultants, are employees
         of TCS)
        </td>
       </tr>
       <tr>
        <td>Client (Alchem Laboratories)</td>
        <td>
         All the <strong>core users</strong> who are going to be
         involved in this project
        </td>
       </tr>
      </tbody>
     </table>
     <h3>The Role of Core Users in an Implementation Project</h3>
     <div className="callout purple">
      🎯 <strong>Core users will explain the client's business process
       to consultants, and consultants will configure it into SAP.</strong>
      Consultants know SAP, but they don't know the client's specific
      business process — that knowledge sits with the client's core
      users (experienced employees with good exposure to how the
      business actually runs). This handoff — core user explains,
      consultant configures — is the fundamental working relationship
      for the rest of the project.
     </div>
    </div>

    {/* <!-- Section 3: Team size worked example --> */}
    <div className="card teal">
     <h2><span className="badge">📊</span> Worked Example — Team Size &amp; Core Users</h2>
     <div className="callout blue">
      💡 Team size is <strong>not fixed</strong> — it differs from
      project to project. The numbers below are simply an illustrative
      example used in class.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item</th>
        <th>Example Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Total consultant team size</td>
        <td>30</td>
       </tr>
       <tr>
        <td>SD team size</td>
        <td>9</td>
       </tr>
       <tr>
        <td>Modules implemented (starting scope)</td>
        <td>SD, MM, PP, FI, CO (5 modules)</td>
       </tr>
       <tr>
        <td>Core users</td>
        <td>5 total — one per module</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 In real projects, SD and FI typically have the
      <strong>largest team sizes</strong> among the modules. CO stands
      for <strong>Controlling</strong>; PP stands for
      <strong>Production Planning</strong>; MM stands for
      <strong>Materials Management</strong>. Each module is assigned
      exactly one core user in this example — MM1, PP1, FI1, CO1, SD1 —
      even though the consultant team for a given module (like SD) may
      have multiple people.
     </p>
    </div>

    {/* <!-- Section 4: Consultant facilities --> */}
    <div className="card gold">
     <h2><span className="badge">5</span> Activity 5 — Consultant Facilities</h2>
     <p>
      This activity decides who takes care of the consultants once they
      arrive at the client's location — their
      <strong>accommodation, local travel expenses, work environment,
       and equipment</strong> (laptop/system). Generally, the
      <strong>client</strong> takes care of these consultant facilities.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Project Type</th>
        <th>Onsite Model</th>
        <th>Duration</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Domestic project</td>
        <td>
         <strong>All consultants</strong> go to the client's place to
         implement SAP
        </td>
        <td className="price-final">6 months</td>
       </tr>
       <tr>
        <td>Foreign / MNC client</td>
        <td>
         <strong>Only one person per module</strong> goes to the
         client's place; the remaining consultants work
         <strong>offshore</strong> (from the TCS office)
        </td>
        <td className="price-final">10 months</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      💡 In this course's running example, Alchem Laboratories is a
      <strong>domestic client</strong> — so all 30 consultants travel
      to the client's site, and the project tenure is
      <strong>6 months</strong>. If Alchem were an MNC/foreign client
      instead, only one representative per module would travel onsite,
      with everyone else supporting offshore, and the tenure would
      stretch to <strong>10 months</strong>.
     </div>
    </div>

    {/* <!-- Section 5: Go-live date --> */}
    <div className="card red">
     <h2><span className="badge">6</span> Activity 6 — Go-Live Date (Final Activity)</h2>
     <div className="callout red">
      🏁 The <strong>last activity</strong> in Project Preparation is
      fixing the <strong>Go-Live date</strong> — the target date on
      which the client's SAP system will actually go live.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Reference</th>
        <th>Date</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Example project start date</td>
        <td>8th April</td>
       </tr>
       <tr>
        <td>Project duration (domestic client)</td>
        <td>6 months</td>
       </tr>
       <tr>
        <td>Resulting Go-Live date</td>
        <td className="price-final">31st October / 1st November</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 With this, all six activities of the Project Preparation phase
      are complete: License → Landscape → Infrastructure →
      Implementation Partner (consultant/core-user listing) →
      Consultant Facilities → Go-Live Date.
     </p>
    </div>

    {/* <!-- Section 6: Kickoff meeting --> */}
    <div className="card indigo">
     <h2><span className="badge">📢</span> Transitioning to Phase 2 — The Kickoff Meeting</h2>
     <p>
      Once Project Preparation is complete, the
      <strong>implementation partner's management</strong> (BDM,
      Delivery Head, Project Manager, Technical Head) conducts a
      <strong>Kickoff Meeting</strong> — literally meaning the
      "starting of the project." All consultants who are going to be
      involved in the project (30, in our example) are invited.
     </p>
     <h3>What Gets Covered in the Kickoff Meeting</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Topic</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Introduction about the client</td>
        <td>Background on who the client is and what they do</td>
       </tr>
       <tr>
        <td>Rules and regulations of the client</td>
        <td>
         Since consultants will be working at the client's site,
         they need to know the client's site rules/regulations
        </td>
       </tr>
       <tr>
        <td>Roles and responsibilities of consultants</td>
        <td>
         E.g., what the 9 SD-module consultants specifically need to
         do within Sales &amp; Distribution
        </td>
       </tr>
       <tr>
        <td>Go-Live date and project start date</td>
        <td>
         The dates finalized in Project Preparation are formally
         shared — this is the <strong>main</strong> point of the
         meeting
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout indigo">
      🚀 After the Kickoff Meeting, all consultants travel to the
      client's place to implement SAP — and this is exactly when the
      <strong>Business Blueprint phase</strong> officially begins.
     </div>
    </div>

    {/* <!-- Section 7: Manufacturing plant visit --> */}
    <div className="card brown">
     <h2><span className="badge">🏭</span> Day 1 &amp; Day 2 — Introduction and Plant Visit</h2>
     <div className="stepper">
      <div className="step">
       <strong>Day 1 (first day at the client's site):</strong>
       consultants have their first interaction with the core users —
       introductions and orientation.
      </div>
      <div className="step">
       <strong>Day 2 onward:</strong> core users take all the
       consultants for a <strong>manufacturing plant visit</strong>,
       and explain the actual process on the plant floor. Core users
       travel to the same plant alongside the consultants.
      </div>
     </div>
     <div className="callout">
      🏢 <strong>What if the client isn't a manufacturing company?</strong>
      A plant visit only makes sense if the client actually
      <em>has</em> a manufacturing plant (as with a pharma company like
      Alchem). If the client is, say, a software company with no
      manufacturing plant, there is no plant-visit step — consultants
      instead work directly at the client's office/location to
      understand the business process.
     </div>
    </div>

    {/* <!-- Section 8: Requirement Gathering --> */}
    <div className="card teal">
     <h2><span className="badge">1</span> Business Blueprint — Activity 1: Requirement Gathering</h2>
     <div className="callout teal">
      💡 <strong>Requirement gathering</strong> means understanding the
      present business process of the client — <em>without</em> using
      SAP yet. It's essentially building a model of how the client
      currently operates.
     </div>
     <h3>How It Works, Day to Day</h3>
     <div className="stepper">
      <div className="step">
       Consultants are given a <strong>questionnaire</strong> by the
       implementation partner (TCS). This questionnaire is
       <strong>module-wise</strong> (SD gets its own separate
       questionnaire from MM, and so on), and it also differs
       <strong>industry to industry</strong> — a pharma client's
       questions will differ from an automobile client's questions.
       Different implementation partners (TCS, IBM, etc.) also
       maintain their own versions of these questionnaires.
      </div>
      <div className="step">
       Every day, consultants go to the <strong>core users'
        place</strong> (since everyone is at the same manufacturing
       plant location) and ask the questions from the questionnaire.
      </div>
      <div className="step">
       Whatever the core user explains is
       <strong>noted down</strong> — consultants also record these
       sessions.
      </div>
      <div className="step">
       Every day, after that day's requirement-gathering session,
       consultants go back and prepare the
       <strong>AS-IS document</strong>.
      </div>
     </div>
     <div className="callout">
      📄 <strong>AS-IS document</strong> consists of the
      <em>present</em> business process of the client, exactly as the
      core user explained it.
     </div>
     <h3>Practical Notes From Class Discussion</h3>
     <ul>
      <li>
       Sessions are time-boxed (e.g., 10 AM–1 PM or 10 AM–2 PM daily) —
       requirement gathering isn't run as an 8-hour marathon each day.
      </li>
      <li>
       If a core user doesn't know the answer to something, they'll
       escalate/contact their own senior (e.g., a Vice President or
       Director) for clarification — this naturally adds time to the
       process. How well requirements are gathered directly affects
       the eventual success of the project.
      </li>
      <li>
       Whether <strong>one senior consultant</strong> handles all the
       requirement gathering and AS-IS documentation for a module, or
       the work is <strong>distributed across the whole team</strong>
       (e.g., all 9 SD consultants), depends on the size/value of the
       project — there's no single fixed rule.
      </li>
      <li>
       This entire requirement-gathering process is specific to
       <strong>implementation projects</strong> — a support project
       follows a different process altogether.
      </li>
     </ul>
     <div className="callout red">
      ⏱️ <strong>Timeline:</strong> Requirement gathering takes
      <strong>2 months</strong> out of the total 6-month project
      tenure.
     </div>
    </div>

    {/* <!-- Section 9: BBP document --> */}
    <div className="card purple">
     <h2>
      <span className="badge">2</span> Business Blueprint — Activity 2: BBP
      Document Preparation &amp; Sign-Off
     </h2>
     <div className="callout purple">
      💡 <strong>BBP</strong> stands for <strong>Business
       Blueprint</strong>. The BBP document consists of two parts:
      <strong>AS-IS</strong> and <strong>TO-BE</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Part</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>AS-IS</td>
        <td>The present business process of the client, exactly as the core user explained it</td>
       </tr>
       <tr>
        <td>TO-BE</td>
        <td>How that present business process is going to be mapped/represented in SAP</td>
       </tr>
      </tbody>
     </table>
     <h3>Sign-Off Process</h3>
     <div className="stepper">
      <div className="step">
       After preparing the BBP document (AS-IS + TO-BE), it's sent to
       the <strong>core user</strong>.
      </div>
      <div className="step">
       The core user goes through the entire document.
      </div>
      <div className="step">
       If everything is correct, the core user sends a
       <strong>confirmation mail</strong> — this confirmation
       <em>is</em> the "sign-off."
      </div>
     </div>
     <div className="callout red">
      ⏱️ <strong>Timeline:</strong> BBP document preparation and sign-off
      takes <strong>1 month</strong>.
     </div>
     <div className="callout green">
      ✅ <strong>Total Business Blueprint phase = 2 months (Requirement
       Gathering) + 1 month (BBP document &amp; sign-off) = 3 months.</strong>
     </div>
    </div>

    {/* <!-- Section 10: Transition to Realization --> */}
    <div className="card gold">
     <h2><span className="badge">➡️</span> Transitioning to Phase 3 — Realization</h2>
     <p>
      Once the sign-off confirmation is received from the core user,
      the project moves to the next phase of ASAP methodology:
      <strong>Realization</strong>.
     </p>
     <div className="callout gold">
      🛠️ In the initial part of Realization, consultants get access to
      the <strong>Development server</strong> — the same server used
      for configuration, as covered in Lecture 1. Since the
      requirement-gathering work already produced the AS-IS and TO-BE
      documents, Realization is essentially about
      <strong>configuring the client's business process into
       SAP</strong>, based directly on what was mapped out in the TO-BE
      document.
     </div>
     <p className="note-text">
      📌 <strong>Realization phase = configuring (mapping) the
       client's TO-BE business process into SAP.</strong> Full detail on
      this phase continues in the next class.
     </p>
    </div>

    {/* <!-- Section 11: Full ASAP recap --> */}
    <div className="card">
     <h2><span className="badge">🧭</span> ASAP Methodology — Progress So Far</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Phase</th>
        <th>Status / Key Activities</th>
        <th>Duration</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1. Project Preparation</td>
        <td>
         License → Landscape → Infrastructure → Implementation
         Partner (consultant/core-user listing) → Consultant
         Facilities → Go-Live Date. No consultant involvement.
        </td>
        <td>—</td>
       </tr>
       <tr>
        <td>2. Business Blueprint</td>
        <td>
         Kickoff meeting → Plant visit → Requirement Gathering
         (AS-IS) → BBP Document &amp; Sign-off (AS-IS + TO-BE)
        </td>
        <td className="price-final">3 months (2 + 1)</td>
       </tr>
       <tr>
        <td>3. Realization</td>
        <td>Configuring the TO-BE process into SAP (covered next class)</td>
        <td>—</td>
       </tr>
       <tr>
        <td>4. Final Preparation</td>
        <td>Not yet covered</td>
        <td>—</td>
       </tr>
       <tr>
        <td>5. Go-Live and Support</td>
        <td>Not yet covered</td>
        <td>—</td>
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
        <td>What three things are decided under "Infrastructure" in Project Preparation?</td>
        <td>Number of new computers (to match license count), server environment (location, temperature, security), and VPN connectivity</td>
       </tr>
       <tr>
        <td>What does VPN stand for, and why is it needed?</td>
        <td>Virtual Private Network — it lets users across locations securely access servers kept at one central site (e.g., a manufacturing plant)</td>
       </tr>
       <tr>
        <td>Who lists out the consultants, and who lists out the core users?</td>
        <td>The implementation partner lists out the consultants; the client lists out the core users</td>
       </tr>
       <tr>
        <td>What is the role of a core user in an implementation project?</td>
        <td>Core users explain the client's business process to consultants, and consultants configure it into SAP</td>
       </tr>
       <tr>
        <td>What does "Consultant Facilities" cover, and who typically arranges it?</td>
        <td>Accommodation, local travel, work environment, and equipment (laptop/system) for onsite consultants — generally arranged by the client</td>
       </tr>
       <tr>
        <td>What's the difference in onsite staffing between a domestic and an MNC/foreign project?</td>
        <td>Domestic: all consultants go onsite (6-month tenure). MNC/foreign: only one person per module goes onsite, the rest work offshore (10-month tenure)</td>
       </tr>
       <tr>
        <td>What is the final activity of the Project Preparation phase?</td>
        <td>Fixing the Go-Live date</td>
       </tr>
       <tr>
        <td>What is a Kickoff Meeting, and who conducts it?</td>
        <td>The meeting that marks the starting of the project, conducted by the implementation partner's management (BDM, Delivery Head, Project Manager, Technical Head), covering client introduction, rules/regulations, consultant roles, and the go-live/start dates</td>
       </tr>
       <tr>
        <td>What happens right after the Kickoff Meeting?</td>
        <td>All consultants travel to the client's place, marking the start of the Business Blueprint phase</td>
       </tr>
       <tr>
        <td>What is "Requirement Gathering"?</td>
        <td>Understanding the client's present business process (without using SAP) with the help of core users, using a module-wise and industry-specific questionnaire provided by the implementation partner</td>
       </tr>
       <tr>
        <td>What is an AS-IS document?</td>
        <td>A document capturing the present business process of the client, exactly as explained by the core user</td>
       </tr>
       <tr>
        <td>What does BBP stand for, and what does the BBP document contain?</td>
        <td>Business Blueprint; it contains both the AS-IS (present process) and the TO-BE (how that process will be mapped into SAP)</td>
       </tr>
       <tr>
        <td>What counts as "sign-off" on the BBP document?</td>
        <td>A confirmation mail sent by the core user after reviewing the BBP document and finding it accurate</td>
       </tr>
       <tr>
        <td>How long does the Business Blueprint phase take in total?</td>
        <td>3 months — 2 months for Requirement Gathering plus 1 month for BBP document preparation and sign-off</td>
       </tr>
       <tr>
        <td>What happens once BBP sign-off is received?</td>
        <td>The project moves to the Realization phase, where consultants get Development server access and configure the TO-BE process into SAP</td>
       </tr>
       <tr>
        <td>What is the Realization phase, in one line?</td>
        <td>Configuring/mapping the client's TO-BE business process into SAP</td>
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
         covered the remaining Project Preparation activities and the
         Business Blueprint phase at a project-process level.
         Hands-on configuration T-codes begin once the course reaches
         the Realization phase content (Enterprise Structure
         onward).
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
        <td>Project Preparation — full activity list</td>
        <td>License → Landscape → Infrastructure → Implementation Partner (consultants/core users) → Consultant Facilities → Go-Live Date</td>
       </tr>
       <tr>
        <td>Example team size</td>
        <td>30 total, SD = 9</td>
       </tr>
       <tr>
        <td>Example core users</td>
        <td>5 (one per module: SD, MM, PP, FI, CO)</td>
       </tr>
       <tr>
        <td>Starting modules implemented (example)</td>
        <td>SD, MM, PP, FI, CO</td>
       </tr>
       <tr>
        <td>Domestic project tenure</td>
        <td>6 months (all consultants onsite)</td>
       </tr>
       <tr>
        <td>MNC/foreign project tenure</td>
        <td>10 months (1 person/module onsite, rest offshore)</td>
       </tr>
       <tr>
        <td>Example Go-Live date</td>
        <td>31st Oct / 1st Nov (6 months after an 8th April start)</td>
       </tr>
       <tr>
        <td>Business Blueprint phase duration</td>
        <td>3 months total = 2 (Requirement Gathering) + 1 (BBP doc &amp; sign-off)</td>
       </tr>
       <tr>
        <td>BBP document components</td>
        <td>AS-IS (present process) + TO-BE (SAP-mapped process)</td>
       </tr>
       <tr>
        <td>Sign-off mechanism</td>
        <td>Confirmation mail from the core user</td>
       </tr>
       <tr>
        <td>Realization phase — server used</td>
        <td>Development server</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed the Project Preparation phase with four
      more activities beyond License and Landscape: Infrastructure
      (computers, server environment, VPN), the Implementation Partner
      activity (TCS lists consultants, the client lists core users —
      with core users' role being to explain the business process so
      consultants can configure it), Consultant Facilities (onsite
      arrangements, differing by domestic vs. MNC project), and finally
      fixing the Go-Live date. A worked example illustrated typical team
      composition (30 consultants, 9 in SD, 5 core users across 5
      modules) and project tenure (6 months domestic, 10 months MNC).
      The lecture then walked through the transition into Business
      Blueprint: the Kickoff Meeting (introducing the client, rules,
      roles, and dates), the manufacturing plant visit, and the two core
      Business Blueprint activities — Requirement Gathering (2 months,
      producing the AS-IS document via a module-wise, industry-specific
      questionnaire) and BBP Document Preparation &amp; Sign-off
      (1 month, combining AS-IS with the TO-BE mapping and closing with
      the core user's confirmation mail) — for a total Business
      Blueprint duration of 3 months. The lecture closed by previewing
      Realization: once sign-off is received, consultants get
      Development server access and begin configuring the TO-BE process
      into SAP.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       Project Preparation's six activities, in order:
       <strong>License → Landscape → Infrastructure →
        Implementation Partner → Consultant Facilities →
        Go-Live Date</strong>
      </li>
      <li>
       <strong>Core users explain, consultants configure</strong> —
       the fundamental working relationship throughout implementation
      </li>
      <li>
       Domestic projects: <strong>all consultants onsite, 6
        months</strong>. MNC/foreign projects:
       <strong>1 person/module onsite, rest offshore, 10 months</strong>
      </li>
      <li>
       The <strong>Kickoff Meeting</strong> marks the official start;
       after it, consultants travel to the client and Business
       Blueprint begins
      </li>
      <li>
       <strong>AS-IS</strong> = present process (from Requirement
       Gathering); <strong>TO-BE</strong> = how it will look in SAP
       (added during BBP document prep)
      </li>
      <li>
       Business Blueprint = <strong>3 months</strong> total (2 for
       Requirement Gathering + 1 for BBP doc/sign-off); sign-off =
       confirmation mail from the core user
      </li>
      <li>
       Realization phase = <strong>configuring the TO-BE process into
        SAP</strong>, starting with Development server access
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Full coverage of the Realization
      phase, completing the ASAP methodology walkthrough.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 2 Notes — Project Preparation (Continued) &amp; Business
    Blueprint Phase 🎓
   </p>
  </div>
 );
};

export default Enterprise2;
