import { useParams } from 'react-router-dom';
import { /*useContext*/useEffect, useState } from 'react';
// import { getProduct } from '../../asyncMock';
 import { getProduct } from '../../firebase/firebase';
// import { CartContext } from '../cartcontext/CartContextComp';
import ReactLoading from 'react-loading';


export default function SingleProdComp() {
  const { id } = useParams();
  const [product, setProduct] = useState();
  console.log(id);
  // const { addToCart } = useContext(CartContext);


  useEffect(() =>{
    const fetchProduct = async () =>{
      const productData = await getProduct(id);
      console.log(id);
      console.log(productData);
      setProduct(productData);
    };
    fetchProduct();
  },[id])
  
  return (
    <>
      {
        product ? (
          <div style={{display:'flex', justifyContent:'center'}}>
              <div style={{border:'1px solid black', padding:10}}>
              <h1></h1>
              <img src={product.image} alt="" />
              <p>DESCRIPCION: {product.description}</p>
              <p>CATEGORIA: {product.category}</p>
              <p>PRECIO: ${product.price}</p>
              <button /*onClick={ () => addToCart(product)}*/>LO QUIERO</button>
            </div>
          </div>
        
      ) : (
        <div style={{display:'flex', justifyContent:'center'}}>
          <ReactLoading type='bubbles' color='green'/>
        </div>
        // <p>cargando...</p>
        
    )}
    </>
  );
}