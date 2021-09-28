import React, {useState} from 'react';
import { Box, FormControl, Select,Button,TextareaAutosize,FormControlLabel,Checkbox, TextField, Radio,Icon } from '@material-ui/core';

import { InputLabel } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import {useStyles} from './styles.js'
import Options from './Options/Options.js';


const QuizCreator = (props) => {
    const classes = useStyles();
    
    const [option, setOption] = useState([{id:0,t:""}]);
    const [controlOption,setControlOption] = useState(<Checkbox/>);
    const [count, setCount] = useState(0);
    const [question,setQuestion] = useState("")
    const [text,setText] = useState("")


    const handleClick1 = (e) =>{
        setControlOption(<Checkbox/>)
    }
    const handleClick2 = () => {
        setControlOption(<Radio/>)
    }
    const handleClick3 = () => {
        setControlOption(<div/>) 
    }

    const passData = (t) => {
        setText(t)
    }
    const handleAddClick = (e) =>{

        setOption((prevState)=>{
            return [...prevState,{id:count+1,t:text}]
        })
        setCount((prevState)=>{
            return prevState+1
        })
        return option.id
    }

    const handleDeleteClick = (id) => {
        setOption(option.filter((op) => op.id !== id))
    }

    const handleDulicateButton = () => {
        props.duplicate()
    }

    const handleQuestion = (e) => {
        setQuestion(e.target.value)
        console.log(e.target.value)
    }
    return(
        <div className={classes.box}>
            <TextareaAutosize 
            className={classes.quizText} 
            placeholder="Question" 
            minRows = "4"
            value={question}
            onChange={handleQuestion}/>
            <FormControl className={classes.formControl}>
                <InputLabel > Select-Option</InputLabel>
                <Select
                >
                    <MenuItem> <Button id={345} onClick={handleClick1}>Checkbox</Button> </MenuItem>
                    <MenuItem> <Button id= {456} onClick={handleClick2}>Radio Button </Button> </MenuItem>
                    <MenuItem> <Button id= {678} onClick={handleClick3} >DropDown</Button> </MenuItem> 
                </Select>
            </FormControl>
                {
                option.map(node => <Options op={controlOption}  deletenewOption = {handleDeleteClick} id = {node.id} passData = {passData} t = {text} /> )
                }       
            <Button className = {classes.button}  onClick = {handleAddClick}>Add option</Button>
            <Button className = {classes.duplicateButton} onClick = {handleDulicateButton}>Duplicate Question</Button>          
        </div>
    );
}

export default QuizCreator;