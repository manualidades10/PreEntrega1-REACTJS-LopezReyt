export default function ItemListConainer (prop) {
    const estilosTetxto = {
        fontSize:'30px',
        color:'red',
        textAlign:'center'
    }
    return(
        <h3 style={estilosTetxto}>{prop.greeting}</h3>
    )

}