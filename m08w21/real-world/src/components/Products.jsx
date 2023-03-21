import {Link} from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h2>The Products Component</h2>
      <Link to="/products/1">Product #1</Link><br/>
      <Link to="/products/2">Product #2</Link><br/>
      <Link to="/products/3">Product #3</Link><br/>
      <Link to="/products/4">Product #4</Link><br/>
    </div>
  );
};

export default Products;
