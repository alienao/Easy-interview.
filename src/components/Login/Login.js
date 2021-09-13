import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    background:{
        backgroundImage:"url(/assest/background.png)",
        backgroundSize:"cover",
        height:900
    },
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

const Login = (props) => {

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
          console.log(email)
          setEmail('');
          setPassword('');
        }

    return (

<Box className = {classes.background}>

<div style={{
    fontSize:35,
    textAlign:'center',
    color:"purple",
    fontFamily:"sans-serif"
}}> LOGO </div>
   <form className={classes.form} noValidate autoComplete="off">
   <TextField
    id="first"
    label="Email-Address"
    variant="filled"
    margin="normal"
    color="secondary"
    value={email}
    onChange ={handelEmail}
  />

  <TextField
    id="second"
    label="Password"
    variant="outlined"
    margin="normal"
    color="secondary"
    type="password"
    value={password}    
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

   <Box style={{
       textAlign:'center',
   }}>
   <Link  to="/signup">If you don't have an account click the sign-up link</Link>
   </Box>
   </Box>
    );
}

export default Login;