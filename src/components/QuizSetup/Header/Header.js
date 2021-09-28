import React, {useState} from 'react';
import { TextField } from '@material-ui/core';
import { FormControl } from '@material-ui/core';
import {useStyles} from './styles.js'

const Header = () => {
  const classes = useStyles();
  return(
     <FormControl className = {classes.form}>
      <TextField 
       className={classes.quizName}
       id = "quiz-name"
       label="Enter Quiz Name"
       size='medium'
       multiline={true}
       inputProps={ {style: {height:"30px", fontSize: 20}}}
       defaultValue="Sample-Quiz-Name"
       margin="fullWidth"
       maxRows ={4}

      />
      <TextField
       className={classes.quizDesc}
       id = "quiz-description"
       label="Enter your description"
       />
    </FormControl>
    )
}

export default Header;