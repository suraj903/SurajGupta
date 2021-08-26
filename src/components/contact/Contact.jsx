import { useState } from "react";
import "./contact.scss";

export default function Contact() {
  const [message, setMessage] = useState(false);

  const fb = () => {
    window.open('https://www.facebook.com/SurajGupta9033/');
  };

  const twitter = () => {
    window.open('https://twitter.com/SurajGupta_');
  };

  const linkedin = () => {
    window.open('https://www.linkedin.com/in/suraj-gupta-4a1304150/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };
  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        {/* <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form> */}

        <div className="number">
          <div className="fasmobile">
            <i class="fas fa-mobile"> </i>
          </div>
          <h5>+91 9033481597</h5>
        </div>

        <div className="email">
          <div className="fasemail">
            <i class="fas fa-envelope-square"> </i>
          </div>
          <h5>sj_uchihaa@ymail.com </h5>
        </div>

        <div className="socialmedia">

          <div className="linkedin">
            <i class="fab fa-linkedin" onClick={linkedin}> </i>
          </div>
          <div className="twitter">
            <i class="fab fa-twitter-square" onClick={twitter}></i>
          </div>
          <div className="fb">
            <i class="fab fa-facebook" onClick={fb}></i>
          </div>

        </div>
      </div>
    </div>
  );
}
