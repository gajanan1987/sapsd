const Pricing83 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-indigo">
        <h1>
          🔧 Lecture 83 — Pricing User Exits: Transaction-Based Control &amp;
          GST Auto-Deactivation
        </h1>
        <p>
          SAP SD | Two more real client scenarios solved with
          USEREXIT_FIELD_MODIFICATION
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Key guidance --> */}
        <div className="card">
          <h2>
            <span className="badge">💡</span> Interview Guidance (Recap)
          </h2>
          <div className="callout blue">
            For every user exit scenario, always be ready to explain
            <strong>both</strong> the <strong>Functional Logic</strong> (plain
            business language) and the <strong>Technical Logic</strong> (actual
            field names/pseudo-code) — interviewers may ask for either.
          </div>
          <div className="callout">
            Reminder: a functional consultant never writes the actual ABAP code
            — an <strong>ABAP developer (ABAPer)</strong> implements it in the
            system based on the logic the consultant provides.
          </div>
        </div>
        {/* <!-- Section 1: Transaction-based Manual Entries --> */}
        <div className="card orange">
          <h2>
            <span className="badge">1</span> Issue: Editable Base Price in
            Quotation, Locked in Sales Order
          </h2>
          <div className="callout purple">
            Client requirement: they want to be able to
            <strong>change the base price in a Quotation</strong>, but
            <strong>NOT</strong> be able to change it once it becomes a
            <strong>Sales Order</strong>.
          </div>
          <h3>Why Standard Configuration Can't Solve This</h3>
          <div className="callout red">
            The <strong>Manual Entries</strong> field on a condition type (V/06)
            is a single, static setting — it applies the same way regardless of
            which transaction (quotation vs. order) is being processed. You
            cannot set it to "editable in quotation, locked in order" through
            standard configuration alone.
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
                <td>Transactions involved</td>
                <td>
                  Quotation (T-code VA21) and Sales Order (T-code VA01) — both
                </td>
              </tr>
              <tr>
                <td>User Exit to use</td>
                <td>
                  USEREXIT_FIELD_MODIFICATION (we are actively
                  changing/modifying the Manual Entries setting dynamically)
                </td>
              </tr>
              <tr>
                <td>Program</td>
                <td>LV69AFZZ</td>
              </tr>
            </tbody>
          </table>
          <h3>Functional Logic</h3>
          <div className="stepper">
            <div className="step">
              If document category ={" "}
              <span className="tag tag-quote">Quotation</span>, then for
              condition type <code>PPR0</code>, set Manual Entries =
              <strong>C</strong> (editable)
            </div>
            <div className="step">
              If document category ={" "}
              <span className="tag tag-order">Order</span>, then for condition
              type <code>PPR0</code>, set Manual Entries =<strong>D</strong>{" "}
              (locked)
            </div>
          </div>
          <h3>Technical Logic</h3>
          <div className="callout blue">
            Key structures used in pricing user exits: <code>KOMK</code> =
            header communication structure, <code>KOMP</code> = item
            communication structure, <code>KOMV</code> = the actual
            pricing/condition values structure (where individual condition
            records live in memory during processing).
          </div>
          <div className="code-block">
            <span className="cm">
              * KOMK-VBTYP = Document Category (header field)
            </span>
            <span className="cm">* B = Quotation, C = Order</span>
            <span className="kw">IF</span> KOMK-VBTYP = 'B'.
            <span className="kw">LOOP AT</span> KOMV
            <span className="kw">WHERE</span> KSCHL = 'PPR0'. KOMV-KMANU = 'C'.
            <span className="kw">ENDLOOP</span>.
            <span className="kw">ELSEIF</span> KOMK-VBTYP = 'C'.
            <span className="kw">LOOP AT</span> KOMV
            <span className="kw">WHERE</span> KSCHL = 'PPR0'. KOMV-KMANU = 'D'.
            <span className="kw">ENDLOOP</span>.{" "}
            <span className="kw">ENDIF</span>.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Technical Field</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>KOMK-VBTYP</td>
                <td>
                  Document Category (header level) — identifies whether the
                  document is a quotation, order, etc.
                </td>
              </tr>
              <tr>
                <td>KOMV-KSCHL</td>
                <td>Condition Type (used to target PPR0 specifically)</td>
              </tr>
              <tr>
                <td>KOMV-KMANU</td>
                <td>
                  Manual Entries indicator — dynamically set to C or D based on
                  document category
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            Result: the exact same condition type PPR0 behaves differently
            depending on context — freely editable while still a quotation, but
            frozen the moment it becomes a confirmed sales order.
          </div>
        </div>
        {/* <!-- Section 2: GST auto-deactivation on old returns --> */}
        <div className="card teal">
          <h2>
            <span className="badge">2</span> Issue: Auto-Deactivate GST on
            Returns After 6 Months
          </h2>
          <div className="callout purple">
            Client requirement: if a customer returns goods
            <strong>more than 6 months (180 days)</strong> after the original
            invoice date, the system should automatically
            <strong>deactivate the GST condition types</strong> on that return
            order.
          </div>
          <h3>Key Background Fact</h3>
          <div className="callout blue">
            When you create a <strong>Return Order</strong> with reference to a
            Billing Document (invoice), the return order's
            <strong>Pricing Date</strong> field automatically copies the
            <strong>original invoice date</strong> — this is what makes the age
            calculation possible.
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
                <td>Transaction</td>
                <td>Return Order — T-code VA01</td>
              </tr>
              <tr>
                <td>User Exit to use</td>
                <td>USEREXIT_FIELD_MODIFICATION</td>
              </tr>
              <tr>
                <td>Program</td>
                <td>LV69AFZZ</td>
              </tr>
            </tbody>
          </table>
          <h3>Functional Logic</h3>
          <div className="stepper">
            <div className="step">
              Take the Invoice Date (copied into Pricing Date) and Today's Date
            </div>
            <div className="step">
              If the difference is <strong>more than 180 days</strong>, go to
              the GST condition types and mark them <strong>inactive</strong>
            </div>
          </div>
          <h3>Technical Logic</h3>
          <div className="code-block">
            <span className="cm">
              * KOMK-PRSDT = Pricing Date (header field, = invoice date for
              return orders)
            </span>
            <span className="cm">* KOMK-ERDAT = reference/creation date</span>
            <span className="kw">IF</span> ( KOMK-PRSDT - KOMK-ERDAT ) &gt; 180.
            <span className="kw">LOOP AT</span> KOMV
            <span className="kw">WHERE</span> KSCHL = 'JOIG'
            <span className="kw">OR</span> KSCHL = 'JOCG'
            <span className="kw">OR</span> KSCHL = 'JOSG'. KOMV-KINAKT = 'X'.
            <span className="kw">ENDLOOP</span>.{" "}
            <span className="kw">ENDIF</span>.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Technical Field</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>KOMK-PRSDT</td>
                <td>
                  Pricing Date (header) — equals the invoice date on a return
                  order created with reference
                </td>
              </tr>
              <tr>
                <td>KOMK-ERDAT</td>
                <td>Reference date used for the day-count comparison</td>
              </tr>
              <tr>
                <td>KOMV-KSCHL</td>
                <td>
                  Condition Type — filtered here to JOIG (IGST), JOCG (CGST),
                  JOSG (SGST)
                </td>
              </tr>
              <tr>
                <td>KOMV-KINAKT</td>
                <td>
                  Inactive indicator — setting it to X deactivates that
                  condition line in the document
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            Result: returns processed within 6 months keep GST active as normal;
            returns processed after 6 months automatically have all three GST
            condition types (IGST/CGST/SGST) switched off.
          </div>
        </div>
        {/* <!-- Section 3: Pattern recap --> */}
        <div className="card">
          <h2>
            <span className="badge">🔗</span> The Common Pattern Across Both
            Exits
          </h2>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>What Happens</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  Identify the relevant <strong>header</strong> or
                  <strong>item</strong> field to check (e.g. Document Category,
                  Pricing Date)
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  Evaluate a condition against that field (e.g. "is it a
                  Quotation?", "is the gap &gt; 180 days?")
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  Loop through <code>KOMV</code> (the condition values table)
                  filtering on the relevant Condition Type(s) via
                  <code>KSCHL</code>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  Dynamically set a control field on the matched condition line
                  —<code>KMANU</code> (manual entry) or
                  <code>KINAKT</code> (inactive)
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            This is the general template for most pricing-related user exits:
            check something on the header/item, then loop through KOMV to act on
            specific condition types.
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
                  Why can't standard Manual Entries configuration make a
                  condition type editable in quotation but locked in order?
                </td>
                <td>
                  Manual Entries is a single static setting on the condition
                  type — it can't differentiate behavior by transaction/document
                  type without a user exit
                </td>
              </tr>
              <tr>
                <td>
                  Which user exit is used to dynamically change Manual Entries
                  by document type, and why?
                </td>
                <td>
                  USEREXIT_FIELD_MODIFICATION — because the logic actively
                  modifies (changes) a pricing control field rather than just
                  checking/validating
                </td>
              </tr>
              <tr>
                <td>
                  What header field identifies whether a document is a quotation
                  or an order?
                </td>
                <td>KOMK-VBTYP (Document Category)</td>
              </tr>
              <tr>
                <td>
                  What field in KOMV controls whether a condition type can be
                  manually entered/changed?
                </td>
                <td>KOMV-KMANU</td>
              </tr>
              <tr>
                <td>
                  How does a return order's Pricing Date get set when created
                  with reference to an invoice?
                </td>
                <td>It automatically copies the original invoice's date</td>
              </tr>
              <tr>
                <td>
                  What field in KOMV is used to deactivate a condition type via
                  user exit?
                </td>
                <td>
                  KOMV-KINAKT — setting it to X marks that condition line
                  inactive
                </td>
              </tr>
              <tr>
                <td>
                  Which GST condition types were targeted in the
                  auto-deactivation example?
                </td>
                <td>JOIG (IGST), JOCG (CGST), JOSG (SGST)</td>
              </tr>
              <tr>
                <td>
                  What is the common technical pattern behind most pricing user
                  exits?
                </td>
                <td>
                  Check a header/item field for a condition, then loop through
                  KOMV filtered by KSCHL (condition type) to dynamically set a
                  control field like KMANU or KINAKT
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
                  <span className="tcode">VA21</span>
                </td>
                <td>
                  Create Quotation — one of the two transactions involved in the
                  Manual Entries user exit scenario
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">VA01</span>
                </td>
                <td>
                  Create Sales Order / Return Order — used in both user exit
                  scenarios this lecture
                </td>
              </tr>
              <tr>
                <td>
                  <span className="tcode">V/06</span>
                </td>
                <td>
                  Condition type controls (PPR0's Manual Entries field,
                  referenced as the standard baseline the user exit overrides
                  dynamically)
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
                <td>User exit for both scenarios</td>
                <td>USEREXIT_FIELD_MODIFICATION, program LV69AFZZ</td>
              </tr>
              <tr>
                <td>Document Category field</td>
                <td>KOMK-VBTYP (B = Quotation, C = Order)</td>
              </tr>
              <tr>
                <td>Manual Entries technical field</td>
                <td>KOMV-KMANU (C = editable, D = locked)</td>
              </tr>
              <tr>
                <td>Pricing Date / reference date fields</td>
                <td>
                  KOMK-PRSDT (pricing date), KOMK-ERDAT (reference/creation
                  date)
                </td>
              </tr>
              <tr>
                <td>Inactive indicator field</td>
                <td>KOMV-KINAKT (X = inactive)</td>
              </tr>
              <tr>
                <td>GST return threshold</td>
                <td>180 days (6 months) from invoice date</td>
              </tr>
              <tr>
                <td>GST condition types affected</td>
                <td>JOIG, JOCG, JOSG</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <!-- Extra: Summary --> */}
        <div className="card indigo">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>
          <p>
            This lecture worked through two more pricing user exit scenarios
            using
            <strong>USEREXIT_FIELD_MODIFICATION</strong> (program LV69AFZZ). The
            first let base price (PPR0) remain editable in a Quotation but lock
            automatically once it becomes a Sales Order, by checking the
            header's Document Category (KOMK-VBTYP) and dynamically setting
            KOMV-KMANU to C or D. The second automatically deactivates GST
            condition types (JOIG, JOCG, JOSG) on Return Orders created more
            than 180 days after the original invoice, by comparing the Pricing
            Date (which auto-copies the invoice date on referenced returns)
            against a reference date and setting KOMV-KINAKT to X when the
            threshold is crossed. Both examples reinforced the same underlying
            pattern: check a header condition, then loop through KOMV filtered
            by KSCHL to act on specific condition types — and the reminder that
            consultants must be ready to explain both the functional (business)
            and technical (field-level) version of any such logic in interviews.
            Next class continues with GST configuration.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 83 Notes — SAP SD Pricing: User Exits for Transaction Control
        &amp; GST Auto-Deactivation 🎓
      </p>
    </div>
  );
};

export default Pricing83;
