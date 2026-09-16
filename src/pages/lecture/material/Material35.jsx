const Material35 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-pink">
    <h1>
     💰 Lecture 35 — Fields in Customer Master: Incoterms, Terms of Payment
     &amp; Baseline Date Calculation, Cash Discount (SKTO)
    </h1>
    <p>
     SAP SD | Shipper/receiver responsibility for freight, how the
     credit-period clock actually starts ticking, and configuring + receiving
     an early-payment cash discount end-to-end
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Pre-class troubleshooting --> */}
    <div className="card">
     <h2>
      <span className="badge">📌</span> Pre-Class Troubleshooting —
      "External Division Not Completed" &amp; Ship-to Party Confusion
     </h2>
     <div className="callout blue">
      💡 A student building a brand-new Enterprise Structure (own practice
      batch, Sales Organization <code>E1</code>) hit
      <em>"external division was not completed"</em> while creating an
      Enquiry, even though a customer had already been created against the
      same division.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Mistake</th>
        <th>Fix</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>
         Tried to create the order/enquiry against a customer number that
         was actually the <strong>Ship-to Party</strong>, not the Sold-to
         Party
        </td>
        <td>
         Sales documents can only be created against the
         <strong>Sold-to Party</strong> — switched to the correct
         customer number
        </td>
       </tr>
       <tr>
        <td>
         Root cause of the division error: the
         <strong>Division</strong> maintained on the
         <strong>Material Master</strong> (via
         <span className="tcode">MM02</span>) did not match the division
         used in the Sales Area
        </td>
        <td>
         Corrected the Division field on Material Master to the right
         value → error cleared
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Two lessons in one:</strong> (1) always double-check which
      partner function a customer number actually holds before creating a
      sales document against it — only Sold-to Party works; (2) an "external
      division not completed" style error often traces back to a mismatched
      <strong>Division</strong> on the Material Master, not the Customer
      Master.
     </div>
    </div>

    {/* <!-- Section 1: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class ended with Invoicing List Dates. Today covers Incoterms,
      then a deep dive into Terms of Payment — specifically how the
      <strong>Baseline Date</strong> is calculated — and Cash Discount,
      demonstrated end-to-end from pricing configuration through actually
      receiving a discounted payment.
     </div>
    </div>

    {/* <!-- Section 2: Incoterms --> */}
    <div className="card teal">
     <h2>
      <span className="badge">46</span> Billing Documents Tab — Incoterms
     </h2>
     <div className="callout teal">
      💡 <strong>Incoterms</strong> (International Commercial Terms) is an
      agreement between the <strong>shipper</strong> and the
      <strong>receiver</strong> for the successful completion of deliveries.
      It specifies who is responsible for
      <strong>freight and insurance</strong> — the customer, or the company.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Incoterm</th>
        <th>Stands For</th>
        <th>
         Who Is Responsible for Freight &amp; Insurance (Standard
         Definition)
        </th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>CIF</td>
        <td>Cost, Insurance, Freight</td>
        <td>
         Seller / Company — arranges and pays freight and insurance up to
         the destination port
        </td>
       </tr>
       <tr>
        <td>FOB</td>
        <td>Free On Board</td>
        <td>
         Buyer / Customer — responsible for freight and insurance once
         goods are loaded onto the vessel
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Correction:</strong> in class, the responsibility for CIF
      and FOB was stated the opposite way round (customer responsible under
      CIF, company responsible under FOB). The standard Incoterms
      definitions are as shown in the table above — under
      <strong>CIF</strong>, the <strong>company (seller)</strong> bears
      freight and insurance cost; under <strong>FOB</strong>, that
      responsibility passes to the <strong>customer (buyer)</strong> once
      goods are on board. The core SAP concept taught — that Incoterms
      exists to specify who bears freight and insurance cost — is correct;
      only the CIF/FOB assignment needed correcting.
     </div>
    </div>

    {/* <!-- Section 3: Terms of Payment recap + creation path --> */}
    <div className="card orange">
     <h2>
      <span className="badge">15</span> Recap &amp; Configuration — Terms of
      Payment
     </h2>
     <div className="callout orange">
      💡 <strong>Terms of Payment</strong> (also called
      <strong>credit period</strong>) is an agreement between the company
      and the customer for the number of days given to make payment — first
      introduced in Lecture 30. Today covers how it's actually configured.
     </div>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Sales and Distribution</span
      ><span className="sep">→</span>
      <span className="node">Master Data</span
      ><span className="sep">→</span>
      <span className="node">Business Partners</span
      ><span className="sep">→</span> <span className="node">Customers</span
      ><span className="sep">→</span>
      <span className="node">Billing Document</span
      ><span className="sep">→</span>
      <span className="node">Define Terms of Payment</span>
     </div>
     <div className="callout red">
      ⚠️
      <strong>The usual F1 → customizing-key shortcut does not work</strong>
      for this particular field — the customizing key is disabled here. This
      is one of the few fields where the SPRO path must be navigated
      manually rather than jumped to directly.
     </div>
     <p className="note-text">
      New Entries → Payment Terms <code>P030</code>, description "30 Days
      Credit Period" → Save.
     </p>
    </div>

    {/* <!-- Section 4: Baseline Date --> */}
    <div className="card purple">
     <h2>
      <span className="badge">47</span> Terms of Payment — Baseline Date
      Calculation
     </h2>
     <div className="callout purple">
      💡 <strong>Baseline Date</strong> is the date from which the system
      starts calculating the credit period (and therefore the payment
      <strong>due date</strong>).
     </div>
     <div className="callout blue">
      📅
      <strong
      >In the standard/normal scenario, the Invoice Date is the Baseline
       Date.</strong
      >
      This applies when both the <strong>Fixed Day</strong> and
      <strong>Additional Months</strong>
      fields are left blank — which, per the instructor, covers
      <strong>99% of real-time scenarios</strong>.
     </div>

     <h3>
      Worked Example 1 — Normal Scenario (Fixed Day &amp; Additional Months
      Both Blank)
     </h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Event</th>
        <th>Date</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Order created</td>
        <td>20th May 2026</td>
       </tr>
       <tr>
        <td>Delivery created</td>
        <td>25th May 2026</td>
       </tr>
       <tr>
        <td>Invoice created (= Baseline Date)</td>
        <td>2nd June 2026</td>
       </tr>
       <tr>
        <td>Terms of Payment</td>
        <td>30 days</td>
       </tr>
       <tr>
        <td><strong>Due Date</strong></td>
        <td><strong>2nd July 2026</strong></td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Note: order date and delivery date play no role in the calculation
      — only the Invoice Date (as Baseline Date) plus the credit period days
      matter.
     </p>

     <h3>Worked Example 2 — Fixed Day = 25</h3>
     <div className="callout gold">
      🎯 If a <strong>Fixed Day</strong> value is mentioned (e.g.,
      <code>25</code>),
      <strong>every month that date is taken as the Baseline Date</strong>,
      irrespective of the actual Invoice Date.
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
        <td>Invoice created on</td>
        <td>2nd June 2026 (actual system date)</td>
       </tr>
       <tr>
        <td>Fixed Day</td>
        <td>25</td>
       </tr>
       <tr>
        <td><strong>Baseline Date (taken)</strong></td>
        <td>
         <strong>25th June 2026</strong> — not the actual invoice date
        </td>
       </tr>
       <tr>
        <td>Terms of Payment</td>
        <td>30 days</td>
       </tr>
       <tr>
        <td><strong>Due Date</strong></td>
        <td><strong>25th July 2026</strong></td>
       </tr>
      </tbody>
     </table>

     <h3>Worked Example 3 — Additional Months = 1</h3>
     <div className="callout gold">
      🎯 If <strong>Additional Months</strong> is mentioned (e.g.,
      <code>1</code>), the Baseline Date is
      <strong>postponed by that many months from the invoice date</strong>.
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
        <td>Invoice created on</td>
        <td>2nd June 2026</td>
       </tr>
       <tr>
        <td>Additional Months</td>
        <td>1</td>
       </tr>
       <tr>
        <td><strong>Baseline Date (taken)</strong></td>
        <td>
         <strong>2nd July 2026</strong> (invoice date pushed forward by 1
         month)
        </td>
       </tr>
       <tr>
        <td>Terms of Payment</td>
        <td>30 days</td>
       </tr>
       <tr>
        <td><strong>Due Date</strong></td>
        <td><strong>1st August 2026</strong></td>
       </tr>
      </tbody>
     </table>

     <h3>
      Worked Example 4 — Fixed Day = 25 AND Additional Months = 1 (Both
      Together)
     </h3>
     <div className="callout red">
      ⚠️ <strong>How both combine:</strong> the system first applies the
      <strong>Fixed Day</strong> to the invoice's own month, then
      <strong>postpones that result by the Additional Months</strong>.
     </div>
     <div className="stepper">
      <div className="step">
       Invoice created 2nd June 2026 → Fixed Day 25 applied first →
       intermediate baseline = 25th June 2026 (the fixed day within the
       invoice's own month).
      </div>
      <div className="step">
       Additional Months = 1 then postpones that intermediate date by one
       month → final Baseline Date = <strong>25th July 2026</strong>.
      </div>
      <div className="step">
       Terms of Payment 30 days from 25th July → Due Date =
       <strong>24th August 2026</strong>.
      </div>
     </div>
     <div className="callout blue">
      💡 <strong>Real-time note:</strong> per the instructor, it's rare for
      a client to require <em>both</em> Fixed Day and Additional Months
      together — typically a client will have at most one of these two
      special requirements, if any at all, since the plain "Invoice Date =
      Baseline Date" default already covers the vast majority of real
      projects.
     </div>
    </div>

    {/* <!-- Section 5: Cash Discount --> */}
    <div className="card red">
     <h2>
      <span className="badge">48</span> Terms of Payment — Cash Discount
      (SKTO)
     </h2>
     <div className="callout red">
      💡 <strong>Cash Discount</strong> is a discount offered to the
      customer if they make payment
      <strong>well before the due date</strong>.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Terms of Payment is 30 days net,
      but if the customer pays within <strong>5 days</strong> of the invoice
      date, they receive a <strong>2% cash discount</strong>. This is
      configured as an explanation line directly on the Terms of Payment
      record: "Within 5 days: 2% cash discount; within 30 days: total due
      (net)."
     </div>

     <h3>
      Making the Cash Discount Visible in Pricing — SKTO Condition Type
     </h3>
     <div className="callout gold">
      🎯 By default, the cash discount percentage does
      <strong
      >not appear anywhere on the sales order's pricing conditions</strong
      >
      — the <strong>SKTO</strong> condition type has to be added to the
      Pricing Procedure to see it.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">V/08</span> → select your Pricing
       Procedure → double-click <strong>Control</strong>.
      </div>
      <div className="step">
       Go to New Entries → Step <code>20</code> (after the existing Step
       10, PR00) → Condition Type <code>SKTO</code>.
      </div>
      <div className="step">
       Set <strong>From Reference Step</strong> to Step 10 (so it
       calculates a percentage of the base price) → check
       <strong>Statistics</strong> → Requirement <code>9</code> → (Alt
       Calculation Type / Base Type) <code>11</code> → Enter → Save.
      </div>
     </div>
     <div className="callout">
      📖 <strong>Why "Statistics" is checked:</strong> SKTO is marked
      <strong>statistical</strong> because the system doesn't yet know
      whether the customer will actually pay early — so the 2% value (e.g.,
      ₹6,000 on a ₹3,00,000 order) is shown for reference only and is
      <strong>not deducted from the order value</strong>. It only gets
      applied for real if and when the customer actually pays within the
      discount window.
     </div>
     <p className="note-text">
      📌 The rest of the flow (Delivery, PGI, Invoice) proceeds exactly as
      usual — the SKTO line simply now shows up as a statistical condition
      alongside PR00 in the order's Conditions tab.
     </p>
    </div>

    {/* <!-- Section 6: Receiving payment with cash discount --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">49</span> Receiving Customer Payment With Cash
      Discount — T-code F-26
     </h2>
     <div className="callout indigo">
      💡 <strong>F-26</strong> (Incoming Payments — Fast Entry) is used to
      record the customer's actual payment, applying the cash discount if
      paid within the discount window.
     </div>
     <h3>
      Worked Example — Customer 100658, Order Value ₹3,00,000, SKTO 2%
     </h3>
     <div className="stepper">
      <div className="step">
       Create Order for Customer 100658 → check Conditions tab shows SKTO
       2% (statistical) → Save. Create Delivery, PGI, and Invoice as
       normal.
      </div>
      <div className="step">
       Go to <span className="tcode">F-26</span> → mention Company Code →
       mention Bank Account (G/L, e.g. <code>41000</code>) → mention
       today's date → Enter.
      </div>
      <div className="step">
       Mention the Customer (100658) and the
       <strong>actual amount paid</strong> — since the customer pays
       promptly and is aware of the 2% cash discount, they pay
       <strong>₹2,94,000</strong> (₹3,00,000 − ₹6,000 cash discount), not
       the full ₹3,00,000.
      </div>
     </div>

     <h3>Troubleshooting Errors During F-26</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Error</th>
        <th>Fix</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>"No amount tolerance range entered for company code [XX]"</td>
        <td>
         Double-click the error →
         <strong>Define Tolerance Groups for Employees</strong> → copy
         the standard entry for Company Code <code>1000</code> (leave the
         Group field blank) → change Company Code to your own (e.g.,
         <code>P100</code>) → Save
        </td>
       </tr>
       <tr>
        <td>"The entry P100 is missing in table T043G"</td>
        <td>
         Go to <span className="tcode">SM30</span> → table
         <code>T043G</code> → Create → copy the Company Code
         <code>1000</code> entry (Group field blank) → change Company
         Code to your own (e.g., <code>P100</code>) → Save
        </td>
       </tr>
      </tbody>
     </table>
     <div className="stepper">
      <div className="step">
       Re-run <span className="tcode">F-26</span>, mention the customer and
       amount (₹2,94,000) again — the system now automatically shows the 2%
       cash discount (₹6,000) alongside the full gross amount (₹3,00,000).
      </div>
      <div className="step">
       Double-click the ₹3,00,000 gross line → confirm the resulting "not
       assigned" amount is <strong>0</strong> (fully matched after the
       discount) → Save.
      </div>
     </div>
     <div className="callout">
      📌 This entire payment-receipt and cash-discount-application step
      (F-26 and its tolerance-group configuration) is an
      <strong>FI (Finance) activity</strong> — SD's role ends once the
      invoice with the SKTO statistical condition is created; FI then
      applies the actual discount when payment is recorded.
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
        <td>What is Incoterms?</td>
        <td>
         International Commercial Terms — an agreement between shipper
         and receiver for the successful completion of deliveries,
         specifying who is responsible for freight and insurance
        </td>
       </tr>
       <tr>
        <td>
         What do CIF and FOB stand for, and who bears freight/insurance
         under each?
        </td>
        <td>
         CIF = Cost, Insurance, Freight (seller/company responsible up to
         destination port); FOB = Free On Board (buyer/customer
         responsible once goods are loaded onto the vessel)
        </td>
       </tr>
       <tr>
        <td>
         What is the SPRO path to define Terms of Payment, and why is
         that notable?
        </td>
        <td>
         SPRO → Sales and Distribution → Master Data → Business Partners
         → Customers → Billing Document → Define Terms of Payment;
         notable because the usual F1 → customizing-key shortcut is
         disabled for this field, so the path must be navigated manually
        </td>
       </tr>
       <tr>
        <td>What is Baseline Date?</td>
        <td>
         The date from which the system starts calculating the credit
         period (and therefore the due date)
        </td>
       </tr>
       <tr>
        <td>
         In the normal/default scenario, what is the Baseline Date?
        </td>
        <td>
         The Invoice Date — this is the case whenever Fixed Day and
         Additional Months are both left blank, which covers the vast
         majority of real scenarios
        </td>
       </tr>
       <tr>
        <td>What does the "Fixed Day" field do?</td>
        <td>
         Forces a specific date of the month to always be taken as the
         Baseline Date, regardless of the actual invoice date
        </td>
       </tr>
       <tr>
        <td>What does the "Additional Months" field do?</td>
        <td>
         Postpones the Baseline Date by that many months from the invoice
         date
        </td>
       </tr>
       <tr>
        <td>
         If both Fixed Day and Additional Months are maintained, how do
         they combine?
        </td>
        <td>
         The Fixed Day is applied first, within the invoice's own month;
         the resulting date is then postponed by the number of Additional
         Months
        </td>
       </tr>
       <tr>
        <td>What is Cash Discount?</td>
        <td>
         A discount offered to the customer for making payment well
         before the due date (e.g., 2% if paid within 5 days, against a
         30-day net credit period)
        </td>
       </tr>
       <tr>
        <td>
         Why doesn't the cash discount show up on the order by default,
         and how do you make it visible?
        </td>
        <td>
         The Pricing Procedure needs the SKTO condition type added (via
         V/08) referencing the base price step, checked as Statistics,
         with Requirement 9 and Base Type 11
        </td>
       </tr>
       <tr>
        <td>Why is SKTO marked as a "Statistical" condition?</td>
        <td>
         Because the system doesn't yet know if the customer will
         actually pay within the discount window, so the value is shown
         for reference only and isn't deducted from the order value
         automatically
        </td>
       </tr>
       <tr>
        <td>
         What T-code is used to record an incoming customer payment, and
         what does it do with a cash discount?
        </td>
        <td>
         F-26 — if the customer pays the reduced amount within the
         discount window, the system automatically reconciles the cash
         discount against the invoice's gross value
        </td>
       </tr>
       <tr>
        <td>
         What causes "No amount tolerance range entered for company
         code," and how is it fixed?
        </td>
        <td>
         Tolerance groups for employees haven't been set up for that
         company code; fix by copying the standard Company Code 1000
         entry (Group field blank) to your own company code under Define
         Tolerance Groups for Employees
        </td>
       </tr>
       <tr>
        <td>
         What causes "Entry [company code] is missing in table T043G,"
         and how is it fixed?
        </td>
        <td>
         Go to SM30 → table T043G → Create → copy the Company Code 1000
         entry (Group blank) to your own company code
        </td>
       </tr>
       <tr>
        <td>
         Is the cash-discount payment-receipt process (F-26) an SD or FI
         activity?
        </td>
        <td>
         FI (Finance) — SD's involvement ends at invoice creation with
         the SKTO statistical condition; FI applies the actual discount
         when the payment is recorded
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
        <td><span className="tcode">MM02</span></td>
        <td>
         Change Material Master — used to correct a mismatched Division
         causing "external division not completed"
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MMPV</span></td>
        <td>
         Close/open posting periods for materials management — used to
         resolve a recurring "posting only possible in periods..." error
         each month
        </td>
       </tr>
       <tr>
        <td><span className="tcode">V/08</span></td>
        <td>
         Maintain Pricing Procedure — used here to add the SKTO condition
         type
        </td>
       </tr>
       <tr>
        <td><span className="tcode">F-26</span></td>
        <td>
         Incoming Payments (Fast Entry) — records a customer's payment,
         applying cash discount if paid within the window
        </td>
       </tr>
       <tr>
        <td><span className="tcode">SM30</span></td>
        <td>Maintain table views directly — used here for table T043G</td>
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
        <td>Terms of Payment example</td>
        <td>P030 — 30 days credit period</td>
       </tr>
       <tr>
        <td>Baseline Date — normal scenario</td>
        <td>
         Fixed Day &amp; Additional Months both blank → Invoice Date =
         Baseline Date
        </td>
       </tr>
       <tr>
        <td>Baseline Date — Fixed Day example</td>
        <td>
         Fixed Day 25 → Baseline = 25th of invoice month, regardless of
         actual invoice date
        </td>
       </tr>
       <tr>
        <td>Baseline Date — Additional Months example</td>
        <td>Additional Months 1 → Baseline = Invoice Date + 1 month</td>
       </tr>
       <tr>
        <td>Baseline Date — both combined example</td>
        <td>
         Fixed Day 25 + Additional Months 1 → Fixed Day applied first
         (25th of invoice month), then postponed by 1 month
        </td>
       </tr>
       <tr>
        <td>Cash Discount example</td>
        <td>2% if paid within 5 days; 30 days total net credit period</td>
       </tr>
       <tr>
        <td>SKTO condition type setup (V/08)</td>
        <td>
         Step 20, From Reference Step 10, Statistics checked, Requirement
         9, Base Type 11
        </td>
       </tr>
       <tr>
        <td>Cash discount payment example</td>
        <td>
         Order ₹3,00,000 → 2% SKTO = ₹6,000 → customer pays ₹2,94,000 via
         F-26
        </td>
       </tr>
       <tr>
        <td>Tolerance group fix</td>
        <td>
         Define Tolerance Groups for Employees → copy Company Code 1000
         (Group blank) → own company code
        </td>
       </tr>
       <tr>
        <td>Table T043G fix</td>
        <td>
         SM30 → T043G → copy Company Code 1000 (Group blank) → own
         company code
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      After a short pre-class fix (an "external division not completed"
      error traced to a mismatched Division on Material Master, plus a
      reminder that sales documents can only be created against a Sold-to
      Party), this lecture covered
      <strong>Incoterms</strong> — the shipper/receiver agreement specifying
      who bears freight and insurance cost — and then went deep on
      <strong>Terms of Payment</strong>. The Terms of Payment creation path
      (SPRO, with the F1 shortcut notably disabled) led into
      <strong>Baseline Date Calculation</strong>: normally the Invoice Date,
      but overridable via <strong>Fixed Day</strong>
      (forces a specific date each month) and/or
      <strong>Additional Months</strong> (postpones the baseline by whole
      months), each demonstrated with a full worked example including how
      the two combine when used together. The lecture closed with
      <strong>Cash Discount</strong> — an early-payment incentive configured
      via the <strong>SKTO</strong> condition type in the Pricing Procedure
      (marked Statistical since the system can't know in advance if the
      customer will pay early), and demonstrated end-to-end by actually
      receiving a discounted payment via <strong>F-26</strong>, including
      the tolerance-group and T043G configuration fixes needed to get
      incoming payment posting working.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       Sales documents can only ever be created against a
       <strong>Sold-to Party</strong> — a common early mistake is trying to
       use a Ship-to or Bill-to customer number instead
      </li>
      <li>
       <strong>Baseline Date = Invoice Date</strong> in the vast majority
       of real projects; Fixed Day and Additional Months exist for the rare
       client with a specific requirement, and are almost never both used
       together
      </li>
      <li>
       <strong
       >SKTO must be explicitly added to the Pricing Procedure</strong
       >
       before a Cash Discount percentage becomes visible anywhere on the
       order — it doesn't appear automatically just because Terms of
       Payment has a discount configured
      </li>
      <li>
       SKTO is <strong>statistical</strong> at the SD/order stage — the
       actual discount is only applied for real by FI, at the point the
       customer's payment is recorded via F-26
      </li>
      <li>
       Incoming-payment configuration (tolerance groups, T043G) is an
       <strong>FI-side prerequisite</strong>, separate from SD
       configuration, but often needed the first time F-26 is used in a new
       company code
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> continuing Customer Master fields and
      related Terms of Payment / Billing topics.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 35 Notes — Fields in Customer Master: Incoterms, Terms of Payment
    &amp; Baseline Date Calculation, Cash Discount (SKTO) 🎓
   </p>
  </div>
 );
};

export default Material35;
