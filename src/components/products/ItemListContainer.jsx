import { useNavigate } from 'react-router-dom';
// import { getProducts } from '../../asyncMock';
import { getProducts } from '../../firebase/firebase';
import { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
export default function ProductsComp() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  async function obtenerProductos(){
    const productos = await getProducts();
    setProducts(productos);
    setLoading(false);
  }
  
  useEffect(() =>{
    obtenerProductos();
  },[])

  // useEffect(() => {
  //   getProducts.then((data) => setProducts(data));
  // }, []);
  
  //Funcion que lleva al usuario a un producto en especifico.
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };
  console.log(products);
  return (
    <>
      {
        loading ? (
          <div style={{display:'flex', justifyContent:'center'}}>
              <ReactLoading type='bubbles' color='green'/>
            </div>
        ) : (
          <div>
            <section style={{ display: 'flex', gap: 10 , justifyContent:'center'}}>
              <h1>PRODUCTOS</h1>
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
        )
      }
    </>
  );
}