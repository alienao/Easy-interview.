import React, {useState} from 'react';
import {FormControlLabel,Checkbox, TextField,Box } from '@material-ui/core';
import { ClassNames } from '@emotion/react';
import { useStyles } from './styles.js';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { PinDropSharp } from '@material-ui/icons';

const Options = (props) => {

   const [optionText,setOptionText] = useState("");
   const hadnleDeleteClick = () => {
      props.deletenewOption(props.id)
    }

   const handleOptionTextChange = (e) => {
      setOptionText(e.target.value)
      props.passData(optionText)
   }

   const classes = useStyles();
    return(      
     <Box className={classes.root} id = {props.id}>
        <FormControlLabel
          className={classes.checkboxblock}
          value="start"
          control={props.op}
          labelPlacement="start"
        />
        
        <TextField className={classes.optionText}
        id = "text-option"
        label=""
        onChange = {handleOptionTextChange}
        value={props.text}/>
        <DeleteIcon onClick = {hadnleDeleteClick}></DeleteIcon>
     </Box>
        );
        
}

export default Options