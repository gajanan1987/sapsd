import { useState } from "react";
import { NavLink } from "react-router-dom";

const Lecture = () => {
  const [pricingLectures] = useState(
    Array.from({ length: 19 }, (_, index) => index + 65),
  );

  return (
    <div>
      <div className="lecture-container">
        <div>
          <h1>Pricing Lectures</h1>

          <ul>
            {pricingLectures.map((lectureNo) => (
              <li key={lectureNo}>
                <NavLink to={`/lectures/pricing/lect-${lectureNo}`}>
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
