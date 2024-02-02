import "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@mui/material";
import ModalCreate from "./ModalCreate";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDelete";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  DataGrid,
  GridToolbar,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid";

export const getList = async (setLista) => {
  try {
    const response = await fetch("https://api.cvimport.com/api/warehouse");
    if (response.ok) {
      const data = await response.json();
      setLista(data.data);
    } else {
      console.error(
        "Error al obtener la lista de trabajadores",
        response.statusText
      );
    }
  } catch (error) {
    console.error("Error al obtener la lista de trabajadores", error);
  }
};

const ContentWarehouse = () => {
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [lista, setLista] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedWorkerToDelete, setSelectedWorkerToDelete] = useState(null);

  const handleOpenModal = (worker) => {
    setSelectedWorker(worker);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    getList(setLista);
  };

  const handleOpenCreateModal = () => {
    setOpenCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setOpenCreateModal(false);
    getList(setLista);
  };

  const handleOpenDeleteModal = (worker) => {
    setSelectedWorkerToDelete(worker);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    getList(setLista);
  };

  useEffect(() => {
  }, [lista]);

  useEffect(() => {
    getList(setLista); // Pasamos setLista como parámetro
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nombres", width: 200 },
    { field: "quantity", headerName: "Cantidad", width: 130 },
    { field: "created_at", headerName: "Fecha Creación", width: 170 },
    {
      field: "acciones",
      headerName: "Acciones",
      width: 180,
      renderCell: (params) => (
        <div>
          <Button
            style={{ margin: 4, fontSize: 25, color: "green" }}
            onClick={() => handleOpenModal(params.row)}
          >
            <i className="fas fa-solid fa-pen-to-square" href=""></i>
          </Button>
          <Button
            style={{ margin: 4, fontSize: 25 }}
            onClick={() => handleOpenDeleteModal(params.row)}
          >
            <i className="fas fa-solid fa-trash"></i>
          </Button>
        </div>
      ),
    },
  ];

  return (
    <div className="content-wrapper" style={{ padding: 20 }}>
      <div className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1 className="m-0">Warehouse</h1>
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
                  <a href="/warehouse">Warehouse</a>
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
            <h3 className="card-title">Listado de Warehouse</h3>
            <Button
              variant="contained"
              color="primary"
              startIcon={<FontAwesomeIcon icon={faPlusCircle} />}
              onClick={() => handleOpenCreateModal()}
            >
              Crear Warehouse
            </Button>
          </div>
        </div>
        <div style={{ height: 600 }}>
          <DataGrid
            rows={lista}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 20 },
              },
            }}
            pageSizeOptions={[10, 20, 50, 100]}
            checkboxSelection
            components={{
              Toolbar: () => (
                <React.Fragment>
                  <GridToolbarQuickFilter />
                  <GridToolbar />
                </React.Fragment>
              ),
            }}
          />
          {openCreateModal && (
            <ModalCreate
              open={openCreateModal}
              handleClose={handleCloseCreateModal}
            />
          )}
          {openModal && (
            <ModalEdit
              open={openModal}
              handleClose={handleCloseModal}
              workerToEdit={selectedWorker}
            />
          )}
          {openDeleteModal && (
            <ModalDelete
              open={openDeleteModal}
              handleClose={handleCloseDeleteModal}
              workerToDelete={selectedWorkerToDelete}
            />
          )}
        </div>
      </div>
    </div>
  );
};

ModalEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ContentWarehouse;
