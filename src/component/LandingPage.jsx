import React from "react";
import "./landingpage.css";
import Elipse39 from "../assets/Ellipse39.png";
import Elipse40 from "../assets/Ellipse40.png";
import Elipse41 from "../assets/Ellipse41.png";
import Elipse42 from "../assets/Ellipse42.svg";
import Elipse43 from "../assets/Ellipse43.png";
import Elipse44 from "../assets/Ellipse44.png";

const LandingPage = () => {
  return (
    <>
      <h1 className="main-heading">
        Be Your Best Version of Yourself
      </h1>
      <p className="para1">
       Get data driven feedback on your next presentation and interview using AI.
      </p>
      <button className="btn1">Join Waillist</button>

      <svg
        className="svg"
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="44"
        viewBox="0 0 32 44"
        fill="none"
      >
        <path
          d="M19.2821 0H12.7179C9.34611 0.00370547 6.11345 1.31132 3.7292 3.63597C1.34494 5.96062 0.00380049 9.11245 0 12.4V31.6C0.00380049 34.8875 1.34494 38.0394 3.7292 40.364C6.11345 42.6887 9.34611 43.9963 12.7179 44H19.2821C22.6539 43.9963 25.8865 42.6887 28.2708 40.364C30.6551 38.0394 31.9962 34.8875 32 31.6V12.4C31.9962 9.11245 30.6551 5.96062 28.2708 3.63597C25.8865 1.31132 22.6539 0.00370547 19.2821 0ZM29.5385 31.6C29.5352 34.2512 28.4536 36.7929 26.5308 38.6676C24.6081 40.5422 22.0012 41.5968 19.2821 41.6H12.7179C9.99878 41.5968 7.39191 40.5422 5.46917 38.6676C3.54643 36.7929 2.4648 34.2512 2.46154 31.6V12.4C2.4648 9.74881 3.54643 7.20712 5.46917 5.33244C7.39191 3.45776 9.99878 2.40318 12.7179 2.4H19.2821C22.0012 2.40318 24.6081 3.45776 26.5308 5.33244C28.4536 7.20712 29.5352 9.74881 29.5385 12.4V31.6ZM17.2308 9.2V18.8C17.2308 19.1183 17.1011 19.4235 16.8703 19.6485C16.6395 19.8736 16.3264 20 16 20C15.6736 20 15.3605 19.8736 15.1297 19.6485C14.8989 19.4235 14.7692 19.1183 14.7692 18.8V9.2C14.7692 8.88174 14.8989 8.57652 15.1297 8.35147C15.3605 8.12643 15.6736 8 16 8C16.3264 8 16.6395 8.12643 16.8703 8.35147C17.1011 8.57652 17.2308 8.88174 17.2308 9.2Z"
          fill="#ECECEC"
        />
      </svg>

      <h2 className="matters">What matters to you matters to us.</h2>

      <div className="matters-box">
        <div className="box">
          <h1>Faster feedback</h1>
          <p>Clear instructions and next steps for fast improvement.</p>
        </div>
        <div className="box">
          <h1>Any time</h1>
          <p>Prep at your own time and pace. 24/7 availability.</p>
        </div>
        <div className="box">
          <h1>Team up</h1>
          <p>
            Invite friends and advisors to help you with your interview prep in
            their own time.
          </p>
        </div>
      </div>

      <div className="interview">
        <h1>Diverse interview practice powered by artificial intelligence</h1>
        <p>
          Our AI technology proactively targets underrepresented groups from
          passive and overlooked talent pools. We are one of the few AI
          interview practice platform that unlocks all-new opportunities and
          brings valuable, fresh perspectives to your training.
        </p>
      </div>

      <div className="photos">
        <img src={Elipse39} alt="img" srcset="" />
        <img src={Elipse40} alt="img" srcset="" />
        <img src={Elipse41} alt="img" srcset="" />
        <img src={Elipse42} alt="img" srcset="" />
        <img src={Elipse43} alt="img" srcset="" />
        <img src={Elipse44} alt="img" srcset="" />
      </div>

      <div className="areas">
        <h1>Practice Areas</h1>
        <div className="buttons">
          <button className="btn2">Software developer</button>
          <button className="btn2">Data Scientist</button>
          <button className="btn2">Strategy Consultant</button>
          <button className="btn2">Financial Analysts</button>
        </div>
      </div>

      <h1 className="email">
        We give data driven feedback so you can perform at their best.
      </h1>
      <p className="para2">Preparing for presentations and interviews brings on anxiety and stress for most of us. Practice in front of mirror. Practice with friends. How can you get an objective opinion?</p>
      <button className="btn1">Join Waitlist</button>

      <div class="big-img">
        {/* <img src={Frame} alt="" srcset="" /> */}
        <h1>CollabTalent</h1>
      </div>

      <section>
        <hr />
        <footer>
          <div className="footer">
            <div className="left">
            <h1>CollabTalent</h1>
              <p>Chicago, lllinois, USA</p>
            </div>
            <div className="right">
              <p>Terms and Conditions</p>
              <p>Privacy</p>
              <p>Contact Us</p>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
};

export default LandingPage;
