import IconoCarrito from './assets/carrito.png'
export default function CartWidget () {
    return(
        <>
        <div className='contenedorCarrito'>
            <a href="" ><img src={IconoCarrito} alt="carrito" /></a>
            <p>0</p>
        </div>
        </>
    )
}