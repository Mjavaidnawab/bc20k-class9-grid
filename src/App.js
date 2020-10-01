import React from 'react';
import Grid from '@material-ui/core/Grid';
import './App.css';
import { Button, Icon, makeStyles } from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
  button: {
    margin: theme.spacing(1),
  },
}));

function App() {
  return (
    <div >
        <h1>PIAIC Boot Camp 2020 - Class 09  Material UI : Grids         </h1>
        <h2> Student : Muhammad Javaid Nawab </h2>
        <Grid container spacing = {3}> 
        <Grid item xs ={12}>
          Heading 1
        </Grid>
        <Grid item xs ={6}>
          Heading 2
        </Grid>
        <Grid item xs ={6}>
          Heading 3
        </Grid>
        <Grid item xs ={2} style ={{ backgroundColor:"red" }}>
          Heading 4
        </Grid>
        <Grid item xs ={8} style ={{ backgroundColor:"orange" }}>
          Heading 5
        </Grid>
        <Grid item xs ={2} style ={{ backgroundColor:"grey" }}>
          Heading 6
        </Grid>
         </Grid>

        
    </div>
  );
}

export default App;
