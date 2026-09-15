const Enterprise10 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-cyan">
    <h1>
     🔗 Lecture 10 — Assignment of Enterprise Structure: Sales Organization,
     Distribution Channel, Division &amp; Sales Area
    </h1>
    <p>
     SAP SD | Linking the organizational units together — the one-to-many vs.
     many-to-many rule, sales lines, and 30 sales areas
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Quick Recap</h2>
     <div className="callout blue">
      💡 All <strong>9 organizational units</strong> (Company Code through
      Shipping Point) are now defined in the system. Today we start
      <strong>Assignment</strong> — linking these units together so SAP
      understands how they relate to one another.
     </div>
    </div>

    {/* <!-- Section 1: What is Assignment --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">1</span> What Is Assignment of Enterprise
      Structure?
     </h2>
     <div className="callout indigo">
      🔗 <strong>Assignment</strong> = maintaining the
      <strong>relationship between organizational units</strong>.
     </div>
     <p>
      Just defining organizational units isn't enough — at this point, the
      system has no idea how they connect. For example: we have one Company
      Code (<code>P100</code>) and two Sales Organizations (<code
      >P100</code
      >
      Domestic, <code>P200</code> Export). Right now, the system doesn't
      know that these two sales organizations belong to this company code —
      that relationship has to be explicitly <strong>assigned</strong>. Only
      after assignment does the system recognize that P100 and P200 (Sales
      Organizations) belong to P100 (Company Code).
     </p>
    </div>

    {/* <!-- Section 2: 1:many vs many:many rule --> */}
    <div className="card purple">
     <h2>
      <span className="badge">🔑</span> The Core Rule — One-to-Many vs.
      Many-to-Many
     </h2>
     <div className="callout purple">
      🎯 Every single assignment in Enterprise Structure follows one of
      exactly <strong>two relationship types</strong> — there is no third
      option (no one-to-one, no many-to-one).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Does the assignment involve Company Code?</th>
        <th>Relationship Type</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>✅ Yes — Company Code is part of this assignment</td>
        <td><strong>One-to-Many</strong></td>
       </tr>
       <tr>
        <td>❌ No — Company Code is not involved</td>
        <td><strong>Many-to-Many</strong></td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      💡 <strong>Quick test:</strong> look at whether Company Code appears
      in that particular assignment screen. If it does, the relationship is
      one-to-many. If it doesn't, the relationship is many-to-many. This
      single rule applies across every assignment covered in this lecture.
     </div>
    </div>

    {/* <!-- Section 3: Assignment 1 - Sales Org to Company Code --> */}
    <div className="card teal">
     <h2>
      <span className="badge">2</span> Assignment 1 — Sales Organization to
      Company Code
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
        <td>
         <strong>One-to-Many</strong> (Company Code is present in this
         assignment)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📖 <strong>What "one-to-many" means here:</strong> one Company Code
      can have <em>many</em> Sales Organizations assigned to it, but any
      single Sales Organization can be assigned to
      <strong>only one</strong> Company Code. Once P100 and P200 (Sales
      Organizations) are assigned to Company Code P100, they
      <strong>cannot</strong> be reassigned to a different Company Code
      later.
     </div>
     <h3>Worked Assignment</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sales Organization</th>
        <th>Company Code</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P100 (Domestic)</td>
        <td>P100</td>
       </tr>
       <tr>
        <td>P200 (Export)</td>
        <td>P100</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span
      ><span className="sep">→</span> <span className="node">Assignment</span
      ><span className="sep">→</span>
      <span className="node">Sales and Distribution</span
      ><span className="sep">→</span>
      <span className="node">Assign Sales Organization to Company Code</span>
     </div>
     <div className="stepper">
      <div className="step">
       Use <strong>Position</strong> to jump directly to your Sales
       Organization (e.g., P100).
      </div>
      <div className="step">
       Enter your Company Code (P100) against it → press Enter.
      </div>
      <div className="step">
       Repeat for the second Sales Organization (P200) → assign the same
       Company Code (P100).
      </div>
      <div className="step">Save.</div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Practical tip — handling the "other" warning:</strong> on a
      shared practice server, the system may prompt about other (unrelated)
      sales organizations belonging to other students when you press Enter
      or Save. If this happens and it's not your own data, simply
      <strong>Cancel</strong> that prompt, confirm
      <strong>Yes</strong> ("changes will be lost" — meaning only the
      unrelated data, not yours), and continue saving. You may see this
      prompt a couple of times before the final save goes through with a
      request number.
     </div>
    </div>

    {/* <!-- Section 4: Assignment 2 - Distribution Channel to Sales Org --> */}
    <div className="card orange">
     <h2>
      <span className="badge">3</span> Assignment 2 — Distribution Channel to
      Sales Organization
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
        <td>
         <strong>Many-to-Many</strong> (no Company Code involved in this
         assignment)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📖 <strong>What "many-to-many" means here:</strong> one Sales
      Organization can have <em>many</em> Distribution Channels, and one
      Distribution Channel can be assigned to <em>many</em> Sales
      Organizations.
     </div>
     <h3>Worked Assignment — Why Export Only Gets "Direct"</h3>
     <p>
      Domestic Sales Organization (P100) sells through all four channels;
      the Export Sales Organization (P200) only uses Direct, since
      <strong>export customers place orders directly</strong> — there's no
      dealer/distributor network involved in exports.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sales Organization</th>
        <th>Distribution Channel Assigned</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td rowspan="4">P100 (Domestic)</td>
        <td>P1 (Dealers)</td>
       </tr>
       <tr>
        <td>P2 (Distributors)</td>
       </tr>
       <tr>
        <td>P3 (Institutions)</td>
       </tr>
       <tr>
        <td>P4 (Direct)</td>
       </tr>
       <tr>
        <td>P200 (Export)</td>
        <td>
         P4 (Direct) — the same code P4 is reused here since the
         relationship is many-to-many
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout gold">
      🏷️ <strong>New term: "Sales Line."</strong> The combination of
      <strong>Sales Organization + Distribution Channel</strong> is referred
      to as a <strong>Sales Line</strong>. In our project we end up with
      <strong>5 sales lines</strong>: P100/P1, P100/P2, P100/P3, P100/P4,
      and P200/P4.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span
      ><span className="sep">→</span> <span className="node">Assignment</span
      ><span className="sep">→</span>
      <span className="node">Sales and Distribution</span
      ><span className="sep">→</span>
      <span className="node"
      >Assign Distribution Channel to Sales Organization</span
      >
     </div>
     <p className="note-text">
      New Entries → enter all 5 combinations (P100/P1, P100/P2, P100/P3,
      P100/P4, P200/P4) in one go → Save.
     </p>
    </div>

    {/* <!-- Section 5: Assignment 3 - Division to Sales Org --> */}
    <div className="card gold">
     <h2>
      <span className="badge">4</span> Assignment 3 — Division to Sales
      Organization
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
        <td><strong>Many-to-Many</strong> (no Company Code involved)</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📖 <strong>What "many-to-many" means here:</strong> one Sales
      Organization can have <em>many</em> Divisions, and one Division can be
      assigned to <em>many</em> Sales Organizations.
     </div>
     <p>
      In this project, both Sales Organizations sell across all six
      therapeutic divisions:
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sales Organization</th>
        <th>Divisions Assigned</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P100 (Domestic)</td>
        <td>P1, P2, P3, P4, P5, P6 (all six)</td>
       </tr>
       <tr>
        <td>P200 (Export)</td>
        <td>P1, P2, P3, P4, P5, P6 (all six)</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span
      ><span className="sep">→</span> <span className="node">Assignment</span
      ><span className="sep">→</span>
      <span className="node">Sales and Distribution</span
      ><span className="sep">→</span>
      <span className="node">Assign Division to Sales Organization</span>
     </div>
     <p className="note-text">
      New Entries → enter all 12 combinations (P100 × P1–P6, P200 × P1–P6) →
      press Enter → Save.
     </p>
    </div>

    {/* <!-- Section 6: Assignment 4 - Set Up Sales Area --> */}
    <div className="card red">
     <h2><span className="badge">5</span> Assignment 4 — Set Up Sales Area</h2>
     <div className="callout red">
      🎯 <strong>Sales Area</strong> = the combination of
      <strong>Sales Organization + Distribution Channel + Division</strong>.
     </div>
     <p>
      Since each Sales Line (Sales Org + Distribution Channel combination)
      can be sold across all 6 divisions, the total number of Sales Areas
      is:
      <strong>5 Sales Lines × 6 Divisions = 30 Sales Areas</strong>.
     </p>
     <h3>Full List — All 30 Sales Areas</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sales Org</th>
        <th>Dist. Channel</th>
        <th>Divisions Combined (× 6 each)</th>
        <th>Sales Areas in This Group</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P100</td>
        <td>P1</td>
        <td>P1, P2, P3, P4, P5, P6</td>
        <td>6 (P100-P1-P1 … P100-P1-P6)</td>
       </tr>
       <tr>
        <td>P100</td>
        <td>P2</td>
        <td>P1, P2, P3, P4, P5, P6</td>
        <td>6 (P100-P2-P1 … P100-P2-P6)</td>
       </tr>
       <tr>
        <td>P100</td>
        <td>P3</td>
        <td>P1, P2, P3, P4, P5, P6</td>
        <td>6 (P100-P3-P1 … P100-P3-P6)</td>
       </tr>
       <tr>
        <td>P100</td>
        <td>P4</td>
        <td>P1, P2, P3, P4, P5, P6</td>
        <td>6 (P100-P4-P1 … P100-P4-P6)</td>
       </tr>
       <tr>
        <td>P200</td>
        <td>P4</td>
        <td>P1, P2, P3, P4, P5, P6</td>
        <td>6 (P200-P4-P1 … P200-P4-P6)</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>Total in this project: 30 Sales Areas.</strong>
      5 sales lines × 6 divisions each = 30. This matches the count verified
      live in the system after saving.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span
      ><span className="sep">→</span> <span className="node">Assignment</span
      ><span className="sep">→</span>
      <span className="node">Sales and Distribution</span
      ><span className="sep">→</span>
      <span className="node">Set Up Sales Area</span>
     </div>
     <div className="stepper">
      <div className="step">
       New Entries → enter each Sales Org + Distribution Channel + Division
       combination, one row at a time (or in bulk): P100-P1 paired with
       each of P1–P6, then P100-P2 paired with each of P1–P6, and so on
       through all 5 sales lines.
      </div>
      <div className="step">
       Save — a request number is generated (or reused, if one already
       exists).
      </div>
      <div className="step">
       Verify the total count shown by the system matches the expected 30.
      </div>
     </div>
    </div>

    {/* <!-- Section 7: Practical Q&A --> */}
    <div className="card purple">
     <h2>
      <span className="badge">💬</span> Practical Notes &amp; Troubleshooting
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
        <td>What happens if these assignments are skipped?</td>
        <td>
         The project cannot proceed further — later configuration (like
         pricing, availability checks, and transaction processing)
         depends on these relationships being established
        </td>
       </tr>
       <tr>
        <td>Can a wrong assignment be corrected?</td>
        <td>
         Yes — select the incorrect combination row and use the
         <strong>Delete</strong> symbol, then save. Afterward, the
         correct combination can be entered and saved again
        </td>
       </tr>
       <tr>
        <td>
         Why does the system sometimes prompt for confirmation multiple
         times while saving?
        </td>
        <td>
         On a shared practice server, other students' data may surface in
         the same screen; cancel prompts that aren't related to your own
         combination, confirm the data-loss warning (which only discards
         the unrelated preview, not your entries), and continue to save
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📝 <strong>Reminder:</strong> you must remember (or have recorded)
      your own organizational unit codes to complete these assignments — if
      you don't recall a code, you'd have to go back and check (or redefine)
      it before you can assign it correctly.
     </div>
    </div>

    {/* <!-- Section 8: Consolidated reference --> */}
    <div className="card">
     <h2><span className="badge">📋</span> Assignments Covered So Far</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Assignment</th>
        <th>Relationship</th>
        <th>Count in This Project</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Sales Organization → Company Code</td>
        <td>One-to-Many</td>
        <td>2 (P100, P200 → P100)</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Distribution Channel → Sales Organization</td>
        <td>Many-to-Many</td>
        <td>5 sales lines</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Division → Sales Organization</td>
        <td>Many-to-Many</td>
        <td>12 combinations (2 sales orgs × 6 divisions)</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Set Up Sales Area</td>
        <td>Combination (Sales Org + Dist. Channel + Division)</td>
        <td>30 sales areas</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📅 More assignments remain (e.g., Plant to Sales Organization/
      Distribution Channel, Shipping Point determination, and others) —
      continued in the next class.
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
        <td>What does "Assignment" mean in Enterprise Structure?</td>
        <td>
         Maintaining the relationship between organizational units so the
         system understands how they connect (e.g., which Sales
         Organizations belong to which Company Code)
        </td>
       </tr>
       <tr>
        <td>
         What are the only two relationship types found in Enterprise
         Structure assignments?
        </td>
        <td>
         One-to-Many and Many-to-Many — there is no one-to-one or
         many-to-one
        </td>
       </tr>
       <tr>
        <td>
         How can you quickly tell whether an assignment is one-to-many or
         many-to-many?
        </td>
        <td>
         If Company Code is part of that assignment, it's one-to-many; if
         Company Code is not involved, it's many-to-many
        </td>
       </tr>
       <tr>
        <td>
         What is the relationship between Company Code and Sales
         Organization, and what does it mean practically?
        </td>
        <td>
         One-to-many — one Company Code can have many Sales
         Organizations, but a given Sales Organization can only ever be
         assigned to one Company Code
        </td>
       </tr>
       <tr>
        <td>
         What is the relationship between Sales Organization and
         Distribution Channel?
        </td>
        <td>
         Many-to-many — one Sales Organization can have many Distribution
         Channels, and one Distribution Channel can be assigned to many
         Sales Organizations
        </td>
       </tr>
       <tr>
        <td>What is a "Sales Line"?</td>
        <td>
         The combination of Sales Organization + Distribution Channel
        </td>
       </tr>
       <tr>
        <td>
         Why does the Export Sales Organization only get the Direct
         distribution channel?
        </td>
        <td>
         Export customers place orders directly — there's no
         dealer/distributor network involved in export sales
        </td>
       </tr>
       <tr>
        <td>
         What is the relationship between Sales Organization and
         Division?
        </td>
        <td>
         Many-to-many — one Sales Organization can have many Divisions,
         and one Division can be assigned to many Sales Organizations
        </td>
       </tr>
       <tr>
        <td>What is a "Sales Area"?</td>
        <td>
         The combination of Sales Organization + Distribution Channel +
         Division
        </td>
       </tr>
       <tr>
        <td>
         How many Sales Areas exist in this project's example, and how is
         that number derived?
        </td>
        <td>30 — calculated as 5 sales lines × 6 divisions each</td>
       </tr>
       <tr>
        <td>
         Can a Sales Organization already assigned to one Company Code be
         reassigned to another?
        </td>
        <td>
         No — because the relationship is one-to-many, a Sales
         Organization can belong to only one Company Code
        </td>
       </tr>
       <tr>
        <td>
         What happens if the Enterprise Structure assignments are not
         completed?
        </td>
        <td>
         The project cannot proceed further — downstream configuration
         and transactions depend on these relationships
        </td>
       </tr>
       <tr>
        <td>How do you correct an incorrectly saved assignment?</td>
        <td>
         Select the wrong combination, use the Delete option, save, then
         re-enter and save the correct combination
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
         covered today
        </td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Assignment → Sales and Distribution →
         Assign Sales Organization to Company Code
        </td>
        <td>Assignment 1 (One-to-Many)</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Assignment → Sales and Distribution →
         Assign Distribution Channel to Sales Organization
        </td>
        <td>Assignment 2 (Many-to-Many) — defines Sales Lines</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Assignment → Sales and Distribution →
         Assign Division to Sales Organization
        </td>
        <td>Assignment 3 (Many-to-Many)</td>
       </tr>
       <tr>
        <td>
         Enterprise Structure → Assignment → Sales and Distribution → Set
         Up Sales Area
        </td>
        <td>
         Assignment 4 — combines Sales Org + Distribution Channel +
         Division into Sales Areas
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
        <td>Sales Organization → Company Code assignment</td>
        <td>P100 → P100, P200 → P100 (both under one company code)</td>
       </tr>
       <tr>
        <td>
         Distribution Channel → Sales Organization assignment (5 sales
         lines)
        </td>
        <td>P100/P1, P100/P2, P100/P3, P100/P4, P200/P4</td>
       </tr>
       <tr>
        <td>Division → Sales Organization assignment</td>
        <td>P100 × (P1–P6), P200 × (P1–P6) — 12 combinations</td>
       </tr>
       <tr>
        <td>Total Sales Areas configured</td>
        <td>30 (5 sales lines × 6 divisions)</td>
       </tr>
       <tr>
        <td>Rule for detecting relationship type</td>
        <td>
         Company Code present → One-to-Many; Company Code absent →
         Many-to-Many
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      With all nine organizational units defined, this lecture began
      <strong>Assignment</strong> — the step that teaches the system how
      those units relate to one another. Every assignment follows one of
      exactly two relationship types, determined by a simple rule: if
      Company Code is part of the assignment, it's
      <strong>one-to-many</strong>; otherwise it's
      <strong>many-to-many</strong>. Four assignments were completed: Sales
      Organization to Company Code (one-to-many — a sales org can only ever
      belong to one company code), Distribution Channel to Sales
      Organization (many-to-many, introducing the
      <strong>Sales Line</strong> concept — 5 sales lines in this project,
      since Export only uses the Direct channel), Division to Sales
      Organization (many-to-many — both sales organizations sell across all
      six divisions), and finally <strong>Set Up Sales Area</strong>, which
      combines Sales Organization + Distribution Channel + Division into 30
      distinct Sales Areas (5 sales lines × 6 divisions). The lecture also
      covered practical troubleshooting: how to handle shared-server save
      prompts, and how to delete and redo an incorrect assignment.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>Assignment = maintaining relationships</strong> between
       organizational units — without it, the system can't connect them
      </li>
      <li>
       Only two relationship types exist:
       <strong>One-to-Many</strong> (Company Code involved) and
       <strong>Many-to-Many</strong> (Company Code not involved)
      </li>
      <li>
       A
       <strong
       >Sales Organization can belong to only one Company Code</strong
       >, but a Company Code can have many Sales Organizations
      </li>
      <li>
       <strong>Sales Line</strong> = Sales Organization + Distribution
       Channel; <strong>Sales Area</strong> = Sales Organization +
       Distribution Channel + Division
      </li>
      <li>
       This project ends up with <strong>5 sales lines</strong> and
       <strong>30 sales areas</strong>
      </li>
      <li>
       Incorrect assignments can always be
       <strong>deleted and re-entered</strong> — nothing is permanently
       locked in
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Continuing the remaining Enterprise
      Structure assignments (Plant, Shipping Point, and further
      relationships).
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 10 Notes — Assignment of Enterprise Structure: Sales Org,
    Distribution Channel, Division &amp; Sales Area 🎓
   </p>
  </div>
 );
};

export default Enterprise10;
