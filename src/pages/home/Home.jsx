import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <div className="bg-animation">
        <div className="circles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="container">
        <div className="content">
          <div className="logo">
            <img src="https://zllthcfaewfehlioancy.supabase.co/storage/v1/object/public/IMAGES/ChatGPT%20Image%20Jun%2019,%202026,%2011_29_05%20AM.png" />
          </div>

          <h1>Trident Ink Design</h1>
          <h2>Something Amazing Is Coming Soon</h2>

          <p>
            We are building a modern digital experience with creativity,
            innovation, and technology. Stay tuned for our official launch.
          </p>

          <a href="javascript:void(0)" className="notify-btn">
            {" "}
            Launching Soon{" "}
          </a>
        </div>
      </div>

      <div className="footer">
        © 2026 TridentInkDesign. All Rights Reserved.
      </div>
    </>
  );
};

export default Home;
