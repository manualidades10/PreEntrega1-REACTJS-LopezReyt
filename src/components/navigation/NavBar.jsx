import CartWidget from "../cartwidget/CartWidget"
import { Link } from 'react-router-dom';
export default function NavBar (){
    
    return(
        <>
        <nav className="NavBar">
            <ul >
                <li><Link to={'/'}>INICIO</Link> </li>
                <li><Link to={'/products'}>PRODUCTOS</Link></li>
                <li><Link to={'/contact'}> CONTACTOS</Link></li>
                <li><Link to={'/categories/termos'}> TERMOS</Link></li>
                <li><Link to={'/categories/mates'}> MATES</Link></li>

                <li><CartWidget/></li>
            </ul> 
        </nav>
        </>
    )
}