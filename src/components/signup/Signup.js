import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}));

const Signup = (props) => {

  const classes = useStyles();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mailMessage,setMailMessage] = useState('');
  const [passwordMessage,setPasswordMessage] = useState('');
  const emailExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      fname:firstName,
      lname:lastName,
      mail:email,
      pass:password
    }
    
    props.userCreatorFunc(user);
  };

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

  return (
      <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        vlaue={email}
        onChange={handelEmail}
        
      /><span style={{
        fontWeight: 'bold',
        color: 'red',
      }}>{mailMessage}</span>

      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        vlaue={password}
        onChange={handelPassword}
      />
      <span style={{
        fontWeight: 'bold',
        color: 'red',
    }}>{passwordMessage}
    </span>
      <div>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </div>
      <div>
        <p>Already have an account.Sign in <Link  to="/">here</Link>.</p>
      </div>
    </form>
  );
};

export default Signup;
