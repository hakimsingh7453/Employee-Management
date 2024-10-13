/* eslint-disable jsx-a11y/anchor-is-valid */
import './style.css';

function Navbar() {

  return (
    <div>
      <nav className="name">
        <ul className="contain">
        <a href="/">HOME </a>
          <a href="#">SERVICES </a>
          <a href="#"> CONTACT US</a>
          <a href="/login">SIGN IN</a>
          <a href="#">SIGN UP</a>
        </ul>
      </nav>
    </div>
  );
}
  
  export default Navbar;