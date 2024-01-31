import { useState } from "react";
import {
  Button,
  Modal,
  TextField,
  Box,
  Alert,
  AlertTitle,
} from "@mui/material";
import PropTypes from "prop-types";
import Axios from "axios";
import AxiosTablesPrueba from "./AxiosTablesPrueba";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ModalCreate = ({ open, handleClose }) => {
  const [newWorker, setNewWorker] = useState({
    name: "",
    document_type: "",
    document_number: "",
    address: "",
    phone_number: "",
  });

  const [confirmation, setConfirmation] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWorker((prevWorker) => ({ ...prevWorker, [name]: value }));
  };

  const handleCreateWorker = async () => {
    try {
      const response = await Axios.post(
        "https://api.cvimport.com/api/worker",
        newWorker
      );
      console.log("Trabajador creado exitosamente", response.data);
      handleClose();
      setConfirmation(
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Trabajador creado exitosamente
          </Alert>
      );
      AxiosTablesPrueba.getList();
    } catch (error) {
      console.error("Error al crear el trabajador", error);
      setConfirmation(
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Error al crear al trabajador
          </Alert>
      );
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="child-modal-title">Crear Nuevo Worker</h2>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={newWorker.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Tipo de Documento"
          variant="outlined"
          fullWidth
          margin="normal"
          name="document_type"
          value={newWorker.document_type}
          onChange={handleInputChange}
        />
        <TextField
          label="Numero de Documento"
          variant="outlined"
          fullWidth
          margin="normal"
          name="document_number"
          value={newWorker.document_number}
          onChange={handleInputChange}
        />
        <TextField
          label="Direccion"
          variant="outlined"
          fullWidth
          margin="normal"
          name="address"
          value={newWorker.address}
          onChange={handleInputChange}
        />
        <TextField
          label="Numero Celular"
          variant="outlined"
          fullWidth
          margin="normal"
          name="phone_number"
          value={newWorker.phone_number}
          onChange={handleInputChange}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="success"
            onClick={handleCreateWorker}
            style={{ marginRight: 2 }}
          >
            Crear
          </Button>
          <Button variant="contained" color="error" onClick={handleClose}>
            Cancelar
          </Button>
        </div>
        {confirmation}
      </Box>
    </Modal>
  );
};

ModalCreate.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default ModalCreate;
