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

          <h2>
            Simplifying Enterprise Structure Definition & Assignment Management
            for Everyone
          </h2>

          {!user ? (
            <>
              <p>
                Managing Definition & Assignment doesn’t have to be complicated.
                Our platform makes it easy to:
              </p>
              <ul>
                <li>Track Enterprise Structure Definition in real-time</li>
                <li>Track Enterprise Structure Assignment in real-time</li>
                <li>Automate Enterprise Structure Assignment</li>
                <li>Monitor Definition and Assignment with accuracy</li>
              </ul>
            </>
          ) : null}

          <p>
            Create and Save your Enterprise Structure Definition & Assignment
          </p>
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
