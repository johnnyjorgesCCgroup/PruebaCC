import React, { useEffect, useState } from "react";
import ModalEdit from "./ModalEdit";
import ModalDelete from "./ModalDetele";
import PropTypes from "prop-types";
import { DataGrid, GridToolbar, GridToolbarQuickFilter } from "@mui/x-data-grid";
import { Button } from "@mui/material";

// Función que realiza la solicitud para obtener la lista de trabajadores
export const getList = async (setLista) => {
  try {
    const response = await fetch("https://api.cvimport.com/api/worker");
    if (response.ok) {
      const data = await response.json();
      setLista(data.data);
    } else {
      console.error("Error al obtener la lista de trabajadores", response.statusText);
    }
  } catch (error) {
    console.error("Error al obtener la lista de trabajadores", error);
  }
};

const DataTable = () => {
  const [lista, setLista] = useState([]);
  const [selectedWorker, setSelectedWorker] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedWorkerToDelete, setSelectedWorkerToDelete] = useState(null);

  const handleOpenModal = (worker) => {
    setSelectedWorker(worker);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    getList(setLista); // Pasamos setLista como parámetro
  };

  const handleOpenDeleteModal = (worker) => {
    setSelectedWorkerToDelete(worker);
    setOpenDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setOpenDeleteModal(false);
    getList(setLista); // Pasamos setLista como parámetro
  };

  useEffect(() => {
    getList(setLista); // Pasamos setLista como parámetro
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "name", headerName: "Nombres", width: 130 },
    { field: "document_type", headerName: "Tipo Documento", width: 130 },
    { field: "document_number", headerName: "Numero Documento", width: 150 },
    { field: "address", headerName: "Dirección", width: 130 },
    { field: "phone_number", headerName: "Numero Celular", width: 130 },
    {
      field: "acciones",
      headerName: "Acciones",
      width: 180,
      renderCell: (params) => (
        <div>
          <Button
            style={{ margin: 4, fontSize: 25, color: "green" }}
            onClick={() => handleOpenModal(params.row)}
          ><i className="fas fa-solid fa-pen-to-square" href=""></i></Button>
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
  );
};

ModalEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default DataTable;
