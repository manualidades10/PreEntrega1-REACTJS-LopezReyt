import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { getCategory } from '../../asyncMock';
import { getCategory } from '../../firebase/firebase';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

export default function CategoryProdComp() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  async function obtenerProdCategorias() {
    const filterProds = await getCategory(category);
    setProducts(filterProds);
    setLoading(false);
  }

  useEffect(() =>{
    obtenerProdCategorias();
  },[category, loading]);

  // useEffect(() => {
  //   getCategory(category).then((data) => setProducts(data));
  //   console.log('verificacion');
  // }, [category]);
  
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
        {
          loading ? (
            <div style={{display:'flex', justifyContent:'center'}}>
              <ReactLoading type='bubbles' color='green'/>
            </div>
           
          ) : (
            <div style={{display:'flex', gap:10}}>
              <h2 style={{fontSize:35}}>PRODUCTOS DE LA CATEGORIA {category.toUpperCase()}</h2>
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

          )


        }
        
        
        
    </>
  );
}