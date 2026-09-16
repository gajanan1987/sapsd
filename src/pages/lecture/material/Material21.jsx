const Material21 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-cyan">
    <h1>
     📦 Lecture 21 — Customer Master Maintenance T-Codes &amp; Material
     Master Creation (MM01)
    </h1>
    <p>
     SAP SD | Tracking changes, blocking, and flagging customers for
     deletion, then moving into the second master data type — Material Master
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Customer Master creation and Partner Determination are complete.
      This lecture first covers four housekeeping T-codes for Customer
      Master, then moves into the second SAP SD master data type:
      <strong>Material Master</strong>.
     </div>
    </div>

    {/* <!-- Section 1: XD04 --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> XD04 — Track Changes in Customer
      Master
     </h2>
     <div className="callout teal">
      💡 <span className="tcode">XD04</span> shows a full history of every
      field that's been changed on a customer master record.
     </div>
     <div className="stepper">
      <div className="step">
       After changing fields on a customer (e.g. Delivery Priority from
       blank to <code>01</code>, Over Delivery Tolerance to 30%) and
       saving, go to <span className="tcode">XD04</span> and enter the
       customer number.
      </div>
      <div className="step">
       The screen lists every field that was changed. Double-click a field
       to see its <strong>old value</strong> and
       <strong>new value</strong>.
      </div>
      <div className="step">
       Double-click again to see the full change history — date, time, and
       which user made the change.
      </div>
     </div>
    </div>

    {/* <!-- Section 2: XD05 --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> XD05 — Block / Unblock a Customer
     </h2>
     <div className="callout orange">
      💡 A customer is blocked when they
      <strong>stop making payments</strong> — this halts further business
      with them until the outstanding payment is resolved.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Situation</th>
        <th>Action</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Customer stops paying</td>
        <td>Block the customer (T-code XD05)</td>
       </tr>
       <tr>
        <td>Customer resumes payment</td>
        <td>Unblock the customer (same T-code, remove the block)</td>
       </tr>
      </tbody>
     </table>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">XD05</span> → enter the customer
       number.
      </div>
      <div className="step">
       To block across every division the customer is extended into, check
       <strong>Order Block, All Sales Areas</strong> and
       <strong>Delivery Block, All Sales Areas</strong>, mention a reason →
       Save.
      </div>
      <div className="step">
       To unblock later, return to the same T-code, uncheck those fields,
       and Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 3: XD06 --> */}
    <div className="card red">
     <h2>
      <span className="badge">3</span> XD06 — Flag Customer for Deletion
     </h2>
     <div className="callout red">
      💡 Used when a customer <strong>discontinues doing business</strong>
      with the company entirely.
     </div>
     <div className="callout">
      🔒 <strong>Important:</strong> a customer can only be
      <strong>flagged</strong> for deletion — SAP never lets you permanently
      delete a customer record from the database.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">XD06</span> → enter the customer
       number → check the deletion flag fields → Save.
      </div>
      <div className="step">
       If the customer wants to resume business later, go back in and
       uncheck all the flags → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 4: XD07 --> */}
    <div className="card purple">
     <h2>
      <span className="badge">4</span> XD07 — Change Customer's Account
      Group
     </h2>
     <div className="callout purple">
      💡 Used when a customer's business role changes — e.g. Apollo
      Vijayawada was originally created as a
      <strong>Ship-to Party</strong> (account group 0002), but later becomes
      a <strong>Sold-to Party</strong> in its own right.
      <span className="tcode">XD07</span> moves the customer from one
      account group to another without recreating the record from scratch.
     </div>
    </div>

    {/* <!-- Section 5: fields deferred --> */}
    <div className="card">
     <h2>
      <span className="badge">📌</span> Note: Customer/Material Master
      Fields Are Discussed Later
     </h2>
     <p className="note-text">
      The detailed field-by-field walkthrough for Customer Master and
      Material Master is deliberately deferred until after the course covers
      a full sales process (Enquiry → Quotation → Sales Order → Delivery →
      Invoice) — that way, each field's actual effect can be seen in the
      resulting documents rather than explained in the abstract.
     </p>
    </div>

    {/* <!-- Section 6: Material Master intro --> */}
    <div className="card teal">
     <h2><span className="badge">5</span> Material Master — Introduction</h2>
     <div className="callout teal">
      💡 <strong>Material Master</strong> = the data of the product which is
      stored centrally and used in day-to-day transactions wherever it is
      required. Example content: specifications of the product.
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
        <td>Who Creates It</td>
        <td>Users</td>
       </tr>
       <tr>
        <td>Consultant's Role</td>
        <td>
         Train users on Material Master creation; define new information
         in Material Master fields
        </td>
       </tr>
      </tbody>
     </table>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Action</th>
        <th>T-Code</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Create</td>
        <td><span className="tcode">MM01</span></td>
       </tr>
       <tr>
        <td>Change</td>
        <td><span className="tcode">MM02</span></td>
       </tr>
       <tr>
        <td>Display</td>
        <td><span className="tcode">MM03</span></td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SAP Easy Access</span>
      <span className="sep">→</span> <span className="node">Logistics</span>
      <span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Master Data</span>
      <span className="sep">→</span> <span className="node">Products</span>
      <span className="sep">→</span> <span className="node">Material</span>
      <span className="sep">→</span>
      <span className="node">Other Material</span>
      <span className="sep">→</span>
      <span className="node">MM01 Create</span>
     </div>
    </div>

    {/* <!-- Section 7: Material types --> */}
    <div className="card orange">
     <h2><span className="badge">6</span> Material Types</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Material Type</th>
        <th>Definition</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>FERT</td>
        <td>Finished Product</td>
        <td>
         The final product the company manufactures and sells to
         customers
        </td>
       </tr>
       <tr>
        <td>HAWA</td>
        <td>Trading Goods</td>
        <td>
         A product purchased from a vendor and sold directly to customers
         (no manufacturing)
        </td>
       </tr>
       <tr>
        <td>ROH</td>
        <td>Raw Material</td>
        <td>
         A product used to manufacture finished goods (not dealt with
         directly in this course)
        </td>
       </tr>
       <tr>
        <td>HALB</td>
        <td>Semi-Finished</td>
        <td>
         A product still under the process of being manufactured into
         finished goods (not dealt with directly in this course)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout blue">
      💡 This course's practice focuses only on
      <strong>FERT (Finished Product)</strong> and
      <strong>HAWA (Trading Goods)</strong>, since those are the material
      types SD actually sells.
     </div>
    </div>

    {/* <!-- Section 8: Material code logic --> */}
    <div className="card gold">
     <h2><span className="badge">7</span> Material Code — 18-Digit Logic</h2>
     <div className="callout gold">
      💡 A material code is always <strong>18 digits</strong> (SAP's
      standard maximum length). The internal logic/segmentation of those 18
      digits is entirely client-specific.
     </div>
     <h3>Example Logic Used in This Course</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Segment</th>
        <th>Digits</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>4 digits</td>
        <td>Brand name (e.g. <code>VAXI</code>)</td>
       </tr>
       <tr>
        <td>2</td>
        <td>4 digits</td>
        <td>
         Age group (e.g. <code>1020</code> for the 10–20 age group;
         <code>0000</code> if not applicable)
        </td>
       </tr>
       <tr>
        <td>3</td>
        <td>4 digits (approx.)</td>
        <td>Dosage in mg (e.g. <code>0500</code> for 500 mg)</td>
       </tr>
       <tr>
        <td>4</td>
        <td>3 digits</td>
        <td>Packing (e.g. <code>BOT</code> for bottle)</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Example: a vaccine for the 10–20 age group, 500 mg, bottled →
      <code>VAXI102200500BOT</code>. This is a sample logic only — the
      actual segmentation and meaning differ from client to client.
     </p>
    </div>

    {/* <!-- Section 9: Creating material master --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">8</span> Creating Material Master — Step by
      Step
     </h2>
     <div className="callout blue">
      🔧 <strong>Display tip:</strong> if material type dropdowns don't show
      codes (only descriptions), go to
      <strong>Customize Local Layout</strong> (top-right icon) →
      <strong>Options</strong> → <strong>Interaction Design</strong> →
      <strong>Visualization 1</strong> → check
      <strong>"Show Keys in All Dropdown Lists" (sort by keys)</strong>
      → Apply.
     </div>
     <div className="stepper">
      <div className="step">
       <span className="tcode">MM01</span> → enter the material code,
       Industry Sector (<code>Pharmaceuticals</code> in this project),
       Material Type (<code>FERT</code>) → Enter.
      </div>
      <div className="step">
       Select the required <strong>views</strong>: Basic Data 1, Basic Data
       2, Sales Org Data 1, Sales Org Data 2, Sales: General/ Plant Data,
       Foreign Trade Export, Sales Text, Purchasing, Foreign Trade Import,
       Purchase Order Text, MRP 1–4, Work Scheduling, General Plant
       Data/Storage 1–2, Quality Management, Accounting 1–2, Costing 1–2.
      </div>
      <div className="step">
       Click <strong>Default Setting</strong> so this same view selection
       is remembered for future materials → Continue.
      </div>
      <div className="step">
       Mention Plant (<code>P100</code>), Storage Location (<code>P103</code>
       — FG storage location), Sales Organization (<code>P100</code>),
       Distribution Channel (<code>P1</code>).
      </div>
     </div>
    </div>

    {/* <!-- Section 10: Fiscal year / posting period error --> */}
    <div className="card red">
     <h2>
      <span className="badge">⚠️</span> First-Time Error: "Company Code Does
      Not Exist or Has Not Been Fully Maintained"
     </h2>
     <div className="callout red">
      ⚠️ This error appears the first time a material master is created for
      a new company code.
     </div>
     <h3>Step 1: Check the Fiscal Year Variant (OBY6)</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">OBY6</span> → select your company code
       (<code>P100</code>) → confirm the Fiscal Year Variant (<code>V3</code>
       in this project = April to March).
      </div>
      <div className="step">
       Work out the current <strong>period number</strong> based on that
       variant — e.g. under V3, April = period 1, May = period 2, and so
       on; under K4 (January–December), May = period 5.
      </div>
     </div>
     <h3>Step 2: Set the Posting Period (OMSY)</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">OMSY</span> → select your company code
       (<code>P100</code>).
      </div>
      <div className="step">
       Mention the current Year (e.g. <code>2026</code>) and Period (e.g.
       <code>02</code> for May, under V3) → Save.
      </div>
     </div>
     <div className="callout green">
      ✅ After this, material master creation proceeds without the error.
     </div>
    </div>

    {/* <!-- Section 11: Basic Data views --> */}
    <div className="card teal">
     <h2><span className="badge">9</span> Basic Data 1 &amp; 2</h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Example Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Base Unit of Measure</td>
        <td>BT (Bottle)</td>
       </tr>
       <tr>
        <td>Material Group</td>
        <td>001</td>
       </tr>
       <tr>
        <td>Division</td>
        <td>Your division (e.g. P1)</td>
       </tr>
       <tr>
        <td>Gross Weight</td>
        <td>1 kg</td>
       </tr>
       <tr>
        <td>Net Weight</td>
        <td>1 kg</td>
       </tr>
       <tr>
        <td>Description</td>
        <td>Free text, e.g. "Vaccine 10–20 age group, 500 mg, bottle"</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      Basic Data 2 is left blank in this practice example.
     </p>
    </div>

    {/* <!-- Section 12: Sales Org views --> */}
    <div className="card orange">
     <h2>
      <span className="badge">10</span> Sales Org 1 &amp; 2, and Sales:
      General/Plant
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Tab</th>
        <th>Field</th>
        <th>Example Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Sales Org 1</td>
        <td>Delivering Plant</td>
        <td>P100</td>
       </tr>
       <tr>
        <td>Sales Org 1</td>
        <td>Tax Classification</td>
        <td>1</td>
       </tr>
       <tr>
        <td>Sales Org 2</td>
        <td>Account Assignment Group</td>
        <td>03</td>
       </tr>
       <tr>
        <td>Sales: General/Plant</td>
        <td>Availability Check</td>
        <td>02</td>
       </tr>
       <tr>
        <td>Sales: General/Plant</td>
        <td>Transportation Group</td>
        <td>0001</td>
       </tr>
       <tr>
        <td>Sales: General/Plant</td>
        <td>Loading Group</td>
        <td>0001</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      Foreign Trade Export, Sales Text, Purchasing, Foreign Trade Import,
      and Purchase Order Text are all left blank for this practice material.
     </p>
    </div>

    {/* <!-- Section 13: MRP views --> */}
    <div className="card purple">
     <h2><span className="badge">11</span> MRP Views (1–4)</h2>
     <div className="stepper">
      <div className="step">
       <strong>MRP 1</strong> → mention MRP Type (e.g. <code>**</code>) →
       Enter.
      </div>
      <div className="step">
       The system prompts for <strong>MRP Controller</strong> with no
       values available yet ("No value selected, maintain entries") → click
       <strong>Yes</strong> → "Continue without specifying project" →
       select
       <strong>Materials Requirement Planning → Define MRP Controllers</strong>.
      </div>
      <div className="step">
       Copy the standard <code>1000</code> / <code>000</code> combination →
       change the plant to your own (<code>P100</code>, then repeat for
       <code>P200</code>) → Save.
      </div>
      <div className="step">
       Return to the material master screen, select the newly available MRP
       Controller entry → mention Lot Size (<code>EX</code>).
      </div>
      <div className="step">
       <strong>MRP 2</strong> → prompts for
       <strong>Schedule Margin Key</strong>, again with no values initially
       → "Continue without specifying project" → select
       <strong>Production Orders → Define Schedule Margin Key</strong>
       → Execute → Copy the <code>1000/000</code> combination → "Copy As"
       with your own plant (<code>P100</code>, then <code>P200</code>) →
       Save.
      </div>
      <div className="step">
       Return to the material, select the schedule margin key entry.
      </div>
      <div className="step">
       <strong>MRP 3</strong> → mention In-House Production time (<code>1</code>
       day).
      </div>
      <div className="step"><strong>MRP 4</strong> → left blank.</div>
     </div>
     <p className="note-text">
      Work Scheduling, General Plant Data/Storage 1, Storage 2, and Quality
      Management are all left blank in this practice example.
     </p>
    </div>

    {/* <!-- Section 14: Accounting views --> */}
    <div className="card gold">
     <h2>
      <span className="badge">12</span> Accounting 1 &amp; 2, Costing 1
      &amp; 2
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Tab</th>
        <th>Field</th>
        <th>Example Value</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Accounting 1</td>
        <td>Valuation Class</td>
        <td>7920</td>
       </tr>
       <tr>
        <td>Accounting 1</td>
        <td>Standard Price</td>
        <td>1000 (the cost of the product)</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      Accounting 2, Costing 1, and Costing 2 are left blank in this practice
      example → Save to complete the material master.
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
         What T-code tracks changes made to a customer master record?
        </td>
        <td>XD04</td>
       </tr>
       <tr>
        <td>Why would you block a customer, and what T-code is used?</td>
        <td>
         When the customer stops making payments; T-code XD05 — the same
         T-code is used to unblock once payment resumes
        </td>
       </tr>
       <tr>
        <td>
         Why would you flag a customer for deletion, and what T-code is
         used?
        </td>
        <td>
         When the customer discontinues doing business with the company;
         T-code XD06
        </td>
       </tr>
       <tr>
        <td>Can a customer be permanently deleted from the database?</td>
        <td>
         No — a customer can only be flagged for deletion, never
         permanently removed
        </td>
       </tr>
       <tr>
        <td>
         What T-code changes a customer from one account group to
         another?
        </td>
        <td>
         XD07 (e.g. converting a Ship-to Party into a Sold-to Party)
        </td>
       </tr>
       <tr>
        <td>What is Material Master?</td>
        <td>
         The data of the product, stored centrally and reused across
         day-to-day transactions — e.g. product specifications
        </td>
       </tr>
       <tr>
        <td>
         What are the T-codes to create, change, and display Material
         Master?
        </td>
        <td>MM01 (create), MM02 (change), MM03 (display)</td>
       </tr>
       <tr>
        <td>
         What are the four standard material types, and which two does
         this course focus on?
        </td>
        <td>
         FERT (Finished Product), HAWA (Trading Goods), ROH (Raw
         Material), HALB (Semi-Finished) — the course focuses on FERT and
         HAWA
        </td>
       </tr>
       <tr>
        <td>What is the standard length of a material code?</td>
        <td>18 digits (maximum)</td>
       </tr>
       <tr>
        <td>
         Why did material creation fail with "Company code does not exist
         or has not been fully maintained"?
        </td>
        <td>
         The fiscal year period hadn't been set for the company code;
         fixed via OBY6 (confirm Fiscal Year Variant) and OMSY (set Year
         and Period)
        </td>
       </tr>
       <tr>
        <td>What does Lot Size "EX" typically represent in MRP1?</td>
        <td>
         Lot-for-lot / exact order quantity sizing (a standard MRP
         lot-size indicator entered during practice)
        </td>
       </tr>
       <tr>
        <td>
         Where are MRP Controllers and Schedule Margin Keys defined the
         first time they're needed?
        </td>
        <td>
         Via the "maintain entries" prompt, which routes to Materials
         Requirement Planning → Define MRP Controllers, and Production
         Orders → Define Schedule Margin Key respectively — both copied
         from the standard 1000/000 combination for each plant
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
        <td><span className="tcode">XD04</span></td>
        <td>Track/view change history on a customer master record</td>
       </tr>
       <tr>
        <td><span className="tcode">XD05</span></td>
        <td>Block or unblock a customer (orders/deliveries)</td>
       </tr>
       <tr>
        <td><span className="tcode">XD06</span></td>
        <td>Flag a customer for deletion (or remove the flag)</td>
       </tr>
       <tr>
        <td><span className="tcode">XD07</span></td>
        <td>Change a customer from one account group to another</td>
       </tr>
       <tr>
        <td>
         <span className="tcode">MM01</span> /
         <span className="tcode">MM02</span> /
         <span className="tcode">MM03</span>
        </td>
        <td>Create / Change / Display Material Master</td>
       </tr>
       <tr>
        <td><span className="tcode">OBY6</span></td>
        <td>Confirm/set the Fiscal Year Variant for a company code</td>
       </tr>
       <tr>
        <td><span className="tcode">OMSY</span></td>
        <td>
         Set the current posting Year and Period for a company code
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
        <td>Material code length</td>
        <td>18 digits (standard maximum)</td>
       </tr>
       <tr>
        <td>Sample material code logic</td>
        <td>
         4 (brand) + 4 (age group) + dosage + 3 (packing) — e.g.
         VAXI102200500BOT
        </td>
       </tr>
       <tr>
        <td>Material types used</td>
        <td>FERT (Finished Product), HAWA (Trading Goods)</td>
       </tr>
       <tr>
        <td>Industry sector</td>
        <td>Pharmaceuticals</td>
       </tr>
       <tr>
        <td>
         Plant / Storage Location / Sales Org / Distribution Channel used
        </td>
        <td>P100 / P103 (FG storage) / P100 / P1</td>
       </tr>
       <tr>
        <td>Fiscal Year Variant</td>
        <td>
         V3 (April–March); period computed accordingly (e.g. May = period
         2)
        </td>
       </tr>
       <tr>
        <td>Basic Data 1 sample fields</td>
        <td>
         Base Unit of Measure BT, Material Group 001, Gross/Net Weight 1
         kg
        </td>
       </tr>
       <tr>
        <td>Sales Org 1/2 sample fields</td>
        <td>
         Delivering Plant P100, Tax Classification 1, Account Assignment
         Group 03
        </td>
       </tr>
       <tr>
        <td>Sales General/Plant sample fields</td>
        <td>
         Availability Check 02, Transportation Group 0001, Loading Group
         0001
        </td>
       </tr>
       <tr>
        <td>MRP1 sample fields</td>
        <td>MRP Type **, Lot Size EX</td>
       </tr>
       <tr>
        <td>MRP3 sample field</td>
        <td>In-House Production Time = 1 day</td>
       </tr>
       <tr>
        <td>Accounting 1 sample fields</td>
        <td>Valuation Class 7920, Standard Price 1000</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture closed out the Customer Master toolkit with four
      maintenance T-codes — <strong>XD04</strong> (track field-level change
      history), <strong>XD05</strong> (block/unblock a customer, typically
      for non-payment), <strong>XD06</strong> (flag a customer for deletion
      — never a true permanent delete), and <strong>XD07</strong> (move a
      customer between account groups, e.g. Ship-to Party → Sold-to Party).
      The lecture then introduced <strong>Material Master</strong>, SAP SD's
      second master data type: product data stored centrally, created by
      users via <strong>MM01/MM02/MM03</strong>. Material types were covered
      (FERT, HAWA, ROH, HALB), with the course focusing on FERT and HAWA,
      alongside the 18-digit material code and a sample client-specific
      coding logic. The hands-on portion walked through creating a full
      material master — selecting views, resolving the first-time "company
      code not maintained" error via <strong>OBY6</strong> and
      <strong>OMSY</strong>, and filling in Basic Data, Sales Org, Sales
      General/Plant, MRP (including on-the-fly configuration of MRP
      Controllers and Schedule Margin Keys), and Accounting data.
      Field-by-field explanations for both Customer Master and Material
      Master are deliberately deferred until after a full sales cycle
      (Enquiry through Invoice) has been practiced.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>XD04/05/06/07</strong> round out Customer Master
       maintenance: track changes, block/unblock, flag for deletion, and
       change account group
      </li>
      <li>
       A customer can <strong>never be permanently deleted</strong> — only
       flagged
      </li>
      <li>
       <strong>Material Master</strong> = product data, created by users
       via MM01/02/03; this course deals only with
       <strong>FERT</strong> and <strong>HAWA</strong> material types
      </li>
      <li>
       Material codes are always <strong>18 digits</strong>, with
       client-specific internal logic
      </li>
      <li>
       The first material created under a new company code typically needs
       <strong>OBY6 + OMSY</strong> to set the fiscal year period before
       proceeding
      </li>
      <li>
       Field-by-field detail for both master data types is saved for after
       the Enquiry-to-Invoice cycle is practiced
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> CMIR (Customer Material Info Record),
      Condition Master, and stock posting — then on to the
      Enquiry-to-Invoice sales process.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 21 Notes — Customer Master Maintenance T-Codes &amp; Material
    Master Creation (MM01) 🎓
   </p>
  </div>
 );
};

export default Material21;
