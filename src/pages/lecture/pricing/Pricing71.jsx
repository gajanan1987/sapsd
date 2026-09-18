const Pricing71 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-red">
        <h1>🧮 Lecture 71 — Tax Configuration &amp; Rounding Rules</h1>
        <p>
          SAP SD | Standard tax (MWST) practice, custom tax (PWST) config, and
          legal rounding requirements
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Intro --> */}
        <div className="card">
          <h2>
            <span className="badge">ℹ️</span> Scope Note
          </h2>
          <div className="callout blue">
            📌 For this practice, we use the standard SAP tax condition type
            <code>MWST</code>. Real Indian GST (CGST/SGST/IGST) is a
            <strong>separate, dedicated topic</strong> covered after pricing is
            complete — today is purely to understand the pricing procedure's tax
            mechanics.
          </div>
        </div>
        {/* <!-- Section 1: MWST setup (standard) --> */}
        <div className="card red">
          <h2>
            <span className="badge">1</span> Part A — Practicing with Standard
            MWST
          </h2>
          <h3>Step 1: Assign Tax Category to Country</h3>
          <p>
            T-code: <span className="tcode">OVK1</span>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Country</th>
                <th>Sequence</th>
                <th>Tax Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IN</td>
                <td>1</td>
                <td>MWST</td>
              </tr>
            </tbody>
          </table>
          <h3>Step 2: Create Tax Code</h3>
          <p>
            T-code: <span className="tcode">FTXP</span>
          </p>
          <div className="stepper">
            <div className="step">
              Enter country <code>IN</code>
            </div>
            <div className="step">
              Create tax code <code>P1</code>, description "MWST Tax Code"
            </div>
            <div className="step">
              Set Tax Type = <strong>A</strong> (Output Tax)
            </div>
            <div className="step">
              Continue → Save (no need to enter values inside — just create the
              code itself)
            </div>
          </div>
          <h3>Step 3: Maintain Tax Classification in Master Data</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Master</th>
                <th>T-code</th>
                <th>Location</th>
                <th>Field</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customer</td>
                <td>XD02</td>
                <td>Sales Area Data → Billing tab</td>
                <td>Tax Classification = 1</td>
              </tr>
              <tr>
                <td>Material</td>
                <td>MM02</td>
                <td>Sales Org 1 view</td>
                <td>Tax Classification = 1</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            Maintain this for all sample customers (100551–100560) and the
            material (VAXINE1500).
          </p>
          <h3>Step 4: Place in Pricing Procedure</h3>
          <p>
            T-code: <span className="tcode">V/08</span>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>From</th>
                <th>Requirement</th>
                <th>Base Type</th>
                <th>Account Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>120</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>
                  <em>Net Value (statistical)</em>
                </td>
              </tr>
              <tr>
                <td>130</td>
                <td>HM00</td>
                <td>—</td>
                <td>—</td>
                <td>—</td>
                <td>(from Lecture 70)</td>
              </tr>
              <tr>
                <td>140</td>
                <td>
                  <span className="tag tag-std">MWST</span>
                </td>
                <td>120</td>
                <td>10</td>
                <td>16</td>
                <td>MWS</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🆕 <strong>New fields introduced:</strong>
            <code>Requirement = 10</code> and <code>Base Type = 16</code>. These
            are standard technical settings SAP uses for tax calculation — full
            deep-dive on these control fields comes in the next lecture on "16
            fields of pricing procedure."
          </div>
          <h3>Step 5: Maintain Condition Records</h3>
          <p>
            T-code: <span className="tcode">VK11</span> → Condition Type
            <code>MWST</code>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Key Combination</th>
                <th>Values</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  Domestic Taxes: Country + Tax Classification (Customer) + Tax
                  Classification (Material)
                </td>
                <td>
                  IN + 1 + 1 → <strong>18%</strong>, Tax Code <code>P1</code>
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Result in Sales Order</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Component</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Net Value</td>
                <td>₹9,57,330</td>
              </tr>
              <tr>
                <td>MWST Tax (18%)</td>
                <td className="amount">₹1,72,319.40</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅ <strong>Important:</strong> Tax amount is
            <strong>shown separately</strong>, never added into Net Value —
            because tax must be remitted to the government, not counted as
            company revenue.
          </div>
        </div>
        {/* <!-- Section 2: Rounding --> */}
        <div className="card gold">
          <h2>
            <span className="badge">2</span> Rounding the Tax Amount (Legal
            Requirement)
          </h2>
          <div className="callout red">
            ⚖️ <strong>Legal requirement:</strong> Tax amounts must be rounded
            (no decimals) — e.g. ₹1,72,319.40 must display as a whole number.
          </div>
          <h3>Step 1: Define Rounding Unit for Currency</h3>
          <div className="path">
            <span className="node">SPRO</span>
            <span className="sep">→</span>
            <span className="node">SAP NetWeaver</span>
            <span className="sep">→</span>
            <span className="node">General Settings</span>
            <span className="sep">→</span>
            <span className="node">Currencies</span>
            <span className="sep">→</span>
            <span className="node">Define Rounding Rules for Currencies</span>
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Company Code</th>
                <th>Currency</th>
                <th>Rounding Unit</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P100</td>
                <td>INR</td>
                <td>100</td>
                <td>Rounds off 2 decimal places</td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            To round off only 1 decimal place instead, use rounding unit
            <code>10</code>.
          </p>
          <h3>Step 2: Set Calculation Type on the Tax Condition Type</h3>
          <p>
            T-code: <span className="tcode">V/08</span> → Pricing Procedure →
            Control
          </p>
          <div className="callout purple">
            🔧 Set <strong>Calculation Type = 17</strong> ("Rounding as per
            T001R") on the tax condition type row in the pricing procedure.
          </div>
          <h3>Result</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Before Rounding</th>
                <th>After Rounding (Calc Type 17)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>₹1,72,319.40</td>
                <td className="price-final">₹1,72,319.00</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🧮 <strong>Commercial rounding logic:</strong> 0.50 and above rounds
            <strong>up</strong> to the next whole number; below 0.50 rounds
            <strong>down</strong>. (E.g. ₹1,72,319.40 → ₹1,72,319; ₹1,72,319.50
            → ₹1,72,320.)
          </div>
          <div className="callout green">
            💡 <strong>Not just for tax!</strong> This rounding technique
            (Calculation Type 17 + currency rounding unit) can be applied to
            <em>any</em> condition type where whole-number output is required.
          </div>
        </div>
        {/* <!-- Section 3: Custom Tax PWST --> */}
        <div className="card purple">
          <h2>
            <span className="badge">3</span> Part B — Building Your Own Tax:
            PWST
          </h2>
          <div className="callout">
            🔁 Same copy-and-customize pattern used throughout the course:
            create your own condition table, access sequence, and condition
            type, then swap it into the pricing procedure in place of the
            standard one.
          </div>
          <h3>Step 1: Create Condition Table</h3>
          <p>
            T-code: <span className="tcode">V/03</span>
          </p>
          <p>
            Combination:
            <strong>
              Departure Country + Tax Classification (Customer) + Tax
              Classification (Material)
            </strong>
          </p>
          <div className="callout red">
            ⚠️ <strong>Watch out:</strong> The field catalog has
            <em>two</em> "Country" fields — you must check
            <strong>Field Attributes</strong> to find the correct one labeled
            "Departure Country" (technical field <code>ALAND</code>), not the
            generic country field.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Table #</th>
                <th>Combination</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>683 (new)</td>
                <td>
                  Departure Country + Tax Classification Customer + Tax
                  Classification Material
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Step 2: Create Access Sequence</h3>
          <p>
            T-code: <span className="tcode">V/07</span>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Access Sequence</th>
                <th>Access</th>
                <th>Table</th>
                <th>Exclusive?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PWST</td>
                <td>10</td>
                <td>683</td>
                <td>✅</td>
              </tr>
            </tbody>
          </table>
          <h3>Step 3: Create Condition Type</h3>
          <p>
            T-code: <span className="tcode">V/06</span>
          </p>
          <div className="stepper">
            <div className="step">
              Copy standard <code>MWST</code>
            </div>
            <div className="step">
              Rename to <code>PWST</code>
            </div>
            <div className="step">
              Assign Access Sequence <code>PWST</code>
            </div>
            <div className="step">Save</div>
          </div>
          <h3>Step 4: Swap in Pricing Procedure</h3>
          <p>
            T-code: <span className="tcode">V/08</span>
          </p>
          <div className="callout red">
            🔄 <strong>Replace, don't add!</strong> Go to step 140 (where MWST
            was placed) and
            <strong>change the condition type from MWST to PWST</strong> — you
            should never have both active in the same pricing procedure.
          </div>
          <h3>Step 5: Define Tax Determination Rules</h3>
          <p>
            T-code: <span className="tcode">OVK1</span>
          </p>
          <div className="path">
            <span className="node">SPRO</span>
            <span className="sep">→</span>
            <span className="node">Sales and Distribution</span>
            <span className="sep">→</span>
            <span className="node">Basic Functions</span>
            <span className="sep">→</span> <span className="node">Taxes</span>
            <span className="sep">→</span>
            <span className="node">Define Tax Determination Rules</span>
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Country</th>
                <th>Sequence</th>
                <th>Tax Category</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IN</td>
                <td>1</td>
                <td>
                  <span className="tag tag-new">PWST</span> (changed from MWST)
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Step 6: Define Tax Relevancy of Master Records</h3>
          <p>
            Same Taxes menu →
            <strong>Define Tax Relevancy of Master Records</strong>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Object</th>
                <th>New Entries</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Customer Taxes (double-click)</td>
                <td>PWST: 0 = No Tax, 1 = Relevant for Tax</td>
              </tr>
              <tr>
                <td>Material Taxes (double-click)</td>
                <td>PWST: 0 = No Tax, 1 = Relevant for Tax</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            ⚠️ <strong>Master data must be re-maintained!</strong> Since PWST is
            a brand-new tax category (different from MWST), the tax
            classification field in Customer Master and Material Master will
            appear
            <strong>blank again</strong> — you must re-enter Tax Classification
            = 1 for every customer and the material, even though it was already
            set for MWST.
          </div>
          <h3>Step 7: Maintain Condition Records</h3>
          <p>
            T-code: <span className="tcode">VK11</span> → Condition Type
            <code>PWST</code>
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Country</th>
                <th>Tax Class. (Customer)</th>
                <th>Tax Class. (Material)</th>
                <th>Rate</th>
                <th>Tax Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IN</td>
                <td>1</td>
                <td>1</td>
                <td className="amount">20%</td>
                <td>P1</td>
              </tr>
            </tbody>
          </table>
          <h3>Result</h3>
          <div className="callout green">
            ✅ Order for dealer <code>100553</code> → Conditions tab shows
            <strong>PWST = 20%</strong>, tax amount = <strong>₹1,91,466</strong>
            .
          </div>
        </div>
        {/* <!-- Section 4: Troubleshooting --> */}
        <div className="card">
          <h2>
            <span className="badge">🛠️</span> Common Error: "Condition Table
            Missing / Access"
          </h2>
          <div className="callout red">
            ❌ <strong>Error seen:</strong> "Condition table missing, access
            [condition type] pricing" — e.g. for HF00/PF00.
          </div>
          <p>
            <strong>Root cause:</strong> In the Access Sequence (
            <span className="tcode">V/07</span>), one or more table rows were
            left <strong>enabled</strong> instead of properly confirmed.
          </p>
          <div className="callout blue">
            🔧 <strong>Fix:</strong> Go to the access sequence → select each
            table access line → double-click <strong>Fields</strong> for that
            row. If this step is skipped, the table remains in an
            incomplete/enabled state and throws this exact error at order
            creation.
          </div>
          <p className="note-text">
            This is a recurring gotcha across all access sequences (Lecture 66,
            70) — always verify every table row shows as "confirmed/disabled"
            before saving.
          </p>
        </div>
        {/* <!-- Section 5: Complete pricing procedure --> */}
        <div className="card teal">
          <h2>
            <span className="badge">🏆</span> Milestone: Pricing Procedure Is
            Now Complete!
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step Range</th>
                <th>Component</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>Base Price (PPR0)</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Base Value (statistical)</td>
              </tr>
              <tr>
                <td>30–60</td>
                <td>
                  Discounts (Material, Cust/Material, Customer, Price Group) or
                  Common Discount (61)
                </td>
              </tr>
              <tr>
                <td>62–63</td>
                <td>Header Discounts (HB00, HA00)</td>
              </tr>
              <tr>
                <td>70</td>
                <td>Gross Value (statistical)</td>
              </tr>
              <tr>
                <td>80–110</td>
                <td>Surcharges (Freight, Insurance, Packing, Loading)</td>
              </tr>
              <tr>
                <td>111</td>
                <td>Header Freight (HD00)</td>
              </tr>
              <tr>
                <td>120</td>
                <td>Net Value (statistical)</td>
              </tr>
              <tr>
                <td>130</td>
                <td>Order Value (HM00)</td>
              </tr>
              <tr>
                <td>140</td>
                <td>Tax (PWST)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            🎉
            <strong>
              This is the full end-to-end pricing procedure design
            </strong>
            , from base price through tax. Next up: the
            <strong>"controls"</strong> layer — deep-diving into Condition Type
            fields (V/06) and the 16 fields of the Pricing Procedure that govern
            how each of these steps actually behaves.
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
                  Why is tax always shown separately, never added to Net Value?
                </td>
                <td>
                  Because tax must be remitted to the government, not counted as
                  company revenue
                </td>
              </tr>
              <tr>
                <td>Why must tax amounts be rounded?</td>
                <td>
                  It's a legal requirement — decimal tax values aren't
                  acceptable for statutory reporting
                </td>
              </tr>
              <tr>
                <td>What two settings enable rounding for a condition type?</td>
                <td>
                  Currency rounding unit (SPRO → General Settings → Currencies)
                  + Calculation Type 17 on the condition type in the pricing
                  procedure
                </td>
              </tr>
              <tr>
                <td>What is "commercial rounding"?</td>
                <td>
                  0.50 and above rounds up to the next whole number; below 0.50
                  rounds down
                </td>
              </tr>
              <tr>
                <td>
                  What are the T-code and step order for setting up standard tax
                  (MWST)?
                </td>
                <td>
                  OVK1 (assign tax category to country) → FTXP (create tax code)
                  → maintain tax classification in customer/material master →
                  V/08 (place in pricing procedure) → VK11 (condition records)
                </td>
              </tr>
              <tr>
                <td>
                  Why must tax classification be re-maintained in master data
                  after switching from MWST to PWST?
                </td>
                <td>
                  PWST is a new, separate tax category from MWST —
                  classifications don't carry over between different tax
                  categories
                </td>
              </tr>
              <tr>
                <td>
                  What does "Departure Country" mean in a tax condition table,
                  and how do you identify the correct field?
                </td>
                <td>
                  It's the country the goods ship from (technical field ALAND);
                  confirm via Field Attributes since multiple "Country" fields
                  exist in the field catalog
                </td>
              </tr>
              <tr>
                <td>
                  What usually causes "Condition table missing / access" errors?
                </td>
                <td>
                  A skipped "double-click Fields" step in the access sequence
                  configuration, leaving a table row incomplete/enabled
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
                  <span className="tcode">OVK1</span>
                </td>
                <td>
                  Assign Tax Category to Country (MWST/PWST) / Define Tax
                  Determination Rules
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">FTXP</span>
                </td>
                <td>Create Tax Code (P1)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/03</span>
                </td>
                <td>Create Condition Table for custom tax (683)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/07</span>
                </td>
                <td>Create Access Sequence (PWST)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/06</span>
                </td>
                <td>Define Condition Type (PWST, copied from MWST)</td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  Place tax condition type in Pricing Procedure (MWST then
                  swapped to PWST); also used to set Calculation Type 17 for
                  rounding
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">XD02</span>
                </td>
                <td>
                  Maintain Tax Classification in Customer Master (Billing tab)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">MM02</span>
                </td>
                <td>
                  Maintain Tax Classification in Material Master (Sales Org 1
                  view)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VK11</span>
                </td>
                <td>Maintain tax condition records (MWST, then PWST)</td>
              </tr>
              <tr>
                <td>SPRO (no single T-code)</td>
                <td>
                  Define Rounding Rules for Currencies — SAP NetWeaver → General
                  Settings → Currencies
                </td>
              </tr>
              <tr>
                <td>SPRO (no single T-code)</td>
                <td>
                  Define Tax Relevancy of Master Records — SD → Basic Functions
                  → Taxes
                </td>
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
                <td>Standard tax condition type</td>
                <td>MWST</td>
              </tr>
              <tr>
                <td>Custom tax condition type</td>
                <td>PWST (copied from MWST)</td>
              </tr>
              <tr>
                <td>Tax pricing procedure step</td>
                <td>
                  140, From 120, Requirement 10, Base Type 16, Account Key MWS
                </td>
              </tr>
              <tr>
                <td>MWST sample rate</td>
                <td>18%, Tax Code P1</td>
              </tr>
              <tr>
                <td>PWST sample rate</td>
                <td>20%, Tax Code P1</td>
              </tr>
              <tr>
                <td>Currency rounding unit</td>
                <td>100 = round to 2 decimals; 10 = round to 1 decimal</td>
              </tr>
              <tr>
                <td>Rounding calculation type</td>
                <td>17 (Rounding as per T001R)</td>
              </tr>
              <tr>
                <td>Custom tax table created</td>
                <td>
                  683 (Departure Country + Tax Classification Customer + Tax
                  Classification Material)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card red">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            Tax was configured first using the standard SAP condition type MWST
            for practice (real Indian GST is a separate topic), following the
            familiar sequence: assign tax category to country (OVK1), create a
            tax code (FTXP), maintain tax classifications in master data, place
            the condition type in the pricing procedure, and enter rates via
            VK11. Because tax display legally requires whole numbers, currency
            rounding rules plus Calculation Type 17 were applied. The lecture
            then rebuilt the entire tax mechanism from scratch as a custom type
            (PWST) — new condition table (683), access sequence, condition type,
            and a full re-maintenance of master data tax classifications —
            completing the full pricing procedure from Base Price through Tax.
          </p>
        </div>
        {/* <!-- Section 6: Key Takeaways --> */}
        <div className="card red">
          <h2>
            <span className="badge">⭐</span> Key Takeaways &amp; Next Class
          </h2>
          <ul>
            <li>
              Tax config follows the same 6-step recipe as everything else:
              Table → Access Sequence → Condition Type → Pricing Procedure → Tax
              Determination Rules → Master Data → Condition Records
            </li>
            <li>
              <strong>Tax is always shown separately</strong>, never merged into
              Net Value, since it's owed to the government
            </li>
            <li>
              <strong>Rounding is a legal requirement</strong> for tax —
              configured via Currency Rounding Rules + Calculation Type 17 on
              the condition type
            </li>
            <li>
              When swapping a standard tax type for a custom one (MWST → PWST),
              you must <strong>replace</strong> it in the pricing procedure and
              <strong>re-maintain tax classifications</strong> in master data —
              they don't carry over
            </li>
            <li>
              <strong>"Missing condition table/access" errors</strong> almost
              always mean a skipped "double-click Fields" step in the access
              sequence configuration
            </li>
          </ul>
          <p>
            📅 <strong>Next lecture:</strong> Condition Type controls (V/06
            fields) and the 16 fields of the Pricing Procedure — the real
            "engine" behind everything configured so far.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 71 Notes — SAP SD Pricing: Tax Configuration &amp; Rounding 🎓
      </p>
    </div>
  );
};

export default Pricing71;
