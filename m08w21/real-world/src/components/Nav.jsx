import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/products">Products </Link>
      <Link to="/styled">Styled </Link>
      <Link to="/context">Context </Link>
      <Link to="/reference">Reference </Link>
    </nav>
  );
};

export default Nav;
