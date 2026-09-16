const SalesDocument55 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-purple">
    <h1>🧩 Lecture 55 — Statistical Value &amp; the BOM Pricing Scenario</h1>
    <p>
     SAP SD | Quick recap of Pricing, then Statistical Value — with a full
     end-to-end BOM header-pricing scenario built from scratch: materials,
     BOM (CS01), pricing (PR00), and a before/after order comparison.
     Shortened session — class ended early
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class finished at <strong>Pricing</strong> in the Item
      Category Details screen (<span className="tcode">VOV7</span>, item
      category <code>P10</code>). Today briefly reconfirms Pricing, then
      covers <strong>Statistical Value</strong> — demonstrated with a full
      <strong>BOM (Bill of Material) header-pricing scenario</strong>
      built from scratch. This was a shortened session; class ended by 8 AM
      due to urgent work on the instructor's side, with the remaining Item
      Category controls deferred to the next class.
     </div>
    </div>

    {/* <!-- Section 1: Pricing - Confirmed Recap --> */}
    <div className="card teal">
     <h2><span className="badge">13</span> Pricing — Confirmed Recap</h2>
     <div className="callout teal">
      💡 <strong>Pricing</strong> controls whether the item is
      <strong>relevant for pricing</strong> at all, and whether it follows
      <strong>normal pricing</strong> or
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
        <td>Free Goods pricing — 100% discount</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖
      <strong
      >Only the Free Goods item category (<code>TANN</code>) carries
       Pricing = <code>B</code>.</strong
      >
      This value drives two effects together: the system determines
      condition type <strong><code>R100</code></strong> on the item, and
      that condition makes the free goods item's net value
      <strong>zero</strong>.
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the recording repeatedly names the
      Free Goods item category as "<code>TAN</code>" — that code is actually
      <strong>Standard Order</strong> (established across earlier lectures).
      The Free Goods item category confirmed with Pricing <code>B</code> is
      <strong><code>TANN</code></strong
      >, as already established in the previous lecture.
     </p>
    </div>

    {/* <!-- Section 2: Statistical Value --> */}
    <div className="card orange">
     <h2><span className="badge">14</span> Statistical Value</h2>
     <div className="callout orange">
      💡 <strong>Statistical Value</strong> controls whether a line item's
      value is <strong>active or inactive</strong> in pricing — when set to
      <code>X</code>, the item still shows a price (for reporting purposes),
      but that price
      <strong>does not affect the document's net/total value</strong>.
     </div>
     <div className="callout purple">
      📊 <strong>Why it exists — the BOM header-pricing problem:</strong> in
      a <strong>BOM (Bill of Material)</strong> header-pricing scenario,
      price is normally determined
      <strong>only on the main/header item</strong> (e.g. a computer at
      ₹15,000), while the component items (CPU, monitor, keyboard, mouse)
      carry <strong>no price at all</strong> — their item category's Pricing
      field is blank by design, since BOM header pricing means the customer
      is charged only for the finished product. Some clients, however, still
      want to <strong>see</strong> a price against each component — purely
      for <strong>reporting</strong> (e.g. "how much CPU value did we sell
      last month?"), not for actually charging the customer twice.
      Statistical Value is what makes this possible without breaking the
      pricing total.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Statistical Value Setting</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Unchecked (blank)</td>
        <td>
         Normal — if Pricing is relevant, the item's price counts toward
         the document's net value
        </td>
       </tr>
       <tr>
        <td>Checked (<code>X</code>)</td>
        <td>
         Item's price condition (e.g. <code>PR00</code>) still determines
         and displays, but is marked <strong>inactive</strong> — it has
         no effect on the document's total value
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 To enable a statistical component price on a BOM sub-item, both
      fields on that item category must be changed together:
      <strong>Pricing = <code>X</code></strong> (so a price is determined at
      all) <strong>and Statistical Value = <code>X</code></strong> (so that
      price stays inactive/reporting-only rather than adding to the total).
     </p>
     <div className="callout red">
      ⚠️ <strong>Audio quality note:</strong> the item category for BOM
      sub-items (components) was repeatedly heard in this recording only as
      a bare "<code>TA</code>", which is almost certainly truncated — this
      is very likely <code>TAE</code>, the BOM-item/sub-item-level pricing
      category flagged as audio-unclear in the previous lecture's "Billing
      Relevance = blank" list. Confirm the exact code against the system.
     </div>
    </div>

    {/* <!-- Section 3: BOM Scenario Demo --> */}
    <div className="card red">
     <h2>
      <span className="badge">🛠️</span> Worked Demonstration — BOM Header
      Pricing Scenario
     </h2>
     <div className="callout red">
      🔗 <strong>Goal:</strong> build a BOM where a "Computer" header item
      bundles CPU, Monitor, Keyboard, and Mouse as components; show that
      only the header item is priced by default; then switch on Pricing +
      Statistical Value on the component item category so components display
      a statistical (non-adding) price too.
     </div>

     <h3>Step 1 — Create the Materials (MM01)</h3>
     <div className="stepper">
      <div className="step">
       Create the <strong>header material</strong> —
       <code>P Computer</code> — via
       <span className="tcode">MM01</span> (Pharmaceuticals industry
       sector, used for practice to avoid unrelated errors from other
       industry sectors). Key settings: Plant <code>P100</code>, Division
       <code>P1</code>, tax classification maintained, Account Assignment
       Group <code>03</code>, Availability Check <code>02</code>,
       Transportation Group <code>0001</code>, Loading Group
       <code>0001</code>, MRP Type <code>PD</code>, MRP Controller
       <code>000</code>, Lot Size <code>EX</code>, Scheduling Margin Key
       <code>01</code>, a base price maintained. Critically:
       <strong>Item Category Group = <code>ERLA</code></strong> (not the
       default <code>NORM</code>) — this is what marks the material as a
       BOM header item priced at the header level.
      </div>
      <div className="step">
       Create the four <strong>component materials</strong> —
       <code>P CPU</code>, <code>P Monitor</code>, <code>P Keyboard</code>,
       <code>P Mouse</code> — each with
       <strong>Item Category Group = <code>NORM</code></strong> (normal,
       unlike the header material). Same plant/division and similar
       logistics settings as the header material (Availability Check,
       Transportation/Loading Group, MRP1 data); CPU additionally carries
       Valuation Class <code>7920</code> for accounting.
      </div>
     </div>

     <h3>Step 2 — Create the BOM (CS01)</h3>
     <div className="stepper">
      <div className="step">
       <span className="tcode">CS01</span> → Material
       <code>P Computer</code>, Plant <code>P100</code>,
       <strong>BOM Usage = <code>5</code> (Sales and Distribution)</strong>
       → Enter.
      </div>
      <div className="step">
       Add each component with
       <strong>Item Category <code>L</code> (Stock Item)</strong> and
       Quantity <code>1</code>: <code>P Monitor</code>,
       <code>P Keyboard</code>, <code>P Mouse</code>, <code>P CPU</code>.
       Save.
      </div>
     </div>

     <h3>Step 3 — Maintain Prices (VK11 / PR00)</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Material</th>
        <th>Price (Condition Type <code>PR00</code>)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P Computer</td>
        <td>₹15,000</td>
       </tr>
       <tr>
        <td>P CPU</td>
        <td>₹8,000</td>
       </tr>
       <tr>
        <td>P Monitor</td>
        <td>₹6,000</td>
       </tr>
       <tr>
        <td>P Keyboard</td>
        <td>₹500</td>
       </tr>
       <tr>
        <td>P Mouse</td>
        <td>₹500</td>
       </tr>
      </tbody>
     </table>

     <h3>Step 4 — Create the Order Before the Change</h3>
     <div className="callout blue">
      📊
      <strong
      >Order type <code>PPOR</code>, customer <code>100640</code>,
       material <code>P Computer</code>, quantity 1:</strong
      >
      the system auto-determines the four components as sub-items (item
      numbers <code>11</code>–<code>14</code>). Double- clicking the header
      item's Conditions tab shows <code>PR00</code> at ₹15,000.
      Double-clicking any component's Conditions tab shows
      <strong>no <code>PR00</code> at all</strong> — as expected, since the
      component item category's Pricing field is blank by default.
     </div>

     <h3>Step 5 — Enable Statistical Component Pricing</h3>
     <div className="callout gold">
      📖 On the <strong>component item category</strong> (flagged above as
      likely <code>TAE</code>), change
      <strong>Pricing = <code>X</code></strong> and
      <strong>Statistical Value = <code>X</code></strong
      >. Save.
     </div>

     <h3>Step 6 — Recreate the Order and Compare</h3>
     <div className="callout green">
      ✅ <strong>Result:</strong> creating the same order again now shows
      <code>PR00</code> on every component's Conditions tab (CPU ₹8,000,
      Monitor ₹6,000, Keyboard ₹500, Mouse ₹500) — but each is marked with
      an <strong>inactive</strong> symbol against <code>PR00</code>. The
      order's <strong>total net value is still only ₹15,000</strong> — the
      header item's price alone — confirming the component prices are purely
      statistical and have zero effect on what the customer is actually
      charged.
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
         Which item category carries Pricing = B, and what two effects
         does that value produce?
        </td>
        <td>
         TANN (Free Goods); it determines condition type R100 on the item
         and makes the free goods item's net value zero
        </td>
       </tr>
       <tr>
        <td>What does Statistical Value control?</td>
        <td>
         Whether a line item's price condition, once determined, is
         active or inactive in the document's total — checked (X) means
         the price still displays but does not affect net value
        </td>
       </tr>
       <tr>
        <td>Why do BOM component items normally show no price at all?</td>
        <td>
         Because BOM header pricing is designed to charge the customer
         only for the finished/header item (Item Category Group ERLA);
         component item categories carry Pricing = blank by default, so
         no price condition is ever determined on them
        </td>
       </tr>
       <tr>
        <td>
         What two settings must be changed together to give BOM
         components a reporting-only price?
        </td>
        <td>
         Pricing = X (so a price condition determines at all) and
         Statistical Value = X (so that price stays inactive and doesn't
         add to the document's net value), both on the component item
         category
        </td>
       </tr>
       <tr>
        <td>
         What Item Category Group distinguishes a BOM header material
         from its components?
        </td>
        <td>
         The header material carries Item Category Group ERLA; the
         component materials carry the standard NORM
        </td>
       </tr>
       <tr>
        <td>
         What BOM Usage value is selected when creating a BOM for Sales
         and Distribution via CS01?
        </td>
        <td>5 (Sales and Distribution)</td>
       </tr>
       <tr>
        <td>
         What item category is used for each component line inside the
         BOM itself (CS01), and what does it mean?
        </td>
        <td>L — Stock Item</td>
       </tr>
       <tr>
        <td>
         In the worked demo, what was the order's total net value after
         enabling statistical component pricing, and why?
        </td>
        <td>
         Still ₹15,000 — only the header item's price counts toward net
         value; the component prices, though now visible, are marked
         inactive and contribute nothing to the total
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
         Define Item Categories — Pricing and Statistical Value fields
         covered today; item category P10 used for the recap, TAE (BOM
         sub-item, audio-flagged) changed for the demo
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MM01</span></td>
        <td>
         Create Material — used to create the BOM header material (P
         Computer, ERLA) and the four component materials (NORM)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">CS01</span></td>
        <td>
         Create Bill of Material (BOM) — used to link the header material
         to its components with BOM Usage 5 (Sales and Distribution) and
         item category L
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VK11</span></td>
        <td>
         Create Condition Record — used to maintain PR00 prices for the
         header material and each component
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — order type PPOR, used twice (before and
         after the item category change) to compare component pricing
         behavior
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
        <td>Pricing = B item category</td>
        <td>
         TANN (Free Goods) only — determines condition type R100, makes
         item value zero
        </td>
       </tr>
       <tr>
        <td>Statistical Value</td>
        <td>
         Blank = price (if any) counts toward net value; X = price
         condition determines but is inactive, no effect on net value
        </td>
       </tr>
       <tr>
        <td>BOM component statistical pricing setup</td>
        <td>
         On the component item category: Pricing = X and Statistical
         Value = X, together
        </td>
       </tr>
       <tr>
        <td>BOM header material settings</td>
        <td>
         Item Category Group ERLA, Plant P100, Division P1, Account
         Assignment Group 03, Availability Check 02, MRP Type PD, Lot
         Size EX, Scheduling Margin Key 01
        </td>
       </tr>
       <tr>
        <td>BOM component material settings</td>
        <td>
         Item Category Group NORM; CPU additionally carries Valuation
         Class 7920
        </td>
       </tr>
       <tr>
        <td>BOM creation (CS01)</td>
        <td>
         BOM Usage 5 = Sales and Distribution; component item category L
         = Stock Item; quantity 1 per component
        </td>
       </tr>
       <tr>
        <td>Worked demo prices (PR00)</td>
        <td>
         P Computer ₹15,000; P CPU ₹8,000; P Monitor ₹6,000; P Keyboard
         ₹500; P Mouse ₹500
        </td>
       </tr>
       <tr>
        <td>Worked demo order</td>
        <td>
         Order type PPOR, customer 100640, material P Computer qty 1 —
         components auto-determined as items 11–14
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This shortened lecture briefly reconfirmed <strong>Pricing</strong>
      (blank/X/B, with B unique to the Free Goods item category TANN,
      driving condition type R100 and a zero net value), then covered
      <strong>Statistical Value</strong> — the field that lets a price
      condition determine and display without affecting the document's net
      total. The bulk of the session was a full end-to-end
      <strong>BOM header-pricing scenario</strong>: creating a header
      material (<code>P Computer</code>, Item Category Group ERLA) and four
      component materials (CPU, Monitor, Keyboard, Mouse, Item Category
      Group NORM) via MM01, linking them with a Bill of Material via
      <span className="tcode">CS01</span> (BOM Usage 5, item category L,
      quantity 1 each), maintaining PR00 prices for all five materials, and
      creating a sales order to show the default behavior — only the header
      item is priced, components show no price at all. The component item
      category (flagged as likely <code>TAE</code> given unclear audio) was
      then changed to Pricing = X and Statistical Value = X, and the order
      was recreated to show components now displaying a price that is marked
      <strong>inactive</strong>, leaving the order's total net value
      unchanged at ₹15,000 — confirming the statistical price is purely for
      reporting. The remaining Item Category controls were deferred to the
      next class due to the shortened session.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Statistical Value never works alone</strong> — it only has a
       visible effect once Pricing is also switched to X on the same item
       category; Statistical Value by itself doesn't create a price, it
       just neutralizes one that Pricing has enabled
      </li>
      <li>
       <strong
       >BOM header pricing is an Item Category Group decision, not an
        Item Category decision</strong
       >
       — ERLA vs. NORM on the material master is what separates a priced
       header from its unpriced components, before item category controls
       even come into play
      </li>
      <li>
       <strong
       >"Inactive" pricing is SAP's built-in way to reconcile reporting
        needs against billing accuracy</strong
       >
       — clients get component-level sales reporting without the risk of
       accidentally double-charging for the same physical product
      </li>
      <li>
       <strong
       >BOM Usage 5 specifically scopes the BOM to Sales and
        Distribution</strong
       >
       — other BOM usages (production, costing, etc.) are separate and not
       what SD processing reads
      </li>
      <li>
       <strong>Verify the exact BOM sub-item category code</strong> — this
       session's audio only ever rendered it as "TA"; confirm against the
       system whether it is TAE or another code before using it in a client
       configuration
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> the remaining Item Category controls,
      continuing from where today left off.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 55 Notes — Statistical Value &amp; the BOM Pricing Scenario 🎓
   </p>
  </div>
 );
};

export default SalesDocument55;
