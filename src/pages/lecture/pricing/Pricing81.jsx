const Pricing81 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-green">
        <h1>
          🔐 Lecture 81 — Requirement, Custom Requirements &amp; the Full
          Pricing Determination Algorithm
        </h1>
        <p>
          SAP SD | The final field of the 16, standard requirement logic
          decoded, and how the system actually thinks
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 1: What is Requirement --> */}
        <div className="card">
          <h2>
            <span className="badge">16</span> Requirement — The Final Field
          </h2>
          <div className="callout">
            <strong>Requirement</strong> is a condition that the system checks
            <strong>every single time</strong> while determining a condition
            type into the sales document.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>If Requirement...</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Fulfilled</td>
                <td>
                  The condition type <strong>is</strong> determined into the
                  sales document
                </td>
              </tr>
              <tr>
                <td>Not fulfilled</td>
                <td>
                  The condition type is <strong>not</strong> determined — it
                  gets ignored
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 2: Requirement 2 --> */}
        <div className="card orange">
          <h2>
            <span className="badge">2</span> Standard Requirement 2 — Base Price
            &amp; Discounts (e.g. PPR0)
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Check</th>
                <th>Technical Field</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Pricing field in Item Category</td>
                <td>
                  <code>PRSFD</code>
                </td>
                <td>Should be X or B — check KOMP-PRSFD CA 'BX'</td>
              </tr>
              <tr>
                <td>Exclusion field in Condition Type control</td>
                <td>
                  <code>KZNAP</code>
                </td>
                <td>Should be blank — check KOMP-KZNAP = space</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            To find any field's technical name: place the cursor on it → press
            <strong>F1</strong> → click <strong>Technical Information</strong>.
            To view the actual ABAP source code behind a requirement: go to the
            Requirement field in V/08 → press <strong>F4</strong> → select the
            requirement → <strong>Source Text</strong>.
          </div>
          <h3>Live Demonstration</h3>
          <div className="callout red">
            Test: set the Pricing field in Item Category to
            <strong>blank</strong> instead of X/B → create an order → all
            Requirement-2 condition types (PPR0, discounts) disappear from
            Conditions. Tax and VPRS still show since they use different
            requirements.
          </div>
          <p className="note-text">
            Confirmed via Analysis: selecting the missing PPR0 line shows
            "Condition ignored, requirement 2 not fulfilled" — directly pointing
            to the exact rule that failed.
          </p>
        </div>
        {/* <!-- Section 3: Requirement 4 --> */}
        <div className="card teal">
          <h2>
            <span className="badge">4</span> Standard Requirement 4 — Cost
            (VPRS, EK01, EK02)
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Check</th>
                <th>Technical Field</th>
                <th>Condition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Determine Cost field in Item Category</td>
                <td>
                  <code>EVRWR</code>
                </td>
                <td>Should be checked — KOMP-EVRWR = X</td>
              </tr>
              <tr>
                <td>Ordering Company = Delivering Company</td>
                <td>
                  <code>T001-BUKRS</code>
                </td>
                <td>
                  Both must match (same company code) — fails for intercompany
                  scenarios
                </td>
              </tr>
              <tr>
                <td>Plant</td>
                <td>
                  <code>WERKS</code>
                </td>
                <td>Should not be blank — KOMP-WERKS ≠ space</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            Live tests confirmed: unchecking "Determine Cost" in Item Category →
            VPRS disappears (Analysis: "requirement 4 not fulfilled"). Blanking
            the Plant field on the order → VPRS disappears too.
          </div>
        </div>
        {/* <!-- Section 4: Requirement 9 and 14 (SKTO/SKTV) --> */}
        <div className="card purple">
          <h2>
            <span className="badge">9/14</span> Standard Requirements 9 &amp; 14
            — Cash Discount (SKTO / SKTV)
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Condition Type</th>
                <th>Check 1 (Material Master)</th>
                <th>Check 2 (OBY6)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>9</td>
                <td>SKTO</td>
                <td>
                  Cash Discount field (<code>SKTOF</code>) = X (checked)
                </td>
                <td>
                  "Tax base is net value" = <strong>unchecked</strong>{" "}
                  (T001-XMWSN = space)
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>SKTV</td>
                <td>
                  Cash Discount field (<code>SKTOF</code>) = X (checked)
                </td>
                <td>
                  "Tax base is net value" = <strong>checked</strong> (T001-XMWSN
                  = X)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            This confirms the SKTO/SKTV toggle mechanism from Lecture 72: the
            exact same physical checkbox in OBY6 is what these two requirements
            check in opposite states — proving why only one of SKTO/SKTV ever
            determines at a time.
          </div>
          <div className="callout red">
            Live test: unchecking the Cash Discount field in Material Master
            (Sales view) for a specific distribution channel (e.g. P3) → SKTO
            stops determining for orders in that channel specifically, even
            though it still works for other channels where the field remains
            checked.
          </div>
        </div>
        {/* <!-- Section 5: Requirement 10, 24, 22 --> */}
        <div className="card gold">
          <h2>
            <span className="badge">10/24/22</span> Standard Requirements 10, 24
            &amp; 22
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Requirement</th>
                <th>Used For</th>
                <th>Check</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>Tax (MWST, GST condition types)</td>
                <td>Plant should not be blank — KOMP-WERKS ≠ space</td>
              </tr>
              <tr>
                <td>24</td>
                <td>Rebate (BO01, BO02, BO03)</td>
                <td>
                  Document must be a <strong>Billing Document</strong>
                </td>
              </tr>
              <tr>
                <td>22</td>
                <td>Intercompany (IV01, PI01)</td>
                <td>
                  Ordering Company ≠ Delivering Company (opposite of Requirement
                  4's check); Plant should not be blank
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            Nice contrast: Requirement 4 (Cost) requires ordering = delivering
            company, while Requirement 22 (Intercompany) requires the exact
            opposite — ordering ≠ delivering company. This makes intuitive
            sense: cost visibility only matters within a single company, while
            intercompany pricing only matters when two different companies are
            involved.
          </div>
        </div>
        {/* <!-- Section 6: Custom requirements --> */}
        <div className="card red">
          <h2>
            <span className="badge">🛠️</span> Developing Custom (User-Defined)
            Requirements
          </h2>
          <p>
            T-code: <span className="tcode">VYFM</span> → Requirements → Pricing
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Rule</th>
                <th>Detail</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Who develops it?</td>
                <td>
                  An ABAP developer (ABAPer) — not the SD functional consultant
                  directly
                </td>
              </tr>
              <tr>
                <td>User-defined requirement number range</td>
                <td>900 and above</td>
              </tr>
              <tr>
                <td>Best practice</td>
                <td>
                  Always copy the closest matching
                  <strong>standard</strong> requirement first, then add your
                  custom logic on top
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Section 7: Real-world scenario --> */}
        <div className="card">
          <h2>
            <span className="badge">🎯</span> Real-World Example — Two Base
            Price Condition Types
          </h2>
          <div className="callout purple">
            Client requirement: they use <strong>two</strong> base price
            condition types in their pricing procedure — <code>PPR0</code> and
            <code>PR00</code>.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Should Apply When</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PPR0</td>
                <td>
                  All processes <strong>except</strong> Third Party and IPO
                  (Individual Purchase Order)
                </td>
              </tr>
              <tr>
                <td>PR00</td>
                <td>
                  <strong>Only</strong> for Third Party and IPO processes
                </td>
              </tr>
            </tbody>
          </table>
          <h3>Building the Custom Requirement</h3>
          <div className="stepper">
            <div className="step">
              Go to <span className="tcode">VYFM</span> → find the next
              available user-defined number (e.g. 901–903 already taken → use
              <strong>904</strong> for PPR0's new requirement)
            </div>
            <div className="step">
              Copy the code from the closest standard requirement —
              <strong>Requirement 2</strong> (already checks Pricing field XORB
              and Exclusion blank)
            </div>
            <div className="step">
              Add a third check: item category (<code>KOMP-PSTYV</code>)
              <strong>NOT equal to</strong> TAS or TAB → this becomes the new
              custom requirement for PPR0
            </div>
            <div className="step">
              A separate requirement (e.g. 905) is built for PR00, copying the
              same base logic but checking item category
              <strong>EQUALS</strong> TAS or TAB instead
            </div>
          </div>
          <h3>Item Category Reference</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Item Category</th>
                <th>Process</th>
                <th>Which Condition Type Applies</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TAN (standard)</td>
                <td>Normal sales order</td>
                <td>PPR0 (requirement fulfilled — not TAS/TAB)</td>
              </tr>
              <tr>
                <td>TAS</td>
                <td>Third Party</td>
                <td>
                  PR00 (requirement checks item category = TAS/TAB → fulfilled)
                </td>
              </tr>
              <tr>
                <td>TAB</td>
                <td>IPO (Individual Purchase Order)</td>
                <td>PR00 (same logic)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            This is a textbook example of how custom requirements let two
            condition types of the <strong>same type</strong> (both base price)
            coexist in one pricing procedure without conflicting — each is
            switched on/off automatically based on the order's item category.
          </div>
        </div>
        {/* <!-- Section 8: Full pricing determination algorithm --> */}
        <div className="card teal">
          <h2>
            <span className="badge">🧠</span> The Complete Pricing Determination
            Algorithm
          </h2>
          <div className="callout teal">
            Putting the entire course together — this is exactly how the system
            thinks, step by step, when determining price into a sales document.
          </div>
          <div className="stepper">
            <div className="step">
              <strong>Determine the Pricing Procedure</strong> — using Sales
              Area + Document Pricing Procedure + Customer Pricing Procedure
              (via OVKK)
            </div>
            <div className="step">
              Go inside the Pricing Procedure → move to the
              <strong>first step</strong> → take its Condition Type
            </div>
            <div className="step">
              Check whether the <strong>Requirement</strong> is fulfilled for
              that condition type
            </div>
            <div className="step">
              If fulfilled → go inside the condition type → take its
              <strong>Access Sequence</strong>
            </div>
            <div className="step">
              Go inside the Access Sequence → take its
              <strong>Condition Tables</strong> (in specificity order)
            </div>
            <div className="step">
              Go inside each Condition Table → take the
              <strong>combination of fields</strong>
            </div>
            <div className="step">
              Go to <strong>Condition Records</strong> → check for a valid
              record matching that field combination
            </div>
            <div className="step">
              If a valid record is found → the system
              <strong>determines it into the sales document</strong>
            </div>
          </div>
          <div className="flow">
            <div className="flow-step">Pricing Procedure</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Step / Condition Type</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Requirement Check</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Access Sequence</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Condition Tables</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Field Combination</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Condition Records</div>
            <div className="arrow">➜</div>
            <div className="flow-step">Determined!</div>
          </div>
          <p className="note-text">
            If the Requirement is not fulfilled at step 3, the system skips that
            condition type entirely and moves to the next step in the pricing
            procedure — never even checking its access sequence or condition
            records.
          </p>
        </div>
        {/* <!-- Section 9: Interview-style question on 16-field sequence --> */}
        <div className="card slate">
          <h2>
            <span className="badge">❓</span> Common Interview Question — Order
            of the 16 Fields
          </h2>
          <div className="callout slate">
            <strong>Question:</strong> What sequence does the system actually
            follow, out of the 16 fields of the pricing procedure, while
            determining the price into the sales document?
          </div>
          <div className="formula-box">
            Step → Counter → Condition Type → Requirement → Subtotal → Base Type
            → Calculation Type → From → To
          </div>
          <p className="note-text">
            Beyond this point, there is no strictly defined processing sequence
            among the remaining fields — the answer given in class covers the
            operational order that matters for the pricing engine's logic.
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
                <td>What is the Requirement field?</td>
                <td>
                  A condition the system checks every time before determining a
                  condition type into the sales document; if fulfilled, the
                  condition type is determined, otherwise it's ignored
                </td>
              </tr>
              <tr>
                <td>What two checks does standard Requirement 2 perform?</td>
                <td>
                  Pricing field in Item Category should be X or B, and the
                  Exclusion field in Condition Type control should be blank
                </td>
              </tr>
              <tr>
                <td>
                  What three checks does standard Requirement 4 (Cost) perform?
                </td>
                <td>
                  Determine Cost field in Item Category checked, Ordering
                  Company = Delivering Company, and Plant not blank
                </td>
              </tr>
              <tr>
                <td>How do Requirements 9 (SKTO) and 14 (SKTV) differ?</td>
                <td>
                  Both check the Cash Discount field in Material Master, but
                  Requirement 9 requires "Tax base is net value" (OBY6)
                  unchecked, while Requirement 14 requires it checked
                </td>
              </tr>
              <tr>
                <td>
                  What does Requirement 24 check, and for which condition types?
                </td>
                <td>
                  That the document is a Billing Document — used for rebate
                  condition types (BO01, BO02, BO03)
                </td>
              </tr>
              <tr>
                <td>
                  How does Requirement 22 (Intercompany) differ from Requirement
                  4 (Cost) regarding company codes?
                </td>
                <td>
                  Requirement 4 requires Ordering Company = Delivering Company;
                  Requirement 22 requires the opposite — Ordering Company ≠
                  Delivering Company
                </td>
              </tr>
              <tr>
                <td>
                  Where are custom requirements developed, and what's the
                  numbering rule?
                </td>
                <td>
                  T-code VYFM, developed by an ABAP developer; user-defined
                  requirement numbers must be 900 and above
                </td>
              </tr>
              <tr>
                <td>
                  What's the best practice when building a new custom
                  requirement?
                </td>
                <td>
                  Always copy the code from the closest matching standard
                  requirement first, then add the custom logic on top
                </td>
              </tr>
              <tr>
                <td>
                  How do you find a field's technical name for use in
                  requirement logic?
                </td>
                <td>
                  Place the cursor on the field, press F1, then click Technical
                  Information
                </td>
              </tr>
              <tr>
                <td>
                  How do you view the actual ABAP source code of an existing
                  requirement?
                </td>
                <td>
                  Go to the Requirement field in V/08, press F4, select the
                  requirement, then click Source Text
                </td>
              </tr>
              <tr>
                <td>
                  What is the full sequence the system follows to determine a
                  price, from pricing procedure down to the final record?
                </td>
                <td>
                  Pricing Procedure → Step/Condition Type → Requirement check →
                  Access Sequence → Condition Tables → Field Combination →
                  Condition Records → determine if a valid record is found
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
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  View/assign Requirement numbers per condition type step;
                  access requirement source text via F4
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/06</span>
                </td>
                <td>
                  View the Exclusion field on a condition type (checked by
                  Requirement 2)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">OBY6</span>
                </td>
                <td>
                  View/toggle "Tax base is net value" per company code (checked
                  by Requirements 9 and 14)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">MM02</span>
                </td>
                <td>
                  Check/toggle the Cash Discount field in Material Master
                  (checked by Requirements 9 and 14)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VYFM</span>
                </td>
                <td>
                  Develop new/custom pricing requirements (Requirements →
                  Pricing)
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
                <th>Requirement</th>
                <th>Used For</th>
                <th>Key Checks</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2</td>
                <td>Base price, discounts</td>
                <td>Item Category Pricing field = X/B; Exclusion = blank</td>
              </tr>
              <tr>
                <td>4</td>
                <td>Cost (VPRS, EK01, EK02)</td>
                <td>
                  Determine Cost checked; Ordering = Delivering company; Plant
                  not blank
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>SKTO (cash discount)</td>
                <td>
                  Cash Discount field checked; OBY6 "tax base is net value"
                  unchecked
                </td>
              </tr>
              <tr>
                <td>14</td>
                <td>SKTV (cash discount)</td>
                <td>
                  Cash Discount field checked; OBY6 "tax base is net value"
                  checked
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>Tax (MWST/GST)</td>
                <td>Plant not blank</td>
              </tr>
              <tr>
                <td>24</td>
                <td>Rebate (BO01/02/03)</td>
                <td>Document must be a Billing Document</td>
              </tr>
              <tr>
                <td>22</td>
                <td>Intercompany (IV01/PI01)</td>
                <td>Ordering ≠ Delivering company; Plant not blank</td>
              </tr>
              <tr>
                <td>User-defined range</td>
                <td>Custom requirements</td>
                <td>900 and above, via VYFM</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card green">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            This lecture completed the 16-field series with
            <strong>Requirement</strong> — the gatekeeper check the system runs
            before determining any condition type. Standard requirements were
            decoded field-by-field: Requirement 2 (base price/discounts,
            checking Item Category and Exclusion), Requirement 4 (cost, checking
            Determine Cost + same company + plant), Requirements 9/14 (the
            SKTO/SKTV toggle via OBY6), Requirement 10 (tax, plant check),
            Requirement 24 (rebate, billing document check), and Requirement 22
            (intercompany, opposite-company check from Requirement 4). A
            real-world scenario showed how to build a{" "}
            <strong>custom requirement</strong> via VYFM (900+,
            ABAPer-developed, always copied from the closest standard) to let
            two base price condition types coexist based on item category (TAN
            vs TAS/TAB). The lecture closed by tying the entire pricing module
            together into one algorithm — Pricing Procedure → Step → Requirement
            → Access Sequence → Condition Tables → Field Combination → Condition
            Records — and a common interview question on the operational
            field-processing order. Next class (after a one-day break):
            pricing-related interview questions and real-world issues.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 81 Notes — SAP SD Pricing: Requirement, Custom Requirements
        &amp; the Pricing Algorithm 🎓
      </p>
    </div>
  );
};

export default Pricing81;
