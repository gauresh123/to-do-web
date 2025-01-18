import React, { useState } from "react";
import { Dialog, DialogTitle } from "@mui/material";

function Comments({ open, handleClose }) {
  return (
    <Dialog open={open} onClose={handleClose}>
      <div className="flex justify-between items-center">
        <DialogTitle>Comments</DialogTitle>
      </div>
    </Dialog>
  );
}

export default Comments;
