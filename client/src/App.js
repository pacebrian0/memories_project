import React from "react";
import {Container, Grow, Grid} from '@mui/material';
import {useDispatch} from 'react-redux';
import { getPosts } from "./actions/posts";
import memories from './images/memories.png';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import {StyledAppBar, StyledHeading, StyledImage, StyledMainContainer} from "./styles";
import { useState, useEffect } from 'react';

const App = () => {
    const [currentId,setCurrentId] = useState(null);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    },[currentId,dispatch]);

    return (
        <Container maxwidth='lg'>
            <StyledAppBar position="static" color="inherit">
                <StyledHeading variant="h2" align="center">Memories</StyledHeading>
                <StyledImage src={memories} alt="memories" height="60" width="60"/>
            </StyledAppBar>
            <Grow in>
                <Container>
                    <StyledMainContainer container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts setCurrentId={setCurrentId} />
                            <div>hello</div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>

                    </StyledMainContainer>
                </Container>
            </Grow>
        </Container>
    );

};
export default App;