// import "../../../style/Lect/pricing1.scss";
const Pricing65 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-blue">
        <h1>📊 Lecture 65 — Pricing: Condition Technique</h1>
        <p>
          SAP SD | Core concept behind how the system determines price in a
          sales document
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 1: Overview --> */}
        <div className="card">
          <h2>
            <span className="badge">1</span> The Big Picture
          </h2>
          <p>
            <strong>Pricing</strong> in SAP SD is entirely based on the
            <strong>Condition Technique</strong>.
          </p>
          <div className="callout">
            💡 <strong>Condition Technique</strong> = the process of determining
            <em>condition records</em> into the sales document.
          </div>
          <p>
            It works as a chain of 5 building blocks, each feeding into the
            next:
          </p>
          <div className="flow">
            <div className="flow-step">Condition Records</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Condition Tables</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Access Sequence</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Condition Types</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Pricing Procedure</div>
          </div>
          <p className="note-text-center">
            Memorize this chain — it's the backbone of the entire topic 🔑
          </p>
        </div>
        {/* <!-- Section 2: Condition Records --> */}
        <div className="card teal">
          <h2>
            <span className="badge">2</span> Condition Records
          </h2>
          <ul>
            <li>
              The <strong>master data for pricing</strong>
            </li>
            <li>
              Also called <strong>Condition Master</strong> or
              <strong>Pricing Master</strong>
            </li>
            <li>
              Maintained using T-code <span className="tcode">VK11</span>
            </li>
          </ul>
        </div>
        {/* <!-- Section 3: Condition Table --> */}
        <div className="card orange">
          <h2>
            <span className="badge">3</span> Condition Table
          </h2>
          <p>
            A <strong>combination of fields</strong> used to maintain / store
            condition records.
          </p>
          <p>
            Defined using T-code <span className="tcode">V/03</span>  |  Menu
            path:
            <code>
              SPRO → Sales and Distribution → Basic Functions → Pricing →
              Pricing Control → Define Condition Tables
            </code>
          </p>
          <div className="callout">
            🛠️ <strong>Technical note:</strong> Condition tables are technically
            database tables named like <code>A001</code>, <code>A004</code> etc.
            (prefix "A"). SAP delivers many standard ones, but you can create
            custom ones (usually numbered 501–999) if the standard fields don't
            match your business scenario.
          </div>
          <div className="callout">
            🎯 <strong>Business case:</strong> Price isn't the same for every
            customer — dealers, distributors, institutions, and normal customers
            all pay differently. So we build multiple condition tables to
            capture each pricing scenario.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Table</th>
                <th>Field Combination</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1️⃣ Table 1</td>
                <td>
                  Sales Organization + <strong>Customer</strong> + Material
                </td>
              </tr>
              <tr>
                <td>2️⃣ Table 2</td>
                <td>
                  Sales Organization + <strong>Price List</strong> + Material
                </td>
              </tr>
              <tr>
                <td>3️⃣ Table 3</td>
                <td>Sales Organization + Material</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            📌 "Price List" is a field maintained in
            <strong>Customer Master → Sales Area Data → Sales tab</strong>{" "}
            (field name: <code>Price List Type</code> / <code>PLTYP</code>) —
            e.g. dealer price list, distributor price list, institution price
            list.
          </p>
        </div>
        {/* <!-- Section 4: Access Sequence --> */}
        <div className="card purple">
          <h2>
            <span className="badge">4</span> Access Sequence
          </h2>
          <div className="callout">
            🔍 <strong>Access Sequence</strong> = a search strategy that
            searches for valid condition records from
            <strong>most specific → most general</strong>.
          </div>
          <p>
            Defined using T-code <span className="tcode">V/07</span>  |  Menu
            path:
            <code>
              SPRO → Sales and Distribution → Basic Functions → Pricing →
              Pricing Control → Define Access Sequences
            </code>
          </p>
          <div className="callout">
            🛠️ <strong>Technical note:</strong> Each line inside an access
            sequence is called an <strong>"Access"</strong>, numbered 10, 20,
            30... (in the specific → general order). Each access points to one
            condition table and carries the <strong>Exclusive</strong> indicator
            flag discussed below. A common standard access sequence is
            <code>PR02</code> (used with condition type <code>PR00</code>).
          </div>
          <p>
            <strong>Rule of thumb:</strong> whichever combination gives the
            <em>lower/most targeted</em> price is the most specific.
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Priority</th>
                <th>Combination</th>
                <th>Why</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>🥇 Most Specific</td>
                <td>
                  <span className="tag tag-special">Customer + Material</span>
                </td>
                <td>Gives the lowest, most targeted price</td>
              </tr>
              <tr>
                <td>🥈 Middle</td>
                <td>
                  <span className="tag tag-dealer">Price List + Material</span>
                </td>
                <td>Dealer / Distributor / Institution price</td>
              </tr>
              <tr>
                <td>🥉 Most General</td>
                <td>
                  <span className="tag tag-direct">Material only</span>
                </td>
                <td>Standard / maximum price — fallback for everyone</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 4b: Condition Types & Pricing Procedure preview --> */}
        <div className="card purple">
          <h2>
            <span className="badge">👀</span> Sneak Peek: Condition Types &amp;
            Pricing Procedure
          </h2>
          <p className="note-text">
            (Full detail coming in the next lecture — brief preview so today's
            chain makes sense end-to-end.)
          </p>
          <h3>Condition Type</h3>
          <ul>
            <li>
              Represents <strong>what</strong> the condition record is for —
              e.g. base price, discount, freight, tax
            </li>
            <li>
              Each condition type is linked to
              <strong>one access sequence</strong> (so it knows how/where to
              search for its value)
            </li>
            <li>
              Defined using T-code <span className="tcode">V/06</span>
            </li>
            <li>
              Common standard examples:
              <div className="legend legend-top">
                <span className="tag tag-special">PR00 – Base Price</span>
                <span className="tag tag-dealer">K004 – Material Discount</span>
                <span className="tag tag-distributor">
                  K005 – Customer/Material Discount
                </span>
                <span className="tag tag-institution">KF00 – Freight</span>
                <span className="tag tag-direct">MWST – Output Tax</span>
              </div>
            </li>
          </ul>
          <h3>Pricing Procedure</h3>
          <ul>
            <li>
              A <strong>sequential list of condition types</strong> arranged in
              the order they should be calculated (base price → discounts →
              freight → tax → net value)
            </li>
            <li>
              Defined using T-code <span className="tcode">V/08</span>
            </li>
            <li>
              Determined automatically at sales order level based on:
              <strong>
                Sales Area + Customer Pricing Procedure + Document Pricing
                Procedure
              </strong>
            </li>
            <li>
              Standard example: <code>RVAA01</code>
            </li>
          </ul>
          <div className="callout">
            🔗 <strong>How it all links:</strong> Pricing Procedure (contains) →
            Condition Types (each linked to) → Access Sequence (searches) →
            Condition Tables (which store) → Condition Records
          </div>
        </div>
        {/* <!-- Section 5: Worked Example --> */}
        <div className="card green">
          <h2>
            <span className="badge">5</span> Worked Example
          </h2>
          <p>
            <strong>Material:</strong> Vaccine 1500
          </p>
          <div className="legend">
            <span>
              <span className="tag tag-special">Special Customer</span> 9500
            </span>
            <span>
              <span className="tag tag-dealer">P1 - Dealer</span> 9800
            </span>
            <span>
              <span className="tag tag-distributor">P2 - Distributor</span>
              9700
            </span>
            <span>
              <span className="tag tag-institution">P3 - Institution</span>
              9600
            </span>
            <span>
              <span className="tag tag-direct">Material only</span> 10,000
            </span>
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Category</th>
                <th>Price List</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100551</td>
                <td>
                  <span className="tag tag-special">Special + Institution</span>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>100552</td>
                <td>
                  <span className="tag tag-special">Special + Distributor</span>
                </td>
                <td>—</td>
              </tr>
              <tr>
                <td>100553</td>
                <td>
                  <span className="tag tag-dealer">Dealer</span>
                </td>
                <td>P1</td>
              </tr>
              <tr>
                <td>100554</td>
                <td>
                  <span className="tag tag-dealer">Dealer</span>
                </td>
                <td>P1</td>
              </tr>
              <tr>
                <td>100555</td>
                <td>
                  <span className="tag tag-distributor">Distributor</span>
                </td>
                <td>P2</td>
              </tr>
              <tr>
                <td>100556</td>
                <td>
                  <span className="tag tag-distributor">Distributor</span>
                </td>
                <td>P2</td>
              </tr>
              <tr>
                <td>100557</td>
                <td>
                  <span className="tag tag-institution">Institution</span>
                </td>
                <td>P3</td>
              </tr>
              <tr>
                <td>100558</td>
                <td>
                  <span className="tag tag-direct">Direct</span>
                </td>
                <td>None</td>
              </tr>
              <tr>
                <td>100559</td>
                <td>
                  <span className="tag tag-direct">Direct</span>
                </td>
                <td>None</td>
              </tr>
              <tr>
                <td>100560</td>
                <td>
                  <span className="tag tag-special">Special + Direct</span>
                </td>
                <td>—</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 6: Exclusive Checked --> */}
        <div className="card gold">
          <h2>
            <span className="badge">✅</span> Exclusive CHECKED (Normal
            Practice)
          </h2>
          <div className="callout green">
            As soon as the system finds a{" "}
            <strong>valid condition record</strong>, it stops searching
            immediately and uses that price. ⚡
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Final Price</th>
                <th>Reason</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100551</td>
                <td className="price-final">9500</td>
                <td>Special customer record found first</td>
              </tr>
              <tr>
                <td>100552</td>
                <td className="price-final">9500</td>
                <td>Special customer record found first</td>
              </tr>
              <tr>
                <td>100553</td>
                <td className="price-final">9800</td>
                <td>No special record → Price List P1</td>
              </tr>
              <tr>
                <td>100554</td>
                <td className="price-final">9800</td>
                <td>Price List P1</td>
              </tr>
              <tr>
                <td>100555</td>
                <td className="price-final">9700</td>
                <td>Price List P2</td>
              </tr>
              <tr>
                <td>100556</td>
                <td className="price-final">9700</td>
                <td>Price List P2</td>
              </tr>
              <tr>
                <td>100557</td>
                <td className="price-final">9600</td>
                <td>Price List P3</td>
              </tr>
              <tr>
                <td>100558</td>
                <td className="price-final">10,000</td>
                <td>No price list → Material only</td>
              </tr>
              <tr>
                <td>100559</td>
                <td className="price-final">10,000</td>
                <td>No price list → Material only</td>
              </tr>
              <tr>
                <td>100560</td>
                <td className="price-final">9500</td>
                <td>Special customer record found first</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 7: Exclusive Unchecked --> */}
        <div className="card red">
          <h2>
            <span className="badge">⚠️</span> Exclusive UNCHECKED
          </h2>
          <div className="callout red">
            Even after finding a valid record, the system
            <strong>keeps searching</strong> all combinations. It determines
            <strong>all</strong> valid prices found, then
            <strong>activates the last one</strong> and deactivates the rest.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Customer</th>
                <th>All Prices Found (in order)</th>
                <th>Activated ✅</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100551</td>
                <td>
                  <span className="price-strike">9500</span> →
                  <span className="price-strike">9600</span> → 10,000
                </td>
                <td className="price-final">10,000</td>
              </tr>
              <tr>
                <td>100552</td>
                <td>
                  <span className="price-strike">9500</span> →
                  <span className="price-strike">9700</span> → 10,000
                </td>
                <td className="price-final">10,000</td>
              </tr>
              <tr>
                <td>100553</td>
                <td>
                  <span className="price-strike">9800</span> → 10,000
                </td>
                <td className="price-final">10,000</td>
              </tr>
              <tr>
                <td>100554</td>
                <td>
                  <span className="price-strike">9800</span> → 10,000
                </td>
                <td className="price-final">10,000</td>
              </tr>
              <tr>
                <td>100555</td>
                <td>
                  <span className="price-strike">9700</span> → 10,000
                </td>
                <td className="price-final">10,000</td>
              </tr>
              <tr>
                <td>100556</td>
                <td>
                  <span className="price-strike">9700</span> → 10,000
                </td>
                <td className="price-final">10,000</td>
              </tr>
              <tr>
                <td>100557</td>
                <td>
                  <span className="price-strike">9600</span> → 10,000
                </td>
                <td className="price-final">10,000</td>
              </tr>
              <tr>
                <td>100558</td>
                <td>10,000 only</td>
                <td className="price-final">10,000</td>
              </tr>
              <tr>
                <td>100559</td>
                <td>10,000 only</td>
                <td className="price-final">10,000</td>
              </tr>
              <tr>
                <td>100560</td>
                <td>
                  <span className="price-strike">9500</span> → 10,000
                </td>
                <td className="price-final">10,000</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            📌 Notice: with Exclusive unchecked, the system
            <em>always</em> reaches the most general "Material only" combination
            — so 10,000 wins in every single case here.
          </p>
        </div>
        {/* <!-- Section 8: Edge Cases --> */}
        <div className="card teal">
          <h2>
            <span className="badge">🧩</span> Edge Cases &amp; Extra Scenarios
          </h2>
          <h3>1. What if NO condition record is found anywhere?</h3>
          <p>
            If the access sequence exhausts every condition table
            (customer+material → price list+material → material) and finds
            nothing valid, the system shows the item with
            <strong>no price</strong> (typically triggers an incompletion/error
            message in the sales order — pricing cannot be zero/blank for a
            saleable item).
          </p>
          <h3>
            2. What if two customers share the same price list AND have a
            special customer record?
          </h3>
          <p>
            The <strong>most specific table (Customer + Material)</strong>{" "}
            always wins first when Exclusive is checked — the price list record
            is never even checked in that case. This is why 100551, 100552, and
            100560 always get 9500 regardless of their price list.
          </p>
          <h3>3. What if a condition record has a validity period?</h3>
          <p>
            Condition records maintained via <span className="tcode">VK11</span>{" "}
            carry a <strong>Valid From / Valid To</strong> date range. If
            today's date (or the sales order's pricing date) falls outside this
            range, the system treats that record as invalid and moves to the
            next combination — even with Exclusive checked.
          </p>
          <h3>4. Manually changing price in the sales order</h3>
          <p>
            Even after the condition technique determines a price, users with
            authorization can manually override it in the order's
            <strong>Conditions tab</strong> — this creates a manual condition
            record for that document only, it does not update master data
            (VK11).
          </p>
          <h3>5. New pricing / re-pricing</h3>
          <p>
            If master condition records change <em>after</em> an order is
            created, the order keeps its old price unless the user manually
            triggers
            <strong>"New Pricing"</strong> (Update Pricing) in the order — SAP
            does not auto-refresh prices retroactively.
          </p>
        </div>
        {/* <!-- Extra: Interview Questions --> */}
        <div className="card purple">
          <h2>
            <span className="badge">❓</span> Important Interview Questions
            &amp; Answers
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
                <td>What is pricing based on in SAP SD?</td>
                <td>The Condition Technique</td>
              </tr>
              <tr>
                <td>What is Condition Technique?</td>
                <td>
                  The process of determining condition records into the sales
                  document
                </td>
              </tr>
              <tr>
                <td>What are Condition Records?</td>
                <td>
                  Master data for pricing, also called Condition Master /
                  Pricing Master; maintained via VK11
                </td>
              </tr>
              <tr>
                <td>What is a Condition Table?</td>
                <td>
                  A combination of fields used to store/maintain condition
                  records
                </td>
              </tr>
              <tr>
                <td>What is an Access Sequence?</td>
                <td>
                  A search strategy that searches condition tables from most
                  specific to most general
                </td>
              </tr>
              <tr>
                <td>What does the "Exclusive" indicator do?</td>
                <td>
                  When checked, the system stops searching as soon as it finds
                  the first valid record; when unchecked, it searches all
                  combinations and activates only the last one found
                </td>
              </tr>
              <tr>
                <td>
                  Why is "Customer + Material" more specific than "Material"
                  alone?
                </td>
                <td>
                  More fields = a narrower, more targeted match, so it's checked
                  first and typically gives a lower/special price
                </td>
              </tr>
              <tr>
                <td>What happens if no valid condition record is found?</td>
                <td>
                  The system cannot determine a price; the order shows an
                  incompletion/error for that item
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
                <td>
                  <span className="tcode">VK11</span>
                </td>
                <td>Maintain Condition Records (create)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/03</span>
                </td>
                <td>Define/Create Condition Tables</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/07</span>
                </td>
                <td>Define Access Sequences</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Config Topics --> */}
        <div className="card gold">
          <h2>
            <span className="badge">⚙️</span> Important Configuration Topics
            &amp; Values
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
                <td>Condition Technique chain</td>
                <td>
                  Condition Records → Condition Tables → Access Sequence →
                  Condition Types → Pricing Procedure
                </td>
              </tr>
              <tr>
                <td>Table 1 (in example)</td>
                <td>Sales Org + Customer + Material (most specific)</td>
              </tr>
              <tr>
                <td>Table 2 (in example)</td>
                <td>Sales Org + Price List + Material</td>
              </tr>
              <tr>
                <td>Table 3 (in example)</td>
                <td>Sales Org + Material (most general)</td>
              </tr>
              <tr>
                <td>Exclusive checkbox (best practice)</td>
                <td>Always keep checked in real business scenarios</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            Pricing in SAP SD runs entirely on the
            <strong>Condition Technique</strong> — a 5-step chain from Condition
            Records to the Pricing Procedure. Condition Tables store field
            combinations; the Access Sequence searches those tables from most
            specific to most general to find the right price. The
            <strong>Exclusive</strong> flag controls whether the search stops at
            the first match (normal practice) or continues through every
            combination and keeps only the last one found. Understanding this
            chain is the foundation for every subsequent pricing topic —
            discounts, surcharges, and taxes all reuse the exact same mechanism.
          </p>
        </div>
        {/* <!-- Best Practice --> */}
        <div className="card">
          <h2>
            <span className="badge">⭐</span> Best Practice &amp; Next Class
          </h2>
          <div className="callout green">
            🔒 <strong>Always keep "Exclusive" checked</strong> in real business
            scenarios — it ensures the most relevant/specific price is applied
            efficiently without unnecessary searching.
          </div>
          <p>
            📅 <strong>Next lecture:</strong> Continuation of Condition
            Technique (Condition Types, Pricing Procedure), followed by
            <strong>Pricing Configuration</strong>.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 65 Notes — SAP SD Pricing (Condition Technique) 🎓
      </p>
    </div>
  );
};

export default Pricing65;
