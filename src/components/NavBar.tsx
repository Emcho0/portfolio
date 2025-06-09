import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="text-2xl font-mono bg-blue-500 p-4 space-x-3">
      <Link to="/">Home</Link>
      <Link to="/test">Testing</Link>
    </nav>
  );
};

export default NavBar;
