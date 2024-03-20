import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../../asyncMock';
export default function SingleProdComp() {
  const { prodId } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    setProduct(getProduct(prodId));
  }, [prodId]);
  return (
    <>
      <div>
        <h1></h1>
        <img src={product.image} alt="" />
        <p>DESCRIPCION: {product.description}</p>
        <p>CATEGORIA: {product.category}</p>
        <p>PRECIO: ${product.price}</p>
        <button>LO QUIERO</button>
      </div>
    </>
  );
}