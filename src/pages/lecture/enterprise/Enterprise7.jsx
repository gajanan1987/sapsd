const Enterprise7 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-purple">
    <h1>🖥️ Lecture 7 — Logging into SAP, Easy Access vs. IMG, T-Codes &amp; the Company Code Path</h1>
    <p>
     SAP SD | System basics before hands-on configuration: logon, screen
     types, transaction codes, sessions, lock entries, and the SPRO path
     for Company Code
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We're Headed</h2>
     <div className="callout blue">
      💡 Theory for all 9 Enterprise Structure organizational units is
      complete. Before actually defining them, this lecture covers the
      system basics: how to log into SAP, the two main screen types, how
      transaction codes work, and the exact navigation path used to
      configure Company Code.
     </div>
    </div>

    {/* <!-- Section 1: Logging into SAP --> */}
    <div className="card orange">
     <h2><span className="badge">1</span> Logging into SAP</h2>
     <div className="stepper">
      <div className="step">
       Double-click the <strong>SAP Logon Pad</strong> icon on the
       desktop. (If accessing an online/remote server, this must first
       be downloaded — the server provider guides this step, typically
       via a video/screenshots.)
      </div>
      <div className="step">
       The first time it opens, the server list is
       <strong>blank</strong>. Click the <strong>New</strong> (create)
       symbol → <strong>Connection</strong> → double-click
       <strong>User Specified System</strong>.
      </div>
      <div className="step">
       Fill in the server details as sent by the provider:
       Description (any label, e.g. "SD Server Online"), Application
       Server, Instance Number, and System ID (e.g. <code>EH7</code>) →
       Next → Finish.
      </div>
      <div className="step">
       The configured server now appears in the logon pad list.
       Double-click it, enter your <strong>User ID</strong> (e.g.
       <code>82USER1</code>) and the <strong>initial
        password</strong> provided (e.g. <code>India123</code>) → press
       Enter.
      </div>
      <div className="step">
       The system prompts for a <strong>new password</strong> — set
       your own, confirm it (repeat password), and press Enter.
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Password rules:</strong> the password is
      <strong>case-sensitive</strong> — if the initial password has a
      capital first letter, that exact casing must be used. There is
      <strong>no fixed length restriction</strong>. If a wrong password
      is entered <strong>three times in a row</strong>, the user ID
      gets <strong>locked</strong> — you'd then need to contact the
      server-access person to unlock it and reissue the initial
      password, restarting the whole first-login process.
     </div>
     <div className="callout blue">
      💡 <strong>Practical tip:</strong> save your User ID and password
      somewhere (Excel, notes) immediately after setting them — this
      avoids the delay of getting locked out and having to request an
      unlock.
     </div>
     <div className="callout">
      🔒 <strong>Changing your password later:</strong> a user cannot
      change their own password directly except through this same
      initial-password reset flow — only the server-access person can
      trigger a reset, which reissues the initial password and prompts
      for a new one again.
     </div>
     <p className="note-text">
      To log off: go to <strong>System → Log Off</strong> and confirm
      "Yes" when prompted.
     </p>
    </div>

    {/* <!-- Section 2: Easy Access vs IMG --> */}
    <div className="card teal">
     <h2><span className="badge">2</span> SAP Easy Access vs. IMG — Two Very Different Screens</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Screen</th>
        <th>Who Works Here</th>
        <th>Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>SAP Easy Access</td>
        <td>Users (end users, employees of the client)</td>
        <td>Default screen on login; used for day-to-day master data and transaction data entry</td>
       </tr>
       <tr>
        <td>IMG (Implementation Guide)</td>
        <td>Consultants</td>
        <td>Used for all configuration/customization work</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      💡 <strong>Default screen:</strong> the moment you log into SAP,
      you land on <strong>SAP Easy Access</strong>.
     </div>
     <h3>What Does a "User" Actually Do in SD?</h3>
     <div className="callout teal">
      👤 <strong>User</strong> = an employee of the client who uses SAP.
      In SAP SD, a user's role is to create <strong>master data</strong>
      and <strong>transaction data</strong>.
     </div>
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
        <td>Customer master, Material master, Condition (pricing) master, Customer-Material Info Record</td>
       </tr>
       <tr>
        <td>Transaction Data</td>
        <td>Enquiry, Quotation, Sales Order, Delivery, Invoice</td>
       </tr>
      </tbody>
     </table>
     <h3>Getting to the IMG Screen</h3>
     <div className="stepper">
      <div className="step">
       Enter <code>SPRO</code> in the <strong>T-code bar</strong>
       (transaction code bar) and press Enter.
      </div>
      <div className="step">
       Click <strong>SAP Reference IMG</strong> — this opens the IMG
       screen, where all configuration work happens.
      </div>
     </div>
     <div className="callout blue">
      🔤 <strong>SPRO</strong> stands for <strong>SAP Project Reference
       Object</strong>.
     </div>
    </div>

    {/* <!-- Section 3: T-codes --> */}
    <div className="card gold">
     <h2><span className="badge">3</span> T-Codes (Transaction Codes)</h2>
     <div className="callout">
      💡 <strong>T-code</strong> = a shortcut method to go directly to a
      particular screen, without navigating through menus.
     </div>
     <h3>Standard SD T-Codes (Examples)</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Transaction</th>
        <th>T-Code</th>
       </tr>
      </thead>
      <tbody>
       <tr><td>Enquiry</td><td><span className="tcode">VA11</span></td></tr>
       <tr><td>Quotation</td><td><span className="tcode">VA21</span></td></tr>
       <tr><td>Sales Order</td><td><span className="tcode">VA01</span></td></tr>
       <tr><td>Contract</td><td><span className="tcode">VA41</span></td></tr>
       <tr><td>Scheduling Agreement</td><td><span className="tcode">VA31</span></td></tr>
       <tr><td>Delivery</td><td><span className="tcode">VL01N</span></td></tr>
       <tr><td>Invoice</td><td><span className="tcode">VF01</span></td></tr>
      </tbody>
     </table>
     <h3>Direct T-Code Entry — Depends on Which Screen You're In</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Current Screen</th>
        <th>Can You Type a T-code Directly?</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>SAP Easy Access</td>
        <td>✅ Yes — type the T-code directly (e.g. <code>VA11</code>) and it takes you straight there</td>
       </tr>
       <tr>
        <td>Any other screen (e.g. already inside Enquiry, Quotation)</td>
        <td>❌ No — a direct T-code is not recognized ("Requested function ... is not available here"); you must prefix it with <code>/N</code> or <code>/O</code></td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>The /N vs /O difference:</strong>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Prefix</th>
        <th>Effect</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>/N</code> + T-code</td>
        <td>Overrides/replaces the current session with the new screen</td>
       </tr>
       <tr>
        <td><code>/O</code> + T-code</td>
        <td>Opens the new screen in a <strong>new session</strong>, without disturbing the current one</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔢 <strong>Session limit:</strong> a maximum of
      <strong>6 sessions</strong> can be open at the same time. Trying
      to open a 7th gives the error "Maximum number of sessions
      reached."
     </div>
    </div>

    {/* <!-- Section 4: Company Code path --> */}
    <div className="card purple">
     <h2><span className="badge">4</span> Defining Company Code — The SPRO Path</h2>
     <p>
      Before navigating, remember: if you're not already on the SAP
      Easy Access screen, prefix <code>SPRO</code> with
      <code>/N</code> or <code>/O</code> just like any other T-code.
     </p>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">SAP Reference IMG</span><span className="sep">→</span>
      <span className="node">Enterprise Structure</span><span className="sep">→</span>
      <span className="node">Definition</span><span className="sep">→</span>
      <span className="node">Financial Accounting</span><span className="sep">→</span>
      <span className="node">Edit, Copy, Delete, Check Company Code</span><span className="sep">→</span>
      <span className="node">Edit Company Code Data</span>
     </div>
     <div className="stepper">
      <div className="step">Enter <code>SPRO</code> in the T-code bar → press Enter.</div>
      <div className="step">Click <strong>SAP Reference IMG</strong>.</div>
      <div className="step">Expand <strong>Enterprise Structure</strong> → <strong>Definition</strong> → <strong>Financial Accounting</strong>.</div>
      <div className="step">Select <strong>Edit, Copy, Delete, Check Company Code</strong> → click the clock-shaped <strong>IMG Activity</strong> icon.</div>
      <div className="step">Double-click <strong>Edit Company Code Data</strong>.</div>
     </div>
     <div className="callout">
      📌 <strong>Note:</strong> under this same node you'll also see an
      option to <strong>Define Company</strong> — "Company" here refers
      to a corporate group (e.g. Tata Group, Reliance Group) that can
      bundle multiple Company Codes together; that is a different,
      separate configuration step from Company Code itself.
     </div>
    </div>

    {/* <!-- Section 5: Lock entries / SM12 --> */}
    <div className="card red">
     <h2><span className="badge">5</span> Handling "Data Locked by User" — SM12</h2>
     <div className="callout red">
      ⚠️ On a shared online training server, if multiple people try to
      open the <strong>same</strong> configuration screen (e.g. Edit
      Company Code Data) at the same time, you'll see:
      <em>"The data is locked by [user] and can be displayed only. Do
       you want to display the locked data?"</em>
     </div>
     <div className="stepper">
      <div className="step">Click <strong>Yes</strong> to proceed in display-only mode (you won't see "New Entries" here).</div>
      <div className="step">Enter T-code <code>/N SM12</code> in the T-code bar → press Enter.</div>
      <div className="step">Remove/clear the username field → press Enter. A list of lock entries appears.</div>
      <div className="step"><strong>Select All</strong> → <strong>Delete</strong> → confirm <strong>Yes</strong> to delete the lock entries.</div>
      <div className="step">Close the screen and re-navigate to Edit Company Code Data — "New Entries" is now available.</div>
     </div>
     <div className="callout green">
      ✅ <strong>Important clarification:</strong> this only removes the
      <strong>lock entry</strong>, not any actual data. It does not
      delete the other person's work, does not force their screen into
      display mode, and does not exit or interrupt their session — it
      simply allows both people to access the screen simultaneously.
     </div>
     <div className="callout blue">
      💡 <strong>Real-time relevance:</strong> in a real project, only
      one designated consultant is typically responsible for defining
      any given organizational unit (e.g. only one FI consultant
      defines Company Code, only one SD consultant defines Sales
      Organization) — so this exact multi-user lock conflict is rare.
      It can still occur if the same person accidentally opens the same
      screen twice, and the SM12 fix applies the same way.
     </div>
    </div>

    {/* <!-- Section 6: Dev -> Quality -> Production reminder --> */}
    <div className="card teal">
     <h2><span className="badge">🔁</span> Where Configuration Actually Happens</h2>
     <div className="callout">
      💡 All configuration (Company Code included) can
      <strong>only be done on the Development server</strong> — never
      directly on Quality or Production.
     </div>
     <p>
      When configuration is saved, the system asks for a
      <strong>request number</strong> (a Transport Request). This
      request is then moved from Development to Quality — with the
      help of a <strong>Basis consultant</strong> — after which the
      configuration appears in Quality and, eventually, Production.
     </p>
    </div>

    {/* <!-- Section 7: IDES --> */}
    <div className="card gold">
     <h2><span className="badge">💡</span> What Is IDES?</h2>
     <div className="callout">
      💡 <strong>IDES</strong> stands for <strong>Internet
       Demonstration and Evaluation System</strong> — a demo/practice
      system used for learning SAP, distinct from a client's real
      project system.
     </div>
     <p className="note-text">
      📌 On self-study resources: a paid SAP Learning Hub subscription
      is not required — course notes are stated to be sufficient both
      for practice and for interview preparation, since real-time
      consultants typically rely on their own notes rather than formal
      learning platforms.
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
        <td>What is the default screen when you log into SAP?</td>
        <td>SAP Easy Access</td>
       </tr>
       <tr>
        <td>Who works in SAP Easy Access, and who works in the IMG screen?</td>
        <td>End users work in SAP Easy Access (master data and transaction data); consultants work in the IMG screen (configuration)</td>
       </tr>
       <tr>
        <td>What is a "user" in SAP terms, and what is their role in SD?</td>
        <td>An employee of the client who uses SAP; in SD, their role is to create master data (customer/material/condition master, customer-material info record) and transaction data (enquiry, quotation, sales order, delivery, invoice)</td>
       </tr>
       <tr>
        <td>What does IMG stand for?</td>
        <td>Implementation Guide</td>
       </tr>
       <tr>
        <td>What does SPRO stand for, and what does it do?</td>
        <td>SAP Project Reference Object; entering it in the T-code bar and clicking "SAP Reference IMG" takes you to the IMG (configuration) screen</td>
       </tr>
       <tr>
        <td>What is a T-code?</td>
        <td>A shortcut method to go directly to a particular screen</td>
       </tr>
       <tr>
        <td>Can you type a T-code directly from any screen?</td>
        <td>Only from SAP Easy Access; from any other screen you must prefix it with /N or /O</td>
       </tr>
       <tr>
        <td>What is the difference between /N and /O before a T-code?</td>
        <td>/N overrides/replaces the current session with the new screen; /O opens the new screen in a new session without disturbing the current one</td>
       </tr>
       <tr>
        <td>What is the maximum number of sessions you can have open at once?</td>
        <td>6</td>
       </tr>
       <tr>
        <td>What is the SPRO path to define Company Code?</td>
        <td>SPRO → SAP Reference IMG → Enterprise Structure → Definition → Financial Accounting → Edit, Copy, Delete, Check Company Code → Edit Company Code Data</td>
       </tr>
       <tr>
        <td>What does the "data locked by user" message mean, and how do you resolve it?</td>
        <td>Another user has the same screen open; resolve it via T-code /N SM12, clear the username field, select all lock entries, and delete them — this only removes the lock, not any actual data</td>
       </tr>
       <tr>
        <td>Where can configuration actually be performed — Development, Quality, or Production?</td>
        <td>Only on the Development server; it's then moved to Quality and Production via a Transport Request, with help from a Basis consultant</td>
       </tr>
       <tr>
        <td>What does IDES stand for?</td>
        <td>Internet Demonstration and Evaluation System — a demo/practice SAP system</td>
       </tr>
       <tr>
        <td>What happens if you enter a wrong password three times in a row?</td>
        <td>The user ID gets locked; the server-access person must unlock it and reissue the initial password, restarting the first-login process</td>
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
       <tr><td><span className="tcode">SPRO</span></td><td>Enter the IMG (configuration) screen via SAP Reference IMG</td></tr>
       <tr><td><span className="tcode">VA11</span></td><td>Create Enquiry</td></tr>
       <tr><td><span className="tcode">VA21</span></td><td>Create Quotation</td></tr>
       <tr><td><span className="tcode">VA01</span></td><td>Create Sales Order</td></tr>
       <tr><td><span className="tcode">VA41</span></td><td>Create Contract</td></tr>
       <tr><td><span className="tcode">VA31</span></td><td>Create Scheduling Agreement</td></tr>
       <tr><td><span className="tcode">VL01N</span></td><td>Create Delivery</td></tr>
       <tr><td><span className="tcode">VF01</span></td><td>Create Invoice</td></tr>
       <tr><td><span className="tcode">SM12</span></td><td>View/delete lock entries when a configuration screen shows "data locked by user"</td></tr>
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
       <tr><td>Default screen on login</td><td>SAP Easy Access</td></tr>
       <tr><td>Screen consultants configure in</td><td>IMG (Implementation Guide)</td></tr>
       <tr><td>SPRO meaning</td><td>SAP Project Reference Object</td></tr>
       <tr><td>Direct T-code entry allowed from</td><td>SAP Easy Access screen only</td></tr>
       <tr><td>/N vs /O</td><td>/N overrides current session; /O opens a new session</td></tr>
       <tr><td>Max concurrent sessions</td><td>6</td></tr>
       <tr><td>Company Code SPRO path</td><td>Enterprise Structure → Definition → Financial Accounting → Edit, Copy, Delete, Check Company Code → Edit Company Code Data</td></tr>
       <tr><td>Lock entry fix</td><td>/N SM12 → clear username → select all → delete</td></tr>
       <tr><td>Where configuration is done</td><td>Development server only; moved onward via Transport Request (Basis consultant) to Quality/Production</td></tr>
       <tr><td>IDES meaning</td><td>Internet Demonstration and Evaluation System</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      Before hands-on Enterprise Structure configuration begins, this
      lecture covered the practical mechanics of working inside SAP:
      logging in via the SAP Logon Pad (server setup, user ID,
      case-sensitive password rules, and the 3-strikes lockout), the
      distinction between the <strong>SAP Easy Access</strong> screen
      (where end users create master and transaction data) and the
      <strong>IMG</strong> screen (where consultants configure the
      system, reached via T-code <code>SPRO</code>), and how
      <strong>T-codes</strong> work — direct entry only from Easy
      Access, otherwise prefixed with <code>/N</code> (override current
      session) or <code>/O</code> (new session, max 6 total). The
      lecture then walked the exact SPRO navigation path to reach
      <strong>Edit Company Code Data</strong>, and showed how to resolve
      the common "data locked by user" conflict via T-code
      <code>SM12</code> — which only clears the lock, never any actual
      configuration data. It closed by reaffirming that configuration
      can only happen on the Development server, moving onward via
      Transport Request, and clarifying that IDES is simply SAP's demo/
      practice system.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>SAP Easy Access</strong> = users' screen (master +
       transaction data); <strong>IMG</strong> = consultants'
       configuration screen, reached via <code>SPRO</code>
      </li>
      <li>
       T-codes can be typed directly <strong>only</strong> from Easy
       Access; elsewhere, prefix with <code>/N</code> (override) or
       <code>/O</code> (new session, max 6 sessions total)
      </li>
      <li>
       Company Code path: <strong>SPRO → Enterprise Structure →
        Definition → Financial Accounting → Edit, Copy, Delete, Check
        Company Code → Edit Company Code Data</strong>
      </li>
      <li>
       <strong>"Data locked by user"</strong> is resolved via
       <code>/N SM12</code> (clear username → select all → delete) —
       it only removes the lock, never anyone's actual data
      </li>
      <li>
       Configuration is only ever done on the
       <strong>Development server</strong>, then transported onward
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Hands-on definition of Company
      Code in the system, followed by the remaining organizational
      units one by one.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 7 Notes — Logging into SAP, Easy Access vs. IMG, T-Codes &amp;
    the Company Code Path 🎓
   </p>
  </div>
 );
};

export default Enterprise7;
