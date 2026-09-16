const Customer17 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-red">
    <h1>
     🔢 Lecture 17 — Customer Number Ranges: Definition, Internal/External
     Numbering &amp; Buffering
    </h1>
    <p>
     SAP SD | T-code XDN1, the internal-vs-external and
     numeric-vs-alphanumeric rules, NR Status, and the number-buffering
     gotcha
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered <strong>Partner Determination</strong> — the
      Sold-to Party, Ship-to Party, and Bill-to Party account groups (0001,
      0002, 0004), and how to add Ship-to/Bill-to parties to a Sold-to Party
      via <span className="tcode">XD02</span>. Today's topic: defining
      <strong>Customer Number Ranges</strong> from scratch.
     </div>
    </div>

    {/* <!-- Section 1: Number range intro --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">1</span> Defining Customer Number Ranges
     </h2>
     <div className="callout indigo">
      💡 T-code to create a customer number range:
      <span className="tcode">XDN1</span>.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Logistics General</span>
      <span className="sep">→</span>
      <span className="node">Business Partner</span>
      <span className="sep">→</span> <span className="node">Customers</span>
      <span className="sep">→</span> <span className="node">Control</span>
      <span className="sep">→</span>
      <span className="node">Define and Assign Customer Number Ranges</span>
      <span className="sep">→</span>
      <span className="node">Define Number Ranges for Customer Master</span>
     </div>
     <p className="note-text">
      📌 In real-time projects, this is genuinely required — clients always
      specify their own number series for customers. On a shared practice
      server, defining new intervals is optional; using the standard
      delivered ranges is perfectly fine for practice.
     </p>
    </div>

    {/* <!-- Section 2: Checking free intervals --> */}
    <div className="card teal">
     <h2><span className="badge">2</span> Step 1 — Check Free Intervals</h2>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">XDN1</span> → click
       <strong>Change Intervals</strong>.
      </div>
      <div className="step">
       Go to menu <strong>Interval → Free Intervals</strong> to see which
       number ranges are still available/unused on the system.
      </div>
      <div className="step">
       Pick an available block — on a shared training server, keep the gap
       small (e.g., <strong>99 numbers</strong> per range) since practice
       won't create that many customers.
      </div>
     </div>
     <div className="callout red">
      ⚠️
      <strong>Don't practice number-range changes live during a class
       session</strong>
      on a shared server — you risk colliding with what other students are
      actively working on, or missing important points while fiddling with
      the screen. Practice this after the session.
     </div>
    </div>

    {/* <!-- Section 3: Worked example - defining 4 ranges --> */}
    <div className="card orange">
     <h2>
      <span className="badge">3</span> Step 2 — Worked Example: Defining
      Four Number Ranges
     </h2>
     <p>
      Four separate number ranges were defined in class, one per customer
      role (matching the account groups from Lecture 16: Sold-to, Ship-to,
      Payer, Bill-to), each identified with the batch's own prefix letter
      (<code>P</code>):
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Range Key</th>
        <th>From Number</th>
        <th>To Number</th>
        <th>External?</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P1</td>
        <td>617602</td>
        <td>617699</td>
        <td>❌ Unchecked (Internal)</td>
       </tr>
       <tr>
        <td>P2</td>
        <td>617702</td>
        <td>617799</td>
        <td>❌ Unchecked (Internal)</td>
       </tr>
       <tr>
        <td>P3</td>
        <td>617802</td>
        <td>617899</td>
        <td>❌ Unchecked (Internal)</td>
       </tr>
       <tr>
        <td>P4</td>
        <td>617902</td>
        <td>617999</td>
        <td>❌ Unchecked (Internal)</td>
       </tr>
      </tbody>
     </table>
     <div className="stepper">
      <div className="step">
       On the Change Intervals screen, click the
       <strong>Insert Line (+)</strong> symbol.
      </div>
      <div className="step">
       Enter the range key (e.g., <code>P1</code>), From Number, To Number
       → leave <strong>External</strong> unchecked for internal numbering.
      </div>
      <div className="step">
       Press Enter → Save. Repeat with Insert Line for P2, P3, and P4.
      </div>
     </div>
     <div className="callout blue">
      🔗 <strong>Assignment comes next:</strong> defining these four ranges
      is only half the job — the system still doesn't know
      <em>which</em> range (P1, P2, P3, or P4) applies to which customer
      account group (Sold-to, Ship-to, Payer, Bill-to). That
      <strong>assignment step</strong> links a number range to an account
      group, and is picked up in the next class.
     </div>
    </div>

    {/* <!-- Section 4: Internal vs external --> */}
    <div className="card purple">
     <h2>
      <span className="badge">4</span> Internal vs. External Numbering
     </h2>
     <div className="callout purple">
      💡 The <strong>External</strong> checkbox on a number range controls
      who assigns the customer number.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Setting</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>External <strong>checked</strong></td>
        <td>
         <strong>External number</strong> — the user must manually type
         in the customer number when creating the record
        </td>
       </tr>
       <tr>
        <td>External <strong>unchecked</strong></td>
        <td>
         <strong>Internal number</strong> — the system automatically
         generates the next number while saving the customer master
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 5: Numeric / alphanumeric / character rules --> */}
    <div className="card gold">
     <h2>
      <span className="badge">5</span> Numeric, Alphanumeric &amp; Character
      Ranges
     </h2>
     <p>Number range values themselves can take three forms:</p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Type</th>
        <th>What It Looks Like</th>
        <th>Example</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Numeric</td>
        <td>A complete number</td>
        <td><code>100645</code></td>
       </tr>
       <tr>
        <td>Alphanumeric</td>
        <td>A combination of characters and numbers</td>
        <td><code>ALCHEM0004012</code></td>
       </tr>
       <tr>
        <td>Character</td>
        <td>Purely characters/letters, e.g. a full range like A to Z</td>
        <td><code>MEGANUM</code>-style identifiers</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Critical rule:</strong> Alphanumeric and pure Character
      ranges must <strong>always be External</strong> — the system cannot
      auto-generate a meaningful name/code combination on its own, so the
      user must always enter it manually. Numeric ranges, on the other hand,
      can be either Internal or External, depending on client preference.
     </div>
    </div>

    {/* <!-- Section 6: NR Status --> */}
    <div className="card teal">
     <h2>
      <span className="badge">6</span> Changing the Current Number — NR
      Status
     </h2>
     <p>
      On the normal Change Intervals screen, the running
      <strong>"current number"</strong> for a range (e.g.,
      <code>100645</code> after several customers have been created with the
      standard account group) is <strong>read-only</strong> — you can't
      directly overwrite it there.
     </p>
     <div className="callout">
      🔧 <strong>NR Status</strong> is the option used specifically to
      <strong>change the current number</strong> of a range on demand.
     </div>
     <h3>Worked Example</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Current number is 100645; next customer created normally</td>
        <td>New customer gets 100646 (simple +1 increment)</td>
       </tr>
       <tr>
        <td>
         Client wants the <em>next</em> customer to start from 100700
         instead
        </td>
        <td>
         Go to <strong>NR Status</strong> → manually set the current
         number to 100699 → the next customer created will then get
         100700
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 NR Status only applies to <strong>Internal</strong> number ranges —
      External ranges have no "current number" to track, since the user
      supplies the number manually every time.
     </p>
    </div>

    {/* <!-- Section 7: Buffering --> */}
    <div className="card red">
     <h2>
      <span className="badge">7</span> Number Buffering — A Common Gotcha
     </h2>
     <div className="callout red">
      ⚠️ Sometimes, after creating a few customers, the
      <strong>current number</strong> shown in Change Intervals seems to
      "jump ahead" — e.g., after customers 646, 647, 648, 649 are created,
      the system already shows the current number as 650, even though only 4
      customers were actually created.
     </div>
     <p>
      This is <strong>buffering</strong> — SAP reserves a small block of
      numbers (e.g., 5 at a time) in memory for performance reasons. The
      actual customers created still get correct, sequential numbers (647,
      648, 649...) — only the <em>displayed</em> current number in the
      number-range table jumps ahead in blocks of 5.
     </p>
     <div className="callout green">
      ✅ <strong>This is not an error</strong> — the next customer created
      will still correctly continue the real sequence (e.g., 651). The
      buffer merely reserves ahead; it doesn't skip or duplicate actual
      customer numbers.
     </div>
     <h3>
      How to Disable Buffering (If a Client Insists on Exact Sequencing)
     </h3>
     <div className="stepper">
      <div className="step">
       Go to T-code <span className="tcode">SNUM</span> → enter object
       <code>DEBITOR</code> → Change.
      </div>
      <div className="step">
       Go to the <strong>Customizing</strong> tab → set Buffering to
       <strong>"No Buffering."</strong>
      </div>
      <div className="step">
       Save → confirm Yes. From this point, the current number will update
       one at a time in <span className="tcode">XDN1</span> instead of
       jumping in blocks.
      </div>
     </div>
     <div className="callout blue">
      💬 <strong>Common interview question:</strong> "My customer number is
      taking a buffer jump — what could be the reason?" → Answer:
      <strong>T-code SNUM</strong>, on the <code>DEBITOR</code> number-range
      object, controls this buffering behavior.
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
        <td>What T-code is used to define customer number ranges?</td>
        <td>XDN1</td>
       </tr>
       <tr>
        <td>Is defining custom number ranges mandatory?</td>
        <td>
         Not mandatory for practice (standard ranges work fine);
         mandatory in real projects, since clients specify their own
         number series
        </td>
       </tr>
       <tr>
        <td>
         What does the "External" checkbox control on a number range?
        </td>
        <td>
         Whether the customer number is entered manually by the user
         (External, checked) or auto-generated by the system on save
         (Internal, unchecked)
        </td>
       </tr>
       <tr>
        <td>What three forms can a number range's values take?</td>
        <td>
         Numeric (pure digits), Alphanumeric (letters + digits), and
         Character (pure letters/names)
        </td>
       </tr>
       <tr>
        <td>Which types of number ranges must always be External?</td>
        <td>
         Alphanumeric and pure Character ranges — the system cannot
         auto-generate them, so the user must enter them manually
        </td>
       </tr>
       <tr>
        <td>
         Can a Numeric number range be either Internal or External?
        </td>
        <td>Yes — that choice depends entirely on client preference</td>
       </tr>
       <tr>
        <td>
         How do you change the "current number" of an internal number
         range?
        </td>
        <td>
         Use the NR Status option — the normal Change Intervals screen
         shows the current number as read-only
        </td>
       </tr>
       <tr>
        <td>
         What does it mean if a customer number "jumps" ahead (e.g.,
         shows 650 after only 4 customers were created)?
        </td>
        <td>
         Number buffering — SAP reserves a block of numbers in advance
         for performance; actual customer numbers created are still
         correctly sequential
        </td>
       </tr>
       <tr>
        <td>
         How do you disable number buffering if exact sequencing is
         required?
        </td>
        <td>
         T-code SNUM → object DEBITOR → Change → Customizing tab → set
         Buffering to "No Buffering" → Save
        </td>
       </tr>
       <tr>
        <td>Does NR Status apply to External number ranges?</td>
        <td>
         No — External ranges have no system-tracked "current number,"
         since the user supplies the number manually every time
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
        <td><span className="tcode">XDN1</span></td>
        <td>
         Define customer number ranges (Change Intervals, Free Intervals,
         NR Status)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">SNUM</span></td>
        <td>
         Control number-range buffering behavior (object DEBITOR for
         customer numbers)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">XD02</span></td>
        <td>
         Change Customer Master — referenced from last class for adding
         Ship-to/Bill-to partner functions
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
        <td>SPRO path for customer number ranges</td>
        <td>
         Logistics General → Business Partner → Customers → Control →
         Define and Assign Customer Number Ranges → Define Number Ranges
         for Customer Master
        </td>
       </tr>
       <tr>
        <td>Number ranges defined in class</td>
        <td>
         P1 (617602–617699), P2 (617702–617799), P3 (617802–617899), P4
         (617902–617999) — all Internal
        </td>
       </tr>
       <tr>
        <td>Recommended practice-server gap</td>
        <td>~99 numbers per range</td>
       </tr>
       <tr>
        <td>External checkbox — checked</td>
        <td>External number (user enters manually)</td>
       </tr>
       <tr>
        <td>External checkbox — unchecked</td>
        <td>Internal number (system auto-generates on save)</td>
       </tr>
       <tr>
        <td>Alphanumeric/Character ranges</td>
        <td>Must always be External</td>
       </tr>
       <tr>
        <td>Numeric ranges</td>
        <td>Can be Internal or External</td>
       </tr>
       <tr>
        <td>Change current number</td>
        <td>
         NR Status option (not the standard Change Intervals screen)
        </td>
       </tr>
       <tr>
        <td>Buffering control</td>
        <td>SNUM → object DEBITOR → Customizing tab → "No Buffering"</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture introduced <strong>Customer Number Ranges</strong> via
      T-code <strong>XDN1</strong>: checking free intervals before defining
      a new range, and a worked example defining four ranges (P1–P4, one per
      customer role) with a gap of 99 numbers each, all set to Internal
      numbering. The core rules covered were: the
      <strong>External</strong> checkbox controls manual vs.
      system-generated numbering; number values can be Numeric,
      Alphanumeric, or Character, with Alphanumeric/Character always
      required to be External; and <strong>NR Status</strong> is the only
      way to manually override a range's current number (e.g., to skip ahead
      per a client's request). The lecture closed with the
      <strong>buffering</strong> gotcha — the current number sometimes
      appears to jump ahead in blocks for performance reasons, which is
      harmless and can be disabled via <strong>SNUM</strong> on the
      <code>DEBITOR</code> object if a client insists on strict sequential
      numbering. Assigning each defined number range to its matching
      customer account group (Sold-to, Ship-to, Payer, Bill-to) remains for
      the next class.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>XDN1</strong> defines customer number ranges; always check
       <strong>Free Intervals</strong> first before picking a new block
      </li>
      <li>
       <strong>External checked = manual entry; unchecked = system
        auto-generates</strong>
       the number on save
      </li>
      <li>
       <strong>Alphanumeric and Character ranges must be External</strong>;
       Numeric ranges can be either
      </li>
      <li>
       To manually change a range's current number, use
       <strong>NR Status</strong> — not the standard Change Intervals
       screen
      </li>
      <li>
       <strong>Buffering</strong> (jumping current numbers in blocks) is a
       harmless performance optimization; disable it via
       <strong>SNUM → DEBITOR → No Buffering</strong> only if a client
       genuinely needs strict sequencing
      </li>
      <li>
       Defining number ranges is only step one —
       <strong>assigning each range to its account group</strong> is still
       pending
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Assigning the four defined number
      ranges to their respective customer account groups.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 17 Notes — Customer Number Ranges: Definition, Internal/External
    Numbering &amp; Buffering 🎓
   </p>
  </div>
 );
};

export default Customer17;
