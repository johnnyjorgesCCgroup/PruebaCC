import { useState, useEffect } from "react";
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

const ModalEdit = ({ open, handleClose, workerToEdit }) => {
  const [editedWorker, setEditedWorker] = useState({
    name: "",
    quantity: "",
  });

  const [confirmation, setConfirmation] = useState(null);

  useEffect(() => {
    console.log("WorkerToEdit:", workerToEdit);
    if (workerToEdit) {
      // Utilizamos un callback en setEditedWorker para garantizar que se actualice correctamente
      console.log("Setting editedWorker:", {
        ...editedWorker,
        name: workerToEdit.name || "",
        quantity: workerToEdit.quantity || "",
      });
      setEditedWorker((prevWorker) => ({
        ...prevWorker,
        name: workerToEdit.name || "",
        quantity: workerToEdit.quantity || "",
      }));
    }
  }, [workerToEdit]);
  


  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedWorker((prevWorker) => ({ ...prevWorker, [name]: value }));
  };

  const handleEditWorker = async () => {
    try {
      const response = await fetch(`https://api.cvimport.com/api/warehouse/${workerToEdit.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editedWorker),
      });

      if (response.ok) {
        console.log("Trabajador editado exitosamente");
        handleClose();
        setConfirmation(
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Trabajador editado exitosamente
          </Alert>
        );
      } else {
        throw new Error(`Error al editar el trabajador: ${response.statusText}`);
      }
    } catch (error) {
      console.error("Error al editar el trabajador", error);
      setConfirmation(
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error al editar al trabajador
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
        <h2 id="child-modal-title">Editar Warehouse</h2>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          margin="normal"
          name="name"
          value={editedWorker.name}
          onChange={handleInputChange}
        />
        <TextField
          label="Cantidad"
          variant="outlined"
          fullWidth
          margin="normal"
          name="quantity"
          value={editedWorker.quantity}
          onChange={handleInputChange}
        />
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditWorker}
            style={{ marginRight: 2 }}
          >
            Guardar cambios
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

ModalEdit.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  workerToEdit: PropTypes.object,
};

export default ModalEdit;
