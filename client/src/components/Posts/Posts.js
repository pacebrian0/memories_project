import React from 'react'
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { StyledMainContainer, StyledSmMargin, StyledActionDiv } from './styles';
import { Grid, CircularProgress } from '@mui/material';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
  return (
    !posts.length ? <CircularProgress />
    : (
      <StyledMainContainer container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            
            <Grid key={post._id} item xs={12} sm={6} >
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid>
          ))}
      </StyledMainContainer>
    )
  )
}

export default Posts;