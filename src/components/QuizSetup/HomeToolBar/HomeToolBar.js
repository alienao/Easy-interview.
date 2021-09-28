
import React, {useState} from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import './styles.css'

const HomeToolBar = (props) => {
    const handleClick = () =>{
        props.duplicate()
    }
    return(
    <AppBar style={{backgroundColor:"#553E93"}}>
        <Toolbar> <Button color = "inherit">Save-Quiz</Button> 
        <Button onClick = {handleClick} color = "inherit"> deuplicate</Button></Toolbar>
    </AppBar>
    );
}

export default HomeToolBar;
 
