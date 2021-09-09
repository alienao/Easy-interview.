import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({

    form:{
        marginTop:theme.spacing(8),
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },
    button:{
        marginTop:theme.spacing(2),
        margin:'0 auto',
        display:'flex'
    }
}))

const CustomLogin = () => {
    const classes = useStyles();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const handelEmail = (e) => {
          setEmail(e.target.value);
        }
      
    const handelPassword = (e) => {
          setPassword(e.target.value);
        }
      
    const handelSubmit = (e) => {
          e.preventDefault();
          console.log(email);
          console.log(password);
        }
    const handelSubmit1 = (e) => {
        e.preventDefault();
    }
      
    return (
<div className = {classes.background}>
<div> Welcome !</div>
   <form className={classes.form} noValidate autoComplete="off">
   <TextField
    id="first"
    label="Email-Address"
    variant="filled"
    margin="normal"
    color="secondary"
    onChange ={handelEmail}
  />
  <TextField
    id="second"
    label="Password"
    variant="outlined"
    margin="normal"
    color="secondary"
    type="password"    
    onChange= {handelPassword}
    />
   </form>
   <Button
   variant="contained"
   className = {classes.button}
   type = "submit"
   color = "primary"
   onClick ={handelSubmit}
   >log in
   </Button>

   <div>
   <Link to="/signup">or sign up</Link>
   </div>
   </div>
    );
}

export default CustomLogin;
