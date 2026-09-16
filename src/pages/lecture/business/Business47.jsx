const Business47 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-red">
    <h1>
     📦 Lecture 47 — Scheduling Agreement Live, Item Proposal &amp;
     Consignment Process
    </h1>
    <p>
     SAP SD | Practicing Scheduling Agreement's date-driven direct delivery,
     the time-saving Item Proposal feature, and the first three stages of the
     Consignment Process — Fill-Up, Issue, and Returns — where stock
     ownership stays with the company until the customer actually sells
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered Scheduling Agreement conceptually. Today
      practices it live in the system, briefly introduces the
      <strong>Item Proposal</strong> feature (not itself a business process,
      just a time-saver), and begins the
      <strong>Consignment Process</strong> — a four-part process where the
      company keeps ownership of stock sitting at the customer's premises
      until the customer actually sells it onward.
     </div>
    </div>

    {/* <!-- Section 1: Scheduling Agreement System Walkthrough --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Scheduling Agreement — Live System
      Walkthrough
     </h2>
     <div className="callout teal">
      💡 Recap: a <strong>Scheduling Agreement</strong> (document type
      <code>DS</code>) is an agreement for a particular quantity within a
      validity period, with
      <strong
      >predefined delivery dates already built into the agreement</strong
      >
      — so there is <strong>no separate Release Order step</strong>;
      delivery happens directly against the agreement.
     </div>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA31</span> → Document Type
       <code>DS</code> → Sales Organization/Distribution Channel/Division
       (e.g., <code>P100/P1/P1</code>) → Enter → mention the Customer, PO
       number, and Material → mention the total Target Quantity (e.g.,
       <code>10,000</code>) and Valid From/To.
      </div>
      <div className="step">
       Double-click the item → go to
       <strong>Schedule Lines</strong> → mention each agreed
       <strong>date and its quantity</strong> — e.g.,
       <code>500</code> units in mid-July, <code>1,000</code> units the
       following month, <code>1,500</code> units the month after, and
       <code>2,000</code> units the month after that, continuing until the
       full <code>10,000</code> is scheduled across the validity period →
       Save.
      </div>
      <div className="step">
       To deliver: create a <strong>Delivery</strong> directly against the
       agreement, mentioning the desired delivery date (e.g.,
       <code>20th July</code>) — the system automatically proposes the
       quantity <strong>due for that date</strong> (<code>500</code> units)
       → mention Pick Quantity → post <strong>PGI</strong> → create
       <strong>Invoice</strong> → Save.
      </div>
      <div className="step">
       Creating a further Delivery against a later date (e.g.,
       <code>1st August</code>, which can even be a future date) pulls in
       that period's scheduled quantity instead (<code>1,000</code>
       units) → Pick Quantity → PGI → Invoice.
      </div>
     </div>
     <p className="note-text">
      📌 The whole point of Scheduling Agreement is that both parties agree
      the full delivery calendar upfront — there's nothing left to negotiate
      order-by-order; each delivery just reads off the quantity already
      committed for that date.
     </p>
    </div>

    {/* <!-- Section 2: Item Proposal --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Item Proposal — A Time-Saving Feature
      (Not a Process)
     </h2>
     <div className="callout orange">
      💡 <strong>Item Proposal</strong> isn't a business process in itself —
      it's a
      <strong>listing of the materials a customer regularly orders</strong>,
      which can be called up automatically while creating a sales order,
      saving the end user from typing in the same materials every time.
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
        <td><code>PV</code></td>
       </tr>
       <tr>
        <td>T-Code (Create)</td>
        <td><span className="tcode">VA51</span></td>
       </tr>
      </tbody>
     </table>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA51</span> → Item Proposal Type
       <code>PV</code> → Enter → mention a Description (e.g., "List of
       materials regularly ordered") → mention Valid From/To (e.g.,
       <code>1st January</code> to <code>31st December</code>, one year) →
       list the customer's regularly-ordered materials → Save. The system
       generates an Item Proposal number (worked example:
       <code>55050</code>).
      </div>
      <div className="step">
       Go to <strong>Customer Master</strong> → Sales Area Data → Sales tab
       → mention the Item Proposal number (<code>55050</code>) in the
       relevant field → Save.
      </div>
      <div className="step">
       When creating a sales order for that customer, click the
       <strong>Propose Items</strong> button → the proposal list appears →
       click <strong>Selection List</strong> → select or deselect items and
       adjust quantities as needed → click
       <strong>Copy Quantities</strong> to bring the chosen items and
       quantities into the order.
      </div>
     </div>
     <p className="note-text">
      📌 If the customer wants a product that isn't in their Item Proposal
      list, it can still be entered manually on the order like normal — the
      proposal list is purely a convenience shortcut, not a restriction on
      what can be ordered.
     </p>
    </div>

    {/* <!-- Section 3: Consignment Process - Concept --> */}
    <div className="card purple">
     <h2><span className="badge">3</span> Consignment Process — Concept</h2>
     <div className="callout purple">
      💡 <strong>Consignment Process</strong> means
      <strong
      >dumping stock at the customer's premises while keeping ownership
       with the company</strong
      >. Only when the customer sells the goods onward to their own
      customers does the company <strong>transfer ownership</strong> to that
      customer — and only for the quantity actually sold.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Consignment Sub-Process</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Consignment Fill-Up</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Consignment Issue</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Consignment Returns</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Consignment Pickup</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔗 <strong>Why customers accept consignment goods:</strong>
      <strong>No upfront investment</strong> (they don't pay for the stock
      until they actually sell it) plus
      <strong>additional discounts</strong>, since consignment is typically
      offered for newly launched products the company wants to push into the
      market.
     </div>
     <div className="callout red">
      ⚠️ <strong>Why ownership matters:</strong> as long as ownership stays
      with the company, the company — not the customer — bears the risk if
      something happens to the goods (fire, accident, damage, etc.) while
      they sit at the customer's premises.
     </div>
     <div className="callout gold">
      🔗
      <strong>Note on C&amp;F (Carrying &amp; Forwarding Agent):</strong>
      C&amp;F is <strong>not a customer</strong>. A C&amp;F agent simply
      holds and stores stock at their premises (like a depot) and delivers
      it out whenever an order comes in, earning roughly a
      <strong>2% commission on every invoice</strong> — this is a distinct
      role from a consignment customer, who actually owns/sells the goods
      themselves once invoiced.
     </div>
    </div>

    {/* <!-- Section 4: Consignment Fill-Up --> */}
    <div className="card red">
     <h2>
      <span className="badge">4</span> Consignment Process — Step 1:
      Consignment Fill-Up
     </h2>
     <div className="callout red">
      💡 <strong>Consignment Fill-Up</strong> means
      <strong
      >just dumping the stock at the customer's premises while keeping
       ownership with the company</strong
      >
      — nothing is sold or billed yet.
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
        <td>Relevant for Pricing?</td>
        <td>No</td>
       </tr>
       <tr>
        <td>Relevant for Billing?</td>
        <td>No</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Customer
      <strong>Alchem Laboratories Ltd</strong> (customer
      <code>100640</code>) accepts consignment terms for a new material
      (e.g., <code>VACCINE9999</code>) — starting Unrestricted Stock:
      <code>50,000</code> units. Company fills up <code>10,000</code> units
      to this customer on consignment.
     </div>
     <div className="callout gold">
      📖 <strong>Effect at Delivery:</strong> (1) stock is
      <strong>reduced from Unrestricted Stock</strong>
      (<code>50,000 → 40,000</code>); (2) that same stock is
      <strong>added to Consignment Stock</strong> for that specific customer
      (<code>0 → 10,000</code>). Because no pricing or billing is involved
      and ownership hasn't transferred,
      <strong>no inventory accounting document is generated</strong>.
     </div>
    </div>

    {/* <!-- Section 5: Consignment Issue --> */}
    <div className="card gold">
     <h2>
      <span className="badge">5</span> Consignment Process — Step 2:
      Consignment Issue
     </h2>
     <div className="callout gold">
      💡 <strong>Consignment Issue</strong> happens when the customer
      actually
      <strong
      >sells some of the consigned stock onward to their own
       customers</strong
      >
      and informs the company how much was sold — the company then invoices
      only for that quantity.
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
        <td>Relevant for Pricing?</td>
        <td>Yes</td>
       </tr>
       <tr>
        <td>Relevant for Billing?</td>
        <td>Yes</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> the company had sent
      <code>10,000</code> units to its dealer on consignment; the dealer
      sells <code>4,000</code> units to medical stores (the dealer's own
      customers) and informs the company → company creates a
      <strong>Consignment Issue</strong> for <code>4,000</code> units →
      Delivery → Invoice for <code>4,000</code> units.
     </div>
     <div className="callout gold">
      📖 <strong>Effect at Delivery:</strong> (1) stock is
      <strong>reduced from Consignment Stock</strong>
      (<code>10,000 → 6,000</code>); (2) an
      <strong>inventory accounting document is generated</strong>, because —
      unlike Fill-Up — ownership is now genuinely
      <strong>transferred to the customer</strong> for the sold quantity.
     </div>
    </div>

    {/* <!-- Section 6: Consignment Returns --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">6</span> Consignment Process — Step 3:
      Consignment Returns
     </h2>
     <div className="callout indigo">
      💡 <strong>Consignment Returns</strong> handles goods coming back from
      the customer's own end customer (e.g., a medical store)
      <strong>after</strong> a Consignment Issue has already happened — the
      end customer returns unsold or unwanted stock to our customer, who
      then returns it to the company.
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
        <td>Relevant for Pricing?</td>
        <td>Yes</td>
       </tr>
       <tr>
        <td>Relevant for Billing?</td>
        <td>Yes</td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> of the <code>4,000</code>
      units already issued, the end customer (medical store) returns
      <code>500</code> units back to the dealer → Return Delivery → Return
      Invoice for <code>500</code> units.
     </div>
     <div className="callout gold">
      📖 <strong>Effect at Return Delivery:</strong> (1) stock is
      <strong>added back to Consignment Stock</strong>
      (<code>6,000 → 6,500</code>); (2) an
      <strong>inventory accounting document is generated</strong>, because
      the company is <strong>taking back ownership</strong> from the
      customer. Accounting entry:
      <strong
      >Inventory Account Debit → Cost of Goods Sold Account Credit</strong
      >.
     </div>
    </div>

    {/* <!-- Section 7: Stock Movement Summary --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">📌</span> Worked Example — Full Stock Movement
      So Far
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Stage</th>
        <th>Unrestricted Stock</th>
        <th>Consignment Stock (Customer)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Starting point</td>
        <td>50,000</td>
        <td>0</td>
       </tr>
       <tr>
        <td>After Consignment Fill-Up (10,000 units)</td>
        <td>40,000</td>
        <td>10,000</td>
       </tr>
       <tr>
        <td>After Consignment Issue (4,000 units sold onward)</td>
        <td>40,000</td>
        <td>6,000</td>
       </tr>
       <tr>
        <td>After Consignment Returns (500 units returned)</td>
        <td>40,000</td>
        <td>6,500</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 8: Comparison Table --> */}
    <div className="card brown">
     <h2>
      <span className="badge">📌</span> Key Nuance — Consignment
      Sub-Processes Side by Side
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Aspect</th>
        <th>Fill-Up</th>
        <th>Issue</th>
        <th>Returns</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Relevant for Pricing?</td>
        <td>No</td>
        <td>Yes</td>
        <td>Yes</td>
       </tr>
       <tr>
        <td>Relevant for Billing?</td>
        <td>No</td>
        <td>Yes</td>
        <td>Yes</td>
       </tr>
       <tr>
        <td>Stock Effect</td>
        <td>Unrestricted Stock decreases; Consignment Stock increases</td>
        <td>Consignment Stock decreases</td>
        <td>Consignment Stock increases</td>
       </tr>
       <tr>
        <td>Inventory Accounting Document?</td>
        <td>No — ownership stays with company</td>
        <td>Yes — ownership transfers to customer</td>
        <td>Yes — ownership reverts to company</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 <strong>Consignment Pickup</strong> — the fourth sub-process, used
      when the company physically takes back <em>unsold</em> consignment
      stock directly from the customer (rather than goods already sold and
      later returned) — was previewed by name only and will be covered in
      detail next class.
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
         How does delivery work in a Scheduling Agreement compared to a
         Quantity or Value Contract?
        </td>
        <td>
         There is no separate Release Order — creating a Delivery
         directly against a specific date on the agreement automatically
         pulls in the quantity scheduled for that date
        </td>
       </tr>
       <tr>
        <td>What is an Item Proposal, and what problem does it solve?</td>
        <td>
         A saved list of materials a customer regularly orders (document
         type PV, T-code VA51), called up during order creation via the
         Propose Items button to save end users from manually re-entering
         the same materials each time
        </td>
       </tr>
       <tr>
        <td>Where is the Item Proposal number linked to a customer?</td>
        <td>
         In the Customer Master, under Sales Area Data → Sales tab, in
         the Item Proposal field
        </td>
       </tr>
       <tr>
        <td>
         Can a customer still order a material that isn't in their Item
         Proposal list?
        </td>
        <td>
         Yes — it can be entered manually on the order like any normal
         item; the proposal list is only a convenience, not a restriction
        </td>
       </tr>
       <tr>
        <td>What is the Consignment Process, in one line?</td>
        <td>
         Dumping stock at the customer's premises while keeping ownership
         with the company, transferring ownership only when the customer
         actually sells the goods to their own customers
        </td>
       </tr>
       <tr>
        <td>What are the four sub-processes of Consignment?</td>
        <td>
         Consignment Fill-Up, Consignment Issue, Consignment Returns, and
         Consignment Pickup
        </td>
       </tr>
       <tr>
        <td>Why do customers find consignment terms attractive?</td>
        <td>
         No upfront investment (they don't pay until they sell) and
         typically additional discounts, since consignment is usually
         used to push newly launched products
        </td>
       </tr>
       <tr>
        <td>
         Who bears the risk if consigned goods are damaged or destroyed
         while at the customer's premises?
        </td>
        <td>
         The company — because ownership hasn't transferred to the
         customer yet
        </td>
       </tr>
       <tr>
        <td>
         What happens to stock and accounting at Consignment Fill-Up, and
         why?
        </td>
        <td>
         Stock moves from Unrestricted Stock to Consignment Stock, but no
         inventory accounting document is generated, because it's not
         relevant for pricing/billing and ownership stays with the
         company
        </td>
       </tr>
       <tr>
        <td>
         What triggers a Consignment Issue, and what changes versus
         Fill-Up?
        </td>
        <td>
         The customer selling some of the consigned stock onward and
         informing the company; unlike Fill-Up, Issue is relevant for
         pricing and billing, and generates an inventory accounting
         document because ownership transfers to the customer
        </td>
       </tr>
       <tr>
        <td>
         What is Consignment Returns, and what is its accounting entry?
        </td>
        <td>
         Goods coming back from the end customer through our customer
         after a prior Consignment Issue; accounting entry is Inventory
         Account Debit to Cost of Goods Sold Account Credit, since the
         company is taking back ownership
        </td>
       </tr>
       <tr>
        <td>
         Is a Carrying and Forwarding (C&amp;F) agent a customer in SAP
         SD terms?
        </td>
        <td>
         No — a C&F agent only stores and forwards stock like a depot,
         earning a commission (e.g., ~2%) per invoice; they are not a
         consignment customer who owns and sells the goods themselves
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
        <td><span className="tcode">VA31</span></td>
        <td>Create Scheduling Agreement (document type DS)</td>
       </tr>
       <tr>
        <td><span className="tcode">VA51</span></td>
        <td>Create Item Proposal (document type PV)</td>
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
        <td>Scheduling Agreement worked example</td>
        <td>
         Target Qty 10,000; schedule lines of 500 / 1,000 / 1,500 / 2,000
         units across successive months; delivery on 20 Jul pulls 500,
         delivery on 1 Aug pulls 1,000
        </td>
       </tr>
       <tr>
        <td>Item Proposal worked example</td>
        <td>
         Type PV, valid 1 Jan – 31 Dec, generated number 55050, linked in
         Customer Master Sales Area Data → Sales tab
        </td>
       </tr>
       <tr>
        <td>Consignment Fill-Up worked example</td>
        <td>
         Customer Alchem Labs (100640), material VACCINE9999,
         Unrestricted Stock 50,000 → 40,000 after 10,000-unit fill-up;
         Consignment Stock 0 → 10,000
        </td>
       </tr>
       <tr>
        <td>Consignment Issue worked example</td>
        <td>
         4,000 of the 10,000 consigned units sold onward → Consignment
         Stock 10,000 → 6,000; inventory accounting document generated
        </td>
       </tr>
       <tr>
        <td>Consignment Returns worked example</td>
        <td>
         500 units returned by end customer (medical store) → Consignment
         Stock 6,000 → 6,500; accounting entry Inventory Account Debit /
         COGS Account Credit
        </td>
       </tr>
       <tr>
        <td>C&amp;F agent commission</td>
        <td>Approximately 2% on every invoice</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture practiced <strong>Scheduling Agreement</strong> live in
      the system (VA31, document type DS), confirming that maintaining
      Schedule Lines with specific dates and quantities lets deliveries be
      created directly against the agreement with no Release Order in
      between — each delivery date simply pulls its committed quantity. It
      then briefly covered <strong>Item Proposal</strong> (document type PV,
      T-code VA51) as a pure convenience feature: a saved list of a
      customer's regularly ordered materials, linked via the Customer Master
      and called up with the Propose Items button during order creation,
      purely to save end-user time. The bulk of the lecture introduced the
      <strong>Consignment Process</strong> — dumping stock at a customer's
      premises while keeping ownership with the company until the customer
      actually sells it — and worked through its first three sub-processes:
      <strong>Consignment Fill-Up</strong> (not relevant for
      pricing/billing; stock moves from Unrestricted to Consignment Stock
      with no accounting document, since ownership doesn't move),
      <strong>Consignment Issue</strong> (relevant for both pricing and
      billing; Consignment Stock decreases and an inventory accounting
      document generates because ownership transfers), and
      <strong>Consignment Returns</strong> (also relevant for
      pricing/billing; Consignment Stock increases back and an inventory
      accounting document generates — Inventory Account Debit to COGS
      Account Credit — because ownership reverts to the company). A worked
      stock ledger tracked all three stages together, and the fourth
      sub-process, Consignment Pickup, was previewed by name for the next
      class. A clarification was also made that a C&amp;F agent is a
      storage/forwarding role earning commission, not a consignment
      customer.
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
       >Scheduling Agreement front-loads all the negotiation</strong
       >
       — once schedule lines are set, deliveries become almost mechanical,
       reading off pre-agreed dates and quantities
      </li>
      <li>
       <strong>Item Proposal is a UX shortcut, not a control</strong> — it
       never restricts what can be ordered, only speeds up entering what's
       usually ordered
      </li>
      <li>
       <strong
       >Ownership transfer is the single hinge fact in
        Consignment</strong
       >
       — pricing, billing, and whether an inventory accounting document
       generates all follow directly from whether ownership has actually
       moved
      </li>
      <li>
       <strong
       >Consignment Fill-Up moves stock without moving money</strong
       >
       — it's easy to mistake it for a sale, but nothing is priced, billed,
       or accounted until Issue happens
      </li>
      <li>
       <strong
       >Don't confuse a C&amp;F agent with a consignment customer</strong
       >
       — one earns a commission for storage/logistics, the other actually
       owns and resells the goods once invoiced
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Consignment Pickup — the final
      sub-process of the Consignment cycle.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 47 Notes — Scheduling Agreement Live, Item Proposal &amp;
    Consignment Process 🎓
   </p>
  </div>
 );
};

export default Business47;
