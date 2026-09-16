const SalesDocument63 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-orange">
    <h1>
     📇 Lecture 63 — Delivery Item Categories &amp; Their Determination
    </h1>
    <p>
     SAP SD | Delivery Item Category controls (0VLP) — Statistics Group,
     Check Quantity Zero, Check Minimum Quantity, Check Over Delivery (with
     Customer Master &amp; CMIR tolerance), Availability Check, Relevant for
     Picking, Determine Storage Location, Automatic Batch Determination,
     Packing Control — then Delivery Item Category Determination (0184): when
     the delivery copies the order's item category vs. when it determines its
     own
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class finished Delivery Types (<span className="tcode"
      >OVLK</span
      >/<span className="tcode">VOV8</span>) — Document Category, Number
      Systems, Order Required, Default Order Type, Item Requirement, and
      Storage Location Rule (<code>MALA</code> then <code>RETA</code>, via
      <span className="tcode">OVL3</span>). Today moves one level down:
      <strong>Delivery Item Categories</strong>
      (<span className="tcode">0VLP</span>) and how they're determined
      (<span className="tcode">0184</span>).
     </div>
    </div>

    {/* <!-- Section 1: Delivery Item Categories - Introduction --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Delivery Item Categories — Introduced
     </h2>
     <div className="callout teal">
      💡 T-code <span className="tcode">0VLP</span> — note this is
      <strong>zero</strong>-VLP, not "O"VLP. SPRO path: Logistics Execution
      → Shipping → Deliveries → Define Item Categories for Deliveries.
     </div>
     <div className="callout blue">
      📖 <strong>Item categories here are not separately created</strong> —
      whatever item category is defined on the sales document side (<span
       className="tcode"
      >VOV7</span
      >) automatically appears in this list. This course's custom
      <code>P10</code>, for example, shows up here automatically without any
      extra step.
     </div>
    </div>

    {/* <!-- Section 2: Item Category Statistics Group --> */}
    <div className="card orange">
     <h2><span className="badge">2</span> Item Category Statistics Group</h2>
     <div className="callout orange">
      💡 <strong>Item Category Statistics Group</strong> controls whether
      delivery data is updated into
      <strong>LIS (Logistics Information System)</strong>
      reports — SAP's management reporting tool — or not.
     </div>
    </div>

    {/* <!-- Section 3: Check Quantity Zero --> */}
    <div className="card purple">
     <h2><span className="badge">3</span> Check Quantity Zero</h2>
     <div className="callout purple">
      💡 <strong>Check Quantity Zero</strong> controls how the system
      responds if the delivery quantity for an item is
      <strong>zero</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Value</th>
        <th>Effect</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank</td>
        <td>No message</td>
       </tr>
       <tr>
        <td><code>A</code></td>
        <td>Warning message</td>
       </tr>
       <tr>
        <td><code>B</code></td>
        <td>Error message</td>
       </tr>
       <tr>
        <td><code>C</code></td>
        <td>
         Error message, but only when the quantity is zeroed out in
         <strong>change mode</strong> — not enforced at initial creation
        </td>
       </tr>
      </tbody>
     </table>

     <h3>Worked Demonstration</h3>
     <div className="stepper">
      <div className="step">
       Create an order for 100 quantity, save, create the delivery. Remove
       the delivery quantity on the line item — with
       <code>A</code> maintained, the system gives a
       <strong>warning</strong>: "Delivery quantity must be entered for the
       item."
      </div>
      <div className="step">
       Change the setting to <code>B</code>. Create the delivery again and
       remove the quantity — this time the system gives an
       <strong>error</strong> and does not allow proceeding further.
      </div>
      <div className="step">
       With <code>C</code>, removing the quantity is only blocked when done
       in <strong>change mode</strong> on an existing delivery document —
       the system won't let the quantity be zeroed out after the fact.
      </div>
     </div>
    </div>

    {/* <!-- Section 4: Check Minimum Quantity --> */}
    <div className="card red">
     <h2><span className="badge">4</span> Check Minimum Quantity</h2>
     <div className="callout red">
      💡 <strong>Check Minimum Quantity</strong> controls how the system
      responds if the delivery quantity is less than the
      <strong>minimum delivery quantity</strong> maintained for that
      material — same Blank/<code>A</code>/<code>B</code>
      logic as above (no message / warning / error).
     </div>
     <div className="callout blue">
      📖
      <strong
      >Where minimum delivery quantity comes from — priority
       order:</strong
      >
      it can be maintained in <strong>two</strong> places — the Material
      Master (Sales Org. 1 view) and <strong>CMIR</strong> (Customer
      Material Info Record, <span className="tcode">VD52</span>). If a CMIR
      exists for that specific customer + material combination, CMIR's value
      takes <strong>first preference</strong>. Only if no CMIR exists does
      the system fall back to the Material Master's value.
     </div>

     <h3>Worked Demonstration</h3>
     <div className="stepper">
      <div className="step">
       Check <span className="tcode">VD52</span> for the customer +
       Material A (no CMIR exists) and Material B (a CMIR exists, with
       Minimum Delivery Quantity maintained as <strong>200</strong>).
      </div>
      <div className="step">
       In the Material Master (Sales Org. 1 view), maintain Minimum
       Delivery Quantity as <strong>100</strong> on
       <strong>both</strong> materials.
      </div>
      <div className="step">
       Create an order for Material A (no CMIR) for 90 quantity, create the
       delivery. With Check Minimum Quantity =
       <code>A</code>, a warning appears: "Delivery quantity is less than
       minimum delivery quantity 100" — the Material Master value is used,
       since no CMIR exists.
      </div>
      <div className="step">
       Set Check Minimum Quantity to <code>B</code> and repeat — this time
       it's an error, blocking the delivery.
      </div>
      <div className="step">
       Set Check Minimum Quantity back to <code>A</code>. Create an order
       for Material B (which has a CMIR) for 100 quantity — even though 100
       meets the Material Master's minimum, the delivery still triggers:
       "Delivery quantity is less than minimum delivery quantity 200,"
       because the CMIR value (200) overrides the Material Master value
       (100) for this specific customer + material combination.
      </div>
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the material codes spoken in this demo
      (rendered as "N20 0600 BOT" and "N20 0500 BOT") are treated here as
      the standard test material naming pattern used throughout this course;
      exact digits should be confirmed against the system.
     </p>
    </div>

    {/* <!-- Section 5: Check Over Delivery --> */}
    <div className="card gold">
     <h2><span className="badge">5</span> Check Over Delivery</h2>
     <div className="callout gold">
      💡 <strong>Check Over Delivery</strong> controls how the system
      responds if the delivery quantity is <strong>more than</strong> the
      order (target) quantity — again Blank/<code>A</code>/<code>B</code>
      for no message / warning / error.
     </div>
     <div className="callout blue">
      📖 <strong>Linked field: Over Delivery Tolerance.</strong> This field
      lives on the <strong>Customer Master</strong> (Shipping tab) and can
      also be overridden per customer + material in <strong>CMIR</strong>.
      If a tolerance percentage is maintained, the system allows the
      delivery quantity to exceed the order quantity by up to that
      percentage <strong>without any message</strong> — Check Over
      Delivery's warning/error only fires once the tolerance is
      <strong>exceeded</strong>.
     </div>

     <h3>Worked Demonstration</h3>
     <div className="stepper">
      <div className="step">
       With no Over Delivery Tolerance maintained on the customer, create
       an order for 100 quantity (a material with no CMIR). Increase the
       delivery quantity to 101 — the system immediately shows: "Delivery
       quantity is greater than target quantity 100" (warning, since Check
       Over Delivery =
       <code>A</code>).
      </div>
      <div className="step">
       Set Check Over Delivery to <code>B</code> — increasing the delivery
       quantity by even 1 now throws a hard error.
      </div>
      <div className="step">
       Maintain Over Delivery Tolerance = <strong>30%</strong> on the
       Customer Master. <strong>Important:</strong> changes to master data
       do <strong>not</strong> retroactively apply to already-created sales
       orders — a fresh order must be created to see the new tolerance take
       effect.
      </div>
      <div className="step">
       Create a new order for 100 quantity, create the delivery, and
       increase the quantity to 120 — no message at all (within the 30%
       band, i.e. up to 130). Increase to 131 — the message reappears,
       since 131 exceeds the 130 ceiling (100 + 30%).
      </div>
      <div className="step">
       On the Customer Master, check
       <strong>Unlimited Tolerance</strong> instead. With this checked,
       Check Over Delivery has <strong>no effect at all</strong> — creating
       a fresh order for 100 and increasing delivery quantity to 200, then
       even to 500, produces no message whatsoever.
      </div>
     </div>
     <div className="callout purple">
      📖 <strong>Summary of the relationship:</strong> Check Over Delivery
      (item category level) only ever fires <strong>beyond</strong> whatever
      Over Delivery Tolerance allows (Customer Master or CMIR); if Unlimited
      Tolerance is checked, Check Over Delivery is effectively switched off.
     </div>
    </div>

    {/* <!-- Section 6: Availability Check --> */}
    <div className="card pink">
     <h2>
      <span className="badge">6</span> Availability Check (Delivery Item
      Category Level)
     </h2>
     <div className="callout pink">
      💡 This field controls whether the system performs an availability
      check <strong>in the delivery document</strong>
      itself.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Value</th>
        <th>Effect</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank</td>
        <td>Perform availability check in delivery</td>
       </tr>
       <tr>
        <td><code>X</code></td>
        <td>Do not check availability</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 7: Relevant for Picking --> */}
    <div className="card indigo">
     <h2><span className="badge">7</span> Relevant for Picking</h2>
     <div className="callout indigo">
      💡 <strong>Relevant for Picking</strong> controls whether the
      <strong>Pick Quantity</strong> field is enabled on the delivery's
      Picking tab, and whether it must be filled before PGI is allowed.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Setting</th>
        <th>Effect</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Checked</td>
        <td>
         Pick Quantity field is enabled; the user must enter a pick
         quantity before PGI is allowed — PGI without it throws an error
        </td>
       </tr>
       <tr>
        <td>Unchecked</td>
        <td>
         Pick Quantity field is disabled; PGI is allowed without entering
         any pick quantity at all
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖 <strong>Item categories that come unchecked by default:</strong>
      <code>REN</code> (Returns — a return delivery isn't something you
      "pick" in the warehouse sense), <code>KEN</code> (Consignment Issue —
      the goods were already physically delivered back at Consignment
      Fill-Up, so there's nothing left to pick here),
      <code>KRN</code> (Consignment Returns), <code>KAN</code> (Consignment
      Pick-Up), and the BOM item categories <code>TAE</code> and
      <code>TAP</code> (the BOM main items, since picking happens for the
      components, not the BOM header line itself).
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the second item category in this
      unchecked list is rendered in the recording as "KN" — corrected here
      to <code>KEN</code> (Consignment Issue), consistent with the code
      already established across earlier lectures.
     </p>
    </div>

    {/* <!-- Section 8: Determine Storage Location & Batch Determination --> */}
    <div className="card brown">
     <h2>
      <span className="badge">8</span> Determine Storage Location &amp;
      Automatic Batch Determination
     </h2>
     <div className="callout brown">
      💡 <strong>Determine Storage Location</strong> is the
      item-category-level gate on top of the <strong>MALA</strong>/<strong
      >RETA</strong
      >
      rule setup (<span className="tcode">OVL3</span>, covered last class).
      Even if a Shipping Point + Plant + Storage Conditions mapping exists
      in <span className="tcode">OVL3</span>, that mapping only takes effect
      for a given item category if this field is <strong>checked</strong>.
      If unchecked, the storage location must be entered manually every
      time, regardless of what's configured in
      <span className="tcode">OVL3</span>.
     </div>
     <div className="callout gold">
      💡 <strong>Automatic Batch Determination</strong> (delivery item
      category level): if checked, the batch number is determined
      automatically in the delivery document. This mirrors the same-named
      field already covered at the <strong>sales order</strong> item
      category level in Lecture 56 — there it was noted as rarely used at
      the order level, with batch determination normally happening at the
      delivery stage instead; this is that delivery-level field.
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the transaction code for storage
      location determination is rendered in the recording as "OBL 3" —
      corrected throughout to <span className="tcode">OVL3</span>, matching
      Lecture 62's established value.
     </p>
    </div>

    {/* <!-- Section 9: Packing Control --> */}
    <div className="card cyan">
     <h2><span className="badge">9</span> Packing Control</h2>
     <div className="callout cyan">
      💡 <strong>Packing Control</strong> controls whether the material must
      be packed, can optionally be packed, or cannot be packed at all.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Value</th>
        <th>Effect</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank</td>
        <td>Can be packed (optional)</td>
       </tr>
       <tr>
        <td><code>A</code></td>
        <td>Must be packed</td>
       </tr>
       <tr>
        <td><code>B</code></td>
        <td>Cannot be packed</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 10: Delivery Item Category Determination --> */}
    <div className="card purple">
     <h2>
      <span className="badge">🆕</span> Delivery Item Category Determination
      (T-code 0184)
     </h2>
     <div className="callout purple">
      💡 T-code <span className="tcode">0184</span>. SPRO path is the same
      family as Delivery Types and Delivery Item Categories: Logistics
      Execution → Shipping → Deliveries → Define Item Categories for
      Deliveries → Assign Delivery Item Categories. A delivery item category
      is determined from a combination of <strong>Delivery Type</strong>,
      <strong>Item Category Group</strong>, <strong>Item Usage</strong>, and
      <strong>Higher-Level Item Category</strong> — the same four-field
      shape already familiar from Item Category Determination (<span
       className="tcode"
      >VOV4</span
      >, Lectures 56–57), but using Delivery Type in place of Sales Document
      Type.
     </div>
     <div className="callout gold">
      📖
      <strong>The default behavior — copy, don't re-determine:</strong> when
      a delivery is created
      <strong>with reference to a sales order</strong>, the system simply
      <strong>copies the item category as-is</strong> from the order to the
      delivery — <span className="tcode">0184</span> is not even consulted.
      Example: order type <code>PPOR</code> → item category
      <code>P10</code> on the order; the delivery created against it also
      shows <code>P10</code>, unchanged.
     </div>
     <div className="callout blue">
      📖
      <strong>When 0184 actually gets used — four scenarios:</strong> only
      when there's no order-side item category to simply copy.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Delivery Type</th>
        <th>Item Category Group</th>
        <th>Item Usage</th>
        <th>Higher-Level</th>
        <th>Delivery Item Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Delivery Without Order Reference</td>
        <td><code>LO</code></td>
        <td><code>NORM</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>DLN</code></td>
       </tr>
       <tr>
        <td>New Line Item Added Directly in Delivery</td>
        <td><code>LF</code> (or custom, e.g. <code>PPLF</code>)</td>
        <td><code>NORM</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>DLN</code></td>
       </tr>
       <tr>
        <td>Stock Transport Order (STO)</td>
        <td><code>NL</code></td>
        <td><code>NORM</code></td>
        <td><code>V</code></td>
        <td>Blank</td>
        <td><code>NLN</code></td>
       </tr>
       <tr>
        <td>STO Returns</td>
        <td><code>NLR</code></td>
        <td><code>NORM</code></td>
        <td><code>V</code></td>
        <td>Blank</td>
        <td><code>NLRN</code></td>
       </tr>
       <tr>
        <td>Intercompany STO</td>
        <td><code>NLCC</code></td>
        <td><code>NORM</code></td>
        <td><code>V</code></td>
        <td>Blank</td>
        <td><code>NLC</code></td>
       </tr>
       <tr>
        <td>Intercompany STO Returns</td>
        <td><code>NCR</code></td>
        <td><code>NORM</code></td>
        <td><code>V</code></td>
        <td>Blank</td>
        <td><code>NCRN</code></td>
       </tr>
       <tr>
        <td>Batch Split</td>
        <td><code>LF</code></td>
        <td><code>NORM</code></td>
        <td><code>CHSP</code></td>
        <td>Blank</td>
        <td><code>TAN</code></td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      📖 <strong>Batch Split, explained:</strong> if the delivery quantity
      for a batch-managed material isn't available in a single batch, the
      system automatically splits the line into
      <strong>multiple batches</strong> to cover the full quantity — each
      split line needs its own item category determination, which is where
      Item Usage <code>CHSP</code> and delivery item category
      <code>TAN</code> come in.
     </div>
     <p className="note-text">
      📌 <strong>New Item Usage codes introduced this lecture:</strong>
      <code>V</code> (used across the entire STO family) and
      <code>CHSP</code> (Batch Split) — both distinct from the six Item
      Usage codes already covered for sales order Item Category
      Determination in Lecture 57 (<code>FRE</code>, <code>PSHP</code>,
      <code>PSCL</code>, <code>PSA1</code>, <code>PSA2</code>,
      <code>CSCL</code>). These new codes are specific to Delivery Item
      Category Determination.
     </p>
     <p className="note-text">
      📌 The recording confirms all seven rows live in the system via
      <span className="tcode">0184</span>: <code>LO</code>/NORM →
      <code>DLN</code>; <code>LF</code>/NORM → <code>DLN</code>;
      <code>NL</code>/NORM/<code>V</code> → <code>NLN</code>;
      <code>NLR</code>/NORM/<code>V</code> → <code>NLRN</code>;
      <code>NLCC</code>/NORM/<code>V</code> → <code>NLC</code>;
      <code>NCR</code>/NORM/<code>V</code> → <code>NCRN</code>;
      <code>LF</code>/NORM/<code>CHSP</code> → <code>TAN</code>. Every other
      scenario simply copies the item category forward from the order.
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
         Where do delivery item categories come from, and do they need
         separate creation?
        </td>
        <td>
         They automatically appear in 0VLP once created on the sales side
         (VOV7) — no separate creation step is needed
        </td>
       </tr>
       <tr>
        <td>What does Item Category Statistics Group control?</td>
        <td>
         Whether delivery data is updated into LIS (Logistics Information
         System) reports, SAP's management reporting tool
        </td>
       </tr>
       <tr>
        <td>
         What are the four values of Check Quantity Zero, and what does
         each do?
        </td>
        <td>
         Blank = no message; A = warning; B = error; C = error only when
         the quantity is zeroed out in change mode, not at initial
         creation
        </td>
       </tr>
       <tr>
        <td>
         Where can minimum delivery quantity be maintained, and which
         takes priority?
        </td>
        <td>
         Material Master (Sales Org. 1 view) and CMIR (Customer Material
         Info Record); if a CMIR exists for that customer + material, its
         value takes first preference over the Material Master
        </td>
       </tr>
       <tr>
        <td>
         How does Over Delivery Tolerance interact with Check Over
         Delivery?
        </td>
        <td>
         Over Delivery Tolerance (Customer Master or CMIR) sets a
         percentage the delivery quantity can exceed the order quantity
         with no message at all; Check Over Delivery's warning/error only
         fires once that tolerance is exceeded — and has no effect
         whatsoever if Unlimited Tolerance is checked
        </td>
       </tr>
       <tr>
        <td>
         Why doesn't changing Over Delivery Tolerance on the Customer
         Master affect an already-created sales order?
        </td>
        <td>
         Master data changes are not retroactively applied to existing
         sales orders/deliveries; a new order must be created after the
         change to see the new tolerance take effect
        </td>
       </tr>
       <tr>
        <td>
         What does Availability Check control at the delivery item
         category level, and what are its values?
        </td>
        <td>
         Whether an availability check runs in the delivery document;
         Blank = check, X = do not check
        </td>
       </tr>
       <tr>
        <td>
         What does Relevant for Picking control, and which item
         categories typically have it unchecked?
        </td>
        <td>
         Whether the Pick Quantity field is enabled and mandatory before
         PGI; typically unchecked for REN, KEN, KRN, KAN, TAE, and TAP,
         since none of these represent a physical pick from the warehouse
        </td>
       </tr>
       <tr>
        <td>
         What is the relationship between Determine Storage Location
         (item category) and OVL3?
        </td>
        <td>
         OVL3 sets up the MALA/RETA rule mapping, but that mapping only
         takes effect for a given item category if Determine Storage
         Location is checked on it; otherwise the location must be
         entered manually regardless of the OVL3 setup
        </td>
       </tr>
       <tr>
        <td>What does Packing Control's three values mean?</td>
        <td>
         Blank = can be packed (optional); A = must be packed; B = cannot
         be packed
        </td>
       </tr>
       <tr>
        <td>
         What four fields determine a Delivery Item Category (0184), and
         when is this determination actually used?
        </td>
        <td>
         Delivery Type + Item Category Group + Item Usage + Higher-Level
         Item Category; used only when there's no order to copy from —
         Delivery Without Order Reference, adding a new line item
         directly in a delivery, the STO family, and Batch Split; every
         other case simply copies the item category forward from the
         sales order
        </td>
       </tr>
       <tr>
        <td>
         What Item Usage codes are used in Delivery Item Category
         Determination, and are they the same as the sales-order ones
         from Lecture 57?
        </td>
        <td>
         V (used across the whole STO family) and CHSP (Batch Split) —
         both new codes specific to delivery item category determination,
         distinct from FRE/PSHP/PSCL/PSA1/PSA2/CSCL used in sales order
         Item Category Determination
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
        <td><span className="tcode">0VLP</span></td>
        <td>
         Define Item Categories for Deliveries — Statistics Group, Check
         Quantity Zero, Check Minimum Quantity, Check Over Delivery,
         Availability Check, Relevant for Picking, Determine Storage
         Location, Automatic Batch Determination, and Packing Control all
         live here
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VD52</span></td>
        <td>
         Change Customer Material Info Record (CMIR) — used to
         check/maintain Minimum Delivery Quantity and Over Delivery
         Tolerance for a specific customer + material combination
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used throughout to test Check Quantity
         Zero, Check Minimum Quantity, and Check Over Delivery via fresh
         orders
        </td>
       </tr>
       <tr>
        <td>
         <span className="tcode">VL01N</span> /
         <span className="tcode">VL02N</span>
        </td>
        <td>
         Create/Change Delivery — used to trigger and observe all the
         0VLP-level messages, and to test Relevant for Picking and
         Determine Storage Location
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OVL3</span></td>
        <td>
         Storage Location Determination — the MALA/RETA rule setup that
         Determine Storage Location (item category level) gates access to
        </td>
       </tr>
       <tr>
        <td><span className="tcode">0184</span></td>
        <td>
         Delivery Item Category Determination — Delivery Type + Item
         Category Group + Item Usage + Higher-Level Item Category →
         Delivery Item Category, used only in the four special scenarios
         (no order reference, new line item, STO family, batch split)
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
        <td>Item Category Statistics Group</td>
        <td>Controls whether delivery data updates into LIS reports</td>
       </tr>
       <tr>
        <td>Check Quantity Zero</td>
        <td>
         Blank = no message; A = warning; B = error; C = error only in
         change mode
        </td>
       </tr>
       <tr>
        <td>Check Minimum Quantity</td>
        <td>
         Blank/A/B (no message/warning/error) if delivery qty &lt;
         minimum delivery qty; source priority: CMIR first, Material
         Master (Sales Org. 1) as fallback
        </td>
       </tr>
       <tr>
        <td>Check Over Delivery + Over Delivery Tolerance</td>
        <td>
         Blank/A/B if delivery qty &gt; order qty, but only beyond
         whatever % Over Delivery Tolerance (Customer Master/CMIR)
         allows; Unlimited Tolerance checked = Check Over Delivery has no
         effect
        </td>
       </tr>
       <tr>
        <td>Availability Check (item category level)</td>
        <td>Blank = check availability in delivery; X = skip it</td>
       </tr>
       <tr>
        <td>Relevant for Picking</td>
        <td>
         Checked = Pick Quantity mandatory before PGI; unchecked = PGI
         allowed without it; unchecked by default on REN, KEN, KRN, KAN,
         TAE, TAP
        </td>
       </tr>
       <tr>
        <td>
         Determine Storage Location / Automatic Batch Determination
        </td>
        <td>
         Determine Storage Location gates whether OVL3's MALA/RETA
         mapping applies to this item category; Automatic Batch
         Determination auto-picks the batch number in the delivery
         (delivery-level counterpart to the Lecture 56 order-level field)
        </td>
       </tr>
       <tr>
        <td>Packing Control</td>
        <td>
         Blank = can be packed; A = must be packed; B = cannot be packed
        </td>
       </tr>
       <tr>
        <td>Delivery Item Category Determination (0184)</td>
        <td>
         Delivery Type + Item Category Group + Item Usage + Higher-Level
         Item Category; used only for Delivery Without Order Reference
         (LO/NORM → DLN), new line item added in delivery (LF/NORM →
         DLN), STO family (NL/NLR/NLCC/NCR + NORM + Usage V →
         NLN/NLRN/NLC/NCRN), and Batch Split (LF/NORM + Usage CHSP →
         TAN); all other cases copy the item category as-is from the
         order
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture covered <strong>Delivery Item Categories</strong> (<span
       className="tcode"
      >0VLP</span
      >), which automatically inherit from whatever item categories are
      defined on the sales side (<span className="tcode">VOV7</span>). Its
      controls were worked through one by one:
      <strong>Item Category Statistics Group</strong> (LIS reporting),
      <strong>Check Quantity Zero</strong> (Blank/A/B/C, demoed live from
      warning through hard error to change-mode-only enforcement),
      <strong>Check Minimum Quantity</strong> (demoed with CMIR overriding
      Material Master), <strong>Check Over Delivery</strong> (demoed
      alongside Customer Master's Over Delivery Tolerance percentage and
      Unlimited Tolerance override — with the important caveat that master
      data changes never retroactively affect existing orders),
      <strong>Availability Check</strong>,
      <strong>Relevant for Picking</strong> (with its standard unchecked
      list: REN, KEN, KRN, KAN, TAE, TAP),
      <strong>Determine Storage Location</strong> (the item-category gate on
      top of <span className="tcode">OVL3</span>'s MALA/RETA rules),
      <strong>Automatic Batch Determination</strong>, and
      <strong>Packing Control</strong> (Blank/A/B for optional/
      mandatory/forbidden packing). The lecture then introduced
      <strong>Delivery Item Category Determination</strong>
      (<span className="tcode">0184</span>): the same four-field
      determination shape as sales order Item Category Determination, but
      keyed on Delivery Type instead of Sales Document Type — and used only
      in four scenarios (Delivery Without Order Reference, adding a new line
      item directly in a delivery, the STO family, and Batch Split), since
      in every other case the delivery simply copies the item category
      forward from the sales order without re-determining it.
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
       >Delivery item categories are inherited, not authored
        separately</strong
       >
       — anything created in VOV7 on the sales side shows up in 0VLP
       automatically; there's no parallel "create" step to remember.
      </li>
      <li>
       <strong>CMIR consistently outranks the Material Master</strong> —
       this lecture is the second time (after minimum delivery quantity)
       that a CMIR value for a specific customer + material combination has
       taken priority over the general Material Master setting; expect this
       pattern to keep repeating.
      </li>
      <li>
       <strong>Tolerance fields gate their paired "Check" fields</strong> —
       Over Delivery Tolerance decides <em>how much slack</em> exists
       before Check Over Delivery even has anything to evaluate; Unlimited
       Tolerance removes the check's effect entirely.
      </li>
      <li>
       <strong>Master data changes are never retroactive</strong> — worth
       remembering any time a demo doesn't behave as expected: the fix is
       usually to create a fresh document, not to re-check the
       configuration.
      </li>
      <li>
       <strong
       >0184's real lesson is when it's skipped, not when it
        fires</strong
       >
       — the vast majority of deliveries never touch this determination at
       all; item category simply rides along from the order. The four
       listed exceptions are worth memorizing precisely because they're
       exceptions.
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Billing Types, completing the
      remaining Billing Type controls — then Pricing begins the following
      Monday.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 63 Notes — Delivery Item Categories &amp; Their Determination 🎓
   </p>
  </div>
 );
};

export default SalesDocument63;
