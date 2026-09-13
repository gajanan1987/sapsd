const demo1 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-gold">
    <h1>🏢 Demo 1 — SAP Overview, Projects, Licensing &amp; Architecture</h1>
    <p>
     SAP SD | Foundation class: what SAP/ERP really is, why SAP leads the
     market, consultant types, project types, licensing economics, and the
     three-tier architecture
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 1: What is SAP / ERP --> */}
    <div className="card">
     <h2><span className="badge">1</span> What Is SAP? What Is ERP?</h2>
     <div className="callout">
      💡 <strong>SAP</strong> = Systems, Applications, and Products in
      Data Processing. <strong>SAP is an ERP package.</strong>
     </div>
     <h3>Understanding ERP</h3>
     <p>
      <strong>ERP</strong> stands for <strong>Enterprise Resource
       Planning</strong>. In simple terms, ERP specifies the
      <em>planning in all the departments of an organization</em>. Every
      organization is made up of multiple departments — Sales, Finance,
      Purchase, Production, HR, Quality, and more. Each department needs
      its own planning, but more importantly, that planning needs to work
      together.
     </p>
     <p>
      If a company has proper planning in <em>every single</em>
      department, only then will the company run successfully. If even
      <strong>one</strong> department lacks proper planning, it affects
      the <strong>total business</strong> — because departments are not
      isolated, they depend on each other. This is exactly why ERP also
      emphasizes <strong>integration between departments</strong>, not
      just planning within a single one.
     </p>
     <p>
      SAP, as a software application, is <strong>developed based on this
       ERP philosophy</strong> — it is built around the idea of planning
      and integrating every department of a business.
     </p>
     <h3>The Four M's</h3>
     <p>
      Beyond departmental planning, ERP also specifies how an
      organization should utilize its <strong>four M's</strong> — the
      four core resources every business must manage efficiently:
     </p>
     <div className="four-grid">
      <div className="mini-card mc-blue"><h4>💰 Money</h4></div>
      <div className="mini-card mc-teal"><h4>📦 Material</h4></div>
      <div className="mini-card mc-orange"><h4>⚙️ Machinery</h4></div>
      <div className="mini-card mc-purple"><h4>🧑‍🤝‍🧑 Manpower</h4></div>
     </div>
     <p className="note-text-center">
      Other ERP packages available in the market: Oracle, PeopleSoft,
      Siebel, Baan, JD Edwards, Microsoft Dynamics.
     </p>
    </div>

    {/* <!-- Section 2: Why SAP is famous + future --> */}
    <div className="card teal">
     <h2><span className="badge">2</span> Why Only SAP Is Famous — and Its Future</h2>
     <p>
      Even though several ERP packages exist in the market, SAP stands
      out for two key reasons (advantages):
     </p>
     <h3>Advantage 1: Solution for All Departments</h3>
     <p>
      SAP has its <strong>own database</strong> and offers a solution for
      <strong>every department</strong> in an organization, all within
      one integrated system. Compare this to other ERP packages — Oracle
      is mainly focused on Finance, PeopleSoft is mainly focused on HR,
      and so on. These other packages are
      <strong>department-specific</strong>; they don't provide a
      complete solution across an entire organization the way SAP does.
     </p>
     <h3>Advantage 2: Tightly Integrated Product</h3>
     <p>
      SAP is described as a <strong>tightly integrated product</strong>.
      This means: if you perform a transaction in one department, it
      <strong>automatically updates</strong> in the other departments
      wherever it is required — without any manual re-entry.
     </p>
     <p>
      <strong>Example:</strong> in the Sales department, the module is
      <strong>SD (Sales &amp; Distribution)</strong>. The typical
      transactions in SD are: Inquiry → Quotation → Sales Order →
      Delivery → Invoice. When these transactions are carried out in the
      sales department, their effects (stock movement, accounting
      entries, and so on) automatically flow into and update other
      departments — this is what "tight integration" means in practice.
     </p>
     <p>
      Together, these two advantages are the main reason SAP is more
      famous and widely adopted than any other ERP package.
     </p>
     <div className="callout green">
      🚀 <strong>The Future of SAP</strong>
      <p>
       The clearest evidence of SAP's future is a simple pattern: you
       will always find people <strong>shifting from other
        applications/domains into SAP</strong> — but you will
       <strong>never</strong> find people shifting away from SAP to
       other applications or domains.
      </p>
      <p>
       Why? Because there is effectively <strong>no competition</strong>
       to SAP — not in the present, and not in the future either. SAP
       already holds roughly <strong>80% market share</strong>; the
       remaining ~20% is split among all other ERP vendors combined.
       Even if a competitor wanted to build a product to rival SAP, it
       would take a <strong>minimum of 10 years</strong> and require
       enormous investment — and by the time they finished, SAP's share
       is projected to grow even further (toward roughly 90%),
       shrinking the remaining opportunity to around 10%. Because of
       this, competitors have little motivation to even try catching
       up.
      </p>
      <p>
       <strong>Practical implication for a career:</strong> unlike many
       other technologies where you may need to switch skill sets every
       few years as demand shifts, once you enter SAP, you can
       realistically stay in SAP <strong>until retirement</strong> —
       with strong packages, growth opportunities, and on-site
       opportunities along the way.
      </p>
     </div>
    </div>

    {/* <!-- Section 3: Versions & Enhancement Packages --> */}
    <div className="card orange">
     <h2><span className="badge">3</span> Versions &amp; Enhancement Packages</h2>
     <p>
      SAP has gone through multiple <strong>versions</strong> over the
      years: <strong>3 → 4.6 → 4.7 → 5 → 6</strong>. The difference
      between one version and the next is simply
      <strong>upgradation of the product</strong> to reflect changing
      business requirements over time.
     </p>
     <p>
      To put the scale of change into perspective: in the
      <strong>1980s</strong> the version in use was version 3; by
      <strong>2026</strong> we are still fundamentally on version
      <strong>6</strong> (released around 2007 — roughly 18–19 years
      ago). The way business was conducted in the 1980s is vastly
      different from how business is conducted today, so naturally the
      software has had to evolve.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Version Timeline</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>3 → 4.6 → 4.7 → 5 → <strong>6</strong></td>
        <td>
         Version 6 is the present version and the
         <strong>most successful version in SAP's history</strong>
        </td>
       </tr>
      </tbody>
     </table>
     <h3>Why Enhancement Packages Instead of New Versions?</h3>
     <p>
      After version 6, SAP did <strong>not</strong> want to disturb it,
      since it is the most successful version in SAP's history. But
      business requirements have continued to change even after version
      6 was released. So instead of releasing an entirely new version,
      SAP began releasing <strong>Enhancement Packages (EHP)</strong> on
      top of version 6 whenever business requirements changed.
     </p>
     <div className="path">
      <span className="node">EHP1</span><span className="sep">→</span>
      <span className="node">EHP2</span><span className="sep">→</span>
      <span className="node">EHP3</span><span className="sep">→</span>
      <span className="node">EHP4</span><span className="sep">→</span>
      <span className="node">EHP5</span><span className="sep">→</span>
      <span className="node">EHP6</span><span className="sep">→</span>
      <span className="node">EHP7</span><span className="sep">→</span>
      <span className="node">EHP8</span>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Term</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>EHP</td>
        <td>Enhancement Package</td>
       </tr>
       <tr>
        <td>Present Enhancement Package</td>
        <td><strong>EHP 8</strong></td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 4: Consultants --> */}
    <div className="card purple">
     <h2><span className="badge">4</span> Types of Consultants</h2>
     <p>
      In SAP, consultants are broadly divided into
      <strong>two types</strong>: <strong>Functional</strong>
      consultants and <strong>Technical</strong> consultants.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Type</th>
        <th>Modules / Examples</th>
        <th>What They Do</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><span className="tag tag-teal">Functional</span></td>
        <td>
         SD (Sales &amp; Distribution), FI (Finance), MM (Materials
         Management / Purchase), PP (Production Planning), QM (Quality
         Management), HR (Human Resource), and other
         department-aligned modules
        </td>
        <td>
         Study the <strong>client's business process</strong> and
         <strong>map/configure it into SAP</strong>
        </td>
       </tr>
       <tr>
        <td><span className="tag tag-orange">Technical</span></td>
        <td>ABAP</td>
        <td><strong>Coding</strong></td>
       </tr>
       <tr>
        <td><span className="tag tag-orange">Technical</span></td>
        <td>Basis</td>
        <td>
         Software installation, server maintenance, authorizations,
         and security — anything server-related and software-related
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      🎯 <strong>Common doubt: "Do I need coding knowledge to learn SD
       (or any functional module)?"</strong>
      <p>
       No. Functional consultants — whether in SD or any other
       functional module — <strong>do not require any coding
        knowledge</strong>. As a functional consultant, the job is to
       study the client's process and configure/map it into SAP. Coding
       is the responsibility of ABAP (technical) consultants, while
       server/software administration is handled by Basis consultants.
      </p>
     </div>
    </div>

    {/* <!-- Section 5: Types of Projects --> */}
    <div className="card gold">
     <h2><span className="badge">5</span> Types of Projects</h2>
     <p>
      As an SAP consultant, you will typically be placed into one of
      these project types:
     </p>
     <div className="stepper">
      <div className="step">
       <strong>Implementation Project</strong> — Configuring the
       client's business process <strong>newly</strong> into SAP, for a
       client who might currently be using a <strong>legacy
        system</strong> (i.e., a non-SAP system). Here, consultants go to
       the client's place, study the client's business process, and
       configure/map it into SAP.
      </div>
      <div className="step">
       <strong>Support Project</strong> — Solving the
       <strong>tickets</strong> raised by a client who has
       <strong>already implemented</strong> SAP. A "ticket" simply means
       an issue or error. In day-to-day business, once a client is live
       on SAP, users occasionally hit errors; these are logged as
       tickets and sent to the consultant, whose role is to
       <strong>analyze and rectify</strong> the issue (solve the ticket)
       and send the resolution back to the client. Support is also
       where real-time scenarios, real-time issues, resume preparation,
       and mock interviews are typically covered in depth.
      </div>
      <div className="step">
       <strong>Migration Project</strong> — Converting the
       <strong>existing SAP ECC</strong> clients to
       <strong>SAP S/4HANA</strong>. This is currently one of the most
       important and common project types — around
       <strong>95% of present-day projects</strong> are migration
       projects, because SAP has set an end date for ECC support:
       <strong>end of 2027</strong>. All clients currently on ECC must
       migrate to S/4HANA within this window, which is why migration
       knowledge is now considered mandatory for consultants.
      </div>
      <div className="step">
       <strong>Rollout Project</strong> — Extending an
       already-implemented SAP system to new scope, in one of two
       forms: <em>Plant rollout</em> (the company is starting a new
       manufacturing plant, and SAP needs to be configured for it) or
       <em>Company code rollout</em> (the company is expanding
       operations into a new country, requiring a new company code to
       be registered and configured in SAP for that country's
       operations).
      </div>
     </div>
     <p>
      SD in S/4HANA is largely the same as SD in ECC, but with roughly
      <strong>20–30% changes</strong> — these differences are typically
      covered in a separate S/4HANA course, along with how to execute an
      end-to-end migration project (converting ECC clients to S/4HANA).
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Project Type</th>
        <th>One-line Summary</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><span className="tag tag-purple">Implementation</span></td>
        <td>New configuration of the client's business process into SAP</td>
       </tr>
       <tr>
        <td><span className="tag tag-gold">Support</span></td>
        <td>Solving tickets for a client already live on SAP</td>
       </tr>
       <tr>
        <td><span className="tag tag-blue">Migration</span></td>
        <td>Converting existing ECC clients to S/4HANA</td>
       </tr>
       <tr>
        <td><span className="tag tag-slate">Rollout</span></td>
        <td>Plant rollout or Company code rollout for an existing SAP client</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⏳ <strong>Deadline to remember:</strong> SAP will stop support for
      ECC by the <strong>end of 2027</strong>. Every client still on ECC
      must migrate to S/4HANA within this window — this is why migration
      project knowledge, on top of solid ECC fundamentals, is in such
      high demand right now. In fact, a strong foundation in ECC is what
      makes S/4HANA easier to learn — attempting S/4HANA directly,
      without being strong in ECC, is difficult. A brand-new
      implementation done directly on S/4HANA (rather than migrated from
      ECC) is called a <strong>Greenfield implementation</strong>.
     </div>
    </div>

    {/* <!-- Section 6: Worked example - Implementation Partner & Licensing --> */}
    <div className="card green">
     <h2>
      <span className="badge">6</span> Worked Example — Implementation
      Partner &amp; Licensing
     </h2>
     <p>
      <strong>Scenario:</strong> Alchem Laboratories Limited — a pharma
      company currently running on <strong>JD Edwards</strong> — decides
      it wants to implement SAP.
     </p>
     <div className="flow">
      <div className="flow-step">Alchem (Client)</div>
      <div className="arrow">➜</div>
      <div className="flow-step">Contacts software companies</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-teal">TCS = Implementation Partner</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">Pre-sales team studies business</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">Quotation sent to Alchem</div>
     </div>
     <h3>Step 1 — Finalizing the Implementation Partner</h3>
     <p>
      To implement SAP, a client first needs to select an
      <strong>implementation partner</strong> — a software/consulting
      company that implements SAP for other businesses. Alchem (the
      <strong>client</strong>) contacts a few such companies; in this
      example, they contact <strong>TCS</strong>, which becomes the
      <strong>implementation partner</strong>.
     </p>
     <p>
      TCS sends a <strong>pre-sales team</strong> to the client's
      location to conduct a basic study — how many modules the client
      wants to implement, and what their different business processes
      look like. Based on this study, TCS prepares and sends a
      <strong>quotation</strong> to Alchem.
     </p>
     <h3>Step 2 — Purchasing Licenses</h3>
     <p>
      Once the implementation partner is finalized, the
      <strong>first activity for the client</strong> is to decide how
      many SAP <strong>licenses</strong> to purchase directly from SAP.
      This is based on the <strong>number of users</strong>.
     </p>
     <p>
      <strong>Who is a "user"?</strong> A user is an
      <strong>employee of the client</strong> who will use SAP —
      specifically, the employee who performs the client's
      <strong>day-to-day transactions</strong> in the system. For
      example, in the Sales department, day-to-day transactions include:
      Enquiry → Quotation → Sales Order → Delivery → Invoice/Billing
      document. Every department has its own set of such daily
      transactions.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Implementation cost quoted by TCS</td>
        <td className="price-final">₹50 crores</td>
       </tr>
       <tr>
        <td>Number of users at Alchem</td>
        <td>1,500</td>
       </tr>
       <tr>
        <td>Cost per license</td>
        <td>₹80,000</td>
       </tr>
       <tr>
        <td>Total license cost (1,500 × ₹80,000)</td>
        <td className="price-final">₹12 crores</td>
       </tr>
       <tr>
        <td>
         Annual Maintenance Contract (AMC) — 22% of license cost, paid
         every year
        </td>
        <td className="price-final">₹2.6 crores / year</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      💡 <strong>Key distinction:</strong> the ₹12 crore license cost is
      a <strong>one-time</strong> payment. But this is <strong>not</strong>
      a one-time income for SAP — every year, the client must
      additionally pay <strong>22% of the license cost</strong> to SAP
      as <strong>AMC (Annual Maintenance Contract / Cost)</strong>.
      Different clients will have different license costs, and the 22%
      AMC is calculated on whatever that specific client's license cost
      is.
     </div>
     <p className="note-text">
      📌 In this example: Alchem = client, TCS = implementation partner.
      As a consultant, you would be an employee of TCS (the
      implementation partner) — deployed through TCS to work at the
      client's site (Alchem), studying and configuring their business
      processes into SAP.
     </p>
    </div>

    {/* <!-- Section 7: SAP Architecture --> */}
    <div className="card cyan">
     <h2><span className="badge">7</span> SAP Architecture — Three-Tier</h2>
     <div className="callout cyan">
      🏗️ SAP architecture is a <strong>three-tier architecture</strong>,
      made up of three layers: <strong>Presentation Layer</strong>,
      <strong>Application Layer</strong>, and <strong>Database
       Layer</strong>.
     </div>
     <div className="flow">
      <div className="flow-step">🖥️ Presentation Layer</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-teal">⚙️ Application Layer</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">🗄️ Database Layer</div>
     </div>
     <h3>Presentation Layer</h3>
     <p>
      This is the <strong>system used by users</strong> — every user
      (User 1, User 2, User 3, User 4 … up to however many users the
      company has, e.g. 1,500) has their own system, and this is what we
      call the <strong>presentation layer</strong>. Whatever a user
      wants — creating a sales order, creating a delivery, generating a
      report — the request originates here, at the presentation layer.
     </p>
     <p>
      <strong>Example:</strong> one user wants a
      <em>monthly sales report</em>; another user wants a
      <em>monthly purchase report</em>. Both of these requests are
      raised from the presentation layer.
     </p>
     <h3>Application Layer</h3>
     <p>
      Any request raised at the presentation layer is
      <strong>first taken by the application layer</strong>, and
      processed <strong>in sequence</strong> — one request at a time
      (e.g., the sales-report request is completed before the
      purchase-report request is picked up next). The application layer
      then forwards the request to the database layer, and once the data
      comes back, sends it <strong>back to the presentation layer</strong>
      so the user can see the result.
     </p>
     <div className="callout green">
      🔁 <strong>The application layer acts as a mediator</strong>
      between the presentation layer and the database layer — receiving
      requests from users, passing them to the database, retrieving the
      data, and returning it to the user.
     </div>
     <h3>Database Layer</h3>
     <p>
      The database layer consists of the <strong>actual data</strong>.
      It stores and returns whatever data is requested (e.g., the
      monthly sales figures, or the monthly purchase figures) back up
      through the application layer to the presentation layer.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Layer</th>
        <th>Role</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Presentation Layer</td>
        <td>
         System used directly by users; where requests are raised and
         results are ultimately displayed
        </td>
       </tr>
       <tr>
        <td>Application Layer</td>
        <td>
         Mediator — receives requests from the presentation layer in
         sequence, forwards them to the database layer, and returns
         the retrieved data to the presentation layer
        </td>
       </tr>
       <tr>
        <td>Database Layer</td>
        <td>
         Holds the actual data; responds to requests forwarded by the
         application layer
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Users only ever interact directly with the presentation layer —
      the application layer and database layer operate in the
      background (the "back end").
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
        <td>What does SAP stand for?</td>
        <td>Systems, Applications, and Products in Data Processing</td>
       </tr>
       <tr>
        <td>What does ERP stand for?</td>
        <td>Enterprise Resource Planning</td>
       </tr>
       <tr>
        <td>What does ERP specify?</td>
        <td>
         The planning in all the departments in an organization, and
         how to utilize the four M's (Money, Material, Machinery,
         Manpower)
        </td>
       </tr>
       <tr>
        <td>Why is SAP famous over other ERP packages?</td>
        <td>
         (1) Solution for all departments in one integrated system,
         (2) Tightly integrated product — a transaction in one
         department automatically updates other departments
        </td>
       </tr>
       <tr>
        <td>What is the present SAP version / Enhancement Package?</td>
        <td>
         Version 6 (the most successful version in SAP history),
         Enhancement Package 8 (EHP8)
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between one SAP version and another?
        </td>
        <td>Upgradation of the product to match changing business requirements</td>
       </tr>
       <tr>
        <td>Why does SAP release Enhancement Packages instead of new versions after version 6?</td>
        <td>
         SAP did not want to disturb its most successful version, so
         further business-requirement changes are addressed through
         EHPs layered on top of version 6
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between functional and technical
         consultants?
        </td>
        <td>
         Functional consultants configure/map business processes into
         SAP (no coding required); technical consultants (ABAP,
         Basis) do coding, installation, and server/security
         maintenance
        </td>
       </tr>
       <tr>
        <td>Do functional consultants need coding knowledge?</td>
        <td>
         No — functional consultants study and configure the client's
         process into SAP; coding is the ABAP developer's
         responsibility
        </td>
       </tr>
       <tr>
        <td>What is an Implementation Project?</td>
        <td>
         Configuring the client's business process newly into SAP,
         for a client possibly on a legacy (non-SAP) system
        </td>
       </tr>
       <tr>
        <td>What is a Support Project?</td>
        <td>
         Solving tickets (issues/errors) raised by a client who has
         already implemented SAP
        </td>
       </tr>
       <tr>
        <td>What is a Migration Project?</td>
        <td>Converting existing SAP ECC clients to SAP S/4HANA</td>
       </tr>
       <tr>
        <td>What are the two types of Rollout Projects?</td>
        <td>Plant rollout (new manufacturing plant) and Company code rollout (new country/company)</td>
       </tr>
       <tr>
        <td>What is a Greenfield implementation?</td>
        <td>A brand-new SAP implementation built directly on S/4HANA, not migrated from ECC</td>
       </tr>
       <tr>
        <td>Who is a "user" in the context of SAP licensing?</td>
        <td>
         An employee of the client who uses SAP / performs day-to-day
         transactions in the system
        </td>
       </tr>
       <tr>
        <td>How is the number of licenses to be purchased decided?</td>
        <td>Based on the number of users at the client</td>
       </tr>
       <tr>
        <td>What is AMC, and how is it calculated?</td>
        <td>
         Annual Maintenance Contract/Cost — a recurring yearly payment
         to SAP, typically around 22% of the total license cost, paid
         in addition to the one-time license cost
        </td>
       </tr>
       <tr>
        <td>What type of architecture does SAP use?</td>
        <td>A three-tier architecture: Presentation, Application, and Database layers</td>
       </tr>
       <tr>
        <td>What role does the Application Layer play?</td>
        <td>
         It acts as the mediator between the Presentation Layer and
         the Database Layer, processing requests in sequence and
         returning data
        </td>
       </tr>
       <tr>
        <td>By when must ECC clients migrate to S/4HANA?</td>
        <td>End of 2027 (SAP's announced deadline for stopping ECC support)</td>
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
         a conceptual/orientation overview of SAP, ERP, project types,
         licensing, and architecture. Hands-on T-codes begin from the
         next class onward, starting with implementation/support
         process and Enterprise Structure.
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Key Terms Glossary --> */}
    <div className="card indigo">
     <h2><span className="badge">🔑</span> Key Terms Glossary</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Term</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Ticket</td>
        <td>An issue or error raised by the client, handled in a support project</td>
       </tr>
       <tr>
        <td>Legacy system</td>
        <td>A non-SAP system the client was previously using</td>
       </tr>
       <tr>
        <td>Client / Client partner</td>
        <td>The company implementing SAP for its own use (e.g., Alchem)</td>
       </tr>
       <tr>
        <td>Implementation partner</td>
        <td>The consulting company hired to implement SAP for the client (e.g., TCS)</td>
       </tr>
       <tr>
        <td>User</td>
        <td>An employee of the client who performs day-to-day SAP transactions</td>
       </tr>
       <tr>
        <td>AMC</td>
        <td>Annual Maintenance Contract/Cost — a recurring yearly payment (≈22% of license cost) to SAP</td>
       </tr>
       <tr>
        <td>Greenfield implementation</td>
        <td>A brand-new SAP implementation built directly on S/4HANA</td>
       </tr>
       <tr>
        <td>ECC</td>
        <td>SAP's earlier core system, being phased out of support by end of 2027</td>
       </tr>
       <tr>
        <td>S/4HANA</td>
        <td>SAP's current-generation ERP suite that ECC clients are migrating to</td>
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
        <td>Present SAP version</td>
        <td>6 (most successful version in SAP's history)</td>
       </tr>
       <tr>
        <td>Present Enhancement Package</td>
        <td>EHP8</td>
       </tr>
       <tr>
        <td>SAP market share (approx.)</td>
        <td>~80%</td>
       </tr>
       <tr>
        <td>ECC end-of-support deadline mentioned</td>
        <td>End of 2027 (driving migration projects to S/4HANA)</td>
       </tr>
       <tr>
        <td>Share of present-day projects that are migration projects</td>
        <td>~95%</td>
       </tr>
       <tr>
        <td>SD changes between ECC and S/4HANA</td>
        <td>Roughly 20–30%</td>
       </tr>
       <tr>
        <td>Example implementation quote (Alchem/TCS)</td>
        <td>₹50 crores</td>
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
        <td>AMC (Annual Maintenance Contract) rate</td>
        <td>~22% of total license cost, paid every year</td>
       </tr>
       <tr>
        <td>SAP architecture type</td>
        <td>Three-tier: Presentation → Application → Database</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      SAP is an ERP package built on the idea of planning and integrating
      every department of an organization — and utilizing the four M's
      (Money, Material, Machinery, Manpower) efficiently. It stands out
      from other ERP packages by offering an all-in-one solution across
      departments and being tightly integrated, which — combined with
      its dominant ~80% market share — gives it an essentially
      uncontested future. SAP has evolved through versions (3 → 6) and,
      since version 6, through Enhancement Packages (now EHP8) rather
      than entirely new versions. Consultants split into
      <strong>functional</strong> (business process configuration, no
      coding) and <strong>technical</strong> (ABAP coding, Basis
      administration) roles, and work across
      <strong>implementation</strong>, <strong>support</strong>,
      <strong>migration</strong>, and <strong>rollout</strong> projects —
      with migration (ECC → S/4HANA, deadline end of 2027) currently
      dominating the market. Any implementation begins with selecting a
      partner and purchasing per-user licenses (plus recurring 22% AMC),
      as illustrated in the Alchem/TCS worked example. Underneath all of
      this, SAP runs on a <strong>three-tier architecture</strong> —
      presentation, application, and database layers — the technical
      backbone for everything covered going forward in the course.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       SAP's edge over competitors: <strong>full departmental
        coverage</strong> + <strong>tight integration</strong> between
       modules
      </li>
      <li>
       Version upgrades = product upgradation; after version 6, SAP
       evolves via <strong>Enhancement Packages (EHP1–EHP8)</strong>
       rather than new base versions
      </li>
      <li>
       Functional consultants configure; technical consultants (ABAP,
       Basis) code and maintain infrastructure — <strong>no coding
        required for SD</strong>
      </li>
      <li>
       Four project types: <strong>Implementation, Support, Migration,
        Rollout</strong> — with migration (ECC → S/4HANA) currently
       dominating the market ahead of the 2027 ECC support deadline
      </li>
      <li>
       License cost is <strong>one-time</strong> (based on user count);
       <strong>AMC is recurring</strong>, typically ~22% of license cost
       per year
      </li>
      <li>
       SAP architecture = <strong>Presentation → Application →
        Database</strong>, with the Application Layer acting as mediator
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Implementation phases and the
      support process (how tickets are raised and resolved), followed by
      the first core concept — <strong>Enterprise Structure</strong>.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Demo 1 Notes — SAP Overview, Projects, Licensing &amp; Architecture 🎓
   </p>

  </div>
 );
};

export default demo1;
