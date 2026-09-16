const Material22 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-orange">
    <h1>
     📦 Lecture 22 — Extending Material Master &amp; Creating Trading Goods
     (HAWA)
    </h1>
    <p>
     SAP SD | Extending a finished-goods material across distribution
     channels, sales orgs, storage locations and plants, then creating a
     Trading Goods material with its own field differences
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class created the first Material Master
      (<code>VAXI102200500BOT</code>, material type FERT). Today: a second
      finished-goods material, extending materials across every
      organizational unit, and creating a Trading Goods (HAWA) material.
     </div>
    </div>

    {/* <!-- Section 1: Second material --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Creating a Second Finished-Goods
      Material
     </h2>
     <p>
      Same process as Lecture 21 — T-code
      <span className="tcode">MM01</span>, material type <code>FERT</code>,
      all the same views selected via Default Setting.
     </p>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Material Code</td>
        <td>VAXI102200600BOT</td>
       </tr>
       <tr>
        <td>Description</td>
        <td>Vaccine 10–20 age group, 600 mg, bottle</td>
       </tr>
       <tr>
        <td>
         Plant / Storage Location / Sales Org / Distribution Channel
        </td>
        <td>P100 / P103 / P100 / P1</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 All the same field values as the first material apply here (Base
      Unit of Measure BT, Material Group 001, Division P1, Account
      Assignment Group 03, Availability Check 02, Transportation/Loading
      Group 0001, MRP Type **, MRP Controller 000, Lot Size EX, Schedule
      Margin Key 000, In-House Production 1 day, Valuation Class 7920,
      Standard Price 1000) — only the material code and description differ.
     </p>
    </div>

    {/* <!-- Section 2: Extend to distribution channel --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Extending a Material to Another
      Distribution Channel
     </h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">MM01</span> → enter the same material code →
       under <strong>Copy From</strong>, mention the same material code
       again → Enter.
      </div>
      <div className="step">Select the views → Enter.</div>
      <div className="step">
       On the left, change to the new Distribution Channel (e.g.
       <code>P2</code>); the plant/storage location/sales organization stay
       the same → Continue.
      </div>
      <div className="step">
       Visit all the <strong>Sales views</strong> (Sales Org 1, Sales Org
       2, etc.) and Save.
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Restricted view access:</strong> when extending to a new
      distribution channel, the system only allows access to
      <strong>Sales views</strong> — other views (e.g. Purchasing) are not
      accessible during this extension.
     </div>
     <p className="note-text">
      📌 This is repeated for every remaining distribution channel (P2, P3,
      P4) to make the material available across dealers, distributors,
      institutions, and direct sales.
     </p>
    </div>

    {/* <!-- Section 3: Extend to sales org --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Extending a Material to Another Sales
      Organization
     </h2>
     <div className="stepper">
      <div className="step">
       Same Copy-From approach → change Sales Organization to
       <code>P200</code> and Distribution Channel to <code>P4</code>
       (the only channel used for exports in this project) → Continue.
      </div>
      <div className="step">Visit all the Sales views and Save.</div>
     </div>
    </div>

    {/* <!-- Section 4: Extend to storage location --> */}
    <div className="card gold">
     <h2>
      <span className="badge">4</span> Extending a Material to Another
      Storage Location
     </h2>
     <div className="stepper">
      <div className="step">
       Same Copy-From approach → change Storage Location (e.g.
       <code>P104</code> for FG2, then <code>P105</code> for Return
       storage) → Enter.
      </div>
     </div>
     <div className="callout blue">
      🔍 <strong>Restricted view access:</strong> extending to a new storage
      location only allows access to <strong>MRP 1–4</strong> and
      <strong>Plant Data Storage 1–2</strong> — visit those views and Save.
     </div>
    </div>

    {/* <!-- Section 5: Extend to plant --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">5</span> Extending a Material to Another Plant
     </h2>
     <div className="stepper">
      <div className="step">
       Same Copy-From approach → change Plant (e.g. <code>P200</code>) and
       Storage Location (e.g. <code>P203</code>, then <code>P204</code>,
       <code>P205</code> for the other storage locations under that plant).
      </div>
      <div className="step">
       In Sales Org 1, update the Plant field to match → Enter through the
       remaining views.
      </div>
     </div>
     <div className="callout">
      🔍 <strong>Broadest view access:</strong> extending to a new plant
      allows access to
      <strong>all views except Basic Data 1 and Basic Data 2</strong> —
      those two remain fixed from the material's original creation.
     </div>
    </div>

    {/* <!-- Section 6: Consolidated view-access table --> */}
    <div className="card">
     <h2>
      <span className="badge">📋</span> Which Views Are Editable During Each
      Extension
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Extending To</th>
        <th>Views Accessible</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>New Distribution Channel</td>
        <td>Sales views only</td>
       </tr>
       <tr>
        <td>New Sales Organization</td>
        <td>Sales views only</td>
       </tr>
       <tr>
        <td>New Storage Location</td>
        <td>MRP 1–4, Plant Data Storage 1–2</td>
       </tr>
       <tr>
        <td>New Plant</td>
        <td>All views except Basic Data 1 and Basic Data 2</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Both materials created so far (VAXI102200500BOT and
      VAXI102200600BOT) are extended across all four distribution channels,
      both sales organizations, all storage locations, and both plants,
      following this same pattern each time.
     </p>
    </div>

    {/* <!-- Section 7: Trading Goods material --> */}
    <div className="card red">
     <h2>
      <span className="badge">6</span> Creating a Trading Goods Material
      (HAWA)
     </h2>
     <div className="callout red">
      💡 Trading Goods (<code>HAWA</code>) uses the same overall creation
      process as Finished Goods, but with several field differences
      reflecting that it's purchased from a vendor rather than manufactured
      in-house.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Material Code (example)</td>
        <td>LEXA102200500BOT</td>
       </tr>
       <tr>
        <td>Material Type</td>
        <td>HAWA</td>
       </tr>
       <tr>
        <td>Industry Sector</td>
        <td>Pharmaceuticals</td>
       </tr>
       <tr>
        <td>Description</td>
        <td>Lexaim 10–20 age group, 500 mg, bottle</td>
       </tr>
      </tbody>
     </table>
     <h3>Key Differences vs. a Finished Goods (FERT) Material</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Tab</th>
        <th>Field</th>
        <th>Finished Goods (FERT)</th>
        <th>Trading Goods (HAWA)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Sales Org 2</td>
        <td>Account Assignment Group</td>
        <td>03</td>
        <td>01 (Trading Goods)</td>
       </tr>
       <tr>
        <td>Purchasing</td>
        <td>Purchasing Group</td>
        <td>Blank (not needed — not purchased)</td>
        <td>001 (mandatory — trading goods are always purchased)</td>
       </tr>
       <tr>
        <td>MRP 1</td>
        <td>MRP Controller</td>
        <td>000</td>
        <td>00</td>
       </tr>
       <tr>
        <td>MRP 1</td>
        <td>Plan Delivery Time</td>
        <td>Not applicable</td>
        <td>1 day (time to receive the goods from the vendor)</td>
       </tr>
       <tr>
        <td>MRP 3</td>
        <td>In-House Production Time</td>
        <td>1 day (it's manufactured)</td>
        <td>Not applicable (nothing is manufactured)</td>
       </tr>
       <tr>
        <td>Accounting 1</td>
        <td>Valuation Class</td>
        <td>7920</td>
        <td>3100</td>
       </tr>
       <tr>
        <td>Accounting 1</td>
        <td>Price Field Used</td>
        <td>Standard Price (1000)</td>
        <td>
         Moving Price (1000) — reflects the average purchase cost, since
         the goods are bought, not made
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      💡
      <strong>Why Plan Delivery Time instead of In-House Production Time?</strong>
      A trading good is never manufactured — it's purchased and resold — so
      its lead time comes from <strong>vendor delivery</strong>, not
      internal production.
     </div>
     <div className="callout">
      📌 After creation, this Trading Goods material is extended to other
      distribution channels, sales organizations, storage locations, and
      plants using the exact same process covered earlier in this lecture.
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
         How do you extend an existing material to a new distribution
         channel or sales organization?
        </td>
        <td>
         MM01, enter the material code, mention the same material code
         under Copy From, then change the Distribution Channel/Sales
         Organization on the initial screen
        </td>
       </tr>
       <tr>
        <td>
         What views are accessible when extending a material to a new
         distribution channel or sales organization?
        </td>
        <td>Only the Sales views</td>
       </tr>
       <tr>
        <td>
         What views are accessible when extending a material to a new
         storage location?
        </td>
        <td>MRP 1–4 and Plant Data Storage 1–2</td>
       </tr>
       <tr>
        <td>
         What views are accessible when extending a material to a new
         plant?
        </td>
        <td>All views except Basic Data 1 and Basic Data 2</td>
       </tr>
       <tr>
        <td>
         Why can't Basic Data 1/2 be changed when extending to a new
         plant?
        </td>
        <td>
         They were fixed at the material's original creation and
         represent data common across all plants
        </td>
       </tr>
       <tr>
        <td>
         What Account Assignment Group is used for Trading Goods, vs.
         Finished Goods?
        </td>
        <td>
         Trading Goods → 01; Finished Goods → 03 (in this project's
         practice example)
        </td>
       </tr>
       <tr>
        <td>
         Why does a Trading Goods material need a Purchasing Group,
         unlike a Finished Goods material?
        </td>
        <td>
         Trading Goods are always purchased from a vendor, so Purchasing
         Group is mandatory; Finished Goods are manufactured, so it's
         left blank
        </td>
       </tr>
       <tr>
        <td>
         What replaces In-House Production Time for a Trading Goods
         material?
        </td>
        <td>
         Plan Delivery Time — the time to receive the goods from the
         vendor, since nothing is manufactured
        </td>
       </tr>
       <tr>
        <td>
         What price field is used in Accounting 1 for Trading Goods, vs.
         Finished Goods?
        </td>
        <td>
         Trading Goods → Moving Price; Finished Goods → Standard Price
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
        <td><span className="tcode">MM01</span></td>
        <td>
         Create a new material, or extend an existing material to a new
         distribution channel, sales organization, storage location, or
         plant (via Copy From)
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
        <td>Second FERT material</td>
        <td>VAXI102200600BOT</td>
       </tr>
       <tr>
        <td>Trading Goods material</td>
        <td>LEXA102200500BOT, type HAWA</td>
       </tr>
       <tr>
        <td>Extension: Distribution Channel/Sales Org</td>
        <td>Views editable: Sales only</td>
       </tr>
       <tr>
        <td>Extension: Storage Location</td>
        <td>Views editable: MRP 1–4, Plant Data Storage 1–2</td>
       </tr>
       <tr>
        <td>Extension: Plant</td>
        <td>Views editable: all except Basic Data 1–2</td>
       </tr>
       <tr>
        <td>HAWA — Account Assignment Group</td>
        <td>01</td>
       </tr>
       <tr>
        <td>HAWA — Purchasing Group</td>
        <td>001</td>
       </tr>
       <tr>
        <td>HAWA — MRP Controller</td>
        <td>00</td>
       </tr>
       <tr>
        <td>HAWA — Plan Delivery Time</td>
        <td>1 day</td>
       </tr>
       <tr>
        <td>HAWA — Schedule Margin Key</td>
        <td>000</td>
       </tr>
       <tr>
        <td>HAWA — Valuation Class</td>
        <td>3100</td>
       </tr>
       <tr>
        <td>HAWA — Moving Price</td>
        <td>1000</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture practiced the "Copy From" method of extending a material
      master across every organizational dimension it needs to be usable in
      — distribution channel, sales organization, storage location, and
      plant — noting that each extension type restricts which views can
      actually be edited (Sales-only for distribution channel/sales org,
      MRP+storage views for storage location, and everything except Basic
      Data for a new plant). The lecture then created a
      <strong>Trading Goods (HAWA)</strong>
      material alongside the existing Finished Goods (FERT) ones,
      highlighting the field differences that reflect trading goods being
      purchased rather than manufactured: a different Account Assignment
      Group, a mandatory Purchasing Group, Plan Delivery Time in place of
      In-House Production Time, a different Valuation Class, and Moving
      Price instead of Standard Price in Accounting 1.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       Extending a material always uses
       <strong>MM01 + Copy From (the same material code)</strong>, then
       changing the relevant organizational field
      </li>
      <li>
       Each extension type unlocks a
       <strong>different, restricted set of views</strong> — Sales-only,
       MRP/storage-only, or everything but Basic Data
      </li>
      <li>
       <strong>Trading Goods (HAWA)</strong> materials need a Purchasing
       Group and Plan Delivery Time, and use Moving Price — because they're
       bought, not made
      </li>
      <li>
       <strong>Finished Goods (FERT)</strong> materials use In-House
       Production Time and Standard Price, since they're manufactured
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Stock posting.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 22 Notes — Extending Material Master &amp; Creating Trading Goods
    (HAWA) 🎓
   </p>
  </div>
 );
};

export default Material22;
