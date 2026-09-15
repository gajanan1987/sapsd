const Enterprise11 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-brown">
    <h1>
     🧩 Lecture 11 — Assignment of Enterprise Structure (Continued): Sales
     Office, Plant, Shipping Point &amp; EC01
    </h1>
    <p>
     SAP SD | Completing all nine Enterprise Structure assignments and
     viewing the full structure with T-code EC01
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Quick Recap</h2>
     <div className="flow">
      <div className="flow-step done">1. Sales Org → Company Code ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">2. Dist. Channel → Sales Org ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">3. Division → Sales Org ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">4. Set Up Sales Area ✅</div>
     </div>
     <p className="note-text-center">
      Last class ended after Set Up Sales Area (30 sales areas). Today
      completes the remaining five assignments.
     </p>
    </div>

    {/* <!-- Section 1: Assignment 5 - Sales Office to Sales Area --> */}
    <div className="card teal">
     <h2>
      <span className="badge">5</span> Assignment 5 — Sales Office to Sales Area
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Responsible Consultant</td>
        <td>SD</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      💡
      <strong>Only domestic sales areas get assigned to a sales office.</strong>
      Telangana Sales Office (P100) handles sales
      <em>within Telangana</em> — it has nothing to do with exports. Export
      sales typically happen directly from the head office (or, in some
      client setups, from a separate dedicated export sales office if one
      exists). Here, since this project has no dedicated export sales
      office, the Export sales areas (Sales Org P200) are simply
      <strong>not assigned</strong> to any sales office.
     </div>
     <h3>What Gets Assigned</h3>
     <p>
      Every Domestic sales area (Sales Org <code>P100</code> × its 4
      distribution channels × 6 divisions = <strong>24 sales areas</strong>)
      is assigned to Sales Office <code>P100</code>
      (Telangana). The 6 Export sales areas (Sales Org
      <code>P200</code>/P4 × 6 divisions) are left unassigned here.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sales Org</th>
        <th>Distribution Channel</th>
        <th>Divisions</th>
        <th>Sales Office Assigned</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P100</td>
        <td>P1</td>
        <td>P1–P6 (all 6)</td>
        <td>P100 (Telangana)</td>
       </tr>
       <tr>
        <td>P100</td>
        <td>P2</td>
        <td>P1–P6 (all 6)</td>
        <td>P100 (Telangana)</td>
       </tr>
       <tr>
        <td>P100</td>
        <td>P3</td>
        <td>P1–P6 (all 6)</td>
        <td>P100 (Telangana)</td>
       </tr>
       <tr>
        <td>P100</td>
        <td>P4</td>
        <td>P1–P6 (all 6)</td>
        <td>P100 (Telangana)</td>
       </tr>
       <tr>
        <td>P200</td>
        <td>P4</td>
        <td>P1–P6 (all 6)</td>
        <td className="note-italic">Not assigned (export)</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Assignment</span>
      <span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Assign Sales Office to Sales Area</span>
     </div>
     <p className="note-text">
      New Entries → enter Sales Org + Distribution Channel + Division +
      Sales Office for each of the 24 domestic sales areas (this can be
      typed manually or pasted in from a pre-built Excel sheet) → Save →
      Continue.
     </p>
    </div>

    {/* <!-- Section 2: Assignment 6 - Sales Group to Sales Office --> */}
    <div className="card orange">
     <h2>
      <span className="badge">6</span> Assignment 6 — Sales Group to Sales
      Office
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Responsible Consultant</td>
        <td>SD</td>
       </tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sales Office</th>
        <th>Sales Group Assigned</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P100 (Telangana)</td>
        <td>P10 (Insulin &amp; Antibiotic)</td>
       </tr>
       <tr>
        <td>P100 (Telangana)</td>
        <td>P20 (Other Group)</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Assignment</span>
      <span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Assign Sales Group to Sales Office</span>
     </div>
     <p className="note-text">New Entries → P100/P10, P100/P20 → Save.</p>
    </div>

    {/* <!-- Section 3: Assignment 7 - Plant to Company Code --> */}
    <div className="card purple">
     <h2>
      <span className="badge">7</span> Assignment 7 — Plant to Company Code
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Responsible Consultant</td>
        <td>MM</td>
       </tr>
       <tr>
        <td>Relationship</td>
        <td>
         <strong>One-to-Many</strong> (Company Code is part of this
         assignment)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout purple">
      📖 <strong>What this means:</strong> one Company Code can have many
      Plants, but one Plant can be assigned to only one Company Code.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Plant</th>
        <th>Company Code Assigned</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P100 (Mumbai)</td>
        <td>P100</td>
       </tr>
       <tr>
        <td>P200 (Vapi)</td>
        <td>P100</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Different path family!</strong> Unlike the previous
      assignments, this one lives under <strong>Logistics General</strong>,
      not Sales and Distribution.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Assignment</span>
      <span className="sep">→</span>
      <span className="node">Logistics – General</span>
      <span className="sep">→</span>
      <span className="node">Assign Plant to Company Code</span>
     </div>
     <p className="note-text">New Entries → P100/P100, P200/P100 → Save.</p>
    </div>

    {/* <!-- Section 4: Assignment 8 - Sales Line to Plant --> */}
    <div className="card gold">
     <h2>
      <span className="badge">8</span> Assignment 8 — Sales Organization +
      Distribution Channel to Plant (a.k.a. "Sales Line to Plant")
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Responsible Consultant</td>
        <td>SD</td>
       </tr>
       <tr>
        <td>Relationship</td>
        <td>Many-to-Many (no Company Code in this assignment)</td>
       </tr>
      </tbody>
     </table>
     <div className="callout gold">
      🏷️ Recall from Lecture 10: <strong>Sales Line</strong> = the
      combination of Sales Organization + Distribution Channel. This project
      has <strong>5 sales lines</strong> and <strong>2 plants</strong>, so
      every sales line gets assigned to <em>both</em> plants.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sales Line (Sales Org / Dist. Channel)</th>
        <th>Plant Assigned</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P100 / P1</td>
        <td>P100 (Mumbai)</td>
       </tr>
       <tr>
        <td>P100 / P2</td>
        <td>P100 (Mumbai)</td>
       </tr>
       <tr>
        <td>P100 / P3</td>
        <td>P100 (Mumbai)</td>
       </tr>
       <tr>
        <td>P100 / P4</td>
        <td>P100 (Mumbai)</td>
       </tr>
       <tr>
        <td>P200 / P4</td>
        <td>P100 (Mumbai)</td>
       </tr>
       <tr>
        <td>P100 / P1</td>
        <td>P200 (Vapi)</td>
       </tr>
       <tr>
        <td>P100 / P2</td>
        <td>P200 (Vapi)</td>
       </tr>
       <tr>
        <td>P100 / P3</td>
        <td>P200 (Vapi)</td>
       </tr>
       <tr>
        <td>P100 / P4</td>
        <td>P200 (Vapi)</td>
       </tr>
       <tr>
        <td>P200 / P4</td>
        <td>P200 (Vapi)</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Assignment</span>
      <span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Assign Sales Organization – Distribution Channel – Plant</span>
     </div>
     <p className="note-text">
      New Entries → enter all 10 combinations (5 sales lines × 2 plants) →
      Save.
     </p>
     <div className="callout red">
      🛠️ <strong>Troubleshooting — "Specify a Request" error:</strong>
      if the Request field doesn't auto-populate and Continue throws
      <em>"Specify a request"</em>, click the
      <strong>Create Request</strong> symbol, give it a short description,
      and the system will generate a request number automatically — then
      Continue and Save will work normally. This typically happens if no
      request has been created yet in the current session (e.g., a student
      who joined late and hasn't created one before).
     </div>
    </div>

    {/* <!-- Section 5: Assignment 9 - Shipping Point to Plant --> */}
    <div className="card red">
     <h2>
      <span className="badge">9</span> Assignment 9 — Shipping Point to Plant
      (Final Assignment)
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Responsible Consultant</td>
        <td>SD</td>
       </tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Plant</th>
        <th>Shipping Points Assigned</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P100 (Mumbai)</td>
        <td>P101 (Manual), P102 (Automatic), P103 (Immediate)</td>
       </tr>
       <tr>
        <td>P200 (Vapi)</td>
        <td>P201 (Manual), P202 (Automatic), P203 (Immediate)</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Different path family again!</strong> This one lives under
      <strong>Logistics Execution</strong>.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Assignment</span>
      <span className="sep">→</span>
      <span className="node">Logistics Execution</span>
      <span className="sep">→</span>
      <span className="node">Assign Shipping Point to Plant</span>
     </div>
     <h3>Navigation Steps — This Screen Looks Different</h3>
     <div className="stepper">
      <div className="step">
       Click <strong>Find</strong> (or press <strong>Ctrl+F</strong>) →
       type your Plant code (e.g., <code>P100</code>) → Enter → click on
       the plant to select it.
      </div>
      <div className="step">
       With the plant selected, click <strong>Assign</strong> — this opens
       the list of available shipping points.
      </div>
      <div className="step">
       Use <strong>Find</strong> (Ctrl+F) again to locate your shipping
       point code (e.g., <code>P101</code>) → select it → repeat for the
       other shipping points belonging to that plant.
      </div>
      <div className="step">
       Continue, scroll up to confirm — you should see all 3 shipping
       points listed under that plant.
      </div>
      <div className="step">
       Repeat the entire process for the second plant (<code>P200</code>)
       with its own shipping points (P201–P203).
      </div>
      <div className="step">Save.</div>
     </div>
    </div>

    {/* <!-- Section 6: EC01 - view full structure --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">🗺️</span> Viewing the Complete Enterprise
      Structure — T-code EC01
     </h2>
     <div className="callout indigo">
      🔍 Once all assignments are complete, the entire enterprise structure
      — every unit and how they connect — can be viewed as one navigable
      tree using T-code <span className="tcode">EC01</span>.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">EC01</span> → click
       <strong>Structure</strong>.
      </div>
      <div className="step">Click <strong>Navigation</strong> → Continue.</div>
      <div className="step">
       Use <strong>Ctrl+F</strong> to find your Company Code (e.g.,
       <code>P100</code>) → double-click it to expand.
      </div>
      <div className="step">
       Expand each branch to see the full picture — Plants, Sales
       Organizations, Storage Locations, Shipping Points, Distribution
       Channels, and Divisions, all nested under their parent units.
      </div>
     </div>
     <h3>What You'll See When You Expand</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Branch</th>
        <th>What Shows Up</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Company Code P100</td>
        <td>2 Plants, 2 Sales Organizations</td>
       </tr>
       <tr>
        <td>Plant P100 (Mumbai)</td>
        <td>5 Storage Locations, 3 Shipping Points</td>
       </tr>
       <tr>
        <td>Plant P200 (Vapi)</td>
        <td>5 Storage Locations, 3 Shipping Points</td>
       </tr>
       <tr>
        <td>Sales Organization P100 (Domestic)</td>
        <td>
         4 Distribution Channels, 6 Divisions, 5 Sales Lines total across
         both sales orgs
        </td>
       </tr>
       <tr>
        <td>Sales Organization P200 (Export)</td>
        <td>1 Distribution Channel, 6 Divisions</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>Why this matters:</strong> EC01 gives a single-screen,
      drill-down confirmation that every assignment made over the past few
      lectures actually took effect correctly — a fast way to spot a missing
      or incorrect link before moving on to master data and transactions.
     </div>
    </div>

    {/* <!-- Section 7: All 9 assignments consolidated --> */}
    <div className="card">
     <h2>
      <span className="badge">📋</span> All 9 Assignments — Final Consolidated
      Reference
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Assignment</th>
        <th>Responsible</th>
        <th>Path Family</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Sales Organization → Company Code</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>Sales and Distribution</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Distribution Channel → Sales Organization</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>Sales and Distribution</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Division → Sales Organization</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>Sales and Distribution</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Set Up Sales Area</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>Sales and Distribution</td>
       </tr>
       <tr>
        <td>5</td>
        <td>Sales Office → Sales Area</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>Sales and Distribution</td>
       </tr>
       <tr>
        <td>6</td>
        <td>Sales Group → Sales Office</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>Sales and Distribution</td>
       </tr>
       <tr>
        <td>7</td>
        <td>Plant → Company Code</td>
        <td><span className="tag tag-orange">MM</span></td>
        <td>Logistics – General</td>
       </tr>
       <tr>
        <td>8</td>
        <td>Sales Org + Distribution Channel → Plant</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>Sales and Distribution</td>
       </tr>
       <tr>
        <td>9</td>
        <td>Shipping Point → Plant</td>
        <td><span className="tag tag-teal">SD</span></td>
        <td>Logistics Execution</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      🎉
      <strong>Enterprise Structure is now fully defined
       <em>and</em> assigned!</strong>
      The next stage of the course moves into fields/settings still to
      configure (e.g., calendar assignment details) before progressing to
      master data.
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
         Why aren't the Export sales areas assigned to any Sales Office
         in this project?
        </td>
        <td>
         The only sales office defined (Telangana) handles domestic
         sales; export orders come directly from the head office and
         there's no dedicated export sales office in this setup
        </td>
       </tr>
       <tr>
        <td>
         What is the relationship between Company Code and Plant, and
         what does it mean practically?
        </td>
        <td>
         One-to-many — one Company Code can have many Plants, but a Plant
         can be assigned to only one Company Code
        </td>
       </tr>
       <tr>
        <td>
         Under which SPRO node is "Assign Plant to Company Code"
         configured?
        </td>
        <td>Logistics – General, not Sales and Distribution</td>
       </tr>
       <tr>
        <td>
         What does the "Sales Line to Plant" assignment actually link
         together?
        </td>
        <td>
         Sales Organization + Distribution Channel (i.e., the Sales Line)
         to a Plant — determining which plant supplies which sales line
        </td>
       </tr>
       <tr>
        <td>
         What causes a "Specify a Request" error when saving, and how is
         it fixed?
        </td>
        <td>
         No transport request has been created yet in that session; click
         "Create Request," add a description, and the system generates
         the number automatically
        </td>
       </tr>
       <tr>
        <td>
         Under which SPRO node is "Assign Shipping Point to Plant"
         configured?
        </td>
        <td>Logistics Execution</td>
       </tr>
       <tr>
        <td>
         How do you navigate the "Assign Shipping Point to Plant" screen,
         since it looks different from other assignment screens?
        </td>
        <td>
         Use Find (Ctrl+F) to locate and select the plant, click Assign
         to see available shipping points, then use Find again to locate
         and select each shipping point belonging to that plant
        </td>
       </tr>
       <tr>
        <td>
         What T-code shows the complete, assembled enterprise structure
         as one navigable tree?
        </td>
        <td>
         EC01 — click Structure, then Navigation, then use Ctrl+F to find
         and expand your Company Code
        </td>
       </tr>
       <tr>
        <td>What can you verify inside EC01?</td>
        <td>
         That every organizational unit and assignment is correctly
         linked — e.g., how many plants and sales organizations sit under
         a company code, and how many storage locations/shipping points
         sit under each plant
        </td>
       </tr>
       <tr>
        <td>
         How many total assignments make up the full Enterprise Structure
         Assignment step?
        </td>
        <td>
         9 — from Sales Organization → Company Code through Shipping
         Point → Plant
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
        <th>T-Code / Path</th>
        <th>Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><span className="tcode">SPRO</span></td>
        <td>
         Entry point for all Enterprise Structure Assignment activities
        </td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Assignment → Sales and Distribution →
         Assign Sales Office to Sales Area
        </td>
        <td>Assignment 5</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Assignment → Sales and Distribution →
         Assign Sales Group to Sales Office
        </td>
        <td>Assignment 6</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Assignment → Logistics – General → Assign
         Plant to Company Code
        </td>
        <td>Assignment 7</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Assignment → Sales and Distribution →
         Assign Sales Organization – Distribution Channel – Plant
        </td>
        <td>Assignment 8 ("Sales Line to Plant")</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Assignment → Logistics Execution → Assign
         Shipping Point to Plant
        </td>
        <td>Assignment 9 (final assignment)</td>
       </tr>
       <tr>
        <td><span className="tcode">EC01</span></td>
        <td>
         View the complete, assembled enterprise structure as a navigable
         tree (Structure → Navigation → Ctrl+F your Company Code)
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
        <td>Sales Office → Sales Area assignment</td>
        <td>
         All 24 domestic sales areas (P100 org) → Sales Office P100;
         export sales areas unassigned
        </td>
       </tr>
       <tr>
        <td>Sales Group → Sales Office assignment</td>
        <td>P10 and P20 → Sales Office P100</td>
       </tr>
       <tr>
        <td>Plant → Company Code assignment</td>
        <td>P100 → P100, P200 → P100</td>
       </tr>
       <tr>
        <td>Sales Line → Plant assignment</td>
        <td>
         All 5 sales lines assigned to both P100 (Mumbai) and P200 (Vapi)
         — 10 combinations total
        </td>
       </tr>
       <tr>
        <td>Shipping Point → Plant assignment</td>
        <td>P101–P103 → Plant P100; P201–P203 → Plant P200</td>
       </tr>
       <tr>
        <td>T-code to view full structure</td>
        <td>EC01 (Structure → Navigation)</td>
       </tr>
       <tr>
        <td>Fix for "Specify a request" save error</td>
        <td>
         Click Create Request → add description → system auto-generates
         the request number
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed all nine Enterprise Structure assignments.
      <strong>Sales Office to Sales Area</strong> only linked the 24
      domestic sales areas to the Telangana sales office, since exports have
      no dedicated sales office in this project.
      <strong>Sales Group to Sales Office</strong> tied both sales groups to
      that same office. <strong>Plant to Company Code</strong> (MM's
      responsibility, under Logistics General) is one-to-many, just like
      Sales Organization to Company Code.
      <strong>Sales Line to Plant</strong> connected all 5 sales lines to
      both manufacturing plants (10 combinations), with a troubleshooting
      note on fixing the "Specify a request" save error via Create Request.
      Finally, <strong>Shipping Point to Plant</strong> used a different
      Find/Assign navigation pattern under Logistics Execution to link each
      plant's 3 shipping points. The lecture closed by introducing
      <strong>T-code EC01</strong> — a single navigable tree view that
      confirms the entire enterprise structure (company code, plants, sales
      organizations, storage locations, shipping points, distribution
      channels, and divisions) was assigned correctly end-to-end.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       Not every sales area needs a sales office assignment — export sales
       areas were deliberately left unassigned in this project
      </li>
      <li>
       <strong>Plant → Company Code</strong> and
       <strong>Sales Organization → Company Code</strong> are both
       one-to-many, and both are the assignments where Company Code appears
      </li>
      <li>
       Watch for <strong>path family changes</strong>: most assignments sit
       under Sales and Distribution, but Plant → Company Code uses
       Logistics General, and Shipping Point → Plant uses Logistics
       Execution
      </li>
      <li>
       The Shipping Point → Plant screen uses a
       <strong>Find + Assign</strong> pattern, different from the simple
       New Entries pattern used elsewhere
      </li>
      <li>
       <strong>EC01</strong> is the go-to T-code to visually verify the
       complete enterprise structure after all assignments are done
      </li>
      <li>
       All <strong>9 assignments are now complete</strong> — Enterprise
       Structure (definition + assignment) is fully finished
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Remaining field-level settings (e.g.,
      calendar configuration) before the course moves into master data.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 11 Notes — Assignment of Enterprise Structure (Continued): Sales
    Office, Plant, Shipping Point &amp; EC01 🎓
   </p>
  </div>
 );
};

export default Enterprise11;
