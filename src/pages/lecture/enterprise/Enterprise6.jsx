const Enterprise6 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-orange">
    <h1>🏭 Lecture 6 — Enterprise Structure Theory: Sales Group, Plant, Storage Location &amp; Shipping Point</h1>
    <p>
     SAP SD | Completing all 9 organizational units — sales group, the
     three types of plant, the full manufacturing-plant walkthrough, and
     the final two units
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Quick Recap — 5 of 9 Units Covered</h2>
     <div className="flow">
      <div className="flow-step done">Company Code ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">Sales Org ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">Distribution Channel ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">Division ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">Sales Office ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">Sales Group 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">Plant 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-teal">Storage Location 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-orange">Shipping Point 🆕</div>
     </div>
     <p className="note-text-center">
      Today completes theory for all remaining organizational units.
      Hands-on system configuration of all nine begins next class.
     </p>
    </div>

    {/* <!-- Section 1: Sales Group --> */}
    <div className="card gold">
     <h2><span className="badge">6</span> Sales Group</h2>
     <div className="callout">
      💡 <strong>Sales Group</strong> = a group of people
      <strong>within a Sales Office</strong>, but working for
      <strong>different activities</strong>.
     </div>
     <h3>Understanding Example (HDFC Office)</h3>
     <p>
      Picture an HDFC branch office: same physical office, but different
      floors host completely different teams — first floor is Home
      Loans (its own sales team), second floor is Personal Loans (its
      own separate sales team), third floor is Vehicle Loans (again a
      separate team), and so on for mortgage loans. Same office, but
      different teams working on different product lines — that
      internal grouping is exactly what SAP calls a
      <strong>Sales Group</strong>.
     </p>
     <p className="note-text">
      📌 This HDFC example is purely for understanding the concept — it
      is not related to Alchem, our actual project client.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field</th><th>Value</th></tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>SD</td></tr>
       <tr><td>Code Length</td><td>3 digits</td></tr>
       <tr><td>Count in Our Project</td><td>2</td></tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr><th>Code</th><th>Name</th></tr>
      </thead>
      <tbody>
       <tr><td>P10</td><td>Insulin &amp; Antibiotic Group</td></tr>
       <tr><td>P20</td><td>Other Group</td></tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔍 <strong>Scope clarifications from class discussion:</strong>
      Marketing (branding, advertising, market positioning) is
      <strong>not</strong> part of SD — SD covers pre-sales activity
      like Inquiry and Quotation, but not marketing itself.
      <strong>Order management</strong> is not a separate organizational
      unit — it's a <strong>process within SD</strong>. A Sales Group
      consists purely of pure sales teams, not order management staff.
     </div>
    </div>

    {/* <!-- Section 2: Plant overview --> */}
    <div className="card purple">
     <h2><span className="badge">7</span> Plant — Overview &amp; Sub-Classification</h2>
     <div className="callout purple">
      💡 <strong>Plant</strong> is the 7th organizational unit, but it
      further sub-classifies into <strong>three types</strong>:
     </div>
     <div className="four-grid">
      <div className="mini-card mc-blue"><h4>🏭 Manufacturing Plant</h4></div>
      <div className="mini-card mc-teal"><h4>📦 Depot</h4></div>
      <div className="mini-card mc-orange"><h4>🤝 Carry &amp; Forward (C&amp;F)</h4></div>
     </div>
     <p className="note-text">
      All three are technically "Plant" as an organizational unit — the
      distinction below is about their role and who maintains the
      premises.
     </p>
    </div>

    {/* <!-- Section 3: Manufacturing Plant --> */}
    <div className="card">
     <h2><span className="badge">7a</span> Manufacturing Plant</h2>
     <div className="callout">
      💡 <strong>Manufacturing Plant</strong> = a physical location
      where we do the process of manufacturing
      <strong>finished goods</strong>. Finished goods = the final
      product, ready to sell.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field</th><th>Value</th></tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>MM</td></tr>
       <tr><td>Code Length</td><td>4 digits</td></tr>
       <tr><td>Count in Our Project</td><td>2</td></tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr><th>Code</th><th>Name</th></tr>
      </thead>
      <tbody>
       <tr><td>P100</td><td>Mumbai Manufacturing Plant</td></tr>
       <tr><td>P200</td><td>Vapi Manufacturing Plant</td></tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 <strong>Correction note:</strong> this lecture's audio
      consistently refers to the second plant location as "Vapi" (a
      well-known industrial/pharma hub in Gujarat, India) rather than
      "Guwahati" as an earlier session's transcript suggested — Vapi is
      used here as the more contextually accurate correction.
     </p>
    </div>

    {/* <!-- Section 4: Depot --> */}
    <div className="card teal">
     <h2><span className="badge">7b</span> Depot</h2>
     <div className="callout teal">
      💡 <strong>Depot</strong> = a physical location where we store
      finished goods for easy distribution to customers —
      <strong>maintained by the company itself</strong> (rent,
      employee salaries, and all other premises expenses are borne by
      the company).
     </div>
     <h3>Why Depots Exist — The Business Logic</h3>
     <div className="stepper">
      <div className="step">
       After manufacturing, finished goods are sent from the plant to
       <strong>state-wise depots</strong> (e.g. a Hyderabad depot for
       Telangana).
      </div>
      <div className="step">
       The depot receives goods from the manufacturing plant and
       <strong>maintains local stock</strong>.
      </div>
      <div className="step">
       Whenever an order comes in from a customer within that state,
       the local depot delivers the goods directly — same-day delivery
       becomes possible.
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Without depots:</strong> the manufacturing plant alone
      would have to handle deliveries across the entire country, which
      is very difficult and slow. Delayed deliveries mean dealers run
      out of stock → dealers can't supply medical stores → medical
      stores run out of stock → customers switch to competitors → the
      company loses market share. This is exactly why companies
      maintain a depot in nearly every state.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field</th><th>Value</th></tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>MM</td></tr>
       <tr><td>Code Length</td><td>4 digits</td></tr>
       <tr><td>Count Defined in This Project (for now)</td><td>Only the 2 manufacturing plants are defined at present — depots will be covered later</td></tr>
      </tbody>
     </table>
     <div className="callout blue">
      🤔 <strong>Common confusion:</strong> a depot is <em>not</em> a
      customer, and receiving goods there is not itself a "sale" — it's
      simply a storage-and-distribution point (comparable to an Amazon
      warehouse). No purchase transaction happens at the depot itself;
      it just holds stock and ships it out on order.
     </div>
    </div>

    {/* <!-- Section 5: C&F --> */}
    <div className="card orange">
     <h2><span className="badge">7c</span> Carry &amp; Forward (C&amp;F)</h2>
     <div className="callout">
      💡 <strong>Carry &amp; Forward (C&amp;F)</strong> = functionally
      identical to a Depot (a physical location storing finished goods
      for easy distribution), but the premises are
      <strong>maintained by a third-party person</strong> instead of
      the company itself.
     </div>
     <p>
      Some companies find it difficult to manage a depot in every
      single state, so instead they appoint an experienced third-party
      individual as C&amp;F for that state. This person manages the
      rent, staff salaries, and all other premises expenses themselves.
     </p>
     <div className="callout blue">
      💰 <strong>Income model:</strong> the C&amp;F person doesn't
      purchase the goods from the company — they simply hold stock and
      deliver it on order. Their income comes from a
      <strong>commission on every invoice</strong> (e.g. ~2%).
     </div>
     <p className="note-text">
      📌 In service industries this kind of arrangement is often called
      a "franchise," but in manufacturing companies the standard
      terminology is <strong>Carry &amp; Forward (C&amp;F)</strong>.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field</th><th>Value</th></tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>MM</td></tr>
       <tr><td>Code Length</td><td>4 digits</td></tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr><th>Aspect</th><th>Depot</th><th>C&amp;F</th></tr>
      </thead>
      <tbody>
       <tr>
        <td>Who maintains the premises?</td>
        <td>Company itself</td>
        <td>An independent third-party person</td>
       </tr>
       <tr>
        <td>How the maintainer earns</td>
        <td>N/A (company employee/expense)</td>
        <td>Commission on every invoice (e.g. ~2%)</td>
       </tr>
       <tr>
        <td>Core activity</td>
        <td>Store &amp; distribute finished goods</td>
        <td>Store &amp; distribute finished goods (identical)</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 6: Structure of manufacturing plant --> */}
    <div className="card indigo">
     <h2><span className="badge">🏗️</span> Structure of a Manufacturing Plant</h2>
     <p>
      Understanding a plant's internal structure is what makes storage
      locations and shipping points make sense — every plant has a
      <strong>Gate In</strong> and a <strong>Gate Out</strong>.
     </p>
     <h3>Inbound: Gate In → Raw Material</h3>
     <div className="stepper">
      <div className="step">
       Trucks wait outside Gate In to unload <strong>raw
        material</strong> — the product used to manufacture finished
       goods (e.g. sugarcane for a sugar factory).
      </div>
      <div className="step">
       Each truck passes security (purchase order verification), and
       the <strong>Quality department performs a quality check</strong>
       on the raw material before it's unloaded.
      </div>
      <div className="step">
       Once approved, the raw material is stored in the
       <strong>Raw Material storage location</strong>.
      </div>
     </div>
     <h3>Production Flow</h3>
     <div className="stepper">
      <div className="step">
       When the Production department plans to manufacture a product,
       it sends a request to the <strong>Stores department</strong>.
      </div>
      <div className="step">
       Stores checks raw material stock. If available, it issues raw
       material to Production; if not, Stores procures it from a
       vendor first.
      </div>
      <div className="step">
       Production runs the first process, producing a
       <strong>semi-finished</strong> product, stored in its own
       Semi-Finished storage location.
      </div>
      <div className="step">
       After some time, the semi-finished material is issued for the
       next process — assuming this example has 3 total processes,
       the final process yields <strong>finished goods</strong>.
      </div>
      <div className="step">
       Quality department performs a final quality check; approved
       finished goods move into storage — split across
       <strong>two</strong> storage locations depending on temperature
       requirement (e.g. Insulin needs cool storage, most other
       products are fine at room temperature).
      </div>
     </div>
     <h3>Storage Locations in This Example (5 Total)</h3>
     <table className="table-reponsive">
      <thead>
       <tr><th>#</th><th>Storage Location</th><th>Purpose</th></tr>
      </thead>
      <tbody>
       <tr><td>1</td><td>Raw Material</td><td>Holds incoming raw materials</td></tr>
       <tr><td>2</td><td>Semi-Finished</td><td>Holds in-process, semi-finished output</td></tr>
       <tr><td>3</td><td>Finished Goods 1</td><td>Room temperature finished goods</td></tr>
       <tr><td>4</td><td>Finished Goods 2</td><td>Cool temperature finished goods (e.g. Insulin)</td></tr>
       <tr><td>5</td><td>Return</td><td>Holds goods returned by customers (e.g. expired or damaged)</td></tr>
      </tbody>
     </table>
     <h3>Outbound: Delivery → Gate Out</h3>
     <div className="stepper">
      <div className="step">
       Every day, deliveries due that day are <strong>planned</strong>
       first.
      </div>
      <div className="step">
       Goods are <strong>picked</strong> from the relevant storage
       location, then <strong>packed</strong>.
      </div>
      <div className="step">
       Packed goods are sent to the <strong>Shipping Point</strong>,
       where trucks wait outside Gate Out for loading.
      </div>
      <div className="step">
       Trucks are loaded one by one, take the delivery/invoice copy,
       clear a final security check, and leave for the customer.
      </div>
     </div>
    </div>

    {/* <!-- Section 7: 3 shipping points --> */}
    <div className="card">
     <h2><span className="badge">🚚</span> The 3 Shipping Points in This Example</h2>
     <table className="table-reponsive">
      <thead>
       <tr><th>Shipping Point Type</th><th>How Loading Happens</th><th>Used For</th></tr>
      </thead>
      <tbody>
       <tr>
        <td><span className="tag tag-blue">Automatic</span></td>
        <td>Machinery (forklifts, cranes, lifters) loads the goods</td>
        <td>Normal products — everyday, continuous activity</td>
       </tr>
       <tr>
        <td><span className="tag tag-teal">Manual</span></td>
        <td>Labor loads the goods by hand</td>
        <td>Delicate products (e.g. glass-packed insulin) — everyday, continuous activity</td>
       </tr>
       <tr>
        <td><span className="tag tag-gold">Immediate</span></td>
        <td>Machinery or labor is called in as needed, based on the product</td>
        <td>Urgent, one-off deliveries only — a temporary arrangement, not part of regular daily activity, so it doesn't disturb the continuous flow at Automatic/Manual shipping points</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 8: Storage Location (formal def) --> */}
    <div className="card teal">
     <h2><span className="badge">8</span> Storage Location</h2>
     <div className="callout teal">
      💡 <strong>Storage Location</strong> = a physical location where
      we store goods <strong>within a plant</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field</th><th>Value</th></tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>MM</td></tr>
       <tr><td>Code Length</td><td>4 digits</td></tr>
       <tr><td>Count in Our Project</td><td>5 per plant</td></tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr><th>Plant</th><th>Code</th><th>Storage Location</th></tr>
      </thead>
      <tbody>
       <tr><td rowspan="5">P100 — Mumbai</td><td>P101</td><td>Raw Material</td></tr>
       <tr><td>P102</td><td>Semi-Finished</td></tr>
       <tr><td>P103</td><td>Finished Goods 1 (Room Temperature)</td></tr>
       <tr><td>P104</td><td>Finished Goods 2 (Cool Temperature)</td></tr>
       <tr><td>P105</td><td>Return</td></tr>
       <tr><td rowspan="5">P200 — Vapi</td><td>P201</td><td>Raw Material</td></tr>
       <tr><td>P202</td><td>Semi-Finished</td></tr>
       <tr><td>P203</td><td>Finished Goods 1 (Room Temperature)</td></tr>
       <tr><td>P204</td><td>Finished Goods 2 (Cool Temperature)</td></tr>
       <tr><td>P205</td><td>Return</td></tr>
      </tbody>
     </table>
     <div className="callout blue">
      💡 <strong>Not fixed across clients:</strong> if a client's
      finished goods are all room-temperature (no cold-chain product
      like insulin), they simply wouldn't need a "Finished Goods 2
      (Cool Temperature)" storage location. Storage locations — like
      every organizational unit — are decided based on the client's
      actual requirement, gathered during requirement gathering.
     </div>
    </div>

    {/* <!-- Section 9: Shipping Point (formal def) --> */}
    <div className="card orange">
     <h2><span className="badge">9</span> Shipping Point</h2>
     <div className="callout">
      💡 <strong>Shipping Point</strong> = a physical location where we
      do the process of <strong>loading the goods</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field</th><th>Value</th></tr>
      </thead>
      <tbody>
       <tr><td>Responsible Consultant</td><td>SD</td></tr>
       <tr><td>Code Length</td><td>4 digits</td></tr>
       <tr><td>Count in Our Project</td><td>3 per plant</td></tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr><th>Plant</th><th>Code</th><th>Shipping Point Type</th></tr>
      </thead>
      <tbody>
       <tr><td rowspan="3">P100 — Mumbai</td><td>P101</td><td>Manual</td></tr>
       <tr><td>P102</td><td>Automatic</td></tr>
       <tr><td>P103</td><td>Immediate</td></tr>
       <tr><td rowspan="3">P200 — Vapi</td><td>P201</td><td>Manual</td></tr>
       <tr><td>P202</td><td>Automatic</td></tr>
       <tr><td>P203</td><td>Immediate</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 10: All 9 units final consolidated table --> */}
    <div className="card">
     <h2><span className="badge">🧭</span> All 9 Organizational Units — Final Consolidated Reference</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Unit</th>
        <th>Responsible</th>
        <th>Length</th>
        <th>Count (Alchem)</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>1</td><td>Company Code</td><td><span className="tag tag-blue">FI</span></td><td>4</td><td>1</td></tr>
       <tr><td>2</td><td>Sales Organization</td><td><span className="tag tag-teal">SD</span></td><td>4</td><td>2</td></tr>
       <tr><td>3</td><td>Distribution Channel</td><td><span className="tag tag-teal">SD</span></td><td>2</td><td>4</td></tr>
       <tr><td>4</td><td>Division</td><td><span className="tag tag-teal">SD</span></td><td>2</td><td>6</td></tr>
       <tr><td>5</td><td>Sales Office</td><td><span className="tag tag-teal">SD</span></td><td>4</td><td>1 (of 25, for practice)</td></tr>
       <tr><td>6</td><td>Sales Group</td><td><span className="tag tag-teal">SD</span></td><td>3</td><td>2</td></tr>
       <tr><td>7</td><td>Plant (Manufacturing / Depot / C&amp;F)</td><td><span className="tag tag-orange">MM</span></td><td>4</td><td>2 manufacturing plants defined</td></tr>
       <tr><td>8</td><td>Storage Location</td><td><span className="tag tag-orange">MM</span></td><td>4</td><td>5 per plant</td></tr>
       <tr><td>9</td><td>Shipping Point</td><td><span className="tag tag-teal">SD</span></td><td>4</td><td>3 per plant</td></tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>All 9 organizational units are now fully covered in
       theory.</strong> Practice begins next class — first logging into
      the SAP system, then configuring each of these units one by one.
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
        <td>What is Sales Group?</td>
        <td>A group of people within a Sales Office, but working on different activities/product lines</td>
       </tr>
       <tr>
        <td>Who defines Sales Group, and what is its code length?</td>
        <td>SD consultant; 3 digits</td>
       </tr>
       <tr>
        <td>Is marketing part of the SD module?</td>
        <td>No — SD covers pre-sales activity (Inquiry, Quotation) onward, but branding/advertising/marketing is a separate function</td>
       </tr>
       <tr>
        <td>Is order management a separate organizational unit?</td>
        <td>No — it's a process within SD, not tied to Sales Group specifically</td>
       </tr>
       <tr>
        <td>What are the three sub-types of Plant?</td>
        <td>Manufacturing Plant, Depot, and Carry &amp; Forward (C&amp;F)</td>
       </tr>
       <tr>
        <td>What is a Manufacturing Plant?</td>
        <td>A physical location where the process of manufacturing finished goods happens; finished goods being the final, sellable product</td>
       </tr>
       <tr>
        <td>What is a Depot, and why do companies maintain one in every state?</td>
        <td>A physical location storing finished goods for easy distribution, maintained by the company itself; without depots, only the manufacturing plant would handle all deliveries nationwide, causing delays that lead to stock-outs and lost customers</td>
       </tr>
       <tr>
        <td>What is Carry &amp; Forward (C&amp;F), and how does it differ from a Depot?</td>
        <td>Functionally identical to a Depot, but maintained by a third-party person (not the company) who earns a commission (e.g. ~2%) on every invoice instead of a salary</td>
       </tr>
       <tr>
        <td>Who is responsible for defining Manufacturing Plant, Depot, and C&amp;F?</td>
        <td>MM consultant — all three, since they're all sub-types of the Plant organizational unit</td>
       </tr>
       <tr>
        <td>In the example manufacturing-plant walkthrough, how many storage locations are there, and what are they?</td>
        <td>5 — Raw Material, Semi-Finished, Finished Goods 1 (room temperature), Finished Goods 2 (cool temperature), and Return</td>
       </tr>
       <tr>
        <td>What is the difference between Automatic, Manual, and Immediate shipping points?</td>
        <td>Automatic uses machinery to load normal products; Manual uses labor to load delicate products; Immediate is a temporary arrangement for urgent one-off deliveries, using whichever (machinery or labor) fits the product</td>
       </tr>
       <tr>
        <td>What is Storage Location?</td>
        <td>A physical location where goods are stored within a plant</td>
       </tr>
       <tr>
        <td>What is Shipping Point?</td>
        <td>A physical location where the process of loading goods happens</td>
       </tr>
       <tr>
        <td>Who is responsible for Storage Location vs. Shipping Point?</td>
        <td>Storage Location → MM consultant; Shipping Point → SD consultant</td>
       </tr>
       <tr>
        <td>Are the exact storage locations/shipping points a client needs fixed across all clients?</td>
        <td>No — they're driven entirely by the client's actual requirement (e.g. no cool-storage location is needed if the client has no cold-chain products), gathered during requirement gathering</td>
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
         was a pure theory session completing the definitions of
         Sales Group, Plant (and its three sub-types), Storage
         Location, and Shipping Point. Hands-on configuration of all
         9 organizational units begins next class, starting with how
         to log into the SAP system.
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
        <td>Sales Group (Alchem)</td>
        <td>P10 = Insulin &amp; Antibiotic Group; P20 = Other Group</td>
       </tr>
       <tr>
        <td>Manufacturing Plants (Alchem)</td>
        <td>P100 = Mumbai Manufacturing Plant; P200 = Vapi Manufacturing Plant</td>
       </tr>
       <tr>
        <td>C&amp;F income model (example)</td>
        <td>~2% commission per invoice</td>
       </tr>
       <tr>
        <td>Storage locations per plant (example structure)</td>
        <td>5: Raw Material, Semi-Finished, FG1 (room temp), FG2 (cool temp), Return</td>
       </tr>
       <tr>
        <td>Storage Location codes — P100 plant</td>
        <td>P101 Raw Material, P102 Semi-Finished, P103 FG1 (room temp), P104 FG2 (cool temp), P105 Return</td>
       </tr>
       <tr>
        <td>Storage Location codes — P200 plant</td>
        <td>P201–P205, same pattern as P100</td>
       </tr>
       <tr>
        <td>Shipping points per plant</td>
        <td>3: Manual, Automatic, Immediate</td>
       </tr>
       <tr>
        <td>Shipping Point codes — P100 plant</td>
        <td>P101 Manual, P102 Automatic, P103 Immediate</td>
       </tr>
       <tr>
        <td>Shipping Point codes — P200 plant</td>
        <td>P201 Manual, P202 Automatic, P203 Immediate</td>
       </tr>
       <tr>
        <td>Total organizational units</td>
        <td>9 — Company Code, Sales Organization, Distribution Channel, Division, Sales Office, Sales Group, Plant, Storage Location, Shipping Point</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed the theoretical walkthrough of all nine
      Enterprise Structure organizational units. <strong>Sales
       Group</strong> is a set of people within a Sales Office working
      different product-line activities (illustrated via an HDFC
      branch example). <strong>Plant</strong> — the seventh unit —
      sub-classifies into three types: <strong>Manufacturing
       Plant</strong> (where finished goods are actually produced),
      <strong>Depot</strong> (company-maintained regional storage for
      fast local distribution), and <strong>Carry &amp; Forward
       (C&amp;F)</strong> (the same storage/distribution role, but run
      by a commission-earning third party). A detailed walkthrough of a
      manufacturing plant's internal structure — Gate In, raw material
      intake and quality check, the production process through
      semi-finished stages to finished goods, and Gate Out via
      Automatic/Manual/Immediate shipping points — grounded the final
      two units: <strong>Storage Location</strong> (where goods are
      stored within a plant, 5 per plant in this example) and
      <strong>Shipping Point</strong> (where goods are loaded, 3 per
      plant). With all nine units now defined, next class shifts from
      theory to hands-on configuration in the actual SAP system.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>Sales Group</strong> = people within a Sales Office
       split by activity/product line, not a physical location of its
       own
      </li>
      <li>
       <strong>Plant</strong> splits into Manufacturing Plant, Depot,
       and C&amp;F — all MM's responsibility, all coded the same way
       (4 digits)
      </li>
      <li>
       <strong>Depots</strong> exist to avoid delivery delays from a
       single central plant; <strong>C&amp;F</strong> is the
       third-party-run, commission-based equivalent
      </li>
      <li>
       A manufacturing plant's flow: Gate In → Raw Material (with
       Quality check) → Production (semi-finished stages) → Finished
       Goods (room/cool storage split) → Delivery planning/picking/
       packing → Shipping Point → Gate Out
      </li>
      <li>
       <strong>Storage Location</strong> (MM) = where goods are stored
       within a plant; <strong>Shipping Point</strong> (SD) = where
       goods are loaded for dispatch
      </li>
      <li>
       All 9 organizational units are theoretically complete — no
       configuration is universal across clients; each is driven by
       the specific client's requirement
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Hands-on practice begins —
      logging into the SAP system and configuring all 9 organizational
      units one by one.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 6 Notes — Enterprise Structure Theory: Sales Group, Plant,
    Storage Location &amp; Shipping Point 🎓
   </p>
  </div>
 );
};

export default Enterprise6;
