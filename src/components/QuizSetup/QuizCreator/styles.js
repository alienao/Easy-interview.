

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    box:{
      width:"600px",
      marginLeft:"40%"
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginLeft:"20%"
    },
    quizText:{
      width:'300px',
      marginTop:"20px"
    },


  }));

export { useStyles };
