import { useParams } from "react-router-dom";
import { lazy, Suspense } from "react";
import "../../style/Lect/CommonClass.scss";

const lectureComponents = import.meta.glob("./**/*.jsx");

const ClassPage = () => {
  const { category, lectureNo } = useParams();

  let fileName = "";

  if (category === "demo") {
    const number = lectureNo?.replace("lect-", "");
    fileName = `./demo/demo${number}.jsx`;
  }

  if (category === "enterprise") {
    const number = lectureNo?.replace("lect-", "");
    fileName = `./enterprise/Enterprise${number}.jsx`;
  }

  if (category === "customer-master") {
    const number = lectureNo?.replace("lect-", "");
    fileName = `./customer/Customer${number}.jsx`;
  }

  if (category === "material-master") {
    const number = lectureNo?.replace("lect-", "");
    fileName = `./material/Material${number}.jsx`;
  }

  if (category === "pricing") {
    const number = lectureNo?.replace("lect-", "");
    fileName = `./pricing/Pricing${number}.jsx`;
  }

  const loader = lectureComponents[fileName];

  if (!loader) {
    return <h1>Lecture Not Found</h1>;
  }

  const LectureComponent = lazy(loader);

  return (
    <Suspense fallback={<div>Loading lecture...</div>}>
      <LectureComponent />
    </Suspense>
  );
};

export default ClassPage;
