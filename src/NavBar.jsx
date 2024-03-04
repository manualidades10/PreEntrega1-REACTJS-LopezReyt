import CartWidget from "./CartWidget"
export default function NavBar (){
    
    return(
        <>
        <nav className="NavBar">
            <ul >
                <li><a href="">INICIO</a></li>
                <li><a href="">TIENDA</a></li>
                <li><a href="">TIPS</a></li>
                <li><a href="">NOSOTROS</a></li>
                <li><a href="">CONTACTO</a></li>
                <li><CartWidget/></li>
            </ul> 
        </nav>
        </>
    )
}