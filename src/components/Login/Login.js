import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: "url(/background.jpeg)",
    backgroundSize: "cover",
    height: window.innerHeight,
    width: window.innerWidth,
  },
  loginElements: {
    float: "left",
    marginLeft: "260px",
    marginTop: "250px",
  },
  logo: {
    fontSize: 30,
    textAlign: "center",
    color: "#553E93",
    fontFamily: "sans-serif",
  },
  form: {
    marginTop: theme.spacing(2.5),
    display: "flex",
    flexDirection: "column",
    //alignItems:'center',
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
  signupLink: {
    textAlign: "center",
    marginTop: theme.spacing(2.5),
  },
}));

const Login = (props) => {
  const classes = useStyles();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const handelEmail = (e) => {
    setEmail(e.target.value);
  };

  const handelPassword = (e) => {
    setPassword(e.target.value);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(email);
    setEmail("");
    setPassword("");
  };

  return (
    <Paper className={classes.background}>
      <Box className={classes.loginElements}>
        <Box className={classes.logo} style={{}}>
          {" "}
          LOGO
        </Box>

        <FormControl className={classes.form}>
          <TextField
            id="first"
            label="Email-Address"
            variant="filled"
            margin="normal"
            color="#553E93"
            value={email}
            onChange={handelEmail}
          />

          <TextField
            id="second"
            label="Password"
            variant="outlined"
            margin="normal"
            color="#553E93"
            type={visible ? "text" : "password"}
            value={password}
            onChange={handelPassword}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={toggleVisibility}>
                    {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </FormControl>

        <Button
          variant="outlined"
          className={classes.button}
          type="submit"
          onClick={handelSubmit}
        >
          SIGN IN
        </Button>

        <Box className={classes.signupLink}>
          Don't have an account. Create account
          <Link to="/signup"> here</Link> .
        </Box>
      </Box>
    </Paper>
  );
};

export default Login;
