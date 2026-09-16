const Material31 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-cyan">
    <h1>
     🎯 Lecture 31 — Fields in Customer Master: Order Probability, Item
     Proposal, Exchange Rate Type, Price Group, Price List &amp; PP Customer
     Procedure
    </h1>
    <p>
     SAP SD | Wrapping up the Sales tab — cancellation-risk scoring,
     automatic vs. manual product proposals, per-customer exchange rate
     overrides, discount/base-price groupings, and product proposal vs.
     cross-selling
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class closed out the Payment Transactions tab and part of the
      Sales tab, ending with <strong>Switch Off Rounding</strong>. Today
      continues on the same Sales tab (Customer 100640, Balaji Enterprises)
      with Order Probability, Item Proposal, Exchange Rate Type, Price
      Group, Customer Pricing Procedure, Price List, Customer Statistics
      Group, and PP Customer Procedure. Shipping and Billing tabs are
      deferred to the next class.
     </div>
    </div>

    {/* <!-- Section 1: Order Probability --> */}
    <div className="card teal">
     <h2><span className="badge">22</span> Sales Tab — Order Probability</h2>
     <div className="callout teal">
      💡 <strong>Order Probability</strong> specifies, after an order is
      placed, the
      <strong>chance that the customer will <em>not</em> cancel</strong> it.
     </div>
     <div className="callout blue">
      📊 <strong>Reading the value:</strong> a value of
      <code>90</code> means there is a 90% chance the customer will not
      cancel — i.e. a <strong>10% chance</strong> the order gets cancelled.
      A value of <code>100</code> means the system treats it as certain the
      customer will not cancel.
     </div>
     <h3>How the Percentage Is Derived</h3>
     <p>
      This is based purely on the customer's
      <strong>past order history</strong> — not a manual guess. Example
      calculation:
     </p>
     <div className="formula-box">
      Orders received last year: 100 &nbsp;|&nbsp; Orders cancelled: 5
      &nbsp;→&nbsp; Order Probability = 95
     </div>
     <p className="note-text">
      📌 Out of 100 orders received from the customer last year, 5 were
      cancelled — so 95% of orders went through, giving an Order Probability
      of <code>95</code>.
     </p>
     <div className="callout green">
      ✅ <strong>Purpose:</strong> a low Order Probability score triggers
      the business to seek
      <strong
      >multiple confirmations from the customer before starting delivery
       activity</strong
      >
      — reducing wasted picking, packing, and dispatch effort on orders
      likely to be cancelled.
     </div>
    </div>

    {/* <!-- Section 2: Item Proposal --> */}
    <div className="card orange">
     <h2><span className="badge">23</span> Sales Tab — Item Proposal</h2>
     <div className="callout orange">
      💡 <strong>Item Proposal</strong> = a listing of the materials that a
      customer <strong>regularly orders</strong>, which can be
      <strong>called (recalled) while creating a sales order</strong>
      to auto-fill those line items.
     </div>
     <div className="callout blue">
      📦
      <strong
      >Worked example — Customer 100640 (Balaji Enterprises):</strong
      >
      this customer frequently orders the same couple of materials. An item
      proposal is built listing exactly those materials and quantities, so
      future sales orders for this customer don't require re-typing them
      each time.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Material</th>
        <th>Quantity</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>LAXI10200500</td>
        <td>100</td>
       </tr>
       <tr>
        <td>VAXI10200500</td>
        <td>150</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Only two materials are shown here for practice, but a real item
      proposal can list any number of regularly-ordered materials.
     </p>
     <div className="callout green">
      ✅ <strong>Purpose: saves the time of end users</strong> by
      eliminating repetitive manual entry of the same materials and
      quantities on every order for that customer.
     </div>

     <h3>Creating an Item Proposal — T-code VA51</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VA51</span> → mention Item Proposal
       Type <code>PV</code> (the standard item proposal type, the same way
       <code>IN</code> is the standard Inquiry type, <code>QT</code> the
       standard Quotation type, and <code>OR</code>
       the standard Order type) → mention Sales Area → Enter.
      </div>
      <div className="step">
       Mention a description (e.g., "List of materials regularly ordered"),
       Valid From, Valid To.
      </div>
      <div className="step">
       Enter the materials and quantities — e.g., LAXI10200500 (100),
       VAXI10200500 (150) → Save.
      </div>
      <div className="step">
       The system generates an Item Proposal number (e.g.,
       <code>55049</code>).
      </div>
      <div className="step">
       Go to the Customer Master of every customer that regularly orders
       these materials → maintain this Item Proposal number
       (<code>55049</code>) on the Sales tab → Save.
      </div>
     </div>

     <h3>Calling the Item Proposal While Creating a Sales Order</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VA01</span>, order type
       <code>OR</code>, Sales Area <code>P100/P1/P1</code> → mention the
       customer (e.g., <code>100640</code>) and PO number.
      </div>
      <div className="step">
       Click the <strong>"Propose Items"</strong> symbol — this pulls in
       the item proposal number maintained on that customer's master
       record.
      </div>
      <div className="step">
       Click <strong>Selection List</strong> — this opens the proposed
       materials, where quantities and materials can be selected,
       deselected, or edited.
      </div>
      <div className="step">
       Click <strong>Copy Quantities</strong> to bring in both materials
       and quantities, or <strong>Copy Material</strong> to bring in only
       the materials (quantities to be entered manually).
      </div>
     </div>
    </div>

    {/* <!-- Section 3: Exchange Rate Type --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">24</span> Sales Tab — Exchange Rate Type
     </h2>
     <div className="callout indigo">
      💡 <strong>Exchange Rate Type</strong> lets a specific customer
      override the
      <strong>standard exchange rate type (<code>M</code>)</strong> covered
      last class, when there is a special agreement with that customer.
     </div>
     <div className="callout blue">
      🔁 <strong>Recap — standard type M:</strong> the FI user maintains
      exchange rate type <code>M</code> on a
      <strong>daily basis</strong> via T-code
      <span className="tcode">OB08</span>, since rates fluctuate day-to-day.
     </div>
     <div className="callout gold">
      🤝
      <strong>Worked example — a fixed monthly rate agreement:</strong>
      suppose the company has an agreement with a foreign customer to hold a
      <strong>fixed exchange rate for the entire month</strong>, instead of
      the daily-changing standard rate. A new exchange rate type (e.g.,
      <code>B</code>) is created and maintained only once, at the start of
      the month.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">OB08</span> → New Entries → create
       exchange rate type <code>B</code>.
      </div>
      <div className="step">
       Maintain the rate only on the
       <strong>first day of the month</strong> — e.g., USD → INR at
       <code>90</code> — and it stays valid for the rest of the month (no
       daily update needed, unlike type <code>M</code>).
      </div>
      <div className="step">
       Go to the Customer Master of the customer covered by this agreement
       (e.g., <code>100640</code>) → maintain Exchange Rate Type
       <code>B</code> on the Sales tab → Save.
      </div>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Customer</th>
        <th>Exchange Rate Type Field</th>
        <th>Rate Applied on Sales Order</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>100465</td>
        <td>Blank</td>
        <td>
         Falls back to standard type M → today's daily rate (e.g., ₹93)
        </td>
       </tr>
       <tr>
        <td>100640</td>
        <td>B</td>
        <td>
         Uses the fixed monthly rate maintained for type B (e.g., ₹90)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Default behavior:</strong> if this field is left
      <strong>blank</strong>, the system always falls back to the standard
      exchange rate type <code>M</code> and picks up that day's rate. Only
      customers with a special agreement need a non-blank value here.
     </div>
    </div>

    {/* <!-- Section 4: Price Group --> */}
    <div className="card purple">
     <h2><span className="badge">25</span> Sales Tab — Price Group</h2>
     <div className="callout purple">
      💡 <strong>Price Group</strong> = grouping of customers who share the
      <strong>same discount</strong>.
     </div>
     <p>
      A discount is not identical for every customer — some get 10%, others
      5%, others 3%. Price Group is the field used to define which discount
      slab a customer falls into; the actual discount percentages themselves
      are maintained separately in
      <strong>Pricing</strong>, not on this field.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Price Group</th>
        <th>Discount Slab (example)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P1</td>
        <td>10% discount</td>
       </tr>
       <tr>
        <td>P2</td>
        <td>5% discount</td>
       </tr>
       <tr>
        <td>P3</td>
        <td>3% discount</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Sales and Distribution</span
      ><span className="sep">→</span>
      <span className="node">Basic Functions</span
      ><span className="sep">→</span> <span className="node">Pricing</span
      ><span className="sep">→</span>
      <span className="node"
      >Maintain Price Relevant Master Data Fields</span
      ><span className="sep">→</span>
      <span className="node">Define Price Groups for Customers</span>
     </div>
     <p className="note-text">
      New Entries → P1 (Group 1), P2 (Group 2), P3 (Group 3) → Save. The
      customer is then assigned the matching Price Group on the Customer
      Master (e.g., P1); the actual 10%/5%/3% discount values for each group
      are configured separately within Pricing.
     </p>
    </div>

    {/* <!-- Section 5: Customer Pricing Procedure --> */}
    <div className="card gold">
     <h2>
      <span className="badge">26</span> Sales Tab — Customer Pricing
      Procedure
     </h2>
     <div className="callout gold">
      💡 <strong>Customer Pricing Procedure</strong> is one of the
      parameters used to <strong>determine the Pricing Procedure</strong>
      in a sales document.
     </div>
    </div>

    {/* <!-- Section 6: Price List --> */}
    <div className="card red">
     <h2><span className="badge">27</span> Sales Tab — Price List</h2>
     <div className="callout red">
      💡 <strong>Price List</strong> = grouping of customers who share the
      <strong>same base price</strong> (the actual price of the product) —
      distinct from Price Group, which groups customers by discount.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> the base price is not the same for
      every customer category — Dealers, Distributors, and Institutions are
      each charged a different base price.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Price List Code</th>
        <th>Customer Category</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P1</td>
        <td>Dealer Price List</td>
       </tr>
       <tr>
        <td>P2</td>
        <td>Distributor Price List</td>
       </tr>
       <tr>
        <td>P3</td>
        <td>Institution Price List</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Sales and Distribution</span
      ><span className="sep">→</span>
      <span className="node">Basic Functions</span
      ><span className="sep">→</span> <span className="node">Pricing</span
      ><span className="sep">→</span>
      <span className="node"
      >Maintain Price Relevant Master Data Fields</span
      ><span className="sep">→</span>
      <span className="node"
      >Define Price List Categories for Customers</span
      >
     </div>
     <p className="note-text">
      New Entries → P1 (Dealer Price List), P2 (Distributor Price List), P3
      (Institution Price List) → Save. Since Customer 100640 is a dealer,
      <code>P1</code> is maintained on its Customer Master.
     </p>
     <div className="callout">
      📌 <strong>Price Group vs. Price List, at a glance:</strong> Price
      Group drives <em>discounts</em>; Price List drives the
      <em>base price</em> itself. Both are customer groupings, but they feed
      completely different parts of the pricing calculation.
     </div>
    </div>

    {/* <!-- Section 7: Customer Statistics Group --> */}
    <div className="card green">
     <h2>
      <span className="badge">28</span> Sales Tab — Customer Statistics
      Group
     </h2>
     <div className="callout green">
      💡 <strong>Customer Statistics Group</strong> controls whether to
      update the customer's sales data into
      <strong>LIS (Logistics Information System) reports</strong>.
     </div>
     <p>
      LIS is a <strong>management reporting tool</strong> in SAP used to
      analyze logistics and sales data.
     </p>
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
        <td>Relevant for statistics</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Not relevant for statistics</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 8: PP Customer Procedure --> */}
    <div className="card pink">
     <h2>
      <span className="badge">29</span> Sales Tab — PP Customer Procedure
     </h2>
     <div className="callout pink">
      💡 <strong>PP Customer Procedure</strong> ("PP" = Product Proposal)
      controls whether the system goes for
      <strong>Product Proposal</strong> or
      <strong>Cross-Selling</strong> for that customer.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Value</th>
        <th>Behavior</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>A</td>
        <td>Product Proposal</td>
       </tr>
       <tr>
        <td>B</td>
        <td>Cross-Selling</td>
       </tr>
      </tbody>
     </table>

     <h3>Product Proposal vs. Item Proposal</h3>
     <div className="callout blue">
      🔁 <strong>Product Proposal</strong> = the
      <strong>automatic</strong> process of determining an item proposal.
      This is the automated counterpart to
      <strong>Item Proposal</strong> (covered earlier in this lecture),
      which is <strong>manual</strong> — the user has to explicitly click
      "Propose Items" and call the list while creating the order. With PP
      Customer Procedure set to <code>A</code>, the system proposes the
      customer's regular items automatically.
     </div>

     <h3>Cross-Selling</h3>
     <div className="callout gold">
      🛍️ <strong>Cross-Selling</strong> = selling
      <strong>additional products alongside the main product</strong>.
     </div>
     <div className="callout">
      📱 <strong>Worked example:</strong> if the main product is a mobile
      phone, cross-selling would offer additional related products at the
      same time — a pouch, a Bluetooth device, an extra memory card, a
      screen guard, and so on.
     </div>
     <p className="note-text">
      📌 For a given customer: maintain <code>A</code> for automatic Product
      Proposal, or <code>B</code> for Cross-Selling, depending on which
      behavior suits that customer's ordering pattern.
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
        <td>What does Order Probability specify?</td>
        <td>
         After an order is placed, the chance that the customer will not
         cancel it (e.g., 90 means a 10% chance of cancellation)
        </td>
       </tr>
       <tr>
        <td>How is the Order Probability percentage derived?</td>
        <td>
         From the customer's past order history — e.g., 100 orders
         received last year with 5 cancelled gives an Order Probability
         of 95
        </td>
       </tr>
       <tr>
        <td>What is the purpose of Order Probability?</td>
        <td>
         It helps decide whether to take multiple confirmations from the
         customer before starting delivery activity
        </td>
       </tr>
       <tr>
        <td>What is Item Proposal?</td>
        <td>
         A listing of the materials a customer regularly orders, which
         can be called while creating a sales order — saves the time of
         end users
        </td>
       </tr>
       <tr>
        <td>
         What is the T-code and item proposal type used to create an Item
         Proposal?
        </td>
        <td>VA51, with Item Proposal Type PV</td>
       </tr>
       <tr>
        <td>
         How is an Item Proposal linked to and used for a customer?
        </td>
        <td>
         The generated item proposal number (e.g., 55049) is maintained
         on the customer's Sales tab; during VA01 order creation,
         clicking "Propose Items" then "Selection List" lets the user
         copy materials and/or quantities from that list
        </td>
       </tr>
       <tr>
        <td>
         What is the difference between "Copy Quantities" and "Copy
         Material" in the item proposal selection list?
        </td>
        <td>
         Copy Quantities brings in both materials and quantities; Copy
         Material brings in only the materials, with quantities entered
         manually
        </td>
       </tr>
       <tr>
        <td>
         What is the standard Exchange Rate Type, and how often is it
         maintained?
        </td>
        <td>
         M — maintained daily by the FI user via T-code OB08, since
         exchange rates fluctuate day to day
        </td>
       </tr>
       <tr>
        <td>
         What is the Exchange Rate Type field on the Customer Master used
         for?
        </td>
        <td>
         To override the standard type M with a different exchange rate
         type (e.g., B) for customers who have a special agreement, such
         as a fixed rate held for the entire month
        </td>
       </tr>
       <tr>
        <td>
         What happens if the Exchange Rate Type field on the Customer
         Master is left blank?
        </td>
        <td>
         The system falls back to the standard type M and uses that day's
         exchange rate
        </td>
       </tr>
       <tr>
        <td>What is Price Group?</td>
        <td>Grouping of customers who share the same discount</td>
       </tr>
       <tr>
        <td>
         Where are the actual discount percentages for a Price Group
         maintained?
        </td>
        <td>
         Separately, within Pricing — not on the Price Group master field
         itself
        </td>
       </tr>
       <tr>
        <td>What is Customer Pricing Procedure?</td>
        <td>
         One of the parameters used to determine the Pricing Procedure in
         a sales document
        </td>
       </tr>
       <tr>
        <td>
         What is Price List, and how does it differ from Price Group?
        </td>
        <td>
         Price List groups customers who share the same base price (e.g.,
         separate price lists for Dealers, Distributors, Institutions);
         Price Group instead groups customers by discount
        </td>
       </tr>
       <tr>
        <td>What does Customer Statistics Group control?</td>
        <td>
         Whether the customer's sales data is updated into LIS (Logistics
         Information System) reports — 1 = relevant for statistics, 2 =
         not relevant
        </td>
       </tr>
       <tr>
        <td>
         What does PP Customer Procedure control, and what do its values
         mean?
        </td>
        <td>
         Whether the system goes for Product Proposal or Cross-Selling; A
         = Product Proposal, B = Cross-Selling
        </td>
       </tr>
       <tr>
        <td>
         What is Product Proposal, and how does it differ from Item
         Proposal?
        </td>
        <td>
         Product Proposal is the automatic process of determining an item
         proposal; Item Proposal is the manual version, requiring the
         user to explicitly call the list ("Propose Items") while
         creating the order
        </td>
       </tr>
       <tr>
        <td>What is Cross-Selling?</td>
        <td>
         Selling additional products alongside the main product — e.g., a
         pouch, Bluetooth device, memory card, and screen guard sold
         alongside a mobile phone
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
        <td><span className="tcode">VA51</span></td>
        <td>Create Item Proposal (Item Proposal Type PV)</td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>
         Create Sales Order — used here to call the Item Proposal via
         "Propose Items" → Selection List
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OB08</span></td>
        <td>
         Maintain Exchange Rates — used for the standard type M (daily)
         and any custom types like B (e.g., maintained once a month for
         fixed-rate agreements)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      📌 <strong>Transcription correction:</strong> the exchange-rate
      maintenance T-code is <span className="tcode">OB08</span> (as
      established in Lecture 30), not "OC41" — the latter does not exist as
      a standard SAP transaction and is a mishearing of OB08.
     </div>
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
        <td>Item Proposal type</td>
        <td>PV (standard)</td>
       </tr>
       <tr>
        <td>Item Proposal worked example</td>
        <td>
         Materials LAXI10200500 (100) &amp; VAXI10200500 (150); generated
         number 55049; maintained on Customer 100640
        </td>
       </tr>
       <tr>
        <td>Standard Exchange Rate Type</td>
        <td>M (daily maintenance via OB08)</td>
       </tr>
       <tr>
        <td>Custom Exchange Rate Type example</td>
        <td>
         B — fixed for the full month, maintained once at month start
         (e.g., USD/INR = 90)
        </td>
       </tr>
       <tr>
        <td>Price Group SPRO path</td>
        <td>
         SPRO → Sales and Distribution → Basic Functions → Pricing →
         Maintain Price Relevant Master Data Fields → Define Price Groups
         for Customers
        </td>
       </tr>
       <tr>
        <td>Price Group example</td>
        <td>P1 (10%), P2 (5%), P3 (3%) discount slabs</td>
       </tr>
       <tr>
        <td>Price List SPRO path</td>
        <td>
         SPRO → Sales and Distribution → Basic Functions → Pricing →
         Maintain Price Relevant Master Data Fields → Define Price List
         Categories for Customers
        </td>
       </tr>
       <tr>
        <td>Price List example</td>
        <td>P1 Dealer, P2 Distributor, P3 Institution</td>
       </tr>
       <tr>
        <td>Customer Statistics Group values</td>
        <td>1 = relevant for statistics, 2 = not relevant</td>
       </tr>
       <tr>
        <td>PP Customer Procedure values</td>
        <td>A = Product Proposal (automatic), B = Cross-Selling</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed most of the remaining fields on the Customer
      Master's Sales tab. <strong>Order Probability</strong>
      scores the likelihood that a placed order will not be cancelled,
      derived from the customer's historical cancellation rate, and drives
      whether extra confirmations are sought before delivery.
      <strong>Item Proposal</strong> is a manually-maintained list of a
      customer's regularly-ordered materials (T-code <strong>VA51</strong>,
      type PV) that can be called during order entry via "Propose Items" →
      Selection List, saving end-user time.
      <strong>Exchange Rate Type</strong> lets a specific customer override
      the standard daily-maintained type M with a custom type (e.g., B) for
      special agreements such as a fixed monthly rate.
      <strong>Price Group</strong> groups customers by shared discount,
      while <strong>Price List</strong> groups them by shared base price —
      two related but distinct pricing-relevant master fields, both
      configured under the same Pricing → Maintain Price Relevant Master
      Data Fields node in SPRO.
      <strong>Customer Pricing Procedure</strong> feeds into determining the
      sales document's pricing procedure.
      <strong>Customer Statistics Group</strong> controls whether a
      customer's data feeds into LIS management reports. Finally,
      <strong>PP Customer Procedure</strong> toggles between automatic
      <strong>Product Proposal</strong> (the automated counterpart to the
      manual Item Proposal) and <strong>Cross-Selling</strong>, the practice
      of offering complementary products alongside a main product.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Order Probability</strong> is data-driven from past
       cancellation history, not a manual guess
      </li>
      <li>
       <strong>Item Proposal (manual, VA51/PV)</strong> vs.
       <strong
       >Product Proposal (automatic, PP Customer Procedure = A)</strong
       >
       — the same underlying idea, one triggered by the user, one by the
       system
      </li>
      <li>
       A blank <strong>Exchange Rate Type</strong> always falls back to
       standard type M; only special customer agreements need an override
       like type B
      </li>
      <li>
       <strong>Price Group (discount) vs. Price List (base price)</strong>
       — both group customers, but feed completely different parts of the
       pricing calculation
      </li>
      <li>
       <strong>PP Customer Procedure</strong> is a simple A/B toggle: A for
       automatic Product Proposal, B for Cross-Selling
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Shipping and Billing tabs — the
      remaining Customer Master fields — after which the course moves on to
      Material Master.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 31 Notes — Fields in Customer Master: Order Probability, Item
    Proposal, Exchange Rate Type, Price Group, Price List &amp; PP Customer
    Procedure 🎓
   </p>
  </div>
 );
};

export default Material31;
