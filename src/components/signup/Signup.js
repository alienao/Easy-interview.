import React, { useState } from "react";
import { FormControl, makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Paper } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  paperRoot:{
    backgroundImage:"url(/assests/background.jpeg)",
    backgroundSize:"cover",
    height: window.innerHeight,
    width: window.innerWidth
  },
  root: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
    float:"left",
    marginLeft:"230px"
  },
  form:{
    marginTop:theme.spacing(2.5),
  },
  button: {
    marginTop: theme.spacing(2),
    margin: "0 auto",
    display: "flex",
    color: "#553E93",
    height: "35px",
    width: "140px",
    borderColor: "#553E93",
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mailMessage, setMailMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const emailExpression =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      fname: firstName,
      lname: lastName,
      mail: email,
      pass: password,
    };

    props.userCreatorFunc(user);
  };

  const handelEmail = (e) => {
    if (e.target.value.match(emailExpression)) {
      setEmail(e.target.value);
      setMailMessage("");
    } else {
      setMailMessage("Enter a valid Mail address");
    }
  };
  const handelPassword = (e) => {
    if (e.target.value.length >= 8) {
      setPassword(e.target.value);
      setPasswordMessage("");
    } else {
      setPasswordMessage("Enter characters above 8 elements!!");
    }
  };

  return (
    <Paper className= {classes.paperRoot}>
    <form className={classes.root} onSubmit={handleSubmit}>
      <div
        style={{
          fontSize: 30,
          textAlign: "center",
          color: "#553E93",
          fontFamily: "sans-serif",
        }}
      >
        {" "}
        LOGO{" "}
      </div>
      <FormControl className = {classes.form}>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        vlaue={email}
        onChange={handelEmail}
      />
      <span
        style={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {mailMessage}
      </span>

      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        vlaue={password}
        onChange={handelPassword}
      />
      </FormControl>
      <span
        style={{
          fontWeight: "bold",
          color: "red",
        }}
      >
        {passwordMessage}
      </span>
      <div>
        <Button variant="outlined" className={classes.button} type="submit">
          SIGN UP
        </Button>
      </div>
      <div>
        <p>
          Already have an account.Sign in <Link to="/">here</Link>.
        </p>
      </div>
    </form>
    </Paper>
  );
};

export default Signup;
