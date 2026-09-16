const Customer20 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-pink">
    <h1>
     🔗 Lecture 20 — Partner Determination: Ship-to Party, Payer &amp;
     Bill-to Party
    </h1>
    <p>
     SAP SD | Repeating the 4-step Partner Determination configuration for
     the remaining three roles, and the Partner Usage field-status fix for
     Bill-to Party / Payer
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class completed Partner Determination for
      <strong>Sold-to Party</strong> (account group P001, procedure PAG),
      and a test customer was created and saved successfully. Today repeats
      the same 4-step process for <strong>Ship-to Party (P002)</strong>,
      <strong>Payer (P003)</strong>, and
      <strong>Bill-to Party (P004)</strong>.
     </div>
     <div className="callout">
      🔍
      <strong>Checking which account group a customer was created under:</strong>
      in Customer Master, go to
      <strong>Extras → Administrative Data</strong> — it shows the account
      group used (e.g. P001) for that customer record.
     </div>
    </div>

    {/* <!-- Section 1: Ship-to Party config --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Configure Partner Determination for
      Ship-to Party
     </h2>
     <p>
      T-code: <span className="tcode">VOPAN</span> → select Customer Master
      → Change.
     </p>
     <h3>Step 1 — Partner Determination Procedure</h3>
     <div className="stepper">
      <div className="step">
       Double-click <strong>Partner Determination Procedures</strong>
       → New Entries.
      </div>
      <div className="step">
       Standard for Ship-to Party is <code>WE</code>, so the custom one is
       named <code>PWE</code>, description "Ship-to Party Partner
       Determination Procedure."
      </div>
      <div className="step">
       Press Enter → confirm the warning message → Save.
      </div>
     </div>
     <h3>Step 2 — Partner Functions in Procedure</h3>
     <div className="stepper">
      <div className="step">
       Select <code>PWE</code> → double-click
       <strong>Partner Functions in Procedure</strong> → New Entries.
      </div>
      <div className="step">
       Ship-to Party only needs <strong>one</strong> partner function:
       <code>SH</code>.
      </div>
      <div className="step">
       Check both <strong>Not Modifiable</strong> and
       <strong>Mandatory</strong> for SH → Save.
      </div>
     </div>
     <h3>Step 3 — Partner Determination Procedure Assignment</h3>
     <div className="stepper">
      <div className="step">
       Double-click
       <strong>Partner Determination Procedure Assignment</strong>.
      </div>
      <div className="step">
       Go to account group <code>P002</code> (Ship-to Party) → assign
       procedure <code>PWE</code> → Save.
      </div>
     </div>
     <h3>Step 4 — Account Group Function Assignment</h3>
     <div className="stepper">
      <div className="step">
       Double-click <strong>Account Group Function Assignment</strong> →
       New Entries.
      </div>
      <div className="step">
       Mention Partner Function <code>SH</code> → Account Group
       <code>P002</code> → Save.
      </div>
     </div>
     <h3>Test — Create a Ship-to Party Customer</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">XD01</span> → account group
       <code>P002</code> → fill Sales/Shipping (Shipping Condition
       <code>01</code>, Delivering Plant <code>P100</code>) and Billing
       (Tax Classification <code>1</code>).
      </div>
      <div className="step">
       Go to Partner Functions — only <code>SH</code> appears, as expected
       → Save. Number generated: <code>617700</code>.
      </div>
      <div className="step">
       Go to <span className="tcode">XD02</span> (change) on the Sold-to
       Party customer → Partner Functions tab → add
       <code>617700</code> against SH → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 2: Missing partner functions tab --> */}
    <div className="card red">
     <h2>
      <span className="badge">⚠️</span> Bill-to Party &amp; Payer Don't Show
      a Partner Functions Tab by Default
     </h2>
     <div className="callout red">
      ⚠️ Unlike Ship-to Party, when you create a
      <strong>Bill-to Party</strong> or <strong>Payer</strong> customer
      using the standard account group setup, the
      <strong>Partner Functions tab doesn't appear at all</strong>.
     </div>
     <div className="callout blue">
      🔧 <strong>Fix:</strong> the Partner Usage field is set to
      <strong>Suppressed</strong> by default for these account groups — it
      needs to be changed to <strong>Optional</strong>.
     </div>
     <h3>How to Enable the Tab</h3>
     <div className="stepper">
      <div className="step">
       Go to T-code <span className="tcode">OVT0</span> (Account Groups).
      </div>
      <div className="step">
       Select the relevant account group (e.g. <code>P003</code> Payer, or
       <code>P004</code> Bill-to Party) → Details.
      </div>
      <div className="step">
       Double-click <strong>Sales Data</strong> → double-click
       <strong>Partner Usage</strong>.
      </div>
      <div className="step">
       Change the setting from Suppressed to
       <strong>Optional</strong> → Save.
      </div>
     </div>
     <p className="note-text">
      📌 This must be done separately for both <code>P003</code> and
      <code>P004</code> before their Partner Functions tab becomes visible.
     </p>
    </div>

    {/* <!-- Section 3: Payer config --> */}
    <div className="card gold">
     <h2>
      <span className="badge">2</span> Configure Partner Determination for
      Payer
     </h2>
     <h3>Step 1 — Partner Determination Procedure</h3>
     <div className="stepper">
      <div className="step">
       Double-click <strong>Partner Determination Procedures</strong>
       → New Entries.
      </div>
      <div className="step">
       Standard for Payer is <code>RG</code>, so the custom one is named
       <code>PRG</code>, description "Payer Partner Determination
       Procedure" → Save.
      </div>
     </div>
     <h3>Step 2 — Partner Functions in Procedure</h3>
     <div className="stepper">
      <div className="step">
       Select <code>PRG</code> → New Entries → add partner function
       <code>PY</code> only.
      </div>
      <div className="step">
       Check <strong>Not Modifiable</strong> and
       <strong>Mandatory</strong> → Save.
      </div>
     </div>
     <h3>Step 3 — Partner Determination Procedure Assignment</h3>
     <div className="stepper">
      <div className="step">
       Account group <code>P003</code> (Payer) → assign procedure
       <code>PRG</code> → Save.
      </div>
     </div>
     <h3>Step 4 — Account Group Function Assignment</h3>
     <div className="stepper">
      <div className="step">
       New Entries → Partner Function <code>PY</code> → Account Group
       <code>P003</code> → Save.
      </div>
     </div>
     <h3>Test — Create a Payer Customer</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">XD01</span> → account group
       <code>P003</code> → Country <code>IN</code> → Company Code Data
       (Reconciliation Account) → Sales Area Data → Billing (Terms of
       Payment).
      </div>
      <div className="step">
       Partner Functions tab now shows only <code>PY</code> (after the
       Partner Usage fix above) → Save. Number generated:
       <code>617800</code>.
      </div>
      <div className="step">
       Go to change mode of the Sold-to Party customer → add
       <code>617800</code> against PY → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 4: Bill-to Party config --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Configure Partner Determination for
      Bill-to Party
     </h2>
     <h3>Step 1 — Partner Determination Procedure</h3>
     <div className="stepper">
      <div className="step">
       Double-click <strong>Partner Determination Procedures</strong>
       → New Entries.
      </div>
      <div className="step">
       Standard for Bill-to Party is <code>RE</code>, so the custom one is
       named <code>PRE</code>, description "Bill-to Party Partner
       Determination Procedure" → Save.
      </div>
     </div>
     <h3>Step 2 — Partner Functions in Procedure</h3>
     <div className="stepper">
      <div className="step">
       Select <code>PRE</code> → New Entries → add partner function
       <code>BP</code> only.
      </div>
      <div className="step">
       Check <strong>Not Modifiable</strong> and
       <strong>Mandatory</strong> → Save.
      </div>
     </div>
     <h3>Step 3 — Partner Determination Procedure Assignment</h3>
     <div className="stepper">
      <div className="step">
       Account group <code>P004</code> (Bill-to Party) → assign procedure
       <code>PRE</code> → Save.
      </div>
     </div>
     <h3>Step 4 — Account Group Function Assignment</h3>
     <div className="stepper">
      <div className="step">
       New Entries → Partner Function <code>BP</code> → Account Group
       <code>P004</code> → Save.
      </div>
     </div>
     <h3>Test — Create a Bill-to Party Customer</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">XD01</span> → account group
       <code>P004</code>, Name "Bill to Party 1" → Company Code Data
       (Reconciliation Account) → Sales Area Data.
      </div>
      <div className="step">
       Partner Functions tab now shows only <code>BP</code> → Save. Number
       generated: <code>617900</code>.
      </div>
      <div className="step">
       Go to change mode of the Sold-to Party customer → add
       <code>617900</code> against BP → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 5: Consolidated summary --> */}
    <div className="card">
     <h2>
      <span className="badge">📋</span> Consolidated Reference — All 4
      Partner Determination Setups
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Role</th>
        <th>Account Group</th>
        <th>Custom Procedure</th>
        <th>Partner Function(s)</th>
        <th>Test Customer Number</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Sold-to Party</td>
        <td>P001</td>
        <td>PAG</td>
        <td>SP, SH, PY, BP (all four, from Lecture 19)</td>
        <td>617600 series</td>
       </tr>
       <tr>
        <td>Ship-to Party</td>
        <td>P002</td>
        <td>PWE</td>
        <td>SH only</td>
        <td>617700</td>
       </tr>
       <tr>
        <td>Payer</td>
        <td>P003</td>
        <td>PRG</td>
        <td>PY only</td>
        <td>617800</td>
       </tr>
       <tr>
        <td>Bill-to Party</td>
        <td>P004</td>
        <td>PRE</td>
        <td>BP only</td>
        <td>617900</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅
      <strong>All four custom account groups (P001–P004) are now fully
       usable</strong>
      to create real customers, and all four have been linked together under
      a single Sold-to Party — mirroring the full Apollo Hospitals-style
      partner structure covered earlier, but now built entirely on custom
      account groups and custom partner determination procedures.
     </div>
     <p className="note-text">
      📌 On number ranges: the practice ranges (P1–P4) were defined with a
      small gap of 99 numbers purely to conserve space on a shared training
      server — in real projects, a much larger range (e.g. 1 to 99999) is
      typically given, since there's no such practical constraint.
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
        <td>
         Where do you check which account group a customer was created
         under?
        </td>
        <td>Customer Master → Extras → Administrative Data</td>
       </tr>
       <tr>
        <td>
         What is the standard Partner Determination Procedure for Ship-to
         Party, and what custom code was used?
        </td>
        <td>Standard: WE; custom: PWE</td>
       </tr>
       <tr>
        <td>
         What is the standard Partner Determination Procedure for Payer,
         and what custom code was used?
        </td>
        <td>Standard: RG; custom: PRG</td>
       </tr>
       <tr>
        <td>
         What is the standard Partner Determination Procedure for Bill-to
         Party, and what custom code was used?
        </td>
        <td>Standard: RE; custom: PRE</td>
       </tr>
       <tr>
        <td>
         How many partner functions does Ship-to Party, Payer, and
         Bill-to Party each need in Step 2?
        </td>
        <td>
         Just one each — SH for Ship-to, PY for Payer, BP for Bill-to
         (unlike Sold-to Party, which needs all four)
        </td>
       </tr>
       <tr>
        <td>
         Why don't Bill-to Party and Payer show a Partner Functions tab
         by default?
        </td>
        <td>
         The Partner Usage field is set to Suppressed by default for
         those account groups
        </td>
       </tr>
       <tr>
        <td>
         How do you make the Partner Functions tab appear for Bill-to
         Party / Payer?
        </td>
        <td>
         T-code OVT0 → select the account group → Sales Data → Partner
         Usage → change from Suppressed to Optional
        </td>
       </tr>
       <tr>
        <td>
         After configuring Partner Determination for a role, how do you
         verify it works?
        </td>
        <td>
         Create a test customer with that account group via XD01 and
         confirm only the expected partner function(s) appear, then link
         the new customer back to the Sold-to Party via XD02
        </td>
       </tr>
       <tr>
        <td>
         How many total custom account groups now have complete Partner
         Determination?
        </td>
        <td>
         Four — P001 (Sold-to), P002 (Ship-to), P003 (Payer), P004
         (Bill-to)
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
         Configure Partner Determination (all 4 steps, repeated for
         Ship-to, Payer, Bill-to)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OVT0</span></td>
        <td>
         Account Groups — used here to change Partner Usage from
         Suppressed to Optional for Bill-to Party and Payer
        </td>
       </tr>
       <tr>
        <td><span className="tcode">XD01</span></td>
        <td>
         Create test customers for Ship-to Party, Payer, and Bill-to
         Party using their custom account groups
        </td>
       </tr>
       <tr>
        <td><span className="tcode">XD02</span></td>
        <td>
         Change the Sold-to Party customer to link each newly created
         Ship-to/Payer/Bill-to customer into its Partner Functions tab
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
        <td>Ship-to Party procedure</td>
        <td>
         PWE (standard: WE), account group P002, partner function SH
        </td>
       </tr>
       <tr>
        <td>Payer procedure</td>
        <td>
         PRG (standard: RG), account group P003, partner function PY
        </td>
       </tr>
       <tr>
        <td>Bill-to Party procedure</td>
        <td>
         PRE (standard: RE), account group P004, partner function BP
        </td>
       </tr>
       <tr>
        <td>Partner Usage fix</td>
        <td>
         OVT0 → account group → Sales Data → Partner Usage → Optional
         (for P003, P004)
        </td>
       </tr>
       <tr>
        <td>Test customer numbers created</td>
        <td>Ship-to 617700, Payer 617800, Bill-to 617900</td>
       </tr>
       <tr>
        <td>Real-project number range guidance</td>
        <td>
         Full range (e.g. 1–99999), unlike the 99-number gap used for
         practice
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed the Partner Determination rollout across all
      four custom account groups by repeating the same 4-step VOPAN process
      (Procedure → Functions in Procedure → Procedure Assignment → Account
      Group Function Assignment) for
      <strong>Ship-to Party</strong> (PWE/P002/SH),
      <strong>Payer</strong> (PRG/P003/PY), and
      <strong>Bill-to Party</strong> (PRE/P004/BP) — each needing only its
      single relevant partner function, unlike Sold-to Party's all-four
      setup from the previous class. A key gotcha was resolved along the
      way: Bill-to Party and Payer don't show a Partner Functions tab out of
      the box, because their Partner Usage field defaults to Suppressed —
      fixed via
      <strong>OVT0 → Sales Data → Partner Usage → Optional</strong>. Each
      role was tested by creating a real customer (617700, 617800, 617900)
      and linking it back into the Sold-to Party's Partner Functions tab via
      XD02, completing the full custom Sold-to/Ship-to/Payer/Bill-to
      structure end to end.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       The 4-step Partner Determination process is
       <strong>identical for every role</strong> — only the procedure code,
       partner function(s), and account group change
      </li>
      <li>
       Ship-to, Payer, and Bill-to each need
       <strong>only their one matching partner function</strong> marked Not
       Modifiable + Mandatory — unlike Sold-to Party's four
      </li>
      <li>
       <strong>Bill-to Party and Payer need a Partner Usage fix</strong>
       (OVT0 → Optional) before their Partner Functions tab appears at all
      </li>
      <li>
       After configuring each role, always
       <strong>test by creating a real customer</strong> and linking it
       back to the Sold-to Party
      </li>
      <li>
       All 4 custom account groups (P001–P004) are now fully functional and
       fully linked
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Moving on from Customer Master to
      <strong>Material Master</strong> creation in the system.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 20 Notes — Partner Determination: Ship-to Party, Payer &amp;
    Bill-to Party 🎓
   </p>
  </div>
 );
};

export default Customer20;
