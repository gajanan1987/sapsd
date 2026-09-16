const SalesDocument56 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-red">
    <h1>
     🏗️ Lecture 56 — Item Category Controls Finished &amp; Item Category
     Determination Begins
    </h1>
    <p>
     SAP SD | BOM Item Pricing scenario (contrasted with Header Pricing),
     Automatic Batch Determination, Rounding Permitted, Order Quantity=1,
     Create PO Automatic, Structure Scope (with a full multi-level BOM demo),
     Value Contract Material, Contract Release Control — then opening Item
     Category Determination (VOV4)
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered <strong>Statistical Value</strong> and built a
      full <strong>BOM header-pricing</strong> scenario (item category group
      <code>ERLA</code> on the header material, price only on the header
      item). Today opens with the mirror-image scenario —
      <strong>BOM item pricing</strong> — then finishes the remaining Item
      Category controls, and closes by introducing
      <strong>Item Category Determination</strong>, to be covered in full
      next class.
     </div>
    </div>

    {/* <!-- Section 1: BOM Item Pricing --> */}
    <div className="card teal">
     <h2>
      <span className="badge">🔁</span> BOM Item Pricing — The Mirror of
      Header Pricing
     </h2>
     <div className="callout teal">
      💡 <strong>BOM Item Pricing</strong> is the opposite of BOM Header
      Pricing: the
      <strong>header/main item (e.g. Computer) gets no price</strong>, while
      the
      <strong
      >components (CPU, Monitor, Keyboard, Mouse) each get their own
       price</strong
      >.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Scenario</th>
        <th>Item Category Group (Header Material)</th>
        <th>Main Item Category</th>
        <th>Component Item Category</th>
        <th>Where Price Appears</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>BOM Header Pricing</td>
        <td><code>ERLA</code></td>
        <td><code>TAQ</code></td>
        <td><code>TAE</code> (audio-unclear, per previous lecture)</td>
        <td>Header/main item only</td>
       </tr>
       <tr>
        <td>BOM Item Pricing</td>
        <td><code>LUMF</code></td>
        <td><code>TAP</code></td>
        <td><code>TAL</code></td>
        <td>Component items only</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📖
      <strong>The control lives entirely on the header material</strong> —
      the component materials themselves don't change. To switch a BOM
      between header pricing and item pricing, change only the
      <strong>header material's Item Category Group</strong>:
      <code>ERLA</code> for header pricing, <code>LUMF</code> for item
      pricing. Creating the order afterward shows the price shift
      accordingly — components priced instead of the header, or vice versa.
     </div>
    </div>

    {/* <!-- Section 2: Automatic Batch Determination --> */}
    <div className="card orange">
     <h2><span className="badge">15</span> Automatic Batch Determination</h2>
     <div className="callout orange">
      💡 <strong>Automatic Batch Determination</strong>, when checked,
      causes the system to
      <strong
      >determine the batch number automatically in the sales
       document</strong
      >.
     </div>
     <div className="callout gold">
      📖
      <strong
      >In practice, this is rarely checked at sales order level.</strong
      >
      Batch determination is normally done at the
      <strong>Delivery</strong> stage instead, not on the sales order itself
      — the field exists on the item category, but most real-world
      configurations leave sales-order-level batch determination off.
     </div>
    </div>

    {/* <!-- Section 3: Rounding Permitted --> */}
    <div className="card purple">
     <h2><span className="badge">16</span> Rounding Permitted</h2>
     <div className="callout purple">
      💡 <strong>Rounding Permitted</strong>, when checked, causes the
      system to <strong>perform rounding on quantity decimals</strong>.
     </div>
    </div>

    {/* <!-- Section 4: Order Quantity = 1 --> */}
    <div className="card red">
     <h2><span className="badge">17</span> Order Quantity = 1</h2>
     <div className="callout red">
      💡 <strong>Order Quantity = 1</strong>, when checked,
      <strong>restricts each line item's quantity to exactly 1</strong>. If
      a customer wants more than one unit, they must add an additional line
      item rather than increasing the quantity on one line.
     </div>
     <div className="callout blue">
      📖 <strong>Typical use case:</strong> heavy machinery and similar
      products where a client manufactures units individually — each
      customer order line represents exactly one unit, and ordering two
      units means two separate line items, not a quantity of 2 on one line.
     </div>
     <div className="callout gold">
      📊 <strong>Worked demonstration:</strong> with item category
      <code>P10</code> assigned to order type <code>PPOR</code>, Order
      Quantity = 1 was checked on <code>P10</code>. Creating an order and
      entering a quantity greater than 1 on the line item produced an error
      message: <em>"Only quantity 1 is allowed."</em>
      Quantity 1 alone is accepted without error.
     </div>
    </div>

    {/* <!-- Section 5: Create PO Automatic --> */}
    <div className="card gold">
     <h2><span className="badge">18</span> Create PO Automatic</h2>
     <div className="callout gold">
      💡 <strong>Create PO Automatic</strong> is applicable
      <strong
      >only to Third Party (<code>TAS</code>) and Individual Purchase
       Order/IPO (<code>TAB</code>) item categories</strong
      >.
     </div>
     <div className="callout blue">
      📖 <strong>Normal flow (unchecked):</strong> customer places the order
      → system generates a <strong>PR</strong> (Purchase Requisition) → the
      PR is manually converted into a <strong>PO</strong> (Purchase Order).
     </div>
     <div className="callout purple">
      📖 <strong>With Create PO Automatic checked:</strong> while creating
      the sales order (Third Party or IPO), the system automatically
      generates <strong>both</strong> the PR and the PO — the PO no longer
      needs to be created as a separate manual step.
     </div>
     <p className="note-text">
      📌 This field is <strong>optional</strong>, not mandatory — it can be
      checked or unchecked on <code>TAS</code> and <code>TAB</code>
      as the business requirement dictates.
     </p>
    </div>

    {/* <!-- Section 6: Structure Scope --> */}
    <div className="card indigo">
     <h2><span className="badge">19</span> Structure Scope</h2>
     <div className="callout indigo">
      💡 <strong>Structure Scope</strong> is maintained
      <strong>only on <code>TAQ</code></strong> (BOM Header Pricing — Main
      Item) <strong>and <code>TAP</code></strong> (BOM Item Pricing — Main
      Item). It controls <strong>whether to explode the BOM at all</strong>,
      and if so,
      <strong>whether to explode only a single level, or all levels</strong>
      (multi-level).
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Structure Scope Value</th>
        <th>Result</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Blank</td>
        <td>Do not explode the BOM</td>
       </tr>
       <tr>
        <td><code>A</code></td>
        <td>Explode single-level BOM only</td>
       </tr>
       <tr>
        <td><code>B</code></td>
        <td>Explode multi-level BOM (all levels)</td>
       </tr>
      </tbody>
     </table>

     <h3>Multi-Level BOM — What It Means</h3>
     <div className="callout blue">
      📖 A <strong>multi-level BOM</strong> nests components inside
      components. In this session's example: Computer (header) contains
      Monitor, Keyboard, Mouse, and CPU (level 1) — and CPU itself further
      contains Hard Disk, RAM, and Processor (level 2). Every component
      material below the header, at any level, carries Item Category Group
      <code>NORM</code>; only the top header material carries
      <code>ERLA</code> or <code>LUMF</code>.
     </div>

     <h3>Worked Demonstration</h3>
     <div className="stepper">
      <div className="step">
       Create three additional materials — <code>P Hard Disk</code>,
       <code>P RAM</code>, <code>P Processor</code> — via
       <span className="tcode">MM01</span> (copied from the existing CPU
       material), each with Item Category Group <code>NORM</code>.
      </div>
      <div className="step">
       <span className="tcode">CS01</span> → this time the
       <strong>main material is <code>P CPU</code></strong> (not the
       computer) → Plant <code>P100</code> → BOM Usage
       <code>5</code> (Sales and Distribution) → add each of
       <code>P Hard Disk</code>, <code>P RAM</code>,
       <code>P Processor</code> as Item Category <code>L</code>
       (Stock Item), quantity 1 each. Save. This nests the new BOM one
       level below the CPU inside the original Computer BOM.
      </div>
      <div className="step">
       <strong>Header pricing test:</strong> with the Computer material's
       Item Category Group set to <code>ERLA</code>, create the order for 1
       quantity. Only the first-level components (Monitor, Keyboard, Mouse,
       CPU) appear — Hard Disk, RAM, and Processor are
       <strong>not</strong> shown. Checking <code>TAQ</code>'s Structure
       Scope shows it set to <code>A</code> — single-level explosion only,
       so the BOM nested under CPU never unfolds.
      </div>
      <div className="step">
       Change <code>TAQ</code>'s Structure Scope to
       <code>B</code> (multi-level) and save. Creating the order again now
       shows <strong>all levels</strong>: Monitor, Keyboard, Mouse, CPU,
       and — nested under CPU — Hard Disk, RAM, and Processor. Because this
       is still header pricing, price appears only on the Computer header
       item; none of the components at any level carry a price (unless the
       component item category was separately given Pricing = X and
       Statistical Value = X, as covered in the previous lecture).
      </div>
      <div className="step">
       <strong>Item pricing test:</strong> change the Computer material's
       Item Category Group to <code>LUMF</code>. With <code>TAP</code>'s
       Structure Scope still at <code>A</code> (single-level), the order
       again shows only the first-level components. Change
       <code>TAP</code>'s Structure Scope to <code>B</code> and recreate
       the order: now all levels appear (including Hard Disk, RAM,
       Processor), but
       <strong
       >price still appears only on the first-level components</strong
       >
       (Monitor, Keyboard, Mouse, CPU) — Hard Disk, RAM, and Processor
       remain unpriced, since item pricing determines price only for the
       item category assigned to first-level components (<code>TAL</code>),
       not for deeper-nested items.
      </div>
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the recording names the header
      material's Item Category Group for the second (item pricing) Structure
      Scope test as "<code>LUMA</code>" — this is almost certainly the same
      <code>LUMF</code> established earlier in this lecture for BOM item
      pricing, not a separate value.
     </p>
     <p className="note-text">
      📌 <strong>Correction:</strong> at one point the recording states
      <code>TAQ</code>'s Structure Scope value as "<code>E</code>" while
      explaining it as "single-level BOM" — this contradicts the value table
      given moments earlier in the same session (where <code>A</code> =
      single-level, <code>B</code> = multi-level). This is treated here as a
      mis-transcription of <code>A</code>, consistent with the explicitly
      stated value table.
     </p>
    </div>

    {/* <!-- Section 7: Value Contract Material --> */}
    <div className="card brown">
     <h2><span className="badge">20</span> Value Contract Material</h2>
     <div className="callout brown">
      💡 <strong>Value Contract Material</strong> is applicable
      <strong
      >only to the Value Contract item category (<code>WKN</code>)</strong
      >. It lets you specify a <strong>dummy/default material</strong> so
      the system doesn't ask the user to enter one manually every time a
      Value Contract General document is created.
     </div>
     <div className="callout blue">
      📖 <strong>Without this field maintained:</strong> creating a Value
      Contract General document (<span className="tcode">VA41</span>,
      document type <code>WK1</code>) requires manually entering Customer,
      Agreement Number, Valid From/To, Target Value, Assortment Module —
      <strong>and</strong> a material, every single time.
     </div>
     <div className="callout gold">
      📖 <strong>With Value Contract Material maintained</strong> (any
      material can be used — it's purely a dummy/placeholder): the system
      <strong>automatically determines that material</strong>
      on every new Value Contract General document, so the user never has to
      enter one manually.
     </div>
    </div>

    {/* <!-- Section 8: Contract Release Control --> */}
    <div className="card cyan">
     <h2><span className="badge">21</span> Contract Release Control</h2>
     <div className="callout cyan">
      💡 <strong>Contract Release Control</strong> is also applicable
      <strong
      >only to the Value Contract item category (<code>WKN</code>)</strong
      >. It controls
      <strong
      >how the system should respond if a Release Order's value causes the
       total released against the contract to exceed the contract's target
       value</strong
      >
      — whether to show a <strong>warning message</strong>, an
      <strong>error message</strong>, or <strong>no message at all</strong>.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> a Value Contract is created for a
      target value of ₹1 crore. A Release Order is created for ₹30 lakh,
      then another for ₹50 lakh — ₹80 lakh consumed, ₹20 lakh remaining. A
      third Release Order for ₹40 lakh would push the total
      <strong>past</strong> the ₹1 crore contract value. Whether the system
      blocks this, warns the user, or silently allows it depends entirely on
      what's configured in Contract Release Control.
     </div>
    </div>

    {/* <!-- Section 9: Item Category Determination — Introduction --> */}
    <div className="card pink">
     <h2>
      <span className="badge">🆕</span> Item Category Determination —
      Introduced
     </h2>
     <div className="callout pink">
      💡 With all the Item Category controls themselves now covered, the
      lecture opens a related but distinct topic:
      <strong>Item Category Determination</strong> — how the system decides
      <strong>which</strong> item category to default onto a line item in
      the first place. T-code: <span className="tcode">VOV4</span>.
     </div>
     <p className="note-text">
      📌 <strong>Correction:</strong> the recording names the transaction
      code as "VVO4" — this is <code>VOV4</code>, the same Assign Item
      Category transaction already used in earlier lectures to assign custom
      item categories.
     </p>
     <div className="callout blue">
      📖 <strong>SPRO configuration path:</strong> Sales and Distribution →
      Sales → Sales Documents → Sales Document Item → Assign Item
      Categories.
     </div>
     <div className="callout gold">
      📖 <strong>Determination combination:</strong> the system determines
      the default item category from a combination of four fields —
      <strong>Sales Document Type</strong>,
      <strong>Item Category Group</strong>, <strong>Item Usage</strong>, and
      <strong>Higher-Level Item Category</strong>. (Item Usage itself is not
      yet explained — that is deferred to the next class.)
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Sales Document Type</th>
        <th>Item Category Group</th>
        <th>Item Usage</th>
        <th>Higher-Level Item Category</th>
        <th>Default Item Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Standard Order</td>
        <td><code>NORM</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>TAN</code> (standard scenario)</td>
       </tr>
       <tr>
        <td><code>PPOR</code> (custom)</td>
        <td><code>NORM</code></td>
        <td>Blank</td>
        <td>Blank</td>
        <td><code>P10</code> (this course's custom order type)</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Full coverage of this determination logic — including what Item
      Usage means and how the Higher-Level Item Category field participates
      in BOM-style scenarios — continues next class.
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
         What is the difference between BOM Header Pricing and BOM Item
         Pricing, and which Item Category Group drives each?
        </td>
        <td>
         Header Pricing prices only the main/header item (Item Category
         Group ERLA, main item TAQ); Item Pricing prices only the
         components (Item Category Group LUMF, main item TAP, component
         item category TAL) — the switch is made entirely on the header
         material
        </td>
       </tr>
       <tr>
        <td>
         What does Automatic Batch Determination control, and how is it
         typically used in practice?
        </td>
        <td>
         Whether the batch number is determined automatically in the
         sales document; in practice it's rarely checked at sales order
         level — batch determination is normally done at the Delivery
         stage instead
        </td>
       </tr>
       <tr>
        <td>What does Rounding Permitted control?</td>
        <td>Whether the system performs rounding on quantity decimals</td>
       </tr>
       <tr>
        <td>
         What does Order Quantity = 1 control, and what is a typical use
         case?
        </td>
        <td>
         It restricts each line item's quantity to exactly 1 — additional
         units require additional line items; typical for heavy machinery
         or similar products manufactured/sold as discrete units
        </td>
       </tr>
       <tr>
        <td>
         What does Create PO Automatic control, and which item categories
         can use it?
        </td>
        <td>
         Applicable only to Third Party (TAS) and IPO (TAB); when
         checked, both the PR and the PO are generated automatically
         while creating the sales order, instead of the PO requiring a
         separate manual step
        </td>
       </tr>
       <tr>
        <td>
         What does Structure Scope control, which item categories carry
         it, and what are its three values?
        </td>
        <td>
         Whether and how deep to explode a BOM; maintained only on TAQ
         (header pricing) and TAP (item pricing); blank = don't explode,
         A = single-level, B = multi-level
        </td>
       </tr>
       <tr>
        <td>
         In a multi-level BOM with item pricing, why do second-level
         components (e.g. Hard Disk, RAM, Processor under CPU) still show
         no price even with Structure Scope = B?
        </td>
        <td>
         Because item pricing determines price only for the item category
         assigned to first-level components (TAL); deeper-nested
         components use a different (NORM/blank-pricing) item category
         and are shown for structure only, not priced
        </td>
       </tr>
       <tr>
        <td>
         What does Value Contract Material do, and which item category is
         it restricted to?
        </td>
        <td>
         Applicable only to WKN (Value Contract); when maintained, the
         system automatically determines a dummy/default material on
         every new Value Contract General document, so the user doesn't
         have to enter one manually each time
        </td>
       </tr>
       <tr>
        <td>What does Contract Release Control govern?</td>
        <td>
         How the system responds — warning, error, or no message — when a
         Release Order causes the total value released against a Value
         Contract to exceed the contract's target value; applicable only
         to WKN
        </td>
       </tr>
       <tr>
        <td>
         What four fields combine to determine the default item category
         in Item Category Determination (VOV4)?
        </td>
        <td>
         Sales Document Type, Item Category Group, Item Usage, and
         Higher-Level Item Category
        </td>
       </tr>
       <tr>
        <td>What is the SPRO path to Item Category Determination?</td>
        <td>
         Sales and Distribution → Sales → Sales Documents → Sales
         Document Item → Assign Item Categories
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
         Define Item Categories — remaining controls covered today
         (Automatic Batch Determination through Contract Release
         Control), plus Structure Scope on TAQ/TAP
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MM01</span></td>
        <td>
         Create Material — used to create Hard Disk, RAM, and Processor
         for the multi-level BOM demo
        </td>
       </tr>
       <tr>
        <td><span className="tcode">CS01</span></td>
        <td>
         Create Bill of Material — used to nest Hard Disk/RAM/Processor
         under CPU, extending the BOM to a second level
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used repeatedly to test Order Quantity=1,
         and header vs. item pricing under single- and multi-level
         Structure Scope
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA41</span></td>
        <td>
         Create Value Contract — used to demonstrate Value Contract
         Material (document type WK1, Value Contract General)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VOV4</span></td>
        <td>
         Assign Item Category — introduced today as the transaction for
         Item Category Determination, to be covered in detail next class
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
        <td>BOM Header vs. Item Pricing</td>
        <td>
         Header Pricing: ERLA / TAQ / price on header only; Item Pricing:
         LUMF / TAP / TAL / price on components only
        </td>
       </tr>
       <tr>
        <td>Structure Scope values</td>
        <td>
         Blank = no BOM explosion; A = single-level explosion; B =
         multi-level explosion — maintained only on TAQ and TAP
        </td>
       </tr>
       <tr>
        <td>Order Quantity = 1</td>
        <td>
         Restricts each line item to quantity 1; tested on P10, error
         "Only quantity 1 is allowed" for qty &gt; 1
        </td>
       </tr>
       <tr>
        <td>Create PO Automatic</td>
        <td>
         Optional; applicable only to TAS (Third Party) and TAB (IPO);
         auto-generates PO (not just PR) on sales order save
        </td>
       </tr>
       <tr>
        <td>Value Contract Material / Contract Release Control</td>
        <td>
         Both applicable only to WKN (Value Contract); Material = dummy
         material default; Release Control = message behavior when
         release orders exceed contract target value
        </td>
       </tr>
       <tr>
        <td>Multi-level BOM worked example</td>
        <td>
         Computer (header) → Monitor, Keyboard, Mouse, CPU (level 1); CPU
         → Hard Disk, RAM, Processor (level 2); all non-header materials
         use Item Category Group NORM
        </td>
       </tr>
       <tr>
        <td>Item Category Determination combination</td>
        <td>
         Sales Document Type + Item Category Group + Item Usage +
         Higher-Level Item Category → default Item Category (e.g.
         Standard Order + NORM + blank + blank = TAN; PPOR + NORM + blank
         + blank = P10)
        </td>
       </tr>
       <tr>
        <td>Item Category Determination T-code and path</td>
        <td>
         VOV4; SPRO → Sales and Distribution → Sales → Sales Documents →
         Sales Document Item → Assign Item Categories
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture opened with <strong>BOM Item Pricing</strong>, the mirror
      image of the previous lecture's Header Pricing scenario — switching
      the header material's Item Category Group from <code>ERLA</code> to
      <code>LUMF</code> flips pricing from the header item
      (<code>TAQ</code>) onto the components (<code>TAP</code> main item,
      <code>TAL</code> components). It then finished the remaining Item
      Category controls:
      <strong>Automatic Batch Determination</strong> (rarely used at sales
      order level; batch is usually determined at Delivery),
      <strong>Rounding Permitted</strong> (rounds quantity decimals),
      <strong>Order Quantity = 1</strong> (restricts each line item to a
      single unit — demoed with an error message on P10),
      <strong>Create PO Automatic</strong> (optional, TAS/TAB only —
      auto-generates the PO alongside the PR), and
      <strong>Structure Scope</strong> (maintained only on TAQ/TAP;
      blank/A/B controlling no explosion, single-level, or multi-level BOM
      explosion respectively), extensively demonstrated by adding a second
      BOM level (Hard Disk, RAM, Processor nested under CPU) and comparing
      header-pricing vs. item-pricing behavior across single- and
      multi-level settings. <strong>Value Contract Material</strong> and
      <strong>Contract Release Control</strong> — both exclusive to the
      Value Contract item category (<code>WKN</code>) — were covered next:
      the former auto-defaults a dummy material on Value Contract creation,
      the latter controls the system's response (warning/error/no message)
      when Release Orders exceed the contract's target value. The lecture
      closed by introducing
      <strong>Item Category Determination</strong> (<span className="tcode"
      >VOV4</span
      >), explaining that Sales Document Type, Item Category Group, Item
      Usage, and Higher-Level Item Category combine to determine a
      document's default item category, with full detail — including Item
      Usage — deferred to the next class.
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
       >Header pricing vs. item pricing is a single-field
        decision</strong
       >
       — ERLA or LUMF on the header material's Item Category Group is the
       entire switch; nothing on the component materials needs to change
      </li>
      <li>
       <strong
       >Structure Scope only matters once a BOM has more than one
        level</strong
       >
       — on a flat, single-level BOM, A and B produce identical results;
       the distinction only shows up once components themselves have
       sub-components
      </li>
      <li>
       <strong>Item pricing never reaches past the first BOM level</strong>
       — worth remembering when a client expects a price on a second-level
       component and doesn't get one; that's expected behavior, not a bug
      </li>
      <li>
       <strong
       >Value Contract Material and Contract Release Control are
        WKN-exclusive</strong
       >
       — neither field has any effect on any other item category, so don't
       look for them elsewhere
      </li>
      <li>
       <strong
       >Item Category Determination is the "why" behind every item
        category seen so far</strong
       >
       — all the controls covered across this and the past several lectures
       live on item categories that get here determined automatically from
       Sales Document Type + Item Category Group + Item Usage +
       Higher-Level Item Category
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> full coverage of Item Category
      Determination, including Item Usage and the Higher-Level Item Category
      field.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 56 Notes — Item Category Controls Finished &amp; Item Category
    Determination Begins 🎓
   </p>
  </div>
 );
};

export default SalesDocument56;
