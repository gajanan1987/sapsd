const Enterprise9 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-indigo">
    <h1>
     🏭 Lecture 9 — Hands-On Configuration: Sales Office, Sales Group, Plant,
     Storage Location &amp; Shipping Point
    </h1>
    <p>
     SAP SD | Completing all 9 organizational units in the live system — SPRO
     paths, calendars, factory settings, and practical coding discipline
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Quick Recap — Where We Left Off</h2>
     <div className="flow">
      <div className="flow-step done">Company Code ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">Sales Organization ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">Distribution Channel ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step done">Division ✅</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-indigo">Sales Office 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">Sales Group 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-teal">Plant 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-orange">Storage Location 🆕</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">Shipping Point 🆕</div>
     </div>
     <p className="note-text-center">
      Last class ended with Division (P1–P6). Today completes the remaining
      five organizational units, live in the system.
     </p>
    </div>

    {/* <!-- Section 1: Sales Office --> */}
    <div className="card indigo">
     <h2><span className="badge">5</span> Defining Sales Office</h2>
     <div className="callout indigo">
      💡 <strong>Sales Office</strong> = a physical location where a group
      of people work together to perform sales.
     </div>
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
        <td>Code Length</td>
        <td>4 digits</td>
       </tr>
       <tr>
        <td>Actual Count (Real Project)</td>
        <td>25 sales offices</td>
       </tr>
       <tr>
        <td>Count Defined for Practice</td>
        <td>
         Only 1 (P100 — sufficient for practice; all 25 would be defined
         in a real project)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Maintain Sales Office</span>
     </div>
     <div className="stepper">
      <div className="step">
       Go to the path above → <strong>New Entries</strong>.
      </div>
      <div className="step">
       Code <code>P100</code>, Name <code>Telangana Sales Office</code>.
      </div>
      <div className="step">
       Mention the address. If a required field like
       <strong>Region</strong> isn't known yet, it can be left blank for
       now (Region definition is covered separately later).
      </div>
      <div className="step">Press Enter → Save → Continue.</div>
     </div>
    </div>

    {/* <!-- Section 2: Sales Group --> */}
    <div className="card purple">
     <h2><span className="badge">6</span> Defining Sales Group</h2>
     <div className="callout purple">
      💡 <strong>Sales Group</strong> = a group of people within a Sales
      Office, but working on different activities.
     </div>
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
        <td>Code Length</td>
        <td>3 digits</td>
       </tr>
       <tr>
        <td>Count in Our Project</td>
        <td>2</td>
       </tr>
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
       <tr>
        <td>P10</td>
        <td>Insulin &amp; Antibiotic</td>
       </tr>
       <tr>
        <td>P20</td>
        <td>Other Group</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Maintain Sales Group</span>
     </div>
     <p className="note-text">
      📌 Same path family as Sales Office — just the "Maintain Sales Group"
      node instead. New Entries → enter both codes and names → Save.
     </p>
    </div>

    {/* <!-- Section 3: Plant --> */}
    <div className="card teal">
     <h2><span className="badge">7</span> Defining Plant</h2>
     <div className="callout teal">
      💡 <strong>Plant</strong> = a physical location where the process of
      manufacturing <strong>finished goods</strong> happens. Finished goods
      = the final product, ready to sell.
     </div>
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
        <td>Code Length</td>
        <td>4 digits</td>
       </tr>
       <tr>
        <td>Count in Our Project</td>
        <td>2</td>
       </tr>
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
       <tr>
        <td>P100</td>
        <td>Mumbai Manufacturing Plant</td>
       </tr>
       <tr>
        <td>P200</td>
        <td>Vapi Manufacturing Plant</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Logistics – General</span>
      <span className="sep">→</span>
      <span className="node">Define, Copy, Delete, Check Plant</span>
      <span className="sep">→</span>
      <span className="node">Define Plant</span>
     </div>
     <div className="stepper">
      <div className="step">
       Double-click <strong>Define Plant</strong> → New Entries → Code
       <code>P100</code>, Name <code>Mumbai Manufacturing Plant</code>.
      </div>
      <div className="step">
       Mention the <strong>Factory Calendar = 01</strong> (standard).
      </div>
      <div className="step">
       Click <strong>Address</strong> → mention Name, Search Term,
       Street/address details, Country <code>IN</code>, Region
       <code>13</code> (Maharashtra) → Enter → Save → the address screen
       reappears → click <strong>Continue</strong>.
      </div>
      <div className="step">
       <strong>New Entries</strong> again for the second plant → Code
       <code>P200</code>, Name <code>Vapi Manufacturing Plant</code>,
       Calendar <code>01</code>, Address → City <code>Vapi</code>, State
       <code>Gujarat</code>, Country <code>IN</code> → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 4: Storage Location --> */}
    <div className="card orange">
     <h2><span className="badge">8</span> Defining Storage Location</h2>
     <div className="callout">
      💡 <strong>Storage Location</strong> = a physical location where we
      store the goods <strong>within a plant</strong>.
     </div>
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
        <td>Code Length</td>
        <td>4 digits</td>
       </tr>
       <tr>
        <td>Count in Our Project</td>
        <td>5 per plant</td>
       </tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Plant</th>
        <th>Code</th>
        <th>Storage Location</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td rowspan="5">P100 — Mumbai</td>
        <td>P101</td>
        <td>Raw Material</td>
       </tr>
       <tr>
        <td>P102</td>
        <td>Semi-Finished</td>
       </tr>
       <tr>
        <td>P103</td>
        <td>FG1 (Room Temperature)</td>
       </tr>
       <tr>
        <td>P104</td>
        <td>FG2 (Cool Temperature)</td>
       </tr>
       <tr>
        <td>P105</td>
        <td>Return</td>
       </tr>
       <tr>
        <td rowspan="5">P200 — Vapi</td>
        <td>P201</td>
        <td>Raw Material</td>
       </tr>
       <tr>
        <td>P202</td>
        <td>Semi-Finished</td>
       </tr>
       <tr>
        <td>P203</td>
        <td>FG1 (Room Temperature)</td>
       </tr>
       <tr>
        <td>P204</td>
        <td>FG2 (Cool Temperature)</td>
       </tr>
       <tr>
        <td>P205</td>
        <td>Return</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Materials Management</span>
      <span className="sep">→</span>
      <span className="node">Maintain Storage Location</span>
     </div>
     <div className="stepper">
      <div className="step">
       Go to <strong>Maintain Storage Location</strong> — the system first
       asks for a <strong>Plant</strong>. Enter <code>P100</code>
       → Continue.
      </div>
      <div className="step">
       New Entries → enter all 5 storage locations for that plant
       (P101–P105) → Save.
      </div>
      <div className="step">
       Go back → run Maintain Storage Location again, this time enter plant
       <code>P200</code> → Continue → New Entries → enter P201–P205 → Save.
      </div>
     </div>
     <div className="callout blue">
      🏢 <strong>No separate address needed:</strong> since a Storage
      Location exists <em>within</em> a Plant, it inherits the Plant's
      address — there's no separate address screen to maintain for Storage
      Location itself.
     </div>
    </div>

    {/* <!-- Section 5: Shipping Point --> */}
    <div className="card gold">
     <h2><span className="badge">9</span> Defining Shipping Point</h2>
     <div className="callout gold">
      💡 <strong>Shipping Point</strong> = a physical location where we do
      the process of <strong>loading the goods</strong>.
     </div>
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
        <td>Code Length</td>
        <td>4 digits</td>
       </tr>
       <tr>
        <td>Count in Our Project</td>
        <td>3 per plant</td>
       </tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Plant</th>
        <th>Code</th>
        <th>Shipping Point Type</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td rowspan="3">P100 — Mumbai</td>
        <td>P101</td>
        <td>Manual Shipping Point</td>
       </tr>
       <tr>
        <td>P102</td>
        <td>Automatic Shipping Point</td>
       </tr>
       <tr>
        <td>P103</td>
        <td>Immediate Shipping Point</td>
       </tr>
       <tr>
        <td rowspan="3">P200 — Vapi</td>
        <td>P201</td>
        <td>Manual Shipping Point</td>
       </tr>
       <tr>
        <td>P202</td>
        <td>Automatic Shipping Point</td>
       </tr>
       <tr>
        <td>P203</td>
        <td>Immediate Shipping Point</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Different path family!</strong> Shipping Point sits under
      <strong>Logistics Execution</strong>, not Sales and Distribution —
      because it's tied to the delivery/logistics process, not sales itself.
      Even so, the <strong>SD consultant remains responsible</strong> for
      defining it.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Logistics Execution</span>
      <span className="sep">→</span>
      <span className="node">Define, Copy, Delete, Check Shipping Point</span>
      <span className="sep">→</span>
      <span className="node">Define Shipping Point</span>
     </div>
     <h3>Fields to Maintain for Each Shipping Point</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value Used</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Factory Calendar</td>
        <td>01 (standard)</td>
       </tr>
       <tr>
        <td>Determine Load Time</td>
        <td>C</td>
       </tr>
       <tr>
        <td>Determine Pick/Pack Time</td>
        <td>C</td>
       </tr>
       <tr>
        <td>Loading Time</td>
        <td>1 day</td>
       </tr>
       <tr>
        <td>Pick/Pack Time</td>
        <td>1 day</td>
       </tr>
      </tbody>
     </table>
     <div className="stepper">
      <div className="step">
       New Entries → Code <code>P101</code>, Name
       <code>Mumbai Manual Shipping Point</code> → maintain the fields
       above → Enter.
      </div>
      <div className="step">
       Click <strong>Address</strong> → Name, Search Term, City
       <code>Mumbai</code>, Country <code>IN</code>, Region
       <code>13</code> → Continue → Save.
      </div>
      <div className="step">
       Repeat with New Entries for <code>P102</code> (Automatic) and
       <code>P103</code> (Immediate) under Mumbai, using the same field
       values and address pattern.
      </div>
      <div className="step">
       Repeat the full set again for the Vapi plant —
       <code>P201</code> (Manual), <code>P202</code> (Automatic),
       <code>P203</code>
       (Immediate).
      </div>
     </div>
     <div className="callout blue">
      🚚 <strong>Why does loading happen at a separate point?</strong> After
      goods are manufactured and stored (Storage Location), at the time of
      delivery the goods are <strong>picked</strong> from the storage
      location, <strong>packed</strong>, and then sent to the
      <strong>Shipping Point</strong> — where the actual loading onto the
      truck happens (Gate Out).
     </div>
    </div>

    {/* <!-- Section 6: Calendar recap --> */}
    <div className="card">
     <h2><span className="badge">📅</span> Where We Used Factory Calendar 01</h2>
     <div className="callout">
      🗓️ So far, the standard calendar <strong>01</strong> has been assigned
      at three different levels:
      <strong>Sales Organization</strong> (Lecture 8),
      <strong>Plant</strong>, and <strong>Shipping Point</strong> (today). A
      custom calendar can be created and swapped in later in the course,
      once calendar configuration is covered in detail.
     </div>
    </div>

    {/* <!-- Section 7: Practical coding discipline --> */}
    <div className="card purple">
     <h2>
      <span className="badge">💬</span> Practical Advice — Coding Discipline
      While Practicing
     </h2>
     <div className="callout red">
      ⚠️ <strong>Codes must be unique</strong> — a code like
      <code>P100</code> used in this course example won't necessarily be
      available for you to reuse while practicing on a shared server, since
      organizational unit codes must be unique within their own type. A code
      can be numeric, alphanumeric, or use special characters — use your own
      codes.
     </div>
     <div className="callout">
      📝 <strong>Keep a record of your own codes.</strong> Maintain an Excel
      sheet (or similar) noting exactly which code you assigned to each
      organizational unit — Company Code, Sales Organization, Distribution
      Channel, Division, Sales Office, Sales Group, Plant, Storage Location,
      Shipping Point. This record becomes essential later during the
      <strong>Assignment</strong> step (where all these units get linked
      together) — it's very easy to forget your own codes otherwise.
     </div>
     <p className="note-text">
      📌 The full picture of everything defined so far (the complete
      enterprise structure as configured) can later be viewed in the system
      as a structure/diagram — this will be shown once the Assignment step
      is covered.
     </p>
    </div>

    {/* <!-- Section 8: What's next --> */}
    <div className="card teal">
     <h2><span className="badge">➡️</span> What Comes Next — Assignment</h2>
     <div className="callout teal">
      🔗 With all <strong>9 organizational units now defined</strong> in the
      system, the next step is <strong>Assignment</strong> — linking these
      units together (e.g., assigning Sales Organization to Company Code,
      Plant to Sales Organization, etc.) so they form one coherent
      enterprise structure.
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
         What is a Sales Office, and who is responsible for defining it?
        </td>
        <td>
         A physical location where a group of people work together to
         perform sales; defined by the SD consultant
        </td>
       </tr>
       <tr>
        <td>What is a Sales Group?</td>
        <td>
         A group of people within a Sales Office who work on different
         activities; also defined by the SD consultant
        </td>
       </tr>
       <tr>
        <td>What is a Plant, and who defines it?</td>
        <td>
         A physical location where finished goods are manufactured;
         defined by the MM consultant
        </td>
       </tr>
       <tr>
        <td>
         What is a Storage Location, and where does its address come
         from?
        </td>
        <td>
         A physical location where goods are stored within a plant; it
         has no separate address of its own — it inherits the plant's
         address
        </td>
       </tr>
       <tr>
        <td>What is a Shipping Point?</td>
        <td>
         A physical location where the process of loading goods happens
        </td>
       </tr>
       <tr>
        <td>
         Under which SPRO node does Shipping Point get configured, and
         why is that different from other SD units?
        </td>
        <td>
         Logistics Execution — because it's tied to the delivery/loading
         process rather than sales itself, even though the SD consultant
         is still responsible for defining it
        </td>
       </tr>
       <tr>
        <td>
         When defining a Storage Location, what does the system ask for
         first?
        </td>
        <td>
         The Plant — since storage locations exist within a specific
         plant
        </td>
       </tr>
       <tr>
        <td>
         What key fields are maintained on a Shipping Point besides its
         code, name, and address?
        </td>
        <td>
         Factory Calendar, Determine Load Time, Determine Pick/Pack Time,
         Loading Time, and Pick/Pack Time
        </td>
       </tr>
       <tr>
        <td>
         At what point in the delivery process does the Shipping Point
         come into play?
        </td>
        <td>
         After goods are picked from the storage location and packed —
         they are then sent to the shipping point, where loading onto the
         truck happens
        </td>
       </tr>
       <tr>
        <td>
         Can an organizational unit's code be reused across different
         unit types?
        </td>
        <td>
         Yes — codes only need to be unique within the same
         organizational unit type (covered in Lecture 5); across
         different unit types, the same code value can be reused
        </td>
       </tr>
       <tr>
        <td>
         Why is it important to keep a written record of your own
         practice codes?
        </td>
        <td>
         Codes are needed again during the Assignment step, where all
         organizational units get linked together — without a record,
         it's easy to forget exactly which code was used where
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
         Entry point for all Enterprise Structure configuration covered
         today
        </td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Definition → Sales and Distribution →
         Maintain Sales Office
        </td>
        <td>Define Sales Office</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Definition → Sales and Distribution →
         Maintain Sales Group
        </td>
        <td>Define Sales Group</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Definition → Logistics – General →
         Define, Copy, Delete, Check Plant → Define Plant
        </td>
        <td>Define Plant</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Definition → Materials Management →
         Maintain Storage Location
        </td>
        <td>
         Define Storage Location (system prompts for the Plant first)
        </td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Definition → Logistics Execution →
         Define, Copy, Delete, Check Shipping Point → Define Shipping
         Point
        </td>
        <td>Define Shipping Point</td>
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
        <td>Sales Office (Alchem, practice)</td>
        <td>P100, Telangana Sales Office (1 of 25 real offices)</td>
       </tr>
       <tr>
        <td>Sales Groups (Alchem)</td>
        <td>P10 Insulin &amp; Antibiotic, P20 Other Group</td>
       </tr>
       <tr>
        <td>Manufacturing Plants (Alchem)</td>
        <td>P100 Mumbai, P200 Vapi — Factory Calendar 01 on both</td>
       </tr>
       <tr>
        <td>Storage Locations per plant</td>
        <td>
         5 — Raw Material, Semi-Finished, FG1 (room temp), FG2 (cool
         temp), Return
        </td>
       </tr>
       <tr>
        <td>Storage Location codes — Mumbai (P100)</td>
        <td>P101–P105</td>
       </tr>
       <tr>
        <td>Storage Location codes — Vapi (P200)</td>
        <td>P201–P205</td>
       </tr>
       <tr>
        <td>Shipping Points per plant</td>
        <td>3 — Manual, Automatic, Immediate</td>
       </tr>
       <tr>
        <td>Shipping Point codes — Mumbai (P100)</td>
        <td>P101 Manual, P102 Automatic, P103 Immediate</td>
       </tr>
       <tr>
        <td>Shipping Point codes — Vapi (P200)</td>
        <td>P201 Manual, P202 Automatic, P203 Immediate</td>
       </tr>
       <tr>
        <td>Shipping Point field settings</td>
        <td>
         Factory Calendar 01, Determine Load Time C, Determine Pick/Pack
         Time C, Loading Time 1 day, Pick/Pack Time 1 day
        </td>
       </tr>
       <tr>
        <td>Levels where Calendar 01 was assigned so far</td>
        <td>Sales Organization, Plant, Shipping Point</td>
       </tr>
       <tr>
        <td>Region code used (Mumbai-based units)</td>
        <td>13 (Maharashtra)</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed the hands-on definition of all remaining
      Enterprise Structure organizational units in the live system.
      <strong>Sales Office</strong> (P100, Telangana — one of 25 real
      offices) and <strong>Sales Group</strong> (P10, P20) were configured
      under the same Sales and Distribution SPRO path used for earlier SD
      units. <strong>Plant</strong> (P100 Mumbai, P200 Vapi) moved to the
      Logistics General path, with Factory Calendar 01 and a full address
      maintained for each. <strong>Storage Location</strong> (5 per plant:
      Raw Material, Semi-Finished, FG1, FG2, Return) lives under Materials
      Management and always prompts for its parent Plant first — with no
      separate address screen, since it inherits the plant's address.
      <strong>Shipping Point</strong> (3 per plant: Manual, Automatic,
      Immediate) was the odd one out — configured under Logistics Execution
      rather than Sales and Distribution, despite remaining an SD
      responsibility — with its own set of loading-related fields (Factory
      Calendar, Determine Load/Pick/Pack Time, Loading Time, Pick/Pack
      Time). The lecture closed with practical guidance: codes must be
      unique, students should use their own codes rather than copying the
      class examples verbatim, and every code should be recorded (e.g., in
      Excel) since they'll be needed again during the upcoming
      <strong>Assignment</strong> step, which links all nine units into one
      coherent enterprise structure.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>Sales Office &amp; Sales Group</strong> follow the same SPRO
       path family as Sales Organization/Distribution Channel (Sales and
       Distribution)
      </li>
      <li>
       <strong>Plant</strong> lives under Logistics General;
       <strong>Storage Location</strong> under Materials Management (and
       always needs its Plant specified first);
       <strong>Shipping Point</strong> under Logistics Execution — three
       different path families for three related units
      </li>
      <li>
       Storage Location has <strong>no separate address</strong> — it
       inherits the parent Plant's address
      </li>
      <li>
       Shipping Point carries its own operational fields: Factory Calendar,
       Determine Load Time, Determine Pick/Pack Time, Loading Time,
       Pick/Pack Time
      </li>
      <li>
       <strong>Codes must be unique</strong> per organizational unit type —
       always record your own practice codes for later use in Assignment
      </li>
      <li>
       All <strong>9 organizational units are now fully defined</strong> —
       next up is linking them together via <strong>Assignment</strong>
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Assignment of organizational units —
      connecting Sales Organization to Company Code, Plant to Sales
      Organization, and so on, to complete the enterprise structure
      end-to-end.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 9 Notes — Hands-On Configuration: Sales Office, Sales Group,
    Plant, Storage Location &amp; Shipping Point 🎓
   </p>
  </div>
 );
};

export default Enterprise9;
