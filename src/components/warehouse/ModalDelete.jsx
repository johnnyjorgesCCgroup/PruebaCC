import { useState } from "react";
import {
  Button,
  Modal,
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

const ModalDelete = ({ open, handleClose, workerToDelete }) => {
  const [confirmation, setConfirmation] = useState(null);

  const handleDeleteWorker = async () => {
    try {
      if (!workerToDelete) {
        console.error("No se ha seleccionado ningún trabajador para eliminar");
        return;
      }
  
      const response = await fetch(`https://api.cvimport.com/api/warehouse/${workerToDelete.id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        console.log("Trabajador eliminado exitosamente");
        handleClose();
        setConfirmation(
          <Alert severity="success">
            <AlertTitle>Success</AlertTitle>
            Trabajador eliminado exitosamente
          </Alert>
        );
      } else {
        console.error("Error al eliminar el trabajador", response.statusText);
        setConfirmation(
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            Error al eliminar al trabajador
          </Alert>
        );
      }
    } catch (error) {
      console.error("Error al eliminar el trabajador", error);
      setConfirmation(
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          Error al eliminar al trabajador
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
        <h2 id="child-modal-title">Eliminar Warehouse</h2>
        <p>
          ¿Estás seguro de que quieres eliminar al deposito {' '}
          <strong>{workerToDelete.name}</strong>?
        </p>
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleDeleteWorker}
            style={{ marginRight: 2 }}
          >
            Confirmar
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

ModalDelete.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  workerToDelete: PropTypes.object,
};

export default ModalDelete;
