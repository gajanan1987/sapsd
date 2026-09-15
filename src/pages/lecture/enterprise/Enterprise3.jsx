const Enterprise3 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-teal">
    <h1>🚀 Lecture 3 — Realization, Final Preparation, Go-Live &amp; Support Project Basics</h1>
    <p>
     SAP SD | Completing ASAP methodology end-to-end, then the fundamentals of a support project: SLA, tickets, and change requests
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Quick Recap — Business Blueprint</h2>
     <div className="flow">
      <div className="flow-step done">Requirement Gathering (2 months) ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">BBP Doc + Sign-off (1 month) ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-teal">Realization 🆕</div>
     </div>
     <p className="note-text-center">
      Business Blueprint = 3 months total. Once BBP sign-off (confirmation) is
      received from the core user, the project moves into Realization.
     </p>
    </div>

    {/* <!-- Section 1: Realization overview + gaps --> */}
    <div className="card teal">
     <h2><span className="badge">3</span> Phase 3 — Realization: Overview</h2>
     <div className="callout teal">
      💡 <strong>Realization</strong> = configuring the client's business
      process into SAP, i.e., <strong>mapping the TO-BE process</strong>
      (already documented in the BBP) into the actual system.
     </div>
     <h3>What About Requirements SAP Can't Solve?</h3>
     <div className="callout red">
      ⚠️ <strong>Gaps:</strong> if a business requirement has
      <strong>no standard SAP solution</strong>, it's treated as a
      <strong>gap</strong>. Gaps are documented separately in a
      <strong>gap analysis document</strong>, but they are
      <strong>not addressed within the current implementation
       project</strong> — work on gaps only begins
      <em>after</em> the project is complete.
     </div>
    </div>

    {/* <!-- Section 2: Realization workflow --> */}
    <div className="card orange">
     <h2><span className="badge">🛠️</span> Realization — Step-by-Step Workflow</h2>
     <div className="stepper">
      <div className="step">
       Consultants get <strong>Development server access</strong>, and
       configure the client's business process (the TO-BE process)
       into SAP.
      </div>
      <div className="step">
       Once all configurations are complete, the
       <strong>Basis Consultant</strong> moves all the configurations
       from the <strong>Development server to the Quality
        server</strong> (functional consultants do not move
       transports themselves — that's Basis's job).
      </div>
      <div className="step">
       <strong>Testing</strong> is carried out on the Quality server
       once the configurations arrive there.
      </div>
      <div className="step">
       After testing, consultants prepare the
       <strong>User Manual document</strong>.
      </div>
      <div className="step">
       Consultants also prepare the
       <strong>Configuration document</strong>.
      </div>
     </div>
    </div>

    {/* <!-- Section 3: User Manual document --> */}
    <div className="card purple">
     <h2><span className="badge">📘</span> User Manual Document</h2>
     <div className="callout purple">
      💡 The <strong>User Manual document</strong> consists of the
      <strong>step-by-step process of creating master data and open
       transaction data</strong>, along with screenshots.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Data Type</th>
        <th>Examples (SD module)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Master Data</td>
        <td>Customer master, Material master, Condition (pricing) master</td>
       </tr>
       <tr>
        <td>Transaction Data</td>
        <td>
         Enquiry, Quotation, Sales Order, Delivery, Invoice —
         the standard order-to-cash flow. Other processes exist too:
         cash sale, rush order, returns, credit memo, debit memo,
         consignment, contracts, third-party process, STO, intercompany
         (IC) process, and more — covered in depth later in the course.
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔁 <strong>Distribution flow:</strong> after preparing the User
      Manual document, consultants send it to
      <strong>core users</strong>, and core users then distribute it to
      their <strong>end users</strong> (who are the ones actually
      performing day-to-day transactions in SAP).
     </div>
    </div>

    {/* <!-- Section 4: Configuration document --> */}
    <div className="card gold">
     <h2><span className="badge">📄</span> Configuration Document</h2>
     <div className="callout gold">
      💡 The <strong>Configuration document</strong> consists of
      <strong>screenshots of all the configurations</strong> done for
      this particular client.
     </div>
     <p>
      After preparing it, this document is also sent to the core user.
     </p>
     <div className="callout red">
      🔑 <strong>Purpose — Knowledge Transfer (KT):</strong> the
      Configuration document is primarily used for
      <strong>KT (Knowledge Transfer)</strong>. If a different company
      takes over support after implementation, those support
      consultants won't know the original configuration decisions —
      this document is what they refer to in order to understand what
      was built and why.
     </div>
    </div>

    {/* <!-- Section 5: Realization timeline --> */}
    <div className="card">
     <h2><span className="badge">⏱️</span> Realization Timeline &amp; Progress So Far</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Phase</th>
        <th>Duration</th>
        <th>Cumulative</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Business Blueprint</td>
        <td>3 months</td>
        <td>3 months</td>
       </tr>
       <tr>
        <td>Realization</td>
        <td>2 months</td>
        <td>5 months</td>
       </tr>
       <tr>
        <td>Final Preparation (remaining time)</td>
        <td>1 month</td>
        <td className="price-final">6 months (full project tenure)</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 6: Final Preparation - User Training --> */}
    <div className="card indigo">
     <h2><span className="badge">4</span> Phase 4 — Final Preparation: User Training</h2>
     <div className="callout indigo">
      💡 <strong>Activity 1 — User Training:</strong> consultants give
      training to <strong>core users</strong> on how to create master
      data and transaction data. Core users then pass that training on
      to their own <strong>end users</strong>.
     </div>
    </div>

    {/* <!-- Section 7: UAT --> */}
    <div className="card brown">
     <h2><span className="badge">2</span> Final Preparation — UAT Sign-Off</h2>
     <div className="callout brown">
      💡 <strong>UAT</strong> stands for <strong>User Acceptance
       Test(ing)</strong>. Core users are asked to test all the
      scenarios and confirm.
     </div>
     <div className="stepper">
      <div className="step">Core users test all the configured scenarios.</div>
      <div className="step">
       If everything is correct, the core user gives
       <strong>UAT sign-off</strong> (another confirmation, alongside
       the earlier BBP sign-off).
      </div>
      <div className="step">
       Once UAT sign-off is received, the
       <strong>Basis Consultant</strong> transports all
       configurations from the <strong>Quality server to the
        Production server</strong>.
      </div>
     </div>
     <div className="callout blue">
      🔖 <strong>Three sign-offs across a typical 6-month project:</strong>
      (1) BBP sign-off, (2) UAT sign-off, (3) Project Closure sign-off
      (covered later in Go-Live &amp; Support).
     </div>
    </div>

    {/* <!-- Section 8: Cutover activity --> */}
    <div className="card red">
     <h2><span className="badge">4</span> Final Preparation — Cutover Activity &amp; Cutover Strategy</h2>
     <div className="callout red">
      💡 <strong>Cutover activity</strong> = uploading
      <strong>master data and open transaction data</strong> from the
      legacy (non-SAP) system into SAP.
     </div>
     <p>
      Example: Alchem Laboratories was using JD Edwards before SAP.
      Now, at this final stage, their <strong>existing master data and
       open transaction data</strong> in JD Edwards has to be moved into
      SAP — that migration activity is what's called "cutover."
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Data Type</th>
        <th>Examples</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Master Data</td>
        <td>Customer master, Material master, Condition (pricing) master</td>
       </tr>
       <tr>
        <td>Open Transaction Data</td>
        <td>
         Open enquiries, open quotations, open contracts, open sales
         orders — "open" means the transaction is not yet completed
         (e.g., an order received from the customer but
         <strong>not yet delivered</strong>; once delivered, it's no
         longer "open")
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      🔧 <strong>Who does this, and how?</strong> Cutover is performed
      by <strong>functional consultants</strong>, not Basis. Tools such
      as <strong>LSMW, BDC, and BAPI</strong> are used to upload the
      legacy data into SAP (covered in more technical detail later in
      the course).
     </div>
     <h3>Cutover Strategy &amp; Cutover Period</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Term</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Cutover Strategy</td>
        <td>
         The <strong>planning</strong> around when to upload the
         data — during this window, the client is requested to
         <strong>stop business operations</strong>, to avoid any
         data mismatch/discrepancy between what's being uploaded and
         what's actually happening live
        </td>
       </tr>
       <tr>
        <td>Cutover Period</td>
        <td>
         The actual <strong>time taken</strong> to upload the data
         from legacy to SAP — typically around
         <strong>2 days</strong>
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>Scheduling tip:</strong> to minimize disruption to the
      client's business, the cutover window is usually planned around a
      weekend or a holiday — e.g., stop business only on a Saturday
      (since Sunday is already a non-working day), or align with a
      nearby holiday so the client doesn't need to halt operations on a
      regular working day.
     </div>
    </div>

    {/* <!-- Section 9: Go-Live and Support --> */}
    <div className="card green">
     <h2><span className="badge">5</span> Phase 5 — Go-Live and Support</h2>
     <div className="callout green">
      🎉 <strong>Go-Live</strong> = handing over SAP to the client. From
      this date onward, the client officially starts using SAP — end
      users begin entering their day-to-day transactions live in the
      system.
     </div>
     <div className="stepper">
      <div className="step">
       After cutover activity is complete, the team
       <strong>declares Go-Live</strong>.
      </div>
      <div className="step">
       After Go-Live, the implementation team provides
       <strong>3 months of post-production support</strong> — since
       the client is new to SAP, they're expected to run into errors,
       and the same implementation consultants stay available to help.
      </div>
      <div className="step">
       After post-production support ends, the team takes the final
       <strong>Project Closure sign-off</strong>.
      </div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Stage</th>
        <th>Duration</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Implementation (Project Preparation → Go-Live)</td>
        <td>6 months</td>
       </tr>
       <tr>
        <td>Post-production support</td>
        <td>+3 months</td>
       </tr>
       <tr>
        <td>Total time at client's site</td>
        <td className="price-final">9 months</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📌 <strong>What happens after the 3 months?</strong> By the end
      of post-production support, the client decides on a
      <strong>support project</strong> — either continuing with the
      same implementation partner (TCS) or moving to a different
      company. This decision, and the transition, is covered next.
     </div>
    </div>

    {/* <!-- Section 10: Full ASAP recap --> */}
    <div className="card">
     <h2><span className="badge">🧭</span> ASAP Methodology — Complete Picture</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Phase</th>
        <th>Key Activities</th>
        <th>Duration</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Project Preparation</td>
        <td>License, Landscape, Infrastructure, Implementation Partner (consultants/core users), Consultant Facilities, Go-Live Date</td>
        <td>—</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Business Blueprint</td>
        <td>Requirement Gathering (AS-IS), BBP Document (AS-IS + TO-BE) &amp; Sign-off</td>
        <td>3 months</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Realization</td>
        <td>Configure TO-BE into SAP (Dev), transport to Quality (Basis), Testing, User Manual + Configuration documents</td>
        <td>2 months</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Final Preparation</td>
        <td>User Training, UAT Sign-off, transport to Production (Basis), Cutover Activity</td>
        <td>1 month</td>
       </tr>
       <tr>
        <td>5</td>
        <td>Go-Live and Support</td>
        <td>Go-Live declaration, 3 months post-production support, Project Closure sign-off</td>
        <td>+3 months</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Deep-dive detail on gap analysis specifics (which documents,
      how many sign-offs, etc.) is revisited in more depth later in the
      course, closer to interview-preparation content.
     </p>
    </div>

    {/* <!-- Section 11: Support project intro --> */}
    <div className="card purple">
     <h2><span className="badge">🎫</span> Support Project — The Basics</h2>
     <div className="callout purple">
      💡 A consultant's main responsibility in a support project:
      <strong>solving the tickets raised by the client who already
       implemented SAP.</strong>
     </div>
     <p>
      A <strong>ticket</strong> means an issue or error. Importantly,
      <strong>end users do not contact consultants directly</strong> —
      the <strong>core user</strong> is the one who connects with the
      consultant regarding tickets.
     </p>
     <h3>Choosing the Support Partner</h3>
     <p>
      In this course's continuing example: implementation partner = TCS,
      client = Alchem Laboratories. Once the 9-month period
      (implementation + post-production support) is done, the client
      decides who provides ongoing support — this could be the
      <strong>same company (TCS)</strong> or a
      <strong>different company</strong> (e.g., illustratively, Infosys).
     </p>
     <div className="callout blue">
      💡 <strong>In real practice, ~99% of clients stick with the same
       implementation partner</strong> for support — at least for the
      first <strong>one to two years</strong> — because that partner
      already has complete knowledge of the configuration. Switching
      companies means going through a fresh Knowledge Transfer (KT) all
      over again, which is a real risk the client usually wants to
      avoid. After the first couple of years, if the incumbent partner
      is charging too much or the relationship isn't strong, the client
      may then consider switching to a different support partner.
     </div>
     <h3>KT When the Support Partner Changes</h3>
     <div className="callout">
      🔁 If support does move to a new company, the
      <strong>implementation partner hands over the Configuration
       document</strong> to the new support consultants. If the original
      (implementation) consultants are still available/reachable at
      that time, the new support consultants can directly clarify
      doubts with them (sometimes a dedicated online meeting is
      arranged). If the original consultants are no longer available,
      the new support team has to work purely from the configuration
      document and from core users' explanations.
     </div>
    </div>

    {/* <!-- Section 12: SLA --> */}
    <div className="card gold">
     <h2><span className="badge">📜</span> SLA — Service Level Agreement</h2>
     <div className="callout gold">
      💡 Whenever a support partner takes on a new support project, an
      agreement is signed between both parties — the
      <strong>SLA (Service Level Agreement)</strong>.
     </div>
     <p>
      As a consultant, the two pieces of information you should know
      from the SLA are: <strong>ticket priority</strong> and
      <strong>change request handling</strong>. (Commercial terms are
      also part of the SLA, but those are typically not disclosed to
      consultants.)
     </p>
     <h3>1. Priority of Tickets</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Priority</th>
        <th>Typical Resolution Time</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>High</td>
        <td className="price-final">4 hours</td>
       </tr>
       <tr>
        <td>Medium</td>
        <td className="price-final">24 hours</td>
       </tr>
       <tr>
        <td>Low</td>
        <td className="price-final">48 hours</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 The SLA clearly defines <strong>which tickets fall under which
       priority</strong> and their resolution timeframes. These numbers
      are illustrative — the exact times differ from project to
      project.
     </p>
     <h3>2. Change Request</h3>
     <div className="callout red">
      ⚠️ <strong>Change Request</strong> = any new requirement the
      client asks for that is <strong>not part of the existing
       configuration</strong>. Support covers normal day-to-day issues
      only — it does <strong>not</strong> cover new requirements.
     </div>
     <div className="stepper">
      <div className="step">
       When a change request comes in, consultants prepare a
       <strong>Change Request document</strong>, estimating how many
       functional man-days and technical man-days it will take.
      </div>
      <div className="step">
       This document is sent to the core user.
      </div>
      <div className="step">
       If the core user accepts the estimated days, only then does
       work begin on the change request.
      </div>
      <div className="step">
       The support company (e.g., Infosys, illustratively) charges
       the client <strong>extra</strong> for a change request — this
       is separate from the standard annual support fee (e.g., ₹15
       crores/year for normal ticket support).
      </div>
     </div>
    </div>

    {/* <!-- Section 13: Support project kickoff --> */}
    <div className="card brown">
     <h2><span className="badge">📢</span> Support Project — Kickoff Meeting</h2>
     <p>
      Just like an implementation project, when a support partner gets a
      new support project, the <strong>support partner's
       management</strong> conducts a <strong>Kickoff Meeting</strong>,
      inviting all consultants who will be involved.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Topic Discussed</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Introduction about the client</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Rules and regulations of the client</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Roles and responsibilities of consultants</td>
       </tr>
       <tr>
        <td>4</td>
        <td>
         Support project period (e.g., 1 year or 2 years) — instead
         of a Go-Live date, since the client is already live
        </td>
       </tr>
       <tr>
        <td>5</td>
        <td>
         Project starting date — when the support consultants
         actually begin (this is the main point of the meeting)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      💡 <strong>No Go-Live date here</strong> — since this is a
      support project on an already-live system, item 4 instead covers
      the <strong>support project period</strong> (commonly an initial
      1-year engagement).
     </div>
     <h3>Worked Example — Support Team Size</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Module</th>
        <th>Team Size</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>SD</td>
        <td>15</td>
       </tr>
       <tr>
        <td>FICO</td>
        <td>15</td>
       </tr>
       <tr>
        <td>ABAP</td>
        <td>10</td>
       </tr>
       <tr>
        <td>MM</td>
        <td>4</td>
       </tr>
       <tr>
        <td>PP</td>
        <td>4</td>
       </tr>
       <tr>
        <td>Basis</td>
        <td>2</td>
       </tr>
       <tr>
        <td><strong>Total</strong></td>
        <td><strong>50</strong></td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 As with implementation projects, SD and FI(CO) typically have
      the largest team sizes on any project.
     </p>
    </div>

    {/* <!-- Section 14: KT process for support --> */}
    <div className="card indigo">
     <h2><span className="badge">🔁</span> KT (Knowledge Transfer) — Support Project Onboarding</h2>
     <p>
      After the Kickoff Meeting, all consultants travel to the client's
      place for <strong>KT (Knowledge Transfer)</strong>. This typically
      takes about <strong>3 weeks, up to a maximum of around 1
       month</strong>.
     </p>
     <div className="stepper">
      <div className="step">
       The implementation partner (TCS) hands over the previously
       prepared <strong>Configuration document</strong> to the new
       support consultants.
      </div>
      <div className="step">
       Support consultants go through the configuration document; any
       doubts are clarified with TCS consultants if they're still
       available, or otherwise via core users (who may arrange a
       meeting with TCS consultants if needed).
      </div>
      <div className="step">
       Support consultants are given <strong>Development server
        access</strong> to check the actual configuration themselves.
      </div>
      <div className="step">
       Support consultants prepare their own
       <strong>"Support Consultants Understanding" document</strong> —
       capturing what they've understood about the client's process —
       and use it to give a <strong>reverse KT</strong> back to the
       core users, confirming their understanding is correct.
      </div>
     </div>
     <div className="callout">
      🔑 <strong>Only after KT is complete does the actual support
       project begin</strong> — tickets cannot be picked up or resolved
      before KT finishes, since the incoming team first needs to fully
      understand the configuration and process.
     </div>
     <p className="note-text">
      📌 <strong>Note (context, not part of ASAP/ECC):</strong> some
      students asked about Agile methodology — that belongs to the
      <strong>Activate methodology used in S/4HANA</strong>, which
      itself contains two approaches, <strong>Waterfall</strong> and
      <strong>Agile</strong>. This is covered separately in the
      S/4HANA course, not as part of ASAP.
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
        <td>What is the Realization phase, in one line?</td>
        <td>Configuring/mapping the client's TO-BE business process into SAP</td>
       </tr>
       <tr>
        <td>What is a "gap," and when is it addressed?</td>
        <td>A business requirement with no standard SAP solution; it's documented in a gap analysis document and worked on only after the current implementation project is complete</td>
       </tr>
       <tr>
        <td>Who moves configurations from Development to Quality server, and who does testing?</td>
        <td>The Basis Consultant moves the configurations; testing on Quality is done by consultants and core users</td>
       </tr>
       <tr>
        <td>What does the User Manual document contain?</td>
        <td>Step-by-step process of creating master data and open transaction data, with screenshots</td>
       </tr>
       <tr>
        <td>What does the Configuration document contain, and what is it used for?</td>
        <td>Screenshots of all configurations done for the client; used primarily for Knowledge Transfer (KT) to future support teams</td>
       </tr>
       <tr>
        <td>What are the four key activities in Final Preparation?</td>
        <td>User Training, UAT Sign-off, transport to Production (by Basis), and Cutover Activity</td>
       </tr>
       <tr>
        <td>What does UAT stand for?</td>
        <td>User Acceptance Test(ing)</td>
       </tr>
       <tr>
        <td>What are the three sign-offs typically taken across an implementation project?</td>
        <td>BBP sign-off, UAT sign-off, and Project Closure sign-off</td>
       </tr>
       <tr>
        <td>What is Cutover Activity?</td>
        <td>Uploading master data and open transaction data from the legacy (non-SAP) system into SAP</td>
       </tr>
       <tr>
        <td>What is the difference between Cutover Strategy and Cutover Period?</td>
        <td>Cutover Strategy is the planning of when to upload data (and requesting the client to pause business during that window); Cutover Period is the actual time taken to do the upload (typically ~2 days)</td>
       </tr>
       <tr>
        <td>Which tools are used to upload legacy data during cutover?</td>
        <td>LSMW, BDC, and BAPI</td>
       </tr>
       <tr>
        <td>What does "Go-Live" mean?</td>
        <td>Handing over SAP to the client — from that date, the client (end users) start using SAP for live day-to-day transactions</td>
       </tr>
       <tr>
        <td>How long is post-production support typically provided after Go-Live?</td>
        <td>3 months, bringing total time at the client's site to about 9 months (6 + 3) in this example</td>
       </tr>
       <tr>
        <td>What is a consultant's core responsibility in a support project?</td>
        <td>Solving the tickets raised by the client who already implemented SAP</td>
       </tr>
       <tr>
        <td>Do end users contact consultants directly for support?</td>
        <td>No — the core user is the point of contact between end users/client and the consultant</td>
       </tr>
       <tr>
        <td>Why do most clients continue with the same implementation partner for support?</td>
        <td>That partner already has full knowledge of the configuration, avoiding the risk and repeated Knowledge Transfer (KT) effort of onboarding a new company</td>
       </tr>
       <tr>
        <td>What is SLA, and what two things should a consultant know from it?</td>
        <td>Service Level Agreement — a consultant should know the priority of tickets (and their resolution time) and how change requests are handled; commercial terms are usually not disclosed to consultants</td>
       </tr>
       <tr>
        <td>What are typical resolution times for High, Medium, and Low priority tickets?</td>
        <td>High: 4 hours, Medium: 24 hours, Low: 48 hours (illustrative — varies by project)</td>
       </tr>
       <tr>
        <td>What is a Change Request, and how is it billed?</td>
        <td>A new requirement from the client that isn't part of the existing configuration; it's documented in a Change Request document with estimated man-days, and — once the core user accepts — billed separately/extra from the standard support fee</td>
       </tr>
       <tr>
        <td>What's different about the Kickoff Meeting for a support project vs. an implementation project?</td>
        <td>There's no Go-Live date; instead, it covers the support project period (e.g., 1 year) alongside introduction, rules, roles, and the project starting date</td>
       </tr>
       <tr>
        <td>How long does the KT (Knowledge Transfer) process typically take when a new support partner comes onboard?</td>
        <td>About 3 weeks, up to a maximum of roughly 1 month</td>
       </tr>
       <tr>
        <td>What is "reverse KT"?</td>
        <td>After going through the configuration document and gaining understanding, support consultants prepare their own understanding document and use it to confirm their grasp of the process back to the core users</td>
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
         No specific transaction codes were introduced in this
         session. Tools referenced for cutover data upload —
         <strong>LSMW, BDC, BAPI</strong> — were named conceptually,
         with detailed technical usage promised later in the course.
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
        <td>Realization phase duration</td>
        <td>2 months</td>
       </tr>
       <tr>
        <td>Final Preparation phase duration</td>
        <td>1 month</td>
       </tr>
       <tr>
        <td>Post-production support duration</td>
        <td>3 months (after Go-Live)</td>
       </tr>
       <tr>
        <td>Total onsite duration (example)</td>
        <td>9 months (6 implementation + 3 post-production support)</td>
       </tr>
       <tr>
        <td>Cutover period</td>
        <td>~2 days (typically scheduled over a weekend/holiday)</td>
       </tr>
       <tr>
        <td>Cutover data upload tools</td>
        <td>LSMW, BDC, BAPI</td>
       </tr>
       <tr>
        <td>Sign-offs across an implementation project</td>
        <td>BBP sign-off, UAT sign-off, Project Closure sign-off</td>
       </tr>
       <tr>
        <td>Example support fee</td>
        <td>₹15 crores / year (illustrative, for normal ticket support only)</td>
       </tr>
       <tr>
        <td>Ticket priority SLA (example)</td>
        <td>High: 4 hrs, Medium: 24 hrs, Low: 48 hrs</td>
       </tr>
       <tr>
        <td>Typical support project initial period</td>
        <td>1 year (renewable)</td>
       </tr>
       <tr>
        <td>Example support team size</td>
        <td>50 total — SD 15, FICO 15, ABAP 10, MM 4, PP 4, Basis 2</td>
       </tr>
       <tr>
        <td>KT duration for a new support partner</td>
        <td>~3 weeks, up to ~1 month</td>
       </tr>
       <tr>
        <td>S/4HANA methodology note</td>
        <td>Activate methodology (contains Waterfall and Agile approaches) — covered in the separate S/4HANA course</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed the ASAP methodology walkthrough.
      <strong>Realization</strong> (2 months) is where consultants get
      Development server access and configure the TO-BE process into
      SAP — with unsolvable requirements logged as gaps for later —
      followed by Basis moving configurations to Quality for testing,
      and the preparation of the User Manual and Configuration
      documents (the latter serving as the key KT artifact).
      <strong>Final Preparation</strong> (1 month) covers User
      Training, UAT sign-off (the second of three project sign-offs),
      the Basis-led transport to Production, and Cutover Activity —
      uploading legacy master data and open transaction data into SAP
      within a tightly planned 2-day Cutover Period. <strong>Go-Live and
       Support</strong> then hands the system over to the client,
      followed by 3 months of post-production support and a final
      Project Closure sign-off — for 9 months total at the client's
      site in this example. The lecture then pivoted into
      <strong>Support Projects</strong>: consultants solve tickets
      raised (via core users, never directly by end users) by clients
      already live on SAP; most clients retain their original
      implementation partner for support (at least for the first 1–2
      years) to avoid repeating Knowledge Transfer; every support
      engagement runs under an <strong>SLA</strong> defining ticket
      priorities/resolution times and how <strong>Change
       Requests</strong> (new, unconfigured requirements) are separately
      scoped and billed; and a new support engagement itself begins
      with its own Kickoff Meeting and a 3-week-to-1-month
      <strong>KT</strong> process before any tickets can actually be
      picked up.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>Realization = configure TO-BE into SAP</strong>;
       unsupported requirements become <strong>gaps</strong>, deferred
       to post-project work
      </li>
      <li>
       Configuration document = the core
       <strong>KT (Knowledge Transfer)</strong> artifact for future
       support teams
      </li>
      <li>
       <strong>Cutover Activity</strong> = uploading legacy master +
       open transaction data into SAP, using
       <strong>LSMW/BDC/BAPI</strong>, within a short (~2-day)
       <strong>Cutover Period</strong> planned around a business pause
      </li>
      <li>
       <strong>Go-Live</strong> = handing SAP over to the client;
       followed by <strong>3 months post-production support</strong>
       and a <strong>Project Closure sign-off</strong>
      </li>
      <li>
       In support, consultants solve <strong>tickets</strong> routed
       through <strong>core users</strong> (never directly from end
       users), governed by an <strong>SLA</strong> covering ticket
       priority/timeframes and <strong>Change Request</strong> billing
      </li>
      <li>
       A new support engagement starts with its own
       <strong>Kickoff Meeting</strong>, followed by a
       <strong>KT process (~3 weeks–1 month)</strong> before tickets
       can be picked up
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Continuing the support project
      scenario in more depth (the ongoing KT process and day-to-day
      ticket handling).
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 3 Notes — Realization, Final Preparation, Go-Live &amp; Support
    Project Basics 🎓
   </p>
  </div>
 );
};

export default Enterprise3;
