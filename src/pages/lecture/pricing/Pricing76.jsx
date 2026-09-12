const Pricing76 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-brown">
        <h1>
          🔗 Lecture 76 — Reference Condition Type, Condition Supplement &amp;
          Condition Index
        </h1>
        <p>
          SAP SD | Intercompany reference pricing, "bonus discount" via
          Supplement, safe deletion, and bulk price changes
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 1: Reference Condition Type --> */}
        <div className="card">
          <h2>
            <span className="badge">1</span> Reference Condition Type
          </h2>
          <div className="callout">
            💡 <strong>Reference Condition Type</strong> is maintained
            <strong>only for IV01</strong> (intercompany condition type),
            pointing to <code>PI01</code>.
          </div>
          <p>
            Whatever condition records you maintain for
            <strong>PI01</strong> automatically become applicable to
            <strong>IV01</strong> as well — you don't need to separately
            maintain records for both.
          </p>
          <div className="callout blue">
            🔗 Recall from Lecture 72: IV01 and PI01 are both
            <strong>Intercompany condition types</strong>. This lecture reveals
            the exact mechanism linking them — the Reference Condition Type
            field on IV01, set to PI01.
          </div>
        </div>
        {/* <!-- Section 2: Condition Supplement --> */}
        <div className="card orange">
          <h2>
            <span className="badge">2</span> Condition Supplement (Supplement
            Pricing Procedure)
          </h2>
          <div className="callout">
            💡 <strong>Supplement</strong> = automatically adding one condition
            record on top of another. The supplement condition
            <strong>
              only determines if its main/parent condition record also
              determines
            </strong>
            — it's a conditional "bonus."
          </div>
          <h3>Business Example</h3>
          <div className="callout purple">
            🎯 <strong>Requirement:</strong> Offer an extra 2% discount, but
            only to customers who end up paying the
            <strong>maximum price</strong> (i.e., only the "Material only"
            fallback combination — no special customer or price-list record
            applies to them).
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Key Combination</th>
                <th>Sample Customers/Records</th>
                <th>Price</th>
                <th>Gets 2% Supplement?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customer + Material</td>
                <td>100551, 100552, 100560</td>
                <td>9,500 / 9,500 / 9,000</td>
                <td>
                  <span className="tag tag-no">❌ No</span>
                </td>
              </tr>
              <tr>
                <td>Price List + Material</td>
                <td>P1, P2, P3</td>
                <td>9,800 / 9,700 / 9,600</td>
                <td>
                  <span className="tag tag-no">❌ No</span>
                </td>
              </tr>
              <tr>
                <td>Material only</td>
                <td>Direct customers (100558, 100559)</td>
                <td>10,000 (maximum)</td>
                <td>
                  <span className="tag tag-yes">✅ Yes</span>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Configuration Steps</h3>
          <div className="stepper">
            <div className="step">
              <strong>Create the supplement condition type</strong> — T-code
              <span className="tcode">V/06</span>, copy from <code>K007</code>,
              rename to <code>PSUP</code>. Access Sequence is
              <strong>not required</strong> (remove it) since this condition
              never gets searched independently.
            </div>
            <div className="step">
              <strong>Place PSUP in the main pricing procedure</strong> — T-code
              <span className="tcode">V/08</span>, between Base Value and Gross
              Value: Step 66, From 20, <strong>Check Manual</strong>,
              Requirement 2, Account Key ERS.
            </div>
            <div className="step">
              <strong>Create a separate Supplement Pricing Procedure</strong> —
              New Entries → <code>PSUP01</code> ("Supplement Pricing Procedure")
              → double-click Control → New Entries → enter
              <strong>main condition type PPR0</strong> and
              <strong>supplement condition type PSUP</strong> together.
            </div>
            <div className="step">
              <strong>Link the two</strong> — go to the main condition type PPR0
              in <span className="tcode">V/06</span> → set its
              <strong>Supplement Pricing Procedure</strong> field to
              <code>PSUP01</code>.
            </div>
            <div className="step">
              <strong>Maintain the supplement value</strong> — T-code
              <span className="tcode">VK12</span> (Change Mode) → condition type
              PPR0 → select the <em>Material only</em> key combination → enter
              Sales Org + Material → Execute → select the record → click the
              arrow to open its <strong>Condition Supplement</strong> → enter
              PSUP =<strong>2%</strong> → Save.
            </div>
          </div>
          <div className="callout red">
            ⚠️ <strong>Order matters:</strong> You must link PSUP01 to PPR0
            (step 4) <em>before</em> trying to maintain the supplement value in
            VK12 — otherwise the "Condition Supplement" arrow/option won't be
            available on the record.
          </div>
          <h3>Result</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Customer</th>
                <th>Price Received</th>
                <th>Gets PSUP 2%?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>100553 (dealer, price list P1)</td>
                <td>9,800</td>
                <td>
                  <span className="tag tag-no">❌ No supplement</span>
                </td>
              </tr>
              <tr>
                <td>100558 (direct, no price list/customer record)</td>
                <td>10,000</td>
                <td>
                  <span className="tag tag-yes">✅ Extra 2% PSUP applied</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ Only customers landing on the "material only" (maximum) price
            combination automatically receive the bonus 2% — proving the
            supplement fires conditionally, based on which main condition record
            actually determined.
          </div>
        </div>
        {/* <!-- Section 3: Delete from Database --> */}
        <div className="card teal">
          <h2>
            <span className="badge">3</span> Delete From Database
          </h2>
          <div className="callout">
            💡 Controls whether deleting a condition record removes it
            <strong>permanently</strong> from the database, or just flags it as
            inactive.
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
                <td>Blank (default)</td>
                <td>
                  <strong>Do not delete permanently</strong> — only sets a
                  "Deletion Flag/Indicator" on the record
                </td>
              </tr>
              <tr>
                <td>A / B</td>
                <td>
                  <strong>Delete permanently</strong> from the database
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Deleting &amp; Reusing a Record (Blank setting)</h3>
          <div className="stepper">
            <div className="step">
              Go to VK12 (change mode) → select the record → click
              <strong>Delete</strong> symbol → the record gets a Deletion
              Indicator flag, not actually erased
            </div>
            <div className="step">
              Order created afterward → Conditions tab shows no PPR0 for it;
              <strong>Analysis</strong> option shows "Condition record has been
              deleted"
            </div>
            <div className="step">
              To reuse the record: go back inside it → <strong>Details</strong>{" "}
              → uncheck the Deletion Indicator → Save → the record becomes
              active again
            </div>
          </div>
          <div className="callout green">
            ✅ This is why the default (Blank) is generally preferred —
            condition records are rarely truly gone; they can always be
            reactivated by unchecking the deletion flag.
          </div>
        </div>
        {/* <!-- Section 4: Condition Index --> */}
        <div className="card purple">
          <h2>
            <span className="badge">4</span> Condition Index — Bulk Price
            Changes
          </h2>
          <div className="callout">
            💡 <strong>Condition Index</strong> displays (and lets you change)
            the
            <strong>list of all condition records at one place</strong> —
            instead of opening and editing them one by one in VK12.
          </div>
          <div className="callout blue">
            🏢 <strong>Business use case:</strong> When prices need to change
            with immediate/urgent effect across many records at once, Condition
            Index lets you bulk-update them in a single screen rather than
            editing each individually (which is slow).
          </div>
          <h3>Configuration</h3>
          <div className="path">
            <span className="node">SPRO</span>
            <span className="sep">→</span>
            <span className="node">Sales and Distribution</span>
            <span className="sep">→</span>
            <span className="node">Basic Functions</span>
            <span className="sep">→</span> <span className="node">Pricing</span>
            <span className="sep">→</span>
            <span className="node">Maintain Condition Index</span>
          </div>
          <p>
            First step: create a condition table for the condition index (same
            V/03-style process as any other condition table).
          </p>
          <h3>Usage T-Codes</h3>
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
                  <span className="tcode">V/I5</span>
                </td>
                <td>Change Condition Index (bulk edit prices)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/I6</span>
                </td>
                <td>Display Condition Index (view only)</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 5: Condition Update --> */}
        <div className="card gold">
          <h2>
            <span className="badge">5</span> Condition Update (Preview — Config
            Tomorrow)
          </h2>
          <div className="callout">
            💡 <strong>Condition Update</strong> restricts a condition record's
            validity to a specific
            <strong>quantity, value, or number of orders</strong> — once that
            limit is hit, the condition stops applying.
          </div>
          <h3>Business Example</h3>
          <div className="callout purple">
            🎯 <strong>Requirement:</strong> Offer a ₹4,000 discount per bottle,
            but this discount should only be valid for the
            <strong>first 10,000 units</strong> ordered — after that, it no
            longer applies.
          </div>
          <p className="note-text">
            Example restriction type mentioned in class: SAP can also restrict a
            condition to a fixed <strong>number of orders</strong> (e.g., valid
            for only the first 3 orders), not just quantity or value.
          </p>
          <div className="callout blue">
            📅
            <strong>
              Configuration steps for Condition Update will be covered in the
              next class.
            </strong>
          </div>
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
                <td>
                  What does the Reference Condition Type field do, and where is
                  it used?
                </td>
                <td>
                  Used only for IV01, pointing to PI01 — condition records
                  maintained for PI01 automatically apply to IV01 too
                </td>
              </tr>
              <tr>
                <td>What is a Condition Supplement?</td>
                <td>
                  A condition record automatically added on top of another; the
                  supplement only determines if its main/parent condition record
                  also determines
                </td>
              </tr>
              <tr>
                <td>
                  Why doesn't the supplement condition type need an Access
                  Sequence?
                </td>
                <td>
                  Because it's never searched independently — it's only
                  triggered as an add-on when its linked main condition type
                  determines
                </td>
              </tr>
              <tr>
                <td>
                  What two objects link a main condition type to its supplement?
                </td>
                <td>
                  A Supplement Pricing Procedure (listing main + supplement
                  condition types together) assigned to the main condition
                  type's "Supplement Pricing Procedure" field
                </td>
              </tr>
              <tr>
                <td>
                  What does "Delete from Database" = Blank actually do when you
                  delete a record?
                </td>
                <td>
                  Sets a Deletion Indicator/flag only — the record isn't
                  physically erased and can be reactivated by unchecking the
                  flag
                </td>
              </tr>
              <tr>
                <td>What does Condition Index help with?</td>
                <td>
                  Displaying and changing the list of all condition records in
                  one place — useful for fast bulk price updates instead of
                  editing records one by one
                </td>
              </tr>
              <tr>
                <td>What does Condition Update restrict?</td>
                <td>
                  A condition record's validity to a specific quantity, value,
                  or number of orders
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
                  <span className="tcode">V/06</span>
                </td>
                <td>
                  Create supplement condition type PSUP (copied from K007); set
                  Reference Condition Type on IV01; set Supplement Pricing
                  Procedure on PPR0
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  Place PSUP in main pricing procedure (step 66); create new
                  Supplement Pricing Procedure PSUP01
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VK12</span>
                </td>
                <td>
                  Change Mode for condition records — used to maintain the PSUP
                  supplement value on the PPR0 "Material only" record, and to
                  delete/reactivate records via Deletion Indicator
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/I5</span>
                </td>
                <td>Change Condition Index (bulk price editing)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/I6</span>
                </td>
                <td>Display Condition Index</td>
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
                <td>Reference Condition Type (IV01)</td>
                <td>PI01</td>
              </tr>
              <tr>
                <td>Supplement condition type created</td>
                <td>PSUP (copied from K007, no access sequence)</td>
              </tr>
              <tr>
                <td>PSUP pricing procedure step</td>
                <td>66, From 20, Manual ✅, Requirement 2, Account Key ERS</td>
              </tr>
              <tr>
                <td>Supplement pricing procedure created</td>
                <td>PSUP01 (Main = PPR0, Supplement = PSUP)</td>
              </tr>
              <tr>
                <td>Sample supplement value</td>
                <td>
                  2% (only on "Material only" key combination record for PPR0)
                </td>
              </tr>
              <tr>
                <td>Delete from Database options</td>
                <td>
                  Blank = deletion flag only (reversible); A/B = permanent
                  delete
                </td>
              </tr>
              <tr>
                <td>Condition Update example</td>
                <td>
                  ₹4,000/bottle discount valid up to first 10,000 quantity
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card brown">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            This lecture covered several advanced condition record management
            tools. <strong>Reference Condition Type</strong> lets IV01
            (intercompany) reuse condition records maintained under PI01,
            avoiding duplicate maintenance.{" "}
            <strong>Condition Supplement</strong> — the lecture's centerpiece —
            showed how to attach a conditional bonus discount (PSUP, 2%) that
            only fires when a specific main condition record (the "Material
            only" maximum price combination) determines, using a dedicated
            Supplement Pricing Procedure (PSUP01) linking main and supplement
            condition types.
            <strong>Delete from Database</strong> clarified that the default
            deletion behavior is reversible (a flag, not permanent erasure),
            while
            <strong>Condition Index</strong> (V/I5 change, V/I6 display) enables
            fast bulk price updates across many records at once. The lecture
            closed with a preview of <strong>Condition Update</strong> —
            restricting a discount's validity to a specific quantity, value, or
            order count — with full configuration to follow next class.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 76 Notes — SAP SD Pricing: Reference Condition Type, Condition
        Supplement &amp; Condition Index 🎓
      </p>
    </div>
  );
};

export default Pricing76;
