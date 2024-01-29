import { proveedores } from "./todos.json";
import "react";

class User {
  constructor() {
    this.names = ["maria", "Johnny", "Gerar"];
    this.state = {
      proveedores,
    };
  }
}

export default function ContentIngresos() {
  const userInstance = new User();
  const proveedor = userInstance.state.proveedores.map((proveedor, i) => {
    return (
      <div className="col-md-4" key={i}>
        <div className="card mt-4">
          <div className="card-header">
            <h3>{proveedor.name}</h3>
            <span className="badge badge-pill badge-danger ml-2">
              {proveedor.id}
            </span>
          </div>
          <div className="card-body">
            <p>{proveedor.descripcion}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="content-wrapper" style={{padding:10}}>
      <span className="badge badge-pill badge-success ml-2">
        {proveedor.length}
      </span>
      <div className="container">
        <div className="row mt-4">{proveedor}</div>
      </div>
    </div>
  );
}
