import { Link } from "react-router";
import VantaBirds from "../../../components/VantaBirds";

const Banner = ({ session, user }) => {
  return (
    <>
      <div
        className={`home-banner ${session && user ? "logedin" : "logedout"} `}
      >
        <div>
          <h1 className="color-title">
            SAP <span>SD</span>
          </h1>
          <p className="sub">
            <span>SALES AND DISTRIBUTION</span>
          </p>
          <div className="subtext">
            <p>Streamline Your Sales. Deliver Value.</p>
            <p>Drive Customer Satisfaction.</p>
          </div>

          <div className="img-wrapper">
            <img
              src="https://zllthcfaewfehlioancy.supabase.co/storage/v1/object/public/IMAGES/img1.webp"
              alt=""
            />
          </div>

          <h2>Simplify Enterprise Structure Definition & Assignment</h2>

          {!user ? (
            <>
              <p>
                Managing SAP SD Enterprise Structure configuration doesn't have
                to be complex. This platform helps SAP consultants, trainers,
                and learners create, manage, and document Enterprise Structure
                Definitions and Assignments quickly and accurately.
              </p>
              <div class="bullet-points">
                <ul>
                  <li>✅ Create Enterprise Structure Definitions</li>
                  <li>
                    ✅ Generate Enterprise Structure Assignments Automatically
                  </li>
                  <li>✅ Track Definitions in Real-Time</li>
                  <li>✅ Track Assignments in Real-Time</li>
                  <li>✅ Reduce Manual Configuration Errors</li>
                  <li>
                    ✅ Copy & Paste Assignment Tables into SAP Documentation
                  </li>
                  <li>
                    ✅ Generate SAP SD Enterprise Structure Mapping Instantly
                  </li>
                  <li>✅ Save and Manage Multiple Enterprise Structures</li>
                  <li>
                    ✅ Perfect for SAP SD Learning, Practice, Training, and
                    Projects
                  </li>
                </ul>
                <ul style={{ listStyleType: "disc" }}>
                  <p style={{ marginBottom: "10px" }}>
                    Supported SAP SD Assignments
                  </p>
                  <li>Sales Organization → Company Code</li>
                  <li>Distribution Channel → Sales Organization</li>
                  <li>Division → Sales Organization</li>
                  <li>Sales Area Determination</li>
                  <li>Sales Office → Sales Area</li>
                  <li>Sales Group → Sales Office</li>
                  <li>Plant → Company Code</li>
                  <li>Sales Organization + Distribution Channel + Plant</li>
                  <li>Shipping Point → Plant</li>
                </ul>
              </div>
            </>
          ) : null}

          <p>Start Building SAP SD Enterprise Structures</p>
          <Link
            className="btn btn-primary"
            to={user ? "/definition" : "/login"}
          >
            Click Here
          </Link>

          {/* <Link className="add-new-loan" to={"/definition"}>
            +
          </Link> */}
          <VantaBirds />
        </div>
      </div>
    </>
  );
};

export default Banner;
