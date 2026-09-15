const Enterprise1 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-orange">
        <h1>🗄️ Lecture 1 — SAP Landscape &amp; ASAP Methodology: Project Preparation</h1>
        <p>
          SAP SD | Servers, licensing math, and the first phase of a real
          implementation project
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 1: What is SAP Landscape --> */}
        <div className="card">
          <h2><span className="badge">1</span> What Is SAP Landscape?</h2>
          <div className="callout">
            💡 <strong>Landscape</strong> means the <strong>arrangement of
              servers</strong>. Any client who wants to implement SAP must first
            purchase servers.
          </div>
          <p>
            SAP suggests purchasing a <strong>minimum of three
              servers</strong>: Development, Quality, and Production. In the
            market, companies like <strong>IBM, HP, HCL, and Dell</strong>
            supply these servers.
          </p>
          <h3>On-Premise vs. Cloud</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Model</th>
                <th>What It Means</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>On-premise</td>
                <td>
                  The client purchases the servers directly (e.g., from IBM,
                  HP, HCL, Dell) and the client itself maintains those servers
                </td>
              </tr>
              <tr>
                <td>Cloud</td>
                <td>
                  The client uses a cloud vendor such as
                  <strong>Amazon Web Services (AWS)</strong> — the servers are
                  maintained by the vendor (Amazon) instead of the client
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Section 2: The three mandatory servers --> */}
        <div className="card orange">
          <h2>
            <span className="badge">2</span> The Three Mandatory Servers
          </h2>
          <div className="flow">
            <div className="flow-step">Development Server</div>
            <div className="arrow">➜</div>
            <div className="flow-step flow-teal">Quality Server</div>
            <div className="arrow">➜</div>
            <div className="flow-step flow-purple">Production Server</div>
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Server</th>
                <th>Purpose</th>
                <th>Used By</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Development Server</td>
                <td>
                  Used to <strong>configure the client's business process
                    into SAP</strong> — this is where consultants actually do
                  the configuration work
                </td>
                <td>Consultants</td>
              </tr>
              <tr>
                <td>Quality Server</td>
                <td>
                  Used to <strong>test the scenarios</strong> — once
                  configurations are complete in Development, they are moved
                  here to be verified before going live
                </td>
                <td>Consultants and Core Users</td>
              </tr>
              <tr>
                <td>Production Server</td>
                <td>
                  The <strong>live server</strong> where users enter
                  day-to-day live transactions in SAP (e.g., real Enquiries,
                  Quotations, Sales Orders, Deliveries, Invoices)
                </td>
                <td>Core Users and End Users</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🔁 <strong>Moving configurations between servers:</strong>
            whenever consultants do configurations in the Development server,
            the system automatically saves that work under a particular
            <strong>Transport Request (TR)</strong> number. This TR is what
            actually carries the configuration from one server to the
            next — Development → Quality first, and eventually Quality →
            Production. Nothing moves between servers without going through
            this TR mechanism; it's the standard SAP way of packaging and
            transporting a set of configuration changes.
          </div>
          <p>
            After the configurations are transported into the Quality
            server using the TR, the team then performs
            <strong>testing</strong> there — checking whether what was
            configured in Development is actually correct before it's allowed
            anywhere near the live system.
          </p>
        </div>

        {/* <!-- Section 3: Additional servers --> */}
        <div className="card purple">
          <h2><span className="badge">3</span> Additional Servers: Sandbox &amp; Pre-Production</h2>
          <p>
            Three servers are the <strong>minimum</strong> — some clients opt
            for additional servers as well:
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Server</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sandbox</td>
                <td>
                  For rough use — R&amp;D purposes. Consultants can do
                  anything here without any risk to real project
                  configurations
                </td>
              </tr>
              <tr>
                <td>Pre-Production</td>
                <td>
                  A <strong>staging server</strong> — essentially a mirror
                  image of the Production server. Used mainly in
                  <strong>support scenarios</strong>: since consultants don't
                  have access to the actual Production server, any live error
                  is instead analyzed on Pre-Production, which holds the same
                  configuration and data context
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout">
            🧩 <strong>Not the same as Quality:</strong> the normal Quality
            (testing) server does not carry live production data or reflect
            the exact live configuration state. Pre-Production specifically
            mirrors Production — configuration <em>and</em> data — which is
            why it's used for analyzing production-scenario errors that a
            plain testing server can't replicate. In a support project,
            consultants never get direct access to the actual Production
            server to debug or trace an issue; Pre-Production exists
            precisely to give consultants a safe place to reproduce and
            investigate that same error (e.g., putting a trace) without
            touching the live system.
          </div>
        </div>

        {/* <!-- Section 4: Core user vs end user --> */}
        <div className="card teal">
          <h2><span className="badge">4</span> Core User vs. End User</h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Role</th>
                <th>Definition</th>
                <th>Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Core User</td>
                <td>
                  An employee of the client who has <strong>good
                    experience and exposure</strong> in the client's business
                  process. Every department/module appoints core users, and
                  core users are the ones who perform testing on the Quality
                  server
                </td>
                <td>Senior managers</td>
              </tr>
              <tr>
                <td>End User</td>
                <td>
                  An employee of the client who performs the
                  <strong>day-to-day transactions</strong> in SAP (on the
                  Production server)
                </td>
                <td>Regular staff entering orders/deliveries/invoices</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ <strong>Putting it together:</strong> Development server →
            used by <strong>consultants</strong> for configuration. Quality
            server → used by <strong>consultants and core users</strong> for
            testing. Production server → used by
            <strong>core users and end users</strong> for live day-to-day
            transactions.
          </div>
        </div>

        {/* <!-- Section 5: Recap client/implementation partner --> */}
        <div className="card gold">
          <h2>
            <span className="badge">5</span> Recap — Client, Implementation
            Partner &amp; Consultants
          </h2>
          <p>
            Continuing last class's running example: <strong>Alchem
              Laboratories Limited</strong> — a pharma company — is the
            <strong>client</strong> that wants to implement SAP.
            <strong>TCS</strong> is the <strong>implementation
              partner</strong> — the software company chosen to implement SAP
            for Alchem.
          </p>
          <div className="flow">
            <div className="flow-step">Alchem Laboratories (Client)</div>
            <div className="arrow">➜</div>
            <div className="flow-step flow-teal">TCS (Implementation Partner)</div>
            <div className="arrow">➜</div>
            <div className="flow-step flow-gold">Consultants (Employees of TCS)</div>
          </div>
          <p>
            Consultants are <strong>employees of TCS</strong>. Through TCS,
            consultants go to Alchem's place and implement SAP — studying the
            client's business process and configuring it into the system.
          </p>
          <p className="note-text">
            Other companies that implement SAP for clients (implementation
            partners in general) include TCS, Wipro, IBM, Accenture, Dell, and
            Capgemini — any of these can be finalized as the implementation
            partner for a given client.
          </p>
        </div>

        {/* <!-- Section 6: ASAP methodology --> */}
        <div className="card indigo">
          <h2><span className="badge">6</span> ASAP Methodology — The Five Phases</h2>
          <div className="callout indigo">
            💡 Any client implementing SAP follows <strong>ASAP
              methodology</strong> for ECC projects. ASAP stands for
            <strong>Accelerated SAP</strong> — it consists of guidelines
            (a step-by-step process) for implementing SAP.
          </div>
          <p className="note-text">
            📌 S/4HANA projects instead follow the
            <strong>Activate methodology</strong> — that is a separate topic;
            this course currently focuses on ASAP methodology for ECC.
          </p>
          <div className="stepper">
            <div className="step"><strong>Project Preparation</strong></div>
            <div className="step"><strong>Business Blueprint</strong></div>
            <div className="step"><strong>Realization</strong></div>
            <div className="step"><strong>Final Preparation</strong></div>
            <div className="step"><strong>Go-Live and Support</strong></div>
          </div>
          <div className="callout red">
            ⚠️ <strong>Important:</strong> as consultants, we are
            <strong>not involved</strong> in Phase 1 (Project Preparation) —
            our role begins from Phase 2 (Business Blueprint) onward.
          </div>
        </div>

        {/* <!-- Section 7: Phase 1 - who's involved --> */}
        <div className="card brown">
          <h2>
            <span className="badge">7</span> Phase 1: Project Preparation — Who's
            Involved
          </h2>
          <p>
            Since consultants don't participate in this phase, it's driven
            entirely by <strong>management</strong> from both sides:
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Side</th>
                <th>Roles Involved</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Implementation Partner (e.g., TCS)</td>
                <td>
                  Business Development Managers (BDMs), Delivery Head, Project
                  Manager, Technical Head
                </td>
              </tr>
              <tr>
                <td>Client (e.g., Alchem Laboratories)</td>
                <td>
                  Vice President – IT, Vice President – Finance, their
                  Project Manager, their Technical Experts
                </td>
              </tr>
            </tbody>
          </table>
          <p>
            The two core activities decided in this phase are
            <strong>License</strong> and <strong>Landscape</strong>.
          </p>
        </div>

        {/* <!-- Section 8: Activity 1 - License --> */}
        <div className="card green">
          <h2><span className="badge">8</span> Activity 1 — License (Worked Example)</h2>
          <div className="callout">
            💡 Any client implementing SAP must
            <strong>purchase a license from SAP</strong>. The number of
            licenses is based on the <strong>number of users</strong>.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Item</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Number of users at Alchem (example)</td>
                <td>1,500</td>
              </tr>
              <tr>
                <td>Cost per license (approx.)</td>
                <td>₹80,000</td>
              </tr>
              <tr>
                <td>Total license cost (1,500 × ₹80,000)</td>
                <td className="price-final">₹12 crores</td>
              </tr>
              <tr>
                <td>AMC (Annual Maintenance Cost) — 22% of license cost, paid every year</td>
                <td className="price-final">₹2.6 crores / year</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🔑 <strong>License validity:</strong> as long as the client keeps
            paying the 22% AMC every year, the license doesn't expire. Stop
            paying AMC, and the client loses support from SAP. Separately,
            SAP's support for <strong>ECC specifically ends by the close of
              2027</strong> — after that, every client must have migrated to
            S/4HANA (this conversion is itself called a
            <strong>migration project</strong>).
          </div>
          <h3>Developer IDs — A Separate License Category</h3>
          <p>
            ABAPers (who do coding) need <strong>developer IDs</strong> — a
            separate license type from regular user licenses. Only developer
            IDs are permitted to do coding. So if a client needs 1,500 user
            licenses, they typically purchase some extra licenses on top
            (e.g., ~100 more) to cover TCS consultants and ABAPer developer
            IDs used on the Development and Quality servers.
          </p>
          <div className="callout">
            📌 <strong>Which server needs the "user" license?</strong> The
            1,500-user license figure is mainly for the
            <strong>Production server</strong> (the live server used by
            end users). The extra licenses for consultants/developers cover
            usage on the Development and Quality servers — so if a client
            needs 1,500 licenses for its actual end users, it will typically
            purchase somewhat more than 1,500 in total (e.g., an extra ~100)
            specifically to cover TCS consultants and ABAPer developer IDs
            working in Development/Quality.
          </div>
          <h3>Is the License Cost or the AMC % Fixed?</h3>
          <div className="callout blue">
            💬 <strong>Neither figure is a hard, universal constant:</strong>
            <ul>
              <li>
                The <strong>per-license cost</strong> (~₹80,000 in this
                example) can vary based on the total <strong>volume</strong>
                of licenses purchased — a client buying a very large number of
                licenses may get a reduced per-unit rate, while a client
                buying very few may pay more per license. This pricing
                decision is made by SAP.
              </li>
              <li>
                The <strong>AMC rate</strong> is commonly quoted as
                <strong>22%</strong> of license cost, and that's the figure
                used throughout this example — but it, too, can vary; 22% is
                simply the prevailing/typical rate rather than a fixed law.
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Section 9: Activity 2 - Landscape / sizing / payment breakdown --> */}
        <div className="card red">
          <h2>
            <span className="badge">9</span> Activity 2 — Landscape (Servers &amp;
            Sizing) + Full Payment Breakdown
          </h2>
          <p>
            The second activity decided in Project Preparation is
            <strong>Landscape</strong> — i.e., deciding the servers. The
            <strong>Technical Head from TCS</strong> and the
            <strong>Technical Expert from the client</strong> jointly decide
            the <strong>sizing</strong> of the servers.
          </p>
          <div className="callout purple">
            🔧 <strong>Sizing</strong> means deciding the server
            configuration: RAM, hard disk, and processor specs — based on the
            client's expected volume of business.
          </div>
          <h3>Worked Example — Three Separate Payments</h3>
          <p>
            It's a common point of confusion that all project costs go to one
            party. In reality, a client implementing SAP makes
            <strong>three distinct payments</strong> to three different
            parties:
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>#</th>
                <th>Paid To</th>
                <th>For</th>
                <th>Example Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Implementation Partner (TCS)</td>
                <td>
                  Implementing SAP — studying and configuring the client's
                  business process
                </td>
                <td className="price-final">₹50 crores</td>
              </tr>
              <tr>
                <td>2</td>
                <td>SAP</td>
                <td>User licenses (1,500 users)</td>
                <td className="price-final">₹12 crores</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Hardware vendor (e.g., IBM)</td>
                <td>Servers (Development, Quality, Production)</td>
                <td className="price-final">₹5 crores (example)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            ⚠️ <strong>These are three fully separate costs</strong> — the
            ₹50 crores to the implementation partner does
            <strong>not</strong> include the SAP license cost, and the SAP
            license cost does not include the server hardware cost. All three
            are billed independently.
          </div>
          <div className="callout">
            🙅 <strong>Common misconception — servers are NOT purchased from
              the implementation partner.</strong> TCS (the implementation
            partner in this example) only implements/configures SAP for the
            client and is paid for that work. The physical servers themselves
            are purchased separately by the client directly from a hardware
            vendor — IBM, HP, HCL, or Dell — after the client (technical
            experts) finalizes quotations and selects one supplier.
          </div>
          <div className="callout">
            💳 <strong>How the implementation fee is actually paid:</strong>
            the client does not pay the full ₹50 crores to the implementation
            partner upfront. It's paid in a
            <strong>phase-wise / milestone-based billing</strong> model
            (also called activity-based billing) — a percentage is released
            after each phase/activity is completed and reviewed by the
            client, not as one lump sum at the start. The team stays on-site
            anywhere from roughly <strong>6 to 10 months</strong>, depending
            on the size/scope of the project, and billing tracks progress
            through that period rather than being front-loaded.
          </div>
          <p className="note-text">
            📌 In contrast, the AMC (₹2.6 crores/year in this example) is paid
            to <strong>SAP</strong>, not to the implementation partner — it's
            an ongoing cost separate from both the one-time license payment
            and the one-time implementation fee. To summarize the full money
            trail: Payment 1 → Implementation Partner (one-time,
            phase-wise/milestone billed) → for implementation work. Payment 2
            → SAP (one-time) → for user licenses, followed by AMC (recurring,
            annual) → SAP → to keep that license active/supported. Payment 3
            → Hardware Vendor (one-time) → for the physical servers.
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
                <td>What does "SAP Landscape" mean?</td>
                <td>The arrangement of servers</td>
              </tr>
              <tr>
                <td>What is the minimum number of servers SAP recommends, and what are they?</td>
                <td>Three — Development, Quality, and Production</td>
              </tr>
              <tr>
                <td>What is the Development server used for, and by whom?</td>
                <td>Configuring the client's business process into SAP; used by consultants</td>
              </tr>
              <tr>
                <td>What is the Quality server used for, and by whom?</td>
                <td>Testing the scenarios configured in Development; used by consultants and core users</td>
              </tr>
              <tr>
                <td>What is the Production server, and who uses it?</td>
                <td>The live server where day-to-day live transactions are entered; used by core users and end users</td>
              </tr>
              <tr>
                <td>How are configurations moved from Development to Quality server?</td>
                <td>Via a Transport Request (TR) — configurations saved in Development are captured under a TR number and transported to the next server</td>
              </tr>
              <tr>
                <td>What is a Sandbox server used for?</td>
                <td>Rough use / R&amp;D — consultants can experiment freely without affecting real project configurations</td>
              </tr>
              <tr>
                <td>What is a Pre-Production server, and why is it needed?</td>
                <td>A staging server that mirrors Production (config and data); used in support scenarios to analyze live errors, since consultants don't have direct access to the actual Production server</td>
              </tr>
              <tr>
                <td>What is the difference between a Core User and an End User?</td>
                <td>A Core User is an experienced client employee (e.g., senior manager) who performs testing; an End User is a client employee who performs day-to-day live transactions in SAP</td>
              </tr>
              <tr>
                <td>What is ASAP methodology, and what does it stand for?</td>
                <td>Accelerated SAP — a step-by-step set of guidelines for implementing SAP on ECC projects</td>
              </tr>
              <tr>
                <td>Which methodology is followed for S/4HANA projects instead of ASAP?</td>
                <td>The Activate methodology</td>
              </tr>
              <tr>
                <td>What are the five phases of ASAP methodology?</td>
                <td>Project Preparation, Business Blueprint, Realization, Final Preparation, Go-Live and Support</td>
              </tr>
              <tr>
                <td>In which phase do consultants first get involved?</td>
                <td>Business Blueprint (Phase 2) — consultants are not involved in Project Preparation (Phase 1)</td>
              </tr>
              <tr>
                <td>Who is involved in the Project Preparation phase?</td>
                <td>Management from the implementation partner (BDM, Delivery Head, Project Manager, Technical Head) and management from the client (VP-IT, VP-Finance, Project Manager, Technical Experts)</td>
              </tr>
              <tr>
                <td>What are the two main activities decided during Project Preparation?</td>
                <td>License and Landscape</td>
              </tr>
              <tr>
                <td>What does "sizing" mean in the Landscape activity?</td>
                <td>Deciding server specifications — RAM, hard disk, processor — based on the client's expected business volume</td>
              </tr>
              <tr>
                <td>Why do ABAPers need developer IDs instead of regular user licenses?</td>
                <td>Only developer IDs are permitted to perform coding; they are a separate license category from end-user licenses</td>
              </tr>
              <tr>
                <td>What three separate payments does a client typically make when implementing SAP?</td>
                <td>Payment to the implementation partner (implementation fee), payment to SAP (user licenses), and payment to a hardware vendor (servers)</td>
              </tr>
              <tr>
                <td>Is the implementation fee paid as one lump sum?</td>
                <td>No — it's typically paid phase-wise / milestone-based (activity-based billing), released as each project phase/activity is completed</td>
              </tr>
              <tr>
                <td>Are the servers purchased from the implementation partner?</td>
                <td>No — the implementation partner (e.g., TCS) is only paid for implementation work; servers are purchased separately by the client directly from a hardware vendor such as IBM, HP, HCL, or Dell</td>
              </tr>
              <tr>
                <td>Is the per-license cost or the AMC percentage fixed across all clients?</td>
                <td>No — both can vary. Per-license cost can depend on the volume of licenses purchased (SAP's pricing decision), and the AMC rate, while commonly around 22%, is not a fixed universal figure</td>
              </tr>
              <tr>
                <td>Does an SAP license ever expire?</td>
                <td>Not as long as the client continues paying AMC every year; stopping AMC payments means losing SAP's support. Separately, ECC itself loses SAP support entirely at the end of 2027, regardless of AMC payment, requiring migration to S/4HANA</td>
              </tr>
              <tr>
                <td>Roughly how long does an implementation team stay on-site at the client?</td>
                <td>Typically around 6 to 10 months, depending on the size and scope of the project</td>
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
                  covered SAP Landscape (servers), ASAP methodology, and the
                  Project Preparation phase at a conceptual/project level.
                  Hands-on T-codes begin once the course reaches actual
                  configuration (Enterprise Structure onward).
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
                <td>Minimum servers recommended by SAP</td>
                <td>3 — Development, Quality, Production</td>
              </tr>
              <tr>
                <td>Optional additional servers</td>
                <td>Sandbox (R&amp;D), Pre-Production (staging mirror of Production)</td>
              </tr>
              <tr>
                <td>Server supplier companies</td>
                <td>IBM, HP, HCL, Dell</td>
              </tr>
              <tr>
                <td>Cloud vendor example</td>
                <td>Amazon Web Services (AWS)</td>
              </tr>
              <tr>
                <td>Mechanism to move config between servers</td>
                <td>Transport Request (TR)</td>
              </tr>
              <tr>
                <td>ASAP methodology — used for</td>
                <td>ECC implementation projects</td>
              </tr>
              <tr>
                <td>Activate methodology — used for</td>
                <td>S/4HANA implementation projects</td>
              </tr>
              <tr>
                <td>ASAP's 5 phases (in order)</td>
                <td>Project Preparation → Business Blueprint → Realization → Final Preparation → Go-Live and Support</td>
              </tr>
              <tr>
                <td>Example license cost per user</td>
                <td>₹80,000</td>
              </tr>
              <tr>
                <td>Example total license cost (1,500 users)</td>
                <td>₹12 crores</td>
              </tr>
              <tr>
                <td>AMC rate</td>
                <td>~22% of license cost, paid every year</td>
              </tr>
              <tr>
                <td>Example implementation fee (to TCS)</td>
                <td>₹50 crores (billed phase-wise/milestone-based)</td>
              </tr>
              <tr>
                <td>Example server hardware cost (to IBM)</td>
                <td>₹5 crores (illustrative)</td>
              </tr>
              <tr>
                <td>ECC support end date</td>
                <td>End of 2027</td>
              </tr>
              <tr>
                <td>Typical on-site implementation duration</td>
                <td>~6 to 10 months, depending on project size/scope</td>
              </tr>
              <tr>
                <td>Per-license cost / AMC rate variability</td>
                <td>Both can vary by client/volume; ₹80,000 and 22% used here are illustrative, not fixed</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Extra: Summary --> */}
        <div className="card">
          <h2><span className="badge">📝</span> Summary</h2>
          <p>
            This lecture unpacked SAP Landscape — the arrangement of servers a
            client must purchase before implementation: a mandatory
            Development, Quality, and Production server, with optional
            Sandbox and Pre-Production servers for R&amp;D and support
            scenarios respectively. Configurations move between servers via
            Transport Requests (TR), and each server has its own
            audience — consultants on Development, consultants plus core
            users on Quality, and core users plus end users on the live
            Production server. The lecture then moved into ASAP (Accelerated
            SAP) methodology, the step-by-step framework for ECC
            implementations, structured into five phases: Project
            Preparation, Business Blueprint, Realization, Final Preparation,
            and Go-Live and Support — with consultants only joining from
            Phase 2 onward. Phase 1 (Project Preparation), driven entirely by
            management from both the implementation partner and the client,
            covers two key activities: deciding the <strong>License</strong>
            (based on user count, plus separate developer IDs for ABAPers,
            with a recurring 22% AMC) and the <strong>Landscape</strong>
            (server sizing based on business volume) — reinforced with a
            worked example showing that a client makes three entirely
            separate payments: to the implementation partner, to SAP for
            licenses, and to the hardware vendor for servers.
          </p>
        </div>

        {/* <!-- Best Practice / Next Class --> */}
        <div className="card">
          <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
          <ul>
            <li>
              <strong>Landscape = arrangement of servers</strong>; minimum
              three (Development, Quality, Production), with Sandbox and
              Pre-Production as optional add-ons
            </li>
            <li>
              <strong>Transport Request (TR)</strong> is the mechanism that
              moves configuration from one server to the next
            </li>
            <li>
              Consultants work on Development (config) and Quality
              (testing, with core users); Production is the live system used
              by core users and end users
            </li>
            <li>
              <strong>ASAP methodology</strong> (ECC) has five phases:
              Project Preparation → Business Blueprint → Realization → Final
              Preparation → Go-Live and Support — consultants join from
              Phase 2
            </li>
            <li>
              Phase 1 (<strong>Project Preparation</strong>) is driven purely
              by management (both sides) and decides
              <strong>License</strong> and <strong>Landscape</strong>
            </li>
            <li>
              A client's SAP implementation involves
              <strong>three separate payments</strong>: implementation
              partner fee, SAP license cost, and server hardware cost — never
              bundled into one
            </li>
          </ul>
          <div className="callout green">
            📅 <strong>Next class:</strong> Continuing Project Preparation
            phase activities, then moving into Phase 2 — Business Blueprint.
          </div>
        </div>
      </div>
      <p className="footer-note">
        Lecture 1 Notes — SAP Landscape &amp; ASAP Methodology: Project
        Preparation 🎓
      </p>
    </div>
  );
};

export default Enterprise1;
