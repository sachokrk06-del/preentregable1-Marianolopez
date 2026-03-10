import "./Titulo.css"
import banner from "../assets/img/carrito.jpg"

const Titulo = () => {

    const tittle = "bienvenidos a mi pagina"

    return(
        <div className="titulo">
            <img src={banner} alt="" />
            <h1>{tittle}</h1>
        </div>
    )
}

export default Titulo