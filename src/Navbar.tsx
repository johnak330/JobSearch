import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-background">
      <div className="navcontainer">
        <div className="navbox">
          <a href="#">Find Jobs</a>
          <button className="signinbtn">Log In</button>
          <button className="signoutbtn">Log Out</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
