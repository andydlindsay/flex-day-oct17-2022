import {useParams, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

const Product = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/about');
      // navigate(-1); // back
      // navigate(1); // forward
    }, 3000);
  }, []);

  const params = useParams();
  console.log(params);

  // useEffect(() => {
  //   axios.get(`/api/products/${params.productId}`)
  //     .then()
  // }, [params.productId]);

  return (
    <div>
      <h2>The Product Component for Product #{params.productId}</h2>
    </div>
  );
};

export default Product;
