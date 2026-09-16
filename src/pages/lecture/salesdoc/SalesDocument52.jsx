const SalesDocument52 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-green">
    <h1>
     🏁 Lecture 52 — Document Type Controls Finished &amp; Item Category
     Begins
    </h1>
    <p>
     SAP SD | Wrapping up the remaining Document Type Controls — Delivery
     Block, Shipping Conditions, Billing Type, Billing Block, Lead Time in
     Days, and the delivery-date proposal fields — then introducing Item
     Category (VOV7) with its document-type mapping and creating custom item
     categories with VOV4 assignment
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class ended at Immediate Delivery. Today confirms that recap,
      then finishes the remaining Document Type Controls — Delivery Block,
      Shipping Conditions, Billing Type, Billing Block, Lead Time in Days,
      Proposed Delivery Date, Proposed PO Date, and Date Type — before
      opening a brand-new control area:
      <strong>Item Category</strong> (T-code
      <span className="tcode">VOV7</span>), including how to create and
      assign custom item categories via <span className="tcode">VOV4</span>.
     </div>
    </div>

    {/* <!-- Section 1: Immediate Delivery recap --> */}
    <div className="card teal">
     <h2>
      <span className="badge">31</span> Immediate Delivery — Confirmed Recap
     </h2>
     <div className="callout teal">
      💡 <strong>Immediate Delivery</strong> is typically maintained
      <strong>only for Cash Sale and Rush Order</strong> — set to
      <code>X</code> or <code>A</code> so that saving the sales order
      automatically creates the delivery in the background, without a
      separate manual delivery step.
     </div>
    </div>

    {/* <!-- Section 2: Delivery Block --> */}
    <div className="card orange">
     <h2><span className="badge">32</span> Delivery Block</h2>
     <div className="callout orange">
      💡 If <strong>Delivery Block</strong> is maintained on a document
      type, the system
      <strong>automatically blocks the order for delivery</strong> on save.
      An <strong>authorized person</strong>
      must remove the Delivery Block before the system will allow a Delivery
      to be created.
     </div>
    </div>

    {/* <!-- Section 3: Shipping Conditions --> */}
    <div className="card purple">
     <h2><span className="badge">33</span> Shipping Conditions</h2>
     <div className="callout purple">
      💡 <strong>Shipping Conditions</strong> is maintained
      <strong>only for Cash Sale and Rush Order</strong>, set to
      <code>10</code>. When a document type carries a Shipping Conditions
      value, the system gives that value
      <strong>first preference while determining the Shipping Point</strong>
      for the sales document.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Shipping Conditions on Document Type</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Maintained (e.g. <code>10</code>)</td>
        <td>
         That value is used directly for Shipping Point determination
        </td>
       </tr>
       <tr>
        <td>Blank</td>
        <td>
         Value is instead taken from the <strong>Customer Master</strong>
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 This is exactly why Cash Sale and Rush Order are able to determine
      an <strong>immediate</strong> shipping point — Shipping Conditions
      <code>10</code> on the document type overrides whatever would
      otherwise come from the Customer Master.
     </p>
    </div>

    {/* <!-- Section 4: Billing Type --> */}
    <div className="card red">
     <h2><span className="badge">34</span> Billing Type</h2>
     <div className="callout red">
      💡 If <strong>Billing Type</strong> is maintained on a document type,
      the system
      <strong>automatically determines it while creating the invoice</strong
      >, without the user having to select it manually.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Billing Type</th>
        <th>Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>F2</code></td>
        <td>Standard Invoice</td>
       </tr>
       <tr>
        <td><code>BV</code></td>
        <td>Cash Sale Invoice</td>
       </tr>
       <tr>
        <td><code>RE</code></td>
        <td>Returns (Credit Memo for Returns)</td>
       </tr>
       <tr>
        <td><code>G2</code></td>
        <td>Credit Memo</td>
       </tr>
       <tr>
        <td><code>L2</code></td>
        <td>Debit Memo</td>
       </tr>
       <tr>
        <td><code>F5</code></td>
        <td>Proforma Invoice — order-related</td>
       </tr>
       <tr>
        <td><code>F8</code></td>
        <td>Proforma Invoice — delivery-related</td>
       </tr>
       <tr>
        <td><code>IV</code></td>
        <td>Inter-Company Invoice</td>
       </tr>
       <tr>
        <td><code>IG</code></td>
        <td>Inter-Company Credit Memo</td>
       </tr>
       <tr>
        <td><code>S1</code></td>
        <td>Invoice Cancellation</td>
       </tr>
       <tr>
        <td><code>S2</code></td>
        <td>Credit Memo Cancellation</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 5: Billing Block --> */}
    <div className="card gold">
     <h2><span className="badge">35</span> Billing Block</h2>
     <div className="callout gold">
      💡 If <strong>Billing Block</strong> is maintained on a document type,
      the order is <strong>automatically blocked for billing</strong> on
      save. An <strong>authorized person</strong>
      must cross-check and remove the Billing Block before the system allows
      an Invoice to be created — the same mechanism seen throughout the
      Return, Credit Memo, Debit Memo, and Invoice Correction lectures.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document Type</th>
        <th>Billing Block Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Returns (<code>RE</code>)</td>
        <td><code>08</code></td>
       </tr>
       <tr>
        <td>Credit Memo Request (<code>CR</code>)</td>
        <td><code>08</code></td>
       </tr>
       <tr>
        <td>Debit Memo Request (<code>DR</code>)</td>
        <td><code>09</code></td>
       </tr>
       <tr>
        <td>Invoice Correction Request (<code>RK</code>)</td>
        <td><code>08</code></td>
       </tr>
       <tr>
        <td>Contract Release (<code>CONR</code>)</td>
        <td><code>08</code></td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 These are the standard document types configured to carry a Billing
      Block by default — each pointing to a specific Billing Block reason
      code (<code>08</code> for most, <code>09</code> for Debit Memo
      Request), rather than just a generic on/off flag.
     </p>
    </div>

    {/* <!-- Section 6: Lead Time in Days --> */}
    <div className="card indigo">
     <h2><span className="badge">36</span> Lead Time in Days</h2>
     <div className="callout indigo">
      💡 <strong>Lead Time in Days</strong> controls how many days the
      system adds to today's date when
      <strong>proposing the Requested Delivery Date</strong> on a new sales
      order.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Lead Time in Days set to
      <code>10</code> — creating an order today (the 22nd) causes the system
      to automatically propose <code>1st August</code>
      (22nd + 10 days) as the Requested Delivery Date.
     </div>
    </div>

    {/* <!-- Section 7: Proposed Delivery Date & Proposed PO Date --> */}
    <div className="card brown">
     <h2>
      <span className="badge">37–38</span> Proposed Delivery Date &amp;
      Proposed PO Date
     </h2>
     <div className="callout brown">
      💡 <strong>Proposed Delivery Date</strong> (checked): the system
      automatically proposes a Requested Delivery Date while creating the
      sales order — either <strong>today's date</strong> (if Lead Time in
      Days is blank) or a date calculated from
      <strong>Lead Time in Days</strong> (if maintained).
     </div>
     <div className="callout gold">
      📖 <strong>Proposed PO Date</strong> (checked): the system
      automatically proposes <strong>today's date</strong> as the PO Date
      field's default value.
     </div>
    </div>

    {/* <!-- Section 8: Date Type --> */}
    <div className="card cyan">
     <h2><span className="badge">39</span> Date Type</h2>
     <div className="callout cyan">
      💡 <strong>Date Type</strong> controls the <strong>format</strong> in
      which the Requested Delivery Date is proposed — Day, Week, or Month
      format.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Date Type Value</th>
        <th>Format</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank or <code>1</code></td>
        <td>Day format</td>
       </tr>
       <tr>
        <td><code>2</code></td>
        <td>Week format</td>
       </tr>
       <tr>
        <td><code>3</code></td>
        <td>Month format</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 This is the last of the Document Type Controls covered in this
      series — the walkthrough now moves to a related but distinct control
      area: Item Category.
     </p>
    </div>

    {/* <!-- Section 9: Item Category - Introduction --> */}
    <div className="card pink">
     <h2>
      <span className="badge">🆕</span> Item Category — Introduction (VOV7)
     </h2>
     <div className="callout pink">
      💡 <strong>Item Category</strong> controls the functioning of a sales
      document's <strong>line item</strong> — parallel to how SD Document
      Category controls the document as a whole. T-code:
      <span className="tcode">VOV7</span>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document Type</th>
        <th>Standard Item Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Inquiry (<code>IN</code>)</td>
        <td><code>AFN</code></td>
       </tr>
       <tr>
        <td>Quotation (<code>QT</code>)</td>
        <td><code>AGN</code></td>
       </tr>
       <tr>
        <td>Standard Order (<code>OR</code>)</td>
        <td><code>TAN</code></td>
       </tr>
       <tr>
        <td>Rush Order (<code>RO</code>)</td>
        <td><code>TAN</code></td>
       </tr>
       <tr>
        <td>Cash Sale (<code>CS</code>)</td>
        <td><code>BVN</code></td>
       </tr>
       <tr>
        <td>Returns (<code>RE</code>)</td>
        <td><code>REN</code></td>
       </tr>
       <tr>
        <td>Credit Memo Request (<code>CR</code>)</td>
        <td><code>G2N</code></td>
       </tr>
       <tr>
        <td>Debit Memo Request (<code>DR</code>)</td>
        <td><code>L2N</code></td>
       </tr>
       <tr>
        <td>Invoice Correction Request (<code>RK</code>)</td>
        <td><code>G2N</code></td>
       </tr>
       <tr>
        <td>Free of Charge (<code>FD</code>)</td>
        <td><code>KLN</code></td>
       </tr>
       <tr>
        <td>Subsequent Delivery Free of Charge (<code>SDF</code>)</td>
        <td><code>KLN</code></td>
       </tr>
       <tr>
        <td>Consignment Fill-Up (<code>CF</code>)</td>
        <td><code>KBN</code></td>
       </tr>
       <tr>
        <td>Consignment Issue (<code>CI</code>)</td>
        <td><code>KEN</code></td>
       </tr>
       <tr>
        <td>Consignment Returns (<code>CR</code>)</td>
        <td><code>KRN</code></td>
       </tr>
       <tr>
        <td>Consignment Pickup (<code>CP</code>)</td>
        <td><code>KAN</code></td>
       </tr>
       <tr>
        <td>Quantity Contract (<code>QC</code>)</td>
        <td><code>KMN</code></td>
       </tr>
       <tr>
        <td>Value Contract — General (<code>WK1</code>)</td>
        <td><code>WKN</code></td>
       </tr>
       <tr>
        <td>Value Contract — Material-Specific (<code>WK2</code>)</td>
        <td><code>WKN</code></td>
       </tr>
       <tr>
        <td>Scheduling Agreement (<code>DS</code>)</td>
        <td><code>LPN</code></td>
       </tr>
       <tr>
        <td>Item Proposal (<code>PV</code>)</td>
        <td><code>PVN</code></td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Audio quality note:</strong> the item category codes for
      Consignment Issue, Consignment Returns, and Consignment Pickup were
      unclear in this session's recording — the values shown above
      (<code>KEN</code>, <code>KRN</code>, <code>KAN</code>) reflect the
      standard SAP item categories for these document types; confirm against
      the system if in doubt.
     </div>
     <p className="note-text">
      📌 <strong>Other item categories</strong> encountered outside the
      direct document-type mapping (used based on material type or order
      scenario, not document type alone): Free Goods (<code>TANN</code>),
      Third Party (<code>TAS</code>), Individual Purchase Order/IPO
      (<code>TAB</code>), Make-to-Order (<code>TAK</code>), Configurable
      Material (<code>TAC</code>), Service Material (<code>TAD</code>),
      Delivery Without Order Reference (<code>DLN</code>), Text Item
      (<code>TATX</code>), and Value Item (<code>TAW</code>). In total, SAP
      standard ships <strong>36 item categories</strong>.
     </p>
     <div className="callout blue">
      🔗 <strong>Coming up:</strong> the Item Category's own Details screen
      carries a further set of controls (e.g. Billing Relevance, which
      resurfaces in this lecture's closing Q&amp;A) — to be covered in
      detail next class.
     </div>
    </div>

    {/* <!-- Section 10: Creating Custom Item Categories --> */}
    <div className="card green">
     <h2>
      <span className="badge">🆕</span> Creating &amp; Assigning Custom Item
      Categories (VOV7 + VOV4)
     </h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VOV7</span> → select standard item category
       <code>TAN</code> → Copy As → change the ID to a custom code (worked
       example: <code>P10</code>) → Enter → system prompts
       <em>"Is this entry also relevant for copy control?"</em> →
       <strong>Yes</strong> → Save → continue through the immediate
       follow-up tables.
      </div>
      <div className="step">
       <span className="tcode">VOV4</span> (Assign Item Category) → find
       the combination for document type <code>PPOR</code>, Item Category
       Group <code>NORM</code>, no Usage, no Higher-Level Item Category →
       change the assigned item category from <code>TAN</code> to the
       custom <code>P10</code> → Save.
      </div>
      <div className="step">
       <span className="tcode">VA01</span> → create an order with type
       <code>PPOR</code> → the system now determines item category
       <code>P10</code> on the line item, confirming the custom assignment.
      </div>
     </div>
     <div className="callout green">
      📖
      <strong>Same pattern repeated for Enquiry and Quotation:</strong> copy
      <code>AFN</code> → custom <code>PAFN</code> (confirm "relevant for
      copy control" → Yes), copy <code>AGN</code> → custom
      <code>PAGN</code> → assign both via VOV4 to document types
      <code>PPIN</code> and <code>PPQT</code> respectively (same
      combination: Item Category Group NORM, no Usage, no Higher-Level Item
      Category) → Save.
     </div>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA11</span> → create Enquiry
       <code>PPIN</code> → double-click the line item → confirms item
       category <code>PAFN</code> → Save.
      </div>
      <div className="step">
       <span className="tcode">VA21</span> → create Quotation
       <code>PPQT</code> with reference to the enquiry → double-click the
       line item → confirms item category <code>PAGN</code> → mention Valid
       From/To → Save.
      </div>
      <div className="step">
       <span className="tcode">VA01</span> → create Order with reference to
       the quotation → double-click the line item → confirms item category
       <code>P10</code> — the full custom chain (Enquiry → Quotation →
       Order) now runs entirely on custom item categories.
      </div>
     </div>
    </div>

    {/* <!-- Section 11: Q&A - Free of Charge billing error --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">❓</span> Class Q&amp;A — "Item Not Valid for
      Billing" Error on Free of Charge Invoicing
     </h2>
     <div className="callout cyan">
      🔗
      <strong
      >Q: After PGI on a Free of Charge order, creating the Proforma
       Invoice throws "Item 0010 is not valid for billing" — how is this
       fixed?</strong
      >
      A: Two configuration checks:
     </div>
     <div className="stepper">
      <div className="step">
       Go to the Free of Charge item category (<code>KLN</code>) → confirm
       <strong>Billing Relevance = <code>B</code></strong>
       (relevant for order-related billing of the delivery quantity).
      </div>
      <div className="step">
       If that alone doesn't resolve it, check
       <strong>Copy Control</strong> between the delivery type
       (<code>LF</code>) and billing type (<code>F8</code>) via
       <span className="tcode">VTFL</span> → Change mode → select the
       <code>F8</code>/<code>LF</code> combination → Details → at
       <strong>item level</strong>, confirm the
       <strong>Copy Requirement</strong> routine is set correctly (worked
       example: changed from <code>009</code> to <code>010</code>) → Save,
       then retry the Proforma Invoice.
      </div>
     </div>
     <p className="note-text">
      📌 This was left as an in-progress troubleshooting item to continue
      verifying next class — a reminder that Item Category and Copy Control
      settings work together, and an error surfacing at invoice creation
      doesn't always trace back to the invoice step itself.
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
        <td>What does Delivery Block do, and how is it released?</td>
        <td>
         Maintaining it on a document type automatically blocks new
         orders of that type from delivery; an authorized person must
         remove the block before a Delivery can be created
        </td>
       </tr>
       <tr>
        <td>
         What is Shipping Conditions used for on a document type, and
         what happens when it's blank?
        </td>
        <td>
         It gives first preference to that value when determining the
         Shipping Point; if blank, the value is instead taken from the
         Customer Master — this is why Cash Sale/Rush Order (value 10)
         can determine an immediate shipping point
        </td>
       </tr>
       <tr>
        <td>
         What does maintaining a Billing Type on a document type achieve?
        </td>
        <td>
         The system automatically determines that billing type while
         creating the invoice, without manual selection
        </td>
       </tr>
       <tr>
        <td>
         Which standard document types carry a default Billing Block, and
         what values do they use?
        </td>
        <td>
         Returns (RE), Credit Memo Request (CR), Invoice Correction
         Request (RK), and Contract Release (CONR) use value 08; Debit
         Memo Request (DR) uses 09
        </td>
       </tr>
       <tr>
        <td>What does Lead Time in Days control?</td>
        <td>
         How many days the system adds to today's date when proposing the
         Requested Delivery Date on a new sales order (e.g. 10 days added
         to the 22nd proposes 1st August)
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between Proposed Delivery Date and
         Proposed PO Date?
        </td>
        <td>
         Proposed Delivery Date auto-proposes the Requested Delivery Date
         (today's date, or a Lead-Time-calculated date); Proposed PO Date
         auto-proposes today's date as the PO Date field's value
        </td>
       </tr>
       <tr>
        <td>
         What does Date Type control, and what do blank/1, 2, and 3 mean?
        </td>
        <td>
         The format of the proposed Requested Delivery Date; blank or 1 =
         Day format, 2 = Week format, 3 = Month format
        </td>
       </tr>
       <tr>
        <td>What is Item Category, and what T-code defines it?</td>
        <td>
         The control that governs a sales document's line-item-level
         behavior, defined via T-code VOV7
        </td>
       </tr>
       <tr>
        <td>
         What are the standard item categories for Standard Order, Cash
         Sale, and Returns?
        </td>
        <td>
         Standard Order (OR) = TAN, Cash Sale (CS) = BVN, Returns (RE) =
         REN
        </td>
       </tr>
       <tr>
        <td>
         What are the steps to create and assign a custom item category?
        </td>
        <td>
         VOV7 → copy the standard item category → assign a custom ID →
         confirm "relevant for copy control" → Save; then VOV4 → find the
         document type / item category group / usage / higher-level-item
         combination → replace the standard item category with the custom
         one → Save
        </td>
       </tr>
       <tr>
        <td>
         What causes an "Item is not valid for billing" error when
         invoicing a Free of Charge delivery, and how is it fixed?
        </td>
        <td>
         Usually a Billing Relevance setting on the item category (should
         be B) and/or a Copy Control (VTFL) issue between the delivery
         type and billing type at item level — checking and correcting
         the Copy Requirement routine on that combination resolves it
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
        <td><span className="tcode">VOV8</span></td>
        <td>
         Define Sales Document Types — houses all Document Type Controls
         covered through this lecture (through Date Type)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV7</span></td>
        <td>
         Define Item Categories — used to view standard item categories
         and to create custom ones via Copy As
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV4</span></td>
        <td>
         Assign Item Category — maps a Document Type + Item Category
         Group + Usage + Higher-Level Item combination to a specific item
         category
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VTFL</span></td>
        <td>
         Copy Control: Delivery to Billing Document — used to check/fix
         the Copy Requirement routine causing a "not valid for billing"
         error
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA11 / VA21 / VA01</span></td>
        <td>
         Create Enquiry / Quotation / Order — used to test the custom
         item category chain (PAFN → PAGN → P10)
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
        <td>Shipping Conditions (Cash Sale / Rush Order)</td>
        <td>
         Value 10 — first preference for Shipping Point determination;
         blank falls back to Customer Master
        </td>
       </tr>
       <tr>
        <td>Standard Billing Types</td>
        <td>
         F2=Standard Invoice, BV=Cash Sale, RE=Returns, G2=Credit Memo,
         L2=Debit Memo, F5=Proforma (order-related), F8=Proforma
         (delivery-related), IV=Inter-Company Invoice, IG=Inter-Company
         Credit Memo, S1=Invoice Cancellation, S2=Credit Memo
         Cancellation
        </td>
       </tr>
       <tr>
        <td>Billing Block values by document type</td>
        <td>RE=08, CR=08, DR=09, RK=08, CONR=08</td>
       </tr>
       <tr>
        <td>Lead Time in Days worked example</td>
        <td>
         10 days → order created on the 22nd proposes Requested Delivery
         Date of 1st August
        </td>
       </tr>
       <tr>
        <td>Date Type values</td>
        <td>Blank/1 = Day, 2 = Week, 3 = Month</td>
       </tr>
       <tr>
        <td>Item Category — document type mapping (selected)</td>
        <td>
         IN=AFN, QT=AGN, OR/RO=TAN, CS=BVN, RE=REN, CR=G2N, DR=L2N,
         RK=G2N, FD/SDF=KLN, CF=KBN, QC=KMN, WK1/WK2=WKN, DS=LPN, PV=PVN
        </td>
       </tr>
       <tr>
        <td>Custom item category worked example</td>
        <td>
         TAN → P10 (assigned to PPOR); AFN → PAFN (assigned to PPIN); AGN
         → PAGN (assigned to PPQT) — all via VOV7 Copy As + VOV4
         assignment
        </td>
       </tr>
       <tr>
        <td>Total standard SAP item categories</td>
        <td>36</td>
       </tr>
       <tr>
        <td>Free of Charge billing error fix</td>
        <td>
         Item category KLN → Billing Relevance = B; VTFL → F8/LF
         combination → item-level Copy Requirement routine corrected (009
         → 010)
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture finished the Document Type Controls series with eight
      further fields: <strong>Delivery Block</strong> (auto-blocks new
      orders from delivery),
      <strong>Shipping Conditions</strong> (first-preference shipping-point
      source, defaulting to Customer Master when blank — the reason Cash
      Sale/Rush Order get an immediate shipping point),
      <strong>Billing Type</strong>
      (auto-determines the invoice type, with the full standard-type table:
      F2/BV/RE/G2/L2/F5/F8/IV/IG/S1/S2),
      <strong>Billing Block</strong> (auto-blocks billing, with the standard
      document types and their block-reason values RE/CR/RK/ CONR=08,
      DR=09), <strong>Lead Time in Days</strong> (adds a configurable number
      of days to propose the Requested Delivery Date), and the paired
      <strong>Proposed Delivery Date</strong> /
      <strong>Proposed PO Date</strong> / <strong>Date Type</strong> fields
      governing how and in what format dates are auto-proposed. The lecture
      then opened <strong>Item Category</strong>
      (T-code VOV7) as the line-item-level counterpart to Document Type,
      covering the standard document-type-to-item-category mapping across
      all 20 document types plus additional scenario-based item categories
      (Free Goods, Third Party, Make-to-Order, Configurable Material, Text
      Item, Value Item, etc. — 36 item categories in total). A full worked
      demonstration then created custom item categories (P10, PAFN, PAGN
      from TAN/AFN/AGN) via VOV7 Copy As and assigned them via VOV4,
      verified end-to-end across a custom Enquiry → Quotation → Order chain.
      The lecture closed with a class Q&amp;A troubleshooting an "item not
      valid for billing" error on Free of Charge invoicing, tracing it to
      Item Category Billing Relevance and a Copy Control (VTFL)
      requirement-routine setting.
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
       >Shipping Conditions on the document type always wins over the
        Customer Master</strong
       >
       — this single field is the entire reason Cash Sale and Rush Order
       behave differently from a standard order in terms of shipping point
      </li>
      <li>
       <strong
       >Billing Block isn't just a flag — it carries a reason
        code</strong
       >
       — RE/CR/RK/CONR share 08, DR alone uses 09, worth remembering when
       explaining block reasons to a client
      </li>
      <li>
       <strong>Item Category is document type's line-item mirror</strong>
       — SD Document Category controls the whole document; Item Category
       controls what each line does, and the two config areas (VOV8 and
       VOV7/VOV4) always need to be considered together
      </li>
      <li>
       <strong
       >Copy control errors often masquerade as billing errors</strong
       >
       — "item not valid for billing" pointed first at Item Category, but
       the real fix was in VTFL's Copy Requirement routine, a good reminder
       to check both layers
      </li>
      <li>
       <strong>The custom chain pattern is reusable</strong> — copy the
       item category, confirm copy control relevance, assign via VOV4, test
       through the full document flow, exactly as done earlier for custom
       document types themselves
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> the controls inside Item Category
      itself (its own Details screen), continuing from where today left off.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 52 Notes — Document Type Controls Finished &amp; Item Category
    Begins 🎓
   </p>
  </div>
 );
};

export default SalesDocument52;
