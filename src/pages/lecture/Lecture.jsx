import { useState } from "react";
import { NavLink } from "react-router-dom";

const Lecture = () => {
  const [demoLectures] = useState(
    Array.from({ length: 1 }, (_, index) => index + 1),
  );
  const [enterpriseLectures] = useState(
    Array.from({ length: 13 }, (_, index) => index + 1),
  );
  const [customerMasterLectures] = useState(
    Array.from({ length: 7 }, (_, index) => index + 14),
  );
  const [materialMasterLectures] = useState(
    Array.from({ length: 20 }, (_, index) => index + 21),
  );
  const [businessLectures] = useState(
    Array.from({ length: 8 }, (_, index) => index + 41),
  );
  const [salesDocumentLectures] = useState(
    Array.from({ length: 16 }, (_, index) => index + 49),
  );
  const [pricingLectures] = useState(
    Array.from({ length: 22 }, (_, index) => index + 65),
  );

  const [freegoodsLectures] = useState(
    Array.from({ length: 20 }, (_, index) => index + 87),
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
          <h1>Customer Master Lectures</h1>
          <ul>
            {customerMasterLectures.map((lectureNo) => (
              <li key={lectureNo}>
                <NavLink className="btn btn-primary-hallow" to={`/lectures/customer-master/lect-${lectureNo}`}>
                  Lecture {lectureNo}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>Material Master Lectures</h1>
          <ul>
            {materialMasterLectures.map((lectureNo) => (
              <li key={lectureNo}>
                <NavLink className="btn btn-primary-hallow" to={`/lectures/material-master/lect-${lectureNo}`}>
                  Lecture {lectureNo}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>Business Process Lectures</h1>
          <ul>
            {businessLectures.map((lectureNo) => (
              <li key={lectureNo}>
                <NavLink className="btn btn-primary-hallow" to={`/lectures/business-process/lect-${lectureNo}`}>
                  Lecture {lectureNo}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h1>Sales Document Lectures</h1>
          <ul>
            {salesDocumentLectures.map((lectureNo) => (
              <li key={lectureNo}>
                <NavLink className="btn btn-primary-hallow" to={`/lectures/sales-document/lect-${lectureNo}`}>
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

        <div>
          <h1>Free Goods Lectures</h1>
          <ul>
            {freegoodsLectures.map((lectureNo) => (
              <li key={lectureNo}>
                <NavLink className="btn btn-primary-hallow" to={`/lectures/freegoods/lect-${lectureNo}`}>
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
