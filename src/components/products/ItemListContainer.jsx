import { useNavigate } from 'react-router-dom';
import { getProducts } from '../../asyncMock';
import { useEffect, useState } from 'react';
export default function ProductsComp() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts.then((data) => setProducts(data));
  }, []);
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div>
        <h1>PRODUCTOS</h1>
        <section style={{ display: 'flex', gap: 10 , justifyContent:'center'}}>
          {products.map((product) => (
            <article
              key={product.id}
              style={{ border: '1px solid black', padding: 10 }}
            >
              <h4>{product.title}</h4>
              <img src={product.image} alt="" />
              <p>precio: {product.price}</p>
              <button onClick={() => handleClick(product.id)}>
                VER DETALLES
              </button>
            </article>
          ))}
        </section>
      </div>
    </>
  );
}