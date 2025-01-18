import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  IconButton,
  Button,
} from "@mui/material";
import {
  getLocalStorageArray,
  removeFromLocalStorageArray,
  updateLocalStorageArray,
} from "../utils/methods";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Tasks() {
  const data = getLocalStorageArray("data");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTasks(getLocalStorageArray("data"));
  }, []);

  const handleCheck = (val) => {
    let updatedObj = {
      ...val,
      taskstatus: !val?.isCompleted ? "Done" : "To Do",
      isCompleted: !val.isCompleted,
    };
    updateLocalStorageArray("data", updatedObj);
    setTasks((prev) =>
      prev?.map((ele) => (ele?.id == val?.id ? updatedObj : ele))
    );
  };

  const handleDelete = (val) => {
    removeFromLocalStorageArray("data", val?.id);
    setTasks((prev) => prev?.filter((ele) => ele?.id !== val?.id));
    toast.success(`Task ${val?.taskname} is deleted!`);
  };

  return (
    <Base>
      <div className="flex flex-col justify-center items-center h-[100vh] m-auto p-4 w-full bg-gray-50">
        {data.length > 0 && (
          <div className="flex justify-between items-center w-full max-w-[800px] mb-1">
            <h1 className="text-2xl font-bold text-gray-700">Task List</h1>
            <Button
              variant="contained"
              size="small"
              onClick={() => navigate(-1)}
              sx={{ textTransform: "none" }}
            >
              Create Task
            </Button>
          </div>
        )}

        {data?.length > 0 ? (
          <TableContainer
            component={Paper}
            elevation={3}
            sx={{
              margin: "20px auto",
              maxWidth: "800px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Table>
              <TableHead className="bg-gray-100">
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell sx={{ width: "40%" }}>
                    <span className="font-semibold">Title</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold">Status</span>
                  </TableCell>
                  <TableCell>
                    <span className="font-semibold">Action</span>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {tasks?.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>
                      <Checkbox
                        checked={row?.isCompleted ? true : false}
                        onChange={() => handleCheck(row)}
                      />
                    </TableCell>
                    <TableCell
                      className={`${
                        row?.isCompleted ? "line-through" : ""
                      } p-3 max-w-[200px] whitespace-normal break-words`}
                    >
                      <span className="font-medium">{row.taskname}</span>
                    </TableCell>
                    <TableCell>
                      <span className="py-1 px-0 sm:px-4 rounded-lg bg-blue-100 text-blue-700">
                        {row.taskstatus}
                      </span>
                    </TableCell>
                    <TableCell>
                      <IconButton onClick={() => handleDelete(row)}>
                        <DeleteIcon color="error" />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <h4>No Tasks....</h4>
        )}
      </div>
    </Base>
  );
}

export default Tasks;
