const Customer14 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-blue">
    <h1>📇 Lecture 14 — Master Data: Customer Master, Material Master, CMIR &amp; Condition Master</h1>
    <p>
     SAP SD | Moving past Enterprise Structure — the second core
     concept, Master Data, and its four types
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Enterprise Structure is now fully complete (definition +
      assignment). This lecture introduces the course's
      <strong>second core concept: Master Data</strong>.
     </div>
    </div>

    {/* <!-- Section 1: What is Master Data --> */}
    <div className="card teal">
     <h2><span className="badge">1</span> What Is Master Data?</h2>
     <div className="callout teal">
      💡 <strong>Master Data</strong> = data which is
      <strong> stored centrally</strong> and used in
      <strong>day-to-day transactions</strong> wherever it is required.
     </div>
     <div className="callout">
      🔒 Master Data is also data which
      <strong>cannot be changed frequently</strong> — it's set up once
      and reused, rather than re-entered or reworked for every
      transaction.
     </div>
     <p className="note-text">
      📌 "Centrally" means it's created <strong>once</strong> in the
      system — and whenever that customer, material, or price is
      needed again (in SD, or wherever else it's required), the system
      just reuses that one stored record instead of asking for the
      details all over again.
     </p>
    </div>

    {/* <!-- Section 2: Who creates it --> */}
    <div className="card orange">
     <h2><span className="badge">2</span> Who Creates Master Data?</h2>
     <table className="table-reponsive">
      <thead>
       <tr><th>Role</th><th>Responsibility</th></tr>
      </thead>
      <tbody>
       <tr>
        <td>Users</td>
        <td>
         Responsible for actually <strong>creating</strong> master
         data. A user is an employee of the client (e.g. Alchem
         Laboratories Limited) who uses SAP for day-to-day work.
        </td>
       </tr>
       <tr>
        <td>Consultants</td>
        <td>
         <strong>Give training</strong> to users on how to create
         master data, and <strong>define new information in the
          master data fields</strong> (the field-level configuration
         behind the screens users work in)
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 3: 4 types overview --> */}
    <div className="card purple">
     <h2><span className="badge">3</span> The 4 Types of Master Data in SAP SD</h2>
     <div className="four-grid">
      <div className="mini-card mc-blue"><h4>1️⃣ Customer Master</h4></div>
      <div className="mini-card mc-teal"><h4>2️⃣ Material Master</h4></div>
      <div className="mini-card mc-orange"><h4>3️⃣ Customer Material Info Record (CMIR)</h4></div>
      <div className="mini-card mc-purple"><h4>4️⃣ Condition Master (Pricing Master)</h4></div>
     </div>
    </div>

    {/* <!-- Section 4: Customer Master --> */}
    <div className="card gold">
     <h2><span className="badge">1</span> Customer Master</h2>
     <div className="callout gold">
      💡 <strong>Customer Master</strong> = the data of the customer
      which is stored centrally and used in day-to-day transactions
      wherever it is required.
     </div>
     <p>
      <strong>Who is a customer?</strong> The person who purchases the
      goods from the company — e.g. dealers, distributors, hospitals
      (institutions).
     </p>
     <h3>Fields Typically Maintained in Customer Master</h3>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field Group</th><th>Content</th></tr>
      </thead>
      <tbody>
       <tr><td>Name</td><td>Customer name</td></tr>
       <tr><td>Address</td><td>Physical address details</td></tr>
       <tr><td>Communication</td><td>Contact information — phone number, email ID</td></tr>
       <tr><td>Bank Information</td><td>The customer's bank details</td></tr>
       <tr><td>Unloading Point Information</td><td>Where goods should be unloaded at the customer's site</td></tr>
       <tr><td>Shipping / Contact Person Information</td><td>Who to coordinate shipping/delivery with</td></tr>
       <tr><td>Terms and Conditions</td><td>Agreed business terms for that customer</td></tr>
      </tbody>
     </table>
     <div className="callout blue">
      🔢 <strong>On save:</strong> the system generates a unique
      <strong>customer number</strong>. From then on, whenever that
      customer places an order, the user only needs to enter this
      number — the entire stored customer record is automatically
      copied into the order.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field</th><th>Value</th></tr>
      </thead>
      <tbody>
       <tr><td>Who Creates It</td><td>Users</td></tr>
       <tr><td>Consultant's Role</td><td>Train users on customer master creation; define new information in customer master fields</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 5: Why master data matters --> */}
    <div className="card red">
     <h2><span className="badge">💡</span> Why Master Data Matters — Advantages</h2>
     <div className="callout red">
      ⚠️ <strong>Without master data:</strong> every single order would
      require re-entering the full customer/material/price details
      manually — which takes far longer, and manual re-entry is exactly
      where user mistakes creep in, directly affecting the business.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>#</th><th>Advantage</th></tr>
      </thead>
      <tbody>
       <tr><td>1</td><td>It saves the time of end users</td></tr>
       <tr><td>2</td><td>It avoids manual mistakes</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 6: Material Master --> */}
    <div className="card teal">
     <h2><span className="badge">2</span> Material Master</h2>
     <div className="callout teal">
      💡 <strong>Material Master</strong> = the data of the product
      which is stored centrally and used in day-to-day transactions
      wherever it is required. It's essentially the
      <strong> product master</strong>.
     </div>
     <p>
      Example content: <strong>specifications</strong> and
      <strong> description</strong> of the product.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr><th>Field</th><th>Value</th></tr>
      </thead>
      <tbody>
       <tr><td>Who Creates It</td><td>Users</td></tr>
       <tr><td>Consultant's Role</td><td>Train users on material master creation; define new information in material master fields</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 7: CMIR --> */}
    <div className="card orange">
     <h2><span className="badge">3</span> Customer Material Info Record (CMIR)</h2>
     <div className="callout orange">
      💡 Used <strong>only when a customer places orders using their
       own material codes</strong>, instead of the company's material
      codes.
     </div>
     <h3>The Business Scenario</h3>
     <p>
      Some large customers (e.g. a Walmart-scale account) have been
      running their own product-coding system for decades and will not
      switch to the company's material codes. If a company wants to do
      business with such a customer, it needs a way to translate
      between the two coding systems — that's exactly what CMIR does.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr><th>Perspective</th><th>Material Code Example</th></tr>
      </thead>
      <tbody>
       <tr><td>Company's own material code</td><td><code>VACCINE10150015BOT</code></td></tr>
       <tr><td>Customer's own material code (e.g. Walmart)</td><td><code>VX1015</code></td></tr>
      </tbody>
     </table>
     <div className="callout blue">
      🤝 <strong>Who decides the mapping?</strong> This isn't something
      a customer simply "tells" the company — the company sends a
      <strong>product development team</strong> to the customer's
      location, the customer assigns their own product development
      team, and the two teams jointly go through the products and
      finalize the cross-reference list. That finalized list is then
      handed to the company-side user, who maintains it as CMIR.
     </div>
     <h3>How It Works — Step by Step</h3>
     <div className="stepper">
      <div className="step">
       In CMIR master data, the user <strong>assigns the customer's
        material code to the company's material code</strong>.
      </div>
      <div className="step">
       The customer raises a <strong>PO (Purchase Order)</strong>
       quoting their own material code (e.g. <code>VX1015</code>,
       quantity 100) and sends it to the company.
      </div>
      <div className="step">
       The user creates the <strong>Sales Order</strong> and enters
       the <strong>customer's</strong> material code.
      </div>
      <div className="step">
       The system automatically determines and pulls in the
       <strong>company's</strong> material code — no manual lookup
       needed.
      </div>
     </div>
     <div className="callout green">
      ✅ <strong>Not a regular requirement:</strong> CMIR is only needed
      for customers who deviate from the company's material codes —
      typically only a handful of very large accounts, not the general
      customer base.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr><th>Q</th><th>A</th></tr>
      </thead>
      <tbody>
       <tr><td>When do we use CMIR?</td><td>When customers place orders with their own material codes</td></tr>
       <tr><td>What do we do in CMIR master data?</td><td>Assign the customer's material code to the company's material code</td></tr>
       <tr><td>What is the result of maintaining CMIR?</td><td>While creating a sales order, if the user enters the customer's material code, the system automatically determines the corresponding company material code</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 8: Condition Master --> */}
    <div className="card purple">
     <h2><span className="badge">4</span> Condition Master (Pricing Master)</h2>
     <div className="callout purple">
      💡 <strong>Condition Master</strong> = the data of the
      <strong>price</strong> which is stored centrally and used in
      day-to-day transactions wherever it is required. Also called the
      <strong>Pricing Master</strong>.
     </div>
     <p>
      "Price" here is a broad umbrella — it covers everything that
      eventually shows up on the pricing/Conditions tab of a document:
     </p>
     <table className="table-reponsive">
      <thead>
       <tr><th>Component</th><th>Examples</th></tr>
      </thead>
      <tbody>
       <tr><td>Selling Price</td><td>Base price of the product</td></tr>
       <tr><td>Discounts</td><td>Reductions off the base price</td></tr>
       <tr><td>Surcharges</td><td>Transportation charge, insurance, packing charge, loading charge</td></tr>
       <tr><td>Tax</td><td>GST, etc.</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 9: Consolidated reference --> */}
    <div className="card">
     <h2><span className="badge">📋</span> Consolidated Reference — 4 Master Data Types</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Master Data</th>
        <th>What It Stores</th>
        <th>Created By</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Customer Master</td>
        <td>Data of the customer — name, address, communication, bank info, unloading point, terms, contact person</td>
        <td>Users</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Material Master</td>
        <td>Data of the product — specifications, description</td>
        <td>Users</td>
       </tr>
       <tr>
        <td>3</td>
        <td>Customer Material Info Record (CMIR)</td>
        <td>Cross-reference between customer's material code and company's material code</td>
        <td>Users</td>
       </tr>
       <tr>
        <td>4</td>
        <td>Condition Master (Pricing Master)</td>
        <td>Data of the price — selling price, discounts, surcharges, tax</td>
        <td>Users</td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      📅 <strong>Next class:</strong> Hands-on creation of Customer
      Master in the system, followed by Material Master.
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
        <td>What is Master Data?</td>
        <td>Data which is stored centrally and used in day-to-day transactions wherever it's required, and which cannot be changed frequently</td>
       </tr>
       <tr>
        <td>Who is responsible for creating master data, and what is the consultant's role?</td>
        <td>Users create master data; consultants train users on creation and define new information in the master data fields</td>
       </tr>
       <tr>
        <td>What are the four types of master data in SAP SD?</td>
        <td>Customer Master, Material Master, Customer Material Info Record (CMIR), and Condition Master (Pricing Master)</td>
       </tr>
       <tr>
        <td>What is Customer Master, and who is a "customer"?</td>
        <td>The data of the customer stored centrally for reuse; a customer is the person/entity who purchases goods from the company — e.g. dealers, distributors, hospitals</td>
       </tr>
       <tr>
        <td>What happens when a customer master record is saved?</td>
        <td>The system generates a customer number; entering that number in future orders auto-copies the full stored customer information</td>
       </tr>
       <tr>
        <td>What are the two main advantages of master data?</td>
        <td>It saves the time of end users, and it avoids manual mistakes</td>
       </tr>
       <tr>
        <td>What is Material Master?</td>
        <td>The data of the product (specifications, description) stored centrally — essentially the product master</td>
       </tr>
       <tr>
        <td>When is CMIR used?</td>
        <td>Only when a customer places orders using their own material codes instead of the company's material codes</td>
       </tr>
       <tr>
        <td>What is actually maintained inside CMIR?</td>
        <td>The customer's material code is assigned/mapped to the corresponding company material code</td>
       </tr>
       <tr>
        <td>How is the customer-to-company material code mapping actually decided?</td>
        <td>The company sends a product development team to the customer's location; the customer assigns their own team; both teams jointly finalize the cross-reference list, which the user then maintains in CMIR</td>
       </tr>
       <tr>
        <td>What happens when a user enters the customer's material code while creating a sales order (with CMIR maintained)?</td>
        <td>The system automatically determines and pulls in the corresponding company material code</td>
       </tr>
       <tr>
        <td>What is Condition Master, and what does "price" include here?</td>
        <td>Also called the Pricing Master — the data of the price, stored centrally; "price" covers selling price, discounts, surcharges (transportation, insurance, packing, loading), and tax</td>
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
        <td>—</td>
        <td>
         No transaction codes were introduced in this session — it
         was a conceptual introduction to Master Data and its four
         types. Hands-on Customer Master creation in the system
         begins next class.
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
       <tr><td>Master Data — core definition</td><td>Stored centrally, reused in day-to-day transactions, not changed frequently</td></tr>
       <tr><td>Who creates master data</td><td>Users (employees of the client)</td></tr>
       <tr><td>Consultant's role in master data</td><td>Train users on creation; define new information in master data fields</td></tr>
       <tr><td>4 types of master data in SD</td><td>Customer Master, Material Master, CMIR, Condition Master</td></tr>
       <tr><td>Customer Master field groups</td><td>Name, Address, Communication, Bank Information, Unloading Point Information, Shipping/Contact Person, Terms and Conditions</td></tr>
       <tr><td>Material Master content (example)</td><td>Specifications, description of the product</td></tr>
       <tr><td>CMIR example</td><td>Company code VACCINE10150015BOT ↔ Customer code VX1015</td></tr>
       <tr><td>Condition Master ("price") scope</td><td>Selling price, discounts, surcharges (transportation, insurance, packing, loading), tax (GST)</td></tr>
       <tr><td>Advantages of master data</td><td>Saves time of end users; avoids manual mistakes</td></tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture opened the second core SAP SD concept:
      <strong>Master Data</strong> — data stored once, centrally, and
      reused across day-to-day transactions rather than re-entered
      each time. Users create master data; consultants train them and
      maintain the underlying fields. SAP SD has four master data
      types: <strong>Customer Master</strong> (customer identity,
      address, communication, bank, and terms information, which
      auto-populates orders once a customer number exists),
      <strong>Material Master</strong> (product specifications and
      description), <strong>Customer Material Info Record
       (CMIR)</strong> (a cross-reference used only for customers who
      insist on placing orders with their own material codes, most
      often very large accounts — the mapping itself is jointly
      finalized by product development teams from both sides), and
      <strong>Condition Master / Pricing Master</strong> (selling
      price, discounts, surcharges, and tax). The lecture closed by
      reinforcing master data's two core advantages — saving end-user
      time and avoiding manual entry mistakes — setting up hands-on
      Customer Master creation for the next class.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>Master Data</strong> = stored centrally, reused
       everywhere it's needed, not changed frequently
      </li>
      <li>
       <strong>Users create it; consultants train users and configure
        the fields</strong> behind the master data screens
      </li>
      <li>
       SAP SD's 4 master data types: <strong>Customer Master, Material
        Master, CMIR, Condition Master</strong>
      </li>
      <li>
       <strong>CMIR is the exception, not the rule</strong> — only
       needed for customers (typically large accounts) who use their
       own material codes instead of the company's
      </li>
      <li>
       Master data's payoff: <strong>less time spent per
        transaction</strong> and <strong>fewer manual-entry
         mistakes</strong>
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Hands-on creation of Customer
      Master in the system, then Material Master.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 14 Notes — Master Data: Customer Master, Material Master,
    CMIR &amp; Condition Master 🎓
   </p>
  </div>
 );
};

export default Customer14;
