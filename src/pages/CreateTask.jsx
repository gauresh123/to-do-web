import React, { useEffect, useState } from "react";
import Base from "../components/Base";
import { Button, MenuItem, TextField } from "@mui/material";
import {
  addToLocalStorageArray,
  getLocalStorageArray,
  setLocalStorageArray,
} from "../utils/methods";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CreateTask() {
  const [task, setTask] = useState("");
  const [taskstatus, setTaskStatus] = useState("To Do");
  const navigate = useNavigate();

  const data = getLocalStorageArray("data");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!task) {
      toast.error("Task is required!");
      return;
    }
    let taskObj = {
      taskname: task,
      taskstatus,
      id: data?.length,
      isCompleted: false,
    };
    addToLocalStorageArray("data", taskObj);
    toast.success(`Task ${task} is added!`);
    setTask("");
  };

  useEffect(() => {
    if (!data) {
      setLocalStorageArray("data", []);
    }
  }, []);

  return (
    <Base>
      <div className="flex justify-center items-center h-[100vh] m-auto p-5 w-full bg-gray-50">
        <div className="w-full sm:w-1/2 h-auto border border-gray-300 p-5 rounded-lg bg-white">
          <Button
            size="small"
            variant="contained"
            sx={{ textTransform: "none" }}
            onClick={() => navigate("/tasks")}
          >
            Go To Tasks
          </Button>
          <div className="flex flex-col gap-4 mt-5">
            <div>
              <span className="font-semibold text-sm">Task</span>
              <TextField
                type="text"
                fullWidth
                size="small"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter Task"
              />
            </div>

            <div>
              <span className="font-semibold text-sm">Status</span>
              <TextField
                type="text"
                fullWidth
                size="small"
                select
                value={taskstatus}
                onChange={(e) => setTaskStatus(e.target.value)}
              >
                <MenuItem value="To Do">To Do</MenuItem>
                <MenuItem value="Done">Done</MenuItem>
              </TextField>
            </div>

            <Button
              variant="contained"
              sx={{ textTransform: "none" }}
              onClick={handleAdd}
            >
              Add Task
            </Button>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default CreateTask;
