/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from 'react-router-dom';
import './style.css';

function Navbar() {
  const navigate=useNavigate();

function singUpHandler(){
  navigate('/login');
}

  return (
    <div>
      <nav className="name">
        <ul className="contain">
        <a href="/">HOME </a>
          <a href="#">SERVICES </a>
          <a href="#"> CONTACT US</a>
          <a href="/login">SIGN IN</a>
          <button onClick={singUpHandler}>SIGN UP</button>
        </ul>
      </nav>
    </div>
  );
}
  
  export default Navbar;