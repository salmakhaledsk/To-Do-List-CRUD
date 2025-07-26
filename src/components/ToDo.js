import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import EditNoteIcon from "@mui/icons-material/EditNote";
import React, { useState } from "react";
import { useContext } from "react";
import { ToDosContext } from "../Contexts/ToDosContext";

function ToDo({ todo }) {
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showUpdateDialog, setShowUpdateDialog] = useState(false);
  const [updatedTodo, setUpdatedTodo] = useState({
    title: todo.title,
    details: todo.details,
  });
  const { todos, setTodos } = useContext(ToDosContext);

  ///////////////////EventHandelrs////////////////////////////////////////////////
  const handleCheckClick = () => {
    // handleCheck(todo.id);
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted; 
      }
      return t;
    });
    setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));

  };

  function handleDeleteClick() {
    setShowDeleteDialog(true);
  }

  function handleUpdateClick() {
    setShowUpdateDialog(true);
  }
  function handleDeleteDialoagClose() {
    setShowDeleteDialog(false);
  }

  function handleUpdateDialoagClose() {
    setShowUpdateDialog(false);
  }
  function handleDeleteConfirm() {
    const updatedTodos = todos.filter((t) => {
      return t.id !== todo.id; // Remove the todo with the matching id
    });
    setTodos(updatedTodos);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));

  }
  function handleUpdateConfirm() {
    //  alert("Update Task button clicked!"); // Placeholder for update task functionality
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, title: updatedTodo.title, details: updatedTodo.details };
      }
      return t;
    });
    setTodos(updatedTodos);
    setShowUpdateDialog(false);
        localStorage.setItem("todos", JSON.stringify(updatedTodos));

  }
  /////////////=====EventHandelrs=======/////////////////////////////////
  return (
    <>
      {/* dialoge delete  */}
      <Dialog
        onClose={handleDeleteDialoagClose}
        open={showDeleteDialog}
        slots={{}}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            borderRadius: "16px",
            padding: "8px",
            minWidth: "400px",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <DialogTitle
          sx={{
            padding: "24px 24px 16px 24px",
            textAlign: "center",
            position: "relative",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#1f2937",
          }}
        >
          {/* X Close Button */}
          <IconButton
            onClick={handleDeleteDialoagClose}
            sx={{
              position: "absolute",
              right: "16px",
              top: "16px",
              color: "#6b7280",
              "&:hover": {
                backgroundColor: "#f3f4f6",
                color: "#374151",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          Delete Task
        </DialogTitle>

        <DialogContent
          sx={{
            padding: "0 24px 24px 24px",
            textAlign: "center",
          }}
        >
          {/* Delete Icon in Circle */}
          <Box
            sx={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "#fef2f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px auto",
              border: "2px solid #fecaca",
            }}
          >
            <DeleteIcon sx={{ fontSize: 32, color: "#ef4444" }} />
          </Box>

          <DialogContentText
            sx={{
              color: "#6b7280",
              lineHeight: 1.6,
              fontSize: "1rem",
            }}
          >
            Are you sure you want to delete this task?
          </DialogContentText>
        </DialogContent>

        <DialogActions
          sx={{
            padding: "0 24px 24px 24px",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <Button
            onClick={handleDeleteDialoagClose}
            sx={{
              backgroundColor: "#f3f4f6",
              color: "#374151",
              fontWeight: 500,
              borderRadius: "8px",
              padding: "12px 24px",
              minWidth: "100px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#e5e7eb",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Cancel
          </Button>

          <Button
            onClick={handleDeleteConfirm}
            sx={{
              backgroundColor: "#ef4444",
              color: "white",
              fontWeight: 500,
              borderRadius: "8px",
              padding: "12px 24px",
              minWidth: "100px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#dc2626",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
      {/*== dialoge delete == */}

      {/*/////////////////////// dialoag Update ///////////////////////////////*/}
      <Dialog
        onClose={handleUpdateDialoagClose}
        open={showUpdateDialog}
        slots={{}}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
        PaperProps={{
          sx: {
            borderRadius: "16px",
            padding: "8px",
            minWidth: "400px",
            boxShadow:
              "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          },
        }}
      >
        <DialogTitle
          sx={{
            padding: "24px 24px 16px 24px",
            textAlign: "center",
            position: "relative",
            fontSize: "1.5rem",
            fontWeight: 600,
            color: "#1f2937",
          }}
        >
          {/* X Close Button */}
          <IconButton
            onClick={handleUpdateDialoagClose}
            sx={{
              position: "absolute",
              right: "16px",
              top: "16px",
              color: "#6b7280",
              "&:hover": {
                backgroundColor: "#f3f4f6",
                color: "#374151",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          Edit Task
        </DialogTitle>

        <DialogContent
          sx={{
            padding: "0 24px 24px 24px",
            textAlign: "center",
          }}
        >
          {/* Delete Icon in Circle */}
          <Box
            sx={{
              width: "64px",
              height: "64px",
              borderRadius: "50%",
              backgroundColor: "#fef2f2",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px auto",
              border: "2px solid #fecaca",
            }}
          >
            <EditIcon sx={{ fontSize: 32, color: "#ef4444" }} />
          </Box>

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Task"
            label="Task Title"
            fullWidth
            variant="standard"
            value={updatedTodo.title}
            onChange={(event) =>
              setUpdatedTodo({ ...updatedTodo, title: event.target.value })
            }
          />

          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="Task"
            label="Task Details"
            fullWidth
            variant="standard"
            value={updatedTodo.details}
            onChange={(event) =>
              setUpdatedTodo({ ...updatedTodo, details: event.target.value })
            }
          />
        </DialogContent>

        <DialogActions
          sx={{
            padding: "0 24px 24px 24px",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          {/* close update button */}
          <Button
            onClick={handleUpdateDialoagClose}
            sx={{
              backgroundColor: "#f3f4f6",
              color: "#374151",
              fontWeight: 500,
              borderRadius: "8px",
              padding: "12px 24px",
              minWidth: "100px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#e5e7eb",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Cancel
          </Button>
          {/*== close update button ==*/}
          {/*  update button */}
          <Button
            onClick={handleUpdateConfirm}
            sx={{
              backgroundColor: "#ef4444",
              color: "white",
              fontWeight: 500,
              borderRadius: "8px",
              padding: "12px 24px",
              minWidth: "100px",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: "#dc2626",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            Sure
          </Button>
          {/* =============== update button=============== */}
        </DialogActions>
      </Dialog>
      {/*===================== dialoag Update ===============================*/}
      <Card
        className="ToDoCard"
        sx={{ backgroundColor: "#e7a2b9ff", marginTop: 4 }}
      >
        <CardContent>
          <Grid container>
            <Grid size={8}>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", textAlign: "left" }}
                variant="h5"
              >
                {todo.title}
              </Typography>

              <Typography
                gutterBottom
                sx={{ color: "text.secondary", textAlign: "left" }}
                variant="h6"
              >
                {todo.details}
              </Typography>
            </Grid>

            {/* icons */}
            <Grid
              size={4}
              sx={{
                textAlign: "right",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              {/* 1 */}
              <IconButton
                style={{
                  backgroundColor: todo.isCompleted ? "#590967ff" : "white",
                  color: todo.isCompleted ? "white" : "#590967ff",
                }}
                onClick={() => {
                  handleCheckClick();
                }}
              >
                <CheckCircleOutlineIcon sx={{ fontSize: "40px" }} />
              </IconButton>

              {/* 2 */}
              <IconButton
                onClick={handleUpdateClick}
                sx={{ backgroundColor: "pink" }}
              >
                <EditNoteIcon sx={{ fontSize: "40px", color: "tomato" }} />
              </IconButton>
              {/* 3 */}
              <IconButton onClick={() => handleDeleteClick()}>
                <DeleteIcon sx={{ fontSize: "40px", color: "tomato" }} />
              </IconButton>
            </Grid>

            {/* icons */}
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

export default ToDo;
