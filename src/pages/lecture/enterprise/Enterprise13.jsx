const Enterprise13 = () => {
 return (
  <div className="lecture-common">
   <div className="header header-cyan">
    <h1>
     🔁 Lecture 13 — Enterprise Structure Review Q&amp;A + Shipping Point
     Fields
    </h1>
    <p>
     SAP SD | A rapid-fire recap of everything covered so far, plus two new
     Shipping Point fields: Departure Zone and Pick/Pack &amp; Loading Time
    </p>
   </div>
   <div className="container">
    {/* <!-- Section 0: Intro --> */}
    <div className="card">
     <h2><span className="badge">↩️</span> About Today's Session</h2>
     <div className="callout blue">
      💡 This session is a <strong>rapid-fire internal Q&amp;A</strong>
      consolidating everything covered across the Enterprise Structure topic
      so far — students answer, the instructor confirms/refines the wording
      — before the course moves into
      <strong>Master Data</strong> next class. Two new Shipping Point fields
      (Departure Zone, and Pick/Pack &amp; Loading Time) are introduced
      along the way.
     </div>
    </div>

    {/* <!-- Section 1: EC01 --> */}
    <div className="card teal">
     <h2>
      <span className="badge">1</span> Q: What T-code Shows the Total Enterprise
      Structure?
     </h2>
     <div className="callout teal">
      ✅ <strong>Answer:</strong> T-code <span className="tcode">EC01</span> —
      it displays the complete enterprise structure as one navigable tree
      (covered in Lecture 11: Structure → Navigation → find your Company
      Code).
     </div>
    </div>

    {/* <!-- Section 2: Calendar --> */}
    <div className="card orange">
     <h2>
      <span className="badge">2</span> Q: In How Many Organizational Units Do We
      Maintain a Calendar?
     </h2>
     <div className="callout orange">
      ✅ <strong>Answer:</strong> Three —
      <strong>Sales Organization</strong>, <strong>Plant</strong>, and
      <strong>Shipping Point</strong>.
     </div>
    </div>

    {/* <!-- Section 3: Company Code relationships --> */}
    <div className="card purple">
     <h2>
      <span className="badge">3</span> Q: Relationship Between Company Code and
      Sales Organization / Plant
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Assignment</th>
        <th>Relationship</th>
        <th>What It Means</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Company Code ↔ Sales Organization</td>
        <td>One-to-Many</td>
        <td>
         One Company Code can have many Sales Organizations, but each
         Sales Organization belongs to only one Company Code
        </td>
       </tr>
       <tr>
        <td>Company Code ↔ Plant</td>
        <td>One-to-Many</td>
        <td>
         One Company Code can have many Plants, but each Plant is
         assigned to only one Company Code — never more than one
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 4: Statistics Currency --> */}
    <div className="card gold">
     <h2>
      <span className="badge">4</span> Q: What Is Statistics Currency in Sales
      Organization?
     </h2>
     <div className="callout gold">
      ✅ <strong>Answer:</strong> The currency in which
      <strong>sales reports</strong> are displayed for that Sales
      Organization — useful for consolidated reporting in one currency even
      when local transactions happen in a different one (covered in Lecture
      12).
     </div>
    </div>

    {/* <!-- Section 5: Text Information --> */}
    <div className="card">
     <h2>
      <span className="badge">5</span> Q: What Is the Purpose of Text
      Information in Sales Organization?
     </h2>
     <div className="callout">
      ✅ <strong>Answer:</strong> It helps pull the
      <strong>address of the Sales Organization</strong> so it can be
      printed in the <strong>output</strong> — the header and/or footer of
      order, delivery, or invoice output documents.
     </div>
    </div>

    {/* <!-- Section 6: ALE Data for PO --> */}
    <div className="card indigo">
     <h2>
      <span className="badge">6</span> Q: What Is the Purpose of ALE Data for
      Purchase Order?
     </h2>
     <div className="callout indigo">
      ✅ <strong>Answer:</strong> In <strong>Third-Party</strong> and
      <strong>IPO (Individual Purchase Order)</strong> processes, when a
      Sales Order is created, the system automatically generates the
      <strong>PO (Purchase Order)</strong> directly — not just a PR
      (Purchase Requisition) that would otherwise need manual conversion.
     </div>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field Maintained?</th>
        <th>What Happens When a Sales Order Is Created</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>❌ Not maintained</td>
        <td>
         System generates only a PR (Purchase Requisition), which must be
         manually converted to a PO
        </td>
       </tr>
       <tr>
        <td>✅ Maintained</td>
        <td>
         System automatically generates the PO directly — both PR and PO
         created automatically
        </td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Section 7: Rebate --> */}
    <div className="card red">
     <h2>
      <span className="badge">7</span> Q: What Is "Rebate Process Active," and
      What Is a Rebate?
     </h2>
     <div className="callout red">
      ✅ <strong>Rebate Process Active</strong> = a prerequisite field that
      must be checked before rebates can be processed in a Sales
      Organization; unchecking it disables rebate processing.
     </div>
     <div className="callout">
      ✅ <strong>Rebate</strong> = a special kind of discount — it is
      <strong>conditional</strong> and valid only over a
      <strong>specific period of time</strong> (e.g. 10% back if a customer
      buys a set quantity within a year), unlike a normal discount applied
      immediately at order time.
     </div>
    </div>

    {/* <!-- Section 8: Departure Zone (NEW) --> */}
    <div className="card teal">
     <h2>
      <span className="badge">🆕</span> New Field: Departure Zone (Shipping
      Point)
     </h2>
     <div className="callout teal">
      💡 <strong>Departure Zone</strong> is one of the
      <strong>parameters used to determine the Route</strong> into the sales
      document — the system uses it, along with other factors, to work out
      which transportation route a delivery should follow.
     </div>
    </div>

    {/* <!-- Section 9: Pick/Pack Time & Loading Time (NEW) --> */}
    <div className="card orange">
     <h2>
      <span className="badge">🆕</span> New Fields: Pick/Pack Time &amp; Loading
      Time (Shipping Point)
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Field</th>
        <th>Meaning</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Pick/Pack Time</td>
        <td>
         The time taken to <strong>pick</strong> the goods from the
         storage location and <strong>pack</strong> them — this activity
         happens at the <strong>Shipping Point</strong>
        </td>
       </tr>
       <tr>
        <td>Loading Time</td>
        <td>
         The time taken to perform the actual <strong>loading</strong> of
         the goods onto the truck
        </td>
       </tr>
      </tbody>
     </table>
     <div className="callout green">
      ✅ <strong>Purpose:</strong> both fields feed into
      <strong>Delivery Scheduling</strong> — they help the system calculate
      and propose an accurate delivery date by accounting for how long
      picking/packing and loading will actually take.
     </div>
     <p className="note-text">
      📌 Delivery Scheduling itself (how the calculation actually works, end
      to end) is a separate, dedicated topic covered in more depth later in
      the course — today only covers the purpose of these two fields.
     </p>
    </div>

    {/* <!-- Section 10: Sales Line & Sales Area --> */}
    <div className="card purple">
     <h2>
      <span className="badge">8</span> Q: What Are Sales Line and Sales Area?
     </h2>
     <table className="table-reponsive">
      <thead>
       <tr>
        <th>Term</th>
        <th>Definition</th>
       </tr>
      </thead>
      <tbody>
       <tr>
        <td>Sales Line</td>
        <td>
         The combination of
         <strong>Sales Organization + Distribution Channel</strong>
        </td>
       </tr>
       <tr>
        <td>Sales Area</td>
        <td>
         The combination of
         <strong>Sales Organization + Distribution Channel + Division</strong>
        </td>
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
         What T-code shows the complete, assembled enterprise structure?
        </td>
        <td>EC01</td>
       </tr>
       <tr>
        <td>
         In how many organizational units is a calendar maintained?
        </td>
        <td>Three — Sales Organization, Plant, and Shipping Point</td>
       </tr>
       <tr>
        <td>
         What is the relationship between Company Code and Sales
         Organization?
        </td>
        <td>One-to-Many</td>
       </tr>
       <tr>
        <td>What is the relationship between Company Code and Plant?</td>
        <td>
         One-to-Many — a Plant can be assigned to only one Company Code
        </td>
       </tr>
       <tr>
        <td>What is Statistics Currency?</td>
        <td>
         The currency in which sales reports for a Sales Organization are
         displayed
        </td>
       </tr>
       <tr>
        <td>
         What is the purpose of Text Information in Sales Organization?
        </td>
        <td>
         It supplies the sales organization's address so it can be
         printed on output documents (order, delivery, invoice)
        </td>
       </tr>
       <tr>
        <td>
         What happens if ALE Data for Purchase Order is maintained?
        </td>
        <td>
         For Third-Party and IPO sales orders, the system automatically
         generates the PO directly instead of only a PR requiring manual
         conversion
        </td>
       </tr>
       <tr>
        <td>What must be checked before rebates can be processed?</td>
        <td>Rebate Process Active</td>
       </tr>
       <tr>
        <td>What is a rebate?</td>
        <td>
         A conditional discount valid over a specific period of time,
         unlike a normal discount applied immediately
        </td>
       </tr>
       <tr>
        <td>What is the purpose of Departure Zone in Shipping Point?</td>
        <td>
         It's one of the parameters used to determine the Route into the
         sales document
        </td>
       </tr>
       <tr>
        <td>
         What are Pick/Pack Time and Loading Time, and where do they
         apply?
        </td>
        <td>
         Pick/Pack Time is the time to pick goods from storage and pack
         them (at the Shipping Point); Loading Time is the time to load
         the goods onto the truck
        </td>
       </tr>
       <tr>
        <td>What is the purpose of Pick/Pack Time and Loading Time?</td>
        <td>
         They help the system perform delivery scheduling — calculating
         an accurate delivery date
        </td>
       </tr>
       <tr>
        <td>What is a Sales Line?</td>
        <td>
         The combination of Sales Organization and Distribution Channel
        </td>
       </tr>
       <tr>
        <td>What is a Sales Area?</td>
        <td>
         The combination of Sales Organization, Distribution Channel, and
         Division
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
        <td><span className="tcode">EC01</span></td>
        <td>
         View the complete, assembled enterprise structure as a navigable
         tree
        </td>
       </tr>
      </tbody>
     </table>
     <p className="note-text">
      📌 No new configuration T-codes were introduced this session — it was
      a recap discussion plus two new field definitions inside the existing
      Shipping Point definition screen.
     </p>
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
        <td>Organizational units with a calendar</td>
        <td>Sales Organization, Plant, Shipping Point</td>
       </tr>
       <tr>
        <td>Company Code ↔ Sales Organization</td>
        <td>One-to-Many</td>
       </tr>
       <tr>
        <td>Company Code ↔ Plant</td>
        <td>One-to-Many (a Plant belongs to exactly one Company Code)</td>
       </tr>
       <tr>
        <td>Statistics Currency</td>
        <td>Currency used for displaying sales reports</td>
       </tr>
       <tr>
        <td>Text Information</td>
        <td>
         Supplies Sales Organization address for output documents
         (header/footer)
        </td>
       </tr>
       <tr>
        <td>ALE Data for Purchase Order</td>
        <td>
         Auto-generates PO (not just PR) for Third-Party/IPO sales orders
        </td>
       </tr>
       <tr>
        <td>Rebate Process Active</td>
        <td>
         Prerequisite checkbox to enable rebate processing in a Sales
         Organization
        </td>
       </tr>
       <tr>
        <td>Departure Zone (Shipping Point)</td>
        <td>
         Parameter used to determine the Route in the sales document
        </td>
       </tr>
       <tr>
        <td>Pick/Pack Time &amp; Loading Time (Shipping Point)</td>
        <td>
         Feed into delivery scheduling to calculate the delivery date
        </td>
       </tr>
       <tr>
        <td>Sales Line</td>
        <td>Sales Organization + Distribution Channel</td>
       </tr>
       <tr>
        <td>Sales Area</td>
        <td>Sales Organization + Distribution Channel + Division</td>
       </tr>
      </tbody>
     </table>
    </div>

    {/* <!-- Extra: Summary --> */}
    <div className="card">
     <h2><span className="badge">📝</span> Summary</h2>
     <p>
      This session was a consolidated recap of Enterprise Structure before
      moving into Master Data: T-code <strong>EC01</strong> for viewing the
      full structure, the three organizational units that carry a calendar
      (Sales Organization, Plant, Shipping Point), the one-to-many
      relationships between Company Code and both Sales Organization and
      Plant, and the Sales Organization fields from Lecture 12 (Statistics
      Currency, Text Information, ALE Data for Purchase Order, Rebate
      Process Active, and the definition of a rebate itself). Two new
      Shipping Point fields were introduced:
      <strong>Departure Zone</strong> (a parameter for Route determination)
      and <strong>Pick/Pack Time &amp; Loading Time</strong> (which feed
      into delivery scheduling). The session closed by reconfirming the
      definitions of <strong>Sales Line</strong> (Sales Org + Distribution
      Channel) and <strong>Sales Area</strong> (Sales Org + Distribution
      Channel + Division).
     </p>
    </div>

    {/* <!-- Best Practice / Next Class --> */}
    <div className="card">
     <h2><span className="badge">⭐</span> Key Takeaways &amp; Next Class</h2>
     <ul>
      <li>
       <strong>EC01</strong> is the go-to T-code for viewing the complete
       enterprise structure end to end
      </li>
      <li>
       Calendar lives in exactly <strong>3 places</strong>: Sales
       Organization, Plant, Shipping Point
      </li>
      <li>
       Both <strong>Company Code ↔ Sales Organization</strong> and
       <strong>Company Code ↔ Plant</strong> are one-to-many relationships
      </li>
      <li>
       <strong>Departure Zone</strong> feeds Route determination;
       <strong>Pick/Pack Time</strong> and
       <strong>Loading Time</strong> feed delivery scheduling — both are
       Shipping Point fields
      </li>
      <li>
       <strong>Sales Line</strong> = Sales Org + Distribution Channel;
       <strong>Sales Area</strong> = Sales Org + Distribution Channel +
       Division
      </li>
     </ul>
     <div className="callout green">
      📅 <strong>Next class:</strong> Moving on from Enterprise Structure
      into the next core concept — <strong>Master Data</strong>.
     </div>
    </div>
   </div>
   <p className="footer-note">
    Lecture 13 Notes — Enterprise Structure Review Q&amp;A + Shipping Point
    Fields 🎓
   </p>
  </div>
 );
};

export default Enterprise13;
