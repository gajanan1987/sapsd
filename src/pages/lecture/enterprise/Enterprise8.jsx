const Enterprise8 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-green">
    <h1>
     🛠️ Lecture 8 — Hands-On Configuration: Company Code, Sales Organization,
     Distribution Channel &amp; Division
    </h1>
    <p>
     SAP SD | First real configuration in the system — SPRO paths, address
     data, request numbers, and the multi-module path for Division
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered logging into SAP and the SPRO path to reach
      <strong>Edit Company Code Data</strong>. Today that path is actually
      used — Company Code, Sales Organization, Distribution Channel, and
      Division are configured live in the system.
     </div>
    </div>

    {/* <!-- Section 1: Company Code config --> */}
    <div className="card">
     <h2><span className="badge">1</span> Defining Company Code in SAP</h2>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">SAP Reference IMG</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Financial Accounting</span>
      <span className="sep">→</span>
      <span className="node">Edit, Copy, Delete, Check Company Code</span>
      <span className="sep">→</span>
      <span className="node">Edit Company Code Data</span>
     </div>
     <div className="callout red">
      ⚠️
      <strong>Before assigning any code, always cross-check</strong> using
      <strong>Position</strong> to confirm it doesn't already exist. If the
      code is already taken, a different one must be used.
     </div>
     <h3>Step-by-Step: Creating Company Code P100</h3>
     <div className="stepper">
      <div className="step">
       <strong>New Entries</strong> → enter Code <code>P100</code>, Company
       Name <code>Alchem Laboratories Limited</code>, City
       <code>Mumbai</code>, Country <code>IN</code>, Currency
       <code>INR</code>, Language <code>EN</code>.
      </div>
      <div className="step">
       Click the <strong>Address</strong> icon → in the Address tab, enter
       Title = <code>Company</code> (Title is maintained only for Company
       Code), Name (repeat the company name), and
       <strong>Search Term</strong>.
      </div>
      <div className="step">
       Enter Street, House Number, Postal Code, City (<code>Mumbai</code>),
       Country (<code>IN</code>), and Region (<code>13</code> for
       Maharashtra — use F4/dropdown to look up the correct region code).
      </div>
      <div className="step">
       Scroll to Communication → enter company telephone number, mobile
       number, and email ID → press Enter → Save.
      </div>
      <div className="step">
       The address screen reappears — press Enter again to confirm.
      </div>
     </div>
     <div className="callout blue">
      🔍 <strong>What is Search Term for?</strong> It's a shortcut key used
      later to quickly search for the company/company code (e.g. a few
      starting letters like "BLK") instead of typing the full name.
     </div>
     <div className="callout">
      🔴 <strong>Mandatory vs. optional fields:</strong> a field marked with
      a special required-field symbol (visible next to fields like Country)
      is mandatory — leaving it blank throws "Fill in all required entry
      fields." A field without that symbol (e.g. Postal Code) is optional.
      Note also that Postal Code has <strong>no F4/dropdown help</strong> —
      it must be entered manually, unlike Country which offers a selectable
      list.
     </div>
    </div>

    {/* <!-- Section 2: Request number --> */}
    <div className="card orange">
     <h2><span className="badge">2</span> Request Number (Transport Request)</h2>
     <div className="callout orange">
      💡 When saving Company Code (or any configuration) for the very first
      time, the system asks for a <strong>Request Number</strong> — it isn't
      generated automatically on the first save.
     </div>
     <div className="stepper">
      <div className="step">Click <strong>Create Request</strong>.</div>
      <div className="step">
       Give a short description (e.g. "Creating Enterprise Structure").
      </div>
      <div className="step">
       Click <strong>Save</strong> — the system generates the request
       number automatically.
      </div>
      <div className="step">
       Click <strong>Continue</strong> → the message
       <em>"Data was saved"</em> confirms success.
      </div>
     </div>
     <div className="callout green">
      ✅ <strong>Purpose of the Request Number:</strong> it helps
      <strong>transport configurations from one server to another</strong>
      (Development → Quality → Production).
     </div>
     <div className="callout blue">
      🔁 <strong>Reuse the same request:</strong> once a request number
      exists, all subsequent Enterprise Structure configuration (Sales
      Organization, Distribution Channel, Division, etc.) is saved into that
      <strong>same request</strong> — you don't create a brand-new one for
      every single object.
     </div>
     <p className="note-text">
      📌 "Request Number" and "Transport Request" refer to the same thing.
     </p>
    </div>

    {/* <!-- Section 3: Editing an existing Company Code --> */}
    <div className="card">
     <h2>
      <span className="badge">✏️</span> Changing an Already-Defined Company Code
     </h2>
     <div className="stepper">
      <div className="step">
       Go to the same SPRO path → Edit Company Code Data.
      </div>
      <div className="step">
       Use <strong>Position</strong> to jump directly to your Company Code
       (e.g. P100), select it, then click
       <strong>Details</strong> (magnifying glass icon).
      </div>
      <div className="step">
       Click the <strong>Address</strong> icon to edit address fields (e.g.
       correcting a wrong postal code) → press Enter → Save.
      </div>
      <div className="step">
       If prompted for a request number and one already exists, simply
       continue and it saves into that existing request.
      </div>
     </div>
    </div>

    {/* <!-- Section 4: Sales Organization config --> */}
    <div className="card teal">
     <h2><span className="badge">3</span> Defining Sales Organization in SAP</h2>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">
       Define, Copy, Delete, Check Sales Organization
      </span>
      <span className="sep">→</span>
      <span className="node">Define Sales Organization</span>
     </div>
     <div className="stepper">
      <div className="step">
       Cross-check the code isn't already in use →
       <strong>New Entries</strong>.
      </div>
      <div className="step">
       Code <code>P100</code>, Name
       <code>Alchem Domestic Sales Organization</code>, Currency
       <code>INR</code>, Sales Organization Calendar
       <code>01</code> (standard calendar, used until a custom one is
       created later) → Enter (a warning message may appear — this is
       expected).
      </div>
      <div className="step">
       Click the <strong>Address</strong> icon → Name, Search Term, Street,
       House Number, Postal Code, City (<code>Mumbai</code>), Country
       (<code>IN</code>), Region (<code>13</code>) → scroll down for
       Telephone, Mobile, Fax, Email → Enter → Save.
      </div>
      <div className="step">
       Repeat with <strong>New Entries</strong> for the second Sales
       Organization: Code <code>P200</code>, Name
       <code>Alchem Export Sales Organization</code>, same Currency and
       Calendar settings, its own address details → Save.
      </div>
     </div>
     <div className="callout">
      📌 <strong>Title field:</strong> unlike Company Code, Title is
      <strong>not</strong> maintained for Sales Organization's address.
     </div>
     <div className="callout blue">
      💡 <strong>Address can differ per Sales Organization</strong> — in
      this project both sales organizations happen to share the same Mumbai
      address, but in real projects each sales organization can have its own
      physical location.
     </div>
     <div className="callout red">
      ⚠️ <strong>Scope clarification:</strong> Sales Organization has
      <strong>no direct relationship</strong> with Sales Group — Sales Group
      relates to Sales Office, not Sales Organization.
     </div>
    </div>

    {/* <!-- Section 5: Distribution Channel config --> */}
    <div className="card purple">
     <h2>
      <span className="badge">4</span> Defining Distribution Channel in SAP
     </h2>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span>
      <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">
       Define, Copy, Delete, Check Distribution Channel</span>
      <span className="sep">→</span>
      <span className="node">Define Distribution Channel</span>
     </div>
     <p className="note-text">
      📌 Same overall path family as Sales Organization — just under
      "Distribution Channel" instead.
     </p>
     <div className="stepper">
      <div className="step">
       <strong>New Entries</strong> → enter all four codes and names in one
       go.
      </div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Name</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P1</td>
        <td>Dealers</td>
       </tr>
       <tr>
        <td>P2</td>
        <td>Distributors</td>
       </tr>
       <tr>
        <td>P3</td>
        <td>Institutions</td>
       </tr>
       <tr>
        <td>P4</td>
        <td>Direct</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">Save once all four rows are entered.</p>
    </div>

    {/* <!-- Section 6: Division config --> */}
    <div className="card gold">
     <h2><span className="badge">5</span> Defining Division in SAP</h2>
     <div className="callout red">
      ⚠️ <strong>Different path family!</strong> Division sits under
      <strong>Logistics General</strong>, not Sales and Distribution —
      because Division is a concept
      <strong>shared across multiple modules</strong> (not SD alone). Even
      so, the <strong>SD consultant remains the one responsible</strong> for
      actually defining it.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span>
      <span className="sep">→</span> <span className="node">Definition</span>
      <span className="sep">→</span>
      <span className="node">Logistics – General</span>
      <span className="sep">→</span>
      <span className="node">Define, Copy, Delete, Check Division</span>
      <span className="sep">→</span>
      <span className="node">Define Division</span>
     </div>
     <div className="stepper">
      <div className="step">
       <strong>New Entries</strong> → enter all six codes and names.
      </div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Name</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P1</td>
        <td>Gynecology</td>
       </tr>
       <tr>
        <td>P2</td>
        <td>Pediatric</td>
       </tr>
       <tr>
        <td>P3</td>
        <td>Insulin</td>
       </tr>
       <tr>
        <td>P4</td>
        <td>Antibiotic</td>
       </tr>
       <tr>
        <td>P5</td>
        <td>Cardiology</td>
       </tr>
       <tr>
        <td>P6</td>
        <td>Orthopedic</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      ✏️ <strong>Editing later:</strong> after saving, the
      <strong>Name</strong> field can still be edited, but the
      <strong>Code</strong> field becomes disabled/locked once saved.
     </div>
    </div>

    {/* <!-- Section 7: Best practice note --> */}
    <div className="card">
     <h2>
      <span className="badge">💬</span> New Entries vs. Copying a Standard
      Object
     </h2>
     <div className="callout">
      💡 <strong>Common question:</strong> is it better to create an
      organizational unit via New Entries, or by copying an existing
      standard SAP object?
      <strong>There is no fixed "best practice"</strong> — SAP itself
      doesn't mandate either approach; it's entirely the consultant's call.
     </div>
     <div className="callout red">
      ⚠️ <strong>Downside of copying a standard object:</strong> copying
      brings along all the standard object's related settings too, which
      then have to be manually cleaned up/deleted — a waste of time.
      Creating fresh via New Entries avoids that overhead. (The copy
      approach itself is covered later in the course.)
     </div>
    </div>

    {/* <!-- Section 8: Consolidated path reference --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">📋</span> SPRO Path Quick Reference — Units
      Covered Today
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Unit</th>
        <th>Path Family</th>
        <th>Final Node</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Company Code</td>
        <td>Enterprise Structure → Definition → Financial Accounting</td>
        <td>Edit Company Code Data</td>
       </tr>
       <tr>
        <td>Sales Organization</td>
        <td>
         Enterprise Structure → Definition → Sales and Distribution
        </td>
        <td>Define Sales Organization</td>
       </tr>
       <tr>
        <td>Distribution Channel</td>
        <td>
         Enterprise Structure → Definition → Sales and Distribution
        </td>
        <td>Define Distribution Channel</td>
       </tr>
       <tr>
        <td>Division</td>
        <td>Enterprise Structure → Definition → Logistics – General</td>
        <td>Define Division</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      📅 <strong>Next class:</strong> Sales Office and the remaining
      organizational units, configured the same way.
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
         Before assigning a new code, what must you always do first?
        </td>
        <td>
         Use Position to cross-check whether that code already exists in
         the system
        </td>
       </tr>
       <tr>
        <td>What is the Search Term field used for?</td>
        <td>
         A shortcut key to quickly search for the company/organizational
         unit later, instead of typing the full name
        </td>
       </tr>
       <tr>
        <td>
         How do you identify whether a field is mandatory or optional?
        </td>
        <td>
         Mandatory fields display a required-field indicator symbol (e.g.
         next to Country); fields without it are optional
        </td>
       </tr>
       <tr>
        <td>Does every field support F4/dropdown lookup?</td>
        <td>
         No — e.g. Country supports F4 selection, but Postal Code must
         always be entered manually
        </td>
       </tr>
       <tr>
        <td>When does the system first ask for a Request Number?</td>
        <td>
         The very first time a configuration is saved — it is not
         auto-generated before that
        </td>
       </tr>
       <tr>
        <td>What is the purpose of the Request Number?</td>
        <td>
         To transport configurations from one server to another
         (Development → Quality → Production)
        </td>
       </tr>
       <tr>
        <td>
         Do you create a new request number for every single
         configuration object?
        </td>
        <td>
         No — once a request exists, subsequent related configuration
         (e.g. the rest of Enterprise Structure) is saved into the same
         request
        </td>
       </tr>
       <tr>
        <td>Is "Request Number" different from "Transport Request"?</td>
        <td>No — they refer to the same thing</td>
       </tr>
       <tr>
        <td>
         Is the Title field maintained for Sales Organization's address,
         like it is for Company Code?
        </td>
        <td>No — Title is maintained only for Company Code</td>
       </tr>
       <tr>
        <td>
         Does Sales Organization have a direct relationship with Sales
         Group?
        </td>
        <td>
         No — Sales Group relates to Sales Office, not Sales Organization
        </td>
       </tr>
       <tr>
        <td>
         Why is Division configured under Logistics General instead of
         Sales and Distribution?
        </td>
        <td>
         Because Division is used by multiple modules, not SD alone —
         even though the SD consultant remains responsible for actually
         defining it
        </td>
       </tr>
       <tr>
        <td>After saving a Division, can you still edit its Code?</td>
        <td>
         No — the Code becomes disabled once saved; only the Name remains
         editable
        </td>
       </tr>
       <tr>
        <td>
         Is copying from a standard SAP object considered best practice
         over New Entries?
        </td>
        <td>
         No — there's no fixed best practice; it's the consultant's
         choice. Copying brings along the standard object's extra
         settings, which then need manual cleanup
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
         Enterprise Structure → Definition → Financial Accounting → Edit,
         Copy, Delete, Check Company Code
        </td>
        <td>Define/edit Company Code</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Definition → Sales and Distribution →
         Define, Copy, Delete, Check Sales Organization
        </td>
        <td>Define Sales Organization</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Definition → Sales and Distribution →
         Define, Copy, Delete, Check Distribution Channel
        </td>
        <td>Define Distribution Channel</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Definition → Logistics – General →
         Define, Copy, Delete, Check Division
        </td>
        <td>Define Division</td>
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
        <td>Company Code created</td>
        <td>
         P100, Alchem Laboratories Limited, Mumbai, IN, Currency INR,
         Language EN, Region 13
        </td>
       </tr>
       <tr>
        <td>Sales Organizations created</td>
        <td>
         P100 Alchem Domestic Sales Organization; P200 Alchem Export
         Sales Organization — both Currency INR, Calendar 01
        </td>
       </tr>
       <tr>
        <td>Distribution Channels created</td>
        <td>P1 Dealers, P2 Distributors, P3 Institutions, P4 Direct</td>
       </tr>
       <tr>
        <td>Divisions created</td>
        <td>
         P1 Gynecology, P2 Pediatric, P3 Insulin, P4 Antibiotic, P5
         Cardiology, P6 Orthopedic
        </td>
       </tr>
       <tr>
        <td>Region code used</td>
        <td>13 (Maharashtra)</td>
       </tr>
       <tr>
        <td>Sales Organization Calendar (interim)</td>
        <td>
         01 (standard), until a custom calendar is created later in the
         course
        </td>
       </tr>
       <tr>
        <td>Request Number behavior</td>
        <td>
         Created once (first save), then reused for all subsequent
         Enterprise Structure configuration
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture moved from theory into live, hands-on configuration.
      <strong>Company Code</strong> (P100, Alchem Laboratories Limited) was
      created via SPRO → Enterprise Structure → Definition → Financial
      Accounting, including full address data (search term, mandatory-field
      rules, region lookup) and the first-time
      <strong>Request Number</strong> creation — which exists purely to
      transport configuration between servers, and gets reused for all
      further Enterprise Structure work.
      <strong>Sales Organization</strong> (P100 Domestic, P200 Export)
      followed the Sales and Distribution path with its own currency and
      calendar settings. <strong>Distribution Channel</strong> (P1–P4:
      Dealers, Distributors, Institutions, Direct) used the same path
      family. <strong>Division</strong> (P1–P6: the six therapeutic areas)
      took a different path — Logistics General, since Division is shared
      across multiple SAP modules even though SD remains responsible for
      defining it. The lecture closed by clarifying that there's no fixed
      "best practice" between New Entries and copying a standard object —
      it's a consultant's judgment call, with New Entries generally avoiding
      the cleanup overhead that copying introduces.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>Always cross-check a code via Position</strong> before
       assigning it — codes must be unique within their organizational unit
      </li>
      <li>
       <strong>Search Term</strong> = a shortcut key for later lookup;
       mandatory fields are marked with a required-field symbol; not every
       field supports F4 lookup (e.g. Postal Code doesn't)
      </li>
      <li>
       The <strong>Request Number</strong> is created once and reused — its
       sole purpose is transporting configuration across servers
      </li>
      <li>
       <strong>Distribution Channel</strong> and
       <strong>Sales Organization</strong> both live under the Sales and
       Distribution path; <strong>Division</strong> lives under Logistics
       General since it's shared across modules
      </li>
      <li>
       No universal "best practice" between New Entries and copying a
       standard object — it's the consultant's call, and copying requires
       extra cleanup
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Continue hands-on configuration with
      Sales Office and the remaining organizational units.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 8 Notes — Hands-On Configuration: Company Code, Sales
    Organization, Distribution Channel &amp; Division 🎓
   </p>
  </div>
 );
};

export default Enterprise8;
