const Business46 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-blue">
    <h1>
     📜 Lecture 46 — Quantity Contract, Value Contract &amp; Scheduling
     Agreement
    </h1>
    <p>
     SAP SD | Four long-term customer agreements — Quantity Contract, Value
     Contract General (with Assortment Module), Value Contract
     Material-Specific, and Scheduling Agreement — and how each one is drawn
     down over time via Release Orders
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered the Subsequent Delivery Free of Charge
      (Replacement/Exchange) process. Today's class re-confirmed that flow
      live in the system, then moved into the family of
      <strong>Contracts</strong> — long-term agreements between company and
      customer that get drawn down piece by piece over time through
      <strong>Release Orders</strong> — covering Quantity Contract, Value
      Contract (General and Material-Specific), and Scheduling Agreement.
     </div>
    </div>

    {/* <!-- Section 1: SDF Recap --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Quick Recap — Subsequent Delivery
      Free of Charge Flow
     </h2>
     <div className="callout teal">
      💡 The class re-walked the Replacement/Exchange flow from the previous
      lecture to reinforce the sequence before moving to new material.
     </div>
     <div className="stepper">
      <div className="step">
       Create <strong>Return Order</strong> (<span className="tcode"
       >VA01</span
       >, order type <code>RE</code>) with reference to the original
       invoice → mention the returned quantity (worked example:
       <code>60</code> units) and reason → Save.
      </div>
      <div className="step">
       Create <strong>Return Delivery</strong> (<span className="tcode"
       >VL01N</span
       >, storage location <code>P105</code>) → post <strong>PGR</strong>.
      </div>
      <div className="step">
       <span className="tcode">VA02</span> → Change Mode of the Return
       Order → go to the <strong>Reason for Rejection</strong> tab → enter
       a reason (e.g., "customer to receive replacement") → Save.
      </div>
      <div className="step">
       Create the <strong>Subsequent Delivery Free of Charge</strong> order
       (<span className="tcode">VA01</span>, order type <code>SDF</code>)
       with reference to the Return Order number → Copy → Save.
      </div>
      <div className="step">
       Create the replacement <strong>Delivery</strong> → Picking → PGI. No
       invoice follows.
      </div>
     </div>
    </div>

    {/* <!-- Section 2: Quantity Contract - Concept --> */}
    <div className="card orange">
     <h2><span className="badge">2</span> Quantity Contract — Concept</h2>
     <div className="callout orange">
      💡 A <strong>Quantity Contract</strong> is an
      <strong
      >agreement between company and customer for supplying goods of a
       particular quantity, within a specific validity period</strong
      >.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Property</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Document Type</td>
        <td><code>QC</code></td>
       </tr>
       <tr>
        <td>T-Code (Create Contract)</td>
        <td><span className="tcode">VA41</span></td>
       </tr>
       <tr>
        <td>Key Fields</td>
        <td>Item, Material, Target Quantity, Valid From, Valid To</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Item 10, Material
      <code>WAX1020</code>, Target Quantity <code>10,000</code> units, Valid
      From <code>1st July 2026</code> to <code>30th June 2027</code> (one
      year).
     </div>
     <div className="callout gold">
      🤝 <strong>Mutual benefit of any contract:</strong> the
      <strong>customer</strong> gets the contract price locked in for the
      whole validity period, even if the market price rises later (or the
      company may instead offer discounts if it isn't willing to hold
      price); the <strong>company</strong> gets
      <strong>assured/guaranteed sales volume</strong> for the period.
      Exactly which benefit applies depends on what the client negotiates.
     </div>
    </div>

    {/* <!-- Section 3: Quantity Contract - System Steps --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Quantity Contract — Release Orders
      &amp; Tracking
     </h2>
     <div className="callout purple">
      💡 The customer never draws the full contracted quantity at once. Each
      time the customer wants to buy some of it, they place an order — this
      is called a
      <strong>Release Order</strong>: an ordinary sales order (order type
      <code>OR</code>, T-code <span className="tcode">VA01</span>) created
      <strong>with reference to the Contract</strong> instead of from
      scratch.
     </div>
     <div className="stepper">
      <div className="step">
       Create the contract: <span className="tcode">VA41</span> → type
       <code>QC</code> → Sales Area → Customer, PO number, Validity dates,
       Material, Target Quantity (<code>10,000</code>) → Save.
      </div>
      <div className="step">
       <strong>Release Order 1:</strong>
       <span className="tcode">VA01</span> → order type <code>OR</code> →
       Create with Reference → Contract tab → search the contract number
       (F4) → double-click it → click <strong>Item Selection</strong> →
       enter the quantity the customer wants now (e.g., <code>500</code>) →
       Copy → mention the PO number → Save → create Delivery + Invoice as
       usual.
      </div>
      <div className="step">
       <strong>Release Order 2:</strong> customer later wants
       <code>1,000</code> more — repeat the same steps with reference to
       the same contract.
      </div>
      <div className="step">
       <span className="tcode">VA42</span> (Change Mode of Contract) →
       check the contract's item detail: the
       <strong>cumulative released quantity updates automatically</strong>
       after each release order — after two release orders, it shows
       <code>1,500</code> released out of the <code>10,000</code>
       target.
      </div>
     </div>
    </div>

    {/* <!-- Section 4: Value Contract General - Concept --> */}
    <div className="card red">
     <h2>
      <span className="badge">4</span> Value Contract (General) — Concept
     </h2>
     <div className="callout red">
      💡 <strong>Value Contract General</strong> is an agreement between
      company and customer for supplying goods of a
      <strong>particular value</strong> (not quantity), within a specific
      validity period.
     </div>
     <div className="callout blue">
      🔗 <strong>Key difference from Quantity Contract:</strong> a Value
      Contract General is <strong>not specific to one material</strong> — it
      covers a <strong>group of materials</strong>, up to a total rupee
      value.
     </div>
     <div className="callout purple">
      🔗 <strong>Grouping materials — the Assortment Module:</strong> to
      define which materials belong to the value contract, an
      <strong>Assortment Module</strong> is created via T-code
      <span className="tcode">WSV2</span> → give a description → list the
      materials to include → Save → the system generates an Assortment
      Module number, which is then referenced on the contract.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Property</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Document Type</td>
        <td><code>WK1</code></td>
       </tr>
       <tr>
        <td>T-Code (Create Contract)</td>
        <td><span className="tcode">VA41</span></td>
       </tr>
       <tr>
        <td>Key Fields</td>
        <td>
         Value, Assortment Module number, a mandatory "dummy" Material,
         Valid From/To
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Every line item in SAP requires a material technically, so the
      system still asks for <strong>one material</strong> on the contract
      line even though the contract actually covers the whole group — this
      material is purely a <strong>placeholder/dummy entry</strong> and
      doesn't limit which materials can later be released against the
      contract.
     </p>
    </div>

    {/* <!-- Section 5: Value Contract General - System Steps --> */}
    <div className="card gold">
     <h2>
      <span className="badge">5</span> Value Contract (General) — System
      Steps &amp; Configuration Fix
     </h2>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Assortment Module built with two
      materials → Value Contract created with Value =
      <code>₹1,00,00,000</code> (1 crore), Assortment Module number
      referenced, dummy material entered, Valid From
      <code>1st July 2026</code> to <code>30th June 2027</code>.
     </div>
     <div className="callout red">
      ⚠️ <strong>Common error:</strong> creating the Value Contract General
      for the first time throws
      <em>"No pricing procedure could be determined."</em>
     </div>
     <div className="stepper">
      <div className="step step-red">
       <strong>Config fix:</strong> <span className="tcode">OVKK</span> →
       New Entries → mention the Sales Area →
       <strong>Document Pricing Procedure = <code>Y</code></strong>
       (distinct from <code>A</code> for standard orders and
       <code>C</code> for Free of Charge) →
       <strong>Customer Pricing Procedure = <code>1</code></strong> →
       condition type <code>PR00</code> → Save.
      </div>
      <div className="step">
       <span className="tcode">VA41</span> → type <code>WK1</code> →
       mention the Value (<code>1,00,00,000</code>), the Assortment Module
       number, and the dummy material when prompted → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 6: Value Contract General - Release Order --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">6</span> Value Contract (General) — Release
      Order &amp; Pricing Correction
     </h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA01</span> → order type <code>OR</code> →
       Create with Reference → <strong>Contract</strong> tab → search for
       the value contract (F4) → double-click it.
      </div>
      <div className="step">
       Click <strong>Item Selection</strong> — this must be clicked
       <strong>twice</strong> (the first click surfaces a message; the
       second click actually proceeds) → select the assortment line → click
       <strong>Expand Assortment</strong> to reveal the individual
       materials grouped under it.
      </div>
      <div className="step">
       Choose the specific material(s) the customer actually wants and
       enter the quantity against it (worked example:
       <code>500</code> units of one material) → Copy → mention the PO
       number.
      </div>
      <div className="step">
       <strong>Critical pricing step:</strong> double-click the line item →
       Conditions tab → click <strong>Update</strong>, then double-click
       condition type <code>B</code> and select
       <strong>Carry Out New Pricing</strong>. Without this, the line item
       incorrectly copies the
       <strong>full contract value</strong>
       (<code>1,00,00,000</code>) instead of the correct price for the
       quantity ordered; after Carry Out New Pricing, it correctly
       recalculates to rate × quantity (e.g.,
       <code>₹3,000 × 500 = ₹15,00,000</code>).
      </div>
      <div className="step">
       Save → create Delivery, PGI, and Invoice as usual.
      </div>
     </div>
     <div className="callout gold">
      📖 Checking the contract afterward via
      <span className="tcode">VA42</span> shows the
      <strong>released value updating</strong> — e.g.,
      <code>₹15,00,000</code> released out of the
      <code>₹1,00,00,000</code> total contract value.
     </div>
    </div>

    {/* <!-- Section 7: Value Contract Material Specific --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">7</span> Value Contract (Material-Specific)
     </h2>
     <div className="callout cyan">
      💡 <strong>Value Contract Material-Specific</strong> is the same
      concept as Value Contract General — an agreement for a particular
      value within a validity period — except it is tied to a
      <strong>single, specific material</strong> instead of a group, so
      <strong>no Assortment Module is needed</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Property</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Document Type</td>
        <td><code>WK2</code></td>
       </tr>
       <tr>
        <td>T-Code (Create Contract)</td>
        <td><span className="tcode">VA41</span></td>
       </tr>
       <tr>
        <td>Key Fields</td>
        <td>Item, one specific Material, Value, Valid From/To</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Item 10, Material
      <code>WAX1020</code>, Value <code>₹1,00,00,000</code>, Valid From
      <code>1st July 2026</code> to <code>30th June 2027</code>. Release
      order example: <code>500</code> units at <code>₹3,000</code> each =
      <code>₹15,00,000</code>.
     </div>
     <p className="note-text">
      📌 The release order steps are the same as Value Contract General
      (Create with Reference → Contract → Item Selection → mention quantity
      → Copy → the same
      <strong>Update / Carry Out New Pricing</strong> correction on the
      Conditions tab) — just without the Expand Assortment step, since
      there's only one material to choose from.
     </p>
    </div>

    {/* <!-- Section 8: Scheduling Agreement --> */}
    <div className="card green">
     <h2><span className="badge">8</span> Scheduling Agreement</h2>
     <div className="callout green">
      💡 A <strong>Scheduling Agreement</strong> is an agreement between
      company and customer for supplying goods of a particular quantity,
      within a specific validity period —
      <strong>plus predefined delivery dates</strong> already agreed for
      portions of that quantity.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Property</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Document Type</td>
        <td><code>DS</code></td>
       </tr>
       <tr>
        <td>T-Code (Create)</td>
        <td><span className="tcode">VA31</span></td>
       </tr>
       <tr>
        <td>Key Fields</td>
        <td>
         Item, Material, Total Quantity, Valid From/To, plus a schedule
         of individual Delivery Dates with their own quantities
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Item 10, Material, Total Quantity
      <code>10,000</code>, Valid From <code>1st July 2026</code> to
      <code>30th June 2027</code> — with a delivery schedule of
      <code>500</code> units on <code>15th July</code>,
      <code>1,000</code> units on <code>1st August</code>, and
      <code>1,500</code> units on <code>10th September</code>.
     </div>
     <div className="callout purple">
      🔗 <strong>How delivery works here:</strong> unlike Quantity or Value
      Contracts, there is <strong>no separate Release Order step</strong> —
      creating a Delivery for a specific scheduled date (e.g.,
      <code>15th July</code>) automatically pulls in the quantity agreed for
      that date (<code>500</code> units); an Invoice is then created for
      that delivered quantity.
     </div>
     <p className="note-text">
      📌 The live system walkthrough of Scheduling Agreement was deferred to
      the next class.
     </p>
    </div>

    {/* <!-- Section 9: Q&A on Tax --> */}
    <div className="card pink">
     <h2>
      <span className="badge">❓</span> Class Q&amp;A — Tax in Contract
      Pricing
     </h2>
     <div className="callout pink">
      💡
      <strong
      >Q: Should the contract's pricing procedure include tax conditions
       along with the base price?</strong
      >
     </div>
     <div className="callout blue">
      🔗 <strong>A:</strong> No — at the contract level, only the
      <strong>base price</strong> (condition type <code>PR00</code>) is
      relevant.
      <strong
      >Tax conditions are not triggered at the contract level at
       all</strong
      >
      — they only trigger later, at the
      <strong>release order</strong> level, when the actual sale is being
      invoiced.
     </div>
    </div>

    {/* <!-- Section 10: Comparison --> */}
    <div className="card brown">
     <h2>
      <span className="badge">📌</span> Key Nuance — The Four Contract
      Types, Side by Side
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Aspect</th>
        <th>Quantity Contract</th>
        <th>Value Contract General</th>
        <th>Value Contract Material-Specific</th>
        <th>Scheduling Agreement</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Document Type</td>
        <td>QC</td>
        <td>WK1</td>
        <td>WK2</td>
        <td>DS</td>
       </tr>
       <tr>
        <td>Bound By</td>
        <td>Quantity</td>
        <td>Value</td>
        <td>Value</td>
        <td>Quantity</td>
       </tr>
       <tr>
        <td>Material Specific?</td>
        <td>Yes, one material</td>
        <td>No — a group via Assortment Module</td>
        <td>Yes, one material</td>
        <td>Yes, one material</td>
       </tr>
       <tr>
        <td>Special Setup</td>
        <td>None extra</td>
        <td>Assortment Module (WSV2) + OVKK pricing procedure Y</td>
        <td>OVKK pricing procedure Y</td>
        <td>Delivery-date schedule maintained on the agreement itself</td>
       </tr>
       <tr>
        <td>How It's Drawn Down</td>
        <td>Release Order (OR) with reference to contract</td>
        <td>
         Release Order (OR), with Expand Assortment + Carry Out New
         Pricing
        </td>
        <td>Release Order (OR), with Carry Out New Pricing</td>
        <td>
         Direct Delivery against a scheduled date — no release order
        </td>
       </tr>
      </tbody>
     </table>
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
         What is a Quantity Contract, and what document type/T-code is
         used?
        </td>
        <td>
         An agreement between company and customer to supply a particular
         quantity of goods within a specific validity period; document
         type QC, created via T-code VA41
        </td>
       </tr>
       <tr>
        <td>What is a Release Order?</td>
        <td>
         An ordinary sales order (order type OR, T-code VA01) created
         with reference to a contract, used whenever the customer wants
         to draw down part of the contracted quantity or value
        </td>
       </tr>
       <tr>
        <td>
         What are the mutual benefits of a contract for company and
         customer?
        </td>
        <td>
         The customer benefits from a locked-in price (or negotiated
         discount) for the validity period even if market prices rise;
         the company benefits from assured/guaranteed sales volume
        </td>
       </tr>
       <tr>
        <td>
         How can you check how much of a contract has already been
         released?
        </td>
        <td>
         T-code VA42 (Change Mode of Contract) shows the cumulative
         released quantity or value updating automatically after each
         release order
        </td>
       </tr>
       <tr>
        <td>
         What is a Value Contract General, and how is it different from a
         Quantity Contract?
        </td>
        <td>
         An agreement for a particular rupee value (not quantity) within
         a validity period, covering a group of materials rather than one
         specific material
        </td>
       </tr>
       <tr>
        <td>What is an Assortment Module, and how is it created?</td>
        <td>
         A grouping of materials used by a Value Contract General;
         created via T-code WSV2, giving it a description and listing the
         materials to include
        </td>
       </tr>
       <tr>
        <td>
         Why does a Value Contract General still ask for a material on
         its line item, even though it covers a group?
        </td>
        <td>
         Every SAP line item technically requires a material field to be
         filled; the material entered here is a placeholder/dummy and
         does not restrict which materials can be released later
        </td>
       </tr>
       <tr>
        <td>
         What causes the "No pricing procedure could be determined" error
         on a Value Contract, and how is it fixed?
        </td>
        <td>
         The Value Contract's document pricing procedure (Y) hasn't been
         assigned for the sales area yet; fixed via T-code OVKK with a
         new entry: Document Pricing Procedure Y, Customer Pricing
         Procedure 1, condition type PR00
        </td>
       </tr>
       <tr>
        <td>
         Why must "Carry Out New Pricing" be run on a release order
         against a Value Contract?
        </td>
        <td>
         Without it, the release order line item incorrectly copies the
         full contract value instead of the correct price for the
         quantity actually being ordered; Carry Out New Pricing
         recalculates it correctly
        </td>
       </tr>
       <tr>
        <td>
         What is a Value Contract Material-Specific, and how does it
         differ from Value Contract General?
        </td>
        <td>
         The same value-based, validity-bound agreement, but tied to a
         single specific material rather than a group — so no Assortment
         Module is needed; document type WK2
        </td>
       </tr>
       <tr>
        <td>
         What is a Scheduling Agreement, and how does it differ from the
         other contract types?
        </td>
        <td>
         An agreement for a particular quantity with predefined delivery
         dates already built in; unlike Quantity/Value Contracts,
         deliveries are created directly against each scheduled date
         rather than through a separate release order
        </td>
       </tr>
       <tr>
        <td>
         Does the contract-level pricing procedure need to include tax
         conditions?
        </td>
        <td>
         No — only the base price (PR00) is relevant at the contract
         level; tax conditions are triggered only later, at the release
         order level
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
        <td><span className="tcode">VA41</span></td>
        <td>
         Create Contract — used for Quantity Contract (QC), Value
         Contract General (WK1), and Value Contract Material-Specific
         (WK2)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA42</span></td>
        <td>
         Change Mode of Contract — used to check cumulative released
         quantity/value against the contract
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used here to create Release Orders (order
         type OR) with reference to a contract
        </td>
       </tr>
       <tr>
        <td><span className="tcode">WSV2</span></td>
        <td>
         Create Assortment Module — groups materials together for a Value
         Contract General
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OVKK</span></td>
        <td>
         Pricing Procedure Determination — used to assign Document
         Pricing Procedure Y for Value Contracts so they can be priced
         without error
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA31</span></td>
        <td>Create Scheduling Agreement (document type DS)</td>
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
        <td>Quantity Contract document type</td>
        <td>QC</td>
       </tr>
       <tr>
        <td>Quantity Contract worked example</td>
        <td>
         Material WAX1020, Target Qty 10,000, Valid 1 Jul 2026 – 30 Jun
         2027; released 500 then 1,000 more (1,500 total) via Release
         Orders
        </td>
       </tr>
       <tr>
        <td>Value Contract General document type</td>
        <td>
         WK1 — Document Pricing Procedure Y (via OVKK), requires an
         Assortment Module (WSV2)
        </td>
       </tr>
       <tr>
        <td>Value Contract General worked example</td>
        <td>
         Value ₹1,00,00,000; release order 500 units × ₹3,000 =
         ₹15,00,000 released
        </td>
       </tr>
       <tr>
        <td>Value Contract Material-Specific document type</td>
        <td>
         WK2 — same OVKK Document Pricing Procedure Y, no Assortment
         Module needed
        </td>
       </tr>
       <tr>
        <td>Scheduling Agreement document type</td>
        <td>
         DS — created via VA31, with a delivery-date schedule (e.g., 500
         on 15 Jul, 1,000 on 1 Aug, 1,500 on 10 Sep) against a
         10,000-unit total
        </td>
       </tr>
       <tr>
        <td>Contract pricing scope</td>
        <td>
         Base price only (condition type PR00) — tax conditions trigger
         at the release order level, not the contract level
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture briefly re-confirmed the
      <strong>Subsequent Delivery Free of Charge</strong> flow before moving
      into the family of <strong>Contracts</strong>. The
      <strong>Quantity Contract</strong> (QC, VA41) locks in a target
      quantity and validity period for one material, drawn down over time
      via ordinary <strong>Release Orders</strong> (order type OR, created
      with reference to the contract), with cumulative released quantity
      trackable via VA42. The <strong>Value Contract General</strong> (WK1)
      does the same for a rupee value instead of a quantity, but covers a
      <strong>group of materials</strong> defined by an
      <strong>Assortment Module</strong> (WSV2) — its release orders need
      the Item Selection step done twice, an Expand Assortment step to pick
      the actual material, and a critical
      <strong>Carry Out New Pricing</strong> correction so the line item
      doesn't incorrectly inherit the full contract value. The
      <strong>Value Contract Material-Specific</strong> (WK2) is the same
      value-based agreement but tied to a single material, skipping the
      Assortment Module. The <strong>Scheduling Agreement</strong> (DS,
      VA31) adds predefined delivery dates with their own quantities
      directly into the agreement, so deliveries are created straight
      against a date with no separate release order step — its live system
      demo was deferred to the next class. A closing Q&amp;A clarified that
      contract-level pricing only ever includes the base price; tax is
      always determined later, at the release order level.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Every contract type follows the same shape</strong> — create
       the agreement (VA41), draw it down via Release Orders (VA01 with
       reference), track consumption via VA42 — only the unit of measure
       (quantity vs. value) and material scope (one material vs. a group)
       actually change
      </li>
      <li>
       <strong>Value Contracts need an extra pricing fix</strong> — the
       Carry Out New Pricing step on the release order is easy to forget,
       and skipping it silently copies the full contract value instead of
       the correct line price
      </li>
      <li>
       <strong
       >Assortment Module = grouping mechanism, not a pricing
        mechanism</strong
       >
       — it only defines which materials are eligible under a Value
       Contract General; pricing is still handled per material at release
       order time
      </li>
      <li>
       <strong>Scheduling Agreement is the outlier</strong> — it skips the
       release order step entirely because the delivery dates and
       quantities are already agreed upfront inside the document itself
      </li>
      <li>
       <strong
       >Tax lives at the order level, never the contract level</strong
       >
       — a useful distinction to keep pricing procedure configuration clean
       across all four contract types
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Scheduling Agreement practiced live in
      the system, and continuing into Consignment process.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 46 Notes — Quantity Contract, Value Contract &amp; Scheduling
    Agreement 🎓
   </p>
  </div>
 );
};

export default Business46;
