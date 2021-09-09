import React, {useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import ModalDialog from '../signup/ModalDialog/ModalDialog';
import { blue } from '@material-ui/core/colors';
import { mergeClasses } from '@material-ui/styles';
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
    const [mailMessage,setMailMessage] = useState('');
    const [passwordMessage,setPasswordMessage] = useState('');
    const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const handelEmail = (e) => {

        if(e.target.value.match(emailExpression)){
            setEmail(e.target.value);
            setMailMessage('');
        }else{
            setMailMessage('Enter a valid Mail address');
        }

     }
      
    const handelPassword = (e) => {
        if(e.target.value.length >= 8){
            setPassword(e.target.value);
            setPasswordMessage('');
        }else{
            setPasswordMessage('Enter characters above 8 elements!!')
        }
    }
      
    const handelSubmit = (e) => {
          e.preventDefault();
          console.log(email);
          console.log(password);
        }
      
    return (
<div className = {classes.background}>
<div style={{
    fontSize:35,
    textAlign:'center',
    color:"blue",
}}> Welcome !</div>
   <form className={classes.form} noValidate autoComplete="off">
   <TextField
    id="first"
    label="Email-Address"
    variant="filled"
    margin="normal"
    color="secondary"
    onChange ={handelEmail}
  />
  <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{mailMessage}</span>
  <TextField
    id="second"
    label="Password"
    variant="outlined"
    margin="normal"
    color="secondary"
    type="password"    
    onChange= {handelPassword}
    />
    <span style={{
        fontWeight: 'bold',
        color: 'red',
    }}>{passwordMessage}
    </span>
   </form>
   <Button
   variant="contained"
   className = {classes.button}
   type = "submit"
   color = "primary"
   onClick ={handelSubmit}
   >log in
   </Button>

   <div style={{
       textAlign:'center',
   }}>
   <Link  to="/signup">If you don't have an account click the sign-up link</Link>
   </div>
   </div>
    );
}

export default CustomLogin;
