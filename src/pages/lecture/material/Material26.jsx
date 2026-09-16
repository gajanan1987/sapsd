const Material26 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-red">
    <h1>
     🔙 Lecture 26 — Error Troubleshooting Q&amp;A &amp; The Cancellation
     Process
    </h1>
    <p>
     SAP SD | Resolving the "Balancing field Profit Center not filled" error,
     then Invoice Cancellation, Reverse PGI, Delivery Deletion, and Sales
     Order Cancellation
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 The full Enquiry-to-Invoice cycle is working. This session opens
      with a live Q&amp;A resolving remaining stock-posting and invoicing
      errors across different students' systems, then introduces the
      <strong>Cancellation Process</strong> — what to do when a mistake is
      found, or a customer cancels, after an order has already progressed to
      delivery or invoice.
     </div>
    </div>

    {/* <!-- Section 1: Recap of VKOA/FBN1 --> */}
    <div className="card teal">
     <h2>
      <span className="badge">↩️</span> Recap: Invoice "Error in Account
      Determination" &amp; Number Range Fixes
     </h2>
     <p className="note-text">
      These were demonstrated again live for students still hitting them —
      same fixes as Lecture 25:
     </p>
     <div className="stepper">
      <div className="step">
       <strong>Error in account determination</strong> → T-code
       <span className="tcode">VKOA</span> → double-click table
       <code>004</code> → New Entries → Application <code>V</code>,
       Condition Type <code>KOFI</code>, Chart of Accounts (e.g.
       <code>INT</code>), Sales Organization, G/L Account (e.g.
       <code>800000</code>) → Save.
      </div>
      <div className="step">
       <strong
       >"Interval 14 does not exist for object [RF_BELEG + company
        code]"</strong
       >
       → T-code <span className="tcode">FBN1</span>
       → mention Company Code → Change Intervals → Insert interval
       <code>14</code>, Year <code>2026</code>, a number range not
       overlapping earlier intervals (e.g.
       <code>140</code>–<code>149</code>) → Save.
      </div>
      <div className="step">
       Return to <span className="tcode">VF02</span> → click Flag again —
       the invoice releases, and the Accounting tab shows the entry with no
       further issues.
      </div>
     </div>
    </div>

    {/* <!-- Section 2: Profit center error --> */}
    <div className="card orange">
     <h2>
      <span className="badge">1</span> New Error: "Balancing Field 'Profit
      Center' in Item 001 Not Filled"
     </h2>
     <div className="callout orange">
      💡 This appears during stock posting on some systems, and needs up to
      three escalating fixes depending on how the system is configured.
     </div>

     <h3>Fix 1 — Uncheck the Mandatory Field Setting</h3>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Financial Accounting (New)</span
      ><span className="sep">→</span>
      <span className="node">General Ledger Accounting (New)</span
      ><span className="sep">→</span>
      <span className="node">Business Transactions</span
      ><span className="sep">→</span>
      <span className="node">Document Splitting</span
      ><span className="sep">→</span>
      <span className="node"
      >Define Document Splitting Characteristics for General Ledger
       Accounting</span
      >
     </div>
     <div className="stepper">
      <div className="step">
       Find the relevant characteristic (e.g. Profit Center) → uncheck its
       <strong>Mandatory Field</strong> setting only — do not uncheck the
       characteristic itself → Save.
      </div>
     </div>

     <h3>
      Fix 2 — Deactivate Document Splitting (If Fix 1 Doesn't Resolve It)
     </h3>
     <div className="stepper">
      <div className="step">
       Same path family → go to
       <strong>Activate Document Splitting</strong> instead → uncheck
       <strong>Document Splitting</strong> → Save.
      </div>
     </div>

     <h3>Fix 3 — Make the Field Optional via SE38 (If Still Unresolved)</h3>
     <div className="stepper">
      <div className="step">
       Go to T-code <span className="tcode">SE38</span> → mention program
       <code>RM07CUFA</code> → Execute.
      </div>
      <div className="step">
       Mention Movement Type (e.g. <code>561</code>), your Company Code,
       and the relevant G/L Account (e.g. <code>759</code>) → Execute.
      </div>
      <div className="step">
       Scroll to the field causing the error (e.g. Profit Center) — each
       field shows two symbols: one under the
       <strong>Movement Type</strong> column and one under the
       <strong>Account</strong> column.
      </div>
      <div className="step">
       Click the symbol under Movement Type → double-click
       <strong>Additional Account Assignments</strong> → set
       <strong>Profit Center</strong> to <strong>Optional</strong> → Save.
      </div>
      <div className="step">
       Repeat the same for the symbol under the Account column → set it to
       Optional as well → Save → go back and refresh.
      </div>
      <div className="step">
       If a <em>different</em> field triggers a similar error next (e.g.
       Segment, Cost Center), repeat this exact process for that field —
       search for it within the first few tabs, set it Optional under both
       symbols, and Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 3: Cancellation process intro --> */}
    <div className="card purple">
     <h2>
      <span className="badge">2</span> The Cancellation Process — Why It's
      Needed
     </h2>
     <div className="callout purple">
      💡 If a mistake is discovered after Delivery and Invoice have already
      been created — or if the customer cancels the order — the process must
      be <strong>reversed step by step</strong>, working backward from the
      Invoice.
     </div>
     <div className="flow">
      <div className="flow-step flow-red">1. Cancel Invoice</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-orange">2. Reverse PGI</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-gold">3. Delete Delivery</div>
      <div className="arrow">➜</div>
      <div className="flow-step flow-purple">4. Cancel Sales Order</div>
     </div>
    </div>

    {/* <!-- Section 4: Step 1 invoice cancellation --> */}
    <div className="card red">
     <h2>
      <span className="badge">Step 1</span> Invoice Cancellation — T-code
      VF11
     </h2>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VF11</span> → mention the Invoice
       number to cancel → Enter → Save.
      </div>
      <div className="step">
       Verify via <span className="tcode">VF02</span> (change mode of the
       invoice) → click <strong>Document Flow</strong> — the full chain
       (Enquiry → Quotation → Sales Order → Delivery → Invoice → Invoice
       Cancellation) is visible.
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Accounting effect of Invoice Cancellation:</strong> the
      system generates a reversing accounting document — Revenue Account
      <strong>Debit</strong> (posting key <code>40</code>), to Customer
      Account <strong>Credit</strong> (posting key <code>11</code>) —
      exactly the opposite of the original invoice entry.
     </div>
    </div>

    {/* <!-- Section 5: Step 2 reverse PGI --> */}
    <div className="card orange">
     <h2>
      <span className="badge">Step 2</span> Reverse Post Goods Issue —
      T-code VL09
     </h2>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VL09</span> → mention Shipping Point
       and Delivery number → Execute.
      </div>
      <div className="step">
       Select the line → click <strong>Reverse</strong> → confirm "Reverse
       Goods Movement" → Continue.
      </div>
      <div className="step">
       If a date-related error appears (e.g. system date mismatch), use the
       <strong>Define Date</strong> option to mention today's date →
       Continue.
      </div>
     </div>
     <div className="callout red">
      ⚠️ <strong>Effects of Reverse PGI:</strong>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Effect</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>
         Stock is <strong>added back</strong> to Unrestricted Stock
        </td>
       </tr>
       <tr>
        <td>2</td>
        <td>
         An Inventory Accounting Document is generated: Inventory Account
         <strong>Debit</strong> (posting key <code>89</code>), to Cost of
         Goods Sold Account <strong>Credit</strong> (posting key
         <code>91</code>) — the reverse of the original PGI entry
        </td>
       </tr>
      </tbody>
     </table>
     <div className="stepper">
      <div className="step">
       Verify stock is restored via <span className="tcode">MMBE</span>.
      </div>
      <div className="step">
       View the reversing accounting document via
       <span className="tcode">VL02N</span> → Document Flow → select "Goods
       Delivery Reverse" (or similar) → Display Document → Accounting
       Documents.
      </div>
     </div>
     <div className="callout blue">
      💡 <strong>No partial cancellation:</strong> if 100 units were
      delivered, you cannot cancel just 50 of them — the entire delivered
      quantity must be reversed. If only part of the quantity is actually
      needed after cancellation, cancel the full amount and then create a
      fresh order for the reduced quantity.
     </div>
    </div>

    {/* <!-- Section 6: Step 3 delete delivery --> */}
    <div className="card gold">
     <h2><span className="badge">Step 3</span> Delete the Delivery</h2>
     <div className="stepper">
      <div className="step">
       Go to change mode of the delivery → menu
       <strong>Outbound Delivery → Delete</strong>.
      </div>
      <div className="step">
       Confirm <strong>"Do you really want to delete?"</strong> → Yes →
       confirm the follow-up pop-up → Delete.
      </div>
     </div>
    </div>

    {/* <!-- Section 7: Step 4 cancel sales order --> */}
    <div className="card purple">
     <h2>
      <span className="badge">Step 4</span> Cancel the Sales Order — Reason
      for Rejection
     </h2>
     <div className="callout red">
      ⚠️
      <strong
      >Deleting the delivery does not automatically cancel the sales
       order</strong
      >
      — if you check the order afterward, it will still show as
      <strong>open</strong>. This step must be done separately.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VA02</span> → open the
       <strong>Reason for Rejection</strong> tab.
      </div>
      <div className="step">
       Mention a reason (e.g. "Cancellation required by customer," "Order
       lost") → Save.
      </div>
     </div>
    </div>

    {/* <!-- Section 8: Consolidated summary table --> */}
    <div className="card">
     <h2>
      <span className="badge">📋</span> Cancellation Process — Consolidated
      Reference
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Step</th>
        <th>T-Code</th>
        <th>Accounting Effect</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1. Cancel Invoice</td>
        <td>VF11</td>
        <td>Revenue Account Dr. (40) / Customer Account Cr. (11)</td>
       </tr>
       <tr>
        <td>2. Reverse PGI</td>
        <td>VL09</td>
        <td>
         Inventory Account Dr. (89) / COGS Account Cr. (91); stock
         restored to Unrestricted
        </td>
       </tr>
       <tr>
        <td>3. Delete Delivery</td>
        <td>Outbound Delivery → Delete (in change mode)</td>
        <td>—</td>
       </tr>
       <tr>
        <td>4. Cancel Sales Order</td>
        <td>VA02 → Reason for Rejection</td>
        <td>—</td>
       </tr>
      </tbody>
     </table>
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
         What causes "Balancing field Profit Center in item 001 not
         filled," and what are the escalating fixes?
        </td>
        <td>
         Document splitting requires a mandatory characteristic that
         hasn't been assigned; fix in order: (1) uncheck Mandatory Field
         for that characteristic under Define Document Splitting
         Characteristics, (2) deactivate Document Splitting entirely if
         needed, (3) use SE38 with program RM07CUFA to set the field
         Optional under Additional Account Assignments
        </td>
       </tr>
       <tr>
        <td>What is the T-code to cancel an Invoice?</td>
        <td>VF11</td>
       </tr>
       <tr>
        <td>What accounting entry does Invoice Cancellation generate?</td>
        <td>
         Revenue Account Debit, to Customer Account Credit — the reverse
         of the original invoice entry
        </td>
       </tr>
       <tr>
        <td>
         What is the T-code to reverse a Post Goods Issue, and what does
         "PGI" stand for?
        </td>
        <td>VL09; PGI = Post Goods Issue</td>
       </tr>
       <tr>
        <td>What are the two effects of Reverse PGI?</td>
        <td>
         Stock is added back to Unrestricted Stock, and a reversing
         Inventory Accounting Document is generated (Inventory Account
         Debit, to Cost of Goods Sold Account Credit)
        </td>
       </tr>
       <tr>
        <td>
         Can you cancel only part of a delivered quantity (e.g. 50 out of
         100)?
        </td>
        <td>
         No — the full delivered quantity must be reversed; create a new
         order afterward if only a reduced quantity is needed
        </td>
       </tr>
       <tr>
        <td>How do you delete a delivery after Reverse PGI?</td>
        <td>
         Go to change mode of the delivery → Outbound Delivery → Delete →
         confirm
        </td>
       </tr>
       <tr>
        <td>
         Does deleting the delivery automatically cancel the sales order?
        </td>
        <td>
         No — the sales order still shows as open and must be separately
         cancelled
        </td>
       </tr>
       <tr>
        <td>How do you cancel a sales order?</td>
        <td>VA02 → Reason for Rejection tab → mention a reason → Save</td>
       </tr>
       <tr>
        <td>What is the correct order of the four cancellation steps?</td>
        <td>
         Cancel Invoice (VF11) → Reverse PGI (VL09) → Delete Delivery →
         Cancel Sales Order (VA02, Reason for Rejection)
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
        <td><span className="tcode">SE38</span></td>
        <td>
         Run ABAP programs directly (used here with RM07CUFA to fix
         field-status errors during stock posting)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VF11</span></td>
        <td>Cancel an Invoice</td>
       </tr>
       <tr>
        <td><span className="tcode">VL09</span></td>
        <td>Reverse a Post Goods Issue (Reverse PGI)</td>
       </tr>
       <tr>
        <td><span className="tcode">VL02N</span></td>
        <td>
         Change Delivery — used here to view the Document Flow and
         reversing accounting documents, and to delete the delivery
        </td>
       </tr>
       <tr>
        <td><span className="tcode">VA02</span></td>
        <td>
         Change Sales Order — used here to cancel via Reason for
         Rejection
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MMBE</span></td>
        <td>
         Stock Overview — verify stock is restored after Reverse PGI
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
        <td>Document Splitting Characteristics path</td>
        <td>
         SPRO → Financial Accounting (New) → General Ledger Accounting
         (New) → Business Transactions → Document Splitting → Define
         Document Splitting Characteristics for General Ledger Accounting
        </td>
       </tr>
       <tr>
        <td>Profit Center field fix (SE38)</td>
        <td>
         Program RM07CUFA → Movement Type + Account symbols → Additional
         Account Assignments → Optional
        </td>
       </tr>
       <tr>
        <td>Invoice Cancellation entry</td>
        <td>
         Revenue Account Dr. (posting key 40) / Customer Account Cr.
         (posting key 11)
        </td>
       </tr>
       <tr>
        <td>Reverse PGI entry</td>
        <td>
         Inventory Account Dr. (posting key 89) / COGS Account Cr.
         (posting key 91)
        </td>
       </tr>
       <tr>
        <td>Cancellation process order</td>
        <td>
         VF11 → VL09 → Delete Delivery → VA02 (Reason for Rejection)
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture opened with live troubleshooting across different
      students' systems, revisiting the VKOA/FBN1 invoice fixes and
      introducing a new one:
      <strong>"Balancing field Profit Center not filled"</strong> during
      stock posting, resolved through an escalating set of three fixes —
      relaxing the mandatory characteristic, deactivating document
      splitting, or directly setting the field Optional via
      <strong>SE38</strong>/<code>RM07CUFA</code>. The core topic was the
      <strong>Cancellation Process</strong>, needed whenever a mistake is
      found or a customer cancels after Delivery/Invoice already exist. It
      runs in a strict backward order: <strong>Cancel Invoice</strong> (VF11
      — reversing Revenue Dr./ Customer Cr.),
      <strong>Reverse PGI</strong> (VL09 — restoring stock and reversing
      Inventory Dr./COGS Cr.), <strong>Delete Delivery</strong>, and finally
      <strong>Cancel the Sales Order</strong> (VA02, Reason for Rejection —
      which does <em>not</em> happen automatically just from deleting the
      delivery). A partial cancellation of quantity is never possible —
      cancellation is always all-or-nothing, with a fresh order created
      afterward if a reduced quantity is still needed.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       "Balancing field Profit Center not filled" has
       <strong>three escalating fixes</strong> — try each in order until it
       clears
      </li>
      <li>
       Cancellation always runs <strong>backward</strong>: Invoice →
       Delivery (Reverse PGI + Delete) → Sales Order
      </li>
      <li>
       Every cancellation step has a
       <strong>reversing accounting entry</strong> — exactly opposite the
       original posting
      </li>
      <li>
       <strong
       >Deleting a delivery never auto-cancels the sales order</strong
       >
       — that's always a separate, explicit step
      </li>
      <li>
       Cancellation is <strong>all-or-nothing</strong> for a given quantity
       — no partial reversal
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Back to the detailed fields in
      Customer Master.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 26 Notes — Error Troubleshooting Q&amp;A &amp; The Cancellation
    Process 🎓
   </p>
  </div>
 );
};

export default Material26;
