const SalesDocument54 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-orange">
    <h1>🔄 Lecture 54 — Item Category Controls, Part 2</h1>
    <p>
     SAP SD | Continuing the Item Category Details screen (VOV7) from
     Determine Cost into Completion Rule, Special Stock, Billing Relevance,
     item-level Billing Block, and Pricing — with worked Enquiry → Quotation
     → Order status demos
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered the first eight Item Category controls in
      <span className="tcode">VOV7</span> → Details, ending at
      <strong>Determine Cost</strong>. Today continues immediately into
      <strong>Completion Rule</strong> and works through four more controls
      — Special Stock, Billing Relevance, Billing Block (at item category
      level, distinct from the document-type-level Billing Block), and
      Pricing.
     </div>
    </div>

    {/* <!-- Section 1: Completion Rule --> */}
    <div className="card teal">
     <h2><span className="badge">9</span> Completion Rule</h2>
     <div className="callout teal">
      💡 <strong>Completion Rule</strong> controls
      <strong
      >when the status of a line item should be set to Completed</strong
      >. It is not maintained on every item category — only on a specific
      set of them, mostly the pre-sales and contract/agreement item
      categories.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Completion Rule Value</th>
        <th>Meaning</th>
        <th>Item Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>A</code></td>
        <td>
         Item is completed on the <strong>first reference</strong>,
         irrespective of quantity referenced
        </td>
        <td><code>AFN</code> (Inquiry)</td>
       </tr>
       <tr>
        <td><code>B</code></td>
        <td>
         Item is completed only after the
         <strong>full quantity</strong> has been referenced
        </td>
        <td><code>AGN</code> (Quotation)</td>
       </tr>
       <tr>
        <td><code>C</code></td>
        <td>
         Item is completed after the <strong>target quantity</strong> is
         fully referenced
        </td>
        <td><code>KMN</code> (Quantity Contract)</td>
       </tr>
       <tr>
        <td><code>E</code></td>
        <td>
         Item is completed after the
         <strong>full target value</strong> is referenced
        </td>
        <td><code>WKN</code> (Value Contract)</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked demonstration:</strong>
      <div className="stepper">
       <div className="step">
        Create an <strong>Enquiry</strong> with two line items — Item 10,
        material X, 100 qty; Item 20, material Y, 100 qty. Save. Checking
        status (<span className="tcode">VA12</span>, change mode) shows
        both line items as <strong>Open</strong>.
       </div>
       <div className="step">
        Create a <strong>Quotation</strong> with reference to the Enquiry,
        but select <strong>only the second line item</strong> (material
        Y), copying <strong>40</strong> of its 100 qty (a partial
        quantity). Add Valid From/Valid To dates and Save.
       </div>
       <div className="step">
        Go back to the Enquiry (<span className="tcode">VA12</span>) and
        recheck status: the
        <strong>first line item is still Open</strong> (never referenced),
        but the <strong>second line item now shows Completed</strong> —
        even though only 40 of the 100 qty was referenced, because
        Completion Rule <code>A</code> completes an Inquiry item on first
        reference alone, regardless of quantity.
       </div>
       <div className="step">
        Check the Quotation itself (<span className="tcode">VA22</span>):
        its status is <strong>Open</strong> at this point (nothing has
        referenced it yet).
       </div>
       <div className="step">
        Create a <strong>Sales Order</strong> with reference to the
        Quotation, but for only <strong>10</strong> of the 40 qty (again a
        partial quantity). Enter the PO Number and Save.
       </div>
       <div className="step">
        Recheck the Quotation status (<span className="tcode">VA22</span
        >): it now shows <strong>Being Processed</strong>, not Completed —
        because Completion Rule <code>B</code> only marks a Quotation item
        Completed once its <strong>full</strong> referenced quantity has
        been consumed.
       </div>
      </div>
     </div>
     <p className="note-text">
      📌 This is the practical difference between rule <code>A</code> and
      rule <code>B</code>: an Inquiry line item "locks in" as Completed the
      moment it's touched at all, while a Quotation line item stays
      open/being-processed until every last unit of its quantity has been
      carried forward into a follow-on document.
     </p>
    </div>

    {/* <!-- Section 2: Special Stock --> */}
    <div className="card orange">
     <h2><span className="badge">10</span> Special Stock</h2>
     <div className="callout orange">
      💡 <strong>Special Stock</strong> controls
      <strong
      >which stock type the system considers while creating a
       Delivery</strong
      >
      for that item.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Special Stock Value</th>
        <th>Stock Considered</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank</td>
        <td>Unrestricted stock</td>
       </tr>
       <tr>
        <td><code>W</code></td>
        <td>Consignment stock</td>
       </tr>
       <tr>
        <td><code>E</code></td>
        <td>Sales order stock</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 The vast majority of item categories carry this field blank
      (unrestricted stock) — only a small set of scenario-specific item
      categories override it.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Category</th>
        <th>Special Stock</th>
        <th>Scenario</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>KEN</code></td>
        <td><code>W</code> (Consignment)</td>
        <td>Consignment Issue</td>
       </tr>
       <tr>
        <td><code>KRN</code></td>
        <td><code>W</code> (Consignment)</td>
        <td>Consignment Returns</td>
       </tr>
       <tr>
        <td><code>TAK</code></td>
        <td><code>E</code> (Sales Order)</td>
        <td>Make-to-Order</td>
       </tr>
       <tr>
        <td><code>TAB</code></td>
        <td><code>E</code> (Sales Order)</td>
        <td>Individual Purchase Order (IPO)</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖 <strong>In plain terms:</strong> for Consignment Issue and
      Consignment Returns, delivery draws only from
      <strong>consignment stock</strong>, never unrestricted stock. For
      Make-to-Order and IPO, delivery draws from
      <strong>sales order stock</strong> — meaning that stock is reserved
      specifically against that one sales order number and cannot be
      delivered against any other order.
     </div>
    </div>

    {/* <!-- Section 3: Billing Relevance --> */}
    <div className="card purple">
     <h2><span className="badge">11</span> Billing Relevance</h2>
     <div className="callout purple">
      💡 <strong>Billing Relevance</strong> controls
      <strong>whether the item is relevant for billing at all</strong>, and
      if so,
      <strong
      >whether it is order-related or delivery-related billing</strong
      >.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Billing Relevance Value</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank</td>
        <td>Not relevant for billing</td>
       </tr>
       <tr>
        <td><code>A</code></td>
        <td>
         Delivery-related billing (invoice created with reference to the
         Delivery)
        </td>
       </tr>
       <tr>
        <td><code>B</code></td>
        <td>
         Order-related billing (invoice created with reference to the
         Order)
        </td>
       </tr>
       <tr>
        <td><code>C</code></td>
        <td>
         Order-related billing — status set according to the target
         quantity
        </td>
       </tr>
       <tr>
        <td><code>F</code></td>
        <td>
         Order-related billing — status set according to MIRO (Third
         Party process)
        </td>
       </tr>
      </tbody>
     </table>

     <h3>Blank — Not Relevant for Billing</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Category</th>
        <th>Document Type / Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>AFN</code></td>
        <td>Inquiry</td>
       </tr>
       <tr>
        <td><code>AGN</code></td>
        <td>Quotation</td>
       </tr>
       <tr>
        <td><code>KLN</code></td>
        <td>Free of Charge</td>
       </tr>
       <tr>
        <td><code>KBN</code></td>
        <td>Consignment Fill-Up</td>
       </tr>
       <tr>
        <td><code>KAN</code></td>
        <td>Consignment Pickup</td>
       </tr>
       <tr>
        <td><code>KMN</code></td>
        <td>Quantity Contract</td>
       </tr>
       <tr>
        <td><code>WKN</code></td>
        <td>Value Contract</td>
       </tr>
       <tr>
        <td><code>PVN</code></td>
        <td>Item Proposal</td>
       </tr>
       <tr>
        <td><code>TATX</code></td>
        <td>Text Item</td>
       </tr>
       <tr>
        <td><code>NLN</code></td>
        <td>Stock Transport Order (STO)</td>
       </tr>
       <tr>
        <td><code>NLRN</code></td>
        <td>STO Returns</td>
       </tr>
       <tr>
        <td colspan="2">
         Plus a small set of BOM-header and material-determination
         sub-item pricing categories (audio unclear on the exact codes —
         verify against the system)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Audio quality note:</strong> the item category codes for
      the BOM-header and material-determination
      <em>sub-item pricing</em> entries in this "not relevant for billing"
      group were unclear in this session's recording. <code>TAQ</code> (BOM
      Header — Pricing at Main Item) and <code>TAX</code> (Material
      Determination — Pricing at Main Item) are confirmed elsewhere as
      carrying Billing Relevance <code>A</code>, not blank — so the
      blank-relevance entries here are their <em>sub-item</em> counterparts;
      confirm the precise codes against the system if in doubt.
     </div>

     <h3>A — Delivery-Related Billing</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Category</th>
        <th>Document Type / Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>TAN</code></td>
        <td>Standard Order</td>
       </tr>
       <tr>
        <td><code>KEN</code></td>
        <td>Consignment Issue</td>
       </tr>
       <tr>
        <td><code>LPN</code></td>
        <td>Scheduling Agreement</td>
       </tr>
       <tr>
        <td><code>TANN</code></td>
        <td>Free Goods</td>
       </tr>
       <tr>
        <td><code>TAB</code></td>
        <td>Individual Purchase Order (IPO)</td>
       </tr>
       <tr>
        <td><code>TAK</code></td>
        <td>Make-to-Order</td>
       </tr>
       <tr>
        <td><code>TAC</code></td>
        <td>Configurable Material</td>
       </tr>
       <tr>
        <td><code>TAW</code></td>
        <td>Value Item</td>
       </tr>
       <tr>
        <td><code>DLN</code></td>
        <td>Delivery Without Order Reference</td>
       </tr>
       <tr>
        <td><code>NLC</code></td>
        <td>Intercompany STO</td>
       </tr>
       <tr>
        <td><code>NCRN</code></td>
        <td>Intercompany STO Returns</td>
       </tr>
       <tr>
        <td><code>TAQ</code></td>
        <td>BOM Header — Pricing at Main Item</td>
       </tr>
       <tr>
        <td><code>TAX</code></td>
        <td>Material Determination — Pricing at Main Item</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 <strong>Correction:</strong> the recording's "10, Order" is the
      item category <code>TAN</code> (Standard Order) — the
      <code>TA</code> prefix was inaudible in this session.
     </p>

     <h3>B — Order-Related Billing</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Category</th>
        <th>Document Type / Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>BVN</code></td>
        <td>Cash Sale</td>
       </tr>
       <tr>
        <td><code>REN</code></td>
        <td>Returns</td>
       </tr>
       <tr>
        <td><code>KRN</code></td>
        <td>Consignment Returns</td>
       </tr>
       <tr>
        <td><code>TAD</code></td>
        <td>Service Material</td>
       </tr>
      </tbody>
     </table>

     <h3>C — Order-Related Billing (Status per Target Quantity)</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Category</th>
        <th>Document Type / Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>G2N</code></td>
        <td>Credit Memo Request</td>
       </tr>
       <tr>
        <td><code>L2N</code></td>
        <td>Debit Memo Request</td>
       </tr>
      </tbody>
     </table>

     <h3>F — Order-Related Billing (Status per MIRO, Third Party)</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Category</th>
        <th>Document Type / Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>TAS</code></td>
        <td>Third Party</td>
       </tr>
       <tr>
        <td><code>TASG</code></td>
        <td>Third Party Returns</td>
       </tr>
      </tbody>
     </table>
     <div className="callout gold">
      📖
      <strong
      >Billing Relevance F, explained — the Third Party flow:</strong
      >
      <div className="stepper">
       <div className="step">Customer places the order.</div>
       <div className="step">
        System generates a <strong>PR</strong> (Purchase Requisition).
       </div>
       <div className="step">
        The PR is converted into a <strong>PO</strong> (Purchase Order)
        and sent to the vendor.
       </div>
       <div className="step">
        In a Third Party scenario, the
        <strong
        >vendor delivers the goods directly to the customer</strong
        >
        — the selling company itself never handles the stock.
       </div>
       <div className="step">
        The vendor then raises an invoice to the company. The company
        records that vendor invoice using the transaction
        <span className="tcode">MIRO</span> (as taught in this session:
        Logistics Invoice Verification of the incoming vendor invoice).
       </div>
       <div className="step">
        Only <strong>after MIRO has been posted</strong> does the system
        allow the company to raise its own invoice to the customer — this
        is exactly what Billing Relevance <code>F</code> enforces:
        <strong
        >without MIRO, the system will not allow an invoice to be
         created for the customer.</strong
        >
       </div>
      </div>
     </div>
    </div>

    {/* <!-- Section 4: Billing Block (item category level) --> */}
    <div className="card red">
     <h2>
      <span className="badge">12</span> Billing Block (Item Category Level)
     </h2>
     <div className="callout red">
      💡 If <strong>Billing Block</strong> is maintained on the
      <strong>item category</strong>, only
      <strong>that particular line item</strong> is blocked for billing. An
      <strong>authorized person</strong> must remove the block before the
      system allows an invoice to be created for that item.
     </div>
     <div className="callout blue">
      📊
      <strong
      >Contrast with document-type-level Billing Block (covered in
       Document Type Controls):</strong
      >
      maintaining Billing Block on the <strong>document type</strong> blocks
      the <strong>entire document</strong> for billing. Maintaining it here,
      on the <strong>item category</strong>, blocks
      <strong>only the specific line item(s)</strong> carrying that item
      category — useful when only some materials in an order need to be held
      back from billing, not the whole document.
     </div>
    </div>

    {/* <!-- Section 5: Pricing --> */}
    <div className="card gold">
     <h2><span className="badge">13</span> Pricing</h2>
     <div className="callout gold">
      💡 <strong>Pricing</strong> controls
      <strong>whether the item is relevant for pricing</strong> at all, and
      — if relevant — whether it follows <strong>normal pricing</strong> or
      <strong>Free Goods pricing</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Pricing Value</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank</td>
        <td>Not relevant for pricing</td>
       </tr>
       <tr>
        <td><code>X</code></td>
        <td>Relevant for pricing (normal pricing)</td>
       </tr>
       <tr>
        <td><code>B</code></td>
        <td>100% discount — Free Goods pricing</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖
      <strong
      >Only one item category carries Pricing = <code>B</code>:</strong
      >
      <code>TANN</code> (Free Goods). This is what makes a Free Goods line
      item's net value <strong>zero</strong> — the system applies a full
      100% discount automatically, exactly as covered earlier in the Free
      Goods pricing concept. Most other item categories carry
      <code>X</code> (relevant for pricing); a few carry blank (not relevant
      for pricing at all).
     </div>
     <p className="note-text">
      📌 Remaining controls on the Item Category Details screen were
      deferred to the next class.
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
         What does Completion Rule control, and what are its four values?
        </td>
        <td>
         When a line item's status should be set to Completed; A =
         completed on first reference regardless of quantity (AFN), B =
         completed only after full quantity is referenced (AGN), C =
         completed after target quantity is fully referenced (KMN), E =
         completed after full target value is referenced (WKN)
        </td>
       </tr>
       <tr>
        <td>
         In the worked demo, why did the Quotation line item show
         Completed on the Enquiry even though only 40 of 100 qty was
         referenced?
        </td>
        <td>
         Because the Enquiry's item category (AFN) carries Completion
         Rule A, which completes an item on first reference alone,
         irrespective of how much quantity was actually referenced
        </td>
       </tr>
       <tr>
        <td>
         Why did the Quotation itself stay at "Being Processed" instead
         of Completed after the sales order was created against it?
        </td>
        <td>
         Because the Quotation's item category (AGN) carries Completion
         Rule B, which only completes once the item's full referenced
         quantity has been consumed — only 10 of the 40 qty had been
         ordered
        </td>
       </tr>
       <tr>
        <td>
         What does Special Stock control, and what do blank, W, and E
         mean?
        </td>
        <td>
         Which stock type the system considers during delivery; blank =
         unrestricted stock, W = consignment stock (KEN, KRN), E = sales
         order stock (TAK, TAB)
        </td>
       </tr>
       <tr>
        <td>
         What does Billing Relevance control, and what are its five
         values?
        </td>
        <td>
         Whether the item is relevant for billing, and if so whether it's
         order- or delivery-related; blank = not relevant, A =
         delivery-related billing, B = order-related billing, C =
         order-related billing per target quantity, F = order-related
         billing per MIRO (Third Party)
        </td>
       </tr>
       <tr>
        <td>
         What does Billing Relevance F require before an invoice can be
         created, and why?
        </td>
        <td>
         It requires MIRO (posting of the vendor's invoice) to be
         completed first; this applies to the Third Party flow (TAS,
         TASG) where the vendor ships directly to the customer, so the
         company must first record the vendor's invoice before it can
         invoice its own customer
        </td>
       </tr>
       <tr>
        <td>
         How does Billing Block on the item category differ from Billing
         Block on the document type?
        </td>
        <td>
         Document-type-level Billing Block blocks the entire document
         from billing; item-category-level Billing Block blocks only the
         specific line item(s) carrying that item category
        </td>
       </tr>
       <tr>
        <td>
         What does the Pricing field control, and which item category
         carries value B?
        </td>
        <td>
         Whether the item is relevant for pricing, and whether it's
         normal or Free Goods pricing; blank = not relevant, X = relevant
         (normal pricing), B = 100% discount (Free Goods pricing) — only
         TANN (Free Goods) carries B
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
        <td><span className="tcode">VOV7</span></td>
        <td>
         Define Item Categories — Details screen houses all controls
         covered today (Completion Rule through Pricing)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA11 / VA21 / VA01</span></td>
        <td>
         Create Inquiry / Quotation / Order — used to build the
         Completion Rule worked demo
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA12 / VA22</span></td>
        <td>
         Change Inquiry / Change Quotation — used to check line item
         status at each stage of the Completion Rule demo
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MIRO</span></td>
        <td>
         Logistics Invoice Verification (posting the vendor's incoming
         invoice) — the prerequisite that Billing Relevance F checks for
         before allowing customer billing in the Third Party process
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
        <td>Completion Rule values</td>
        <td>
         A = first reference completes (AFN); B = full quantity
         referenced completes (AGN); C = target quantity fully referenced
         completes (KMN); E = full target value referenced completes
         (WKN)
        </td>
       </tr>
       <tr>
        <td>Special Stock values</td>
        <td>
         Blank = unrestricted stock; W = consignment stock (KEN, KRN); E
         = sales order stock (TAK, TAB)
        </td>
       </tr>
       <tr>
        <td>Billing Relevance values</td>
        <td>
         Blank = not relevant; A = delivery-related billing (TAN, KEN,
         LPN, TANN, TAB, TAK, TAC, TAW, DLN, NLC, NCRN, TAQ, TAX); B =
         order-related billing (BVN, REN, KRN, TAD); C = order-related,
         status per target quantity (G2N, L2N); F = order-related, status
         per MIRO (TAS, TASG)
        </td>
       </tr>
       <tr>
        <td>Billing Block (item category level)</td>
        <td>
         Blocks only the specific line item for billing, vs.
         document-type-level Billing Block which blocks the whole
         document
        </td>
       </tr>
       <tr>
        <td>Pricing values</td>
        <td>
         Blank = not relevant for pricing; X = relevant for pricing
         (normal); B = 100% discount / Free Goods pricing (TANN only)
        </td>
       </tr>
       <tr>
        <td>Completion Rule worked example</td>
        <td>
         Enquiry (2 line items, 100 qty each) → Quotation for 40 qty of
         item 20 → Enquiry item 20 shows Completed (rule A); Order for 10
         of the 40 qty → Quotation shows Being Processed, not Completed
         (rule B)
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture continued the Item Category Details screen (<span
       className="tcode"
      >VOV7</span
      >) from Determine Cost into five further controls.
      <strong>Completion Rule</strong> decides when a line item's status is
      set to Completed — A (first reference, Inquiry), B (full quantity
      referenced, Quotation), C (target quantity referenced, Quantity
      Contract), E (full target value referenced, Value Contract) —
      demonstrated end-to-end with an Enquiry-to-Quotation-to-Order chain
      showing how partial referencing affects status differently under rules
      A and B. <strong>Special Stock</strong> controls which stock type a
      delivery draws from: unrestricted (blank), consignment (W — KEN, KRN),
      or sales order stock (E — TAK, TAB).
      <strong>Billing Relevance</strong> controls whether and how an item is
      billed — not relevant (blank), delivery-related (A), order-related
      (B), order-related per target quantity (C), or order-related per MIRO
      for the Third Party process (F), with the full MIRO/Third Party
      invoicing chain explained in detail. <strong>Billing Block</strong> at
      the item category level was contrasted with its document-type-level
      counterpart — one blocks a single line item, the other blocks the
      whole document. <strong>Pricing</strong> controls whether an item is
      relevant for pricing at all, and whether it follows normal pricing (X)
      or Free Goods 100%-discount pricing (B, unique to TANN). Remaining
      Item Category controls were deferred to the next class.
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
       >Completion Rule A vs. B is the classic "referenced once vs.
        referenced fully" distinction</strong
       >
       — Inquiry items lock in as Completed on first touch, Quotation items
       stay open/ being-processed until every unit is consumed downstream
      </li>
      <li>
       <strong
       >Special Stock is what actually reserves stock to a specific
        order</strong
       >
       — E on TAK/TAB is the mechanism behind Make-to-Order and IPO's
       order-specific stock behavior
      </li>
      <li>
       <strong>Billing Relevance F is unique to Third Party</strong> — it's
       the only value tied to an external event (MIRO) rather than a purely
       internal document status
      </li>
      <li>
       <strong>Item-level Billing Block gives surgical control</strong>
       — reach for it over the document-type-level block whenever only
       specific materials, not the whole order, need to be held from
       billing
      </li>
      <li>
       <strong
       >Pricing = B is Free Goods' entire pricing mechanism in one
        field</strong
       >
       — a single value drives the 100% discount that makes free goods
       lines net to zero
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> the remaining Item Category controls,
      continuing from where today left off.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 54 Notes — Item Category Controls, Part 2 🎓
   </p>
  </div>
 );
};

export default SalesDocument54;
