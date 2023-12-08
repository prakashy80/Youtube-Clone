import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import {useParams} from 'react-router-dom';
import { Videos } from './';
import { fetchFromAPI } from '../utils/fetchFromAPI';


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();
  useEffect(() => {
    // const data=fetchFormAPI(`search?part=snippet&q=${selectedCategory}`) we cannot write like this because it is an async function
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
  }, [searchTerm]);
  return (
    <Box p={2} sx={{
      overflowY: 'auto',
      height: '90vh',
      flex: 2,
      marginLeft:'110px'
    }}>
      <Typography variant='h4' fontWeight='bold' mb={2} sx={{
        color: '#fff'
      }}>Search Results for: <span style={{ color: '#F31503' }}>{searchTerm}</span></Typography>
      <Videos videos={videos} />
    </Box>
  )
}

export default SearchFeed

