const Pricing73 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-purple">
        <h1>🎛️ Lecture 73 — Condition Type Controls &amp; Pricing Types</h1>
        <p>
          SAP SD | Deep-diving into the actual fields that control condition
          type behavior + copy control pricing types
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Practice corrections --> */}
        <div className="card slate">
          <h2>
            <span className="badge">📌</span> Practice Corrections (Recap)
          </h2>
          <ul>
            <li>
              <strong>
                AMIW showing Price Group instead of Material combination
              </strong>
              — this is okay, no need to over-practice AMIW specifically.
            </li>
            <li>
              <strong>Don't copy Terms of Payment records</strong> when
              practicing — if you need a new payment term, always use "New
              Entries," never copy an existing one.
            </li>
            <li>
              <strong>VPRS configuration reminder:</strong> Statistics ✅
              checked, Subtotal = <code>B</code>, Requirement = <code>4</code>.
              If these aren't set exactly right, VPRS will show a
              <strong>red error symbol</strong> when creating an order.
            </li>
          </ul>
          <div className="callout blue">
            💡 <strong>Study tip emphasized in class:</strong> Always refer back
            to your notes for exact field values (Statistics, Subtotal,
            Requirement, etc.) when practicing configuration — small mismatches
            cause visible errors.
          </div>
        </div>
        {/* <!-- Section 1: Intro to Condition Type Controls --> */}
        <div className="card purple">
          <h2>
            <span className="badge">1</span> Condition Type Controls — Overview
          </h2>
          <p>
            T-code: <span className="tcode">V/06</span> → select condition type
            (e.g. <code>PPR0</code>) → <strong>Details</strong>
          </p>
          <div className="callout purple">
            💡 Today's focus: the actual
            <strong>control fields inside a condition type</strong> that
            determine how it behaves — not just creating one, but understanding
            what each setting does.
          </div>
        </div>
        {/* <!-- Section 2: Access Sequence field + Records for Access --> */}
        <div className="card">
          <h2>
            <span className="badge">2</span> Access Sequence Field &amp;
            "Records for Access"
          </h2>
          <ul>
            <li>
              Inside every condition type, you must
              <strong>assign an Access Sequence</strong> — this is the link that
              tells the condition type where/how to search for values
            </li>
            <li>
              <strong>"Records for Access"</strong> (a button/option inside
              V/06) displays the
              <strong>full list of all condition records</strong> maintained
              under that access sequence — across every table in it
            </li>
          </ul>
          <div className="callout blue">
            🔍 <strong>Practical use:</strong> Click "Records for Access" →
            Execute → you'll see every maintained record (e.g. Customer+Material
            = 9500, Price List+Material = 9800/9700/9600, Material only =
            10,000) in one consolidated view — no need to check VK11 combination
            by combination.
          </div>
        </div>
        {/* <!-- Section 3: Condition Class --> */}
        <div className="card orange">
          <h2>
            <span className="badge">3</span> Condition Class — What Type of
            Price Element?
          </h2>
          <div className="callout">
            💡 <strong>Condition Class</strong> controls the type of price
            component/element: base price, discount/surcharge, expense
            reimbursement/rebate, or tax.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Class</th>
                <th>Meaning</th>
                <th>Example Condition Types</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-b">B</span>
                </td>
                <td>Base Price</td>
                <td>PR00, PPR0, VPRS, EK01, EK02, HM00</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-a">A</span>
                </td>
                <td>Discounts or Surcharge</td>
                <td>
                  K004, K005, K007, K020, KF00, PINS, PPAC, PLOD, SKTO, SKTV,
                  HB00, HA00
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-c">C</span>
                </td>
                <td>Expense Reimbursement / Rebate</td>
                <td>BO01, BO02, BO03</td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-d">D</span>
                </td>
                <td>Tax</td>
                <td>MWST, JOIG (IGST), JOCG (CGST), JOSG (SGST)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            🎯
            <strong>
              Key behavior — Condition Class B controls "single active base
              price":
            </strong>
            If multiple base-price-class condition types exist (or Exclusive is
            unchecked and multiple records match), the system
            <strong>
              activates only the last one and deactivates all previous ones
            </strong>
            . This is exactly why entering <strong>HM00</strong> (also Class B)
            at the end of the pricing procedure deactivates every prior
            condition — it's the same Class B "single winner" mechanism, not
            something special to HM00 itself.
          </div>
          <p className="note-text">
            💬 Common interview question: "Where is the control that prevents
            multiple base price conditions from being active at once?" → Answer:
            <strong>Condition Class B</strong>.
          </p>
        </div>
        {/* <!-- Section 4: Plus/Minus --> */}
        <div className="card teal">
          <h2>
            <span className="badge">4</span> Plus/Minus Field — Add or Deduct?
          </h2>
          <div className="callout">
            💡 Controls whether the condition type's value gets
            <strong>added to</strong> or <strong>subtracted from</strong> the
            running total.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Setting</th>
                <th>Meaning</th>
                <th>Example Condition Types</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span className="tag tag-neg">X (Negative)</span>
                </td>
                <td>Deducts — shown with a minus sign in the order</td>
                <td>
                  K004, K005, K007, K020 (all discounts), SKTO, SKTV, HB00,
                  HA00, and Rebates (BO01/02/03/04)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tag tag-pos">Blank or A (Positive)</span>
                </td>
                <td>Adds — increases the value</td>
                <td>
                  Base price, surcharges (Freight/Insurance/Packing/Loading),
                  Tax
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            ✅
            <strong>
              This is exactly why discounts show with a minus sign
            </strong>
            in the sales order's Conditions tab — the Plus/Minus field is set to
            X for every discount and rebate condition type.
          </div>
        </div>
        {/* <!-- Section 5: Calculation Type --> */}
        <div className="card gold">
          <h2>
            <span className="badge">5</span> Calculation Type — Amount → Value
            Conversion
          </h2>
          <div className="callout">
            💡 <strong>Calculation Type</strong> converts the condition type's
            <strong>amount</strong> (the rate entered, e.g. 200/kg or 10%) into
            its actual <strong>value</strong> (the final rupee figure) in the
            order.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Code</th>
                <th>Meaning</th>
                <th>Example Condition Types</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A</td>
                <td>Percentage</td>
                <td>
                  K007, K020, HA00, SKTO, SKTV, PINS, and all taxes (MWST etc.)
                </td>
              </tr>
              <tr>
                <td>B</td>
                <td>Fixed Amount</td>
                <td>HB00 (Header Fixed Discount), HM00 (Order Value)</td>
              </tr>
              <tr>
                <td>C</td>
                <td>Quantity-based</td>
                <td>PR00, VPRS, EK01, EK02, K004, K005, PPAC, PLOD</td>
              </tr>
              <tr>
                <td>D</td>
                <td>Gross Weight-based</td>
                <td>KF00 (Freight), HD00 (Header Freight)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            🧮 <strong>Worked mini-example:</strong> Material discount P004 =
            amount ₹200, quantity 100 units → value = ₹20,000 (Calculation Type
            C, quantity-based). Insurance = amount 3% → value calculated as a
            percentage of the base (Calculation Type A).
          </div>
        </div>
        {/* <!-- Section 6: Pricing Type (Copy Control) --> */}
        <div className="card red">
          <h2>
            <span className="badge">6</span> Pricing Type — Copy Control Between
            Documents
          </h2>
          <div className="callout red">
            💡 <strong>Pricing Type</strong> controls how pricing is copied from
            a<strong>source document</strong> (e.g. Quotation) to a
            <strong>target document</strong> (e.g. Sales Order) during copy
            control.
          </div>
          <div className="four-grid">
            <div className="mini-card mc-blue">
              <h4>Type B</h4>
              <p>
                <strong>Carry Out New Pricing</strong>
              </p>
              <p>Determines fresh prices in the target document</p>
              <p>Eliminates all manual condition types</p>
            </div>
            <div className="mini-card mc-orange">
              <h4>Type C</h4>
              <p>
                <strong>Copy Manual + Redetermine Rest</strong>
              </p>
              <p>Manual conditions copied as-is</p>
              <p>All other conditions get new prices</p>
            </div>
            <div className="mini-card mc-gold">
              <h4>Type D</h4>
              <p>
                <strong>Copy Unchanged</strong>
              </p>
              <p>Everything copied exactly as in source document</p>
              <p>No redetermination at all</p>
            </div>
          </div>
          <h3>Worked Example: Quotation → Sales Order</h3>
          <p>
            Source document (Quotation) had: PR00 = ₹10,000, Discount = −₹500,
            Discount% = −10%, Manual condition HB00 = −₹1,000, MWST = 18%, VPRS
            = ₹5,000
          </p>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Pricing Type</th>
                <th>What Happens</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <strong>B</strong>
                </td>
                <td>
                  New price determined (e.g. PR00 becomes ₹12,000); manual HB00
                  dropped entirely
                </td>
                <td>
                  PR00 = ₹12,000 (new), no HB00, other conditions freshly
                  redetermined
                </td>
              </tr>
              <tr>
                <td>
                  <strong>C</strong>
                </td>
                <td>
                  HB00 = −₹1,000 copied exactly as-is; everything else
                  redetermined fresh
                </td>
                <td>
                  New PR00 + other new conditions,
                  <strong>but HB00 = −₹1,000 preserved</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>D</strong>
                </td>
                <td>Nothing changes — full copy, condition-for-condition</td>
                <td>
                  PR00 = ₹10,000, −₹500, −10%, HB00 = −₹1,000, MWST 18%, VPRS
                  ₹5,000 — all identical to source
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            💡 <strong>Key distinction B vs C:</strong> Both redetermine most
            conditions with fresh pricing, but
            <strong>B always drops manual conditions</strong> (like HB00) while
            <strong>C preserves them</strong>. Type D is the only one that
            freezes everything, including outdated prices, exactly as they were
            on the source document — useful when a quoted price must be honored
            unchanged.
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
                  What does "Records for Access" show inside a condition type?
                </td>
                <td>
                  The full list of all condition records maintained across every
                  table in that condition type's access sequence
                </td>
              </tr>
              <tr>
                <td>What does Condition Class control?</td>
                <td>
                  The type of price component/element — base price (B),
                  discount/surcharge (A), expense reimbursement/rebate (C), or
                  tax (D)
                </td>
              </tr>
              <tr>
                <td>
                  Where is the control that prevents multiple base price
                  conditions from being active simultaneously?
                </td>
                <td>
                  Condition Class = B — the system automatically activates only
                  the last matching one and deactivates earlier ones
                </td>
              </tr>
              <tr>
                <td>
                  Why does HM00 deactivate all previous pricing conditions when
                  entered?
                </td>
                <td>
                  Because HM00's Condition Class is B (base price), triggering
                  the same "single active base price" mechanism as any other
                  Class B condition
                </td>
              </tr>
              <tr>
                <td>
                  What does the Plus/Minus field control, and what does "X"
                  mean?
                </td>
                <td>
                  Whether the value adds to or deducts from the total; X means
                  negative/deduct (used for discounts and rebates)
                </td>
              </tr>
              <tr>
                <td>What does Calculation Type do?</td>
                <td>
                  Converts the condition type's entered amount into its actual
                  value — A=Percentage, B=Fixed Amount, C=Quantity, D=Gross
                  Weight
                </td>
              </tr>
              <tr>
                <td>What is Pricing Type used for?</td>
                <td>
                  Controls how pricing is copied from a source document to a
                  target document in copy control
                </td>
              </tr>
              <tr>
                <td>What's the difference between Pricing Type B and C?</td>
                <td>
                  Both redetermine most conditions fresh; B drops manual
                  condition types entirely, while C preserves manual conditions
                  as-is
                </td>
              </tr>
              <tr>
                <td>What does Pricing Type D do?</td>
                <td>
                  Copies all pricing elements unchanged from source to target,
                  with no redetermination at all
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
                  Condition Type Controls — Access Sequence assignment, Records
                  for Access, Condition Class, Plus/Minus, Calculation Type
                </td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            Note: Pricing Type is configured in Copy Control settings (VTAA for
            order-to-order, VTAF for quotation-to-order, etc.) — not explicitly
            named with a T-code in this lecture, but conceptually covered as
            part of copy control.
          </p>
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
                <th>Field</th>
                <th>Values / Options</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Condition Class</td>
                <td>
                  A=Discount/Surcharge, B=Base Price, C=Expense
                  Reimbursement/Rebate, D=Tax
                </td>
              </tr>
              <tr>
                <td>Plus/Minus</td>
                <td>X=Negative (deduct), Blank/A=Positive (add)</td>
              </tr>
              <tr>
                <td>Calculation Type</td>
                <td>
                  A=Percentage, B=Fixed Amount, C=Quantity, D=Gross Weight
                </td>
              </tr>
              <tr>
                <td>Pricing Type (copy control)</td>
                <td>
                  B=Carry out new pricing, C=Copy manual + redetermine rest,
                  D=Copy unchanged
                </td>
              </tr>
              <tr>
                <td>VPRS correction (recap)</td>
                <td>Statistics ✅, Subtotal B, Requirement 4</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            This lecture moved from "how to build" condition types to "how they
            actually behave," unpacking four core control fields inside V/06:
            <strong>Access Sequence</strong> (with "Records for Access" as a
            handy audit view), <strong>Condition Class</strong> (categorizes as
            base price/discount/rebate/tax and — critically — Class B is what
            stops multiple base prices from being active at once),
            <strong>Plus/Minus</strong> (determines the +/− sign shown in
            orders), and <strong>Calculation Type</strong> (converts entered
            amounts into actual values via percentage, fixed, quantity, or
            weight logic). The lecture then introduced{" "}
            <strong>Pricing Type</strong> in copy control — B, C, and D —
            governing whether pricing is freshly redetermined, partially
            preserved (manual conditions only), or copied entirely unchanged
            when moving from a quotation to a sales order.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 73 Notes — SAP SD Pricing: Condition Type Controls &amp; Pricing
        Types 🎓
      </p>
    </div>
  );
};

export default Pricing73;
