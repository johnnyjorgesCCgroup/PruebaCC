import React, { useState } from "react";

export default function CrearTicket() {
  const [nuevoTicket, setNuevoTicket] = useState({
    usuario: "",
    tipologia: "",
    comentario: "",
    urgente: false,
    estado: "Abierto"
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNuevoTicket((prevTicket) => ({
      ...prevTicket,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Realizar la solicitud POST a la API para crear el nuevo ticket
      const response = await fetch(
        "https://apiticketccgroup.onrender.com/tickets",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(nuevoTicket),
        }
      );

      if (response.ok) {
        console.log("Nuevo ticket creado exitosamente");
        // Puedes realizar acciones adicionales después de la creación del ticket
      } else {
        console.error("Error al crear el ticket:", response.statusText);
      }
    } catch (error) {
      console.error("Error al crear el ticket:", error);
    }
  };

  return (
    <div>
      <div className="modal fade" id="modal-añadir">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="card-primary">
              <div className="card-header">
                <h3 className="card-title">Crear Ticket</h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  style={{ color: "white" }}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="exampleSelectRounded0">
                    Usuario <code>*</code>
                  </label>
                  <select
                    className="custom-select rounded-0"
                    id="exampleSelectRounded0"
                    name="usuario"
                    value={nuevoTicket.usuario}
                    onChange={handleChange}
                  >
                    <option>Selecciona Usuario</option>
                    <option>Sara</option>
                    <option>Jaime</option>
                    <option>Ray</option>
                    <option>Francys</option>
                    <option>Cristian</option>
                    <option>Rodolfo</option>
                    <option>Julio</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleSelectRounded0">
                    Tipología <code>*</code>
                  </label>
                  <select
                    className="custom-select rounded-0"
                    id="exampleSelectRounded0"
                    name="tipologia"
                    value={nuevoTicket.tipologia}
                    onChange={handleChange}
                  >
                    <option>Selecciona Tipología</option>
                    <option>Consulta</option>
                    <option>Reclamo</option>
                    <option>Solicitud</option>
                    <option>Reparación</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    Comentario <code>*</code>
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Ingresa texto"
                    name="comentario"
                    value={nuevoTicket.comentario}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputFile">Subir Imagen</label>
                  <div className="input-group">
                    <div className="custom-file">
                      <input
                        type="file"
                        className="custom-file-input"
                        id="exampleInputFile"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="exampleInputFile"
                      >
                        Elija el Archivo
                      </label>
                    </div>
                    <div className="input-group-append">
                      <span className="input-group-text">Upload</span>
                    </div>
                  </div>
                </div>
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    name="urgente"
                    checked={nuevoTicket.urgente}
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Urgente (Solo si es de vida o muerte 🧐)
                  </label>
                </div>
              </div>
              <div className="card-footer">
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
