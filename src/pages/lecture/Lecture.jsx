import { NavLink } from "react-router";

const Lecture = () => {
  return (
    <>
      <div>
        <div className="lecture-container">
          <h1>Pricing Lectures</h1>
          <ul>
            <li>
              <NavLink to="/lectures/pricing/lect-65">Leactures 65</NavLink>
            </li>
            <li>
              <NavLink to="/lectures/pricing/lect-66">Leactures 66</NavLink>
            </li>
            <li>
              <NavLink to="/lectures/pricing/lect-67">Leactures 67</NavLink>
            </li>
            <li>
              <NavLink to="/lectures/pricing/lect-68">Leactures 68</NavLink>
            </li>
            <li>
              <NavLink to="/lectures/pricing/lect-69">Leactures 69</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Lecture;
