import React, { useEffect, useState } from "react";
import axios from "axios";
import { DataGrid, GridToolbar, GridToolbarQuickFilter } from "@mui/x-data-grid";

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
    renderCell: () => (
      <div>
        <a className="fas fa-solid fa-pen-to-square" style={{ margin: 4, fontSize: 25, color: "green" }}></a>
        <a className="fas fa-solid fa-trash" style={{ margin: 4, fontSize: 25 }}></a>
      </div>
    ),
  },
];

export default function DataTable() {
  const [lista, setLista] = useState([]);
  const getList = () => {
    axios.get("https://api.cvimport.com/api/worker").then((value) => {
      const data = value.data.data;
      setLista(data);
    });
  };

  useEffect(() => {
    getList();
  }, []);

  return (
    <div style={{ height: 400}}>
      <DataGrid
        slots={{
          toolbar: (props) => (
            <React.Fragment>
              <GridToolbarQuickFilter />
              <GridToolbar {...props} />
            </React.Fragment>
          ),
        }}
        rows={lista.map((item) => ({
          id: item.id,
          name: item.name,
          document_type: item.document_type,
          document_number: item.document_number,
          address: item.address,
          phone_number: item.phone_number,
        }))}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
