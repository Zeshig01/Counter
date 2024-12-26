import { Box, Button, Container, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/Slices/Slice';

function Counter() {
    const count =useSelector((state)=>state.counter.value)
    const dispatch=useDispatch();
  return (
    <div>
        <Box sx={{
            background:"#64748b",
            paddingTop:4,
            color:"white", 
            borderRadius:2,
            paddingBottom:4,
            display:'flex',
            alignItems:'center',
            justifyContent:'center'
        }}>
            <Typography variant='h2'>Redux Counter app</Typography>
        </Box>
        <Container
        sx={{
            minHeight:'500px',
            
            display:'flex', 
            alignItems:'center', 
            justifyContent:'center',
            flexDirection:'column',
        }}>
            <Box sx={{
                display:'flex',
                gap:3
            }}>
                <Button onClick={()=>dispatch(decrement())}>
                Decrease by ones
            </Button>
            <Typography variant='h5'>{count}</Typography>
            <Button onClick={()=>dispatch(increment())}>
                Increse by ones
            </Button>
            
            </Box>
            
        </Container>
        
    </div>

  )
}

export default Counter