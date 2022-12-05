import Imagen from "../assets/img/pollo.jpeg"
 

function imagen_comp(){

    return(

        <div className="Conteiner">
         <img src={Imagen} alt="Imagenpollo" />   
        </div>


    )
}
export default imagen_comp;