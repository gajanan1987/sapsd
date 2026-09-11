import "../../../style/Lect/pricing3.scss";
const Pricing3 = () => {
  return (
    <div className="lecture-common">
      <div className="header">
        <h1>🏁 Lecture 67 — Base Price Configuration: End-to-End</h1>
        <p>
          SAP SD | Completing condition type → pricing procedure → master data →
          seeing real results in orders
        </p>
      </div>

      <div className="container">
        {/* <!-- Section 0: Recap --> */}
        <div className="card">
          <h2>
            <span className="badge">↩️</span> Where We Left Off
          </h2>
          <div className="flow">
            <div className="flow-step done">
              Condition Tables 676/677/678 ✅
            </div>
            <div className="arrow">➜</div>
            <div className="flow-step done">Access Sequence PPR0 ✅</div>
            <div className="arrow">➜</div>
            <div className="flow-step done">Condition Type PPR0 ✅</div>
            <div className="arrow">➜</div>
            <div className="flow-step flow-purple">Pricing Procedure 🆕</div>
            <div className="arrow">➜</div>
            <div className="flow-step flow-gold">
              Master Data + Condition Records 🆕
            </div>
          </div>
          <p className="note-text-center">
            Today: finish configuration, build sample master data, and finally{" "}
            <strong>see the price appear in a sales order</strong> 🎉
          </p>
        </div>

        {/* <!-- Section 1: Condition Type recap --> */}
        <div className="card teal">
          <h2>
            <span className="badge">1</span> Confirming Condition Type PPR0
          </h2>
          <p>
            T-code: <span className="tcode">V/06</span>
          </p>
          <div className="stepper">
            <div className="step teal">
              Copy standard condition type <code>PR00</code> (base price)
            </div>
            <div className="step teal">
              Rename the copy to your own condition type: <code>PPR0</code>
            </div>
            <div className="step teal">
              Change the <strong>Access Sequence</strong> field to your custom
              sequence: <code>PPR0</code>
            </div>
            <div className="step teal">Press Enter → Save</div>
          </div>
          <div className="callout blue">
            💡 This links condition type <code>PPR0</code> to access sequence{" "}
            <code>PPR0</code>, which in turn searches condition tables{" "}
            <code>676 → 677 → 678</code>.
          </div>
        </div>

        {/* <!-- Section 2: Pricing Procedure --> */}
        <div className="card purple">
          <h2>
            <span className="badge">2</span> Define Pricing Procedure
          </h2>
          <p>
            T-code: <span className="tcode">V/08</span>
          </p>
          <div className="path">
            <span className="node">SPRO</span>
            <span className="sep">→</span>
            <span className="node">Sales and Distribution</span>
            <span className="sep">→</span>
            <span className="node">Basic Functions</span>
            <span className="sep">→</span>
            <span className="node">Pricing</span>
            <span className="sep">→</span>
            <span className="node">Pricing Control</span>
            <span className="sep">→</span>
            <span className="node">Define and Assign Pricing Procedures</span>
            <span className="sep">→</span>
            <span className="node">Maintain Pricing Procedures</span>
          </div>

          <div className="callout">
            📌 Standard pricing procedure: <code>RVAA01</code>. Custom one
            created in class: <code>PVAA01</code>.
          </div>

          <h3>Building the Procedure — Control Data</h3>
          <table className="table-reponsive">
            <tr>
              <th>Step</th>
              <th>Condition Type</th>
              <th>Requirement</th>
              <th>Account Key</th>
              <th>Statistics?</th>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <code>PPR0</code>
              </td>
              <td>2</td>
              <td>
                <code>ERL</code>
              </td>
              <td>—</td>
            </tr>
            <tr>
              <td>20</td>
              <td>
                <em>Base Value</em> (subtotal line)
              </td>
              <td>—</td>
              <td>—</td>
              <td>✅ Checked</td>
            </tr>
          </table>

          <div className="callout red">
            ⚠️ <strong>What does "Statistics" mean?</strong> If checked, that
            line is <strong>for display/reference only</strong> — it does{" "}
            <strong>not post to accounting</strong>. Used for subtotal lines
            like Base Value that just show a number but shouldn't hit the G/L
            account again (since PPR0 in step 10 already posts via account key
            ERL).
          </div>
        </div>

        {/* <!-- Section 3: Pricing Procedure Determination --> */}
        <div className="card gold">
          <h2>
            <span className="badge">3</span> Pricing Procedure Determination
            (Assignment)
          </h2>
          <p>
            T-code: <span className="tcode">OVKK</span> &nbsp;|&nbsp; Same path
            → <strong>Define Pricing Procedure Determination</strong>
          </p>

          <div className="callout">
            📌 <strong>Assignment made:</strong> Sales Area{" "}
            <code>P100 / P1 / P1</code> → Pricing Procedure <code>PVAA01</code>,
            with condition type <code>PPR0</code> referenced for line-item
            override display.
          </div>

          <h3>Why assign a Condition Type here too?</h3>
          <div className="callout purple">
            💡 <strong>Reason:</strong> Assigning the condition type in Pricing
            Procedure Determination lets the base price appear directly on the{" "}
            <strong>sales order line item</strong> — and lets the user{" "}
            <strong>manually override/change it</strong> right there (called{" "}
            <strong>"Line Item PR" / manual override</strong>).
          </div>
          <p className="note-text">
            Example from class: order shows PR00 base price = 3000, but the user
            can manually change it to 2800 directly on the line item.
          </p>
        </div>

        {/* <!-- Section 4: Master Data Setup --> */}
        <div className="card orange">
          <h2>
            <span className="badge">4</span> Setting Up Master Data
          </h2>

          <h3>4a. Price List Categories (Customer)</h3>
          <p>
            Path: same SPRO menu →{" "}
            <strong>Define Price List Categories for Customers</strong>
          </p>
          <table className="table-reponsive">
            <tr>
              <th>Price List</th>
              <th>Category</th>
            </tr>
            <tr>
              <td>P1</td>
              <td>
                <span className="tag tag-dealer">Dealer</span>
              </td>
            </tr>
            <tr>
              <td>P2</td>
              <td>
                <span className="tag tag-distributor">Distributor</span>
              </td>
            </tr>
            <tr>
              <td>P3</td>
              <td>
                <span className="tag tag-institution">Institution</span>
              </td>
            </tr>
          </table>
          <p className="note-text">
            If not already present, create via New Entries.
          </p>

          <h3>
            4b. Customer Master Setup — T-code <code>XD01</code> /{" "}
            <code>XD02</code>
          </h3>
          <p>For each customer, the key fields to maintain:</p>
          <table className="table-reponsive">
            <tr>
              <th>Tab</th>
              <th>Field</th>
              <th>Purpose</th>
            </tr>
            <tr>
              <td>Sales</td>
              <td>Customer Pricing Procedure</td>
              <td>
                Set to <code>1</code> (used in Pricing Procedure Determination
                combination)
              </td>
            </tr>
            <tr>
              <td>Sales</td>
              <td>Price List</td>
              <td>
                <code>P1</code> / <code>P2</code> / <code>P3</code>, or blank
                for direct customers
              </td>
            </tr>
            <tr>
              <td>Shipping</td>
              <td>Plant</td>
              <td>
                <code>P100</code>
              </td>
            </tr>
            <tr>
              <td>Billing</td>
              <td>Terms of Payment etc.</td>
              <td>Any valid entry</td>
            </tr>
          </table>

          <h3>Sample Customer Setup (from class)</h3>
          <table className="table-reponsive">
            <tr>
              <th>Customer</th>
              <th>Distribution Channel</th>
              <th>Category</th>
              <th>Price List</th>
            </tr>
            <tr>
              <td>100553</td>
              <td>P1</td>
              <td>
                <span className="tag tag-dealer">Dealer</span>
              </td>
              <td>P1</td>
            </tr>
            <tr>
              <td>100554</td>
              <td>P1</td>
              <td>
                <span className="tag tag-dealer">Dealer</span>
              </td>
              <td>P1</td>
            </tr>
            <tr>
              <td>100552</td>
              <td>P2</td>
              <td>
                <span className="tag tag-distributor">Distributor</span>
              </td>
              <td>P2</td>
            </tr>
            <tr>
              <td>100555</td>
              <td>P2</td>
              <td>
                <span className="tag tag-distributor">Distributor</span>
              </td>
              <td>P2</td>
            </tr>
            <tr>
              <td>100556</td>
              <td>P2</td>
              <td>
                <span className="tag tag-distributor">Distributor</span>
              </td>
              <td>P2</td>
            </tr>
            <tr>
              <td>100551</td>
              <td>P3</td>
              <td>
                <span className="tag tag-institution">Institution</span>
              </td>
              <td>P3</td>
            </tr>
            <tr>
              <td>100557</td>
              <td>P3</td>
              <td>
                <span className="tag tag-institution">Institution</span>
              </td>
              <td>P3</td>
            </tr>
            <tr>
              <td>100558</td>
              <td>P4</td>
              <td>
                <span className="tag tag-direct">Direct</span>
              </td>
              <td>None</td>
            </tr>
            <tr>
              <td>100559</td>
              <td>P4</td>
              <td>
                <span className="tag tag-direct">Direct</span>
              </td>
              <td>None</td>
            </tr>
            <tr>
              <td>100560</td>
              <td>P4</td>
              <td>
                <span className="tag tag-direct">Direct</span>
              </td>
              <td>None</td>
            </tr>
          </table>

          <div className="callout blue">
            🔑 <strong>Important insight:</strong> There's no "Special Customer"
            flag anywhere in the customer master! A customer becomes "special"
            purely because{" "}
            <strong>
              you chose to maintain a Customer+Material condition record for
              them
            </strong>{" "}
            in the next step. The specialness lives entirely in the condition
            records, not the master data.
          </div>

          <h3>
            4c. Material Master — T-code <code>MM01</code> / <code>MM02</code>
          </h3>
          <ul>
            <li>
              Create material <code>Vaccine 1500</code> (copy from a reference
              material)
            </li>
            <li>
              Maintain views: Sales Org Data, <strong>Purchasing</strong>,{" "}
              <strong>MRP1</strong>
            </li>
            <li>
              <strong>Extend the material to all distribution channels</strong>{" "}
              (P1, P3, P4 etc.) using <code>MM01</code>/extend function —
              otherwise the material won't be sellable in those channels
            </li>
            <li>
              Maintain <strong>stock</strong> before creating real orders
              (needed for delivery, not pricing itself)
            </li>
          </ul>
        </div>

        {/* <!-- Section 5: Maintain Condition Records --> */}
        <div className="card green">
          <h2>
            <span className="badge">5</span> Maintain Condition Records
          </h2>
          <p>
            T-code: <span className="tcode">VK11</span>
          </p>

          <div className="stepper">
            <div className="step">
              Go to <code>VK11</code>, enter condition type <code>PPR0</code>,
              press Enter
            </div>
            <div className="step">
              Choose <strong>Key Combination</strong> ={" "}
              <em>Customer/Material</em> (the most specific table, 676) →
              Continue
            </div>
            <div className="step">
              Maintain 3 records here: <code>100551</code> + Vaccine 1500 ={" "}
              <span className="price-final">9500</span>, <code>100552</code> +
              Vaccine 1500 = <span className="price-final">9500</span>,{" "}
              <code>100560</code> + Vaccine 1500 ={" "}
              <span className="price-final">9500</span> → Save after each (or
              together)
            </div>
            <div className="step">
              Go back → click <strong>Key Combination</strong> again → choose{" "}
              <em>Price List/Material</em> (table 677) → Continue
            </div>
            <div className="step">
              Maintain: <code>P1</code> + Vaccine 1500 ={" "}
              <span className="price-final">9800</span>, <code>P2</code> +
              Vaccine 1500 = <span className="price-final">9700</span>,{" "}
              <code>P3</code> + Vaccine 1500 ={" "}
              <span className="price-final">9600</span> → Save
            </div>
            <div className="step">
              Go back → <strong>Key Combination</strong> → choose{" "}
              <em>Material</em> only (table 678) → Continue
            </div>
            <div className="step">
              Maintain: Vaccine 1500 ={" "}
              <span className="price-final">10,000</span> → Save
            </div>
          </div>

          <div className="callout green">
            🎯 <strong>Key learning:</strong> "Key Combination" in VK11 is where
            you pick <em>which condition table</em> you're entering records for
            — it directly corresponds to the access sequence's specific→general
            order (Customer+Material → Price List+Material → Material).
          </div>
        </div>

        {/* <!-- Section 6: Seeing the Result --> */}
        <div className="card">
          <h2>
            <span className="badge">🎉</span> Seeing the Result — Create Sales
            Orders
          </h2>
          <p>
            Now create test orders (VA01) for different customers and check the
            price that gets determined:
          </p>
          <table className="table-reponsive">
            <tr>
              <th>Customer</th>
              <th>Material</th>
              <th>Expected Price</th>
              <th>Why</th>
            </tr>
            <tr>
              <td>100551</td>
              <td>Vaccine 1500</td>
              <td className="price-final">9500</td>
              <td>Special customer record (most specific table hit)</td>
            </tr>
            <tr>
              <td>100552</td>
              <td>Vaccine 1500</td>
              <td className="price-final">9500</td>
              <td>Special customer record</td>
            </tr>
            <tr>
              <td>100553</td>
              <td>Vaccine 1500</td>
              <td className="price-final">9800</td>
              <td>Falls to Price List P1</td>
            </tr>
            <tr>
              <td>100558</td>
              <td>Vaccine 1500</td>
              <td className="price-final">10,000</td>
              <td>No special/price-list record → Material only</td>
            </tr>
          </table>
          <div className="callout blue">
            ✅ Example verified in class: Order for customer <code>100551</code>
            , material Vaccine 1500, qty 100 → price picked up ={" "}
            <strong>9500</strong>, exactly matching the Customer+Material
            condition record.
          </div>
          <p className="note-text">
            📝 <strong>Practice task:</strong> Create orders for all 10 sample
            customers and confirm each gets the correct price per the access
            sequence logic from Lecture 65.
          </p>
        </div>

        {/* <!-- Section 7: T-code reference --> */}
        <div className="card">
          <h2>
            <span className="badge">📋</span> Full Configuration Sequence —
            Quick Reference
          </h2>
          <table className="table-reponsive">
            <tr>
              <th>#</th>
              <th>Step</th>
              <th>T-Code</th>
            </tr>
            <tr>
              <td>1</td>
              <td>Create Condition Tables</td>
              <td>
                <span className="tcode">V/03</span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Create Access Sequence</td>
              <td>
                <span className="tcode">V/07</span>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Define Condition Type</td>
              <td>
                <span className="tcode">V/06</span>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Define Pricing Procedure</td>
              <td>
                <span className="tcode">V/08</span>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>Pricing Procedure Determination</td>
              <td>
                <span className="tcode">OVKK</span>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>Maintain Condition Records</td>
              <td>
                <span className="tcode">VK11</span>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>Customer Master (create/change)</td>
              <td>
                <span className="tcode">XD01</span> /{" "}
                <span className="tcode">XD02</span>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>Material Master (create/change)</td>
              <td>
                <span className="tcode">MM01</span> /{" "}
                <span className="tcode">MM02</span>
              </td>
            </tr>
            <tr>
              <td>—</td>
              <td>Create Sales Order (to test)</td>
              <td>
                <span className="tcode">VA01</span>
              </td>
            </tr>
          </table>
          <div className="callout">
            🧭 <strong>Big picture:</strong> This 6-step sequence is the
            complete, repeatable recipe for configuring <em>any</em> new pricing
            condition from scratch — not just base price. The same steps apply
            for discounts, freight, or tax condition types.
          </div>
        </div>

        {/* <!-- Extra: Interview Questions --> */}
        <div className="card purple">
          <h2>
            <span className="badge">❓</span> Important Interview Questions &
            Answers
          </h2>
          <table className="table-reponsive">
            <tr>
              <th>Question</th>
              <th>Answer</th>
            </tr>
            <tr>
              <td>
                What does the "Statistics" checkbox mean for a pricing procedure
                step?
              </td>
              <td>
                That line is display-only for reference/subtotal purposes and
                does not post into accounting
              </td>
            </tr>
            <tr>
              <td>
                Why assign a condition type in Pricing Procedure Determination?
              </td>
              <td>
                So its value displays on the sales order line item and can be
                manually overridden there
              </td>
            </tr>
            <tr>
              <td>How does a customer become "special" for pricing?</td>
              <td>
                There is no flag in the customer master — it's purely determined
                by which condition records (e.g. Customer+Material) you choose
                to maintain in VK11
              </td>
            </tr>
            <tr>
              <td>What does "Key Combination" mean in VK11?</td>
              <td>
                The choice of which condition table (specificity level) you're
                entering data for
              </td>
            </tr>
            <tr>
              <td>
                Why must a material be extended to all distribution channels?
              </td>
              <td>
                Otherwise it won't be sellable/orderable in those channels — the
                order will fail
              </td>
            </tr>
            <tr>
              <td>
                What T-code assigns the pricing procedure to a sales area?
              </td>
              <td>OVKK (Pricing Procedure Determination)</td>
            </tr>
          </table>
        </div>

        {/* <!-- Extra: T-codes --> */}
        <div className="card gold">
          <h2>
            <span className="badge">🔢</span> Important Transaction Codes &
            Purpose
          </h2>
          <table className="table-reponsive">
            <tr>
              <th>T-Code</th>
              <th>Purpose</th>
            </tr>
            <tr>
              <td>
                <span className="tcode">V/06</span>
              </td>
              <td>Define/Confirm Condition Type (PPR0, copied from PR00)</td>
            </tr>
            <tr>
              <td>
                <span className="tcode">V/08</span>
              </td>
              <td>Define Pricing Procedure (PVAA01, copied from RVAA01)</td>
            </tr>
            <tr>
              <td>
                <span className="tcode">OVKK</span>
              </td>
              <td>
                Pricing Procedure Determination (assign PVAA01 to sales area)
              </td>
            </tr>
            <tr>
              <td>
                <span className="tcode">XD01</span>
              </td>
              <td>Create Customer Master</td>
            </tr>
            <tr>
              <td>
                <span className="tcode">XD02</span>
              </td>
              <td>
                Change Customer Master (price list, pricing procedure, plant,
                etc.)
              </td>
            </tr>
            <tr>
              <td>
                <span className="tcode">MM01</span>
              </td>
              <td>
                Create Material Master (also used to extend material to
                distribution channels)
              </td>
            </tr>
            <tr>
              <td>
                <span className="tcode">MM02</span>
              </td>
              <td>Change Material Master (Purchasing, MRP1 views)</td>
            </tr>
            <tr>
              <td>
                <span className="tcode">VK11</span>
              </td>
              <td>Maintain Condition Records (all 3 key combinations)</td>
            </tr>
            <tr>
              <td>
                <span className="tcode">VA01</span>
              </td>
              <td>Create Sales Order (to test pricing result)</td>
            </tr>
          </table>
        </div>

        {/* <!-- Extra: Config Topics --> */}
        <div className="card">
          <h2>
            <span className="badge">⚙️</span> Important Configuration Topics &
            Values
          </h2>
          <table className="table-reponsive">
            <tr>
              <th>Topic</th>
              <th>Value / Detail</th>
            </tr>
            <tr>
              <td>Custom pricing procedure created</td>
              <td>PVAA01 (copied from standard RVAA01)</td>
            </tr>
            <tr>
              <td>Condition type step 10</td>
              <td>PPR0, Requirement 2, Account Key ERL</td>
            </tr>
            <tr>
              <td>Condition type step 20 (Base Value)</td>
              <td>Statistics checked</td>
            </tr>
            <tr>
              <td>Assignment combination in OVKK</td>
              <td>Sales Area P100/P1/P1 → PVAA01</td>
            </tr>
            <tr>
              <td>Master data fields to set</td>
              <td>
                Customer Pricing Procedure = 1; Price List field per category;
                Plant = P100
              </td>
            </tr>
          </table>
        </div>

        {/* <!-- Extra: Summary --> */}
        <div className="card teal">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            This lecture closed the loop on base price configuration: the
            condition type PPR0 was finalized and linked to a custom pricing
            procedure (PVAA01), assigned to the sales area via OVKK. Master data
            (customers, price lists, price groups, material) was built out for
            all 10 sample customers, and condition records were maintained
            across all three key combinations in VK11. The payoff was seeing the
            exact same access-sequence logic from Lecture 65 (Customer+Material
            → Price List+Material → Material) actually play out correctly in
            live sales orders — proving the full config chain works end-to-end.
          </p>
        </div>

        {/* <!-- Section 8: Key takeaways --> */}
        <div className="card teal">
          <h2>
            <span className="badge">⭐</span> Key Takeaways & Next Class
          </h2>
          <ul>
            <li>
              Condition Type must be <strong>copied</strong> from a standard one
              (never created fully from scratch) and re-linked to your own
              Access Sequence
            </li>
            <li>
              <strong>Statistics</strong> checkbox in Pricing Procedure =
              display-only, doesn't post to accounting (used for
              subtotal/reference lines)
            </li>
            <li>
              Condition Type is assigned in{" "}
              <strong>Pricing Procedure Determination</strong> specifically so
              it's visible & editable on the order line item
            </li>
            <li>
              There is <strong>no "special customer" indicator</strong> in
              master data — it's purely a function of which condition records
              you choose to maintain
            </li>
            <li>
              In <code>VK11</code>, <strong>"Key Combination"</strong> =
              choosing which condition table (specificity level) you're entering
              data for
            </li>
            <li>
              Material must be{" "}
              <strong>extended to all relevant distribution channels</strong>,
              or orders in those channels will fail
            </li>
          </ul>
          <p>
            📅 <strong>Next class (Monday):</strong> Continue reviewing order
            results across all sample customers; verify pricing logic
            end-to-end.
          </p>
        </div>
      </div>

      <p className="footer-note">
        Lecture 67 Notes — SAP SD Pricing: Base Price Configuration End-to-End
        🎓
      </p>
    </div>
  );
};

export default Pricing3;
