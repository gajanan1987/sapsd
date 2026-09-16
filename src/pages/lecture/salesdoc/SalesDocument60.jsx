const SalesDocument60 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-pink">
    <h1>
     🚚 Lecture 60 — Movement Types: Consignment, STO &amp; MM Receipts
    </h1>
    <p>
     SAP SD | Wrapping up Consignment movement types, then the full Stock
     Transport Order picture — one-step vs. two-step, STO Returns,
     Intercompany STO and its Returns — and closing with the MM-side movement
     types behind Initial Stock Posting and Goods Receipt (101)
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered <strong>Delivery Block</strong> at the Schedule
      Line Category level and <strong>Movement Type</strong> in depth — 601
      (PGI), 602 (Reverse PGI, via <span className="tcode">OMJJ</span>), and
      all four Returns movement types. Today picks up mid-topic with the
      tail end of <strong>Consignment Issue</strong>, then
      <strong>Consignment Returns</strong>, before moving into
      <strong>Stock Transport Order (STO)</strong> and finally the MM-side
      movement types behind stock receipts.
     </div>
    </div>

    {/* <!-- Section 1: Consignment Movement Types --> */}
    <div className="card teal">
     <h2>
      <span className="badge">6</span> Consignment — Issue &amp; Returns
      Movement Types
     </h2>
     <div className="callout teal">
      💡
      <strong
      >Consignment Issue (continued from the previous class):</strong
      >
      when consignment stock is issued to the customer, an inventory
      accounting document generates because
      <strong>ownership transfers to the customer</strong> at that point.
      Accounting entry: Cost of Goods Sold Account Debit → Inventory Account
      Credit.
     </div>
     <p className="note-text">
      📌 This recording opens mid-explanation — the movement type number for
      Consignment Issue itself was not captured in this excerpt; only its
      accounting effect (above) was recorded. Confirm the exact movement
      type against the system.
     </p>
     <div className="callout purple">
      💡 <strong>Consignment Returns:</strong> Schedule Line Category
      <code>D0</code>, Movement Type <strong><code>634</code></strong
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
        <td>Stock is added to Consignment Stock</td>
       </tr>
       <tr>
        <td>Inventory accounting document</td>
        <td>
         Generated — because ownership is taken back from the customer;
         entry: Inventory Account Debit → Cost of Goods Sold Account
         Credit
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Audio quality note:</strong> the schedule line category for
      Consignment Returns is rendered here as "<code>B0</code>" — corrected
      to <code>D0</code>, matching the value already established in Lecture
      58. Separately, this recording states that the inventory accounting
      document generates for 634, then immediately repeats "will not
      generate" twice — this appears to be a transcription artifact rather
      than a genuine contradiction; the fuller statement (with the complete
      accounting entry) is treated as authoritative above. Confirm against
      the system if in doubt.
     </div>
    </div>

    {/* <!-- Section 2: STO Concept --> */}
    <div className="card orange">
     <h2>
      <span className="badge">7</span> Stock Transport Order (STO) — Concept
     </h2>
     <div className="callout orange">
      💡 <strong>Stock Transport Order (STO)</strong> means
      <strong>transferring stock between two plants</strong>. It comes in
      two flavors: <strong>Two-Step Process</strong> and
      <strong>One-Step Process</strong>.
     </div>
     <div className="callout blue">
      📖 <strong>Worked example setup:</strong> Supplying Plant
      <code>P100</code> (Mumbai) holds <strong>10,000</strong> units of
      Material X; Receiving Plant <code>P200</code> holds
      <strong>0</strong> units. The receiving plant raises a Purchase Order
      for <strong>3,000</strong> quantity, and the supplying plant creates a
      Delivery with reference to that PO.
     </div>

     <h3>Two-Step Process — Movement Type 641</h3>
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
        <td>
         Stock is reduced from the Supplying Plant, and added as
         <strong>Stock in Transit</strong> at the Receiving Plant (3,000
         units)
        </td>
       </tr>
       <tr>
        <td>Inventory accounting document</td>
        <td>
         Generated — Receiving Plant (Inventory) Account Debit →
         Supplying Plant (Inventory) Account Credit
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout gold">
      📖 <strong>Why "two steps":</strong> the delivery only moves stock
      into <em>transit</em> at the receiving plant. When the goods
      physically arrive, the receiving plant performs
      <span className="tcode">MIGO</span> (Goods Receipt) — only then does
      the stock-in-transit become actual, usable stock at the receiving
      plant.
     </div>

     <h3>One-Step Process — Movement Type 647</h3>
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
        <td>
         Stock is reduced from the Supplying Plant and
         <strong>directly added</strong> to the Receiving Plant's stock —
         no Stock-in-Transit stage, no separate
         <span className="tcode">MIGO</span> needed
        </td>
       </tr>
       <tr>
        <td>Inventory accounting document</td>
        <td>
         Generated — Receiving Plant (Inventory) Account Debit →
         Supplying Plant (Inventory) Account Credit
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 <strong>The entire difference between the two processes</strong> is
      whether the delivery's stock lands as Stock-in-Transit (Two- Step,
      needing a follow-up <span className="tcode">MIGO</span>) or directly
      as usable stock at the receiving plant (One-Step). The accounting
      entry is identical either way.
     </p>
    </div>

    {/* <!-- Section 3: STO Variants Table --> */}
    <div className="card purple">
     <h2>
      <span className="badge">8</span> STO, STO Returns &amp; Intercompany
      STO — Full Movement Type Table
     </h2>
     <div className="callout purple">
      💡 The same Two-Step/One-Step pattern repeats across STO, STO Returns,
      and their intercompany equivalents — each with its own Schedule Line
      Category and its own pair of movement types.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Schedule Line Category</th>
        <th>Movement Type — Two-Step</th>
        <th>Movement Type — One-Step</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Stock Transport Order (STO)</td>
        <td><code>NN</code></td>
        <td><code>641</code></td>
        <td><code>647</code></td>
       </tr>
       <tr>
        <td>STO Returns</td>
        <td><code>NR</code></td>
        <td><code>671</code></td>
        <td><code>677</code></td>
       </tr>
       <tr>
        <td>Intercompany STO</td>
        <td><code>NC</code></td>
        <td><code>643</code></td>
        <td><code>645</code></td>
       </tr>
       <tr>
        <td>Intercompany STO Returns</td>
        <td><code>NS</code></td>
        <td><code>673</code></td>
        <td><code>675</code></td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 These schedule line categories (<code>NN</code>,
      <code>NR</code>, <code>NC</code>, <code>NS</code>) match the STO
      family already established in Lecture 58's item-category-driven
      schedule line category list.
     </p>
    </div>

    {/* <!-- Section 4: MM Movement Types --> */}
    <div className="card red">
     <h2>
      <span className="badge">9</span> MM (Materials Management) Movement
      Types — Stock Receipts
     </h2>
     <div className="callout red">
      💡 Two further movement types sit on the MM side rather than the SD
      side, but matter for understanding what happens before a material is
      ever available to sell: <strong>Initial Stock Posting</strong> and
      <strong>Goods Receipt</strong>.
     </div>

     <h3>Movement Type 561 — Initial Stock Posting</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Material Type</th>
        <th>Accounting Entry</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Finished Goods (Material Type <code>FERT</code>)</td>
        <td>
         Inventory Account Debit → Cost of Goods Manufactured Account
         Credit
        </td>
       </tr>
       <tr>
        <td>Trading Goods (Material Type <code>HAWA</code>)</td>
        <td>
         Inventory Account Debit → Cost of Goods Procured Account Credit
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖 <strong>Effect common to both:</strong> stock is added to
      Unrestricted Stock, and an inventory accounting document generates —
      only the credit side of the entry changes, based on whether the
      material being uploaded is Finished Goods or Trading Goods.
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the recording renders this as "Stop
      Posting" — corrected here to <strong>Initial Stock Posting</strong>,
      consistent with Movement Type <code>561</code>'s standard SAP meaning
      (Initial Entry of Stock Balances). The Trading Goods material type is
      likewise rendered unclearly in the audio — corrected here to
      <code>HAWA</code>, the standard SAP material type code for trading
      goods.
     </p>

     <h3>Movement Type 101 — Goods Receipt</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Material Type</th>
        <th>Accounting Entry</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         Goods Receipt from a vendor (<span className="tcode">MIGO</span
         >, against a PO)
        </td>
        <td>Trading Goods (<code>HAWA</code>)</td>
        <td>
         Inventory Account Debit → Cost of Goods Procured Account Credit
        </td>
       </tr>
       <tr>
        <td>Goods Receipt from manufacturing/production</td>
        <td>Finished Goods (<code>FERT</code>)</td>
        <td>
         Inventory Account Debit → Cost of Goods Manufactured Account
         Credit
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout gold">
      📖 <strong>One movement type, two accounting outcomes:</strong>
      <code>101</code> is used for both a vendor goods receipt (<span
       className="tcode"
      >MIGO</span
      >, trading goods) and a manufacturing goods receipt (finished goods) —
      in both cases stock is added to Unrestricted Stock and an inventory
      accounting document generates, but which account gets credited depends
      entirely on the material's Material Type, exactly the same pattern as
      Movement Type <code>561</code> above.
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
         What triggers the inventory accounting document at Consignment
         Issue?
        </td>
        <td>
         Ownership of the stock transfers to the customer at that point;
         the entry is Cost of Goods Sold Account Debit → Inventory
         Account Credit
        </td>
       </tr>
       <tr>
        <td>
         What is the effect of Movement Type 634 (Consignment Returns)?
        </td>
        <td>
         Stock is added to Consignment Stock, and an inventory accounting
         document generates because ownership is taken back from the
         customer — Inventory Account Debit → Cost of Goods Sold Account
         Credit
        </td>
       </tr>
       <tr>
        <td>
         What does Stock Transport Order (STO) mean, and what two process
         variants does it have?
        </td>
        <td>
         Transferring stock between two plants; it has a Two-Step process
         (goods pass through Stock in Transit, needing a follow-up MIGO)
         and a One-Step process (stock lands directly at the receiving
         plant)
        </td>
       </tr>
       <tr>
        <td>
         In the Two-Step STO process, what happens to stock immediately
         after the supplying plant's delivery, and what converts it to
         real stock?
        </td>
        <td>
         Stock is reduced from the supplying plant and shown as Stock in
         Transit at the receiving plant; performing MIGO at the receiving
         plant once goods physically arrive converts it into actual,
         usable stock
        </td>
       </tr>
       <tr>
        <td>
         What is the accounting entry for both the Two-Step (641) and
         One-Step (647) STO movement types?
        </td>
        <td>
         Receiving Plant (Inventory) Account Debit → Supplying Plant
         (Inventory) Account Credit — identical for both processes
        </td>
       </tr>
       <tr>
        <td>
         What Schedule Line Category and movement types apply to plain
         STO?
        </td>
        <td>NN; Two-Step = 641, One-Step = 647</td>
       </tr>
       <tr>
        <td>
         What Schedule Line Category and movement types apply to
         Intercompany STO and its Returns?
        </td>
        <td>
         Intercompany STO: NC, Two-Step 643 / One-Step 645; Intercompany
         STO Returns: NS, Two-Step 673 / One-Step 675
        </td>
       </tr>
       <tr>
        <td>
         What does Movement Type 561 represent, and how does its
         accounting entry differ by material type?
        </td>
        <td>
         Initial Stock Posting (initial entry of stock balances);
         Finished Goods (FERT) post Inventory Debit / Cost of Goods
         Manufactured Credit, while Trading Goods (HAWA) post Inventory
         Debit / Cost of Goods Procured Credit
        </td>
       </tr>
       <tr>
        <td>
         What is Movement Type 101 used for, and why can its accounting
         entry differ even though the movement type is the same?
        </td>
        <td>
         Goods Receipt — both a vendor goods receipt via MIGO (trading
         goods) and a manufacturing goods receipt (finished goods); the
         credited account depends on the material's Material Type (Cost
         of Goods Procured for HAWA, Cost of Goods Manufactured for
         FERT), not on the movement type itself
        </td>
       </tr>
       <tr>
        <td>
         Why is MIGO specifically associated with Trading Goods rather
         than Finished Goods?
        </td>
        <td>
         MIGO is used to post the Goods Receipt for materials received
         from an external vendor (against a Purchase Order) — that is the
         Trading Goods scenario; Finished Goods are received into stock
         via the manufacturing/production goods receipt instead
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
        <td><span className="tcode">MIGO</span></td>
        <td>
         Goods Receipt/Movement — used at the receiving plant to convert
         Stock in Transit into actual stock in the Two-Step STO process,
         and to post vendor Goods Receipt (Movement Type 101) for Trading
         Goods
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 No new SD-side transaction codes were introduced this session
      beyond <span className="tcode">MIGO</span> — the focus was entirely on
      the movement-type configuration values themselves.
     </p>
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
        <td>Consignment Issue accounting</td>
        <td>
         Ownership transfers to customer; Cost of Goods Sold Debit /
         Inventory Credit
        </td>
       </tr>
       <tr>
        <td>Consignment Returns (D0, Movement Type 634)</td>
        <td>
         Stock added to Consignment Stock; Inventory Debit / Cost of
         Goods Sold Credit (ownership taken back from customer)
        </td>
       </tr>
       <tr>
        <td>STO (NN)</td>
        <td>
         Two-Step = 641 (Stock in Transit → MIGO); One-Step = 647 (direct
         to receiving plant); both post Receiving Plant Debit / Supplying
         Plant Credit
        </td>
       </tr>
       <tr>
        <td>STO Returns (NR)</td>
        <td>Two-Step = 671; One-Step = 677</td>
       </tr>
       <tr>
        <td>Intercompany STO (NC) / Returns (NS)</td>
        <td>
         Intercompany STO: Two-Step 643 / One-Step 645; Intercompany STO
         Returns: Two-Step 673 / One-Step 675
        </td>
       </tr>
       <tr>
        <td>Movement Type 561 (Initial Stock Posting)</td>
        <td>
         Stock added to Unrestricted Stock; FERT → Inventory Debit / Cost
         of Goods Manufactured Credit; HAWA → Inventory Debit / Cost of
         Goods Procured Credit
        </td>
       </tr>
       <tr>
        <td>Movement Type 101 (Goods Receipt)</td>
        <td>
         Stock added to Unrestricted Stock; vendor receipt (HAWA, via
         MIGO) → Cost of Goods Procured Credit; manufacturing receipt
         (FERT) → Cost of Goods Manufactured Credit
        </td>
       </tr>
       <tr>
        <td>STO worked example</td>
        <td>
         Supplying Plant P100 (Mumbai, 10,000 units of Material X) →
         Receiving Plant P200 (0 units); PO raised for 3,000 units,
         delivered by supplying plant
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture closed out <strong>Consignment</strong> movement types —
      Issue (ownership transfer to customer, COGS Debit / Inventory Credit)
      and Returns (Movement Type <code>634</code>, schedule line category
      <code>D0</code>, stock to Consignment Stock, Inventory Debit / COGS
      Credit) — then moved into
      <strong>Stock Transport Order (STO)</strong>: transferring stock
      between a Supplying and a Receiving Plant, either via a
      <strong>Two-Step process</strong> (Movement Type <code>641</code>,
      stock parked as Stock in Transit until a receiving-plant
      <span className="tcode">MIGO</span>) or a
      <strong>One-Step process</strong> (Movement Type <code>647</code>,
      stock lands directly at the receiving plant) — both posting Receiving
      Plant Debit / Supplying Plant Credit. The same Two-Step/One-Step
      pattern was tabulated for STO Returns (<code>NR</code>: 671/677),
      Intercompany STO (<code>NC</code>: 643/645), and Intercompany STO
      Returns (<code>NS</code>: 673/675). The lecture closed with two
      MM-side movement types: <strong>561</strong> (Initial Stock Posting,
      with the accounting entry depending on whether the material is
      Finished Goods or Trading Goods) and <strong>101</strong> (Goods
      Receipt — used identically in number for both a vendor receipt via
      <span className="tcode">MIGO</span> and a manufacturing receipt, again
      split by material type on the accounting side). The remaining Schedule
      Line Category controls were deferred to the next class.
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
       >Ownership transfer is the trigger for consignment
        accounting</strong
       >
       — Issue posts a document because ownership leaves the company;
       Returns posts one because ownership comes back — the stock and
       accounting always move together with who legally owns the goods
      </li>
      <li>
       <strong
       >Two-Step vs. One-Step STO is purely about whether
        stock-in-transit exists</strong
       >
       — the accounting entry is identical either way; only the
       intermediate stock status (and whether a second MIGO is needed)
       differs
      </li>
      <li>
       <strong
       >The STO family follows one consistent numbering logic</strong
       >
       — every scenario (STO, STO Returns, Intercompany STO, Intercompany
       STO Returns) gets its own schedule line category and its own
       Two-Step/One-Step movement type pair, worth memorizing as a table
       rather than four separate facts
      </li>
      <li>
       <strong
       >The same movement type number can mean two different accounting
        entries</strong
       >
       — both 561 and 101 split their credit-side account purely by
       Material Type (FERT vs. HAWA), not by anything on the SD side
      </li>
      <li>
       <strong
       >MIGO belongs to the receiving side of a goods movement</strong
       >
       — whether that's a receiving plant converting Stock in Transit into
       real stock, or a company receiving goods from an external vendor
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> the remaining Schedule Line Category
      controls, continuing from where today left off.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 60 Notes — Movement Types: Consignment, STO &amp; MM Receipts 🎓
   </p>
  </div>
 );
};

export default SalesDocument60;
