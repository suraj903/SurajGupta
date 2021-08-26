import "./topbar.scss";
// import { Person, Mail } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
          Hola <i class="fas fa-praying-hands"></i>
          </a>
          {/* <img src="assets/MyLogo.png" className="logo"  /> */}
          <div className="itemContainer">
            {/* <Person className="icon" /> */}
            {/* <span>Home</span> */}
            <a href="#intro">Home</a>
          </div>
          <div className="itemContainer">
            {/* <Mail className="icon" /> */}
            {/* <span>suraj.vnsgu@gmail.com</span> */}
          </div>
          <div className="itemContainer">
            <a href="#about">About</a>
          </div>
          {/* <div className="itemContainer">
            <a href="#works">Works</a>
          </div> */}

          {/* <div className="itemContainer">
            <a href="#testimonials">Testimonials</a>
          </div> */}

          <div className="itemContainer">
            <a href="#contact">Contact</a>
          </div>
          
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
