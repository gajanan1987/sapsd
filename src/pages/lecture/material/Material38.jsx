const Material38 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-blue">
    <h1>
     🚚 Lecture 38 — Fields in Material Master: Sales/Plant, Foreign Trade
     &amp; Purchasing Views
    </h1>
    <p>
     SAP SD | Availability Check &amp; MRP updating, Batch Management,
     Transportation &amp; Loading Group with full Shipping Point
     Determination, HSN/GST codes, Sales Text for exports, and key
     Purchasing-view fields
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered the Sales Org 1 and Sales Org 2 views of
      Material Master. Today continues with the
      <strong>Sales: General/Plant</strong> view (Availability Check, Batch
      Management, Transportation Group, Loading Group), moves into the
      <strong>Foreign Trade: Export</strong> and
      <strong>Sales Text</strong> views, and closes out with a few key
      fields from the <strong>Purchasing</strong> view.
     </div>
    </div>

    {/* <!-- Section 1: Availability Check --> */}
    <div className="card teal">
     <h2>
      <span className="badge">24</span> Sales: General/Plant View —
      Availability Check
     </h2>
     <div className="callout teal">
      💡 <strong>Availability Check</strong> controls
      <strong>how sales order quantities get updated into MRP</strong>
      (Materials Requirement Planning). The result can be viewed in T-code
      <span className="tcode">MD04</span> (Stock/Requirements List).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Value</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>01</td>
        <td>Daily requirements</td>
       </tr>
       <tr>
        <td>02</td>
        <td>Individual requirements</td>
       </tr>
      </tbody>
     </table>

     <h3>Worked Example — Material X, Opening Stock 100</h3>
     <div className="callout blue">
      📊 Three orders created on the same day (25/6): Order 20501 = 20
      units, Order 20502 = 25 units, Order 20503 = 30 units.
     </div>

     <h4>Availability Check = 01 (Daily Requirements)</h4>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Order</th>
        <th>Quantity</th>
        <th>MD04 Line</th>
        <th>Available Qty</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>20501</td>
        <td>20</td>
        <td rowspan="3">
         Single accumulated "Customer Orders" line for the day
        </td>
        <td>80</td>
       </tr>
       <tr>
        <td>20502</td>
        <td>25</td>
        <td>55</td>
       </tr>
       <tr>
        <td>20503</td>
        <td>30</td>
        <td>25</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 With 01, the system
      <strong
      >accumulates the sales order quantities of that day and updates them
       in a single line</strong
      >
      in MD04 — the individual order numbers aren't shown separately against
      each running total.
     </p>

     <h4>Availability Check = 02 (Individual Requirements)</h4>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Order</th>
        <th>Quantity</th>
        <th>MD04 Line</th>
        <th>Available Qty</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>20501</td>
        <td>20</td>
        <td>Separate line, tagged with sales order number 20501</td>
        <td>80</td>
       </tr>
       <tr>
        <td>20502</td>
        <td>25</td>
        <td>Separate line, tagged with sales order number 20502</td>
        <td>55</td>
       </tr>
       <tr>
        <td>20503</td>
        <td>30</td>
        <td>Separate line, tagged with sales order number 20503</td>
        <td>25</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 With 02,
      <strong
      >each sales order updates as its own separate line in MD04, tagged
       with its own sales order number</strong
      >
      — rather than being merged into one daily total.
     </p>
     <div className="callout red">
      ⚠️ If order quantity exceeds available quantity, MD04 simply shows a
      <strong>negative available quantity</strong> (e.g., if a further order
      for 125 is placed against only 80 remaining, the available quantity
      shows −25).
     </div>
     <div className="callout">
      📖 <strong>To practice this yourself:</strong> maintain Availability
      Check = 01 on one material and 02 on another, post opening stock for
      both, create 2–3 orders for each, and compare how MD04 displays the
      results — one material will show a single accumulated line, the other
      separate lines per order.
     </div>
    </div>

    {/* <!-- Section 2: Batch Management --> */}
    <div className="card orange">
     <h2>
      <span className="badge">25</span> Sales: General/Plant View — Batch
      Management
     </h2>
     <div className="callout orange">
      💡 Checked only when the material is
      <strong>relevant for batch</strong>. A <strong>Batch</strong> is the
      unique number the system generates for a single
      <strong>lot</strong> of manufacture — e.g., manufacturing 1000 units
      in one lot gets one unique batch number covering all 1000 units.
     </div>
     <div className="callout blue">
      🔗 <strong>Typical use cases:</strong> pharma products and automobiles
      (cars, bikes) — essentially any product tied to
      <strong>expiry tracking</strong> or where
      <strong>defective-goods tracking</strong> is needed.
     </div>
     <h3>Purpose of Batch Management</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Purpose</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Track expired goods</td>
        <td>Identify and manage stock that has passed its shelf life</td>
       </tr>
       <tr>
        <td>Track defective goods</td>
        <td>Trace which lot a defective unit belongs to</td>
       </tr>
       <tr>
        <td>Track the person responsible</td>
        <td>Identify who was responsible for that manufacturing lot</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 3: Transportation Group --> */}
    <div className="card purple">
     <h2>
      <span className="badge">26</span> Sales: General/Plant View —
      Transportation Group
     </h2>
     <div className="callout purple">
      💡 <strong>Transportation Group</strong> is one of the parameters used
      to determine the <strong>Route</strong> in the sales document.
     </div>
    </div>

    {/* <!-- Section 4: Loading Group & Shipping Point Determination --> */}
    <div className="card red">
     <h2>
      <span className="badge">27</span> Sales: General/Plant View — Loading
      Group &amp; Shipping Point Determination
     </h2>
     <div className="callout red">
      💡 <strong>Loading Group</strong> is one of the parameters used to
      determine the <strong>Shipping Point</strong> in the sales document.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Loading Group</th>
        <th>Meaning</th>
        <th>Typical Use</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>0001</td>
        <td>Crane (machinery-loaded)</td>
        <td>Normal products</td>
       </tr>
       <tr>
        <td>0003</td>
        <td>Manual</td>
        <td>Delicate products</td>
       </tr>
      </tbody>
     </table>

     <h3>Configuration Path — Shipping Point Determination (OVL2)</h3>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Logistics Execution</span
      ><span className="sep">→</span> <span className="node">Shipping</span
      ><span className="sep">→</span>
      <span className="node">Basic Shipping Functions</span
      ><span className="sep">→</span>
      <span className="node"
      >Shipping Point and Goods Receiving Point Determination</span
      ><span className="sep">→</span>
      <span className="node">Assign Shipping Points</span>
     </div>
     <div className="callout blue">
      🔗 <strong>Determination logic:</strong> Shipping Point is determined
      from the combination of <strong>Shipping Conditions</strong> (Customer
      Master) + <strong>Loading Group</strong> (Material Master) +
      <strong>Plant</strong>.
     </div>

     <h3>Worked Combinations (T-code OVL2)</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Shipping Condition</th>
        <th>Loading Group</th>
        <th>Plant</th>
        <th>Shipping Point</th>
        <th>Type</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>01</td>
        <td>0001</td>
        <td>P100</td>
        <td>P102</td>
        <td>Automatic</td>
       </tr>
       <tr>
        <td>01</td>
        <td>0003</td>
        <td>P100</td>
        <td>P101</td>
        <td>Manual</td>
       </tr>
       <tr>
        <td>10</td>
        <td>0001</td>
        <td>P100</td>
        <td>P103</td>
        <td>Immediate</td>
       </tr>
       <tr>
        <td>10</td>
        <td>0003</td>
        <td>P100</td>
        <td>P103</td>
        <td>Immediate</td>
       </tr>
       <tr>
        <td>01</td>
        <td>0001</td>
        <td>P200</td>
        <td>P202</td>
        <td>Automatic</td>
       </tr>
       <tr>
        <td>01</td>
        <td>0003</td>
        <td>P200</td>
        <td>P201</td>
        <td>Manual</td>
       </tr>
       <tr>
        <td>10</td>
        <td>0001</td>
        <td>P200</td>
        <td>P203</td>
        <td>Immediate</td>
       </tr>
       <tr>
        <td>10</td>
        <td>0003</td>
        <td>P200</td>
        <td>P203</td>
        <td>Immediate</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Shipping Condition <code>10</code> represents
      <strong>"Immediate"</strong> — regardless of loading group, both crane
      and manual loading-group combinations routed to the same immediate
      shipping point (P103 for plant P100, P203 for plant P200) in the
      worked demo. These entries were verified live via
      <span className="tcode">OVL2</span> → New Entries, most of which were
      already maintained from earlier sessions.
     </p>
    </div>

    {/* <!-- Section 5: HSN / Control Code --> */}
    <div className="card gold">
     <h2>
      <span className="badge">28</span> Foreign Trade: Export View — Control
      Code (HSN Code)
     </h2>
     <div className="callout gold">
      💡 <strong>HSN</strong> stands for
      <strong>Harmonized System Nomenclature</strong>. HSN codes help
      determine <strong>GST tax rates</strong> and are issued by the
      <strong>GST department</strong> — every product category (TVs,
      refrigerators, insulin, antibiotics, etc.) has its own distinct HSN
      code.
     </div>
     <div className="callout blue">
      🔧 <strong>T-code to define HSN codes:</strong>
      <span className="tcode">J1ID</span>.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">J1ID</span> → select
       <strong>Chapter ID</strong> → click the pencil (Maintain) symbol.
      </div>
      <div className="step">
       Go to New Entries → mention the HSN code (e.g.,
       <code>99.99.99</code>, generally a fully numeric code) and Unit of
       Measure (e.g., BT for insulin) → Save.
      </div>
      <div className="step">
       The newly created code is then selectable via F4 on the material's
       Control Code field in the Foreign Trade: Export view.
      </div>
     </div>
    </div>

    {/* <!-- Section 6: Sales Text --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">29</span> Sales Text View (Final SD View)
     </h2>
     <div className="callout indigo">
      💡 <strong>Sales Text</strong> is where additional product information
      is maintained <strong>to be printed in the output</strong> (printout
      or email).
     </div>
     <div className="callout blue">
      🔗 <strong>Especially relevant for exports:</strong> export shipments
      require customs documents, bill of exchange, and other export
      paperwork on which the complete product information often needs to be
      printed — this is where that additional information is maintained.
     </div>
     <p className="note-text">
      📌 This marks the end of the
      <strong>SD-relevant Material Master views</strong> covered in the
      course — the lecture then moves on to a few important fields from
      other modules' views, starting with Purchasing.
     </p>
    </div>

    {/* <!-- Section 7: Purchasing Group --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">30</span> Purchasing View — Purchasing Group
     </h2>
     <div className="callout cyan">
      💡 <strong>Purchasing Group</strong> = a group of people within the
      purchasing department who work on
      <strong>different activities</strong> — the purchasing counterpart to
      Sales Group.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> one purchase team handles raw
      materials for the Mumbai plant, another handles the Vapi plant, and a
      third handles head-office/in-house purchases (furniture, air
      conditioners, internal-use items).
     </div>
    </div>

    {/* <!-- Section 8: Plant-Specific Material Status --> */}
    <div className="card green">
     <h2>
      <span className="badge">31</span> Purchasing View — Plant-Specific
      Material Status
     </h2>
     <div className="callout green">
      💡 <strong>Plant-Specific Material Status</strong> blocks the material
      in <strong>one specific plant</strong> only.
     </div>
     <div className="callout red">
      ⚠️ <strong>Contrast with X-Plant Material Status</strong>
      (Lecture 36): that field blocks the material
      <strong>across all plants</strong> at once, whereas this field blocks
      it plant-by-plant — the same all-vs-specific pattern seen earlier with
      X-Distribution Chain Status vs. Distribution Chain-Specific Status
      (Lecture 37).
     </div>
    </div>

    {/* <!-- Section 9: Automatic PO --> */}
    <div className="card pink">
     <h2>
      <span className="badge">32</span> Purchasing View — Automatic PO
     </h2>
     <div className="callout pink">
      💡 Relevant for the <strong>Third-Party</strong> and
      <strong>IPO (Individual Purchase Order)</strong> processes covered
      earlier under Enterprise Structure. Normally, creating a sales order
      in either process automatically generates a
      <strong>PR (Purchase Requisition)</strong>, which then has to be
      <strong>manually converted</strong> to a
      <strong>PO (Purchase Order)</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Setting</th>
        <th>Result When Creating a Sales Order (Third-Party / IPO)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Automatic PO — unchecked</td>
        <td>
         System generates a PR; PR must be manually converted to a PO
        </td>
       </tr>
       <tr>
        <td>Automatic PO — checked</td>
        <td>
         System automatically generates the PO directly — no manual
         PR-to-PO conversion step needed
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 10: Purchasing Value Key --> */}
    <div className="card brown">
     <h2>
      <span className="badge">33</span> Purchasing View — Purchasing Value
      Key
     </h2>
     <div className="callout brown">
      💡 <strong>Purchasing Value Key</strong> helps
      <strong>send reminders to vendors</strong> for supplying the goods on
      time.
     </div>
    </div>

    {/* <!-- Section 11: GR Processing Time --> */}
    <div className="card slate">
     <h2>
      <span className="badge">34</span> Purchasing View — GR Processing Time
     </h2>
     <div className="callout slate">
      💡 <strong>GR (Goods Received) Processing Time</strong> is the time
      taken, <strong>after unloading</strong> goods received from a vendor,
      to finally move them into <strong>storage location</strong> — covering
      intermediate steps like quality checks.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> if 2 days is maintained, it means
      that after unloading the goods at the plant, 2 days are taken for
      quality check (or other processing) before the goods are finally
      placed into storage location.
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
         What does Availability Check control, and where is the result
         seen?
        </td>
        <td>
         How sales order quantities get updated into MRP (Materials
         Requirement Planning); the result is visible in T-code MD04
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between Availability Check 01 and 02?
        </td>
        <td>
         01 (daily requirements) accumulates all of a day's sales order
         quantities into a single MD04 line; 02 (individual requirements)
         updates each sales order as its own separate line, tagged with
         its own order number
        </td>
       </tr>
       <tr>
        <td>
         What happens in MD04 if an order quantity exceeds the available
         quantity?
        </td>
        <td>The available quantity simply displays as negative</td>
       </tr>
       <tr>
        <td>What is Batch, and when is Batch Management checked?</td>
        <td>
         Batch is the unique number the system generates for a single lot
         of manufacture; Batch Management is checked only when the
         material is relevant for batch (e.g., pharma, automobiles)
        </td>
       </tr>
       <tr>
        <td>What are the three purposes of Batch Management?</td>
        <td>
         Tracking expired goods, tracking defective goods, and tracking
         the person responsible for that manufacturing lot
        </td>
       </tr>
       <tr>
        <td>What does Transportation Group determine?</td>
        <td>
         It's one of the parameters used to determine Route in the sales
         document
        </td>
       </tr>
       <tr>
        <td>
         What does Loading Group determine, and what do codes 0001/0003
         mean?
        </td>
        <td>
         It's one of the parameters used to determine Shipping Point;
         0001 = Crane (normal products), 0003 = Manual (delicate
         products)
        </td>
       </tr>
       <tr>
        <td>What three factors together determine the Shipping Point?</td>
        <td>
         Shipping Conditions (Customer Master) + Loading Group (Material
         Master) + Plant
        </td>
       </tr>
       <tr>
        <td>
         What is the T-code and SPRO path for Shipping Point
         Determination?
        </td>
        <td>
         OVL2; SPRO → Logistics Execution → Shipping → Basic Shipping
         Functions → Shipping Point and Goods Receiving Point
         Determination → Assign Shipping Points
        </td>
       </tr>
       <tr>
        <td>What does HSN stand for, and what is it used for?</td>
        <td>
         Harmonized System Nomenclature — HSN codes (issued by the GST
         department) help determine GST tax rates; each product category
         has its own HSN code
        </td>
       </tr>
       <tr>
        <td>What is the T-code to define/maintain HSN codes?</td>
        <td>
         J1ID — select Chapter ID, click Maintain (pencil symbol), then
         New Entries
        </td>
       </tr>
       <tr>
        <td>What is Sales Text used for?</td>
        <td>
         Maintaining additional product information to be printed in
         outputs — particularly important for exports, where customs
         documents and bills of exchange require full product information
        </td>
       </tr>
       <tr>
        <td>What is Purchasing Group?</td>
        <td>
         A group of people within the purchasing department handling
         different activities (e.g., separate teams per plant or for
         head-office/in-house purchases)
        </td>
       </tr>
       <tr>
        <td>
         How does Plant-Specific Material Status differ from X-Plant
         Material Status?
        </td>
        <td>
         Plant-Specific Material Status blocks the material in one
         specific plant; X-Plant Material Status (Lecture 36) blocks it
         across all plants at once
        </td>
       </tr>
       <tr>
        <td>
         What does checking Automatic PO do in the Third-Party/IPO
         process?
        </td>
        <td>
         The system generates the PO directly when the sales order is
         created, skipping the normal manual PR-to-PO conversion step
        </td>
       </tr>
       <tr>
        <td>What is Purchasing Value Key used for?</td>
        <td>Sending reminders to vendors to supply goods on time</td>
       </tr>
       <tr>
        <td>What is GR Processing Time?</td>
        <td>
         The time taken after unloading goods to finally place them into
         storage location, covering intermediate steps such as quality
         checks
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
         Stock/Requirements List — shows how Availability Check (01 vs
         02) updates sales orders into MRP
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OVL2</span></td>
        <td>
         Shipping Point Determination — combination of Shipping
         Conditions, Loading Group and Plant
        </td>
       </tr>
       <tr>
        <td><span className="tcode">J1ID</span></td>
        <td>Define/maintain HSN codes (Chapter ID)</td>
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
        <td>Availability Check values</td>
        <td>
         01 = Daily requirements (single accumulated MD04 line), 02 =
         Individual requirements (separate MD04 line per order)
        </td>
       </tr>
       <tr>
        <td>Availability Check worked example</td>
        <td>
         Material X, stock 100; Orders 20501 (20), 20502 (25), 20503 (30)
        </td>
       </tr>
       <tr>
        <td>Loading Group codes</td>
        <td>
         0001 = Crane (normal products), 0003 = Manual (delicate
         products)
        </td>
       </tr>
       <tr>
        <td>Shipping Point determination example set</td>
        <td>
         Shipping Condition 01/10 × Loading Group 0001/0003 × Plant
         P100/P200 → Shipping Points P101–P103, P201–P203
        </td>
       </tr>
       <tr>
        <td>HSN code sample</td>
        <td>99.99.99, Unit of Measure BT (insulin example)</td>
       </tr>
       <tr>
        <td>GR Processing Time example</td>
        <td>
         2 days (time from unloading to storage location placement)
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture continued Material Master fields through the
      <strong>Sales: General/Plant</strong> view:
      <strong>Availability Check</strong> (01 daily vs. 02 individual
      requirements, with a full worked MD04 example on Material X),
      <strong>Batch Management</strong> (unique lot-level numbers for
      tracking expiry, defects, and responsibility), and two
      shipping-related determination fields —
      <strong>Transportation Group</strong> (drives Route) and
      <strong>Loading Group</strong> (drives Shipping Point, combined with
      Shipping Conditions and Plant, demonstrated across multiple OVL2
      combinations). It then moved into the
      <strong>Foreign Trade: Export</strong> view for the
      <strong>Control Code / HSN Code</strong> field (GST tax-rate
      determination, maintained via J1ID), and the final SD view,
      <strong>Sales Text</strong> (additional product info printed on
      outputs, especially for export documentation). The lecture closed with
      several <strong>Purchasing view</strong> fields:
      <strong>Purchasing Group</strong> (team-by-plant/activity structure),
      <strong>Plant-Specific Material Status</strong>
      (single-plant blocking, vs. X-Plant's all-plant blocking),
      <strong>Automatic PO</strong> (skips manual PR-to-PO conversion in
      Third-Party/IPO processes),
      <strong>Purchasing Value Key</strong> (vendor delivery reminders), and
      <strong>GR Processing Time</strong> (buffer time from unloading to
      storage placement).
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Availability Check 01 vs. 02</strong> is purely a
       display/update pattern in MD04 — daily-accumulated vs.
       order-by-order — not a difference in what actually reduces available
       stock
      </li>
      <li>
       <strong>Shipping Point Determination</strong> is a three-way
       combination — Shipping Conditions (customer) + Loading Group
       (material) + Plant — worth remembering as a unit rather than each
       field in isolation
      </li>
      <li>
       The <strong>all-plant vs. specific-plant</strong> blocking pattern
       now has three parallel examples across the course: Division/X-Plant
       Material Status (Lecture 36),
       X-Distribution/Distribution-Chain-Specific Status (Lecture 37), and
       X-Plant/Plant-Specific Material Status (this lecture)
      </li>
      <li>
       <strong>HSN codes are GST-department-issued</strong>, not
       company-defined — J1ID is simply where they get maintained in SAP
      </li>
      <li>
       This lecture marks the
       <strong>end of SD-relevant Material Master views</strong>; remaining
       fields are from other modules (Purchasing covered today; more to
       follow)
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> continuing with the remaining Material
      Master views/fields.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 38 Notes — Fields in Material Master: Sales/Plant, Foreign Trade
    &amp; Purchasing Views 🎓
   </p>
  </div>
 );
};

export default Material38;
