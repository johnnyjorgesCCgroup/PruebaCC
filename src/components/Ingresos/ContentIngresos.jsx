import "react";
import Axios from "./AxiosTablesPrueba";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import ModalCreate from "./ModalCreate";
import { useState } from "react";

export default function ContentIngresos() {
  
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };
  return (
    <div className="content-wrapper" style={{padding:20}}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Worker</h1>
            </div>
            <div className="col-sm-6">
              <ol
                className="breadcrumb floa-sm-right"
                style={{ justifyContent: "right" }}
              >
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active">
                  <a href="/proveedores">Worker</a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div
        className="card card-outline"
        style={{ padding: 20, marginLeft: 20, marginRight: 20 }}
      >
        <div className="card-header border-0">
          <div className="d-flex justify-content-between">
          <h3 className="card-title">Listado de Worker</h3>
          <Button
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faPlusCircle} />}
            onClick={handleOpenModal}
          >
            Crear Worker
          </Button>
          </div>
        </div>
        <Axios />
        <ModalCreate open={openModal} handleClose={handleCloseModal} />
      </div>
    </div>
  );
}
