const Material24 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-green">
    <h1>
     🧾 Lecture 24 — Finishing Stock Posting &amp; Starting the Sales Process
    </h1>
    <p>
     SAP SD | The remaining GL account and tolerance-limit errors, then the
     5-document sales cycle begins with Enquiry and the 3-step Pricing
     Procedure Determination fix
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Stock posting was mostly working by the end of Lecture 23, but
      several students hit additional first-time errors overnight. This
      lecture resolves those, confirms stock across every plant, then
      finally begins the <strong>Enquiry-to-Invoice</strong>
      sales process.
     </div>
     <div className="callout red">
      ⚠️ <strong>Scope reminder:</strong> every error encountered during
      stock posting belongs to <strong>MM or FI</strong>, not SD — SD
      consultants only troubleshoot them here so the sales cycle can be
      practiced end to end.
     </div>
    </div>

    {/* <!-- Section 1: GL account errors --> */}
    <div className="card orange">
     <h2>
      <span className="badge">1</span> Error: "GL Account [Number] Does Not
      Exist in Company Code [X]"
     </h2>
     <div className="callout orange">
      💡 This happens when a required G/L (General Ledger) account (e.g.
      <code>759</code>, <code>359</code>) hasn't yet been created under your
      own company code.
     </div>
     <h3>Fix — T-code FS00</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">FS00</span>. (First-time screen tip:
       if you land on an unfamiliar layout, go to
       <strong>Settings → Hierarchy Display</strong> → check
       <strong>"Do Not Display Navigation Tree"</strong> → Continue.)
      </div>
      <div className="step">
       Mention the GL account number (e.g. <code>759</code>) and the
       standard reference company code (<code>1000</code>) → click the
       <strong>Block</strong> icon → uncheck any checked block settings →
       Save.
      </div>
      <div className="step">
       Go back to FS00 → mention the same GL account number and your own
       company code (e.g. <code>P100</code>) → click
       <strong>"With Template"</strong> → mention the same GL account as
       reference, with reference company code <code>1000</code> → Enter →
       Continue → Save.
      </div>
      <div className="step">
       Repeat this same process for any other missing GL account number the
       error message names (e.g. <code>359</code>).
      </div>
     </div>
     <p className="note-text">
      📌 If a GL account was already created earlier (e.g. by another
      student on a shared server), no error will appear for that number —
      this fix is only needed the first time a given GL account is missing
      under your company code.
     </p>
    </div>

    {/* <!-- Section 2: Tolerance limits error --> */}
    <div className="card red">
     <h2>
      <span className="badge">2</span> Error: "Maintain Tolerance Limits for
      Tolerance Group [X]"
     </h2>
     <div className="stepper">
      <div className="step">
       Double-click the error message itself — it links directly to
       <strong>Define Tolerance Limits</strong>.
      </div>
      <div className="step">
       Click <strong>Set Tolerance Limits</strong> to open the
       configuration screen.
      </div>
      <div className="step">
       Select the standard <code>1000</code> + tolerance-group combination
       → <strong>Copy As</strong> → change the Company Code to your own
       (e.g. <code>W200</code>) → Enter → Save.
      </div>
      <div className="step">
       Re-run stock posting — this error should now be cleared.
      </div>
     </div>
    </div>

    {/* <!-- Section 3: Number range interval per company code --> */}
    <div className="card gold">
     <h2>
      <span className="badge">3</span> Error: "Interval 49 Does Not Exist
      for Object RF_BLG[Company Code]"
     </h2>
     <div className="callout">
      💡 Same fix as Lecture 23, but this time for a
      <strong>different company code</strong> (e.g. <code>W200</code>) —
      number range intervals are maintained separately per company code, so
      this step must be repeated for each one you use.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">FBN1</span> → mention your Company
       Code → <strong>Change Intervals</strong>.
      </div>
      <div className="step">
       Add interval <code>49</code>, Year <code>2026</code>, Number range
       <code>1</code> to <code>9999</code> → Save.
      </div>
      <div className="step">
       Re-run <span className="tcode">MB1C</span> — stock posting now
       completes successfully.
      </div>
     </div>
    </div>

    {/* <!-- Section 4: Extending across all plants --> */}
    <div className="card teal">
     <h2>
      <span className="badge">4</span> Don't Forget: Post (and Extend) Stock
      for Every Plant
     </h2>
     <div className="callout blue">
      🔍 <strong>Verification:</strong> use T-code
      <span className="tcode">MMBE</span> (Stock Overview) → mention the
      material → Execute → confirm stock shows correctly for every
      plant/storage location combination you use.
     </div>
     <div className="callout red">
      ⚠️ A common gap: stock posting was only done for one plant, but the
      material was never <strong>extended</strong> (via MM01 + Copy From, as
      covered in Lecture 22) to the second plant. Both the material
      extension and the stock posting must be done for every plant the
      material needs to be sold from.
     </div>
     <p className="note-text">
      📌 If you hit any error not covered here, post it in the batch group
      for guidance — exact error text can vary slightly system to system.
     </p>
    </div>

    {/* <!-- Section 5: Sales process intro --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">5</span> Starting the Sales Process — Enquiry
      to Invoice
     </h2>
     <div className="callout indigo">
      💡 The standard SAP SD sales process runs:
      <strong>Enquiry → Quotation → Sales Order → Delivery → Invoice</strong>.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Document</th>
        <th>Type Code</th>
        <th>T-Code (Create)</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Enquiry</td>
        <td>IN</td>
        <td><span className="tcode">VA11</span></td>
       </tr>
       <tr>
        <td>Quotation</td>
        <td>QT</td>
        <td><span className="tcode">VA21</span></td>
       </tr>
       <tr>
        <td>Sales Order</td>
        <td>OR</td>
        <td><span className="tcode">VA01</span></td>
       </tr>
       <tr>
        <td>Delivery</td>
        <td>—</td>
        <td><span className="tcode">VL01N</span></td>
       </tr>
       <tr>
        <td>Invoice</td>
        <td>—</td>
        <td><span className="tcode">VF01</span></td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 The full unit on Business Processes (returns, credit memo, debit
      memo, reorder, etc.) comes later — this course first establishes the
      standard, straightforward Enquiry-to-Invoice flow.
     </p>
    </div>

    {/* <!-- Section 6: Creating Enquiry --> */}
    <div className="card orange">
     <h2>
      <span className="badge">6</span> Creating an Enquiry — T-code VA11
     </h2>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VA11</span> → Enquiry Type
       <code>IN</code> → mention Sales Area (Sales Org, Distribution
       Channel, Division) → Enter.
      </div>
      <div className="step">
       Mention the Sold-to Party (customer). To search, press F4 → select
       <strong>"Customers per Sales Group"</strong> → mention Sales
       Organization, Distribution Channel, Division → Continue → select the
       customer.
      </div>
      <div className="step">
       Mention the Material. To search, click
       <strong>"Sales Material by Description"</strong> → mention Sales
       Organization and Distribution Channel → Enter → select the material.
      </div>
      <div className="step">
       Mention Quantity (e.g. <code>100</code>) → Enter.
      </div>
     </div>
    </div>

    {/* <!-- Section 7: Pricing procedure error --> */}
    <div className="card red">
     <h2>
      <span className="badge">⚠️</span> Error: "No Pricing Procedure Could
      Be Determined"
     </h2>
     <div className="callout red">
      ⚠️ This appears because the system doesn't yet know which pricing
      procedure to apply for this sales area — it must be configured in
      three steps.
     </div>

     <h3>Step 1 — Define the Pricing Procedure (V/08)</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">V/08</span> → New Entries → define
       your own procedure (e.g. <code>P401</code>, description "Alchem
       Pricing Procedure").
      </div>
      <div className="step">
       Select the procedure → double-click <strong>Control</strong> → New
       Entries → Step <code>10</code>, Condition Type <code>PR00</code>,
       Requirement <code>2</code>, Account Key <code>ERL</code> → Enter →
       Save.
      </div>
     </div>

     <h3>Step 2 — Pricing Procedure Determination (OVKK)</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">OVKK</span> → New Entries → mention
       your Sales Area, Document Pricing Procedure, Customer Pricing
       Procedure (e.g. <code>1</code>), and the Pricing Procedure
       (<code>P401</code>) → Save.
      </div>
      <div className="step">
       <strong>Repeat for every sales area</strong> you have (e.g. all 6
       divisions) — this determination is maintained per sales area and
       doesn't automatically apply elsewhere.
      </div>
     </div>

     <h3>Step 3 — Maintain Condition Records (VK11)</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VK11</span> → Condition Type
       <code>PR00</code> → Enter.
      </div>
      <div className="step">
       Select the material key combination available on your system (e.g.
       "Material" or "Material with Release Status") → Continue.
      </div>
      <div className="step">
       Mention Sales Organization, Distribution Channel, and each Material
       with its price (e.g. <code>3000</code> per material) → Save.
      </div>
     </div>

     <div className="callout green">
      ✅ With all three steps done, re-create the Enquiry — pricing is now
      determined successfully.
     </div>
    </div>

    {/* <!-- Section 8: Completing the enquiry --> */}
    <div className="card teal">
     <h2>
      <span className="badge">7</span> Completing and Saving the Enquiry
     </h2>
     <div className="stepper">
      <div className="step">
       <span className="tcode">VA11</span> → Enquiry Type <code>IN</code>
       → mention Sales Area, Customer, Material, Quantity → Enter.
      </div>
      <div className="step">
       Go to <strong>Edit → Incompletion Log</strong> — if the document is
       complete (no missing mandatory fields), it allows saving.
      </div>
      <div className="step">Save the Enquiry.</div>
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
         What causes "GL account [X] does not exist in company code [Y],"
         and how is it fixed?
        </td>
        <td>
         The GL account hasn't been created under your company code yet;
         fixed via FS00 → create it "With Template," copying from the
         reference GL account under company code 1000
        </td>
       </tr>
       <tr>
        <td>How is a "Maintain tolerance limits" error resolved?</td>
        <td>
         Double-click the error to reach Define/Set Tolerance Limits,
         then copy the standard 1000 combination to your own company code
        </td>
       </tr>
       <tr>
        <td>
         Are number range intervals (like interval 49 for RF_BLG) shared
         across company codes?
        </td>
        <td>
         No — they're maintained per company code, so the FBN1 fix must
         be repeated separately for each company code used
        </td>
       </tr>
       <tr>
        <td>
         What T-code verifies posted stock, and what should you check?
        </td>
        <td>
         MMBE — confirm stock shows for every plant/storage location
         combination the material actually needs, and that the material
         has been extended to each plant first
        </td>
       </tr>
       <tr>
        <td>
         What are the five documents in the standard SAP SD sales
         process, and their T-codes?
        </td>
        <td>
         Enquiry (VA11), Quotation (VA21), Sales Order (VA01), Delivery
         (VL01N), Invoice (VF01)
        </td>
       </tr>
       <tr>
        <td>
         What are the document type codes for Enquiry, Quotation, and
         Sales Order?
        </td>
        <td>IN, QT, OR respectively</td>
       </tr>
       <tr>
        <td>
         How do you search for a customer while creating an Enquiry?
        </td>
        <td>
         Press F4 → "Customers per Sales Group" → mention Sales
         Organization, Distribution Channel, Division
        </td>
       </tr>
       <tr>
        <td>
         How do you search for a material while creating an Enquiry?
        </td>
        <td>
         Click "Sales Material by Description" → mention Sales
         Organization and Distribution Channel
        </td>
       </tr>
       <tr>
        <td>
         What causes "No pricing procedure could be determined," and how
         many steps fix it?
        </td>
        <td>
         The pricing procedure hasn't been defined, assigned to the sales
         area, or given condition records; three steps: V/08 (define
         procedure), OVKK (assign to sales area), VK11 (maintain
         condition records)
        </td>
       </tr>
       <tr>
        <td>
         In V/08, what does Step 10 / Condition Type PR00 / Requirement 2
         / Account Key ERL represent?
        </td>
        <td>
         The base-price line within the custom pricing procedure's
         control table — it tells the system to apply the PR00 condition
         at that step, under that requirement, posting to account key ERL
        </td>
       </tr>
       <tr>
        <td>Does OVKK need to be repeated for every sales area?</td>
        <td>
         Yes — pricing procedure determination is maintained per sales
         area and does not automatically apply to others
        </td>
       </tr>
       <tr>
        <td>
         How do you check whether an Enquiry document is complete before
         saving?
        </td>
        <td>Go to Edit → Incompletion Log</td>
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
        <td><span className="tcode">FS00</span></td>
        <td>
         Create/edit a G/L account (used to fix missing GL account errors
         during stock posting)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">FBN1</span></td>
        <td>
         Maintain number range intervals per company code (fix for the
         RF_BLG error)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MMBE</span></td>
        <td>
         Stock Overview — verify posted stock per material/plant/storage
         location
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA11</span></td>
        <td>Create Enquiry</td>
       </tr>
       <tr>
        <td><span className="tcode">VA21</span></td>
        <td>Create Quotation</td>
       </tr>
       <tr>
        <td><span className="tcode">VA01</span></td>
        <td>Create Sales Order</td>
       </tr>
       <tr>
        <td><span className="tcode">VL01N</span></td>
        <td>Create Delivery</td>
       </tr>
       <tr>
        <td><span className="tcode">VF01</span></td>
        <td>Create Invoice</td>
       </tr>
       <tr>
        <td><span className="tcode">V/08</span></td>
        <td>Define a Pricing Procedure and its control steps</td>
       </tr>
       <tr>
        <td><span className="tcode">OVKK</span></td>
        <td>
         Assign a Pricing Procedure to a Sales Area (Pricing Procedure
         Determination)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VK11</span></td>
        <td>Maintain condition records (e.g. base price via PR00)</td>
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
        <td>GL accounts fixed via FS00</td>
        <td>
         759, 359 (examples), copied "With Template" from reference
         company code 1000
        </td>
       </tr>
       <tr>
        <td>FBN1 interval (repeated per company code)</td>
        <td>Interval 49, Year 2026, Number range 1–9999</td>
       </tr>
       <tr>
        <td>Custom Pricing Procedure</td>
        <td>P401, "Alchem Pricing Procedure"</td>
       </tr>
       <tr>
        <td>Pricing Procedure control step</td>
        <td>
         Step 10, Condition Type PR00, Requirement 2, Account Key ERL
        </td>
       </tr>
       <tr>
        <td>OVKK assignment</td>
        <td>
         Per Sales Area: Document Pricing Procedure + Customer Pricing
         Procedure (1) → P401
        </td>
       </tr>
       <tr>
        <td>Sales process documents</td>
        <td>
         Enquiry (IN/VA11), Quotation (QT/VA21), Sales Order (OR/VA01),
         Delivery (VL01N), Invoice (VF01)
        </td>
       </tr>
       <tr>
        <td>Sample Enquiry data</td>
        <td>
         Customer 100640, Material VAXI102200500BOT, Quantity 100, Price
         3000
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture closed out the remaining stock-posting error chain —
      missing GL accounts (fixed via <strong>FS00</strong>, copying from the
      reference company code), missing tolerance limits (fixed by following
      the error message directly to Set Tolerance Limits), and
      per-company-code number range intervals (repeating the
      <strong>FBN1</strong> fix from Lecture 23 for each company code in
      use) — while reinforcing that stock must be posted (and the material
      extended) for <strong>every plant</strong>, verified via
      <strong>MMBE</strong>. The lecture then began the actual sales
      process:
      <strong>Enquiry → Quotation → Sales Order → Delivery → Invoice</strong>,
      starting with Enquiry creation (VA11). Creating the first Enquiry
      surfaced the classic
      <strong>"No pricing procedure could be determined"</strong>
      error, resolved through a three-step configuration:
      <strong>V/08</strong> (define the pricing procedure and its control
      steps), <strong>OVKK</strong> (assign that procedure to each sales
      area), and <strong>VK11</strong> (maintain the actual price condition
      records). With pricing resolved, the Enquiry was completed and saved
      after checking the Incompletion Log.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       Stock-posting errors (GL accounts, tolerance limits, number ranges)
       are <strong>MM/FI territory</strong>, not SD — but must be cleared
       to proceed with practice
      </li>
      <li>
       Number range intervals (FBN1) are
       <strong>per company code</strong> — repeat the fix for each one
      </li>
      <li>
       Always verify stock via <strong>MMBE</strong>, and confirm the
       material has been <strong>extended</strong> to every plant before
       posting stock there
      </li>
      <li>
       The sales process is
       <strong>Enquiry → Quotation → Sales Order → Delivery → Invoice</strong>
      </li>
      <li>
       <strong>"No pricing procedure could be determined"</strong> is fixed
       in three steps: <strong>V/08</strong> (define),
       <strong>OVKK</strong> (assign per sales area),
       <strong>VK11</strong> (maintain price records)
      </li>
      <li>
       Use <strong>Edit → Incompletion Log</strong> to confirm a document
       is ready to save
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Continuing the sales process —
      Quotation and the remaining documents.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 24 Notes — Finishing Stock Posting &amp; Starting the Sales
    Process 🎓
   </p>
  </div>
 );
};

export default Material24;
