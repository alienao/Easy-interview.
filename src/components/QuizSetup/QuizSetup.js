import React, {useState} from 'react';
import Header from "./Header/Header"
import { makeStyles } from '@material-ui/core/styles';
import QuizCreator from './QuizCreator/QuizCreator';
import HomeToolBar from './HomeToolBar/HomeToolBar'
import { height } from '@mui/system';
import { Translate } from '@material-ui/icons';
import Box from '@material-ui/core/Box' 
import Options from './QuizCreator/Options/Options';


const useStyles = makeStyles((theme)=>({
    root:{
        height:window.innerHeight,
        width:window.innerWidth,
        position:"relative",
    },
    quiz:{
        marginLeft: "-225px",
    }

}))

const QuizSetup = () => {
    const classes = useStyles();
    const [count,setCount] = useState(0)
    const [quizes,setQuizes] = useState([{id:0, value: <QuizCreator/>}])
    
    const handleClick = () =>{
        let x = quizes[count].value
        setQuizes([...quizes,{id: count +1 , value: quizes[count].value}])
    }
    console.log(<QuizCreator/>)
    return(
    <div className={classes.root}>
    <HomeToolBar duplicate = {handleClick}/>
    <Box className = {classes.quiz}>
    <Header/>
    {
        quizes.map(node => node.value)
    }
    </Box>
   </div>
    )
}


export default QuizSetup;