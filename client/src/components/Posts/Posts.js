import React from 'react'
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { StyledMainContainer, StyledSmMargin, StyledActionDiv } from './styles';


const Posts = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
  return (
    <Post />
  )
}

export default Posts;