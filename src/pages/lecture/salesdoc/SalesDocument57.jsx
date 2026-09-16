const SalesDocument57 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-green">
    <h1>🔍 Lecture 57 — Item Category Determination (VOV4) In Detail</h1>
    <p>
     SAP SD | The full VOV4 determination logic worked through four
     scenarios: by Sales Document Type, by Item Category Group, by
     Higher-Level Item Category (Free Goods, BOM), and by Item Usage
     (Automatic Free Goods, Material Determination, Cross-Selling)
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class finished all the Item Category controls and introduced
      <strong>Item Category Determination</strong> (<span className="tcode"
      >VOV4</span
      >): the system determines the default item category for a line item
      from a combination of four fields —
      <strong>Sales Document Type</strong>,
      <strong>Item Category Group</strong>, <strong>Item Usage</strong>, and
      <strong>Higher-Level Item Category</strong>. Today works through this
      combination as four separate scenarios, one field at a time, each with
      its own worked examples.
     </div>
    </div>

    {/* <!-- Section 1: Scenario 1 - Sales Document Type --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Scenario 1 — Determination Based on
      Sales Document Type
     </h2>
     <div className="callout teal">
      💡 In this scenario, only the
      <strong>Sales Document Type</strong> changes —
      <strong>Item Category Group is <code>NORM</code></strong> for every
      row, and <strong>Item Usage</strong> and
      <strong>Higher-Level Item Category</strong> stay blank throughout.
      Across the roughly 20 standard sales document types, this alone is
      enough to determine the default item category.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sales Document Type</th>
        <th>Default Item Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>IN</code> — Inquiry</td>
        <td><code>AFN</code></td>
       </tr>
       <tr>
        <td><code>QT</code> — Quotation</td>
        <td><code>AGN</code></td>
       </tr>
       <tr>
        <td><code>OR</code> — Standard Order</td>
        <td><code>TAN</code></td>
       </tr>
       <tr>
        <td><code>RO</code> — Rush Order</td>
        <td><code>TAN</code></td>
       </tr>
       <tr>
        <td><code>CS</code> — Cash Sale</td>
        <td><code>BVN</code></td>
       </tr>
       <tr>
        <td><code>RE</code> — Returns</td>
        <td><code>REN</code></td>
       </tr>
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
        <td><code>FD</code> — Free-of-Charge Delivery</td>
        <td><code>KLN</code></td>
       </tr>
       <tr>
        <td>
         Additional free-of-charge-related document type(s) — codes
         unclear in audio
        </td>
        <td><code>KLN</code></td>
       </tr>
       <tr>
        <td><code>KB</code> — Consignment Fill-Up</td>
        <td><code>KBN</code></td>
       </tr>
       <tr>
        <td><code>CI</code> — Consignment Issue</td>
        <td><code>KEN</code></td>
       </tr>
       <tr>
        <td><code>CONR</code> — Consignment Returns</td>
        <td><code>KRN</code></td>
       </tr>
       <tr>
        <td><code>CP</code> — Consignment Pick-Up</td>
        <td><code>KAN</code></td>
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
        <td><code>WK2</code> — Value Contract (Material-Related)</td>
        <td><code>WKN</code></td>
       </tr>
       <tr>
        <td><code>DS</code> — Scheduling Agreement</td>
        <td><code>LPN</code></td>
       </tr>
       <tr>
        <td><code>PV</code> — Item Proposal</td>
        <td><code>PVN</code></td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Audio quality note:</strong> two of the document-type codes
      feeding into <code>KLN</code>, and the exact code for
      <code>RK</code> possibly also generating a paired <code>L2N</code>
      debit line, were unclear in this recording. The item categories
      themselves (right-hand column) are consistent with codes confirmed in
      earlier lectures; confirm the exact document-type codes against the
      system if in doubt.
     </div>
     <div className="callout blue">
      📖 <strong>Custom document types work the same way:</strong> for this
      course's custom order type <code>PPOR</code>, the same row shape
      applies — <code>PPOR</code> + <code>NORM</code> + blank usage + blank
      higher level → <code>P10</code>, exactly as assigned in
      <span className="tcode">VOV4</span> in an earlier lecture.
     </div>
    </div>

    {/* <!-- Section 2: Scenario 2 - Item Category Group --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Scenario 2 — Determination Based on
      Item Category Group
     </h2>
     <div className="callout orange">
      💡 The <strong>Item Category Group</strong> field lives on the
      <strong>material master, Sales: Sales Org. 2 view</strong>. In this
      scenario the Sales Document Type is held constant (<code>OR</code>)
      and only the Item Category Group changes — Item Usage and Higher-Level
      Item Category stay blank.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Category Group</th>
        <th>Material / Scenario</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>NORM</code></td>
        <td>Standard material</td>
       </tr>
       <tr>
        <td><code>BANS</code></td>
        <td>Third-Party material</td>
       </tr>
       <tr>
        <td><code>BANC</code></td>
        <td>Individual Purchase Order (IPO) material</td>
       </tr>
       <tr>
        <td><code>0001</code></td>
        <td>Make-to-Order material</td>
       </tr>
       <tr>
        <td><code>0002</code></td>
        <td>Configurable material</td>
       </tr>
       <tr>
        <td><code>ERLA</code></td>
        <td>BOM Header Pricing — main item material</td>
       </tr>
       <tr>
        <td><code>LUMF</code></td>
        <td>BOM Item Pricing — main item material</td>
       </tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sales Doc Type</th>
        <th>Item Category Group</th>
        <th>Usage</th>
        <th>Higher-Level</th>
        <th>Default Item Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>OR</code></td>
        <td><code>NORM</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>TAN</code></td>
       </tr>
       <tr>
        <td><code>OR</code></td>
        <td><code>BANS</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>TAS</code></td>
       </tr>
       <tr>
        <td><code>OR</code></td>
        <td><code>BANC</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>TAB</code></td>
       </tr>
       <tr>
        <td><code>OR</code></td>
        <td><code>0001</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>TAK</code></td>
       </tr>
       <tr>
        <td><code>OR</code></td>
        <td><code>0002</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>TAC</code></td>
       </tr>
       <tr>
        <td><code>OR</code></td>
        <td><code>ERLA</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>TAQ</code></td>
       </tr>
       <tr>
        <td><code>OR</code></td>
        <td><code>LUMF</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>TAP</code></td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 <strong>Correction:</strong> the recording initially states the
      result for <code>OR</code> + <code>BANC</code> as "<code>TAP</code>" —
      but <code>TAP</code> is already established (this lecture and Lecture
      56) as the BOM Item Pricing main item category. During the live system
      walkthrough moments later, the instructor corrects this and confirms
      <code>OR</code> + <code>BANC</code> → <code>TAB</code>, matching
      <code>TAB</code>'s established identity as the IPO item category from
      Lecture 53. The table above reflects the corrected value.
     </p>
    </div>

    {/* <!-- Section 3: Scenario 3 - Higher-Level Item Category --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Scenario 3 — Determination Based on
      Higher-Level Item Category
     </h2>
     <div className="callout purple">
      💡 The system considers <strong>Higher-Level Item Category</strong>
      only when it is determining the item category for a
      <strong>sub-item</strong>. Four scenarios produce sub-items:
      <strong>Free Goods</strong>, <strong>BOM</strong>,
      <strong>Material Determination</strong>, and
      <strong>Cross-Selling</strong> — of these, Manual Free Goods and the
      two BOM pricing modes are determined purely by higher-level item
      category (no item usage involved); Material Determination and
      Cross-Selling additionally need Item Usage, and are covered under
      Scenario 4.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Item</th>
        <th>Determination</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Manual Free Goods</td>
        <td>Main item (X material)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + no usage + no higher level
        </td>
        <td><code>TAN</code></td>
       </tr>
       <tr>
        <td>Manual Free Goods</td>
        <td>Sub-item (Y material, free)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + no usage + Higher Level =
         <code>TAN</code>
        </td>
        <td><code>TANN</code></td>
       </tr>
       <tr>
        <td>BOM Header Pricing</td>
        <td>Main item (Computer)</td>
        <td>
         <code>OR</code> + <code>ERLA</code> + no usage + no higher level
        </td>
        <td><code>TAQ</code></td>
       </tr>
       <tr>
        <td>BOM Header Pricing</td>
        <td>Sub-item (components)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + no usage + Higher Level =
         <code>TAQ</code>
        </td>
        <td><code>TAE</code></td>
       </tr>
       <tr>
        <td>BOM Item Pricing</td>
        <td>Main item (Computer)</td>
        <td>
         <code>OR</code> + <code>LUMF</code> + no usage + no higher level
        </td>
        <td><code>TAP</code></td>
       </tr>
       <tr>
        <td>BOM Item Pricing</td>
        <td>Sub-item (components)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + no usage + Higher Level =
         <code>TAP</code>
        </td>
        <td><code>TAN</code></td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 <strong>Correction:</strong> the Manual Free Goods sub-item result
      is rendered in this recording only as "<code>TNN</code>" — this is
      corrected here to <code>TANN</code>, consistent with the Free Goods
      item category already established in Lecture 55 (Pricing =
      <code>B</code>, condition type <code>R100</code>).
     </p>
     <div className="callout red">
      ⚠️ <strong>Discrepancy flagged:</strong> this lecture states twice,
      clearly, that the BOM Item Pricing component item category is
      <code>TAN</code>. Lecture 56, however, established the BOM Item
      Pricing component item category as <code>TAL</code>. Both values are
      recorded here as spoken in their respective sessions — confirm the
      correct code against the system before using it in a client
      configuration.
     </div>
    </div>

    {/* <!-- Section 4: Scenario 4 - Item Usage --> */}
    <div className="card red">
     <h2>
      <span className="badge">4</span> Scenario 4 — Determination Based on
      Item Usage
     </h2>
     <div className="callout red">
      💡 The system considers <strong>Item Usage</strong> whenever a
      sub-item is
      <strong
      >automatically determined into the sales document, other than via
       BOM</strong
      >. Three scenarios apply: <strong>Automatic Free Goods</strong>,
      <strong>Material Determination</strong> (both header-pricing and
      item-pricing variants), and <strong>Cross-Selling</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Usage Code</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>FRE</code></td>
        <td>Automatic Free Goods</td>
       </tr>
       <tr>
        <td><code>PSHP</code></td>
        <td>Material Determination — Header Pricing, Main Item</td>
       </tr>
       <tr>
        <td><code>PSCL</code></td>
        <td>Material Determination — Header Pricing, Sub-Item</td>
       </tr>
       <tr>
        <td><code>PSA1</code></td>
        <td>Material Determination — Item Pricing, Main Item</td>
       </tr>
       <tr>
        <td><code>PSA2</code></td>
        <td>Material Determination — Item Pricing, Sub-Item</td>
       </tr>
       <tr>
        <td><code>CSCL</code></td>
        <td>Cross-Selling (additional/suggested product)</td>
       </tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Item</th>
        <th>Determination</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Automatic Free Goods</td>
        <td>Main item (X material)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + no usage + no higher level
        </td>
        <td><code>TAN</code></td>
       </tr>
       <tr>
        <td>Automatic Free Goods</td>
        <td>Sub-item (free material)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + Usage <code>FRE</code> +
         Higher Level = <code>TAN</code>
        </td>
        <td><code>TANN</code></td>
       </tr>
       <tr>
        <td>Material Determination — Header Pricing</td>
        <td>Main item (X material)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + Usage <code>PSHP</code> +
         no higher level
        </td>
        <td><code>TAX</code></td>
       </tr>
       <tr>
        <td>Material Determination — Header Pricing</td>
        <td>Sub-item (Y substitute material)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + Usage <code>PSCL</code> +
         Higher Level = <code>TAX</code>
        </td>
        <td><code>TAPS</code></td>
       </tr>
       <tr>
        <td>Material Determination — Item Pricing</td>
        <td>Main item (X material)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + Usage <code>PSA1</code> +
         no higher level
        </td>
        <td><code>TAPA</code></td>
       </tr>
       <tr>
        <td>Material Determination — Item Pricing</td>
        <td>Sub-item (Y substitute, priced)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + Usage <code>PSA2</code> +
         Higher Level = <code>TAPA</code>
        </td>
        <td><code>TAN</code></td>
       </tr>
       <tr>
        <td>Cross-Selling</td>
        <td>Main item</td>
        <td>
         <code>OR</code> + <code>NORM</code> + no usage + no higher level
        </td>
        <td><code>TAN</code></td>
       </tr>
       <tr>
        <td>Cross-Selling</td>
        <td>Sub-item (suggested product)</td>
        <td>
         <code>OR</code> + <code>NORM</code> + Usage <code>CSCL</code> +
         Higher Level = <code>TAN</code>
        </td>
        <td><code>TAN</code></td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖
      <strong
      >Header pricing vs. item pricing, in Material Determination
       too:</strong
      >
      the naming mirrors BOM. In <strong>Header Pricing</strong> mode the
      original material (X) keeps the price (<code>TAX</code>) and the
      substituted material (Y) is unpriced (<code>TAPS</code>). In
      <strong>Item Pricing</strong> mode the roles flip — the main item
      (<code>TAPA</code>) carries no price, while the substituted material
      that actually gets delivered is priced using the standard
      <code>TAN</code> item category.
     </div>
     <div className="callout gold">
      📖 <strong>Cross-Selling, in plain terms:</strong> when a customer
      orders the main item, the system suggests an additional product
      alongside it on its own line — both the main item and the suggested
      item use the standard <code>TAN</code> item category; only the
      determination path differs (the suggested item is reached via Usage
      <code>CSCL</code> plus the main item as its Higher-Level Item
      Category).
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
         What four fields combine to determine the default item category
         in VOV4?
        </td>
        <td>
         Sales Document Type, Item Category Group, Item Usage, and
         Higher-Level Item Category
        </td>
       </tr>
       <tr>
        <td>
         In Scenario 1, which fields stay constant and which one varies?
        </td>
        <td>
         Item Category Group (NORM), Item Usage (blank), and Higher-Level
         Item Category (blank) stay constant; only the Sales Document
         Type varies across the ~20 standard document types
        </td>
       </tr>
       <tr>
        <td>
         Where does the Item Category Group field live, and what is its
         standard value?
        </td>
        <td>
         Material master, Sales: Sales Org. 2 view; the standard value is
         NORM, with BANS (Third-Party), BANC (IPO), 0001 (Make-to-Order),
         0002 (Configurable), ERLA (BOM Header Pricing), and LUMF (BOM
         Item Pricing) as scenario-specific overrides
        </td>
       </tr>
       <tr>
        <td>
         When does the system consider Higher-Level Item Category at all?
        </td>
        <td>
         Only when determining the item category for a sub-item — the
         four scenarios that produce sub-items are Free Goods, BOM,
         Material Determination, and Cross-Selling
        </td>
       </tr>
       <tr>
        <td>
         What item category does a Manual Free Goods sub-item resolve to,
         and via what higher-level value?
        </td>
        <td>
         TANN, determined via OR + NORM + no usage + Higher-Level Item
         Category = TAN (the main item's category)
        </td>
       </tr>
       <tr>
        <td>When does the system consider Item Usage?</td>
        <td>
         Whenever a sub-item is automatically determined into the sales
         document by a mechanism other than BOM — specifically Automatic
         Free Goods, Material Determination, and Cross-Selling
        </td>
       </tr>
       <tr>
        <td>
         What are the six item usage codes covered, and what does each
         represent?
        </td>
        <td>
         FRE (Automatic Free Goods), PSHP (Material Determination Header
         Pricing, main item), PSCL (Material Determination Header
         Pricing, sub-item), PSA1 (Material Determination Item Pricing,
         main item), PSA2 (Material Determination Item Pricing,
         sub-item), CSCL (Cross-Selling)
        </td>
       </tr>
       <tr>
        <td>
         In Material Determination Header Pricing, which item keeps the
         price and what item categories are involved?
        </td>
        <td>
         The original (main) material keeps the price under item category
         TAX; the substituted material is unpriced under item category
         TAPS
        </td>
       </tr>
       <tr>
        <td>
         In Material Determination Item Pricing, which item keeps the
         price and what item categories are involved?
        </td>
        <td>
         The substituted material keeps the price, using the standard
         item category TAN; the main item (TAPA) carries no price
        </td>
       </tr>
       <tr>
        <td>
         In Cross-Selling, what item categories are used for the main
         item and the suggested item, and how is the suggested item
         determined?
        </td>
        <td>
         Both use TAN; the suggested item is reached via Item Usage CSCL
         combined with the main item's category (TAN) as its Higher-Level
         Item Category
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
        <td><span className="tcode">VOV4</span></td>
        <td>
         Assign Item Category / Item Category Determination — the
         transaction covered in full detail today across all four
         determination scenarios
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MM02</span></td>
        <td>
         Change Material — used to check/set the Item Category Group
         field on the material master's Sales: Sales Org. 2 view for the
         various scenarios
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used throughout to walk through the live
         system determination results for each scenario
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
        <td>Item Category Determination combination</td>
        <td>
         Sales Document Type + Item Category Group + Item Usage +
         Higher-Level Item Category → default Item Category
        </td>
       </tr>
       <tr>
        <td>Item Category Group values</td>
        <td>
         NORM (Standard); BANS (Third-Party); BANC (IPO); 0001
         (Make-to-Order); 0002 (Configurable); ERLA (BOM Header Pricing);
         LUMF (BOM Item Pricing)
        </td>
       </tr>
       <tr>
        <td>Item Category Group field location</td>
        <td>Material master → Sales: Sales Org. 2 view</td>
       </tr>
       <tr>
        <td>Scenarios needing Higher-Level Item Category</td>
        <td>
         Free Goods, BOM (both pricing modes), Material Determination,
         Cross-Selling — only when determining a sub-item's category
        </td>
       </tr>
       <tr>
        <td>Scenarios needing Item Usage</td>
        <td>
         Automatic Free Goods, Material Determination (Header/Item
         Pricing), Cross-Selling — sub-items determined automatically
         other than via BOM
        </td>
       </tr>
       <tr>
        <td>Item Usage codes</td>
        <td>FRE, PSHP, PSCL, PSA1, PSA2, CSCL</td>
       </tr>
       <tr>
        <td>Material Determination item categories</td>
        <td>
         Header Pricing: TAX (main, priced) / TAPS (sub, unpriced); Item
         Pricing: TAPA (main, unpriced) / TAN (sub, priced)
        </td>
       </tr>
       <tr>
        <td>Cross-Selling item categories</td>
        <td>
         TAN for both the main item and the suggested item; suggested
         item reached via Usage CSCL + Higher-Level = TAN
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture worked through
      <strong>Item Category Determination</strong> (<span className="tcode"
      >VOV4</span
      >) in full, across four scenarios. <strong>Scenario 1</strong> showed
      determination driven purely by <strong>Sales Document Type</strong>
      (Item Category Group fixed at NORM, Usage and Higher-Level blank)
      across roughly 20 standard document types, from Inquiry (AFN) and
      Quotation (AGN) through Standard Order (TAN), Cash Sale (BVN), Returns
      (REN), Credit/Debit Memo Requests (G2N/L2N), the Consignment family
      (KBN/KEN/KRN/KAN), Contracts (KMN/WKN), Scheduling Agreement (LPN),
      and Item Proposal (PVN).
      <strong>Scenario 2</strong> fixed the document type at OR and varied
      the <strong>Item Category Group</strong> instead — NORM, BANS, BANC,
      0001, 0002, ERLA, and LUMF each mapping to a different default item
      category (TAN, TAS, TAB, TAK, TAC, TAQ, TAP respectively), with a live
      correction of an initial BANC → TAP misstatement to the confirmed BANC
      → TAB. <strong>Scenario 3</strong> covered
      <strong>Higher-Level Item Category</strong>, used only when
      determining a sub-item's category — worked for Manual Free Goods (main
      TAN, sub TANN) and both BOM pricing modes (Header: TAQ main / TAE sub;
      Item: TAP main / TAN sub, per this session, though this conflicts with
      a prior lecture's TAL). <strong>Scenario 4</strong> covered
      <strong>Item Usage</strong>, needed whenever a sub-item is
      automatically determined other than via BOM — Automatic Free Goods
      (usage FRE), Material Determination in both its Header Pricing
      (PSHP/PSCL: TAX main, TAPS sub) and Item Pricing (PSA1/PSA2: TAPA
      main, TAN sub) forms, and Cross-Selling (usage CSCL, TAN for both main
      and suggested item).
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Only one field changes per scenario</strong> — each of the
       four determination scenarios holds three of the four fields constant
       and lets exactly one vary, which is the cleanest way to reason about
       any VOV4 row encountered in practice
      </li>
      <li>
       <strong
       >Higher-Level Item Category and Item Usage both exist only for
        sub-items</strong
       >
       — neither field plays any role in determining a document's
       main/header item category
      </li>
      <li>
       <strong
       >Header pricing vs. item pricing is the same pattern in two
        different scenarios</strong
       >
       — BOM (Higher-Level driven) and Material Determination (Usage
       driven) both flip which side — main item or sub-item — carries the
       price, using an analogous main/sub item category pair each time
      </li>
      <li>
       <strong
       >Verify the BOM Item Pricing component code against the
        system</strong
       >
       — this lecture states TAN where Lecture 56 stated TAL; don't carry
       either into a client configuration without confirming it live
      </li>
      <li>
       <strong
       >Cross-Selling is the simplest of the four sub-item
        scenarios</strong
       >
       — both main and suggested item reuse the plain TAN item category;
       only the usage code and higher-level reference distinguish how the
       suggested line is reached
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Schedule Line Categories.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 57 Notes — Item Category Determination (VOV4) In Detail 🎓
   </p>
  </div>
 );
};

export default SalesDocument57;
