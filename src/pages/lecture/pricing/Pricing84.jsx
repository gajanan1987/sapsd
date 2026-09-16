const Pricing84 = () => {
  return (
    <div className="lecture-common">
      <div className="header header-orange">
        <h1>
          🧾 Lecture 84 — Free Goods Discount Deactivation, Condition Technique
          Recap &amp; GST Configuration Kickoff
        </h1>
        <p>
          SAP SD | One more pricing user exit, interview-ready condition
          technique, and the start of GST configuration
        </p>
      </div>
      <div className="container">
        {/* <!-- Section 0: Recap --> */}
        <div className="card">
          <h2>
            <span className="badge">↩️</span> Recap — Quotation-Editable /
            Order-Locked Base Price
          </h2>
          <div className="callout blue">
            This scenario (PPR0 editable via Manual Entries = C in a Quotation,
            locked via Manual Entries = D in a Sales Order, using
            <code>USEREXIT_FIELD_MODIFICATION</code> on
            <code>KOMK-VBTYP</code> and <code>KOMV-KMANU</code>) was already
            covered in full in <strong>Lecture 83</strong> — see that lecture's
            notes for the complete functional and technical logic.
          </div>
          <div className="callout">
            Also reconfirmed: the GST auto-deactivation-after-6-months scenario
            (Pricing Date vs. today, 180-day check, <code>KOMV-KINAKT</code> on
            JOIG/JOCG/JOSG) was already completed in
            <strong>Lecture 83</strong> as well — no new content on that scenario
            today.
          </div>
        </div>

        {/* <!-- Section 1: New Issue - Free Goods discount deactivation --> */}
        <div className="card teal">
          <h2>
            <span className="badge">4</span> Issue: Auto-Deactivate Discount When
            Free Goods Is Determined
          </h2>
          <div className="callout purple">
            Client requirement: for <strong>any line item</strong>, if the system
            determines <strong>free goods</strong> against that item, the system
            should automatically
            <strong>inactivate the discount condition type</strong>
            (<code>PDIS</code>) for that main (paid) line item.
          </div>
          <h3>Sales Order Scenario</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Item</th>
                <th>Material</th>
                <th>Item Category</th>
                <th>PDIS Discount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>10</td>
                <td>Material A</td>
                <td>TAN</td>
                <td>10%</td>
                <td>Normal paid item</td>
              </tr>
              <tr>
                <td>20</td>
                <td>Material B</td>
                <td>TAN</td>
                <td>10%</td>
                <td>Normal paid item</td>
              </tr>
              <tr>
                <td>30</td>
                <td>Material C</td>
                <td>TAN</td>
                <td>10%</td>
                <td>Free goods gets determined against this item</td>
              </tr>
              <tr>
                <td>30 (sub-item)</td>
                <td>Free goods text material</td>
                <td className="tag tag-orange">TANN</td>
                <td>—</td>
                <td>
                  System-generated free goods line;
                  <strong>Higher Level Item = 30</strong>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout red">
            Once the free goods sub-item (item category <strong>TANN</strong>) is
            generated under item 30, the requirement is that the
            <strong>PDIS discount sitting on item 30 itself</strong> must be
            switched off — a customer shouldn't get both a discount and free goods
            on the same item.
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
                <td>Sales Order — T-code VA01</td>
              </tr>
              <tr>
                <td>User Exit to use</td>
                <td>
                  USEREXIT_FIELD_MODIFICATION (we are actively modifying a pricing
                  control field)
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
            <div className="step step-teal">
              Check the item category of the current line
            </div>
            <div className="step step-teal">
              If item category = <strong>TANN</strong> (a free goods sub-item),
              take that sub-item's <strong>Higher Level Item</strong> number
            </div>
            <div className="step step-teal">
              Pass this Higher Level Item number into the pricing structure so the
              system knows which <em>main</em> item to act on
            </div>
            <div className="step step-teal">
              Go to the discount condition type <strong>PDIS</strong> on that main
              item and mark it <strong>inactive</strong>
            </div>
          </div>
          <h3>Technical Logic</h3>
          <div className="callout blue">
            <code>KOMP-PSTYV</code> = Item Category field (item level) ·
            <code>KOMP-UEPOS</code> = Higher Level Item field (item level) ·
            <code>KOMV-KPOSN</code> = Item Number field inside the pricing
            structure · <code>KOMV-KSCHL</code> = Condition Type ·
            <code>KOMV-KINAKT</code> = Inactive indicator.
          </div>
          <div className="code-block">
            <span className="cm">* KOMP-PSTYV = Item Category</span>
            <span className="kw">IF</span> KOMP-PSTYV = 'TANN'.

            <span className="cm"
            >* KOMP-UEPOS = Higher Level Item number of this free goods
              sub-item</span
            >
            w_higher_item = KOMP-UEPOS.

            <span className="cm"
            >* Pass the higher-level item number into the pricing structure's
              item field</span
            >
            <span className="kw">LOOP AT</span> KOMV
            <span className="kw">WHERE</span> KPOSN = w_higher_item
            <span className="kw">AND</span> KSCHL = 'PDIS'. KOMV-KINAKT = 'X'.
            <span className="kw">ENDLOOP</span>.

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
                <td>KOMP-PSTYV</td>
                <td>
                  Item Category (item level) — checked for value TANN (free goods
                  sub-item)
                </td>
              </tr>
              <tr>
                <td>KOMP-UEPOS</td>
                <td>
                  Higher Level Item — points from the free goods sub-item back to
                  its main paid item
                </td>
              </tr>
              <tr>
                <td>KOMV-KPOSN</td>
                <td>
                  Item Number field inside the pricing structure — matched against
                  the higher level item
                </td>
              </tr>
              <tr>
                <td>KOMV-KSCHL</td>
                <td>Condition Type — filtered here to PDIS (discount)</td>
              </tr>
              <tr>
                <td>KOMV-KINAKT</td>
                <td>
                  Inactive indicator — set to X to deactivate the discount on the
                  main item
                </td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            Result: whenever free goods is determined against a line, that line's
            PDIS discount is automatically switched off — the customer gets either
            the discount or the free goods, never both on the same item.
          </div>
        </div>

        {/* <!-- Section 2: Condition Technique Recap --> */}
        <div className="card purple">
          <h2>
            <span className="badge">❓</span> Interview Prep — What Is Condition
            Technique?
          </h2>
          <div className="callout purple">
            <strong>Condition Technique</strong> is the overall process the system
            uses to determine condition records into a sales document.
          </div>
          <h3>The Building Blocks (Bottom-Up)</h3>
          <div className="stepper">
            <div className="step step-purple">
              <strong>Condition Records</strong> — the actual rate/value entries
              (maintained via VK11), stored in Condition Tables
            </div>
            <div className="step step-purple">
              <strong>Condition Tables</strong> — a combination of fields used to
              store the condition records
            </div>
            <div className="step step-purple">
              <strong>Access Sequence</strong> — a search strategy that holds
              Condition Tables in specificity order (most specific to most
              general) and searches for a valid condition record
            </div>
            <div className="step step-purple">
              <strong>Condition Type</strong> — has an Access Sequence assigned to
              it
            </div>
            <div className="step step-purple">
              <strong>Pricing Procedure</strong> — contains the Condition Types as
              steps, in sequence
            </div>
            <div className="step step-purple">
              <strong>Pricing Procedure Determination</strong> — Sales Area +
              Document Pricing Procedure + Customer Pricing Procedure decide which
              Pricing Procedure applies (via OVKK)
            </div>
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Term</th>
                <th>Definition</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Condition Table</td>
                <td>
                  A combination of fields that helps store condition records
                </td>
              </tr>
              <tr>
                <td>Access Sequence</td>
                <td>
                  A search strategy that searches for a valid condition record,
                  from the most specific condition table to the most general
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Section 3: GST Theory --> */}
        <div className="card gold">
          <h2>
            <span className="badge">🧾</span> GST Theory — The Four GST Condition
            Types
          </h2>
          <div className="callout">
            GST = <strong>Goods and Services Tax</strong>. Which GST condition
            type applies depends on the relationship between the
            <strong>Plant's state</strong> and the
            <strong>Ship-To Party's state</strong>.
          </div>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>GST Type</th>
                <th>Full Form</th>
                <th>Applies When</th>
                <th>Condition Type</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IGST</td>
                <td>Integrated GST</td>
                <td>
                  Sale is <strong>between two states</strong> — Plant state ≠
                  Ship-To Party state
                </td>
                <td className="tag tag-gold">JOIG</td>
              </tr>
              <tr>
                <td>CGST</td>
                <td>Central GST</td>
                <td>
                  Sale is <strong>within the same state</strong> — Plant state =
                  Ship-To Party state
                </td>
                <td className="tag tag-gold">JOCG</td>
              </tr>
              <tr>
                <td>SGST</td>
                <td>State GST</td>
                <td>
                  Sale is <strong>within the same state</strong> — Plant state =
                  Ship-To Party state (charged together with CGST)
                </td>
                <td className="tag tag-gold">JOSG</td>
              </tr>
              <tr>
                <td>UGST</td>
                <td>Union Territory GST</td>
                <td>
                  Sale is <strong>in a Union Territory</strong> (in place of SGST)
                </td>
                <td className="tag tag-gold">JOUG</td>
              </tr>
            </tbody>
          </table>
          <div className="callout blue">
            Pattern to remember: interstate sales → IGST alone (JOIG). Intrastate
            sales → CGST + SGST together (JOCG + JOSG). Union Territory sales →
            CGST + UGST together (JOCG + JOUG) instead of SGST.
          </div>
        </div>

        {/* <!-- Section 4: GST Configuration --> */}
        <div className="card cyan">
          <h2>
            <span className="badge">⚙️</span> GST Configuration — Getting Started
          </h2>
          <div className="stepper">
            <div className="step step-blue">
              <strong>Assign Tax Procedure to Country</strong> — T-code
              <span className="tcode">OBBG</span>. Go to Country
              <strong>IN</strong>, mention Tax Procedure <strong>TAXINN</strong>,
              save.
            </div>
            <div className="step step-blue">
              <strong>Activate Business Place</strong> — Path: SPRO →
              Cross-Application Components → General Application Functions →
              Business Place → Activate Business Place. If blank, go to New
              Entries, mention Country <strong>IN</strong>, check
              <strong>BP Active</strong>, save.
            </div>
            <div className="step step-blue">
              <strong>Define Business Place</strong> — Same node, Define Business
              Place. Enter Company Code, New Entries, and create one Business
              Place per GST registration (see table below).
            </div>
            <div className="step step-blue">
              <strong>Assign Business Place to Plant(s)</strong> — Same node,
              Assign Business Place to Plant. Each plant gets mapped to its
              state's Business Place. (To be completed next class.)
            </div>
          </div>
          <h3>Business Places Created (Company Code P100)</h3>
          <table className="table-reponsive">
            <thead>
              <tr>
                <th>Business Place</th>
                <th>Description</th>
                <th>Address</th>
                <th>Country</th>
                <th>Region</th>
                <th>Tax Number 3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>P100</td>
                <td>Mumbai Plant GST Registration</td>
                <td>Mumbai Plant GST Registration</td>
                <td>IN</td>
                <td>13</td>
                <td>Company GST Registration Number maintained here</td>
              </tr>
              <tr>
                <td>P200</td>
                <td>Wapi Plant GST Registration</td>
                <td>Wapi Plant GST Registration</td>
                <td>IN</td>
                <td>067</td>
                <td>Not maintained in the practice system</td>
              </tr>
            </tbody>
          </table>
          <div className="callout green">
            Key rule: <strong>Business Place = GST Registration</strong>, and it
            is defined <strong>state-wise</strong>, not plant-wise. If several
            plants sit in the <em>same</em> state, they share
            <strong>one</strong> Business Place. If plants sit in
            <em>different</em> states, a <strong>separate</strong> Business Place
            is required for each state.
          </div>
          <div className="callout blue">
            The <strong>Tax Number 3</strong> field inside Business Place is where
            the Company's GST Registration Number is maintained.
          </div>
          <div className="callout">
            GST configuration continues next class, starting with the Assign
            Business Place to Plant step.
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
                  How do you auto-deactivate a discount whenever free goods is
                  determined on a line?
                </td>
                <td>
                  USEREXIT_FIELD_MODIFICATION checks item category = TANN, takes
                  the sub-item's Higher Level Item (KOMP-UEPOS), matches it to
                  KOMV-KPOSN, and sets KOMV-KINAKT = X on the PDIS condition of
                  that main item
                </td>
              </tr>
              <tr>
                <td>
                  What item category identifies a free goods sub-item in the sales
                  order?
                </td>
                <td>TANN</td>
              </tr>
              <tr>
                <td>
                  What field links a free goods sub-item back to its main paid
                  item?
                </td>
                <td>KOMP-UEPOS (Higher Level Item)</td>
              </tr>
              <tr>
                <td>What is condition technique?</td>
                <td>
                  The process the system uses to determine condition records into
                  the sales document — built from condition records, stored in
                  condition tables, searched via access sequence, assigned to
                  condition types, placed in the pricing procedure
                </td>
              </tr>
              <tr>
                <td>What is a condition table?</td>
                <td>
                  A combination of fields that helps store condition records
                </td>
              </tr>
              <tr>
                <td>What is an access sequence?</td>
                <td>
                  A search strategy that searches for a valid condition record,
                  from the most specific condition table to the most general
                </td>
              </tr>
              <tr>
                <td>
                  What are the four GST condition types and when does each apply?
                </td>
                <td>
                  JOIG (IGST) for interstate sales; JOCG (CGST) and JOSG (SGST)
                  together for intrastate sales; JOUG (UGST) replaces SGST for
                  Union Territory sales
                </td>
              </tr>
              <tr>
                <td>
                  What T-code assigns the tax procedure to a country for GST?
                </td>
                <td>OBBG — assign Tax Procedure TAXINN to Country IN</td>
              </tr>
              <tr>
                <td>What is a Business Place in SAP GST configuration?</td>
                <td>
                  It represents the GST registration — defined state-wise, one per
                  state (shared across all plants in that state)
                </td>
              </tr>
              <tr>
                <td>
                  Which field inside Business Place stores the company's GST
                  registration number?
                </td>
                <td>Tax Number 3</td>
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
                <td><span className="tcode">VA01</span></td>
                <td>
                  Sales order transaction where the free-goods
                  discount-deactivation issue occurs and is resolved via user exit
                </td>
              </tr>
              <tr>
                <td><span className="tcode">V/06</span></td>
                <td>
                  Condition type controls (PDIS discount condition type referenced
                  by the free goods scenario)
                </td>
              </tr>
              <tr>
                <td><span className="tcode">OBBG</span></td>
                <td>Assign Tax Procedure (TAXINN) to Country (IN) for GST</td>
              </tr>
              <tr>
                <td><span className="tcode">SPRO</span></td>
                <td>
                  Path to Activate Business Place, Define Business Place, and
                  Assign Business Place to Plant (Cross-Application Components →
                  General Application Functions → Business Place)
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
                <td>Free goods discount deactivation logic</td>
                <td>
                  KOMP-PSTYV = TANN → KOMP-UEPOS → matched to KOMV-KPOSN →
                  KOMV-KSCHL = PDIS → KOMV-KINAKT = X
                </td>
              </tr>
              <tr>
                <td>GST condition types</td>
                <td>JOIG (IGST), JOCG (CGST), JOSG (SGST), JOUG (UGST)</td>
              </tr>
              <tr>
                <td>Tax procedure for India</td>
                <td>TAXINN, assigned to Country IN via OBBG</td>
              </tr>
              <tr>
                <td>Business Place rule</td>
                <td>
                  One per state — shared across all plants in that state, not
                  defined per plant
                </td>
              </tr>
              <tr>
                <td>Business Place — Tax Number 3</td>
                <td>Stores the Company GST Registration Number</td>
              </tr>
              <tr>
                <td>Business Places created</td>
                <td>P100 (Mumbai, Region 13); P200 (Wapi, Region 067)</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* <!-- Extra: Summary --> */}
        <div className="card indigo">
          <h2><span className="badge">📝</span> Summary</h2>
          <p>
            This lecture closed out the pricing user exit series with a fourth
            scenario: automatically deactivating the discount condition type PDIS
            on any main line item where the system has determined free goods, by
            checking for the free-goods item category TANN, tracing back to the
            main item via KOMP-UEPOS, and setting KOMV-KINAKT = X on that item's
            PDIS condition through USEREXIT_FIELD_MODIFICATION. The class then
            revisited interview-style fundamentals — the definition of condition
            technique and its building blocks (condition records → condition
            tables → access sequence → condition type → pricing procedure) —
            before moving into GST theory: IGST (JOIG) for interstate sales, CGST
            + SGST (JOCG + JOSG) for intrastate sales, and UGST (JOUG) replacing
            SGST for Union Territory sales. GST configuration then began:
            assigning tax procedure TAXINN to Country IN via OBBG, activating
            Business Place, and defining two Business Places (P100 Mumbai, P200
            Wapi) with their GST registration details, including the Tax Number 3
            field for the company's GST registration number. The remaining step —
            assigning Business Place to Plant — and the rest of GST configuration
            continue next class.
          </p>
        </div>
      </div>
      <p className="footer-note">
        Lecture 84 Notes — SAP SD Pricing: Free Goods Discount Deactivation,
        Condition Technique &amp; GST Configuration 🎓
      </p>
    </div>
  );
};

export default Pricing84;
