const Material23 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-purple">
    <h1>📊 Lecture 23 — CMIR, Condition Master &amp; Stock Posting</h1>
    <p>
     SAP SD | Creating CMIR (VD51) and Condition Master (VK11), then stock
     posting via MB1C — and fixing every error along the way
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Recap --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> Where We Left Off</h2>
     <div className="callout blue">
      💡 Material Master creation is functionally complete (detailed
      field-by-field review is still deferred until after the
      Enquiry-to-Invoice cycle). Today covers the remaining two master data
      types — <strong>CMIR</strong> and <strong>Condition Master</strong> —
      then moves into <strong>Stock Posting</strong>, a prerequisite for
      delivery and invoicing.
     </div>
    </div>

    {/* <!-- Section 1: CMIR recap --> */}
    <div className="card teal">
     <h2><span className="badge">1</span> CMIR — Quick Recap</h2>
     <div className="callout teal">
      💡 <strong>CMIR (Customer Material Info Record)</strong> is used when
      a customer places orders using their own material codes. In CMIR, the
      customer's material code is assigned to the company's material code;
      when a user later enters the customer's material code while creating a
      sales order, the system automatically determines the corresponding
      company material code.
     </div>
    </div>

    {/* <!-- Section 2: CMIR creation --> */}
    <div className="card orange">
     <h2><span className="badge">2</span> Creating CMIR — T-code VD51</h2>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VD51</span> → mention Customer (e.g.
       <code>100640</code>), Sales Organization, Distribution Channel →
       Enter.
      </div>
      <div className="step">
       Mention your Material (the company material code) → mention the
       <strong>Customer Material</strong> code (any value can be given for
       practice) → Save.
      </div>
     </div>
     <h3>Fields in CMIR</h3>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Plant</td>
       </tr>
       <tr>
        <td>Delivery Priority</td>
       </tr>
       <tr>
        <td>Minimum Delivery Quantity</td>
       </tr>
       <tr>
        <td>Partial Delivery per Item</td>
       </tr>
       <tr>
        <td>Maximum Partial Deliveries</td>
       </tr>
       <tr>
        <td>Under-Delivery Tolerance</td>
       </tr>
       <tr>
        <td>Over-Delivery Tolerance</td>
       </tr>
       <tr>
        <td>Unlimited Tolerance</td>
       </tr>
       <tr>
        <td>Item Usage</td>
       </tr>
      </tbody>
     </table>
     <div className="callout red">
      ⚠️ <strong>Priority rule:</strong> whenever a value exists in CMIR for
      these fields, it is given <strong>first preference</strong> when the
      system determines these values into a sales document — overriding
      whatever might otherwise come from Customer Master or Material Master.
     </div>
    </div>

    {/* <!-- Section 3: Condition Master --> */}
    <div className="card gold">
     <h2>
      <span className="badge">3</span> Condition Master (Pricing Master) —
      T-code VK11
     </h2>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">VK11</span> → mention Condition Type
       <code>PR00</code> (the standard base-price condition) → Enter.
      </div>
      <div className="step">
       Select <strong>"Material with Release Status"</strong> → Continue.
      </div>
      <div className="step">
       Mention Sales Organization, Distribution Channel, and the Material →
       mention the price amount. Repeat for additional materials as needed
       → Save.
      </div>
     </div>
     <div className="callout blue">
      💡 <strong>What this maintains:</strong> only the
      <strong>base/selling price</strong> of the material. Discounts,
      surcharges (transportation, loading, insurance charges), and taxes
      (GST) are all maintained separately via their own condition types.
     </div>
    </div>

    {/* <!-- Section 4: Stock posting intro --> */}
    <div className="card indigo">
     <h2><span className="badge">4</span> Stock Posting — T-code MB1C</h2>
     <div className="callout indigo">
      💡 Stock must be posted into a plant/storage location before Delivery
      and Invoice can be completed for a sales order.
     </div>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">MB1C</span> → Movement Type
       <code>561</code> (initial stock entry) → Plant (<code>P100</code>) →
       Storage Location (<code>P103</code>) → Enter → mention Material and
       Quantity → Save.
      </div>
     </div>
     <p className="note-text">
      📌 In real projects, stock posting is typically handled by MM and FI
      consultants — it's covered hands-on here purely so the rest of the
      sales cycle (Delivery, Invoice) can actually be completed in practice.
     </p>
    </div>

    {/* <!-- Section 5: Errors --> */}
    <div className="card red">
     <h2>
      <span className="badge">⚠️</span> Stock Posting Errors — One by One
     </h2>

     <h3>
      Error 1: "Parameters for Plant P100 Not Maintained in Inventory
      Management"
     </h3>
     <div className="stepper">
      <div className="step">
       Go to <span className="tcode">SPRO</span> →
       <strong>Materials Management → Inventory Management and Physical
        Inventory → Plant Parameters</strong>
       → Copy from plant <code>1000</code> to your plant
       (<code>P100</code>, then repeat for <code>P200</code>) → Save.
      </div>
      <div className="step">
       Go to <span className="tcode">SPRO</span> →
       <strong>Production → Materials Requirement Planning → Plant Parameters →
        Carry Out Overall Maintenance of Plant Parameters</strong>
       → Copy from plant <code>1000</code> to <code>P100</code> (then
       <code>P200</code>) → Continue.
      </div>
     </div>
     <p className="note-text">
      📌 A related error, "Posting only possible in periods...", can also
      appear at this stage on some systems — it stems from the same
      plant-parameter gap and is resolved by the same two steps above.
     </p>

     <h3>
      Error 2: "Combination of Plant P100 and Material Type [Finished
      Product] Does Not Exist" (or "No Stock Posting Possible for This
      Material")
     </h3>
     <div className="stepper">
      <div className="step">
       Go to T-code <span className="tcode">OMS2</span> → press Enter.
      </div>
      <div className="step">
       Select the relevant Material Type (e.g. FERT) → double-click
       <strong>Quantity/Value Updating</strong>.
      </div>
      <div className="step">
       Find the row for your Valuation Area (= Plant) + Material Type
       combination → check both
       <strong>Quantity Updating</strong> and
       <strong>Value Update</strong> → Save.
      </div>
      <div className="step">
       Repeat the same steps for the <strong>HAWA</strong> (Trading Goods)
       material type.
      </div>
     </div>
     <p className="note-text">
      📌 "Valuation Area" in this screen is simply another name for Plant.
     </p>

     <h3>Error 3: "Check Table T169P: Entry P100 Does Not Exist"</h3>
     <div className="stepper">
      <div className="step">
       Go to T-code <span className="tcode">SM30</span> → mention table
       <code>T169P</code> → Maintain.
      </div>
      <div className="step">
       Copy from company code <code>1000</code> to your company code
       (<code>P100</code>) → Save.
      </div>
     </div>

     <h3>Error 4: "Interval 49 Does Not Exist for Object RF_BLG"</h3>
     <div className="stepper">
      <div className="step">
       Go to T-code <span className="tcode">FBN1</span> → mention your
       Company Code → click <strong>Change Intervals</strong>.
      </div>
      <div className="step">
       Add interval number <code>49</code>, Year <code>2026</code>, From
       Number <code>1</code> to Number <code>9999</code> → Enter → Save.
      </div>
     </div>

     <div className="callout green">
      ✅ After resolving all four errors, re-run
      <span className="tcode">MB1C</span> (Movement Type 561, Plant P100,
      Storage Location P103, Material, Quantity) — it now saves
      successfully.
     </div>
    </div>

    {/* <!-- Section 6: Stock overview --> */}
    <div className="card teal">
     <h2><span className="badge">5</span> Verifying Stock — T-code MMBE</h2>
     <div className="callout teal">
      💡 After stock posting is complete, go to
      <span className="tcode">MMBE</span> (Stock Overview) → mention
      Material, Plant, Storage Location → cross-check that the quantity
      posted is showing correctly.
     </div>
     <div className="callout blue">
      💬 <strong>If you hit a different error while practicing,</strong>
      post it in the batch WhatsApp group for guidance — error messages can
      vary slightly system to system.
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
        <td>What is the T-code to create CMIR?</td>
        <td>VD51</td>
       </tr>
       <tr>
        <td>Name at least five fields maintained in CMIR.</td>
        <td>
         Plant, Delivery Priority, Minimum Delivery Quantity, Partial
         Delivery per Item, Maximum Partial Deliveries,
         Under/Over-Delivery Tolerance, Unlimited Tolerance, Item Usage
         (any five)
        </td>
       </tr>
       <tr>
        <td>
         If a field exists in both CMIR and elsewhere (e.g. Customer
         Master), which value wins?
        </td>
        <td>
         CMIR is given first preference when the system determines that
         value into a sales document
        </td>
       </tr>
       <tr>
        <td>
         What is the T-code to create Condition Master, and which
         condition type is used for the base price?
        </td>
        <td>VK11; condition type PR00</td>
       </tr>
       <tr>
        <td>
         Does the base price condition (PR00) include discounts,
         surcharges, or tax?
        </td>
        <td>
         No — those are maintained separately via their own condition
         types; PR00 is purely the selling/base price
        </td>
       </tr>
       <tr>
        <td>
         What is the T-code for stock posting, and what movement type is
         used for an initial stock entry?
        </td>
        <td>MB1C; movement type 561</td>
       </tr>
       <tr>
        <td>
         What causes "Parameters for plant not maintained in inventory
         management," and how is it fixed?
        </td>
        <td>
         Plant parameters haven't been copied from the reference plant;
         fixed via SPRO → Materials Management → Inventory Management and
         Physical Inventory → Plant Parameters (copy from 1000), and SPRO
         → Production → MRP → Plant Parameters → Carry Out Overall
         Maintenance (copy from 1000)
        </td>
       </tr>
       <tr>
        <td>
         What causes "Combination of plant and material type does not
         exist" during stock posting, and how is it fixed?
        </td>
        <td>
         Quantity/Value Updating isn't enabled for that plant + material
         type combination; fixed via OMS2 → select material type →
         Quantity/Value Updating → check Quantity Updating and Value
         Update for the plant
        </td>
       </tr>
       <tr>
        <td>
         What causes "Check table T169P: entry [plant] does not exist,"
         and how is it fixed?
        </td>
        <td>
         The company code entry is missing from table T169P; fixed via
         SM30 → table T169P → Maintain → copy from company code 1000
        </td>
       </tr>
       <tr>
        <td>
         What causes "Interval 49 does not exist for object RF_BLG," and
         how is it fixed?
        </td>
        <td>
         A missing document number interval; fixed via FBN1 → Change
         Intervals → add interval 49 for the current year with a number
         range
        </td>
       </tr>
       <tr>
        <td>What T-code shows the stock overview after posting?</td>
        <td>MMBE</td>
       </tr>
       <tr>
        <td>
         In real projects, who is typically responsible for stock
         posting?
        </td>
        <td>
         MM and FI consultants — SD consultants only handle it here for
         practice, to enable completing the full sales cycle
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
        <td><span className="tcode">VD51</span></td>
        <td>Create CMIR (Customer Material Info Record)</td>
       </tr>
       <tr>
        <td><span className="tcode">VK11</span></td>
        <td>
         Create Condition Master (pricing) records, e.g. base price via
         PR00
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MB1C</span></td>
        <td>Stock posting (e.g. Movement Type 561 for initial entry)</td>
       </tr>
       <tr>
        <td><span className="tcode">OMS2</span></td>
        <td>
         Enable Quantity/Value Updating for a plant + material type
         combination
        </td>
       </tr>
       <tr>
        <td><span className="tcode">SM30</span></td>
        <td>
         Maintain table entries directly (used here for table T169P)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">FBN1</span></td>
        <td>
         Maintain document number range intervals (used here to fix
         interval 49 / RF_BLG)
        </td>
       </tr>
       <tr>
        <td><span className="tcode">MMBE</span></td>
        <td>View stock overview for a material/plant/storage location</td>
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
        <td>Base price condition type</td>
        <td>PR00</td>
       </tr>
       <tr>
        <td>Stock posting movement type</td>
        <td>561 (initial stock entry)</td>
       </tr>
       <tr>
        <td>Plant Parameters copy source</td>
        <td>Plant 1000 (reference)</td>
       </tr>
       <tr>
        <td>MRP Plant Parameters copy source</td>
        <td>Plant 1000 (reference)</td>
       </tr>
       <tr>
        <td>T169P entry copied from</td>
        <td>Company code 1000</td>
       </tr>
       <tr>
        <td>FBN1 interval fixed</td>
        <td>Interval 49, Year 2026, Number range 1–9999</td>
       </tr>
       <tr>
        <td>CMIR fields with first preference</td>
        <td>
         Plant, Delivery Priority, Min/Max Delivery Quantity/Partial
         Deliveries, Under/Over-Delivery Tolerance, Unlimited Tolerance,
         Item Usage
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This lecture completed the master data setup by creating
      <strong>CMIR</strong> (T-code VD51 — mapping a customer's material
      code to the company's, with its own set of fields that take first
      preference into the sales document) and
      <strong>Condition Master</strong> (T-code VK11, condition type PR00 —
      the base/selling price only, separate from discounts, surcharges, and
      tax). The bulk of the lecture then worked through
      <strong>Stock Posting</strong> via MB1C (movement type 561),
      troubleshooting a realistic chain of first-time configuration gaps:
      missing plant parameters (fixed via two SPRO paths copying from
      reference plant 1000), a missing plant + material type Quantity/Value
      Updating setting (fixed via OMS2), a missing company code entry in
      table T169P (fixed via SM30), and a missing number range interval for
      object RF_BLG (fixed via FBN1). Once resolved, stock posting succeeds
      and can be verified via <strong>MMBE</strong> (Stock Overview) —
      clearing the way for Delivery and Invoice in the upcoming sales-cycle
      practice.
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2>
      <span className="badge">⭐</span> Key Takeaways &amp; Next Class
     </h2>
     <ul>
      <li>
       <strong>CMIR (VD51)</strong> maps customer material codes to company
       material codes, and its fields override other sources in the sales
       document
      </li>
      <li>
       <strong>Condition Master (VK11, PR00)</strong> maintains only the
       base price — discounts, surcharges, and tax are separate condition
       types
      </li>
      <li>
       <strong>Stock Posting (MB1C, movement 561)</strong> is a
       prerequisite for Delivery and Invoice
      </li>
      <li>
       First-time stock posting typically hits a predictable chain of
       config gaps —
       <strong>Plant Parameters (SPRO x2), OMS2, SM30 (T169P), and FBN1 (number
        ranges)</strong>
       — each with its own fix
      </li>
      <li>Verify posted stock via <strong>MMBE</strong></li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Continuing into the Enquiry-to-Invoice
      sales process.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 23 Notes — CMIR, Condition Master &amp; Stock Posting 🎓
   </p>
  </div>
 );
};

export default Material23;
