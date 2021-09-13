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

const CustomLogin = (props) => {

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
          if(email === user.email1 || email === user.email2 || email === user.email3){
              if(password === user.password1 || password === user.password2 || password === user.password3){
                  alert('Welcome dear user')
              }else{
                  alert("wrong password!")
              }
          }else{
              alert('wrong email!')
          }
          console.log(email)
          setEmail('');
          setPassword('');
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

   <div style={{
       textAlign:'center',
   }}>
   <Link  to="/signup">If you don't have an account click the sign-up link</Link>
   </div>
   </div>
    );
}

export default CustomLogin;
