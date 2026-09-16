const Customer19 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-gold">
    <h1>
     🤝 Lecture 19 — Partner Determination: The 4-Step Configuration (Sold-to
     Party)
    </h1>
    <p>
     SAP SD | T-code VOPAN, the Unique/Not-Modifiable/Mandatory controls, and
     making the custom account group P001 actually usable
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class created four custom account groups — P001 (Sold-to,
      number range P1), P002 (Ship-to, P2), P003 (Payer, P3), P004 (Bill-to,
      P4) — but flagged that they
      <strong>can't yet be used to create customers</strong> because Partner
      Determination isn't configured for them. Today fixes that for Sold-to
      Party (P001).
     </div>
    </div>

    {/* <!-- Section 1: What is Partner Determination --> */}
    <div className="card teal">
     <h2><span className="badge">1</span> What Is Partner Determination?</h2>
     <div className="callout teal">
      💡 <strong>Partner Determination</strong> is the process of
      determining the <strong>relevant partner functions</strong> in the
      Customer Master.
     </div>
     <p>T-code: <span className="tcode">VOPAN</span></p>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Basic Functions</span>
      <span className="sep">→</span>
      <span className="node">Partner Determination</span>
      <span className="sep">→</span>
      <span className="node">Set Up Partner Determination</span>
      <span className="sep">→</span>
      <span className="node">Set Up Partner Determination for Customer Master</span>
     </div>
     <p className="note-text">
      📌 On the resulting screen, select <strong>Customer Master</strong> →
      click <strong>Change</strong> to begin configuration.
     </p>
    </div>

    {/* <!-- Section 2: The 4 steps overview --> */}
    <div className="card purple">
     <h2>
      <span className="badge">2</span> The 4 Steps to Configure Partner
      Determination
     </h2>
     <div className="stepper">
      <div className="step">
       <strong>Partner Determination Procedures</strong>
      </div>
      <div className="step">
       <strong>Partner Functions in Procedure</strong>
      </div>
      <div className="step">
       <strong>Partner Determination Procedure Assignment</strong>
      </div>
      <div className="step">
       <strong>Account Group Function Assignment</strong>
      </div>
     </div>
     <p className="note-text">
      📌 These four steps get repeated once for each partner role — today
      walks through all four for <strong>Sold-to Party</strong>; the
      remaining roles (Ship-to, Payer, Bill-to) continue next class.
     </p>
    </div>

    {/* <!-- Section 3: Partner Functions tab (KU, Unique) --> */}
    <div className="card orange">
     <h2>
      <span className="badge">3</span> Understanding the Partner Functions
      Tab
     </h2>
     <div className="callout red">
      ⚠️ <strong>Never create your own partner functions.</strong> SP, SH,
      PY, BP are standard SAP partner functions — always use these, never
      define custom ones.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Partner Function</th>
        <th>Partner Type</th>
        <th>Unique?</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>SP (Sold-to Party)</td>
        <td>KU (Customer)</td>
        <td>✅ Checked</td>
       </tr>
       <tr>
        <td>SH (Ship-to Party)</td>
        <td>KU (Customer)</td>
        <td>❌ Unchecked</td>
       </tr>
       <tr>
        <td>PY (Payer)</td>
        <td>KU (Customer)</td>
        <td>❌ Unchecked</td>
       </tr>
       <tr>
        <td>BP (Bill-to Party)</td>
        <td>KU (Customer)</td>
        <td>❌ Unchecked</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔑 <strong>What does "Unique" control?</strong> If checked (as it is
      only for SP), the system allows <strong>only one</strong>
      instance of that partner function per customer — trying to add a
      second Sold-to Party on the same customer throws
      <em>"Partner function SP already exists, only defined once."</em>
      Since SH, PY, and BP are left unchecked, a single customer can have
      <strong>multiple</strong> Ship-to Parties, Payers, and Bill-to
      Parties.
     </div>
    </div>

    {/* <!-- Section 4: Step-by-step config for Sold-to --> */}
    <div className="card gold">
     <h2>
      <span className="badge">4</span> Configuration for Sold-to Party —
      Step 1: Partner Determination Procedure
     </h2>
     <div className="stepper">
      <div className="step">
       Double-click <strong>Partner Determination Procedures</strong> → New
       Entries.
      </div>
      <div className="step">
       Mention the procedure code — standard for Sold-to Party is
       <code>AG</code>, so the custom one is named <code>PAG</code>,
       description "Sold-to Party Partner Determination Procedure."
      </div>
      <div className="step">
       Press Enter → a warning message appears → press Enter again to
       confirm → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 5: Step 2 --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">5</span> Step 2: Partner Functions in
      Procedure
     </h2>
     <div className="stepper">
      <div className="step">
       Select your Partner Determination Procedure (<code>PAG</code>) →
       double-click <strong>Partner Functions in Procedure</strong>.
      </div>
      <div className="step">
       New Entries → since Sold-to Party needs all four partner functions,
       add rows for <code>SP</code>, <code>SH</code>, <code>PY</code>, and
       <code>BP</code>.
      </div>
      <div className="step">
       Check <strong>Not Modifiable</strong> only for <code>SP</code>
       (leave it unchecked for SH, PY, BP).
      </div>
      <div className="step">
       Check <strong>Mandatory</strong> for all four rows.
      </div>
      <div className="step">Save.</div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>What It Controls</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Not Modifiable (NM)</td>
        <td>
         If checked, the system
         <strong>will not allow the partner number to be changed</strong>
         in the Customer Master — that partner's number field is
         disabled. Only SP gets this check (since a Sold-to Party's own
         number shouldn't be overwritten with a different customer's
         number).
        </td>
       </tr>
       <tr>
        <td>Mandatory (MAN)</td>
        <td>
         If checked, the system
         <strong>automatically determines that partner function</strong>
         in the Customer Master — it's guaranteed to be present, not
         optional.
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>Result once configured:</strong> on a Sold-to Party
      customer, the SP number field is grayed out/disabled (Not Modifiable),
      while SH, PY, and BP numbers can still be edited or replaced freely.
     </div>
    </div>

    {/* <!-- Section 6: Step 3 --> */}
    <div className="card teal">
     <h2>
      <span className="badge">6</span> Step 3: Partner Determination
      Procedure Assignment
     </h2>
     <div className="stepper">
      <div className="step">
       Double-click
       <strong>Partner Determination Procedure Assignment</strong>.
      </div>
      <div className="step">
       Go to your account group for Sold-to Party (<code>P001</code>) and
       assign your Partner Determination Procedure (<code>PAG</code>).
      </div>
      <div className="step">Save.</div>
     </div>
    </div>

    {/* <!-- Section 7: Step 4 --> */}
    <div className="card red">
     <h2>
      <span className="badge">7</span> Step 4: Account Group Function
      Assignment
     </h2>
     <div className="stepper">
      <div className="step">
       Double-click <strong>Account Group Function Assignment</strong>
       → New Entries.
      </div>
      <div className="step">
       For Sold-to Party, map each partner function to account group
       <code>P001</code>:
      </div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Partner Function</th>
        <th>Account Group</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>SP</td>
        <td>P001</td>
       </tr>
       <tr>
        <td>SH</td>
        <td>P001</td>
       </tr>
       <tr>
        <td>PY</td>
        <td>P001</td>
       </tr>
       <tr>
        <td>BP</td>
        <td>P001</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      Press Enter through any warning messages → Save. This is the final of
      the four steps for Sold-to Party.
     </p>
    </div>

    {/* <!-- Section 8: Testing --> */}
    <div className="card green">
     <h2>
      <span className="badge">🎉</span> Testing — Create a Customer with the
      Custom Account Group
     </h2>
     <div className="callout green">
      ✅ With all 4 steps complete, a customer can now finally be created
      using the <strong>custom</strong> account group <code>P001</code> —
      until now, only the standard <code>0001</code>
      had worked.
     </div>
     <div className="stepper">
      <div className="step">
       <span className="tcode">XD01</span> → select account group
       <code>P001</code> (instead of standard <code>0001</code>).
      </div>
      <div className="step">
       Fill in General Data, Company Code Data, and Sales Area Data
       (Shipping Condition <code>01</code>, Plant <code>P100</code>, Terms
       of Payment <code>0001</code>, Account Assignment Group
       <code>01</code>, Tax Classification <code>1</code>) as usual.
      </div>
      <div className="step">
       Go to the <strong>Partner Functions</strong> tab and check how many
       partner functions appear — all four (SP, SH, PY, BP) should be
       there, with SP shown but its number field disabled (not editable)
       since it's Not Modifiable.
      </div>
      <div className="step">
       Save. Because the number range is Internal, the actual customer
       number only appears <em>after</em> saving — from the
       <code>P1</code> range (starting at <code>617600</code>).
      </div>
     </div>
     <p className="note-text">
      📌 <strong>Practice task:</strong> create at least one Sold-to Party
      customer using account group P001 and confirm it saves correctly with
      a number from the 617600 series.
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
        <td>What is Partner Determination?</td>
        <td>
         The process of determining the relevant partner functions in the
         Customer Master
        </td>
       </tr>
       <tr>
        <td>What T-code is used to configure Partner Determination?</td>
        <td>VOPAN</td>
       </tr>
       <tr>
        <td>
         What are the four steps to configure Partner Determination?
        </td>
        <td>
         Partner Determination Procedures → Partner Functions in
         Procedure → Partner Determination Procedure Assignment → Account
         Group Function Assignment
        </td>
       </tr>
       <tr>
        <td>
         What is the Partner Type for all standard SD partner functions,
         and what does it mean?
        </td>
        <td>KU — it means Customer</td>
       </tr>
       <tr>
        <td>
         Which standard partner function has the "Unique" checkbox
         checked?
        </td>
        <td>Only SP (Sold-to Party)</td>
       </tr>
       <tr>
        <td>
         What happens if "Unique" is checked on a partner function?
        </td>
        <td>
         The system allows only one instance of that partner function per
         customer; trying to add a second one throws an error ("Partner
         function already exists, only defined once")
        </td>
       </tr>
       <tr>
        <td>
         Can a single customer have multiple Ship-to Parties, Payers, or
         Bill-to Parties?
        </td>
        <td>
         Yes — since Unique is unchecked for SH, PY, and BP, multiple
         instances of each are allowed
        </td>
       </tr>
       <tr>
        <td>
         What does "Not Modifiable" control in Partner Functions in
         Procedure?
        </td>
        <td>
         If checked, the system won't allow that partner's number to be
         changed in the Customer Master (the field is disabled) —
         typically checked only for the partner function matching the
         account group being configured (e.g., SP for Sold-to Party)
        </td>
       </tr>
       <tr>
        <td>What does "Mandatory" control?</td>
        <td>
         If checked, the system automatically determines/requires that
         partner function in the Customer Master
        </td>
       </tr>
       <tr>
        <td>
         In Step 3 (Partner Determination Procedure Assignment), what
         gets linked to what?
        </td>
        <td>
         The custom account group (e.g., P001) is linked to its Partner
         Determination Procedure (e.g., PAG)
        </td>
       </tr>
       <tr>
        <td>
         In Step 4 (Account Group Function Assignment), what gets linked
         to what?
        </td>
        <td>
         Each partner function (SP, SH, PY, BP) is mapped to the account
         group that should apply for it (e.g., all four mapped to P001
         for Sold-to Party)
        </td>
       </tr>
       <tr>
        <td>
         Why couldn't customers be created with the new P001 account
         group before this configuration?
        </td>
        <td>
         Because Partner Determination hadn't been set up for it yet —
         the system would throw an error on save until all four steps
         were completed
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
        <th>T-Code</th>
        <th>Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><span className="tcode">VOPAN</span></td>
        <td>
         Configure Partner Determination (Procedures, Functions in
         Procedure, Procedure Assignment, Account Group Function
         Assignment)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">XD01</span></td>
        <td>
         Create a customer — used here to test the new P001 account group
         end to end
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
        <td>Custom Partner Determination Procedure created</td>
        <td>
         PAG (copied naming pattern from standard AG), for Sold-to Party
        </td>
       </tr>
       <tr>
        <td>Partner functions added to PAG</td>
        <td>SP, SH, PY, BP — all four, all marked Mandatory</td>
       </tr>
       <tr>
        <td>Not Modifiable checked for</td>
        <td>SP only (in the Sold-to Party procedure)</td>
       </tr>
       <tr>
        <td>Account group linked to PAG</td>
        <td>P001</td>
       </tr>
       <tr>
        <td>Account Group Function Assignment (Step 4)</td>
        <td>SP→P001, SH→P001, PY→P001, BP→P001</td>
       </tr>
       <tr>
        <td>Test customer created with</td>
        <td>
         Account group P001, Plant P100, Shipping Condition 01, Terms of
         Payment 0001, Account Assignment Group 01, Tax Classification 1
        </td>
       </tr>
       <tr>
        <td>Resulting customer number range</td>
        <td>Starting at 617600 (range P1)</td>
       </tr>
       <tr>
        <td>Remaining work</td>
        <td>
         Repeat all 4 steps for Ship-to (P002), Payer (P003), Bill-to
         (P004) — next class
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed the full
      <strong>Partner Determination</strong> configuration for the Sold-to
      Party account group, closing the gap left from the previous class. The
      concept — determining which partner functions are relevant in the
      Customer Master — is configured via T-code <strong>VOPAN</strong> in
      four fixed steps: defining a Partner Determination Procedure (PAG,
      mirroring the standard AG), placing all four partner functions (SP,
      SH, PY, BP) inside that procedure with SP marked
      <strong>Not Modifiable</strong> and all four marked
      <strong>Mandatory</strong>, assigning the procedure to account group
      P001, and finally mapping each partner function to P001 in the Account
      Group Function Assignment step. Along the way, the lecture explained
      the standard Partner Functions tab itself — Partner Type KU (Customer)
      for all functions, and the <strong>Unique</strong> flag (checked only
      for SP) that prevents a customer from having more than one Sold-to
      Party, while still allowing multiple Ship-to Parties, Payers, and
      Bill-to Parties. The lecture closed by successfully creating and
      saving a test customer using the new P001 account group, confirming
      the configuration works end to end — with the same four steps to be
      repeated for Ship-to, Payer, and Bill-to Party in the next class.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       Partner Determination = <strong>4 fixed steps</strong>: Procedures →
       Functions in Procedure → Procedure Assignment → Account Group
       Function Assignment
      </li>
      <li>
       Always use <strong>standard partner functions</strong> (SP, SH, PY,
       BP) — never create your own; Partner Type is always
       <strong>KU (Customer)</strong>
      </li>
      <li>
       <strong>Unique</strong> is checked only for SP — this is what
       enforces "only one Sold-to Party per customer," while SH/PY/BP can
       repeat
      </li>
      <li>
       <strong>Not Modifiable</strong> = locks that partner's number field
       in Customer Master; <strong>Mandatory</strong> = guarantees that
       partner function is determined automatically
      </li>
      <li>
       Once all 4 steps are done for an account group, it becomes
       <strong>usable</strong> to create real customers — verified by
       testing with XD01
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Repeat the same 4-step Partner
      Determination process for Ship-to Party (P002), Payer (P003), and
      Bill-to Party (P004).
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 19 Notes — Partner Determination: The 4-Step Configuration
    (Sold-to Party) 🎓
   </p>
  </div>
 );
};

export default Customer19;
