import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';
import FormControl from '@material-ui/core/FormControl';
import Paper from "@material-ui/core/Paper";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const useStyles = makeStyles((theme)=>({
    root:{
        height:"900%",
        width:"900%",
        position:"fixed"
    },
    rightBoard:{
        backgroundColor:"#ac9ccb",
        height:"811px",
        width:"200px",
        position:"fixed"
    },
    circulPlus:{
        backgroundColor:"#ac9ccb",
        height: "65px",
        width: "65px",
        borderRadius:"50%",
        position: "relative",
        marginLeft:"1300px",
        marginTop:"700px"
    }
}))

const Dashboard = () => {
    const classes = useStyles();
    return(
    <Paper className={classes.root}>  
         <Box className = {classes.rightBoard}>
           <Box className = {classes.circulPlus}>
           </Box> 
        </Box>
    </Paper>
    )
}

export default Dashboard;