import '../assets/style/pedido.css'
import Card from './Card'

function pedidos() {
 
    const users = [
      {
        id:1,
        name: "Juan",
        lastName: "Diaz",
        chicken:" cubeta",
      },
      {
        id:2,
        name: "miguel",
        lastName: "Solis",
        chicken:" Mega Box",
      },
      {
        id:3,
        name: "Diego",
        lastName: "Dominguez",
        chicken: "chilli "
      },
      {
        id:4,
        name: "jesus",
        lastName: "Macias",
        chicken: "leña"
      },
      {
        id:5,
        name: "Alonso",
        lastName: "Ochoa",
        chicken:"hamburguesa"
      },
      
    ];
  
    return (
        <div className="container">
            <h2>Lista de pedidos Populares De Nuestro Clientes</h2>
            {users.map((user)=> {
                return (
                    <Card 
                      key={user.id}
                      name={user.name}
                      lastName={user.lastName}
                      icecream={user. chicken}
                    />
                )
            })}
        </div>
    );
  }
  

  export default pedidos;
