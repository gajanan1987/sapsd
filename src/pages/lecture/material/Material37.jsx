const Material37 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-orange">
    <h1>
     📦 Lecture 37 — Fields in Material Master: Sales Org 1 &amp; Sales Org 2
     Views
    </h1>
    <p>
     SAP SD | Sales Unit &amp; conversion, blocking material for sales (all
     vs. specific distribution channels), Cash Discount determination, LIS
     statistics group, pricing/rebate grouping fields, Item Category Group,
     and Pricing Reference Material
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class closed out Basic Data 1 with Gross Weight and Net
      Weight. Today moves into the <strong>Sales Org 1</strong> and
      <strong>Sales Org 2</strong> views of the Material Master — covering
      how the material is sold (Sales Unit, blocking rules), how it feeds
      statistics and rebate/pricing groupings, how its item category and
      revenue account get determined, and how one material's price can be
      reused for others via Pricing Reference Material.
     </div>
    </div>

    {/* <!-- Section 1: Sales Unit --> */}
    <div className="card teal">
     <h2><span className="badge">9</span> Sales Org 1 View — Sales Unit</h2>
     <div className="callout teal">
      💡 <strong>Sales Unit</strong> is the unit in which the material is
      <strong>sold to customers</strong> — as opposed to Base Unit of
      Measure, which is the unit it is manufactured/stored in.
     </div>
     <div className="callout blue">
      🔗 <strong>Conversion requirement:</strong> if Sales Unit is different
      from Base Unit of Measure, the system asks for a
      <strong>conversion factor</strong> the moment you press Enter — e.g.,
      mentioning that <strong>1 carton = 200 bottles</strong>
      (Base Unit here is BT — Bottle).
     </div>
     <div className="stepper">
      <div className="step">
       Maintain a Sales Unit different from the Base Unit (e.g., Carton
       against Base Unit Bottle) → press Enter → system prompts for the
       conversion factor.
      </div>
      <div className="step">
       Enter the conversion, e.g., <code>1 Carton = 200 Bottles</code>
       → Enter.
      </div>
      <div className="step">
       To view or change this conversion later, go to
       <strong>Additional Data → Unit of Measure</strong> on the Material
       Master.
      </div>
      <div className="step">
       More than one Sales Unit can be maintained for the same material —
       e.g., a second unit Box with its own conversion (1 Box = 500
       Bottles).
      </div>
     </div>
     <p className="note-text">
      📌 When multiple sales units exist, the sales order defaults to the
      <strong>first one maintained</strong>, but the unit can be changed
      manually at order entry — unless Sales Unit Not Variable is checked
      (see next field).
     </p>
    </div>

    {/* <!-- Section 2: Sales Unit Not Variable --> */}
    <div className="card orange">
     <h2>
      <span className="badge">10</span> Sales Org 1 View — Sales Unit Not
      Variable
     </h2>
     <div className="callout orange">
      💡 If checked, the system will
      <strong
      >not allow the Sales Unit to be changed while creating a sales
       document</strong
      >
      — the order is locked to whichever sales unit defaults in.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Setting</th>
        <th>Behavior at Order Creation</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Sales Unit Not Variable — unchecked</td>
        <td>
         Order defaults to the first sales unit (e.g., Carton), but can
         be manually changed to another maintained unit (e.g., Box)
        </td>
       </tr>
       <tr>
        <td>Sales Unit Not Variable — checked</td>
        <td>
         Order defaults to the first sales unit (Carton) and cannot be
         changed — attempting to switch to Box throws
         <em>"Sales unit BOX is not defined"</em>-style error
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Worked demo: Customer 100640 orders 100 Cartons; with the checkbox
      unchecked, the unit can be switched to Box manually. With it checked,
      trying to change to Box throws an error and the order stays locked to
      Carton.
     </p>
    </div>

    {/* <!-- Section 3: X-Distribution Chain Status --> */}
    <div className="card purple">
     <h2>
      <span className="badge">11</span> Sales Org 1 View — X-Distribution
      Chain Status
     </h2>
     <div className="callout purple">
      💡 <strong>X-Distribution Chain Status</strong> blocks the material
      for sales <strong>across all distribution channels</strong> at once.
     </div>
     <div className="stepper">
      <div className="step">
       Maintain the status (e.g., <code>2L</code>) → Save.
      </div>
      <div className="step">
       On the right, mention the <strong>date from which</strong> the
       material should be blocked.
      </div>
     </div>
     <h3>Worked Example — Material 640 Blocked in All Channels</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Customer / Distribution Channel</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P3 — Institutions</td>
        <td>
         Order blocked — <em>"Material status: sales not allowed"</em>
        </td>
       </tr>
       <tr>
        <td>P2 — Distributor</td>
        <td>Order blocked with the same error</td>
       </tr>
       <tr>
        <td>P1 — Dealers</td>
        <td>Order blocked with the same error</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Prerequisite check along the way:</strong> attempting the
      order before this was even reached briefly hit
      <em>"No pricing procedure could be determined"</em> — resolved the
      same way as before, via <span className="tcode">OVKK</span>
      (maintained for all relevant sales areas).
     </div>
    </div>

    {/* <!-- Section 4: Distribution Chain-Specific Status --> */}
    <div className="card red">
     <h2>
      <span className="badge">12</span> Sales Org 1 View — Distribution
      Chain-Specific Status
     </h2>
     <div className="callout red">
      💡 <strong>Distribution Chain-Specific Status</strong> blocks the
      material for sales in
      <strong>one particular distribution channel only</strong> — unlike
      X-Distribution Chain Status, which blocks all of them.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> maintained only in the material
      master record held under distribution channel
      <strong>P1 (Dealers)</strong>, with a block-from date, then saved.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Distribution Channel</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P3 (Institutions)</td>
        <td>Not blocked — order goes through</td>
       </tr>
       <tr>
        <td>P1 (Dealers) — Customer 640</td>
        <td>
         Blocked — <em>material status prevents sales</em> for this
         channel only
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📌 <strong>Choosing between the two blocking fields:</strong> if you
      don't want to block the material at all, leave both fields blank. If
      you do want to block it, choose based on scope — all channels →
      X-Distribution Chain Status; one specific channel → Distribution
      Chain-Specific Status (maintained inside that channel's own material
      master record).
     </div>
    </div>

    {/* <!-- Section 5: Delivering Plant --> */}
    <div className="card gold">
     <h2>
      <span className="badge">13</span> Sales Org 1 View — Delivering Plant
     </h2>
     <div className="callout gold">
      💡 If a <strong>Delivering Plant</strong> is maintained here, the
      system automatically determines that plant into the
      <strong>sales document</strong> — the same auto-determination pattern
      seen earlier with Division on Material Master.
     </div>
    </div>

    {/* <!-- Section 6: Cash Discount --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">14</span> Sales Org 1 View — Cash Discount
     </h2>
     <div className="callout indigo">
      💡 If <strong>Cash Discount</strong> is checked on the Material
      Master, the system determines the cash discount condition type
      <strong>SKTO</strong> in the sales document. If unchecked, SKTO is not
      determined for that material at all — even if Terms of Payment has a
      cash discount percentage configured.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Setting</th>
        <th>Result on Order's Conditions Tab</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Cash Discount — checked</td>
        <td>SKTO appears with the configured percentage (e.g., 2%)</td>
       </tr>
       <tr>
        <td>Cash Discount — unchecked</td>
        <td>SKTO does not appear at all</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 This works together with what was covered in Lecture 35: the 2%
      comes from the Terms of Payment / SKTO pricing-procedure setup, but
      this Material Master checkbox is what actually
      <strong>switches SKTO's determination on or off</strong> for this
      specific material.
     </p>
    </div>

    {/* <!-- Section 7: Tax Classification (Material) --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">15</span> Sales Org 1 View — Tax
      Classification (Material)
     </h2>
     <div className="callout cyan">
      💡 This field controls whether the <strong>material</strong> is
      relevant for tax or not — the material-side counterpart to the Tax
      Classification field on Customer Master (Lecture 36).
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
        <td>1</td>
        <td>Material is relevant for tax</td>
       </tr>
       <tr>
        <td>0</td>
        <td>Material is not relevant for tax</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 8: Minimum Order Quantity --> */}
    <div className="card green">
     <h2>
      <span className="badge">16</span> Sales Org 1 View — Minimum Order
      Quantity
     </h2>
     <div className="callout green">
      💡 If maintained, the system checks incoming order quantities against
      this minimum. If the order quantity is
      <strong>less than</strong> the Minimum Order Quantity, the system
      gives a <strong>warning message only</strong> (order still saves).
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Minimum Order Quantity =
      <code>100</code>. Creating an order for <code>90</code> triggers the
      message <em>"Minimum order quantity is 100"</em> — but this is only a
      warning; the order can still be saved.
     </div>
    </div>

    {/* <!-- Section 9: Minimum Delivery Quantity --> */}
    <div className="card pink">
     <h2>
      <span className="badge">17</span> Sales Org 1 View — Minimum Delivery
      Quantity
     </h2>
     <div className="callout pink">
      💡 If maintained, the system checks the
      <strong>delivery quantity</strong> against this minimum at the
      delivery stage. If the delivery quantity is
      <strong>less than</strong> Minimum Delivery Quantity, the system gives
      a <strong>warning or error message</strong> (unlike Minimum Order
      Quantity, which is warning-only).
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Order created for
      <code>90</code> (below the Minimum Order Quantity of 100 — warned but
      saved), then delivery is created for the same 90.
     </div>
     <div className="stepper">
      <div className="step">
       Create the delivery for 90 units → the delivery is flagged with a
       log message.
      </div>
      <div className="step">
       Check via the <strong>log symbol</strong> — message reads
       <em
       >"Delivery quantity is less than minimum delivery quantity
        100."</em
       >
      </div>
     </div>
    </div>

    {/* <!-- Section 10: Material Statistics Group --> */}
    <div className="card brown">
     <h2>
      <span className="badge">18</span> Sales Org 2 View — Material
      Statistics Group
     </h2>
     <div className="callout brown">
      💡 <strong>Material Statistics Group</strong> controls whether this
      material's sales data updates into
      <strong>LIS (Logistics Information System)</strong> reports — a
      management reporting tool — or not.
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
        <td>1</td>
        <td>Relevant for statistics (updates LIS reports)</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Not relevant for statistics</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Example given: scrap materials, whose sales the business does not
      want reflected in LIS reports, are maintained as
      <code>2</code> (not relevant).
     </p>
    </div>

    {/* <!-- Section 11: Material Pricing Group --> */}
    <div className="card slate">
     <h2>
      <span className="badge">19</span> Sales Org 2 View — Material Pricing
      Group
     </h2>
     <div className="callout slate">
      💡 <strong>Material Pricing Group</strong> = grouping of materials
      that share the <strong>same pricing attributes</strong>, used for the
      <strong>group condition concept</strong> in pricing.
     </div>
    </div>

    {/* <!-- Section 12: Volume Rebate Group --> */}
    <div className="card teal">
     <h2>
      <span className="badge">20</span> Sales Org 2 View — Volume Rebate
      Group
     </h2>
     <div className="callout teal">
      💡 <strong>Volume Rebate Group</strong> groups materials for the
      <strong>group rebate concept</strong>.
     </div>
     <h3>The Three Types of Rebate</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Rebate Type</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Group Rebate</td>
        <td>Announcing a rebate on a group of materials</td>
       </tr>
       <tr>
        <td>Material Rebate</td>
        <td>Announcing a rebate on one specific material</td>
       </tr>
       <tr>
        <td>Customer Rebate</td>
        <td>
         Announcing a rebate irrespective of material — driven purely by
         the customer
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Detailed rebate configuration and how it is triggered within
      pricing will be covered in an upcoming lecture, after the Pricing
      topics (as already flagged in Lecture 34's Rebate field).
     </p>
    </div>

    {/* <!-- Section 13: Account Assignment Group (Material) --> */}
    <div className="card orange">
     <h2>
      <span className="badge">21</span> Sales Org 2 View — Account
      Assignment Group (Material)
     </h2>
     <div className="callout orange">
      💡 This field is one of the parameters used to determine the
      <strong>Revenue G/L account</strong> while posting invoice values into
      Accounting — the material-side counterpart to the Account Assignment
      Group field on Customer Master (Lecture 36).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>01</td>
        <td>Trading Goods</td>
       </tr>
       <tr>
        <td>03</td>
        <td>Finished Goods</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 14: Item Category Group --> */}
    <div className="card purple">
     <h2>
      <span className="badge">22</span> Sales Org 2 View — Item Category
      Group
     </h2>
     <div className="callout purple">
      💡 <strong>Item Category Group</strong> is one of the parameters used
      to determine the <strong>Item Category</strong> in the sales document.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Item Category Group</th>
        <th>Used For</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>NORM</td>
        <td>
         Standard item category group (normal trading/finished materials)
        </td>
       </tr>
       <tr>
        <td>BANS</td>
        <td>Third-party materials</td>
       </tr>
       <tr>
        <td>0001</td>
        <td>Configurable materials</td>
       </tr>
       <tr>
        <td>0002</td>
        <td>Make-to-order materials</td>
       </tr>
       <tr>
        <td>ERLA</td>
        <td>BOM header — pricing at the main (header) item</td>
       </tr>
       <tr>
        <td>LUMF</td>
        <td>BOM header — pricing at the individual item level</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📌 <strong>Transcription note:</strong> the audio for this list was
      unclear in places (heard as "BNS" and a garbled "IPO materials,
      BANC"); the table above reflects the standard SAP item category group
      codes the instructor was describing — worth double-checking against
      the live system if in doubt.
     </div>
    </div>

    {/* <!-- Section 15: Pricing Reference Material --> */}
    <div className="card red">
     <h2>
      <span className="badge">23</span> Sales Org 2 View — Pricing Reference
      Material
     </h2>
     <div className="callout red">
      💡 If pricing is the <strong>same across multiple materials</strong>,
      instead of maintaining a price for every single one, maintain the
      price on <strong>one material</strong> and assign that material as the
      <strong>Pricing Reference Material</strong> for the others.
     </div>
     <div className="callout green">
      ✅ <strong>Result:</strong> whatever price is maintained on the
      reference material automatically becomes applicable to every other
      material pointing to it — condition records don't need to be
      duplicated across all of them.
     </div>
     <p className="note-text">
      📌 A student asked how to actually configure this assignment on
      screen; due to an audio issue at the end of class, this was left for
      the next session — the exact configuration path is still to be
      demonstrated.
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
         What is Sales Unit, and how is it different from Base Unit of
         Measure?
        </td>
        <td>
         Sales Unit is the unit in which the material is sold to
         customers; Base Unit is the unit it's manufactured/stored in. If
         they differ, the system asks for a conversion factor (e.g., 1
         Carton = 200 Bottles)
        </td>
       </tr>
       <tr>
        <td>What does checking "Sales Unit Not Variable" do?</td>
        <td>
         Locks the sales unit at order creation to whichever unit
         defaults in — it cannot be changed to another maintained sales
         unit
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between X-Distribution Chain Status and
         Distribution Chain-Specific Status?
        </td>
        <td>
         X-Distribution Chain Status blocks the material for sales across
         all distribution channels; Distribution Chain-Specific Status
         blocks it only in the one channel where it's maintained
        </td>
       </tr>
       <tr>
        <td>What does maintaining Delivering Plant on Sales Org 1 do?</td>
        <td>
         The system automatically determines that plant into the sales
         document
        </td>
       </tr>
       <tr>
        <td>
         What does the Cash Discount checkbox on Material Master control?
        </td>
        <td>
         Whether the SKTO cash discount condition type is determined in
         the sales document for this material — checked shows it,
         unchecked suppresses it
        </td>
       </tr>
       <tr>
        <td>
         What does Tax Classification (Material) control, and what do 0/1
         mean?
        </td>
        <td>
         Whether the material is relevant for tax; 1 = relevant, 0 = not
         relevant
        </td>
       </tr>
       <tr>
        <td>
         What happens if an order quantity is below Minimum Order
         Quantity?
        </td>
        <td>
         The system gives a warning message only — the order can still be
         saved
        </td>
       </tr>
       <tr>
        <td>
         What happens if a delivery quantity is below Minimum Delivery
         Quantity?
        </td>
        <td>
         The system gives a warning or error message, checkable via the
         log symbol on the delivery — unlike Minimum Order Quantity,
         which is warning-only
        </td>
       </tr>
       <tr>
        <td>What is Material Statistics Group used for?</td>
        <td>
         Controls whether the material's sales data updates into LIS
         (Logistics Information System) reports; 1 = relevant for
         statistics, 2 = not relevant (e.g., scrap materials)
        </td>
       </tr>
       <tr>
        <td>What is Material Pricing Group?</td>
        <td>
         A grouping of materials sharing the same pricing attributes,
         used for the group condition concept in pricing
        </td>
       </tr>
       <tr>
        <td>
         What is Volume Rebate Group, and what are the three types of
         rebate?
        </td>
        <td>
         Groups materials for the group rebate concept; the three rebate
         types are Group Rebate (on a group of materials), Material
         Rebate (on one specific material), and Customer Rebate
         (irrespective of material)
        </td>
       </tr>
       <tr>
        <td>
         What does Account Assignment Group (Material) determine, and
         what do codes 01/03 mean?
        </td>
        <td>
         The Revenue G/L account used when posting invoice values into
         Accounting; 01 = Trading Goods, 03 = Finished Goods
        </td>
       </tr>
       <tr>
        <td>What does Item Category Group determine?</td>
        <td>
         It's one of the parameters used to determine Item Category in
         the sales document (e.g., NORM standard, BANS third-party,
         ERLA/LUMF for BOM header pricing)
        </td>
       </tr>
       <tr>
        <td>What is Pricing Reference Material?</td>
        <td>
         When pricing is the same across multiple materials, one material
         carries the actual price and is assigned as the pricing
         reference for the others, so they all pick up the same price
         automatically
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
        <td><span className="tcode">OVKK</span></td>
        <td>
         Assign Pricing Procedure — referenced again here when "No
         pricing procedure could be determined" appeared while testing
         distribution-chain blocking
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
        <td>Sales Unit conversion example</td>
        <td>
         1 Carton = 200 Bottles (a second unit: 1 Box = 500 Bottles)
        </td>
       </tr>
       <tr>
        <td>X-Distribution Chain Status example</td>
        <td>
         Status 2L, blocks material 640 across P1/P2/P3 from a given date
        </td>
       </tr>
       <tr>
        <td>Distribution Chain-Specific Status example</td>
        <td>
         Maintained only under P1 (Dealers) — blocks Dealers only, P3
         unaffected
        </td>
       </tr>
       <tr>
        <td>Cash Discount / SKTO example</td>
        <td>
         Checked → SKTO shows 2% on Conditions tab; unchecked → SKTO
         absent
        </td>
       </tr>
       <tr>
        <td>Minimum Order Quantity example</td>
        <td>100 — order of 90 triggers a warning only</td>
       </tr>
       <tr>
        <td>Minimum Delivery Quantity example</td>
        <td>100 — delivery of 90 flagged in the delivery log</td>
       </tr>
       <tr>
        <td>Material Statistics Group values</td>
        <td>
         1 = relevant for LIS statistics, 2 = not relevant (e.g., scrap
         materials)
        </td>
       </tr>
       <tr>
        <td>Account Assignment Group (Material) codes</td>
        <td>01 Trading Goods, 03 Finished Goods</td>
       </tr>
       <tr>
        <td>Item Category Group examples</td>
        <td>NORM, BANS, 0001, 0002, ERLA, LUMF</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture moved from Basic Data 1 into the
      <strong>Sales Org 1</strong> and <strong>Sales Org 2</strong>
      views of Material Master. Sales Org 1 covered:
      <strong>Sales Unit</strong> (with its conversion mechanic against Base
      Unit of Measure) and <strong>Sales Unit Not Variable</strong> (locking
      the sales unit at order entry); two blocking fields —
      <strong>X-Distribution Chain Status</strong>
      (blocks sales across all distribution channels) and
      <strong>Distribution Chain-Specific Status</strong> (blocks sales in
      just one channel) — demonstrated live across P1/P2/P3;
      <strong>Delivering Plant</strong> (auto-determines into the sales
      document); <strong>Cash Discount</strong> (switches SKTO determination
      on/off for the material); material-side
      <strong>Tax Classification</strong>; and
      <strong>Minimum Order Quantity</strong> (warning-only) versus
      <strong>Minimum Delivery Quantity</strong> (warning or error, visible
      via the delivery log). Sales Org 2 then covered
      <strong>Material Statistics Group</strong> (LIS reporting relevance),
      <strong>Material Pricing Group</strong> and
      <strong>Volume Rebate Group</strong> (grouping fields for pricing and
      rebate condition concepts, alongside the three rebate types — group,
      material, and customer), material-side
      <strong>Account Assignment Group</strong> (01 Trading Goods, 03
      Finished Goods), <strong>Item Category Group</strong> (drives item
      category determination), and finally
      <strong>Pricing Reference Material</strong> — letting one material's
      price apply automatically to others instead of duplicating condition
      records.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Sales Unit ≠ Base Unit</strong> triggers a mandatory
       conversion factor — and multiple sales units can coexist for one
       material, with the order defaulting to whichever was maintained
       first
      </li>
      <li>
       The two blocking fields are scope-driven:
       <strong>X-Distribution Chain Status = all channels</strong>,
       <strong>Distribution Chain-Specific Status = one channel</strong> —
       pick based on how broadly the block should apply
      </li>
      <li>
       <strong>Minimum Order Quantity is warning-only</strong>, while
       <strong>Minimum Delivery Quantity can warn or error</strong> — an
       easy pair to mix up
      </li>
      <li>
       <strong>Cash Discount on Material Master</strong> is the on/off
       switch for SKTO determination — the percentage itself still comes
       from Terms of Payment configuration (Lecture 35)
      </li>
      <li>
       <strong>Pricing Reference Material</strong> avoids duplicating
       condition records across materials that share the same price — the
       exact assignment configuration is still pending for the next class
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> remaining Material Master fields,
      including how to configure the Pricing Reference Material assignment.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 37 Notes — Fields in Material Master: Sales Org 1 &amp; Sales Org
    2 Views 🎓
   </p>
  </div>
 );
};

export default Material37;
