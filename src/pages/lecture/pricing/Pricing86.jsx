const Pricing86 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-blue">
        <h1>
          🏦 Lecture 86 — GST Configuration: Pricing Procedure, Tax
          Determination, Condition Records &amp; GL Posting
        </h1>
        <p>
          SAP SD | Placing PYG/POCG/POSG into the pricing procedure after
          Net Value, Define Tax Determination Rules, Define Tax
          Relevancy of Master Records, maintaining condition records for
          interstate (IGST) vs. intrastate (CGST+SGST) sales, assigning
          GL accounts via SM30 and OB40, and a full end-to-end test with
          two customers
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Recap --> */}
        <div className="card">
          <h2><span className="badge">↩️</span> Where We Left Off</h2>
          <div className="callout blue">
            💡 Lecture 85 built the GST pricing skeleton: condition
            tables <code>686</code>/<code>687</code>/<code>688</code>
            (<span className="tcode">V/03</span>), access sequences
            <code>PYG</code>/<code>POCG</code>/<code>POSG</code>
            (<span className="tcode">V/07</span>), and condition types
            <code>PYG</code>/<code>POCG</code>/<code>POSG</code> copied
            from <code>MWST</code> (<span className="tcode">V/06</span>).
            Placing them into the pricing procedure was left for today —
            along with tax determination rules, condition records, GL
            account assignment, and live testing.
          </div>
        </div>

        {/* <!-- Section 1: Placing GST Condition Types in Pricing Procedure --> */}
        <div className="card teal">
          <h2>
            <span className="badge">1</span> Placing GST Condition Types in
            the Pricing Procedure
          </h2>
          <div className="callout teal">
            💡 T-code <span className="tcode">V/08</span> → select the
            pricing procedure → double-click <strong>Control</strong> →
            scroll down to just after the <strong>Net Value</strong>
            step.
          </div>
          <div className="callout red">
            📖 <strong>Remove the standard tax condition type first:</strong>
            once GST condition types are configured, the standard
            <code>PWST</code> (Output Tax) line is no longer needed —
            it's removed from the pricing procedure before the GST steps
            are added.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>From (Base)</th>
                <th>Requirement</th>
                <th>Base Type</th>
                <th>Account Key</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>140</td>
                <td><code>PYG</code> (IGST)</td>
                <td>120 (Net Value)</td>
                <td>10</td>
                <td>16</td>
                <td><code>PY</code></td>
              </tr>
              <tr>
                <td>150</td>
                <td><code>POCG</code> (CGST)</td>
                <td>120 (Net Value)</td>
                <td>10</td>
                <td>16</td>
                <td><code>POC</code></td>
              </tr>
              <tr>
                <td>160</td>
                <td><code>POSG</code> (SGST)</td>
                <td>120 (Net Value)</td>
                <td>10</td>
                <td>16</td>
                <td><code>POS</code></td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            📖 <strong>Requirement 10</strong> is the standard Tax
            requirement (already covered in Lecture 81 — Plant should not
            be blank), confirming that all three GST condition types
            reuse the same standard tax requirement. <strong>Base Type
              16</strong> is the alternative condition base value formula
            used to calculate each GST line off the Net Value step
            (120).
          </div>
          <p className="note-text">
            📌 <strong>Audio-quality flag:</strong> the account keys used
            in this lecture — <code>PY</code>, <code>POC</code>,
            <code>POS</code> — are rendered slightly differently than the
            custom account keys built in Lecture 85 (<code>PYI</code>,
            <code>POC</code>, <code>PYS</code>). Since <code>PY</code>
            and <code>POS</code> are used consistently and repeatedly
            throughout <strong>this entire lecture</strong> (both here
            and later in the GL assignment steps), they are used as
            written here; confirm against the system which naming
            (<code>PYI</code>/<code>PYS</code> vs. <code>PY</code>/
            <code>POS</code>) is actually configured, since the pricing
            procedure and the GL assignment steps (<span className="tcode">OB40</span>)
            must reference the <strong>exact same</strong> account key
            for postings to work.
          </p>
        </div>

        {/* <!-- Section 2: Define Tax Determination Rules --> */}
        <div className="card orange">
          <h2>
            <span className="badge">2</span> Define Tax Determination Rules
          </h2>
          <div className="callout orange">
            💡 SPRO path: Sales and Distribution → Basic Functions →
            Taxes → Define Tax Determination Rules. Country
            <strong><code>IN</code></strong>.
          </div>
          <div className="callout blue">
            📖 <strong>What this configures:</strong> the
            <strong>sequence</strong> in which each GST condition type is
            tied to a specific <strong>Tax Classification</strong> field
            on the customer. This sequence must match which Tax
            Classification field (1, 2, or 3) each condition type was
            built against back in Lecture 85's condition tables.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Sequence</th>
                <th>Condition Type</th>
                <th>Customer Tax Classification Field</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>1</td><td><code>PYG</code> (IGST)</td><td>Tax Classification 1</td></tr>
              <tr><td>2</td><td><code>POCG</code> (CGST)</td><td>Tax Classification 2</td></tr>
              <tr><td>3</td><td><code>POSG</code> (SGST)</td><td>Tax Classification 3</td></tr>
            </tbody>
          </table>
          <div className="callout purple">
            📖 Since <code>PYG</code>'s condition table was built against
            Tax Classification 1 of the customer, it must be sequence 1
            here; <code>POCG</code> against Tax Classification 2 must be
            sequence 2; <code>POSG</code> against Tax Classification 3
            must be sequence 3. Getting this sequence wrong means the tax
            classification screen on the customer/material master won't
            line up with the right condition type.
          </div>
        </div>

        {/* <!-- Section 3: Define Tax Relevancy of Master Records --> */}
        <div className="card purple">
          <h2>
            <span className="badge">3</span> Define Tax Relevancy of Master
            Records
          </h2>
          <div className="callout purple">
            💡 Same SPRO path, just below Define Tax Determination
            Rules. Two sub-nodes: <strong>Customer Taxes</strong> and
            <strong>Material Taxes</strong>.
          </div>

          <h3>Customer Taxes</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Tax Classification Value</th>
                <th>Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr><td><code>PYG</code></td><td>0</td><td>No Tax</td></tr>
              <tr><td><code>PYG</code></td><td>1</td><td>Relevant for Tax</td></tr>
              <tr><td><code>POCG</code></td><td>0</td><td>No Tax</td></tr>
              <tr><td><code>POCG</code></td><td>1</td><td>Relevant for Tax</td></tr>
              <tr><td><code>POSG</code></td><td>0</td><td>No Tax</td></tr>
              <tr><td><code>POSG</code></td><td>1</td><td>Relevant for Tax</td></tr>
            </tbody>
          </table>

          <h3>Material Taxes</h3>
          <div className="callout blue">
            📖 Identical structure, maintained per condition type instead
            of per customer: <code>PYG</code>, <code>POCG</code>, and
            <code>POSG</code> each get <strong>0 = No Tax</strong> and
            <strong>1 = Relevant for Tax</strong> entries.
          </div>
        </div>

        {/* <!-- Section 4: Condition Records - IGST --> */}
        <div className="card red">
          <h2>
            <span className="badge">4</span> Maintain Condition Records —
            IGST (Interstate Logic)
          </h2>
          <div className="callout red">
            💡 <strong>IGST applies only when the Plant's state differs
              from the Ship-To/Customer's state</strong> — a genuinely
            interstate sale. This has a real consequence for how many
            condition records must be maintained.
          </div>
          <div className="callout gold">
            📖 <strong>The combinatorics of a real project:</strong> if a
            country has, say, 28 states, then for a plant located in one
            state, IGST condition records must be maintained against
            <strong>every other state except its own</strong> — 27
            records for that one plant. A second plant in a different
            state needs its own 27 records (again, every state except
            its own). The <strong>same-state combination is never
              maintained for IGST</strong>, since that would be an
            intrastate sale (CGST+SGST territory instead).
          </div>
          <div className="callout blue">
            📖 <strong>What was actually maintained in this practice
              system</strong> (a simplified subset, not the full 27-state
            matrix): condition records for Departure Country
            <code>IN</code>, using the condition table fields established
            in Lecture 85 — Region of Delivering Plant, Region of
            Ship-To Party, Tax Classification of Customer, Tax
            Classification of Material, and Control Code (HSN).
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Plant</th>
                <th>Region of Plant</th>
                <th>Region of Customer</th>
                <th>Tax Class. (Cust./Mat.)</th>
                <th>Control Code</th>
                <th>Rate</th>
                <th>Tax Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P100 (Mumbai)</td>
                <td>13 (Maharashtra)</td>
                <td>36 (Telangana)</td>
                <td>1 / 1</td>
                <td><code>PHSN.99.9999</code></td>
                <td>18%</td>
                <td><code>PA</code></td>
              </tr>
              <tr>
                <td>P200 (Wapi)</td>
                <td>06 (Gujarat)</td>
                <td>36 (Telangana)</td>
                <td>1 / 1</td>
                <td><code>PHSN.99.9999</code></td>
                <td>18%</td>
                <td><code>PA</code></td>
              </tr>
            </tbody>
          </table>
          <p className="note-text">
            📌 <strong>Note:</strong> <code>PHSN.99.9999</code> is a
            dummy/placeholder HSN code used purely for this practice
            system's Control Code field — it is not a real HSN code. The
            Control Code field on the condition record must match the
            HSN code maintained on the material master's Foreign
            Trade/Export view (established in Lecture 85).
          </p>
          <div className="callout green">
            ✅ <strong>Tax Code <code>PA</code></strong> matches the IGST
            tax code created in Lecture 85 via <span className="tcode">FTXP</span> —
            consistent across both lectures.
          </div>
        </div>

        {/* <!-- Section 5: Condition Records - CGST & SGST --> */}
        <div className="card gold">
          <h2>
            <span className="badge">5</span> Maintain Condition Records —
            CGST &amp; SGST (Intrastate Logic)
          </h2>
          <div className="callout gold">
            💡 <strong>CGST and SGST apply only when the Plant's region
              and the Customer's region are the SAME</strong> — the
            opposite condition from IGST, since these two apply together
            only for intrastate sales.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Plant</th>
                <th>Region of Plant</th>
                <th>Region of Customer</th>
                <th>Rate</th>
                <th>Tax Code</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><code>POCG</code> (CGST)</td>
                <td>P100 (Mumbai)</td>
                <td>13</td>
                <td>13 (same)</td>
                <td>9%</td>
                <td><code>PC</code></td>
              </tr>
              <tr>
                <td><code>POCG</code> (CGST)</td>
                <td>P200 (Wapi)</td>
                <td>06</td>
                <td>06 (same)</td>
                <td>9%</td>
                <td><code>PC</code></td>
              </tr>
              <tr>
                <td><code>POSG</code> (SGST)</td>
                <td>P100 (Mumbai)</td>
                <td>13</td>
                <td>13 (same)</td>
                <td>9%</td>
                <td><code>PS</code></td>
              </tr>
              <tr>
                <td><code>POSG</code> (SGST)</td>
                <td>P200 (Wapi)</td>
                <td>06</td>
                <td>06 (same)</td>
                <td>9%</td>
                <td><code>PS</code></td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            📖 <strong>9% + 9% = 18%</strong> — CGST and SGST are always
            maintained at half the equivalent IGST rate each, so that an
            intrastate sale (CGST+SGST) and an interstate sale (IGST)
            both land on the same total tax burden (18%) for the same
            material.
          </div>
          <div className="callout green">
            ✅ Tax Codes <code>PC</code> (CGST) and <code>PS</code>
            (SGST) both match the codes created in Lecture 85 via
            <span className="tcode">FTXP</span> — consistent across both
            lectures. (A brief live mix-up between <code>PC</code> and
            <code>PS</code> during the demo was corrected on the spot;
            the table above reflects the corrected, final values.)
          </div>
        </div>

        {/* <!-- Section 6: GL Assignment Step 1 - SM30 --> */}
        <div className="card indigo">
          <h2>
            <span className="badge">6</span> Assign GL Accounts — Step 1
            (<span className="tcode">SM30</span>)
          </h2>
          <div className="callout indigo">
            💡 T-code <span className="tcode">SM30</span>, table
            <strong><code>J_1IT030K_V</code></strong>. Click
            <strong>Maintain</strong>.
          </div>
          <div className="stepper">
            <div className="step step-blue">
              Mention Chart of Accounts <code>IND</code> and Transaction
              (Account Key). Continue.
            </div>
            <div className="step step-blue">
              New Entries → for account key <code>PY</code> (IGST): Tax
              Code <code>PA</code>, Business Place <code>P100</code>, GL
              Account <code>511110</code>; then a second row for
              Business Place <code>P200</code>, GL Account
              <code>511110</code> again.
            </div>
            <div className="step step-blue">
              Repeat for account key <code>POC</code> (CGST): Tax Code
              <code>PC</code>, Business Place <code>P100</code> → GL
              <code>522220</code>; Business Place <code>P200</code> → GL
              <code>522220</code>.
            </div>
            <div className="step step-blue">
              Repeat for account key <code>POS</code> (SGST): Tax Code
              <code>PS</code>, Business Place <code>P100</code> → GL
              <code>533330</code>; Business Place <code>P200</code> → GL
              <code>533330</code>.
            </div>
          </div>
          <div className="callout green">
            ✅ All three GL account numbers (<code>511110</code>,
            <code>522220</code>, <code>533330</code>) match exactly what
            was created via <span className="tcode">FS00</span> in Lecture
            85 — fully consistent across both lectures.
          </div>
        </div>

        {/* <!-- Section 7: GL Assignment Step 2 - OB40 --> */}
        <div className="card brown">
          <h2>
            <span className="badge">7</span> Assign GL Accounts — Step 2
            (<span className="tcode">OB40</span>)
          </h2>
          <div className="callout brown">
            💡 T-code <span className="tcode">OB40</span>. Double-click each
            account key in turn.
          </div>
          <div className="stepper">
            <div className="step step-orange">
              Double-click account key <code>PY</code> (IGST). Chart of
              Accounts <code>IND</code>. Check the <strong>Tax
                Code</strong> checkbox. Save.
            </div>
            <div className="step step-orange">
              Go to <strong>Posting Key</strong>: mention Debit
              <code>40</code>, Credit <code>50</code>. Save.
            </div>
            <div className="step step-orange">
              Go to <strong>Accounts</strong>: mention Tax Code
              <code>PA</code> and GL Account <code>511110</code>. Save.
            </div>
            <div className="step step-orange">
              Repeat the exact same three sub-steps for account key
              <code>POC</code> (CGST) — Tax Code <code>PC</code>, GL
              <code>522220</code> — and account key <code>POS</code>
              (SGST) — Tax Code <code>PS</code>, GL <code>533330</code>.
            </div>
          </div>
          <div className="callout blue">
            📖 <strong>Why both SM30 and OB40 are needed:</strong> SM30
            (table <code>J_1IT030K_V</code>) maps Tax Code + Business
            Place to a GL account for India's localization layer; OB40
            maps the Account Key itself (via Posting Keys and Tax Code →
            GL Account) into standard FI account determination. Both are
            required for the posting to actually happen correctly at
            invoice time.
          </div>
        </div>

        {/* <!-- Section 8: Master Data Prerequisites --> */}
        <div className="card cyan">
          <h2>
            <span className="badge">8</span> Master Data Prerequisites —
            Customer, Material &amp; Plant Region
          </h2>
          <div className="callout cyan">
            💡 With configuration complete, three master data checks
            remain before GST will actually determine on an order.
          </div>
          <div className="stepper">
            <div className="step step-teal">
              <strong>Customer Master</strong> — maintain Tax
              Classification = <code>1</code> on the Sales/Billing
              Documents view, for each customer. Also check
              <strong>General Data → Address → Region</strong> — this is
              what makes a customer interstate or intrastate relative to
              the plant. Customer <code>HD02100553</code>: Region
              <code>36</code> (Telangana). Customer
              <code>HD02100554</code>: Region <code>13</code>
              (Maharashtra — same as the Mumbai plant).
            </div>
            <div className="step step-teal">
              <strong>Material Master</strong> — maintain Tax
              Classification = <code>1</code> on the Sales view.
            </div>
            <div className="step step-teal">
              <strong>Plant Region (Enterprise Structure)</strong> —
              check the Region field on each plant's address (defined as
              part of Enterprise Structure). <strong>If the plant's
                region is blank, the system will not determine any GST
                condition type at all</strong>, regardless of how correctly
              everything else is configured. Both <code>P100</code>
              (Region <code>13</code>) and <code>P200</code> were
              confirmed to have their Region field populated.
            </div>
          </div>
        </div>

        {/* <!-- Section 9: End-to-End Testing --> */}
        <div className="card pink">
          <h2>
            <span className="badge">9</span> End-to-End Testing
          </h2>

          <h3>Test 1 — Interstate Sale → IGST</h3>
          <div className="stepper">
            <div className="step">
              <span className="tcode">VA01</span>, order for customer
              <code>HD02100553</code> (Region 36 — different from the
              Mumbai plant's Region 13), material (VAXINE1500),
              quantity 100.
            </div>
            <div className="step">
              Double-click the item, scroll the conditions — confirm
              <code>PYG</code> appears at <strong>18%</strong>, since the
              customer's region differs from the plant's region. Save.
            </div>
            <div className="step">
              Create the delivery, do the picking, perform PGI. Create
              the invoice. Save.
            </div>
            <div className="step">
              Open the invoice in change mode → Accounting: confirm the
              IGST posting shows GL Account <code>511110</code>.
            </div>
          </div>

          <h3>Test 2 — Intrastate Sale → CGST + SGST</h3>
          <div className="stepper">
            <div className="step">
              <span className="tcode">VA01</span>, order for customer
              <code>HD02100554</code> (Region 13 — same as the Mumbai
              plant's Region 13).
            </div>
            <div className="step">
              Confirm both <code>POCG</code> (CGST, 9%) and
              <code>POSG</code> (SGST, 9%) appear in the conditions,
              since the customer's region matches the plant's region.
              Save.
            </div>
            <div className="step">
              Create the delivery, perform PGI, create the invoice. Save.
            </div>
            <div className="step">
              Open the invoice in change mode → Accounting: confirm CGST
              posts to GL <code>522220</code> and SGST posts to GL
              <code>533330</code>.
            </div>
          </div>
          <p className="note-text">
            📌 A brief aside during the demo noted the customer's
            <strong>Account Assignment Group</strong> (e.g. <code>P3</code>)
            differing from what was expected — this is a separate,
            unrelated revenue account determination field and was
            confirmed as not affecting the GST test; it is not part of
            the GST configuration itself.
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
                <td>Where and how are GST condition types placed in the pricing procedure?</td>
                <td>Via V/08, right after the Net Value step; the standard PWST tax line is removed first, then PYG/POCG/POSG are added with From = the Net Value step, Requirement 10, Base Type 16, and their respective custom account keys</td>
              </tr>
              <tr>
                <td>What does Define Tax Determination Rules configure for GST?</td>
                <td>The sequence linking each GST condition type to a specific customer Tax Classification field — sequence 1/PYG/Tax Classification 1, sequence 2/POCG/Tax Classification 2, sequence 3/POSG/Tax Classification 3</td>
              </tr>
              <tr>
                <td>What does Define Tax Relevancy of Master Records configure, and for what two master records?</td>
                <td>For each GST condition type, it defines Tax Classification values 0 (No Tax) and 1 (Relevant for Tax) — maintained separately under Customer Taxes and Material Taxes</td>
              </tr>
              <tr>
                <td>What determines whether a sale gets IGST vs. CGST+SGST?</td>
                <td>Whether the plant's region and the customer's (ship-to's) region are different (IGST, interstate) or the same (CGST+SGST together, intrastate)</td>
              </tr>
              <tr>
                <td>In a real project with 28 states, how many IGST condition records would one plant need?</td>
                <td>27 — one for every other state except the plant's own state; the same-state combination is never maintained for IGST since that would be an intrastate sale</td>
              </tr>
              <tr>
                <td>Why are CGST and SGST both maintained at half the IGST rate (e.g. 9%+9% vs. 18%)?</td>
                <td>So the total tax burden on a given material is the same whether the sale is interstate (IGST alone) or intrastate (CGST+SGST together)</td>
              </tr>
              <tr>
                <td>What does the Control Code field on a GST condition record represent?</td>
                <td>The HSN code — it must match the HSN/Control Code maintained on the material master's Foreign Trade/Export view</td>
              </tr>
              <tr>
                <td>What two steps are needed to assign GL accounts for GST, and what does each configure?</td>
                <td>SM30 on table J_1IT030K_V (Tax Code + Business Place → GL Account, for India's localization layer) and OB40 (Account Key → Posting Keys, Tax Code → GL Account, for standard FI account determination) — both are required</td>
              </tr>
              <tr>
                <td>What three master data checks are required before GST will actually determine on an order?</td>
                <td>Customer Master Tax Classification = 1 (plus a populated Region field), Material Master Tax Classification = 1, and a populated Region field on the plant's address in Enterprise Structure</td>
              </tr>
              <tr>
                <td>What happens if a plant's Region field is left blank in Enterprise Structure?</td>
                <td>The system will not determine any GST condition type at all for that plant, no matter how correctly the rest of the GST configuration is maintained</td>
              </tr>
              <tr>
                <td>In the final test, why did the first order determine IGST and the second determine CGST+SGST?</td>
                <td>The first customer's region (36) differed from the Mumbai plant's region (13) — interstate, IGST; the second customer's region (13) matched the Mumbai plant's region (13) — intrastate, CGST+SGST</td>
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
                <td><span className="tcode">V/08</span></td>
                <td>Maintain Pricing Procedure — used to remove PWST and add PYG/POCG/POSG after the Net Value step</td>
              </tr>
              <tr>
                <td><span className="tcode">VK11</span></td>
                <td>Create Condition Records — used to maintain the IGST, CGST, and SGST condition records for both plants</td>
              </tr>
              <tr>
                <td><span className="tcode">SM30</span></td>
                <td>Table Maintenance — used on table J_1IT030K_V to map Tax Code + Business Place to GL Account, per account key</td>
              </tr>
              <tr>
                <td><span className="tcode">OB40</span></td>
                <td>Maintain Automatic G/L Account Determination — used per account key (PY, POC, POS) to set Posting Keys and Tax Code → GL Account mapping</td>
              </tr>
              <tr>
                <td><span className="tcode">VA01</span></td>
                <td>Create Sales Order — used for both end-to-end test scenarios (interstate and intrastate)</td>
              </tr>
              <tr>
                <td><span className="tcode">VL01N</span></td>
                <td>Create Delivery — used in both test scenarios en route to invoicing</td>
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
                <td>Pricing procedure placement (V/08)</td>
                <td>PWST removed; PYG (140), POCG (150), POSG (160) added after Net Value (120), all with Requirement 10, Base Type 16, and account keys PY/POC/POS respectively</td>
              </tr>
              <tr>
                <td>Tax Determination Rules sequence</td>
                <td>Sequence 1 = PYG / Tax Classification 1; Sequence 2 = POCG / Tax Classification 2; Sequence 3 = POSG / Tax Classification 3</td>
              </tr>
              <tr>
                <td>Tax Relevancy of Master Records</td>
                <td>Customer Taxes and Material Taxes both maintain 0 = No Tax / 1 = Relevant for Tax, per GST condition type</td>
              </tr>
              <tr>
                <td>IGST condition records (interstate)</td>
                <td>P100 (Region 13) + Customer Region 36, and P200 (Region 06) + Customer Region 36; both 18%, Tax Code PA; in a real project, every other-state combination per plant would be maintained (27 records per plant for a 28-state country)</td>
              </tr>
              <tr>
                <td>CGST/SGST condition records (intrastate)</td>
                <td>P100 (13/13) and P200 (06/06); CGST 9% Tax Code PC, SGST 9% Tax Code PS</td>
              </tr>
              <tr>
                <td>Control Code (HSN)</td>
                <td>Must match the HSN code on the material master's Foreign Trade/Export view; practice-system placeholder used: PHSN.99.9999</td>
              </tr>
              <tr>
                <td>GL Account Assignment — SM30 (table J_1IT030K_V)</td>
                <td>Chart of Accounts IND; PY/PA → 511110 (P100 &amp; P200); POC/PC → 522220 (P100 &amp; P200); POS/PS → 533330 (P100 &amp; P200)</td>
              </tr>
              <tr>
                <td>GL Account Assignment — OB40</td>
                <td>Per account key: Check Tax Code, Posting Key Debit 40/Credit 50, then Tax Code → GL Account (PA→511110, PC→522220, PS→533330)</td>
              </tr>
              <tr>
                <td>Master data prerequisites</td>
                <td>Customer Master Tax Classification = 1 + populated Region; Material Master Tax Classification = 1; Plant Region populated in Enterprise Structure (mandatory — blank region blocks GST determination entirely)</td>
              </tr>
              <tr>
                <td>Test customers</td>
                <td>HD02100553 (Region 36, Telangana) → IGST; HD02100554 (Region 13, Maharashtra, same as Mumbai plant) → CGST + SGST</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Extra: Summary --> */}
        <div className="card">
          <h2><span className="badge">📝</span> Summary</h2>
          <p>
            This lecture completed the GST configuration build-out that
            began in Lecture 84. The GST condition types
            (<code>PYG</code>, <code>POCG</code>, <code>POSG</code>) were
            placed into the pricing procedure right after Net Value
            (<span className="tcode">V/08</span>), replacing the standard
            <code>PWST</code> tax line, each carrying Requirement 10,
            Base Type 16, and a custom account key. <strong>Define Tax
              Determination Rules</strong> then linked each condition type
            to its matching customer Tax Classification field by
            sequence, and <strong>Define Tax Relevancy of Master
              Records</strong> set the 0/1 (No Tax/Relevant) values for
            both Customer Taxes and Material Taxes. The heart of the
            lecture was <strong>condition record maintenance</strong>
            (<span className="tcode">VK11</span>), illustrating the core GST
            business rule with a live example: IGST only when plant
            region ≠ customer region (with the real-world implication
            that a plant needs a condition record for every other state
            it can interstate-sell into), and CGST+SGST only when plant
            region = customer region, each at half the IGST rate. GL
            account assignment was then completed in two parts —
            <span className="tcode">SM30</span> on table
            <code>J_1IT030K_V</code> (Tax Code + Business Place → GL
            Account) and <span className="tcode">OB40</span> (Account Key →
            Posting Keys and Tax Code → GL Account) — both required for
            postings to work correctly. After confirming three master
            data prerequisites (Customer and Material Tax Classification,
            and critically, a populated plant Region in Enterprise
            Structure, without which GST never determines at all), the
            lecture closed with two full end-to-end tests: an interstate
            order correctly determining IGST at 18% (posting to GL
            511110), and an intrastate order correctly determining CGST +
            SGST at 9%+9% (posting to GL 522220 and GL 533330
            respectively). GST configuration is now complete; the next
            topic is Free Goods.
          </p>
        </div>

        {/* <!-- Best Practice / Next Class --> */}
        <div className="card">
          <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
          <ul>
            <li>
              <strong>GST determination is fundamentally a region
                comparison</strong> — every rule in this lecture (which
              condition type fires, how many condition records a real
              project needs) reduces to a single question: is the
              plant's region the same as the customer's region, or not?
            </li>
            <li>
              <strong>Configuration consistency across account keys is
                non-negotiable</strong> — the account key used in the
              pricing procedure (V/08) must be the exact same one used in
              GL assignment (OB40, SM30); this lecture's own PY/POC/POS
              vs. Lecture 85's PYI/POC/PYS naming discrepancy is exactly
              the kind of mismatch that silently breaks GST postings in a
              real system.
            </li>
            <li>
              <strong>Two separate GL assignment steps exist for a
                reason</strong> — SM30 handles India's localization-specific
              business-place-level mapping, while OB40 handles standard
              FI account determination; both are needed, and skipping
              either one leaves the posting incomplete.
            </li>
            <li>
              <strong>Master data can silently block an otherwise
                perfect configuration</strong> — a blank plant Region in
              Enterprise Structure is enough to stop GST from determining
              at all, even with every other piece of config correct;
              this is a common real-world troubleshooting trap.
            </li>
            <li>
              <strong>CGST + SGST is always a matched pair, never
                partial</strong> — the two condition types are configured
              and tested together throughout, since neither one alone
              represents a valid intrastate tax outcome.
            </li>
          </ul>
          <div className="callout green">
            📅 <strong>Next class:</strong> Free Goods — a new pricing
            topic.
          </div>
        </div>
      </div>
      <p className="footer-note">
        Lecture 86 Notes — GST Configuration: Pricing Procedure, Tax
        Determination, Condition Records &amp; GL Posting 🎓
      </p>
    </div>
  );
};

export default Pricing86;
