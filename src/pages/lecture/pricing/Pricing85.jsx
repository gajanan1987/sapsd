const Pricing85 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-gold">
        <h1>
          🧾 Lecture 85 — GST Configuration: Master Data, GL Accounts, Tax Codes
          &amp; Pricing Setup
        </h1>
        <p>
          SAP SD | Continuing GST configuration — customer master, HSN codes,
          finance setup, and the start of GST pricing
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Recap --> */}
        <div className="card">
          <h2>
            <span className="badge">↩️</span> Recap — Assign Business Place to
            Plant
          </h2>
          <div className="callout blue">
            Confirmed complete from last class:
            <strong>SPRO → Cross-Application Components → General Application Functions
              → Business Place → Assign Business Place to Plant</strong>.
            Plant P100 was assigned to its Business Place. This closes out that
            GST step.
          </div>
          <div className="callout">
            Reminder of Business Place's core purpose: it is the place where the
            <strong>Company's GST Registration Number</strong> is maintained (in
            the Tax Number 3 field).
          </div>
        </div>

        {/* <!-- Section 1: Customer Master GST --> */}
        <div className="card teal">
          <h2>
            <span className="badge">5</span> Step 5 — Maintain Customer GST
            Registration Number
          </h2>
          <div className="callout">
            Every customer that GST applies to needs their own
            <strong>GST Registration Number</strong> stored in their customer
            master.
          </div>
          <div className="stepper">
            <div className="step step-teal">
              Go to Customer Master (e.g. customer <code>HD02100553</code>)
            </div>
            <div className="step step-teal">
              Go to the <strong>Control Data</strong> tab
            </div>
            <div className="step step-teal">
              Mention the Customer GST Registration Number in the
              <strong>Tax Number 3</strong> field
            </div>
            <div className="step step-teal">Save</div>
          </div>
          <div className="callout blue">
            Note the parallel: <strong>Tax Number 3</strong> holds the Company's
            own GST number inside Business Place, and the
            <strong>same field name</strong> (Tax Number 3) holds the Customer's
            GST number inside Customer Master, Control Data.
          </div>
        </div>

        {/* <!-- Section 2: HSN Code --> */}
        <div className="card orange">
          <h2>
            <span className="badge">6</span> Step 6 — Define &amp; Maintain HSN
            Code
          </h2>
          <div className="callout purple">
            <strong>HSN</strong> =
            <strong>Harmonized System of Nomenclature</strong>. HSN codes help the
            system <strong>determine the applicable GST rate</strong> and are
            provided by the GST department.
          </div>
          <h3>Define HSN Code</h3>
          <div className="stepper">
            <div className="step step-orange">
              T-code <span className="tcode">J1ID</span>
            </div>
            <div className="step step-orange">
              Select <strong>Chapter ID</strong> → click <strong>Maintain</strong>
            </div>
            <div className="step step-orange">
              Go to New Entries → mention Chapter ID, Unit of Measure, and a
              description (e.g. "Insulin HSN code")
            </div>
            <div className="step step-orange">Save</div>
          </div>
          <h3>Maintain HSN Code in Material Master</h3>
          <div className="stepper">
            <div className="step step-orange">
              T-code <span className="tcode">MM02</span> on the relevant material
            </div>
            <div className="step step-orange">
              Go to the <strong>Foreign Trade / Export</strong> view
            </div>
            <div className="step step-orange">
              Mention the HSN code (Control Code) and Country <strong>IN</strong>
            </div>
            <div className="step step-orange">Save</div>
          </div>
          <div className="callout blue">
            "Control Code" is the technical field name for HSN Code inside the
            condition tables built later in this lecture — the two terms refer to
            the same thing.
          </div>
        </div>

        {/* <!-- Section 3: GL Accounts --> */}
        <div className="card purple">
          <h2>
            <span className="badge">7</span> Step 7 — Create GL Accounts for GST
          </h2>
          <div className="callout purple">
            Three GST postings need three separate GL accounts: one each for IGST,
            CGST, and SGST.
          </div>
          <div className="stepper">
            <div className="step step-purple">
              T-code <span className="tcode">FS00</span>
            </div>
            <div className="step step-purple">
              Give a GL account number, company code <strong>P100</strong>, click
              <strong>With Template</strong>
            </div>
            <div className="step step-purple">
              Use reference account <strong>175000</strong> as the template,
              continue
            </div>
            <div className="step step-purple">
              Change the description to match the GST type, save
            </div>
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>GST Type</th>
                <th>GL Account</th>
                <th>Template Account</th>
                <th>Company Code</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IGST</td>
                <td>511110</td>
                <td>175000</td>
                <td>P100</td>
                <td>Integrated GST</td>
              </tr>
              <tr>
                <td>CGST</td>
                <td>522220</td>
                <td>175000</td>
                <td>P100</td>
                <td>Central GST</td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>533330</td>
                <td>175000</td>
                <td>P100</td>
                <td>State GST</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Section 4: Tax Codes --> */}
        <div className="card gold">
          <h2><span className="badge">8</span> Step 8 — Create Tax Codes</h2>
          <div className="stepper">
            <div className="step step-gold">
              T-code <span className="tcode">FTXP</span>, Country
              <strong>IN</strong>
            </div>
            <div className="step step-gold">
              Mention a tax code, give a description, mention the Tax Type (Output
              Tax)
            </div>
            <div className="step step-gold">
              Don't maintain anything inside the tax code details — just save
            </div>
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Tax Code</th>
                <th>Description</th>
                <th>Tax Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PA</td>
                <td>IGST Tax Code</td>
                <td>Output Tax</td>
              </tr>
              <tr>
                <td>PC</td>
                <td>CGST Tax Code</td>
                <td>Output Tax</td>
              </tr>
              <tr>
                <td>PS</td>
                <td>SGST Tax Code</td>
                <td>Output Tax</td>
              </tr>
            </tbody>
          </table>
          <div className="callout">
            Three tax codes created in total — one each for IGST, CGST, and SGST —
            each saved without further internal configuration at this stage.
          </div>
        </div>

        {/* <!-- Section 5: Account Keys --> */}
        <div className="card red">
          <h2><span className="badge">9</span> Step 9 — Define Account Keys</h2>
          <div className="callout purple">
            Custom account keys are defined for each GST type (rather than reusing
            the standard ones), so GST postings route to the correct GL accounts.
          </div>
          <h3>Step 9a — Define Account Key</h3>
          <div className="stepper">
            <div className="step step-red">
              Path: <span className="tcode">SPRO</span> → Sales and Distribution →
              Basic Functions → Account Assignment/Costing → Revenue Account
              Determination → Define and Assign Account Keys
            </div>
            <div className="step step-red">
              Double-click <strong>Define Account Key</strong>
            </div>
            <div className="step step-red">
              Go to New Entries → create account keys <strong>PYI</strong> (IGST),
              <strong>POC</strong> (CGST), <strong>PYS</strong> (SGST)
            </div>
            <div className="step step-red">Save</div>
          </div>
          <h3>Step 9b — Set Tax Type &amp; Posting Indicator</h3>
          <div className="stepper">
            <div className="step step-red">
              T-code <span className="tcode">OBCN</span>
            </div>
            <div className="step step-red">
              Go to New Entries for each account key (PYI, POC, PYS)
            </div>
            <div className="step step-red">
              Set <strong>Tax Type = 1</strong>,
              <strong>Posting Indicator = 2</strong> for each
            </div>
            <div className="step step-red">Save</div>
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>GST Type</th>
                <th>Custom Account Key</th>
                <th>Tax Type</th>
                <th>Posting Indicator</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IGST</td>
                <td>PYI</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>CGST</td>
                <td>POC</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>PYS</td>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Section 6: Pricing Configuration - Condition Tables --> */}
        <div className="card indigo">
          <h2>
            <span className="badge">🗂️</span> GST Pricing Configuration —
            Condition Tables
          </h2>
          <div className="callout blue">
            T-code <span className="tcode">V/03</span> — used to create the three
            GST condition tables. Important nuance from class: the system has
            <strong>two Country fields</strong> and
            <strong>two Region fields</strong> available — the
            <strong>second</strong> of each is the correct one to use (Departure
            Country, Region of Delivering Plant / Region of Ship-To Party). Also,
            <strong>Tax Classification for Material has no field "1"</strong> —
            its numbering starts from <strong>2</strong>, unlike Customer's Tax
            Classification which starts from 1.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>GST Type</th>
                <th>Fields in Condition Table</th>
                <th>Generated Table No.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IGST</td>
                <td>
                  Departure Country, Region of Delivering Plant, Region of Ship-To
                  Party, Tax Classification 1 – Customer, Tax Classification 2 –
                  Material, Control Code (HSN Code)
                </td>
                <td>686</td>
              </tr>
              <tr>
                <td>CGST</td>
                <td>
                  Departure Country, Region of Delivering Plant, Region of Ship-To
                  Party, Tax Classification 2 – Customer, Tax Classification 2 –
                  Material, Control Code (HSN Code)
                </td>
                <td>687</td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>
                  Departure Country, Region of Delivering Plant, Region of Ship-To
                  Party, Tax Classification 3 – Customer, Tax Classification 3 –
                  Material, Control Code (HSN Code)
                </td>
                <td>688</td>
              </tr>
            </tbody>
          </table>
          <div className="callout">
            After entering the field combination, click
            <strong>Generate</strong> → confirm Yes → mention the Package →
            create/select a Transport Request → Save. Repeat for all three tables.
          </div>
        </div>

        {/* <!-- Section 7: Access Sequences --> */}
        <div className="card cyan">
          <h2>
            <span className="badge">🔎</span> GST Pricing Configuration — Access
            Sequences
          </h2>
          <div className="callout">
            T-code <span className="tcode">V/07</span> — one access sequence
            created per GST type, each pointing to its own condition table.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>GST Type</th>
                <th>Access Sequence (Custom)</th>
                <th>Sequence No.</th>
                <th>Condition Table</th>
                <th>Exclusive?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IGST</td>
                <td>PYG</td>
                <td>10</td>
                <td>686</td>
                <td>Checked</td>
              </tr>
              <tr>
                <td>CGST</td>
                <td>POCG</td>
                <td>10</td>
                <td>687</td>
                <td>Checked</td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>POSG</td>
                <td>10</td>
                <td>688</td>
                <td>Checked</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            For each access sequence: New Entries → Sequence 10 → assign the
            condition table → check <strong>Exclusive</strong> → select the table
            row → double-click <strong>Fields</strong> to confirm the field
            assignment → Save.
          </div>
        </div>

        {/* <!-- Section 8: Condition Types --> */}
        <div className="card green">
          <h2>
            <span className="badge">🏷️</span> GST Pricing Configuration —
            Condition Types
          </h2>
          <div className="callout">
            T-code <span className="tcode">V/06</span> — each GST condition type
            is created by <strong>copying MWST</strong> and assigning the matching
            custom access sequence.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>GST Type</th>
                <th>Standard Condition Type (real system)</th>
                <th>Custom Condition Type (practice system)</th>
                <th>Access Sequence Assigned</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IGST</td>
                <td>JOIG</td>
                <td>PYG</td>
                <td>PYG</td>
              </tr>
              <tr>
                <td>CGST</td>
                <td>JOCG</td>
                <td>POCG</td>
                <td>POCG</td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>JOSG</td>
                <td>POSG</td>
                <td>POSG</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            The practice system doesn't have the standard GST condition types
            (JOIG etc.) preloaded, so custom equivalents are created by copying
            MWST — in a real project, the client's system would already carry the
            standard SAP GST condition types.
          </div>
          <div className="callout">
            Placing these condition types into the pricing procedure is the next
            step — to be covered next class.
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
                  What is the main purpose of Business Place in GST configuration?
                </td>
                <td>
                  To maintain the Company's GST Registration Number (Tax Number 3
                  field)
                </td>
              </tr>
              <tr>
                <td>Where is a customer's GST registration number maintained?</td>
                <td>Customer Master → Control Data tab → Tax Number 3 field</td>
              </tr>
              <tr>
                <td>What does HSN stand for and what is it used for?</td>
                <td>
                  Harmonized System of Nomenclature — it helps the system
                  determine the applicable GST rate, and is provided by the GST
                  department
                </td>
              </tr>
              <tr>
                <td>
                  Which T-code is used to define HSN codes, and which one to
                  maintain them on a material?
                </td>
                <td>
                  J1ID to define HSN/Chapter ID; MM02 (Foreign Trade/Export view)
                  to maintain it on the material master
                </td>
              </tr>
              <tr>
                <td>
                  How many GL accounts are typically created for GST, and why?
                </td>
                <td>
                  Three — one each for IGST, CGST, and SGST — created via FS00
                  using a template reference account
                </td>
              </tr>
              <tr>
                <td>
                  Which T-code creates tax codes for GST, and how many are
                  typically needed?
                </td>
                <td>FTXP; typically three — one each for IGST, CGST, SGST</td>
              </tr>
              <tr>
                <td>
                  Why are custom account keys defined instead of using standard
                  ones for GST?
                </td>
                <td>
                  So GST postings can be routed to the correct GL accounts via
                  revenue account determination, configured with a specific Tax
                  Type and Posting Indicator combination
                </td>
              </tr>
              <tr>
                <td>
                  What Tax Type and Posting Indicator values were used for the GST
                  account keys?
                </td>
                <td>Tax Type = 1, Posting Indicator = 2, set via OBCN</td>
              </tr>
              <tr>
                <td>
                  Why can't Tax Classification field "1" be used for Material in
                  GST condition tables?
                </td>
                <td>
                  The Material Tax Classification numbering doesn't have a field
                  "1" — it starts from field "2" onward
                </td>
              </tr>
              <tr>
                <td>
                  What does "Control Code" refer to in a GST condition table?
                </td>
                <td>The HSN Code field</td>
              </tr>
              <tr>
                <td>
                  How are the GST condition types created in the practice system?
                </td>
                <td>
                  By copying MWST via V/06 and assigning the matching custom
                  access sequence, since the standard GST condition types
                  (JOIG/JOCG/JOSG) aren't preloaded in the practice system
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
                <td><span className="tcode">J1ID</span></td>
                <td>
                  Define HSN codes (Chapter ID, Unit of Measure, description)
                </td>
              </tr>
              <tr>
                <td><span className="tcode">MM02</span></td>
                <td>
                  Maintain HSN code on the material master (Foreign Trade / Export
                  view)
                </td>
              </tr>
              <tr>
                <td><span className="tcode">FS00</span></td>
                <td>Create the GL accounts for IGST, CGST, SGST</td>
              </tr>
              <tr>
                <td><span className="tcode">FTXP</span></td>
                <td>Create the tax codes for IGST, CGST, SGST</td>
              </tr>
              <tr>
                <td><span className="tcode">SPRO</span></td>
                <td>
                  Define Account Key (SD → Basic Functions → Account
                  Assignment/Costing → Revenue Account Determination)
                </td>
              </tr>
              <tr>
                <td><span className="tcode">OBCN</span></td>
                <td>
                  Set Tax Type and Posting Indicator on each GST account key
                </td>
              </tr>
              <tr>
                <td><span className="tcode">V/03</span></td>
                <td>Create the three GST condition tables (686, 687, 688)</td>
              </tr>
              <tr>
                <td><span className="tcode">V/07</span></td>
                <td>Create the three GST access sequences (PYG, POCG, POSG)</td>
              </tr>
              <tr>
                <td><span className="tcode">V/06</span></td>
                <td>Create the three GST condition types by copying MWST</td>
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
                <td>Customer GST number field</td>
                <td>Customer Master → Control Data → Tax Number 3</td>
              </tr>
              <tr>
                <td>HSN code purpose</td>
                <td>
                  Determines the applicable GST rate; provided by the GST
                  department
                </td>
              </tr>
              <tr>
                <td>GL accounts (company code P100, template 175000)</td>
                <td>IGST 511110, CGST 522220, SGST 533330</td>
              </tr>
              <tr>
                <td>Tax codes (FTXP, Country IN)</td>
                <td>PA = IGST, PC = CGST, PS = SGST — all Output Tax</td>
              </tr>
              <tr>
                <td>Account keys (custom)</td>
                <td>
                  PYI (IGST), POC (CGST), PYS (SGST) — Tax Type 1, Posting
                  Indicator 2 (via OBCN)
                </td>
              </tr>
              <tr>
                <td>Condition tables (V/03)</td>
                <td>
                  686 (IGST), 687 (CGST), 688 (SGST) — Departure Country, Region
                  of Plant, Region of Ship-To, Tax Classification
                  (Customer/Material), Control Code
                </td>
              </tr>
              <tr>
                <td>Access sequences (V/07)</td>
                <td>
                  PYG (IGST → table 686), POCG (CGST → table 687), POSG (SGST →
                  table 688), all Exclusive, Sequence 10
                </td>
              </tr>
              <tr>
                <td>Condition types (V/06, copied from MWST)</td>
                <td>
                  PYG (IGST), POCG (CGST), POSG (SGST) — standard equivalents
                  JOIG/JOCG/JOSG
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Extra: Summary --> */}
        <div className="card indigo">
          <h2><span className="badge">📝</span> Summary</h2>
          <p>
            This lecture continued the GST configuration build-out from Lecture
            84. After confirming Business Place was assigned to Plant, the class
            maintained the Customer's GST Registration Number in Customer Master
            (Control Data → Tax Number 3), then defined HSN codes via J1ID and
            attached them to the material master's Foreign Trade/Export view via
            MM02 — HSN codes being what the system uses to determine the correct
            GST rate. On the finance side, three GL accounts (IGST 511110, CGST
            522220, SGST 533330) were created via FS00 using a template reference
            account, three tax codes (PA, PC, PS) were created via FTXP, and three
            custom account keys (PYI, POC, PYS) were defined and configured with
            Tax Type 1 / Posting Indicator 2 via OBCN. The lecture then moved into
            GST pricing configuration proper: three condition tables (686/687/688)
            built via V/03 — noting the important technical nuance that Material's
            Tax Classification field numbering starts at 2, not 1 — followed by
            three access sequences (PYG/POCG/POSG) via V/07, and finally three
            condition types created by copying MWST via V/06 and linking each to
            its access sequence. Placing these condition types into the pricing
            procedure itself remains for next class.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 85 Notes — SAP SD Pricing: GST Configuration — Master Data,
        Finance Setup &amp; Pricing Build-Out 🎓
      </p>
    </div>
  );
};

export default Pricing85;
