const SalesDocument53 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-indigo">
    <h1>🏷️ Lecture 53 — Item Category Controls, Part 1</h1>
    <p>
     SAP SD | Starting the controls inside Item Category's own Details screen
     (VOV7) — Item Type, Business Item, Schedule Line Allowed, Item Relevant
     for Delivery, Returns, Weight/Volume Relevant, Credit Active, and
     Determine Cost — plus a live troubleshooting session on a
     billing-to-accounting number range error
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class introduced Item Category (T-code
      <span className="tcode">VOV7</span>) with its standard document-type
      mapping, and worked through creating custom item categories
      (<code>PAFN</code>, <code>PAGN</code>, custom Order item category
      <code>PTAN</code>/<code>P10</code>) assigned via
      <span className="tcode">VOV4</span>. Today opens the item category's
      own <strong>Details</strong> screen and starts going through its
      controls, field by field — the same approach used for Document Type
      Controls.
     </div>
    </div>

    {/* <!-- Section 1: Item Type --> */}
    <div className="card teal">
     <h2><span className="badge">1</span> Item Type</h2>
     <div className="callout teal">
      💡 <strong>Item Type</strong> controls the
      <strong>functioning of the line item</strong> — whether it is a
      Standard Item, Value Item, Text Item, or Packing Item.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Type Value</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank</td>
        <td>Standard Item</td>
       </tr>
       <tr>
        <td><code>A</code></td>
        <td>Value Item</td>
       </tr>
       <tr>
        <td><code>B</code></td>
        <td>Text Item</td>
       </tr>
       <tr>
        <td><code>C</code></td>
        <td>Packing Item</td>
       </tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Type</th>
        <th>Definition</th>
        <th>Example</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Standard Item</td>
        <td>
         An item sold to customers, whether tangible (can be
         touched/felt) or intangible (cannot be seen or touched)
        </td>
        <td>Physical goods; services</td>
       </tr>
       <tr>
        <td>Value Item</td>
        <td>
         An item consisting of some value, delivered to customers without
         charging
        </td>
        <td>Gift vouchers, gift coupons</td>
       </tr>
       <tr>
        <td>Text Item</td>
        <td>
         An item consisting of some information, delivered to customers
         without charging
        </td>
        <td>User manuals, brochures</td>
       </tr>
       <tr>
        <td>Packing Item</td>
        <td>An item used to pack the main item</td>
        <td>Carton, box, bag, bottle</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Standard item category for Value Item is <code>TAW</code> (Item
      Type <code>A</code>); standard item category for Text Item is
      <code>TATX</code> (Item Type <code>B</code>).
     </p>
    </div>

    {/* <!-- Section 2: Business Item --> */}
    <div className="card orange">
     <h2><span className="badge">2</span> Business Item</h2>
     <div className="callout orange">
      💡 <strong>Business Item</strong> controls whether
      <strong>Business Data can be changed at item level</strong>. Business
      Data is the data that copies into a sales document from the Customer
      Master's <strong>Sales tab</strong> and
      <strong>Billing tab</strong> (e.g. Incoterms, Payment Terms) — it
      copies into <strong>both</strong> Header Data and Item Data.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Business Item Setting</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Checked</td>
        <td>
         System allows changing Business Data fields (e.g. Incoterms,
         Payment Terms) at item level — item can differ from header
        </td>
       </tr>
       <tr>
        <td>Unchecked</td>
        <td>
         Business Data fields at item level are
         <strong>disabled</strong> and cannot be changed
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> with Business Item checked,
      double-clicking a line item → Billing tab shows editable Incoterms and
      Payment Terms fields, independent of the header. Unchecking Business
      Item on the item category and repeating the same navigation shows the
      same fields, now <strong>greyed out</strong>.
     </div>
     <p className="note-text">
      📌 Table for Business Data: <code>VBKD</code>.
     </p>
    </div>

    {/* <!-- Section 3: Schedule Line Allowed --> */}
    <div className="card purple">
     <h2><span className="badge">3</span> Schedule Line Allowed</h2>
     <div className="callout purple">
      💡 <strong>Schedule Line Allowed</strong> controls whether the item
      gets a <strong>Schedule Lines tab</strong> in the sales document at
      all.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Schedule Line Allowed Setting</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Checked</td>
        <td>Item Data shows a Schedule Lines tab</td>
       </tr>
       <tr>
        <td>Unchecked</td>
        <td>
         System does not determine a Schedule Lines tab for the item
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Item categories with Schedule Line Allowed
      <strong>unchecked</strong>: <code>G2N</code> (Credit Memo Request),
      <code>L2N</code> (Debit Memo Request), <code>KMN</code> (Quantity
      Contract), <code>WKN</code> (Value Contract), <code>PVN</code> (Item
      Proposal) — all document types where nothing is physically scheduled
      for delivery/shipment.
     </p>
    </div>

    {/* <!-- Section 4: Item Relevant for Delivery --> */}
    <div className="card red">
     <h2><span className="badge">4</span> Item Relevant for Delivery</h2>
     <div className="callout red">
      💡 <strong>Item Relevant for Delivery</strong> is applicable
      <strong>only to Text Item and Value Item</strong> — it controls
      whether that Text Item (<code>TATX</code>) or Value Item
      (<code>TAW</code>) is relevant for delivery or not. Both standard item
      categories carry this checked.
     </div>
    </div>

    {/* <!-- Section 5: Returns --> */}
    <div className="card gold">
     <h2><span className="badge">5</span> Returns</h2>
     <div className="callout gold">
      💡 <strong>Returns</strong> (checked) has two effects: (1) the system
      identifies that <strong>goods are coming in</strong>
      (inbound movement, rather than the usual outbound); (2) the
      <strong>accounting entry is reversed</strong> — Revenue Account Debit
      → Customer Account Credit.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Category</th>
        <th>Document Type / Purpose</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>REN</code></td>
        <td>Returns</td>
       </tr>
       <tr>
        <td><code>G2N</code></td>
        <td>Credit Memo Request</td>
       </tr>
       <tr>
        <td><code>KRN</code></td>
        <td>Consignment Returns</td>
       </tr>
       <tr>
        <td><code>KAN</code></td>
        <td>Consignment Pickup</td>
       </tr>
       <tr>
        <td><code>TASG</code></td>
        <td>Third Party Returns</td>
       </tr>
       <tr>
        <td><code>NLRN</code></td>
        <td>STO Returns</td>
       </tr>
       <tr>
        <td><code>NCRN</code></td>
        <td>Intercompany STO Returns</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 These are the item categories that carry Returns checked by default
      in the standard system.
     </p>
    </div>

    {/* <!-- Section 6: Weight/Volume Relevant --> */}
    <div className="card indigo">
     <h2><span className="badge">6</span> Weight/Volume Relevant</h2>
     <div className="callout indigo">
      💡 <strong>Weight/Volume Relevant</strong> controls whether the system
      <strong>calculates weight and volume</strong> and determines it into
      the sales document's <strong>Shipping</strong> tab at item level.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Weight/Volume Relevant Setting</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Checked</td>
        <td>Weight is calculated and shown on the Shipping tab</td>
       </tr>
       <tr>
        <td>Unchecked</td>
        <td>
         Weight is not calculated; the Shipping tab's weight fields are
         disabled and blank
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 7: Credit Active --> */}
    <div className="card brown">
     <h2><span className="badge">7</span> Credit Active</h2>
     <div className="callout brown">
      💡 <strong>Credit Active</strong> controls whether the item is
      <strong>relevant for Credit Management</strong>. When checked, the
      line item's value is <strong>updated into Credit Management</strong>;
      when unchecked, it is not.
     </div>
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
        <td><code>L2N</code></td>
        <td>Debit Memo Request</td>
       </tr>
       <tr>
        <td><code>KAN</code></td>
        <td>Consignment Issue</td>
       </tr>
       <tr>
        <td><code>LPN</code></td>
        <td>Scheduling Agreement</td>
       </tr>
       <tr>
        <td><code>TAS</code></td>
        <td>Third Party</td>
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
        <td><code>TAD</code></td>
        <td>Service Material</td>
       </tr>
       <tr>
        <td><code>DLN</code></td>
        <td>Delivery Without Order Reference</td>
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
     <div className="callout red">
      ⚠️ Out of the 36 standard item categories, only these
      <strong>12</strong> carry Credit Active checked — every other item
      category has it unchecked.
     </div>
     <p className="note-text">
      📌 This lecture's spoken assignment of <code>KAN</code> to Consignment
      Issue refines the previous lecture's flagged, audio-unclear guess for
      that same item category — Consignment Issue is confirmed here as
      <code>KAN</code>.
     </p>
    </div>

    {/* <!-- Section 8: Determine Cost --> */}
    <div className="card cyan">
     <h2><span className="badge">8</span> Determine Cost</h2>
     <div className="callout cyan">
      💡 <strong>Determine Cost</strong> controls whether the
      <strong>cost condition type <code>VPRS</code></strong> is determined
      into the sales document's Conditions tab.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Determine Cost Setting</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Checked</td>
        <td>
         Condition type VPRS is determined and shown on the Conditions
         tab
        </td>
       </tr>
       <tr>
        <td>Unchecked</td>
        <td>
         VPRS is not determined — the Conditions tab does not show it
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked demonstration:</strong> creating an order with item
      category <code>P10</code> checked for Determine Cost shows VPRS on the
      Conditions tab. Unchecking Determine Cost on <code>P10</code> and
      repeating the same order creation shows the Conditions tab with VPRS
      <strong>absent</strong>.
     </div>
    </div>

    {/* <!-- Section 9: Q&A - Live troubleshooting --> */}
    <div className="card pink">
     <h2>
      <span className="badge">❓</span> Class Q&amp;A — Live
      Troubleshooting: Error in Account Determination
     </h2>
     <div className="callout pink">
      🔗 <strong>Symptom:</strong> a student's invoices (billing documents,
      e.g. <code>90040050</code>, <code>90040051</code>) for Sales
      Organization <code>M300</code> showed a red flag with
      <em>"Error in account determination"</em> when releasing to
      Accounting.
     </div>
     <div className="stepper">
      <div className="step">
       Diagnosis: checked the billing type in use — confirmed as standard.
       Investigating the billing document's number range configuration
       revealed:
       <em>"Interval 14 does not exist"</em> for company code
       <code>M300</code>.
      </div>
      <div className="step">
       Fix: went to the billing document number range maintenance
       transaction and created the missing <strong>interval 14</strong> for
       company code <code>M300</code> → Save.
      </div>
      <div className="step">
       <span className="tcode">VF02</span> → open the flagged billing
       document → click the red flag icon again → accounting document now
       generates successfully. Repeated for the second flagged document.
      </div>
     </div>
     <p className="note-text">
      📌 The underlying cause here was a missing
      <strong>number range interval</strong> for that company code — not a
      G/L account-determination (VKOA) setting itself — even though the
      error message surfaced as "account determination" at the point of
      releasing to Accounting. Worth remembering as a troubleshooting
      lesson: this class of error doesn't always trace back to account
      determination configuration itself.
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
         What does Item Type control, and what are its four values?
        </td>
        <td>
         The functioning of the line item; blank = Standard Item, A =
         Value Item, B = Text Item, C = Packing Item
        </td>
       </tr>
       <tr>
        <td>
         How do Standard Item, Value Item, Text Item, and Packing Item
         differ?
        </td>
        <td>
         Standard Item is sold to customers (tangible or intangible);
         Value Item carries some value and is delivered free (e.g. gift
         vouchers); Text Item carries information and is delivered free
         (e.g. manuals); Packing Item is used to pack the main item (e.g.
         carton, box)
        </td>
       </tr>
       <tr>
        <td>
         What does Business Item control, and what table stores Business
         Data?
        </td>
        <td>
         Whether Business Data (from Customer Master Sales/Billing tabs,
         e.g. Incoterms, Payment Terms) can be changed at item level;
         checked allows item-level changes, unchecked disables those
         fields. Business Data is stored in table VBKD
        </td>
       </tr>
       <tr>
        <td>
         What does Schedule Line Allowed control, and which item
         categories have it unchecked?
        </td>
        <td>
         Whether the item gets a Schedule Lines tab at all; unchecked for
         G2N (Credit Memo Request), L2N (Debit Memo Request), KMN
         (Quantity Contract), WKN (Value Contract), and PVN (Item
         Proposal)
        </td>
       </tr>
       <tr>
        <td>
         Which item categories is Item Relevant for Delivery applicable
         to?
        </td>
        <td>Only Text Item (TATX) and Value Item (TAW)</td>
       </tr>
       <tr>
        <td>
         What are the two effects of checking Returns on an item
         category?
        </td>
        <td>
         The system identifies that goods are coming in (inbound), and
         the accounting entry is reversed — Revenue Account Debit to
         Customer Account Credit
        </td>
       </tr>
       <tr>
        <td>What does Weight/Volume Relevant control?</td>
        <td>
         Whether the system calculates weight/volume and displays it on
         the item's Shipping tab; unchecked disables and blanks those
         fields
        </td>
       </tr>
       <tr>
        <td>
         What does Credit Active control, and how many of the 36 standard
         item categories have it checked?
        </td>
        <td>
         Whether the item's value updates into Credit Management; only 12
         of the 36 standard item categories carry it checked (e.g. TAN,
         L2N, KAN, LPN, TAS, TAB, TAK, TAC, TAD, DLN, TAQ, TAX)
        </td>
       </tr>
       <tr>
        <td>What does Determine Cost control?</td>
        <td>
         Whether the cost condition type VPRS is determined into the
         sales document's Conditions tab; unchecked means VPRS never
         appears
        </td>
       </tr>
       <tr>
        <td>
         What was the actual root cause of the "error in account
         determination" flag in the live troubleshooting session?
        </td>
        <td>
         A missing number range interval (interval 14) for the billing
         document type at the company code level — not a G/L
         account-determination setting — resolved by creating that
         interval and re-releasing the billing documents via VF02
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
         covered today (Item Type through Determine Cost)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV4</span></td>
        <td>
         Assign Item Category — recapped from previous lecture as the
         mechanism linking document type to item category
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used to demonstrate Business Item,
         Weight/Volume Relevant, and Determine Cost live, checked vs.
         unchecked
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VF02</span></td>
        <td>
         Change Billing Document — used to re-trigger accounting document
         generation after fixing the number range interval
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
        <td>Item Type values</td>
        <td>
         Blank = Standard Item, A = Value Item (std. category TAW), B =
         Text Item (std. category TATX), C = Packing Item
        </td>
       </tr>
       <tr>
        <td>Business Data table</td>
        <td>VBKD</td>
       </tr>
       <tr>
        <td>Schedule Line Allowed — unchecked item categories</td>
        <td>G2N, L2N, KMN, WKN, PVN</td>
       </tr>
       <tr>
        <td>Item Relevant for Delivery — applicable categories</td>
        <td>TATX (Text Item), TAW (Value Item) only</td>
       </tr>
       <tr>
        <td>Returns — checked item categories</td>
        <td>REN, G2N, KRN, KAN, TASG, NLRN, NCRN</td>
       </tr>
       <tr>
        <td>Credit Active — checked item categories (12 of 36)</td>
        <td>
         TAN, L2N, KAN, LPN, TAS, TAB, TAK, TAC, TAD, DLN, TAQ, TAX
        </td>
       </tr>
       <tr>
        <td>Determine Cost condition type</td>
        <td>VPRS</td>
       </tr>
       <tr>
        <td>Live troubleshooting worked example</td>
        <td>
         Sales Org M300, billing docs 90040050/90040051 — missing number
         range interval 14 for company code M300; created interval,
         re-released via VF02
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture opened the Item Category Details screen (<span
       className="tcode"
      >VOV7</span
      >) and worked through eight controls.
      <strong>Item Type</strong> classifies the line item as Standard, Value
      (<code>A</code>), Text (<code>B</code>), or Packing (<code>C</code>),
      with worked definitions and examples for each.
      <strong>Business Item</strong> governs whether Business Data
      (Incoterms, Payment Terms — table <code>VBKD</code>, copied from the
      Customer Master's Sales and Billing tabs) can be edited at item level.
      <strong>Schedule Line Allowed</strong> determines whether an item gets
      a Schedule Lines tab at all, unchecked for document types with nothing
      to physically schedule (Credit/Debit Memo Request, Quantity/Value
      Contract, Item Proposal).
      <strong>Item Relevant for Delivery</strong> applies only to Text and
      Value Items. <strong>Returns</strong> flips the goods-movement
      direction and reverses the accounting entry, with its standard checked
      item categories listed (REN, G2N, KRN, KAN, TASG, NLRN, NCRN).
      <strong>Weight/Volume Relevant</strong> controls whether weight is
      calculated and shown on the Shipping tab.
      <strong>Credit Active</strong> controls whether an item's value feeds
      Credit Management — only 12 of the 36 standard item categories carry
      this checked. <strong>Determine Cost</strong>
      controls whether cost condition type VPRS appears on the Conditions
      tab. The lecture closed with a live troubleshooting session resolving
      an "error in account determination" flag, which traced back to a
      missing billing-document number range interval for the company code
      rather than an account-determination setting itself.
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
       >Item Type is the item-level mirror of SD Document
        Category</strong
       >
       — both are the foundational classification field their respective
       object (item vs. document) is built around
      </li>
      <li>
       <strong
       >Business Item vs. Schedule Line Allowed control two different
        tabs</strong
       >
       — don't confuse "can business data differ at item level" with "does
       this item even get scheduled"
      </li>
      <li>
       <strong
       >Returns checked = inbound + reversed accounting, in one
        field</strong
       >
       — a single checkbox carries both effects at once
      </li>
      <li>
       <strong
       >Only a minority of item categories are Credit Active</strong
       >
       — 12 of 36 — worth remembering when a client asks why a particular
       line item isn't affecting a customer's credit exposure
      </li>
      <li>
       <strong
       >"Account determination" errors aren't always about account
        determination</strong
       >
       — today's live fix was a missing number range interval; always
       verify the actual root message before assuming which configuration
       area is at fault
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> continuing further into the remaining
      Item Category controls.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 53 Notes — Item Category Controls, Part 1 🎓
   </p>
  </div>
 );
};

export default SalesDocument53;
