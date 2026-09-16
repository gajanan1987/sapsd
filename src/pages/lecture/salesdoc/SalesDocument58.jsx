const SalesDocument58 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-cyan">
    <h1>📅 Lecture 58 — Schedule Line Categories Introduced</h1>
    <p>
     SAP SD | The full Schedule Line Category determination list — by
     Document Type and by Item Category — plus which documents get none at
     all, then a start-to-finish custom build (VOV6, VOV5, VOV4) with a live
     Enquiry → Quotation → Order → Delivery → Invoice practice run on the
     course's own custom document types
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class finished
      <strong>Item Category Determination</strong> (<span className="tcode"
      >VOV4</span
      >) across its four scenarios. Today opens a new, related topic:
      <strong>Schedule Line Category</strong> — the field that decides, at
      the schedule line level, how a line item's quantities and dates are
      planned and fulfilled. Today covers what schedule line category each
      document type/item category gets, which documents get none at all, and
      closes with a full custom build mirroring the item category work from
      earlier lectures.
     </div>
    </div>

    {/* <!-- Section 1: Concept + T-codes --> */}
    <div className="card teal">
     <h2>
      <span className="badge">📖</span> Schedule Line Category — Concept
      &amp; Transaction Codes
     </h2>
     <div className="callout teal">
      💡 Every schedulable line item (one with
      <strong>Schedule Line Allowed</strong> checked on its item category,
      covered in Lecture 53) is additionally assigned a
      <strong>Schedule Line Category</strong>, determined from the
      combination of <strong>Item Category</strong> and
      <strong>MRP Type</strong>. Schedule Line Category carries its own set
      of controls (covered in the next class) that govern delivery- and
      MRP-related behavior at the schedule line level.
     </div>
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
         Define Schedule Line Categories — create/copy new schedule line
         categories
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV5</span></td>
        <td>
         Assign Schedule Line Categories — maintains the Item Category +
         MRP Type → Schedule Line Category combination
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Across everything covered today, there are
      <strong>19 distinct schedule line categories</strong> in the standard
      system (counting <code>CP</code> — which recurs across several
      scenarios — only once).
     </p>
    </div>

    {/* <!-- Section 2: Determination by Document Type --> */}
    <div className="card orange">
     <h2><span className="badge">1</span> Determination by Document Type</h2>
     <div className="callout orange">
      💡 For the pre-sales and order documents, the schedule line category
      follows directly from the document type (via its item category).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document Type</th>
        <th>Item Category</th>
        <th>Schedule Line Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>IN</code> — Inquiry</td>
        <td><code>AFN</code></td>
        <td><code>AN</code></td>
       </tr>
       <tr>
        <td><code>QT</code> — Quotation</td>
        <td><code>AGN</code></td>
        <td><code>BN</code></td>
       </tr>
       <tr>
        <td><code>OR</code> — Standard Order</td>
        <td><code>TAN</code></td>
        <td><code>CP</code></td>
       </tr>
       <tr>
        <td><code>RO</code> — Rush Order</td>
        <td><code>TAN</code></td>
        <td><code>CP</code></td>
       </tr>
       <tr>
        <td><code>CS</code> — Cash Sale</td>
        <td><code>BVN</code></td>
        <td><code>CP</code></td>
       </tr>
       <tr>
        <td><code>RE</code> — Returns</td>
        <td><code>REN</code></td>
        <td><code>DN</code></td>
       </tr>
       <tr>
        <td><code>KB</code> — Consignment Fill-Up</td>
        <td><code>KBN</code></td>
        <td><code>E1</code></td>
       </tr>
       <tr>
        <td><code>CI</code> — Consignment Issue</td>
        <td><code>KEN</code></td>
        <td><code>C1</code></td>
       </tr>
       <tr>
        <td><code>CONR</code> — Consignment Returns</td>
        <td><code>KRN</code></td>
        <td><code>D0</code></td>
       </tr>
       <tr>
        <td><code>CP</code> — Consignment Pick-Up</td>
        <td><code>KAN</code></td>
        <td><code>F1</code></td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Audio quality note:</strong> the Inquiry and Quotation
      schedule line categories were each spoken as two possible readings —
      <code>AN</code> or <code>AT</code> for Inquiry, and <code>BN</code> or
      <code>BT</code> for Quotation. The table above uses
      <code>AN</code> and <code>BN</code> (consistent with how they are
      referenced later in this same session's worked demonstration); confirm
      against the system if in doubt.
     </div>
     <p className="note-text">
      📌 Note the overlap in the last row: the
      <strong>Consignment Pick-Up document type</strong> is itself
      abbreviated <code>CP</code> — a different thing from the
      <code>CP</code>
      schedule line category used for Standard Order, Rush Order, and Cash
      Sale. Don't confuse the two.
     </p>
    </div>

    {/* <!-- Section 3: Documents With No Schedule Line Category --> */}
    <div className="card purple">
     <h2>
      <span className="badge">2</span> Document Types With No Schedule Line
      Category At All
     </h2>
     <div className="callout purple">
      💡 A number of document types don't get a schedule line category at
      all — these are exactly the item categories already identified back in
      Lecture 53 as having
      <strong>Schedule Line Allowed unchecked</strong> (nothing is
      physically scheduled for delivery), plus the Invoice Correction
      Request now added to that list.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document Type</th>
        <th>Item Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>CR</code> — Credit Memo Request</td>
        <td><code>G2N</code></td>
       </tr>
       <tr>
        <td><code>RK</code> — Invoice Correction Request</td>
        <td><code>G2N</code></td>
       </tr>
       <tr>
        <td><code>DR</code> — Debit Memo Request</td>
        <td><code>L2N</code></td>
       </tr>
       <tr>
        <td><code>QC</code> — Quantity Contract</td>
        <td><code>KMN</code></td>
       </tr>
       <tr>
        <td><code>WK1</code> — Value Contract (General)</td>
        <td><code>WKN</code></td>
       </tr>
       <tr>
        <td><code>WK2</code> — Value Contract (Material-Specific)</td>
        <td><code>WKN</code></td>
       </tr>
       <tr>
        <td><code>PV</code> — Item Proposal</td>
        <td><code>PVN</code></td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 4: Determination by Item Category (special scenarios) --> */}
    <div className="card red">
     <h2>
      <span className="badge">3</span> Determination by Item Category —
      Special Scenarios
     </h2>
     <div className="callout red">
      💡 Beyond the plain document-type-driven list, a further set of item
      categories — covering Free Goods, Third Party, IPO, Make-to-Order,
      Configurable Material, STO, BOM, Material Determination, and
      Text/Value Items — each carry their own schedule line category
      directly on the item category, independent of a single specific
      document type.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Item Category</th>
        <th>Schedule Line Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Free Goods</td>
        <td><code>TANN</code></td>
        <td><code>CP</code></td>
       </tr>
       <tr>
        <td>Third Party</td>
        <td><code>TAS</code></td>
        <td><code>CS</code></td>
       </tr>
       <tr>
        <td>Third Party Returns</td>
        <td><code>TASG</code></td>
        <td><code>CS</code></td>
       </tr>
       <tr>
        <td>Individual Purchase Order (IPO)</td>
        <td><code>TAB</code></td>
        <td><code>CB</code></td>
       </tr>
       <tr>
        <td>Make-to-Order</td>
        <td><code>TAK</code></td>
        <td><code>CP</code></td>
       </tr>
       <tr>
        <td>Configurable Material</td>
        <td><code>TAC</code></td>
        <td><code>CP</code></td>
       </tr>
       <tr>
        <td>Delivery Without Order Reference</td>
        <td><code>DLN</code></td>
        <td><code>CN</code></td>
       </tr>
       <tr>
        <td>Service Material</td>
        <td><code>TAD</code></td>
        <td><code>CD</code></td>
       </tr>
       <tr>
        <td>Stock Transport Order (STO)</td>
        <td><code>NLN</code></td>
        <td><code>NN</code></td>
       </tr>
       <tr>
        <td>STO Returns</td>
        <td><code>NLRN</code></td>
        <td><code>NR</code></td>
       </tr>
       <tr>
        <td>Intercompany STO</td>
        <td><code>NLC</code></td>
        <td><code>NC</code></td>
       </tr>
       <tr>
        <td>Intercompany STO Returns</td>
        <td><code>NCRN</code></td>
        <td><code>NS</code></td>
       </tr>
       <tr>
        <td>BOM Header Pricing — Main Item</td>
        <td><code>TAQ</code></td>
        <td><code>CP</code></td>
       </tr>
       <tr>
        <td>BOM Header Pricing — Sub-Item</td>
        <td><code>TAE</code></td>
        <td><code>CT</code></td>
       </tr>
       <tr>
        <td>BOM Item Pricing — Main Item</td>
        <td><code>TAP</code></td>
        <td><code>CT</code></td>
       </tr>
       <tr>
        <td>BOM Item Pricing — Sub-Item</td>
        <td><code>TAN</code></td>
        <td><code>CP</code></td>
       </tr>
       <tr>
        <td>Material Determination — Header Pricing, Main Item</td>
        <td><code>TAX</code></td>
        <td><code>CX</code></td>
       </tr>
       <tr>
        <td>Material Determination — Header Pricing, Sub-Item</td>
        <td><code>TAPS</code></td>
        <td><code>PP</code></td>
       </tr>
       <tr>
        <td>Material Determination — Item Pricing, Main Item</td>
        <td><code>TAPA</code></td>
        <td><code>CD</code></td>
       </tr>
       <tr>
        <td>Material Determination — Item Pricing, Sub-Item</td>
        <td><code>TAN</code></td>
        <td><code>CP</code></td>
       </tr>
       <tr>
        <td>Text Item</td>
        <td><code>TATX</code></td>
        <td><code>CT</code></td>
       </tr>
       <tr>
        <td>Value Item</td>
        <td><code>TAW</code></td>
        <td><code>CT</code></td>
       </tr>
      </tbody>
     </table>
     <div className="callout gold">
      📖
      <strong
      >The BOM/Material Determination sub-item pattern repeats:</strong
      >
      just as with Pricing and Item Category Determination in earlier
      lectures, the pair of item categories in each
      header-pricing/item-pricing scenario each resolve to their own
      schedule line category — the priced side and the unpriced side don't
      share one.
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the recording gives the BOM Header
      Pricing sub-item's item category here as "<code>TAC</code>" — but
      <code>TAC</code> is already established as Configurable Material's
      item category. This is treated here as <code>TAE</code>, consistent
      with the BOM header-pricing sub-item category established across
      Lectures 55–57.
     </p>
     <p className="note-text">
      📌 <strong>Correction:</strong> Third Party Returns is rendered here
      as "<code>TAG</code>" — corrected to <code>TASG</code>, matching the
      code already established in Lecture 53.
     </p>
     <p className="note-text">
      📌 The instructor initially states Service Material's schedule line
      category as <code>CP</code>, then self-corrects mid-session to
      <code>CD</code>; <code>CD</code> is used above.
     </p>
    </div>

    {/* <!-- Section 5: Worked Demo - Custom Build --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">🛠️</span> Worked Demonstration — Building
      Custom Schedule Line Categories
     </h2>
     <div className="callout indigo">
      🔗 <strong>Goal:</strong> give this course's own custom document types
      and item categories (<code>PAFN</code>/Inquiry,
      <code>PAGN</code>/Quotation, <code>P10</code>/Order, first assigned
      back in Lecture 53) their own custom schedule line categories, then
      test the full chain from Enquiry through Invoice.
     </div>

     <h3>Step 1 — Create Custom Schedule Line Categories (VOV6)</h3>
     <div className="stepper">
      <div className="step">
       Copy the standard Inquiry schedule line category (<code>AN</code>)
       to a new custom code —
       <strong><code>PT</code></strong
       >. In the copy dialog, answer <strong>Yes</strong> to "Is this entry
       also relevant for copy control?"
      </div>
      <div className="step">
       Copy the standard Quotation schedule line category
       (<code>BN</code>). The first attempted name,
       <code>PN</code>, is already taken by another entry, so the new
       custom code is named <strong><code>PQ</code></strong> instead.
      </div>
      <div className="step">
       Copy the standard Order schedule line category (<code>CP</code>).
       The first attempted name,
       <code>PP</code>, is already taken (it's the Material Determination
       Header Pricing sub-item's own schedule line category), so the new
       custom code is named <strong><code>PO</code></strong> instead.
      </div>
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the source schedule line category
      being copied for the Inquiry step is rendered in the recording as
      "<code>80</code>" — corrected here to <code>AN</code>, matching the
      Inquiry schedule line category established earlier in this same
      lecture.
     </p>

     <h3>Step 2 — Assign Schedule Line Categories (VOV5)</h3>
     <div className="stepper">
      <div className="step">
       For item category <strong><code>PAFN</code></strong> (custom
       Inquiry), change the default schedule line category to
       <strong><code>PT</code></strong
       >.
      </div>
      <div className="step">
       For item category <strong><code>PAGN</code></strong> (custom
       Quotation), blank MRP Type, change the default schedule line
       category to <strong><code>PQ</code></strong
       >.
      </div>
      <div className="step">
       For item category <strong><code>P10</code></strong> (custom Order),
       <strong>both</strong> the MRP Type <code>PD</code> combination
       <strong>and</strong> the blank MRP Type combination are changed to
       <strong><code>PO</code></strong> — covering the item category
       regardless of which MRP Type the material carries.
      </div>
     </div>

     <h3>Step 3 — Assign Item Categories to Custom Document Types (VOV4)</h3>
     <div className="callout blue">
      📖 Before testing, the custom Inquiry and Quotation document types
      still needed their item categories assigned in
      <span className="tcode">VOV4</span>: custom Inquiry document type +
      <code>NORM</code> + blank usage + blank higher level →
      <code>PAFN</code>; custom Quotation document type +
      <code>NORM</code> + blank usage + blank higher level →
      <code>PAGN</code>.
     </div>

     <h3>
      Step 4 — Live Test: Enquiry → Quotation → Order → Delivery → Invoice
     </h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Step</th>
        <th>T-Code</th>
        <th>Item Category Shown</th>
        <th>Schedule Line Category Shown</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Create Enquiry</td>
        <td><span className="tcode">VA11</span></td>
        <td><code>PAFN</code></td>
        <td><code>PT</code></td>
       </tr>
       <tr>
        <td>Create Quotation (with reference to the Enquiry)</td>
        <td><span className="tcode">VA21</span></td>
        <td><code>PAGN</code></td>
        <td><code>PQ</code></td>
       </tr>
       <tr>
        <td>Create Order (with reference to the Quotation)</td>
        <td><span className="tcode">VA01</span></td>
        <td><code>P10</code></td>
        <td><code>PO</code></td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>Result:</strong> each document in the chain picks up
      exactly the custom item category and custom schedule line category
      configured in Steps 1–3, confirming the VOV6/VOV5/VOV4 setup
      end-to-end. Delivery and Invoice were then created to complete the
      order-to-cash cycle for this custom document chain, with the Schedule
      Line Category's own detailed controls deferred to the next class.
     </div>
     <p className="note-text">
      📌 The recording refers to the custom Inquiry document type by a code
      that was unclear in the audio; it is left unnamed here — the custom
      Quotation (<code>PQT</code>) and custom Order (<code>PPOR</code>)
      document type codes match those already established in earlier
      lectures.
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
         What combination determines a Schedule Line Category, and via
         which T-code?
        </td>
        <td>
         Item Category + MRP Type, maintained via VOV5 (Assign Schedule
         Line Categories); VOV6 is used to define/copy schedule line
         categories themselves
        </td>
       </tr>
       <tr>
        <td>
         How many distinct schedule line categories are covered across
         this lecture's determination lists?
        </td>
        <td>
         19, counting CP (which recurs across Standard Order, Rush Order,
         Cash Sale, Make-to-Order, Configurable Material, BOM Header
         Pricing main item, and both BOM/Material-Determination
         fully-priced sub-items) only once
        </td>
       </tr>
       <tr>
        <td>
         Which document types get no schedule line category at all, and
         why?
        </td>
        <td>
         Credit Memo Request (G2N), Invoice Correction Request (G2N),
         Debit Memo Request (L2N), Quantity Contract (KMN), Value
         Contract General and Material-Specific (WKN), and Item Proposal
         (PVN) — the same set already identified in Lecture 53 as having
         Schedule Line Allowed unchecked, since nothing is physically
         scheduled for these
        </td>
       </tr>
       <tr>
        <td>
         What schedule line category do Third Party (TAS) and Third Party
         Returns (TASG) share?
        </td>
        <td>CS</td>
       </tr>
       <tr>
        <td>
         In BOM Header Pricing, what schedule line categories apply to
         the main item and the sub-item?
        </td>
        <td>Main item (TAQ) gets CP; sub-item (TAE) gets CT</td>
       </tr>
       <tr>
        <td>
         In Material Determination Item Pricing, what schedule line
         categories apply to the main item and the sub-item?
        </td>
        <td>
         Main item (TAPA) gets CD; sub-item (TAN, the fully-priced
         substituted material) gets CP
        </td>
       </tr>
       <tr>
        <td>
         In the worked custom build, why were PN and PP not used as the
         new custom schedule line category codes?
        </td>
        <td>
         Both were already taken by other existing entries in the system
         (PN by another entry, PP by Material Determination Header
         Pricing's sub-item schedule line category), so PQ and PO were
         used instead
        </td>
       </tr>
       <tr>
        <td>
         In VOV5, why were two separate rows created for item category
         P10 (both pointing to PO)?
        </td>
        <td>
         To cover P10 under both the MRP Type PD combination and the
         blank MRP Type combination, so the schedule line category
         resolves to PO regardless of which MRP Type the ordered material
         carries
        </td>
       </tr>
       <tr>
        <td>
         What was still missing in VOV4 before the custom Enquiry and
         Quotation could be tested?
        </td>
        <td>
         The custom Inquiry and Quotation document types did not yet have
         their item categories (PAFN and PAGN respectively) assigned
         against NORM + blank usage + blank higher level
        </td>
       </tr>
       <tr>
        <td>
         What item categories and schedule line categories did the final
         test chain (Enquiry → Quotation → Order) show?
        </td>
        <td>
         Enquiry: PAFN / PT; Quotation: PAGN / PQ; Order: P10 / PO — each
         matching the custom configuration made in VOV6, VOV5, and VOV4
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
         Define Schedule Line Categories — used to copy AN, BN, and CP
         into the custom PT, PQ, and PO schedule line categories
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV5</span></td>
        <td>
         Assign Schedule Line Categories — used to map custom item
         categories PAFN, PAGN, and P10 (both MRP Type PD and blank) to
         PT, PQ, and PO
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV4</span></td>
        <td>
         Assign Item Category — used to complete the missing assignment
         of PAFN and PAGN to the custom Inquiry and Quotation document
         types
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA11</span></td>
        <td>
         Create Inquiry — used to test the custom Enquiry (item category
         PAFN, schedule line category PT)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA21</span></td>
        <td>
         Create Quotation — used with reference to the Enquiry to test
         PAGN / PQ
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used with reference to the Quotation to
         test P10 / PO, then followed by Delivery and Invoice creation
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
        <td>Schedule Line Category determination</td>
        <td>
         Item Category + MRP Type → Schedule Line Category, via VOV5
        </td>
       </tr>
       <tr>
        <td>Document-type-driven schedule line categories</td>
        <td>
         IN/AFN → AN; QT/AGN → BN; OR, RO, CS (TAN/BVN) → CP; RE/REN →
         DN; KB/KBN → E1; CI/KEN → C1; CONR/KRN → D0; CP(doc)/KAN → F1
        </td>
       </tr>
       <tr>
        <td>Document types with no schedule line category</td>
        <td>
         CR, RK (both G2N), DR (L2N), QC (KMN), WK1/WK2 (WKN), PV (PVN)
        </td>
       </tr>
       <tr>
        <td>Special-scenario schedule line categories</td>
        <td>
         Free Goods/TANN → CP; Third Party/TAS & Third Party Returns/TASG
         → CS; IPO/TAB → CB; Make-to-Order/TAK & Configurable/TAC → CP;
         DLN → CN; Service/TAD → CD; STO family (NLN/NLRN/NLC/NCRN) →
         NN/NR/NC/NS; Text/Value Item (TATX/TAW) → CT
        </td>
       </tr>
       <tr>
        <td>BOM schedule line categories</td>
        <td>
         Header Pricing: TAQ → CP (main), TAE → CT (sub); Item Pricing:
         TAP → CT (main), TAN → CP (sub)
        </td>
       </tr>
       <tr>
        <td>Material Determination schedule line categories</td>
        <td>
         Header Pricing: TAX → CX (main), TAPS → PP (sub); Item Pricing:
         TAPA → CD (main), TAN → CP (sub)
        </td>
       </tr>
       <tr>
        <td>Custom schedule line category build</td>
        <td>
         PT (copied from AN), PQ (copied from BN, PN unavailable), PO
         (copied from CP, PP unavailable) — assigned via VOV5 to PAFN,
         PAGN, and P10 respectively
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture introduced <strong>Schedule Line Category</strong>,
      determined from the combination of <strong>Item Category</strong> and
      <strong>MRP Type</strong> via
      <span className="tcode">VOV5</span> (with
      <span className="tcode">VOV6</span> used to define/copy the categories
      themselves). It first ran through the
      <strong>document-type-driven</strong> determination list — Inquiry,
      Quotation, Standard/Rush Order, Cash Sale, Returns, and the full
      Consignment family — then the set of document types that get
      <strong>no schedule line category at all</strong> (Credit/Debit Memo
      Request, Invoice Correction Request, Quantity/Value Contracts, Item
      Proposal), matching the Schedule Line Allowed list from Lecture 53. It
      then covered the broader <strong>item-category-driven</strong> list
      spanning Free Goods, Third Party, IPO, Make-to-Order, Configurable
      Material, Delivery Without Order Reference, Service, the STO family,
      and the BOM/Material Determination header- and item-pricing pairs — 19
      distinct schedule line categories in total. The lecture closed with a
      full custom build: copying <code>AN</code>, <code>BN</code>, and
      <code>CP</code> into custom <code>PT</code>, <code>PQ</code>, and
      <code>PO</code> categories (<span className="tcode">VOV6</span>),
      assigning them against the course's custom item categories
      <code>PAFN</code>, <code>PAGN</code>, and <code>P10</code> (<span
       className="tcode"
      >VOV5</span
      >), completing a missing <span className="tcode">VOV4</span> item
      category assignment for the custom Inquiry and Quotation document
      types, and finally testing the whole chain live from Enquiry through
      Delivery and Invoice. Schedule Line Category's own detailed controls
      are deferred to the next class.
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
       >Schedule Line Category adds MRP Type into the determination
        mix</strong
       >
       — unlike Item Category Determination (Sales Doc Type + Item Category
       Group + Usage + Higher Level), Schedule Line Category determination
       is a simpler two-field combination: Item Category + MRP Type
      </li>
      <li>
       <strong
       >"No schedule line category" is the same list as "Schedule Line
        Allowed unchecked"</strong
       >
       — the two concepts describe the same underlying documents from two
       different angles, first seen in Lecture 53
      </li>
      <li>
       <strong
       >Header-pricing and item-pricing pairs never share a schedule line
        category between main item and sub-item</strong
       >
       — the same pattern already seen with Pricing and Item Category
       Determination repeats here for BOM and Material Determination
      </li>
      <li>
       <strong
       >A schedule line category can be assigned to the same item
        category twice</strong
       >
       — once per MRP Type value that needs covering, as seen with P10's
       two VOV5 rows (MRP Type PD and blank) both resolving to PO
      </li>
      <li>
       <strong
       >Building a full custom document flow is now a four-transaction
        exercise</strong
       >
       — VOV4 (item category), VOV6 (define schedule line category), VOV5
       (assign schedule line category), then a live VA11/VA21/VA01 test —
       worth practicing end-to-end, not just reading about
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Schedule Line Category controls,
      continuing from where today left off.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 58 Notes — Schedule Line Categories Introduced 🎓
   </p>
  </div>
 );
};

export default SalesDocument58;
