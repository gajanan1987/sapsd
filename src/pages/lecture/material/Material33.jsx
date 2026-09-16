const Material33 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-gold">
    <h1>
     🛠️ Lecture 33 — Live Troubleshooting Q&amp;A: Pricing, Posting Period,
     Delivery &amp; Account Determination Errors + End-to-End Practice
     Exercise
    </h1>
    <p>
     SAP SD | Resolving individual students' Enquiry-to-Invoice errors live,
     then a full independent practice exercise: Enterprise Structure →
     Account Groups → Master Data → Pricing → Enquiry to Invoice
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Housekeeping --> */}
    <div className="card">
     <h2><span className="badge">📌</span> Housekeeping Note</h2>
     <div className="callout red">
      ⚠️
      <strong
      >Last day for stock-posting / Enquiry-to-Invoice questions in live
       class.</strong
      >
      Any remaining errors of this kind can still be raised <em>today</em>;
      from the next class onward they will no longer be discussed live —
      only genuinely new errors not already covered in the notes should be
      raised going forward. Other running-topic doubts remain welcome as
      usual.
     </div>
     <div className="callout blue">
      💡 This session is a live, student-by-student troubleshooting Q&amp;A
      across several different systems, followed by a full independent
      <strong>end-to-end practice exercise</strong> that every student is
      expected to repeat from scratch — using a brand-new Enterprise
      Structure so the previous one stays untouched.
     </div>
    </div>

    {/* <!-- Section 1: Terms of Payment / Tax Classification defaults --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Recap — Defaulting Terms of Payment
      &amp; Tax Classification
     </h2>
     <div className="callout teal">
      💡 If <strong>Terms of Payment</strong> and
      <strong>Tax Classification</strong> aren't showing up automatically on
      the Sales Order, they simply haven't been maintained on the Customer
      Master yet.
     </div>
     <div className="stepper">
      <div className="step">
       Go to Customer Master →
       <strong>Sales Area Data → Billing</strong> tab → maintain Terms of
       Payment (e.g., <code>0001</code>) and the appropriate Tax
       Classification → Save.
      </div>
      <div className="step">
       Once maintained here, both fields default automatically into every
       future Sales Order for that customer — no need to enter them
       manually each time.
      </div>
     </div>
    </div>

    {/* <!-- Section 2: Missing condition record --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Troubleshooting — Net Value Showing 0
      (Missing Condition Record)
     </h2>
     <div className="callout orange">
      💡 If a Sales Order saves successfully but shows
      <strong>Net Value = 0</strong>, pricing has no price to pick up for
      that material.
     </div>
     <div className="stepper">
      <div className="step">
       In the order, go to the pricing screen → <strong>Analysis</strong> →
       this confirms the pricing procedure is assigned correctly, but the
       <strong>condition record is missing</strong>.
      </div>
      <div className="step">
       Go to <span className="tcode">VK11</span> → condition type
       <code>PR00</code> → maintain a price for the material (e.g.,
       WAXY1025 → 100; WAXY1026 → 100) → Save.
      </div>
      <div className="step">
       Recreate/re-check the order — Net Value now picks up correctly.
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Golden rule:</strong> every material used in practice must
      have <em>both</em> a maintained
      <strong>price (condition record)</strong> and posted
      <strong>stock</strong> — missing either one blocks the
      Enquiry-to-Invoice cycle at a different stage.
     </div>
    </div>

    {/* <!-- Section 3: PGI missing before invoice --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Troubleshooting — Invoice Fails
      Because Goods Issue Wasn't Posted
     </h2>
     <div className="callout purple">
      💡 If Invoice creation shows <strong>"incorrect"</strong> or
      <strong>"cannot be processed,"</strong> always check the log first.
     </div>
     <div className="stepper">
      <div className="step">
       In the invoice screen, go to <strong>Edit → Log</strong> — this
       shows the exact reason, e.g.,
       <em>"Goods issue has not been posted for the delivery."</em>
      </div>
      <div className="step">
       Go to <span className="tcode">VL02N</span> → mention the delivery
       number → check that all steps are done — if PGI is missing, click
       <strong>Post Goods Issue</strong>.
      </div>
      <div className="step">
       Retry Invoice creation — it now succeeds (though Net Value may still
       show 0 if the earlier pricing condition record issue hasn't been
       fixed too).
      </div>
     </div>
     <div className="callout blue">
      🔎 <strong>General debugging habit:</strong> whenever the system
      blocks an action with "incorrect" or "cannot be processed," go to
      <strong>Edit → Log</strong> before assuming anything — it names the
      exact missing step.
     </div>
    </div>

    {/* <!-- Section 4: Posting period error --> */}
    <div className="card red">
     <h2>
      <span className="badge">4</span> Troubleshooting — Posting Period
      Error During Stock Posting
     </h2>
     <div className="callout red">
      ⚠️
      <em
      >"Posting only possible in periods 202602, 202601 in company code
       [XX]."</em
      >
     </div>
     <p>
      In this instance, the cause was
      <strong>not the student's configuration</strong> — someone else on the
      shared server had deleted and re-created the
      <strong>Fiscal Year Variant</strong>, which reset the open posting
      periods. This is a backend/server issue outside the student's own
      settings, resolved by the administrator rather than the student.
     </p>
     <p className="note-text">
      📌 If this error appears and your own Fiscal Year Variant and Company
      Code assignment are correct, it may be a shared-server side effect
      rather than something in your own build — flag it rather than
      repeatedly re-checking your own configuration.
     </p>
    </div>

    {/* <!-- Section 5: Material type / plant combination --> */}
    <div className="card gold">
     <h2>
      <span className="badge">5</span> Troubleshooting — "Combination of
      Plant, Material Type Does Not Exist"
     </h2>
     <div className="callout gold">
      💡 This appears when a plant hasn't been enabled for
      <strong>quantity and value updating</strong> for that material type.
     </div>
     <div className="stepper">
      <div className="step">
       Go to the plant/material-type-updating configuration → find your
       plant → check the <strong>Quantity Updating</strong> and
       <strong>Value Updating</strong> boxes → Save.
      </div>
      <div className="step">
       Repeat the same check for the second plant if you have more than
       one.
      </div>
     </div>
     <h3>Follow-up Error — "Table T169P Does Not Exist"</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">SM30</span> → table
       <code>T169P</code> → Maintain.
      </div>
      <div className="step">
       Copy the standard entry (Company Code <code>1000</code>) → change
       Company Code to your own → Save.
      </div>
      <div className="step">
       Redo the stock posting (<span className="tcode">MB1C</span>,
       movement type <code>561</code>) — it now goes through.
      </div>
     </div>
    </div>

    {/* <!-- Section 6: Decimal/quantity display --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">6</span> Troubleshooting — Stock Quantity
      Displaying With Confusing Decimals
     </h2>
     <div className="callout indigo">
      💡 A stock quantity that was actually posted as
      <strong>1,00,000</strong> can display in
      <span className="tcode">MMBE</span> as <code>100.000.000</code> or
      similar — this is purely a
      <strong>decimal/thousand-separator display setting</strong>, not an
      incorrect posting.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <strong>System → User Profile → Own Data → Defaults</strong>
       tab.
      </div>
      <div className="step">
       Change the <strong>Decimal Notation</strong> setting (e.g., to the
       "X 1,234,567.89" format) → Save.
      </div>
      <div className="step">
       <strong>Log out and log back in</strong> for the new display format
       to take effect.
      </div>
      <div className="step">
       Re-check <span className="tcode">MMBE</span> — the same stock value
       now displays correctly (e.g., 1,00,000.000).
      </div>
     </div>
    </div>

    {/* <!-- Section 7: Delivery pick/storage errors --> */}
    <div className="card cyan">
     <h2>
      <span className="badge">7</span> Troubleshooting — Delivery Errors:
      Pick Quantity &amp; Storage Location
     </h2>
     <div className="callout cyan">
      💡 Two related delivery errors were reproduced live to show exactly
      what causes them:
      <em>"Delivery has not yet been put away/picked completely"</em> and
      <em>"Storage location is not defined for delivery item."</em>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Mistake</th>
        <th>Resulting Error</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         Pick Quantity entered is less than the Delivery Quantity (e.g.,
         picking only 50 of 100)
        </td>
        <td>"Delivery has not yet been put away or picked completely"</td>
       </tr>
       <tr>
        <td>
         Storage Location left blank, or a storage location where the
         material has no stock/master record is entered
        </td>
        <td>
         "Storage location is not defined for delivery item" (can appear
         together with the above if pick quantity is also short)
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>These are user mistakes, not system errors:</strong> the
      <strong>Pick Quantity must exactly equal the Delivery Quantity</strong
      >, and the
      <strong
      >Storage Location entered during picking must be one where stock
       actually exists</strong
      >
      for that material (i.e., extending the material there isn't enough —
      stock has to be posted there too, as covered earlier).
     </div>
     <div className="callout">
      📖 <strong>Extended Warehouse Management (EWM) note:</strong> EWM is a
      separate SAP module. If EWM is active in a system (common in S/4HANA
      practice systems), the delivery screen may additionally ask for an
      <strong>EWM storage location</strong>, distinct from the standard
      storage location field — this is expected behavior when EWM
      integration is switched on, not an error.
     </div>
    </div>

    {/* <!-- Section 8: Account determination recap --> */}
    <div className="card green">
     <h2>
      <span className="badge">8</span> Recap — Account Determination Errors
      (PGI &amp; Invoice)
     </h2>
     <p className="note-text">
      📌 These errors were fully covered in earlier lectures — the guidance
      here is simply to <strong>refer back to those notes</strong> rather
      than re-raising them as new questions.
     </p>
     <h3>
      PGI Stage — "Account determination for [Chart of Accounts] GBB VAX/BSA
      ... not possible"
     </h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">OMWD</span> → go to your Plant
       (Valuation Area) → mention
       <strong>Valuation Grouping Code = 0001</strong> → Save.
      </div>
      <div className="step">
       Redo the process <strong>from the start</strong> — stock posting,
       delivery, PGI — since the earlier failed PGI attempt needs to be
       re-run after the fix, not just resumed.
      </div>
     </div>
     <h3>Invoice Stage — "No Accounting Document Generated"</h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VF02</span> (change mode of the
       invoice) → click the <strong>Flag</strong> symbol to see the account
       determination error.
      </div>
      <div className="step">
       Go to <span className="tcode">VKOA</span> → double-click table
       <code>004</code> → New Entries → Application <code>V</code>,
       Condition Type <code>KOFI</code>, Chart of Accounts, Sales
       Organization (e.g., P100), G/L Account (e.g., <code>800000</code>) →
       Enter → Save.
      </div>
      <div className="step">
       Go back to <span className="tcode">VF02</span> → click Flag again —
       if a number-range error appears next, go to
       <span className="tcode">FBN1</span> → maintain interval
       <code>14</code> with a fresh number range → Save.
      </div>
      <div className="step">
       Return to <span className="tcode">VF02</span> → click Flag once more
       — the invoice now releases cleanly with a visible accounting
       document.
      </div>
     </div>
    </div>

    {/* <!-- Section 9: End-to-end practice exercise --> */}
    <div className="card pink">
     <h2>
      <span className="badge">📋</span> Today's Practice Exercise — Full
      End-to-End Cycle From Scratch
     </h2>
     <div className="callout pink">
      🎯
      <strong>Everyone must independently repeat the entire build</strong>
      using a <strong>brand-new Enterprise Structure</strong> — the existing
      one from earlier in the course should be left untouched.
     </div>
     <div className="stepper">
      <div className="step">
       <strong>Create a new Enterprise Structure</strong> (Sales
       Organization, Distribution Channel, Division, Plant, Storage
       Locations, Shipping Points, etc.) — do not disturb the previous one.
      </div>
      <div className="step">
       <strong>Create new Account Groups</strong> (your own, not the ones
       used earlier).
      </div>
      <div className="step">
       Complete <strong>Partner Determination</strong> for the new account
       group.
      </div>
      <div className="step">
       <strong>Create a Customer Master</strong> using your own new account
       group.
      </div>
      <div className="step"><strong>Create a Material Master</strong>.</div>
      <div className="step">
       Complete <strong>Shipping Point Determination</strong> (<span
        className="tcode"
       >OVL2</span
       >).
      </div>
      <div className="step">
       <strong>Create a new Pricing Procedure</strong>
       (<span className="tcode">V/08</span>) and
       <strong>assign it</strong> (<span className="tcode">OVKK</span>).
      </div>
      <div className="step">
       <strong>Maintain Condition Records</strong>
       (<span className="tcode">VK11</span>).
      </div>
      <div className="step">
       Do <strong>Stock Posting</strong> (<span className="tcode"
       >MB1C</span
       >).
      </div>
      <div className="step">
       Run the full
       <strong
       >Enquiry → Quotation → Sales Order → Delivery → Invoice</strong
       >
       cycle, solving any errors that appear by referring back to the notes
       first.
      </div>
     </div>
     <div className="callout blue">
      🔁
      <strong>Why repeat this build, and why so often?</strong> Practicing
      once and moving on doesn't build lasting recall. This same end-to-end
      build should be redone from scratch roughly
      <strong>every 15–30 days</strong> throughout the course (and
      afterward) so the sequence and its common errors stay genuinely
      familiar for interviews and real projects — not just remembered for a
      day.
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
         How do you avoid manually entering Terms of Payment and Tax
         Classification on every sales order?
        </td>
        <td>
         Maintain them on the Customer Master's Sales Area Data → Billing
         tab; they then default automatically into every sales order for
         that customer
        </td>
       </tr>
       <tr>
        <td>Why would a saved Sales Order show Net Value = 0?</td>
        <td>
         The condition record for that material is missing; check via
         pricing Analysis, then maintain it with VK11 (condition type
         PR00)
        </td>
       </tr>
       <tr>
        <td>
         What are the two things every material needs before it can flow
         through the full cycle?
        </td>
        <td>A maintained price (condition record) and posted stock</td>
       </tr>
       <tr>
        <td>
         What should you check first whenever the system says "incorrect"
         or "cannot be processed"?
        </td>
        <td>Edit → Log — it names the exact missing step or error</td>
       </tr>
       <tr>
        <td>
         What does "Goods issue has not been posted for the delivery"
         mean, and how is it fixed?
        </td>
        <td>
         PGI hasn't been done yet; go to VL02N, open the delivery, and
         post Goods Issue before retrying the invoice
        </td>
       </tr>
       <tr>
        <td>
         What causes "Combination of plant/material type does not exist"
         during stock posting, and how is it fixed?
        </td>
        <td>
         Quantity/Value Updating isn't enabled for that plant/material
         type combination; enable it, and if table T169P is missing,
         maintain it via SM30 by copying the standard company code entry
        </td>
       </tr>
       <tr>
        <td>
         Why might a posted stock quantity display with confusing extra
         decimals/separators?
        </td>
        <td>
         It's a personal Decimal Notation display setting (System → User
         Profile → Own Data → Defaults), not an incorrect posting —
         change the format and log out/in to see it correctly
        </td>
       </tr>
       <tr>
        <td>
         What causes "Delivery has not yet been put away or picked
         completely"?
        </td>
        <td>
         The Pick Quantity entered during picking is less than the
         Delivery Quantity — they must match exactly
        </td>
       </tr>
       <tr>
        <td>
         What causes "Storage location is not defined for delivery item"?
        </td>
        <td>
         The storage location entered during picking is blank or doesn't
         have stock/a material record for that material — the correct
         storage location (where stock was actually posted) must be
         entered
        </td>
       </tr>
       <tr>
        <td>What is EWM, and when does it affect the delivery screen?</td>
        <td>
         Extended Warehouse Management — a separate SAP module; if active
         (common in S/4HANA systems), the delivery screen will also ask
         for an EWM storage location in addition to the standard one
        </td>
       </tr>
       <tr>
        <td>
         What is the fix for the recurring "GBB VAX/BSA account
         determination not possible" error during PGI?
        </td>
        <td>
         OMWD → go to the plant (valuation area) → set Valuation Grouping
         Code to 0001 → Save → redo stock posting, delivery, and PGI from
         the start
        </td>
       </tr>
       <tr>
        <td>
         What is the sequence to fix "No accounting document generated"
         at the invoice stage?
        </td>
        <td>
         VF02 → Flag to see the error → VKOA (table 004, Application V,
         Condition Type KOFI, Chart of Accounts, Sales Org, G/L Account)
         → Save → VF02 → Flag again → if a number range error appears,
         fix via FBN1 → VF02 → Flag once more to release
        </td>
       </tr>
       <tr>
        <td>
         What is the full sequence for today's end-to-end practice
         exercise?
        </td>
        <td>
         New Enterprise Structure → new Account Groups → Partner
         Determination → Customer Master → Material Master → Shipping
         Point Determination (OVL2) → Pricing Procedure (V/08) +
         assignment (OVKK) → Condition Records (VK11) → Stock Posting
         (MB1C) → Enquiry → Quotation → Sales Order → Delivery → Invoice
        </td>
       </tr>
       <tr>
        <td>
         Why should the full build be repeated periodically rather than
         practiced once?
        </td>
        <td>
         Practicing once doesn't build lasting recall; repeating the
         entire sequence roughly every 15–30 days keeps the process and
         its common errors genuinely familiar for interviews and real
         projects
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
        <td><span className="tcode">VK11</span></td>
        <td>
         Maintain condition records (e.g., PR00 price) — fixes Net Value
         = 0
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VL02N</span></td>
        <td>
         Change Delivery — used to post PGI when it was missed before
         invoicing
        </td>
       </tr>
       <tr>
        <td><span className="tcode">SM30</span></td>
        <td>Maintain table views directly — used here for table T169P</td>
       </tr>
       <tr>
        <td><span className="tcode">MB1C</span></td>
        <td>Stock posting (movement type 561 used in these examples)</td>
       </tr>
       <tr>
        <td><span className="tcode">MMBE</span></td>
        <td>Stock Overview — used to verify posted stock quantities</td>
       </tr>
       <tr>
        <td><span className="tcode">OMWD</span></td>
        <td>
         Maintain Valuation Grouping Code per plant — fixes GBB VAX/BSA
         account determination errors during PGI
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VF02</span></td>
        <td>
         Change Invoice — used to release the invoice via the Flag symbol
         after fixing account determination
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VKOA</span></td>
        <td>
         Assign G/L accounts for account determination (table 004,
         Application V, Condition Type KOFI)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">FBN1</span></td>
        <td>
         Maintain number range intervals (e.g., interval 14) for
         accounting documents
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OVL2</span></td>
        <td>
         Shipping Point Determination — part of today's end-to-end
         practice exercise
        </td>
       </tr>
       <tr>
        <td><span className="tcode">V/08</span></td>
        <td>Create/maintain Pricing Procedure</td>
       </tr>
       <tr>
        <td><span className="tcode">OVKK</span></td>
        <td>
         Assign Pricing Procedure (to Sales Area + Customer Pricing
         Procedure + Document Pricing Procedure)
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
        <td>Terms of Payment default location</td>
        <td>Customer Master → Sales Area Data → Billing tab</td>
       </tr>
       <tr>
        <td>Condition record example (PR00)</td>
        <td>WAXY1025 → 100, WAXY1026 → 100</td>
       </tr>
       <tr>
        <td>Table T169P fix</td>
        <td>
         SM30 → maintain → copy Company Code 1000 entry → change to own
         Company Code
        </td>
       </tr>
       <tr>
        <td>Decimal Notation setting location</td>
        <td>
         System → User Profile → Own Data → Defaults tab (requires log
         out/log in to take effect)
        </td>
       </tr>
       <tr>
        <td>Pick Quantity rule</td>
        <td>
         Must exactly equal Delivery Quantity, or picking is treated as
         incomplete
        </td>
       </tr>
       <tr>
        <td>Valuation Grouping Code fix (OMWD)</td>
        <td>0001, set per plant (valuation area)</td>
       </tr>
       <tr>
        <td>VKOA account determination entry</td>
        <td>
         Table 004, Application V, Condition Type KOFI, Sales Org P100,
         G/L Account 800000 (example)
        </td>
       </tr>
       <tr>
        <td>End-to-end practice sequence</td>
        <td>
         Enterprise Structure → Account Groups → Partner Determination →
         Customer Master → Material Master → OVL2 → V/08 → OVKK → VK11 →
         MB1C → Enquiry-to-Invoice
        </td>
       </tr>
       <tr>
        <td>Recommended practice frequency</td>
        <td>Repeat the full end-to-end build every 15–30 days</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This was a live, one-on-one troubleshooting session working through
      real errors on different students' systems — the last day such
      Enquiry-to-Invoice/stock-posting errors would be entertained in class
      going forward. Issues resolved included: defaulting Terms of Payment
      and Tax Classification from the Customer Master, fixing a zero Net
      Value caused by a missing
      <strong>VK11</strong> condition record, releasing an invoice blocked
      by a missed <strong>PGI</strong>, a shared-server posting-period issue
      unrelated to the student's own configuration, a plant/material-type
      quantity-value-updating gap (plus a follow-up
      <strong>T169P</strong> table fix via <strong>SM30</strong>), a purely
      cosmetic decimal-display confusion in stock quantities (fixed via User
      Profile → Own Data → Defaults), and two related delivery errors caused
      by mismatched pick quantities and incorrect storage locations — with a
      note on how <strong>EWM</strong> integration adds an extra
      storage-location field where active. Familiar account determination
      fixes (<strong>OMWD</strong>, <strong>VKOA</strong>,
      <strong>FBN1</strong>) were recapped with an explicit instruction to
      consult prior notes rather than re-raise them. The session closed with
      a mandatory <strong>end-to-end practice exercise</strong>: build a
      brand-new Enterprise Structure, Account Groups, Partner Determination,
      Customer and Material Masters, Shipping Point Determination, a new
      Pricing Procedure and its assignment, Condition Records, Stock
      Posting, and the full Enquiry-to- Invoice cycle — with guidance to
      repeat this entire exercise every 15–30 days for lasting recall.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       Whenever the system blocks an action with "incorrect" or "cannot be
       processed," <strong>check Edit → Log first</strong>
       — it names the exact cause
      </li>
      <li>
       Every material needs
       <strong>both a price (condition record) and posted stock</strong>
       before it can flow through a sales document
      </li>
      <li>
       <strong>Pick Quantity must equal Delivery Quantity</strong>, and the
       <strong>Storage Location must actually hold stock</strong> for that
       material — both are common, easily-avoided delivery mistakes
      </li>
      <li>
       Known account-determination fixes (OMWD, VKOA, FBN1) should be
       referenced from prior notes rather than re-asked as new errors from
       the next class onward
      </li>
      <li>
       The
       <strong
       >full end-to-end build should be repeated periodically</strong
       >
       (every 15–30 days) — one-time practice doesn't build lasting recall
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> tomorrow is a holiday (Ramzan); the
      course continues on Friday. Students should use the break to complete
      today's end-to-end practice exercise and post any genuinely new errors
      (not already covered in the notes) to the group for guidance.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 33 Notes — Live Troubleshooting Q&amp;A: Pricing, Posting Period,
    Delivery &amp; Account Determination Errors + End-to-End Practice Exercise
    🎓
   </p>
  </div>
 );
};

export default Material33;
