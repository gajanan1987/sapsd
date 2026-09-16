const SalesDocument59 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-brown">
    <h1>
     📦 Lecture 59 — Schedule Line Category Controls: Delivery Block &amp;
     Movement Type
    </h1>
    <p>
     SAP SD | Delivery Block at the schedule line category level (contrasted
     with the document-type version), then Movement Type in full depth — 601
     (PGI) and 602 (Reverse PGI) demonstrated live with stock and accounting
     verification, plus all four Returns movement types (651/653/655/657)
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class introduced <strong>Schedule Line Category</strong> —
      determination by Item Category + MRP Type (<span className="tcode"
      >VOV5</span
      >), definition via <span className="tcode">VOV6</span> (SPRO path:
      Sales and Distribution → Sales → Sales Documents → Schedule Lines →
      Define Schedule Line Categories) — and closed with a full custom build
      and live test. Today starts the Schedule Line Category's own controls:
      <strong>Delivery Block</strong> and <strong>Movement Type</strong>.
     </div>
    </div>

    {/* <!-- Section 1: Delivery Block --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Delivery Block (Schedule Line
      Category Level)
     </h2>
     <div className="callout teal">
      💡 <strong>Delivery Block</strong> exists as a field at
      <strong>both</strong> the Sales Document Type level (Document Type
      Controls, covered earlier in this course) and the
      <strong>Schedule Line Category</strong> level — the scope of the block
      is what differs between the two.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Where Delivery Block Is Maintained</th>
        <th>Effect</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Sales Document Type Controls</td>
        <td>Blocks the <strong>entire document</strong> for delivery</td>
       </tr>
       <tr>
        <td>Schedule Line Category</td>
        <td>
         Blocks <strong>only that particular schedule line</strong> (line
         item) for delivery
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 2: Movement Type Concept --> */}
    <div className="card orange">
     <h2><span className="badge">2</span> Movement Type — Concept</h2>
     <div className="callout orange">
      💡
      <strong
      >Every physical movement of goods requires Movement Type
       information</strong
      >
      — whether goods move storage location to storage location, plant to
      plant, plant to customer, customer to plant (returns), or any other
      physical movement. The system considers the movement type at
      <strong>PGI (Post Goods Issue)</strong>, and reverses/cancels it when
      the PGI itself is reversed.
     </div>
     <div className="callout purple">
      📖 <strong>Movement Type controls two things:</strong>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>What Movement Type Controls</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>
         Stock updation — which stock category is increased or decreased,
         and by how much
        </td>
       </tr>
       <tr>
        <td>2</td>
        <td>
         Whether an inventory accounting document is generated, and what
         its accounting entry is
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Different movement types produce different combinations of these
      two effects — that is exactly what the rest of this lecture walks
      through, movement type by movement type.
     </p>
    </div>

    {/* <!-- Section 3: Movement Type 601 --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Movement Type 601 — Standard PGI
     </h2>
     <div className="callout purple">
      💡 The standard Order schedule line category (<code>CP</code>) carries
      <strong>Movement Type <code>601</code></strong
      >.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Effect</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Stock updation</td>
        <td>Stock is reduced from Unrestricted Stock</td>
       </tr>
       <tr>
        <td>Inventory accounting document</td>
        <td>
         Generated — Cost of Goods Sold Account Debit → Inventory Account
         Credit (Inventory Account posted with posting key
         <code>99</code>, credit)
        </td>
       </tr>
      </tbody>
     </table>

     <h3>Worked Demonstration</h3>
     <div className="stepper">
      <div className="step">
       Before creating the order, check current stock for the test material
       at Plant <code>P100</code> — noted as ending in
       <code>...480</code> (unrestricted stock).
      </div>
      <div className="step">
       Create a Sales Order (<span className="tcode">VA01</span>, order
       type <code>PPOR</code>) for the same material and customer, quantity
       <strong>100</strong>. Save.
      </div>
      <div className="step">
       Create the Delivery and perform PGI (<span className="tcode"
       >VL01N</span
       >, PGI date 31st July). This uses schedule line category
       <code>CP</code> → Movement Type <code>601</code>.
      </div>
      <div className="step">
       Refresh the stock report: the last three digits drop by 100, from
       <code>...480</code> to <code>...380</code> — confirming stock was
       reduced from unrestricted stock.
      </div>
      <div className="step">
       <span className="tcode">VL02N</span> (change mode of the Delivery) →
       Document Flow → select the Goods Issue delivery → Display Document →
       Accounting: confirms Movement Type <code>601</code>, with the
       Inventory Account posted using posting key <code>99</code> (credit).
      </div>
     </div>
     <p className="note-text">
      📌 This recording consistently says "<strong>PGA</strong>" where the
      standard SAP term is <strong>PGI (Post Goods Issue)</strong>
      — corrected throughout these notes.
     </p>
    </div>

    {/* <!-- Section 4: Movement Type 602 --> */}
    <div className="card red">
     <h2>
      <span className="badge">4</span> Movement Type 602 — Reverse PGI
     </h2>
     <div className="callout red">
      💡 Reversing a PGI uses
      <strong>Movement Type <code>602</code></strong> — the mirror image of
      <code>601</code>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Effect</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Stock updation</td>
        <td>Stock is added back to Unrestricted Stock</td>
       </tr>
       <tr>
        <td>Inventory accounting document</td>
        <td>
         Generated — accounting entry reversed: Inventory Account Debit
         (posting key <code>89</code>) → Cost of Goods Sold Account
         Credit (posting key <code>91</code>)
        </td>
       </tr>
      </tbody>
     </table>

     <h3>Worked Demonstration</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VL09</span> (Reverse PGI) → mention the
       Shipping Point and the Delivery number → Execute.
      </div>
      <div className="step">
       Select the delivery line, click <strong>Reverse</strong>, Continue,
       set the posting date (31st, same day), Reverse, Continue.
      </div>
      <div className="step">
       Refresh the stock report: the last three digits return from
       <code>...380</code> back to <code>...480</code>.
      </div>
      <div className="step">
       <span className="tcode">VL02N</span> → Document Flow → select the
       reversal document → Display Document → Accounting: confirms Movement
       Type <code>602</code>, Inventory Account debited (posting key
       <code>89</code>), Cost of Goods Sold Account credited (posting key
       <code>91</code>).
      </div>
     </div>

     <div className="callout gold">
      ❓ <strong>Question raised:</strong> a Reverse PGI done via
      <span className="tcode">VL09</span> has no schedule line category of
      its own to determine a movement type from — so how does the system
      know to use <code>602</code>?
     </div>
     <div className="callout blue">
      📖
      <strong>Answer — T-code <span className="tcode">OMJJ</span>:</strong>
      this is where movement types themselves are configured. Selecting
      Movement Type <code>602</code> and double-clicking
      <strong>Allowed Transactions</strong> shows that
      <span className="tcode">VL09</span> is explicitly configured as an
      allowed transaction for movement type <code>602</code> — the system
      doesn't derive <code>602</code> from a schedule line category at all
      in this case; it's tied directly to the transaction (<span
       className="tcode"
      >VL09</span
      >) via <span className="tcode">OMJJ</span>.
     </div>
    </div>

    {/* <!-- Section 5: Returns Movement Types --> */}
    <div className="card gold">
     <h2>
      <span className="badge">5</span> Movement Types for Returns (Schedule
      Line Category <code>DN</code>)
     </h2>
     <div className="callout gold">
      💡 The Returns schedule line category (<code>DN</code>) standardly
      carries <strong>Movement Type <code>651</code></strong
      >, but the field can be changed to three alternative movement types
      depending on business requirement.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Movement Type</th>
        <th>Stock Updation</th>
        <th>Inventory Accounting Document</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>651</code> (standard)</td>
        <td>Added to <strong>Return Stock</strong></td>
        <td>
         <strong>Not generated</strong> — Return Stock is a temporary
         stock category
        </td>
       </tr>
       <tr>
        <td><code>653</code></td>
        <td>Added directly to Unrestricted Stock</td>
        <td>
         Generated — Inventory Account Debit → Cost of Goods Sold Account
         Credit
        </td>
       </tr>
       <tr>
        <td><code>655</code></td>
        <td>Added to Quality Inspection Stock</td>
        <td>
         Generated — Inventory Account Debit → Cost of Goods Sold Account
         Credit
        </td>
       </tr>
       <tr>
        <td><code>657</code></td>
        <td>Added to Blocked Stock</td>
        <td>
         Generated — Inventory Account Debit → Cost of Goods Sold Account
         Credit
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖 <strong>Why 651 generates no accounting document:</strong>
      once returned goods post to Return Stock, a team must first physically
      cross-check/inspect the goods before deciding where they actually
      belong — Unrestricted Stock, Quality Inspection Stock, or Blocked
      Stock. Only once that decision moves the stock out of the temporary
      Return Stock category does an inventory accounting document get
      generated.
     </div>

     <h3>Worked Demonstration (Movement Type 651)</h3>
     <div className="callout green">
      ✅ After PGI on the returns document, the stock report shows Return
      Stock increased to <strong>300</strong>. Document Flow → select the
      "Goods Receipt — Returns" document → Display Document confirms
      Movement Type <code>651</code>, and — as expected — no accounting
      document is attached to it.
     </div>

     <div className="callout purple">
      ❓ <strong>Student question:</strong> can a customer return goods to a
      different plant/location than the one that originally delivered them
      (e.g., delivered from Mumbai, returned to Pune)? <br />📖
      <strong>Answer:</strong> yes — returns can be received at a different
      plant than the original delivering plant.
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
         How does Delivery Block differ between the Document Type level
         and the Schedule Line Category level?
        </td>
        <td>
         At the Document Type level it blocks the entire document for
         delivery; at the Schedule Line Category level it blocks only
         that particular schedule line (line item) for delivery
        </td>
       </tr>
       <tr>
        <td>What two things does Movement Type control?</td>
        <td>
         Stock updation (which stock category changes, and by how much)
         and whether an inventory accounting document is generated (and
         its accounting entry)
        </td>
       </tr>
       <tr>
        <td>When does the system consider Movement Type?</td>
        <td>
         At PGI (Post Goods Issue) — and it reverses/cancels the movement
         type effect when the PGI is reversed
        </td>
       </tr>
       <tr>
        <td>
         What is the effect of Movement Type 601, and where is it
         configured?
        </td>
        <td>
         It's the standard Order schedule line category's (CP) movement
         type; stock reduces from Unrestricted Stock, and an inventory
         accounting document generates (Cost of Goods Sold Debit →
         Inventory Credit)
        </td>
       </tr>
       <tr>
        <td>
         What is the effect of Movement Type 602, and what transaction
         triggers it?
        </td>
        <td>
         Reverse PGI, triggered via VL09; stock is added back to
         Unrestricted Stock, and the accounting entry reverses (Inventory
         Account Debit → Cost of Goods Sold Account Credit)
        </td>
       </tr>
       <tr>
        <td>
         Since a Reverse PGI (VL09) has no schedule line category of its
         own, how does the system determine it should use Movement Type
         602?
        </td>
        <td>
         Via T-code OMJJ, where Movement Type 602 has VL09 explicitly
         configured under its Allowed Transactions — the movement type is
         tied directly to the transaction, not derived from a schedule
         line category
        </td>
       </tr>
       <tr>
        <td>
         What is the standard Movement Type for Returns, and why does it
         generate no accounting document?
        </td>
        <td>
         651; it posts stock to Return Stock, a temporary stock category,
         so no inventory accounting document is generated until the goods
         are inspected and moved to a permanent stock category
        </td>
       </tr>
       <tr>
        <td>
         What are the three alternative Movement Types for Returns, and
         what stock category does each post to?
        </td>
        <td>
         653 → Unrestricted Stock; 655 → Quality Inspection Stock; 657 →
         Blocked Stock — all three generate an inventory accounting
         document (Inventory Account Debit → Cost of Goods Sold Account
         Credit), unlike the standard 651
        </td>
       </tr>
       <tr>
        <td>
         Can returned goods be received at a plant different from the one
         that originally delivered them?
        </td>
        <td>
         Yes — returns can be received at a different plant/location than
         the original delivering plant
        </td>
       </tr>
       <tr>
        <td>
         What posting keys were observed for the Inventory Account across
         the 601 and 602 accounting entries?
        </td>
        <td>
         601: Inventory Account credited with posting key 99; 602:
         Inventory Account debited with posting key 89, with Cost of
         Goods Sold credited using posting key 91
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
        <td><span className="tcode">VOV6</span></td>
        <td>
         Define Schedule Line Categories — Delivery Block and Movement
         Type are both fields inside this screen
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used to create the test order (order type
         PPOR, quantity 100) for the 601 demonstration
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VL01N</span></td>
        <td>
         Create Delivery — used to create the delivery and perform PGI,
         triggering Movement Type 601
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VL02N</span></td>
        <td>
         Change Delivery — used to open Document Flow and view the
         Accounting document for both the 601 and 602 demonstrations
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VL09</span></td>
        <td>
         Reverse Goods Movement (Reverse PGI) — used to reverse the
         delivery's goods issue, triggering Movement Type 602
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OMJJ</span></td>
        <td>
         Movement Type Configuration — used to show how Movement Type 602
         has VL09 configured under its Allowed Transactions, answering
         how the system determines movement type for a reverse PGI with
         no schedule line category
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
        <td>Delivery Block scope</td>
        <td>
         Document Type level = blocks whole document; Schedule Line
         Category level = blocks only that line item
        </td>
       </tr>
       <tr>
        <td>Movement Type — two controlled effects</td>
        <td>
         1) Stock updation; 2) Inventory accounting document generation
         and its accounting entry
        </td>
       </tr>
       <tr>
        <td>
         Movement Type 601 (standard Order, schedule line category CP)
        </td>
        <td>
         Reduces Unrestricted Stock; generates accounting doc (COGS Debit
         / Inventory Credit, Inventory posted with key 99)
        </td>
       </tr>
       <tr>
        <td>Movement Type 602 (Reverse PGI, via VL09)</td>
        <td>
         Adds back to Unrestricted Stock; generates reversed accounting
         doc (Inventory Debit key 89 / COGS Credit key 91)
        </td>
       </tr>
       <tr>
        <td>Movement type determination for VL09</td>
        <td>
         Configured directly in OMJJ under Movement Type 602's Allowed
         Transactions — not derived from a schedule line category
        </td>
       </tr>
       <tr>
        <td>Returns movement types (schedule line category DN)</td>
        <td>
         651 (standard) → Return Stock, no accounting doc; 653 →
         Unrestricted Stock, accounting doc generated; 655 → Quality
         Inspection Stock, accounting doc generated; 657 → Blocked Stock,
         accounting doc generated
        </td>
       </tr>
       <tr>
        <td>Worked demo stock movement</td>
        <td>
         Plant P100, test material stock ...480 → order qty 100 → PGI →
         ...380 → Reverse PGI (VL09) → back to ...480; Returns PGI →
         Return Stock increases to 300
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture began the Schedule Line Category's own controls with
      <strong>Delivery Block</strong>, contrasted against the same field at
      the Document Type level — one blocks the whole document, the other
      blocks only the specific schedule line. The bulk of the session
      covered <strong>Movement Type</strong>: every physical goods movement
      requires one, considered by the system at PGI and cancelled on
      reversal, and it controls both stock updation and inventory accounting
      document generation. <strong>Movement Type 601</strong> (the standard
      Order schedule line category <code>CP</code>) was demonstrated
      end-to-end — creating an order, performing PGI, watching unrestricted
      stock drop by the order quantity, and verifying the Cost of Goods Sold
      Debit / Inventory Credit accounting entry via Document Flow.
      <strong>Movement Type 602</strong> (Reverse PGI via
      <span className="tcode">VL09</span>) was demonstrated as its mirror
      image, restoring stock and reversing the accounting entry, with a
      follow-up question on how the system determines
      <code>602</code> without a schedule line category — answered via
      <span className="tcode">OMJJ</span>'s Allowed Transactions setting.
      Finally,
      <strong>Returns (schedule line category <code>DN</code>)</strong> was
      shown to support four movement types: the standard
      <code>651</code> (Return Stock, temporary, no accounting document) and
      three configurable alternatives — <code>653</code> (Unrestricted
      Stock), <code>655</code> (Quality Inspection Stock), and
      <code>657</code> (Blocked Stock) — all three generating a full
      accounting entry, unlike the standard.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong
       >Delivery Block's scope mirrors a pattern seen before</strong
       >
       — document-type-level vs. item/schedule-line- level blocking is the
       same document-vs-line distinction already seen with Billing Block in
       Lecture 54
      </li>
      <li>
       <strong
       >Movement Type is the single field behind both stock and
        accounting effects</strong
       >
       — memorizing a movement type's number is less useful than memorizing
       which stock category it touches and whether it posts an accounting
       document
      </li>
      <li>
       <strong
       >Not every movement type comes from a schedule line
        category</strong
       >
       — Reverse PGI is the clearest example: its movement type is tied to
       the transaction itself via <span className="tcode">OMJJ</span>, not
       to any item's schedule line category
      </li>
      <li>
       <strong
       >Temporary stock categories suppress accounting documents on
        purpose</strong
       >
       — Return Stock (651) exists specifically so nothing hits the books
       until a human decision (inspection) confirms where the stock
       actually belongs
      </li>
      <li>
       <strong
       >The same schedule line category can carry more than one usable
        movement type</strong
       >
       — Returns (DN) is configured with a standard (651) plus three
       alternates (653/655/657); which one fires depends on what's entered
       during processing, not a hard rule
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> the remaining Movement Types, and
      completing the rest of the Schedule Line Category controls.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 59 Notes — Schedule Line Category Controls: Delivery Block &amp;
    Movement Type 🎓
   </p>
  </div>
 );
};

export default SalesDocument59;
