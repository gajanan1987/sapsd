import "../../../style/Lect/pricing2.scss";
const Pricing2 = () => {
  return (
    <div className="lecture-common">
      <div className="header">
        <h1>
          ⚙️ Lecture 66 — Condition Type, Pricing Procedure & Configuration
        </h1>
        <p>
          SAP SD | Continuing the Condition Technique — now with hands-on config
          steps
        </p>
      </div>

      <div className="container">
        {/* <!-- Section 1: Recap --> */}
        <div className="card">
          <h2>
            <span className="badge">↩️</span> Quick Recap
          </h2>
          <div className="flow">
            <div className="flow-step">Condition Records</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Condition Tables</div>
            <div className="arrow">➜</div>
            <div className="flow-step flow-teal">
              Access Sequence ✅ (covered)
            </div>
            <div className="arrow">➜</div>
            <div className="flow-step flow-orange">Condition Types 🆕</div>
            <div className="arrow">➜</div>
            <div className="flow-step flow-purple">Pricing Procedure 🆕</div>
          </div>
          <p className="note-text-center">
            Today we complete the chain, then start actual configuration 🛠️
          </p>
        </div>

        {/* <!-- Section 2: Condition Type --> */}
        <div className="card orange">
          <h2>
            <span className="badge">1</span> Condition Type
          </h2>
          <div className="callout">
            💡 <strong>Condition Type</strong> controls the type of price
            component / price element — i.e., whether it's a base price,
            discount, surcharge, or tax.
          </div>
          <p>
            Defined using T-code <span className="tcode">V/06</span>
          </p>

          <h3>Standard Condition Types</h3>
          <table className="table-reponsive">
            <tr>
              <th>Category</th>
              <th>Condition Type</th>
              <th>Description</th>
            </tr>
            <tr>
              <td>
                <span className="tag tag-base">Base Price</span>
              </td>
              <td>
                <code>PR00</code>
              </td>
              <td>Standard base price</td>
            </tr>
            <tr>
              <td rowSpan="4">
                <span className="tag tag-discount">Discounts</span>
              </td>
              <td>
                <code>K004</code>
              </td>
              <td>Material Discount</td>
            </tr>
            <tr>
              <td>
                <code>K005</code>
              </td>
              <td>Customer/Material Discount</td>
            </tr>
            <tr>
              <td>
                <code>K007</code>
              </td>
              <td>Customer Discount</td>
            </tr>
            <tr>
              <td>
                <code>K020</code>
              </td>
              <td>Price Group Discount</td>
            </tr>
            <tr>
              <td>
                <span className="tag tag-surcharge">Surcharge</span>
              </td>
              <td>
                <code>KF00</code>
              </td>
              <td>Freight / Transportation</td>
            </tr>
            <tr>
              <td rowSpan="4">
                <span className="tag tag-tax">Tax (GST — practice)</span>
              </td>
              <td>
                <code>JOIG</code>
              </td>
              <td>IGST</td>
            </tr>
            <tr>
              <td>
                <code>JOCG</code>
              </td>
              <td>CGST</td>
            </tr>
            <tr>
              <td>
                <code>JOSG</code>
              </td>
              <td>SGST</td>
            </tr>
            <tr>
              <td colSpan="2" className="note-italic">
                (Standard/production GST condition types may differ — these are
                practice-system examples)
              </td>
            </tr>
          </table>

          <div className="callout blue">
            📐 <strong>Calculation order:</strong> Base Value → Discounts →
            Surcharge → Taxes. This exact order becomes the backbone of the
            Pricing Procedure below.
          </div>
        </div>

        {/* <!-- Section 3: Pricing Procedure --> */}
        <div className="card purple">
          <h2>
            <span className="badge">2</span> Pricing Procedure
          </h2>
          <div className="callout purple">
            💡 <strong>Pricing Procedure</strong> = a list of all condition
            types placed in a defined sequence (calculation order).
          </div>
          <p>
            Defined using T-code <span className="tcode">V/08</span>
          </p>

          <h3>Structure — Step by Step</h3>
          <table className="table-reponsive">
            <tr>
              <th>Step</th>
              <th>Condition Type(s)</th>
              <th>Meaning</th>
            </tr>
            <tr>
              <td>10</td>
              <td>
                <span className="tag tag-base">PR00</span>
              </td>
              <td>Base Price</td>
            </tr>
            <tr>
              <td>20</td>
              <td>—</td>
              <td>
                <strong>Base Value</strong> (subtotal of step 10)
              </td>
            </tr>
            <tr>
              <td>30</td>
              <td>
                <span className="tag tag-discount">K004, K005, K007, K020</span>
              </td>
              <td>All Discounts</td>
            </tr>
            <tr>
              <td>70</td>
              <td>—</td>
              <td>
                <strong>Gross Value</strong> = Base Value − Discounts
              </td>
            </tr>
            <tr>
              <td>80</td>
              <td>
                <span className="tag tag-surcharge">KF00</span>
              </td>
              <td>Surcharge (Freight)</td>
            </tr>
            <tr>
              <td>90</td>
              <td>—</td>
              <td>
                <strong>Net Value</strong> = Gross Value + Surcharge
              </td>
            </tr>
            <tr>
              <td>100+</td>
              <td>
                <span className="tag tag-tax">JOIG, JOCG, JOSG</span>
              </td>
              <td>Taxes (IGST/CGST/SGST)</td>
            </tr>
          </table>

          <div className="callout">
            🧮 <strong>Formulas to remember:</strong>
            <br />
            Gross Value = Base Value − Discounts
            <br />
            Net Value = Gross Value + Surcharge
          </div>
        </div>

        {/* <!-- Section 4: Pricing Procedure Determination --> */}
        <div className="card blue-card card">
          <h2>
            <span className="badge">3</span> Pricing Procedure Determination
          </h2>
          <p>
            T-code: <span className="tcode">OVKK</span>
          </p>

          <p>
            The system determines which Pricing Procedure to use based on this
            combination:
          </p>
          <div className="path">
            <span className="node">Sales Organization</span>
            <span className="sep">+</span>
            <span className="node">Distribution Channel</span>
            <span className="sep">+</span>
            <span className="node">Division</span>
            <span className="sep">+</span>
            <span className="node">Document Pricing Procedure</span>
            <span className="sep">+</span>
            <span className="node">Customer Pricing Procedure</span>
          </div>

          <div className="callout">
            📌 <strong>Example from class:</strong> Sales Org ={" "}
            <code>P100</code>, Document Pricing Procedure = <code>A</code>,
            Customer Pricing Procedure = <code>1</code> → assign your Pricing
            Procedure to this combination.
          </div>

          <p>
            ⚠️ This assignment must be done for{" "}
            <strong>every sales area</strong> (e.g., if you have 30 sales areas,
            all 30 need the assignment).
          </p>

          <div className="callout green">
            🧰 <strong>Shortcut:</strong> Instead of remembering individual
            T-codes, use the common T-code <span className="tcode">VOK0</span> —
            it gives access to Condition Type, Access Sequence, Pricing
            Procedure, Pricing Procedure Determination, Condition Table, and
            Maintain Condition Records — all from one place.
          </div>
        </div>

        {/* <!-- Section 5: Config Practice — Condition Tables --> */}
        <div className="card teal">
          <h2>
            <span className="badge">4</span> Hands-On Config: Creating Condition
            Tables
          </h2>
          <p>
            T-code: <span className="tcode">V/03</span>
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
            <span className="node">Define Condition Tables</span>
            <span className="sep">→</span>
            <span className="node">Create Condition Tables</span>
          </div>

          <div className="callout">
            🔢 <strong>Rule:</strong> User-defined condition table numbers must
            be between <strong>501 and 999</strong>. Press Enter and the system
            auto-generates the number.
          </div>

          <h3>Field Catalog</h3>
          <p>
            The <strong>Field Catalog</strong> is the list of allowed fields you
            can use to build a condition table (shown alphabetically, scroll
            up/down to find fields).
          </p>
          <div className="callout blue">
            🔍 <strong>Handling duplicate/similar fields:</strong> If there's
            confusion between similarly-named fields (e.g., two "Customer"
            fields — one regular, one hierarchy), select the field → click{" "}
            <strong>Field Attributes</strong> to check the technical name.
            Example: the correct "Customer" field is <code>KUNNR</code>.
          </div>

          <h3>Building the 3 Tables (from Lecture 65's example)</h3>
          <div className="stepper">
            <div className="step">
              <strong>Table 1 (676):</strong> Double-click fields in this exact
              order → Sales Organization → Customer (select <code>KUNNR</code>)
              → Material
            </div>
            <div className="step">
              <strong>Table 2 (677):</strong> Sales Organization → Price List →
              Material
            </div>
            <div className="step">
              <strong>Table 3 (678):</strong> Sales Organization → Material
            </div>
          </div>

          <div className="callout red">
            ⚠️ <strong>Field sequence is mandatory!</strong> You must select
            fields in the correct order (e.g., Sales Org before Material). You
            cannot pick Material first and then Sales Organization.
          </div>

          <h3>Technical View: Key Field & Footer</h3>
          <table className="table-reponsive">
            <tr>
              <th>Setting</th>
              <th>If Checked</th>
              <th>If Unchecked</th>
            </tr>
            <tr>
              <td>
                <strong>Key Field</strong>
              </td>
              <td>
                Field becomes <strong>mandatory</strong> in condition records
                (VK11)
              </td>
              <td>Field is optional</td>
            </tr>
            <tr>
              <td>
                <strong>Footer</strong>
              </td>
              <td>
                Field appears <strong>below</strong> in the condition record
                maintenance screen
              </td>
              <td>Field appears in the main/header area</td>
            </tr>
          </table>

          <h3>Generating & Saving</h3>
          <div className="callout">
            📦 <strong>Package:</strong> Assign a package when saving (practice
            system used <code>ZSD0</code>; in real projects, the Basis
            consultant provides this). A package is a group of
            enhancements/objects bundled together.
          </div>
          <div className="callout green">
            🌐 <strong>Cross-Client:</strong> Condition tables (and access
            sequences) are saved in a <strong>Workbench Request</strong> and are{" "}
            <strong>cross-client</strong> — meaning if created in one client,
            they automatically update in other clients{" "}
            <em>within the same server</em> (e.g., created in client 800,
            auto-appears in client 810).
          </div>
          <div className="callout red">
            ❌ <strong>Local Object trap:</strong> If you save a condition table
            as a <strong>Local Object</strong>, no request number is generated —
            and without a request number, the table{" "}
            <strong>cannot be transported</strong> to other servers
            (Quality/Production). To fix: go to change mode{" "}
            <span className="tcode">V/04</span> → Object Directory Entry →
            assign the package → save.
          </div>
          <div className="callout blue">
            🗑️ <strong>Can I delete a condition table?</strong> Yes — but only{" "}
            <em>before</em> it has been placed into an access sequence.
          </div>

          <h3>Table Naming Convention</h3>
          <p>
            Condition table names always start with prefix <strong>A</strong>{" "}
            followed by the table number — e.g., table number <code>676</code> →
            technical table name <code>A676</code>.
          </p>

          <h3>Adding Fields Not in the Field Catalog</h3>
          <p>
            If a required field (e.g., <strong>Shipping Point</strong>) isn't
            available in the Field Catalog:
          </p>
          <div className="stepper">
            <div className="step">
              Find the technical field name — go to{" "}
              <span className="tcode">VA02</span>, place cursor on the field
              (e.g., Shipping Point), press <strong>F1</strong> → Technical
              Information → note the field name (e.g., <code>VSTEL</code>)
            </div>
            <div className="step">
              Go to <strong>Allowed Fields</strong> → New Entries → add the
              technical field name (<code>VSTEL</code>) → Save
            </div>
            <div className="step">
              Now the field is available when creating condition tables
            </div>
          </div>
          <div className="callout red">
            🚧 <strong>If the field still won't accept</strong> even after
            adding to Allowed Fields (e.g., some customer classification fields)
            → this requires a technical <strong>Enhancement</strong> (ABAP
            development).
          </div>
        </div>

        {/* <!-- Section 6: Config Practice — Access Sequence --> */}
        <div className="card purple">
          <h2>
            <span className="badge">5</span> Hands-On Config: Creating Access
            Sequence
          </h2>
          <p>
            T-code: <span className="tcode">V/07</span> &nbsp;(same SPRO path as
            condition tables)
          </p>

          <div className="callout">
            📌 Standard access sequence for base price: <code>PR00</code> or{" "}
            <code>PR02</code>. In this class, a custom one was created:{" "}
            <code>PPR0</code> ("Base Price Access Sequence").
          </div>

          <h3>Steps to Build a Custom Access Sequence</h3>
          <div className="stepper">
            <div className="step">
              Go to New Entries → create access sequence <code>PPR0</code>
            </div>
            <div className="step">
              Select it → double-click <strong>Accesses</strong>
            </div>
            <div className="step">
              New Entries → <strong>Access 10</strong> → Table <code>676</code>{" "}
              → check <strong>Exclusive</strong> ✅
            </div>
            <div className="step">
              Select the table row → double-click <strong>Fields</strong>{" "}
              (confirms/activates the field mapping)
            </div>
            <div className="step">
              Back → <strong>Access 20</strong> → Table <code>677</code> → check{" "}
              <strong>Exclusive</strong> ✅ → double-click{" "}
              <strong>Fields</strong> again
            </div>
            <div className="step">
              Verify: all table rows should show as <em>disabled/greyed</em> —
              if any row is still enabled, you missed the "double-click Fields"
              step for it
            </div>
            <div className="step">Save</div>
          </div>

          <div className="callout red">
            ⚠️ <strong>Don't skip "double-click Fields"</strong> after adding
            each table — if you don't do this, the table row will remain in an
            incomplete/enabled state.
          </div>

          <div className="callout green">
            🌐 Access sequences are also saved in a{" "}
            <strong>Workbench Request</strong> (cross-client) — same rule as
            condition tables, since both are technical/table-related objects.
            Other objects (like condition types, pricing procedures) use a
            normal <strong>Customizing Request</strong> instead.
          </div>
        </div>

        {/* <!-- Section 7: Config Practice — Condition Type --> */}
        <div className="card gold">
          <h2>
            <span className="badge">6</span> Hands-On Config: Defining Condition
            Type
          </h2>
          <p>
            Continue from <span className="tcode">V/06</span> → double-click{" "}
            <strong>Maintain Condition Type</strong>
          </p>

          <div className="stepper">
            <div className="step">
              Standard condition type for base price: <code>PR00</code>
            </div>
            <div className="step">
              <strong>Copy</strong> <code>PR00</code> → rename to your own
              condition type <code>PPR0</code>
            </div>
            <div className="step">
              Assign your custom access sequence <code>PPR0</code> to this
              condition type
            </div>
            <div className="step">Press Enter → Save</div>
          </div>

          <div className="callout">
            🔗 This is the moment the chain connects: Condition Type{" "}
            <code>PPR0</code> → Access Sequence <code>PPR0</code> → Condition
            Tables <code>676 / 677 / 678</code> → Condition Records (VK11)
          </div>
        </div>

        {/* <!-- Section 8: Consolidated Reference --> */}
        <div className="card">
          <h2>
            <span className="badge">📋</span> T-Code Quick Reference
          </h2>
          <table className="table-reponsive">
            <tr>
              <th>Object</th>
              <th>T-Code</th>
            </tr>
            <tr>
              <td>Condition Records</td>
              <td>
                <span className="tcode">VK11</span>
              </td>
            </tr>
            <tr>
              <td>Condition Tables (Create / Change / Display)</td>
              <td>
                <span className="tcode">V/03</span> /{" "}
                <span className="tcode">V/04</span> /{" "}
                <span className="tcode">V/05</span>
              </td>
            </tr>
            <tr>
              <td>Access Sequence</td>
              <td>
                <span className="tcode">V/07</span>
              </td>
            </tr>
            <tr>
              <td>Condition Type</td>
              <td>
                <span className="tcode">V/06</span>
              </td>
            </tr>
            <tr>
              <td>Pricing Procedure</td>
              <td>
                <span className="tcode">V/08</span>
              </td>
            </tr>
            <tr>
              <td>Pricing Procedure Determination</td>
              <td>
                <span className="tcode">OVKK</span>
              </td>
            </tr>
            <tr>
              <td>Common/All-in-one Pricing T-code</td>
              <td>
                <span className="tcode">VOK0</span>
              </td>
            </tr>
            <tr>
              <td>Check technical field name (in any transaction)</td>
              <td>
                Cursor on field → <strong>F1</strong> → Technical Information
              </td>
            </tr>
          </table>
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
              <td>What does Condition Type control?</td>
              <td>
                The type of price component/element — base price, discount,
                surcharge, or tax
              </td>
            </tr>
            <tr>
              <td>What is Pricing Procedure?</td>
              <td>
                A list of all condition types placed in a defined sequence
                (calculation order)
              </td>
            </tr>
            <tr>
              <td>What is Gross Value?</td>
              <td>Base Value minus Discounts</td>
            </tr>
            <tr>
              <td>What is Net Value?</td>
              <td>Gross Value plus Surcharge</td>
            </tr>
            <tr>
              <td>What combination determines the Pricing Procedure?</td>
              <td>
                Sales Organization + Distribution Channel + Division + Document
                Pricing Procedure + Customer Pricing Procedure
              </td>
            </tr>
            <tr>
              <td>
                Why assign a condition type in Pricing Procedure Determination?
              </td>
              <td>
                So the price appears and can be manually changed on the sales
                order line item
              </td>
            </tr>
            <tr>
              <td>What's the user-defined condition table number range?</td>
              <td>501 to 999</td>
            </tr>
            <tr>
              <td>
                What does "Key Field" mean in a condition table's technical
                view?
              </td>
              <td>
                That field becomes mandatory when maintaining condition records
              </td>
            </tr>
            <tr>
              <td>
                What does "Footer" mean in a condition table's technical view?
              </td>
              <td>
                The field will appear below (in the footer area) when
                maintaining condition records
              </td>
            </tr>
            <tr>
              <td>
                Why can't you save a condition table in a Local Object in real
                projects?
              </td>
              <td>
                No request number is generated, so it can't be transported to
                Quality/Production servers
              </td>
            </tr>
            <tr>
              <td>What is "cross-client" and which objects use it?</td>
              <td>
                An object created in one client auto-updates in other clients
                within the same server; applies to Condition Tables and Access
                Sequences (Workbench Requests)
              </td>
            </tr>
          </table>
        </div>

        {/* <!-- Extra: T-codes --> */}
        <div className="card teal">
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
                <span className="tcode">V/03</span>
              </td>
              <td>Create Condition Tables</td>
            </tr>
            <tr>
              <td>
                <span className="tcode">V/04</span>
              </td>
              <td>
                Change Condition Tables (also used to assign package if saved as
                Local Object)
              </td>
            </tr>
            <tr>
              <td>
                <span className="tcode">V/05</span>
              </td>
              <td>
                Display Condition Tables (used to verify cross-client update in
                client 810)
              </td>
            </tr>
            <tr>
              <td>
                <span className="tcode">V/07</span>
              </td>
              <td>Define Access Sequences</td>
            </tr>
            <tr>
              <td>
                <span className="tcode">V/06</span>
              </td>
              <td>Define Condition Types</td>
            </tr>
            <tr>
              <td>
                <span className="tcode">OVKK</span>
              </td>
              <td>Pricing Procedure Determination</td>
            </tr>
            <tr>
              <td>
                <span className="tcode">VOK0</span>
              </td>
              <td>Common/all-in-one T-code for entire pricing config</td>
            </tr>
            <tr>
              <td>
                <span className="tcode">VK11</span>
              </td>
              <td>
                Maintain Condition Records (referenced for key field/footer
                example)
              </td>
            </tr>
            <tr>
              <td>
                <span className="tcode">VA02</span>
              </td>
              <td>
                Change Sales Order — used to find a field's technical name
                (place cursor → F1 → Technical Information)
              </td>
            </tr>
          </table>
        </div>

        {/* <!-- Extra: Config Topics --> */}
        <div className="card gold">
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
              <td>Condition table number range</td>
              <td>501–999 (user-defined)</td>
            </tr>
            <tr>
              <td>Table naming convention</td>
              <td>Prefix "A" + table number (e.g. table 676 → A676)</td>
            </tr>
            <tr>
              <td>Package example</td>
              <td>
                ZSD0 (practice system); real projects get this from Basis
                consultant
              </td>
            </tr>
            <tr>
              <td>Missing field fix</td>
              <td>
                Add technical field name to "Allowed Fields" (find name via F1 →
                Technical Information)
              </td>
            </tr>
            <tr>
              <td>If field still won't accept</td>
              <td>Requires an ABAP Enhancement</td>
            </tr>
            <tr>
              <td>Sales example used</td>
              <td>
                Sales Org P100, Document Pricing Proc A, Customer Pricing Proc 1
              </td>
            </tr>
            <tr>
              <td>Custom access sequence created</td>
              <td>PPR0 (Base Price)</td>
            </tr>
            <tr>
              <td>Custom condition type created</td>
              <td>PPR0 (copied from standard PR00)</td>
            </tr>
          </table>
        </div>

        {/* <!-- Extra: Summary --> */}
        <div className="card">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            This lecture completed the theoretical side of the Condition
            Technique with <strong>Condition Type</strong> (controls what kind
            of price element it is) and <strong>Pricing Procedure</strong> (the
            ordered list of all condition types: base → discount → surcharge →
            tax). Pricing Procedure Determination ties everything to a Sales
            Area via OVKK, with VOK0 as a handy all-in-one shortcut. The bulk of
            the lecture was hands-on: building condition tables (respecting the
            501–999 range and mandatory field sequence), access sequences (with
            the critical "double-click Fields" step), and the workbench-request
            vs. local-object distinction that determines whether config can be
            transported to other servers.
          </p>
        </div>

        {/* <!-- Section 9: Key Takeaways --> */}
        <div className="card green">
          <h2>
            <span className="badge">⭐</span> Key Takeaways & Next Class
          </h2>
          <ul>
            <li>
              User-defined condition table range: <strong>501–999</strong>
            </li>
            <li>
              Field sequence when creating tables is <strong>mandatory</strong>{" "}
              (must match the logical specific→general order)
            </li>
            <li>
              Always save with a <strong>package + request number</strong> —
              never Local Object in real projects (can't transport)
            </li>
            <li>
              Condition Tables & Access Sequences →{" "}
              <strong>Workbench Request</strong> (cross-client); everything else
              → <strong>Customizing Request</strong>
            </li>
            <li>
              Missing field? Try <strong>Allowed Fields</strong> first; if it
              still fails, it needs an <strong>ABAP Enhancement</strong>
            </li>
            <li>
              Remember the calculation order:{" "}
              <strong>Base → Discount → Surcharge → Tax</strong>
            </li>
          </ul>
          <p>
            📅 <strong>Next lecture:</strong> Continuation — completing
            condition type & pricing procedure configuration.
          </p>
        </div>
      </div>

      <p className="footer-note">
        Lecture 66 Notes — SAP SD Pricing: Condition Type, Pricing Procedure &
        Config 🎓
      </p>
    </div>
  );
};

export default Pricing2;
