import React from "react";
import "./landingpage.css";
import Frame from "../Frame.svg";
import CollectEmail from "./CollectEmail";
import Functanality from "./Functanality";
// import AI1 from "../assets/AI1.webp";
// import Elipse39 from "../assets/Ellipse39.png";
// import Elipse40 from "../assets/Ellipse40.png";
// import Elipse41 from "../assets/Ellipse41.png";
// import Elipse42 from "../assets/Ellipse42.svg";
// import Elipse43 from "../assets/Ellipse43.png";
// import Elipse44 from "../assets/Ellipse44.png";

const LandingPage = () => {
  return (
    <>
      <section>
        
          
            <div>
              <h1 className="main-heading">
                Preparing for an interview or presentation?
              </h1>
            </div>
            <div>
              <p className="para1">
                Get data driven feedback on your next presentation and interview
                using AI.
              </p>
            </div>
            <CollectEmail />
      </section>

      <section>
        <div>
          <h1 className="email">
            Preparing for presentations and interviews brings on anxiety and
            stress for most of us. Practice in front of mirror. Practice with
            friends. How can you get an objective opinion?
          </h1>
        </div>
        <div>
          <p className="para2">
            We give data driven feedback so you can perform at their best.
          </p>
        </div>
      </section>

        <Functanality/>

      <div class="big-img">
        <img src={Frame} alt="" srcset="" />
      </div>
    </>
  );
};

export default LandingPage;
