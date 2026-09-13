import { useState } from "react";
import { NavLink } from "react-router-dom";

const Lecture = () => {
  const [demoLectures] = useState(
    Array.from({ length: 1 }, (_, index) => index + 1),
  );
  const [enterpriseLectures] = useState(
    Array.from({ length: 2 }, (_, index) => index + 1),
  );
  const [pricingLectures] = useState(
    Array.from({ length: 19 }, (_, index) => index + 65),
  );

  return (
    <div>
      <div className="lecture-container">
        <div>
          <h1>Demo Lectures</h1>

          <ul>
            {demoLectures.map((lectureNo) => (
              <li key={lectureNo}>
                <NavLink className="btn btn-primary-hallow" to={`/lectures/demo/lect-${lectureNo}`}>
                  Demo Lecture
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Enterprise Lectures</h1>

          <ul>
            {enterpriseLectures.map((lectureNo) => (
              <li key={lectureNo}>
                <NavLink className="btn btn-primary-hallow" to={`/lectures/enterprise/lect-${lectureNo}`}>
                  Lecture {lectureNo}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h1>Pricing Lectures</h1>

          <ul>
            {pricingLectures.map((lectureNo) => (
              <li key={lectureNo}>
                <NavLink className="btn btn-primary-hallow" to={`/lectures/pricing/lect-${lectureNo}`}>
                  Lecture {lectureNo}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
