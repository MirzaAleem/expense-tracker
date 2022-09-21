import { Box, Button,Container, Divider, Card, CardContent, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React, {useState} from 'react';
import './App.css';
import Transaction from './Components/Transaction';

const data = [] ;
function App() {
  const [trans,setTrans] = useState('');
  const [amount,setAmount] = useState('');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    data.push([trans,amount])
    setTrans('')
    setAmount('')
  }
    
  return (
    <Container>
      <Box>
      <Grid container>

      <Grid item xs={12} sm={12}>
        <Typography variant='h3' textAlign={'center'}>Expense Tracker App</Typography>
      </Grid>

      <Divider></Divider>
      <Grid container spacing={2} marginTop={2}>
      <Grid item xs={12} sm={6}>
      <Box >
        <Card sx={{backgroundColor:'#ffffffa3',height:'80vh'}}>
            <CardContent >
                <Typography variant='h5' sx={{textAlign:'center'}}>Your Balance : 100</Typography>
                <Divider></Divider>               
                  <Card sx={{padding:'10px', margin:'auto',backgroundColor:'#ffffff00'}}>
                  <Grid container spacing={2}>
                  <Grid item sm={12} md={6}>
                  <Typography variant='h5' sx={{color :"green"}}>Income : 200</Typography>
                  </Grid>
                  <Grid item sm={12} md={6}>
                  <Typography variant='h5' sx={{color :"#ad0000"}}>Expense : 50</Typography>
                  </Grid>
                  </Grid>
                  </Card> 
                  <form onSubmit={handleSubmit}>         
                <Box>
                    <TextField label='Enter Transaction' margin='normal'
                    fullWidth value={trans}
                    onChange={(e)=>{setTrans(e.target.value);}}></TextField><br/>
                    <TextField label='Enter Amount' 
                   margin='normal' fullWidth 
                   value={amount}
                    onChange={(e)=>{setAmount(e.target.value);}}></TextField>
                </Box>
                <Box>
                  <RadioGroup>
                  <FormControlLabel value="income" control={<Radio />} label="Income" />
                  <FormControlLabel value="expense" control={<Radio />} label="Expense" />
                  </RadioGroup>
                </Box>
                <Button variant='contained' sx={{marginTop:'20px'}} type='submit'>ENTER</Button>
                </form>
            </CardContent>
        </Card>
        
    </Box>
      </Grid>
      <Grid item xs={12} sm={6}>
         <Box>
        <Card sx={{backgroundColor:'#ffffffa3',height:'80vh'}}>
        <CardContent>
        
        <Typography variant='h5' sx={{textAlign:'center'}}>Transaction Details</Typography>
        <Divider></Divider>
        {
          data.map((value,index)=>{
            return(
              <Transaction
                key={index.toString()}
                id={index}
                val={value}></Transaction>
            )
          })
        }
        </CardContent>
        </Card>
    </Box>
      </Grid>
    </Grid>
      </Grid>

      </Box>
    </Container>
  );
}

export default App;
