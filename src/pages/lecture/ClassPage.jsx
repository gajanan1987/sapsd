import { useParams } from "react-router-dom";

import Pricing1 from "./pricing/Pricing1";
import Pricing2 from "./pricing/Pricing2";
import Pricing3 from "./pricing/Pricing3";
import Pricing4 from "./pricing/Pricing4";
import Pricing5 from "./pricing/Pricing5";

const ClassPage = () => {
  const { category, lectureNo } = useParams();

  console.log("Lecture params:", {
    category,
    lectureNo,
  });

  const lectures = {
    pricing: {
      "lect-65": Pricing1,
      "lect-66": Pricing2,
      "lect-67": Pricing3,
      "lect-68": Pricing4,
      "lect-69": Pricing5,
    },
  };

  const LectureComponent = lectures[category]?.[lectureNo];

  if (!LectureComponent) {
    return <h1>Lecture Not Found</h1>;
  }

  return <LectureComponent />;
};

export default ClassPage;
