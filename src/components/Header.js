import { Link } from "react-router-dom";

function Header() {
  return (
    <nav>
      <h1>Checkers Store</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/store">Store</Link></li>
        <li><Link to="/cart">Cart</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
}

export default Header;
