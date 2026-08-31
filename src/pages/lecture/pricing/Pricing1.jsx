import "../../../style/Lect/pricing1.scss";
const Pricing1 = () => {
  return (
    <>
      <div className="header">
        <h1>📊 Lecture 65 — Pricing: Condition Technique</h1>

        <p>
          SAP SD | Core concept behind how the system determines price in a
          sales document
        </p>
      </div>

      <div className="container">
        {/* Section 1 */}
        <div className="card">
          <h2>
            <span className="badge">1</span> The Big Picture
          </h2>

          <p>
            <strong>Pricing</strong> in SAP SD is based on the{" "}
            <strong>Condition Technique</strong>.
          </p>

          <div className="callout">
            💡 <strong>Condition Technique</strong> is the mechanism SAP uses to
            determine the appropriate condition records in a sales document.
          </div>

          <div className="flow">
            <div className="flow-step">Condition Records</div>
            <div className="arrow">➜</div>

            <div className="flow-step">Condition Tables</div>
            <div className="arrow">➜</div>

            <div className="flow-step">Access Sequence</div>
            <div className="arrow">➜</div>

            <div className="flow-step">Condition Types</div>
            <div className="arrow">➜</div>

            <div className="flow-step">Pricing Procedure</div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="card teal">
          <h2>
            <span className="badge">2</span> Condition Records
          </h2>

          <ul>
            <li>Master data used for pricing.</li>

            <li>
              Maintained using <span className="tcode">VK11</span>.
            </li>

            <li>Example: Customer + Material = ₹9500.</li>
          </ul>
        </div>

        {/* Section 3 */}
        <div className="card orange">
          <h2>
            <span className="badge">3</span> Condition Table
          </h2>

          <p>
            A condition table contains the field combination used to maintain
            condition records.
          </p>

          <p>
            T-Code: <span className="tcode">V/03</span>
          </p>

          <table>
            <thead>
              <tr>
                <th>Table</th>
                <th>Field Combination</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Table 1</td>
                <td>Sales Organization + Customer + Material</td>
              </tr>

              <tr>
                <td>Table 2</td>
                <td>Sales Organization + Price List + Material</td>
              </tr>

              <tr>
                <td>Table 3</td>
                <td>Sales Organization + Material</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 4 */}
        <div className="card purple">
          <h2>
            <span className="badge">4</span> Access Sequence
          </h2>

          <div className="callout">
            🔍 <strong>Access Sequence</strong> is the search strategy used by
            SAP to search condition records.
          </div>

          <p>
            T-Code: <span className="tcode">V/07</span>
          </p>

          <table>
            <thead>
              <tr>
                <th>Priority</th>
                <th>Combination</th>
                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>Customer + Material</td>
                <td>Most specific</td>
              </tr>

              <tr>
                <td>2</td>
                <td>Price List + Material</td>
                <td>Middle level</td>
              </tr>

              <tr>
                <td>3</td>
                <td>Material</td>
                <td>General / fallback</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 5 */}
        <div className="card purple">
          <h2>
            <span className="badge">5</span> Condition Type
          </h2>

          <ul>
            <li>Represents the type of pricing element.</li>

            <li>
              Defined using <span className="tcode">V/06</span>.
            </li>

            <li>Examples:</li>
          </ul>

          <table>
            <thead>
              <tr>
                <th>Condition Type</th>
                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>PR00</td>
                <td>Base Price</td>
              </tr>

              <tr>
                <td>K004</td>
                <td>Material Discount</td>
              </tr>

              <tr>
                <td>K005</td>
                <td>Customer/Material Discount</td>
              </tr>

              <tr>
                <td>KF00</td>
                <td>Freight</td>
              </tr>

              <tr>
                <td>MWST</td>
                <td>Output Tax</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 6 */}
        <div className="card green">
          <h2>
            <span className="badge">6</span> Pricing Procedure
          </h2>

          <p>
            Pricing Procedure is a sequential list of condition types used to
            calculate the final price.
          </p>

          <p>
            T-Code: <span className="tcode">V/08</span>
          </p>

          <table>
            <thead>
              <tr>
                <th>Step</th>
                <th>Condition Type</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>10</td>
                <td>PR00</td>
                <td>Base Price</td>
              </tr>

              <tr>
                <td>20</td>
                <td>K004</td>
                <td>Material Discount</td>
              </tr>

              <tr>
                <td>30</td>
                <td>KF00</td>
                <td>Freight</td>
              </tr>

              <tr>
                <td>40</td>
                <td>MWST</td>
                <td>Tax</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Section 7 */}
        <div className="card gold">
          <h2>
            <span className="badge">7</span> Pricing Flow
          </h2>

          <div className="flow">
            <div className="flow-step">Sales Order</div>
            <div className="arrow">➜</div>

            <div className="flow-step">Pricing Procedure</div>
            <div className="arrow">➜</div>

            <div className="flow-step">Condition Type</div>
            <div className="arrow">➜</div>

            <div className="flow-step">Access Sequence</div>
            <div className="arrow">➜</div>

            <div className="flow-step">Condition Table</div>
            <div className="arrow">➜</div>

            <div className="flow-step">Condition Record</div>
          </div>
        </div>

        {/* Section 8 */}
        <div className="card">
          <h2>
            <span className="badge">8</span> Important T-Codes
          </h2>

          <table>
            <thead>
              <tr>
                <th>T-Code</th>
                <th>Purpose</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>V/03</td>
                <td>Define Condition Tables</td>
              </tr>

              <tr>
                <td>V/06</td>
                <td>Define Condition Types</td>
              </tr>

              <tr>
                <td>V/07</td>
                <td>Define Access Sequences</td>
              </tr>

              <tr>
                <td>V/08</td>
                <td>Define Pricing Procedure</td>
              </tr>

              <tr>
                <td>VK11</td>
                <td>Create Condition Record</td>
              </tr>

              <tr>
                <td>VK12</td>
                <td>Change Condition Record</td>
              </tr>

              <tr>
                <td>VK13</td>
                <td>Display Condition Record</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary */}
        <div className="card">
          <h2>
            <span className="badge">📝</span> Summary
          </h2>

          <p>
            Pricing in SAP SD is based on the Condition Technique. The system
            uses condition tables, access sequences, condition types and the
            pricing procedure to determine the appropriate pricing conditions in
            a sales document.
          </p>
        </div>
      </div>

      <p className="footer-note">SAP SD Pricing — Condition Technique</p>
    </>
  );
};

export default Pricing1;
