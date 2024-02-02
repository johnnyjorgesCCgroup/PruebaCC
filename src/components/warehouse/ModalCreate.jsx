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

const ModalCreate = ({ open, handleClose, ...otherProps }) => {
  const [newWorker, setNewWorker] = useState({
    name: "",
    quantity: ""
  });

  const [confirmation, setConfirmation] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewWorker((prevWorker) => ({ ...prevWorker, [name]: value }));
  };

  {/*const handleSelectChange = (event) => {
    const { value } = event.target;
    setNewWorker((prevWorker) => ({ ...prevWorker, document_type: value }));
  };*/}

  const handleCreateWorker = async () => {
    try {
      const response = await fetch("https://api.cvimport.com/api/warehouse", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWorker),
      });

      if (response.ok) {
        console.log("Trabajador creado exitosamente");
        handleClose();
        setConfirmation(
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Trabajador creado exitosamente
          </Alert>
        );
      } else {
        throw new Error(`Error al crear el trabajador: ${response.statusText}`);
      }
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
      {...otherProps}
    >
      <Box sx={{ ...style, width: 400 }}>
        <h2 id="child-modal-title">Crear Nuevo Warehouse</h2>
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
          label="Cantidad"
          variant="outlined"
          fullWidth
          margin="normal"
          name="quantity"
          value={newWorker.quantity}
          onChange={handleInputChange}
        />
        {/*<FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Tipo de Documento
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={newWorker.document_type}
            onChange={handleSelectChange}
          >
            <MenuItem value={"DNI"}>DNI</MenuItem>
            <MenuItem value={"RUC"}>RUC</MenuItem>
            <MenuItem value={"PTP"}>PTP</MenuItem>
          </Select>
  </FormControl>*/}
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
