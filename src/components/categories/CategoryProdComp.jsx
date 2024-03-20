import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { getCategory } from '../../asyncMock';
import { useEffect, useState } from 'react';

export default function CategoryProdComp() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getCategory(category).then((data) => setProducts(data));
    console.log('verificacion');
  }, [category]);
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div style={{display:'flex', gap:10}}>
        <h2 style={{fontSize:35}}>PRODUCTOS DE LA CATEGORIA {category}</h2>

        {products.map((product) => (
          <div key={product.id} style={{border:'1px solid black', padding:10}}>
            <h2>{product.title}</h2>
            <img src={product.image} alt="" />
            <h3>{product.price}</h3>
            <button onClick={() => handleClick(product.id)}>
                VER DETALLES
              </button>
          </div>
        ))}
      </div>
    </>
  );
}