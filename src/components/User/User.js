import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Paper from '@material-ui/core/Paper';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import BootstrapDialog from '@mui/material/Dialog';
import styles from './User.module.css';
import names from "../../json/names.json";

const User = () => {
  const [open, setOpen] = useState(true);

  const handleStart = () => {
    setOpen(false);
  };
  return (
    <Paper>
      <BootstrapDialog open={open} aria-labelledby="customized-dialog-title">
        <DialogContent dividers>
          <FormControl>
            <TextField
              id="first"
              label="name"
              variant="filled"
              margin="normal"
              color="#553E93"
            />

            <TextField
              id="first"
              label="lastName"
              variant="filled"
              margin="normal"
              color="#553E93"
            />
          </FormControl>
        </DialogContent>
        <Button
        style={{backgroundColor: 'rgb(140, 124, 182)', color: 'white'}}
        className={styles.buttonPurple}
        autoFocus 
        onClick={handleStart}
        >
         {names.UserStart}
        </Button>
      </BootstrapDialog>
    </Paper>
  );
};

export default User;