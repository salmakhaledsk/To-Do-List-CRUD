import {
  Card,
  CardContent,
  Container,
  Divider,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import ToDo from "./ToDo";
// other libraries
import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { ToDosContext } from "../Contexts/ToDosContext";
export default function ToDoList() {

  const [titleInput, setTitleInput] = useState("");
  const { todos, setTodos } = useContext(ToDosContext);


  const todosjsx = todos.map((t) => {
    return <ToDo key={t.id} todo={t}  />;
  });

    useEffect(()=>{
    console.log("use effect:");
    const storedTodos = JSON.parse(localStorage.getItem("todos")) ;
    setTodos(storedTodos)
  }, []); // This will run only once when the component mounts

  // estd3a2 el code da hykon bs f awel mara h3ml rerender load ll component 3lshan [] fadya
  const handleAddClick = () => {
    // alert("Add Task button clicked!"); // Placeholder for add task functionality\
    const newTodo = {
      id: uuidv4(),
      title: titleInput,
      details: "Details of the new task",
      isCompleted: false,
    };

    ////SAVE IN LOCAL STORAGE 
  const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
   setTitleInput(""); // Clear the input field after adding a task
  }
  return (
    <>
      <Container maxWidth="lg" style={{ marginBottom: "100px" }}>
        <Card sx={{ minWidth: 275 ,textAlign: "center"}}>
          <CardContent>
            <Typography
              className="gradient-text"
              gutterBottom
              sx={{ color: "text.secondary" }}
              variant="h4"
            >
              Note Pad
            </Typography>
            <Divider />

            <ToggleButtonGroup
              color="primary"
              style={{ marginTop: "20px" }}
              exclusive
              aria-label="Platform"
            >
              <ToggleButton>All</ToggleButton>
              <ToggleButton>Done</ToggleButton>
              <ToggleButton>In Progress</ToggleButton>
            </ToggleButtonGroup>
            {/* <Container style={{display:"flex", flexDirection:"row", gap:"20px"}}>
    <input type="text" placeholder="Done:" style={{ marginTop: "20px", width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />
        <input type="text" placeholder="In Progress" style={{ marginTop: "20px", width: "100%", padding: "10px", borderRadius: "4px", border: "1px solid #ccc" }} />

</Container> */}

            {/* /////button and input */}
            <Grid container sx={{ marginTop: "20px" }} spacing={2}>
              <Grid
                size={10}
                sx={{
                  textAlign: "right",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Add Task"
                  variant="outlined"
                  sx={{ width: "100%" }}
                  value={titleInput}
                  onChange={(event) => setTitleInput(event.target.value)}
                />
              </Grid>
              <Grid
                size={2}
                sx={{
                  textAlign: "right",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{ width: "100%", height: "100%" }}
                  className="addButton"
                  onClick={() => {
                    handleAddClick()
                  }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
            {/* /////button and input */}


            {/* <ToDo /> */} 
            {todosjsx}
          </CardContent>
        </Card>
      </Container>
    </>
  );
}
