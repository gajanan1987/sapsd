const Material30 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-green">
    <h1>
     💳 Lecture 30 — Fields in Customer Master: Terms of Payment, Customer
     Group, ABC Class &amp; Currency
    </h1>
    <p>
     SAP SD | Credit period, sales reporting sub-classifications, the
     currency conversion mechanism, and quantity-decimal rounding
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Last class covered Reconciliation Account (Company Code Data →
      Account Management). Today wraps up Payment Transactions and moves
      into Sales Area Data fields.
     </div>
    </div>

    {/* <!-- Section 1: Terms of Payment --> */}
    <div className="card teal">
     <h2>
      <span className="badge">15</span> Payment Transactions — Terms of
      Payment
     </h2>
     <div className="callout teal">
      💡 <strong>Terms of Payment</strong> (also called
      <strong>credit period</strong>) is an agreement between the company
      and the customer for the <strong>number of days given</strong> to make
      the payment.
     </div>
    </div>

    {/* <!-- Section 2: Payment History Record --> */}
    <div className="card orange">
     <h2>
      <span className="badge">16</span> Payment Transactions — Payment
      History Record
     </h2>
     <div className="callout orange">
      💡 If checked, whenever the customer makes a payment, that data is
      <strong>automatically updated into Credit Management</strong>.
     </div>
     <p>
      Credit Management uses the <strong>Credit Master</strong>, T-code
      <span className="tcode">FD32</span>, which has its own
      <strong>Payment History</strong> tab. Checking this field on the
      Customer Master is what keeps that tab in FD32 populated automatically
      whenever the customer pays.
     </p>
    </div>

    {/* <!-- Section 3: Sales District --> */}
    <div className="card gold">
     <h2>
      <span className="badge">17</span> Sales Area Data — Sales Tab: Sales
      District
     </h2>
     <div className="callout gold">
      💡 <strong>Sales District</strong> is a
      <strong>sub-classification of Sales Office</strong>, used for
      generating sales reports.
     </div>
     <div className="callout blue">
      📊 <strong>Worked example:</strong> Sales Office P100 (Telangana) can
      already produce a state-level sales report. But if management wants
      reports at a finer level — North Telangana, South Telangana, East
      Telangana, West Telangana — that finer split is defined as
      <strong>Sales District</strong>.
     </div>
     <p className="note-text">
      📌 Rule of thumb: if management asks for sales reports
      <strong>below the Sales Office level</strong>, that breakdown becomes
      a Sales District.
     </p>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Master Data</span>
      <span className="sep">→</span>
      <span className="node">Business Partners</span>
      <span className="sep">→</span> <span className="node">Customers</span>
      <span className="sep">→</span> <span className="node">Sales</span>
      <span className="sep">→</span>
      <span className="node">Define Sales Districts</span>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Description</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P401</td>
        <td>North Telangana</td>
       </tr>
       <tr>
        <td>P402</td>
        <td>South Telangana</td>
       </tr>
       <tr>
        <td>P403</td>
        <td>East Telangana</td>
       </tr>
       <tr>
        <td>P404</td>
        <td>West Telangana</td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      💡 As always, the
      <strong>F1 → customizing key → "Continue without specifying
       project"</strong>
      shortcut jumps straight to this same path from the field itself.
     </p>
    </div>

    {/* <!-- Section 4: Quick recap Sales Office/Group --> */}
    <div className="card">
     <h2>
      <span className="badge">↩️</span> Recap — Sales Office &amp; Sales
      Group
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Definition</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Sales Office</td>
        <td>
         A physical location where a group of people work together to
         perform sales
        </td>
       </tr>
       <tr>
        <td>Sales Group</td>
        <td>
         A group of people within a Sales Office, working on different
         activities
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 Example: a customer whose business falls under gynecology products
      is assigned Sales Group <code>P20</code> ("Other Group").
     </p>
    </div>

    {/* <!-- Section 5: Customer Group --> */}
    <div className="card purple">
     <h2><span className="badge">18</span> Sales Tab — Customer Group</h2>
     <div className="callout purple">
      💡 <strong>Customer Group</strong> = grouping customers who share the
      same attribute.
     </div>
     <div className="callout blue">
      📊
      <strong>Worked example — attribute is "volume of business":</strong>
      each customer category (Dealers, Distributors, Institutions) is
      further split into Bulk / Medium / Low based on purchase volume.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Code</th>
        <th>Customer Group</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>P1</td>
        <td>Bulk Dealers</td>
       </tr>
       <tr>
        <td>P2</td>
        <td>Medium Dealers</td>
       </tr>
       <tr>
        <td>P3</td>
        <td>Low Dealers</td>
       </tr>
       <tr>
        <td>P4</td>
        <td>Bulk Distributors</td>
       </tr>
       <tr>
        <td>P5</td>
        <td>Medium Distributors</td>
       </tr>
       <tr>
        <td>P6</td>
        <td>Low Distributors</td>
       </tr>
       <tr>
        <td>P7</td>
        <td>Bulk Institutions</td>
       </tr>
       <tr>
        <td>P8</td>
        <td>Medium Institutions</td>
       </tr>
       <tr>
        <td>P9</td>
        <td>Low Institutions</td>
       </tr>
      </tbody>
     </table>
     <div className="path">
      <span className="node">SPRO</span><span className="sep">→</span>
      <span className="node">Sales and Distribution</span>
      <span className="sep">→</span>
      <span className="node">Master Data</span>
      <span className="sep">→</span>
      <span className="node">Business Partners</span>
      <span className="sep">→</span> <span className="node">Customers</span>
      <span className="sep">→</span> <span className="node">Sales</span>
      <span className="sep">→</span>
      <span className="node">Define Customer Groups</span>
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>#</th>
        <th>Purpose of Customer Group</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>1</td>
        <td>Reporting or Analysis</td>
       </tr>
       <tr>
        <td>2</td>
        <td>Discounts</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 6: ABC Class --> */}
    <div className="card red">
     <h2><span className="badge">19</span> Sales Tab — ABC Class</h2>
     <div className="callout red">
      💡 <strong>ABC Class</strong> classifies customers into A-class,
      B-class, or C-class by considering
      <strong>turnover, volume of business, and payment behavior</strong>
      together.
     </div>
     <div className="callout green">
      ✅ <strong>Purpose: giving priority to customers.</strong> This is the
      dedicated "prioritization" field referenced back in Lecture 28 —
      distinct from Customer Classification (turnover-only) and Customer
      Group (volume-only), since ABC Class blends multiple factors including
      payment behavior.
     </div>
     <p className="note-text">
      ✍️ Like Regional Market, this is a <strong>manual field</strong> — the
      user enters A, B, or C directly.
     </p>
    </div>

    {/* <!-- Section 7: Currency --> */}
    <div className="card indigo">
     <h2><span className="badge">20</span> Sales Tab — Currency</h2>
     <div className="callout indigo">
      💡 This field maintains the <strong>customer's own currency</strong> —
      relevant mainly for foreign customers.
     </div>
     <p>
      Example: this project's Company Code currency is
      <code>INR</code>. If a customer is based in the US, their Customer
      Currency would be <code>USD</code>.
     </p>
     <h3>How Currency Conversion Works</h3>
     <div className="stepper">
      <div className="step">
       When Sales Order, Delivery, and Invoice are created, the system
       displays all values in the
       <strong>customer's currency</strong> (e.g., USD 20,000).
      </div>
      <div className="step">
       When the Invoice generates its accounting document, the system
       <strong>converts</strong> those values from Customer Currency to
       Company Code Currency, based on the <strong>exchange rate</strong>.
      </div>
     </div>
     <div className="callout blue">
      🔢 <strong>Worked example:</strong> if the exchange rate is ₹90/USD,
      an order of USD 20,000 converts to <strong>₹18,00,000</strong> in the
      accounting document (Customer Account Debit to Revenue Account
      Credit).
     </div>
     <h3>Maintaining Exchange Rates</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Detail</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>T-code</td>
        <td>OB08 — Maintain Exchange Rates</td>
       </tr>
       <tr>
        <td>Responsible</td>
        <td>FI user</td>
       </tr>
       <tr>
        <td>Standard Exchange Rate Type</td>
        <td>M</td>
       </tr>
      </tbody>
     </table>
     <div className="callout">
      🔁 <strong>Why it's maintained daily:</strong> exchange rates
      fluctuate, so the FI user updates this rate on a
      <strong>daily basis</strong> (New Entries → Exchange Rate Type
      <code>M</code>, today's date, e.g., USD → INR at 93). Some clients
      instead connect to a <strong>third-party system</strong> that updates
      rates automatically; without one, a dedicated user handles this
      manually every day.
     </div>
    </div>

    {/* <!-- Section 8: Switch Off Rounding --> */}
    <div className="card gold">
     <h2>
      <span className="badge">21</span> Sales Tab — Switch Off Rounding
     </h2>
     <div className="callout gold">
      💡 If checked, the system will
      <strong>not perform rounding on quantity decimals</strong>.
     </div>
     <p>
      <strong>Rounding</strong> = converting a decimal to the nearest whole
      number. This field applies specifically to <strong>quantity</strong>,
      not value.
     </p>
     <div className="callout blue">
      💎 <strong>Worked example — gold:</strong> for a high-value product
      like gold, the decimal portion of the quantity genuinely matters
      (e.g., <code>100.95</code> grams). If Switch Off Rounding is checked,
      the invoice correctly shows <code>100.95</code> and calculates totals
      using that exact decimal. If unchecked, standard rounding applies:
      <code>≥.50</code> rounds up (100.95 → 101),
      <code>&lt;.50</code> rounds down (100.49 → 100).
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
        <td>What is Terms of Payment, and what is it also called?</td>
        <td>
         An agreement between company and customer for the number of days
         given to make payment; also called the credit period
        </td>
       </tr>
       <tr>
        <td>What happens if Payment History Record is checked?</td>
        <td>
         Whenever the customer makes a payment, that data is
         automatically updated into Credit Management (visible in the
         Payment History tab of the Credit Master, T-code FD32)
        </td>
       </tr>
       <tr>
        <td>What is Sales District?</td>
        <td>
         A sub-classification of Sales Office, used for generating sales
         reports at a level finer than the sales office itself (e.g.,
         North/South/East/West Telangana under one Telangana sales
         office)
        </td>
       </tr>
       <tr>
        <td>
         What is Customer Group, and what attribute was used in the
         worked example?
        </td>
        <td>
         Grouping customers who share the same attribute; the example
         used volume of business (Bulk/Medium/Low across Dealers,
         Distributors, Institutions)
        </td>
       </tr>
       <tr>
        <td>What are the two purposes of Customer Group?</td>
        <td>Reporting/Analysis and Discounts</td>
       </tr>
       <tr>
        <td>What three factors does ABC Class consider?</td>
        <td>Turnover, volume of business, and payment behavior</td>
       </tr>
       <tr>
        <td>What is the purpose of ABC Class?</td>
        <td>
         Giving priority to customers — it's a manual field where the
         user enters A, B, or C
        </td>
       </tr>
       <tr>
        <td>How is ABC Class different from Customer Classification?</td>
        <td>
         Customer Classification groups purely by turnover; ABC Class
         blends turnover, volume of business, and payment behavior,
         specifically for prioritizing customers
        </td>
       </tr>
       <tr>
        <td>
         What happens to order/delivery/invoice values when Customer
         Currency differs from Company Code Currency?
        </td>
        <td>
         Sales Order, Delivery, and Invoice display values in the
         customer's own currency; only when the accounting document is
         generated does the system convert those values into the company
         code's currency, using the maintained exchange rate
        </td>
       </tr>
       <tr>
        <td>
         What T-code maintains exchange rates, and who is responsible?
        </td>
        <td>
         OB08 (Maintain Exchange Rates); the FI user is responsible,
         typically updating it daily
        </td>
       </tr>
       <tr>
        <td>What is the standard Exchange Rate Type?</td>
        <td>M</td>
       </tr>
       <tr>
        <td>What does "Switch Off Rounding" control?</td>
        <td>
         Whether the system rounds quantity decimals to the nearest whole
         number — useful for high-value, precision-sensitive products
         like gold where the decimal quantity itself carries real value
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
        <td><span className="tcode">FD32</span></td>
        <td>
         Credit Master — includes the Payment History tab populated by
         the Payment History Record checkbox
        </td>
       </tr>
       <tr>
        <td><span className="tcode">OB08</span></td>
        <td>Maintain Exchange Rates (FI responsibility)</td>
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
        <td>Sales Districts (example)</td>
        <td>P401 North, P402 South, P403 East, P404 West Telangana</td>
       </tr>
       <tr>
        <td>Customer Groups (example)</td>
        <td>
         P1–P3 Dealers (Bulk/Medium/Low), P4–P6 Distributors, P7–P9
         Institutions
        </td>
       </tr>
       <tr>
        <td>ABC Class factors</td>
        <td>Turnover, volume of business, payment behavior</td>
       </tr>
       <tr>
        <td>Exchange rate example</td>
        <td>USD 20,000 at ₹90/USD → ₹18,00,000</td>
       </tr>
       <tr>
        <td>Exchange Rate Type</td>
        <td>M (standard)</td>
       </tr>
       <tr>
        <td>
         Rounding threshold (when Switch Off Rounding is unchecked)
        </td>
        <td>≥.50 rounds up, &lt;.50 rounds down</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture closed out the Payment Transactions tab with
      <strong>Terms of Payment</strong> (the agreed credit period) and
      <strong>Payment History Record</strong> (which feeds payment data into
      the FD32 Credit Master), then moved into Sales Area Data's Sales tab.
      <strong>Sales District</strong> sub-divides a Sales Office for
      finer-grained reporting; a quick recap tied Sales Office and Sales
      Group back to their Enterprise Structure definitions.
      <strong>Customer Group</strong> groups customers by a shared attribute
      (volume of business, in the worked example) for reporting and
      discounts, while <strong>ABC Class</strong>
      takes a broader, multi-factor view (turnover + volume + payment
      behavior) specifically to prioritize customers — distinguishing it
      from the earlier, turnover-only Customer Classification.
      <strong>Currency</strong> covered how customer-currency values shown
      on Order/Delivery/Invoice get converted into the company code's
      currency only at the accounting-document stage, using a
      daily-maintained exchange rate (T-code OB08, FI's responsibility,
      Exchange Rate Type M). The lecture closed with
      <strong>Switch Off Rounding</strong>, which preserves exact quantity
      decimals for precision-sensitive products like gold instead of
      rounding them to the nearest whole unit.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>Terms of Payment</strong> = credit period;
       <strong>Payment History Record</strong> feeds FD32's Credit Master
       automatically
      </li>
      <li>
       <strong>Sales District</strong> exists purely for reporting below
       the Sales Office level
      </li>
      <li>
       <strong>Customer Group</strong> (single attribute, e.g. volume) vs.
       <strong>ABC Class</strong> (multi-factor: turnover + volume +
       payment behavior, for prioritization) vs.
       <strong>Customer Classification</strong> (turnover only) — three
       related but distinct grouping fields
      </li>
      <li>
       Transaction documents show <strong>customer currency</strong>;
       conversion to <strong>company code currency</strong> only happens at
       the accounting-document (invoice) stage
      </li>
      <li>
       <strong>Switch Off Rounding</strong> preserves exact quantity
       decimals — essential for precision-priced goods
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Remaining fields in Customer Master
      (starting with Order Probability).
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 30 Notes — Fields in Customer Master: Terms of Payment, Customer
    Group, ABC Class &amp; Currency 🎓
   </p>
  </div>
 );
};

export default Material30;
