const Pricing82 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-pink">
        <h1>🧩 Lecture 82 — Real-World Pricing Issues &amp; User Exits</h1>
        <p>
          SAP SD | Client scenarios solved with dummy condition types, plus the
          two pricing user exits
        </p>
      </div>
      <div className="container">
        {/* <!-- Issue 1: Slow-moving materials extra credit --> */}
        <div className="card orange">
          <h2>
            <span className="badge">1</span> Issue: Extra Credit Period for
            Slow-Moving Materials
          </h2>
          <div className="callout purple">
            Client requirement: if a customer purchases certain
            <strong> slow-moving materials</strong>, offer them
            <strong> 20 extra days</strong> of credit period on top of their
            normal terms.
          </div>
          <div className="callout blue">
            Interview-style answer: the control lives in
            <strong> Condition Records</strong> → <strong>Additional Data</strong>{" "}
            → field
            <strong> "Additional Value Days"</strong>.
          </div>
          <h3>Configuration</h3>
          <div className="stepper">
            <div className="step">
              Create condition type <code>P111</code> — T-code&nbsp;
              <span className="tcode">V/06</span>, copy from <code>K004</code>,
              description "Additional Credit Period" → Save
            </div>
            <div className="step">
              Place in Pricing Procedure — T-code&nbsp;
              <span className="tcode">V/08</span>, at the very last step (e.g.
              260), <strong>Statistics checked</strong> (this is a dummy
              condition, never meant to affect Net Value)
            </div>
            <div className="step">
              Maintain condition records — T-code&nbsp;
              <span className="tcode">VK11</span>, condition type P111, key
              combination Sales Org + Distribution Channel + Material
            </div>
            <div className="step">
              For each slow-moving material (e.g. PMAT1, PMAT2): enter a dummy
              amount of <strong>₹1</strong>, select the record →
              <strong> Additional Data</strong> → set
              <strong> Additional Value Days = 20</strong>
            </div>
          </div>
          <h3>Result</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Material</th>
                <th>P111 in Order?</th>
                <th>Credit Period on Billing Doc</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>PMAT1 (slow-moving, has P111)</td>
                <td>Dummy ₹1 shown</td>
                <td>
                  30 days (normal) + 20 (additional) = <strong>50 days</strong>
                </td>
              </tr>
              <tr>
                <td>Vaccine 1500 (not marked)</td>
                <td>No P111</td>
                <td>Normal 30 days only</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            The amount (₹1) is deliberately meaningless — this condition type
            exists purely as a carrier for the Additional Value Days field,
            thanks to Statistics keeping it from touching the actual price.
          </div>
        </div>
        {/* <!-- Issue 2: Fast-moving materials no credit --> */}
        <div className="card teal">
          <h2>
            <span className="badge">2</span> Issue: No Credit for Fast-Moving
            Materials
          </h2>
          <div className="callout purple">
            Client requirement: if a customer purchases certain
            <strong>fast-moving materials</strong>, don't offer any credit
            period at all for those items — even if the customer's normal terms
            include 30 days credit.
          </div>
          <div className="callout blue">
            Interview-style answer: the control lives in
            <strong>Condition Records</strong> →<strong>Additional Data</strong>{" "}
            → field
            <strong>Terms of Payment</strong>, overridden to a "no credit" term
            (e.g. <code>0001</code>).
          </div>
          <h3>Configuration</h3>
          <div className="stepper">
            <div className="step">
              Create condition type <code>P222</code> — T-code&nbsp;
              <span className="tcode">V/06</span>, copy from <code>K004</code>,
              description "No Credit" → Save
            </div>
            <div className="step">
              Place in Pricing Procedure — T-code&nbsp;
              <span className="tcode">V/08</span>, last step (e.g. 270)
            </div>
            <div className="step">
              Maintain condition records — T-code&nbsp;
              <span className="tcode">VK11</span>, condition type P222, material
              Vaccine 1500 (fast-moving), dummy ₹1
            </div>
            <div className="step">
              Select the record → <strong>Additional Data</strong> → set
              <strong> Terms of Payment = 0001</strong> (no credit)
            </div>
          </div>
          <h3>Result</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Material</th>
                <th>P222 in Order?</th>
                <th>Payment Terms on Billing Doc</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vaccine 1500 (fast-moving, has P222)</td>
                <td>Dummy ₹1 shown</td>
                <td>
                  <strong>0001</strong> (no credit) — overrides customer's
                  normal P030
                </td>
              </tr>
              <tr>
                <td>Other materials</td>
                <td>No P222</td>
                <td>Normal P030 (30 days credit)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            Key learning:
            <strong>
              item-level payment terms take precedence over header-level
            </strong>
            at invoicing. Even though the order header still shows P030 (the
            customer's default), the specific line item carrying Vaccine 1500
            gets 0001 applied — and that item-level value is what actually
            determines the invoice's payment behavior for that line.
          </div>
        </div>
        {/* <!-- Issue 3: Retroactive condition type on old orders --> */}
        <div className="card purple">
          <h2>
            <span className="badge">3</span> Issue: New Condition Type Should
            Apply to Already-Created Orders
          </h2>
          <div className="callout purple">
            Client requirement: they're adding a new discount condition type to
            their existing pricing procedure, and want it to
            <strong>automatically appear</strong> when creating invoices for
            <strong>sales orders that were already created before</strong> the
            condition type was added.
          </div>
          <h3>The Problem</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Date</th>
                <th>Event</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1st September</td>
                <td>
                  Order 1 created (pricing procedure did not yet have the new
                  condition type)
                </td>
              </tr>
              <tr>
                <td>5th September</td>
                <td>Order 2 created (same — condition type not yet added)</td>
              </tr>
              <tr>
                <td>9th September</td>
                <td>Order 3 created (same)</td>
              </tr>
              <tr>
                <td>10th September</td>
                <td>
                  New condition type (e.g. PD...) added to the pricing procedure
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            Normally: creating a delivery/invoice today for Orders 1–3 will
            <strong>NOT</strong> include the new condition type, since pricing
            was already fixed/determined at the time each order was originally
            created. A brand-new order created today would get it — but the old
            ones won't, by default.
          </div>
          <h3>The Fix</h3>
          <div className="callout green">
            Go to the newly added condition type's controls (
            <span className="tcode">V/06</span>) → set{" "}
            <strong>Condition Category = L</strong>. This flags the condition
            type to be dynamically (re)checked even when billing orders that
            were created before it existed.
          </div>
        </div>
        {/* <!-- Section: User Exits intro --> */}
        <div className="card">
          <h2>
            <span className="badge">🛠️</span> Pricing User Exits / Enhancements
          </h2>
          <div className="callout">
            Whenever a client's requirement
            <strong>cannot be met through standard configuration</strong>, the
            next option is a <strong>User Exit</strong> — custom ABAP logic
            hooked into the standard pricing process.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>User Exit</th>
                <th>Purpose</th>
                <th>Program</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>USEREXIT_PRICING_CHECK</code>
                </td>
                <td>
                  Used for <strong>checking/validation</strong> — reading
                  pricing data without modifying it
                </td>
                <td>LV69AFZZ</td>
              </tr>
              <tr>
                <td>
                  <code>USEREXIT_FIELD_MODIFICATION</code>
                </td>
                <td>
                  Used when you need to <strong>modify</strong> backend pricing
                  values
                </td>
                <td>LV69AFZZ (same program)</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            Both user exits live in the same program — the distinction is purely
            about intent: check-only logic goes in the first, value-modification
            logic goes in the second.
          </div>
        </div>
        {/* <!-- Section: Worked User Exit example --> */}
        <div className="card red">
          <h2>
            <span className="badge">🎯</span> Worked User Exit Example —
            Preventing Duplicate Manual Condition Entry
          </h2>
          <div className="callout red">
            Client requirement: manual condition type <code>P004</code> is
            sometimes entered <strong>multiple times by mistake</strong> in the
            same order, and the system currently accepts it without complaint.
            Client wants duplicates blocked.
          </div>
          <h3>Why Standard Configuration Can't Solve This</h3>
          <div className="callout">
            For a <strong>non-manual</strong> condition type, you could set
            Manual Entries = D (locked, no manual entry at all) via V/06 — but
            P004 is
            <strong>meant to be manually entered</strong> in the first place.
            Setting Manual Entries = D would block even the legitimate first
            entry, making the condition type useless. Standard configuration has
            <strong>no built-in way</strong> to allow one manual entry but block
            a second identical one.
          </div>
          <div className="callout red">
            Confirmed in class: entering P004 two or even three times manually
            is accepted without any error in standard SAP — proving a user exit
            is required here.
          </div>
          <h3>Solution Design</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Transaction (where the issue occurs)</td>
                <td>Sales Order — T-code VA01</td>
              </tr>
              <tr>
                <td>User Exit to use</td>
                <td>
                  USEREXIT_PRICING_CHECK (we're only checking, not modifying
                  values)
                </td>
              </tr>
              <tr>
                <td>Program</td>
                <td>LV69AFZZ</td>
              </tr>
            </tbody>
          </table>
          <h3>The Logic (Pseudo-ABAP)</h3>
          <div className="code-block">
            <span className="cm">
              * Count how many times P004 appears in the pricing table
            </span>
            count = 0.
            <span className="kw">LOOP AT</span> KOMV
            <span className="kw">WHERE</span> KSCHL = 'P004'. count = count + 1.
            <span className="kw">ENDLOOP</span>.<span className="kw">IF</span>{" "}
            count &gt; 1.
            <span className="kw">MESSAGE</span> 'Condition type P004 already
            exists' <span className="kw">TYPE</span> 'E'.
            <span className="kw">ENDIF</span>.
          </div>
          <h3>Walkthrough</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Event</th>
                <th>Count Value</th>
                <th>Result</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>First entry of P004</td>
                <td>Loop runs once → count = 1</td>
                <td>1 is not greater than 1 → no error, entry accepted</td>
              </tr>
              <tr>
                <td>Second entry of P004</td>
                <td>Loop runs twice (both records now exist) → count = 2</td>
                <td>
                  2 is greater than 1 → error message: "Condition type P004
                  already exists"
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            Technical reference: <code>KOMV</code> is the internal pricing
            communication structure/table used inside these user exits;
            <code>KSCHL</code> is its field for Condition Type. Verified via
            T-code <span className="tcode">SE11</span> (ABAP Dictionary →
            Structure Display).
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
                  How do you give slow-moving materials extra credit period?
                </td>
                <td>
                  Maintain the "Additional Value Days" field in the condition
                  record's Additional Data for a dummy statistical condition
                  type tied to those materials
                </td>
              </tr>
              <tr>
                <td>
                  How do you deny credit for fast-moving materials specifically?
                </td>
                <td>
                  Maintain a "Terms of Payment" override (e.g. 0001 = no credit)
                  in the condition record's Additional Data for a dummy
                  statistical condition type tied to those materials
                </td>
              </tr>
              <tr>
                <td>
                  At invoicing, which payment terms actually apply — header
                  level or item level?
                </td>
                <td>
                  Item level — even if the header shows the customer's default
                  terms, whatever is determined at the item level is what
                  actually gets applied to that line in the invoice
                </td>
              </tr>
              <tr>
                <td>
                  If you add a new condition type to a pricing procedure today,
                  will it automatically appear on invoices for orders created
                  before today?
                </td>
                <td>
                  Not by default — pricing was already fixed when those orders
                  were created. To make it appear retroactively, set the new
                  condition type's Condition Category = L
                </td>
              </tr>
              <tr>
                <td>
                  When do you use a pricing user exit instead of standard
                  configuration?
                </td>
                <td>
                  Whenever the client's requirement cannot be achieved through
                  standard configuration alone
                </td>
              </tr>
              <tr>
                <td>
                  What are the two pricing user exits, and how do they differ?
                </td>
                <td>
                  USEREXIT_PRICING_CHECK (for checking/validating pricing data)
                  and USEREXIT_FIELD_MODIFICATION (for actually modifying
                  backend pricing values); both live in program LV69AFZZ
                </td>
              </tr>
              <tr>
                <td>
                  Why can't Manual Entries = D be used to prevent duplicate
                  entry of a manual condition type?
                </td>
                <td>
                  Because D blocks all manual entry, including the legitimate
                  first one — the condition type would never be usable at all
                </td>
              </tr>
              <tr>
                <td>
                  What table and field does the duplicate-check user exit logic
                  use to identify a condition type?
                </td>
                <td>
                  KOMV (pricing structure) and its field KSCHL (Condition Type)
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
                  Create dummy condition types P111 and P222 (copied from K004);
                  set Condition Category = L on newly added condition types for
                  retroactive invoicing
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/08</span>
                </td>
                <td>
                  Place P111 and P222 at the end of the pricing procedure
                  (Statistics checked)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VK11</span>
                </td>
                <td>
                  Maintain condition records with dummy amounts and Additional
                  Data fields (Additional Value Days, Terms of Payment)
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VA01</span>
                </td>
                <td>
                  Sales order transaction where the duplicate manual condition
                  type issue occurs and is fixed via user exit
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">SE11</span>
                </td>
                <td>
                  ABAP Dictionary — used to inspect the KOMV structure and
                  confirm KSCHL is the Condition Type field
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
                <td>P111 (Additional Credit Period)</td>
                <td>
                  Copied from K004; Statistics checked; Additional Value Days =
                  20 in VK11 Additional Data
                </td>
              </tr>
              <tr>
                <td>P222 (No Credit)</td>
                <td>
                  Copied from K004; Terms of Payment = 0001 in VK11 Additional
                  Data
                </td>
              </tr>
              <tr>
                <td>Retroactive condition type fix</td>
                <td>Condition Category = L on the new condition type</td>
              </tr>
              <tr>
                <td>Pricing user exit programs</td>
                <td>
                  LV69AFZZ (both USEREXIT_PRICING_CHECK and
                  USEREXIT_FIELD_MODIFICATION)
                </td>
              </tr>
              <tr>
                <td>Duplicate-check user exit table/field</td>
                <td>KOMV-KSCHL (Condition Type)</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card pink">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            This lecture worked through three real client scenarios solved with
            "dummy" statistical condition types carrying values in their
            Additional Data fields: extra credit days for slow-moving materials
            (Additional Value Days = 20), no credit for fast-moving materials
            (Terms of Payment override = 0001, illustrating that item-level
            terms win over header-level at invoicing), and making a newly added
            condition type retroactively apply to pre-existing orders via
            Condition Category = L. The lecture then introduced
            <strong>Pricing User Exits</strong> — USEREXIT_PRICING_CHECK
            (validation) and USEREXIT_FIELD_MODIFICATION (value changes), both
            in program LV69AFZZ — used whenever standard configuration can't
            meet a requirement. A full worked example showed how to block
            duplicate manual entry of condition type P004 using a counting loop
            over the KOMV-KSCHL structure, since the standard Manual Entries = D
            option can't selectively allow a first entry while blocking a
            second. Remaining user exits continue next class.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 82 Notes — SAP SD Pricing: Real-World Issues &amp; User Exits 🎓
      </p>
    </div>
  );
};

export default Pricing82;
