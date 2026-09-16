const SalesDocument64 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-purple">
    <h1>🧾 Lecture 64 — Billing Type Controls (VOF8)</h1>
    <p>
     SAP SD | Standard billing types and a custom build (PPF2), then every
     VOF8 control in depth — Number Range, SD Document Category (accounting
     entries), Posting Block, Statistics, FI Accounting Document Type,
     Invoice List Type (with a full VF24 worked demo), Relevant for Rebate,
     Cancel Billing Type, Account Determination Procedure, and Document
     Pricing Procedure
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class finished
      <strong>Delivery Item Categories</strong> (<span className="tcode"
      >0VLP</span
      >) and Delivery Item Category Determination (<span className="tcode"
      >0184</span
      >). Today moves to the last stop before Pricing:
      <strong>Billing Type Controls</strong> (<span className="tcode"
      >VOF8</span
      >).
     </div>
    </div>

    {/* <!-- Section 1: Billing Types Introduced --> */}
    <div className="card teal">
     <h2><span className="badge">1</span> Billing Types — Introduced</h2>
     <div className="callout teal">
      💡 T-code <span className="tcode">VOF8</span>. SPRO path: Sales and
      Distribution → Billing → Billing Documents → Define Billing Types.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Standard Billing Type</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Standard Invoice</td>
        <td><code>F2</code></td>
       </tr>
       <tr>
        <td>Cash Sales</td>
        <td><code>BV</code></td>
       </tr>
       <tr>
        <td>Returns (Credit Memo)</td>
        <td><code>RA</code></td>
       </tr>
       <tr>
        <td>Credit Memo</td>
        <td><code>G2</code></td>
       </tr>
       <tr>
        <td>Debit Memo</td>
        <td><code>L2</code></td>
       </tr>
       <tr>
        <td>Invoice Cancellation</td>
        <td><code>S1</code></td>
       </tr>
       <tr>
        <td>Returns Invoice / Credit Memo Cancellation</td>
        <td><code>S2</code></td>
       </tr>
       <tr>
        <td>Pro Forma Invoice — Order Related</td>
        <td><code>F5</code></td>
       </tr>
       <tr>
        <td>Pro Forma Invoice — Delivery Related</td>
        <td><code>F8</code></td>
       </tr>
       <tr>
        <td>Intercompany Invoice</td>
        <td><code>IV</code></td>
       </tr>
       <tr>
        <td>Intercompany Credit Memo</td>
        <td><code>IG</code></td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 <strong>Audio quality note:</strong> the Returns credit memo
      billing type is rendered in this recording as "<code>RA</code>."
      Confirm against the system — the standard SAP value for this scenario
      is commonly <code>RE</code> in many system configurations, so this may
      be a mis-hearing; it is recorded here exactly as stated.
     </p>

     <h3>Worked Demonstration — Custom Billing Type</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VOF8</span> → copy the standard
       <code>F2</code> billing type into a new custom code,
       <strong><code>PPF2</code></strong
       >. Answer <strong>Yes</strong>
       to "Is this entry also relevant for Copy Control?" Save.
      </div>
      <div className="step">
       A custom billing type alone doesn't get used automatically — go to
       <strong>Sales Document Type Controls</strong> (<span
        className="tcode"
       >VOV8</span
       >) and mention <code>PPF2</code> in <strong>both</strong> places:
       the <strong>Delivery-Related Billing Type</strong> field and the
       <strong>Order-Related Billing Type</strong> field. Save.
      </div>
     </div>
     <p className="note-text">
      📌 Mentioning the custom billing type in only one of the two VOV8
      fields is not enough — both the delivery-related and order-related
      billing type fields need it, since different document flows
      (order-related vs. delivery-related billing) reference different
      fields.
     </p>
    </div>

    {/* <!-- Section 2: Number Range & Item Number Increment --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Number Range &amp; Item Number
      Increment
     </h2>
     <div className="callout orange">
      💡 Billing types carry
      <strong>only an Internal Number Range</strong> — there is
      <strong>no external number range</strong> for billing documents at
      all.
     </div>
     <div className="callout blue">
      📖 <strong>Why no external number allowed:</strong> it is a
      <strong>legal requirement</strong> that billing document numbers be
      assigned strictly in sequence, with no gaps — allowing external
      (manually entered) numbers would break that guarantee.
     </div>
     <div className="callout gold">
      📖 <strong>T-code:</strong> <span className="tcode">VN01</span> — the
      same transaction used for Sales and Delivery document number ranges.
      The standard internal number range key for billing is
      <strong><code>19</code></strong
      >.
     </div>
     <p className="note-text">
      📌 The exact number series quoted for range <code>19</code>
      was unclear in this recording; confirm the from/to values against the
      system if needed.
     </p>
     <div className="callout purple">
      💡 <strong>Item Number Increment:</strong> controls how the line item
      number is incremented within the billing document, same concept as
      already seen on delivery types.
     </div>
    </div>

    {/* <!-- Section 3: SD Document Category --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> SD Document Category — Accounting
      Entry Control
     </h2>
     <div className="callout purple">
      💡 <strong>SD Document Category</strong> controls the core functioning
      of the billing document — specifically, what
      <strong>accounting entry</strong> it generates.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>SD Document Category</th>
        <th>Accounting Entry</th>
        <th>Billing Types</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td><code>M</code></td>
        <td>Customer Account Debit → Revenue Account Credit</td>
        <td><code>F2</code>, <code>L2</code> (Debit Memo)</td>
       </tr>
       <tr>
        <td><code>O</code></td>
        <td>Revenue Account Debit → Customer Account Credit</td>
        <td><code>G2</code> (Credit Memo), <code>RA</code> (Returns)</td>
       </tr>
       <tr>
        <td><code>U</code></td>
        <td>No accounting entry generated</td>
        <td><code>F5</code>, <code>F8</code> (Pro Forma Invoices)</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖 <strong>Why Pro Forma invoices don't post accounting:</strong> a
      Pro Forma Invoice is purely a preview/reference document, often needed
      for customs or advance-payment purposes — it isn't a real billing
      event, so SD Document Category <code>U</code> ensures it never touches
      the books.
     </div>
    </div>

    {/* <!-- Section 4: Posting Block --> */}
    <div className="card red">
     <h2><span className="badge">4</span> Posting Block</h2>
     <div className="callout red">
      💡 <strong>Posting Block</strong>, when checked, stops the system from
      generating the accounting document <strong>automatically</strong> when
      the invoice is created — the user must post it manually afterward.
     </div>
     <div className="callout blue">
      📖 <strong>Two ways to post manually:</strong>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Method</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Change mode of the invoice</td>
        <td>
         Open the invoice in change mode and click
         <strong>Release</strong>
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VFX3</span></td>
        <td>
         Dedicated transaction to release/post invoice values into
         accounting manually, without opening each invoice individually
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 5: Statistics --> */}
    <div className="card gold">
     <h2><span className="badge">5</span> Statistics</h2>
     <div className="callout gold">
      💡 <strong>Statistics</strong> controls whether invoice values are
      updated into
      <strong>LIS (Logistics Information System)</strong> reports — SAP's
      management reporting tool. If checked, the update happens; if not, it
      doesn't.
     </div>
    </div>

    {/* <!-- Section 6: FI Accounting Document Type --> */}
    <div className="card pink">
     <h2>
      <span className="badge">6</span> Document Type (FI Accounting Document
      Type)
     </h2>
     <div className="callout pink">
      💡 The standard <strong>FI Accounting Document Type</strong> is
      <strong><code>RV</code></strong
      >, and it applies by default — nothing needs to be maintained here for
      standard processing.
     </div>
     <div className="callout blue">
      📖 <strong>Where to see it:</strong> open a created invoice, go to
      Accounting → the header data of the accounting document shows
      <code>RV</code> by default.
     </div>
     <div className="callout purple">
      📖 <strong>Creating a custom FI Document Type:</strong> this is
      technically an FI-side configuration (T-code
      <span className="tcode">OBA7</span>), not SD, but it's worth knowing
      the flow — copy <code>RV</code> into a custom code (e.g.
      <code>PV</code>), save. If a non-<code>RV</code> document type is
      needed, it must then be mentioned on the billing type's Document Type
      field. Creating a new invoice afterward shows the custom code
      (<code>PV</code>) in the accounting document's header data instead of
      <code>RV</code>.
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the T-code for defining FI Document
      Types is rendered in the recording as "<code>OBAS7</code>" — corrected
      to <span className="tcode">OBA7</span>, the standard SAP transaction
      for this configuration.
     </p>
    </div>

    {/* <!-- Section 7: Invoice List Type --> */}
    <div className="card indigo">
     <h2><span className="badge">7</span> Invoice List Type</h2>
     <div className="callout indigo">
      💡 The standard <strong>Invoice List Type</strong> is
      <strong><code>LR</code></strong
      >. An <strong>Invoice List</strong> means consolidating multiple
      individual invoices into a single document sent to the payer — useful
      when one payer needs to receive several invoices together rather than
      one at a time.
     </div>
     <div className="callout blue">
      📖 T-code to create an Invoice List:
      <span className="tcode">VF24</span>.
     </div>

     <h3>Worked Demonstration — Building an Invoice List</h3>
     <div className="stepper">
      <div className="step">
       Create a factory calendar with
       <strong>all working days unchecked</strong>, then go to Special
       Rules and add a specific date (e.g. 31st August) as a valid billing
       date for the invoice list.
      </div>
      <div className="step">
       Maintain this calendar in the <strong>Customer Master</strong>'s
       <strong>Invoicing List Dates</strong>
       field (Billing tab).
      </div>
      <div className="step">
       Create 3–4 separate orders → deliveries → invoices for that same
       customer.
      </div>
      <div className="step">
       <span className="tcode">VF24</span> → mention the month and date,
       the Sales Organization, and Billing Type <code>LR</code> → Execute.
       All eligible invoices for that customer appear in the list.
      </div>
      <div className="step">
       Select all the invoices and run the
       <strong>Collective</strong> action — the system consolidates them
       into a single Invoice List document sent to the payer.
      </div>
     </div>
    </div>

    {/* <!-- Section 8: Relevant for Rebate & Cancel Billing Type --> */}
    <div className="card brown">
     <h2>
      <span className="badge">8</span> Relevant for Rebate &amp; Cancel
      Billing Type
     </h2>
     <div className="callout brown">
      💡 <strong>Relevant for Rebate:</strong> one of the prerequisites for
      the system to process rebates against a billing document.
     </div>
     <div className="callout gold">
      💡 <strong>Cancel Billing Type:</strong> determines which billing type
      the system uses when the invoice is <strong>cancelled</strong>.
      Example: cancelling an <code>F2</code> invoice determines billing type
      <code>S1</code>, since that's what's maintained in <code>F2</code>'s
      own Cancel Billing Type field.
     </div>
    </div>

    {/* <!-- Section 9: Account Determination Procedure --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">9</span> Account Determination Procedure
     </h2>
     <div className="callout cyan">
      💡 The standard <strong>Account Determination Procedure</strong> is
      <strong><code>KOFI00</code></strong
      >.
     </div>
     <div className="callout blue">
      📖 <strong>What it does:</strong> helps the system determine the
      correct <strong>Revenue G/L Accounts</strong> while posting invoice
      values into accounting.
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> this value is rendered in the
      recording as "<code>KYFI00</code>" — corrected to <code>KOFI00</code>,
      the standard SAP account determination procedure name.
     </p>
    </div>

    {/* <!-- Section 10: Document Pricing Procedure --> */}
    <div className="card teal">
     <h2>
      <span className="badge">10</span> Document Pricing Procedure (Billing
      Type Level)
     </h2>
     <div className="callout teal">
      💡 The same-named field also exists on Sales Document Type Controls
      (<span className="tcode">VOV8</span>) — there, it helps determine the
      pricing procedure for the <strong>sales document</strong>. Here, on
      the billing type, it helps determine the pricing procedure for the
      <strong>billing document</strong> instead.
     </div>
     <div className="callout blue">
      📖 <strong>Normal behavior — copy, don't re-determine:</strong> in the
      standard process (Order → Delivery → Invoice), the invoice does
      <strong>not</strong>
      determine its own pricing procedure — it simply
      <strong>copies</strong> the pricing procedure forward from the sales
      order. The billing type's Document Pricing Procedure field is normally
      irrelevant.
     </div>
     <div className="callout gold">
      📖
      <strong
      >The two exception scenarios where pricing procedure IS determined
       directly in the invoice:</strong
      >
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Why</th>
        <th>Determination Order</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Delivery Without Order Reference</td>
        <td>No sales order exists to copy the pricing procedure from</td>
        <td>
         First check Document Pricing Procedure on the
         <strong>Billing Type</strong>; if blank, fall back to Document
         Pricing Procedure on
         <strong>Default Order Type <code>DL</code></strong> (<span
          className="tcode"
         >VOV8</span
         >)
        </td>
       </tr>
       <tr>
        <td>Stock Transport Order (STO)</td>
        <td>
         Same underlying reason — no standard sales order in the chain
        </td>
        <td>
         Same fallback logic: Billing Type first, then Default Order Type
         <code>DL</code>
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout purple">
      📖
      <strong
      >Full path for pricing procedure determination in general:</strong
      >
      Sales Area + Document Pricing Procedure + Customer Pricing Procedure
      together determine the pricing procedure — the point being made here
      is only about <em>where</em> the Document Pricing Procedure value
      itself comes from, in these two exception cases.
     </div>
     <div className="callout green">
      ✅ This reuses the same
      <strong>Default Order Type <code>DL</code></strong> mechanism already
      established in Lecture 62 for determining Movement Type on a delivery
      without order reference — here it does the analogous job for Pricing
      Procedure on the corresponding invoice.
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
         What are the standard billing types for Standard Invoice, Cash
         Sales, Credit Memo, and Debit Memo?
        </td>
        <td>
         F2 (Standard Invoice), BV (Cash Sales), G2 (Credit Memo), L2
         (Debit Memo)
        </td>
       </tr>
       <tr>
        <td>
         After copying a custom billing type in VOF8, what additional
         step is needed before it's actually used?
        </td>
        <td>
         It must be assigned in Sales Document Type Controls (VOV8), in
         both the Order-Related Billing Type field and the
         Delivery-Related Billing Type field
        </td>
       </tr>
       <tr>
        <td>
         Why does a billing type have only an internal number range, with
         no external number option?
        </td>
        <td>
         It's a legal requirement that billing document numbers be
         assigned strictly in sequence with no gaps; allowing external,
         manually entered numbers would break that guarantee
        </td>
       </tr>
       <tr>
        <td>
         What does SD Document Category control, and what are its three
         values?
        </td>
        <td>
         The accounting entry the billing document generates; M =
         Customer Debit/Revenue Credit (F2, L2), O = Revenue
         Debit/Customer Credit (G2, RA), U = no accounting entry at all
         (F5, F8 Pro Forma)
        </td>
       </tr>
       <tr>
        <td>
         What does Posting Block do, and how can a blocked invoice's
         accounting document be posted manually?
        </td>
        <td>
         It stops the system from auto-generating the accounting document
         at invoice creation; it can then be posted manually either via
         the invoice's change mode (Release) or via T-code VFX3
        </td>
       </tr>
       <tr>
        <td>
         What is the standard FI Accounting Document Type, and where
         would you change it?
        </td>
        <td>
         RV, applied by default; a custom document type is created via
         OBA7 (an FI-side transaction) and then referenced on the billing
         type's Document Type field
        </td>
       </tr>
       <tr>
        <td>What is an Invoice List, and what T-code creates one?</td>
        <td>
         A document consolidating multiple individual invoices into one,
         sent to the payer; created via VF24, filtered by month/date,
         Sales Organization, and Billing Type (standard LR), then
         processed collectively
        </td>
       </tr>
       <tr>
        <td>
         What prerequisite steps does the Invoice List worked example
         require on the Customer Master?
        </td>
        <td>
         A factory calendar with all working days unchecked and a special
         rule for the intended billing date, maintained on the Customer
         Master's Invoicing List Dates field
        </td>
       </tr>
       <tr>
        <td>What does Cancel Billing Type control?</td>
        <td>
         Which billing type is used when an invoice is cancelled — e.g.
         cancelling an F2 invoice determines billing type S1, per F2's
         own Cancel Billing Type setting
        </td>
       </tr>
       <tr>
        <td>
         What does Account Determination Procedure control, and what is
         its standard value?
        </td>
        <td>
         It determines the Revenue G/L accounts used when posting invoice
         values into accounting; the standard procedure is KOFI00
        </td>
       </tr>
       <tr>
        <td>
         In standard processing, does the invoice determine its own
         pricing procedure?
        </td>
        <td>
         No — it copies the pricing procedure forward from the sales
         order; the billing type's own Document Pricing Procedure field
         is normally irrelevant
        </td>
       </tr>
       <tr>
        <td>
         In which two scenarios does the invoice determine pricing
         procedure directly, and how?
        </td>
        <td>
         Delivery Without Order Reference and STO — in both, the system
         first checks Document Pricing Procedure on the Billing Type; if
         blank, it falls back to Document Pricing Procedure on Default
         Order Type DL (VOV8)
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
        <td><span className="tcode">VOF8</span></td>
        <td>
         Define Billing Types — used to copy F2 into the custom PPF2, and
         to review/set every billing type control covered today
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV8</span></td>
        <td>
         Sales Document Type Controls — used to assign the custom billing
         type (PPF2) in both the Order-Related and Delivery-Related
         Billing Type fields, and where Default Order Type DL's own
         Document Pricing Procedure is checked
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VN01</span></td>
        <td>
         Define Number Ranges — same transaction as Sales and Delivery
         documents; used for the billing document's internal number range
         (standard: 19)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VFX3</span></td>
        <td>
         Post/release invoice values into accounting manually — used when
         Posting Block is checked on the billing type
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OBA7</span></td>
        <td>
         Define FI Accounting Document Types — used (as an FI-side
         configuration) to copy RV into a custom code such as PV
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VF24</span></td>
        <td>
         Create Invoice List — used in the worked example to consolidate
         3–4 invoices for one customer into a single invoice list
         document
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
        <td>Standard billing types</td>
        <td>
         F2 (Invoice), BV (Cash Sales), RA (Returns), G2 (Credit Memo),
         L2 (Debit Memo), S1 (Invoice Cancellation), S2 (Returns
         Invoice/Credit Memo Cancellation), F5 (Pro Forma,
         order-related), F8 (Pro Forma, delivery-related), IV
         (Intercompany Invoice), IG (Intercompany Credit Memo)
        </td>
       </tr>
       <tr>
        <td>Custom billing type build</td>
        <td>
         PPF2, copied from F2 via VOF8; must be assigned in VOV8's
         Order-Related and Delivery-Related Billing Type fields
        </td>
       </tr>
       <tr>
        <td>Number Range</td>
        <td>
         Internal only (no external, for legal sequential-numbering
         reasons); standard range key 19; defined via VN01 (shared with
         Sales and Delivery documents)
        </td>
       </tr>
       <tr>
        <td>SD Document Category → accounting entry</td>
        <td>
         M = Customer Debit/Revenue Credit (F2, L2); O = Revenue
         Debit/Customer Credit (G2, RA); U = no accounting entry (F5, F8)
        </td>
       </tr>
       <tr>
        <td>Posting Block</td>
        <td>
         Checked = accounting document not generated automatically;
         posted manually via invoice change mode (Release) or VFX3
        </td>
       </tr>
       <tr>
        <td>Statistics</td>
        <td>Controls whether invoice values update into LIS reports</td>
       </tr>
       <tr>
        <td>FI Accounting Document Type</td>
        <td>
         Standard = RV (default, no maintenance needed); custom codes
         created via OBA7 (FI-side) and referenced on the billing type
        </td>
       </tr>
       <tr>
        <td>Invoice List Type</td>
        <td>
         Standard = LR; created via VF24; requires a factory calendar
         (special rule for the billing date) maintained on Customer
         Master's Invoicing List Dates field
        </td>
       </tr>
       <tr>
        <td>Relevant for Rebate</td>
        <td>
         Prerequisite for the system to process rebates against the
         billing document
        </td>
       </tr>
       <tr>
        <td>Cancel Billing Type</td>
        <td>
         Determines the billing type used on cancellation (e.g. F2 → S1)
        </td>
       </tr>
       <tr>
        <td>Account Determination Procedure</td>
        <td>
         Standard = KOFI00; determines Revenue G/L accounts during
         invoice-to-accounting posting
        </td>
       </tr>
       <tr>
        <td>Document Pricing Procedure (billing type level)</td>
        <td>
         Normally unused — invoice copies pricing procedure from the
         sales order; used only for Delivery Without Order Reference and
         STO, checking the Billing Type first and falling back to Default
         Order Type DL (VOV8) if blank
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture covered <strong>Billing Type Controls</strong> (<span
       className="tcode"
      >VOF8</span
      >) in full, opening with the standard billing type list
      (<code>F2</code>, <code>BV</code>, <code>RA</code>, <code>G2</code>,
      <code>L2</code>, <code>S1</code>, <code>S2</code>, <code>F5</code>,
      <code>F8</code>, <code>IV</code>, <code>IG</code>) and a custom
      <code>PPF2</code> build (copied from <code>F2</code>, assigned in both
      Order-Related and Delivery-Related Billing Type fields on
      <span className="tcode">VOV8</span>). It then worked through every
      control: <strong>Number Range</strong>
      (internal only, for legal sequential-numbering reasons) and
      <strong>Item Number Increment</strong>;
      <strong>SD Document Category</strong>, which drives the accounting
      entry itself (<code>M</code>/<code>O</code>/<code>U</code>);
      <strong>Posting Block</strong> (manual posting via change mode or
      <span className="tcode">VFX3</span>); <strong>Statistics</strong> (LIS
      updates); <strong>Document Type</strong> (FI Accounting Document Type,
      standard <code>RV</code>, customizable via
      <span className="tcode">OBA7</span>);
      <strong>Invoice List Type</strong> (standard <code>LR</code>, fully
      demoed via <span className="tcode">VF24</span> with a factory-calendar
      setup); <strong>Relevant for Rebate</strong>;
      <strong>Cancel Billing Type</strong>;
      <strong>Account Determination Procedure</strong> (standard
      <code>KOFI00</code>, for Revenue G/L determination); and finally
      <strong>Document Pricing Procedure</strong> at the billing type level
      — normally irrelevant since pricing procedure is copied from the sales
      order, but directly determined (Billing Type first, Default Order Type
      <code>DL</code> as fallback) for Delivery Without Order Reference and
      STO. With Billing Type controls now complete, the course is ready to
      begin Pricing next class.
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
       >Billing numbering is the one place SAP hard-codes a business rule
        into the config</strong
       >
       — no external number range exists at all, because sequential billing
       numbers are a legal requirement, not just a best practice.
      </li>
      <li>
       <strong
       >SD Document Category is the single field behind every billing
        accounting entry</strong
       >
       — knowing M/O/U tells you immediately whether a billing type debits
       or credits the customer, or posts nothing at all.
      </li>
      <li>
       <strong
       >Posting Block and Pro Forma (SD Doc Category U) solve different
        problems</strong
       >
       — Posting Block still creates a real invoice that will eventually
       post accounting (just not automatically); a Pro Forma invoice is
       designed to never post accounting at all.
      </li>
      <li>
       <strong>Default Order Type DL keeps reappearing</strong> — first for
       Movement Type (Lecture 62), now for Document Pricing Procedure —
       it's the single mechanism SAP uses whenever a delivery/invoice has
       no real sales order behind it to copy determination fields from.
      </li>
      <li>
       <strong
       >The invoice almost never re-determines pricing procedure</strong
       >
       — it's copied from the order by default; Document Pricing Procedure
       on the billing type only matters in the no-order-reference and STO
       edge cases.
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Pricing begins — the topic the course
      has been building toward since Item Category Determination.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 64 Notes — Billing Type Controls (VOF8) 🎓
   </p>
  </div>
 );
};

export default SalesDocument64;
