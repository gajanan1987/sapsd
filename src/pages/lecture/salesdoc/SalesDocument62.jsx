const SalesDocument62 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-teal">
    <h1>
     🚛 Lecture 62 — Schedule Line Category Controls Finished &amp; Delivery
     Types Introduced
    </h1>
    <p>
     SAP SD | Closing Schedule Line Category controls (Account Assignment
     Category E, Purchase Requisition Delivery Schedule,
     Requirement/Assembly, Availability, Product Allocation), Schedule Line
     Category Determination's fallback logic, then a full tour of Delivery
     Types (VOV8, OVLK) — Document Category, Number Systems, Order Required,
     Default Order Type, Item Requirement, and Storage Location Rule
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered Order Type (<code>NB</code>, on
      <code>CS</code>/<code>CB</code>), the Third Party Dummy MIGO vs. IPO
      Actual MIGO contrast, and closed with
      <strong>Account Assignment Category</strong> on the Third Party
      schedule line category <code>CS</code> — value <code>1</code>, passing
      customer information from Order to PR and PR to PO. Today finishes the
      remaining Schedule Line Category controls, covers the fallback logic
      behind Schedule Line Category Determination (<span className="tcode"
      >VOV5</span
      >), and opens a new topic: <strong>Delivery Types</strong>.
     </div>
    </div>

    {/* <!-- Section 1: Account Assignment Category E (IPO) --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Account Assignment Category
      <code>E</code> — IPO (<code>CB</code>)
     </h2>
     <div className="callout teal">
      💡 The IPO schedule line category (<code>CB</code>) carries its own
      Account Assignment Category value:
      <strong><code>E</code></strong> — distinct from Third Party's
      <code>1</code>.
     </div>
     <div className="callout blue">
      📖
      <strong
      >What Account Assignment Category <code>E</code> controls:</strong
      >
      when the delivery is created in the IPO process, the system does
      <strong>not</strong> generate an inventory accounting document.
      Instead, the cost of the goods is
      <strong>directly assigned to that specific sales order number</strong>
      — the cost sits against the order itself rather than flowing through a
      stock account.
     </div>
    </div>

    {/* <!-- Section 2: Purchase Requisition Delivery Schedule --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Purchase Requisition Delivery
      Schedule
     </h2>
     <div className="callout orange">
      💡 <strong>Purchase Requisition Delivery Schedule</strong> is checked
      <strong>only</strong> for the IPO schedule line category
      (<code>CB</code>).
     </div>
     <div className="callout blue">
      📖 <strong>What it controls:</strong> when checked, the system copies
      the schedule line data <strong>as-is</strong> — from the Sales Order
      to the Purchase Requisition, and from the Purchase Requisition to the
      Purchase Order — keeping quantities and dates identical across all
      three documents in the IPO chain.
     </div>
    </div>

    {/* <!-- Section 3: Requirement/Assembly --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Requirement/Assembly — MRP Transfer
     </h2>
     <div className="callout purple">
      💡 <strong>Requirement/Assembly</strong> is one of the prerequisites
      for transferring sales order requirements to
      <strong>MRP (Materials Requirement Planning)</strong>. If checked, the
      system transfers the sales order requirement to MRP; if unchecked, it
      does not. The result can be verified in
      <span className="tcode">MD04</span> (Stock/Requirements List).
     </div>

     <h3>Worked Demonstration</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA01</span>, order type <code>PPOR</code>.
       Mention the customer and a material (a different material than the
       usual test material for this demo). Quantity 100. Save — order
       number <strong>311008</strong>.
      </div>
      <div className="step">
       <span className="tcode">MD04</span>, Plant <code>P100</code>, Enter.
       The order <strong>311008</strong> shows up in the MRP list —
       confirming the requirement was transferred.
      </div>
      <div className="step">
       Uncheck <strong>Requirement/Assembly</strong> on the schedule line
       category assigned to the item (the custom <code>PO</code> schedule
       line category). Create the order again with the same
       material/quantity — order number <strong>311009</strong>.
      </div>
      <div className="step">
       <span className="tcode">MD04</span> again: order
       <strong>311009</strong> does <strong>not</strong> appear. Because
       Requirement/Assembly is unchecked, the sales order requirement is
       never passed to MRP.
      </div>
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the schedule line category referenced
      in this demo is rendered in the recording as "<code>PVO</code>" — as
      in Lecture 61, this is treated as the custom <code>PO</code> schedule
      line category built in Lecture 58, not a separate value.
     </p>
    </div>

    {/* <!-- Section 4: Availability & Product Allocation --> */}
    <div className="card red">
     <h2>
      <span className="badge">4</span> Availability &amp; Product Allocation
     </h2>
     <div className="callout red">
      💡 <strong>Availability:</strong> one of the prerequisites for the
      system to perform an Availability Check in the sales order. If
      checked, the system performs the availability check; if unchecked, it
      does not.
     </div>
     <div className="callout gold">
      💡 <strong>Product Allocation:</strong> reserving stock for specific
      customers in advance. If checked, the system performs the availability
      check against that <strong>reserved/allocated</strong> stock rather
      than the general unrestricted stock pool.
     </div>
    </div>

    {/* <!-- Section 5: Schedule Line Category Determination logic --> */}
    <div className="card gold">
     <h2>
      <span className="badge">5</span> Schedule Line Category Determination
      — Fallback Logic
     </h2>
     <div className="callout gold">
      💡 <strong>Schedule Line Category Determination</strong> (<span
       className="tcode"
      >VOV5</span
      >) — SPRO path: Sales and Distribution → Sales → Sales Documents →
      Schedule Lines → Assign Schedule Line Categories — determines the
      schedule line category from the combination of
      <strong>Item Category</strong> and <strong>MRP Type</strong>.
     </div>
     <div className="callout blue">
      📖 <strong>MRP Type</strong> lives on the Material Master's
      <strong>MRP 1 view</strong>. Two values matter here:
      <code>PD</code> (Planning) and <code>ND</code> (No Planning). Normal
      materials are typically maintained with <code>PD</code>; materials
      that don't need planning (e.g. scrap materials) are maintained with
      <code>ND</code>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Category</th>
        <th>MRP Type</th>
        <th>Schedule Line Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>AFN</code> (Inquiry)</td>
        <td>Blank</td>
        <td><code>AN</code></td>
       </tr>
       <tr>
        <td><code>AGN</code> (Quotation)</td>
        <td>Blank</td>
        <td><code>BN</code></td>
       </tr>
       <tr>
        <td><code>TAN</code> (Order)</td>
        <td><code>PD</code></td>
        <td><code>CP</code></td>
       </tr>
       <tr>
        <td><code>TAN</code> (Order)</td>
        <td><code>ND</code></td>
        <td><code>CN</code></td>
       </tr>
       <tr>
        <td><code>TAN</code> (Order)</td>
        <td>Blank</td>
        <td><code>CP</code></td>
       </tr>
      </tbody>
     </table>
     <div className="callout purple">
      📖 <strong>The fallback rule:</strong> if the exact
      <strong>Item Category + MRP Type</strong> combination entered on the
      order isn't maintained in <span className="tcode">VOV5</span>, the
      system gives next preference to an entry keyed on
      <strong>Item Category alone</strong> (MRP Type blank) — so even
      without a <code>TAN</code>+<code>PD</code> row specifically
      maintained, the system can still resolve <code>CP</code> from the
      <code>TAN</code>-only row. If <strong>neither</strong> combination is
      maintained, the system throws an error — no schedule line category can
      be determined at all.
     </div>
    </div>

    {/* <!-- Section 6: Delivery Types Introduced --> */}
    <div className="card indigo">
     <h2><span className="badge">6</span> Delivery Types — Introduced</h2>
     <div className="callout indigo">
      💡 <strong>Delivery Type</strong> is a new concept, configured via
      T-code <span className="tcode">OVLK</span> (also reachable as
      <span className="tcode">0VLK</span>).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Standard Delivery Type</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Standard Order</td>
        <td><code>LF</code></td>
       </tr>
       <tr>
        <td>Cash Sale</td>
        <td><code>BV</code></td>
       </tr>
       <tr>
        <td>Returns</td>
        <td><code>LR</code></td>
       </tr>
       <tr>
        <td>Delivery Without Order Reference</td>
        <td><code>LO</code></td>
       </tr>
       <tr>
        <td>Stock Transport Order (STO)</td>
        <td><code>NL</code></td>
       </tr>
       <tr>
        <td>STO Returns</td>
        <td><code>NLR</code></td>
       </tr>
       <tr>
        <td>Intercompany STO</td>
        <td><code>NLCC</code></td>
       </tr>
       <tr>
        <td>Intercompany STO Returns</td>
        <td><code>NCR</code></td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 <strong>Correction:</strong> Cash Sale's delivery type is rendered
      in the recording as "<code>BB</code>" — corrected to <code>BV</code>,
      the standard SAP delivery type for Cash Sale.
     </p>

     <h3>Worked Demonstration — Custom Delivery Type</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">OVLK</span> → copy the standard
       <code>LF</code> delivery type into a new custom code,
       <strong><code>PPLF</code></strong
       >. Answer <strong>Yes</strong> to "Is this entry also relevant for
       Copy Control?" Save.
      </div>
      <div className="step">
       A custom delivery type alone isn't enough — go to
       <strong>Sales Document Type Controls</strong>
       (<span className="tcode">VOV8</span>) for the custom order type and
       mention the new delivery type (<code>PPLF</code>) there. Without
       this assignment, the system will never determine the custom delivery
       type on its own.
      </div>
      <div className="step">
       Create the order, then create the delivery. Go to the delivery's
       header (menu → Header → Administration) — the Delivery Type shown is
       <code>PPLF</code>, confirming the custom assignment took effect.
      </div>
     </div>
    </div>

    {/* <!-- Section 7: Delivery Type Controls - Document Category --> */}
    <div className="card brown">
     <h2>
      <span className="badge">7</span> Delivery Type Controls — Document
      Category
     </h2>
     <div className="callout brown">
      💡 Inside Delivery Type configuration (<span className="tcode"
      >OVLK</span
      >), the <strong>Document Category</strong> field controls the
      fundamental functioning of the delivery document.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document Category</th>
        <th>Meaning</th>
        <th>Delivery Types</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>J</code></td>
        <td>Post Goods <strong>Issue</strong></td>
        <td>
         <code>LF</code>, <code>BV</code>, <code>LO</code>,
         <code>NL</code>, <code>NLCC</code>
        </td>
       </tr>
       <tr>
        <td><code>T</code></td>
        <td>Post Goods <strong>Receipt</strong></td>
        <td><code>LR</code>, <code>NLR</code>, <code>NCR</code></td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 <strong>Correction:</strong> two delivery types in the "Document
      Category J" list are rendered unclearly in the recording ("PV" and
      "LVO") — these are treated here as <code>BV</code> (Cash Sale) and
      <code>LO</code> (Delivery Without Order Reference), consistent with
      the delivery type list established earlier in this same lecture.
     </p>
    </div>

    {/* <!-- Section 8: Number Systems & Item Number Increment --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">8</span> Number Systems &amp; Item Number
      Increment
     </h2>
     <div className="callout cyan">
      💡 Like sales documents, delivery types carry
      <strong>Number Range: Internal Assignment</strong> and
      <strong>Number Range: External Assignment</strong> fields.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Delivery Type</th>
        <th>Internal Number Range</th>
        <th>External Number Range</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>LF</code> / <code>PPLF</code></td>
        <td>17</td>
        <td>18</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖 <strong>Internal vs. external:</strong> with internal numbering, no
      number needs to be entered — the system generates it automatically. To
      use an external number instead, the field
      <strong>Outbound Delivery</strong> is used to enter a number that
      falls within the maintained external range.
     </div>
     <div className="callout gold">
      📖 <strong>T-code to define number ranges:</strong>
      <span className="tcode">VN01</span> — the same transaction is used to
      define number ranges for the Sales Document, the Delivery Document,
      and the Billing Document alike.
     </div>
     <div className="callout purple">
      💡 <strong>Item Number Increment:</strong> controls how the line item
      number increments within the delivery document (e.g. by 10, by 1,
      etc.).
     </div>
    </div>

    {/* <!-- Section 9: Order Required + Demo --> */}
    <div className="card pink">
     <h2>
      <span className="badge">9</span> Order Required — and Delivery Without
      Order Reference
     </h2>
     <div className="callout pink">
      💡 <strong>Order Required</strong> controls whether a preceding
      document is required at all in order to create the delivery.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Order Required Value</th>
        <th>Meaning</th>
        <th>Delivery Types</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank</td>
        <td>No preceding document required</td>
        <td><code>LO</code></td>
       </tr>
       <tr>
        <td><code>B</code></td>
        <td>Purchase Order required</td>
        <td>
         <code>NL</code>, <code>NLR</code>, <code>NLCC</code>,
         <code>NCR</code>
        </td>
       </tr>
       <tr>
        <td><code>X</code></td>
        <td>Sales Order required</td>
        <td><code>LF</code>, <code>BV</code>, <code>LR</code></td>
       </tr>
      </tbody>
     </table>

     <h3>Worked Demonstration — Delivery Without Order Reference</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VL01N</span> → click
       <strong>Without Order Reference</strong>. Mention the Shipping Point
       and Delivery Type <code>LO</code>. Press Enter — the system allows
       it, because <code>LO</code>'s Order Required is blank.
      </div>
      <div className="step">
       Mention Ship-To Party, the delivery date, and the PGI date (today's
       date). Mention the material and delivery quantity (100).
      </div>
      <div className="step">
       Go to Picking, mention the storage location, enter the pick
       quantity, and perform PGI. The delivery is created and posted with
       no sales order behind it at all.
      </div>
     </div>
    </div>

    {/* <!-- Section 10: Default Order Type --> */}
    <div className="card slate">
     <h2>
      <span className="badge">10</span> Default Order Type — How Movement
      Type Is Still Determined
     </h2>
     <div className="callout slate">
      💡 With a normal delivery (created with reference to a sales order),
      the movement type is determined from the order's own document type →
      item category → schedule line category chain (e.g. Standard Order →
      <code>TAN</code> → <code>CP</code> → Movement Type <code>601</code>).
      But a delivery created <strong>without</strong> order reference has
      none of that — so how does the system still know which movement type
      to use?
     </div>
     <div className="callout blue">
      📖 <strong>Answer — Default Order Type:</strong> the delivery type
      <code>LO</code> carries a <strong>Default Order Type</strong> field,
      set to <code>DL</code>. When a delivery is created without a sales
      order reference, the system uses this default document type
      (<code>DL</code>) purely to derive the rest of the determination
      chain.
     </div>
     <div className="callout gold">
      📖 <strong>The full chain, three questions:</strong>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Question</th>
        <th>Answer</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>
         Which default document type does the system consider, and when?
        </td>
        <td>
         <code>DL</code>, whenever a delivery is created without a sales
         order reference
        </td>
       </tr>
       <tr>
        <td>2</td>
        <td>Why does the system consider it?</td>
        <td>
         Purely to determine the Movement Type for the delivery, since
         there's no real order to derive it from
        </td>
       </tr>
       <tr>
        <td>3</td>
        <td>How does it get from DL to a movement type?</td>
        <td>
         <code>DL</code> → Item Category <code>DLN</code> → Schedule Line
         Category <code>CN</code> → Movement Type <code>601</code>
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ This exactly matches the <code>DLN</code>/<code>CN</code>
      pairing already established in Lecture 58's Schedule Line Category
      list for "Delivery Without Order Reference" — the system is simply
      reusing that same determination path with
      <code>DL</code> standing in for a real sales document type.
     </div>
    </div>

    {/* <!-- Section 11: Item Requirement --> */}
    <div className="card teal">
     <h2>
      <span className="badge">11</span> Item Requirement — Adding New Line
      Items to a Delivery
     </h2>
     <div className="callout teal">
      💡 <strong>Item Requirement</strong> controls whether a new line item
      can be manually added directly inside the delivery document itself
      (not copied in from an order).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Requirement Value</th>
        <th>Effect</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>202</code></td>
        <td>Allows adding a new line item in the delivery document</td>
       </tr>
       <tr>
        <td><code>201</code></td>
        <td>
         Does not allow adding a new line item in the delivery document
        </td>
       </tr>
      </tbody>
     </table>

     <h3>Worked Demonstration</h3>
     <div className="stepper">
      <div className="step">
       With Item Requirement set to <code>202</code>, open an existing
       delivery and add a new line item (material, quantity 200) directly
       in the delivery — the system allows it.
      </div>
      <div className="step">
       Change the delivery type's Item Requirement to
       <code>201</code>. Create/open the delivery again and try to add the
       same new line item.
      </div>
      <div className="step">
       <strong>Result:</strong> the system throws the error
       <em>"You cannot add this item to the delivery"</em> — confirming
       <code>201</code> blocks manual line item addition.
      </div>
     </div>
    </div>

    {/* <!-- Section 12: Storage Location Rule --> */}
    <div className="card orange">
     <h2><span className="badge">12</span> Storage Location Rule</h2>
     <div className="callout orange">
      💡 <strong>Storage Location Rule</strong> helps the system determine
      the storage location <strong>automatically</strong> in the delivery
      document (on the Picking tab), instead of the user entering it
      manually every time. Configuration T-code:
      <span className="tcode">OVL3</span> (Storage Location Determination).
     </div>
     <div className="callout blue">
      📖 <strong>Setup:</strong> storage location determination is based on
      a combination of Shipping Point, Plant, and Storage Conditions.
      Storage Conditions are maintained on the material master (Plant
      Data/Storage 1 view) — set to a value such as <code>01</code>. Once
      Shipping Point, Plant, and Storage Conditions are all mapped in
      <span className="tcode">OVL3</span>, creating the delivery again shows
      the storage location filled in automatically on the Picking tab.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Storage Location Rule</th>
        <th>Determined From</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>MALA</code></td>
        <td>Shipping Point + Plant + Storage Conditions</td>
       </tr>
       <tr>
        <td><code>RETA</code></td>
        <td>
         Plant + Situation + Storage Conditions (no shipping point)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout purple">
      📖 <strong>Priority between the two:</strong> the system first checks
      the <code>MALA</code> rule; only if no <code>MALA</code> entry is
      maintained does it fall back to checking the <code>RETA</code> rule.
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
         What does Account Assignment Category E (on CB/IPO) control?
        </td>
        <td>
         When delivery is created in the IPO process, no inventory
         accounting document is generated — the cost of goods is directly
         assigned to the specific sales order number instead
        </td>
       </tr>
       <tr>
        <td>
         What does Purchase Requisition Delivery Schedule control, and
         where is it checked?
        </td>
        <td>
         Checked only on CB (IPO); when checked, the schedule line data
         (quantities/dates) is copied as-is from Order to PR and from PR
         to PO
        </td>
       </tr>
       <tr>
        <td>
         What does Requirement/Assembly control, and how can you verify
         it?
        </td>
        <td>
         Whether the sales order requirement is transferred to MRP;
         checked = transferred, unchecked = not transferred; verified in
         MD04 (Stock/Requirements List)
        </td>
       </tr>
       <tr>
        <td>What do Availability and Product Allocation each control?</td>
        <td>
         Availability is a prerequisite for the availability check to run
         at all in the sales order; Product Allocation, when checked,
         makes that availability check run against reserved/allocated
         stock for specific customers rather than general stock
        </td>
       </tr>
       <tr>
        <td>
         What two fields determine Schedule Line Category, and what
         happens if the exact combination isn't maintained?
        </td>
        <td>
         Item Category + MRP Type; if that exact combination isn't found,
         the system falls back to an Item-Category-only entry (MRP Type
         blank); if neither exists, the system throws an error
        </td>
       </tr>
       <tr>
        <td>
         What do MRP Types PD and ND mean, and where are they maintained?
        </td>
        <td>
         PD = Planning, ND = No Planning; maintained on the material
         master's MRP 1 view — normal materials typically use PD,
         materials like scrap use ND
        </td>
       </tr>
       <tr>
        <td>
         What is the standard delivery type for a Standard Order, Cash
         Sale, and Returns respectively?
        </td>
        <td>Standard Order: LF; Cash Sale: BV; Returns: LR</td>
       </tr>
       <tr>
        <td>
         After copying a custom delivery type in OVLK, what additional
         step is required before the system will actually use it?
        </td>
        <td>
         The custom delivery type must be assigned on the Sales Document
         Type Controls screen (VOV8) for the relevant order type —
         without this, the system won't determine the custom delivery
         type
        </td>
       </tr>
       <tr>
        <td>
         What does Document Category J vs. T mean on a delivery type?
        </td>
        <td>
         J = Post Goods Issue (LF, BV, LO, NL, NLCC); T = Post Goods
         Receipt (LR, NLR, NCR)
        </td>
       </tr>
       <tr>
        <td>
         What T-code defines number ranges for Sales, Delivery, and
         Billing documents?
        </td>
        <td>
         VN01 — the same transaction is used for all three document types
        </td>
       </tr>
       <tr>
        <td>
         What does Order Required control on a delivery type, and what
         are its three values?
        </td>
        <td>
         Whether a preceding document is required to create the delivery;
         Blank = none required (LO), B = Purchase Order required
         (NL/NLR/NLCC/NCR), X = Sales Order required (LF/BV/LR)
        </td>
       </tr>
       <tr>
        <td>
         When creating a delivery without order reference, how does the
         system still determine a movement type?
        </td>
        <td>
         Via the delivery type's Default Order Type field (LO → DL); DL →
         Item Category DLN → Schedule Line Category CN → Movement Type
         601
        </td>
       </tr>
       <tr>
        <td>
         What does Item Requirement control, and what do values 202 and
         201 mean?
        </td>
        <td>
         Whether a new line item can be manually added inside the
         delivery document itself; 202 allows it, 201 blocks it with the
         error "You cannot add this item to the delivery"
        </td>
       </tr>
       <tr>
        <td>
         What does Storage Location Rule control, and what are its two
         values?
        </td>
        <td>
         Automatic storage location determination in the delivery; MALA
         (Shipping Point + Plant + Storage Conditions) is checked first,
         falling back to RETA (Plant + Situation + Storage Conditions) if
         MALA isn't maintained
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
        <td><span className="tcode">MD04</span></td>
        <td>
         Stock/Requirements List — used to verify whether a sales order's
         requirement was transferred to MRP (Requirement/Assembly demo)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV5</span></td>
        <td>
         Assign Schedule Line Categories — determination by Item Category
         + MRP Type, with fallback to Item Category alone
        </td>
       </tr>
       <tr>
        <td>
         <span className="tcode">OVLK</span> /
         <span className="tcode">0VLK</span>
        </td>
        <td>
         Define Delivery Types — used to copy LF into the custom PPLF,
         and to review/set Document Category, Number Systems, Order
         Required, Default Order Type, and Item Requirement
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV8</span></td>
        <td>
         Sales Document Type Controls — used to assign the custom
         delivery type (PPLF) to the custom order type, so the system
         actually determines it
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VN01</span></td>
        <td>
         Define Number Ranges — used for Sales, Delivery, and Billing
         document number ranges alike
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VL01N</span></td>
        <td>
         Create Delivery — used both with reference to an order and, via
         "Without Order Reference," to demonstrate delivery type LO
         end-to-end
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OVL3</span></td>
        <td>
         Storage Location Determination — used to map Shipping Point +
         Plant + Storage Conditions (MALA) for automatic storage location
         determination in delivery
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
        <td>
         Account Assignment Category (schedule line category level)
        </td>
        <td>
         CS (Third Party) = 1 (passes customer info Order→PR→PO); CB
         (IPO) = E (no inventory accounting doc on delivery — cost
         assigned directly to the sales order)
        </td>
       </tr>
       <tr>
        <td>Purchase Requisition Delivery Schedule</td>
        <td>
         Checked only on CB (IPO); copies schedule line data as-is across
         Order→PR→PO
        </td>
       </tr>
       <tr>
        <td>Requirement/Assembly, Availability, Product Allocation</td>
        <td>
         Requirement/Assembly = MRP transfer prerequisite (verify in
         MD04); Availability = availability check prerequisite; Product
         Allocation = availability check against reserved/allocated stock
        </td>
       </tr>
       <tr>
        <td>Schedule Line Category Determination (VOV5)</td>
        <td>
         Item Category + MRP Type (PD=Planning, ND=No Planning, from MRP
         1 view); falls back to Item-Category-only entry if the exact
         combination isn't maintained; error if neither is found
        </td>
       </tr>
       <tr>
        <td>Standard delivery types</td>
        <td>
         LF (Standard Order), BV (Cash Sale), LR (Returns), LO (Delivery
         w/o Order Reference), NL (STO), NLR (STO Returns), NLCC
         (Intercompany STO), NCR (Intercompany STO Returns)
        </td>
       </tr>
       <tr>
        <td>Custom delivery type build</td>
        <td>
         PPLF, copied from LF via OVLK; must additionally be assigned to
         the custom order type in VOV8 to actually be determined
        </td>
       </tr>
       <tr>
        <td>Document Category</td>
        <td>
         J = Post Goods Issue (LF, BV, LO, NL, NLCC); T = Post Goods
         Receipt (LR, NLR, NCR)
        </td>
       </tr>
       <tr>
        <td>Number Systems</td>
        <td>
         Internal + External number range assignment, defined via VN01
         (shared with sales and billing documents); LF/PPLF: Internal 17,
         External 18
        </td>
       </tr>
       <tr>
        <td>Order Required</td>
        <td>
         Blank = no preceding doc (LO); B = Purchase Order required
         (NL/NLR/NLCC/NCR); X = Sales Order required (LF/BV/LR)
        </td>
       </tr>
       <tr>
        <td>Default Order Type</td>
        <td>
         LO → DL; used only for deliveries without order reference, to
         determine Item Category DLN → Schedule Line Category CN →
         Movement Type 601
        </td>
       </tr>
       <tr>
        <td>Item Requirement</td>
        <td>
         202 = allow adding new line items directly in delivery; 201 =
         block, with error "You cannot add this item to the delivery"
        </td>
       </tr>
       <tr>
        <td>Storage Location Rule</td>
        <td>
         MALA (Shipping Point + Plant + Storage Conditions), checked
         first; RETA (Plant + Situation + Storage Conditions), checked as
         fallback; configured via OVL3
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture closed out the remaining
      <strong>Schedule Line Category controls</strong>: Account Assignment
      Category <code>E</code> on IPO (<code>CB</code>) — no inventory
      accounting document on delivery, cost assigned directly to the sales
      order; Purchase Requisition Delivery Schedule (CB-only, copies
      schedule data as-is across Order/PR/PO); Requirement/Assembly (MRP
      transfer prerequisite, demonstrated live via
      <span className="tcode">MD04</span>); and Availability plus Product
      Allocation (availability check prerequisites, the latter against
      reserved stock). It then explained the
      <strong>fallback logic</strong> behind Schedule Line Category
      Determination (<span className="tcode">VOV5</span>): Item Category +
      MRP Type first, falling back to Item Category alone, erroring only if
      neither is maintained. The bulk of the session then introduced
      <strong>Delivery Types</strong> (<span className="tcode">OVLK</span
      >/<span className="tcode">VOV8</span>) — the standard list
      (<code>LF</code>, <code>BV</code>, <code>LR</code>, <code>LO</code>,
      and the STO family), a custom <code>PPLF</code> build, and the
      controls inside a delivery type:
      <strong>Document Category</strong> (<code>J</code> Goods Issue vs.
      <code>T</code> Goods Receipt),
      <strong>Number Systems</strong> (internal/external,
      <span className="tcode">VN01</span>),
      <strong>Item Number Increment</strong>,
      <strong>Order Required</strong> (blank/ <code>B</code>/<code>X</code>,
      demonstrated with a live delivery-without-order-reference build on
      <code>LO</code>),
      <strong>Default Order Type</strong> (<code>DL</code>, explaining how
      movement type is still determined with no order behind the delivery),
      <strong>Item Requirement</strong> (<code>202</code>/<code>201</code>,
      controlling manual line-item addition), and
      <strong>Storage Location Rule</strong> (<code>MALA</code> then
      <code>RETA</code>, configured in <span className="tcode">OVL3</span>).
      Delivery Item Categories are deferred to the next class.
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
       >CS and CB never share an Account Assignment Category
        value</strong
       >
       — Third Party uses <code>1</code> (customer info propagation), IPO
       uses <code>E</code> (no accounting document, cost tied to the order)
       — a clean example of the same field family doing two different jobs.
      </li>
      <li>
       <strong
       >Schedule Line Category Determination always has a
        fallback</strong
       >
       — Item Category + MRP Type isn't a hard requirement in every case;
       the system quietly falls back to Item Category alone before ever
       throwing an error, which explains why some client systems "work"
       even with incomplete VOV5 entries.
      </li>
      <li>
       <strong
       >A custom delivery type is a two-step build, just like item and
        schedule line categories were</strong
       >
       — define/copy it in <span className="tcode">OVLK</span>, then assign
       it in <span className="tcode">VOV8</span>; skipping the second step
       means the system silently keeps using the standard delivery type
       instead.
      </li>
      <li>
       <strong
       >Delivery Without Order Reference still needs a movement type from
        somewhere</strong
       >
       — Default Order Type is the mechanism that lets a
       document-type-driven determination chain run even when there's no
       real document type to read from.
      </li>
      <li>
       <strong>MALA vs. RETA is a priority chain, not a choice</strong> —
       always check MALA first; RETA only comes into play when MALA has
       nothing maintained for that shipping point/plant/storage-condition
       combination.
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Delivery Item Categories, then moving
      into Billing Types, with Pricing planned to begin the following
      Monday.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 62 Notes — Schedule Line Category Controls Finished &amp; Delivery
    Types Introduced 🎓
   </p>
  </div>
 );
};

export default SalesDocument62;
