import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
const SearchExercise = () => {
return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
    <Typography fontWeight={700} sx={{ fontSize: { lg: '20px', xs: '30px' } }} mb="49px" textAlign="center" mt="80px">
    Strength does not come from the body alone; <br/>
    it also emanates from the resilience of the mind and the persistence of the spirit <br /> 
    </Typography>
    <Box position="relative" mb="72px">
        <TextField
        height="76px"
        sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
        
        placeholder="Search Exercises"
        type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} >
        Search
        </Button>
    </Box>
    </Stack>
)
}

export default SearchExercise;